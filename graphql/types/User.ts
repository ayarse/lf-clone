import { extendType, objectType } from "nexus"

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('name')
        t.string('avatar')
        t.field('lotties', {
            type: 'Lottie',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.lottie.findMany()
            }
        })
    }
})


export const UserQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('users', {
            type: 'User',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.user.findMany()
            }
        })
    }
})