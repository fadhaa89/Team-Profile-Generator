// Inside app.js has 2 main functions: main and prompt
// npm packages and built-in modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// One variable for each object
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let teamArray = [];
let teamstr = ``;

//this calls all the functions in one in order
async function main() {
    try {
         await prompt()
         // for i to teamArray.length  => 

         for (let i = 0; i < teamArray.length; i++) {
              //template literal=``
              teamstr = teamstr + html.generateCard(teamArray[i]);
         }

         let finalHTML = html.generateHTML(teamstr)

         console.log(teamstr)

         //call generate function to generate the html template literal

         //write file 
         writeFileAsync("./output/index.html", finalHTML)


    } catch (err) {
         return console.log(err);
    }
};
// inside of prompt function - long - 
async function prompt() {
    let responseDone = "";
    // prompt to collect input and use do while at least one and do it number of times depending on the while condition
//     try/catch statement 
    do {
         try {
              response = await inquirer.prompt([

                   {
                        type: "input",
                        name: "name",
                        message: "What is the employee's name? "
                   },
                   {
                        type: "input",
                        name: "id",
                        message: "What is the the employee's ID? "
                   },
                   {
                        type: "input",
                        name: "email",
                        message: "What is the employee's email address? "
                   },
                   {
                        type: "list",
                        name: "role",
                        message: "What is the employee's role?",
                        choices: [
                             "Engineer",
                             "Intern",
                             "Manager"
                        ]
                   }
              ]);

