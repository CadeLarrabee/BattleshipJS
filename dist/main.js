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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
  gap: 4px;
}
.col {
  gap: 4px;
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
  width: 25px;
  height: 25px;
  background-color: lightgrey;
}
.tile.ship {
  background-color: blue;
}
.tile.hover {
  background-color: white;
}
.tile.hidden {
  background-color: black;
}
.tile.enemyHover {
  background-color: green;
}
.tile.shipHit {
  background-color: yellow;
}
.tile.miss {
  background-color: rgb(0, 183, 255);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,QAAQ;EACR,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,kCAAkC;AACpC","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  min-width: 0;\n}\n.mainWrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  background-color: red;\n}\n.playerBoardWrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20%;\n  padding-right: 20%;\n}\n.stateWrapper {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 48px;\n}\n.PlayerPanel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.playerText {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n}\n.boardWrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.col {\n  gap: 4px;\n  display: flex;\n  flex-direction: column;\n}\n.navWrapper {\n  width: 20%;\n  gap: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  justify-self: left;\n  background-color: aqua;\n}\n.shipWrapper {\n  height: 100px;\n  font-size: 24px;\n  border: 5px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navShipSelected {\n  background-color: navajowhite;\n}\n.screenBlocker {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: purple;\n  color: white;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hitText {\n  font-size: 48px;\n  width: 250px;\n  height: 56px;\n}\n.screenBlockerWrapper {\n  height: 500px;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.screenBlockerButton {\n  width: 100px;\n  height: 50px;\n  color: orange;\n  font-size: 14px;\n}\n.tile {\n  width: 25px;\n  height: 25px;\n  background-color: lightgrey;\n}\n.tile.ship {\n  background-color: blue;\n}\n.tile.hover {\n  background-color: white;\n}\n.tile.hidden {\n  background-color: black;\n}\n.tile.enemyHover {\n  background-color: green;\n}\n.tile.shipHit {\n  background-color: yellow;\n}\n.tile.miss {\n  background-color: rgb(0, 183, 255);\n}\n"],"sourceRoot":""}]);
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

  generateFeedbackPanel(type, primaryText, secondaryText = null) {
    const panel = document.createElement("div");
    panel.classList.add(
      type === "player" ? "playerFeedbackPanel" : "screenBlocker"
    );

    const panelWrapper = document.createElement("div");
    panelWrapper.classList.add(
      type === "player" ? "playerFeedbackPanelWrapper" : "screenBlockerWrapper"
    );

    const panelText = document.createElement("div");
    panelText.classList.add(
      type === "player" ? "playerFeedbackText" : "screenBlockerText"
    );
    panelText.textContent = primaryText;

    const panelButton = this.generateCloseButton();

    document.body.appendChild(panel);
    panel.appendChild(panelWrapper);
    panelWrapper.appendChild(panelText);

    if (secondaryText) {
      const panelSecondaryText = document.createElement("div");
      panelSecondaryText.classList.add("screenBlockerText");
      panelSecondaryText.textContent = secondaryText;
      panelWrapper.appendChild(panelSecondaryText);
    }

    panelWrapper.appendChild(panelButton);
    return panel;
  }

  generateScreenBlocker(text, shipHit = null) {
    const screenBlocker = document.createElement("div");
    screenBlocker.classList.add("screenBlocker");

    const screenBlockerWrapper = document.createElement("div");
    screenBlockerWrapper.classList.add("screenBlockerWrapper");

    const screenBlockerText = document.createElement("div");
    screenBlockerText.classList.add("screenBlockerText");
    screenBlockerText.textContent = text;

    if (shipHit) {
      const shipHit = document.createElement("div");
      shipHit.classList.add("hitText");
      if ((shipHit = true)) {
        shipHit.textContent = "Hit!!!";
      } else {
        shipHit.textContent = "You Missed!";
      }
      screenBlockerWrapper.appendChild(shipHit);
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
      9;
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
            if (
              this.players[playerId - 1].gameBoard.receiveAttack(
                [row, col],
                this.OnGameEnd
              )
            ) {
              tileToMark.classList.add("shipHit");
              shipHit = true;
            } else {
              tileToMark.classList.add("miss");
            }

            this.handleStateChange(shipHit);
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

  handleStateChange(shipHit = null) {
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
        this.generateScreenBlocker("Player 2's Turn", shipHit);

        this.currentPlayer = this.players[1].playerId;

        this.gameState.advanceState();
        this.updateStateTextContent();

        this.generateBoardBlocker(this.players[0]);
        this.removeBoardBlocker(this.players[1]);

        break;
      case 3:
        this.generateScreenBlocker("Player 1's Turn", shipHit);

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
    //Returns true if hit, or if the hit ends the game, call onGameEnd to begin end-game
    const ship = this.board[coordinate[0]][coordinate[1]].getShip();
    if (ship) {
      ship.addHit();
      if (ship.isSunk()) {
        if (this.removeShipFromBoard(ship, onGameEnd));
      }
      return true;
    } else {
      return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpQztBQUNNO0FBQ0E7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSw4QkFBOEI7QUFDdEM7QUFDQSx5QkFBeUIscURBQVM7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQU07O0FBRTdCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCLGVBQWUsU0FBUyxlQUFlLFNBQVM7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCLGVBQWUsU0FBUyxlQUFlLFNBQVM7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7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InNvdXJjZXMiOlsid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9Eb21NYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL0dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9UaWxlLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG4ubWFpbldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLnBsYXllckJvYXJkV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgcGFkZGluZy1yaWdodDogMjAlO1xufVxuLnN0YXRlV3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4uUGxheWVyUGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXJUZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uYm9hcmRXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuLmNvbCB7XG4gIGdhcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5hdldyYXBwZXIge1xuICB3aWR0aDogMjAlO1xuICBnYXA6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4uc2hpcFdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmF2U2hpcFNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2YWpvd2hpdGU7XG59XG4uc2NyZWVuQmxvY2tlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGl0VGV4dCB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG4uc2NyZWVuQmxvY2tlcldyYXBwZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY3JlZW5CbG9ja2VyQnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aWxlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuLnRpbGUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4udGlsZS5ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRpbGUuaGlkZGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4udGlsZS5lbmVteUhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4udGlsZS5zaGlwSGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuLnRpbGUubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODMsIDI1NSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuLm1haW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ucGxheWVyQm9hcmRXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxufVxcbi5zdGF0ZVdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5QbGF5ZXJQYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYXllclRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLmJvYXJkV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uY29sIHtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5uYXZXcmFwcGVyIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBnYXA6IDI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcbi5zaGlwV3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5uYXZTaGlwU2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2YWpvd2hpdGU7XFxufVxcbi5zY3JlZW5CbG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGl0VGV4dCB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDU2cHg7XFxufVxcbi5zY3JlZW5CbG9ja2VyV3JhcHBlciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2NyZWVuQmxvY2tlckJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGlsZSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuLnRpbGUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4udGlsZS5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnRpbGUuaGlkZGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4udGlsZS5lbmVteUhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4udGlsZS5zaGlwSGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuLnRpbGUubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTgzLCAyNTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlLmpzXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZC5qc1wiO1xuXG5jbGFzcyBEb21NYW5pcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUaWxlcyA9IFtdO1xuICAgIHRoaXMubGFzdEhvdmVyZWRUaWxlID0gbnVsbDtcblxuICAgIHRoaXMuc2hpcFR5cGVzID0gW1xuICAgICAgeyBuYW1lOiBcIkNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0sXG4gICAgICB7IG5hbWU6IFwiQmF0dGxlc2hpcFwiLCBsZW5ndGg6IDQgfSxcbiAgICAgIHsgbmFtZTogXCJDcnVpc2VyXCIsIGxlbmd0aDogMyB9LFxuICAgICAgeyBuYW1lOiBcIlN1Ym1hcmluZVwiLCBsZW5ndGg6IDMgfSxcbiAgICAgIHsgbmFtZTogXCJEZXN0cm95ZXJcIiwgbGVuZ3RoOiAyIH0sXG4gICAgXTtcbiAgICB0aGlzLmdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucm90YXRpb24gPSBcImhvcml6b250YWxcIjtcblxuICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFBsYXllciA9IG51bGw7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gICAgTmF2aWdhdGlvbiBDb21wb25lbnQgZ2VuZXJhdG9yc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25FbnRyeSgpIHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZ2VuZXJhdGVNYWluV3JhcHBlcigpO1xuICAgIGNvbnN0IG5hdldyYXBwZXIgPSB0aGlzLmdlbmVyYXRlTmF2V3JhcHBlcihtYWluV3JhcHBlcik7XG4gICAgY29uc3QgcGxheWVyQm9hcmRXcmFwcGVyID0gdGhpcy5nZW5lcmF0ZVBsYXllckJvYXJkV3JhcHBlcihtYWluV3JhcHBlcik7XG5cbiAgICB0aGlzLmdlbmVyYXRlU3RhdGVXcmFwcGVyKHBsYXllckJvYXJkV3JhcHBlcik7XG5cbiAgICB0aGlzLnBsYXllcnMucHVzaCh0aGlzLmdlbmVyYXRlUGxheWVyKFwiSHVtYW5cIiwgMSwgcGxheWVyQm9hcmRXcmFwcGVyKSk7XG4gICAgdGhpcy5nZW5lcmF0ZVNoaXBTZXR1cFBhbmVsKG5hdldyYXBwZXIsIHRoaXMucGxheWVyc1swXSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5nZW5lcmF0ZVBsYXllcihcIkh1bWFuXCIsIDIsIHBsYXllckJvYXJkV3JhcHBlcikpO1xuXG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gMTtcblxuICAgIC8vYWRkIGxpc3RlbmVyIGZvciByb3RhdGlvblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KSk7XG4gICAgdGhpcy5nZW5lcmF0ZVNjcmVlbkJsb2NrZXIoXCJQbGF5ZXIgMSdzIFNldHVwXCIpO1xuICAgIHRoaXMuZ2VuZXJhdGVCb2FyZEJsb2NrZXIodGhpcy5wbGF5ZXJzWzFdKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWFpbldyYXBwZXIoKSB7XG4gICAgY29uc3QgbWFpblByb2pQYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qUGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluV3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Qcm9qUGFuZWxXcmFwcGVyKTtcbiAgICByZXR1cm4gbWFpblByb2pQYW5lbFdyYXBwZXI7XG4gIH1cblxuICBnZW5lcmF0ZVBsYXllckJvYXJkV3JhcHBlcihtYWluV3JhcHBlcikge1xuICAgIGNvbnN0IHBsYXllckJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJCb2FyZFdyYXBwZXJcIik7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRXcmFwcGVyKTtcbiAgICByZXR1cm4gcGxheWVyQm9hcmRXcmFwcGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVOYXZXcmFwcGVyKG1haW5XcmFwcGVyKSB7XG4gICAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmF2V3JhcHBlclwiKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChuYXZXcmFwcGVyKTtcbiAgICByZXR1cm4gbmF2V3JhcHBlcjtcbiAgfVxuXG4gIGdlbmVyYXRlU2hpcFNldHVwUGFuZWwobmF2V3JhcHBlcikge1xuICAgIHRoaXMuc2hpcFR5cGVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHRoaXMuYWRkU2hpcFRvTmF2UGFuZWwoc2hpcCwgbmF2V3JhcHBlcik7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZUZlZWRiYWNrUGFuZWwodHlwZSwgcHJpbWFyeVRleHQsIHNlY29uZGFyeVRleHQgPSBudWxsKSB7XG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICB0eXBlID09PSBcInBsYXllclwiID8gXCJwbGF5ZXJGZWVkYmFja1BhbmVsXCIgOiBcInNjcmVlbkJsb2NrZXJcIlxuICAgICk7XG5cbiAgICBjb25zdCBwYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhbmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFxuICAgICAgdHlwZSA9PT0gXCJwbGF5ZXJcIiA/IFwicGxheWVyRmVlZGJhY2tQYW5lbFdyYXBwZXJcIiA6IFwic2NyZWVuQmxvY2tlcldyYXBwZXJcIlxuICAgICk7XG5cbiAgICBjb25zdCBwYW5lbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhbmVsVGV4dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgdHlwZSA9PT0gXCJwbGF5ZXJcIiA/IFwicGxheWVyRmVlZGJhY2tUZXh0XCIgOiBcInNjcmVlbkJsb2NrZXJUZXh0XCJcbiAgICApO1xuICAgIHBhbmVsVGV4dC50ZXh0Q29udGVudCA9IHByaW1hcnlUZXh0O1xuXG4gICAgY29uc3QgcGFuZWxCdXR0b24gPSB0aGlzLmdlbmVyYXRlQ2xvc2VCdXR0b24oKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWwpO1xuICAgIHBhbmVsLmFwcGVuZENoaWxkKHBhbmVsV3JhcHBlcik7XG4gICAgcGFuZWxXcmFwcGVyLmFwcGVuZENoaWxkKHBhbmVsVGV4dCk7XG5cbiAgICBpZiAoc2Vjb25kYXJ5VGV4dCkge1xuICAgICAgY29uc3QgcGFuZWxTZWNvbmRhcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBhbmVsU2Vjb25kYXJ5VGV4dC5jbGFzc0xpc3QuYWRkKFwic2NyZWVuQmxvY2tlclRleHRcIik7XG4gICAgICBwYW5lbFNlY29uZGFyeVRleHQudGV4dENvbnRlbnQgPSBzZWNvbmRhcnlUZXh0O1xuICAgICAgcGFuZWxXcmFwcGVyLmFwcGVuZENoaWxkKHBhbmVsU2Vjb25kYXJ5VGV4dCk7XG4gICAgfVxuXG4gICAgcGFuZWxXcmFwcGVyLmFwcGVuZENoaWxkKHBhbmVsQnV0dG9uKTtcbiAgICByZXR1cm4gcGFuZWw7XG4gIH1cblxuICBnZW5lcmF0ZVNjcmVlbkJsb2NrZXIodGV4dCwgc2hpcEhpdCA9IG51bGwpIHtcbiAgICBjb25zdCBzY3JlZW5CbG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5CbG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5CbG9ja2VyXCIpO1xuXG4gICAgY29uc3Qgc2NyZWVuQmxvY2tlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcmVlbkJsb2NrZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5CbG9ja2VyV3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHNjcmVlbkJsb2NrZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5CbG9ja2VyVGV4dC5jbGFzc0xpc3QuYWRkKFwic2NyZWVuQmxvY2tlclRleHRcIik7XG4gICAgc2NyZWVuQmxvY2tlclRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgaWYgKHNoaXBIaXQpIHtcbiAgICAgIGNvbnN0IHNoaXBIaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcEhpdC5jbGFzc0xpc3QuYWRkKFwiaGl0VGV4dFwiKTtcbiAgICAgIGlmICgoc2hpcEhpdCA9IHRydWUpKSB7XG4gICAgICAgIHNoaXBIaXQudGV4dENvbnRlbnQgPSBcIkhpdCEhIVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcEhpdC50ZXh0Q29udGVudCA9IFwiWW91IE1pc3NlZCFcIjtcbiAgICAgIH1cbiAgICAgIHNjcmVlbkJsb2NrZXJXcmFwcGVyLmFwcGVuZENoaWxkKHNoaXBIaXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcmVlbkJsb2NrZXJTZWNvbmRhcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5CbG9ja2VyU2Vjb25kYXJ5VGV4dC5jbGFzc0xpc3QuYWRkKFwic2NyZWVuQmxvY2tlclRleHRcIik7XG4gICAgc2NyZWVuQmxvY2tlclNlY29uZGFyeVRleHQudGV4dENvbnRlbnQgPSBcIlJlYWR5IG5leHQgcGxheWVyXCI7XG5cbiAgICBjb25zdCBzY3JlZW5CbG9ja2VyQnV0dG9uID0gdGhpcy5nZW5lcmF0ZUNsb3NlQnV0dG9uKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbkJsb2NrZXIpO1xuICAgIHNjcmVlbkJsb2NrZXIuYXBwZW5kQ2hpbGQoc2NyZWVuQmxvY2tlcldyYXBwZXIpO1xuICAgIHNjcmVlbkJsb2NrZXJXcmFwcGVyLmFwcGVuZENoaWxkKHNjcmVlbkJsb2NrZXJUZXh0KTtcbiAgICBzY3JlZW5CbG9ja2VyV3JhcHBlci5hcHBlbmRDaGlsZChzY3JlZW5CbG9ja2VyU2Vjb25kYXJ5VGV4dCk7XG4gICAgc2NyZWVuQmxvY2tlcldyYXBwZXIuYXBwZW5kQ2hpbGQoc2NyZWVuQmxvY2tlckJ1dHRvbik7XG4gICAgcmV0dXJuIHNjcmVlbkJsb2NrZXI7XG4gIH1cblxuICBhZGRTaGlwVG9OYXZQYW5lbChzaGlwLCBuYXZXcmFwcGVyKSB7XG4gICAgY29uc3Qgc2hpcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNoaXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzaGlwVGl0bGUuY2xhc3NMaXN0LmFkZChcInNoaXBUaXRsZVwiKTtcbiAgICBzaGlwVGl0bGUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XG4gICAgc2hpcFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNoaXBXcmFwcGVyXCIpO1xuICAgIHNoaXBXcmFwcGVyLmRhdGFzZXQuc2hpcFR5cGUgPSBzaGlwLm5hbWU7XG4gICAgc2hpcFdyYXBwZXIuZGF0YXNldC5zaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG5cbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZFNoaXAgPSBzaGlwO1xuICAgICAgY29uc3QgYWxsTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwV3JhcHBlclwiKTtcblxuICAgICAgLy9EZXNlbGVjdCBvdGhlciBzaGlwIG5hdnNcbiAgICAgIGFsbE5hdi5mb3JFYWNoKChuYXYpID0+IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2U2hpcFNlbGVjdGVkXCIpKTtcbiAgICAgIHNoaXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZTaGlwU2VsZWN0ZWRcIik7XG4gICAgfSk7XG5cbiAgICBzaGlwV3JhcHBlci5hcHBlbmRDaGlsZChzaGlwVGl0bGUpO1xuICAgIG5hdldyYXBwZXIuYXBwZW5kQ2hpbGQoc2hpcFdyYXBwZXIpO1xuICB9XG5cbiAgcmVtb3ZlU2hpcEZyb21OYXZQYW5lbCgpIHtcbiAgICAvL1JlbW92ZSBhbGwgc2hpcHMgdGhhdCBoYXZlIC5uYXZTaGlwU2VsZWN0ZWQgc2luY2Ugd2Ugb25seSBldmVyIHdhbnQgb25lLlxuICAgIGNvbnN0IE5hdlRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZTaGlwU2VsZWN0ZWRcIik7XG4gICAgTmF2VG9SZW1vdmUuZm9yRWFjaCgobmF2KSA9PiBuYXYucmVtb3ZlKFwibmF2U2hpcFNlbGVjdGVkXCIpKTtcbiAgICB0aGlzLmhhbmRsZVNoaXBEZXNlbGVjdCgpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0ZVdyYXBwZXIobWFpbldyYXBwZXIpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50U3RhdGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZVdyYXBwZXJcIik7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoY3VycmVudFN0YXRlV3JhcHBlcik7XG4gICAgdGhpcy51cGRhdGVTdGF0ZVRleHRDb250ZW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZVRleHRDb250ZW50KCkge1xuICAgIGNvbnN0IHN0YXRlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGVXcmFwcGVyXCIpO1xuICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUuc3RhdGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgc3RhdGVXcmFwcGVyLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgT25lIFNldHVwXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBzdGF0ZVdyYXBwZXIudGV4dENvbnRlbnQgPSBcIlBsYXllciBUd28gU2V0dXBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHN0YXRlV3JhcHBlci50ZXh0Q29udGVudCA9IFwiUGxheWVyIE9uZSdzIHR1cm5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN0YXRlV3JhcHBlci50ZXh0Q29udGVudCA9IFwiUGxheWVyIFR3bydzIHR1cm5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVQbGF5ZXIodHlwZSwgcGxheWVySWQsIG1haW5XcmFwcGVyKSB7XG4gICAgY29uc3QgcGxheWVyUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllclRleHRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyQm9hcmRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih0eXBlLCBwbGF5ZXJJZCk7XG5cbiAgICBwbGF5ZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwiUGxheWVyUGFuZWxcIik7XG5cbiAgICBwbGF5ZXJUZXh0UGFuZWwuY2xhc3NMaXN0LmFkZChcInBsYXllclwiICsgcGxheWVySWQsIFwicGxheWVyVGV4dFwiKTtcbiAgICBwbGF5ZXJUZXh0UGFuZWwudGV4dENvbnRlbnQgPSBcIlBsYXllciBcIiArIHBsYXllcklkO1xuXG4gICAgcGxheWVyQm9hcmRQYW5lbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyXCIgKyBwbGF5ZXJJZCwgXCJwbGF5ZXJCb2FyZFwiKTtcblxuICAgIGNvbnN0IGJvYXJkVGlsZVdyYXBwZXIgPSB0aGlzLmdlbmVyYXRlQm9hcmQocGxheWVyKTtcblxuICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKHBsYXllclBhbmVsKTtcbiAgICBwbGF5ZXJQYW5lbC5hcHBlbmRDaGlsZChwbGF5ZXJUZXh0UGFuZWwpO1xuICAgIHBsYXllclBhbmVsLmFwcGVuZENoaWxkKHBsYXllckJvYXJkUGFuZWwpO1xuICAgIHBsYXllckJvYXJkUGFuZWwuYXBwZW5kQ2hpbGQoYm9hcmRUaWxlV3JhcHBlcik7XG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuXG4gIGdlbmVyYXRlQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkV3JhcHBlclwiKTtcbiAgICBib2FyZFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckFsbFRpbGVIb3ZlcigpO1xuICAgIH0pO1xuXG4gICAgcGxheWVyLmdhbWVCb2FyZC5ib2FyZC5mb3JFYWNoKChzZWN0aW9uLCBjb2xJbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcblxuICAgICAgc2VjdGlvbi5mb3JFYWNoKCh0aWxlLCByb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYXllclwiICsgcGxheWVyLnBsYXllcklkLCBcInRpbGVcIik7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LmNvbCA9IGNvbEluZGV4O1xuICAgICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSByb3dJbmRleDtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQucGxheWVySWQgPSBwbGF5ZXIucGxheWVySWQ7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVUaWxlQ2xpY2soZXZlbnQsIHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVRpbGVIb3ZlcihldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIGFkZGl0aW9uYWwgYXR0cmlidXRlcyBvciBjb250ZW50IHRvIHRoZSBzcXVhcmUgaWYgbmVlZGVkXG4gICAgICBib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBib2FyZFdyYXBwZXI7XG4gIH1cbiAgZ2VuZXJhdGVCb2FyZEJsb2NrZXIocGxheWVyKSB7XG4gICAgLy8gSGlkZSB0aGUgcGxheWVyIHdobyBpcyBub3QgaW4gZm9jdXMgYnkgYWRkaW5nIFwiaGlkZGVuXCIgY2xhc3MgdG8gdGhlaXIgYm9hcmQgdGlsZXNcbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkLmZvckVhY2goKHNlY3Rpb24sIGNvbEluZGV4KSA9PiB7XG4gICAgICBzZWN0aW9uLmZvckVhY2goKHRpbGUsIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnRpbGVbZGF0YS1wbGF5ZXItaWQ9XCIke3BsYXllci5wbGF5ZXJJZH1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdYFxuICAgICAgICApO1xuICAgICAgICBpZiAodGlsZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aWxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUJvYXJkQmxvY2tlcihwbGF5ZXIpIHtcbiAgICAvLyBVbmhpZGUgdGhlIHBsYXllciB3aG8gaXMgbm93IGluIGZvY3VzIGJ5IHJlbW92aW5nIFwiaGlkZGVuXCIgY2xhc3MgZnJvbSB0aGVpciBib2FyZCB0aWxlc1xuICAgIHBsYXllci5nYW1lQm9hcmQuYm9hcmQuZm9yRWFjaCgoc2VjdGlvbiwgY29sSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb24uZm9yRWFjaCgodGlsZSwgcm93SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAudGlsZVtkYXRhLXBsYXllci1pZD1cIiR7cGxheWVyLnBsYXllcklkfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aWxlRWxlbWVudCkge1xuICAgICAgICAgIHRpbGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgOTtcbiAgICB9KTtcbiAgfVxuXG4gIGdlbmVyYXRlUGxheWVyRmVlZGJhY2tQYW5lbCh0ZXh0KSB7XG4gICAgLy9HaXZlcyB0aGUgcGxheWVyIGZlZWRiYWNrIG9uIHdoZXRoZXIgdGhleSBoaXQgb3IgbWlzcy5cbiAgICBjb25zdCBwbGF5ZXJGZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyRmVlZGJhY2suY2xhc3NMaXN0LmFkZChcInBsYXllckZlZWRiYWNrUGFuZWxcIik7XG5cbiAgICBjb25zdCBwbGF5ZXJGZWVkYmFja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckZlZWRiYWNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicGxheWVyRmVlZGJhY2tQYW5lbFdyYXBwZXJcIik7XG5cbiAgICBjb25zdCBwbGF5ZXJGZWVkYmFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckZlZWRiYWNrVGV4dC5jbGFzc0xpc3QuYWRkKFwicGxheWVyRmVlZGJhY2tUZXh0XCIpO1xuICAgIHBsYXllckZlZWRiYWNrVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICBjb25zdCBwbGF5ZXJGZWVkYmFja0J1dHRvbiA9IHRoaXMuZ2VuZXJhdGVDbG9zZUJ1dHRvbigpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXJGZWVkYmFjayk7XG4gICAgcGxheWVyRmVlZGJhY2suYXBwZW5kQ2hpbGQocGxheWVyRmVlZGJhY2tXcmFwcGVyKTtcbiAgICBwbGF5ZXJGZWVkYmFja1dyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyRmVlZGJhY2tUZXh0KTtcbiAgICBwbGF5ZXJGZWVkYmFja1dyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyRmVlZGJhY2tCdXR0b24pO1xuICAgIHJldHVybiBwbGF5ZXJGZWVkYmFjaztcbiAgfVxuXG4gIGdlbmVyYXRlQ2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5CbG9ja2VyQnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vLS1IYW5kbGVyc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXApIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiclwiIHx8IGV2ZW50LmtleSA9PT0gXCJSXCIpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VSb3RhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5sYXN0SG92ZXJlZFRpbGUpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVRpbGVIb3Zlcih7IHRhcmdldDogdGhpcy5sYXN0SG92ZXJlZFRpbGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VSb3RhdGlvbigpIHtcbiAgICBpZiAodGhpcy5yb3RhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHRoaXMucm90YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUaWxlQ2xpY2soZXZlbnQsIHBsYXllcikge1xuICAgIGNvbnN0IHRpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LmNvbCk7XG5cbiAgICBjb25zdCBwbGF5ZXJJZCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5wbGF5ZXJJZCk7XG5cbiAgICAvL0hhbmRsZSBjbGlja2luZyBvbiB0aGUgdGlsZSBpbiBkaWZmZXJlbnQgc3RhZ2VzIG9mIHRoZSBnYW1lLlxuXG4gICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmIChwbGF5ZXJJZCAhPT0gdGhpcy5jdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHRpbGUgZG9lcyBub3QgYmVsb25nIHRvIHRoZSBjdXJyZW50IHBsYXllciwgaWdub3JlIHRoZSBjbGlja1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwVGlsZXMgPSB0aGlzLmdldFNoaXBQbGFjZW1lbnQocm93LCBjb2wpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXAgJiYgc2hpcFRpbGVzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYXllci5nYW1lQm9hcmQuYWRkU2hpcFRvQm9hcmQoXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLm5hbWUsXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgc2hpcFRpbGVzLFxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXBGcm9tTmF2UGFuZWwoKTtcblxuICAgICAgICAgICAgc2hpcFRpbGVzLmZvckVhY2goKFtyLCBjXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aWxlVG9NYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLnRpbGVbZGF0YS1yb3c9XCIke3J9XCJdW2RhdGEtY29sPVwiJHtjfVwiXVtkYXRhLXBsYXllci1pZD1cIiR7cGxheWVySWR9XCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAodGlsZVRvTWFyaykge1xuICAgICAgICAgICAgICAgIHRpbGVUb01hcmsuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9TaG91bGQgd2UgbW92ZSBvbiBmcm9tIHNldHVwP1xuICAgICAgICAgICAgaWYgKHRoaXMuU2hvdWxkU3RhdGVBZHZhbmNlKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICBsZXQgc2hpcEhpdCA9IGZhbHNlO1xuICAgICAgICBpZiAocGxheWVySWQgIT09IHRoaXMuY3VycmVudFBsYXllcikge1xuICAgICAgICAgIGNvbnN0IHRpbGVUb01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC50aWxlW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdW2RhdGEtcGxheWVyLWlkPVwiJHtwbGF5ZXJJZH1cIl1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICh0aWxlVG9NYXJrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZCAtIDFdLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sXG4gICAgICAgICAgICAgICAgdGhpcy5PbkdhbWVFbmRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRpbGVUb01hcmsuY2xhc3NMaXN0LmFkZChcInNoaXBIaXRcIik7XG4gICAgICAgICAgICAgIHNoaXBIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGlsZVRvTWFyay5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZShzaGlwSGl0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaGFuZGxlVGlsZUhvdmVyKGV2ZW50KSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2VsZWN0ZWRTaGlwO1xuICAgIGNvbnN0IHRpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LmNvbCk7XG4gICAgY29uc3QgcGxheWVySWQgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucGxheWVySWQpO1xuXG4gICAgaWYgKHNoaXAgJiYgcGxheWVySWQgPT09IHRoaXMuY3VycmVudFBsYXllcikge1xuICAgICAgdGhpcy5sYXN0SG92ZXJlZFRpbGUgPSB0aWxlO1xuICAgICAgdGhpcy5jbGVhckFsbFRpbGVIb3ZlcigpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgd2hpY2ggdGlsZXMgc2hvdWxkIGJlIGhpZ2hsaWdodGVkXG4gICAgICBjb25zdCBzaGlwVGlsZXMgPSB0aGlzLmdldFNoaXBQbGFjZW1lbnQocm93LCBjb2wpO1xuXG4gICAgICBpZiAoc2hpcFRpbGVzKSB7XG4gICAgICAgIHNoaXBUaWxlcy5mb3JFYWNoKChbciwgY10pID0+IHtcbiAgICAgICAgICBjb25zdCBob3ZlclRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC50aWxlW2RhdGEtcm93PVwiJHtyfVwiXVtkYXRhLWNvbD1cIiR7Y31cIl1bZGF0YS1wbGF5ZXItaWQ9XCIke3BsYXllcklkfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChob3ZlclRpbGUpIHtcbiAgICAgICAgICAgIGhvdmVyVGlsZS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NoZWNrIGlmIHdlJ3JlIGNsaWNraW5nIG9uIGFuIGVuZW15IGJvYXJkIHRvIGZpcmUgZHVyaW5nIGdhbWVwbGF5IGxvb3BcbiAgICBpZiAoXG4gICAgICAhc2hpcCAmJlxuICAgICAgcGxheWVySWQgIT09IHRoaXMuY3VycmVudFBsYXllciAmJlxuICAgICAgWzIsIDNdLmluY2x1ZGVzKHRoaXMuZ2FtZVN0YXRlLmdldFN0YXRlKCkpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RIb3ZlcmVkVGlsZSA9IHRpbGU7XG4gICAgICB0aGlzLmNsZWFyQWxsVGlsZUhvdmVyKCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB3aGljaCB0aWxlcyBzaG91bGQgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgIGNvbnN0IGhvdmVyVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGlsZVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXVtkYXRhLXBsYXllci1pZD1cIiR7cGxheWVySWR9XCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChob3ZlclRpbGUpIHtcbiAgICAgICAgaG92ZXJUaWxlLmNsYXNzTGlzdC5hZGQoXCJlbmVteUhvdmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNoaXBQbGFjZW1lbnQocm93LCBjb2wpIHtcbiAgICAvL2dpdmVuIGEgcm93L2NvbCwgcmV0dXJuIHRoZSB0aWxlcyB3ZSdkIG5lZWQgdG8gcGxhY2UgdGhlIHNoaXBcbiAgICBjb25zdCBzaGlwID0gdGhpcy5zZWxlY3RlZFNoaXA7XG4gICAgaWYgKCFzaGlwKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHNoaXBUaWxlcyA9IFtdO1xuICAgIGlmICh0aGlzLnJvdGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcFRpbGVzLnB1c2goW3JvdywgY29sICsgaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcFRpbGVzLnB1c2goW3JvdyArIGksIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwVGlsZXM7XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZShzaGlwSGl0ID0gbnVsbCkge1xuICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUuZ2V0U3RhdGUoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLmdlbmVyYXRlU2NyZWVuQmxvY2tlcihcIlBsYXllciAyJ3MgU2V0dXBcIik7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCb2FyZEJsb2NrZXIodGhpcy5wbGF5ZXJzWzBdKTtcbiAgICAgICAgdGhpcy5yZW1vdmVCb2FyZEJsb2NrZXIodGhpcy5wbGF5ZXJzWzFdKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMV0ucGxheWVySWQ7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZVNoaXBTZXR1cFBhbmVsKFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2V3JhcHBlclwiKSxcbiAgICAgICAgICB0aGlzLnBsYXllcnNbMV1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5hZHZhbmNlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZVRleHRDb250ZW50KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmdlbmVyYXRlU2NyZWVuQmxvY2tlcihcIlBsYXllciAxJ3MgVHVyblwiKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMV0pO1xuICAgICAgICB0aGlzLnJlbW92ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMF0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1swXS5wbGF5ZXJJZDtcblxuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5hZHZhbmNlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZVRleHRDb250ZW50KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTY3JlZW5CbG9ja2VyKFwiUGxheWVyIDIncyBUdXJuXCIsIHNoaXBIaXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1sxXS5wbGF5ZXJJZDtcblxuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5hZHZhbmNlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZVRleHRDb250ZW50KCk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMF0pO1xuICAgICAgICB0aGlzLnJlbW92ZUJvYXJkQmxvY2tlcih0aGlzLnBsYXllcnNbMV0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmdlbmVyYXRlU2NyZWVuQmxvY2tlcihcIlBsYXllciAxJ3MgVHVyblwiLCBzaGlwSGl0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF0ucGxheWVySWQ7XG5cbiAgICAgICAgdGhpcy5nYW1lU3RhdGUuYWR2YW5jZVN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZVRleHRDb250ZW50KCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCb2FyZEJsb2NrZXIodGhpcy5wbGF5ZXJzWzFdKTtcbiAgICAgICAgdGhpcy5yZW1vdmVCb2FyZEJsb2NrZXIodGhpcy5wbGF5ZXJzWzBdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2hpcERlc2VsZWN0KCkge1xuICAgIHRoaXMuY2xlYXJBbGxUaWxlSG92ZXIoKTtcbiAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICBjbGVhckFsbFRpbGVIb3ZlcigpIHtcbiAgICAvLyBDbGVhciBwcmV2aW91cyBob3ZlciBzdGF0ZXNcbiAgICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGlsZVwiKTtcbiAgICBhbGxUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKSk7XG4gICAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4gdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZW5lbXlIb3ZlclwiKSk7XG4gIH1cbiAgLy9cbiAgLy9cbiAgLy9cblxuICBTaG91bGRTdGF0ZUFkdmFuY2UoKSB7XG4gICAgLy9SZXR1cm5zIHRydWUgb3IgZmFsc2UgaWYgd2Ugc2hvdWxkIGFkdmFuY2UgdGhlIHN0YXRlXG4gICAgY29uc3QgYWxsTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwV3JhcHBlclwiKTtcbiAgICBzd2l0Y2ggKHRoaXMuZ2FtZVN0YXRlLnN0YXRlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmIChhbGxOYXYubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL0Rlc2VsZWN0IG90aGVyIHNoaXAgbmF2c1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAocGxheWVyc1swXS5oYXNTaG90ID09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmIChwbGF5ZXJzWzFdLmhhc1Nob3QgPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgT25HYW1lRW5kKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVTY3JlZW5CbG9ja2VyKFwiR2FtZSBFbmQgXCIgKyB0aGlzLmN1cnJlbnRQbGF5ZXIgKyBcIiBXSU5TIVwiKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGxheWVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbU1hbmlwO1xuIiwiaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZS5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xuXG5jbGFzcyBnYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5zZXR1cE5ld0JvYXJkKDEwLCAxMCk7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG4gIHNldHVwTmV3Qm9hcmQobGVuZ3RoLCBoZWlnaHQpIHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IG5ldyBUaWxlKGksIGopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgYWRkU2hpcFRvQm9hcmQodHlwZSwgbGVuZ3RoLCBjb29yZGluYXRlQXJyKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHR5cGUsIGxlbmd0aCwgY29vcmRpbmF0ZUFycik7XG5cbiAgICAvLyBWZXJpZnkgdGhlIHBsYWNlbWVudCBoYXMgbm8gZXJyb3JzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gY29vcmRpbmF0ZUFycltpXTtcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICBjb25zdCBjb2wgPSBjb29yZGluYXRlWzFdO1xuXG4gICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gMTAgfHwgY29sIDwgMCB8fCBjb2wgPj0gMTApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3I6IENvb3JkaW5hdGUgb3V0IG9mIGJvYXJkIGJvdW5kc1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLmdldFNoaXAoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJFcnJvcjogQW5vdGhlciBzaGlwIGlzIGFscmVhZHkgcGxhY2VkIGF0IHRoaXMgY29vcmRpbmF0ZVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29vcmRpbmF0ZUFyci5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgY29uc3QgY29sID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnNldFNoaXAoc2hpcCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gIHJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcCwgb25HYW1lRW5kKSB7XG4gICAgLy9yZW1vdmVzIGEgc2hpcCBmcm9tIHRoZSBib2FyZCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBubyBzaGlwcyBsZWZ0XG4gICAgY29uc3QgY29vcmRpbmF0ZUFyciA9IHNoaXAuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBjb29yZGluYXRlQXJyLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0uc2V0U2hpcChudWxsKTtcbiAgICB9KTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMuYWxsU2hpcHNTdW5rKG9uR2FtZUVuZCk7XG4gIH1cbiAgYWxsU2hpcHNTdW5rKG9uR2FtZUVuZCkge1xuICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBzaGlwcyBzdW5rIG9uIGdhbWVib2FyZDogXCIsIHRoaXMuZ2FtZUJvYXJkKTtcbiAgICAgIG9uR2FtZUVuZCgpO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUsIG9uR2FtZUVuZCkge1xuICAgIC8vUmV0dXJucyB0cnVlIGlmIGhpdCwgb3IgaWYgdGhlIGhpdCBlbmRzIHRoZSBnYW1lLCBjYWxsIG9uR2FtZUVuZCB0byBiZWdpbiBlbmQtZ2FtZVxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLmdldFNoaXAoKTtcbiAgICBpZiAoc2hpcCkge1xuICAgICAgc2hpcC5hZGRIaXQoKTtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcCwgb25HYW1lRW5kKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCJjbGFzcyBHYW1lU3RhdGUge1xuICAvL1xuICAvLyBHYW1lIHN0YXRlIG1hbmFnZXJcbiAgLy9cbiAgLy9wb3NzaWJsZSBzdGF0ZXM6XG4gIC8vXG4gIC8vMCAtIHBsYXllciBvbmUgc2V0dXBcbiAgLy8xIC0gcGxheWVyIHR3byBzZXR1cFxuICAvLzIgLSBwbGF5ZXIgb25lcyB0dXJuXG4gIC8vMyAtIHBsYXllciB0d29zIHR1cm5cbiAgLy9cbiAgY29uc3RydWN0b3Ioc3RhdGUsIGN1cnJlbnRQbGF5ZXIpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgPz8gMDtcbiAgfVxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuICBhZHZhbmNlU3RhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZSArPSAxO1xuICAgIGlmICh0aGlzLnN0YXRlID4gMykgdGhpcy5zdGF0ZSA9IDI7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlO1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmQuanNcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGxheWVySWQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZDtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBnYW1lQm9hcmQoKTtcbiAgICB0aGlzLmhhc1Nob3QgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsZW5ndGgsIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBzdW5rXG4gICAgaWYgKHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYWRkSGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG4gIGdldEhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgfVxuICBnZXRSb3RhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbjtcbiAgfVxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlcztcbiAgfVxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY2xhc3MgVGlsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuU2hpcCA9IG51bGw7XG4gIH1cbiAgc2V0U2hpcChzaGlwKSB7XG4gICAgdGhpcy5TaGlwID0gc2hpcDtcbiAgfVxuICBnZXRTaGlwKCkge1xuICAgIHJldHVybiB0aGlzLlNoaXA7XG4gIH1cbiAgc2V0SGl0KGJvb2wpIHtcbiAgICB0aGlzLmlzSGl0ID0gYm9vbDtcbiAgfVxuICBnZXRIaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNIaXQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRpbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRG9tTWFuaXAgZnJvbSBcIi4vRG9tTWFuaXB1bGF0b3IuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGRvbU1hbmlwID0gbmV3IERvbU1hbmlwKCk7XG5kb21NYW5pcC5vbkVudHJ5KCk7XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9