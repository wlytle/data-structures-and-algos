//Input sentece
let x = "Here is a sentence12_";
//initialize dictionary
let dict = {},
  newSentence = "",
  //regex test for vowels [aeiou], spaces \s, and non-word characters \W, made case insensitive by the i and the end
  regex = /[aeiou_\s\W\d]/i;
// loop through the sentence
for (let i = 0; i < x.length; i++) {
  //set current char to lowercase and assign to a variable
  let currentChar = x[i].toLowerCase();
  // if CurrentChar isn't one of the things we test for with regex and it hasn't been seen yet add it to newSentece and the dictionary
  if (!regex.test(currentChar) && !dict[currentChar]) {
    newSentence += currentChar;
    dict[currentChar] = 1;
    // if the above condition isn't met and it's becuase we'd already seen the char then increase the count in our dictionary
  } else if (!regex.test(currentChar)) {
    dict[currentChar] += 1;
  }
}
//initialize a new sentence variable with a terrible name
let newestSentence = "";
//loop through newSente ce
for (let i = 0; i < newSentence.length; i++) {
  // set currentChar variable for readability
  currentChar = newSentence[i];
  // only if the character was only seen once we do we keep it
  if (dict[currentChar] === 1) {
    newestSentence += currentChar;
  }
}

console.log(newestSentence);
