webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CharacterFiltersApplied/CharacterFiltersApplied.js":
/*!***********************************************************************!*\
  !*** ./components/CharacterFiltersApplied/CharacterFiltersApplied.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterFiltersApplied; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/CharacterFiltersApplied/CharacterFiltersApplied.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CharacterFiltersApplied(props) {
  var _this = this;

  var filters = props.filters;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, Object.keys(filters || {}).map(function (filterCategory) {
    return (filters[filterCategory] || []).map(function (filter) {
      return filter ? __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 34
        }
      }, filter, " ", __jsx("i", {
        onClick: function onClick() {
          return removeFilter(filterCategory, filter);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 49
        }
      }, "x")) : null;
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.ec61754ccc127185e5eb.hot-update.js.map