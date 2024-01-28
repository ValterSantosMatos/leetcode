import { thisWordsHavePalindrome } from "./_int-c.com";

describe("_int-c.com", () => {
  it("example 1", () => {
    expect(thisWordsHavePalindrome("abcdef", "xxxcba")).toEqual(true);
  });

  it("example 2", () => {
    expect(thisWordsHavePalindrome("abcdef", "xxxxba")).toEqual(true);
  });

  it("example 3", () => {
    expect(thisWordsHavePalindrome("abcde", "xxxba")).toEqual(true);
  });

  it("example 4", () => {
    expect(thisWordsHavePalindrome("xxxcba", "abcdef")).toEqual(true);
  });

  it("example 5", () => {
    expect(thisWordsHavePalindrome("abcde", "xxxxb")).toEqual(false);
  });
});
