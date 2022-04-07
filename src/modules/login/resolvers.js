const model = require('./model')
const { signUser, verifyUser } = require('../../lib/jwt')

module.exports = {
    Mutation: {
        login: async(_, { user_name, password }) => {
            // console.log(user_name)
            const user = await model.login(user_name, password)
            // console.log(user.user_id)
            const token = signUser(user.user_id)
            return {
                token,
                user
            }
        }
    }
}