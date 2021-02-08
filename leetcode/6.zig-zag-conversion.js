/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let rows = {},
    j = 0,
    direction = -1;
  for (let i = 0; i < Math.min(s.length, numRows); i++) {
    rows[i] = "";
  }
  let currRow = 0;
  while (j < s.length) {
    rows[currRow] += s[j];
    j++;
    if (currRow === 0 || currRow === Math.min(s.length, numRows) - 1)
      direction *= -1;

    currRow += 1 * direction;
  }
  let result = "";
  for (let i = 0; i < Math.min(s.length, numRows); i++) {
    result += rows[i];
  }
  return result;
};
// @lc code=end
