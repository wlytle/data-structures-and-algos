/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i=0; i<board.length; i++) {
        if(!validateRow(board, i)) {
            return false;
        }
 
        if(!validateColumn(board, i)) {
            return false;
        }
 
        if (i % 3 === 0) {
            let row = i;
            let col = i;
            while(col < board.length) {
                 if (!validateGrid(board, i, col)) {
                     return false;
                 }
                  col += 3;
            }

            while(row < board.length) {
                if (!validateGrid(board, row, i)) {
                    return false;
                }
                 row += 3;
           }
        }
    }
 
    return true;
 };
 
 const validateCell = (cell, seenValues) => {
     if (cell === ".") {
         return true;
     }
     if (cell > 0 && cell < 10 && !seenValues[cell]) {
         seenValues[cell] = true;
         return true;
     }
     return false; 
 }
 
 const validateRow = (board, row) => {
     const rowValues = {};
     for (let i=0; i<board.length; i++) {
         const cell = board[row][i];
         if (!validateCell(cell, rowValues)) {
             return false;
         }
     }
     return true;
 }
 
 const validateColumn = (board, column) => {
     const colValues = {};
     for (let i=0; i<board.length; i++) {
         const cell = board[i][column];
         if (!validateCell(cell, colValues)) {
             return false;
         }
     }
     return true;
 }
 
 const validateGrid = (board, row, col) => {
    console.log("Gridd Cell", row, col);
    const gridValues = {};
    for (let i=row; i<row+3; i++) {
        for (let j=col; j<col+3; j++) {
            const cell = board[i][j];
            // console.log(gridValues);
            if (!validateCell(cell, gridValues)) {
                return false;
            }
        }
    }
    return true;
}
 
const board = [
    [".",".",".",".",".",".","5",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    ["9","3",".",".","2",".","4",".","."],
    [".",".","7",".",".",".","3",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".","3","4",".",".",".","."],
    [".",".",".",".",".","3",".",".","."],
    [".",".",".",".",".","5","2",".","."]
]
 console.log(isValidSudoku(board));
