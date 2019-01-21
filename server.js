const express = require('express');
const app = express();
const bodyParser  = require("body-parser");

const port = 5000;

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.get("/api/customers/", (req, res) => {
  database('customers')
  .select()
  .then((customers) => {
    res.status(200).json(customers);
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
});

app.get("/api/admin", (req, res) => {
  res.redirect("/admin")
});

app.listen(port, () => console.log(`Server started on port ${port}`));
