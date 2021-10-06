// // Setup
// var myArray = [];
// let i = 5;
// while (i>=0) {
//     myArray.push(i);
//     i--;
// }
// // Only change code below this line

// // Setup
// var myArray = [];
// for (i = 1; i < 6; i++) {
//     myArray.push(i)
// }
// // Only change code below this line

// // Setup
// var myArray = [];
// for (let i = 1; i < 10; i+=2) {
//     myArray.push(i);
// }
// // Only change code below this line

// // Setup
// var myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//     console.log(i);
//     myArray.push(i);
// }
// // Only change code below this line

// // Setup
// var myArr = [ 2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//     total += myArr[i];
// }
// // Only change code below this line
//


// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     // Only change code above this line
//     return product;
// }
//
// multiplyAll([[1,2],[3,4],[5,6,7]]);

// Setup
// var myArray = [];
// var i = 10;
// do {
//     myArray.push(i);
//     i++;
// }
// // Only change code below this line
// while (i < 11)

// function sum(arr, n) {
//     // Only change code below this line
//     let product = 0;
//     for (let i = 0; i < n; i++) {
//         product += arr[i]
//     }
//     // Only change code above this line
// }

function sum(arr, n) {
    // Only change code below this line
    return n <= 0 ? 0 : sum(arr,n-1)+arr[n-1];
    // Only change code above this line
}