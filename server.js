const express = require('express');
const app = express();
const bodyParser  = require("body-parser");

const port = 5000;

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post("/api/admin", (req, res) => {
  console.log("req.body: ", req.body)

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;
  const statusCode = req.body.statusCode;

  database("customers")
  .insert({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      statusCode: req.body.statusCode,
  })
  .then((customers) => {
    res.status(200).json(customers);
  })
});

app.listen(port, () => console.log(`Server started on port ${port}`));
