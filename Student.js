const Person = require('./Person');

// Refactor this code to use inheritance!
class Student extends Person {
  // A field unique to Students
  courses = [];

  constructor(first, last, age, subject, school) {
    // Invoke the superclass contructor
    super(first, last, age);

    //Assign instance properties unique to Students
    this.subject = subject;
    this.school = school;
  }

  // Fullname is inherited from person
  // fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  introduce() {
    return `${super.introduce()} I am studying ${this.subject} at ${this.school}.`;
  }
  enrollInCourse(courseName) {
    this.courses.push(courseName);
  }
}


const ada = new Student('Ada', 'Lovelace', 30, 'Computer Science', 'Marcy Lab School');
console.log(ada.fullName()); // Ada Lovelace
console.log(ada.introduce()); // Hi, I'm Ada and I'm 30 years old. I am studying Computer Science at Marcy Lab School.

ada.enrollInCourse('Leadership & Development');
ada.enrollInCourse('Technical Interview Prep');
console.log(ada.courses); // [ 'Leadership & Development', 'Technical Interview Prep' ]

module.exports = Student;