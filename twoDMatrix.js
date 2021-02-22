//rotate a 2D matrix 90 degrees clockwise

function performMove(matrix, r1, r2, c1, c2, offset) {
  let temp = matrix[r1][c1 + offset];
  matrix[r1][c1 + offset] = matrix[r2 - offset][c1];
  matrix[r2 - offset][c1] = matrix[r2][c2 - offset];
  matrix[r2][c2 - offset] = matrix[r1 + offset][c2];
  matrix[r1 + offset][c2] = temp;
}

function rotate(matrix) {
  size = matrix.length;
  innerSquares = Math.floor(matrix.length / 2);
  for (let i = 0; i < innerSquares; i++) {
    let r1 = i,
      c1 = i,
      r2 = r1 + size - 1,
      c2 = c1 + size - 1;
    for (let j = i; j < size - 1; j++) {
      performMove(matrix, r1, r2, c1, c2, j);
    }
  }
  return matrix;
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
