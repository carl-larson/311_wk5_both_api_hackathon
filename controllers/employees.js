// Hackathon Controllers File
// Justin

// Need to confirm where we will get the data
const employees = require("../employees");

function getEmployees() {
    res.json(employees);
}

function getEmployeesById() {
    res.json(employees);
}

function getEmployeesByFirstName() {
    res.json(employees);
}




module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}