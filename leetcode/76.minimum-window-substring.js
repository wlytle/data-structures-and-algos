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
  console.log("Check", dict);
  for (const char in dict) {
    if (!dict[char] || subDict[char] > dict[char]) return false;
  }
  console.log("not true");
  return true;
}
// check conditional if there is a splution if check if moving left would undo solution if so move right if moving left would
var minWindow = function (s, t) {
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

  //if the char at right is in subdict add it to dict or increase it's coutn
  if (subDict[curr]) {
    dict[curr] ? (dict[curr] += 1) : (dict[curr] = 1);
  }

  while (left < s.length) {
    console.log("l", left, "r", right);
    console.log("res", res);
    curr = s[right];
    // if no valid solution yet AND
    //check if new entry provides valid solution
    // return bollean if solution check length
    if (!res.length && checkSolution(subDict, dict)) {
      res = s.substr(left, right - left + 1);
      console.log("d", dict);
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
      //   console.log("Here");
      //if left is pointing at a char that is not in t advance left or is in t but there are more of them than presenet in t i.e. if advancing left won't undoe soln advance
      if (!subDict[curr] || dict[curr] > subDict[curr]) {
        if (subDict[curr]) {
          console.log("move left", curr, dict[curr]);
          dict[curr] > 1 ? (dict[curr] -= 1) : (dict[curr] = 0);
        }
        left++;
        //
        // console.log("NowHere");
        if (right - left + 1 < res.length) {
          res = s.substr(left, right - left + 1);
          console.log(res);
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
  return res;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));

// @lc code=end
