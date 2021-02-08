// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Example

// pigLatin("glove") should return "oveglay".
// pigLatin("eight") should return "eightway".
// Hints

// split()
// test()
// join()
// push()

//assuming no punction spaces or multiple words

// function pigLatin(word) {
//   if (!word.length) return word;
//   let pigWord;
//   if (/[^aeiouyAEIOUY]/.test(word[0])) {
//     pigWord = word.replace(/(\b[^aeiouyAEIOUY]+)(\w+)\b/gi, "$2$1ay");
//   } else {
//     pigWord = word + "way";
//   }
//   return pigWord;
// }

function pigLatin(word) {
  if (!word.length) return word;
  let pigWord;
  pigWord = word.replace(/\b([aeiouy]\w+)/gi, "$1way");
  pigWord = pigWord.replace(/(\b[^aeiouy\s\b]+)(\w+)\b/gi, "$2$1ay");
  return pigWord;
}

console.log(pigLatin("challenge"));
console.log(pigLatin("Edge"));
console.log(pigLatin(""));
console.log(pigLatin("apple cake"));
console.log(pigLatin("The cat ate all of the pineapple."));
