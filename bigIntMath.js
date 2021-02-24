// Youare given two arrays that represent Big Integers. In such an array, each element in the array is a single digit number
// For example:      a = [1,6,4,3]    (1643)      b = [1,3,1]        (131)Sum = [1,7,7,4]    (1774)

function expandSmaller(smaller, x) {
  let i = 0;
  while (i < x) {
    smaller.unshift(0);
    i++;
  }
}

function add(a, b) {
  const larger = a.length > b.length ? a : b,
    smaller = a.length < b.length ? a : b;
  expandSmaller(smaller, larger.length - smaller.length);
  let carry = 0,
    temp,
    sum = [];
  for (let i = larger.length - 1; i >= 0; i--) {
    temp = larger[i] + smaller[i] + carry;
    sum[i + 1] = temp % 10;
    carry = Math.floor(temp / 10);
  }
  sum[0] = carry;
  if (sum[0] === 0 || sum[0] === undefined) sum.shift();
  return sum;
}

// console.log(add([1, 6, 4, 3], [1, 3, 1]));
// //[1, 7, 7, 4];
// console.log(add([1, 6, 4, 3], [0]));
// //[1, 6, 4, 3];

// Q.MultiplytwonumbersgivenasBigIntegers.Insuchanarray,eachelementinthearrayisasingledigitnumber.
// For example: a = [1,6,4,3]   (1643) b = [1,3,1]      (131)Product = [2,1,5,2,3,3]       (215233

function multiply(a, b) {
  const larger = a.length > b.length ? a : b,
    smaller = a.length < b.length ? a : b;
  let result = [0],
    zeros = 0;
  for (let i = smaller.length - 1; i >= 0; i--) {
    let carry = 0,
      product = [],
      temp;
    for (let j = larger.length - 1; j >= 0; j--) {
      temp = larger[j] * smaller[i] + carry;
      product[j + 1] = temp % 10;
      carry = Math.floor(temp / 10);
    }
    product[0] = carry;
    for (let k = 0; k < zeros; k++) product.push(0);
    zeros++;
    result = add(result, product);
  }
  console.log(result[0]);
  if (result[0] === 0) result.shift();
  return result;
}
console.log(multiply([1, 6, 4, 3], [1, 3, 1]));
// [2, 1, 5, 2, 3, 3];
