/*
Level: MediumGiven an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0
.For example: [2,4,-2,1,-3,5,-3] --> [4,-2,1,-3]
Questions to Clarify:
Q. How should I return the output?
A. Return the starting and ending indices of the subarray

.Q. What to return if the array is empty or null
?A. Return null.

Q. What to return if no subarray is found?
A. Return null.

Q. What to do if there are multiple subarrays?
A. Return any one.
*/

// function zeroSumSubArray(arr) {
//     if (!arr?.length) {
//         return null
//     }
//     const cumSum = {};
//     let sum = 0;
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] === 0) {
//             return [i,i];
//         }
//         sum += arr[i];
//         if (sum === 0) {
//             return [0, i];
//         }
//         if (cumSum[sum] !== undefined) {
//             return [cumSum[sum] + 1, i];
//         }
//         cumSum[sum] = i;
//     }
//     return null;
// }

function zeroSumSubArray(arr) {
    if (!arr?.length) {
        return null;
    }

    const cumSum = {};
    let sum = 0;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            return [i, i];
        }
        sum += arr[i];
        if (sum === 0) {
            return [0, i];
        }
        if (cumSum[sum] !== undefined) {
            return [cumSum[sum] + 1, i]
        }
        cumSum[sum] = i;
    }
    return null
}


// console.log(zeroSumSubArray([2, 4, -2, 1, -3, 5, -3]));
// //[1,4]
// console.log(zeroSumSubArray([2, 4]));
// //[null]
// console.log(zeroSumSubArray([]));
// //[null]
// console.log(zeroSumSubArray([2, 0, -2, 1, -3, 5, -3]));
// //[1,1]

/*
Level: Medium iven an array of integers, both -ve and +ve, find a contiguous subarray that sums to a numberX
.For example: [2,4,-2,1,-3,5,-3], X = 5 --> Result = [2,4,-2,1]
Questions to Clarify:
Q. How should I return the output?
A. Return the starting and ending indices of the subarray.

Q. What to return if the array is empty or null?
A. Return null.

Q. What to return if no subarray is found?
A. Return null.

Q. What to do if there are multiple subarrays?
A. Return any one
*/
// function targetSumSubArray(arr, target) {
//     if (!arr?.length) {
//         return null;
//     }
//     const cumSum = {};
//     let sum = 0;

//     for (let i=0; i<arr.length; i++) {
//         sum += arr[i];
//         if (arr[i] === target) {
//             return [i,i];
//         }
//         if (sum === target) {
//             return [0, i];
//         }
//         if (cumSum[sum - target] !== undefined) {
//             return [cumSum[sum - target] + 1, i]
//         }
//         cumSum[sum] = i;
//     }
//     return null
// }

function targetSumSubArray(arr, target) {
    if (!arr?.length) {
        return null;
    }
    const cumSum = {};
    let sum = 0;

    for (let i=0; i< arr.length; i++) {
        sum += arr[i];
        if (sum === target) {
            return [0,i];
        }
        if (arr[i] === target) {
            return [i,i];
        }
        if (cumSum[sum - target] !== undefined) {
            return [cumSum[sum - target] + 1, i];
        }

        cumSum[sum] = i;
    }
    return null;
}

console.log(targetSumSubArray([2,4,-2,1,-3,5,-3], 5));
//[0,3]
console.log(targetSumSubArray([9,2,4,-2,1,-3,5,-3], 5));
//[1,4]
console.log(targetSumSubArray([2,4,-2,1,-3,5,-3], 4));
//[1,1]
console.log(targetSumSubArray([2,4,-2,1,-3,5,-3], 99));
//null
console.log(targetSumSubArray([], 4));
//null