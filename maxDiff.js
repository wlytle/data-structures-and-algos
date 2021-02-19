// Given a list of stock prices for a company, find the maximum amount of money you can makewith one trade. A trade is a buy and sell.Questions to Clarify:
//Q. Are the stock prices given as integers or can they be a double/float?
//A. Integers
//Q. How do you want the result?
//A. Return the maximum amount of money you can make

function maxDiff(a) {
  if (!a?.length || a.length === 1) return 0;
  let minSoFar = Number.POSITIVE_INFINITY;
  let maxHere = 0;
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < minSoFar) minSoFar = a[i];
    maxHere = a[i] - minSoFar;
    if (maxHere > max) max = maxHere;
  }
  return max;
}

console.log(maxDiff([9, 3, 2, 1, 5, 7, 2, 8, 3, 4]));
//7
console.log(maxDiff([2]));
//0
console.log(maxDiff([5, 4, 3, 2, 1]));
//0
