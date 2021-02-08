// Level: MediumGiven an array of integers, print all combinations of size X.
// Questions to Clarify:
// Q. Can the array have duplicates?
// A. No, you can assume there are no duplicate numbers.
// Q. What to print if X is greater than the size of the array?
// A. Print nothing, as there will be no valid combinations.
// Q. What to print if the array is empty?
// A. Print nothing as there will be no combinations.

function printAllValidCombinations(arr, x) {
  if (x > arr.length || !arr?.length) return;
  let buffer = [];
  printCombosHelper(arr, x, buffer, 0, 0);
}

function printCombosHelper(arr, x, buffer, startIdx, bufferIdx) {
  //termination cases
  //buffer is full print it out
  if (bufferIdx === x) {
    printCombos(buffer);
    return;
  }
  //you've run out of array to print
  if (startIdx === arr.length) {
    return;
  }
  //fill in the buffer
  for (let i = startIdx; i < arr.length; i++) {
    buffer[bufferIdx] = arr[i];

    printCombosHelper(arr, x, buffer, i + 1, bufferIdx + 1);
  }
}

function printCombos(combo) {
  console.log(combo);
}

// printAllValidCombinations([1, 2, 3, 4], 3);

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// // Given an array of integers A, print all its subsets.For
// example:Input:​ [1, 2, 3]
// Output:[][1][2][3][1, 2][1, 3][2, 3][1, 2, 3]

// Q. Do we print out the empty set?
// A. Yes
// Q. Can we assume there are no duplicates?
// A. Yes
// Q. If the input is an empty array, do we just print out the empty set?
// A. Yes
// Q. If the input is null, should we throw an exception of simply print nothing?
// A. Let's just print nothing.

function printAllSubsets(a) {
  let buffer = [];
  printSubsetsHelper(a, buffer, 0, 0);
}

function printSubsetsHelper(a, buffer, startIdx, bufferIdx) {
  // print buffer
  printSubsets(buffer, bufferIdx);
  //termination casses
  if (bufferIdx === a.length || startIdx === a.length) return;

  //Fill the buffer
  for (let i = startIdx; i < a.length; i++) {
    buffer[bufferIdx] = a[i];
    printSubsetsHelper(a, buffer, i + 1, bufferIdx + 1);
  }
}

function printSubsets(buffer, bufferIdx) {
  console.log(buffer.slice(0, bufferIdx));
}

// printAllSubsets([1, 2, 3]);

// // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Given an array A, print all permutations of size X.For example,
// Input:A = [1,2,3]X = 2
// Output:[1, 2][1, 3][2, 1][2, 3][3, 1][3, 2]
// Same clarifying questions and answers as above
function findPerms(a, x) {
  let buffer = [],
    isInBuffer = [];
  permsHelper(a, x, buffer, 0, isInBuffer);
}

function permsHelper(a, x, buffer, bufferIdx, isInBuffer) {
  // If buffer is full then print perm
  if (bufferIdx === x) {
    printPerm(buffer);
    return;
  }
  // find the next value for the perm
  for (let i = 0; i < a.length; i++) {
    if (!isInBuffer[i]) {
      //mark index so as not to repeat it
      isInBuffer[i] = true;
      // add value to buffer
      buffer[bufferIdx] = a[i];

      //recurse to find subsequent values
      permsHelper(a, x, buffer, bufferIdx + 1, isInBuffer);

      // remove i from isInBuffer because we are now done with it
      isInBuffer[i] = false;
    }
  }
}

function printPerm(buffer) {
  console.log(buffer);
}

// findPerms([1, 2, 3], 2);

//
// <><><><<><><><<><><><<><><><<><><><<><><><<><><><<><><><<><><><<><><><<><><><<><><><

// Coin Change Problem: Given a set of coin denominations, print out the different ways you can make a target amount. You can use as many coins of each denomination as you like.

// For example: If coins are [1,2,5] and the target is 5, output will be:

// [1,1,1,1,1]

// [1,1,1,2]

// [1,2,2]

// [5]
