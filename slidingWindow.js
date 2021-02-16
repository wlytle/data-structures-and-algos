// Given an array of integers A, find the sum of each sliding window of size K.Variation:​ Instead of an array, what if you were presented with a ​stream​ of numbers. A new numbercan be added anytime. You want to find the sum of the last K elements.Note​: The above problem can be solved without a Queue as well - just maintain a sum with 2pointers. However, a queue is needed for the Variation problem. We use this problem to illustratethe sliding window concept.

function slidingWindow(a, window) {
  let start = 0,
    end = window - 1,
    sum = 0;
  if (end > a.length) return null;
  for (let i = 0; i <= end; i++) {
    sum += a[i];
  }
  console.log(sum);
  while (end < a.length) {
    sum -= a[start];
    start++;
    end++;
    sum += a[end];
    console.log(sum);
  }
}

console.log(slidingWindow([1, 2, 3, 4, 5, 6], 3));
//6, 9, 12, 15
