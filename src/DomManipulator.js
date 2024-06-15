import Player from "./Player.js";
import GameState from "./GameState.js";

class DomManip {
  constructor() {
    this.selectedTiles = [];
    this.shipTypes = [
      { name: "Carrier", length: 5 },
      { name: "Battleship", length: 4 },
      { name: "Cruiser", length: 3 },
      { name: "Submarine", length: 3 },
      { name: "Destroyer", length: 2 },
    ];
    this.selectedShip = undefined;
    this.players = [];
  }
  onEntry() {
    const mainWrapper = this.generateMainWrapper();
    const navWrapper = this.generateNavWrapper(mainWrapper);
    const playerBoardWrapper = this.generatePlayerBoardWrapper(mainWrapper);
    let gameState = new GameState();
    this.generateStateWrapper(playerBoardWrapper, gameState);
    this.players.push(
      this.generatePlayer("Human", 1, playerBoardWrapper, gameState)
    );
    this.generateShipSetupPanel(navWrapper, this.players[0]);
    this.players.push(
      this.generatePlayer("Human", 2, playerBoardWrapper, gameState)
    );
  }
  generateMainWrapper() {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);
    return mainProjPanelWrapper;
  }
  generatePlayerBoardWrapper(mainWrapper) {
    const playerBoardWrapper = document.createElement("div");
    playerBoardWrapper.classList.add("playerBoardWrapper");
    mainWrapper.appendChild(playerBoardWrapper);
    return playerBoardWrapper;
  }
  generateNavWrapper(mainWrapper) {
    const navWrapper = document.createElement("div");
    navWrapper.classList.add("navWrapper");
    mainWrapper.appendChild(navWrapper);
    return navWrapper;
  }
  generateShipSetupPanel(navWrapper) {
    this.shipTypes.forEach((ship) => {
      this.addShipToNavPanel(ship, navWrapper);
    });
  }
  addShipToNavPanel(ship, navWrapper) {
    const shipWrapper = document.createElement("div");
    const shipTitle = document.createElement("div");

    shipTitle.classList.add("shipTitle");
    shipTitle.textContent = ship.name;
    shipWrapper.classList.add("shipWrapper");
    shipWrapper.dataset.shipType = ship.name;
    shipWrapper.dataset.shipLength = ship.length;

    shipWrapper.addEventListener("click", () => {
      this.selectedShip = ship;
      shipWrapper.classList.add("selected");
    });

    shipWrapper.appendChild(shipTitle);
    navWrapper.appendChild(shipWrapper);
  }
  generateStateWrapper(mainWrapper, gameState) {
    const currentStateWrapper = document.createElement("div");
    currentStateWrapper.classList.add("stateWrapper");
    this.updateStateTextContent(currentStateWrapper, gameState);
    mainWrapper.appendChild(currentStateWrapper);
  }
  updateStateTextContent(StateWrapper, gameState) {
    switch (gameState.state) {
      case 0:
        StateWrapper.textContent = "Player One Setup";
        break;
      case 1:
        StateWrapper.textContent = "Player Two Setup";
        break;
      case 2:
        StateWrapper.textContent = "Player One's turn";
        break;
      case 3:
        StateWrapper.textContent = "Player Two's turn";
        break;
    }
  }
  generatePlayer(type, playerId, mainWrapper, gameState) {
    const playerPanel = document.createElement("div");
    const playerTextPanel = document.createElement("div");
    const playerBoardPanel = document.createElement("div");
    const player = new Player(type, playerId);

    playerPanel.classList.add("PlayerPanel");

    playerTextPanel.classList.add("player" + playerId, "playerText");
    playerTextPanel.textContent = "Player " + playerId;

    playerBoardPanel.classList.add("player" + playerId, "playerBoard");

    const boardTileWrapper = this.generateBoard(player, gameState);

    mainWrapper.appendChild(playerPanel);
    playerPanel.appendChild(playerTextPanel);
    playerPanel.appendChild(playerBoardPanel);
    playerBoardPanel.appendChild(boardTileWrapper);
    return player;
  }
  generateBoard(player, gameState) {
    const boardWrapper = document.createElement("div");
    boardWrapper.classList.add("boardWrapper");

    player.gameBoard.board.forEach((section, colIndex) => {
      let column = document.createElement("div");
      column.classList.add("col");

      section.forEach((tile, rowIndex) => {
        const square = document.createElement("div");
        square.classList.add("player" + player.playerId, "tile");
        square.dataset.col = colIndex;
        square.dataset.row = rowIndex;
        square.addEventListener("click", (event) => {
          this.HandleTileClick(event, player, gameState);
        });
        column.appendChild(square);
      });
      // Add additional attributes or content to the square if needed
      boardWrapper.appendChild(column);
    });

    return boardWrapper;
  }

  HandleTileClick(event, player, gameState) {
    const tile = event.target;
    const row = tile.dataset.row;
    const col = tile.dataset.col;
    const coordinateArr = [[parseInt(row), parseInt(col)]];

    switch (gameState.state) {
      case 0:
        player.gameBoard.addShipToBoard("", 1, coordinateArr);
        tile.classList.add("ship");
        break;
      case 1:
        StateWrapper.textContent = "Player Two Setup";
        break;
      case 2:
        StateWrapper.textContent = "Player One's turn";
        break;
      case 3:
        StateWrapper.textContent = "Player Two's turn";
        break;
    }
  }
}

export default DomManip;
