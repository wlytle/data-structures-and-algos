/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    cleanString = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const length = cleanString.length;
    console.log(cleanString, length);
    if (length === 1) {
        return true;
    }
    
    let left;
    let right;
    if (length % 2 === 0) {
        left = Math.floor(length / 2) - 1;
        right = left + 1;
    } else {
        left = Math.floor(length / 2) - 1;
        right = left + 2;
    }
    console.log(left, cleanString[left], right, cleanString[right]);
    while (left >= 0) {
        if (cleanString[left] !== cleanString[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("aa"));