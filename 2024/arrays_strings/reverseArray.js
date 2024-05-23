// Given an array, reverse the order of its elements.For example, [3,5,2,5,2,3,9] → [9,3,2,5,2,5,3]Questions to Clarify:Q. Should the output be a new array or the existing array modified?A. Modify the existing array.

const reverseArray = array => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        swap(array, left, right);
        left++;
        right--;
    }
    return array
}

const swap = (array, left, right) => {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;    -
}

console.log(reverseArray([3, 5, 2, 5, 2, 3, 9]));
console.log(reverseArray([3]));
console.log(reverseArray([3, 5]));
console.log(reverseArray([]));