const inquirer = require("inquirer")
const mysql = require("mysql")
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeetrackerdb"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Success!");
    start();

});

const addDept = () => {
    inquirer.prompt({
        type: 'input',
        message: 'What department are you adding?',
        name: 'newDepartmentName'
    }).then(answer => {
        console.log(`You haved added a new department named ${answer.newDepartmentName}`)
    }
    )

}; const addRole = () => {
    inquirer.prompt({
        type: 'input',
        message: 'What role are you adding?',
        name: 'newRole'
    }).then(answer => {
        console.log(`You haved added a new role ${answer.newRole}`)
    }
    )

}; const addEmployee = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which employee would you like to add?',
        name: 'newEmployee'
    }).then(answer => {
        console.log(`You haved added a new employee ${answer.newEmployee}`)
    }
    )

};  const viewDepts = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which department would you like to view?',
        name: 'viewDept'
    }).then(answer => {
        console.log(`You haved viewed a department ${answer.viewDept}`)
    }
    )

};  const viewRoles = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which roles would you like to view?',
        name: 'viewRole'
    }).then(answer => {
        console.log(`You haved viewed a role ${answer.viewRole}`)
    }
    )

};  const viewAllEmps = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which employee would you like to view?',
        name: 'viewEmployee'
    }).then(answer => {
        console.log(`You haved viewed an employee ${answer.viewEmployee}`)
    }
    )

};  const updateRoles = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which role would you like to update?',
        name: 'updateRole'
    }).then(answer => {
        console.log(`You haved updated a role ${answer.updateRole}`)
    }
    )
}

function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "options",
            choices: [
                "Add a department?",
                "Add a role?",
                "Add an employee?",
                "View all departments?",
                "View all roles?",
                "View all employees?",
                "Update an employees role?",
            ]
        }
    ]).then((answer) => {
        console.log('ANSWER----> ', answer)
        const choice = answer.options;

        switch (choice) {

            case 'Add a department?':
                console.log('ADD A DEPARTMENT==========')
                addDept()
                break;


            case 'Add a role?':
                console.log('ADD A ROLE==========')
                addRole()
                break;

            case 'Add an employee?':
                console.log('ADD AN EMPLOYEE==========')
                addEmployee()
                break;

            case 'View all departments?':
                console.log('VIEW ALL DEPARTMENTS==========')
                viewDepts()
                break;

            case 'View all roles?':
                console.log('VIEW ALL ROLES==========')
                viewRoles()
                break;


            case 'View all employees?':
                console.log('VIEW ALL EMPLOYEES==========')
                viewAllEmps()
                break;

            case 'Update an employees role?':
                console.log('UPDATE AN EMPLOYEES ROLE======================')
                updateRoles()
                break;

            default:
                start();
        }
    })
}

//If
/*
  if() {
      //do something if true
  }
 */

  //Else if

/*  if(){

 } else if () {

 } else if() {

 }
*/

// If else

/*   if() {

  } else {

  } */


//Switch
/*
switch(value) {

    case 'Some Value' :
        //do this
        break;


    case 'some other value':
        //do this other thing
        break;

    default :
        //fallthroguh

} */