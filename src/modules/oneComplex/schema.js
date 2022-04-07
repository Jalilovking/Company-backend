const { gql } = require('apollo-server')

module.exports = gql`
    type OneComplex{
        id: ID
        name: String
        price: Int
        two: Int
        three: Int
        four: Int
    }

    extend type Query {
        oneComplex(complex_id: String): [OneComplex]!
    }
`