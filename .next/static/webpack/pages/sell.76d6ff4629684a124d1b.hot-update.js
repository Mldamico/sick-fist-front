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
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");






var _jsxFileName = "D:\\advanced-react\\Advanced-React\\sick-fits\\frontend\\components\\CreateProduct.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation CREATE_PRODUCT_MUTATION(\n    $name: String!\n    $description: String!\n    $price: Int!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        description: $description\n        price: $price\n        status: \"AVAILABLE\"\n        photo: { create: { image: $image, altText: $name } }\n      }\n    ) {\n      id\n      price\n      name\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var CreateProduct = function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    name: "Nice",
    price: 23412,
    image: "",
    description: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(CREATE_PRODUCT_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      createProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return createProduct();

              case 3:
                clearForm();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "Price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
          type: "textarea",
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(CreateProduct, "RYAKW67IL5YWm7+bUw0UMSOGLYw=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLHVCQUF1QixHQUFHQyxrREFBSCxtQkFBN0I7QUF3Qk8sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsaUJBQ3NCQyw0REFBTyxDQUFDO0FBQzdEQyxRQUFJLEVBQUUsTUFEdUQ7QUFFN0RDLFNBQUssRUFBRSxLQUZzRDtBQUc3REMsU0FBSyxFQUFFLEVBSHNEO0FBSTdEQyxlQUFXLEVBQUU7QUFKZ0QsR0FBRCxDQUQ3QjtBQUFBLE1BQ3pCQyxNQUR5QixZQUN6QkEsTUFEeUI7QUFBQSxNQUNqQkMsWUFEaUIsWUFDakJBLFlBRGlCO0FBQUEsTUFDSEMsU0FERyxZQUNIQSxTQURHO0FBQUEsTUFDUUMsU0FEUixZQUNRQSxTQURSOztBQUFBLHFCQU9pQkMsa0VBQVcsQ0FDM0RaLHVCQUQyRCxFQUUzRDtBQUNFYSxhQUFTLEVBQUVMO0FBRGIsR0FGMkQsQ0FQNUI7QUFBQTtBQUFBLE1BTzFCTSxhQVAwQjtBQUFBO0FBQUEsTUFPVEMsT0FQUyxrQkFPVEEsT0FQUztBQUFBLE1BT0FDLEtBUEEsa0JBT0FBLEtBUEE7QUFBQSxNQU9PQyxJQVBQLGtCQU9PQSxJQVBQOztBQWFqQyxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLFlBQVE7QUFBQSxvV0FBRSxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLGlCQUFDLENBQUNDLGNBQUY7QUFEUTtBQUFBLHVCQUVGTCxhQUFhLEVBRlg7O0FBQUE7QUFJUkoseUJBQVM7O0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURWO0FBQUEsNEJBUUUscUVBQUMscURBQUQ7QUFBYyxXQUFLLEVBQUVNO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVNFO0FBQVUsY0FBUSxFQUFFRCxPQUFwQjtBQUE2QixtQkFBV0EsT0FBeEM7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUU7QUFDRSxrQkFBUSxNQURWO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxZQUFFLEVBQUMsT0FITDtBQUlFLGNBQUksRUFBQyxPQUpQO0FBS0Usa0JBQVEsRUFBRU47QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxZQUFFLEVBQUMsTUFGTDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNKLElBTGhCO0FBTUUsa0JBQVEsRUFBRUs7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBc0JFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsWUFBRSxFQUFDLE9BRkw7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLHFCQUFXLEVBQUMsT0FKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDSCxLQUxoQjtBQU1FLGtCQUFRLEVBQUVJO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUFpQ0U7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLCtDQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxZQUFFLEVBQUMsYUFGTDtBQUdFLGNBQUksRUFBQyxhQUhQO0FBSUUscUJBQVcsRUFBQyxhQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNELFdBTGhCO0FBTUUsa0JBQVEsRUFBRUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRixlQTRDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERELENBdkVNOztHQUFNUCxhO1VBQzRDQyxvRCxFQU1MUywwRDs7O0tBUHZDVixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGwuNzZkNmZmNDYyOTY4NGExMjRkMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTihcclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgICRwcmljZTogSW50IVxyXG4gICAgJGltYWdlOiBVcGxvYWRcclxuICApIHtcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cclxuICAgICAgICBwcmljZTogJHByaWNlXHJcbiAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiXHJcbiAgICAgICAgcGhvdG86IHsgY3JlYXRlOiB7IGltYWdlOiAkaW1hZ2UsIGFsdFRleHQ6ICRuYW1lIH0gfVxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgcHJpY2VcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG5hbWU6IFwiTmljZVwiLFxyXG4gICAgcHJpY2U6IDIzNDEyLFxyXG4gICAgaW1hZ2U6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiBpbnB1dHNcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcclxuXHJcbiAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgICAgUHJpY2VcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgQWRkIFByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9