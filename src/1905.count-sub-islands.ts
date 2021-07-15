export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  var sub = 0;
  for (let x = 0; x < grid2.length; x++) {
    const row = grid2[x];
    for (let y = 0; y < row.length; y++) {
      if (grid2[x][y] === 1) {
        const isSub = checkIsSub(grid1, grid2, x, y);
        if (isSub) {
          sub = sub + 1;
        }
      }
    }
  }

  return sub;
}

function checkIsSub(
  grid1: number[][],
  grid2: number[][],
  x: number,
  y: number
): boolean {
  // End of the island on grid 2
  if (!grid2[x] || !grid2[x][y] || grid2[x][y] === 0) {
    return true;
  }

  // We have visited this node so we turn it into 0 (so we don't jump it again)
  grid2[x][y] = 0;

  // Navigates the grid 2 first
  const a = checkIsSub(grid1, grid2, x + 1, y);
  const b = checkIsSub(grid1, grid2, x - 1, y);
  const c = checkIsSub(grid1, grid2, x, y + 1);
  const d = checkIsSub(grid1, grid2, x, y - 1);
  const isValid = a && b && c && d;

  // Checks if its part of grid 1
  if (grid1[x][y] === 0) {
    return false;
  }

  return isValid;
}
