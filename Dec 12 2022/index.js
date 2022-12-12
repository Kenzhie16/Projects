//  Array
// index starts at 0
// index = total no. of items -1
const fruits = [ "apple", "orange", "papaya", "grapes" ];

// console.log(fruits);
// arrayName[<index>]
console.log( fruits[3], fruits[2] );


// Empty array
// const prutas = [];
const prutas = new Array();

prutas[0] = "Langka";
prutas[1] = "Pineapple";
prutas[2] = "Guyabano";

prutas[0] = "Mango";

//  add item at the end of the array
prutas.push("Pomelo", "Calamansi");

console.log(prutas);

const scores = [50, 37.5, 99, 100, 80];
scores[0];
scores[1];
scores[2];
scores[3];
scores[4];
// ..
scores[100];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let sum = 0;

// callback functions: functions used as arguements
numbers.forEach(
    // 1, 2, 3, 4, 5, 6, 7, 8, 9
    ( number ) => {
        sum += number;
    }
);

console.log(sum);

 const months = [ "January", "February", "March", "April" ];
 months.forEach(
     ( element, index ) => {
          console.log( `Index: ${index} - ${element}` );
     }
 )
//  push() and pop()
// array.push() - add item at the end of the array
 months.push("May");
 console.log(months);
//   array.pop() - remove item at the end of the array, return the removed item
 console.log( months.pop() );
 console.log( months );

 // shift() and unshift()
// array.unshift() - add item at the start of the array
 months.unshift( "First" );
 console.log(months);
 // array.shift() - remove item at the start of the array. return the removed item
console.log( months.shift());
console.log(months);

// array.splice() 
// splice( start, deleteCount, item(s) );
console.log(numbers);

// insert new item at index 5
numbers.splice(5, 0, 12)
console.log(numbers);

// replace item at index 3
numbers.splice(3, 1, 45)
console.log(numbers);

// delete 2 items starting at index 6
numbers.splice(6, 2);
console.log(numbers);

// Creating arrays:
// define a variable called lottoNumbers set it equal to an array with any 6 numbers

const lottoNumbers = [16, 17, 18, 19, 20, 21];
console.log(lottoNumbers);


const leaderboard = ["Shai", "Jamie", "Glenn", "Kenn", "Jason"];
// get value of index 0 / top 1
// correct the spelling of "Jamie" to "Jaime"
// Repalce "jason" to "Ringgo"

leaderboard[1] = "Jaime";
leaderboard.splice(4, 1, "Ringgo");
console.log(leaderboard);

// Push, Pop, Shift, Unshift
const solarSystem = [ "Moon", "Venus", "Earth", "Mars", "Jupiter" ];
//  remove "Moon"
// add "Mercury" at the start
//  add "Saturn" at hte end
// Final Output ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"];

solarSystem.shift();
solarSystem.unshift("Mercury");
solarSystem.push("Saturn");
console.log(solarSystem);

// Multi-dimensional array
const matrix = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

/*
column   0 1 2
row 0   [1,2,3],
row 1   [4,5,6],
row 2   [7,8,9],

*/
console.log(matrix[2][1]);