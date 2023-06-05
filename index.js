const inquirer = require("inquirer");
const util = require("util");
const questionBlock = require("./js/questions");

const mainPromise = util.promisify()

mainMenu(){
    const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'pass',
    database: 'employed'
  },
  console.log(`Connected to the employed database.`)
);

}