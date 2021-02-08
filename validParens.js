// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// function is_valid(s) {
//   let left = ["(", "[", "{"];
//   let right = [")", "]", "}"];
//   let j = 0;
//   if (!left.includes(s[0])) return false;
//   let leftIdx = [];
//   for (let i = 0; i < s.length; i++) {
//     leftIdx[j] = left.findIndex((ele) => ele === s[i]);
//     if (leftIdx[j] !== -1) {
//       j++;
//     } else {
//       console.log(right.findIndex((ele) => ele === s[i]));
//       console.log(leftIdx);
//       leftIdx.pop();
//       if (
//         leftIdx[leftIdx.length - 1] !== right.findIndex((ele) => ele === s[i])
//       ) {
//         return false;
//       }
//       leftIdx.pop();
//       j--;
//     }
//   }
//   return true;
// }

function is_valid(s) {
  let pairs = { "(": ")", "[": "]", "{": "}" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (pairs[curr]) {
      stack.push(pairs[curr]);
    } else {
      if (stack.pop() !== curr) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(is_valid("()"));
console.log(is_valid("([{}])"));
console.log(is_valid("([{}]"));
console.log(is_valid("("));
