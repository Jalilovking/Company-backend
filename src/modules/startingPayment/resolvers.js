const model = require('./model')

module.exports = {
    Query: {
        startingPayment: async(_, { complex_id, room_number }) => {
            return await model.getStartingPayment(complex_id, room_number)
        }
    }
}