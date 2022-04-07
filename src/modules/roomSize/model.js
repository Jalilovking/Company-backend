const { fetchAll, fetch } = require('../../lib/postgres')

const ROOMSIZE = `
    SELECT roomSize($1, $2)
`

const getRoomSize = (room_number, complex_id) => fetchAll(ROOMSIZE, room_number, complex_id)


module.exports = {
    getRoomSize
}
