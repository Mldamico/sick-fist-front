webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./nprogress.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/nprogress.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./nprogress.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/nprogress.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./nprogress.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/nprogress.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/nprogress.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./components/styles/nprogress.css ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Make clicks pass-through */\r\n#nprogress {\r\n  pointer-events: none;\r\n}\r\n\r\n#nprogress .bar {\r\n  background: red;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 100%;\r\n  height: 5px;\r\n}\r\n\r\n/* Fancy blur effect */\r\n#nprogress .peg {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 100px;\r\n  height: 100%;\r\n  box-shadow: 0 0 10px red, 0 0 5px red;\r\n  opacity: 1.0;\r\n\r\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\r\n          -moz-transform: rotate(3deg) translate(0px, -4px);\r\n       transform: rotate(3deg) translate(0px, -4px);\r\n}\r\n\r\n/* Remove these to get rid of the spinner */\r\n#nprogress .spinner {\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 15px;\r\n  right: 15px;\r\n}\r\n\r\n#nprogress .spinner-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  -moz-box-sizing: border-box;\r\n       box-sizing: border-box;\r\n\r\n  border: solid 2px transparent;\r\n  border-top-color: red;\r\n  border-left-color: red;\r\n  border-radius: 50%;\r\n\r\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\r\n          -moz-animation: nprogress-spinner 400ms linear infinite;\r\n       animation: nprogress-spinner 400ms linear infinite;\r\n}\r\n\r\n.nprogress-custom-parent {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.nprogress-custom-parent #nprogress .spinner,\r\n.nprogress-custom-parent #nprogress .bar {\r\n  position: absolute;\r\n}\r\n\r\n@-webkit-keyframes nprogress-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@-moz-keyframes nprogress-spinner {\r\n  0%   { -moz-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -moz-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n@keyframes nprogress-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); transform: rotate(360deg); }\r\n}", "",{"version":3,"sources":["webpack://components/styles/nprogress.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,aAAa;EACb,MAAM;EACN,OAAO;;EAEP,WAAW;EACX,WAAW;AACb;;AAEA,sBAAsB;AACtB;EACE,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,qCAAqC;EACrC,YAAY;;EAEZ,oDAAoD;UAE5C,iDAA4C;OAA5C,4CAA4C;AACtD;;AAEA,2CAA2C;AAC3C;EACE,cAAc;EACd,eAAe;EACf,aAAa;EACb,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAAsB;OAAtB,sBAAsB;;EAEtB,6BAA6B;EAC7B,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;;EAElB,0DAA0D;UAClD,uDAAkD;OAAlD,kDAAkD;AAC5D;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,OAAO,+BAA+B,EAAE;EACxC,OAAO,iCAAiC,EAAE;AAC5C;AACA;EACE,OAAO,4BAAuB,EAAvB,uBAAuB,EAAE;EAChC,OAAO,8BAAyB,EAAzB,yBAAyB,EAAE;AACpC;AAHA;EACE,OAAO,+BAAuB,EAAvB,4BAAuB,EAAvB,uBAAuB,EAAE;EAChC,OAAO,iCAAyB,EAAzB,8BAAyB,EAAzB,yBAAyB,EAAE;AACpC","sourcesContent":["/* Make clicks pass-through */\r\n#nprogress {\r\n  pointer-events: none;\r\n}\r\n\r\n#nprogress .bar {\r\n  background: red;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 100%;\r\n  height: 5px;\r\n}\r\n\r\n/* Fancy blur effect */\r\n#nprogress .peg {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 100px;\r\n  height: 100%;\r\n  box-shadow: 0 0 10px red, 0 0 5px red;\r\n  opacity: 1.0;\r\n\r\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\r\n      -ms-transform: rotate(3deg) translate(0px, -4px);\r\n          transform: rotate(3deg) translate(0px, -4px);\r\n}\r\n\r\n/* Remove these to get rid of the spinner */\r\n#nprogress .spinner {\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 15px;\r\n  right: 15px;\r\n}\r\n\r\n#nprogress .spinner-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  box-sizing: border-box;\r\n\r\n  border: solid 2px transparent;\r\n  border-top-color: red;\r\n  border-left-color: red;\r\n  border-radius: 50%;\r\n\r\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\r\n          animation: nprogress-spinner 400ms linear infinite;\r\n}\r\n\r\n.nprogress-custom-parent {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.nprogress-custom-parent #nprogress .spinner,\r\n.nprogress-custom-parent #nprogress .bar {\r\n  position: absolute;\r\n}\r\n\r\n@-webkit-keyframes nprogress-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes nprogress-spinner {\r\n  0%   { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/nprogress/nprogress.css":
false,

/***/ "./node_modules/nprogress/nprogress.css":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\advanced-react\\Advanced-React\\sick-fits\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeStart", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeComplete", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeError", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzcz9jMzM4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLHFTQUE2Sjs7QUFFL0w7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0scVNBQTZKO0FBQ25LO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscVNBQTZKOztBQUV2TDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGlEQUFpRCwyQkFBMkIsS0FBSyx5QkFBeUIsc0JBQXNCLHNCQUFzQixvQkFBb0IsYUFBYSxjQUFjLHNCQUFzQixrQkFBa0IsS0FBSyxv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Yy93ZWJwYWNrL3BhZ2VzL19hcHAuYmQ2YTQ2MjNkMWMwNTdiZDdiNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9ucHJvZ3Jlc3MuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL25wcm9ncmVzcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vbnByb2dyZXNzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cXHJcXG4jbnByb2dyZXNzIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbnByb2dyZXNzIC5iYXIge1xcclxcbiAgYmFja2dyb3VuZDogcmVkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTAzMTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xcclxcbiNucHJvZ3Jlc3MgLnBlZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZWQsIDAgMCA1cHggcmVkO1xcclxcbiAgb3BhY2l0eTogMS4wO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcXHJcXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcXHJcXG4gICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXFxyXFxuI25wcm9ncmVzcyAuc3Bpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwMzE7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItdG9wLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItbGVmdC1jb2xvcjogcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgLW1vei1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcXHJcXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcXHJcXG4gIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVxcclxcbkAtbW96LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XFxyXFxuICAwJSAgIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XFxyXFxuICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw2QkFBNkI7QUFDN0I7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTzs7RUFFUCxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLFlBQVk7O0VBRVosb0RBQW9EO1VBRTVDLGlEQUE0QztPQUE1Qyw0Q0FBNEM7QUFDdEQ7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQXNCO09BQXRCLHNCQUFzQjs7RUFFdEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCOztFQUVsQiwwREFBMEQ7VUFDbEQsdURBQWtEO09BQWxELGtEQUFrRDtBQUM1RDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTywrQkFBK0IsRUFBRTtFQUN4QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDO0FBQ0E7RUFDRSxPQUFPLDRCQUF1QixFQUF2Qix1QkFBdUIsRUFBRTtFQUNoQyxPQUFPLDhCQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtBQUNwQztBQUhBO0VBQ0UsT0FBTywrQkFBdUIsRUFBdkIsNEJBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0VBQ2hDLE9BQU8saUNBQXlCLEVBQXpCLDhCQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cXHJcXG4jbnByb2dyZXNzIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbnByb2dyZXNzIC5iYXIge1xcclxcbiAgYmFja2dyb3VuZDogcmVkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTAzMTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xcclxcbiNucHJvZ3Jlc3MgLnBlZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZWQsIDAgMCA1cHggcmVkO1xcclxcbiAgb3BhY2l0eTogMS4wO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcXHJcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xcclxcbiNucHJvZ3Jlc3MgLnNwaW5uZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDMxO1xcclxcbiAgdG9wOiAxNXB4O1xcclxcbiAgcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbiB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxcclxcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xcclxcbiAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XFxyXFxuICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzXCI7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2U+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUGFnZT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=