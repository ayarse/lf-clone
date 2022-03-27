import { extendType, objectType } from "nexus"

export const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id')
        t.string('name')
        t.nullable.string('avatar')
        t.nullable.list.field('lotties', {
            type: 'Lottie',
            // eslint-disable-next-line
            resolve(_parent, _args, ctx): any {
                return ctx.prisma.lottie.findMany(
                    {
                        where: {
                            userId: _parent.id,
                        }
                    }
                )
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