//rotate a 2D matrix 90 degrees clockwise

function rotate(matrix) {
  size = matrix.length;
  innerSquares = MAth.floor(matrix.length / 2) - 1;
  for (let x = 0; x < innerSquares; x++) {
    let r1 = i,
      c1 = i,
      r2 = r1 + size - 1,
      c2 = c1 + size - 1;
    for (let j = 1; j < size - 1; j++) {}
  }
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
//   ]
