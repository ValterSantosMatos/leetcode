export function maxIncreaseKeepingSkyline(grid: number[][]): number {
  // Calculates the skyline from the top and from the side
  const leftSkyline = grid.map((g) => Math.max(...g));
  const bottomSkyline = [];
  for (let i = 0; i < grid[0].length; i++) {
    const element = grid.map((g) => g[i]);
    bottomSkyline.push(Math.max(...element));
  }

  // Cycle the matrix and find the max increase
  let maxIncrease = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const element = grid[i][j];
      const increase = Math.min(leftSkyline[i], bottomSkyline[j]);

      if (element < increase) {
        maxIncrease = maxIncrease + increase - element;
      }
    }
  }

  return maxIncrease;
}
