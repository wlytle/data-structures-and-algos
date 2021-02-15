/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let solutions = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1])
      twoSum(nums, -nums[i], solutions, i + 1);
  }
  return solutions;
};

function twoSum(nums, target, solutions, left) {
  // two pointer soln
  let right = nums.length - 1;
  while (left < right) {
    const low = nums[left],
      high = nums[right];
    if (low + high < target) {
      left++;
    } else if (low + high > target) {
      right--;
    } else {
      solutions.push([-target, low, high]);
      //avoid duplicate responses
      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    }
  }
  return solutions;
}
//Backtracking solution with buffer => like combinations, not working
// var threeSum = function (nums) {
//   let buffer = [],
//     solutions = [];
//   return threeSumHelper(nums, buffer, solutions, 0, 0);
// };

// function threeSumHelper(nums, buffer, solutions, bufferIdx, startIdx) {
//   //termination casses
//   // full buffer will correct solutions
//   if (bufferIdx === 3 && bufferSum(buffer) === 0) {
//     // solutions.push(buffer)
//     return true;
//   }
//   //Full buffer not a solution
//   if (bufferIdx === 3) return false;
//   //   // gone too far
//   //   if (startIdx > nums.length - 3) return;

//   for (let i = startIdx; i < nums.length; i++) {
//     buffer[bufferIdx] = nums[i];
//     if (
//       threeSumHelper(nums, buffer, solutions, bufferIdx + 1, i + 1) === true
//     ) {
//       solutions.push(buffer);
//       //   solutions = [...solutions, buffer];
//       console.log("solution", solutions, "buffer", buffer);
//     }
//   }
//   return solutions;
// }

// function bufferSum(buffer) {
//   return buffer.reduce((accum, ele) => accum + ele);
// }

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// @lc code=end
