CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
CREATE DATABASE work;
CREATE TABLE ebaytab(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    model VARCHAR(50),
    country VARCHAR(50),
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count_ebay INTEGER,
    price_ebay DECIMAL(8,2),
    price_store DECIMAL(8,2),
    count_store VARCHAR(10),
    link VARCHAR(300),
    image VARCHAR(300)
);
CREATE DATABASE first;
CREATE TABLE device(
    id SERIAL PRIMARY KEY,
    model VARCHAR(255),
    country VARCHAR(255),
    device VARCHAR(255),
    oem_number VARCHAR(255) NOT NULL,
    count_ebay INTEGER DEFAULT 0,
    price_ebay DECIMAL(8,2),
    price_store DECIMAL(8,2),
    count_store INTEGER DEFAULT 0,
    link_adr VARCHAR(255),
    image_id VARCHAR(255)
);
