const mainMenu = [
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
  {
    type: "input",
    name: "firstName",
    message: "What is the new employees first name",
    validate: async (firstName) => {
      if (firstName == "") {
        return "Please enter a valid first name";
      }
      return true;
    },
    when: (answers) => answers.wwjd === "Add Employee",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the new employees last name",
    validate: async (lastName) => {
      if (lastName == "") {
        return "Please enter a valid last name";
      }
      return true;
    },
    when: (answers) => answers.wwjd === "Add Employee",
  },
  {
    type: "list",
    name: "newRole",
    message: "What is the new employees Role",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
      "Customer Service",
    ],
    when: (answers) => answers.wwjd === "Add Employee",
  },
  {
    type: "list",
    name: "manager",
    message: "Who is the employee's manager?",
    choices: [
      "None",
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
    ],
    when: (answers) => answers.wwjd === "Add Employee",
  },
  {
    type: "",
  },
];
