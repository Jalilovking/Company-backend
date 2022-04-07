const { fetchAll, fetch } = require('../../lib/postgres')


const STARTINGPAYMENT = `
    SELECT startingPayment($1, $2) as payment
`

const getStartingPayment = (complex_id, room_number) => fetchAll(STARTINGPAYMENT, complex_id, room_number)

module.exports = {
    getStartingPayment
}