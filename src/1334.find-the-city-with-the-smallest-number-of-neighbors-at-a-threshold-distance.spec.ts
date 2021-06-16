import { findTheCity } from "./1334.find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance";

describe("1334.findTheCity", () => {
  it("example 1", () => {
    expect(
      findTheCity(
        4,
        [
          [0, 1, 3],
          [1, 2, 1],
          [1, 3, 4],
          [2, 3, 1],
        ],
        4
      )
    ).toEqual(3);
  });

  it("example 2", () => {
    expect(
      findTheCity(
        5,
        [
          [0, 1, 2],
          [0, 4, 8],
          [1, 2, 3],
          [1, 4, 2],
          [2, 3, 1],
          [3, 4, 1],
        ],
        2
      )
    ).toEqual(0);
  });

  it("example 3", () => {
    expect(
      findTheCity(
        6,
        [
          [0, 1, 3],
          [1, 2, 1],
          [1, 3, 4],
          [2, 3, 1],
        ],
        417
      )
    ).toEqual(5);
  });

  it("example 4", () => {
    expect(
      findTheCity(
        6,
        [
          [0, 1, 10],
          [0, 2, 1],
          [2, 3, 1],
          [1, 3, 1],
          [1, 4, 1],
          [4, 5, 10],
        ],
        20
      )
    ).toEqual(5);
  });

  it("example 5", () => {
    expect(
      findTheCity(
        6,
        [
          [0, 3, 7],
          [2, 4, 1],
          [0, 1, 5],
          [2, 3, 10],
          [1, 3, 6],
          [1, 2, 1],
        ],
        417
      )
    ).toEqual(5);
  });
});
