// Variable
// Initialization
let age = 25;
const name = "Kenn";

age = 26;

// Display functions
console.log(age);
// alert("Hello World");
// prompt("Enter a number");

//  Data Types
const firstName = "Kenn"; // String Data Type. "", '' String Literal
const message =`This
is my
message`; //String, (``) backtick, Template literal
const greeting = `Hello ${ firstName }`; // $ {expression}, only for Template literal
const favoriteNumber = 16; //Number Data Type
const average = 99.99; // Number Data Type
const isHappy = true; // Boolean Data Type
const isHungry = false; //Boolean Data type
const value = null; // null
const unDef = undefined; //undefined

//  Operators
// Assignment operator =
const num1 = 15;
const num2 = 5;

//  String + (String or Number) = String
// Concatenation. concatenate
// Type coercion
console.log("Number 1: " + num1);
// \n = new line
console.log("This \n is \n another \n line");

//  Math Operators
console.log(` Addition: ${num1 + num2}`); // Addition Operator
console.log(`Subtraction: ${num1 - num2}`); // Subtraction Operator
console.log(`Multiplication: ${num1 * num2}`); // Multipilcation Operator
console.log(`Division: ${num1 / num2}`); // Division Operator
console.log(`Modulo: ${num1 % num2}`); // Remainder Operator, Modulo %

let count = 10;
// Increment 
console.log(count++); //post-fix increment
/*console.log(count);
count += 1;
/*
count; // call the variable
count += 1; //increment by 1
*/

console.log(++count); //pre-fix increment
/*
count += 1'
console.log(count);
*/
/*
count += 1; //increment by 1
count; // call the variable
*/

// Decrement --
console.log(count--); //post-fix decrement
/*
console.log(count);
count -= 1;
*/
console.log(count);
console.log(--count); //pre-fix decrement
/*
count -= 1'
console.log(count);
*/

// More Assignment Operators
let sum = 0;
sum = sum + 9; // Addition assignment +=
//sum = sum + 9;
console.log(sum);

let diff = 10;
diff -= 3; // Subtraction assignemnt -=
// diff = diff - 3;
console.log(diff);

let product = 1;
product *= 5; // Multiplication assignment
console.log(product);

let quotient = 24;
quotient /= 6; // Division assignment
console.log(quotient);

let remainder = 10;
remainder %= 3; // Modulo assignment
console.log(remainder);

console.log(sum, diff, product, quotient, remainder);

//  Conditionals / Conditional statements
let number = 20;
let description;
// if statement
if (number >= 20) {
    description = "Number greater than or equal to 20";
}
else if (number == 19) {
    description = "Number is 19";
}
else {
    description = "Number is less than 20";
}
console.log(description);

// console.log(10 > 20);
console.log("10" == 10); //true
//  strict equality
console.log("10" === 10); // false

// Truthy and Falsy values
//  truthy values evaluate as true
//  falsy values evaluate as false
// any non-zero number = truthy value
//  zero = falsy value
if (number) {
    console.log(number);
}
if (0) {
    console.log(number);
}
const sample = ""; // falsy value
// const sample = "sample"; // truthy value

if (sample) {
    console.log(sample);
}

let nullValue = null;
if (nullValue) {
    console.log("null");
}

let example;
if (example) {
    console.log("undefined");
}

// loops
let num = 0;
// while loop
while(num < 5) // condition
{
    // code block
    console.log(num);  
    num++;
    // num = 4 + 1
}

num = 5;
// while loop
// while(namba > 0) // condition
// {
//     // code block
//     console.log(namba--);

// }

// do... while loop
// num = 0;
// do {
//     console.log(num++);
// } while (num < 5);

// for loop
// for (initialization; conditionl post-loop operation)
//  check condition
//  if true execute code
//  post-loop operation
for (let i = 0; i < 5; i++) {
    
    if(i === 3) {
        console.log("the number 3");
    }
    for (let j = 0; j < 5; j++) {
        // execute code
    }
}

const input = Number(prompt ("Enter a number: "));

// const numsample = Number("16");

console.log(input + 25);

// Activity

// const hoursPerDay = 24;
// console.log(hoursPerDay);

// const spiderLegs = 8;
// console.log(spiderLegs);

// let score = 5;
// score + 4;
// console.log(score + 4);

// let bankBalance = 100;
// bankBalance /= 2;
// bankBalance += 10;
// console.log(bankBalance);

// console.log(4 <= 2);
let namba = 10;
if(namba % 2 == 0) {
    console.log(namba);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

/************************************************************
 * Functions
 */

// Function Declaration
function add(num1, num2) {
    return num1 + num2;
}
// () invoker
const sum1 = add(10, 5); // 15
console.log(sum1);
// const sum2 = add(50, 99);
// console.log(sum2);

//  Function Expression

const subtract = function(num1, num2) {
    return num1 - num2;
}
const diff1 = subtract(80, 50);
console.log(diff1);
// const diff2 = subtract;
// console.log(diff2);

// Arrow function
// const multiply = (num1, num2) => {
//     // other code here
//     return num1 * num2;
// }
const multiply = (num1, num2) => num1 * num2;
const product1 = multiply(5, 8);
console.log(product1);

// Parameterless function
const greetMe = () => alert("Hello Someone!");
greetMe();