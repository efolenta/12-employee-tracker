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


// This is the initializer. When the application is started for the first time, this function will run which is the menu interface for the application 
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
    else if (answer.home === "Add Employee") {
      addEmployee();
    }
    else if (answer.home === "Add Department") {
      addDepartment();
    }
    else if (answer.home === "Add Role") {
      addRole();
    }
    else if (answer.home === "Remove Employee") {
      removeEmployee();
    }
    else if (answer.home === "Remove Department") {
      removeDepartment();
    }
    else if (answer.home === "Remove Role") {
      removeRole();
    }
    else {
      console.log("Thank you for using the Employee Manager. Goodbye!");
      connection.end();
    }
  });
}
// This function is used to view all employees in the database.
function viewEmployees() {
  connection.query("SELECT * FROM employee", function(error, results) {
    if (error) throw error;
    console.table(results);
    start();
  })
}

// This function is used to view all departments in the database.
function viewDepartments() {
  connection.query("SELECT * FROM department", function(error, results) {
    if (error) throw error;
    console.table(results);
    start();
  })
}

// This function is used to view all roles in the database.
function viewRoles() {
  connection.query("SELECT * FROM role", function(error, results) {
    if (error) throw error;
    console.table(results);
    start();
  })
}

// This function is used to create new departments in the database.
function addDepartment() {
  inquirer.prompt([
    {
      name: "departmentName",
      type: "input",
      message: "Enter the department name?"
    }
  ])
  .then(function(answer) {
    connection.query(
      "INSERT INTO department SET ?",
      {
        name: answer.departmentName
      },
      function(err) {
        if (err) throw err;
        console.log("New department created!");
        // re-prompt the user for if they want to bid or post
        start();
      }
    );
  });
}

// This function is used to create new roles for a specific department in the database. First you choose a department then you add a new role.
function addRole() {
  inquirer.prompt([
    {
      name: "department",
      type: "list",
      message: "Choose a department."
    }
  ])
  .then(function(answer) {
    connection.query(
      "INSERT INTO department SET ?",
      {
        name: answer.departmentName
      },
      function(err) {
        if (err) throw err;
        console.log("New department created!");
        // re-prompt the user for if they want to bid or post
        start();
      }
    );
  });
}
