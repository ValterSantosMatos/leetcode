import { maxArea } from "./11.container-with-most-water";

describe("11.maxArea", () => {
  it("example 1", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  it("example 2", () => {
    expect(maxArea([1, 1])).toEqual(1);
  });

  it("example 3", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
  });

  it("example 4", () => {
    expect(maxArea([1, 2, 1])).toEqual(2);
  });
});
