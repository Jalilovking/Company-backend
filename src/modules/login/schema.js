const { gql } = require('apollo-server')

module.exports = gql`

    type Login{
        token: String
        user: User
    }
    extend type Mutation{
        login(user_name: String! password: String!): Login
    }

    type User{
        user_id: ID!
        user_name: String!
        password: String!
    }
`