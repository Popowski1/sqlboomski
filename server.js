const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require(".");
const connection = mysql.createConnection({host: "localhost", port: 3001, user: "root", password:"myman18", database:"employee_db"});

connection.connect(function(err){
    if (err) throw err;
    loadUp();
});

function loadUp() {
    inquirer.createPromptModule({
        type: "list",
        choices:["add department", "add role", "add employee", "view department", "view role", "view employees","update emproll","end"],
        message: "select one",
        name: "selectOp"}).then(function(result){console.log("showing " + result.selectOp);
        switch (result.selectOp){
            case "add department": addDepartment();
            break;
            case "add role": addRole();
            break;
            case "add employee": addEmployee();
            break;
            case "view department": viewDepartment();
            break;
            case "view role": viewRole();
            break;
            case "view employee": viewEmployee();
            break;
            case  "update emproll": viewEmproll();
            break;
            case "end": end();
            break;
            default: end();
        }
    });
}