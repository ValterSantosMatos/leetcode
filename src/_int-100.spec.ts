import { flattenArray } from "./_int-100";

describe("int-100", () => {
  it("example 1", () => {
    expect(flattenArray([1, 2, [3, 4, 5], [6, 7, 8], [9]])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("example 2", () => {
    expect(flattenArray([1, 2, [3, 4, 5], [6, [7, 8]], [9]])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});
