const mysql = require('mysql')
const pool = require('../sql/connections')


// Get All Employees
function getEmployees(req, res) {

    let sql = `SELECT ?? FROM ??`
    sql = mysql.format(sql, ['*', 'employees',]);

    pool.query(sql, (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        return res.json(rows)
    });

}


// Get One Employee
function getEmployeesById(req, res) {
    const userId = req.params.id;

    let sql = `SELECT ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['*', 'employees', 'emp_no', userId])
        console.log(userId);

    pool.query(sql, (err, rows) => {
        if (err) {
            console.log({ 'message': 'Error occurred: ' + err })
            return res.status(500).send('An unexpected error occurred')
        }
        return res.json(rows);
    })

}


// Get Employee byFirst Name
function getEmployeesByFirstName(req, res) {
    const firstname = req.params.first_name;

    let sql = `SELECT ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['*', 'employees', 'first_name', firstname])

    pool.query(sql, (err, rows) => {
        if (err) {
            console.log({ 'message': 'Error occurred: ' + err })
            return res.status(500).send('An unexpected error occurred')
        }
        return res.json(rows);
    })

}



module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}