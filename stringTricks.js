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
console.log(reverseSentence("The boat is yellow"));
//yellow is boat the
