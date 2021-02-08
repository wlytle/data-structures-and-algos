// Description
// Given an array of numbers between 1 and 10 (exluding one number), return the number that is missing.

// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])
//     ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])
//     ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])

function missingNum(arr) {
  //   const expectedTotal = 55;
  //   const total = arr.reduce((acc, i) => acc + i);
  //   return expectedTotal - total;
  //return arr.reduce((acc, i) => acc - i, 55);
  return 55 - arr.reduce((acc, i) => acc + i);
}

console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
