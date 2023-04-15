import { fourSum } from "./18.4-sum";

describe("18.4sum", () => {
  it("example 1", () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
      [1, 0, -1, 0],
      [1, -1, -2, 2],
      [0, 0, -2, 2],
    ]);
  });

  it("example 2", () => {
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
  });

  it("example 3", () => {
    expect(fourSum([-5, 5, 4, -3, 0, 0, 4, -2], 4)).toEqual([
      [
        [-5, 0, 4, 5],
        [-2, -3, 4, 5],
      ],
    ]);
  });
});
