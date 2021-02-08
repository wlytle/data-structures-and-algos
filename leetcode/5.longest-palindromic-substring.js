/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

function expandAroundCenter(left, right, s) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

var longestPalindrome = function (s) {
  //Trying out an expand around center approach
  if (!s?.length) return "";
  let start = 0,
    end = 1;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i, s);
    let len2 = expandAroundCenter(i, i + 1, s);
    let len = Math.max(len1, len2);
    if (len > end) {
      //reset start and end to be the beginning and end of the palindrome
      start = i - Math.floor((len - 1) / 2);
      end = len;
    }
  }
  return s.substr(start, end);
};
// @lc code=end

console.log(longestPalindrome("a"));
