const Student = require('./Student');
const Person = require('./Person');

class GraduateStudent extends Student {
  // inherits all methods from Student
}

const ada = new GraduateStudent('Ada', 'Lovelace', 30, 'Computer Science', 'Marcy Lab School');

console.log(ada.fullName()); // Found on Person.prototype  
console.log(ada.toString()); // Found on Object.prototype
console.log(ada.introduce()); // Found where???

console.log('ada: ', Object.getOwnPropertyNames(ada));
console.log('GraduateStudent.prototype: ', Object.getOwnPropertyNames(GraduateStudent.prototype));
console.log('Student.prototype: ', Object.getOwnPropertyNames(Student.prototype));
console.log('Person.prototype: ', Object.getOwnPropertyNames(Person.prototype));

debugger;