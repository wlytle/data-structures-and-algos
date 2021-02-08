// Question 1 (discussed in video): You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.
// For example, [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3]

// function moveZerosToBeg(arr) {
//   let bound = 0;
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       temp = arr[bound];
//       arr[bound] = arr[i];
//       arr[i] = temp;
//       bound++;
//     }
//   }
//   return arr;
// }

function moveZerosToBeg(arr) {
  let boundary = 0;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp = arr[i];
      arr[i] = arr[boundary];
      arr[boundary] = temp;
      boundary++;
    }
  }
  return arr;
}

// console.log(moveZerosToBeg([4, 2, 0, 1, 0, 3, 0]));
// [0, 0, 0, 4, 1, 2, 3];

// Question 2 (discussed in the video below): Now, given an array, move all zeroes to the end of the array.
// For example, [4,2,0,1,0,3,0] -> [4,1,2,3,0,0,0]

function moveZerosToEnd(arr) {
  let bound = arr.length - 1;
  let temp;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      temp = arr[bound];
      arr[bound] = arr[i];
      arr[i] = temp;
      bound--;
    }
  }
  return arr;
}

// console.log(moveZerosToEnd([4, 2, 0, 1, 0, 3, 0]));
//[4,1,2,3,0,0,0]

//if move 0's to beg becomes move nonzeros to end non zero element order is preserved!

// You are given an array of integers and a pivot. Rearrange the array in thefollowing order:[all elements less than pivot, elements equal to pivot, elements greater than pivot]For example,a = [5,2,4,4,6,4,4,3] and pivot = 4 --> result = [3,2,4,4,4,4,5,6].Questions to Clarify:

//Q. Do numbers on each side need to be sorted?A. No, they need not be sortedQ. What if there are no numbers less than pivot?A. Then that portion (< a[X]) will not exist.

//Q. Do the numbers need to be in original order after re-arrangement?   e.g, if [4,1,4,3,5] and pivot=4, does 1 need to be before 3? E.g [1,3,4,4,5] or can   it also be [3,1,4,4,5]A.

//They need not be in original order. Any order is ok.Solution:In this problem, we have to divide the array into 3 sections.We keep 2 boundaries - ​low​ and ​high​. ​Low​ starts at 0, ​High​ starts at the end of the array.Low​ contains numbers less than pivot. ​High​ contains numbers greater than pivot. We walk throughthe array. If we encounter a number less than pivot, we put it in the ​low​ boundary. If we encountera number greater than pivot, we put it in the ​high​ boundary. If the number is equal to pivot, weignore it, effectively placing it in the middle of the two boundaries.

// function dutchFlag(arr, pivot) {
//   let low_bound = 0;
//   let high_bound = arr.length - 1;
//   let temp;
//   let i = 0;
//   while (i <= high_bound) {
//     if (arr[i] < pivot) {
//       temp = arr[low_bound];
//       arr[low_bound] = arr[i];
//       arr[i] = temp;
//       low_bound++;
//       i++;
//     } else if (arr[i] > pivot) {
//       temp = arr[high_bound];
//       arr[high_bound] = arr[i];
//       arr[i] = temp;
//       high_bound--;
//     } else if (arr[i] === pivot) {
//       i++;
//     }
//   }
//   return arr;
// }

function swap(a, i, bound) {
  let temp;
  temp = a[i];
  a[i] = a[bound];
  a[bound] = temp;
  return a;
}

function dutchFlag(a, pivot) {
  let low_bound = 0;
  let high_bound = a.length - 1;
  let i = 0;
  while (i <= high_bound) {
    if (a[i] < pivot) {
      a = swap(a, i, low_bound);
      low_bound++;
    } else if (a[i] > pivot) {
      a = swap(a, i, high_bound);
      high_bound++;
    }
    i++;
  }
  return a;
}

console.log(dutchFlag([4, 1, 4, 3, 5], 4));
//[3,1,4,4,5]
console.log(dutchFlag([4, 1, 4, 3, 5], 8));
//[3,1,4,5]
console.log(dutchFlag([4, 1, 4, 3, 5], 5));
//[3,1,4,5]

// Given an array with n marbles colored Red, White or Blue, sort them so that marbles of the same color are adjacent, with the colors in the order Red, White and Blue.
// Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue).
// For example, if A = [1,0,1,2,1,0,1,2], Output = [0,0,1,1,1,1,2,2].

function sortMarbles(marbles) {
  let redBound = 0;
  let blueBound = marbles.length - 1;
  let white = 1;
  let i = 0;
  let temp;
  while (i <= blueBound) {
    if (marbles[i] < white) {
      temp = marbles[i];
      marbles[i] = marbles[redBound];
      marbles[redBound] = temp;
      i++;
      redBound++;
    } else if (marbles[i] > white) {
      temp = marbles[i];
      marbles[i] = marbles[blueBound];
      marbles[blueBound] = temp;
      blueBound--;
    } else {
      i++;
    }
  }
  return marbles;
}

// console.log(sortMarbles([1, 0, 1, 2, 1, 0, 1, 2]));
// //[0,0,1,1,1,1,2,2]
// console.log(sortMarbles([1, 1, 2, 1, 1, 2]));
// //[1,1,1,1,2,2]
// console.log(sortMarbles([]));
// //[]
// console.log(sortMarbles([2]));
// //[2]
