const { fetchAll, fetch } = require('../../lib/postgres')

const COMPANIES = `
    SELECT 
        *
    FROM
        companies
`



const ADD_COMPANY = `
    INSERT INTO
        companies(company_name)
    VALUES($1)
`

const getCompanies = () => fetchAll(COMPANIES)
const addCompany = (company_name) => fetch(ADD_COMPANY, company_name)

module.exports = {
    getCompanies,
    addCompany
}