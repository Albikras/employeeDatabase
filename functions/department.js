const addDept = require("../js/questions.js");
const { printTable } = require("console-table-printer");
const mysql = require("mysql2/promise");
const mainMenu = require("../index.js");

async function viewDepartment(db) {
  const [view] = await db.query("SELECT * FROM department");
  printTable(view);
  await mainMenu();
}

async function addDepartment(db) {
  const answers = await inquirer.prompt(addDept);
  await db.query(
    `INSERT INTO department(name) VALUES('${answers.newDepartment}')`
  );
  viewDepartment(db);
}

module.exports = { viewDepartment, addDepartment };
