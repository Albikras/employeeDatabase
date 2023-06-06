const db = require("../index.js");

function viewRoles(db) {
  db.promise()
    .query("SELECT * FROM role")
    .then(([rows, fields]) => {
      console.table(rows);
    });
}

module.exports = viewRoles;
