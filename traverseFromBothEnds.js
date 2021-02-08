// Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. For example:

// [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]

// O(nlog(n))
// function squareAndSort(arr) {
//   return arr.map((i) => i ** 2).sort((a, b) => a - b);
// }

// function squareAndSort(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let square = [];
//   while (start < end) {
//     if (arr[start] ** 2 > arr[end] ** 2) {
//       square.unshift(arr[end] ** 2);
//       --end;
//     } else {
//       square.unshift(arr[start] ** 2);
//       ++start;
//     }
//   }
//   return square;
// }

// console.log(squareAndSort([-4, -2, -1, 0, 3, 5]));
// //[0,1,4,9,16,25]
// console.log(squareAndSort([-10, -9, -8, -7, 0, -1, -2]));
// console.log(squareAndSort([]));

// Given an array of integers, find the continuous subarray, which when sorted, results in the entire array being sorted. For example: A = [0,2,3,1,8,6,9], result is the subarray [2,3,1,8,6]

// function unsortedSubArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   //find bump
//   while (arr[start] < arr[start + 1]) {
//     ++start;
//     if (start === end) return null;
//   }
//   //find dip
//   while (arr[end] > arr[end - 1]) {
//     --end;
//   }
//   //find max and min of sub arr
//   let min = arr[start];
//   let max = arr[end];
//   for (let i = start; i <= end; i++) {
//     if (arr[i] > max) {
//       max === arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   // expand subb arr toward beggining
//   while (start >= 0 && arr[start - 1] > min) {
//     --start;
//   }
//   //expand sub arr toward end
//   while (end <= arr.length - 1 && arr[end + 1] < max) {
//     ++end;
//   }

//   return [start, end];
// }

function unsortedSubArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  // Find bump
  while (arr[start] <= arr[start + 1]) {
    start++;
    //if arr is already sorted
    if (start === end) return null;
  }

  //find dip
  while (arr[end] >= arr[end - 1]) {
    end--;
  }

  // find max and min of subb arr
  let max = arr[start];
  let min = arr[start];
  for (let i = start; i <= end; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  //exapnd subarr toward begginning
  while (start >= 0 && arr[start - 1] > min) {
    start--;
  }

  // expand subarr toward end
  while (end <= arr.length - 1 && arr[end + 1] < max) {
    end++;
  }
  return [start, end];
}

console.log(unsortedSubArray([0, 2, 3, 1, 8, 6, 9]));
//[2,3,1,8,6]
