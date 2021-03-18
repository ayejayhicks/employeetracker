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
        //use mysql to insert a new department record using answer.newDepartmentName
        //INSERT INTO department (name) VALUE ("Sales");
        //HINT: we need to use '?' placeholders for this one
        console.log(`You haved added a new department named ${answer.newDepartmentName}`);
        //make sure 'start()' is the last thing that happens in this .then();
        start();
    }
    )

}; const addRole = () => {
    inquirer.prompt({
        type: 'input',
        message: 'What role are you adding?',
        name: 'newRole'
    }).then(answer => {
        console.log(`You haved added a new role ${answer.newRole}`);
        start();
    }
    )

}; const addEmployee = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which employee would you like to add?',
        name: 'newEmployee'
    }).then(answer => {
        console.log(`You haved added a new employee ${answer.newEmployee}`);
        start();
    }
    )

// View all Departments    
}; const viewDepts = () => {
    //use mysql to query the department table for all departments currently in the db, then display those departments in the console
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        //TODO: make this look prettier
        console.log(results);
        start();
    })

// View all Roles
}; const viewRoles = () => {
    connection.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        //TODO: make this look prettier
        console.log(results);
        start();
    })

// View all Employees
}; const viewAllEmps = () => {
    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        //TODO: make this look prettier
        console.log(results);
        start();
    })
}

    // inquirer.prompt({
    //     type: 'input',
    //     message: 'Which department would you like to view?',
    //     name: 'viewDept'
    // }).then(answer => {
    //     console.log(`You haved viewed a department ${answer.viewDept}`)
    //     start();
    // });

// };  
//     inquirer.prompt({
//         type: 'input',
//         message: 'Which roles would you like to view?',
//         name: 'viewRole'
//     }).then(answer => {
//         console.log(`You haved viewed a role ${answer.viewRole}`);
//         start();
//     }
//     )

// };  
//     inquirer.prompt({
//         type: 'input',
//         message: 'Which employee would you like to view?',
//         name: 'viewEmployee'
//     }).then(answer => {
//         console.log(`You haved viewed an employee ${answer.viewEmployee}`);
//         start();
//     }
//     )

const updateRoles = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Which role would you like to update?',
        name: 'updateRole'
    }).then(answer => {
        console.log(`You haved updated a role ${answer.updateRole}`);
        start();
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
                "Exit"
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

            case 'Exit':
                process.exit();

            default:
                start();
        }
    })
}