
// Hackathon Controllers File
// Justin

const mysql = require('mysql')
const pool = require('../sql/connections')


// Get All Employees
function getEmployees(req, res) {

    pool.query('SELECT * FROM employees LIMIT 50', (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        res.json(rows)
    });

}



// Get One Employee
function getEmployeesById(req, res) {

    const userId = req.params.id;
    let sql = `SELECT ??, ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['first_name', 'last_name', 'employees', 'emp_no', userId])
        console.log(userId);
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })


}



// Get Employee First Name
function getEmployeesByFirstName(req, res) {
    const firstname = req.body.first_name;
    let sql = `SELECT ??, ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['first_name', 'last_name', 'employees', 'first_name', firstname])
}


// Export back up to the Routes file
module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}