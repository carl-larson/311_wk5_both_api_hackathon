const express = require('express');
const bodyParser = require("body-parser");
const employeesRouter = require('./routes/employees');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/', employeesRouter)

app.get('/', (req, res) => {
    res.send(`Welcome to our site!`);
})

app.listen(port, ()=> 
    console.log(`Example app listening on port ${port}!`)
)
