export function fourSum(nums: number[], target: number): number[][] {
  const toReturn: number[][] = [];
  let slidingWindow: number[] = [];
  const visited: Record<string, boolean> = {};

  let i = 0;
  let j = 1;
  let y = 2;
  let z = 3;
  while (
    i <= nums.length - 4 &&
    j <= nums.length - 3 &&
    y <= nums.length - 2 &&
    z <= nums.length - 1
  ) {
    slidingWindow = [nums[i], nums[j], nums[y], nums[z]];

    const key = slidingWindow.sort().toString();
    if (!visited[key]) {
      visited[key] = true;

      if (slidingWindow.reduce((a, b) => a + b, 0) === target) {
        toReturn.push(slidingWindow);
      }
    }

    if (z === nums.length - 1) {
      if (y === nums.length - 2) {
        if (j === nums.length - 3) {
          i = i + 1;
          j = i + 1;
          y = j + 1;
          z = y + 1;
        } else {
          j = j + 1;
          y = j + 1;
          z = y + 1;
        }
      } else {
        y = y + 1;
        z = y + 1;
      }
    } else {
      z = z + 1;
    }

    slidingWindow = [nums[i], nums[j], nums[y], nums[z]];
  }

  return toReturn;
}
