-- CREATE DATABASE perntodo;
--
-- CREATE TABLE todo(
--   todo_id SERIAL PRIMARY KEY,
--   description VARCHAR(255)
-- );
-- CREATE DATABASE work;
-- CREATE TABLE ebaytab(
--     id BIGSERIAL PRIMARY KEY NOT NULL,
--     model VARCHAR(50),
--     country VARCHAR(50),
--     device VARCHAR(170) NOT NULL,
--     oem VARCHAR(100) NOT NULL,
--     count_ebay INTEGER,
--     price_ebay DECIMAL(8,2),
--     price_store DECIMAL(8,2),
--     count_store VARCHAR(10),
--     link VARCHAR(300),
--     image VARCHAR(300)
-- );
-- CREATE DATABASE mydb;
-- CREATE TABLE device(
--         id SERIAL PRIMARY KEY,
--         model VARCHAR(50),
--         country VARCHAR(50),
--         device VARCHAR(170) NOT NULL,
--         oem VARCHAR(100) NOT NULL,
--         count_ebay INTEGER,
--         price_ebay DECIMAL(8,2),
--         price_store DECIMAL(8,2),
--         count_store VARCHAR(10),
--         link VARCHAR(300),
--         image VARCHAR(300)
-- );
CREATE DATABASE mybase;
CREATE TABLE device(
        id SERIAL PRIMARY KEY,
        model VARCHAR(50),
        country VARCHAR(50)
--         device VARCHAR(170) NOT NULL,
--         oem VARCHAR(100) NOT NULL,
--         count_ebay INTEGER,
--         price_ebay DECIMAL(8,2),
--         price_store DECIMAL(8,2),
--         count_store VARCHAR(10),
--         link VARCHAR(300),
--         image VARCHAR(300)
);

--     model VARCHAR(255),
--     country VARCHAR(255),
--     device VARCHAR(255),
--     oem_number VARCHAR(255) NOT NULL,
--     count_ebay INTEGER DEFAULT 0,
--     price_ebay DECIMAL(8,2),
--     price_store DECIMAL(8,2),
--     count_store INTEGER DEFAULT 0,
--     link_adr VARCHAR(255),
--     image_id VARCHAR(255)
-- );
-- INSERT INTO device (model,country,device,oem,count_ebay,price_ebay,price_store,count_store,link,image) VALUES ('Mini','Japan','Маховик','89940-50012',1,28,28,1,'https://www.ebay.de/sch/i.html?_from=R40&_nkw=89740-50080&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4','1.jpg');

-- INSERT INTO device (Model,Country,Device,oem_number,Count_eBay,Price_eBay,Price_store,Count_store,link_adr,image_id) VALUES ('Mini','Japan','Маховик','89940-50012',1,28,28,1,'https://www.ebay.de/sch/i.html?_from=R40&_nkw=89740-50080&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4','1.jpg');
