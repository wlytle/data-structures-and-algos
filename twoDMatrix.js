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

function print(a, r, c) {
  console.log(a[r][c]);
}

function printDiagonal(a) {
  if (!a || !a[0].length) return null;
  //edge  case of 1D array
  if (a.length <= 1 || a[0].length <= 1) {
    for (let r = 0; r < a.length; r++) {
      for (let c = 0; c < a[0].length; c++) {
        print(a, r, c);
      }
    }
    return;
  }
  let r = 0,
    c = 0,
    height = a.length - 1,
    width = a[0].length - 1,
    up = true;
  while (r <= height && c <= width) {
    print(a, r, c);
    if ((r === 0 || r === height) && c !== width) {
      // console.log("Boundary", r, c);
      c++;
      print(a, r, c);
      up = !up;
    } else if (c === 0 || c === width) {
      // console.log("Boundary", r, c);
      r++;
      print(a, r, c);
      up = !up;
    }

    if (r === height && c === width) {
      return;
    }

    up ? r-- : r++;
    up ? c++ : c--;
  }
}

// console.log(
//   printDiagonal([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 0, 1, 2],
//   ])
// );
// //1 2 5 9 6 3 4 7 0 1 8 2
// console.log(
//   printDiagonal([
//     [1, 2, 3],
//     [5, 6, 7],
//     [9, 0, 1],
//   ])
// );
// //1 2 5 9 6 3 7 0 1

// console.log(
//   printDiagonal([
//     [1, 2],
//     [5, 6],
//   ])
// );
// //1 2 5 6

// console.log(printDiagonal([[]]));
// null;

// console.log(printDiagonal([[1, 2, 3, 4, 5]]));
// // 1 2 3 4 5

//Print elements of a matrix in spiral order.Questions to Clarify:Q. Can the matrix be a rectangle?A. YesSolution:We use the concept of layers again - similar to rotating a matrix by 90 degrees.For each layer, we print out the 4 sides. To do this, we pass the ​lastRow​ and ​lastColumnof every layer. This helps us define the boundaries of the layer:©​ 2017 Interview Camp (interviewcamp.io)

// function printLayer(a, lastCol, lastRow, layer) {
//   //edge case of printng the final square
//   if (lastCol === layer && lastRow === layer) console.log(a[layer][layer]);
//   //first row
//   for (let current = layer; current < lastCol; current++) {
//     console.log(a[layer][current]);
//   }
//   //last col
//   for (let current = layer; current < lastRow; current++) {
//     console.log(a[current][lastCol]);
//   }
//   //last row
//   for (let current = lastCol; current > layer; current--) {
//     console.log(a[lastRow][current]);
//   }
//   //first col
//   for (let current = lastRow; current > layer; current--) {
//     console.log(a[current][layer]);
//   }
// }

// function spiral(a) {
//   if (!a?.length) return null;
//   if (a.length <= 1 || a[0].length <= 1) {
//     for (let r = 0; r < a.length; r++) {
//       for (let c = 0; c < a[0].length; c++) {
//         print(a, r, c);
//       }
//     }
//     return;
//   }
//   const numSquares = Math.floor(a.length / 2),
//     width = a[0].length,
//     height = a.length;
//   for (let i = 0; i <= numSquares; i++) {
//     let lastCol = width - 1 - i;
//     lastRow = height - 1 - i;
//     printLayer(a, lastCol, lastRow, i);
//   }
// }

function print(a, r, c) {
  console.log(a[r][c]);
}

function printSpiral(a, layer, lastRow, lastCol) {
  //if last cell is it's own layer other cases wont print
  if (lastRow === layer && lastCol === layer) print(a, layer, layer);
  //top Row
  for (let current = layer; current < lastCol; current++) {
    print(a, layer, current);
  }
  //right col
  for (let current = layer; current < lastRow; current++) {
    print(a, current, lastCol);
  }
  //bottom Row
  for (let current = lastCol; current > layer; current--) {
    print(a, lastRow, current);
  }
  //leftCol
  for (let current = lastRow; current > layer; current--) {
    print(a, current, layer);
  }
}

function spiral(a) {
  const numSquares = Math.min(
      Math.floor(a.length / 2),
      Math.floor(a[0].length / 2)
    ),
    width = a[0].length,
    height = a.length;
  // add edge case for single dimension matrix
  if (height <= 1 || width <= 1) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        print(a, i, j);
      }
    }
    return;
  }
  for (let layer = 0; layer <= numSquares; layer++) {
    let lastCol = width - 1 - layer,
      lastRow = height - 1 - layer;
    printSpiral(a, layer, lastRow, lastCol);
  }
}

// console.log(
//   spiral([
//     [1, 2, 3, 4],
//     [14, 15, 16, 5],
//     [13, 20, 17, 6],
//     [12, 19, 18, 7],
//     [11, 10, 9, 8],
//   ])
// );
// //1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
// console.log(
//   spiral([
//     [1, 2, 3, 4],
//     [10, 11, 12, 5],
//     [9, 8, 7, 6],
//   ])
// );
//1 2 3 4 5 6 7 8 9 10 11 12
console.log(spiral([[1, 2, 3, 4]]));
//1 2 3 4
console.log(spiral([[4]]));
//4
