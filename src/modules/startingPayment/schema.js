const { gql } = require('apollo-server')

module.exports = gql`
    type StartingPayment{
        payment: Int!
    }

    extend type Query {
        startingPayment(complex_id: String, room_number: String): [StartingPayment]!
    }
    
`