const { addingEmployee, updatingRole } = require("../js/questions.js");
const { printTable } = require("console-table-printer");
const mysql = require("mysql2/promise");
const mainMenu = require("../index.js");

async function viewEmployees(db) {
  const [view] = await db.query("SELECT * FROM employee");
  printTable(view);
  await mainMenu();
}

async function addEmployee(db) {
  const [roles] = await db.query("SELECT id AS value, title AS name FROM role");
  const [managers] = await db.query(
    "SELECT first_name AS name, id AS value FROM EMPLOYEE"
  );
  let managersArray = [{ value: null, name: "None" }, ...managers];

  const answers = await inquirer.prompt(addingEmployee(roles, managersArray));
  await db.query(
    `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.additionRoles}',${answers.boss})`
  );
  await viewEmployees(db);
}

async function updateRole(db) {
  const [employees] = await db.query(
    'SELECT id as value, CONCAT(first_name," ", last_name) AS name FROM employee'
  );
  const [roles] = await db.query("SELECT id AS value, title AS name FROM role");

  const answers = await inquirer.prompt(updatingRole(employees, roles));
  await db.query(
    `UPDATE employee SET role_id = ${answers.roleslist} WHERE id = ${answers.employeeList}`
  );
  await viewEmployees(db);
}

module.exports = { viewEmployees, addEmployee, updateRole };
