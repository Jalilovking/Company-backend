const { gql } = require('apollo-server')

module.exports = gql`
    type Bank{
        id: ID!
        name: String!
        summa: String!
        procent: Int!
    }

    extend type Query {
        bank(complex_id: String, room_number: String): [Bank]!
    }
    
`