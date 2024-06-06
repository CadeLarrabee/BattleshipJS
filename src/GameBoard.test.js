const { beforeEach } = require("node:test");
const board = require("./GameBoard.js");
const tile = require("./Tile.js");

beforeEach(() => {
  testBoard = new gameBoard();
});

test("expect game board to be 100 cells", () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr.push(new Tile(x, y));
    }
  }
  expect(testBoard.board).toEqual(arr);
});
