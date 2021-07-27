/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): string[][] {
  const solved = solveCell(board, 0, 0);
  return solved as string[][];
}

function solveCell(board: string[][], x: number, y: number): string[][] {
  // checks if the current cell is solved
  if (board[x][y] !== ".") {
    if (board.every((r) => r.every((c) => c !== "."))) {
      return board;
    }

    return solveCell(
      board,
      y < board.length ? x : x + 1,
      y < board.length ? y + 1 : 0
    );
  }

  // tries to find the possible new numbers fo this cell
  var possibleNumbers: string[] = [];
  for (let n = 1; n < 10; n++) {
    if (board[x].indexOf(n.toString()) !== -1) {
      // already exists in a row
      continue;
    }

    if (board.some((r) => r[y] === n.toString())) {
      // already exists in a column
      continue;
    }

    if (isInSquare(n, Math.floor(x / 3) * 3, Math.floor(y / 3) * 3, board)) {
      // check the box thing
      continue;
    }

    possibleNumbers.push(n.toString());
  }

  // Cycle the solutions found
  for (let i = 0; i < possibleNumbers.length; i++) {
    board[x][y] = possibleNumbers[i];
    const isBoardSolved = solveCell(
      board,
      y < board.length ? x : x + 1,
      y < board.length ? y + 1 : 0
    );

    if (
      isBoardSolved &&
      isBoardSolved.every((r) => r.every((c) => c !== "."))
    ) {
      return isBoardSolved;
    }
  }

  // couldn't find a solution for this cell, roll back
  board[x][y] = ".";
  return board;
}

function isInSquare(
  n: number,
  startRow: number,
  startCol: number,
  board: string[][]
): boolean {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[startRow + r][startCol + c] === n.toString()) {
        return true;
      }
    }
  }

  return false;
}
