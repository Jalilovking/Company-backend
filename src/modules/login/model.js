const { fetchAll, fetch } = require('../../lib/postgres')

const LOGIN = `
    SELECT
        *
    FROM
        users
    WHERE
        user_name = $1
    AND
        password = $2
`

const login = (user_name, password) => fetch(LOGIN, user_name, password)

module.exports = {
    login
}