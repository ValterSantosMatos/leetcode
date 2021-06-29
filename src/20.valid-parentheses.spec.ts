import { isValid } from "./20.valid-parentheses";

describe("12.intToRoman", () => {
  it("example 1", () => {
    expect(isValid("()")).toEqual(true);
  });

  it("example 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });

  it("example 3", () => {
    expect(isValid("(]")).toEqual(false);
  });

  it("example 4", () => {
    expect(isValid("([)]")).toEqual(false);
  });

  it("example 5", () => {
    expect(isValid("{[]}")).toEqual(true);
  });
});
