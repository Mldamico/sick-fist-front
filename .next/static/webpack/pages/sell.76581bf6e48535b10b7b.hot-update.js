webpackHotUpdate_N_E("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name,
        type = _e$target.type;

    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      console.log("enmtro")[value] = e.target.files;
      console.log(value);
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ""];
    }));
    setInputs(blankState);
  }

  return {
    inputs: inputs,
    handleChange: handleChange,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

_s(useForm, "0tjT+aoDVbAe0wsQZsq9AKLCE20=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQ0QsT0FBRCxDQURRO0FBQUEsTUFDckNFLE1BRHFDO0FBQUEsTUFDN0JDLFNBRDZCOztBQUc1QyxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBLG9CQUNLQSxDQUFDLENBQUNDLE1BRFA7QUFBQSxRQUNqQkMsS0FEaUIsYUFDakJBLEtBRGlCO0FBQUEsUUFDVkMsSUFEVSxhQUNWQSxJQURVO0FBQUEsUUFDSkMsSUFESSxhQUNKQSxJQURJOztBQUV2QixRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkYsV0FBSyxHQUFHRyxRQUFRLENBQUNILEtBQUQsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJRSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQkUsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkwsS0FBdEIsSUFBK0JGLENBQUMsQ0FBQ0MsTUFBRixDQUFTTyxLQUF4QztBQUNBRixhQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNEOztBQUNESixhQUFTLGlDQUNKRCxNQURJLHNMQUVOTSxJQUZNLEVBRUNELEtBRkQsR0FBVDtBQUlEOztBQUVELFdBQVNPLFNBQVQsR0FBcUI7QUFDbkJYLGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU2UsU0FBVCxHQUFxQjtBQUNuQixRQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUNqQkQsTUFBTSxDQUFDRSxPQUFQLENBQWVqQixNQUFmLEVBQXVCa0IsR0FBdkIsQ0FBMkI7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPZCxLQUFQOztBQUFBLGFBQWtCLENBQUNjLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FBM0IsQ0FEaUIsQ0FBbkI7QUFHQWxCLGFBQVMsQ0FBQ2EsVUFBRCxDQUFUO0FBQ0Q7O0FBRUQsU0FBTztBQUFFZCxVQUFNLEVBQU5BLE1BQUY7QUFBVUUsZ0JBQVksRUFBWkEsWUFBVjtBQUF3QlUsYUFBUyxFQUFUQSxTQUF4QjtBQUFtQ0MsYUFBUyxFQUFUQTtBQUFuQyxHQUFQO0FBQ0Q7O0dBOUJ1QmhCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC43NjU4MWJmNmU0ODUzNWIxMGI3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlbm10cm9cIilbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBcIlwiXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtLCBjbGVhckZvcm0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9