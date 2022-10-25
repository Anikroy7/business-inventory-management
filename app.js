const express = require("express");
const app = express();
const cors = require('cors');
const brandRoute = require('./routes/brand.route');
const storeRoute = require('./routes/store.route');
const categoryRoute = require('./routes/category.route');

// middelware 
app.use(express.json())
app.use(cors());

// routes 
app.use('/api/v1/brand', brandRoute);
app.use('/api/v1/store', storeRoute);
app.use('/api/v1/category', categoryRoute);

module.exports = app;
