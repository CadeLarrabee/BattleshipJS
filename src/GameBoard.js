import Tile from "./Tile.js";
import Ship from "./Ship.js";

class gameBoard {
  constructor() {
    this.board = this.setupNewBoard(10, 10);
    this.ships = [];
    this.Shots = [];
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

    // Verify the placement has no errors
    for (let i = 0; i < coordinateArr.length; i++) {
      const coordinate = coordinateArr[i];
      const row = coordinate[0];
      const col = coordinate[1];

      if (row < 0 || row >= 10 || col < 0 || col >= 10) {
        throw new Error("Error: Coordinate out of board bounds");
      }

      if (this.board[row][col].getShip()) {
        throw new Error(
          "Error: Another ship is already placed at this coordinate"
        );
      }
    }

    coordinateArr.forEach((coordinate) => {
      const row = coordinate[0];
      const col = coordinate[1];
      this.board[row][col].setShip(ship);
    });

    this.ships.push(ship);

    return ship;
  }

  removeShipFromBoard(ship) {
    //removes a ship from the board and returns true if there are no ships left
    const coordinateArr = ship.getCoordinates();
    coordinateArr.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]].setShip(null);
    });
    const index = this.ships.indexOf(ship);
    if (index !== -1) {
      this.ships.splice(index, 1);
    }
    return this.allShipsSunk();
  }
  allShipsSunk() {
    if (this.ships == []) {
      console.log("All ships sunk on gameboard: ", this.gameBoard);
      return true;
    } else {
      return false;
    }
  }
  receiveAttack(coordinate) {
    const ship = this.board[coordinate[0]][coordinate[1]].getShip();
    if (ship) {
      ship.addHit();
      if (ship.isSunk()) {
        this.removeShipFromBoard(ship);
      }
    }
    this.Shots.push(coordinate);
  }
}

export default gameBoard;
