import { extendType, objectType } from 'nexus'
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
        t.field('user', {
            type: User,
            async resolve(_parent, _args, ctx) {
                return await ctx.prisma.user.findUnique({
                    where: {
                        id: _parent.id
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