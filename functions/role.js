const { addedRole } = require("../js/questions.js");
const { printTable } = require("console-table-printer");
const mysql = require("mysql2/promise");
const { mainMenu } = require("../index");

async function viewRoles(db) {
  const [view] = await db.query("SELECT * FROM role");
  printTable(view);
  await mainMenu();
}

async function addRole(db) {
  const answers = await inquirer.prompt(addedRole);
  await db.query(
    `INSERT INTO role(title, salary, department_id) VALUES('${answers.newtitle}','${answers.newSalary}','${answers.newId}')`
  );
  await viewRoles(db);
}

module.exports = { viewRoles, addRole };
