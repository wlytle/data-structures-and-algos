// Find the Last Digit
// Given a string, find the first character which is a digit, reading from right to left.
// Examples
//     findLeftmost("var_1__Int")
//         => 1
//     findLeftmost("q2q-0q")
//         => 0
//     findLeftmost("93646575")
//         => 5

function findLeftmost(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\d/.test(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(findLeftmost("var_1__Int"));
console.log(findLeftmost("q2q-0q"));
console.log(findLeftmost("93646575"));
