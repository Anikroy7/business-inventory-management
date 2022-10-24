const express = require("express");
const app = express();
const cors = require('cors')

// middelware 
app.use(express.json())
app.use(cors())

module.exports = app;
