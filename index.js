const inquirer = require("inquirer");
const {
  menu,
  addingEmployee,
  addedRole,
  addDept,
  updatingRole,
} = require("./js/questions");
const { printTable } = require("console-table-printer");
const mysql = require("mysql2/promise");

async function mainMenu() {
  const db = await mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "pass",
      database: "employed",
    },
    console.log(`Connected to the employed database.`)
  );

  const answers = await inquirer.prompt(menu);

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
}

async function viewRoles(db) {
  const [view] = await db.query(
    "SELECT * FROM role LEFT JOIN department ON role.department_id = department.id"
  );
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

async function viewEmployees(db) {
  const [view] = await db.query(
    'SELECT e.id as "Employee Id", CONCAT(e.first_name," ",e.last_name)as "Name", e.role_id as "Job Title Id", e.manager_id as "Manger Id", CONCAT(m.first_name," ",m.last_name) as Manager, role.title as "Job Title", department.name as "Department", role.salary as Salary FROM employee AS e JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee as m ON e.manager_id = m.id'
  );
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

mainMenu();
