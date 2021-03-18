/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [],
    dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (!dict[nums[i]]) dict[nums[i]] = true;
  }

  for (i = 1; i <= nums.length; i++) {
    if (!dict[i]) res.push(i);
  }
  //   return res;
};
// @lc code=end
