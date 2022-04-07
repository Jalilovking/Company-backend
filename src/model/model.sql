CREATE TABLE companies(
    company_id serial PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL
);

CREATE TABLE complexes(
    complex_id serial PRIMARY KEY,
    complex_name VARCHAR(100) NOT NULL,
    complex_price INT NOT NULL,
    complex_2 INT NOT NULL,
    complex_3 INT NOT NULL,
    complex_4 INT NOT NULL,
    company_id INT REFERENCES companies(company_id)
);

CREATE TABLE banks(
    bank_id serial PRIMARY KEY,
    bank_name VARCHAR(100) NOT NULL,
    bank_summa VARCHAR(100) NOT NULL,
    procent INT NOT NULL
);

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);


CREATE OR REPLACE FUNCTION roomSize(room int, complexID int)
RETURNS int
LANGUAGE plpgsql
AS
$$
DECLARE room_num int;
BEGIN

    if
        room = 2
    THEN 
        room_num = (select complex_2 from complexes where complex_id = complexID);
    ELSIF 
        room = 3
    THEN 
        room_num = (select complex_3 from complexes where complex_id = complexID);
    ELSIF 
        room = 4
    THEN 
        room_num = (select complex_4 from complexes where complex_id = complexID);
    END IF;

    RETURN room_num as roomSize;
END;
$$


-- house price
CREATE OR REPLACE FUNCTION housePrice(complexId int, room int)
RETURNS BIGINT
LANGUAGE plpgsql
AS
$$
DECLARE summa bigint;
BEGIN

    summa = (select roomSize(room, complexId)) * (select complex_price from complexes where complex_id = complexId);
    RETURN summa as total_price;
END;
$$




CREATE OR REPLACE FUNCTION startingPayment(complex_id int, room int)
RETURNS FLOAT
LANGUAGE plpgsql
AS
$$
DECLARE payment FLOAT;
BEGIN

    payment = ((select housePrice(complex_id, room)) * (select procent from banks group by procent having min(REPLACE(bank_summa, ',', '')::bigint) > (select housePrice(complex_id, room)) limit 1 )) / 100;

    RETURN payment as firstPayment;
END;
$$


CREATE OR REPLACE FUNCTION monthly(complex_id int, room int, years int)
RETURNS BIGINT
LANGUAGE plpgsql
AS
$$
DECLARE payment BIGINT;
BEGIN

    payment = ((select housePrice(complex_id, room)) - (select startingPayment(complex_id, room))) / (years * 12);

    RETURN payment;

END;
$$