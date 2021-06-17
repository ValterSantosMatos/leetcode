import { fetch_bundle } from "./_clover";

describe("_0.fetch_bundle", () => {
  it("example 1", () => {
    expect(fetch_bundle(1)).toEqual({ bundle: [1, 2], not_available: [] });
  });

  it("example 2", () => {
    expect(fetch_bundle(3)).toEqual({
      bundle: [3, 4, 5, 6],
      not_available: [],
    });
  });

  it("example 3", () => {
    expect(fetch_bundle(4)).toEqual({ bundle: [4, 5, 6], not_available: [] });
  });

  it("example 4", () => {
    expect(fetch_bundle(12)).toEqual({
      bundle: [12, 10, 11],
      not_available: [],
    });
  });

  it("example 5", () => {
    expect(fetch_bundle(7)).toEqual({ bundle: [7], not_available: [100] });
  });

  it("example 6", () => {
    expect(fetch_bundle(8)).toEqual({ bundle: [8, 9], not_available: [101] });
  });
});
