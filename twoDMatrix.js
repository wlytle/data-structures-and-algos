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

// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
//   ]

// Print a 2D array in Diagonal ZigZag order.For example,Input:1 2 3 45 6 7 89 0 1 2Output:1 2 5 9 6 3 4 7 0 1 8 2Questions to Clarify:
// Q. Can the matrix be a rectangle?
// A. Yes

function print(r, c) {
  console.log(a[r][c]);
}

function printDiagonal(a) {
  if (!a?.length) return null;
  //edge  case of 1D array
  if (a.length <=1 || a[0].length <=1) {
    for(let r=0; i<a.length;r++) {
      for(let c=0; i<a[0].length;c++) {
        print(r,c)
    }
  }
  let r = 0,
    col = 0,
    height = a[0].length - 1,
    width = a.length - 1,
    up = true;
  while (r < height && c < width) {

    print(r,c)
    if ((c === 0 || c === width) && r !== height) {
      r++;
      print (r,c)
      up = !up;
    } else if (r === 0 || r===width) {
      c++;
      up = !up
    }

    if (row === height && col === width) {
      return
    }

    
    //boundary conditions
    //top row starting or coming from daignolly below
  //   if ((r === 0) && dir === "BL" ) {
  //     c++;
  //     dir = "L"
  //     print(r, c);
  //     // top row and moving left
  //   } else if(r === 0 && dir === "L") {
  //     r++;
  //     c--;
  //     dir = "TR"
  //     print(r,c)
  //     // first col and moving diagonally downd left
  //   } else if((c === 0 && dir === "TR")) {
  //     r++;
  //     dir = "T";
  //     // first col and last row
  //     // first col and moving down
  //   } else if (c === 0 && dir === "T" ) {
  //     c++;
  //     r--;
  //     dir="BL"
  // } else if(c === width && dir === "BL") {
  //   r++;
  //   dir == "T";
  //   print(r,c);
  // } else if (c === width && dir === "T") {
  //   r++;
  //   c--;
  //   print(r,c);
  // } else if (r === height)
  // else if(c === height && r === ) {
  //   col++
  //   print(r,c)
  // } 
}

console.log(
  printDiagonal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
  ])
);
//1 2 5 9 6 3 4 7 0 1 8