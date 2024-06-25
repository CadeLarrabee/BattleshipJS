/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/Ocean.png */ "./src/images/Ocean.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0px;
  margin: 0px;
  min-width: 0;
}
.mainWrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: red;
}
.playerBoardWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
}
.stateWrapper {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
}
.PlayerPanel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.playerText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
}
.boardWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.col {
  display: flex;
  flex-direction: column;
}
.navWrapper {
  width: 20%;
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: left;
  background-color: aqua;
}
.shipWrapper {
  height: 100px;
  font-size: 24px;
  border: 5px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navShipSelected {
  background-color: navajowhite;
}
.screenBlocker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: purple;
  color: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hitText {
  font-size: 48px;
  width: 250px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.screenBlockerWrapper {
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.screenBlockerButton {
  width: 100px;
  height: 50px;
  color: orange;
  font-size: 14px;
}
.tile {
  width: 30px;
  height: 30px;
}
.tile.ship {
  background-color: blue;
}
.tile.hover {
  background-color: white;
}
.tile.hidden {
  opacity: 0;
}
.tile.enemyHover {
  background-color: rgb(255, 0, 0);
  opacity: 0.5;
}
.tile.shipHit {
  background-color: rgb(255, 0, 0);
  opacity: 0.5;
}
.tile.miss {
  background-color: rgb(30, 168, 25);
  opacity: 0.5;
}
.playerBoard {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;AACxB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,UAAU;AACZ;AACA;EACE,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,YAAY;AACd;AACA;EACE,yDAAyC;EACzC,sBAAsB,EAAE,6CAA6C;EACrE,2BAA2B,EAAE,sBAAsB;EACnD,4BAA4B,EAAE,sCAAsC;AACtE","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  min-width: 0;\n}\n.mainWrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  background-color: red;\n}\n.playerBoardWrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20%;\n  padding-right: 20%;\n}\n.stateWrapper {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 48px;\n}\n.PlayerPanel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.playerText {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n}\n.boardWrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.col {\n  display: flex;\n  flex-direction: column;\n}\n.navWrapper {\n  width: 20%;\n  gap: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  justify-self: left;\n  background-color: aqua;\n}\n.shipWrapper {\n  height: 100px;\n  font-size: 24px;\n  border: 5px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navShipSelected {\n  background-color: navajowhite;\n}\n.screenBlocker {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: purple;\n  color: white;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hitText {\n  font-size: 48px;\n  width: 250px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.screenBlockerWrapper {\n  height: 500px;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.screenBlockerButton {\n  width: 100px;\n  height: 50px;\n  color: orange;\n  font-size: 14px;\n}\n.tile {\n  width: 30px;\n  height: 30px;\n}\n.tile.ship {\n  background-color: blue;\n}\n.tile.hover {\n  background-color: white;\n}\n.tile.hidden {\n  opacity: 0;\n}\n.tile.enemyHover {\n  background-color: rgb(255, 0, 0);\n  opacity: 0.5;\n}\n.tile.shipHit {\n  background-color: rgb(255, 0, 0);\n  opacity: 0.5;\n}\n.tile.miss {\n  background-color: rgb(30, 168, 25);\n  opacity: 0.5;\n}\n.playerBoard {\n  background-image: url(\"images/Ocean.png\");\n  background-size: cover; /* Ensures the image covers the entire area */\n  background-position: center; /* Centers the image */\n  background-repeat: no-repeat; /* Prevents the image from repeating */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/Ocean.png":
/*!******************************!*\
  !*** ./src/images/Ocean.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f01e21d1b516ed9731d4.png";

/***/ }),

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
/* harmony import */ var _GameState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameState.js */ "./src/GameState.js");
/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard.js */ "./src/GameBoard.js");




class DomManip {
  constructor() {
    this.selectedTiles = [];
    this.lastHoveredTile = null;

    this.shipTypes = [
      { name: "Carrier", length: 5 },
      { name: "Battleship", length: 4 },
      { name: "Cruiser", length: 3 },
      { name: "Submarine", length: 3 },
      { name: "Destroyer", length: 2 },
    ];
    this.gameState = new _GameState_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

    this.selectedShip = undefined;
    this.rotation = "horizontal";

    this.players = [];
    this.currentPlayer = null;
  }

  //-------------------------------------------------
  //    Navigation Component generators
  //-------------------------------------------------
  onEntry() {
    const mainWrapper = this.generateMainWrapper();
    const navWrapper = this.generateNavWrapper(mainWrapper);
    const playerBoardWrapper = this.generatePlayerBoardWrapper(mainWrapper);

    this.generateStateWrapper(playerBoardWrapper);

    this.players.push(this.generatePlayer("Human", 1, playerBoardWrapper));
    this.generateShipSetupPanel(navWrapper, this.players[0]);
    this.players.push(this.generatePlayer("Human", 2, playerBoardWrapper));

    this.currentPlayer = 1;

    //add listener for rotation
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
    this.generateScreenBlocker("Player 1's Setup");
    this.generateBoardBlocker(this.players[1]);
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

  generateScreenBlocker(text, shipHit = null, shipSunk = false) {
    const screenBlocker = document.createElement("div");
    screenBlocker.classList.add("screenBlocker");

    const screenBlockerWrapper = document.createElement("div");
    screenBlockerWrapper.classList.add("screenBlockerWrapper");

    const screenBlockerText = document.createElement("div");
    screenBlockerText.classList.add("screenBlockerText");
    screenBlockerText.textContent = text;

    if (shipSunk) {
      const shipSunkText = document.createElement("div");
      shipSunkText.classList.add("sunkText");
      shipSunkText.textContent = `You sunk their ${shipSunk}!`;
      screenBlockerWrapper.appendChild(shipSunkText);
    } else if (shipHit !== null) {
      const shipHitText = document.createElement("div");
      shipHitText.classList.add("hitText");
      shipHitText.textContent = shipHit ? "You Hit!!!" : "You Missed!";
      screenBlockerWrapper.appendChild(shipHitText);
    }

    const screenBlockerSecondaryText = document.createElement("div");
    screenBlockerSecondaryText.classList.add("screenBlockerText");
    screenBlockerSecondaryText.textContent = "Ready next player";

    const screenBlockerButton = this.generateCloseButton();

    document.body.appendChild(screenBlocker);
    screenBlocker.appendChild(screenBlockerWrapper);
    screenBlockerWrapper.appendChild(screenBlockerText);
    screenBlockerWrapper.appendChild(screenBlockerSecondaryText);
    screenBlockerWrapper.appendChild(screenBlockerButton);
    return screenBlocker;
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
      const allNav = document.querySelectorAll(".shipWrapper");

      //Deselect other ship navs
      allNav.forEach((nav) => nav.classList.remove("navShipSelected"));
      shipWrapper.classList.add("navShipSelected");
    });

    shipWrapper.appendChild(shipTitle);
    navWrapper.appendChild(shipWrapper);
  }

  removeShipFromNavPanel() {
    //Remove all ships that have .navShipSelected since we only ever want one.
    const NavToRemove = document.querySelectorAll(".navShipSelected");
    NavToRemove.forEach((nav) => nav.remove("navShipSelected"));
    this.handleShipDeselect();
  }

  generateStateWrapper(mainWrapper) {
    const currentStateWrapper = document.createElement("div");
    currentStateWrapper.classList.add("stateWrapper");
    mainWrapper.appendChild(currentStateWrapper);
    this.updateStateTextContent();
  }

  updateStateTextContent() {
    const stateWrapper = document.querySelector(".stateWrapper");
    switch (this.gameState.state) {
      case 0:
        stateWrapper.textContent = "Player One Setup";
        break;
      case 1:
        stateWrapper.textContent = "Player Two Setup";
        break;
      case 2:
        stateWrapper.textContent = "Player One's turn";
        break;
      case 3:
        stateWrapper.textContent = "Player Two's turn";
        break;
    }
  }

  generatePlayer(type, playerId, mainWrapper) {
    const playerPanel = document.createElement("div");
    const playerTextPanel = document.createElement("div");
    const playerBoardPanel = document.createElement("div");
    const player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](type, playerId);

    playerPanel.classList.add("PlayerPanel");

    playerTextPanel.classList.add("player" + playerId, "playerText");
    playerTextPanel.textContent = "Player " + playerId;

    playerBoardPanel.classList.add("player" + playerId, "playerBoard");

    const boardTileWrapper = this.generateBoard(player);

    mainWrapper.appendChild(playerPanel);
    playerPanel.appendChild(playerTextPanel);
    playerPanel.appendChild(playerBoardPanel);
    playerBoardPanel.appendChild(boardTileWrapper);
    return player;
  }

  generateBoard(player) {
    const boardWrapper = document.createElement("div");
    boardWrapper.classList.add("boardWrapper");
    boardWrapper.addEventListener("mouseout", (event) => {
      this.clearAllTileHover();
    });

    player.gameBoard.board.forEach((section, colIndex) => {
      let column = document.createElement("div");
      column.classList.add("col");

      section.forEach((tile, rowIndex) => {
        const square = document.createElement("div");
        square.classList.add("player" + player.playerId, "tile");
        square.dataset.col = colIndex;
        square.dataset.row = rowIndex;
        square.dataset.playerId = player.playerId;
        square.addEventListener("click", (event) => {
          this.handleTileClick(event, player);
        });
        square.addEventListener("mouseover", (event) => {
          this.handleTileHover(event);
        });
        column.appendChild(square);
      });
      // Add additional attributes or content to the square if needed
      boardWrapper.appendChild(column);
    });

    return boardWrapper;
  }
  generateBoardBlocker(player) {
    // Hide the player who is not in focus by adding "hidden" class to their board tiles
    player.gameBoard.board.forEach((section, colIndex) => {
      section.forEach((tile, rowIndex) => {
        const tileElement = document.querySelector(
          `.tile[data-player-id="${player.playerId}"][data-col="${colIndex}"][data-row="${rowIndex}"]`
        );
        if (tileElement) {
          tileElement.classList.add("hidden");
        }
      });
    });
  }

  removeBoardBlocker(player) {
    // Unhide the player who is now in focus by removing "hidden" class from their board tiles
    player.gameBoard.board.forEach((section, colIndex) => {
      section.forEach((tile, rowIndex) => {
        const tileElement = document.querySelector(
          `.tile[data-player-id="${player.playerId}"][data-col="${colIndex}"][data-row="${rowIndex}"]`
        );
        if (tileElement) {
          tileElement.classList.remove("hidden");
        }
      });
    });
  }

  generatePlayerFeedbackPanel(text) {
    //Gives the player feedback on whether they hit or miss.
    const playerFeedback = document.createElement("div");
    playerFeedback.classList.add("playerFeedbackPanel");

    const playerFeedbackWrapper = document.createElement("div");
    playerFeedbackWrapper.classList.add("playerFeedbackPanelWrapper");

    const playerFeedbackText = document.createElement("div");
    playerFeedbackText.classList.add("playerFeedbackText");
    playerFeedbackText.textContent = text;

    const playerFeedbackButton = this.generateCloseButton();

    document.body.appendChild(playerFeedback);
    playerFeedback.appendChild(playerFeedbackWrapper);
    playerFeedbackWrapper.appendChild(playerFeedbackText);
    playerFeedbackWrapper.appendChild(playerFeedbackButton);
    return playerFeedback;
  }

  generateCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("screenBlockerButton");
    closeButton.textContent = "Continue";

    closeButton.addEventListener("click", () => {
      const screenWrapper = document.querySelector(".screenBlocker");
      screenWrapper.remove();
      closeButton.remove();
    });
    return closeButton;
  }

  //------------------------------------------
  //--Handlers
  //------------------------------------------

  handleKeyDown(event) {
    if (this.selectedShip) {
      if (event.key === "r" || event.key === "R") {
        this.changeRotation();
        if (this.lastHoveredTile) {
          this.handleTileHover({ target: this.lastHoveredTile });
        }
      }
    }
  }

  changeRotation() {
    if (this.rotation == "vertical") {
      this.rotation = "horizontal";
    } else {
      this.rotation = "vertical";
    }
  }

  handleTileClick(event, player) {
    const tile = event.target;
    const row = parseInt(tile.dataset.row);
    const col = parseInt(tile.dataset.col);
    let shipSunk = null;
    let shipHit = null;

    const playerId = parseInt(tile.dataset.playerId);

    //Handle clicking on the tile in different stages of the game.

    switch (this.gameState.getState()) {
      case 0:
      case 1:
        if (playerId !== this.currentPlayer) {
          // If the tile does not belong to the current player, ignore the click
          return;
        }
        const shipTiles = this.getShipPlacement(row, col);
        if (this.selectedShip && shipTiles) {
          try {
            player.gameBoard.addShipToBoard(
              this.selectedShip.name,
              this.selectedShip.length,
              shipTiles,
              this.currentPlayer
            );
            this.removeShipFromNavPanel();

            shipTiles.forEach(([r, c]) => {
              const tileToMark = document.querySelector(
                `.tile[data-row="${r}"][data-col="${c}"][data-player-id="${playerId}"]`
              );
              if (tileToMark) {
                tileToMark.classList.add("ship");
              }
            });
            //Should we move on from setup?
            if (this.ShouldStateAdvance()) {
              this.handleStateChange();
            }
            this.rotation = "horizontal";
          } catch (error) {
            console.error(error.message);
            alert(error.message);
          }
        }
        break;
      case 2:
      case 3:
        let shipHit = false;
        if (playerId !== this.currentPlayer) {
          const tileToMark = document.querySelector(
            `.tile[data-row="${row}"][data-col="${col}"][data-player-id="${playerId}"]`
          );

          if (tileToMark) {
            const attackResult = this.players[
              playerId - 1
            ].gameBoard.receiveAttack([row, col], this.OnGameEnd);
            shipHit = attackResult.hit;
            shipSunk = attackResult.sunk;

            if (shipHit) {
              tileToMark.classList.add("shipHit");
            } else {
              tileToMark.classList.add("miss");
            }

            this.handleStateChange(shipHit, shipSunk);
          }
        }
        this.rotation = "horizontal";
        break;
    }
  }
  handleTileHover(event) {
    const ship = this.selectedShip;
    const tile = event.target;
    const row = parseInt(tile.dataset.row);
    const col = parseInt(tile.dataset.col);
    const playerId = parseInt(tile.dataset.playerId);

    if (ship && playerId === this.currentPlayer) {
      this.lastHoveredTile = tile;
      this.clearAllTileHover();

      // Calculate which tiles should be highlighted
      const shipTiles = this.getShipPlacement(row, col);

      if (shipTiles) {
        shipTiles.forEach(([r, c]) => {
          const hoverTile = document.querySelector(
            `.tile[data-row="${r}"][data-col="${c}"][data-player-id="${playerId}"]`
          );
          if (hoverTile) {
            hoverTile.classList.add("hover");
          }
        });
      }
    }

    //check if we're clicking on an enemy board to fire during gameplay loop
    if (
      !ship &&
      playerId !== this.currentPlayer &&
      [2, 3].includes(this.gameState.getState())
    ) {
      this.lastHoveredTile = tile;
      this.clearAllTileHover();

      // Calculate which tiles should be highlighted
      const hoverTile = document.querySelector(
        `.tile[data-row="${row}"][data-col="${col}"][data-player-id="${playerId}"]`
      );
      if (hoverTile) {
        hoverTile.classList.add("enemyHover");
      }
    }
  }

  getShipPlacement(row, col) {
    //given a row/col, return the tiles we'd need to place the ship
    const ship = this.selectedShip;
    if (!ship) return null;

    const shipTiles = [];
    if (this.rotation == "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        shipTiles.push([row, col + i]);
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        shipTiles.push([row + i, col]);
      }
    }

    return shipTiles;
  }

  handleStateChange(shipHit = null, shipSunk = null) {
    switch (this.gameState.getState()) {
      case 0:
        this.generateScreenBlocker("Player 2's Setup");
        this.generateBoardBlocker(this.players[0]);
        this.removeBoardBlocker(this.players[1]);

        this.currentPlayer = this.players[1].playerId;

        this.generateShipSetupPanel(
          document.querySelector(".navWrapper"),
          this.players[1]
        );

        this.gameState.advanceState();
        this.updateStateTextContent();
        break;
      case 1:
        this.generateScreenBlocker("Player 1's Turn");
        this.generateBoardBlocker(this.players[1]);
        this.removeBoardBlocker(this.players[0]);

        this.currentPlayer = this.players[0].playerId;

        this.gameState.advanceState();
        this.updateStateTextContent();

        break;
      case 2:
        this.generateScreenBlocker("Player 2's Turn", shipHit, shipSunk);

        this.currentPlayer = this.players[1].playerId;

        this.gameState.advanceState();
        this.updateStateTextContent();

        this.generateBoardBlocker(this.players[0]);
        this.removeBoardBlocker(this.players[1]);

        break;
      case 3:
        this.generateScreenBlocker("Player 1's Turn", shipHit, shipSunk);

        this.currentPlayer = this.players[0].playerId;

        this.gameState.advanceState();

        this.updateStateTextContent();
        this.generateBoardBlocker(this.players[1]);
        this.removeBoardBlocker(this.players[0]);
        break;
    }
  }

  handleShipDeselect() {
    this.clearAllTileHover();
    this.selectedShip = undefined;
  }
  clearAllTileHover() {
    // Clear previous hover states
    const allTiles = document.querySelectorAll(".tile");
    allTiles.forEach((tile) => tile.classList.remove("hover"));
    allTiles.forEach((tile) => tile.classList.remove("enemyHover"));
  }
  //
  //
  //

  ShouldStateAdvance() {
    //Returns true or false if we should advance the state
    const allNav = document.querySelectorAll(".shipWrapper");
    switch (this.gameState.state) {
      case 0:
      case 1:
        if (allNav.length == 0) {
          return true;
        }
        return false;
      //Deselect other ship navs
      case 2:
        if (players[0].hasShot == true) {
          return true;
        }
        return false;
      case 3:
        if (players[1].hasShot == true) {
          return true;
        }
        return false;
    }
  }
  OnGameEnd() {
    this.generateScreenBlocker("Game End " + this.currentPlayer + " WINS!");
    return this.currentPlayer;
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

  removeShipFromBoard(ship, onGameEnd) {
    //removes a ship from the board and returns true if there are no ships left
    const coordinateArr = ship.getCoordinates();
    coordinateArr.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]].setShip(null);
    });
    const index = this.ships.indexOf(ship);
    if (index !== -1) {
      this.ships.splice(index, 1);
    }
    this.allShipsSunk(onGameEnd);
  }
  allShipsSunk(onGameEnd) {
    if (this.ships.length == 0) {
      console.log("All ships sunk on gameboard: ", this.gameBoard);
      onGameEnd();
    }
  }
  receiveAttack(coordinate, onGameEnd) {
    const ship = this.board[coordinate[0]][coordinate[1]].getShip();
    if (ship) {
      ship.addHit();
      if (ship.isSunk()) {
        if (this.removeShipFromBoard(ship, onGameEnd)) {
          onGameEnd();
        }
        return { hit: true, sunk: ship.type };
      }
      return { hit: true, sunk: null };
    } else {
      return { hit: false, sunk: null };
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);


/***/ }),

/***/ "./src/GameState.js":
/*!**************************!*\
  !*** ./src/GameState.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GameState {
  //
  // Game state manager
  //
  //possible states:
  //
  //0 - player one setup
  //1 - player two setup
  //2 - player ones turn
  //3 - player twos turn
  //
  constructor(state, currentPlayer) {
    this.state = state ?? 0;
  }
  setState(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
  advanceState() {
    this.state += 1;
    if (this.state > 3) this.state = 2;
    return this.state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameState);


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
    this.hasShot = null;
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
  getRotation() {
    return this.rotation;
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
    this.Ship = null;
  }
  setShip(ship) {
    this.Ship = ship;
  }
  getShip() {
    return this.Ship;
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomManipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulator.js */ "./src/DomManipulator.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const domManip = new _DomManipulator_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
domManip.onEntry();
//

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQU07O0FBRTdCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCLGVBQWUsU0FBUyxlQUFlLFNBQVM7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCLGVBQWUsU0FBUyxlQUFlLFNBQVM7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBMkM7QUFDdEI7O0FBRXJCLHFCQUFxQiwwREFBUTtBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL0RvbU1hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL1RpbGUuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvT2NlYW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuLm1haW5XcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5wbGF5ZXJCb2FyZFdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcbn1cbi5zdGF0ZVdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuLlBsYXllclBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyVGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmJvYXJkV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubmF2V3JhcHBlciB7XG4gIHdpZHRoOiAyMCU7XG4gIGdhcDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5zaGlwV3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5uYXZTaGlwU2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZham93aGl0ZTtcbn1cbi5zY3JlZW5CbG9ja2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oaXRUZXh0IHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NyZWVuQmxvY2tlcldyYXBwZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY3JlZW5CbG9ja2VyQnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aWxlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi50aWxlLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLnRpbGUuaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50aWxlLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG4udGlsZS5lbmVteUhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi50aWxlLnNoaXBIaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnRpbGUubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMTY4LCAyNSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wbGF5ZXJCb2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogRW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBlbnRpcmUgYXJlYSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIFByZXZlbnRzIHRoZSBpbWFnZSBmcm9tIHJlcGVhdGluZyAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5REFBeUM7RUFDekMsc0JBQXNCLEVBQUUsNkNBQTZDO0VBQ3JFLDJCQUEyQixFQUFFLHNCQUFzQjtFQUNuRCw0QkFBNEIsRUFBRSxzQ0FBc0M7QUFDdEVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuLm1haW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ucGxheWVyQm9hcmRXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxufVxcbi5zdGF0ZVdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5QbGF5ZXJQYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYXllclRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLmJvYXJkV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm5hdldyYXBwZXIge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGdhcDogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuLnNoaXBXcmFwcGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm5hdlNoaXBTZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZham93aGl0ZTtcXG59XFxuLnNjcmVlbkJsb2NrZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oaXRUZXh0IHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogNTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zY3JlZW5CbG9ja2VyV3JhcHBlciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2NyZWVuQmxvY2tlckJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGlsZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnRpbGUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4udGlsZS5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnRpbGUuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi50aWxlLmVuZW15SG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi50aWxlLnNoaXBIaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi50aWxlLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAxNjgsIDI1KTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLnBsYXllckJvYXJkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1hZ2VzL09jZWFuLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogRW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBlbnRpcmUgYXJlYSAqL1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBpbWFnZSAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogUHJldmVudHMgdGhlIGltYWdlIGZyb20gcmVwZWF0aW5nICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlLmpzXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZC5qc1wiO1xuXG5jbGFzcyBEb21NYW5pcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUaWxlcyA9IFtdO1xuICAgIHRoaXMubGFzdEhvdmVyZWRUaWxlID0gbnVsbDtcblxuICAgIHRoaXMuc2hpcFR5cGVzID0gW1xuICAgICAgeyBuYW1lOiBcIkNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0sXG4gICAgICB7IG5hbWU6IFwiQmF0dGxlc2hpcFwiLCBsZW5ndGg6IDQgfSxcbiAgICAgIHsgbmFtZTogXCJDcnVpc2VyXCIsIGxlbmd0aDogMyB9LFxuICAgICAgeyBuYW1lOiBcIlN1Ym1hcmluZVwiLCBsZW5ndGg6IDMgfSxcbiAgICAgIHsgbmFtZTogXCJEZXN0cm95ZXJcIiwgbGVuZ3RoOiAyIH0sXG4gICAgXTtcbiAgICB0aGlzLmdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucm90YXRpb24gPSBcImhvcml6b250YWxcIjtcblxuICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFBsYXllciA9IG51bGw7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gICAgTmF2aWdhdGlvbiBDb21wb25lbnQgZ2VuZXJhdG9yc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25FbnRyeSgpIHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZ2VuZXJhdGVNYWluV3JhcHBlcigpO1xuICAgIGNvbnN0IG5hdldyYXBwZXIgPSB0aGlzLmdlbmVyYXRlTmF2V3JhcHBlcihtYWluV3JhcHBlcik7XG4gICAgY29uc3QgcGxheWVyQm9hcmRXcmFwcGVyID0gdGhpcy5nZW5lcmF0ZVBsYXllckJvYXJkV3JhcHBlcihtYWluV3JhcHBlcik7XG5cbiAgICB0aGlzLmdlbmVyYXRlU3RhdGVXcmFwcGVyKHBsYXllckJvYXJkV3JhcHBlcik7XG5cbiAgICB0aGlzLnBsYXllcnMucHVzaCh0aGlzLmdlbmVyYXRlUGxheWVyKFwiSHVtYW5cIiwgMSwgcGxheWVyQm9hcmRXcmFwcGVyKSk7XG4gICAgdGhpcy5nZW5lcmF0ZVNoaXBTZXR1cFBhbmVsKG5hdldyYXBwZXIsIHRoaXMucGxheWVyc1swXSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5nZW5lcmF0ZVBsYXllcihcIkh1bWFuXCIsIDIsIHBsYXllckJvYXJkV3JhcHBlcikpO1xuXG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gMTtcblxuICAgIC8vYWRkIGxpc3RlbmVyIGZvciByb3RhdGlvblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KSk7XG4gICAgdGhpcy5nZW5lcmF0ZVNjcmVlbkJsb2NrZXIoXCJQbGF5ZXIgMSdzIFNldHVwXCIpO1xuICAgIHRoaXMuZ2VuZXJhdGVCb2FyZEJsb2NrZXIodGhpcy5wbGF5ZXJzWzFdKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWFpbldyYXBwZXIoKSB7XG4gICAgY29uc3QgbWFpblByb2pQYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qUGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluV3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Qcm9qUGFuZWxXcmFwcGVyKTtcbiAgICByZXR1cm4gbWFpblByb2pQYW5lbFdyYXBwZXI7XG4gIH1cblxuICBnZW5lcmF0ZVBsYXllckJvYXJkV3JhcHBlcihtYWluV3JhcHBlcikge1xuICAgIGNvbnN0IHBsYXllckJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJCb2FyZFdyYXBwZXJcIik7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRXcmFwcGVyKTtcbiAgICByZXR1cm4gcGxheWVyQm9hcmRXcmFwcGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVOYXZXcmFwcGVyKG1haW5XcmFwcGVyKSB7XG4gICAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmF2V3JhcHBlclwiKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChuYXZXcmFwcGVyKTtcbiAgICByZXR1cm4gbmF2V3JhcHBlcjtcbiAgfVxuXG4gIGdlbmVyYXRlU2hpcFNldHVwUGFuZWwobmF2V3JhcHBlcikge1xuICAgIHRoaXMuc2hpcFR5cGVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHRoaXMuYWRkU2hpcFRvTmF2UGFuZWwoc2hpcCwgbmF2V3JhcHBlcik7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZVNjcmVlbkJsb2NrZXIodGV4dCwgc2hpcEhpdCA9IG51bGwsIHNoaXBTdW5rID0gZmFsc2UpIHtcbiAgICBjb25zdCBzY3JlZW5CbG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5CbG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5CbG9ja2VyXCIpO1xuXG4gICAgY29uc3Qgc2NyZWVuQmxvY2tlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcmVlbkJsb2NrZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5CbG9ja2VyV3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHNjcmVlbkJsb2NrZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5CbG9ja2VyVGV4dC5jbGFzc0xpc3QuYWRkKFwic2NyZWVuQmxvY2tlclRleHRcIik7XG4gICAgc2NyZWVuQmxvY2tlclRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgaWYgKHNoaXBTdW5rKSB7XG4gICAgICBjb25zdCBzaGlwU3Vua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcFN1bmtUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdW5rVGV4dFwiKTtcbiAgICAgIHNoaXBTdW5rVGV4dC50ZXh0Q29udGVudCA9IGBZb3Ugc3VuayB0aGVpciAke3NoaXBTdW5rfSFgO1xuICAgICAgc2NyZWVuQmxvY2tlcldyYXBwZXIuYXBwZW5kQ2hpbGQoc2hpcFN1bmtUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHNoaXBIaXQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNoaXBIaXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBIaXRUZXh0LmNsYXNzTGlzdC5hZGQoXCJoaXRUZXh0XCIpO1xuICAgICAgc2hpcEhpdFRleHQudGV4dENvbnRlbnQgPSBzaGlwSGl0ID8gXCJZb3UgSGl0ISEhXCIgOiBcIllvdSBNaXNzZWQhXCI7XG4gICAgICBzY3JlZW5CbG9ja2VyV3JhcHBlci5hcHBlbmRDaGlsZChzaGlwSGl0VGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NyZWVuQmxvY2tlclNlY29uZGFyeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcmVlbkJsb2NrZXJTZWNvbmRhcnlUZXh0LmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5CbG9ja2VyVGV4dFwiKTtcbiAgICBzY3JlZW5CbG9ja2VyU2Vjb25kYXJ5VGV4dC50ZXh0Q29udGVudCA9IFwiUmVhZHkgbmV4dCBwbGF5ZXJcIjtcblxuICAgIGNvbnN0IHNjcmVlbkJsb2NrZXJCdXR0b24gPSB0aGlzLmdlbmVyYXRlQ2xvc2VCdXR0b24oKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyZWVuQmxvY2tlcik7XG4gICAgc2NyZWVuQmxvY2tlci5hcHBlbmRDaGlsZChzY3JlZW5CbG9ja2VyV3JhcHBlcik7XG4gICAgc2NyZWVuQmxvY2tlcldyYXBwZXIuYXBwZW5kQ2hpbGQoc2NyZWVuQmxvY2tlclRleHQpO1xuICAgIHNjcmVlbkJsb2NrZXJXcmFwcGVyLmFwcGVuZENoaWxkKHNjcmVlbkJsb2NrZXJTZWNvbmRhcnlUZXh0KTtcbiAgICBzY3JlZW5CbG9ja2VyV3JhcHBlci5hcHBlbmRDaGlsZChzY3JlZW5CbG9ja2VyQnV0dG9uKTtcbiAgICByZXR1cm4gc2NyZWVuQmxvY2tlcjtcbiAgfVxuXG4gIGFkZFNoaXBUb05hdlBhbmVsKHNoaXAsIG5hdldyYXBwZXIpIHtcbiAgICBjb25zdCBzaGlwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2hpcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNoaXBUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2hpcFRpdGxlXCIpO1xuICAgIHNoaXBUaXRsZS50ZXh0Q29udGVudCA9IHNoaXAubmFtZTtcbiAgICBzaGlwV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2hpcFdyYXBwZXJcIik7XG4gICAgc2hpcFdyYXBwZXIuZGF0YXNldC5zaGlwVHlwZSA9IHNoaXAubmFtZTtcbiAgICBzaGlwV3JhcHBlci5kYXRhc2V0LnNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgIHNoaXBXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IHNoaXA7XG4gICAgICBjb25zdCBhbGxOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBXcmFwcGVyXCIpO1xuXG4gICAgICAvL0Rlc2VsZWN0IG90aGVyIHNoaXAgbmF2c1xuICAgICAgYWxsTmF2LmZvckVhY2goKG5hdikgPT4gbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZTaGlwU2VsZWN0ZWRcIikpO1xuICAgICAgc2hpcFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdlNoaXBTZWxlY3RlZFwiKTtcbiAgICB9KTtcblxuICAgIHNoaXBXcmFwcGVyLmFwcGVuZENoaWxkKHNoaXBUaXRsZSk7XG4gICAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChzaGlwV3JhcHBlcik7XG4gIH1cblxuICByZW1vdmVTaGlwRnJvbU5hdlBhbmVsKCkge1xuICAgIC8vUmVtb3ZlIGFsbCBzaGlwcyB0aGF0IGhhdmUgLm5hdlNoaXBTZWxlY3RlZCBzaW5jZSB3ZSBvbmx5IGV2ZXIgd2FudCBvbmUuXG4gICAgY29uc3QgTmF2VG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdlNoaXBTZWxlY3RlZFwiKTtcbiAgICBOYXZUb1JlbW92ZS5mb3JFYWNoKChuYXYpID0+IG5hdi5yZW1vdmUoXCJuYXZTaGlwU2VsZWN0ZWRcIikpO1xuICAgIHRoaXMuaGFuZGxlU2hpcERlc2VsZWN0KCk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXRlV3JhcHBlcihtYWluV3JhcHBlcikge1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRTdGF0ZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInN0YXRlV3JhcHBlclwiKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChjdXJyZW50U3RhdGVXcmFwcGVyKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlVGV4dENvbnRlbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlVGV4dENvbnRlbnQoKSB7XG4gICAgY29uc3Qgc3RhdGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0ZVdyYXBwZXJcIik7XG4gICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZS5zdGF0ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBzdGF0ZVdyYXBwZXIudGV4dENvbnRlbnQgPSBcIlBsYXllciBPbmUgU2V0dXBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHN0YXRlV3JhcHBlci50ZXh0Q29udGVudCA9IFwiUGxheWVyIFR3byBTZXR1cFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc3RhdGVXcmFwcGVyLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgT25lJ3MgdHVyblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc3RhdGVXcmFwcGVyLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgVHdvJ3MgdHVyblwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVBsYXllcih0eXBlLCBwbGF5ZXJJZCwgbWFpbldyYXBwZXIpIHtcbiAgICBjb25zdCBwbGF5ZXJQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyVGV4dFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHR5cGUsIHBsYXllcklkKTtcblxuICAgIHBsYXllclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJQbGF5ZXJQYW5lbFwiKTtcblxuICAgIHBsYXllclRleHRQYW5lbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyXCIgKyBwbGF5ZXJJZCwgXCJwbGF5ZXJUZXh0XCIpO1xuICAgIHBsYXllclRleHRQYW5lbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIFwiICsgcGxheWVySWQ7XG5cbiAgICBwbGF5ZXJCb2FyZFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJcIiArIHBsYXllcklkLCBcInBsYXllckJvYXJkXCIpO1xuXG4gICAgY29uc3QgYm9hcmRUaWxlV3JhcHBlciA9IHRoaXMuZ2VuZXJhdGVCb2FyZChwbGF5ZXIpO1xuXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyUGFuZWwpO1xuICAgIHBsYXllclBhbmVsLmFwcGVuZENoaWxkKHBsYXllclRleHRQYW5lbCk7XG4gICAgcGxheWVyUGFuZWwuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRQYW5lbCk7XG4gICAgcGxheWVyQm9hcmRQYW5lbC5hcHBlbmRDaGlsZChib2FyZFRpbGVXcmFwcGVyKTtcbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG5cbiAgZ2VuZXJhdGVCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYm9hcmRXcmFwcGVyXCIpO1xuICAgIGJvYXJkV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNsZWFyQWxsVGlsZUhvdmVyKCk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkLmZvckVhY2goKHNlY3Rpb24sIGNvbEluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xuXG4gICAgICBzZWN0aW9uLmZvckVhY2goKHRpbGUsIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyXCIgKyBwbGF5ZXIucGxheWVySWQsIFwidGlsZVwiKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gY29sSW5kZXg7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuICAgICAgICBzcXVhcmUuZGF0YXNldC5wbGF5ZXJJZCA9IHBsYXllci5wbGF5ZXJJZDtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVRpbGVDbGljayhldmVudCwgcGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVGlsZUhvdmVyKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIG9yIGNvbnRlbnQgdG8gdGhlIHNxdWFyZSBpZiBuZWVkZWRcbiAgICAgIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJvYXJkV3JhcHBlcjtcbiAgfVxuICBnZW5lcmF0ZUJvYXJkQmxvY2tlcihwbGF5ZXIpIHtcbiAgICAvLyBIaWRlIHRoZSBwbGF5ZXIgd2hvIGlzIG5vdCBpbiBmb2N1cyBieSBhZGRpbmcgXCJoaWRkZW5cIiBjbGFzcyB0byB0aGVpciBib2FyZCB0aWxlc1xuICAgIHBsYXllci5nYW1lQm9hcmQuYm9hcmQuZm9yRWFjaCgoc2VjdGlvbiwgY29sSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb24uZm9yRWFjaCgodGlsZSwgcm93SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAudGlsZVtkYXRhLXBsYXllci1pZD1cIiR7cGxheWVyLnBsYXllcklkfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aWxlRWxlbWVudCkge1xuICAgICAgICAgIHRpbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQm9hcmRCbG9ja2VyKHBsYXllcikge1xuICAgIC8vIFVuaGlkZSB0aGUgcGxheWVyIHdobyBpcyBub3cgaW4gZm9jdXMgYnkgcmVtb3ZpbmcgXCJoaWRkZW5cIiBjbGFzcyBmcm9tIHRoZWlyIGJvYXJkIHRpbGVzXG4gICAgcGxheWVyLmdhbWVCb2FyZC5ib2FyZC5mb3JFYWNoKChzZWN0aW9uLCBjb2xJbmRleCkgPT4ge1xuICAgICAgc2VjdGlvbi5mb3JFYWNoKCh0aWxlLCByb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0aWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC50aWxlW2RhdGEtcGxheWVyLWlkPVwiJHtwbGF5ZXIucGxheWVySWR9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1bZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRpbGVFbGVtZW50KSB7XG4gICAgICAgICAgdGlsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZVBsYXllckZlZWRiYWNrUGFuZWwodGV4dCkge1xuICAgIC8vR2l2ZXMgdGhlIHBsYXllciBmZWVkYmFjayBvbiB3aGV0aGVyIHRoZXkgaGl0IG9yIG1pc3MuXG4gICAgY29uc3QgcGxheWVyRmVlZGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJGZWVkYmFja1BhbmVsXCIpO1xuXG4gICAgY29uc3QgcGxheWVyRmVlZGJhY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJGZWVkYmFja1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInBsYXllckZlZWRiYWNrUGFuZWxXcmFwcGVyXCIpO1xuXG4gICAgY29uc3QgcGxheWVyRmVlZGJhY2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJGZWVkYmFja1RleHQuY2xhc3NMaXN0LmFkZChcInBsYXllckZlZWRiYWNrVGV4dFwiKTtcbiAgICBwbGF5ZXJGZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgY29uc3QgcGxheWVyRmVlZGJhY2tCdXR0b24gPSB0aGlzLmdlbmVyYXRlQ2xvc2VCdXR0b24oKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGxheWVyRmVlZGJhY2spO1xuICAgIHBsYXllckZlZWRiYWNrLmFwcGVuZENoaWxkKHBsYXllckZlZWRiYWNrV3JhcHBlcik7XG4gICAgcGxheWVyRmVlZGJhY2tXcmFwcGVyLmFwcGVuZENoaWxkKHBsYXllckZlZWRiYWNrVGV4dCk7XG4gICAgcGxheWVyRmVlZGJhY2tXcmFwcGVyLmFwcGVuZENoaWxkKHBsYXllckZlZWRiYWNrQnV0dG9uKTtcbiAgICByZXR1cm4gcGxheWVyRmVlZGJhY2s7XG4gIH1cblxuICBnZW5lcmF0ZUNsb3NlQnV0dG9uKCkge1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2NyZWVuQmxvY2tlckJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JlZW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW5CbG9ja2VyXCIpO1xuICAgICAgc2NyZWVuV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgIGNsb3NlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vLS1IYW5kbGVyc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXApIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiclwiIHx8IGV2ZW50LmtleSA9PT0gXCJSXCIpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VSb3RhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5sYXN0SG92ZXJlZFRpbGUpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVRpbGVIb3Zlcih7IHRhcmdldDogdGhpcy5sYXN0SG92ZXJlZFRpbGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VSb3RhdGlvbigpIHtcbiAgICBpZiAodGhpcy5yb3RhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHRoaXMucm90YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUaWxlQ2xpY2soZXZlbnQsIHBsYXllcikge1xuICAgIGNvbnN0IHRpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LmNvbCk7XG4gICAgbGV0IHNoaXBTdW5rID0gbnVsbDtcbiAgICBsZXQgc2hpcEhpdCA9IG51bGw7XG5cbiAgICBjb25zdCBwbGF5ZXJJZCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5wbGF5ZXJJZCk7XG5cbiAgICAvL0hhbmRsZSBjbGlja2luZyBvbiB0aGUgdGlsZSBpbiBkaWZmZXJlbnQgc3RhZ2VzIG9mIHRoZSBnYW1lLlxuXG4gICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmIChwbGF5ZXJJZCAhPT0gdGhpcy5jdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHRpbGUgZG9lcyBub3QgYmVsb25nIHRvIHRoZSBjdXJyZW50IHBsYXllciwgaWdub3JlIHRoZSBjbGlja1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwVGlsZXMgPSB0aGlzLmdldFNoaXBQbGFjZW1lbnQocm93LCBjb2wpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXAgJiYgc2hpcFRpbGVzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYXllci5nYW1lQm9hcmQuYWRkU2hpcFRvQm9hcmQoXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLm5hbWUsXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgc2hpcFRpbGVzLFxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXBGcm9tTmF2UGFuZWwoKTtcblxuICAgICAgICAgICAgc2hpcFRpbGVzLmZvckVhY2goKFtyLCBjXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aWxlVG9NYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLnRpbGVbZGF0YS1yb3c9XCIke3J9XCJdW2RhdGEtY29sPVwiJHtjfVwiXVtkYXRhLXBsYXllci1pZD1cIiR7cGxheWVySWR9XCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAodGlsZVRvTWFyaykge1xuICAgICAgICAgICAgICAgIHRpbGVUb01hcmsuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9TaG91bGQgd2UgbW92ZSBvbiBmcm9tIHNldHVwP1xuICAgICAgICAgICAgaWYgKHRoaXMuU2hvdWxkU3RhdGVBZHZhbmNlKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICBsZXQgc2hpcEhpdCA9IGZhbHNlO1xuICAgICAgICBpZiAocGxheWVySWQgIT09IHRoaXMuY3VycmVudFBsYXllcikge1xuICAgICAgICAgIGNvbnN0IHRpbGVUb01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC50aWxlW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdW2RhdGEtcGxheWVyLWlkPVwiJHtwbGF5ZXJJZH1cIl1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICh0aWxlVG9NYXJrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLnBsYXllcnNbXG4gICAgICAgICAgICAgIHBsYXllcklkIC0gMVxuICAgICAgICAgICAgXS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbcm93LCBjb2xdLCB0aGlzLk9uR2FtZUVuZCk7XG4gICAgICAgICAgICBzaGlwSGl0ID0gYXR0YWNrUmVzdWx0LmhpdDtcbiAgICAgICAgICAgIHNoaXBTdW5rID0gYXR0YWNrUmVzdWx0LnN1bms7XG5cbiAgICAgICAgICAgIGlmIChzaGlwSGl0KSB7XG4gICAgICAgICAgICAgIHRpbGVUb01hcmsuY2xhc3NMaXN0LmFkZChcInNoaXBIaXRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aWxlVG9NYXJrLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlKHNoaXBIaXQsIHNoaXBTdW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaGFuZGxlVGlsZUhvdmVyKGV2ZW50KSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2VsZWN0ZWRTaGlwO1xuICAgIGNvbnN0IHRpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LmNvbCk7XG4gICAgY29uc3QgcGxheWVySWQgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucGxheWVySWQpO1xuXG4gICAgaWYgKHNoaXAgJiYgcGxheWVySWQgPT09IHRoaXMuY3VycmVudFBsYXllcikge1xuICAgICAgdGhpcy5sYXN0SG92ZXJlZFRpbGUgPSB0aWxlO1xuICAgICAgdGhpcy5jbGVhckFsbFRpbGVIb3ZlcigpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgd2hpY2ggdGlsZXMgc2hvdWxkIGJlIGhpZ2hsaWdodGVkXG4gICAgICBjb25zdCBzaGlwVGlsZXMgPSB0aGlzLmdldFNoaXBQbGFjZW1lbnQocm93LCBjb2wpO1xuXG4gICAgICBpZiAoc2hpcFRpbGVzKSB7XG4gICAgICAgIHNoaXBUaWxlcy5mb3JFYWNoKChbciwgY10pID0+IHtcbiAgICAgICAgICBjb25zdCBob3ZlclRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC50aWxlW2RhdGEtcm93PVwiJHtyfVwiXVtkYXRhLWNvbD1cIiR7Y31cIl1bZGF0YS1wbGF5ZXItaWQ9XCIke3BsYXllcklkfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChob3ZlclRpbGUpIHtcbiAgICAgICAgICAgIGhvdmVyVGlsZS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NoZWNrIGlmIHdlJ3JlIGNsaWNraW5nIG9uIGFuIGVuZW15IGJvYXJkIHRvIGZpcmUgZHVyaW5nIGdhbWVwbGF5IGxvb3BcbiAgICBpZiAoXG4gICAgICAhc2hpcCAmJlxuICAgICAgcGxheWVySWQgIT09IHRoaXMuY3VycmVudFBsYXllciAmJlxuICAgICAgWzIsIDNdLmluY2x1ZGVzKHRoaXMuZ2FtZVN0YXRlLmdldFN0YXRlKCkpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RIb3ZlcmVkVGlsZSA9IHRpbGU7XG4gICAgICB0aGlzLmNsZWFyQWxsVGlsZUhvdmVyKCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB3aGljaCB0aWxlcyBzaG91bGQgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgIGNvbnN0IGhvdmVyVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGlsZVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXVtkYXRhLXBsYXllci1pZD1cIiR7cGxheWVySWR9XCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChob3ZlclRpbGUpIHtcbiAgICAgICAgaG92ZXJUaWxlLmNsYXNzTGlzdC5hZGQoXCJlbmVteUhvdmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNoaXBQbGFjZW1lbnQocm93LCBjb2wpIHtcbiAgICAvL2dpdmVuIGEgcm93L2NvbCwgcmV0dXJuIHRoZSB0aWxlcyB3ZSdkIG5lZWQgdG8gcGxhY2UgdGhlIHNoaXBcbiAgICBjb25zdCBzaGlwID0gdGhpcy5zZWxlY3RlZFNoaXA7XG4gICAgaWYgKCFzaGlwKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHNoaXBUaWxlcyA9IFtdO1xuICAgIGlmICh0aGlzLnJvdGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcFRpbGVzLnB1c2goW3JvdywgY29sICsgaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcFRpbGVzLnB1c2goW3JvdyArIGksIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwVGlsZXM7XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZShzaGlwSGl0ID0gbnVsbCwgc2hpcFN1bmsgPSBudWxsKSB7XG4gICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTY3JlZW5CbG9ja2VyKFwiUGxheWVyIDIncyBTZXR1cFwiKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMF0pO1xuICAgICAgICB0aGlzLnJlbW92ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMV0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1sxXS5wbGF5ZXJJZDtcblxuICAgICAgICB0aGlzLmdlbmVyYXRlU2hpcFNldHVwUGFuZWwoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZXcmFwcGVyXCIpLFxuICAgICAgICAgIHRoaXMucGxheWVyc1sxXVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlLmFkdmFuY2VTdGF0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlVGV4dENvbnRlbnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTY3JlZW5CbG9ja2VyKFwiUGxheWVyIDEncyBUdXJuXCIpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQm9hcmRCbG9ja2VyKHRoaXMucGxheWVyc1sxXSk7XG4gICAgICAgIHRoaXMucmVtb3ZlQm9hcmRCbG9ja2VyKHRoaXMucGxheWVyc1swXSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdLnBsYXllcklkO1xuXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlLmFkdmFuY2VTdGF0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlVGV4dENvbnRlbnQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVNjcmVlbkJsb2NrZXIoXCJQbGF5ZXIgMidzIFR1cm5cIiwgc2hpcEhpdCwgc2hpcFN1bmspO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1sxXS5wbGF5ZXJJZDtcblxuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5hZHZhbmNlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZVRleHRDb250ZW50KCk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMF0pO1xuICAgICAgICB0aGlzLnJlbW92ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMV0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmdlbmVyYXRlU2NyZWVuQmxvY2tlcihcIlBsYXllciAxJ3MgVHVyblwiLCBzaGlwSGl0LCBzaGlwU3Vuayk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdLnBsYXllcklkO1xuXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlLmFkdmFuY2VTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGVUZXh0Q29udGVudCgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQm9hcmRCbG9ja2VyKHRoaXMucGxheWVyc1sxXSk7XG4gICAgICAgIHRoaXMucmVtb3ZlQm9hcmRCbG9ja2VyKHRoaXMucGxheWVyc1swXSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNoaXBEZXNlbGVjdCgpIHtcbiAgICB0aGlzLmNsZWFyQWxsVGlsZUhvdmVyKCk7XG4gICAgdGhpcy5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgY2xlYXJBbGxUaWxlSG92ZXIoKSB7XG4gICAgLy8gQ2xlYXIgcHJldmlvdXMgaG92ZXIgc3RhdGVzXG4gICAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbGVcIik7XG4gICAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4gdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIikpO1xuICAgIGFsbFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImVuZW15SG92ZXJcIikpO1xuICB9XG4gIC8vXG4gIC8vXG4gIC8vXG5cbiAgU2hvdWxkU3RhdGVBZHZhbmNlKCkge1xuICAgIC8vUmV0dXJucyB0cnVlIG9yIGZhbHNlIGlmIHdlIHNob3VsZCBhZHZhbmNlIHRoZSBzdGF0ZVxuICAgIGNvbnN0IGFsbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFdyYXBwZXJcIik7XG4gICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZS5zdGF0ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAoYWxsTmF2Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9EZXNlbGVjdCBvdGhlciBzaGlwIG5hdnNcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKHBsYXllcnNbMF0uaGFzU2hvdCA9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAocGxheWVyc1sxXS5oYXNTaG90ID09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIE9uR2FtZUVuZCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlU2NyZWVuQmxvY2tlcihcIkdhbWUgRW5kIFwiICsgdGhpcy5jdXJyZW50UGxheWVyICsgXCIgV0lOUyFcIik7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBsYXllcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb21NYW5pcDtcbiIsImltcG9ydCBUaWxlIGZyb20gXCIuL1RpbGUuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXAuanNcIjtcblxuY2xhc3MgZ2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuc2V0dXBOZXdCb2FyZCgxMCwgMTApO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuICBzZXR1cE5ld0JvYXJkKGxlbmd0aCwgaGVpZ2h0KSB7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBuZXcgVGlsZShpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIGFkZFNoaXBUb0JvYXJkKHR5cGUsIGxlbmd0aCwgY29vcmRpbmF0ZUFycikge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCh0eXBlLCBsZW5ndGgsIGNvb3JkaW5hdGVBcnIpO1xuXG4gICAgLy8gVmVyaWZ5IHRoZSBwbGFjZW1lbnQgaGFzIG5vIGVycm9yc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVBcnJbaV07XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgY29uc3QgY29sID0gY29vcmRpbmF0ZVsxXTtcblxuICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID49IDEwIHx8IGNvbCA8IDAgfHwgY29sID49IDEwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yOiBDb29yZGluYXRlIG91dCBvZiBib2FyZCBib3VuZHNcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5nZXRTaGlwKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiRXJyb3I6IEFub3RoZXIgc2hpcCBpcyBhbHJlYWR5IHBsYWNlZCBhdCB0aGlzIGNvb3JkaW5hdGVcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvb3JkaW5hdGVBcnIuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgIGNvbnN0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS5zZXRTaGlwKHNoaXApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICByZW1vdmVTaGlwRnJvbUJvYXJkKHNoaXAsIG9uR2FtZUVuZCkge1xuICAgIC8vcmVtb3ZlcyBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gc2hpcHMgbGVmdFxuICAgIGNvbnN0IGNvb3JkaW5hdGVBcnIgPSBzaGlwLmdldENvb3JkaW5hdGVzKCk7XG4gICAgY29vcmRpbmF0ZUFyci5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLnNldFNoaXAobnVsbCk7XG4gICAgfSk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNoaXBzLmluZGV4T2Yoc2hpcCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5zaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICB0aGlzLmFsbFNoaXBzU3VuayhvbkdhbWVFbmQpO1xuICB9XG4gIGFsbFNoaXBzU3VuayhvbkdhbWVFbmQpIHtcbiAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJBbGwgc2hpcHMgc3VuayBvbiBnYW1lYm9hcmQ6IFwiLCB0aGlzLmdhbWVCb2FyZCk7XG4gICAgICBvbkdhbWVFbmQoKTtcbiAgICB9XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlLCBvbkdhbWVFbmQpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5ib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXS5nZXRTaGlwKCk7XG4gICAgaWYgKHNoaXApIHtcbiAgICAgIHNoaXAuYWRkSGl0KCk7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVTaGlwRnJvbUJvYXJkKHNoaXAsIG9uR2FtZUVuZCkpIHtcbiAgICAgICAgICBvbkdhbWVFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBoaXQ6IHRydWUsIHN1bms6IHNoaXAudHlwZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBzdW5rOiBudWxsIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIHN1bms6IG51bGwgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiY2xhc3MgR2FtZVN0YXRlIHtcbiAgLy9cbiAgLy8gR2FtZSBzdGF0ZSBtYW5hZ2VyXG4gIC8vXG4gIC8vcG9zc2libGUgc3RhdGVzOlxuICAvL1xuICAvLzAgLSBwbGF5ZXIgb25lIHNldHVwXG4gIC8vMSAtIHBsYXllciB0d28gc2V0dXBcbiAgLy8yIC0gcGxheWVyIG9uZXMgdHVyblxuICAvLzMgLSBwbGF5ZXIgdHdvcyB0dXJuXG4gIC8vXG4gIGNvbnN0cnVjdG9yKHN0YXRlLCBjdXJyZW50UGxheWVyKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlID8/IDA7XG4gIH1cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cbiAgYWR2YW5jZVN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUgKz0gMTtcbiAgICBpZiAodGhpcy5zdGF0ZSA+IDMpIHRoaXMuc3RhdGUgPSAyO1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZTtcbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkLmpzXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBsYXllcklkKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgZ2FtZUJvYXJkKCk7XG4gICAgdGhpcy5oYXNTaG90ID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbGVuZ3RoLCBjb29yZGluYXRlcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHNoaXAgaXMgc3Vua1xuICAgIGlmICh0aGlzLmxlbmd0aCA8PSB0aGlzLmhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFkZEhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgfVxuICBnZXRIaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHM7XG4gIH1cbiAgZ2V0Um90YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb247XG4gIH1cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNsYXNzIFRpbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaXNIaXQgPSBmYWxzZTtcbiAgICB0aGlzLlNoaXAgPSBudWxsO1xuICB9XG4gIHNldFNoaXAoc2hpcCkge1xuICAgIHRoaXMuU2hpcCA9IHNoaXA7XG4gIH1cbiAgZ2V0U2hpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5TaGlwO1xuICB9XG4gIHNldEhpdChib29sKSB7XG4gICAgdGhpcy5pc0hpdCA9IGJvb2w7XG4gIH1cbiAgZ2V0SGl0KCkge1xuICAgIHJldHVybiB0aGlzLmlzSGl0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUaWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEb21NYW5pcCBmcm9tIFwiLi9Eb21NYW5pcHVsYXRvci5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgZG9tTWFuaXAgPSBuZXcgRG9tTWFuaXAoKTtcbmRvbU1hbmlwLm9uRW50cnkoKTtcbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=