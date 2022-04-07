const model = require('./model')

module.exports = {
    Query: {
        bank: async(_, { complex_id, room_number }) => {
            return await model.getBank(complex_id, room_number)
        }
    }
}