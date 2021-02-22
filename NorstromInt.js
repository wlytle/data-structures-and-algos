//Sort list
function sort(list, value) {
  let k = 0;
  //find location in array where value should be when sorted
  while (k < list.length && value > list[k]) {
    k++;
  }
  //add value to list
  list.splice(k, 0, value);
  return list;
}

function findMatching(s1, s2) {
  //check if both inputs have values and are not null
  if (!s1?.length && !s2?.length) return null;
  // split stirng inputs into arrays to deal with space deliniation
  first = s1.split(" ");
  second = s2.split(" ");
  let num = [],
    char = [],
    curr;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      curr = first[i];
      //if the character is in both strings and isn't a numeric add it to char
      if (curr === second[j] && Number.isNaN(+curr)) {
        char = sort(char, curr);
        break;
        // if the charecter is in bot strs and is a numeric add it to num
      } else if (curr === second[j]) {
        num = sort(num, curr);
        break;
      }
    }
  }
  //if no matching chars return null
  if (!num.length && !char.length) return null;
  //combine sorted alpha and numeric lists
  return num.join(" ") + " " + char.join(" ");
}

// function findMatching(s1, s2) {
//   first = s1.split(" ");
//   second = s2.split(" ");
//   first.sort((a, b) => a - b);
//   second.sort((a, b) => a - b);
//   console.log(first, second);
// }

s1 = "6 0 2 4 7 1 8 3 9 5";
s2 = "A1 3 G DOG 18 3 9 E BIRD ONE 5 U J X2";

// s1 = "1 2 3 4 5 6 7 8 9 0";
// s2 = "A B C D E F G";
console.log(findMatching(s1, s2));
