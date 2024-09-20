export type Puzzle = (number | null)[][];

/**
 * Perform a move in a board game (rules: https://play2048.co)
 */
export function moveBoard(
  board: Puzzle,
  move: "up" | "down" | "left" | "right"
): { board: Puzzle; end: boolean } {
  // Depending on the direction we get the row to be recalculated and apply to the game
  if (move === "left") {
    for (let i = 0; i < board.length; i++) {
      const newRow = calculateNewRow(board[i]);
      board[i] = newRow;
    }
  } else if (move === "right") {
    for (let i = 0; i < board.length; i++) {
      const newRow = calculateNewRow(board[i].reverse()).reverse();
      board[i] = newRow;
    }
  } else if (move === "up") {
    for (let i = 0; i < board.length; i++) {
      const rowToCalculate = [];
      for (let j = 0; j < board.length; j++) {
        rowToCalculate.push(board[j][i]);
      }

      const newRow = calculateNewRow(rowToCalculate);
      for (let j = 0; j < board.length; j++) {
        board[j][i] = newRow[j];
      }
    }
  } else if (move === "down") {
    for (let i = 0; i < board.length; i++) {
      const rowToCalculate = [];
      for (let j = 0; j < board.length; j++) {
        rowToCalculate.push(board[j][i]);
      }

      const newRow = calculateNewRow(rowToCalculate.reverse()).reverse();
      for (let j = 0; j < board.length; j++) {
        board[j][i] = newRow[j];
      }
    }
  }

  return { board, end: false };
}

/**
 * Generate a valid 2048 game (rules: https://play2048.co)
 * Missing to check if the board is all null (unsure if this is actually a problem)
 */
export function generate(boardSize: number) {
  const rows = new Array(boardSize);

  for (let i = 0; i < boardSize; i++) {
    rows[i] = new Array(boardSize); // generate columns

    // fill in the board
    for (let j = 0; j < boardSize; j++) {
      rows[i][j] = randomIntFromInterval(); // assigns the random value to the column
    }
  }

  return rows;
}

/**
 * Receives a row of a game and performs the sum according to the rules
 * Can simplify if we had removed the nulls from the array
 */
function calculateNewRow(row: (number | null)[]): (number | null)[] {
  const newRow = new Array();

  // Cycle to the items in the row to check if it should sum the numbers, copy or skip
  for (let j = 0; j < row.length; j++) {
    const val = row[j];

    if (val === null) {
      continue;
    }

    if (j === row.length - 1) {
      newRow.push(val);
    }

    // Uses a sliding window to find the new number
    for (let z = j + 1; z < row.length; z++) {
      const nextVal = row[z];
      if (nextVal === null) {
        // The array finish with nulls
        if (z === row.length - 1) {
          newRow.push(val);
        }

        // skip
        continue;
      } else if (nextVal !== val) {
        // found a diff number
        newRow.push(val);
        break;
      } else {
        // found the same number, add them and move the window to the addition
        newRow.push(val + nextVal);
        j = z;
        break;
      }
    }
  }

  // Pads the rest of the array with nulls or 2
  const paddingLeft = row.length - newRow.length;
  for (let index = 0; index < paddingLeft; index++) {
    const newValue = randomIntFromInterval();
    newRow.push(newValue);
  }

  return newRow;
}

/**
 * Copy from: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 */
function randomIntFromInterval() {
  const random = Math.random();

  if (random > 0.5) {
    return 2;
  } else {
    return null;
  }
}
