// Given a sorted array in non-decreasing order, return an array of squares of each number, als in non-decreasing order. For example:[-4,-2,-1,0,3,5] -> [0,1,4,9,16,25

// function sortedSquares(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     const squares = []

//     while (left <= right) {
//         if (arr[left] ** 2 > arr[right] ** 2) {
//             squares.unshift(arr[left] ** 2);
//             left ++;
//         } else {
//             squares.unshift(arr[right] ** 2);
//             right --;
//         }
//     }
//     return squares;
// }

const sortedSquares = (arr) => {
    const squares = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] ** 2 > arr[right] ** 2) {
            squares.unshift(arr[left] ** 2);
            left++;
        } else {
            squares.unshift(arr[right] ** 2);
            right--;
        }
    }
    return squares;
}

// console.log(sortedSquares([-4,-2,-1,0,3,5]));

// Given an array of integers, find the continuous subarray, which when sorted, results in the entire array being sorted. For example: A = [0,2,3,1,8,6,9], result is the subarray [2,3,1,8,6]
// function unsortedSubArray(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (arr[left] < arr[left + 1] && left < right) {
//         left++;
//     }
//     if (left == right) {
//         return [-1,-1];
//     }
//     while (arr[right] > arr[right - 1]) {
//         right--;
//     }

//     let minInWindow;
//     let maxInWindow;

//     for (let i=left; i<=right; i++) {
//         if (!minInWindow || arr[i] < minInWindow) {
//             minInWindow = arr[i];
//         }
//         if (!maxInWindow || arr[i] > maxInWindow) {
//             maxInWindow = arr[i];
//         }
//     }

//     for (let i=0; i<left; i++) {
//         if (arr[i] > minInWindow) {
//             left = i;
//             break;
//         }
//     }

//     for (let i=arr.length - 1; i>right; i--) {
//         if (arr[i] < maxInWindow) {
//             right = i;
//             break;
//         }
//     }

//     return [left, right]
// }

function unsortedSubArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (arr[left + 1] > arr[left] && left < arr.length - 1) {
        left++;
    }
    // Array is already sorted
    if (left == right) {
        return null;
    }
    while (arr[right] > arr[right - 1]) {
        right--;
    }
    
    let minInWindow = Infinity;
    let maxInWindow = -Infinity;

    for (let i=0; i<left; i++) {
       minInWindow = arr[i] > minInWindow ? arr[i] : minInWindow;
    }
    for (let i=arr.length - 1; i>right; i--){
        maxInWindow = arr[i] < maxInWindow ? arr[i] : maxInWindow;
    }

    while (arr[left] > minInWindow) {
        left--;
    }
    while (arr[right] < maxInWindow) {
        right++;
    }

    return [left, right];
}


console.log(unsortedSubArray([0,2,3,1,8,6,9]));
// [2,5]
console.log(unsortedSubArray([1,3,5,2,6,4,7,8,9]));
// [2,5]\
console.log(unsortedSubArray([3]));
// [-1,-1]
console.log(unsortedSubArray([3,4,8,11]));
// [-1,-1]