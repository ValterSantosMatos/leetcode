import { canJump } from "./55.jump-game";

describe("55.canJump", () => {
  it("example 1", () => {
    expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
  });

  it("example 2", () => {
    expect(canJump([3, 2, 1, 0, 4])).toEqual(true);
  });
});
