const { fetchAll, fetch } = require('../../lib/postgres')

const BANK = `
    SELECT 
        bank_id AS id,
        bank_name AS name,
        bank_summa As summa,
        procent
    FROM 
        banks 
    WHERE 
        bank_summa = (
            SELECT 
                bank_summa 
            FROM 
                banks
            GROUP BY 
                bank_summa
            HAVING 
                MIN(REPLACE(bank_summa, ',', '')::bigint) > (select housePrice($1, $2))
            LIMIT 
                1
        )
`


const getBank = (complex_id, room_number) => fetchAll(BANK, complex_id, room_number)

module.exports = {
    getBank
}



