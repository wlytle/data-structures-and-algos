// Reduce Array by Certain Numbers
// Given array a and array b, remove all elements from array a which also appear in b.
// Examples
// reduceArray([3, 5, 1, 2, 2], [2, 3, 5])
// => [1]
// reduceArray([1, 2, 3, 5, 1, 2, 3], [2, 3])
// => [1, 5, 1]

// Brute force: iterate though one array and check every other element of secon array if it matches remove frm second array
//for (arr1) {
//     for(arr2) {
//         remove ele from arr2 if in arr1
//     }
// }
// O(n^2)
// itereate through arr1 and make hash then check hash for elemnets in arr2
// for (arr1) {
//     make hash
// }
// for (arr2) {
//     check hash and delete if found
// }
// O(n+n) -> O(n)
//
//could sorting make it better? probably not hash method but brute force could be make faster by sorting and checking if if value is larger still O(n^2)

// Try hash method

// function reduceArray(arrA, arrB) {
//   let Bhash = {};
//   //make lookup hash
//   for (let i = 0; i < arrB.length; i++) {
//     if (!Bhash[arrB[i]]) {
//       Bhash[arrB[i]] = true;
//     }
//   }
//   //check lookup hash and delete duplciates
//   i = 0;
//   while (arrA[i]) {
//     if (Bhash[arrA[i]]) {
//       arrA.splice(i, 1);
//     } else {
//       //only increment if element is not removed
//       i++;
//     }
//   }
//   return arrA;
// }

// function reduceArray(arrA, arrB) {
//   let hash = {};
//   arrB.forEach((i) => (hash[i] = true));
//   return arrA.filter((i) => !hash[i]);
// }

// console.log(reduceArray([3, 5, 1, 2, 2], [2, 3, 5]));
// //[1]
// console.log(reduceArray([1, 2, 3, 5, 1, 2, 3], [2, 3]));
// //[1,5,1]

// Testing speed

const { performance } = require("perf_hooks");
const reduceArr = (arr1, arr2) => {
  return arr1.filter((elem) => !arr2.includes(elem));
};

function reduceArray(arr1, arr2) {
  let hash = {};
  arr2.forEach((x) => {
    hash[x] = true;
  });
  return arr1.filter((x) => !hash[x]);
}
const t0 = performance.now();
reduceArr([3, 5, 1, 2, 2], [2, 3, 5]);
reduceArr([1, 2, 3, 5, 1, 2, 3], [2, 3]);
const t1 = performance.now();
const t2 = performance.now();
reduceArray([3, 5, 1, 2, 2], [2, 3, 5]);
reduceArray([1, 2, 3, 5, 1, 2, 3], [2, 3]);
const t3 = performance.now();
console.log(t1 - t0);
console.log(t3 - t2);
