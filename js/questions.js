const menu = [
  {
    type: "list",
    name: "wwjd",
    message: "What Would You Like To Do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
  },
];

const addDept = [
  {
    type: "input",
    name: "depts",
    message: "Add deparetment name",
  },
];

const addingRole = [
  {
    type: "input",
    name: "additionRoles",
    message: "Add new role name",
  },
  {
    type: "input",
    name: "salary",
    message: "Add salary for new role",
  },
  {
    type: "input",
    name: "depts",
    message: "add new department name",
  },
];

const addingEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "What is the new employee's first name",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the new employee's last name",
  },
  {
    type: "list",
    name: "additionRoles",
    message: "What is the new employees role",
    choices: [], // here is where you will pass an instance of your imported function called populateChoicesForRoles
  },
  {
    type: "list",
    name: "boss",
    message: "Who is the new employees manager",
    choices: [],
  },
];

module.exports = { menu, addingRole, addDept, addingEmployee };
