// Level: Very EasyFind the nth number in the Fibonacci series. Fibonacci series is as follows:1, 1, 2, 3, 5, 8, 13, 21, ..After the first two 1’s, each number is the sum of the previous two numbers.

function fibonacci(n) {
  const dict = {};
  return calcFib(n, dict);
}

function calcFib(n, dict) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (dict[n]) return dict[n];
  result = calcFib(n - 1, dict) + calcFib(n - 2, dict);
  dict[n] = result;
  return result;
}

// function fibonacci(n) {
//   const dict = {},
//     result = [];
//   //return
//   calcFib(n, dict, result);
//   return result;
// }

// function calcFib(n, dict, result) {
//   if (n === 2) {
//     result.unshift(1);
//     result.unshift(1);
//     return;
//   } else if (n === 1) {
//     result.unshift(1);
//     return;
//   }
//   if (dict[n]) return result.unshift(dict[n]);
//   let term = calcFib(n - 1, dict, result) + calcFib(n - 2, dict, result);
//   result.unshift(term);
//   dict[n] = term;
//   return term;
//   //return result;
// }

// function calcFib(n,result) {
//   if (n === 2) {
//         result.unshift(1);
//         return result.unshift(1);
//       }

// }

// function fibonacci(n) {
//   let result = []
//   calcFib(n, result)
// }

function calcFib(current, previous, result) {
  result.push(current + previous);
}

function fib(n) {
  let result = [];
  //base cases
  if (n === 1) return result.push(1);
  if (n >= 2) {
    result.push(1);
    result.push(1);
  }

  for (let i = 1; i < n - 1; i++) {
    calcFib(result[i], result[i - 1], result);
  }
  return result;
}

// console.log(fib(5));
// console.log(fib(7));
console.log(fibonacci(5));
console.log(fibonacci(7));
