/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DomManipulator.js":
/*!*******************************!*\
  !*** ./src/DomManipulator.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");


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
    const player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomManip);


/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ "./src/Tile.js");
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");



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
        board[i][j] = new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["default"](i, j);
      }
    }
    return board;
  }
  addShipToBoard(type, length, coordinateArr) {
    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](type, length, coordinateArr);
    this.ships.push(ship);
    coordinateArr.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]].setShip(true);
    });
    return ship;
  }
  removeShipFromBoard(ship) {
    //removes a ship from the board and returns true if there are no ships left
    const coordinateArr = ship.getCoordinates();
    coordinateArr.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]].setShip(false);
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
        removeShipFromBoard(ship);
      }
    }
    this.Shots.push(coordinate);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard.js */ "./src/GameBoard.js");


class Player {
  constructor(type, playerId) {
    this.type = type;
    this.playerId = playerId;
    this.gameBoard = new _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(type, length, coordinates) {
    this.type = type;
    this.length = length;
    this.coordinates = coordinates;
    this.hits = 0;
  }

  isSunk() {
    //returns true if the ship is sunk
    if (this.length <= this.hits) {
      return true;
    } else {
      return false;
    }
  }
  addHit() {
    this.hits += 1;
  }
  getHits() {
    return this.hits;
  }
  getCoordinates() {
    return this.coordinates;
  }
  getLength() {
    return this.length;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/Tile.js":
/*!*********************!*\
  !*** ./src/Tile.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isHit = false;
    this.hasShip = false;
  }
  setShip(bool) {
    this.hasShip = bool;
  }
  getShip() {
    return this.hasShip;
  }
  setHit(bool) {
    this.isHit = bool;
  }
  getHit() {
    return this.isHit;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tile);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomManipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulator.js */ "./src/DomManipulator.js");


const domManip = new _DomManipulator_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
domManip.onEntry();
//

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFNOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFSztBQUNBOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQywwQkFBMEIsZ0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRGM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFTO0FBQ2xDO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNWdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3BCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTNDLHFCQUFxQiwwREFBUTtBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9Eb21NYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9UaWxlLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyLmpzXCI7XG5cbmNsYXNzIERvbU1hbmlwIHtcbiAgb25FbnRyeSgpIHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZ2VuZXJhdGVNYWluV3JhcHBlcigpO1xuICAgIHRoaXMuZ2VuZXJhdGVQbGF5ZXIoXCJIdW1hblwiLCAxLCBtYWluV3JhcHBlcik7XG4gICAgdGhpcy5nZW5lcmF0ZVBsYXllcihcIkh1bWFuXCIsIDIsIG1haW5XcmFwcGVyKTtcbiAgfVxuICBnZW5lcmF0ZU1haW5XcmFwcGVyKCkge1xuICAgIGNvbnN0IG1haW5Qcm9qUGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUHJvalBhbmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbldyYXBwZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluUHJvalBhbmVsV3JhcHBlcik7XG4gICAgcmV0dXJuIG1haW5Qcm9qUGFuZWxXcmFwcGVyO1xuICB9XG4gIGdlbmVyYXRlUGxheWVyKHR5cGUsIHBsYXllcklkLCBtYWluV3JhcHBlcikge1xuICAgIGNvbnN0IHBsYXllclBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXJUZXh0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJQbGF5ZXJQYW5lbFwiKTtcblxuICAgIHBsYXllclRleHRQYW5lbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJQbGF5ZXJQYW5lbFwiLFxuICAgICAgXCJwbGF5ZXJcIiArIHBsYXllcklkLFxuICAgICAgXCJwbGF5ZXJUZXh0XCJcbiAgICApO1xuXG4gICAgcGxheWVyVGV4dFBhbmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgXCIgKyBwbGF5ZXJJZDtcblxuICAgIHBsYXllckJvYXJkUGFuZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiUGxheWVyUGFuZWxcIixcbiAgICAgIFwicGxheWVyXCIgKyBwbGF5ZXJJZCxcbiAgICAgIFwicGxheWVyQm9hcmRcIlxuICAgICk7XG5cbiAgICBjb25zdCBib2FyZFRpbGVXcmFwcGVyID0gdGhpcy5nZW5lcmF0ZUJvYXJkKHBsYXllcik7XG5cbiAgICAvLyAgIG5hdkRlZlByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgYm9keVByb2pXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qQm9keVdyYXBwZXJcIik7XG4gICAgLy8gICAgIHRoaXMuR2VuZXJhdGVQcm9qZWN0UGFuZWwoYm9keVByb2pXcmFwcGVyLCBwcm9qZWN0KTtcbiAgICAvLyAgIH0pO1xuXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyUGFuZWwpO1xuICAgIHBsYXllclBhbmVsLmFwcGVuZENoaWxkKHBsYXllclRleHRQYW5lbCk7XG4gICAgcGxheWVyUGFuZWwuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRQYW5lbCk7XG4gICAgcGxheWVyQm9hcmRQYW5lbC5hcHBlbmRDaGlsZChib2FyZFRpbGVXcmFwcGVyKTtcbiAgfVxuICBnZW5lcmF0ZUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZFdyYXBwZXJcIik7XG5cbiAgICBsZXQgcm93O1xuXG4gICAgcGxheWVyLmJvYXJkLmZvckVhY2goKHRpbGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggJSAxMCA9PT0gMCkge1xuICAgICAgICByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJQbGF5ZXJQYW5lbFwiLCBcInBsYXllclwiICsgcGxheWVySWQsIFwidGlsZVwiKTtcbiAgICAgIC8vIEFkZCBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgb3IgY29udGVudCB0byB0aGUgc3F1YXJlIGlmIG5lZWRlZFxuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYm9hcmRXcmFwcGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbU1hbmlwO1xuIiwiaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZS5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xuXG5jbGFzcyBnYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5zZXR1cE5ld0JvYXJkKDEwLCAxMCk7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuU2hvdHMgPSBbXTtcbiAgfVxuICBzZXR1cE5ld0JvYXJkKGxlbmd0aCwgaGVpZ2h0KSB7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBuZXcgVGlsZShpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIGFkZFNoaXBUb0JvYXJkKHR5cGUsIGxlbmd0aCwgY29vcmRpbmF0ZUFycikge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCh0eXBlLCBsZW5ndGgsIGNvb3JkaW5hdGVBcnIpO1xuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICBjb29yZGluYXRlQXJyLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0uc2V0U2hpcCh0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuICByZW1vdmVTaGlwRnJvbUJvYXJkKHNoaXApIHtcbiAgICAvL3JlbW92ZXMgYSBzaGlwIGZyb20gdGhlIGJvYXJkIGFuZCByZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG5vIHNoaXBzIGxlZnRcbiAgICBjb25zdCBjb29yZGluYXRlQXJyID0gc2hpcC5nZXRDb29yZGluYXRlcygpO1xuICAgIGNvb3JkaW5hdGVBcnIuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXS5zZXRTaGlwKGZhbHNlKTtcbiAgICB9KTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFsbFNoaXBzU3VuaygpO1xuICB9XG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBpZiAodGhpcy5zaGlwcyA9PSBbXSkge1xuICAgICAgY29uc29sZS5sb2coXCJBbGwgc2hpcHMgc3VuayBvbiBnYW1lYm9hcmQ6IFwiLCB0aGlzLmdhbWVCb2FyZCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5ib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXS5nZXRTaGlwKCk7XG4gICAgaWYgKHNoaXApIHtcbiAgICAgIHNoaXAuYWRkSGl0KCk7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZW1vdmVTaGlwRnJvbUJvYXJkKHNoaXApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLlNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmQuanNcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGxheWVySWQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZDtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBnYW1lQm9hcmQoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbGVuZ3RoLCBjb29yZGluYXRlcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHNoaXAgaXMgc3Vua1xuICAgIGlmICh0aGlzLmxlbmd0aCA8PSB0aGlzLmhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFkZEhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgfVxuICBnZXRIaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHM7XG4gIH1cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNsYXNzIFRpbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaXNIaXQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc1NoaXAgPSBmYWxzZTtcbiAgfVxuICBzZXRTaGlwKGJvb2wpIHtcbiAgICB0aGlzLmhhc1NoaXAgPSBib29sO1xuICB9XG4gIGdldFNoaXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU2hpcDtcbiAgfVxuICBzZXRIaXQoYm9vbCkge1xuICAgIHRoaXMuaXNIaXQgPSBib29sO1xuICB9XG4gIGdldEhpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0hpdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGlsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERvbU1hbmlwIGZyb20gXCIuL0RvbU1hbmlwdWxhdG9yLmpzXCI7XG5cbmNvbnN0IGRvbU1hbmlwID0gbmV3IERvbU1hbmlwKCk7XG5kb21NYW5pcC5vbkVudHJ5KCk7XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9