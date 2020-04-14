webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Filters/Filters.js":
/*!***************************************!*\
  !*** ./components/Filters/Filters.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Filters/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Filters(props) {
  var _this = this;

  var label = props.label,
      filters = props.filters,
      sortby = props.sortby;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      selectedFilters = _useState[0],
      setSelectedFilters = _useState[1];

  function onFilterChange(evt) {
    var value = evt.target.value;
    var newFilters = evt.target.checked ? selectedFilters.concat(value) : selectedFilters.filter(function (filter) {
      return filter !== value;
    });
    props.onFilterChange && props.onFilterChange(newFilters);
    setSelectedFilters(newFilters);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [props.defaultSelectedFilters]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, label), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, filters.map(function (filter) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "checkbox",
      value: filter,
      checked: selectedFilters.indexOf(filter) > -1,
      onChange: onFilterChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }), filter));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.c960f092d1c235abe28f.hot-update.js.map