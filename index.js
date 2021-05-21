const url = "mongodb://localhost:27017/empdb";
const mongoose = require('mongoose');
const expressValidator = require('express-validator');

const router = require('./routes/routes');
// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const { error } = require('console');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.use(express.json());
app.use(expressValidator());

/**
 * Routes Definitions
 */
app.use('',router);
app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

var client = mongoose.connect(url, {useNewUrlParser:true})
    .then(() => {console.log("Succesfully connected");})
    .catch((error)=> {console.log("Error in connection",error);
})
console.log(client);

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
