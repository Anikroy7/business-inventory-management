
const colors = require("colors");
const app = require('./app')
require('dotenv').config();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Welcome to business inventory management!')
})

app.listen(port, () => {
    console.log(`Business invetory management is running at ${port}`.random)
})