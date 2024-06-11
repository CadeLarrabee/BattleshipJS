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
    const player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Human", playerId);

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

    //To do, refactor this to go by the boards actual data.
    //Its already in rows so we don't need a row system like this one.

    player.gameBoard.board.forEach((tile, index) => {
      if (index % 10 === 0) {
        row = document.createElement("div");
        row.classList.add("row");
        boardWrapper.appendChild(row);
      }
      const square = document.createElement("div");
      square.classList.add("PlayerPanel", "player" + player.playerId, "tile");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFNOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVLO0FBQ0E7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBLHNCQUFzQixZQUFZO0FBQ2xDLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEYzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscURBQVM7QUFDbEM7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1Z0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDcEJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ04yQzs7QUFFM0MscUJBQXFCLDBEQUFRO0FBQzdCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL0RvbU1hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL1RpbGUuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcblxuY2xhc3MgRG9tTWFuaXAge1xuICBvbkVudHJ5KCkge1xuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gdGhpcy5nZW5lcmF0ZU1haW5XcmFwcGVyKCk7XG4gICAgdGhpcy5nZW5lcmF0ZVBsYXllcihcIkh1bWFuXCIsIDEsIG1haW5XcmFwcGVyKTtcbiAgICB0aGlzLmdlbmVyYXRlUGxheWVyKFwiSHVtYW5cIiwgMiwgbWFpbldyYXBwZXIpO1xuICB9XG4gIGdlbmVyYXRlTWFpbldyYXBwZXIoKSB7XG4gICAgY29uc3QgbWFpblByb2pQYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qUGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluV3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Qcm9qUGFuZWxXcmFwcGVyKTtcbiAgICByZXR1cm4gbWFpblByb2pQYW5lbFdyYXBwZXI7XG4gIH1cbiAgZ2VuZXJhdGVQbGF5ZXIodHlwZSwgcGxheWVySWQsIG1haW5XcmFwcGVyKSB7XG4gICAgY29uc3QgcGxheWVyUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllclRleHRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyQm9hcmRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihcIkh1bWFuXCIsIHBsYXllcklkKTtcblxuICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJQbGF5ZXJQYW5lbFwiKTtcblxuICAgIHBsYXllclRleHRQYW5lbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJQbGF5ZXJQYW5lbFwiLFxuICAgICAgXCJwbGF5ZXJcIiArIHBsYXllcklkLFxuICAgICAgXCJwbGF5ZXJUZXh0XCJcbiAgICApO1xuXG4gICAgcGxheWVyVGV4dFBhbmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgXCIgKyBwbGF5ZXJJZDtcblxuICAgIHBsYXllckJvYXJkUGFuZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiUGxheWVyUGFuZWxcIixcbiAgICAgIFwicGxheWVyXCIgKyBwbGF5ZXJJZCxcbiAgICAgIFwicGxheWVyQm9hcmRcIlxuICAgICk7XG5cbiAgICBjb25zdCBib2FyZFRpbGVXcmFwcGVyID0gdGhpcy5nZW5lcmF0ZUJvYXJkKHBsYXllcik7XG5cbiAgICAvLyAgIG5hdkRlZlByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgYm9keVByb2pXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qQm9keVdyYXBwZXJcIik7XG4gICAgLy8gICAgIHRoaXMuR2VuZXJhdGVQcm9qZWN0UGFuZWwoYm9keVByb2pXcmFwcGVyLCBwcm9qZWN0KTtcbiAgICAvLyAgIH0pO1xuXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyUGFuZWwpO1xuICAgIHBsYXllclBhbmVsLmFwcGVuZENoaWxkKHBsYXllclRleHRQYW5lbCk7XG4gICAgcGxheWVyUGFuZWwuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRQYW5lbCk7XG4gICAgcGxheWVyQm9hcmRQYW5lbC5hcHBlbmRDaGlsZChib2FyZFRpbGVXcmFwcGVyKTtcbiAgfVxuICBnZW5lcmF0ZUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZFdyYXBwZXJcIik7XG5cbiAgICBsZXQgcm93O1xuXG4gICAgLy9UbyBkbywgcmVmYWN0b3IgdGhpcyB0byBnbyBieSB0aGUgYm9hcmRzIGFjdHVhbCBkYXRhLlxuICAgIC8vSXRzIGFscmVhZHkgaW4gcm93cyBzbyB3ZSBkb24ndCBuZWVkIGEgcm93IHN5c3RlbSBsaWtlIHRoaXMgb25lLlxuXG4gICAgcGxheWVyLmdhbWVCb2FyZC5ib2FyZC5mb3JFYWNoKCh0aWxlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICUgMTAgPT09IDApIHtcbiAgICAgICAgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiUGxheWVyUGFuZWxcIiwgXCJwbGF5ZXJcIiArIHBsYXllci5wbGF5ZXJJZCwgXCJ0aWxlXCIpO1xuICAgICAgLy8gQWRkIGFkZGl0aW9uYWwgYXR0cmlidXRlcyBvciBjb250ZW50IHRvIHRoZSBzcXVhcmUgaWYgbmVlZGVkXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBib2FyZFdyYXBwZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9tTWFuaXA7XG4iLCJpbXBvcnQgVGlsZSBmcm9tIFwiLi9UaWxlLmpzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmNsYXNzIGdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLnNldHVwTmV3Qm9hcmQoMTAsIDEwKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5TaG90cyA9IFtdO1xuICB9XG4gIHNldHVwTmV3Qm9hcmQobGVuZ3RoLCBoZWlnaHQpIHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IG5ldyBUaWxlKGksIGopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgYWRkU2hpcFRvQm9hcmQodHlwZSwgbGVuZ3RoLCBjb29yZGluYXRlQXJyKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHR5cGUsIGxlbmd0aCwgY29vcmRpbmF0ZUFycik7XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgIGNvb3JkaW5hdGVBcnIuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXS5zZXRTaGlwKHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG4gIHJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcCkge1xuICAgIC8vcmVtb3ZlcyBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gc2hpcHMgbGVmdFxuICAgIGNvbnN0IGNvb3JkaW5hdGVBcnIgPSBzaGlwLmdldENvb3JkaW5hdGVzKCk7XG4gICAgY29vcmRpbmF0ZUFyci5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLnNldFNoaXAoZmFsc2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zaGlwcy5pbmRleE9mKHNoaXApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWxsU2hpcHNTdW5rKCk7XG4gIH1cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGlmICh0aGlzLnNoaXBzID09IFtdKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBzaGlwcyBzdW5rIG9uIGdhbWVib2FyZDogXCIsIHRoaXMuZ2FtZUJvYXJkKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLmdldFNoaXAoKTtcbiAgICBpZiAoc2hpcCkge1xuICAgICAgc2hpcC5hZGRIaXQoKTtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuU2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZC5qc1wiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwbGF5ZXJJZCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IGdhbWVCb2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsZW5ndGgsIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBzdW5rXG4gICAgaWYgKHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYWRkSGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG4gIGdldEhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgfVxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlcztcbiAgfVxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY2xhc3MgVGlsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzU2hpcCA9IGZhbHNlO1xuICB9XG4gIHNldFNoaXAoYm9vbCkge1xuICAgIHRoaXMuaGFzU2hpcCA9IGJvb2w7XG4gIH1cbiAgZ2V0U2hpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTaGlwO1xuICB9XG4gIHNldEhpdChib29sKSB7XG4gICAgdGhpcy5pc0hpdCA9IGJvb2w7XG4gIH1cbiAgZ2V0SGl0KCkge1xuICAgIHJldHVybiB0aGlzLmlzSGl0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUaWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRG9tTWFuaXAgZnJvbSBcIi4vRG9tTWFuaXB1bGF0b3IuanNcIjtcblxuY29uc3QgZG9tTWFuaXAgPSBuZXcgRG9tTWFuaXAoKTtcbmRvbU1hbmlwLm9uRW50cnkoKTtcbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=