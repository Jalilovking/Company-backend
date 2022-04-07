const model = require('./model')

module.exports = {
    Query: {
        monthly: async(_, { complex_id, room_number, years }) => {
            return await model.getMonthly(complex_id, room_number, years)
        }
    }
}