const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo_ "/todos"

app.post("/device", async (req, res) => {
  try {
    // const { description } = req.body;
    const {model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image} = req.body
    // const newTodo = await pool.query(
    //   "INSERT INTO todo (description) VALUES($1) RETURNING *",
    //   [description]
    // );
    const newDevice = await pool.query('INSERT INTO device (model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image])

    res.json(newDevice.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

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

app.put("/device/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateDevice = await pool.query(
      "UPDATE device SET description = $1 WHERE id = $2",
      [description, id]
    );

    res.json("Device was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a device

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
