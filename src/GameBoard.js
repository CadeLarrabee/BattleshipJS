import Tile from "./Tile.js";

class gameBoard {
  constructor() {
    this.board = this.setupNewBoard(10, 10);
  }
  setupNewBoard(length, height) {
    let board = [];
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < height; j++) {
        board.push(new Tile(i, j));
      }
    }
  }
}
