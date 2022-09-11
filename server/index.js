const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
app.get('/',(req, res)=>{
    res.send('my text + NODEJS!!')
})

//create a todo_ "/todos"

app.post("/device", async (req, res) => {
  try {
    // const { description } = req.body;
    const {model, country} = req.body
    // const newTodo = await pool.query(
    //   "INSERT INTO todo_ (description) VALUES($1) RETURNING *",
    //   [description]
    // );
    const newDevice = await pool.query('INSERT INTO device (model, country) values ($1, $2) RETURNING *', [model, country])

    res.json(newDevice.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// app.post("/device", async (req, res) => {
//   try {
//     // const { description } = req.body;
//     const {model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image} = req.body
//     // const newTodo = await pool.query(
//     //   "INSERT INTO todo_ (description) VALUES($1) RETURNING *",
//     //   [description]
//     // );
//     const newDevice = await pool.query('INSERT INTO device (model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image])
//
//     res.json(newDevice.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//get all devices

app.get("/device", async (req, res) => {
  try {
    const allDevice = await pool.query("SELECT * FROM device");
    res.json(allDevice.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a device

app.get("/device/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dev = await pool.query("SELECT * FROM device WHERE id = $1", [
      id
    ]);

    res.json(dev.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a device

// app.put("/device/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image} = req.body;
//     const updateDevice = await pool.query("UPDATE device  SET model=$1, country=$2, device=$3, oem=$4, count_ebay=$5, price_ebay=$6, price_store=$7, count_store=$8, link=$9, image=$10   WHERE id=$2",
//           [model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image, id]
//       // "UPDATE device SET description = $1 WHERE id = $2",
//       // [description, id]
//     );
//
//     res.json("Device was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//delete a device

// app.delete("/device/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteDevice = await pool.query("DELETE FROM device WHERE id = $1", [
//       id
//     ]);
//     res.json("Device was deleted!");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(8080, () => {
  console.log("server has started on port 8080");
});
