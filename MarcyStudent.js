// Create a MarcyStudent class that extends the Student class. 
// Remember to import the Person class!

const Student = require("./Student");

class MarcyStudent extends Student {
    constructor(first, last, age) {
        super(first, last, age, "Software Engineering", "Marcy Lab School");
    }
}

class NYUStudent extends Student {
    constructor(first, last, age, subject) {
        super(first, last, age, subject, "NYU")
    }
}

const jeff = new MarcyStudent('jeffrey', 'cohetero', 23);
console.log(jeff);