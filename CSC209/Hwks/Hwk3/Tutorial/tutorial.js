// Strings
let color = "Yellow";
let lastName = "Johnson";

// Numbers
let length = 16;
let weight = 7.5;

// Bigint
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Booleans
let b = true;
let g = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let t;
let r;

// Null
let n = null;
let m = null;

// Symbol
const w = Symbol();
const e = Symbol();

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

let fName = "John";
let lName = "Doe";

let text = `Welcome ${fName}, ${lName}!`;

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;



let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

const car = {type:"Fiat", model:"500", color:"white"};
const personJ = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Create an Object
const personG = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
  
};

// Create an Object
const personA = {};

// Add Properties
personA.firstName = "John";
personA.lastName = "Doe";
personA.age = 50;
personA.eyeColor = "blue";

//work same
person.lastName;
person["lastName"];


//with extra code

const personj = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};