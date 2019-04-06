/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Fetch =\n/*#__PURE__*/\nfunction () {\n  function Fetch() {\n    _classCallCheck(this, Fetch);\n\n    this.cityID;\n  }\n\n  _createClass(Fetch, [{\n    key: \"getCityID\",\n    value: function getCityID(city) {\n      var _this = this;\n\n      return new Promise(function (resolve, rejected) {\n        fetch(\"https://developers.zomato.com/api/v2.1/cities?q=\".concat(city), {\n          headers: {\n            Accept: \"application/json\",\n            \"User-Key\": \"9bf30724352ee07c0f9fb3c65579d759\"\n          }\n        }).then(function (resp) {\n          return resp.json();\n        }).then(function (resp) {\n          if (resp.location_suggestions.length > 0) {\n            _this.cityID = resp.location_suggestions[0].id;\n            resolve();\n          } else {\n            var info = document.querySelector('.info');\n            info.style.display = \"block\";\n            setTimeout(function () {\n              info.style.display = \"none\";\n            }, 1500);\n            rejected(\"wystapil blad\");\n          }\n        });\n      });\n    }\n  }, {\n    key: \"getRestaurantsByCityID\",\n    value: function getRestaurantsByCityID(sort, order) {\n      fetch(\"https://developers.zomato.com/api/v2.1/search?entity_id=\".concat(this.cityID, \"&entity_type=city&sort=\").concat(sort, \"&order=\").concat(order), {\n        headers: {\n          Accept: \"application/json\",\n          \"User-Key\": \"9bf30724352ee07c0f9fb3c65579d759\"\n        }\n      }).then(function (resp) {\n        return resp.json();\n      }).then(function (resp) {\n        document.querySelector('#results').innerHTML = \"\";\n        resp.restaurants.forEach(function (restaurant) {\n          var data = document.createElement('div');\n          data.className = \"data\";\n          var box = document.createElement('div');\n          box.className = \"box\";\n          var phot = document.createElement('div');\n          phot.className = \"photo\";\n          var a = document.createElement('a');\n          var color;\n          var name = restaurant.restaurant.name;\n          var photo = restaurant.restaurant.thumb;\n          var opinion = restaurant.restaurant.user_rating.aggregate_rating;\n          var price = restaurant.restaurant.average_cost_for_two;\n          var votes = restaurant.restaurant.user_rating.votes;\n          var currency = restaurant.restaurant.currency;\n          var link = restaurant.restaurant.url;\n\n          if (opinion < 3) {\n            color = \"rgb(241, 23, 23)\";\n          } else if (opinion >= 3 && opinion < 4) {\n            color = \"rgb(247, 171, 30)\";\n          } else {\n            color = \"rgb(12, 168, 12)\";\n          }\n\n          opinion += \"/5\";\n\n          if (votes == 0) {\n            opinion = \"Unknown\";\n            color = \"black\";\n          }\n\n          data.innerHTML = \"<span class=\\\"logotext\\\">\".concat(name, \"</span> <br/>  <br/>  Average cost for two: <b>\").concat(price).concat(currency, \"</b> <br/> Rating: <span style=\\\"color:\").concat(color, \"\\\"><b> \").concat(opinion, \" </b></span>  (\").concat(votes, \")\");\n          photo ? phot.style.backgroundImage = \"url(\\\"\".concat(photo, \"\\\")\") : phot.style.backgroundImage = \"url('blankk.png')\";\n          a.href = link;\n          a.target = \"_blank\";\n          a.appendChild(phot);\n          box.appendChild(a);\n          box.appendChild(data);\n          document.querySelector('#results').appendChild(box);\n        });\n        document.querySelector('.searchLoader').style.display = \"none\";\n        var footer = document.querySelector('.footer');\n        footer.style.position = \"relative\";\n        window.scrollTo({\n          top: window.screen.height * 0.8,\n          behavior: 'smooth'\n        });\n      });\n    }\n  }]);\n\n  return Fetch;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fetch);\n\n//# sourceURL=webpack:///./src/fetch.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/fetch.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n\n\nwindow.addEventListener('load', function () {\n  document.querySelector('.loader').style.display = \"none\";\n});\nvar search = new _search_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar fetch = new _fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.querySelector('#button').addEventListener('click', function () {\n  document.querySelector('.searchLoader').style.display = \"block\";\n  fetch.getCityID(search.getData()[0]).then(function (res) {\n    return fetch.getRestaurantsByCityID(search.getData()[1], search.getData()[2]);\n  }).catch(function (err) {\n    document.querySelector('.searchLoader').style.display = \"none\";\n  });\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Search =\n/*#__PURE__*/\nfunction () {\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.city;\n    this.sort;\n    this.order;\n  }\n\n  _createClass(Search, [{\n    key: \"getData\",\n    value: function getData() {\n      this.city = document.querySelector('#city').value;\n      var s = document.querySelector('#sort').value;\n      s == \"Price\" ? this.sort = \"cost\" : this.sort = \"rating\";\n      var o = document.querySelector('#order').value;\n      o == \"Low to high\" ? this.order = \"asc\" : this.order = \"desc\";\n      var tab = [this.city, this.sort, this.order];\n      return tab;\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ })

/******/ });