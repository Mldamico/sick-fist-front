webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: CreateProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProduct", function() { return CreateProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");


var _jsxFileName = "D:\\advanced-react\\Advanced-React\\sick-fits\\frontend\\components\\CreateProduct.js",
    _this = undefined,
    _s = $RefreshSig$();



var CreateProduct = function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name: "Nice",
    price: 23412
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "name",
      children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Name",
        value: inputs.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "price",
      children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "Price",
        value: inputs.price,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      onClick: clearForm,
      children: "Clear form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      onClick: resetForm,
      children: "Reset form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_s(CreateProduct, "LOtO0lHDV2LjftIddtYNHy++Tqs=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = CreateProduct;

var _c;

$RefreshReg$(_c, "CreateProduct");

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

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3QiLCJ1c2VGb3JtIiwibmFtZSIsInByaWNlIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwibG9hZGluZyIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGlCQUNzQkMsNERBQU8sQ0FBQztBQUM3REMsUUFBSSxFQUFFLE1BRHVEO0FBRTdEQyxTQUFLLEVBQUU7QUFGc0QsR0FBRCxDQUQ3QjtBQUFBLE1BQ3pCQyxNQUR5QixZQUN6QkEsTUFEeUI7QUFBQSxNQUNqQkMsWUFEaUIsWUFDakJBLFlBRGlCO0FBQUEsTUFDSEMsU0FERyxZQUNIQSxTQURHO0FBQUEsTUFDUUMsU0FEUixZQUNRQSxTQURSOztBQUtqQyxzQkFDRSxxRUFBQyxvREFBRDtBQUFBLDRCQUNFO0FBQU8sYUFBTyxFQUFDLE1BQWY7QUFBQSxzQ0FFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsVUFBRSxFQUFDLE1BRkw7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLG1CQUFXLEVBQUMsTUFKZDtBQUtFLGFBQUssRUFBRUgsTUFBTSxDQUFDRixJQUxoQjtBQU1FLGdCQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBWUU7QUFBTyxhQUFPLEVBQUMsT0FBZjtBQUFBLHVDQUVFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxVQUFFLEVBQUMsT0FGTDtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsYUFBSyxFQUFFRCxNQUFNLENBQUNELEtBTGhCO0FBTUUsZ0JBQVEsRUFBRUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUF3QkU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGLGVBMkJFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXRDTTs7R0FBTVAsYTtVQUM0Q0Msb0Q7OztLQUQ1Q0QsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZiO0FBQUE7QUFBQTtBQUVBLElBQU1RLE9BQU8sR0FBR0MsbUVBQUgsc0VBQWI7QUFZQSxJQUFNQyxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsOHRCQXNEU0osT0F0RFQsQ0FBVjtBQTJEZUUsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC41YmZhZjdhMGY2MWVhNjExNDZmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG5hbWU6IFwiTmljZVwiLFxyXG4gICAgcHJpY2U6IDIzNDEyXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgIFByaWNlXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsZWFyRm9ybX0+XHJcbiAgICAgICAgQ2xlYXIgZm9ybVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cmVzZXRGb3JtfT5cclxuICAgICAgICBSZXNldCBmb3JtXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIC8qIHJvdGF0ZTogMDsgKi9cclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbixcclxuICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZmYzMDE5IDAlLFxyXG4gICAgICAgICNlMmIwNGEgNTAlLFxyXG4gICAgICAgICNmZjMwMTkgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=