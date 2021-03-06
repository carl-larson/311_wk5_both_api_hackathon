const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const employeesRoutes = require("./routes/employees");

const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use("/employees", employeesRoutes);

app.get("/", (req, res) => {
    res.send(`Welcome to our site!`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
