// let catName;
// let quote;
// function catTalk() {
//     "use strict";
//
//     catName = "Oliver";
//     quote = catName + " says Meow!";
//
// }
// catTalk();

// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//         let i = 'block scope';
//         console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
// }

// function printManyTimes(str) {
//
//     // Only change code below this line
//
//     const SENTENCE = str + " is cool!";
//     for (let i = 0; i < str.length; i+=2) {
//         console.log(SENTENCE);
//     }
//
//     // Only change code above this line
//
// }
// printManyTimes("freeCodeCamp");

// const s = [5, 7, 2];
// function editInPlace() {
//     // Only change code below this line
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
//     // Using s = [2, 5, 7] would be invalid
//
//     // Only change code above this line
// }
// editInPlace();

// function freezeObj() {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);
//
//     // Only change code above this line
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// const magic = () => new Date();


//
// const myConcat = (arr1, arr2) => arr1.concat(arr2);
//
// console.log(myConcat([1, 2], [3, 4, 5]));

// // Only change code below this line
// const increment = (number, value = 1) => number + value;
// // Only change code above this line

// const sum = (...args) => {
//
//     return args.reduce((a, b) => a + b, 0);
// }

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
//
// arr2 = [...arr1];  // Change this line
//
// console.log(arr2);

