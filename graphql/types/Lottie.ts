import { extendType, nonNull, objectType, stringArg } from 'nexus'
import { User } from './User'


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
            // eslint-disable-next-line
            resolve(_parent, _args, ctx): any {
                return ctx.prisma.lottie.findMany()
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