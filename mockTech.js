//[20, 30, 110, 40 ,50], 160 => true
//[80, 20] , 160 => false
// [80, 80] ,160 => true

// function flightMovies(flightLen, movies) {
//   let dict = {};
//   for (let i = 0; i < movies.length; i++) {
//     if (dict[movies[i]]) return true;
//     dict[flightLen - movies[i]] = true;
//   }
//   return false;
// }

//boo => obo
// a

// function canBePalindrome(str) {
//     let dict = {};
//     let odd;
//     //build dictionary
//     for (let i=0; i<str.length; i++) {
//         if (dict[str[i]] === undefined)
//         {
//             dict[str[i]] = 1;
//         } else {

//             dict[str[i]] += 1
//         }
//     }
//     for(const char in dict) {
//         if (dict[char] % 2 !== 0 && odd ) {
//             return false
//         } else if(dict[char] % 2 !== 0) {
//             odd = char;
//         }
//     }
//     return true
// }

// Find the length of the longest substring that has just k distinct characters
// aaaaabbbaacccccc k=2
// *   *->
// sliding window -> Substring, Subarray!!!

function longestSubStr(str, k) {
  let start = 0,
    end = 0,
    dict = {},
    curr,
    first,
    longest = 0;
  while (end < str.length) {
    curr = str[end];
    first = str[start];
    if (
      Object.keys(dict).length > k ||
      (dict[curr] === undefined && Object.keys(dict).length === k)
    ) {
      dict[curr] = end;
      if (dict[first] === start) delete dict[first];
      start++;
    } else {
      if (end - start + 1 > longest) longest = end - start + 1;
      dict[curr] = end;
      end++;
    }
  }
  return longest;
}

console.log(longestSubStr("aaaaabbbaacccccc", 2));
//10
console.log(longestSubStr("aaaaabbbaacccccc", 3));
//16
console.log(longestSubStr("aaaaabbbaacccccc", 1));
//6
console.log(longestSubStr("a", 2));
//1
