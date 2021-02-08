// Given an array, reverse the order of its elements.For example, [3,5,2,5,2,3,9] → [9,3,2,5,2,5,3]Questions to Clarify:Q. Should the output be a new array or the existing array modified?A. Modify the existing array.

// use traversal from both ends

function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    arr = swap(arr, start, end);
    start++;
    end--;
  }
  return arr;
}

function swap(arr, start, end) {
  let temp = arr[end];
  arr[end] = arr[start];
  arr[start] = temp;
  return arr;
}

console.log(reverseArr([3, 5, 2, 5, 2, 3, 9]));
