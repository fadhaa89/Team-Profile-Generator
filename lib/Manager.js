const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.title = "Manager"
        this.phone = phone;
    }

    getOfficeNumber() {
        return this.phone;
    }
}

module.exports = Manager