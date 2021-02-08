// Return the Largest of 4 Digits from Each Array
// Given an array of four arrays, each consisting of four integer elements, return a flattened array which contains the largest digit from each original array.
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
//     => [5, 27, 39, 1001];
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
//     => [9, 35, 97, 1000000];

function flattenArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // let big = null;
    // for (let j = 0; j < arr[i].length; j++) {
    //   if (!big || arr[i][j] > big) {
    //     big = arr[i][j];
    //   }
    // }
    //newArr[i] = big;
    newArr[i] = Math.max(...arr[i]);
  }
  return newArr;
}

console.log(
  flattenArray([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
// [5, 27, 39, 1001];
console.log(
  flattenArray([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
// [9, 35, 97, 1000000]
