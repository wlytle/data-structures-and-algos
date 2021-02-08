// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

function longestPalindrome(s) {
  let hash = {};
  for (const i of s) {
    if (!hash[i]) {
      hash[i] = 1;
    } else {
      hash[i] += 1;
    }
  }
  let count = 0;
  for (const i in hash) {
    if (hash[i] === s.length) return hash[i];
    if (hash[i] % 2 === 0) {
      count += hash[i];
    } else {
      count += hash[i] - 1;
    }
  }

  if (count % 2 === 0 && count < s.length) {
    console.log("RAT");
    count += 1;
  }
  return count;
}

console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("bananas"));
// console.log(longestPalindrome("tattarrattat"));
// console.log(longestPalindrome("ccd"));
