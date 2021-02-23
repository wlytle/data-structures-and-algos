// Check if a String is a rotation of another.
// ​For example,["canada", "dacana"] -> true["canada", "canada"] -> true["canada", "canary"] -> false["dacana", "adacan"] ->
// Q. How do you want the result?A. Return a boolean (true/false).
// Q. What if both Strings are equal?A. Return true

function isRotation(rot, str) {
  //base casses to save time
  if (rot.length !== str.length) return false;
  if (rot === str) return true;
  let doubleStr = str + str;
  // for (let i=0; i<doubleStr.length; i++) {
  if (doubleStr.includes(rot)) return true;
  return false;
  // }
}
// console.log(isRotation("atbobc", "bobcat"));
// //true
// console.log(isRotation("moo", "cheese"));
// //false
// console.log(isRotation("a", "a"));
// //true

//Reverse words in a sentece
// For example:"this is a string" -> "string a is this"
// Questions to Clarify:Q. What do do with uppercase and lowercase?
// A. Ignore the cases.
// Q. What about punctuation?
// A. Assume there are no punctuations.

// This strategy won;t work in JS becuase strings are immutable

// function reverse(str, start, end) {
//   let temp;
//   while (start < end) {
//     temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     console.log(str[start], str[end]);
//     start++;
//     end--;
//   }
// }

// function reverseSentence(str) {
//   if (str.length === 0 || str.length === 1) return str;
//   let start = 0,
//     end = str.length - 1;
//   reverse(str, start, end);
//   start = 0;
//   console.log(str);
//   for (let i = 0; i < str.length; i++) {
//     if (str[i+1] === " ") {
//       end = str[i];
//       reverse(str, start, end);
//       start = end + 1;
//     }
//   }
//   return str;
// }

function reverseSentence(s) {
  let end = s.length - 1,
    start = end,
    reversed = "";
  while (start >= 0) {
    if (start === 0) {
      reversed += s.substr(start, end - start + 1) + " ";
      return reversed;
    } else if (s[start] === " ") {
      reversed += s.substr(start + 1, end - start) + " ";
      start--;
      end = start;
    } else {
      start--;
    }
  }
  return reversed;
}
// console.log(reverseSentence("The boat is yellow"));
//yellow is boat the

// Find the longest palindrome in a string. ​For example,"ab​babab​aab" -> "babab"
// Interview CampTechnique: Longest Palindromic SubstringQuestions to Clarify:
// Q. How do you want the output?
// A. Return a pair of indices that represent start and end of the substring.
// Q. Is a single character considered a palindrome?
// A. Yes

function expand(s, left, right, longest, res) {
  while (
    s[left - 1] === s[right + 1] &&
    left - 1 >= 0 &&
    right + 1 < s.length
  ) {
    left--;
    right++;
  }
  let len = right - left + 1;
  if (len > longest) {
    res = [left, right];
  }
  return res;
}

function longestPalindrome(s) {
  if (s.length === 1) return [1, 1];
  if (!s?.length) return null;
  let longest = 0,
    res = [];
  for (let i = 0; i < s.length - 1; i++) {
    //expand between chars
    if (s[i] === s[i + 1]) {
      res = expand(s, i, i + 1, longest, res);
      longest = res[1] - res[0] + 1;
      //expand around char
    } else if (s[i - 1] === s[i + 1]) {
      res = expand(s, i - 1, i + 1, longest, res);
      longest = res[1] - res[0] + 1;
    }
  }
  return res;
}

console.log(longestPalindrome("kayakpop"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("pumpkin"));
