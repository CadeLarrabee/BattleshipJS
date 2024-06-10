import Tile from "./Tile.js";
import Ship from "./Ship.js";

class gameBoard {
  constructor() {
    this.board = this.setupNewBoard(10, 10);
    this.ships = [];
  }
  setupNewBoard(length, height) {
    let board = [];
    for (let i = 0; i < length; i++) {
      board[i] = [];
      for (let j = 0; j < height; j++) {
        board[i][j] = new Tile(i, j);
      }
    }
    return board;
  }
  addShipToBoard(type, length, coordinateArr) {
    const ship = new Ship(type, length, coordinateArr);
    this.ships.push(ship);
    coordinateArr.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]].setShip(true);
    });
    return ship;
  }
  removeShipFromBoard(ship) {
    const coordinateArr = ship.getCoordinates();
    coordinateArr.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]].setShip(false);
    });
    const index = this.ships.indexOf(ship);
    if (index !== -1) {
      this.ships.splice(index, 1);
    }
  }
}

export default gameBoard;
