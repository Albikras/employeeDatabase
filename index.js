const inquirer = require("inquirer");
const util = require("util");
const { menu, addingEmployee } = require("./js/questions");
const mysql = require("mysql2");
const cTable = require("console.table");

const addDepartment = require("./functions/addDepartment.js");
const addEmployee = require("./functions/addEmployee.js");
const updateRole = require("./functions/updateRole.js");
const addRole = require("./functions/addRole.js");
const viewDepartment = require("./functions/viewDepartment.js");
const viewEmployees = require("./functions/viewEmployees.js");
const viewRoles = require("./functions/viewRoles.js");

const mainPromise = util.promisify(mainMenu);

function mainMenu() {
  const db = mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // TODO: Add MySQL password here
      password: "pass",
      database: "employed",
    },
    console.log(`Connected to the employed database.`)
  );

  inquirer.prompt(menu).then((answers) => {
    switch (answers.wwjd) {
      case "View All Employees":
        viewEmployees(db);
        break;
      case "Add Employee":
        addEmployee(db);
        break;
      case "Update Employee Role":
        updateRole(db);
        break;
      case "View All Roles":
        viewRoles(db);
        break;
      case "Add Role":
        addRole(db);
        break;
      case "View All Departments":
        viewDepartment(db);
        break;
      case "Add Department":
        addDepartment(db);
        break;
      case "Quit":
        console.log("Goodbye!!");
        return process.exit();
    }
  });
}
mainMenu();
module.exports = db;
