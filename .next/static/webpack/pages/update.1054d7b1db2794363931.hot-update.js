webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: UpdateProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProduct", function() { return UpdateProduct; });
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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");






var _jsxFileName = "D:\\advanced-react\\Advanced-React\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SINGLE_PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());
var UpdateProduct = function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(UPDATE_PRODUCT_MUTATION),
      _useMutation2 = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading;

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])(data === null || data === void 0 ? void 0 : data.Product),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 23
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var res;
        return D_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateProduct({
                  variables: {
                    id: id,
                    name: inputs.name,
                    description: inputs.description,
                    price: inputs.price
                  }
                });

              case 3:
                res = _context.sent;
                console.log(res); // const res = await createProduct();
                // clearForm();
                // Router.push({
                //   pathname: `/product/${res.data.createProduct.id}`
                // });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
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
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
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
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, _this);
};

_s(UpdateProduct, "FD80zhfgCDB3CNq3tMqKqLYcqSM=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"], _lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = UpdateProduct;

var _c;

$RefreshReg$(_c, "UpdateProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjtBQVdBLElBQU1DLHVCQUF1QixHQUFHRCxrREFBSCxvQkFBN0I7QUFtQk8sSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFZO0FBQUE7O0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTOztBQUFBLGtCQUNOQywrREFBUSxDQUFDTCxvQkFBRCxFQUF1QjtBQUM5RE0sYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFBRkE7QUFBRjtBQURtRCxHQUF2QixDQURGO0FBQUEsTUFDL0JHLElBRCtCLGFBQy9CQSxJQUQrQjtBQUFBLE1BQ3pCQyxLQUR5QixhQUN6QkEsS0FEeUI7QUFBQSxNQUNsQkMsT0FEa0IsYUFDbEJBLE9BRGtCOztBQUFBLHFCQVFuQ0Msa0VBQVcsQ0FBQ1IsdUJBQUQsQ0FSd0I7QUFBQTtBQUFBLE1BTXJDUyxh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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS4xMDU0ZDdiMWRiMjc5NDM2MzkzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5cclxuY29uc3QgU0lOR0xFX1BST0RVQ1RfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcHJpY2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfUFJPRFVDVF9NVVRBVElPTihcclxuICAgICRpZDogSUQhXHJcbiAgICAkbmFtZTogU3RyaW5nXHJcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZ1xyXG4gICAgJHByaWNlOiBJbnRcclxuICApIHtcclxuICAgIHVwZGF0ZVByb2R1Y3QoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgZGF0YTogeyBuYW1lOiAkbmFtZSwgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbiwgcHJpY2U6ICRwcmljZSB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVQcm9kdWN0ID0gKHsgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbXHJcbiAgICB1cGRhdGVQcm9kdWN0LFxyXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfVxyXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTik7XHJcblxyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKGRhdGE/LlByb2R1Y3QpO1xyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVByb2R1Y3Qoe1xyXG4gICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBuYW1lOiBpbnB1dHMubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGlucHV0cy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJpY2U6IGlucHV0cy5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIC8vIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAvLyAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWBcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XHJcbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgUHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=