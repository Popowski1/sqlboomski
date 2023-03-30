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
function addDepartment(){
    inquirer.prompt({
    
        type: "input",
        name: "deptName",
        message: "department ?"
      }).then(function(answer){connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function(err,res){
        if (err) throw err;
        console.table(res)
        loadUp()
      })
    })

}
function addRole(){
    inquirer.prompt([
    {
        type: "input",
        name: "roleName",
        message: "role ?"
      },
      {
        type: "input",
        name: "roleSalary",
        message: "role salary ?"
      },
      {
        type: "input",
        name: "deptID",
        message: "dept id ?"
      },
    ]).then(function(answer){connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName], [answer.roleSalary], [answer.deptID], function(err,res){
        if (err) throw err;
        console.table(res)
        loadUp()
      });
    });

}