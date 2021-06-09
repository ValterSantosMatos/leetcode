import { twoSum } from "./1.two-sum";

describe("1.twoSum", () => {
  it("example 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("example 2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("example 3", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("example 4", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
});
