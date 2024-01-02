// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

const DELIMTER = "#";

/**
 * @param {Array} strs a list of strings
 */
function encode(strs){
    let encodedString = "";
    strs.forEach(string => {
        encodedString += string.length + DELIMTER + string;
    })
    return encodedString
}

/**
 * @param {Array} strs a list of strings
 */
function decode(str){
    let left = 0;
    let right = 1;
    const decodedString = [];

    while (left < str.length) {
        while (str[right] !== DELIMTER) {
            right++;
        }
        const wordLength = +str.slice(left, right);
        const word = str.slice(right + 1, right + 1 + wordLength)
        decodedString.push(word);
        left = right + wordLength + 1;
        right = left + 1
    }
    return decodedString;
}

const test = (strs) => {
    const encoded = encode(strs);
    const decoded = decode(encoded);

    if (decoded.length !== strs.length) {
        console.log(false, "   ", strs, decoded)
        return;
    }
    for (let i=0; i<strs.length; i++) {
        if (strs[i] !== decoded[i]) {
            console.log(false, "   ", strs, decoded);
            return;
        }
    }
    console.log(true, decoded);
}

test(["a", "dog", "is", "good"])
test(["#31a", "d!@#$!og", "i#4s", "g___####4343##ood"])
test([""])
test(["",""])
test(["#31a", "d!@#$!og", "i#4s", "g___####4343##ood", "really really really long string with spaces!!!"])