// Answer #1
// #1
// let i = 0;

// while (++i < 5);
//     alert(++i);
// console.log(i);

// Question #2
// let i = 0;

// while (i++ <5);
//      alert(i++);
//  console.log(i);

// Anwer #3


// for(let i = 0; i < 5; ++i) alert(i);
//     console.log(i);

// Answer #4


// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }
// console.log(i);

//  Answer #5
// let num;

// while (true) {
//     num = prompt('Please enter a number greater than 100:');
//     if (num > 100) {
//         break;
//     } else if (num === "" || num === null) {
//         break;
//     }
//     alert('The number must be greater than 100. Please try again.');
// }

// Answer 6

// for (let i = 1; i <=8; i++) {
//     let printNumRows= "";
//     for (let j = 1; j <=i; j++) {
//         printNumRows += j + " "
//     }
// console.log(printNumRows);
// }

// Answer 7
// let n = Number(prompt("Enter number"));

// nextPrime:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }

//   alert( i ); 
// }



//  Answer 8

// const n = Number(prompt("Enter a number: "));
// for( let a = 1; a <= n; a++ ) {
//     let b = 0;
//     for( let c = 2; c < a; c++ ) {
//         if (a % c === 0) {
//             b = 1;
//             break;
//         }
//     }
//     if ( a > 1 && b === 0) {
//         console.log(a);
//     }
// }


// Answer 9

// for (let i = 1; i < 101; i++) {
//     if (i % 15 === 0) {
//         console.log(`FIZZBUZZ`);
//     }
//     else if (i % 3 === 0) {
//         console.log(`FIZZ`);
//     }
//     else if (i % 5 ===0) {
//         console.log(`BUZZ`);
//     }
//     else {
//         console.log(i);
//     }
// };

// // while loop
// i = 0;

// while (i < 100) {
//     i++;
    
//     if (i % 15 === 0) {
//         console.log(`FIZZBUZZ`);
//     }
//     else if (i % 3 === 0) {
//         console.log(`FIZZ`);
//     }
//     else if (i % 5 === 0) {
//         console.log(`BUZZ`);
//     }
//     else {
//         console.log(i);
//     }
// };

// // do while loop
// i = 1;

// do {
//     if (i % 15 === 0) {
//         console.log(`FIZZBUZZ`);
//     }
//     else if (i % 3 === 0) {
//         console.log(`FIZZ`);
//     }
//     else if (i % 5 === 0) {
//         console.log(`BUZZ`);
//     }
//     else {
//         console.log(i);
//     }
//     i++;
// }

// while (i < 101);

// const fizzBuzz = function(n, arr = []) {
//     if (n === 1) {
//         arr.push(`1`);
//         return arr.reversed();
//     } else {
//         if (n % 3 === 0 && n % 5 === 0) {
//             arr.push(`FizzBuzz`);
//     } else if (n % 5 === 0) {
//         arr.push(`Buzz`);
//     } else if (n % 3 === 0) {
//         arr.push(`Fizz`);
//     } else {
//         arr.push(" + n");
//     }
//     return fizzBuzz(n - 1, arr);
//     }
// }
// console.log(fizzBuzz(15));

// let n = Number(prompt("Enter number: "));
// const answer = new Array();
// for (let i=0; i <= n; i++) {
//     elt j = i + 1;
//     if (j% 3 == 0 && j % 5 == 0) {
//         answer[i] = "FizzBuzz";
//     }
//     else if (j % 3 === 0) {
//         answer[i] = "Fizz";
        
//     }
//     else if (j % 5 === 0) {
//         answer[i] = "Buzz";
//     }
//     else {
//         answer[i] = `${j}`;
//     }
// }
// console.log(answer);

// const num = prompt('enter the number to be evaluated');
// let answer = [];

// const fizzBuzz = function(n){
// let i = n;
// if(i % 3 == 0 && i % 5 == 0){
//     answer[i] = "FizzBuzz";
//     alert( answer[i]);
//     console.log(answer[i]);
// }else if(i % 3 == 0){
//     answer[i] = "Fizz";
//     alert( answer[i]);
//     console.log(answer[i]);
// }else if(i % 5 == 0){
//      answer[i] = "Buzz";
//      alert( answer[i]);
//      console.log(answer[i]);
// }else{
//      answer[i] = String(i);
//      alert(answer[i]);
//      console.log(answer[i]);
//     }
// }
// fizzBuzz(Number(num));

const n = prompt("Enter a number: ");
const Array = [];
for(let i=1; i <=n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        Array.splice(i, 1, "FizzBuzz");
    }else if(i % 3 === 0) {
        Array.splice(i, 1, "Fizz");
    }else if( i % 5 === 0 ) {
        Array.splice(i, 1, "Buzz");
    }else {
        Array.push(i);
    }
}
console.log(Array);