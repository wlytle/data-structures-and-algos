/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//check solution
function checkSolution(subDict, dict) {
  for (const char in subDict) {
    if (!dict[char] || subDict[char] > dict[char]) return false;
  }
  return true;
}
// check conditional if there is a splution if check if moving left would undo solution if so move right if moving left would
var minWindow = function (s, t) {
  if (s === t) return t;
  let subDict = {},
    dict = {},
    curr;
  //Build substring dictionary to have count of all chars in t
  for (const char in t) {
    let curr = t[char];
    subDict[curr] ? (subDict[curr] += 1) : (subDict[curr] = 1);
  }

  let left = 0,
    right = 0,
    res = "";
  curr = s[right];
  //if the char at right is in subdict add it to dict or increase it's count
  if (subDict[curr]) {
    dict[curr] ? (dict[curr] += 1) : (dict[curr] = 1);
  }
  right++;
  while (right < s.length) {
    curr = s[right];
    // if no valid solution yet AND
    //check if new entry provides valid solution
    // return bollean if solution check length
    if (!res.length && checkSolution(subDict, dict)) {
      res = s.substr(left, right - left + 1);
      right++;
      // no solution yet and the current window is not a valid solution advance right pointer
    } else if (!res.length) {
      right++;
      //if the char at right is in subdict add it to dict or increase it's coutn
      if (subDict[curr]) {
        dict[curr] ? (dict[curr] += 1) : (dict[curr] = 1);
      }
      //Already a valid solution has been found
    } else {
      let curr = s[left];
      //if left is pointing at a char that is not in t advance left or is in t but there are more of them than presenet in t i.e. if advancing left won't undo soln advance
      if (!subDict[curr] || dict[curr] > subDict[curr]) {
        if (subDict[curr]) {
          dict[curr] > 1 ? (dict[curr] -= 1) : (dict[curr] = 0);
        }
        left++;
        if (right - left + 1 < res.length) {
          res = s.substr(left, right - left + 1);
        }
      } else {
        let curr = s[right];
        right++;
        //if the char at right is in subdict add it to dict or
        if (subDict[curr]) {
          dict[curr] ? (dict[curr] += 1) : (dict[curr] = 1);
        }
      }
    }
  }
  // check remaining options moving left pointer to the end
  while (left < s.length) {
    let curr = s[left];
    //if left is pointing at a char that is not in t advance left or is in t but there are more of them than presenet in t i.e. if advancing left won't undo soln advance
    if (!subDict[curr] || dict[curr] > subDict[curr]) {
      if (subDict[curr]) {
        dict[curr] > 1 ? (dict[curr] -= 1) : (dict[curr] = 0);
      }
      left++;

      if (right - left < res.length) {
        res = s.substr(left, right - left);
      }
    } else {
      return res;
    }
  }
  return res;
};

// console.log(minWindow("ADOBECODEBANC", "ABC"));

// @lc code=end
