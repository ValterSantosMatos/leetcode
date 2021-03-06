import { lengthOfLongestSubstring } from "./3.longest-substring-without-repeating-characters";

describe("3.lengthOfLongestSubstring", () => {
  it("example 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });

  it("example 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });

  it("example 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });

  it("example 4", () => {
    expect(lengthOfLongestSubstring("")).toEqual(0);
  });
});
