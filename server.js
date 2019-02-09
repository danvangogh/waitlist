const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

const port = 5000;

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const knex = require('knex')(configuration);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// GETS CUSTOMER LIST

app.get("/api/customers/", (req, res) => {
  knex('customers')
  .select()
  .orderBy('id', 'asc')
  .then((customers) => {
    res.status(200).json(customers);
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
});

// ROUTES TO ADMIN PAGE
app.get("/api/admin", (req, res) => {
  res.redirect("/admin")
});

// GETS PENDING CUSTOMER
app.get("/api/admin/pending", (req, res) => {
  knex("customers")
  .where(function () {
    this
      .where('statusCode', 1)
      .orWhere('statusCode', 2)
  })
  .then((customers) => {
    res.status(200).json(customers);
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
});

// UPDATES CUSTOMER STATUSCODE
app.patch("/api/admin/update", (req, res) => {
  const { id, newStatus } = req.body;
  if (newStatus >= 3) {
    console.log("greater than 3")
    return knex("customers").where({id: id}).update({statusCode: newStatus})
      .then(() => knex("customers").where({id: id + 1}).update({statusCode: 1}))
      .then((customers) => {
        res.status(200).json(customers);
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
    } else {
      knex("customers").where({id: id}).update({statusCode: newStatus})
      .then((customers) => {
        res.status(200).json(customers);
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
    }
  });

app.post("/api/admin", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;
  const statusCode = req.body.statusCode;
  knex("customers")
  .insert({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      statusCode: req.body.statusCode,
  })
  .then((customers) => {
    res.status(200).json(customers);
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
});

app.post("/api/admin/register", (req, res) => {
  const { firstName, lastName, emailAddress, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  knex("admin_users")
  .insert({
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: hashedPassword,
  })
  .then((adminUsers) => {
    res.status(200).json(adminUsers);
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
});



app.post("/api/admin/login", (req, res) => {
  const { emailAddress, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  knex("admin_users")
  .where({
    emailAddress: emailAddress
  })
  .then((admin_users) => {
    const user = admin_users[0];
    if (emailAddress === user.emailAddress && bcrypt.compareSync(password, user.password)) {
      res.status(200).json(admin_users);
    } else {
      res.status(403).send("Incorrect email or address");
    }
  })
  .catch((error) => {
    res.status(500).json({ error });
  })
})


app.listen(port, () => console.log(`Server started on port ${port}`));
