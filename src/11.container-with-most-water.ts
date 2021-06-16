export function maxArea(height: number[]): number {
  // // brute force
  // let maxArea = -Infinity;

  // for (let i = 0; i < height.length; i++) {
  //   const first = height[i];
  //   for (let j = height.length - 1; j > i; j--) {
  //     const second = height[j];

  //     const area = (j - i) * Math.min(first, second);
  //     if (area > maxArea) {
  //       maxArea = area;
  //     }
  //   }
  // }

  // return maxArea;

  // Initialize stuff
  let firstIndex = 0;
  let secondIndex = height.length - 1;
  let maxArea = -Infinity;

  let cont = true;
  while (cont) {
    let first = height[firstIndex];
    let second = height[secondIndex];
    let area = (secondIndex - firstIndex) * Math.min(first, second);
    if (area > maxArea) {
      maxArea = area;
    }

    // find bigger line
    var currentMin = Math.min(first, second, secondIndex - firstIndex);
    var foundBigger = false;
    for (let i = firstIndex + 1; i < secondIndex; i++) {
      if (height[i] > currentMin) {
        foundBigger = true;
        break;
      }
    }

    if (foundBigger === false) {
      break;
    } else {
      if (first <= second) {
        firstIndex = firstIndex + 1;
      } else {
        secondIndex = secondIndex - 1;
      }
    }
  }

  return maxArea;
}
