const db = require("../index.js");

function viewEmployees(db) {
  db.promise()
    .query("SELECT * FROM employee")
    .then(([rows, fields]) => {
      console.table(rows);
    });
}


module.exports = viewEmployees;
