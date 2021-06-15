export function convert(s: string, numRows: number): string {
  var grid = new Array(numRows);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = [];
  }

  var row = 0;
  var col = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Fill in all elements in this column
    var pos = col % (numRows > 1 ? numRows - 1 : numRows);
    if (pos === 0) {
      var gridRow = grid[row];
      gridRow.push(char);

      if (row === numRows - 1) {
        row = 0;
        col = col + 1;
      } else {
        row = row + 1;
      }
    } else {
      // zigzag
      for (let j = 0; j < numRows; j++) {
        var gridRow = grid[j];
        if (j === numRows - 1 - pos) {
          gridRow.push(char);
        } else {
          gridRow.push("");
        }
      }
      col = col + 1;
    }
  }

  const toReturn = grid.map((s) => s.join("")).join("");
  return toReturn;
}
