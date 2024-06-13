import GameState from "./GameState.js";

describe("GameState functions", () => {
  let gameState;

  beforeEach(() => {
    gameState = new GameState();
  });

  test("expect game board to be 100 cells", () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = [];
      for (let j = 0; j < 10; j++) {
        arr[i][j] = new Tile(i, j);
      }
    }
    expect(testBoard.board).toEqual(arr);
  });

  test("expect a created ship to exist, and remove ship to remove", () => {
    const ship = testBoard.addShipToBoard(null, 3, [
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
    expect(testBoard.board[0][1].getShip()).toEqual(true);
    expect(testBoard.board[0][2].getShip()).toEqual(true);
    expect(testBoard.board[0][3].getShip()).toEqual(true);
    testBoard.removeShipFromBoard(ship);
    expect(testBoard.board[0][1].getShip()).toEqual(false);
    expect(testBoard.board[0][2].getShip()).toEqual(false);
    expect(testBoard.board[0][3].getShip()).toEqual(false);
    expect(testBoard.board.ships).toEqual(undefined);
  });
  test("receive attack", () => {
    testBoard.board[0][1].setHit(true);
    expect(testBoard.board[0][1].getHit()).toEqual(true);
  });
});
