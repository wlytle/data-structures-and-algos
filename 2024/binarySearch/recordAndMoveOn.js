/*
Level: Easy Given a sorted array of Integers, find the target.
If the target is not found,return the element closest to the target. For example,
A = [1,2,4,5,7,8,9], Target = 6 -> Output Index = 3 or 4 (since both 5 and 7 are equally close)
Questions to Clarify:
Q. What if there are two elements equally distant from target?
A. Return either one.

Q. How do you want to return the output?
A. Return the index of the closest element.

Q. What to return if array is empty or null?
A. Return -1.
*/
// function findClosest(arr, target) {
//     if (!arr?.length) {
//         return -1;
//     }
//     let start = 0;
//     let end = arr.length -1;
//     let result = null;
//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         result = checkAndRecordValue(arr, target, mid, result);
//         if (target > arr[mid]) {
//             start = mid + 1;
//         } else if (target < arr[mid]) {
//             end = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return result;
// }

// function checkAndRecordValue(arr, target, index, result) {
//     if (Math.abs(arr[index] - target) < Math.abs(arr[result] - target) || result === null) {
//         return index;
//     }
//     return result;
// }


function findClosest(arr, target) {
    if (!arr?.length) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;
    let result = null;

    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        result = checkAndRecordValue(arr, target, mid, result);
        if (target < arr[mid]) {
            start = mid + 1;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return result;
}

const checkAndRecordValue = (arr, target, index, result) => {
    if (result === null || Math.abs(arr[index] - target) < Math.abs(arr[result] - target)) {
        return index;
    }
    return result;
}


console.log(findClosest([1, 2, 4, 5, 7, 8, 9], 6));
//3 or 4
console.log(findClosest([], 6));
// -1
console.log(findClosest(null, 6));
// -1
console.log(findClosest([9], 9));
// 0
console.log(findClosest([9], 6));
// 0