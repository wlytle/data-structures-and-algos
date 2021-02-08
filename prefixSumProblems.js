// Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.For example: [2,4,-2,1,-3,5,-3] --> [4,-2,1,-3]Questions to Clarify:

// Q. How should I return the output?A. Return the starting and ending indices of the subarray.

// Q. What to return if the array is empty or null?A. Return null.

// Q. What to return if no subarray is found?A. Return null.

// Q. What to do if there are multiple subarrays?A. Return any one.

//calculate the cumulitave sum of each index if ever it equals 0 return subb array to that point
// save each cummsum in a hash and if ever a cummsumm is seen twice a subbarr that sums to 0 will be from
// 1+ first cumsum to second cumsum

// function subArrToZero(arr) {
//   if (!arr?.length) {
//     return null;
//   }
//   let hash = {};
//   let cumSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     cumSum += arr[i];
//     console.log("hash", hash, "sum", cumSum);
//     if (cumSum === 0) return [0, i];
//     if (hash[cumSum] !== undefined) {
//       //console.log("hash", hash, "sum", cumSum);
//       return [hash[cumSum] + 1, i];
//     }
//     hash[cumSum] = i;
//   }
//   return null;
// }

function subArrToZero(a) {
  let hash = {};
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum === 0) return [0, i];
    if (hash[sum] !== undefined) return [hash[sum] + 1, i];
    hash[sum] = i;
  }
  return null;
}

console.log(subArrToZero([2, 4, -2, 1, -3, 5, -3]));
//[1,4]

// Given an array of positive and negative integers, find a subarray whose sum equals X.

// For example: Input = [2,4,-2,1,-3,5,-3], X = 5 --> Result = [2,4,-2,1]

// Q. How should I return the output?A. Return the starting and ending indices of the subarray.

// Q. What to return if the array is empty or null?A. Return null.

// Q. What to return if no subarray is found?A. Return null.

// Q. What to do if there are multiple subarrays?A. Return any one.

function subArraySumTo(arr, target) {
  if (!arr?.length) return null;
  let hash = {};
  let cumSum = 0;

  for (let i = 0; i < arr.length; i++) {
    cumSum += arr[i];
    if (cumSum === target) return [0, i];
    if (hash[cumSum + target] !== undefined)
      return [hash[cumSum - target] + 1, i];
    hash[cumSum] = i;
  }
  return null;
}

// console.log(subArraySumTo([2, 4, -2, 1, -3, 5, -3], 5));
// //[0,3]
// console.log(subArraySumTo([2, 4, -2, 1, -3, 5, -3], -1));
//[2,3]
// console.log(subArraySumTo([2, 4, -2, 1, -3, 5, -3], 5));
// //[0,3]
// console.log(subArraySumTo([2, 4, -2, 1, -3, 5, -3], 5));
// //[0,3]
