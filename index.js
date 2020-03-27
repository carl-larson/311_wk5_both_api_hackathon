const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const employeesRoutes = require("./routes/employees");

const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use("/employees", employeesRoutes);
>>>>>>> 7853546b1e83fcef6602f703d9cc98ebf39d8915

app.get("/", (req, res) => {
    res.send(`Welcome to our site!`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
