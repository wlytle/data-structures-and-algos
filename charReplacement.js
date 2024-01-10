/**
 * 424. Longest Repeating Character Replacement
Solved
Medium
Topics
Companies
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const charFreq = {};
    let maxFreq = 0;
    let maxWindow = 0;
    let start = 0;
    let end = 0;

    while (end < s.length) {
        const curr = s[end];
        charFreq[curr] = (charFreq[curr] + 1) || 1;
        maxFreq = Math.max(maxFreq, charFreq[curr]);

        while ((end - start + 1 ) - maxFreq > k) {
            charFreq[s[start]] -= 1;
            start++;
        }

        maxWindow = Math.max(maxWindow, end - start + 1);
        end++;
    }
    return maxWindow;
};


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var characterReplacement = function(s, k) {
//     const charFreq = {};
//     let maxWindow = 0;
//     let start = 0;
//     let end = 0;

//     while (end < s.length) {
//         const curr = s[end];
//         if (charFreq[curr] !== undefined) {
//             charFreq[curr] += 1;
//         } else {
//             charFreq[curr] = 1;
//         }

//         let maxFreq = Math.max(...Object.values(charFreq));
//         let windowLength = end - start + 1;
//         if (windowLength - maxFreq <= k) {
//             maxWindow = Math.max(maxWindow, windowLength);
//         } else {
//             while (windowLength - maxFreq > k) {
//                 charFreq[s[start]] -= 1;
//                 start++;
//                 maxFreq = Math.max(...Object.values(charFreq));
//                 windowLength = end - start + 1;
//             }
//         }
//         end++;
//     }
//     return maxWindow;
// };