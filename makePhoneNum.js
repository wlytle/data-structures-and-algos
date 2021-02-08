// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function makePhone(arr) {
  //   return `(${arr.slice(0, 3).join("")}) ${arr.slice(4, 7).join("")}-${arr
  //     .slice(7 - 10)
  //     .join("")}`;
  return arr.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

console.log(makePhone([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
