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

printAllValidCombinations([1, 2, 3, 4], 3);
