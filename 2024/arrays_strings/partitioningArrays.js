// You are given an array of integers. Rearrange the array so that all zeroes are atthe beginning of the array.For example,a = [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3
const moveZerosToBeginning = (arr) => {
    let boundary = arr.length - 1;
    for (let i=arr.length - 1; i>=0; i--) {
        if (arr[i] !== 0) {
            swap(arr, i, boundary);
            boundary--;
        }
    }
    return arr;
}

// const swap = (arr, i, j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
// }

// console.log(moveZerosToBeginning([4,2,0,1,0,3,0]));
// // [0,0,0,4,2,1,3]
// console.log(moveZerosToBeginning([0]));
// // [0]
// console.log(moveZerosToBeginning([6]));
// [6]


// Given an array with n marbles colored Red, White or Blue, sort them so that marbles of the same color are adjacent, with the colors in the order Red, White and Blue.
// Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue).
// For example, if A = [1,0,1,2,1,0,1,2], Output = [0,0,1,1,1,1,2,2].

// function sortMarbles(marblesArray) {
//     const marbles = {
//         0: "Red",
//         1: "White",
//         2: "Blue",
//     }

//     let redBound = 0;
//     let blueBound = marblesArray.length - 1;
//     let index = 0;
    
//         while (index <= blueBound)  {
//             const marble = marblesArray[index];
//             const color = marbles[marble]
//             if (color === "Red") {
//                 swap(marblesArray, index, redBound);
//                 redBound++;
//                 index++;
//             } else if(color === "Blue") {
//                 swap(marblesArray, index, blueBound);
//                 blueBound--;
//             } else if (color === "White") {
//                 index++;
//             } else {
//                 // console.log("unkown marble color found");
//             throw new Error(`unknown marble value found, ${marble}`)
//             }
//         }
//         return marblesArray
// }

const sortMarbles = (marbles) => {
    const marbleProps = {
        0: {color: "Red"},
        1: {color: "White"},
        2: {color: "Blue"},
    }
    let highBound = marbles.length - 1;
    let lowBound = 0;
    let index = 0;

    while (index <= highBound) {
        const marble = marbles[index];
        const color = marbleProps[marble]?.color;

        if (color === "Red") {
            swap(marbles, index, lowBound);
            index++;
            lowBound++;
        } else if (color === "Blue") {
            swap(marbles, index, highBound);
            highBound--;
        } else if (color === "White") {
            index++;
        } else {
            throw new Error("Unsupported marble value of " + marble)
        }
    }
    return marbles
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}

console.log(sortMarbles([1,0,1,2,1,0,1,2]));
//[0,0,1,1,1,1,2,2]
console.log(sortMarbles([2,1,2,2,1,1,1]));
//[1,1,1,1,2,2,2]
console.log(sortMarbles([1,0]));
//[0,1]
console.log(sortMarbles([0,0,2,2,1,2,5]));
//Throw