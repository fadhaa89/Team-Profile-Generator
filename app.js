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

const questions = [{
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
}]

function addMember() {
    let newMember = {};
    console.log("Running addMember function.");

    return inquirer.prompt(questions).then(function (answers) {
        newMember = answers;

        console.log("New Member:", newMember);
        if (newMember.role === "Engineer") {
          newMember = new Engineer(newMember.name, newMember.id, newMember.email, newMember.gitHub);
        } else if (newMember.role === "Intern") {
          newMember = new Intern(newMember.name, newMember.id, newMember.email, newMember.school);
        } else {
          newMember = new Manager(newMember.name, newMember.id, newMember.email, newMember.officePhone)
        }
        employees.push(newMember);

        // let oneCard = `<h1>${employees[0].name}</h1>`;
        let oneCard = managerCard(employees[0]);

        fs.appendFile("./output/team.html", oneCard, function (err) {
            if (err) {
                console.log(err);
            };
        });

        if (newMember.moreMembers === "yes") {
          addMember();
        } else {
          finishHtml();
        }
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
    console.log("finishHTML Complete!");
}


initApp();