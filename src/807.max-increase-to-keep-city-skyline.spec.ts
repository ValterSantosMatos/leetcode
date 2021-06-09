import { maxIncreaseKeepingSkyline } from "./807.max-increase-to-keep-city-skyline";

describe("807.maxIncreaseToKeepCitySkyline", () => {
  it("example 1", () => {
    expect(
      maxIncreaseKeepingSkyline([
        [3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0],
      ])
    ).toEqual(35);
  });
});
