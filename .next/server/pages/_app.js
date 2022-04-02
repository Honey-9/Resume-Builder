module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/tailwindcss/tailwind.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shared_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/theme */ \"./shared/theme.js\");\n/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/userActions */ \"./redux/actions/userActions.js\");\n/* harmony import */ var _redux_actionTypes_userActionTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actionTypes/userActionTypes */ \"./redux/actionTypes/userActionTypes.js\");\n\nvar _jsxFileName = \"/home/honey/Documents/Resume builder/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n // MUI Setup\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_4__[\"useStore\"])(pageProps.initialReduxState);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"ThemeProvider\"], {\n      theme: _shared_theme__WEBPACK_IMPORTED_MODULE_10__[\"theme\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"StylesProvider\"], {\n        injectFirst: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 3\n  }, this);\n}\n\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3hDLFFBQU1DLEtBQUssR0FBR0MsNkRBQVEsQ0FBQ0YsU0FBUyxDQUFDRyxpQkFBWCxDQUF0QjtBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLE1BQU07QUFDckI7QUFDQSxVQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7O0FBQ0EsUUFBSUYsU0FBSixFQUFlO0FBQ2RBLGVBQVMsQ0FBQ0csYUFBVixDQUF3QkMsV0FBeEIsQ0FBb0NKLFNBQXBDO0FBQ0E7QUFDRCxHQU5ELEVBTUcsRUFOSDtBQVFBLHNCQUNDLHFFQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFTCxLQUFqQjtBQUFBLDJCQUNDLHFFQUFDLHNFQUFEO0FBQWUsV0FBSyxFQUFFVSxvREFBdEI7QUFBQSw2QkFDQyxxRUFBQyx1RUFBRDtBQUFnQixtQkFBVyxNQUEzQjtBQUFBLGdDQUVDLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFHQyxxRUFBQyxTQUFELG9CQUFlWCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVdBOztBQUVERixLQUFLLENBQUNjLFNBQU4sR0FBa0I7QUFDakJiLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEaEI7QUFFakJmLFdBQVMsRUFBRWEsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFGWCxDQUFsQjtBQUtlakIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuXG4vLyBNVUkgU2V0dXBcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3NoYXJlZC90aGVtZSc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuaW1wb3J0IHsgTE9HT1VUIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uVHlwZXMvdXNlckFjdGlvblR5cGVzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcblxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuXHRcdGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcblx0XHRpZiAoanNzU3R5bGVzKSB7XG5cdFx0XHRqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHQ8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XG5cdFx0XHRcdFx0ey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuXHRcdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxuXHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdFx0PC9TdHlsZXNQcm92aWRlcj5cblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cblx0XHQ8L1Byb3ZpZGVyPlxuXHQpO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG5cdENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG5cdHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actionTypes/resumeActionTypes.js":
/*!************************************************!*\
  !*** ./redux/actionTypes/resumeActionTypes.js ***!
  \************************************************/
/*! exports provided: ADD_PERSONAL_DATA, ADD_EXPERIENCE_DATA, ADD_EDUCATION_DATA, ADD_EXTRAS_DATA, ADD_PHOTO_DATA, ADD_SAMPLE_EXPERIENCE_DATA, EDIT_SINGLE_EXPERIENCE_DATA, DELETE_SINGLE_EXPERIENCE_DATA, ADD_SAMPLE_EDUCATION_DATA, EDIT_SINGLE_EDUCATION_DATA, DELETE_SINGLE_EDUCATION_DATA, ADD_SAMPLE_EXTRA_DATA, EDIT_SINGLE_EXTRA_DATA, DELETE_SINGLE_EXTRA_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PERSONAL_DATA\", function() { return ADD_PERSONAL_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_EXPERIENCE_DATA\", function() { return ADD_EXPERIENCE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_EDUCATION_DATA\", function() { return ADD_EDUCATION_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_EXTRAS_DATA\", function() { return ADD_EXTRAS_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PHOTO_DATA\", function() { return ADD_PHOTO_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_SAMPLE_EXPERIENCE_DATA\", function() { return ADD_SAMPLE_EXPERIENCE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_SINGLE_EXPERIENCE_DATA\", function() { return EDIT_SINGLE_EXPERIENCE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_SINGLE_EXPERIENCE_DATA\", function() { return DELETE_SINGLE_EXPERIENCE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_SAMPLE_EDUCATION_DATA\", function() { return ADD_SAMPLE_EDUCATION_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_SINGLE_EDUCATION_DATA\", function() { return EDIT_SINGLE_EDUCATION_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_SINGLE_EDUCATION_DATA\", function() { return DELETE_SINGLE_EDUCATION_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_SAMPLE_EXTRA_DATA\", function() { return ADD_SAMPLE_EXTRA_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_SINGLE_EXTRA_DATA\", function() { return EDIT_SINGLE_EXTRA_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_SINGLE_EXTRA_DATA\", function() { return DELETE_SINGLE_EXTRA_DATA; });\nconst ADD_PERSONAL_DATA = 'ADD_PERSONAL_DATA';\nconst ADD_EXPERIENCE_DATA = 'ADD_EXPERIENCE_DATA';\nconst ADD_EDUCATION_DATA = 'ADD_EDUCATION_DATA';\nconst ADD_EXTRAS_DATA = 'ADD_EXTRAS_DATA';\nconst ADD_PHOTO_DATA = 'ADD_PHOTO_DATA';\nconst ADD_SAMPLE_EXPERIENCE_DATA = 'ADD_SAMPLE_EXPERIENCE_DATA';\nconst EDIT_SINGLE_EXPERIENCE_DATA = 'EDIT_SINGAL_EXPERIENCE_DATA';\nconst DELETE_SINGLE_EXPERIENCE_DATA = 'DELETE_SINGAL_EXPERIENCE_DATA';\nconst ADD_SAMPLE_EDUCATION_DATA = 'ADD_SAMPLE_EDUCATION_DATA';\nconst EDIT_SINGLE_EDUCATION_DATA = 'EDIT_SINGAL_EDUCATION_DATA';\nconst DELETE_SINGLE_EDUCATION_DATA = 'DELETE_SINGAL_EDUCATION_DATA';\nconst ADD_SAMPLE_EXTRA_DATA = 'ADD_SAMPLE_EXTRA_DATA';\nconst EDIT_SINGLE_EXTRA_DATA = 'EDIT_SINGAL_EXTRA_DATA';\nconst DELETE_SINGLE_EXTRA_DATA = 'DELETE_SINGAL_EXTRA_DATA';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25UeXBlcy9yZXN1bWVBY3Rpb25UeXBlcy5qcz9lYzNjIl0sIm5hbWVzIjpbIkFERF9QRVJTT05BTF9EQVRBIiwiQUREX0VYUEVSSUVOQ0VfREFUQSIsIkFERF9FRFVDQVRJT05fREFUQSIsIkFERF9FWFRSQVNfREFUQSIsIkFERF9QSE9UT19EQVRBIiwiQUREX1NBTVBMRV9FWFBFUklFTkNFX0RBVEEiLCJFRElUX1NJTkdMRV9FWFBFUklFTkNFX0RBVEEiLCJERUxFVEVfU0lOR0xFX0VYUEVSSUVOQ0VfREFUQSIsIkFERF9TQU1QTEVfRURVQ0FUSU9OX0RBVEEiLCJFRElUX1NJTkdMRV9FRFVDQVRJT05fREFUQSIsIkRFTEVURV9TSU5HTEVfRURVQ0FUSU9OX0RBVEEiLCJBRERfU0FNUExFX0VYVFJBX0RBVEEiLCJFRElUX1NJTkdMRV9FWFRSQV9EQVRBIiwiREVMRVRFX1NJTkdMRV9FWFRSQV9EQVRBIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDZCQUE2QixHQUFHLCtCQUF0QztBQUVBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDRCQUE0QixHQUFHLDhCQUFyQztBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQyIsImZpbGUiOiIuL3JlZHV4L2FjdGlvblR5cGVzL3Jlc3VtZUFjdGlvblR5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9QRVJTT05BTF9EQVRBID0gJ0FERF9QRVJTT05BTF9EQVRBJztcbmV4cG9ydCBjb25zdCBBRERfRVhQRVJJRU5DRV9EQVRBID0gJ0FERF9FWFBFUklFTkNFX0RBVEEnO1xuZXhwb3J0IGNvbnN0IEFERF9FRFVDQVRJT05fREFUQSA9ICdBRERfRURVQ0FUSU9OX0RBVEEnO1xuZXhwb3J0IGNvbnN0IEFERF9FWFRSQVNfREFUQSA9ICdBRERfRVhUUkFTX0RBVEEnO1xuZXhwb3J0IGNvbnN0IEFERF9QSE9UT19EQVRBID0gJ0FERF9QSE9UT19EQVRBJztcblxuZXhwb3J0IGNvbnN0IEFERF9TQU1QTEVfRVhQRVJJRU5DRV9EQVRBID0gJ0FERF9TQU1QTEVfRVhQRVJJRU5DRV9EQVRBJztcbmV4cG9ydCBjb25zdCBFRElUX1NJTkdMRV9FWFBFUklFTkNFX0RBVEEgPSAnRURJVF9TSU5HQUxfRVhQRVJJRU5DRV9EQVRBJztcbmV4cG9ydCBjb25zdCBERUxFVEVfU0lOR0xFX0VYUEVSSUVOQ0VfREFUQSA9ICdERUxFVEVfU0lOR0FMX0VYUEVSSUVOQ0VfREFUQSc7XG5cbmV4cG9ydCBjb25zdCBBRERfU0FNUExFX0VEVUNBVElPTl9EQVRBID0gJ0FERF9TQU1QTEVfRURVQ0FUSU9OX0RBVEEnO1xuZXhwb3J0IGNvbnN0IEVESVRfU0lOR0xFX0VEVUNBVElPTl9EQVRBID0gJ0VESVRfU0lOR0FMX0VEVUNBVElPTl9EQVRBJztcbmV4cG9ydCBjb25zdCBERUxFVEVfU0lOR0xFX0VEVUNBVElPTl9EQVRBID0gJ0RFTEVURV9TSU5HQUxfRURVQ0FUSU9OX0RBVEEnO1xuXG5leHBvcnQgY29uc3QgQUREX1NBTVBMRV9FWFRSQV9EQVRBID0gJ0FERF9TQU1QTEVfRVhUUkFfREFUQSc7XG5leHBvcnQgY29uc3QgRURJVF9TSU5HTEVfRVhUUkFfREFUQSA9ICdFRElUX1NJTkdBTF9FWFRSQV9EQVRBJztcbmV4cG9ydCBjb25zdCBERUxFVEVfU0lOR0xFX0VYVFJBX0RBVEEgPSAnREVMRVRFX1NJTkdBTF9FWFRSQV9EQVRBJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actionTypes/resumeActionTypes.js\n");

/***/ }),

/***/ "./redux/actionTypes/userActionTypes.js":
/*!**********************************************!*\
  !*** ./redux/actionTypes/userActionTypes.js ***!
  \**********************************************/
/*! exports provided: LOGIN, LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT\", function() { return LOGOUT; });\nconst LOGIN = 'LOGIN';\nconst LOGOUT = 'LOGOUT';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25UeXBlcy91c2VyQWN0aW9uVHlwZXMuanM/YmJjMSJdLCJuYW1lcyI6WyJMT0dJTiIsIkxPR09VVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsS0FBSyxHQUFHLE9BQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvblR5cGVzL3VzZXJBY3Rpb25UeXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actionTypes/userActionTypes.js\n");

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _actionTypes_userActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/userActionTypes */ \"./redux/actionTypes/userActionTypes.js\");\n\nconst login = () => dispatch => {\n  dispatch({\n    type: _actionTypes_userActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN\"]\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzP2I4NjEiXSwibmFtZXMiOlsibG9naW4iLCJkaXNwYXRjaCIsInR5cGUiLCJMT0dJTiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsTUFBT0MsUUFBRCxJQUFjO0FBQ3hDQSxVQUFRLENBQUM7QUFBQ0MsUUFBSSxFQUFFQyxrRUFBS0E7QUFBWixHQUFELENBQVI7QUFDQSxDQUZNIiwiZmlsZSI6Ii4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPR0lOIH0gZnJvbSAnLi4vYWN0aW9uVHlwZXMvdXNlckFjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHt0eXBlOiBMT0dJTn0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/userActions.js\n");

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_resumeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/resumeReducer */ \"./redux/reducers/resumeReducer.js\");\n/* harmony import */ var _reducers_sectionReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/sectionReducer */ \"./redux/reducers/sectionReducer.js\");\n/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/userReducer */ \"./redux/reducers/userReducer.js\");\n\n\n\n // COMBINED REDUCERS\n\nconst reducers = {\n  login: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__[\"loginReducer\"],\n  resume: _reducers_resumeReducer__WEBPACK_IMPORTED_MODULE_1__[\"resumeReducer\"],\n  sections: _reducers_sectionReducer__WEBPACK_IMPORTED_MODULE_2__[\"sectionReducer\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(reducers));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy5qcz8wODIyIl0sIm5hbWVzIjpbInJlZHVjZXJzIiwibG9naW4iLCJsb2dpblJlZHVjZXIiLCJyZXN1bWUiLCJyZXN1bWVSZWR1Y2VyIiwic2VjdGlvbnMiLCJzZWN0aW9uUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHO0FBQ2hCQyxPQUFLLEVBQUVDLGtFQURTO0FBRWhCQyxRQUFNLEVBQUVDLHFFQUZRO0FBR2hCQyxVQUFRLEVBQUVDLHVFQUFjQTtBQUhSLENBQWpCO0FBTWVDLDRIQUFlLENBQUNQLFFBQUQsQ0FBOUIiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJlc3VtZVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL3Jlc3VtZVJlZHVjZXInO1xuaW1wb3J0IHsgc2VjdGlvblJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL3NlY3Rpb25SZWR1Y2VyJztcbmltcG9ydCB7IGxvZ2luUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvdXNlclJlZHVjZXInO1xuXG4vLyBDT01CSU5FRCBSRURVQ0VSU1xuY29uc3QgcmVkdWNlcnMgPSB7XG5cdGxvZ2luOiBsb2dpblJlZHVjZXIsXG5cdHJlc3VtZTogcmVzdW1lUmVkdWNlcixcblx0c2VjdGlvbnM6IHNlY3Rpb25SZWR1Y2VyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers.js\n");

/***/ }),

/***/ "./redux/reducers/resumeReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/resumeReducer.js ***!
  \*****************************************/
/*! exports provided: resumeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resumeReducer\", function() { return resumeReducer; });\n/* harmony import */ var _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/resumeActionTypes */ \"./redux/actionTypes/resumeActionTypes.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)\n\nconst initialState = {\n  personalData: {\n    name: 'Your Name',\n    designation: 'Senior Product Designer',\n    email: 'youremail@gmail.com',\n    phoneNumber: '+91 1234567890',\n    country: 'Your Country'\n  },\n  photo: {\n    src: '/images/avatar.png'\n  },\n  education: [{\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    institution: `St. Karen's Secondary School`,\n    major: 'Bachelor European in Graphic Design',\n    start: '2008',\n    end: '2009',\n    country: 'Bagnolet'\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    institution: `St. Karen's Secondary School`,\n    major: 'BTS Communication Visuelle option Multimédia',\n    start: '2009',\n    end: '2010',\n    country: 'Bagnolet'\n  }],\n  experiences: [{\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    designation: 'Senior UI/UX Product Designer',\n    company: 'Google',\n    description: 'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',\n    start: 'Aug 2000',\n    end: 'July 2004',\n    years: '4',\n    country: 'London'\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    designation: 'Full Stack Developer',\n    company: 'Paypal',\n    description: 'Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.',\n    start: 'July 2004',\n    end: 'Jan 2010',\n    years: '6',\n    country: 'Paris'\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    designation: 'Cloud Developer',\n    company: 'Paypal',\n    description: 'Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.',\n    start: 'Jan 2010',\n    end: 'May 2017',\n    years: '7',\n    country: 'San Francisco'\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    designation: 'DevOps Developer',\n    company: 'Google',\n    description: 'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate. with a lean design process: research, design, test, and iterate.',\n    start: 'May 2017',\n    end: 'Jan 2020',\n    years: '3',\n    country: 'United States Of America'\n  }],\n  extras: [{\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    title: 'Industry Knowledge',\n    type: 'NEW_LINE',\n    items: ['Product Design', 'User Interface', 'User Experience', 'Interaction Design', 'Wireframing', 'Rapid Prototyping', 'Design Research']\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    title: 'Tools and Technologies',\n    type: 'COMMA',\n    items: ['Figma', 'Sketch', 'Protopie', 'Framer', 'Invision', 'Abstract', 'Zeplin', 'Google Analytics', 'Amplitude', 'Fullstory', 'Figma']\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    title: 'Other Skills',\n    type: 'COMMA',\n    items: ['HTML', 'CSS', 'jQuery']\n  }, {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    title: 'Social',\n    type: 'NEW_LINE',\n    items: ['yoursite.com', 'linkedin.com/in/yourname', 'dribbble.com/yourname']\n  }]\n}; // const emptyInitialState = {\n// \tpersonalData: {},\n// \tphoto: {},\n// \teducation: [],\n// \texperiences: [],\n// \textras: [],\n// };\n\nconst resumeReducer = (state = {\n  data: initialState\n}, action) => {\n  switch (action.type) {\n    default:\n      return state;\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_PERSONAL_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          personalData: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_EXPERIENCE_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          experiences: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_EDUCATION_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          education: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_EXTRAS_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          extras: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_PHOTO_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          photo: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_SAMPLE_EXPERIENCE_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          experiences: [action.payload, ...state.data.experiences]\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"EDIT_SINGLE_EXPERIENCE_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          experiences: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_SINGLE_EXPERIENCE_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          experiences: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_SAMPLE_EDUCATION_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          education: [action.payload, ...state.data.education]\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"EDIT_SINGLE_EDUCATION_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          education: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_SINGLE_EDUCATION_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          education: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_SAMPLE_EXTRA_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          extras: [action.payload, ...state.data.extras]\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"EDIT_SINGLE_EXTRA_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          extras: action.payload\n        })\n      };\n\n    case _actionTypes_resumeActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_SINGLE_EXTRA_DATA\"]:\n      return {\n        data: _objectSpread(_objectSpread({}, state.data), {}, {\n          extras: action.payload\n        })\n      };\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9yZXN1bWVSZWR1Y2VyLmpzP2Q0MmIiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicGVyc29uYWxEYXRhIiwibmFtZSIsImRlc2lnbmF0aW9uIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImNvdW50cnkiLCJwaG90byIsInNyYyIsImVkdWNhdGlvbiIsImlkIiwidXVpZHY0IiwiaW5zdGl0dXRpb24iLCJtYWpvciIsInN0YXJ0IiwiZW5kIiwiZXhwZXJpZW5jZXMiLCJjb21wYW55IiwiZGVzY3JpcHRpb24iLCJ5ZWFycyIsImV4dHJhcyIsInRpdGxlIiwidHlwZSIsIml0ZW1zIiwicmVzdW1lUmVkdWNlciIsInN0YXRlIiwiZGF0YSIsImFjdGlvbiIsIkFERF9QRVJTT05BTF9EQVRBIiwicGF5bG9hZCIsIkFERF9FWFBFUklFTkNFX0RBVEEiLCJBRERfRURVQ0FUSU9OX0RBVEEiLCJBRERfRVhUUkFTX0RBVEEiLCJBRERfUEhPVE9fREFUQSIsIkFERF9TQU1QTEVfRVhQRVJJRU5DRV9EQVRBIiwiRURJVF9TSU5HTEVfRVhQRVJJRU5DRV9EQVRBIiwiREVMRVRFX1NJTkdMRV9FWFBFUklFTkNFX0RBVEEiLCJBRERfU0FNUExFX0VEVUNBVElPTl9EQVRBIiwiRURJVF9TSU5HTEVfRURVQ0FUSU9OX0RBVEEiLCJERUxFVEVfU0lOR0xFX0VEVUNBVElPTl9EQVRBIiwiQUREX1NBTVBMRV9FWFRSQV9EQVRBIiwiRURJVF9TSU5HTEVfRVhUUkFfREFUQSIsIkRFTEVURV9TSU5HTEVfRVhUUkFfREFUQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtDQW1CQTs7QUFDQSxNQUFNQSxZQUFZLEdBQUc7QUFDcEJDLGNBQVksRUFBRTtBQUNiQyxRQUFJLEVBQUUsV0FETztBQUViQyxlQUFXLEVBQUUseUJBRkE7QUFHYkMsU0FBSyxFQUFFLHFCQUhNO0FBSWJDLGVBQVcsRUFBRSxnQkFKQTtBQUtiQyxXQUFPLEVB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RCxLQUFLLENBQUNDLElBRE47QUFFSE4sZ0JBQU0sRUFBRU8sTUFBTSxDQUFDRTtBQUZaO0FBREUsT0FBUDtBQS9GRjtBQXNHQSxDQXZHTSIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL3Jlc3VtZVJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBRERfRURVQ0FUSU9OX0RBVEEsXG5cdEFERF9FWFBFUklFTkNFX0RBVEEsXG5cdEFERF9FWFRSQVNfREFUQSxcblx0QUREX1BFUlNPTkFMX0RBVEEsXG5cdEFERF9QSE9UT19EQVRBLFxuXHRBRERfU0FNUExFX0VYUEVSSUVOQ0VfREFUQSxcblx0RURJVF9TSU5HTEVfRVhQRVJJRU5DRV9EQVRBLFxuXHRERUxFVEVfU0lOR0xFX0VYUEVSSUVOQ0VfREFUQSxcblx0QUREX1NBTVBMRV9FRFVDQVRJT05fREFUQSxcblx0RURJVF9TSU5HTEVfRURVQ0FUSU9OX0RBVEEsXG5cdERFTEVURV9TSU5HTEVfRURVQ0FUSU9OX0RBVEEsXG5cdEFERF9TQU1QTEVfRVhUUkFfREFUQSxcblx0RURJVF9TSU5HTEVfRVhUUkFfREFUQSxcblx0REVMRVRFX1NJTkdMRV9FWFRSQV9EQVRBLFxufSBmcm9tICcuLi9hY3Rpb25UeXBlcy9yZXN1bWVBY3Rpb25UeXBlcyc7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG4vLyBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMpXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHBlcnNvbmFsRGF0YToge1xuXHRcdG5hbWU6ICdZb3VyIE5hbWUnLFxuXHRcdGRlc2lnbmF0aW9uOiAnU2VuaW9yIFByb2R1Y3QgRGVzaWduZXInLFxuXHRcdGVtYWlsOiAneW91cmVtYWlsQGdtYWlsLmNvbScsXG5cdFx0cGhvbmVOdW1iZXI6ICcrOTEgMTIzNDU2Nzg5MCcsXG5cdFx0Y291bnRyeTogJ1lvdXIgQ291bnRyeScsXG5cdH0sXG5cdHBob3RvOiB7XG5cdFx0c3JjOiAnL2ltYWdlcy9hdmF0YXIucG5nJyxcblx0fSxcblx0ZWR1Y2F0aW9uOiBbXG5cdFx0e1xuXHRcdFx0aWQ6IHV1aWR2NCgpLFxuXHRcdFx0aW5zdGl0dXRpb246IGBTdC4gS2FyZW4ncyBTZWNvbmRhcnkgU2Nob29sYCxcblx0XHRcdG1ham9yOiAnQmFjaGVsb3IgRXVyb3BlYW4gaW4gR3JhcGhpYyBEZXNpZ24nLFxuXHRcdFx0c3RhcnQ6ICcyMDA4Jyxcblx0XHRcdGVuZDogJzIwMDknLFxuXHRcdFx0Y291bnRyeTogJ0JhZ25vbGV0Jyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiB1dWlkdjQoKSxcblx0XHRcdGluc3RpdHV0aW9uOiBgU3QuIEthcmVuJ3MgU2Vjb25kYXJ5IFNjaG9vbGAsXG5cdFx0XHRtYWpvcjogJ0JUUyBDb21tdW5pY2F0aW9uIFZpc3VlbGxlIG9wdGlvbiBNdWx0aW3DqWRpYScsXG5cdFx0XHRzdGFydDogJzIwMDknLFxuXHRcdFx0ZW5kOiAnMjAxMCcsXG5cdFx0XHRjb3VudHJ5OiAnQmFnbm9sZXQnLFxuXHRcdH0sXG5cdF0sXG5cdGV4cGVyaWVuY2VzOiBbXG5cdFx0e1xuXHRcdFx0aWQ6IHV1aWR2NCgpLFxuXHRcdFx0ZGVzaWduYXRpb246ICdTZW5pb3IgVUkvVVggUHJvZHVjdCBEZXNpZ25lcicsXG5cdFx0XHRjb21wYW55OiAnR29vZ2xlJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHQnRGlyZWN0bHkgY29sbGFib3JhdGVkIHdpdGggQ0VPIGFuZCBQcm9kdWN0IHRlYW0gdG8gcHJvdG90eXBlLCBkZXNpZ24gYW5kIGRlbGl2ZXIgdGhlIFVJIGFuZCBVWCBleHBlcmllbmNlIHdpdGggYSBsZWFuIGRlc2lnbiBwcm9jZXNzOiByZXNlYXJjaCwgZGVzaWduLCB0ZXN0LCBhbmQgaXRlcmF0ZS4nLFxuXHRcdFx0c3RhcnQ6ICdBdWcgMjAwMCcsXG5cdFx0XHRlbmQ6ICdKdWx5IDIwMDQnLFxuXHRcdFx0eWVhcnM6ICc0Jyxcblx0XHRcdGNvdW50cnk6ICdMb25kb24nLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IHV1aWR2NCgpLFxuXHRcdFx0ZGVzaWduYXRpb246ICdGdWxsIFN0YWNrIERldmVsb3BlcicsXG5cdFx0XHRjb21wYW55OiAnUGF5cGFsJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHQnTGVhZCB0aGUgVUkgZGVzaWduIHdpdGggdGhlIGFjY291bnRhYmlsaXR5IG9mIHRoZSBkZXNpZ24gc3lzdGVtLCBjb2xsYWJvcmF0ZWQgd2l0aCBwcm9kdWN0IGFuZCBkZXZlbG9wbWVudCB0ZWFtcyBvbiBjb3JlIHByb2plY3RzIHRvIGltcHJvdmUgcHJvZHVjdCBpbnRlcmZhY2VzIGFuZCBleHBlcmllbmNlcy4nLFxuXHRcdFx0c3RhcnQ6ICdKdWx5IDIwMDQnLFxuXHRcdFx0ZW5kOiAnSmFuIDIwMTAnLFxuXHRcdFx0eWVhcnM6ICc2Jyxcblx0XHRcdGNvdW50cnk6ICdQYXJpcycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogdXVpZHY0KCksXG5cdFx0XHRkZXNpZ25hdGlvbjogJ0Nsb3VkIERldmVsb3BlcicsXG5cdFx0XHRjb21wYW55OiAnUGF5cGFsJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHQnTGVhZCB0aGUgVUkgZGVzaWduIHdpdGggdGhlIGFjY291bnRhYmlsaXR5IG9mIHRoZSBkZXNpZ24gc3lzdGVtLCBjb2xsYWJvcmF0ZWQgd2l0aCBwcm9kdWN0IGFuZCBkZXZlbG9wbWVudCB0ZWFtcyBvbiBjb3JlIHByb2plY3RzIHRvIGltcHJvdmUgcHJvZHVjdCBpbnRlcmZhY2VzIGFuZCBleHBlcmllbmNlcy4nLFxuXHRcdFx0c3RhcnQ6ICdKYW4gMjAxMCcsXG5cdFx0XHRlbmQ6ICdNYXkgMjAxNycsXG5cdFx0XHR5ZWFyczogJzcnLFxuXHRcdFx0Y291bnRyeTogJ1NhbiBGcmFuY2lzY28nLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IHV1aWR2NCgpLFxuXHRcdFx0ZGVzaWduYXRpb246ICdEZXZPcHMgRGV2ZWxvcGVyJyxcblx0XHRcdGNvbXBhbnk6ICdHb29nbGUnLFxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdCdEaXJlY3RseSBjb2xsYWJvcmF0ZWQgd2l0aCBDRU8gYW5kIFByb2R1Y3QgdGVhbSB0byBwcm90b3R5cGUsIGRlc2lnbiBhbmQgZGVsaXZlciB0aGUgVUkgYW5kIFVYIGV4cGVyaWVuY2Ugd2l0aCBhIGxlYW4gZGVzaWduIHByb2Nlc3M6IHJlc2VhcmNoLCBkZXNpZ24sIHRlc3QsIGFuZCBpdGVyYXRlLiB3aXRoIGEgbGVhbiBkZXNpZ24gcHJvY2VzczogcmVzZWFyY2gsIGRlc2lnbiwgdGVzdCwgYW5kIGl0ZXJhdGUuJyxcblx0XHRcdHN0YXJ0OiAnTWF5IDIwMTcnLFxuXHRcdFx0ZW5kOiAnSmFuIDIwMjAnLFxuXHRcdFx0eWVhcnM6ICczJyxcblx0XHRcdGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzIE9mIEFtZXJpY2EnLFxuXHRcdH0sXG5cdF0sXG5cdGV4dHJhczogW1xuXHRcdHtcblx0XHRcdGlkOiB1dWlkdjQoKSxcblx0XHRcdHRpdGxlOiAnSW5kdXN0cnkgS25vd2xlZGdlJyxcblx0XHRcdHR5cGU6ICdORVdfTElORScsXG5cdFx0XHRpdGVtczogW1xuXHRcdFx0XHQnUHJvZHVjdCBEZXNpZ24nLFxuXHRcdFx0XHQnVXNlciBJbnRlcmZhY2UnLFxuXHRcdFx0XHQnVXNlciBFeHBlcmllbmNlJyxcblx0XHRcdFx0J0ludGVyYWN0aW9uIERlc2lnbicsXG5cdFx0XHRcdCdXaXJlZnJhbWluZycsXG5cdFx0XHRcdCdSYXBpZCBQcm90b3R5cGluZycsXG5cdFx0XHRcdCdEZXNpZ24gUmVzZWFyY2gnLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiB1dWlkdjQoKSxcblx0XHRcdHRpdGxlOiAnVG9vbHMgYW5kIFRlY2hub2xvZ2llcycsXG5cdFx0XHR0eXBlOiAnQ09NTUEnLFxuXHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0J0ZpZ21hJyxcblx0XHRcdFx0J1NrZXRjaCcsXG5cdFx0XHRcdCdQcm90b3BpZScsXG5cdFx0XHRcdCdGcmFtZXInLFxuXHRcdFx0XHQnSW52aXNpb24nLFxuXHRcdFx0XHQnQWJzdHJhY3QnLFxuXHRcdFx0XHQnWmVwbGluJyxcblx0XHRcdFx0J0dvb2dsZSBBbmFseXRpY3MnLFxuXHRcdFx0XHQnQW1wbGl0dWRlJyxcblx0XHRcdFx0J0Z1bGxzdG9yeScsXG5cdFx0XHRcdCdGaWdtYScsXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IHV1aWR2NCgpLFxuXHRcdFx0dGl0bGU6ICdPdGhlciBTa2lsbHMnLFxuXHRcdFx0dHlwZTogJ0NPTU1BJyxcblx0XHRcdGl0ZW1zOiBbJ0hUTUwnLCAnQ1NTJywgJ2pRdWVyeSddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IHV1aWR2NCgpLFxuXHRcdFx0dGl0bGU6ICdTb2NpYWwnLFxuXHRcdFx0dHlwZTogJ05FV19MSU5FJyxcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdCd5b3Vyc2l0ZS5jb20nLFxuXHRcdFx0XHQnbGlua2VkaW4uY29tL2luL3lvdXJuYW1lJyxcblx0XHRcdFx0J2RyaWJiYmxlLmNvbS95b3VybmFtZScsXG5cdFx0XHRdLFxuXHRcdH0sXG5cdF0sXG59O1xuXG4vLyBjb25zdCBlbXB0eUluaXRpYWxTdGF0ZSA9IHtcbi8vIFx0cGVyc29uYWxEYXRhOiB7fSxcbi8vIFx0cGhvdG86IHt9LFxuLy8gXHRlZHVjYXRpb246IFtdLFxuLy8gXHRleHBlcmllbmNlczogW10sXG4vLyBcdGV4dHJhczogW10sXG4vLyB9O1xuXG5leHBvcnQgY29uc3QgcmVzdW1lUmVkdWNlciA9IChzdGF0ZSA9IHsgZGF0YTogaW5pdGlhbFN0YXRlIH0sIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRjYXNlIEFERF9QRVJTT05BTF9EQVRBOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0cGVyc29uYWxEYXRhOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfRVhQRVJJRU5DRV9EQVRBOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0ZXhwZXJpZW5jZXM6IGFjdGlvbi5wYXlsb2FkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9FRFVDQVRJT05fREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdGVkdWNhdGlvbjogYWN0aW9uLnBheWxvYWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX0VYVFJBU19EQVRBOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0ZXh0cmFzOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfUEhPVE9fREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdHBob3RvOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfU0FNUExFX0VYUEVSSUVOQ0VfREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdGV4cGVyaWVuY2VzOiBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLmRhdGEuZXhwZXJpZW5jZXNdLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHRjYXNlIEVESVRfU0lOR0xFX0VYUEVSSUVOQ0VfREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdGV4cGVyaWVuY2VzOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBERUxFVEVfU0lOR0xFX0VYUEVSSUVOQ0VfREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdGV4cGVyaWVuY2VzOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfU0FNUExFX0VEVUNBVElPTl9EQVRBOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0ZWR1Y2F0aW9uOiBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLmRhdGEuZWR1Y2F0aW9uXSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBFRElUX1NJTkdMRV9FRFVDQVRJT05fREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdGVkdWNhdGlvbjogYWN0aW9uLnBheWxvYWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgREVMRVRFX1NJTkdMRV9FRFVDQVRJT05fREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdGVkdWNhdGlvbjogYWN0aW9uLnBheWxvYWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX1NBTVBMRV9FWFRSQV9EQVRBOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0ZXh0cmFzOiBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLmRhdGEuZXh0cmFzXSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBFRElUX1NJTkdMRV9FWFRSQV9EQVRBOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0ZXh0cmFzOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSBERUxFVEVfU0lOR0xFX0VYVFJBX0RBVEE6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuZGF0YSxcblx0XHRcdFx0XHRleHRyYXM6IGFjdGlvbi5wYXlsb2FkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/resumeReducer.js\n");

/***/ }),

/***/ "./redux/reducers/sectionReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/sectionReducer.js ***!
  \******************************************/
/*! exports provided: sectionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sectionReducer\", function() { return sectionReducer; });\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Work */ \"@material-ui/icons/Work\");\n/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/School */ \"@material-ui/icons/School\");\n/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Assignment */ \"@material-ui/icons/Assignment\");\n/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst initialState = [{\n  id: '1',\n  title: 'Personal Data',\n  label: 'personal-data',\n  Icon: _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0___default.a\n}, {\n  id: '2',\n  title: 'Upload Photo',\n  label: 'upload-photo',\n  Icon: _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1___default.a\n}, {\n  id: '3',\n  title: 'Work Experience',\n  label: 'work-experience',\n  Icon: _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2___default.a\n}, {\n  id: '4',\n  title: 'Education',\n  label: 'education',\n  Icon: _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_3___default.a\n}, {\n  id: '5',\n  title: 'Extras',\n  label: 'extras',\n  Icon: _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_4___default.a\n}];\nconst sectionReducer = (state = {\n  data: initialState\n}, action) => {\n  switch (action.type) {\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zZWN0aW9uUmVkdWNlci5qcz9lMjY0Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlkIiwidGl0bGUiLCJsYWJlbCIsIkljb24iLCJQZXJzb25JY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJXb3JrSWNvbiIsIlNjaG9vbEljb24iLCJBc3NpZ25tZW50SWNvbiIsInNlY3Rpb25SZWR1Y2VyIiwic3RhdGUiLCJkYXRhIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUNwQjtBQUNDQyxJQUFFLEVBQUUsR0FETDtBQUVDQyxPQUFLLEVBQUUsZUFGUjtBQUdDQyxPQUFLLEVBQUUsZUFIUjtBQUlDQyxNQUFJLEVBQUVDLGdFQUFVQTtBQUpqQixDQURvQixFQU9wQjtBQUNDSixJQUFFLEVBQUUsR0FETDtBQUVDQyxPQUFLLEVBQUUsY0FGUjtBQUdDQyxPQUFLLEVBQUUsY0FIUjtBQUlDQyxNQUFJLEVBQUVFLHVFQUFpQkE7QUFKeEIsQ0FQb0IsRUFhcEI7QUFDQ0wsSUFBRSxFQUFFLEdBREw7QUFFQ0MsT0FBSyxFQUFFLGlCQUZSO0FBR0NDLE9BQUssRUFBRSxpQkFIUjtBQUlDQyxNQUFJLEVBQUVHLDhEQUFRQTtBQUpmLENBYm9CLEVBbUJwQjtBQUNDTixJQUFFLEVBQUUsR0FETDtBQUVDQyxPQUFLLEVBQUUsV0FGUjtBQUdDQyxPQUFLLEVBQUUsV0FIUjtBQUlDQyxNQUFJLEVBQUVJLGdFQUFVQTtBQUpqQixDQW5Cb0IsRUF5QnBCO0FBQ0NQLElBQUUsRUFBRSxHQURMO0FBRUNDLE9BQUssRUFBRSxRQUZSO0FBR0NDLE9BQUssRUFBRSxRQUhSO0FBSUNDLE1BQUksRUFBRUssb0VBQWNBO0FBSnJCLENBekJvQixDQUFyQjtBQWlDTyxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHO0FBQUVDLE1BQUksRUFBRVo7QUFBUixDQUFULEVBQWlDYSxNQUFqQyxLQUE0QztBQUN6RSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQztBQUNDLGFBQU9ILEtBQVA7QUFGRjtBQUlBLENBTE0iLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9zZWN0aW9uUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb24nO1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCBXb3JrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV29yayc7XG5pbXBvcnQgU2Nob29sSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2Nob29sJztcbmltcG9ydCBBc3NpZ25tZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcblx0e1xuXHRcdGlkOiAnMScsXG5cdFx0dGl0bGU6ICdQZXJzb25hbCBEYXRhJyxcblx0XHRsYWJlbDogJ3BlcnNvbmFsLWRhdGEnLFxuXHRcdEljb246IFBlcnNvbkljb24sXG5cdH0sXG5cdHtcblx0XHRpZDogJzInLFxuXHRcdHRpdGxlOiAnVXBsb2FkIFBob3RvJyxcblx0XHRsYWJlbDogJ3VwbG9hZC1waG90bycsXG5cdFx0SWNvbjogQWNjb3VudENpcmNsZUljb24sXG5cdH0sXG5cdHtcblx0XHRpZDogJzMnLFxuXHRcdHRpdGxlOiAnV29yayBFeHBlcmllbmNlJyxcblx0XHRsYWJlbDogJ3dvcmstZXhwZXJpZW5jZScsXG5cdFx0SWNvbjogV29ya0ljb24sXG5cdH0sXG5cdHtcblx0XHRpZDogJzQnLFxuXHRcdHRpdGxlOiAnRWR1Y2F0aW9uJyxcblx0XHRsYWJlbDogJ2VkdWNhdGlvbicsXG5cdFx0SWNvbjogU2Nob29sSWNvbixcblx0fSxcblx0e1xuXHRcdGlkOiAnNScsXG5cdFx0dGl0bGU6ICdFeHRyYXMnLFxuXHRcdGxhYmVsOiAnZXh0cmFzJyxcblx0XHRJY29uOiBBc3NpZ25tZW50SWNvbixcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBzZWN0aW9uUmVkdWNlciA9IChzdGF0ZSA9IHsgZGF0YTogaW5pdGlhbFN0YXRlIH0sIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/sectionReducer.js\n");

/***/ }),

/***/ "./redux/reducers/userReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/userReducer.js ***!
  \***************************************/
/*! exports provided: loginReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginReducer\", function() { return loginReducer; });\n/* harmony import */ var _actionTypes_userActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/userActionTypes */ \"./redux/actionTypes/userActionTypes.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialLoginState = {\n  userLoggedIn: false\n};\nconst loginReducer = (state = initialLoginState, action) => {\n  switch (action.type) {\n    case _actionTypes_userActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN\"]:\n      {\n        return {\n          userLoggedIn: true\n        };\n      }\n\n    case _actionTypes_userActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LOGOUT\"]:\n      {\n        return {\n          userLoggedIn: false\n        };\n      }\n\n    default:\n      return _objectSpread({}, initialLoginState);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcz9jN2VkIl0sIm5hbWVzIjpbImluaXRpYWxMb2dpblN0YXRlIiwidXNlckxvZ2dlZEluIiwibG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiTE9HSU4iLCJMT0dPVVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsaUJBQWlCLEdBQUc7QUFDekJDLGNBQVksRUFBRTtBQURXLENBQTFCO0FBR08sTUFBTUMsWUFBWSxHQUFHLENBQUNDLEtBQUssR0FBR0gsaUJBQVQsRUFBNEJJLE1BQTVCLEtBQXVDO0FBQ2xFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtDLGtFQUFMO0FBQVk7QUFDWCxlQUFPO0FBQUVMLHNCQUFZLEVBQUU7QUFBaEIsU0FBUDtBQUNBOztBQUNELFNBQUtNLG1FQUFMO0FBQWE7QUFDWixlQUFPO0FBQ05OLHNCQUFZLEVBQUU7QUFEUixTQUFQO0FBR0E7O0FBQ0Q7QUFDQywrQkFBWUQsaUJBQVo7QUFWRjtBQVlBLENBYk0iLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPR0lOLCBMT0dPVVQgfSBmcm9tICcuLi9hY3Rpb25UeXBlcy91c2VyQWN0aW9uVHlwZXMnO1xuY29uc3QgaW5pdGlhbExvZ2luU3RhdGUgPSB7XG5cdHVzZXJMb2dnZWRJbjogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGxvZ2luUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxMb2dpblN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgTE9HSU46IHtcblx0XHRcdHJldHVybiB7IHVzZXJMb2dnZWRJbjogdHJ1ZSB9O1xuXHRcdH1cblx0XHRjYXNlIExPR09VVDoge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dXNlckxvZ2dlZEluOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4geyAuLi5pbml0aWFsTG9naW5TdGF0ZSB9O1xuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/userReducer.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers.js */ \"./redux/reducers.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nlet store;\n\nfunction initStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxZQUFuQixFQUFpQztBQUNoQyxTQUFPQyx5REFBVyxDQUNqQkMsb0RBRGlCLEVBRWpCRixZQUZpQixFQUdqQkcsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLGtEQUFELENBQWhCLENBSEYsQ0FBbEI7QUFLQTs7QUFFTSxNQUFNQyxlQUFlLEdBQUlDLGNBQUQsSUFBb0I7QUFBQTs7QUFDbEQsTUFBSUMsTUFBTSxjQUFHVixLQUFILDZDQUFZQyxTQUFTLENBQUNRLGNBQUQsQ0FBL0IsQ0FEa0QsQ0FHbEQ7QUFDQTs7O0FBQ0EsTUFBSUEsY0FBYyxJQUFJVCxLQUF0QixFQUE2QjtBQUM1QlUsVUFBTSxHQUFHVCxTQUFTLGlDQUNkRCxLQUFLLENBQUNXLFFBQU4sRUFEYyxHQUVkRixjQUZjLEVBQWxCLENBRDRCLENBSzVCOztBQUNBVCxTQUFLLEdBQUdZLFNBQVI7QUFDQSxHQVppRCxDQWNsRDs7O0FBQ0EsWUFBbUMsT0FBT0YsTUFBUCxDQWZlLENBZ0JsRDs7QUFDQSxNQUFJLENBQUNWLEtBQUwsRUFBWUEsS0FBSyxHQUFHVSxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNBLENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JYLFlBQWxCLEVBQWdDO0FBQ3RDLFFBQU1GLEtBQUssR0FBR2MscURBQU8sQ0FBQyxNQUFNTixlQUFlLENBQUNOLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9GLEtBQVA7QUFDQSIsImZpbGUiOiIuL3JlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMuanMnO1xuXG5sZXQgc3RvcmU7XG5cbmZ1bmN0aW9uIGluaXRTdG9yZShpbml0aWFsU3RhdGUpIHtcblx0cmV0dXJuIGNyZWF0ZVN0b3JlKFxuXHRcdHJlZHVjZXJzLFxuXHRcdGluaXRpYWxTdGF0ZSxcblx0XHRjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG5cdGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpO1xuXG5cdC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuXHQvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuXHRpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcblx0XHRfc3RvcmUgPSBpbml0U3RvcmUoe1xuXHRcdFx0Li4uc3RvcmUuZ2V0U3RhdGUoKSxcblx0XHRcdC4uLnByZWxvYWRlZFN0YXRlLFxuXHRcdH0pO1xuXHRcdC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG5cdFx0c3RvcmUgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmU7XG5cdC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG5cdGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlO1xuXG5cdHJldHVybiBfc3RvcmU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG5cdGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuXHRyZXR1cm4gc3RvcmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./shared/theme.js":
/*!*************************!*\
  !*** ./shared/theme.js ***!
  \*************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  overrides: {\n    MuiCssBaseline: {\n      '@global': {\n        '*': {\n          'scrollbar-width': 'thin'\n        },\n        '*::-webkit-scrollbar': {\n          width: '15px',\n          height: '15px'\n        },\n        '*::-webkit-scrollbar-track': {\n          background: '#f4f4f4'\n        },\n        '*::-webkit-scrollbar-thumb': {\n          background: '#16a085'\n        },\n        '*::-webkit-scrollbar-thumb:hover': {\n          background: '#1abc9c90'\n        }\n      }\n    }\n  },\n  breakpoints: {\n    values: {\n      xs: 300,\n      sm: 640,\n      md: 768,\n      lg: 1024,\n      xl: 1280,\n      '2xl': 1536\n    }\n  },\n  palette: {\n    primary: {\n      main: '#1abc9c',\n      contrastText: '#ffffff'\n    },\n    secondary: {\n      main: '#1abc9c'\n    }\n  },\n  typography: {\n    fontFamily: 'Poppins'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvdGhlbWUuanM/MGI0YSJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpQ3NzQmFzZWxpbmUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLEtBQUssR0FBR0Msd0VBQWMsQ0FBQztBQUNuQ0MsV0FBUyxFQUFFO0FBQ1ZDLGtCQUFjLEVBQUU7QUFDZixpQkFBVztBQUNWLGFBQUs7QUFDSiw2QkFBbUI7QUFEZixTQURLO0FBSVYsZ0NBQXdCO0FBQ3ZCQyxlQUFLLEVBQUUsTUFEZ0I7QUFFdkJDLGdCQUFNLEVBQUU7QUFGZSxTQUpkO0FBUVYsc0NBQThCO0FBQzdCQyxvQkFBVSxFQUFFO0FBRGlCLFNBUnBCO0FBV1Ysc0NBQThCO0FBQzdCQSxvQkFBVSxFQUFFO0FBRGlCLFNBWHBCO0FBY1YsNENBQW9DO0FBQ25DQSxvQkFBVSxFQUFFO0FBRHVCO0FBZDFCO0FBREk7QUFETixHQUR3QjtBQXVCbkNDLGFBQVcsRUFBRTtBQUNaQyxVQUFNLEVBQUU7QUFDUEMsUUFBRSxFQUFFLEdBREc7QUFFUEMsUUFBRSxFQUFFLEdBRkc7QUFHUEMsUUFBRSxFQUFFLEdBSEc7QUFJUEMsUUFBRSxFQUFFLElBSkc7QUFLUEMsUUFBRSxFQUFFLElBTEc7QUFNUCxhQUFPO0FBTkE7QUFESSxHQXZCc0I7QUFpQ25DQyxTQUFPLEVBQUU7QUFDUkMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxTQURFO0FBRVJDLGtCQUFZLEVBQUU7QUFGTixLQUREO0FBS1JDLGFBQVMsRUFBRTtBQUNWRixVQUFJLEVBQUU7QUFESTtBQUxILEdBakMwQjtBQTBDbkNHLFlBQVUsRUFBRTtBQUNYQyxjQUFVLEVBQUU7QUFERDtBQTFDdUIsQ0FBRCxDQUE1QiIsImZpbGUiOiIuL3NoYXJlZC90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG5cdG92ZXJyaWRlczoge1xuXHRcdE11aUNzc0Jhc2VsaW5lOiB7XG5cdFx0XHQnQGdsb2JhbCc6IHtcblx0XHRcdFx0JyonOiB7XG5cdFx0XHRcdFx0J3Njcm9sbGJhci13aWR0aCc6ICd0aGluJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Jyo6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuXHRcdFx0XHRcdHdpZHRoOiAnMTVweCcsXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTVweCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCcqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayc6IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y0ZjRmNCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCcqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYic6IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnIzE2YTA4NScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCcqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3Zlcic6IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnIzFhYmM5YzkwJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0YnJlYWtwb2ludHM6IHtcblx0XHR2YWx1ZXM6IHtcblx0XHRcdHhzOiAzMDAsXG5cdFx0XHRzbTogNjQwLFxuXHRcdFx0bWQ6IDc2OCxcblx0XHRcdGxnOiAxMDI0LFxuXHRcdFx0eGw6IDEyODAsXG5cdFx0XHQnMnhsJzogMTUzNixcblx0XHR9LFxuXHR9LFxuXHRwYWxldHRlOiB7XG5cdFx0cHJpbWFyeToge1xuXHRcdFx0bWFpbjogJyMxYWJjOWMnLFxuXHRcdFx0Y29udHJhc3RUZXh0OiAnI2ZmZmZmZicsXG5cdFx0fSxcblx0XHRzZWNvbmRhcnk6IHtcblx0XHRcdG1haW46ICcjMWFiYzljJyxcblx0XHR9LFxuXHR9LFxuXHR0eXBvZ3JhcGh5OiB7XG5cdFx0Zm9udEZhbWlseTogJ1BvcHBpbnMnLFxuXHR9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./shared/theme.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/globals.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccountCircle\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiPzJiOGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/AccountCircle\n");

/***/ }),

/***/ "@material-ui/icons/Assignment":
/*!************************************************!*\
  !*** external "@material-ui/icons/Assignment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Assignment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudFwiPzM2NGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Assignment\n");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCI/YzlmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Person\n");

/***/ }),

/***/ "@material-ui/icons/School":
/*!********************************************!*\
  !*** external "@material-ui/icons/School" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/School\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2Nob29sXCI/ZTRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvU2Nob29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NjaG9vbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/School\n");

/***/ }),

/***/ "@material-ui/icons/Work":
/*!******************************************!*\
  !*** external "@material-ui/icons/Work" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Work\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV29ya1wiPzBjN2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV29ya1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Work\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });