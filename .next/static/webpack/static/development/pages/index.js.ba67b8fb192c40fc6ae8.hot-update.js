webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/filters */ "./components/filters.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _services_character__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/character */ "./services/character/index.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Sorting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Sorting */ "./components/Sorting.js");
/* harmony import */ var _components_CharacterList_CharacterList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/CharacterList/CharacterList */ "./components/CharacterList/CharacterList.js");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Pagination/Pagination */ "./components/Pagination/Pagination.js");
/* harmony import */ var _components_CharacterFilters_CharacterFilters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/CharacterFilters/CharacterFilters */ "./components/CharacterFilters/CharacterFilters.js");
/* harmony import */ var _components_CharacterFiltersApplied_CharacterFiltersApplied__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/CharacterFiltersApplied/CharacterFiltersApplied */ "./components/CharacterFiltersApplied/CharacterFiltersApplied.js");







var _jsxFileName = "/Users/rakrawat/workspace/my-toons/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






 // components








var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    _this = _super.call(this, props);
    _this.state = {
      page: 1,
      filters: {}
    };
    _this.fetchCharacters = _this.fetchCharacters.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.paginateCharacters = _this.paginateCharacters.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.filterCharacters = _this.filterCharacters.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.searchCharacters = _this.searchCharacters.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.sortCharacters = _this.sortCharacters.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "fetchCharacters",
    value: function fetchCharacters() {
      return Object(_services_character__WEBPACK_IMPORTED_MODULE_12__["getCharacters"])({
        search: this.state.searchText || '',
        species: this.state.filters.species || [],
        gender: this.state.filters.gender || [],
        page: this.state.page || 1
      }).then(function (res) {
        return {
          characters: res.data.results,
          pagination: res.data.info
        };
      })["catch"](function (err) {
        return {
          characters: [],
          pagination: null
        };
      });
    }
  }, {
    key: "paginateCharacters",
    value: function paginateCharacters(page) {
      var _this2 = this;

      this.setState({
        page: page
      }, function () {
        return _this2.fetchCharacters();
      });
    }
  }, {
    key: "filterCharacters",
    value: function filterCharacters(filters) {
      var _this3 = this;

      this.setState({
        filters: filters,
        page: 1
      }, function () {
        return _this3.fetchCharacters();
      });
    }
  }, {
    key: "searchCharacters",
    value: function searchCharacters(searchText) {
      var _this4 = this;

      this.setState({
        searchText: searchText,
        page: 1
      }, function () {
        return _this4.fetchCharacters();
      });
    }
  }, {
    key: "onAppliedFilterRemove",
    value: function onAppliedFilterRemove(filterCategory, filter) {}
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "float-left width-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }, __jsx(_components_CharacterFilters_CharacterFilters__WEBPACK_IMPORTED_MODULE_17__["default"], {
        characters: this.props.characters,
        onFilterChange: this.filterCharacters,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "float-right width-85",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx(_components_CharacterFiltersApplied_CharacterFiltersApplied__WEBPACK_IMPORTED_MODULE_18__["default"], {
        filters: this.state.filters,
        onAppliedFilterRemove: this.onAppliedFilterRemove,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSearch: this.searchCharacters,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }), __jsx(_components_Sorting__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }
      }), __jsx(_components_CharacterList_CharacterList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        characters: this.props.characters,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_16__["default"], {
        pagination: this.props.pagination,
        onPaginate: this.paginateCharacters,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(context) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Object(_services_character__WEBPACK_IMPORTED_MODULE_12__["getCharacters"])().then(function (res) {
                return {
                  characters: res.data.results,
                  pagination: res.data.info
                };
              })["catch"](function (err) {
                return {
                  characters: [],
                  pagination: null
                };
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ba67b8fb192c40fc6ae8.hot-update.js.map