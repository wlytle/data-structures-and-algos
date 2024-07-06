// function binarySearch(arr, target) {
//     if (!arr?.length || target === null) {
//         return -1;
//     }
//     let start = 0;
//     let end = arr.length - 1;

//     while(start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);
//         if (target > (arr[mid])) {
//             start = mid + 1;
//         } else if (target < arr[mid]) {
//             end = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }

// function binarySearch(arr, target) {
//     if (!arr?.length || target === null) {
//         return -1;
//     }
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         const mid = start + ((end - start) >> 1);
//         if(target > arr[mid]) {
//             start = mid + 1;
//         } else if(target < arr[mid]) {
//             end = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }

function binarySearch(arr, target) {
    if (!arr?.length || target === null) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(target > arr[mid]) {
            start = mid + 1;
        } else if(target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch([2,4,6,8,10], 4));
//1
console.log(binarySearch([2,4,6,8,10], 10));
//4
console.log(binarySearch([2,4,6,8,10], 2));
//0
console.log(binarySearch([2], 2));
//0
console.log(binarySearch([2,4,6,8,10], 42));
//-1