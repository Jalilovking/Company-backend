const { gql } = require('apollo-server')

module.exports = gql`
    type Complexes{
        id: ID!
        name: String!
        price: Int!
        two: Int
        three: Int
        four: Int
    }

    extend type Query {
        complexes(company_id: String): [Complexes]!
    }
    
    extend type Mutation {
        addComplex(complex_name: String! complex_price: Int! complex_2: Int! complex_3: Int! complex_4: Int! company_id: Int!): Complexes
    }
`