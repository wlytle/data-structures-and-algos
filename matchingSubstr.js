// Given two strings, return an array of every matching substring
// Example Input and Output
// in: 'te', 'test'
// Out: ['t', 'te', 'e']

// Assume you are given a single word strings with no white space.
// Letter case does not matter! the return should be in all lowercase or all uppercase.
// If there is no sub string return false.

function matchSubStr(str1, str2) {
  // lowercase everythin, find shorttest string and check all the short string substring components with te largest string

  // could loop through twice checking for 0-1,2,...length mathcing strings then 1-2,3...length, 2-length ...

  //cat
  // c ca cat a at t
  let solution = [];
  let short, long;
  if (str1.length < str2.length) {
    short = str1.toLowerCase();
    long = str2.toLowerCase();
  } else {
    long = str1.toLowerCase();
    short = str2.toLowerCase();
  }
  for (let i = 0; i < short.length; i++) {
    let substr = "";
    for (let j = i; j < short.length; j++) {
      substr += short[j];
      if (long.match(substr)) solution.push(substr);
    }
  }
  return solution.length === 0 ? false : solution;
}
console.log(matchSubStr("te", "test"));
