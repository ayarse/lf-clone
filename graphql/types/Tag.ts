import { extendType, nonNull, objectType, stringArg } from "nexus"

export const Tag = objectType({
    name: 'Tag',
    definition(t) {
        t.nonNull.int('id')
        t.string('name')
        t.nullable.list.field('lotties', {
            type: 'Lottie',
            // eslint-disable-next-line
            resolve(_parent, _args, ctx): any {
                return ctx.prisma.lottie.findMany(
                    {
                        where: {
                            tagId: _parent.id,
                        }
                    }
                )
            }
        })
    }
})


export const TagQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('tags', {
            type: 'Tag',
            args: {
                name: nonNull(stringArg())
            },
            // eslint-disable-next-line
            async resolve(_parent, args, ctx): Promise<any> {
                return await ctx.prisma.tag.findFirst(
                    {
                        where: {
                            name: {
                                equals: args.name
                            }
                        }
                    }
                )
            }
        })
    }
})