const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees");

router.get("/", employeesController.getEmployees);
router.get("/:id", employeesController.getEmployeesById);
router.get(
  "/first_name/:first_name",
  employeesController.getEmployeesByFirstName
);

module.exports = router;
