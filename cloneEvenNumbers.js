// Level: EasyGiven an array of numbers, replace each even number with twoof the same number. e.g, [1,2,5,6,8, , , ,] -> [1,2,2,5,6,6,8,8].Assume that the array has the exact amount of space to accommodate the result.Questions to Clarify:Q. How do you want to return the result?A. Modify the input array.Q. What would an empty element contain?A. -1

//Use reverse Traversal
function cloneEvenNumbers(arr) {
  let end = arr.length - 1;
  let i = getLastNumber(arr);
  while (i >= 0) {
    if (arr[i] % 2 === 0) {
      arr[end] = arr[i];
      end--;
      arr[end] = arr[i];
      end--;
    } else {
      arr[end] = arr[i];
      end--;
    }
    i--;
  }
  return arr;
}

// function moveNumber(arr, end) {
//   arr[end] = arr[i];
//   end--;
//   return end
// }

function getLastNumber(arr) {
  let i = arr.length - 1;
  while (i >= 0 && arr[i] === -1) {
    i--;
  }
  return i;
}

console.log(cloneEvenNumbers([1, 2, 3, 6, 8, -1, -1, -1]));
// [1,2,2,3,6,6,8,8]
console.log(cloneEvenNumbers([1, 2, 0, 6, 8, -1, -1, -1, -1]));
// [1,2,2,0,0,3,6,6,8,8]
console.log(cloneEvenNumbers([1]));
//[1]
console.log(cloneEvenNumbers([2, -1]));
//[2,2]
console.log(cloneEvenNumbers([]));
//[]
