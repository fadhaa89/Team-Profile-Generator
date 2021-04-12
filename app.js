const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const managerCard = require("./templates/managerCard");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newMember);
                    
                    // then(function () {
                    //     console.log(employees);
                    //         if (moreMembers === "yes") {
                    //             addMember();
                    //         } else {
                    //             finishHtml();
                    //         }
                    //     });

                });
        });
}


function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>Team Profile</title>
    </head>
    <body>
        <style>
            
.card {
    margin: auto;
    margin-top: 20px;
    box-shadow: 3px 3px 3px 3px gray;
}

.card-title {
    color: white;
}

@media only screen and (max-width: 812px) {

    .card {
        margin-top: 15px;
        width: 100%;
    }
    
}
        </style>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row" id="main">`;
    fs.writeFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err); Name();
            const role = member.getRole();
            const id = member.getId();
            const email = member.getEmail();
            let data = "";
            if (role === "Engineer") {
                const gitHub = member.getGithub();
                data = managerCard
            } else if (role === "Intern") {
                const school = member.getSchool();
                data = managerCard
            } else {
                const officePhone = member.getOfficeNumber();
                data = managerCard
            }
            console.log("adding team member");
            fs.appendFile("./output/team.html", data, function (err) {
                if (err) {
                    return reject(err);
                };
                return resolve();
            });
        };

    });
}

function finishHtml() {
    const html = ` </div>
    </div>
    </body>
    </html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}


initApp();