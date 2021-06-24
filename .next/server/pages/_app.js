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

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/css/swiper.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/css/swiper.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apis/auth-api.js":
/*!******************************!*\
  !*** ./src/apis/auth-api.js ***!
  \******************************/
/*! exports provided: signup, simpleSignup, googleSignup, login, editProfile, updateProfileImg, AddProduct, UpdateProduct, DeleteProduct, DeleteRequest, AddEvent, UpdateEvent, DeleteEvent, Favourite, GetUserFavourite, GetUserRequests, AddProductRequest, UpdateProductRequest, ResetPasswordAPI, updateDeviceToken, verifyEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleSignup", function() { return simpleSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSignup", function() { return googleSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfile", function() { return editProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileImg", function() { return updateProfileImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProduct", function() { return UpdateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProduct", function() { return DeleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRequest", function() { return DeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEvent", function() { return AddEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEvent", function() { return UpdateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEvent", function() { return DeleteEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favourite", function() { return Favourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserFavourite", function() { return GetUserFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRequests", function() { return GetUserRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductRequest", function() { return AddProductRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductRequest", function() { return UpdateProductRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordAPI", function() { return ResetPasswordAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceToken", function() { return updateDeviceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmail", function() { return verifyEmail; });
const API_URL = "http://fanto.in/api";
function signup(data) {
  let url = API_URL + "/user/sign-up";
  console.log(url);
  return generalPostRequest(url, data);
}
function simpleSignup(data) {
  let url = API_URL + "/user/simple-sign-up";
  console.log(url);
  return generalPostRequest(url, data);
}
function googleSignup(data) {
  let url = API_URL + "/user/google-sign-up";
  console.log(url);
  return generalPostRequest(url, data);
}
function login(data) {
  let url = API_URL + "/user/login";
  console.log(url);
  return generalPostRequest(url, data);
}
function editProfile(data, id) {
  let url = API_URL + "/user/update/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function updateProfileImg(data) {
  let url = API_URL + "/profile-img/update";
  console.log(url);
  return generalPostRequest(url, data);
}
function AddProduct(data) {
  let url = API_URL + "/product";
  console.log(url);
  return generalPostRequest(url, data);
}
function UpdateProduct(data, id) {
  let url = API_URL + "/product/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function DeleteProduct(data, id) {
  let url = API_URL + "/product/delete/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function DeleteRequest(data, id) {
  let url = API_URL + "/product-request/delete/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function AddEvent(data) {
  let url = API_URL + "/event";
  console.log(url);
  return generalPostRequest(url, data);
}
function UpdateEvent(data, id) {
  let url = API_URL + "/event/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function DeleteEvent(data, id) {
  let url = API_URL + "/event/delete/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function Favourite(data) {
  let url = API_URL + "/favourite";
  console.log(url);
  return generalPostRequest(url, data);
}
function GetUserFavourite(user_id, type) {
  let url = API_URL + "/user-favourite/" + user_id + "/" + type;
  return fetch(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function GetUserRequests(user_id) {
  let url = API_URL + "/product-request/user/" + user_id;
  return fetch(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function AddProductRequest(data) {
  let url = API_URL + "/product-request";
  console.log(url);
  return generalPostRequest(url, data);
}
function UpdateProductRequest(data, id) {
  let url = API_URL + "/product-request/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}
function ResetPasswordAPI(data) {
  let url = API_URL + "/reset-password";
  console.log(url);
  return generalPostRequest(url, data);
}

function generalPostRequest(url, data) {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(`Request rejected with status ${response.status}`);
    }
  }).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.log(error));
}

function updateDeviceToken(user_id, token) {
  let url = API_URL + "/device-token/" + user_id + "/" + token;
  return fetch(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function verifyEmail(token) {
  let url = API_URL + "/verify-email-token/" + token;
  return fetch(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}

/***/ }),

/***/ "./src/apis/global-api.js":
/*!********************************!*\
  !*** ./src/apis/global-api.js ***!
  \********************************/
/*! exports provided: searchUniversities, searchCategories, searchCities, getProducts, getProduct, getSeller, getCategories, getEventCategories, getCities, getEvents, getEvent, getRequest, searchEventCategories, CreateOrder, CreateContact, CreateVisit, getAllFeedback, getAllBuyRequests, ForgotPasswordAPI, UpdatePasswordAPI, sendChatUpdate, sendVerifyEmail, updateOpenStatus, sendFeedbackMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUniversities", function() { return searchUniversities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCategories", function() { return searchCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCities", function() { return searchCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeller", function() { return getSeller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventCategories", function() { return getEventCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvents", function() { return getEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvent", function() { return getEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEventCategories", function() { return searchEventCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrder", function() { return CreateOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContact", function() { return CreateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVisit", function() { return CreateVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFeedback", function() { return getAllFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBuyRequests", function() { return getAllBuyRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordAPI", function() { return ForgotPasswordAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordAPI", function() { return UpdatePasswordAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendChatUpdate", function() { return sendChatUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendVerifyEmail", function() { return sendVerifyEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOpenStatus", function() { return updateOpenStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendFeedbackMessage", function() { return sendFeedbackMessage; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
const API_URL = "http://fanto.in/api";

function searchUniversities(q) {
  let url = API_URL + "/universities/global/search/" + q;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function searchCategories(q) {
  let url = API_URL + `/product-categories-search/${q}`;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function searchCities(q) {
  let url = API_URL + `/cities/search/${q}`;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
async function getProducts(q) {
  let url = API_URL + "/products";

  if (q) {
    url = url + q;
  }

  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
async function getProduct(id) {
  let url = API_URL + "/product/" + id;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
async function getSeller(id) {
  let url = API_URL + "/user/" + id;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
async function getCategories() {
  let url = API_URL + "/product-categories";
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    return responseData;
  }).catch(error => console.warn(error));
}
async function getEventCategories() {
  let url = API_URL + "/event-categories";
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    return responseData;
  }).catch(error => console.warn(error));
}
async function getCities() {
  let url = API_URL + "/cities";
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log("responseData", responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
async function getEvents(q, showall = false) {
  let url = API_URL + "/events";

  if (showall) {
    url = url + "/" + showall;
  }

  if (q) {
    url = url + q;
  }

  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.log(error));
}
async function getEvent(id) {
  let url = API_URL + "/event/" + id;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
async function getRequest(id) {
  let url = API_URL + "/product-request/" + id;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function searchEventCategories(q) {
  let url = API_URL + `/event-categories-search/${q}`;
  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function CreateOrder(data) {
  let url = API_URL + "/order";
  console.log(url);
  return generalPostRequest(url, data);
}
function CreateContact(data) {
  let url = API_URL + "/contact";
  console.log(url);
  return generalPostRequest(url, data);
}
function CreateVisit(data) {
  let url = API_URL + "/user-visit";
  console.log(url);
  return generalPostRequest(url, data);
}
async function getAllFeedback(q) {
  let url = API_URL + "/feedback";

  if (q) {
    url = url + q;
  }

  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData.data;
  }).catch(error => console.warn(error));
}
async function getAllBuyRequests(q) {
  let url = API_URL + "/product-request?paginate=20";

  if (q) {
    url = url + q;
  }

  console.log(url);
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.warn(error));
}
function ForgotPasswordAPI(data) {
  let url = API_URL + "/forgot-password";
  console.log(url);
  return generalPostRequest(url, data);
}
function UpdatePasswordAPI(data) {
  let url = API_URL + "/update-password";
  console.log(url);
  return generalPostRequest(url, data);
}
function sendChatUpdate(user_id) {
  let url = API_URL + "/send-chat-message/" + user_id;
  console.log(url);
  return generalPostRequest(url);
}
function sendVerifyEmail(user_id) {
  let url = API_URL + "/send-verify-email/" + user_id;
  console.log(url);
  return generalPostRequest(url);
}
function updateOpenStatus(dialog_id, status, user_id) {
  let url = API_URL + "/update-open-status/" + dialog_id + "/" + status + "/" + user_id;
  console.log(url);
  return generalPostRequest(url);
}
function sendFeedbackMessage(data) {
  let url = API_URL + "/send-feedback-message";
  return generalPostRequest(url, data);
}

function generalPostRequest(url, data) {
  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(`Request rejected with status ${response.status}`);
    }
  }).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.log(error));
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: SELECTED_FILTER_UNIVERSITY, SELECTED_FILTER_RESET, PAGE_PRODUCTS, VALID_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_FILTER_UNIVERSITY", function() { return SELECTED_FILTER_UNIVERSITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_FILTER_RESET", function() { return SELECTED_FILTER_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_PRODUCTS", function() { return PAGE_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_ROUTES", function() { return VALID_ROUTES; });
const SELECTED_FILTER_UNIVERSITY = 'SELECTED_FILTER_UNIVERSITY';
const SELECTED_FILTER_RESET = "SELECTED_FILTER_RESET";
const PAGE_PRODUCTS = 'PAGE_PRODUCTS';
const VALID_ROUTES = [{
  route: 'buy-request',
  title: 'Buy Request'
}, {
  route: 'products',
  title: 'Products'
}, {
  route: 'products-buy',
  title: 'Products Buy'
}, {
  route: 'products-sell',
  title: 'Products Sell'
}, {
  route: 'products-search',
  title: 'Products Search'
}, {
  route: 'events',
  title: 'Events'
}, {
  route: 'feedback',
  title: 'Feedback'
}];

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./src/theme.js");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _apis_global_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../constants */ "./src/constants.js");
/* harmony import */ var _utils_webPush__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../utils/webPush */ "./utils/webPush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_18__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 //nprogress module



 // import "~/node_modules/connectycube/dist/connectycube.min.js";






 //import { updateDeviceToken } from '../src/apis/auth-api';
// import OneSignal, { useOneSignalSetup } from 'react-onesignal';

next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on('routeChangeStart', () => {
  nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on('routeChangeComplete', () => {
  isuserProfileComplete();
  nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done());

const isuserProfileComplete = () => {
  let userData = window.localStorage.getItem('user');
  userData = userData ? JSON.parse(userData) : '';
  let accessTokenData = window.localStorage.getItem('accessToken');

  if (accessTokenData && accessTokenData != 'undefined' && userData) {
    // setToken(userData);
    // firebaseCloudMessaging.init(userData)
    console.log(next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.route);

    if (!userData.email_verified_at && next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.route != '/verify') {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_15__["getSeller"])(userData.id).then(user => {
        if (user.email_verified_at && !user.is_complete && next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.asPath != '/profile/edit') {
          localStorage.setItem('user', JSON.stringify(user));
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/profile/edit');
        } else if (next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.route != '/not-verified-email') {
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/not-verified-email');
        }
      });
      return false;
    } else if (userData.email_verified_at && !userData.is_complete && next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.asPath != '/profile/edit') {
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/profile/edit');
    } else {
      setUserVisit(userData);
    }
  }
};

const setUserVisit = userData => {
  let route = next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.route.replace('/', '');
  if (!route) return;

  if (route == 'products') {
    let {
      type,
      s
    } = next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router.query;

    if (type == 'buy') {
      route = 'products-buy';
    }

    if (type == 'sell') {
      route = 'products-sell';
    }

    if (s) {
      route = 'products-search';
    }
  }

  var routeExist = _constants__WEBPACK_IMPORTED_MODULE_16__["VALID_ROUTES"].find(obj => obj.route === route);
  console.log('routetest', next_router__WEBPACK_IMPORTED_MODULE_14___default.a.router, route, routeExist);
  if (!routeExist) return;
  let data = {
    user_id: userData.id,
    feature: routeExist.title
  };
  Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_15__["CreateVisit"])(data).then(data => {
    console.log(data);
  });
}; // const setToken = async (userData) => {
//   try {
//     const token = await firebaseCloudMessaging.init(userData);
//     if (token) {
//       getMessage();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


const getMessage = () => {
  const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_18___default.a.messaging();
  messaging.onMessage(message => console.log('foreground', message));
};

function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  const {
    0: onesignalinit,
    1: setonesignalinit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // useOneSignalSetup(() => {
  // let userData = window.localStorage.getItem("user");
  // userData = userData ? JSON.parse(userData) : "";
  // if (userData) {
  //   OneSignal.setEmail(userData.email);
  //   OneSignal.setExternalUserId(userData.id);
  // }
  // });

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let userData = window.localStorage.getItem('user');
    userData = userData ? JSON.parse(userData) : '';
    var OneSignal = window.OneSignal || [];
    var initConfig = {
      appId: process.env.ONESIGNAL_APP_ID,
      notifyButton: {
        enable: true
      }
    };

    if (userData) {
      OneSignal.push(function () {
        OneSignal.SERVICE_WORKER_PARAM = {
          scope: '/subdirectory/'
        };
        OneSignal.SERVICE_WORKER_PATH = 'subdirectory/OneSignalSDKWorker.js';
        OneSignal.SERVICE_WORKER_UPDATER_PATH = 'subdirectory/OneSignalSDKUpdaterWorker.js';

        if (!onesignalinit) {
          OneSignal.init(initConfig);
          setonesignalinit(true);
        } // if (userData) {


        OneSignal.getUserId(function (userId) {
          if (userId != userData.device_token) {
            updateDeviceToken(userData.id, userId).then(result => {
              userData.device_token = userId;
              window.localStorage.setItem('user', JSON.stringify(userData));
            });
          }

          console.log(userData, userId);
        });
        OneSignal.sendTag('user', userData.id); // }
      });
    }

    isuserProfileComplete(); // Remove the server-side injected CSS.

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []); // const setToken = async (userData) => {
  //   // try {
  //   //   const token = await firebaseCloudMessaging.init(userData);
  //   //   if (token) {
  //   //     getMessage();
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // }

  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "HomePage"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), __jsx(Component, pageProps))));
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./src/redux/actionTypes/PageVisited.js":
/*!**********************************************!*\
  !*** ./src/redux/actionTypes/PageVisited.js ***!
  \**********************************************/
/*! exports provided: ADD_VISITED, REMOVE_VISITED, FETCH_VISITED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_VISITED", function() { return ADD_VISITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_VISITED", function() { return REMOVE_VISITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VISITED", function() { return FETCH_VISITED; });
const ADD_VISITED = 'ADD_VISITED';
const REMOVE_VISITED = 'REMOVE_VISITED';
const FETCH_VISITED = 'FETCH_VISITED';

/***/ }),

/***/ "./src/redux/actionTypes/auth.js":
/*!***************************************!*\
  !*** ./src/redux/actionTypes/auth.js ***!
  \***************************************/
/*! exports provided: AUTHENTICATED, UPDATE_DEVICE_TOKEN, UNAUTHENTICATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DEVICE_TOKEN", function() { return UPDATE_DEVICE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTHENTICATED", function() { return UNAUTHENTICATED; });
const AUTHENTICATED = "AUTHENTICATED";
const UPDATE_DEVICE_TOKEN = "UPDATE_DEVICE_TOKEN";
const UNAUTHENTICATED = "UNAUTHENTICATED";

/***/ }),

/***/ "./src/redux/actionTypes/authModal.js":
/*!********************************************!*\
  !*** ./src/redux/actionTypes/authModal.js ***!
  \********************************************/
/*! exports provided: SHOW_MODAL, CLOSE_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MODAL", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

/***/ }),

/***/ "./src/redux/actionTypes/chatConnected.js":
/*!************************************************!*\
  !*** ./src/redux/actionTypes/chatConnected.js ***!
  \************************************************/
/*! exports provided: CHAT_CONNECTED, CHAT_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_CONNECTED", function() { return CHAT_CONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_RESET", function() { return CHAT_RESET; });
const CHAT_CONNECTED = "CHAT_CONNECTED";
const CHAT_RESET = "CHAT_RESET";

/***/ }),

/***/ "./src/redux/actionTypes/chatUnread.js":
/*!*********************************************!*\
  !*** ./src/redux/actionTypes/chatUnread.js ***!
  \*********************************************/
/*! exports provided: CHAT_UNREAD, CHAT_UNREAD_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_UNREAD", function() { return CHAT_UNREAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_UNREAD_RESET", function() { return CHAT_UNREAD_RESET; });
const CHAT_UNREAD = "CHAT_UNREAD";
const CHAT_UNREAD_RESET = "CHAT_UNREAD_RESET";

/***/ }),

/***/ "./src/redux/actionTypes/chatUser.js":
/*!*******************************************!*\
  !*** ./src/redux/actionTypes/chatUser.js ***!
  \*******************************************/
/*! exports provided: CHAT_AUTHENTICATED, CHAT_UNAUTHENTICATED, CHAT_UPDATE_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_AUTHENTICATED", function() { return CHAT_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_UNAUTHENTICATED", function() { return CHAT_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_UPDATE_USER", function() { return CHAT_UPDATE_USER; });
const CHAT_AUTHENTICATED = "CHAT_AUTHENTICATED";
const CHAT_UNAUTHENTICATED = "CHAT_UNAUTHENTICATED";
const CHAT_UPDATE_USER = "CHAT_UPDATE_USER";

/***/ }),

/***/ "./src/redux/actionTypes/dialogs.js":
/*!******************************************!*\
  !*** ./src/redux/actionTypes/dialogs.js ***!
  \******************************************/
/*! exports provided: FETCH_DIALOGS, ADD_DIALOG, SORT_DIALOGS, UPDATE_DIALOG, DELETE_DIALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DIALOGS", function() { return FETCH_DIALOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DIALOG", function() { return ADD_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_DIALOGS", function() { return SORT_DIALOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DIALOG", function() { return UPDATE_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DIALOG", function() { return DELETE_DIALOG; });
const FETCH_DIALOGS = "FETCH_DIALOGS";
const ADD_DIALOG = "ADD_DIALOG";
const SORT_DIALOGS = "SORT_DIALOGS";
const UPDATE_DIALOG = "UPDATE_DIALOG";
const DELETE_DIALOG = "DELETE_DIALOG";

/***/ }),

/***/ "./src/redux/actionTypes/messages.js":
/*!*******************************************!*\
  !*** ./src/redux/actionTypes/messages.js ***!
  \*******************************************/
/*! exports provided: SET_MESSAGES, PUSH_MESSAGE, DELETE_ALL_MESSAGES, LAZY_FETCH_MESSAGES, UPDATE_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MESSAGES", function() { return SET_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSH_MESSAGE", function() { return PUSH_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALL_MESSAGES", function() { return DELETE_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_FETCH_MESSAGES", function() { return LAZY_FETCH_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MESSAGES", function() { return UPDATE_MESSAGES; });
const SET_MESSAGES = "SET_MESSAGES";
const PUSH_MESSAGE = "PUSH_MESSAGE";
const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES";
const LAZY_FETCH_MESSAGES = "LAZY_FETCH_MESSAGES";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";

/***/ }),

/***/ "./src/redux/actionTypes/selectedDialog.js":
/*!*************************************************!*\
  !*** ./src/redux/actionTypes/selectedDialog.js ***!
  \*************************************************/
/*! exports provided: SELECTED_DIALOG, UN_SELECTED_DIALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_DIALOG", function() { return SELECTED_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UN_SELECTED_DIALOG", function() { return UN_SELECTED_DIALOG; });
const SELECTED_DIALOG = "SELECTED_DIALOG";
const UN_SELECTED_DIALOG = "UN_SELECTED_DIALOG";

/***/ }),

/***/ "./src/redux/reducers/PageVisited.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/PageVisited.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/PageVisited */ "./src/redux/actionTypes/PageVisited.js");

let initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__["ADD_VISITED"]:
      console.log(arr, action.payload.item);
      let arr = state;

      if (action.payload.item) {
        arr = state.push(action.payload.item);
      }

      return arr;

    case _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__["REMOVE_VISITED"]:
      let arr2 = state;

      if (action.payload.item) {
        arr2 = state.pop(action.payload.item);
      }

      return arr2;

    default:
      return initialState;
  }
});

/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/auth */ "./src/redux/actionTypes/auth.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "localforage");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  user: {},
  accessToken: ""
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"]:
      const {
        user,
        accessToken,
        userFavEvents,
        userFavProducts
      } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userFavEvents", userFavEvents);
      localStorage.setItem("userFavProducts", userFavProducts);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SELECTED_FILTER_RESET"], false);
      return _objectSpread(_objectSpread({}, state), {}, {
        user: user,
        accessToken: accessToken
      });

    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DEVICE_TOKEN"]:
      let {
        token
      } = action.payload;
      let u = state.user;
      u.device_token = token;
      localStorage.setItem("user", JSON.stringify(u));
      return _objectSpread(_objectSpread({}, state), {}, {
        user: u
      });

    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]:
      localStorage.setItem("user", "");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("userFavEvents", "");
      localStorage.setItem("userFavProducts", "");
      localforage__WEBPACK_IMPORTED_MODULE_1___default.a.removeItem('fcm_token');
      localforage__WEBPACK_IMPORTED_MODULE_1___default.a.removeItem('fcm_token_user');
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SELECTED_FILTER_UNIVERSITY"], '');
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SELECTED_FILTER_RESET"], false);
      return initialState;

    default:
      let data = "";

      if (false) {}

      return data ? data : initialState;
  }
});

/***/ }),

/***/ "./src/redux/reducers/authModal.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/authModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_authModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/authModal */ "./src/redux/actionTypes/authModal.js");

let initialState = {
  show: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actionTypes_authModal__WEBPACK_IMPORTED_MODULE_0__["SHOW_MODAL"]:
      return true;

    case _actionTypes_authModal__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MODAL"]:
      return false;

    default:
      return initialState;
  }
});

/***/ }),

/***/ "./src/redux/reducers/chatConnected.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/chatConnected.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_chatConnected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/chatConnected */ "./src/redux/actionTypes/chatConnected.js");

/* harmony default export */ __webpack_exports__["default"] = (function (state = false, action) {
  switch (action.type) {
    case _actionTypes_chatConnected__WEBPACK_IMPORTED_MODULE_0__["CHAT_CONNECTED"]:
      return true;

    case _actionTypes_chatConnected__WEBPACK_IMPORTED_MODULE_0__["CHAT_RESET"]:
      return false;

    default:
      return false;
  }
});

/***/ }),

/***/ "./src/redux/reducers/chatUnread.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/chatUnread.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_chatUnread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/chatUnread */ "./src/redux/actionTypes/chatUnread.js");

/* harmony default export */ __webpack_exports__["default"] = (function (state = 0, action) {
  switch (action.type) {
    case _actionTypes_chatUnread__WEBPACK_IMPORTED_MODULE_0__["CHAT_UNREAD"]:
      return parseInt(action.count);

    case _actionTypes_chatUnread__WEBPACK_IMPORTED_MODULE_0__["CHAT_UNREAD_RESET"]:
      return 0;

    default:
      return 0;
  }
});

/***/ }),

/***/ "./src/redux/reducers/chatUser.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/chatUser.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/chatUser */ "./src/redux/actionTypes/chatUser.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (currentUser = null, action) {
  switch (action.type) {
    case _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__["CHAT_AUTHENTICATED"]:
      return action.payload.currentUser;

    case _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__["CHAT_UPDATE_USER"]:
      {
        const result = Object.assign(currentUser.user, action.payload.currentUser);
        currentUser.user = result;
        return _objectSpread({}, currentUser);
      }

    case _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__["CHAT_UNAUTHENTICATED"]:
      return null;

    default:
      return currentUser;
  }
});

/***/ }),

/***/ "./src/redux/reducers/dialogs.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/dialogs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/dialogs */ "./src/redux/actionTypes/dialogs.js");
/* harmony import */ var _reducer_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer-function */ "./src/redux/reducers/reducer-function.js");


/* harmony default export */ __webpack_exports__["default"] = ((dialogs = [], action) => {
  switch (action.type) {
    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["FETCH_DIALOGS"]:
      return action.dialogs;

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DIALOG"]:
      {
        const result = Object(_reducer_function__WEBPACK_IMPORTED_MODULE_1__["updateDialog"])(action, dialogs);
        return result;
      }

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["ADD_DIALOG"]:
      return [action.dialog, ...dialogs];

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["SORT_DIALOGS"]:
      {
        const result = Object(_reducer_function__WEBPACK_IMPORTED_MODULE_1__["sortedDialog"])(action, dialogs);
        return result;
      }

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["DELETE_DIALOG"]:
      {
        const result = dialogs.filter(dialog => dialog.id !== action.dialogId);
        return result;
      }

    default:
      return dialogs;
  }
});

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var _authModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authModal */ "./src/redux/reducers/authModal.js");
/* harmony import */ var _chatUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatUser */ "./src/redux/reducers/chatUser.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs */ "./src/redux/reducers/dialogs.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/redux/reducers/messages.js");
/* harmony import */ var _selectedDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectedDialog */ "./src/redux/reducers/selectedDialog.js");
/* harmony import */ var _PageVisited__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageVisited */ "./src/redux/reducers/PageVisited.js");
/* harmony import */ var _chatConnected__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatConnected */ "./src/redux/reducers/chatConnected.js");
/* harmony import */ var _chatUnread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chatUnread */ "./src/redux/reducers/chatUnread.js");











/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth_user: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth_modal: _authModal__WEBPACK_IMPORTED_MODULE_2__["default"],
  chat_user: _chatUser__WEBPACK_IMPORTED_MODULE_3__["default"],
  dialogs: _dialogs__WEBPACK_IMPORTED_MODULE_4__["default"],
  messages: _messages__WEBPACK_IMPORTED_MODULE_5__["default"],
  selectedDialog: _selectedDialog__WEBPACK_IMPORTED_MODULE_6__["default"],
  pageVisited: _PageVisited__WEBPACK_IMPORTED_MODULE_7__["default"],
  chatAuthenticated: _chatUser__WEBPACK_IMPORTED_MODULE_3__["default"],
  chatConnected: _chatConnected__WEBPACK_IMPORTED_MODULE_8__["default"],
  chatUnreadCount: _chatUnread__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./src/redux/reducers/messages.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/messages.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/messages */ "./src/redux/actionTypes/messages.js");
/* harmony import */ var _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes/selectedDialog */ "./src/redux/actionTypes/selectedDialog.js");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connectycube */ "connectycube");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connectycube__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer-function */ "./src/redux/reducers/reducer-function.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let initial_state = {
  dialog: {},
  messages: []
};
/* harmony default export */ __webpack_exports__["default"] = ((messages = initial_state, action) => {
  switch (action.type) {
    case _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["SET_MESSAGES"]:
      {
        const msgs = action.msgs;
        const dialog = action.dialog;
        return {
          dialog: dialog,
          messages: msgs
        };
      }
    // case SELECTED_DIALOG: {
    //   console.log(action)
    //   const dialog = action.dialog;
    //   return { ...messages, dialog: dialog };
    // }

    case _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["PUSH_MESSAGE"]:
      {
        let msg = action.msg;

        if (msg && msg.dialog_id == messages.dialog.connecty_dialog_id) {
          if (msg.notif) {
            const params = {
              read: 1,
              chat_dialog_id: msg.dialog_id
            };
            connectycube__WEBPACK_IMPORTED_MODULE_2___default.a.chat.message.update("", params).then(result => {}).catch(error => {});
          }

          const msgs = messages.messages.concat(action.msg);
          return _objectSpread(_objectSpread({}, messages), {}, {
            messages: msgs
          });
        } else {
          let userData = localStorage.getItem("user");
          userData = userData ? JSON.parse(userData) : "";

          if (userData) {
            var message = {
              app_id: process.env.ONESIGNAL_APP_ID,
              contents: {
                "en": "You recieved a new message."
              },
              filters: [{
                "field": "tag",
                "key": "user",
                "relation": "=",
                "value": userData.id
              }]
            };
            fetch("https://onesignal.com/api/v1/notifications", {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: "Basic " + process.env.ONESIGNAL_REST_KEY
              },
              method: "post",
              body: JSON.stringify(message) // body: JSON.stringify(data),

            }).then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw Error(`Request rejected with status ${response.status}`);
              }
            }).then(responseData => {
              console.log("responseDatasadsad", responseData);
              return responseData;
            }).catch(error => console.log("responseDatasadsad", error));
          }
        }

        return messages;
      }

    case _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["DELETE_ALL_MESSAGES"]:
      {
        return initial_state;
      }

    default:
      return initial_state;
  }
});

/***/ }),

/***/ "./src/redux/reducers/reducer-function.js":
/*!************************************************!*\
  !*** ./src/redux/reducers/reducer-function.js ***!
  \************************************************/
/*! exports provided: updateDialog, lazyFetchMessages, sortedDialog, updateStatusMessages, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDialog", function() { return updateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyFetchMessages", function() { return lazyFetchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedDialog", function() { return sortedDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatusMessages", function() { return updateStatusMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const updateDialog = (action, dialogs) => {
  const alreadyUpdatedDialog = dialogs.map(elem => {
    if (elem.id === action.dialog.id) {
      return Object.assign(elem, action.dialog);
    }

    return elem;
  });
  return [...alreadyUpdatedDialog];
};

const lazyFetchMessages = (action, messages) => {
  const newArr = action.history.reverse().concat(messages[action.dialogId]);
  return _objectSpread(_objectSpread({}, {}), {}, {
    [action.dialogId]: newArr
  });
};

const sortedDialog = (action, dialogs) => {
  const {
    message,
    count
  } = action;
  const updateDialog = dialogs.map(elem => {
    if (elem.id === message.dialog_id) {
      const newObj = {
        last_message: message.body,
        last_message_date_sent: message.date_sent,
        updated_date: message.date_sent,
        unread_messages_count: count ? elem.unread_messages_count += 1 : elem.unread_messages_count
      };
      return Object.assign(elem, newObj);
    }

    return elem;
  });

  const sort = (items, inverted = false) => items.sort((itemA, itemB) => {
    const result = new Date(itemB.last_message_date_sent * 1000) - new Date(itemA.last_message_date_sent * 1000);
    return inverted ? !result : result;
  });

  const result = sort(updateDialog);
  return [...result];
};

const updateStatusMessages = (action, message) => {
  if (Object.keys(message).length === 0) {
    return message;
  }

  const newMessages = message[action.dialogId].map((elem, index) => {
    if (elem.id === action.msgId) {
      const updateSendStatus = _objectSpread({}, elem);

      updateSendStatus.send_state = action.msg.send_state;
      return _objectSpread({}, updateSendStatus);
    }

    return elem;
  });

  const result = _objectSpread(_objectSpread({}, message), {}, {
    [action.dialogId]: newMessages
  });

  return result;
};

const fetchUsers = (action, users) => {
  const newObjUsers = {};
  action.forEach(elem => {
    newObjUsers[elem.id] = elem;
  });
  return _objectSpread(_objectSpread({}, users), newObjUsers);
};



/***/ }),

/***/ "./src/redux/reducers/selectedDialog.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/selectedDialog.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/selectedDialog */ "./src/redux/actionTypes/selectedDialog.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((dialog = null, action) => {
  switch (action.type) {
    case _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__["SELECTED_DIALOG"]:
      {
        return _objectSpread({}, action.dialog);
      }

    case _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__["UN_SELECTED_DIALOG"]:
      {
        return {};
      }

    default:
      return dialog;
  }
});

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], false ? undefined : ""));

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  typography: {
    fontFamily: 'Poppins, sans-serif'
  },
  palette: {
    primary: {
      main: '#916dd5',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#33271C'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    }
  }
});
theme.typography.h1 = {
  fontSize: '5.6rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem'
  }
};
theme.typography.h2 = {
  fontSize: '3.6rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.1rem'
  }
};
theme.typography.h3 = {
  fontSize: '2.4rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem'
  }
};
theme.typography.h4 = {
  fontSize: '2rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem'
  }
};
theme.typography.h5 = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.4rem'
  }
};
theme.typography.h6 = {
  fontSize: '1.4rem',
  fontWeight: '600',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./utils/webPush.js":
/*!**************************!*\
  !*** ./utils/webPush.js ***!
  \**************************/
/*! exports provided: firebaseCloudMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseCloudMessaging", function() { return firebaseCloudMessaging; });
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/messaging */ "firebase/messaging");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_messaging__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "localforage");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_apis_auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/apis/auth-api */ "./src/apis/auth-api.js");




const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('fcm_token');
  },
  userInlocalforage: async () => {
    return localforage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('fcm_token_user');
  },
  init: async function (props) {
    let data = {
      apiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.projectId,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    };

    if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(data);
    }

    try {
      let user = await this.userInlocalforage();

      if (user && user.id == props.id) {
        const tokenInLocalForage = await this.tokenInlocalforage();

        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
      }

      const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.messaging();
      await messaging.requestPermission(); // console.log('isSupported', messaging.isSupported())

      const token = await messaging.getToken();
      Object(_src_apis_auth_api__WEBPACK_IMPORTED_MODULE_3__["updateDeviceToken"])(props.id, token);
      localforage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('fcm_token', token);
      localforage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('fcm_token_user', props);
      console.log('fcm_token', token);
      return token;
    } catch (error) {
      console.log('fcmerror', error);
    }
  }
};


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "connectycube":
/*!*******************************!*\
  !*** external "connectycube" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connectycube");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvYXV0aC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvZ2xvYmFsLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9QYWdlVmlzaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvYXV0aE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0VW5yZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL3NlbGVjdGVkRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9QYWdlVmlzaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jaGF0VW5yZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jaGF0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zZWxlY3RlZERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3dlYlB1c2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0eWN1YmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9tZXNzYWdpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsInNpZ251cCIsImRhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZ2VuZXJhbFBvc3RSZXF1ZXN0Iiwic2ltcGxlU2lnbnVwIiwiZ29vZ2xlU2lnbnVwIiwibG9naW4iLCJlZGl0UHJvZmlsZSIsImlkIiwidXBkYXRlUHJvZmlsZUltZyIsIkFkZFByb2R1Y3QiLCJVcGRhdGVQcm9kdWN0IiwiRGVsZXRlUHJvZHVjdCIsIkRlbGV0ZVJlcXVlc3QiLCJBZGRFdmVudCIsIlVwZGF0ZUV2ZW50IiwiRGVsZXRlRXZlbnQiLCJGYXZvdXJpdGUiLCJHZXRVc2VyRmF2b3VyaXRlIiwidXNlcl9pZCIsInR5cGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZURhdGEiLCJjYXRjaCIsImVycm9yIiwid2FybiIsIkdldFVzZXJSZXF1ZXN0cyIsIkFkZFByb2R1Y3RSZXF1ZXN0IiwiVXBkYXRlUHJvZHVjdFJlcXVlc3QiLCJSZXNldFBhc3N3b3JkQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsInN0YXR1cyIsInVwZGF0ZURldmljZVRva2VuIiwidG9rZW4iLCJ2ZXJpZnlFbWFpbCIsInNlYXJjaFVuaXZlcnNpdGllcyIsInEiLCJzZWFyY2hDYXRlZ29yaWVzIiwic2VhcmNoQ2l0aWVzIiwiZ2V0UHJvZHVjdHMiLCJnZXRQcm9kdWN0IiwiZ2V0U2VsbGVyIiwiZ2V0Q2F0ZWdvcmllcyIsImdldEV2ZW50Q2F0ZWdvcmllcyIsImdldENpdGllcyIsImdldEV2ZW50cyIsInNob3dhbGwiLCJnZXRFdmVudCIsImdldFJlcXVlc3QiLCJzZWFyY2hFdmVudENhdGVnb3JpZXMiLCJDcmVhdGVPcmRlciIsIkNyZWF0ZUNvbnRhY3QiLCJDcmVhdGVWaXNpdCIsImdldEFsbEZlZWRiYWNrIiwiZ2V0QWxsQnV5UmVxdWVzdHMiLCJGb3Jnb3RQYXNzd29yZEFQSSIsIlVwZGF0ZVBhc3N3b3JkQVBJIiwic2VuZENoYXRVcGRhdGUiLCJzZW5kVmVyaWZ5RW1haWwiLCJ1cGRhdGVPcGVuU3RhdHVzIiwiZGlhbG9nX2lkIiwic2VuZEZlZWRiYWNrTWVzc2FnZSIsIlNFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZIiwiU0VMRUNURURfRklMVEVSX1JFU0VUIiwiUEFHRV9QUk9EVUNUUyIsIlZBTElEX1JPVVRFUyIsInJvdXRlIiwidGl0bGUiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiaXN1c2VyUHJvZmlsZUNvbXBsZXRlIiwiZG9uZSIsInVzZXJEYXRhIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwiYWNjZXNzVG9rZW5EYXRhIiwicm91dGVyIiwiZW1haWxfdmVyaWZpZWRfYXQiLCJ1c2VyIiwiaXNfY29tcGxldGUiLCJhc1BhdGgiLCJzZXRJdGVtIiwicHVzaCIsInNldFVzZXJWaXNpdCIsInJlcGxhY2UiLCJzIiwicXVlcnkiLCJyb3V0ZUV4aXN0IiwiZmluZCIsIm9iaiIsImZlYXR1cmUiLCJnZXRNZXNzYWdlIiwibWVzc2FnaW5nIiwiZmlyZWJhc2UiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVJvdXRlciIsIm9uZXNpZ25hbGluaXQiLCJzZXRvbmVzaWduYWxpbml0IiwidXNlU3RhdGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsIk9uZVNpZ25hbCIsImluaXRDb25maWciLCJhcHBJZCIsImVudiIsIk9ORVNJR05BTF9BUFBfSUQiLCJub3RpZnlCdXR0b24iLCJlbmFibGUiLCJTRVJWSUNFX1dPUktFUl9QQVJBTSIsInNjb3BlIiwiU0VSVklDRV9XT1JLRVJfUEFUSCIsIlNFUlZJQ0VfV09SS0VSX1VQREFURVJfUEFUSCIsImluaXQiLCJnZXRVc2VySWQiLCJ1c2VySWQiLCJkZXZpY2VfdG9rZW4iLCJyZXN1bHQiLCJzZW5kVGFnIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwic3RvcmUiLCJ0aGVtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiQUREX1ZJU0lURUQiLCJSRU1PVkVfVklTSVRFRCIsIkZFVENIX1ZJU0lURUQiLCJBVVRIRU5USUNBVEVEIiwiVVBEQVRFX0RFVklDRV9UT0tFTiIsIlVOQVVUSEVOVElDQVRFRCIsIlNIT1dfTU9EQUwiLCJDTE9TRV9NT0RBTCIsIkNIQVRfQ09OTkVDVEVEIiwiQ0hBVF9SRVNFVCIsIkNIQVRfVU5SRUFEIiwiQ0hBVF9VTlJFQURfUkVTRVQiLCJDSEFUX0FVVEhFTlRJQ0FURUQiLCJDSEFUX1VOQVVUSEVOVElDQVRFRCIsIkNIQVRfVVBEQVRFX1VTRVIiLCJGRVRDSF9ESUFMT0dTIiwiQUREX0RJQUxPRyIsIlNPUlRfRElBTE9HUyIsIlVQREFURV9ESUFMT0ciLCJERUxFVEVfRElBTE9HIiwiU0VUX01FU1NBR0VTIiwiUFVTSF9NRVNTQUdFIiwiREVMRVRFX0FMTF9NRVNTQUdFUyIsIkxBWllfRkVUQ0hfTUVTU0FHRVMiLCJVUERBVEVfTUVTU0FHRVMiLCJTRUxFQ1RFRF9ESUFMT0ciLCJVTl9TRUxFQ1RFRF9ESUFMT0ciLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsImFyciIsInBheWxvYWQiLCJpdGVtIiwiYXJyMiIsInBvcCIsImFjY2Vzc1Rva2VuIiwidXNlckZhdkV2ZW50cyIsInVzZXJGYXZQcm9kdWN0cyIsInUiLCJsb2NhbGZvcmFnZSIsInJlbW92ZUl0ZW0iLCJzaG93IiwicGFyc2VJbnQiLCJjb3VudCIsImN1cnJlbnRVc2VyIiwiT2JqZWN0IiwiYXNzaWduIiwiZGlhbG9ncyIsInVwZGF0ZURpYWxvZyIsImRpYWxvZyIsInNvcnRlZERpYWxvZyIsImZpbHRlciIsImRpYWxvZ0lkIiwiY29tYmluZVJlZHVjZXJzIiwiYXV0aF91c2VyIiwiYXV0aF9tb2RhbCIsImNoYXRfdXNlciIsIm1lc3NhZ2VzIiwic2VsZWN0ZWREaWFsb2ciLCJwYWdlVmlzaXRlZCIsImNoYXRBdXRoZW50aWNhdGVkIiwiY2hhdENvbm5lY3RlZCIsImNoYXRVbnJlYWRDb3VudCIsImluaXRpYWxfc3RhdGUiLCJtc2dzIiwibXNnIiwiY29ubmVjdHlfZGlhbG9nX2lkIiwibm90aWYiLCJwYXJhbXMiLCJyZWFkIiwiY2hhdF9kaWFsb2dfaWQiLCJDb25uZWN0eUN1YmUiLCJjaGF0IiwidXBkYXRlIiwiY29uY2F0IiwiYXBwX2lkIiwiY29udGVudHMiLCJmaWx0ZXJzIiwiQXV0aG9yaXphdGlvbiIsIk9ORVNJR05BTF9SRVNUX0tFWSIsImFscmVhZHlVcGRhdGVkRGlhbG9nIiwibWFwIiwiZWxlbSIsImxhenlGZXRjaE1lc3NhZ2VzIiwibmV3QXJyIiwiaGlzdG9yeSIsInJldmVyc2UiLCJuZXdPYmoiLCJsYXN0X21lc3NhZ2UiLCJsYXN0X21lc3NhZ2VfZGF0ZV9zZW50IiwiZGF0ZV9zZW50IiwidXBkYXRlZF9kYXRlIiwidW5yZWFkX21lc3NhZ2VzX2NvdW50Iiwic29ydCIsIml0ZW1zIiwiaW52ZXJ0ZWQiLCJpdGVtQSIsIml0ZW1CIiwiRGF0ZSIsInVwZGF0ZVN0YXR1c01lc3NhZ2VzIiwia2V5cyIsImxlbmd0aCIsIm5ld01lc3NhZ2VzIiwiaW5kZXgiLCJtc2dJZCIsInVwZGF0ZVNlbmRTdGF0dXMiLCJzZW5kX3N0YXRlIiwiZmV0Y2hVc2VycyIsInVzZXJzIiwibmV3T2JqVXNlcnMiLCJmb3JFYWNoIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNyZWF0ZU11aVRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImgyIiwiaDMiLCJoNCIsImxpbmVIZWlnaHQiLCJoNSIsImg2IiwiZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyIsInRva2VuSW5sb2NhbGZvcmFnZSIsInVzZXJJbmxvY2FsZm9yYWdlIiwiYXBpS2V5IiwiRklSRUJBU0VfQVBJX0tFWSIsInByb2plY3RJZCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJ0b2tlbkluTG9jYWxGb3JhZ2UiLCJyZXF1ZXN0UGVybWlzc2lvbiIsImdldFRva2VuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuYXBpX3VybDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWdudXAoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci9zaWduLXVwXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlU2lnbnVwKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvc2ltcGxlLXNpZ24tdXBcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb29nbGVTaWdudXAoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci9nb29nbGUtc2lnbi11cFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvbG9naW5cIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9maWxlKGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL3VwZGF0ZS9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZmlsZUltZyhkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9maWxlLWltZy91cGRhdGVcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkUHJvZHVjdChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QvZGVsZXRlL1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVJlcXVlc3QoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QtcmVxdWVzdC9kZWxldGUvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZEV2ZW50KGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2V2ZW50XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVwZGF0ZUV2ZW50KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudC9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlRXZlbnQoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2V2ZW50L2RlbGV0ZS9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBGYXZvdXJpdGUoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZmF2b3VyaXRlXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRVc2VyRmF2b3VyaXRlKHVzZXJfaWQsIHR5cGUpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXItZmF2b3VyaXRlL1wiICsgdXNlcl9pZCArIFwiL1wiICsgdHlwZTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCwgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFVzZXJSZXF1ZXN0cyh1c2VyX2lkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvdXNlci9cIiArIHVzZXJfaWQ7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwsIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRQcm9kdWN0UmVxdWVzdChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3RcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdFJlcXVlc3QoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QtcmVxdWVzdC9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkQVBJKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Jlc2V0LXBhc3N3b3JkXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihgUmVxdWVzdCByZWplY3RlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGV2aWNlVG9rZW4odXNlcl9pZCwgdG9rZW4pIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2RldmljZS10b2tlbi9cIiArIHVzZXJfaWQgKyBcIi9cIiArIHRva2VuO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsLCApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5RW1haWwodG9rZW4pIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3ZlcmlmeS1lbWFpbC10b2tlbi9cIiArIHRva2VuO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsLCApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG4iLCJjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuYXBpX3VybDtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVW5pdmVyc2l0aWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VuaXZlcnNpdGllcy9nbG9iYWwvc2VhcmNoL1wiICsgcTtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDYXRlZ29yaWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvcHJvZHVjdC1jYXRlZ29yaWVzLXNlYXJjaC8ke3F9YDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDaXRpZXMocSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgYC9jaXRpZXMvc2VhcmNoLyR7cX1gO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3RzXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3QoaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VsbGVyKGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL1wiICsgaWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIjtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudENhdGVnb3JpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudC1jYXRlZ29yaWVzXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdGllcygpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2NpdGllc1wiO1xyXG5cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VEYXRhXCIsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudHMocSwgc2hvd2FsbCA9IGZhbHNlKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudHNcIjtcclxuICBpZiAoc2hvd2FsbCkge1xyXG4gICAgdXJsID0gdXJsICsgXCIvXCIgKyBzaG93YWxsO1xyXG4gIH1cclxuICBpZiAocSkge1xyXG4gICAgdXJsID0gdXJsICsgcTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudChpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1ZXN0KGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRXZlbnRDYXRlZ29yaWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvZXZlbnQtY2F0ZWdvcmllcy1zZWFyY2gvJHtxfWA7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlT3JkZXIoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvb3JkZXJcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29udGFjdChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9jb250YWN0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZpc2l0KGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXItdmlzaXRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZlZWRiYWNrKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2ZlZWRiYWNrXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCdXlSZXF1ZXN0cyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3Q/cGFnaW5hdGU9MjBcIjtcclxuICBpZiAocSkge1xyXG4gICAgdXJsID0gdXJsICsgcTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmRBUEkoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZm9yZ290LXBhc3N3b3JkXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVQYXNzd29yZEFQSShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91cGRhdGUtcGFzc3dvcmRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDaGF0VXBkYXRlKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtY2hhdC1tZXNzYWdlL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFZlcmlmeUVtYWlsKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtdmVyaWZ5LWVtYWlsL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3BlblN0YXR1cyhkaWFsb2dfaWQsIHN0YXR1cywgdXNlcl9pZCkge1xyXG4gIGxldCB1cmwgPVxyXG4gICAgQVBJX1VSTCArIFwiL3VwZGF0ZS1vcGVuLXN0YXR1cy9cIiArIGRpYWxvZ19pZCArIFwiL1wiICsgc3RhdHVzICsgXCIvXCIgKyB1c2VyX2lkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kRmVlZGJhY2tNZXNzYWdlKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtZmVlZGJhY2stbWVzc2FnZVwiO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihgUmVxdWVzdCByZWplY3RlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSA9ICdTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSdcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9GSUxURVJfUkVTRVQgPSBcIlNFTEVDVEVEX0ZJTFRFUl9SRVNFVFwiO1xuZXhwb3J0IGNvbnN0IFBBR0VfUFJPRFVDVFMgPSAnUEFHRV9QUk9EVUNUUydcblxuZXhwb3J0IGNvbnN0IFZBTElEX1JPVVRFUz1bXG4gICAge1xuICAgICAgICByb3V0ZTonYnV5LXJlcXVlc3QnLFxuICAgICAgICB0aXRsZTonQnV5IFJlcXVlc3QnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidwcm9kdWN0cycsXG4gICAgICAgIHRpdGxlOidQcm9kdWN0cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzLWJ1eScsXG4gICAgICAgIHRpdGxlOidQcm9kdWN0cyBCdXknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidwcm9kdWN0cy1zZWxsJyxcbiAgICAgICAgdGl0bGU6J1Byb2R1Y3RzIFNlbGwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidwcm9kdWN0cy1zZWFyY2gnLFxuICAgICAgICB0aXRsZTonUHJvZHVjdHMgU2VhcmNoJ1xuICAgIH0sXG4gICAge1xuICAgICAgICByb3V0ZTonZXZlbnRzJyxcbiAgICAgICAgdGl0bGU6J0V2ZW50cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J2ZlZWRiYWNrJyxcbiAgICAgICAgdGl0bGU6J0ZlZWRiYWNrJ1xuICAgIH0sXG5dIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL3N3aXBlci5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWltYWdlLWdhbGxlcnkvc3R5bGVzL2Nzcy9pbWFnZS1nYWxsZXJ5LmNzcyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7IC8vbnByb2dyZXNzIG1vZHVsZVxyXG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCAnY3JvcHBlcmpzL2Rpc3QvY3JvcHBlci5jc3MnO1xyXG4vLyBpbXBvcnQgXCJ+L25vZGVfbW9kdWxlcy9jb25uZWN0eWN1YmUvZGlzdC9jb25uZWN0eWN1YmUubWluLmpzXCI7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDcmVhdGVWaXNpdCwgZ2V0U2VsbGVyIH0gZnJvbSAnLi8uLi9hcGlzL2dsb2JhbC1hcGknO1xyXG5pbXBvcnQgeyBWQUxJRF9ST1VURVMgfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3dlYlB1c2gnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuLy9pbXBvcnQgeyB1cGRhdGVEZXZpY2VUb2tlbiB9IGZyb20gJy4uL3NyYy9hcGlzL2F1dGgtYXBpJztcclxuLy8gaW1wb3J0IE9uZVNpZ25hbCwgeyB1c2VPbmVTaWduYWxTZXR1cCB9IGZyb20gJ3JlYWN0LW9uZXNpZ25hbCc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICBpc3VzZXJQcm9maWxlQ29tcGxldGUoKTtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5jb25zdCBpc3VzZXJQcm9maWxlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgbGV0IHVzZXJEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogJyc7XHJcbiAgbGV0IGFjY2Vzc1Rva2VuRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICBpZiAoYWNjZXNzVG9rZW5EYXRhICYmIGFjY2Vzc1Rva2VuRGF0YSAhPSAndW5kZWZpbmVkJyAmJiB1c2VyRGF0YSkge1xyXG4gICAgLy8gc2V0VG9rZW4odXNlckRhdGEpO1xyXG4gICAgLy8gZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KHVzZXJEYXRhKVxyXG4gICAgY29uc29sZS5sb2coUm91dGVyLnJvdXRlci5yb3V0ZSk7XHJcbiAgICBpZiAoIXVzZXJEYXRhLmVtYWlsX3ZlcmlmaWVkX2F0ICYmIFJvdXRlci5yb3V0ZXIucm91dGUgIT0gJy92ZXJpZnknKSB7XHJcbiAgICAgIGdldFNlbGxlcih1c2VyRGF0YS5pZCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHVzZXIuZW1haWxfdmVyaWZpZWRfYXQgJiZcclxuICAgICAgICAgICF1c2VyLmlzX2NvbXBsZXRlICYmXHJcbiAgICAgICAgICBSb3V0ZXIucm91dGVyLmFzUGF0aCAhPSAnL3Byb2ZpbGUvZWRpdCdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9wcm9maWxlL2VkaXQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFJvdXRlci5yb3V0ZXIucm91dGUgIT0gJy9ub3QtdmVyaWZpZWQtZW1haWwnKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL25vdC12ZXJpZmllZC1lbWFpbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB1c2VyRGF0YS5lbWFpbF92ZXJpZmllZF9hdCAmJlxyXG4gICAgICAhdXNlckRhdGEuaXNfY29tcGxldGUgJiZcclxuICAgICAgUm91dGVyLnJvdXRlci5hc1BhdGggIT0gJy9wcm9maWxlL2VkaXQnXHJcbiAgICApIHtcclxuICAgICAgUm91dGVyLnB1c2goJy9wcm9maWxlL2VkaXQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFVzZXJWaXNpdCh1c2VyRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5jb25zdCBzZXRVc2VyVmlzaXQgPSAodXNlckRhdGEpID0+IHtcclxuICBsZXQgcm91dGUgPSBSb3V0ZXIucm91dGVyLnJvdXRlLnJlcGxhY2UoJy8nLCAnJyk7XHJcblxyXG4gIGlmICghcm91dGUpIHJldHVybjtcclxuXHJcbiAgaWYgKHJvdXRlID09ICdwcm9kdWN0cycpIHtcclxuICAgIGxldCB7IHR5cGUsIHMgfSA9IFJvdXRlci5yb3V0ZXIucXVlcnk7XHJcbiAgICBpZiAodHlwZSA9PSAnYnV5Jykge1xyXG4gICAgICByb3V0ZSA9ICdwcm9kdWN0cy1idXknO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gJ3NlbGwnKSB7XHJcbiAgICAgIHJvdXRlID0gJ3Byb2R1Y3RzLXNlbGwnO1xyXG4gICAgfVxyXG4gICAgaWYgKHMpIHtcclxuICAgICAgcm91dGUgPSAncHJvZHVjdHMtc2VhcmNoJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciByb3V0ZUV4aXN0ID0gVkFMSURfUk9VVEVTLmZpbmQoKG9iaikgPT4gb2JqLnJvdXRlID09PSByb3V0ZSk7XHJcbiAgY29uc29sZS5sb2coJ3JvdXRldGVzdCcsIFJvdXRlci5yb3V0ZXIsIHJvdXRlLCByb3V0ZUV4aXN0KTtcclxuICBpZiAoIXJvdXRlRXhpc3QpIHJldHVybjtcclxuXHJcbiAgbGV0IGRhdGEgPSB7XHJcbiAgICB1c2VyX2lkOiB1c2VyRGF0YS5pZCxcclxuICAgIGZlYXR1cmU6IHJvdXRlRXhpc3QudGl0bGUsXHJcbiAgfTtcclxuICBDcmVhdGVWaXNpdChkYXRhKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGNvbnN0IHNldFRva2VuID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KHVzZXJEYXRhKTtcclxuLy8gICAgIGlmICh0b2tlbikge1xyXG4vLyAgICAgICBnZXRNZXNzYWdlKCk7XHJcbi8vICAgICB9XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcbmNvbnN0IGdldE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XHJcbiAgbWVzc2FnaW5nLm9uTWVzc2FnZSgobWVzc2FnZSkgPT4gY29uc29sZS5sb2coJ2ZvcmVncm91bmQnLCBtZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtvbmVzaWduYWxpbml0LCBzZXRvbmVzaWduYWxpbml0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gdXNlT25lU2lnbmFsU2V0dXAoKCkgPT4ge1xyXG4gIC8vIGxldCB1c2VyRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgLy8gdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcclxuXHJcbiAgLy8gaWYgKHVzZXJEYXRhKSB7XHJcbiAgLy8gICBPbmVTaWduYWwuc2V0RW1haWwodXNlckRhdGEuZW1haWwpO1xyXG4gIC8vICAgT25lU2lnbmFsLnNldEV4dGVybmFsVXNlcklkKHVzZXJEYXRhLmlkKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVzZXJEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICB1c2VyRGF0YSA9IHVzZXJEYXRhID8gSlNPTi5wYXJzZSh1c2VyRGF0YSkgOiAnJztcclxuICAgIHZhciBPbmVTaWduYWwgPSB3aW5kb3cuT25lU2lnbmFsIHx8IFtdO1xyXG4gICAgdmFyIGluaXRDb25maWcgPSB7XHJcbiAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5PTkVTSUdOQUxfQVBQX0lELFxyXG4gICAgICBub3RpZnlCdXR0b246IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICBPbmVTaWduYWwucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgT25lU2lnbmFsLlNFUlZJQ0VfV09SS0VSX1BBUkFNID0geyBzY29wZTogJy9zdWJkaXJlY3RvcnkvJyB9O1xyXG4gICAgICAgIE9uZVNpZ25hbC5TRVJWSUNFX1dPUktFUl9QQVRIID0gJ3N1YmRpcmVjdG9yeS9PbmVTaWduYWxTREtXb3JrZXIuanMnO1xyXG4gICAgICAgIE9uZVNpZ25hbC5TRVJWSUNFX1dPUktFUl9VUERBVEVSX1BBVEggPVxyXG4gICAgICAgICAgJ3N1YmRpcmVjdG9yeS9PbmVTaWduYWxTREtVcGRhdGVyV29ya2VyLmpzJztcclxuICAgICAgICBpZiAoIW9uZXNpZ25hbGluaXQpIHtcclxuICAgICAgICAgIE9uZVNpZ25hbC5pbml0KGluaXRDb25maWcpO1xyXG4gICAgICAgICAgc2V0b25lc2lnbmFsaW5pdCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgT25lU2lnbmFsLmdldFVzZXJJZChmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgICAgICAgICBpZiAodXNlcklkICE9IHVzZXJEYXRhLmRldmljZV90b2tlbikge1xyXG4gICAgICAgICAgICB1cGRhdGVEZXZpY2VUb2tlbih1c2VyRGF0YS5pZCwgdXNlcklkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICB1c2VyRGF0YS5kZXZpY2VfdG9rZW4gPSB1c2VySWQ7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSwgdXNlcklkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBPbmVTaWduYWwuc2VuZFRhZygndXNlcicsIHVzZXJEYXRhLmlkKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaXN1c2VyUHJvZmlsZUNvbXBsZXRlKCk7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGNvbnN0IHNldFRva2VuID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XHJcblxyXG4gIC8vICAgLy8gdHJ5IHtcclxuICAvLyAgIC8vICAgY29uc3QgdG9rZW4gPSBhd2FpdCBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nLmluaXQodXNlckRhdGEpO1xyXG4gIC8vICAgLy8gICBpZiAodG9rZW4pIHtcclxuICAvLyAgIC8vICAgICBnZXRNZXNzYWdlKCk7XHJcbiAgLy8gICAvLyAgIH1cclxuICAvLyAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyAgIC8vIH1cclxuXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Ib21lUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgQUREX1ZJU0lURUQgPSAnQUREX1ZJU0lURUQnXG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZJU0lURUQgPSAnUkVNT1ZFX1ZJU0lURUQnXG5leHBvcnQgY29uc3QgRkVUQ0hfVklTSVRFRCA9ICdGRVRDSF9WSVNJVEVEJyIsImV4cG9ydCBjb25zdCBBVVRIRU5USUNBVEVEID0gXCJBVVRIRU5USUNBVEVEXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0RFVklDRV9UT0tFTiA9IFwiVVBEQVRFX0RFVklDRV9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSEVOVElDQVRFRCA9IFwiVU5BVVRIRU5USUNBVEVEXCI7IiwiZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSBcIlNIT1dfTU9EQUxcIjtcbmV4cG9ydCBjb25zdCBDTE9TRV9NT0RBTCA9IFwiQ0xPU0VfTU9EQUxcIjtcbiIsImV4cG9ydCBjb25zdCBDSEFUX0NPTk5FQ1RFRCA9IFwiQ0hBVF9DT05ORUNURURcIjtcbmV4cG9ydCBjb25zdCBDSEFUX1JFU0VUID0gXCJDSEFUX1JFU0VUXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9VTlJFQUQgPSBcIkNIQVRfVU5SRUFEXCI7XG5leHBvcnQgY29uc3QgQ0hBVF9VTlJFQURfUkVTRVQgPSBcIkNIQVRfVU5SRUFEX1JFU0VUXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9BVVRIRU5USUNBVEVEXG4gICAgPSBcIkNIQVRfQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVU5BVVRIRU5USUNBVEVEID0gXCJDSEFUX1VOQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVVBEQVRFX1VTRVIgPSBcIkNIQVRfVVBEQVRFX1VTRVJcIjsiLCJleHBvcnQgY29uc3QgRkVUQ0hfRElBTE9HUyA9IFwiRkVUQ0hfRElBTE9HU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9ESUFMT0cgPSBcIkFERF9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBTT1JUX0RJQUxPR1MgPSBcIlNPUlRfRElBTE9HU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ESUFMT0cgPSBcIlVQREFURV9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfRElBTE9HID0gXCJERUxFVEVfRElBTE9HXCI7XG4iLCJleHBvcnQgY29uc3QgU0VUX01FU1NBR0VTID0gXCJTRVRfTUVTU0FHRVNcIjtcbmV4cG9ydCBjb25zdCBQVVNIX01FU1NBR0UgPSBcIlBVU0hfTUVTU0FHRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9BTExfTUVTU0FHRVMgPSBcIkRFTEVURV9BTExfTUVTU0FHRVNcIjtcbmV4cG9ydCBjb25zdCBMQVpZX0ZFVENIX01FU1NBR0VTID0gXCJMQVpZX0ZFVENIX01FU1NBR0VTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX01FU1NBR0VTID0gXCJVUERBVEVfTUVTU0FHRVNcIjtcbiIsImV4cG9ydCBjb25zdCBTRUxFQ1RFRF9ESUFMT0cgPSBcIlNFTEVDVEVEX0RJQUxPR1wiO1xuZXhwb3J0IGNvbnN0IFVOX1NFTEVDVEVEX0RJQUxPRyA9IFwiVU5fU0VMRUNURURfRElBTE9HXCI7XG4iLCJpbXBvcnQgeyBBRERfVklTSVRFRCwgUkVNT1ZFX1ZJU0lURUQsIEZFVENIX1ZJU0lURUQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvUGFnZVZpc2l0ZWRcIjtcblxubGV0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVklTSVRFRDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyciwgYWN0aW9uLnBheWxvYWQuaXRlbSlcbiAgICAgICAgICAgIGxldCBhcnIgPSBzdGF0ZVxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLml0ZW0pIHtcbiAgICAgICAgICAgICAgICBhcnIgPSBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkLml0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuXG4gICAgICAgIGNhc2UgUkVNT1ZFX1ZJU0lURUQ6XG4gICAgICAgICAgICBsZXQgYXJyMiA9IHN0YXRlXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaXRlbSkge1xuICAgICAgICAgICAgICAgIGFycjIgPSBzdGF0ZS5wb3AoYWN0aW9uLnBheWxvYWQuaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVOQVVUSEVOVElDQVRFRCwgQVVUSEVOVElDQVRFRCwgVVBEQVRFX0RFVklDRV9UT0tFTn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2F1dGhcIjtcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSdcbmltcG9ydCB7IFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCwgU0VMRUNURURfRklMVEVSX1VOSVZFUlNJVFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge30sXG4gIGFjY2Vzc1Rva2VuOiBcIlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVVUSEVOVElDQVRFRDpcbiAgICAgIGNvbnN0IHsgdXNlciwgYWNjZXNzVG9rZW4sIHVzZXJGYXZFdmVudHMsIHVzZXJGYXZQcm9kdWN0cyB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZFdmVudHNcIiwgdXNlckZhdkV2ZW50cyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZQcm9kdWN0c1wiLCB1c2VyRmF2UHJvZHVjdHMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1JFU0VULCBmYWxzZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgfTtcbiAgICBjYXNlIFVQREFURV9ERVZJQ0VfVE9LRU46XG4gICAgICBsZXQgeyB0b2tlbiB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIGxldCB1ID0gc3RhdGUudXNlclxuICAgICAgdS5kZXZpY2VfdG9rZW4gPSB0b2tlblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHUpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB1LFxuXG4gICAgICB9O1xuXG5cbiAgICBjYXNlIFVOQVVUSEVOVElDQVRFRDpcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBcIlwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzVG9rZW5cIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZFdmVudHNcIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZQcm9kdWN0c1wiLCBcIlwiKTtcbiAgICAgIGxvY2FsZm9yYWdlLnJlbW92ZUl0ZW0oJ2ZjbV90b2tlbicpXG4gICAgICBsb2NhbGZvcmFnZS5yZW1vdmVJdGVtKCdmY21fdG9rZW5fdXNlcicpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSwgJycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1JFU0VULCBmYWxzZSk7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCBkYXRhID0gXCJcIjtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV0IHVzZXJEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgICAgICBsZXQgdXNlckZhdkV2ZW50cyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJGYXZFdmVudHNcIik7XG4gICAgICAgIGxldCB1c2VyRmF2UHJvZHVjdHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRmF2UHJvZHVjdHNcIik7XG4gICAgICAgIGFjY2Vzc1Rva2VuRGF0YSA9XG4gICAgICAgICAgYWNjZXNzVG9rZW5EYXRhICYmIGFjY2Vzc1Rva2VuRGF0YSAhPSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGFjY2Vzc1Rva2VuRGF0YVxuICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICBpZiAodXNlckRhdGEgJiYgYWNjZXNzVG9rZW5EYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHVzZXJEYXRhLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuRGF0YSxcbiAgICAgICAgICAgIHVzZXJGYXZFdmVudHM6IHVzZXJGYXZFdmVudHMsXG4gICAgICAgICAgICB1c2VyRmF2UHJvZHVjdHM6IHVzZXJGYXZQcm9kdWN0c1xuXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiBpbml0aWFsU3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNIT1dfTU9EQUwsIENMT1NFX01PREFMIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2F1dGhNb2RhbFwiO1xuXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgQ0xPU0VfTU9EQUw6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9DT05ORUNURUQsIENIQVRfUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdENvbm5lY3RlZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQ0hBVF9DT05ORUNURUQ6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBjYXNlIENIQVRfUkVTRVQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDSEFUX1VOUkVBRF9SRVNFVCwgQ0hBVF9VTlJFQUQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVucmVhZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IDAsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDSEFUX1VOUkVBRDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhY3Rpb24uY291bnQpO1xuXG4gICAgICAgIGNhc2UgQ0hBVF9VTlJFQURfUkVTRVQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9BVVRIRU5USUNBVEVELCBDSEFUX1VOQVVUSEVOVElDQVRFRCwgQ0hBVF9VUERBVEVfVVNFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9jaGF0VXNlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdXJyZW50VXNlciA9IG51bGwsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDSEFUX0FVVEhFTlRJQ0FURUQ6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50VXNlclxuXG4gICAgICAgIGNhc2UgQ0hBVF9VUERBVEVfVVNFUjoge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihjdXJyZW50VXNlci51c2VyLCBhY3Rpb24ucGF5bG9hZC5jdXJyZW50VXNlcilcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyLnVzZXIgPSByZXN1bHRcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRVc2VyIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIENIQVRfVU5BVVRIRU5USUNBVEVEOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50VXNlcjtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gIEZFVENIX0RJQUxPR1MsXG4gIEFERF9ESUFMT0csXG4gIFNPUlRfRElBTE9HUyxcbiAgVVBEQVRFX0RJQUxPRyxcbiAgREVMRVRFX0RJQUxPRyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgdXBkYXRlRGlhbG9nLCBzb3J0ZWREaWFsb2cgfSBmcm9tIFwiLi9yZWR1Y2VyLWZ1bmN0aW9uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGRpYWxvZ3MgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0RJQUxPR1M6XG4gICAgICByZXR1cm4gYWN0aW9uLmRpYWxvZ3M7XG5cbiAgICBjYXNlIFVQREFURV9ESUFMT0c6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVwZGF0ZURpYWxvZyhhY3Rpb24sIGRpYWxvZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9ESUFMT0c6XG4gICAgICByZXR1cm4gW2FjdGlvbi5kaWFsb2csIC4uLmRpYWxvZ3NdO1xuXG4gICAgY2FzZSBTT1JUX0RJQUxPR1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRlZERpYWxvZyhhY3Rpb24sIGRpYWxvZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESUFMT0c6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRpYWxvZ3MuZmlsdGVyKChkaWFsb2cpID0+IGRpYWxvZy5pZCAhPT0gYWN0aW9uLmRpYWxvZ0lkKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaWFsb2dzO1xuICB9XG59O1xuXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBhdXRoX3VzZXIgZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IGF1dGhfbW9kYWwgZnJvbSBcIi4vYXV0aE1vZGFsXCI7XG5pbXBvcnQgY2hhdF91c2VyIGZyb20gXCIuL2NoYXRVc2VyXCI7XG5pbXBvcnQgZGlhbG9ncyBmcm9tIFwiLi9kaWFsb2dzXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBzZWxlY3RlZERpYWxvZyBmcm9tIFwiLi9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IHBhZ2VWaXNpdGVkIGZyb20gXCIuL1BhZ2VWaXNpdGVkXCI7XG5pbXBvcnQgY2hhdEF1dGhlbnRpY2F0ZWQgZnJvbSBcIi4vY2hhdFVzZXJcIjtcbmltcG9ydCBjaGF0Q29ubmVjdGVkIGZyb20gXCIuL2NoYXRDb25uZWN0ZWRcIjtcbmltcG9ydCBjaGF0VW5yZWFkQ291bnQgZnJvbSBcIi4vY2hhdFVucmVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoX3VzZXIsXG4gIGF1dGhfbW9kYWwsXG4gIGNoYXRfdXNlcixcbiAgZGlhbG9ncyxcbiAgbWVzc2FnZXMsXG4gIHNlbGVjdGVkRGlhbG9nLFxuICBwYWdlVmlzaXRlZCxcbiAgY2hhdEF1dGhlbnRpY2F0ZWQsXG4gIGNoYXRDb25uZWN0ZWQsXG4gIGNoYXRVbnJlYWRDb3VudFxufSk7XG4iLCJpbXBvcnQge1xuICBQVVNIX01FU1NBR0UsXG4gIFNFVF9NRVNTQUdFUyxcbiAgREVMRVRFX0FMTF9NRVNTQUdFUyxcbiAgTEFaWV9GRVRDSF9NRVNTQUdFUyxcbiAgVVBEQVRFX01FU1NBR0VTLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNFTEVDVEVEX0RJQUxPRyB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tIFwiY29ubmVjdHljdWJlXCI7XG5cbmltcG9ydCB7IGxhenlGZXRjaE1lc3NhZ2VzLCB1cGRhdGVTdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3JlZHVjZXItZnVuY3Rpb25cIjtcblxubGV0IGluaXRpYWxfc3RhdGUgPSB7XG4gIGRpYWxvZzoge30sXG4gIG1lc3NhZ2VzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAobWVzc2FnZXMgPSBpbml0aWFsX3N0YXRlLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUVTU0FHRVM6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBhY3Rpb24ubXNncztcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGFjdGlvbi5kaWFsb2c7XG4gICAgICByZXR1cm4geyBkaWFsb2c6IGRpYWxvZywgbWVzc2FnZXM6IG1zZ3MgfTtcbiAgICB9XG5cbiAgICAvLyBjYXNlIFNFTEVDVEVEX0RJQUxPRzoge1xuICAgIC8vICAgY29uc29sZS5sb2coYWN0aW9uKVxuICAgIC8vICAgY29uc3QgZGlhbG9nID0gYWN0aW9uLmRpYWxvZztcbiAgICAvLyAgIHJldHVybiB7IC4uLm1lc3NhZ2VzLCBkaWFsb2c6IGRpYWxvZyB9O1xuICAgIC8vIH1cblxuXG4gICAgY2FzZSBQVVNIX01FU1NBR0U6IHtcbiAgICAgIGxldCBtc2cgPSBhY3Rpb24ubXNnXG4gICAgICBpZiAobXNnICYmIG1zZy5kaWFsb2dfaWQgPT0gbWVzc2FnZXMuZGlhbG9nLmNvbm5lY3R5X2RpYWxvZ19pZCkge1xuICAgICAgICBpZiAobXNnLm5vdGlmKSB7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgcmVhZDogMSxcbiAgICAgICAgICAgIGNoYXRfZGlhbG9nX2lkOiBtc2cuZGlhbG9nX2lkXG4gICAgICAgICAgfTtcbiAgICAgICAgICBDb25uZWN0eUN1YmUuY2hhdC5tZXNzYWdlXG4gICAgICAgICAgICAudXBkYXRlKFwiXCIsIHBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMubWVzc2FnZXMuY29uY2F0KGFjdGlvbi5tc2cpO1xuICAgICAgICByZXR1cm4geyAuLi5tZXNzYWdlcywgbWVzc2FnZXM6IG1zZ3MgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcbiAgICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBhcHBfaWQ6IHByb2Nlc3MuZW52Lk9ORVNJR05BTF9BUFBfSUQsXG4gICAgICAgICAgICBjb250ZW50czogeyBcImVuXCI6IFwiWW91IHJlY2lldmVkIGEgbmV3IG1lc3NhZ2UuXCIgfSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgeyBcImZpZWxkXCI6IFwidGFnXCIsIFwia2V5XCI6IFwidXNlclwiLCBcInJlbGF0aW9uXCI6IFwiPVwiLCBcInZhbHVlXCI6IHVzZXJEYXRhLmlkIH0sXG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vbmVzaWduYWwuY29tL2FwaS92MS9ub3RpZmljYXRpb25zXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgXCIgKyBwcm9jZXNzLmVudi5PTkVTSUdOQUxfUkVTVF9LRVksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLFxuICAgICAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBSZXF1ZXN0IHJlamVjdGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlRGF0YXNhZHNhZFwiLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwicmVzcG9uc2VEYXRhc2Fkc2FkXCIsIGVycm9yKSk7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgICByZXR1cm4gbWVzc2FnZXNcblxuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0FMTF9NRVNTQUdFUzoge1xuXG4gICAgICByZXR1cm4gaW5pdGlhbF9zdGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGluaXRpYWxfc3RhdGU7XG4gIH1cbn07XG4iLCJjb25zdCB1cGRhdGVEaWFsb2cgPSAoYWN0aW9uLCBkaWFsb2dzKSA9PiB7XG4gIGNvbnN0IGFscmVhZHlVcGRhdGVkRGlhbG9nID0gZGlhbG9ncy5tYXAoKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gYWN0aW9uLmRpYWxvZy5pZCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZWxlbSwgYWN0aW9uLmRpYWxvZyk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcbiAgcmV0dXJuIFsuLi5hbHJlYWR5VXBkYXRlZERpYWxvZ107XG59O1xuXG5jb25zdCBsYXp5RmV0Y2hNZXNzYWdlcyA9IChhY3Rpb24sIG1lc3NhZ2VzKSA9PiB7XG4gIGNvbnN0IG5ld0FyciA9IGFjdGlvbi5oaXN0b3J5LnJldmVyc2UoKS5jb25jYXQobWVzc2FnZXNbYWN0aW9uLmRpYWxvZ0lkXSk7XG4gIHJldHVybiB7IC4uLnt9LCBbYWN0aW9uLmRpYWxvZ0lkXTogbmV3QXJyIH07XG59O1xuXG5jb25zdCBzb3J0ZWREaWFsb2cgPSAoYWN0aW9uLCBkaWFsb2dzKSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgY291bnQgfSA9IGFjdGlvbjtcbiAgY29uc3QgdXBkYXRlRGlhbG9nID0gZGlhbG9ncy5tYXAoKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gbWVzc2FnZS5kaWFsb2dfaWQpIHtcbiAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgbGFzdF9tZXNzYWdlOiBtZXNzYWdlLmJvZHksXG4gICAgICAgIGxhc3RfbWVzc2FnZV9kYXRlX3NlbnQ6IG1lc3NhZ2UuZGF0ZV9zZW50LFxuICAgICAgICB1cGRhdGVkX2RhdGU6IG1lc3NhZ2UuZGF0ZV9zZW50LFxuICAgICAgICB1bnJlYWRfbWVzc2FnZXNfY291bnQ6IGNvdW50XG4gICAgICAgICAgPyAoZWxlbS51bnJlYWRfbWVzc2FnZXNfY291bnQgKz0gMSlcbiAgICAgICAgICA6IGVsZW0udW5yZWFkX21lc3NhZ2VzX2NvdW50LFxuICAgICAgfTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGVsZW0sIG5ld09iaik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcblxuICBjb25zdCBzb3J0ID0gKGl0ZW1zLCBpbnZlcnRlZCA9IGZhbHNlKSA9PlxuICAgIGl0ZW1zLnNvcnQoKGl0ZW1BLCBpdGVtQikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgbmV3IERhdGUoaXRlbUIubGFzdF9tZXNzYWdlX2RhdGVfc2VudCAqIDEwMDApIC1cbiAgICAgICAgbmV3IERhdGUoaXRlbUEubGFzdF9tZXNzYWdlX2RhdGVfc2VudCAqIDEwMDApO1xuICAgICAgcmV0dXJuIGludmVydGVkID8gIXJlc3VsdCA6IHJlc3VsdDtcbiAgICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBzb3J0KHVwZGF0ZURpYWxvZyk7XG5cbiAgcmV0dXJuIFsuLi5yZXN1bHRdO1xufTtcblxuY29uc3QgdXBkYXRlU3RhdHVzTWVzc2FnZXMgPSAoYWN0aW9uLCBtZXNzYWdlKSA9PiB7XG4gIGlmIChPYmplY3Qua2V5cyhtZXNzYWdlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIGNvbnN0IG5ld01lc3NhZ2VzID0gbWVzc2FnZVthY3Rpb24uZGlhbG9nSWRdLm1hcCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gYWN0aW9uLm1zZ0lkKSB7XG4gICAgICBjb25zdCB1cGRhdGVTZW5kU3RhdHVzID0geyAuLi5lbGVtIH07XG4gICAgICB1cGRhdGVTZW5kU3RhdHVzLnNlbmRfc3RhdGUgPSBhY3Rpb24ubXNnLnNlbmRfc3RhdGU7XG4gICAgICByZXR1cm4geyAuLi51cGRhdGVTZW5kU3RhdHVzIH07XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSB7IC4uLm1lc3NhZ2UsIFthY3Rpb24uZGlhbG9nSWRdOiBuZXdNZXNzYWdlcyB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBmZXRjaFVzZXJzID0gKGFjdGlvbiwgdXNlcnMpID0+IHtcbiAgY29uc3QgbmV3T2JqVXNlcnMgPSB7fTtcbiAgYWN0aW9uLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXdPYmpVc2Vyc1tlbGVtLmlkXSA9IGVsZW07XG4gIH0pO1xuICByZXR1cm4geyAuLi51c2VycywgLi4ubmV3T2JqVXNlcnMgfTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZURpYWxvZyxcbiAgbGF6eUZldGNoTWVzc2FnZXMsXG4gIHNvcnRlZERpYWxvZyxcbiAgdXBkYXRlU3RhdHVzTWVzc2FnZXMsXG4gIGZldGNoVXNlcnMsXG59O1xuIiwiaW1wb3J0IHtcbiAgU0VMRUNURURfRElBTE9HLFxuICBVTl9TRUxFQ1RFRF9ESUFMT0csXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9zZWxlY3RlZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoZGlhbG9nID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFTEVDVEVEX0RJQUxPRzoge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLmRpYWxvZyB9O1xuICAgIH1cblxuICAgIGNhc2UgVU5fU0VMRUNURURfRElBTE9HOiB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaWFsb2c7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpOlwiXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJyxcclxuICB9LFxyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyM5MTZkZDUnLFxyXG4gICAgICBjb250cmFzdFRleHQ6ICcjRkZGJ1xyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAnIzMzMjcxQydcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiByZWQuQTQwMFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmZmYnXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbnRoZW1lLnR5cG9ncmFwaHkuaDEgPSB7XHJcbiAgZm9udFNpemU6ICc1LjZyZW0nLFxyXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgIGZvbnRTaXplOiAnMy41cmVtJyxcclxuICB9LFxyXG59O1xyXG5cclxudGhlbWUudHlwb2dyYXBoeS5oMiA9IHtcclxuICBmb250U2l6ZTogJzMuNnJlbScsXHJcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgZm9udFNpemU6ICcyLjVyZW0nLFxyXG4gIH0sXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICBmb250U2l6ZTogJzIuMXJlbScsXHJcbiAgfSxcclxufTtcclxuXHJcbnRoZW1lLnR5cG9ncmFwaHkuaDMgPSB7XHJcbiAgZm9udFNpemU6ICcyLjRyZW0nLFxyXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgIGZvbnRTaXplOiAnMnJlbScsXHJcbiAgfSxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgIGZvbnRTaXplOiAnMS42cmVtJyxcclxuICB9LFxyXG59O1xyXG5cclxudGhlbWUudHlwb2dyYXBoeS5oNCA9IHtcclxuICBmb250U2l6ZTogJzJyZW0nLFxyXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgIGZvbnRTaXplOiAnMS42cmVtJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxLjZyZW0nLFxyXG4gIH0sXHJcbn07XHJcblxyXG50aGVtZS50eXBvZ3JhcGh5Lmg1ID0ge1xyXG4gIGZvbnRTaXplOiAnMS44cmVtJyxcclxuICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICBmb250U2l6ZTogJzEuNHJlbScsXHJcbiAgfSxcclxufTtcclxuXHJcbnRoZW1lLnR5cG9ncmFwaHkuaDYgPSB7XHJcbiAgZm9udFNpemU6ICcxLjRyZW0nLFxyXG4gIGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsImltcG9ydCAnZmlyZWJhc2UvbWVzc2FnaW5nJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSdcbmltcG9ydCB7IHVwZGF0ZURldmljZVRva2VuIH0gZnJvbSAnLi4vc3JjL2FwaXMvYXV0aC1hcGknXG5cbmNvbnN0IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgPSB7XG4gICAgdG9rZW5JbmxvY2FsZm9yYWdlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbGZvcmFnZS5nZXRJdGVtKCdmY21fdG9rZW4nKVxuICAgIH0sXG5cbiAgICB1c2VySW5sb2NhbGZvcmFnZTogYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxmb3JhZ2UuZ2V0SXRlbSgnZmNtX3Rva2VuX3VzZXInKVxuICAgIH0sXG5cbiAgICBpbml0OiBhc3luYyBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LnByb2plY3RJZCxcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5tZXNzYWdpbmdTZW5kZXJJZCxcbiAgICAgICAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5hcHBJZCxcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IHRoaXMudXNlcklubG9jYWxmb3JhZ2UoKVxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5pZCA9PSBwcm9wcy5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuSW5Mb2NhbEZvcmFnZSA9IGF3YWl0IHRoaXMudG9rZW5JbmxvY2FsZm9yYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuSW5Mb2NhbEZvcmFnZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbkluTG9jYWxGb3JhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKClcbiAgICAgICAgICAgIGF3YWl0IG1lc3NhZ2luZy5yZXF1ZXN0UGVybWlzc2lvbigpXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1N1cHBvcnRlZCcsIG1lc3NhZ2luZy5pc1N1cHBvcnRlZCgpKVxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBtZXNzYWdpbmcuZ2V0VG9rZW4oKVxuICAgICAgICAgICAgdXBkYXRlRGV2aWNlVG9rZW4ocHJvcHMuaWQsIHRva2VuKVxuXG4gICAgICAgICAgICBsb2NhbGZvcmFnZS5zZXRJdGVtKCdmY21fdG9rZW4nLCB0b2tlbilcbiAgICAgICAgICAgIGxvY2FsZm9yYWdlLnNldEl0ZW0oJ2ZjbV90b2tlbl91c2VyJywgcHJvcHMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmNtX3Rva2VuJywgdG9rZW4pXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmY21lcnJvcicsIGVycm9yKVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuZXhwb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0eWN1YmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL21lc3NhZ2luZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2NhbGZvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9