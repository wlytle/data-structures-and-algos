/*
Level: Easy Given a sorted array that can contain duplicates, find the first occurrence of thetarget element. 
For example:A = [1,3,4,6,6,6,7] and Target = 6, return index 3.
Questions to Clarify:
Q. Can I assume that the input is an integer array?
A. Yes

Q. How do you want the output?
A. Return the index of the first occurrence.

Q. What to return if the target is not found?
A. Return -1
*/

// function binarySearchWithDupes(arr, target) {
//     if (!arr?.length || target === null) {
//         return -1;
//     }

//     let start = 0;
//     let end = arr.length - 1;
//      while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         if (target > arr[mid]) {
//             start = mid + 1;
//         } else if (
//             target < arr[mid] || 
//             (target === arr[mid] && mid > 0 && arr[mid - 1] === target)
//         ) {
//             end = mid - 1;
//         } else {
//             return mid;
//         }
//      }

//     return -1;
// }

function binarySearchWithDupes(arr, target) {
    if (!arr?.length || target === null) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (target > arr[mid]) {
            start = mid + 1;
        } else if (
            target < arr[mid] ||
            (target === arr[mid] && mid > 0 && arr[mid - 1] === target)
            ) {
                end = mid - 1;
            } else {
                return mid;
            }
    }
    return -1;
}
// console.log(binarySearchWithDupes([1,3,3,4,6,6,6,7] , 6));
// //4
// console.log(binarySearchWithDupes([2,4,6,8,8,8,8,10,10,10,10], 10));
// //7
// console.log(binarySearchWithDupes([2,4,6,8,10], 2));
// //0
// console.log(binarySearchWithDupes([2,2,2,2], 2));
// //0
// console.log(binarySearchWithDupes([2,4,6,6,8,10], 42));
// //-1

/*
You are given a sorted array A and a target T. Return the index where it would be placed ifinserted in order.For example,
A = [1,2,4,4,5,6,8] and T = 3, return index 2
A = [1,2,4,4,5,6,8] and T = 0, return index 0
A = [1,2,4,4,5,6,8] and T = 4, return index 4 (insert after other 4’s).

Questions to Clarify:
. Can there be duplicates?A. Yes, there can be duplicates.

Q. If T has duplicates (like in example 3 above), which index do we return?
A. Return the index after the duplicate elements.

Q. How do you want to return the output?
A. Return the index where T will go.

Q. If the array is empty, should we return 0?
A. Yes

Q. What do we return if the array is null?
A. Return -1

Q. What do we return if all elements are smaller than T?
A. Return A.length, because that is where T should go
*/

// function findInsertionIndex(arr, target) {
//     if (!arr || target === null) {
//         return -1;
//     }
//     if(arr.length === 0) {
//         return 0;
//     }

//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         if (target >= arr[mid]) {
//             if (mid === arr.length - 1) {
//                 return arr.length;
//             }
//             start = mid + 1;
//         } else {
//             if (mid === 0 || target >= arr[mid - 1]) {
//                 return mid;
//             }
//             end = mid - 1;
//         }
//     }
//     return - 1;
// }

function findInsertionIndex(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + ((end - start) >> 1);

        if (target >= arr[mid]) {
            if (mid === arr.length - 1) {
                return arr.length;
            }
            start = mid + 1;
        } else {
            if (mid === 0 || target >= arr[mid -1]) {
                return mid;
            }
            end = mid - 1;
        }
    }
    return -1;
}

console.log(findInsertionIndex([1,2,4,4,5,6,8], 3));
//2
console.log(findInsertionIndex([1,2,4,4,5,6,8], 0));
//0
console.log(findInsertionIndex([1,2,4,4,5,6,8], 4));
//4
console.log(findInsertionIndex([1,2,4,4,5,6,8], 12));
//7
console.log(findInsertionIndex([], 12));
//0
