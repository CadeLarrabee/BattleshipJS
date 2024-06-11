import Player from "./Player.js";
import Player from "./Player.js";

class DomManip {
  onEntry() {
    const mainWrapper = generateMainWrapper();
    generatePlayer("Human", 1, mainWrapper);
    generatePlayer("Human", 2, mainWrapper);
  }
  generateMainWrapper() {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);
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

    //   navDefProj.addEventListener("click", () => {
    //     const bodyProjWrapper = document.querySelector(".projBodyWrapper");
    //     this.GenerateProjectPanel(bodyProjWrapper, project);
    //   });

    mainWrapper.appendChild(playerPanel);
    playerPanel.appendChild(playerTextPanel);
    playerPanel.appendChild(playerBoardPanel);
  }
}
