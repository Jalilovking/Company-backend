const model = require('./model')

module.exports = {
    Query: {
        complexes: async(_, { company_id }) => {
            const arr = []
            
            if(company_id == 0){
                return arr
            }else{
                return await model.getComplexes(company_id)
            }
        }
    },
    Mutation: {
        addComplex: async(_, { complex_name, complex_price, complex_2, complex_3, complex_4, company_id }) => {
            const addComplex = await model.addComplex(complex_name, complex_price, complex_2, complex_3, complex_4, company_id)
            return addComplex
        }
    },

    Complexes: {
        id: global => global.complex_id,
        name: global => global.complex_name,
        price: global => global.complex_price,
        two: global => global.complex_2,
        three: global => global.complex_3,
        four: global => global.complex_4
    }
}