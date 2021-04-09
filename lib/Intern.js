const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Intern";
    }

    getSchool(){
        return this.officeNumber
    }
}

module.exports = Intern;