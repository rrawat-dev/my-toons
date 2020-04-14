module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Character/Character.js":
/*!*******************************************!*\
  !*** ./components/Character/Character.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Character/Character.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Character(props) {
  const {
    character
  } = props;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), "Name: ", character.name, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), "Gender: ", character.gender, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), "Species: ", character.species);
}

/***/ }),

/***/ "./components/CharacterFilters/CharacterFilters.js":
/*!*********************************************************!*\
  !*** ./components/CharacterFilters/CharacterFilters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterFilters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Filters/Filters */ "./components/Filters/Filters.js");
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/CharacterFilters/CharacterFilters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const filtersData = {
  "species": {
    "label": "Species",
    "data": ["Human", "Mythology", "Other"]
  }
};
function CharacterFilters(props) {
  const {
    0: filters,
    1: setFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    species: [],
    gender: [],
    origin: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const data = Object.assign({}, filters);
    props.characters.forEach(character => {
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

/***/ }),

/***/ "./components/CharacterFiltersApplied/CharacterFiltersApplied.js":
/*!***********************************************************************!*\
  !*** ./components/CharacterFiltersApplied/CharacterFiltersApplied.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterFiltersApplied; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/CharacterFiltersApplied/CharacterFiltersApplied.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CharacterFiltersApplied(props) {
  const {
    filters
  } = props;

  function removeFilter(filterCategory, filter) {
    props.onAppliedFilterRemove && props.onAppliedFilterRemove(filterCategory, filter);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object.keys(filters || {}).map(filterCategory => (filters[filterCategory] || []).map(filter => filter ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 34
    }
  }, filter, " ", __jsx("i", {
    onClick: () => removeFilter(filterCategory, filter),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 49
    }
  }, "x")) : null)));
}

/***/ }),

/***/ "./components/CharacterList/CharacterList.js":
/*!***************************************************!*\
  !*** ./components/CharacterList/CharacterList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Character_Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Character/Character */ "./components/Character/Character.js");
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/CharacterList/CharacterList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CharacterList(props) {
  return props.characters.map(character => __jsx(_Character_Character__WEBPACK_IMPORTED_MODULE_1__["default"], {
    character: character,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 46
    }
  }));
}

/***/ }),

/***/ "./components/Filters/Filters.js":
/*!***************************************!*\
  !*** ./components/Filters/Filters.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Filters/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Filters(props) {
  const {
    label,
    filters,
    selectedFilters = [],
    sortby
  } = props;

  function onFilterChange(evt) {
    const value = evt.target.value;
    const newFilters = evt.target.checked ? selectedFilters.concat(value) : selectedFilters.filter(filter => filter !== value);
    props.onFilterChange && props.onFilterChange(newFilters);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, label), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, filters.map(filter => __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    value: filter,
    checked: selectedFilters.indexOf(filter) > -1,
    onChange: onFilterChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }), filter)))));
}

/***/ }),

/***/ "./components/Pagination/Pagination.js":
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Pagination/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const {
    pagination
  } = props;

  function previousPage() {
    if (pagination.prev) {
      props.onPaginate(props.page - 1);
    }
  }

  function nextPage() {
    if (pagination.next) {
      props.onPaginate(props.page + 1);
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
    onClick: previousPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Previous"), __jsx("span", {
    onClick: nextPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Next"));
});

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Search extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.search = this.search.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  search() {
    this.props.onSearch && this.props.onSearch(this.state.searchText);
  }

  onSearchTextChange(evt) {
    this.setState({
      searchText: evt.target.value
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "text",
      placeholder: "Search here..",
      onChange: this.onSearchTextChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: this.search,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "Search"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/Sorting.js":
/*!*******************************!*\
  !*** ./components/Sorting.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/Sorting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Sorting extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, "Sort by ID"), __jsx("input", {
      type: "radio",
      name: "sorting",
      id: "ascending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("label", {
      for: "ascending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Ascending"), __jsx("input", {
      type: "radio",
      name: "sorting",
      id: "descending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx("label", {
      for: "descending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "Descending"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sorting);

/***/ }),

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_itemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/itemStyles */ "./components/styles/itemStyles.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Card extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.CharacterData.length > 0) {
      nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
    }
  }

  componentDidMount() {
    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
  }

  render() {
    return this.props.CharacterData.map(char => __jsx(_styles_itemStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: char.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "image-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: char.image,
      alt: char.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "char-name-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, char.name), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }, "ID: ", char.id, " "), "-", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 61
      }
    }, " Created: ", moment__WEBPACK_IMPORTED_MODULE_2___default()(char.created).fromNow()))), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "desc-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }, "Status:"), __jsx("span", {
      className: "desc-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }
    }, char.status)), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "desc-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 33
      }
    }, "Species:"), __jsx("span", {
      className: "desc-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 33
      }
    }, char.species)), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "desc-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    }, "Gender:"), __jsx("span", {
      className: "desc-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, char.gender)), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "desc-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }, "Origin:"), __jsx("span", {
      className: "desc-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, char.origin.name)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/filter.js":
/*!******************************!*\
  !*** ./components/filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_filterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/filterStyles */ "./components/styles/filterStyles.js");
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/filter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Filter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {// console.log("Props ====>", this.props);
  }

  render() {
    console.log("Props ====>", this.props.data);
    return __jsx(_styles_filterStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, this.props.filterType), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, this.props.data.map(filter => __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx("input", {
      type: "checkbox",
      id: filter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }), __jsx("label", {
      className: "checkbox-value",
      for: filter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, filter)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./components/filters.js":
/*!*******************************!*\
  !*** ./components/filters.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./components/filter.js");
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/components/filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Filters extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(_filter__WEBPACK_IMPORTED_MODULE_1__["default"], {
      filterType: "species",
      data: this.props.species,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx(_filter__WEBPACK_IMPORTED_MODULE_1__["default"], {
      filterType: "gender",
      data: this.props.gender,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./components/styles/filterStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/filterStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Filter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background: transparent;
    border: 1px solid ${props => props.theme.offWhite};
    position: relative;
    display: block;
    margin-bottom: 20px;
    h3 {
        text-transform: uppercase;
        display:block;
        text-align:center;
    }
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      font-size: 1.2rem;
      padding: 10px 0;
    }
    .checkbox-value {
      color: ${props => props.theme.terracotta};
      margin-left: 10px;
    }
  }
  }`;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./components/styles/itemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/itemStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: #333333;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: inline-block;
  margin-right: 10px;
  min-height:400px;
  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .image-container {
    position: relative;
  }
  .char-name-container {
    position: absolute;
    background: rgba(0,0,0,0.6);
    bottom: 0;
    width: 100%;
    color: #ccc;
  }
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      font-size: 1.2rem;
      border-bottom: 1px solid ${props => props.theme.lightgrey};
      padding: 10px 0;
    }
    .desc-label {
      text-transform: uppercase;
      color: ${props => props.theme.offWhite};
    }
    .desc-value {
      color: ${props => props.theme.terracotta};
      float: right;
      margin-right: 20px;
    }
  }
  }`;
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filters */ "./components/filters.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/character */ "./services/character/index.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Sorting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sorting */ "./components/Sorting.js");
/* harmony import */ var _components_CharacterList_CharacterList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CharacterList/CharacterList */ "./components/CharacterList/CharacterList.js");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Pagination/Pagination */ "./components/Pagination/Pagination.js");
/* harmony import */ var _components_CharacterFilters_CharacterFilters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CharacterFilters/CharacterFilters */ "./components/CharacterFilters/CharacterFilters.js");
/* harmony import */ var _components_CharacterFiltersApplied_CharacterFiltersApplied__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CharacterFiltersApplied/CharacterFiltersApplied */ "./components/CharacterFiltersApplied/CharacterFiltersApplied.js");
var _jsxFileName = "/Users/rakrawat/workspace/my-toons/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // components








class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: props.characters || [],
      pagination: props.pagination || null,
      page: 1,
      filters: {}
    };
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.paginateCharacters = this.paginateCharacters.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
    this.searchCharacters = this.searchCharacters.bind(this);
    this.onAppliedFilterRemove = this.onAppliedFilterRemove.bind(this);
  }

  static async getInitialProps(context) {
    return Object(_services_character__WEBPACK_IMPORTED_MODULE_5__["getCharacters"])().then(res => {
      return {
        characters: res.data.results,
        pagination: res.data.info
      };
    }).catch(err => {
      return {
        characters: [],
        pagination: null
      };
    });
  }

  fetchCharacters() {
    Object(_services_character__WEBPACK_IMPORTED_MODULE_5__["getCharacters"])({
      searchText: this.state.searchText || '',
      species: this.state.filters.species || [],
      gender: this.state.filters.gender || [],
      page: this.state.page || 1
    }).then(res => {
      this.setState({
        characters: res.data.results,
        pagination: res.data.info
      });
    }).catch(err => {
      return {
        characters: [],
        pagination: null
      };
    });
  }

  paginateCharacters(page) {
    this.setState({
      page
    }, () => this.fetchCharacters());
  }

  filterCharacters(filters) {
    this.setState({
      filters: _objectSpread({}, this.state.filters, {}, filters),
      page: 1
    }, () => this.fetchCharacters());
  }

  searchCharacters(searchText) {
    this.setState({
      searchText,
      page: 1
    }, () => this.fetchCharacters());
  }

  onAppliedFilterRemove(filterCategory, removedFilter) {
    const filters = _objectSpread({}, this.state.filters, {
      [filterCategory]: this.state.filters[filterCategory].filter(filter => filter !== removedFilter)
    });

    this.setState({
      filters
    }, () => {
      this.fetchCharacters();
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "float-left width-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(_components_CharacterFilters_CharacterFilters__WEBPACK_IMPORTED_MODULE_10__["default"], {
      characters: this.props.characters,
      onFilterChange: this.filterCharacters,
      selectedFilters: this.state.filters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "float-right width-85",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx(_components_CharacterFiltersApplied_CharacterFiltersApplied__WEBPACK_IMPORTED_MODULE_11__["default"], {
      filters: this.state.filters,
      onAppliedFilterRemove: this.onAppliedFilterRemove,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSearch: this.searchCharacters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }), __jsx(_components_Sorting__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }), __jsx(_components_CharacterList_CharacterList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      characters: this.state.characters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
      pagination: this.state.pagination,
      onPaginate: this.paginateCharacters,
      page: this.state.page,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./redux/reducers/filters.js":
/*!***********************************!*\
  !*** ./redux/reducers/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (filters = [], action) {
  switch (action.type) {
    case 'ADD_FILTER':
      filters = filters.concat('');

    case 'REMOVE_FILTER':
      filters = filters.filter(() => false);
  }

  return filters;
});
;

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./redux/reducers/filters.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  filters: _filters__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: getStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./redux/reducers/index.js");


const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
let store = null;
function getStore(initialState = {}) {
  if (store === null) {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, composeEnhancers());
  }

  return store;
}
;

/***/ }),

/***/ "./services/character/index.js":
/*!*************************************!*\
  !*** ./services/character/index.js ***!
  \*************************************/
/*! exports provided: getCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacters", function() { return getCharacters; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http */ "./services/http/index.js");

function getCharacters(params = {}) {
  const species = (params.species || []).map(species => `species=${species}`).join('&');
  const gender = (params.gender || []).map(gender => `gender=${gender.toLowerCase()}`).join('&');
  const page = `page=${params.page || 1}`;
  const name = `name=${params.searchText || ''}`;
  const url = `https://rickandmortyapi.com/api/character/?${species}&${gender}&${page}&${name}`;
  console.log(url);
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
  /*
  return Promise.resolve({
     data: {
      "info": {
          "count": 73,
          "pages": 4,
          "next": "https://rickandmortyapi.com/api/character/?page=2&name=rick",
          "prev": ""
      },
      "results": [
          {
              "id": 1,
              "name": "Rick Sanchez",
              "status": "Alive",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "Earth (C-137)",
                  "url": "https://rickandmortyapi.com/api/location/1"
              },
              "location": {
                  "name": "Earth (Replacement Dimension)",
                  "url": "https://rickandmortyapi.com/api/location/20"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/1",
                  "https://rickandmortyapi.com/api/episode/2",
                  "https://rickandmortyapi.com/api/episode/3",
                  "https://rickandmortyapi.com/api/episode/4",
                  "https://rickandmortyapi.com/api/episode/5",
                  "https://rickandmortyapi.com/api/episode/6",
                  "https://rickandmortyapi.com/api/episode/7",
                  "https://rickandmortyapi.com/api/episode/8",
                  "https://rickandmortyapi.com/api/episode/9",
                  "https://rickandmortyapi.com/api/episode/10",
                  "https://rickandmortyapi.com/api/episode/11",
                  "https://rickandmortyapi.com/api/episode/12",
                  "https://rickandmortyapi.com/api/episode/13",
                  "https://rickandmortyapi.com/api/episode/14",
                  "https://rickandmortyapi.com/api/episode/15",
                  "https://rickandmortyapi.com/api/episode/16",
                  "https://rickandmortyapi.com/api/episode/17",
                  "https://rickandmortyapi.com/api/episode/18",
                  "https://rickandmortyapi.com/api/episode/19",
                  "https://rickandmortyapi.com/api/episode/20",
                  "https://rickandmortyapi.com/api/episode/21",
                  "https://rickandmortyapi.com/api/episode/22",
                  "https://rickandmortyapi.com/api/episode/23",
                  "https://rickandmortyapi.com/api/episode/24",
                  "https://rickandmortyapi.com/api/episode/25",
                  "https://rickandmortyapi.com/api/episode/26",
                  "https://rickandmortyapi.com/api/episode/27",
                  "https://rickandmortyapi.com/api/episode/28",
                  "https://rickandmortyapi.com/api/episode/29",
                  "https://rickandmortyapi.com/api/episode/30",
                  "https://rickandmortyapi.com/api/episode/31"
              ],
              "url": "https://rickandmortyapi.com/api/character/1",
              "created": "2017-11-04T18:48:46.250Z"
          },
          {
              "id": 8,
              "name": "Adjudicator Rick",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/8",
              "created": "2017-11-04T20:03:34.737Z"
          },
          {
              "id": 15,
              "name": "Alien Rick",
              "status": "unknown",
              "species": "Alien",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10"
              ],
              "url": "https://rickandmortyapi.com/api/character/15",
              "created": "2017-11-04T20:56:13.215Z"
          },
          {
              "id": 19,
              "name": "Antenna Rick",
              "status": "unknown",
              "species": "Human",
              "type": "Human with antennae",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "unknown",
                  "url": ""
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10"
              ],
              "url": "https://rickandmortyapi.com/api/character/19",
              "created": "2017-11-04T22:28:13.756Z"
          },
          {
              "id": 22,
              "name": "Aqua Rick",
              "status": "unknown",
              "species": "Humanoid",
              "type": "Fish-Person",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10",
                  "https://rickandmortyapi.com/api/episode/22",
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/22",
              "created": "2017-11-04T22:41:07.171Z"
          },
          {
              "id": 48,
              "name": "Black Rick",
              "status": "Alive",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/22",
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/48",
              "created": "2017-11-05T11:15:26.044Z"
          },
          {
              "id": 56,
              "name": "Bootleg Portal Chemist Rick",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/56",
              "created": "2017-11-05T11:34:16.447Z"
          },
          {
              "id": 69,
              "name": "Commander Rick",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/22"
              ],
              "url": "https://rickandmortyapi.com/api/character/69",
              "created": "2017-11-30T11:28:06.461Z"
          },
          {
              "id": 72,
              "name": "Cool Rick",
              "status": "Alive",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "Earth (K-83)",
                  "url": "https://rickandmortyapi.com/api/location/26"
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/72.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/72",
              "created": "2017-11-30T11:41:11.542Z"
          },
          {
              "id": 74,
              "name": "Cop Rick",
              "status": "Alive",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/74",
              "created": "2017-11-30T11:48:18.950Z"
          },
          {
              "id": 78,
              "name": "Cowboy Rick",
              "status": "Alive",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10",
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/78",
              "created": "2017-11-30T14:15:18.347Z"
          },
          {
              "id": 82,
              "name": "Cronenberg Rick",
              "status": "unknown",
              "species": "Cronenberg",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "Cronenberg Earth",
                  "url": "https://rickandmortyapi.com/api/location/12"
              },
              "location": {
                  "name": "Earth (C-137)",
                  "url": "https://rickandmortyapi.com/api/location/1"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/6",
                  "https://rickandmortyapi.com/api/episode/10"
              ],
              "url": "https://rickandmortyapi.com/api/character/82",
              "created": "2017-11-30T14:28:54.596Z"
          },
          {
              "id": 86,
              "name": "Cyclops Rick",
              "status": "Dead",
              "species": "Humanoid",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10",
                  "https://rickandmortyapi.com/api/episode/22",
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/86",
              "created": "2017-11-30T20:53:10.382Z"
          },
          {
              "id": 103,
              "name": "Doofus Rick",
              "status": "unknown",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "Earth (J19ζ7)",
                  "url": "https://rickandmortyapi.com/api/location/31"
              },
              "location": {
                  "name": "Earth (Replacement Dimension)",
                  "url": "https://rickandmortyapi.com/api/location/20"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10",
                  "https://rickandmortyapi.com/api/episode/22"
              ],
              "url": "https://rickandmortyapi.com/api/character/103",
              "created": "2017-12-01T12:29:27.984Z"
          },
          {
              "id": 119,
              "name": "Evil Rick",
              "status": "Dead",
              "species": "Humanoid",
              "type": "Robot",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10"
              ],
              "url": "https://rickandmortyapi.com/api/character/119",
              "created": "2017-12-26T16:17:16.472Z"
          },
          {
              "id": 135,
              "name": "Garment District Rick",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/135.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/135",
              "created": "2017-12-26T20:51:43.614Z"
          },
          {
              "id": 164,
              "name": "Insurance Rick",
              "status": "unknown",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10"
              ],
              "url": "https://rickandmortyapi.com/api/character/164",
              "created": "2017-12-29T17:03:08.645Z"
          },
          {
              "id": 165,
              "name": "Investigator Rick",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/165",
              "created": "2017-12-29T17:05:15.514Z"
          },
          {
              "id": 187,
              "name": "Juggling Rick",
              "status": "unknown",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/187.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/187",
              "created": "2017-12-29T18:59:47.440Z"
          },
          {
              "id": 215,
              "name": "Maximums Rickimus",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                  "name": "unknown",
                  "url": ""
              },
              "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
              "episode": [
                  "https://rickandmortyapi.com/api/episode/10",
                  "https://rickandmortyapi.com/api/episode/22"
              ],
              "url": "https://rickandmortyapi.com/api/character/215",
              "created": "2017-12-30T14:27:55.489Z"
          }
      ]
  }
  });
  */
}

/***/ }),

/***/ "./services/http/index.js":
/*!********************************!*\
  !*** ./services/http/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create());

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rakrawat/workspace/my-toons/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map