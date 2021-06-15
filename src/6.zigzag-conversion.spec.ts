import { convert } from "./6.zigzag-conversion";

describe("6.convert", () => {
  it("example 1", () => {
    expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  });

  it("example 2", () => {
    expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  });

  it("example 3", () => {
    expect(convert("A", 1)).toEqual("A");
  });
});
