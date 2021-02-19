function findMatching(s1, s2) {
  first = s1.split(" ");
  second = s2.split(" ");
  console.log(first);
  let num = "",
    char = "",
    curr;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      curr = first[i];
      //if the character is in both strings and isn't a numeric add it to char
      if (curr === second[j] && Number.isNaN(+curr)) {
        char += " " + curr;
        // char = sort(char, curr);
        // if the charecter is in bot strs and is a numeric add it to num
      } else if (curr === second[j]) {
        num += " " + curr;
        // num = sort(num, curr);
      }
    }
  }
  return num + char;
}
s1 = "1 2 3 A B C";
s2 = "X 11 G M 2 9 3 C N R";

console.log(findMatching(s1, s2));
