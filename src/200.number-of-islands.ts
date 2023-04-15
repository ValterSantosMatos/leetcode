export function numIslands(grid: string[][]): number {
  let islands: string[][] | null = [];

  for (let x = 0; x < grid.length; x++) {
    const row = grid[x];
    for (let y = 0; y < row.length; y++) {
      const element = row[y];

      if (element === "1") {
        // Checks if one of the islands already has a neighbor
        // let existingIslandKey: string | null = null;
        // let existingIslandValue: Map<number, number> | null = null;

        let existingIslandIndexes: number[] = [];
        for (let i = 0; i < islands.length; i++) {
          // check the 4 corners
          if (
            islands[i].indexOf(`${x + 1},${y}`) > -1 ||
            islands[i].indexOf(`${x - 1},${y}`) > -1 ||
            islands[i].indexOf(`${x},${y + 1}`) > -1 ||
            islands[i].indexOf(`${x},${y - 1}`) > -1
          ) {
            existingIslandIndexes.push(i);
          }
        }

        if (existingIslandIndexes.length === 0) {
          // add a new island as x,y
          islands.push([`${x},${y}`]);
        } else if (existingIslandIndexes.length === 1) {
          islands[existingIslandIndexes[0]].push(`${x},${y}`);
        } else {
          // connects the islands
          var newIsland = [`${x},${y}`];
          for (let i = existingIslandIndexes.length - 1; i >= 0; i--) {
            newIsland.push(...islands[existingIslandIndexes[i]]);
            islands.splice(existingIslandIndexes[i], 1);
          }

          islands.push(newIsland);
          console.log(islands);
        }
      }
    }
  }

  const numberOfIslands = islands?.length || 0;
  return numberOfIslands;
}
