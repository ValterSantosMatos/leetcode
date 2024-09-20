import { generate, moveBoard } from "./_lgt-2048";

describe("lgt-2048", () => {
  it("can generate a valid board", () => {
    const boardSize = 4;
    const board = generate(boardSize);

    expect(board.length).toBe(boardSize); // matches the rows
    for (let i = 0; i < boardSize; i++) {
      expect(board[i].length).toBe(boardSize); // matches the columns

      for (let j = 0; j < boardSize; j++) {
        expect([null, 2]).toContain(board[i][j]); // generates a board with only 2 or null
      }
    }
  });

  it("can generate a total null board", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0); // forces null

    const boardSize = 2;
    const board = generate(boardSize);

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        expect(board[i][j]).toBe(null);
      }
    }
  });

  it("can move left", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0); // forces null in the new columns

    expect(
      moveBoard(
        [
          [2, 2, 8, 4],
          [null, 2, null, 2],
          [2, null, 2, null],
          [null, 2, null, 2],
        ],
        "left"
      )
    ).toStrictEqual({
      board: [
        [4, 8, 4, null],
        [4, null, null, null],
        [4, null, null, null],
        [4, null, null, null],
      ],
      end: false,
    });
  });

  it("can move right", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0); // forces null in the new columns

    expect(
      moveBoard(
        [
          [4, 8, 2, 2],
          [null, 2, null, 2],
          [2, null, 2, null],
          [null, 2, null, 2],
        ],
        "right"
      )
    ).toStrictEqual({
      board: [
        [null, 4, 8, 4],
        [null, null, null, 4],
        [null, null, null, 4],
        [null, null, null, 4],
      ],
      end: false,
    });
  });

  it("can move down", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0); // forces null in the new columns

    expect(
      moveBoard(
        [
          [4, 8, 2, 2],
          [null, 2, null, 2],
          [2, null, 2, null],
          [null, 2, null, 2],
        ],
        "down"
      )
    ).toStrictEqual({
      board: [
        [null, null, null, null],
        [null, null, null, null],
        [4, 8, null, 2],
        [2, 4, 4, 4],
      ],
      end: false,
    });
  });

  it("can move up", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0); // forces null in the new columns

    expect(
      moveBoard(
        [
          [4, 8, 2, 2],
          [null, 2, null, 2],
          [2, null, 2, null],
          [null, 2, null, 2],
        ],
        "up"
      )
    ).toStrictEqual({
      board: [
        [4, 8, 4, 4],
        [2, 4, null, 2],
        [null, null, null, null],
        [null, null, null, null],
      ],
      end: false,
    });
  });
});
