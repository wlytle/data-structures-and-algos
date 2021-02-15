/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let rev = 0,
    nums = x,
    digit;
  while (nums > 0) {
    digit = nums % 10;
    rev = rev * 10 + digit;
    nums = Math.floor(nums / 10);
  }
  return x === rev ? true : false;
};
// @lc code=end
