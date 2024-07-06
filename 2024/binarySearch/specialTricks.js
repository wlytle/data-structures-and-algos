/*ArraysLevel: Easy 
Given an array that is cyclically sorted, find the minimum element. 
A cyclically sortedarray is a sorted array rotated by some number of elements. 
Assume all elements are unique.For example:
A = [4,5,1,2,3], which is just [1,2,3,4,5] rotated by 2 Result = index 2
Questions to Clarify:
Q. How do you want the input
A. Return the index of the min item.

Q.Can the array be rotated by 0 elements? i.e, a normal sorted array?
A. Yes
*/

// function cyclicallySortedSearch(arr) {
//     if (!arr?.length) {
//         return -1;
//     }

//     let start = 0;
//     let end = arr.length - 1;
//     let right = arr[arr.length - 1];

//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         if (arr[mid] <= right && (mid === 0 || arr[mid - 1] > arr[mid])) {
//             return mid;
//         } else if (arr[mid] < right) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return -1;
// }

function cyclicallySortedSearch(arr) {
    if (!arr?.length) {
        return -1;
    }

    let start = 0;
    let end = arr.length - 1;
    let right = arr[arr.length - 1];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] <= right && (mid === 0 || arr[mid - 1] > arr[mid])) {
            return mid;
        } else if (arr[mid] < right) {
            end = mid - 1;
        } else {
            start = mid + 1;
        } 
    }
    return -1;
}

// console.log(cyclicallySortedSearch([4, 5, 1, 2, 3]));
// //2
// console.log(cyclicallySortedSearch([4, 5, 6, 7, 8]));
// //0
// console.log(cyclicallySortedSearch([2, 3, 4, 5, 1]));
// //4
// console.log(cyclicallySortedSearch([]));
// //-1

/*
Level: Medium
Search Array of Unknown length You are given an array, but you don't know the length. 
Write a program to finda target element in the array.
Questions to Clarify
:Q. What happens if we try to access an index that is out of bounds?
A. An exception is thrown

Q. How do you want the output?
A. Return the index of target.

Q. What to return if target is not found
?A. Return -1
*/

// function findWithUnkownLength(arr, target) {
//     if (!arr?.length) {
//         return -1;
//     }

//     let high = 0;
//     while(arr[high] !== undefined) {
//         high = high === 0 ? 1 : high * 2;
//     }
//     lastIndex = binarySearchForLastIndex(arr, high/2, high);
//     return binarySearchForTarget(arr, target, 0, lastIndex);

// }

// function binarySearchForLastIndex(arr, start, end) {
//     while(start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);

//         if (arr[mid] === undefined) {
//             end = mid - 1;
//         } else {
//             if (arr[mid + 1] === undefined) {
//                 return mid;
//             }
//             start = mid + 1;
//         }
//     }
// }

// function binarySearchForTarget(arr, target, start, end) {
//     while(start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);

//         if (target < arr[mid]) {
//             end = mid -1;
//         } else if (target > arr[mid]) {
//             start = mid + 1;
//         } else {
//             return mid
//         }
//     }
//     return -1;
// }

function findWithUnkownLength(arr, target) {
    if (!arr?.length) {
        return -1;
    }
    let high = 1;
    while (arr[high] !== undefined) {
        high *= 2;
    }
    const lastIndex = binarySearchForLastIndex(arr, high/2, high);
    return binarySearchForTarget(arr, target, 0, lastIndex);
}

function binarySearchForLastIndex(arr, start, end) {
    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (arr[mid] === undefined) {
            end = mid - 1;
        } else {
            if (arr[mid + 1] === undefined) {
                return mid;
            }
            start = mid + 1;
        }
    }
}

function binarySearchForTarget(arr, target, start, end) {
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// console.log(findWithUnkownLength([2,4,6,8,10], 4));
// //1
// console.log(findWithUnkownLength([2,4,6,8,10], 10));
// //4
// console.log(findWithUnkownLength([2,4,6,8,10], 2));
// //0
// console.log(findWithUnkownLength([2], 2));
// //0
// console.log(findWithUnkownLength([2,4,6,8,10], 42));
// //-1

/*
Homework Problem 1 (Level: Easy)

Find the square root of an integer X. For example, squareRoot(4) = 2. It is ok to find the integer floor of the square root. So squareRoot(5) or squareRoot(8) can also return 2. squareRoot(9) will return 3.

Using Binary Search, you can search for square roots over the integer space. This is pretty fast because it takes O(log(n)) time. Assume that x*x is less than the integer limit.
*/

// function squareRoot(num) {
//     if (num === 1) {
//         return 1;
//     }
//     let start = 0;
//     let end = num / 2;

//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         if (mid ** 2 > num) {
//             end = mid - 1;
//         } else if (mid ** 2 === num || (mid + 1) ** 2 > num) {
//             return mid;
//         } else {
//             start = mid + 1;
//         }
//     }
// }

// console.log(squareRoot(1));
// //1
// console.log(squareRoot(2));
// //1
// console.log(squareRoot(9));
// //3
// console.log(squareRoot(10));
// //3
// console.log(squareRoot(0));
// //0

/*
Search for a Peak: A peak element in array A is an A[i] where its adjacent elements are less than A[i]. So, A[i - 1] < A[i] and A[i + 1] < A[i].

Assume there are no duplicates. Also, assume that A[-1] and A[length] are negative infinity (-∞). So A[0] can be a peak if A[1] < A[0].

A = [1,3,4,5,2] => Peak = 5
A = [5,3,1] => Peak = 5
A = [1,3,5] => Peak = 5
*/

// function searchForPeak(arr) {
//     if (!arr?.length) {
//         return -1;
//     }
//     let start = 0;
//     let end = arr.length -1;

//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         if (mid > 0 && arr[mid - 1] > arr[mid]) {
//             end = mid - 1;
//         } else if (mid < arr.length - 1 && arr[mid + 1] > arr[mid]) {
//             start = mid + 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }

function searchForPeak(arr) {
    if (!arr?.length) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;
     while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (mid < arr.length - 1 && arr[mid + 1] > arr[mid]) {
            start = mid + 1;
        } else if (mid > 0 && arr[mid - 1] > arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
     }
     throw Error("Panic! Something has gone wierdly wrong!")
}

console.log(searchForPeak([1,3,4,5,2]));
//3
console.log(searchForPeak([5,3,1]));
//0
console.log(searchForPeak([1,3,5]));
//2
console.log(searchForPeak([3]));
//0
console.log(searchForPeak([]));
//-1
console.log(searchForPeak([-Infinity, 1]));
//1