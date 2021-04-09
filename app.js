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
