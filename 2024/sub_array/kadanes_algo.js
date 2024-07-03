// Given an array of integers that can be both +ve and -ve, find the contiguous subarraywith the largest sum.
// For example:  [1,2,-1,2,-3,2,-5]  -> first 4 elements have the largest sum. Return (0,3)Questions to 
// Clarify:Q. How do you want the output?A. Return the value of the maximum sum.
// Q. Do empty arrays count as a subarray?A. No, the subarray should have at least 1 element.
// Q. But what if the input array is empty or null?A. Throw an exception

// function maxSubArraySum(arr) {
//     if (!arr?.length) {
//         throw new Error(`invalid input of ${arr}. Input must be array of non zero length.`)
//     }
//     let max = arr[0];
//     let maxAtPrev = arr[0]

//     for (let i=1; i<arr.length; i++) {
//         maxAtPrev = Math.max(arr[i], maxAtPrev + arr[i]);
//         max = Math.max(max, maxAtPrev);
//     }
//     return max;
// }

function maxSubArraySum(arr) {
    if (!arr?.length) {
        throw new Error(`Invalid inut of ${arr}. Input must be an array of non zero length`)
    }
    let max = arr[0];
    let maxAtPrev = arr[0]
    for (let i=1; i<arr.length; i++) {
        maxAtPrev = Math.max(arr[i], maxAtPrev + arr[i]);
        max = Math.max(max, maxAtPrev);
    }
    return max;
}

console.log(maxSubArraySum([1,2,-1,2,-3,2,-5]));
//4
console.log(maxSubArraySum([-1,-2,-3]));
//-1
console.log(maxSubArraySum([11]));
//11
console.log(maxSubArraySum([]));
//throw
