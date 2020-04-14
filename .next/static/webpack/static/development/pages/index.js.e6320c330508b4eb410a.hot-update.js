webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CharacterFilters/CharacterFilters.js":
/*!*********************************************************!*\
  !*** ./components/CharacterFilters/CharacterFilters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterFilters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Filters/Filters */ "./components/Filters/Filters.js");
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/CharacterFilters/CharacterFilters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var filtersData = {
  "species": {
    "label": "Species",
    "data": ["Human", "Mythology", "Other"]
  }
};
function CharacterFilters(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    species: [],
    gender: [],
    origin: []
  }),
      filters = _useState[0],
      setFilters = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = Object.assign({}, filters);
    props.characters.forEach(function (character) {
      if (data.species.indexOf(character.species) === -1) {
        data.species = data.species.concat(character.species);
      }

      if (data.gender.indexOf(character.gender) === -1) {
        data.gender = data.gender.concat(character.gender);
      }
    });
    setFilters(data);
  }, [props.characters]);

  function onSpeciesFilterChange(filters) {
    props.onFilterChange && props.onFilterChange({
      species: filters
    });
  }

  function onGenderFilterChange(filters) {
    props.onFilterChange && props.onFilterChange({
      gender: filters
    });
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, filters.species.length > 0 && __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Species",
    filters: filters.species,
    sortby: "ASC",
    onFilterChange: onSpeciesFilterChange,
    selectedFilters: props.selectedFilters.species,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), filters.gender.length > 0 && __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Gender",
    filters: filters.gender,
    sortby: "DESC",
    onFilterChange: onGenderFilterChange,
    selectedFilters: props.selectedFilters.gender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e6320c330508b4eb410a.hot-update.js.map