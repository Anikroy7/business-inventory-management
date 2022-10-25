
const colors = require("colors");
const { default: mongoose } = require("mongoose");
const app = require('./app')
require('dotenv').config();
const port = process.env.PORT || 8080;


// connect to database
mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log("Database connection successfull".bgYellow);
    })

app.get('/', (req, res) => {
    res.send('Welcome to business inventory management!')
})

app.listen(port, () => {
    console.log(`Business invetory management is running at ${port}`.random)
})