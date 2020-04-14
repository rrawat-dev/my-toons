webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pagination/Pagination.js":
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Pagination/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var pagination = props.pagination;

  function previousPage() {
    if (pagination.next) {
      props.onPaginate(props.page + 1);
    }
  }

  function nextPage() {
    if (pagination.prev) {
      props.onPaginate(props.page - 1);
    }
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: function onClick() {
      return paginate(-1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Previous"), __jsx("span", {
    onClick: function onClick() {
      return paginate(1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Next"));
});

/***/ })

})
//# sourceMappingURL=index.js.0a17621a75a53e24b725.hot-update.js.map