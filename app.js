const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Test123!",
  database: "employee_tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
  inquirer.prompt({
    name: "home",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Departments",
      "View All Roles",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Remove Employee",
      "Remove Department",
      "Remove Role",
      "Exit"
    ]
  })
  .then(function(answer) {
    if (answer.home === "View All Employees") {
      viewEmployees();
    }
    else if (answer.home === "View All Departments") {
      viewDepartments();
    }
    else if (answer.home === "View All Roles") {
      viewRoles();
    }
    else {
      console.log("Thank you for using the Employee Manager. Goodbye!");
      connection.end();
    }
  });
}