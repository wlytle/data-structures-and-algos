// 2 Sum Problem: Given a sorted array of integers, find two numbers in the array that sumto a given integer target.For example, if a = [1,2,3,5,6,7] and target = 11, the answer will be 5 and 6.Questions to
//Clarify:Q. How do return the output?A. Return it as a pair of numbers.

//Q. What to return if there is no result?A. Return null.

//Q. Can the array have duplicates?A. Yes

//Q. If there are more than one pair that qualify, which pair should I return?      For example, if a=[2,3,4,5] and target=7, the answer could be either {2,5} or {3,4}A. Return whichever you like. As long as you return a correct pair, it’s fine

//assuming a sorted array we can traverse from both ends

function twoSum(arr, target) {
  if (!arr) return null;
  arr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target) {
      return [arr[start], arr[end]];
    } else if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    }
  }
  return null;
}

console.log(twoSum([6, 3, 5, 2, 1, 7], 4));
// #[3, 1];
console.log(twoSum([1, 2, 3, 5, 6, 7], 11));
//[6,5]
console.log(twoSum([1, 2, 2, 2, 2, 3, 3], 6));
// [3,3];
console.log(twoSum([6, 3, 5, 2, 1, 7], 499));
// #nil;
console.log(twoSum(null, 499));
// #nil;
