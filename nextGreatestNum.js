// # Find the Next Greatest Number in an array
// - You are given an array. For each element, print out that element and the next number in the array which is greater than it.
// - If there is no element greater, print -1.
// Example:
// ```javascript
// nextGreatest([4,3,5])
// =>  {4:5, 3:5, 5:-1}
//
// [4 ,3 ,4 ,6, 7]

// function nexGreatestNum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let j = i + 1;
//     while (arr[j] <= arr[i] && j < arr.length) {
//       j++;
//     }
//     arr[j] > arr[i] ? console.log(arr[i], arr[j]) : console.log(arr[i], -1);
//   }
// }

function nexGreatestNum(arr) {
  let i = 0;
  let j = 0;
  let pointer = arr[i];
  let current = arr[i + 1];
  while (i !== arr.length) {
    if (pointer < current) {
      console.log(`${pointer} --> ${current}`);
      i++;
      j = i + 1;
      pointer = arr[i];
      current = arr[j];
    } else if (j == arr.length) {
      console.log(`${pointer} --> -1`);
      current = pointer;
      i++;
      j = i + 1;
      pointer = arr[i];
      current = arr[j];
    } else {
      j++;
      current = arr[j];
    }
  }
}

//nexGreatestNum([4, 3, 5]);
nexGreatestNum([4, 3, 4, 6, 7]);
// nexGreatestNum([]);
// nexGreatestNum([3, 2, 1]);
// nexGreatestNum([4, 4, 4]);
// nexGreatestNum([4]);
