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
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");




var _jsxFileName = "D:\\advanced-react\\Advanced-React\\sick-fits\\frontend\\components\\CreateProduct.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation CREATE_PRODUCT_MUTATION(\n    $name: String!\n    $description: String!\n    $price: Int!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        description: $description\n        price: $price\n        photo: {\n          create : {\n            image: $image, altText: $name\n          }\n        }\n        status: 'AVAILABLE' \n      }\n    ) {\n      name\n      description\n      id\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var CreateProduct = function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])({
    name: "Nice",
    price: 23412,
    image: "",
    description: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(CREATE_PRODUCT_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      createProduct = _useMutation2[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log(inputs);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("fieldset", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "Price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
          type: "textarea",
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        type: "submit",
        onClick: clearForm,
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_s(CreateProduct, "H8mfyo6MplKor7TJDqHlr5ANrGo=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msa0RBQUgsbUJBQTdCO0FBNEJPLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGlCQUNzQkMsNERBQU8sQ0FBQztBQUM3REMsUUFBSSxFQUFFLE1BRHVEO0FBRTdEQyxTQUFLLEVBQUUsS0FGc0Q7QUFHN0RDLFNBQUssRUFBRSxFQUhzRDtBQUk3REMsZUFBVyxFQUFFO0FBSmdELEdBQUQsQ0FEN0I7QUFBQSxNQUN6QkMsTUFEeUIsWUFDekJBLE1BRHlCO0FBQUEsTUFDakJDLFlBRGlCLFlBQ2pCQSxZQURpQjtBQUFBLE1BQ0hDLFNBREcsWUFDSEEsU0FERztBQUFBLE1BQ1FDLFNBRFIsWUFDUUEsU0FEUjs7QUFBQSxxQkFPVEMsa0VBQVcsQ0FBQ1osdUJBQUQsRUFBMEI7QUFDM0RhLGFBQVMsRUFBRUw7QUFEZ0QsR0FBMUIsQ0FQRjtBQUFBO0FBQUEsTUFPMUJNLGFBUDBCOztBQVVqQyxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBRSxrQkFBQUMsQ0FBQyxFQUFJO0FBQ2JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsTUFBWjtBQUNELEtBSkg7QUFBQSwyQkFNRTtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQyxPQUF0QjtBQUE4QixjQUFJLEVBQUMsT0FBbkM7QUFBMkMsa0JBQVEsRUFBRUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSx3Q0FFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsWUFBRSxFQUFDLE1BRkw7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLHFCQUFXLEVBQUMsTUFKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDSixJQUxoQjtBQU1FLGtCQUFRLEVBQUVLO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQWdCRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLFlBQUUsRUFBQyxPQUZMO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxxQkFBVyxFQUFDLE9BSmQ7QUFLRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0gsS0FMaEI7QUFNRSxrQkFBUSxFQUFFSTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLGVBMkJFO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBQSwrQ0FFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsWUFBRSxFQUFDLGFBRkw7QUFHRSxjQUFJLEVBQUMsYUFIUDtBQUlFLHFCQUFXLEVBQUMsYUFKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDRCxXQUxoQjtBQU1FLGtCQUFRLEVBQUVFO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkYsZUFzQ0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQTdETTs7R0FBTVIsYTtVQUM0Q0Msb0QsRUFNL0JTLDBEOzs7S0FQYlYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLmNjYTFiNTQzOWQxMTlhYzY1MjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuXHJcbmNvbnN0IENSRUFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nIVxyXG4gICAgJHByaWNlOiBJbnQhXHJcbiAgICAkaW1hZ2U6IFVwbG9hZFxyXG4gICkge1xyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6ICRuYW1lXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxyXG4gICAgICAgIHByaWNlOiAkcHJpY2VcclxuICAgICAgICBwaG90bzoge1xyXG4gICAgICAgICAgY3JlYXRlIDoge1xyXG4gICAgICAgICAgICBpbWFnZTogJGltYWdlLCBhbHRUZXh0OiAkbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0dXM6ICdBVkFJTEFCTEUnIFxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBpZFxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG5hbWU6IFwiTmljZVwiLFxyXG4gICAgcHJpY2U6IDIzNDEyLFxyXG4gICAgaW1hZ2U6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0XSA9IHVzZU11dGF0aW9uKENSRUFURV9QUk9EVUNUX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IGlucHV0c1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17ZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWFnZVwiIG5hbWU9XCJpbWFnZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtjbGVhckZvcm19PlxyXG4gICAgICAgICAgKyBBZGQgUHJvZHVjdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=