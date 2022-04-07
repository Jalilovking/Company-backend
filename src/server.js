const { ApolloServer } = require('apollo-server')

const modules = require('./modules')
const { getUserId } = require('./utils')

const server = new ApolloServer({
    modules,
    context: ({req}) => {
        return {
            ...req,
            user_id:
                req && req.headers.authorization
                    ? getUserId(req)
                    : null
        }
    }
})

server.listen({ port: process.env.PORT || 7000 }, () => {
    console.log('http://localhost:7000' + server.graphqlPath)
    console.log('ws://localhost:7000' + server.subscriptionsPath)
})