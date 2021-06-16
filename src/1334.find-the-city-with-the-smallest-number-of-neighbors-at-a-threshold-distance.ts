export function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number
): number {
  // Using Floyd-Warshall's algorith

  // Initializes the matrix
  const matrix: number[][] = new Array(n)
    .fill(Infinity)
    .map(() => new Array(n).fill(Infinity));

  // Adds k0
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    matrix[edge[0]][edge[1]] = edge[2];
    matrix[edge[1]][edge[0]] = edge[2];
  }

  // Adds diagonal zeros
  for (let k = 0; k < n; k++) {
    matrix[k][k] = 0;
  }

  // Cycles all the nodes
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
      }
    }
  }

  // Checks how many cities are bellow the threshold
  var toReturn = 0;
  var minCitiesFound = Infinity;
  for (let k = 0; k < n; k++) {
    var numberOfCities = matrix[k].reduce((a, b) => {
      if (b <= distanceThreshold) {
        return a + 1;
      } else {
        return a;
      }
    }, 0);

    if (numberOfCities <= minCitiesFound) {
      toReturn = k;
      minCitiesFound = numberOfCities;
    }
  }

  return toReturn;
}
