// Level: Very EasyFind the nth number in the Fibonacci series. Fibonacci series is as follows:1, 1, 2, 3, 5, 8, 13, 21, ..After the first two 1’s, each number is the sum of the previous two numbers.

function fibbonacci(n) {
  const dict = {};
  return calcFibb(n, dict);
}

function calcFibb(n, dict) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (dict[n]) return dict[n];
  result = calcFibb(n - 1, dict) + calcFibb(n - 2, dict);
  dict[n] = result;
  return result;
}

console.log(fibbonacci(5));
console.log(fibbonacci(7));
