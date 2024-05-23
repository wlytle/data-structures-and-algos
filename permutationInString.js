// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Map = {};
    const windowMap = {};
    let matches = 0;
    const window = s1.length;
    console.log("inside");
    for (let i=0; i<s1.length; i++){
        const char = s1[i]
        s1Map[char] = s1Map[char] ? s1Map[char] + 1 : 1;
    }

    for (let i=0; i<window; i++) {
        const char = s2[i]
        windowMap[char] = windowMap[char] ? windowMap[char] + 1 : 1;
        if (s1Map[char] && s1Map[char] >= windowMap[char]) {
            matches += 1
            console.log("matches", matches, char);
        }
        console.log(windowMap);
    }
    
    if (matches === s1.length) {
        return true;
    }
    for (let left=1; left<=s2.length-window; left++) {
        const right = left + window - 1;
        const prevChar = s2[left-1];
        const nextChar = s2[right]
        if (s1Map[prevChar] && s1Map[prevChar] >= windowMap[prevChar]) {
            console.log("prevChar", prevChar, s1Map, windowMap)
            matches -= 1;
        }
        windowMap[prevChar] -= 1;
        windowMap[nextChar] = windowMap[nextChar] ? windowMap[nextChar] + 1 : 1;
        if (s1Map[nextChar] && s1Map[nextChar] >= windowMap[nextChar]) {
            matches += 1;
            console.log("mathces", matches);
        }
        console.log("window", windowMap, matches)
        if (matches === s1.length) {
        return true;
    }
    }

    return false;
};

console.log(checkInclusion("hello", "ooolleoooleh"));