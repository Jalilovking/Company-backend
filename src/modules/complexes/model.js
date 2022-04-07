const { fetchAll, fetch } = require('../../lib/postgres')

const COMPLEXES = `
    SELECT
        *
    FROM
        complexes
    WHERE
        company_id = $1
`

const ADD_COMPLEX = `
    INSERT INTO
        complexes(complex_name, complex_price, complex_2, complex_3, complex_4, company_id)
    VALUES
        ($1, $2, $3, $4, $5, $6)
`


const getComplexes = (company_id) => fetchAll(COMPLEXES, company_id)
const addComplex = (complex_name, complex_price, complex_2, complex_3, complex_4, company_id) => fetch(ADD_COMPLEX, complex_name, complex_price, complex_2, complex_3, complex_4, company_id)

module.exports = {
    getComplexes,
    addComplex
}