// function combos(arr, length) {
//     const buffer = Array(length);

//     printCombos(arr, buffer, 0, 0)
// }
// function printCombos(arr, buffer, startIndex, bufferIndex) {
//     if (bufferIndex === buffer.length) {
//         console.log(buffer);
//         return;
//     }
//     if (startIndex === arr.length) {
//         return;
//     }

//     for (let i=startIndex; i<arr.length; i++) {
//     //    const newBuffer = buffer;
//        buffer[bufferIndex] = arr[i];
       
//        printCombos(arr, buffer, i + 1, bufferIndex + 1)
//     }
// }

// combos([1,2,3,4,5,6,7], 3)

function printCombos(arr, len) {
    if (arr.length === 0 || len === 0) {
        return;
    }

    const buffer = Array(len);

    printCombosHelper(arr, buffer, 0, 0);
}

function printCombosHelper(arr, buffer, startIndex, bufferIndex) {
    if (bufferIndex === buffer.length) {
        console.log(buffer);
        return;
    }
    if (startIndex === arr.length) {
        return;
    }

    for (let i = startIndex; i < arr.length; i++) {
        buffer[bufferIndex] = arr[i];

        printCombosHelper(arr, buffer, i + 1, bufferIndex + 1);
    }
}

// printCombos([1,2,3,4,5,6,7], 3)

/*
Level: Medium
Phone Number Mnemonics: Given an N digit phone number, print all the strings that canbe made from that phone number. 
Since 1 and 0 don't correspond to any characters, ignorethem.
For example:213 => AD, AE, AF, BD, BE, BF, CE, CE, CF
456 => GJM, GJN, GJO, GKM, GKN, GKO,.. etc.

Q. Is the phone number of a specific size?
A. No, it can be of any size

Q. Can we assume that the input will have only digits?
A. Yes

Q. Does the string have to be a valid English word?
A. No, the string can be anything.

Q. How do we handle if phone number is empty or null?
A. Print nothing
*/

// function printWords(phoneNumber) {
//     if (!phoneNumber?.length) {
//         return;
//     }

//     const buffer = Array(phoneNumber.length);

//     printWordsHelper(phoneNumber, buffer, 0, 0);
// }

// function printWordsHelper(phoneNumber, buffer, startIndex, bufferIndex) {
//     // Termination cases
//     if (bufferIndex >= buffer.length || startIndex >= phoneNumber.length) {
//         console.log(buffer);
//         return;
//     }
//     const letters = getLetters(phoneNumber[startIndex]);
    
//     if (!letters?.length) {
//         printWordsHelper(phoneNumber, buffer, startIndex + 1, bufferIndex)
//     }

//     for (const letter of letters) {
//         buffer[bufferIndex] = letter;
//         printWordsHelper(phoneNumber, buffer, startIndex + 1, bufferIndex +  1);
//     }
// }


function printWords(phoneNumber) {
    if(!phoneNumber?.length) {
        return;
    }

    const buffer = Array(phoneNumber.length);

    printWordsHelper(phoneNumber, buffer, 0, 0);
}

function printWordsHelper(phoneNumber, buffer, numIndex, bufferIndex) {
    // termination cases
    if (bufferIndex === buffer.length || numIndex === phoneNumber.length) {
        console.log(buffer);
        return;
    }

    const letters = getLetters(phoneNumber[numIndex]);

    if (!letters.length) {
        printWordsHelper(phoneNumber, buffer, numIndex + 1, bufferIndex)
    }

    for (const letter of letters) {
        buffer[bufferIndex] = letter;

        printWordsHelper(phoneNumber, buffer, numIndex + 1, bufferIndex + 1);
    }
}

function getLetters(num) {
    switch (num) {
        case (1):
            return [];
        case (2):
            return ['a', 'b', 'c'];
        case (3):
            return ['d', 'e', 'f'];
        case (4):
            return ['g', 'h', 'i']; 
        case (5):
            return ['j', 'k', 'k'];
        case (6):
            return ['m', 'n', 'o'];
        case (7):
            return ['p', 'q', 'r', 's'];
        case (8):
            return ['t', 'u', 'v'];
        case (9):
            return ['w', 'x', 'y', 'z'];
        default:
            throw new Error("Invalid number dood!")
        
    }
}

// console.log(printWords([2,1,3]));
// // AD, AE, AF, BD, BE, BF, CE, CE, CF
// console.log(printWords([2,3,1]));
// // AD, AE, AF, BD, BE, BF, CE, CE, CF
// console.log(printWords([4, 5, 6]));
// //456 => GJM, GJN, GJO, GKM, GKN, GKO,.. etc

/*
Level: Medium
Given an array of integers A, print all its subsets. 
For example:Input:​ [1, 2, 3]Output:[][1][2][3][1, 2][1, 3][2, 3][1, 2, 3]

Questions to Clarify: 
Q. Do we print out the empty set?
A. Yes

Q. Can we assume there are no duplicates?
A. Yes

Q. If the input is an empty array, do we just print out the empty set?
A. Yes

Q. If the input is null, should we throw an exception of simply print nothing?
A. Let's just print nothing
*/

// function printSubsets(arr) {
//     if (!arr) {
//         return;
//     }

//     const buffer = Array(arr.length) 

//     printSubsetsHelper(arr, buffer, 0, 0)
// }

// function printSubsetsHelper(arr, buffer, arrIndex, bufferIndex){
//     //termination cases
//     print(buffer, bufferIndex)
//     if (bufferIndex === buffer.length || arrIndex === arr.length) {
//         return;
//     }
//     for (let i = arrIndex; i < arr.length; i++) {
//         buffer[bufferIndex] = arr[i];

//         printSubsetsHelper(arr, buffer, i + 1, bufferIndex + 1);
//     }

//     return;

// }

// function print(buffer, bufferIndex) {
//     console.log(buffer.slice(0, bufferIndex), bufferIndex);
// }

function printSubsets(arr) {
    if (!arr) {
        return;
    }

    const buffer = Array(arr.length);

    printSubsetsHelper(arr, buffer, 0, 0);
}

function printSubsetsHelper(arr, buffer, arrIndex, bufferIndex) {
    print(buffer, bufferIndex)

    if (bufferIndex === buffer.length || arrIndex === arr.length) {
        return;
    }

    for (let i = arrIndex; i < arr.length; i++) {
        buffer[bufferIndex] = arr[i];

        printSubsetsHelper(arr, buffer, i + 1, bufferIndex + 1);
    }
}

function print(arr, index) {
    console.log(arr.slice(0, index));
}

// console.log(printSubsets([]));
// //[]
// console.log(printSubsets(null));
// //
// console.log(printSubsets([1,2,3]));
// // [][1][2][3][1, 2][1, 3][2, 3][1, 2, 3]

/*
Level: Medium
Given an array A, print all permutations of size X.For example,
Input:A = [1,2,3]X = 2Output:[1, 2][1, 3][2, 1][2, 3][3, 1][3, 2]

Questions to Clarify:
Q. Can we assume there are no duplicates?
A. Ye

Q. If the input is an empty array, do we just print nothing?
A. Yes

Q. If the input is null, should we throw an exception of simply print nothing?
A. Let's just print nothing.
*/

// function printPermutations(arr, len) {
//     if (!arr) {
//         return;
//     }

//     const buffer = Array(len);
//     const isInBuffer = Array(len).fill(false);

//     printPermutationsHelper(arr, buffer, isInBuffer, 0 ,0);
// }

// function printPermutationsHelper(arr, buffer, isInBuffer, arrIndex, bufferIndex) {
//     if (bufferIndex === buffer.length) {
//         console.log(buffer);
//         return;
//     }
//     // if (arrIndex === arr.length) {
//     //     return;
//     // }

//     for (let i = 0; i < arr.length; i++) {
//         if (isInBuffer[i]) {
//             continue;
//         }
        
//         buffer[bufferIndex] = arr[i];
//         isInBuffer[i] = true;
//         printPermutationsHelper(arr, buffer, isInBuffer, i + 1, bufferIndex + 1);
//         isInBuffer[i] = false;
//     } 
// }

function printPermutations(arr, len) {
    if (!arr) {
        return;
    }

    const buffer = Array(len);
    const isInBuffer = Array(len).fill(false);

    printPermutationsHelper(arr, buffer, isInBuffer, 0, 0)
}

function printPermutationsHelper (arr, buffer, isInBuffer, arrIndex, bufferIndex) {
    if (bufferIndex === buffer.length) {
        console.log(buffer);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (isInBuffer[i]) {
            continue;
        }

        buffer[bufferIndex] = arr[i]
        isInBuffer[i] = true;
        printPermutationsHelper(arr, buffer, isInBuffer, i + 1, bufferIndex + 1);
        isInBuffer[i] = false;
    }
}


// console.log(printPermutations([1], 1));
// //[1]
// console.log(printPermutations([1,2,3], 2));
// // [1, 2][1, 3][2, 1][2, 3][3, 1][3, 2]
// console.log(printPermutations([1,2,3,4,5], 3));


/*
Level: Medium
Coin Change Problem: Given a set of coin denominations, print out the different ways you can make a target amount.
You can use as many coins of each denomination as you like.
For example: If coins are [1,2,5] and the target is 5, output will be:[1,1,1,1,1][1,1,1,2][1,2,2][5]
*/

// function makeChange(coins, target) {
//     if (!coins || target <= 0) {
//         return;
//     }

//     makeChangeHelper(coins, target, [], 0, 0);
// }

// function makeChangeHelper(coins, target, buffer, coinIndex) {
//     if (sum(buffer) === target) {
//         console.log(buffer);
//         return;
//     }
//     if (sum(buffer) > target) {
//         return;
//     }

//     for (let i = coinIndex; i < coins.length; i++) {
//         buffer.push(coins[i]);
//         makeChangeHelper(coins, target, buffer, i);
//         buffer.pop()
//     }
// }

// function sum(arr) {
//     return arr.reduce((sum, i) => sum + i, 0);
// }

function makeChange(coins, target) {
    if (!coins || target <= 0) {
        return;
    }

    makeChangeHelper(coins, target, [], 0, 0);
}

function makeChangeHelper(coins, target, buffer, coinIndex, sum) {
    if (sum === target) {
        console.log(buffer);
        return;
    }

    if (sum > target) {
        return;
    }

    for (let i = coinIndex; i < coins.length; i++) {
        buffer.push(coins[i]);
        makeChangeHelper(coins, target, buffer, i, sum + coins[i]);
        buffer.pop();
    }
}

console.log(makeChange([1,2,5], 5));
//[1,1,1,1,1][1,1,1,2][1,2,2][5]
console.log(makeChange([2], 5));
//