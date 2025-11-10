class Person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
  }
}

module.exports = Person;