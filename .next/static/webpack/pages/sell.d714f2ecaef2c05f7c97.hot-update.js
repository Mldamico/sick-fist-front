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
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
      var _e$target$files = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.files, 1);

      value = _e$target$files[0];
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBK0I7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDRCxPQUFELENBRFE7QUFBQSxNQUNyQ0UsTUFEcUM7QUFBQSxNQUM3QkMsU0FENkI7O0FBRzVDLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQUEsb0JBQ0tBLENBQUMsQ0FBQ0MsTUFEUDtBQUFBLFFBQ2pCQyxLQURpQixhQUNqQkEsS0FEaUI7QUFBQSxRQUNWQyxJQURVLGFBQ1ZBLElBRFU7QUFBQSxRQUNKQyxJQURJLGFBQ0pBLElBREk7O0FBRXZCLFFBQUlBLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRixXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNEOztBQUNELFFBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQUEsc01BQ1RKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSyxLQURBOztBQUNsQkosV0FEa0I7QUFFcEI7O0FBQ0RKLGFBQVMsaUNBQ0pELE1BREksc0xBRU5NLElBRk0sRUFFQ0QsS0FGRCxHQUFUO0FBSUQ7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNuQlQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTYSxTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQ2pCRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWYsTUFBZixFQUF1QmdCLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1osS0FBUDs7QUFBQSxhQUFrQixDQUFDWSxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGlCLENBQW5CO0FBR0FoQixhQUFTLENBQUNXLFVBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU87QUFBRVosVUFBTSxFQUFOQSxNQUFGO0FBQVVFLGdCQUFZLEVBQVpBLFlBQVY7QUFBd0JRLGFBQVMsRUFBVEEsU0FBeEI7QUFBbUNDLGFBQVMsRUFBVEE7QUFBbkMsR0FBUDtBQUNEOztHQTdCdUJkLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC5kNzE0ZjJlY2FlZjJjMDVmN2M5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgfVxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIFwiXCJdKVxyXG4gICAgKTtcclxuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=