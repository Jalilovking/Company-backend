const { gql } = require('apollo-server')

module.exports = gql`
    type Monthly{
        payment: Int!
    }

    extend type Query {
        monthly(complex_id: String, room_number: String years: String): [Monthly]!
    }
    
`