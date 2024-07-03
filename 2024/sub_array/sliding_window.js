// Given an array of positive integers, find a subarray that sums to a given number X.
// For e.g, input = [1,2,3,5,2] and X=8, Result = [3,5] (indexes 2,3)Questions to 
// Clarify:Q. How to return the result?A. Return the start and end indices of the subarray
// .Q. What to return if the array is empty or null?A. Return null.
// Q. What to return if no subarray is found?A. Return null.
// Q. What to do if there are multiple subarrays?A. Return any one

// function subArraySum(arr, target) {
//     let start = 0;
//     let end = 0;
//     let sum = arr[0];

//     while(start < arr.length) {
//         if (start > end) {
//             end = start;
//             sum = arr[start];
//         }
//         if (sum < target) {
//             if (end < arr.length - 1) {
//                 end++;
//                 sum += arr[end];
//             } else {
//                 break;
//             }
//         } else if (sum > target) {
//             sum -= arr[start]
//             start++;
//         } else {
//             return [start, end]
//         }
//     }
//     return null
// }

function subArraySum(arr, target) {
    let start = 0;
    let end = 0;
    let sum = arr[0];

    while (start < arr.length) {
        if (start > end) {
            end = start;
            sum = arr[start];
        }
        if (sum < target) {
            if (end === arr.length - 1) {
                break;
            }
            end++;
            sum += arr[end];
        } else if (sum > target) {
            sum -= arr[start];
            start++;
        } else {
            return [start, end]
        }
    }
    return null;
}

// console.log(subArraySum([1,2,3,5,2], 8));
// //[2,3]
// console.log(subArraySum([1,77,2,3,5,2], 8));
// //[3,4]
// console.log(subArraySum([1,2,3,5,2], 99));
// //null

/*
Level: MediumGiven a String, find the longest substring with unique characters.For example: "whatwhywhere" --> "atwhy"
Questions to Clarify

:Q. How to return the result?A. Return the start and end indexes of the substring.

Q. What to return if the array is empty or null?A. Return null.

Q. So the shortest possible substring is just one character?A. Yes.Q

. What to do if there are multiple longest substrings?A. Return any one of them.

Q. Do we have only alphabets?A. No, there can be any character.
*/

// const longestUniqSubstr = (str) => {
//     if (!str?.length) {
//         return null;
//     }
//     let left = 0;
//     let right = 0;
//     const substr = {};
//     substr[str[0]] = 0;
//     let longest = 1;
//     let result = [0,0];

//     while (right < str.length - 1) {
//         right++;
//         const curr = str[right];
//         if (substr[curr] !== undefined && substr[curr] >= left) {
//            left = substr[curr] + 1; 
//         }
//         if (right - left + 1 > longest) {
//             longest = right - left + 1;
//             result = [left, right];
//         }
//         substr[curr] = right;
//     }
//     return result;
// }

// function longestUniqSubstr(str) {
//     if (!str?.length) {
//         return null;
//     }

//     let left = 0;
//     let right = 0;
//     let longest = 1;
//     let result = [0,0];
//     const substr = {};
//     substr[str[0]] = 0;

//     while (right < str.length - 1) {
//         right++;
//         const curr = str[right];
        
//         if (substr[curr] !== undefined && substr[curr] >= left) {
//             left = substr[curr] + 1;
//         }

//         if (right - left + 1 > longest) {
//             longest = right - left + 1;
//             result = [left, right];
//         }

//         substr[curr] = right;
//     }

//     return result;
// }

function longestUniqSubstr(str) {
    if (!str?.length) {
        return null;
    }
    let result = [0,0];
    let left = 0;
    let right = 0;
    let longest = 1;
    const substr = {}
    substr[str[0]] = 0;

    while (right < str.length - 1) {
        right++;
        const curr = str[right];
        if (substr[curr] !== undefined && substr[curr] >= left) {
            left = substr[curr] + 1;
        }
        if (right - left + 1 > longest) {
            longest = right - left + 1;
            result = [left, right];
        }
        substr[curr] = right;
    } 

    return result;
}

console.log(longestUniqSubstr("whatwhywhere"));
// "atwhy" -> 2, 6
// test cases
console.log(longestUniqSubstr(""));
//""
// null
console.log(longestUniqSubstr("w"));
//"w", 0,0
console.log(longestUniqSubstr("abcdefg"));
//("abcdefg"); 0,6
console.log(longestUniqSubstr("pwwkew"));
//2,4