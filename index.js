const express = require('express');
const app = express();
const owners = require("./routes/owners");
const products = require("./routes/products");
const users = require("./routes/users");

const db = require("./config/mongooseConnection");

app.use("/owners", owners);
app.use("/users", users);
app.use("/products", products);