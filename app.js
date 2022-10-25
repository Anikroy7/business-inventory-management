const express = require("express");
const app = express();
const cors = require('cors');
const brandRoute = require('./routes/brand.route');

// middelware 
app.use(express.json())
app.use(cors());

// routes 
app.use('/api/v1/brand', brandRoute);

module.exports = app;
