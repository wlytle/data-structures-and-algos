/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let dict = {},
    curr;
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    if (dict[curr] !== undefined) return [i, dict[curr]];
    dict[target - curr] = i;
  }
  return false;
};
// @lc code=end
