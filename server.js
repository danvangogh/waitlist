const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1,
    firstName: "John",
    lastName: "Doh",
    emailAddress: "john@doh.com",
    status: 6,
    confirmed: true},
    {id: 2,
    firstName: "Jahn",
    lastName: "Doh",
    emailAddress: "jahn@doh.com",
    status: 4,
    confirmed: false},
    {id: 3,
    firstName: "Jan",
    lastName: "Doh",
    emailAddress: "jan@doh.com",
    status: 1,
    confirmed: false},
    {id: 4,
    firstName: "John",
    lastName: "Boh",
    emailAddress: "john@boh.com",
    status: 1,
    confirmed: false},
  ]
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
