const db = require("../index.js");

function addEmployee(db) {
  inquirer.prompt(addingEmployee).then((answers) => {
    // call viewAllRoles function here, and 'extract' the title property from each role object
    //...
    // then pass that array a
  });
}

module.exports = addEmployee;
