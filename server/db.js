const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "man",
  host: "localhost",
  port: 5432,
  database: "mybase"
});

module.exports = pool;

// {
//   "model":"audi",
//     "country":"japan",
//     "device":"ECUP",
//     "oem": "8885246",
//     "count_ebay":2,
//     "price_ebay": 10.20,
//     "price_store": 9.01,
//     "count_store":"1",
//     "link":"http",
//     "image":"11.jpg"
// }
