import { longestPalindrome } from "./5.longest-palindromic-substring";

describe("5.longestPalindrome", () => {
  it("example 1", () => {
    expect(longestPalindrome("babad")).toEqual("bab");
  });

  it("example 2", () => {
    expect(longestPalindrome("cbbd")).toEqual("bb");
  });

  it("example 3", () => {
    expect(longestPalindrome("a")).toEqual("a");
  });

  it("example 4", () => {
    expect(longestPalindrome("ac")).toEqual("a");
  });

  it("example 5", () => {
    expect(longestPalindrome("aacabdkacaa")).toEqual("aca");
  });

  it("example 6", () => {
    expect(longestPalindrome("aabbccbbaa")).toEqual("aabbccbbaa");
  });
});
