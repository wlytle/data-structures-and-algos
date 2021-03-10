// merge two sorted arrays

// function mergeArrays(a, b) {
//   let result = [],
//     i = 0,
//     j = 0;
//   //add elements to result until one array is exhausted
//   while (i < a.length && j < b.length) {
//     a[i] <= b[j] ? result.push(a[i++]) : result.push(b[j++]);
//   }
//   // add remaining elemnts in either array
//   while (i < a.length) {
//     result.push(a[i++]);
//   }

//   while (j < b.length) {
//     result.push(b[j++]);
//   }
//   return result;
// }

// // console.log(mergeArrays([1, 5, 7, 7], [0, 1, 2, 3]));

// function tradeIn(result, m, crates) {
//   while (crates >= m) {
//     let newCrates = 0;
//     newCrates += Math.floor(crates / m);
//     result += newCrates;
//     console.log(result);
//     crates %= m;
//     crates += newCrates;
//   }
//   return result;
// }

// function maximumContainers(scenarios) {
//   for (let i = 0; i < scenarios.length; i++) {
//     let result = 0;
//     // coerse inputs into an array mathcing [n ,cost, m]  and then destructure values for simplicity of working with it.
//     let [n, cost, m] = scenarios[i].split(" ");
//     let crates = 0;
//     //calculate number of crates that can be bought
//     result += Math.floor(n / cost);
//     crates = result;
//     n = n - cost * result;
//     //    calculate number of crates that can be obtained by trade
//     result = tradeIn(result, m, crates);

//     console.log(`${result}`);
//   }
// }

// console.log(maximumContainers(["10 2 5"]));

function permutations(t, d, buffer, inBuffer, bufferIdx, nextIdx, count) {
  // we have three increasing values in our buffer we canb return
  // if sum is within threshold increment count.
  //   let temp = buffer.length ? buffer.reduce((i, sum) => sum + i) : 0;
  console.log(buffer);
  if (bufferIdx === 3) {
    let sum = buffer.reduce((i, sum) => sum + i);
    // console.log(buffer);
    // console.log("full", count);
    if (sum <= t) count++;
    return count;
  }
  let temp = buffer.length ? buffer.reduce((i, sum) => sum + i) : 0;
  if (temp > t) {
    // console.log(buffer);
    // console.log("BAilout", count);
    return count;
  }

  for (let i = nextIdx; i < d.length - (2 - bufferIdx); i++) {
    //check if this index is already in the buffer and it meets the params
    // if (!inBuffer[i] && (bufferIdx === 0 || d[i] > buffer[bufferIdx - 1])) {
    //flag index to prevent repeating
    inBuffer[i] = true;
    // add value to buffer
    buffer[bufferIdx] = d[i];
    // recurse to fill buffer
    console.log("i", i, "next", nextIdx, "bIDx", bufferIdx);
    count = permutations(t, d, buffer, inBuffer, bufferIdx + 1, i + 1, count);

    //remove value from InBuffer check
    inBuffer[i] = false;
    // }
  }
  return count;
}

// Complete the triplets function below.
function triplets(t, d) {
  let buffer = [],
    inBuffer = [],
    count = 0;
  d.sort((a, b) => a - b);
  count = permutations(t, d, buffer, inBuffer, 0, 0, count, 0);
  return count;
}

// function triplets(t, d) {
//   d.sort((a, b) => a - b);
//   let count = 0;
//   for (let i = 0; i < d.length - 2; i++) {
//     if (d[i] > t) return count;
//     for (let j = i + 1; j < d.length - 1; j++) {
//       if (d[i] + d[j] > t) return count;
//       for (let k = j + 1; k < d.length; k++) {
//         console.log("k", d[i], d[j], d[k], d[i] + d[j] + d[k]);
//         if (d[i] + d[j] + d[k] <= t) {
//           console.log(count);
//           count++;
//         } else {
//           break;
//         }
//       }
//     }
//   }
//   return count;
// }
d = [
  99,
  9505,
  3865,
  6357,
  1153,
  5228,
  8013,
  6716,
  7157,
  672,
  4438,
  9149,
  404,
  2188,
  7923,
  94,
  2196,
  4091,
  8981,
  979,
  6853,
  6501,
  8821,
  337,
  1272,
  1393,
  7408,
  3658,
  4303,
  5668,
  878,
  6579,
  8228,
  105,
  7544,
  6517,
  2612,
  7987,
  7826,
  9336,
  9530,
  3169,
  933,
  3512,
  278,
  8930,
  4536,
  4115,
  5335,
  9560,
  8549,
  903,
  4298,
  5485,
  2503,
  5001,
  298,
  8165,
  977,
  7722,
  1123,
  9267,
  9063,
  1967,
  9425,
  4492,
  8124,
  6752,
  3099,
  1566,
  6708,
  1745,
  7633,
  9451,
  6807,
  5249,
  3144,
  4440,
  7944,
  9814,
  8024,
  3042,
  9097,
  4666,
  1816,
  8635,
  4933,
  5629,
  1729,
  7709,
  3810,
  1669,
  2327,
  73,
  194,
  7801,
  4195,
  8840,
  1490,
  6882,
];

// console.log(triplets(8, [1, 4, 2, 6, 3]));
//3
// console.log(triplets(13041, d));
//56077

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Closure stuff
function change(a) {
  // a += 2;
  a.push("Cheddar");
}

function closure(a) {
  change(a);
  return a;
}

console.log(closure(["Manchego"]));
