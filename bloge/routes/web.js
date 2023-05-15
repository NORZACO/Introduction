const readline = require('readline');

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Adding a method to the constructor
Person.prototype.sayHello = function() {
  return "Hello, " + this.firstName + " " + this.lastName;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name? ', (firstName) => {
  rl.question('What is your last name? ', (lastName) => {
    // Create a new Person object with the provided first and last name
    const person = new Person(firstName, lastName);
    console.log(person.sayHello());
    process.exit()
  });
});
