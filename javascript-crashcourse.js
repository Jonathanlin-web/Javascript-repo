/*
  don't use for debugging or outputting values as it blocks script
  alert('Hello World');

  console.error('This is an error')
  console.warn('This is a warning')
*/

// var, let, const
/*  
    var is globally scoped
    if statement variable with name
    if the same name outside the if statement variable is used there is a conflict

    Symbol are immutable and unique
*/


const name = "John";
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template string
const hello = `My name is ${name} and I am ${age}`;

const s = 'Hello World!';
console.log(s.toUpperCase());
// 'Hello'
console.log(s.substring(0, 5));
// split a string into an Array
// split by letter. array of 12 letter including the space/ 
console.log(s.split(''));
const t = 'technology, computers, it, code';
console.log(t.split(', '));

// Arrays
/* 
  multi
  line
  comment 
*/
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apple', 'oranges', 'pears', 10, true];
console.log(fruits[1]);

fruits[3] = 'grapes';
fruits.push('mangos'); // added to the end
fruits.unshift('strawberries'); // added to the front
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits);


// object literal
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music','movies','sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person.firstName, person.lastName);
person.hobbies[1];
person.address.city;

//destructuring
const {firstName, lastName, address:{city }} = person;

console.log(firstName);
person.email = 'john@gmail.com';
console.log(person.email);

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

/* 
json format send and receive usually
use jSonconverter
" around the string " no single '
*/

//convert to jSon
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

//for each
for(let todo of todos) {
  console.log(todo.id);
}

/*
high order array methods 
 iteration for arrays
forEach, map, filter
*/

// forEach, map, filter
let todoText = todos.forEach(function(todo) {
  console.log(todo.text);
});

//map
todoText = todos.map(function(todo) {
  //loop through and just return the text values 
  return todo.text;
});

// a regular array of text of each one.
console.log(todoText);


//filter
const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true}).map(function(todo) {
    return todo.text})
    console.log(todoCompleted);
    

/*
  conditionals
*/

const x = '10';
const y = 10;
// does not match data type, just value. String '10'==10 is true
if(x == 10) {
  console.log('x is 10');
}

const x2 = 10;
if(y === 10) {
  console.log('x is 10');
} else if(x2 > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}

if(x > 5 && y > 10) {
  console.log('x is more than 5 or y is more than 10');
}

const xy = 10;
const color = xy > 10 ? 'red' : 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}

//default values
function addNums(num1 = 1, num2 = 1){
  return num1 + num2;
}

// arrow function
const addNums = (num1 = 1, num2 = 1) => {
  return num1 + num2;
}
const addNum = (num1 => num1 + 5)

todos.forEach((todo) => console.log(todo));

// lexical this the scoping is a little different
// constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  /*
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
    
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
    */
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear()
}
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970')

console.log(person2.getFullName())
console.log(person1.getBirthYear());
console.log(person2.dob.getFullYear());


// Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear(){
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

//DOM
