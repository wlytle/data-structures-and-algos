// Given a 32-bit signed integer, reverse digits of an integer.
// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

function reverseInt(int) {
  //brute force: create empty array and add numbers to back of array as you
  //take them off the front of the number
  //   let factor;
  //   int < 0 ? (factor = -1) : (factor = 1);
  //   int *= factor;
  //   let reversed = int.toString().split("").reverse();
  //   let i = 0;
  //   while (reversed[i] === "0") {
  //     console.log(reversed[i]);
  //     reversed.shift();
  //   }
  //   reversed = +reversed.join("");
  //   reversed *= factor;
  //   return reversed > 2 ** 31 - 1 || reversed < (-2) ** 31 ? 0 : reversed;

  // try to remove last digit and add it into a new number without creating an array

  let factor;
  int < 0 ? (factor = -1) : (factor = 1);
  int *= factor;
  let reversed = 0;
  while (int > 0) {
    reversed = reversed * 10 + (int % 10);
    int = Math.floor(int / 10);
    if (reversed > 2 ** 31 - 1 || reversed < (-2) ** 31)
      (int = 0), (reversed = 0);
  }
  return (reversed *= factor);
}

console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(120));
console.log(reverseInt(1534236469));
console.log(reverseInt(-65090));
