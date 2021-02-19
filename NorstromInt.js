function findMatching(s1, s2) {
  let num = "",
    char = "",
    curr;
  //iterate through each str skipping spaces
  for (let i = 0; i < s1.length; i += 2) {
    for (let j = 0; j < s1.length; j += 2) {
      curr = s1[i];
      //if the character is in both strings and isn't a numeric add it to char
      if (curr === s2[j] && Number.isNaN(+curr)) {
        char = sort(char, curr);
        // if the charecter is in bot strs and is a numeric add it to num
      } else if (cur === s2[j]) {
        num = sort(num, curr);
      }
    }
  }
  return num + " " + char;
}
s1 = "1 2 3 A B C";
s2 = "X 11 G M 2 9 3 C N R";

console.log(findMatching(s1, s1));
