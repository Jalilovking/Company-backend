const { gql } = require('apollo-server')

module.exports = gql`
    type Companies {
        id: ID!
        name: String!
    }

    type Query {
        companies: [Companies]!
    }

    type Mutation{
        addCompany(company_name: String!): Companies
    }

`