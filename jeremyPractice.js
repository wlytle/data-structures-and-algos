// "cat" "dog", dictionary
// Write function if can get from word 1 to word 2 by changin one letter
//  at a time only going through vaild words
// cat - cot - cog - dog
// print path
// print "sad news"
// a - i
// dict: dictionary.txt
//       "cat"
//       "cog"
// "Top"

// turn word1 into word2
// function changeWord(word1, word2, dict) {
//   // This function that reads in dictionary file
//   // {cat: true,
//   // dog: true}
//   const dictionary = readIn(dict);

//   let result = [],
//     i = 0;
//   while (i < word1.length) {
//     let newWord =
//       word2.subStr(0, i - 1) + word1[i] + word2.subStr(i, word2.length - 1);
//     if (dictionary[newWord]) {
//       result.push(newWord);
//       i++;
//     } else {
//       i === word2.length;
//     }
//   }
// }

// "c          a         t"
//  dat        cot       cag
//             dot

// Arr of non neg numbers, every number appears an even number of times except 1
// return odd number appearence
// [1,2, 2, 1 3, 4, 4] = > 3
// [1] => 1

// {1: true}
//[1,2,1]
// [1,1,1, 3,3]
// [4,4,4,4,5,5,5] =>5
// []
//null
// [1,2,2,3]

function findOdd(a) {
  if (!a?.length) return null;
  let dict = {},
    curr;
  for (let i = 0; i < a.length; i++) {
    curr = a[i];
    dict[curr] ? delete dict[curr] : (dict[curr] = true);
  }
  const odds = Object.keys(dict);
  return odds.length > 1 ? "Invalid input" : odds[0];
  //   for (num in dict) {
  //     return num;
  //   }
}

console.log(findOdd([1, 3, 6, 1, 6]));
//3
console.log(findOdd([1, 2, 2, 3]));
