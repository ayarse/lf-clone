import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus'
import { User } from './User'
import * as fs from 'fs';
import { join } from 'path';


export const Lottie = objectType({
    name: 'Lottie',
    definition(t) {
        t.nonNull.int('id')
        t.string('title')
        t.string('assetUrl')
        t.string('title')
        t.string('description')
        t.string('assetUrl')
        t.string('downloads')
        t.string('likes')
        t.date('createdAt')
        t.nonNull.int('userId')
        t.field('user', {
            type: User,
            // eslint-disable-next-line
            resolve(_parent, _args, ctx): Promise<any> {
                return ctx.prisma.user.findFirst({
                    where: {
                        id: _parent.userId
                    }
                })
            }
        })
    }

})

export const LottieQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('lotties', {
            type: 'Lottie',
            args: {
                page: intArg({ default: 1 }),
                sortBy: stringArg({ default: 'createdAt' }),
                sortOrder: stringArg({ default: "desc" })
            },
            // eslint-disable-next-line
            resolve(_parent, args, ctx): any {
                return ctx.prisma.lottie.findMany(
                    {
                        skip: args.page ?? 1 > 1 ? (args.page ?? 1) * 16 - 16 : 0,
                        take: 16,
                        orderBy: {
                            [args.sortBy ?? "createdAt"]: args.sortOrder ?? "desc"
                        }
                    }
                )
            }
        })
    }
})

export const LottieSearchQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('search', {
            type: 'Lottie',
            args: {
                query: nonNull(stringArg())
            },
            // eslint-disable-next-line
            async resolve(parent, args, ctx): Promise<any> {
                return await ctx.prisma.lottie.findMany({
                    where: {
                        title: {
                            mode: 'insensitive',
                            contains: args.query
                        }
                    }
                })
            }
        })
    }
})

export const UploadNewLottie = objectType({
    name: 'UploadNewLottie',
    definition(t) {
        t.string("title")
        t.nullable.string("description")
        t.string("assetUrl")
        t.int("userId")
    }
})

export const NewLottieMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field("createLottie", {
            type: 'UploadNewLottie',
            args: {
                title: nonNull(stringArg()),
                description: stringArg(),
                assetUrl: stringArg(),
                userId: intArg({ default: 1 }),
                file: nonNull(stringArg()),
                fileName: nonNull(stringArg())
            },
            resolve(parent, args, ctx) {
                const urlPath = join("uploads", args.fileName)
                const assetPath = join(process.cwd(), "public", urlPath)
                const data = Buffer.from(args.file, 'base64')
                fs.writeFileSync(assetPath, data)
                return ctx.prisma.lottie.create({
                    data: {
                        title: args.title ?? "Untitled",
                        description: args.description,
                        assetUrl: urlPath,
                        user: {
                            connect: {
                                id: args.userId ?? 1
                            }
                        },
                        likes: 0,
                        downloads: 0
                    }
                })
            }
        })
    }
})