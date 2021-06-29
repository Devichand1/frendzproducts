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

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "/vFe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hMGF");
/* harmony import */ var _reducer_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EeYq");


/* harmony default export */ __webpack_exports__["a"] = ((dialogs = [], action) => {
  switch (action.type) {
    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DIALOGS */ "c"]:
      return action.dialogs;

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_DIALOG */ "e"]:
      {
        const result = Object(_reducer_function__WEBPACK_IMPORTED_MODULE_1__[/* updateDialog */ "b"])(action, dialogs);
        return result;
      }

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__[/* ADD_DIALOG */ "a"]:
      return [action.dialog, ...dialogs];

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__[/* SORT_DIALOGS */ "d"]:
      {
        const result = Object(_reducer_function__WEBPACK_IMPORTED_MODULE_1__[/* sortedDialog */ "a"])(action, dialogs);
        return result;
      }

    case _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__[/* DELETE_DIALOG */ "b"]:
      {
        const result = dialogs.filter(dialog => dialog.id !== action.dialogId);
        return result;
      }

    default:
      return dialogs;
  }
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "2Sww":
/***/ (function(module, exports) {



/***/ }),

/***/ "2mpK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export signup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return simpleSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return googleSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return editProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return updateProfileImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UpdateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DeleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UpdateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Favourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetUserFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetUserRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddProductRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UpdateProductRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ResetPasswordAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return updateDeviceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return verifyEmail; });
const API_URL = "http://fanto.in/admin/api";
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "EeYq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateDialog; });
/* unused harmony export lazyFetchMessages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortedDialog; });
/* unused harmony export updateStatusMessages */
/* unused harmony export fetchUsers */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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

/***/ "FDB9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PUSH_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LAZY_FETCH_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_MESSAGES; });
const SET_MESSAGES = "SET_MESSAGES";
const PUSH_MESSAGE = "PUSH_MESSAGE";
const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES";
const LAZY_FETCH_MESSAGES = "LAZY_FETCH_MESSAGES";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__("zDcZ");

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__("p6Nx");

// EXTERNAL MODULE: ./node_modules/react-image-gallery/styles/css/image-gallery.css
var image_gallery = __webpack_require__("2Sww");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/store.js + 9 modules
var store = __webpack_require__("fTHX");

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__("pdi6");

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__("rMck");

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.css
var cropper = __webpack_require__("YQfW");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/apis/global-api.js
var global_api = __webpack_require__("vGTh");

// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// EXTERNAL MODULE: external "firebase/messaging"
var messaging_ = __webpack_require__("dIt4");

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// EXTERNAL MODULE: ./src/apis/auth-api.js
var auth_api = __webpack_require__("2mpK");

// CONCATENATED MODULE: ./utils/webPush.js




const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return external_localforage_default.a.getItem('fcm_token');
  },
  userInlocalforage: async () => {
    return external_localforage_default.a.getItem('fcm_token_user');
  },
  init: async function (props) {
    let data = {
      apiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.projectId,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    };

    if (!app_default.a.apps.length) {
      app_default.a.initializeApp(data);
    }

    try {
      let user = await this.userInlocalforage();

      if (user && user.id == props.id) {
        const tokenInLocalForage = await this.tokenInlocalforage();

        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
      }

      const messaging = app_default.a.messaging();
      await messaging.requestPermission(); // console.log('isSupported', messaging.isSupported())

      const token = await messaging.getToken();
      Object(auth_api["r" /* updateDeviceToken */])(props.id, token);
      external_localforage_default.a.setItem('fcm_token', token);
      external_localforage_default.a.setItem('fcm_token_user', props);
      console.log('fcm_token', token);
      return token;
    } catch (error) {
      console.log('fcmerror', error);
    }
  }
};

// CONCATENATED MODULE: ./src/pages/_app.js
var __jsx = external_react_default.a.createElement;









 //nprogress module



 // import "~/node_modules/connectycube/dist/connectycube.min.js";






 //import { updateDeviceToken } from '../src/apis/auth-api';
// import OneSignal, { useOneSignalSetup } from 'react-onesignal';

router_default.a.events.on('routeChangeStart', () => {
  external_nprogress_default.a.start();
});
router_default.a.events.on('routeChangeComplete', () => {
  isuserProfileComplete();
  external_nprogress_default.a.done();
});
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done());

const isuserProfileComplete = () => {
  let userData = window.localStorage.getItem('user');
  userData = userData ? JSON.parse(userData) : '';
  let accessTokenData = window.localStorage.getItem('accessToken');

  if (accessTokenData && accessTokenData != 'undefined' && userData) {
    // setToken(userData);
    // firebaseCloudMessaging.init(userData)
    console.log(router_default.a.router.route);

    if (!userData.email_verified_at && router_default.a.router.route != '/verify') {
      Object(global_api["o" /* getSeller */])(userData.id).then(user => {
        if (user.email_verified_at && !user.is_complete && router_default.a.router.asPath != '/profile/edit') {
          localStorage.setItem('user', JSON.stringify(user));
          router_default.a.push('/profile/edit');
        } else if (router_default.a.router.route != '/not-verified-email') {
          router_default.a.push('/not-verified-email');
        }
      });
      return false;
    } else if (userData.email_verified_at && !userData.is_complete && router_default.a.router.asPath != '/profile/edit') {
      router_default.a.push('/profile/edit');
    } else {
      setUserVisit(userData);
    }
  }
};

const setUserVisit = userData => {
  let route = router_default.a.router.route.replace('/', '');
  if (!route) return;

  if (route == 'products') {
    let {
      type,
      s
    } = router_default.a.router.query;

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

  var routeExist = constants["c" /* VALID_ROUTES */].find(obj => obj.route === route);
  console.log('routetest', router_default.a.router, route, routeExist);
  if (!routeExist) return;
  let data = {
    user_id: userData.id,
    feature: routeExist.title
  };
  Object(global_api["c" /* CreateVisit */])(data).then(data => {
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
  const messaging = app_default.a.messaging();
  messaging.onMessage(message => console.log('foreground', message));
};

function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const router = Object(router_["useRouter"])();
  const {
    0: onesignalinit,
    1: setonesignalinit
  } = Object(external_react_["useState"])(false); // useOneSignalSetup(() => {
  // let userData = window.localStorage.getItem("user");
  // userData = userData ? JSON.parse(userData) : "";
  // if (userData) {
  //   OneSignal.setEmail(userData.email);
  //   OneSignal.setExternalUserId(userData.id);
  // }
  // });

  external_react_default.a.useEffect(() => {
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

  return __jsx(external_react_redux_["Provider"], {
    store: store["a" /* default */]
  }, __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("title", null, "HomePage"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  })), __jsx(styles_["ThemeProvider"], {
    theme: theme["a" /* default */]
  }, __jsx(CssBaseline_default.a, null), __jsx(Component, pageProps))));
}

/***/ }),

/***/ "PAnh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECTED_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UN_SELECTED_DIALOG; });
const SELECTED_DIALOG = "SELECTED_DIALOG";
const UN_SELECTED_DIALOG = "UN_SELECTED_DIALOG";

/***/ }),

/***/ "PYzf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHAT_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHAT_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHAT_UPDATE_USER; });
const CHAT_AUTHENTICATED = "CHAT_AUTHENTICATED";
const CHAT_UNAUTHENTICATED = "CHAT_UNAUTHENTICATED";
const CHAT_UPDATE_USER = "CHAT_UPDATE_USER";

/***/ }),

/***/ "QLiB":
/***/ (function(module, exports) {

module.exports = require("connectycube");

/***/ }),

/***/ "X7BR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTED_FILTER_UNIVERSITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECTED_FILTER_RESET; });
/* unused harmony export PAGE_PRODUCTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VALID_ROUTES; });
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

/***/ "YQfW":
/***/ (function(module, exports) {



/***/ }),

/***/ "c34z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHAT_UNREAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHAT_UNREAD_RESET; });
const CHAT_UNREAD = "CHAT_UNREAD";
const CHAT_UNREAD_RESET = "CHAT_UNREAD_RESET";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dIt4":
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "fTGU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_DEVICE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNAUTHENTICATED; });
const AUTHENTICATED = "AUTHENTICATED";
const UPDATE_DEVICE_TOKEN = "UPDATE_DEVICE_TOKEN";
const UNAUTHENTICATED = "UNAUTHENTICATED";

/***/ }),

/***/ "fTHX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./src/redux/actionTypes/auth.js
var auth = __webpack_require__("fTGU");

// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// CONCATENATED MODULE: ./src/redux/reducers/auth.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  user: {},
  accessToken: ""
};
/* harmony default export */ var reducers_auth = (function (state = initialState, action) {
  switch (action.type) {
    case auth["a" /* AUTHENTICATED */]:
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
      localStorage.setItem(constants["a" /* SELECTED_FILTER_RESET */], false);
      return _objectSpread(_objectSpread({}, state), {}, {
        user: user,
        accessToken: accessToken
      });

    case auth["c" /* UPDATE_DEVICE_TOKEN */]:
      let {
        token
      } = action.payload;
      let u = state.user;
      u.device_token = token;
      localStorage.setItem("user", JSON.stringify(u));
      return _objectSpread(_objectSpread({}, state), {}, {
        user: u
      });

    case auth["b" /* UNAUTHENTICATED */]:
      localStorage.setItem("user", "");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("userFavEvents", "");
      localStorage.setItem("userFavProducts", "");
      external_localforage_default.a.removeItem('fcm_token');
      external_localforage_default.a.removeItem('fcm_token_user');
      localStorage.setItem(constants["b" /* SELECTED_FILTER_UNIVERSITY */], '');
      localStorage.setItem(constants["a" /* SELECTED_FILTER_RESET */], false);
      return initialState;

    default:
      let data = "";

      if (false) {}

      return data ? data : initialState;
  }
});
// EXTERNAL MODULE: ./src/redux/actionTypes/authModal.js
var authModal = __webpack_require__("owve");

// CONCATENATED MODULE: ./src/redux/reducers/authModal.js

let authModal_initialState = {
  show: false
};
/* harmony default export */ var reducers_authModal = (function (state = authModal_initialState, action) {
  switch (action.type) {
    case authModal["b" /* SHOW_MODAL */]:
      return true;

    case authModal["a" /* CLOSE_MODAL */]:
      return false;

    default:
      return authModal_initialState;
  }
});
// EXTERNAL MODULE: ./src/redux/actionTypes/chatUser.js
var chatUser = __webpack_require__("PYzf");

// CONCATENATED MODULE: ./src/redux/reducers/chatUser.js
function chatUser_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function chatUser_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { chatUser_ownKeys(Object(source), true).forEach(function (key) { chatUser_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { chatUser_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function chatUser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var reducers_chatUser = (function (currentUser = null, action) {
  switch (action.type) {
    case chatUser["a" /* CHAT_AUTHENTICATED */]:
      return action.payload.currentUser;

    case chatUser["c" /* CHAT_UPDATE_USER */]:
      {
        const result = Object.assign(currentUser.user, action.payload.currentUser);
        currentUser.user = result;
        return chatUser_objectSpread({}, currentUser);
      }

    case chatUser["b" /* CHAT_UNAUTHENTICATED */]:
      return null;

    default:
      return currentUser;
  }
});
// EXTERNAL MODULE: ./src/redux/reducers/dialogs.js
var dialogs = __webpack_require__("/vFe");

// EXTERNAL MODULE: ./src/redux/actionTypes/messages.js
var actionTypes_messages = __webpack_require__("FDB9");

// EXTERNAL MODULE: ./src/redux/actionTypes/selectedDialog.js
var selectedDialog = __webpack_require__("PAnh");

// EXTERNAL MODULE: external "connectycube"
var external_connectycube_ = __webpack_require__("QLiB");
var external_connectycube_default = /*#__PURE__*/__webpack_require__.n(external_connectycube_);

// EXTERNAL MODULE: ./src/redux/reducers/reducer-function.js
var reducer_function = __webpack_require__("EeYq");

// CONCATENATED MODULE: ./src/redux/reducers/messages.js
function messages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function messages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { messages_ownKeys(Object(source), true).forEach(function (key) { messages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { messages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function messages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let initial_state = {
  dialog: {},
  messages: []
};
/* harmony default export */ var reducers_messages = ((messages = initial_state, action) => {
  switch (action.type) {
    case actionTypes_messages["d" /* SET_MESSAGES */]:
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

    case actionTypes_messages["c" /* PUSH_MESSAGE */]:
      {
        let msg = action.msg;

        if (msg && msg.dialog_id == messages.dialog.connecty_dialog_id) {
          if (msg.notif) {
            const params = {
              read: 1,
              chat_dialog_id: msg.dialog_id
            };
            external_connectycube_default.a.chat.message.update("", params).then(result => {}).catch(error => {});
          }

          const msgs = messages.messages.concat(action.msg);
          return messages_objectSpread(messages_objectSpread({}, messages), {}, {
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

    case actionTypes_messages["a" /* DELETE_ALL_MESSAGES */]:
      {
        return initial_state;
      }

    default:
      return initial_state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/selectedDialog.js
function selectedDialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function selectedDialog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { selectedDialog_ownKeys(Object(source), true).forEach(function (key) { selectedDialog_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { selectedDialog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function selectedDialog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var reducers_selectedDialog = ((dialog = null, action) => {
  switch (action.type) {
    case selectedDialog["a" /* SELECTED_DIALOG */]:
      {
        return selectedDialog_objectSpread({}, action.dialog);
      }

    case selectedDialog["b" /* UN_SELECTED_DIALOG */]:
      {
        return {};
      }

    default:
      return dialog;
  }
});
// EXTERNAL MODULE: ./src/redux/actionTypes/PageVisited.js
var PageVisited = __webpack_require__("gk5u");

// CONCATENATED MODULE: ./src/redux/reducers/PageVisited.js

let PageVisited_initialState = [];
/* harmony default export */ var reducers_PageVisited = (function (state = PageVisited_initialState, action) {
  switch (action.type) {
    case PageVisited["a" /* ADD_VISITED */]:
      console.log(arr, action.payload.item);
      let arr = state;

      if (action.payload.item) {
        arr = state.push(action.payload.item);
      }

      return arr;

    case PageVisited["c" /* REMOVE_VISITED */]:
      let arr2 = state;

      if (action.payload.item) {
        arr2 = state.pop(action.payload.item);
      }

      return arr2;

    default:
      return PageVisited_initialState;
  }
});
// EXTERNAL MODULE: ./src/redux/actionTypes/chatConnected.js
var chatConnected = __webpack_require__("o4Y3");

// CONCATENATED MODULE: ./src/redux/reducers/chatConnected.js

/* harmony default export */ var reducers_chatConnected = (function (state = false, action) {
  switch (action.type) {
    case chatConnected["a" /* CHAT_CONNECTED */]:
      return true;

    case chatConnected["b" /* CHAT_RESET */]:
      return false;

    default:
      return false;
  }
});
// EXTERNAL MODULE: ./src/redux/actionTypes/chatUnread.js
var chatUnread = __webpack_require__("c34z");

// CONCATENATED MODULE: ./src/redux/reducers/chatUnread.js

/* harmony default export */ var reducers_chatUnread = (function (state = 0, action) {
  switch (action.type) {
    case chatUnread["a" /* CHAT_UNREAD */]:
      return parseInt(action.count);

    case chatUnread["b" /* CHAT_UNREAD_RESET */]:
      return 0;

    default:
      return 0;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/index.js











/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  auth_user: reducers_auth,
  auth_modal: reducers_authModal,
  chat_user: reducers_chatUser,
  dialogs: dialogs["a" /* default */],
  messages: reducers_messages,
  selectedDialog: reducers_selectedDialog,
  pageVisited: reducers_PageVisited,
  chatAuthenticated: reducers_chatUser,
  chatConnected: reducers_chatConnected,
  chatUnreadCount: reducers_chatUnread
}));
// CONCATENATED MODULE: ./src/redux/store.js


/* harmony default export */ var store = __webpack_exports__["a"] = (Object(external_redux_["createStore"])(reducers, false ? undefined : ""));

/***/ }),

/***/ "gk5u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_VISITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_VISITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_VISITED; });
const ADD_VISITED = 'ADD_VISITED';
const REMOVE_VISITED = 'REMOVE_VISITED';
const FETCH_VISITED = 'FETCH_VISITED';

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hMGF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_DIALOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SORT_DIALOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_DIALOG; });
const FETCH_DIALOGS = "FETCH_DIALOGS";
const ADD_DIALOG = "ADD_DIALOG";
const SORT_DIALOGS = "SORT_DIALOGS";
const UPDATE_DIALOG = "UPDATE_DIALOG";
const DELETE_DIALOG = "DELETE_DIALOG";

/***/ }),

/***/ "o4Y3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHAT_CONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHAT_RESET; });
const CHAT_CONNECTED = "CHAT_CONNECTED";
const CHAT_RESET = "CHAT_RESET";

/***/ }),

/***/ "owve":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_MODAL; });
const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

/***/ }),

/***/ "p6Nx":
/***/ (function(module, exports) {



/***/ }),

/***/ "pdi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rMck":
/***/ (function(module, exports) {



/***/ }),

/***/ "vGTh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return searchUniversities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return searchCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return searchCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getSeller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getEventCategories; });
/* unused harmony export getCities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return searchEventCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CreateVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAllFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAllBuyRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ForgotPasswordAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UpdatePasswordAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sendChatUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sendVerifyEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return updateOpenStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sendFeedbackMessage; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
const API_URL = "http://fanto.in/admin/api";

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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zDcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+FwM");
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
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ })

/******/ });