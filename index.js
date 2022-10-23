//linking the requires packages and db
const inquirer = require('inquirer');
const mysql = require('mysql');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require('console.table');

//a main menu of sort to start and end on for user input
const baseQuestions = { 
    veiwAllEmployees: "View all employees",
    addEmployee: "Add employee",
    updateEmployeeRole: "Update employee role",
    viewAllRoles: "View all roles",
    addRole: "Add role",
    viewAllDepartments: "View all departments",
    addDepartment: "Add department",
    exit: "Exit"
};

//connecting to the mysql possibly use the dotenv to use login secure
const connection = mysql.createConnection({

});

//throw connection error if any
connection.conect(err => {
    if (err) throw err;
    prompt();
});

//begining of the inquirer questions and selections
function prompt() {
    inquirer
    .prompt({
        name: 'start',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            promptMessages.veiwAllEmployees,
            promptMessages.addEmployee,
            postMessages.updateEmployeeRole,
            promptMessages.viewAllRoles,
            promptMessages.addRole,
            promptMessages.viewAllDepartments,
            promptMessages.addDepartment,
            promptMessages.exit
        ]
    })

    .then(answer => {
        console.log('answer', answer);
        switch (answer.action) {
            case promptMessages.viewAllEmployees:
                viewAllEmployees();
                break;

            case promptMessages.addEmployee:
                addEmployee();
                break;

            case promptMessages.updateEmployeeRole:
                updateEmployeeRole();
                break;

            case promptMessages.viewAllRoles:
                viewAllRoles();
                break;

            case promptMessages.addRole:
                addRole();
                break;

            case promptMessages.viewAllDepartments:
                viewAllDepartments();
                break;

            case promptMessages.addDepartment:
                addDepartment();
                break;

            case promptMessages.exit:
                exit();
                break;
            }
        });
}

function veiwAllEmployees() {
    
}