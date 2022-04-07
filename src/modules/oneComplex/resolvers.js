const model = require('./model')

module.exports = {
    Query: {
        oneComplex: async(_, { complex_id }) => {
            const arr = []
            if(complex_id == 0){
                return arr
            }else{
                console.log(complex_id)
                return await model.getOneComplex(complex_id)
            }
        }
    },
    OneComplex: {
        id: global => global.complex_id,
        name: global => global.complex_name,
        price: global => global.complex_price,
        two: global => global.complex_2,
        three: global => global.complex_3,
        four: global => global.complex_4
    }
}
