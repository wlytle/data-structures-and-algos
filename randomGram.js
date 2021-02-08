// # Varied Anagram Maker
// - Given a string, return an anagram of the string.
// - The function, given the same string, should generate a different anagram each time (results may be repeated by chance)
// ## Examples
// ```javascript
//     randomGram("pokebowl")
//     => "obwlkpeo"
//     randomGram("pokebowl")
//     => "pboowelk"
//     randomGram("111115")
//     => "511111"
// get all the chars in a random order and build a new str with them
// get all teh cahrs in order and build a new str in a  random order

// function randomGram(str) {
//   let strArr = str.split("");
//   let newStr = "";
//   while (strArr.length) {
//     let random = randomizer(strArr.length);
//     newStr += strArr[random];
//     strArr.splice(random, 1);
//   }
//   return newStr;
// }

function randomGram(str) {
  let len = str.length;
  let newStr = "";
  let indexHash = {};
  for (let i = 0; i < len; i++) {
    indexHash[i] = true;
  }
  let idx = 0;
  while (idx < len) {
    let random = randomizer(len);

    if (indexHash[random]) {
      newStr += str[random];
      indexHash[random] = false;
      idx++;
    }
  }
  return newStr;
}

function randomizer(len) {
  return Math.floor(Math.random() * len);
}

console.log(randomGram("pokebowl"));
console.log(randomGram("pokebowl"));
console.log(randomGram("pokebowl"));
console.log(randomGram("pokebowl"));
