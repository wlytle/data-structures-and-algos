// Level: MediumGiven an array of positive integers, find a subarray that sums to a given number X.For e.g, input = [1,2,3,5,2] and X=8, Result = [3,5] (indexes 2,3)Questions to Clarify:

// Q. How to return the result?A. Return the start and end indices of the subarray.

// Q. What to return if the array is empty or null?A. Return null.

// Q. What to return if no subarray is found?A. Return null.

// Q. What to do if there are multiple subarrays?A. Return any one

//use sliding window tecnique
//need to check algo edge situations where end gets ahead of start, where start reaches end first.
//Because all integers are possitive, if sum > target, shrink sum by moving start forward if sum < target grow sum by moving end forward

// function subArraySum(a, target) {
//   if (!a.length || a === null) return null;
//   let end = 0;
//   let start = 0;
//   let sum = a[0];
//   while (start < a.length) {
//     //start gets ahead so catch end up
//     if (start > end) {
//       end = start;
//       sum = a[start];
//     }
//     if (sum === target) {
//       return [start, end];
//     } else if (sum < target) {
//       if (end === a.length - 1) return null;
//       end++;
//       sum += a[end];
//     } else if (sum > target) {
//       sum -= a[start];
//       start++;
//     }
//   }
// }

function subArraySum(a, target) {
  if (!a.length || a === null) return null;
  let start = 0;
  let end = 0;
  let sum = a[0];
  while (start < a.length) {
    if (start > end) {
      end = start;
      sum = a[start];
    }
    if (sum === target) {
      return [start, end];
    } else if (sum < target) {
      if (end === a.length - 1) return null;
      end++;
      sum += a[end];
    } else if (sum > target) {
      sum -= a[start];
      start++;
    }
  }
  return null;
}

// 8
// ////////////////////////////////////////////////////

// (Level: Medium) Given a String, find the longest substring with unique characters.

// For example: "whatwhywhere" --> "atwhy"
// what if there are two substrs with the same length of uniq chars?

// Questions to Clarify:

// Q. How to return the result?A. Return the start and end indexes of the substring.

// Q. What to return if the array is empty or null?A. Return null.

// Q. So the shortest possible substring is just one character?A. Yes.

// Q. What to do if there are multiple longest substrings?A. Return any one of them.

// Q. Do we have only alphabets?A. No, there can be any character.

// function longestUniqSubstr(s) {
//   if (!s?.length) return null;
//   let start = 0;
//   let end = 0;
//   let charsHash = {};
//   charsHash[s[0]] = 0;
//   let result = [0, 0];
//   let longest = 0;
//   let curr;
//   while (end < s.length - 1) {
//     end++;
//     curr = s[end];
//     //curr is already in current substring
//     if (charsHash[curr] !== undefined && charsHash[curr] >= start) {
//       start = charsHash[curr] + 1;
//     }
//     charsHash[curr] = end;

//     if (end - start + 1 > longest) {
//       longest = end - start + 1;
//       result = [start, end];
//     }
//   }

//   return result;
// }

// function longestUniqSubstr(s) {
//   if (!s?.length) return null;
//   let start = 0;
//   let end = 0;
//   let charsHash = {};
//   charsHash[s[0]] = 0;
//   let result = [0, 0];
//   let longest = 0;
//   let curr;
//   while (end < s.length - 1) {
//     end++;
//     curr = s[end];
//     if (charsHash[curr] !== undefined && charsHash[curr] >= start) {
//       start = charsHash[curr] + 1;
//     }
//     charsHash[curr] = end;

//     if (end - start + 1 > longest) {
//       longest = end - start + 1;
//       result = [start, end];
//     }
//   }
//   return result;
// }

// function longestUniqSubstr(s) {
//   if (!s.length || !s) return null;
//   let start = 0,
//     end = 0,
//     hash = {},
//     subStrLen = 0,
//     result = [],
//     curr;
//   while (end < s.length) {
//     curr = s[end];
//     if (hash[curr] !== undefined && hash[curr] >= start) {
//       start = hash[curr] + 1;
//       hash[curr] = end;
//       end++;
//     } else {
//       if (end - start + 1 > subStrLen) {
//         subStrLen = end - start + 1;
//         result[0] = start;
//         result[1] = end;
//       }
//       hash[curr] = end;
//       end++;
//     }
//   }
//   return result;
// }

function longestUniqSubstr(s) {
  if (!s.length) return null;
  let start = 0,
    end = 0,
    longest = 0,
    curr,
    hash = {},
    result = [];

  while (end < s.length) {
    curr = s[end];
    if (hash[curr] !== undefined && hash[curr] >= start) {
      start = hash[curr] + 1;
      hash[curr] = end;
      end++;
    } else {
      if (end - start + 1 > longest) {
        longest = end - start + 1;
        result = [start, end];
      }
      hash[curr] = end;
      end++;
    }
  }
  return result;
}

console.log(longestUniqSubstr("whatwhywhere"));
// "atwhy" -> 2, 6
// test cases
console.log(longestUniqSubstr(""));
//""
console.log(longestUniqSubstr("w"));
//"w"
console.log(longestUniqSubstr("abcdefg"));
//("abcdefg");
