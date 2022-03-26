import { extendType, objectType } from 'nexus'
import { User } from './User'

export const Lottie = objectType({
    name: 'Lottie',
    definition(t) {
        t.string('id')
        t.string('title')
        t.string('assetUrl')
        t.string('title')
        t.string('description')
        t.string('assetUrl')
        t.string('downloads')
        t.string('likes')
        t.field('user', {
            type: User,
            async resolve(_parent, _args, ctx) {
                return await ctx.prisma.user.findUnique({
                    where: {
                        id: parseInt(_parent?.id ?? "0")
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
            resolve(_parent, _args, ctx) {
                return ctx.prisma.lottie.findMany()
            }
        })
    }
})