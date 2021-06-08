export function twoSum(nums: number[], target: number): number[] {
  let first: number;
  let second: number;
  for (let i = 0; i < nums?.length; i++) {
    first = nums[i];

    for (let j = i + 1; j < nums?.length; j++) {
      second = nums[j];

      if (first + second === target) {
        return [i, j];
      }
    }
  }

  // Should never happen
  return [];
}
