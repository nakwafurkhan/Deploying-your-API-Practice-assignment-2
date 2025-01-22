const express = require('express');
const { resolve } = require('path');
require('dotenv').config();

const app = express();
const port = process.env.port;

app.use(express.static('static'));


const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

