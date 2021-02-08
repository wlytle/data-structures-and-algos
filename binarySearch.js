// Level: EasyQ. Given a sorted array, search for a target item.

// Q. How do you want the output?A. Return the index of the target item.
// Q. What do do if target was not found?A. Return -1

// function findTarget(arr, target) {
//   let start = 0,
//     end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (arr[mid] > target) {
//       end = mid - 1;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

// function findTarget(a, target) {
//   if (!a?.length) return -1;
//   let start = 0,
//     end = a.length - 1;
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (a[mid] > target) {
//       end = mid - 1;
//     } else if (a[mid] < target) {
//       start = mid + 1;
//     } else if (a[mid] === target) return mid;
//   }
//   return -1;
// }

function findTarget(a, target) {
  if (!a?.length) return -1;
  let start = 0,
    end = a.length - 1,
    mid;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
      start = mid + 1;
    } else if (a[mid] === target) {
      return mid;
    }
  }
  return -1;
}

// console.log(findTarget([1, 2, 3, 4, 5], 2));
// console.log(findTarget([2], 2));
// console.log(findTarget([1, 2, 3, 4, 5], 5));
// console.log(findTarget([3, 4, 5], 2));

// Given a sorted array that can contain duplicates, find the first occurrence of thetarget element. For example:A = [1,3,4,6,6,6,7] and Target = 6, return index 3.Questions to Clarify:

// Q. Can I assume that the input is an integer array?A. Yes

// Q. How do you want the output?A. Return the index of the first occurrence.

// Q. What to return if the target is not found?A. Return -1

// function findFirstOccurence(arr, target) {
//   let start = 0,
//     end = arr.length - 1;
//   let mid;
//   while (start <= end) {
//     mid = start + (end - start) / 2;
//     if (
//       arr[mid] > target ||
//       (arr[mid] === target && mid > 0 && arr[mid - 1] === arr[mid])
//     ) {
//       end = mid - 1;
//     } else if (arr[mid] === target) {
//       return mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

// function findFirstOccurence(a, target) {
//   if (!a?.length) return -1;
//   let start = 0,
//     end = a.length - 1,
//     mid;
//   while (start <= end) {
//     mid = Math.floor(start + (end - start) / 2);
//     if (
//       a[mid] > target ||
//       (a[mid] === target && mid > 0 && a[mid - 1] === a[mid])
//     ) {
//       end = mid - 1;
//     } else if (a[mid] < target) {
//       start = mid + 1;
//     } else if (a[mid] === target) {
//       return mid;
//     }
//   }
//   return -1;
// }

function findFirstOccurence(a, target) {
  if (!a?.length) return -1;
  let low = 0,
    high = a.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (
      a[mid] > target ||
      (a[mid] === target && mid > 0 && a[mid - 1] === a[mid])
    ) {
      high = mid - 1;
    } else if (a[mid] < target) {
      low = mid + 1;
    } else if (a[mid] === target) {
      return mid;
    }
  }
  return -1;
}

// console.log(findFirstOccurence([1, 2, 2, 3, 4, 5], 2));
// console.log(findFirstOccurence([2], 2));
// console.log(findFirstOccurence([1, 2, 3, 4, 5], 5));
// console.log(findFirstOccurence([3, 4, 5], 2));

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// RECORD AND MOVE ON
// Level: EasyGiven a sorted array of Integers, find the target. If the target is not found,return the element closest to the target.For example,A = [1,2,4,5,7,8,9], Target = 6 -> Output Index = 3 or 4 (since both 5 and 7 are equally close)Questions to Clarify:
// Q. What if there are two elements equally distant from target?
// A. Return either one.
// Q. How do you want to return the output?
// A. Return the index of the closest element.
// Q. What to return if array is empty or null?
// A. Return -1

function record(a, mid, result, target) {
  let diff = Math.abs(target - a[result]);
  if (Math.abs(target - a[mid]) < diff || result === null) {
    return mid;
  }
  return result;
}

function recordAndMoveOn(a, target) {
  if (!a?.length) return -1;
  let start = 0,
    end = a.length - 1,
    mid,
    result = null;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    result = record(a, mid, result, target);
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
      start = mid + 1;
    } else if (a[mid] === target) {
      return mid;
    }
  }
  return result;
}

// console.log(recordAndMoveOn([1, 2, 4, 5, 7, 8, 9], 6));
// console.log(recordAndMoveOn([], 6));
// console.log(recordAndMoveOn([9], 9));
// console.log(recordAndMoveOn([9], 6));

// // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// CYCLICALLY  SORTED ARRAY
// Level: Easy Given an array that is cyclically sorted, find the minimum element.
// A cyclically sortedarray is a sorted array rotated by some number of elements. Assume all elementsare unique.For example:A = [4,5,1,2,3], which is just [1,2,3,4,5] rotated by 2Result = index 2
// Questions to Clarify:
// Q. How do you want the input
// A. Return the index of the min item.
// Q.Can the array be rotated by 0 elements? i.e, a normal sorted array?
// A. Yes

function cyclicallySortedSearch(a) {
  if (!a?.length) return -1;
  let start = 0,
    end = a.length - 1,
    mid,
    right = a[end];
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (a[mid] > right) {
      start = mid + 1;
    } else if (a[mid] <= right && (a[mid - 1] > a[mid] || mid === 0)) {
      return mid;
    } else {
      end = mid - 1;
    }
  }
  return mid;
}

// console.log(cyclicallySortedSearch([4, 5, 1, 2, 3]));

// // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// ARRAY OF UNKOWN LENGTH

// Level: MediumSearch Array of Unknown lengthYou are given an array, but you don't know the length. Write a program to finda target element in the array.Questions to Clarify:
// Q. What happens if we try to access an index that is out of bounds?
// A. An exception is thrownQ. How do you want the output?A. Return the index of target.
// Q. What to return if target is not found?
// A. Return -1

function searchUnknownLength(a, target) {
  if (!a?.length) return -1;
  let start = 0,
    end = 0,
    mid;
  //find end
  if (a[1] !== undefined) {
    end = 1;
    while (a[end * 2] !== undefined) {
      end *= 2;
    }
    while (a[end + 1] !== undefined) {
      end++;
    }
  }
  //binary search fro target
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
      start = mid + 1;
    } else if (a[mid] === target) return mid;
  }
  return -1;
}

// console.log(searchUnknownLength([1, 3, 5, 7, 9, 11, 12, 13], 7));
// console.log(searchUnknownLength([1, 3, 5, 7, 9, 11, 12, 13, 14], 7));
// console.log(searchUnknownLength([], 7));
// console.log(searchUnknownLength([1, 3, 5, 7, 9, 11, 12, 13], 10));

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Square Root!

// Find the square root of an integer X. For example, squareRoot(4) = 2. It is ok to find the integer floor of the square root. So squareRoot(5) or squareRoot(8) can also return 2. squareRoot(9) will return 3.

// Using Binary Search, you can search for square roots over the integer space. This is pretty fast because it takes O(log(n)) time. Assume that x*x is less than the integer limit.

function record(i, result, mid) {
  let diff = i - mid ** 2;
  if (!result || (diff > 0 && diff < i - result ** 2)) return mid;
  return result;
}

function squareRoot(i) {
  let start = 0,
    end = Math.floor(i / 2) + 1,
    mid,
    result = null;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    result = record(i, result, mid);
    if (mid ** 2 > i) {
      end = mid - 1;
    } else if (mid ** 2 < i) {
      start = mid + 1;
    } else if (mid ** 2 === i) {
      return mid;
    }
  }
  return result;
}

// console.log(squareRoot(4));
// console.log(squareRoot(5));
// console.log(squareRoot(9));
// console.log(squareRoot(0));
// console.log(squareRoot(1));

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Find Peak!

// Search for a Peak: A peak element in array A is an A[i] where its adjacent elements are less than A[i]. So, A[i - 1] < A[i] and A[i + 1] < A[i].

// Assume there are no duplicates. Also, assume that A[-1] and A[length] are negative infinity (-∞). So A[0] can be a peak if A[1] < A[0].

// A = [1,3,4,5,2] => Peak = 5
// A = [5,3,1] => Peak = 5
// A = [1,3,5] => Peak = 5

// Q. Can there be negative numbers in the array
// A. Yes, there can be both -ve and +ve numbers
// Q. How do we return the output?
// A. Return the index of a peak.
// Q. What if the array is empty or null?
// A. Return -1

function findPeak(a) {
  if (!a?.length) return -1;
  let start = 0,
    end = a.length - 1,
    mid,
    left,
    right;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    left = mid > 0 ? a[mid - 1] : Number.NEGATIVE_INFINITY;
    right = mid < a.length - 1 ? a[mid + 1] : Number.NEGATIVE_INFINITY;
    if (a[mid] > right && a[mid] > left) {
      return mid;
    } else if (a[mid] > right && a[mid] < left) {
      end = mid - 1;
    } else if (a[mid] < right && a[mid] > left) {
      start = mid + 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(findPeak([1, 3, 4, 5, 2]));
//3
console.log(findPeak([5, 3, 1]));
//0
console.log(findPeak([1, 3, 5]));
//2
