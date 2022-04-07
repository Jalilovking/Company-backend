const { fetchAll, fetch } = require('../../lib/postgres')

const ROOMS = `
    SELECT 
        complex_id,
        complex_name,
        complex_price,
        CASE
            WHEN $1 = 2::DECIMAL THEN complex_2
            WHEN $1 = 3::DECIMAL THEN complex_3
            WHEN $1 = 4::DECIMAL THEN complex_4
        END
        as room
    FROM 
        complexes  
    WHERE
        company_id = $2  
`

const ONECOMPLEX = `
    SELECT
        *
    FROM
        complexes
    WHERE
        complex_id = $1
`

const getOneComplex = (complex_id) => fetchAll(ONECOMPLEX, complex_id)

const getRoom = (room, company_id) => fetch(ROOMS, room, company_id)

module.exports = {
    getOneComplex
}