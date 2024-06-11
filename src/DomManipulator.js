import Player from "./Player.js";

class DomManip {
  onEntry() {
    const mainWrapper = this.generateMainWrapper();
    this.generatePlayer("Human", 1, mainWrapper);
    this.generatePlayer("Human", 2, mainWrapper);
  }
  generateMainWrapper() {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);
    return mainProjPanelWrapper;
  }
  generatePlayer(type, playerId, mainWrapper) {
    const playerPanel = document.createElement("div");
    const playerTextPanel = document.createElement("div");
    const playerBoardPanel = document.createElement("div");
    const player = new Player();

    playerPanel.classList.add("PlayerPanel");

    playerTextPanel.classList.add(
      "PlayerPanel",
      "player" + playerId,
      "playerText"
    );

    playerTextPanel.textContent = "Player " + playerId;

    playerBoardPanel.classList.add(
      "PlayerPanel",
      "player" + playerId,
      "playerBoard"
    );

    const boardTileWrapper = this.generateBoard(player);

    //   navDefProj.addEventListener("click", () => {
    //     const bodyProjWrapper = document.querySelector(".projBodyWrapper");
    //     this.GenerateProjectPanel(bodyProjWrapper, project);
    //   });

    mainWrapper.appendChild(playerPanel);
    playerPanel.appendChild(playerTextPanel);
    playerPanel.appendChild(playerBoardPanel);
    playerBoardPanel.appendChild(boardTileWrapper);
  }
  generateBoard(player) {
    const boardWrapper = document.createElement("div");
    boardWrapper.classList.add("boardWrapper");

    let row;

    player.board.forEach((tile, index) => {
      if (index % 10 === 0) {
        row = document.createElement("div");
        row.classList.add("row");
        boardWrapper.appendChild(row);
      }
      const square = document.createElement("div");
      square.classList.add("PlayerPanel", "player" + playerId, "tile");
      // Add additional attributes or content to the square if needed
      row.appendChild(square);
    });

    return boardWrapper;
  }
}

export default DomManip;
