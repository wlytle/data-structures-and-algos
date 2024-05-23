/**
 * Given an array of numbers, replace each even number with tw oof the same number. 
e.g, [1,2,5,6,8, , , ,] -> [1,2,2,5,6,6,8,8].
Assume that the array has the exact amount of space to accommodate the result.

Questions to Clarify:

Q. How do you want to return the result?
A. Modify the input array.

Q. What would an empty element contain?

A. -1
 */

function cloneEvenNumbers(array) {
    let fillPointer = array.length - 1;
    let end = getLastNumber(array)
    for (let i = end; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            fillPointer = moveToEnd(array, i, fillPointer)
            fillPointer = moveToEnd(array, i, fillPointer)
        } else {
            fillPointer = moveToEnd(array, i, fillPointer)
        }
    }
    return array
}

function moveToEnd(array, i, fillPointer) {
    array[fillPointer] = array[i];
    fillPointer--;
    return fillPointer
}

function getLastNumber(array) {
    let end = array.length - 1;
    while ( end >=0 && array[end] === -1) {
        end--;
    }
    return end;
}


console.log(cloneEvenNumbers([1, 2, 3, 6, 8, -1, -1, -1]));
// [1,2,2,3,6,6,8,8]
console.log(cloneEvenNumbers([1, 2, 0, 6, 8, -1, -1, -1, -1]));
// [1,2,2,0,0,6,6,8,8]
console.log(cloneEvenNumbers([1]));
//[1]
console.log(cloneEvenNumbers([2, -1]));
//[2,2]
console.log(cloneEvenNumbers([]));
//[]
