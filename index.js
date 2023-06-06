const inquirer = require("inquirer");
const util = require("util");
const { menu, addingEmployee } = require("./js/questions");
const mysql = require("mysql2");
const cTable = require("console.table");
const { log } = require("easy-table");

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
        viewDept(db);
        break;
      case "Add Department":
        addDept(db);
        break;
      case "Quit":
        console.log("Goodbye!!");
        return process.exit();
    }
  });
}

function viewEmployees(db) {
  db.promise()
    .query("SELECT * FROM employee")
    .then(([rows, fields]) => {
      console.table(rows);
    });
  //let viewWorkers = util.promisify(db.query("Select * from employee"));
}

function addEmployee() {
  inquirer.prompt(addingEmployee).then(answers =>{
    // call viewAllRoles function here, and 'extract' the title property from each role object

    //...
    // then pass that array a
  });
}
function updateRole() {

}
function viewRoles(db) {
  db.promise()
    .query("SELECT * FROM role")
    .then(([rows, fields]) => {
      console.table(rows);
    });
}


function addRole() {

}
function viewDept() {

}
function addDept() {

}

mainMenu();
