const { fetchAll, fetch } = require('../../lib/postgres')


const MONTHLY = `
    SELECT monthly($1, $2, $3) as payment
`

const getMonthly = (complex_id, room_number, years) => fetchAll(MONTHLY, complex_id, room_number, years)

module.exports = {
    getMonthly
}