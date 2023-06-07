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

const addingEmployee = (RolesChoices, managerList) => [
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
    choices: RolesChoices,
  },
  {
    type: "list",
    name: "boss",
    message: "Who is the new employees manager",
    choices: managerList,
  },
];

const addedRole = [
  {
    type: "input",
    name: "newtitle",
    message: "What is the title of the new role you would like to add?",
  },
  {
    type: "input",
    name: "newSalary",
    message: "What is the new salary for your new role?",
  },
  {
    type: "input",
    name: "newId",
    message: "What is the new department id for your new role?",
  },
];

const addDept = [
  {
    type: "input",
    name: "newDepartment",
    message: "What is the new department?",
  },
];

const updatingRole = (employ, roller) => [
  {
    type: "list",
    name: "employeeList",
    message: "Select and employee to update there role",
    choices: employ,
  },
  {
    type: "list",
    name: "roleslist",
    message: "Select which role to update too",
    choices: roller,
  },
];

module.exports = {
  menu,
  updatingRole,
  addDept,
  addingEmployee,
  addedRole,
};
