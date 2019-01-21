const express = require('express');
const app = express();
const bodyParser  = require("body-parser");

const port = 5000;

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

// const knexConfig  = require("./knexfile");
// const knex        = require("knex")(knexConfig[DEV]);
const morgan      = require('morgan');
// const knexLogger  = require('knex-logger');

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1,
//     firstName: "John",
//     lastName: "Doh",
//     emailAddress: "john@doh.com",
//     status: 6,
//     confirmed: true},
//     {id: 2,
//     firstName: "Jahn",
//     lastName: "Doh",
//     emailAddress: "jahn@doh.com",
//     status: 4,
//     confirmed: false},
//     {id: 3,
//     firstName: "Jan",
//     lastName: "Doh",
//     emailAddress: "jan@doh.com",
//     status: 1,
//     confirmed: false},
//     {id: 4,
//     firstName: "John",
//     lastName: "Boh",
//     emailAddress: "john@boh.com",
//     status: 1,
//     confirmed: false},
//   ]
//   res.json(customers);
//

app.get("/api/customers/", (req, res) => {
  database('customers')
  // .where("emailAddress", req.params.emailAddress)
  .select()
  .then((customers) => {
    res.status(200).json(customers);
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
});



app.listen(port, () => console.log(`Server started on port ${port}`));
