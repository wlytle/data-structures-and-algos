// Homework Problem (Level: Easy)

// Given a sentence, reverse the words of the sentence. For example, "i live in a house" becomes "house a in live i"

//use reverse Traversal

// function reverseSentence(str) {
//   if (!str) return "";
//   let newStr = "";
//   let end = str.length - 1;
//   let start = end;
//   while (start >= 0) {
//     if (start === 0) {
//       //for (let i = start; i <= end; i++) {
//       newStr += str.slice(start, end + 1);
//       start--;
//       //}
//     } else if (str[start] === " ") {
//       //   for (let i = start + 1; i <= end; i++) {
//       newStr += str.slice(start, end + 1);
//       //}
//       newStr += " ";
//       end = start - 1;
//       start = end;
//     } else {
//       start--;
//     }
//   }
//   return newStr;
// }

// function reverseSentence(str) {
//   if (!str) return "";
//   let newStr = "";
//   let end = str.length - 1;
//   let start = end;
//   while (start >= 0) {
//     if (start === 0) {
//       newStr += str.slice(start, end + 1);
//     } else if (str[start] === " ") {
//       newStr += str.slice(start + 1, end + 1);
//       newStr += " ";
//       end = start - 1;
//     }
//     start--;
//   }
//   return newStr;
// }

function reverseSentence(str) {
  if (!str) return "";
  let newStr = "";
  let end = str.length - 1;
  let start = end;

  while (start >= 0) {
    if (str[start] === " ") {
      newStr += str.slice(start + 1, end + 1) + " ";
      end = start - 1;
    } else if (start === 0) {
      newStr += str.slice(start, end + 1) + " ";
    }
    start--;
  }
  return newStr;
}

//test cases

console.log(reverseSentence(""));
//''
console.log(reverseSentence("a b c"));
//"c b a"
console.log(reverseSentence("Cat"));
//("cat");
console.log(reverseSentence("Cat dog"));
//("dog cat");
console.log(reverseSentence(null));
//("dog cat");
console.log(reverseSentence("i live in a house"));
//("house a in live i");
