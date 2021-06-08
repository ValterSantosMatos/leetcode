import { intToRoman } from "./12.integer-to-roman";

describe("12.integerToRoman", () => {
  it("example 1", () => {
    expect(intToRoman(3)).toEqual("III");
  });

  it("example 2", () => {
    expect(intToRoman(58)).toEqual("LVIII");
  });

  it("example 3", () => {
    expect(intToRoman(1994)).toEqual("MCMXCIV");
  });
});
