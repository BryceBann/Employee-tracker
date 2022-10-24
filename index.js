//linking the requires packages and db
const inquirer = require('inquirer');
const db = require('./db/connection')
require('console.table');

//a main menu of sort to start and end on for user input
const promptMessages= { 
    viewAllEmployees: "View all employees",
    addEmployee: "Add employee",
    updateEmployeeRole: "Update employee role",
    viewAllRoles: "View all roles",
    addRole: "Add role",
    viewAllDepartments: "View all departments",
    addDepartment: "Add department",
    exit: "Exit"
};

//begining of the inquirer questions and selections
function prompt() {
    inquirer
    .prompt({
        name: 'start',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            promptMessages.viewAllEmployees,
            promptMessages.addEmployee,
            promptMessages.updateEmployeeRole,
            promptMessages.viewAllRoles,
            promptMessages.addRole,
            promptMessages.viewAllDepartments,
            promptMessages.addDepartment,
            promptMessages.exit
        ]
    })

    .then(answer => {
        switch (answer.start) {
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

// functions to be called and used after question selection
function viewAllEmployees() {
    db.promise().query("SELECT * FROM employee").then(employeeInfo => {
        console.table(employeeInfo[0])
        prompt();
    })

}
function addEmployee() {
    prompt();
}
function updateEmployeeRole() {
    prompt();
}
function viewAllRoles() {
    db.promise().query("SELECT * FROM employee_roles").then(rolesInfo => {
        console.table(rolesInfo[0])
        prompt();
    })

}
function addRole() {
    // 
    prompt();
}
function viewAllDepartments() {
    db.promise().query("SELECT * FROM department").then(departmentInfo => {
        console.table(departmentInfo[0])
        prompt();
    })
}

function addDepartment() {
    prompt();
}

function exit() {
    prompt();
}

prompt();