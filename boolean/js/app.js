// function isLess(a, b) {
//     // Only change code below this line
//     return a < b
//     // Only change code above this line
// }
//
// isLess(10, 15);
//*************************************************************
// Setup
//
// function abTest(a, b) {
//     // Only change code below this line
//
//     if (a < 0 || b < 0) return undefined
//
//     // Only change code above this line
//
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
//
// abTest(2,2);
// *************************************************************
// function checkEqual(a, b) {
//     return a == b ? 'Equal' : 'Not Equal'
// }
//
// checkEqual(1, 2);

// function checkSign(num) {
//     return (num > 0) ? 'positive'
//         : (num < 0) ? 'negative'
//             : 'zero'
// }
//
// checkSign(10);
//
// // Only change code below this line
// let a = [];
// function countdown(n){
//     if (n < 1) {
//         return a;
//     } else {
//         a.push(n);
//         return countdown(n-1);
//     }
// }
// // Only change code above this line

// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const arr = countdown(n - 1);
//         arr.unshift(n);
//         return arr;
//     }
// }

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [endNum];
    } else {
        const arr = rangeOfNumbers(startNum+1, endNum);
        arr.unshift(startNum);
        return arr;
    }
};