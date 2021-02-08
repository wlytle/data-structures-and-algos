// Level: Medium Given an array of integers that can be both +ve and -ve, find the contiguous subarraywith the largest sum.For example:  [1,2,-1,2,-3,2,-5]  -> first 4 elements have the largest sum. Return (0,3)Questions to Clarify:

//Q. How do you want the output?A. Return the value of the maximum sum.

//Q. Do empty arrays count as a subarray?A. No, the subarray should have at least 1 elemen

//t.Q. But what if the input array is empty or null?A. Throw an exception.

//KAdane's therm => maxSubbarr = max(arr[i], max_sub_arr[i-1])
// function largestSubArrSum(arr) {
//   let result = arr[0];
//   let maxSubAtPrev = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     maxSubAtPrev = Math.max(arr[i], maxSubAtPrev + arr[i]);
//     if (maxSubAtPrev > result) result = maxSubAtPrev;
//   }
//   return result;
// }

// console.log(largestSubArrSum([1, 2, -1, 2, -3, 2, -5]));
// //4

// function largestSubArrSum(arr) {
//   let result = arr[0];
//   let maxSumAtPrev = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     maxSumAtPrev = Math.max(arr[i], maxSumAtPrev + arr[i]);
//     if (maxSumAtPrev > result) result = maxSumAtPrev;
//   }
//   return result;
// }

function largestSubArrSum(a) {
  if (!a.length) return null;
  let maxSumAtPrev = a[0];
  let result = a[0];
  for (let i = 1; i < a.length; i++) {
    maxSumAtPrev = Math.max(a[i], maxSumAtPrev + a[i]);
    if (maxSumAtPrev > result) result = maxSumAtPrev;
  }
  return result;
}

console.log(largestSubArrSum([1, 2, -1, 2, -3, 2, -5]));
//4
