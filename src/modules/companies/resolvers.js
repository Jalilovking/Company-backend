const model = require('./model')

module.exports = {
    Query: {
        companies: async() => {
            return await model.getCompanies()
        }
    },
    Mutation: {
        addCompany: async(_, { company_name }) => {
            const addCompany = await model.addCompany(company_name)
            return addCompany
        }
    },

    Companies: {
        id: global => global.company_id,
        name: global => global.company_name
    }
}