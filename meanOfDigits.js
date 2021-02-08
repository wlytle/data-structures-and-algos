// Create a function that returns the mean of all digits.

// Examples
// mean(42) ➞ 3

// mean(12345) ➞ 3

// mean(666) ➞ 6

// Notes
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2). The mean will always be a integer.

function meanOfDigits(int) {
  let digit = 0;
  let idx = 0;
  while (int > 0) {
    idx++;
    digit += int % 10;
    int = Math.floor(int / 10);
  }
  return Math.floor(digit / idx);
}
console.log(meanOfDigits(10));
// .exit
