// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'
const apolloServer = new ApolloServer({ schema, context: createContext })

const startServer = apolloServer.start()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://studio.apollographql.com'
    )
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )

    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer

    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}

export const config = {
    api: {
        bodyParser: false
    }
}