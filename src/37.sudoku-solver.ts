/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): string[][] {
  return [[]];
}

// Cycle the board over and over again until we add one more number.
// repeat until the board is filled
//   let isFilled = false;
//   while (isFilled === false) {
//     isFilled = true;

//     for (let i = 0; i < board.length; i++) {
//       const row = board[i];
//       const startRowSquare = Math.floor(i / 3) * 3;

//       for (let j = 0; j < row.length; j++) {
//         const col = row[j];
//         const startColSquare = Math.floor(j / 3) * 3;

//         // already filled in
//         if (col !== ".") {
//           continue;
//         }

//         isFilled = false;

//         // check the 3 rules and try to find a single value
//         for (let n = 1; n < 10; n++) {
//           if (row.indexOf(n.toString()) !== -1) {
//             // already exists in a row
//             continue;
//           }

//           if (board.some((r) => r[j] === n.toString())) {
//             // already exists in a column
//             continue;
//           }

//           if (isInSquare(n, startRowSquare, startColSquare, board)) {
//             // check the box thing
//             continue;
//           }

//           var old = board;

//           possibleNumbers.push(n.toString());
//         }
//       }
//     }
//   }

//   return board;
// }

// function isInSquare(
//   n: number,
//   startRow: number,
//   startCol: number,
//   board: string[][]
// ): boolean {

// }

// function isInSquare(
//   n: number,
//   startRow: number,
//   startCol: number,
//   board: string[][]
// ): boolean {
//   for (let r = 0; r < 3; r++) {
//     for (let c = 0; c < 3; c++) {
//       if (board[startRow + r][startCol + c] === n.toString()) {
//         return true;
//       }
//     }
//   }

//   return false;
// }
