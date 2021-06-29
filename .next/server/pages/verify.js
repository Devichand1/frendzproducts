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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0F/j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0ezn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "1520":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "15X6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NotificationsNone");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1i9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__("IfcR");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: external "connectycube"
var external_connectycube_ = __webpack_require__("QLiB");
var external_connectycube_default = /*#__PURE__*/__webpack_require__.n(external_connectycube_);

// CONCATENATED MODULE: ./appConfig.js
const data = {
  "senderID": "",
  "connectyCubeConfig": [{
    "appId": process.env.APP_ID,
    "authKey": process.env.AUTH_KEY,
    "authSecret": process.env.AUTH_SECRET
  }, {
    "chat": {
      "streamManagement": {
        "enable": true
      }
    },
    "debug": {
      "mode": 0
    }
  }]
};
/* harmony default export */ var appConfig = (data);
// CONCATENATED MODULE: ./src/chat/helpers/file.js

function getImageLinkFromUID(uid) {
  if (!uid) {
    return null;
  }

  return external_connectycube_default.a.storage.privateUrl(uid);
}
function preparationAttachment(file) {
  return {
    size: file.size,
    uid: file.uid,
    type: file.content_type,
    name: file.name,
    width: 400,
    height: 400
  };
}
// CONCATENATED MODULE: ./src/chat/models/user.js

class user_User {
  constructor(user) {
    this.id = user.id;
    this.avatar = user_User.getAvatarUrl(user.avatar);
    this.login = user.login;
    this.custom_data = user.custom_data ? user.custom_data : '';
    this.full_name = user.full_name || user.login;
    this.phone = user.phone;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
    this.last_request_at = user.last_request_at;
  }

  static getAvatarUrl(avatarUID) {
    return getImageLinkFromUID(avatarUID);
  }

}
// EXTERNAL MODULE: ./src/redux/store.js + 9 modules
var store = __webpack_require__("fTHX");

// EXTERNAL MODULE: ./src/redux/actionTypes/chatUser.js
var chatUser = __webpack_require__("PYzf");

// CONCATENATED MODULE: ./src/redux/actions/chatUser.js

const chatAuthenticated = (currentUser, accessToken) => ({
  type: chatUser["a" /* CHAT_AUTHENTICATED */],
  payload: {
    currentUser,
    accessToken
  }
});
const chatUpdateUser = (currentUser, accessToken) => ({
  type: chatUser["c" /* CHAT_UPDATE_USER */],
  payload: {
    currentUser,
    accessToken
  }
});
const chatUnauthenticated = () => ({
  type: chatUser["b" /* CHAT_UNAUTHENTICATED */]
});
// EXTERNAL MODULE: ./src/redux/actionTypes/chatConnected.js
var chatConnected = __webpack_require__("o4Y3");

// CONCATENATED MODULE: ./src/redux/actions/chatConnected.js

const chatConnection = () => ({
  type: chatConnected["a" /* CHAT_CONNECTED */] // payload: { currentUser, accessToken },

});
const chatReset = () => ({
  type: chatConnected["b" /* CHAT_RESET */] // payload: { currentUser, accessToken },

}); // export const chatUnauthenticated = () => ({
//     type: CHAT_UNAUTHENTICATED,
// });
// EXTERNAL MODULE: ./src/redux/actionTypes/chatUnread.js
var chatUnread = __webpack_require__("c34z");

// CONCATENATED MODULE: ./src/redux/actions/chatUnread.js

const chatUnread_chatUnreadCount = count => ({
  type: chatUnread["a" /* CHAT_UNREAD */],
  count: count
});
const chatUnreadReset = () => ({
  type: chatUnread["b" /* CHAT_UNREAD_RESET */]
});
// EXTERNAL MODULE: ./src/redux/actions/messages.js
var actions_messages = __webpack_require__("fPwM");

// CONCATENATED MODULE: ./src/chat/services/authService.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { setCurrentUser } from '../actions/currentUser'





 // import { LogOut } from '../reducers/index'

class authService_AuthService {
  async init() {
    const res = await external_connectycube_default.a.init(...appConfig.connectyCubeConfig);
    return res; // await ConnectyCube.createSession({
    //     email:'test@test.com',
    //     password:'test'
    // })
    // return this.autologin()
  } // async autologin() {
  //     const checkUserSessionFromStore = await this.getUserSession()
  //     if (checkUserSessionFromStore) {
  //         const data = JSON.parse(checkUserSessionFromStore)
  //         await this.signIn({ login: data.login, password: data.password })
  //         return 'home'
  //     } else { return 'auth' }
  // }


  async login(params) {
    const session = await external_connectycube_default.a.createSession(params);
    const currentUser = new user_User(session.user);
    session.user.avatar = getImageLinkFromUID(session.user.avatar); // work around

    session.user.full_name = session.user.login;
    store["a" /* default */].dispatch(chatAuthenticated(session));
    const customSession = Object.assign({}, currentUser, {
      password: params.password
    });
    this.setUserSession(customSession);
    this.connect(customSession.id, customSession.password);
  } // async signUp(params) {
  //     await ConnectyCube.createSession()
  //     await ConnectyCube.users.signup(params)
  //     return this.signIn(params)
  // }


  async connect(userId, password) {
    const isConnected = external_connectycube_default.a.chat.isConnected;

    if (isConnected) {
      store["a" /* default */].dispatch(chatConnection());
      this.getUnread();
    } else {
      await external_connectycube_default.a.chat.connect({
        userId,
        password
      }).then((error, contactlist) => {
        this.setUpListeners();
        store["a" /* default */].dispatch(chatConnection());
        this.getUnread();
      });
    }
  }

  async getUnread() {
    await external_connectycube_default.a.chat.message.unreadCount().then(result => {
      store["a" /* default */].dispatch(chatUnread_chatUnreadCount(result.total));
      console.log('unread', reasult);
    }).catch(error => {});
  }

  async setUpListeners() {
    external_connectycube_default.a.chat.onMessageListener = this.onMessage.bind(this);
  }

  onMessage(userId, message) {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : "";
    console.log(message, userId, user.connectycube_user.connectycube_id);

    if (!user || !user.connectycube_user || userId == user.connectycube_user.connectycube_id) {
      return;
    }

    message.message = message.body;
    message.device_token = user.device_token;
    message.notif = true;
    store["a" /* default */].dispatch(Object(actions_messages["b" /* pushMessage */])(message));
  }

  setUserSession(userSession) {
    return localStorage.setItem(authService_AuthService.CURRENT_USER_SESSION_KEY, JSON.stringify(userSession));
  }

  getUserSession() {
    return localStorage.getItem(authService_AuthService.CURRENT_USER_SESSION_KEY);
  } // async logout() {
  //     localStorage.clear()
  //     await ConnectyCube.logout()
  //     store.dispatch(LogOut())
  // }


}

_defineProperty(authService_AuthService, "CURRENT_USER_SESSION_KEY", "CURRENT_USER_SESSION_KEY");

_defineProperty(authService_AuthService, "DEVICE_TOKEN_KEY", "DEVICE_TOKEN_KEY");

const authService = new authService_AuthService();
Object.freeze(authService);
/* harmony default export */ var services_authService = (authService);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/apis/chat-api.js
var chat_api = __webpack_require__("FKIu");

// CONCATENATED MODULE: ./src/redux/helpers/file.js

function file_getImageLinkFromUID(uid) {
  if (!uid) {
    return null;
  }

  return external_connectycube_default.a.storage.privateUrl(uid);
}
function file_preparationAttachment(file) {
  return {
    size: file.size,
    uid: file.uid,
    type: file.content_type,
    name: file.name,
    width: 400,
    height: 400
  };
}
// CONCATENATED MODULE: ./src/redux/models/dialogs.js

class dialogs_Dialog {
  constructor(dialog) {
    this.id = dialog._id || dialog.id;
    this.type = dialog.type;
    this.xmpp_room_jid = dialog.xmpp_room_jid;
    this.xmpp_type = dialog.type === 3 ? 'chat' : dialog.type ? 'groupchat' : '';
    this.name = dialog.name;
    this.photo = dialogs_Dialog.getAvatarUrl(dialog.photo);
    this.description = dialog.description;
    this.destination = dialog.xmpp_room_jid || dialog.room_jid;
    this.user_id = dialog.user_id;
    this.admins_ids = dialog.admins_ids;
    this.occupants_ids = dialog.occupants_ids;
    this.updated_date = Date.parse(dialog.updated_at) || Date.now();
    this.last_message_date_sent = dialog.last_message_date_sent || Date.parse(dialog.updated_at) / 1000 || Date.parse(dialog.created_at) / 1000;
    this.last_message = dialog.last_message || '';
    this.last_message_id = dialog.last_message_id;
    this.last_message_user_id = dialog.last_message_user_id;
    this.unread_messages_count = dialog.unread_messages_count;
    this.unread_messages_ids = dialog.unread_messages_ids;
    this.pinned_messages_ids = dialog.pinned_messages_ids;
  }

  static getAvatarUrl(avatarUID) {
    return file_getImageLinkFromUID(avatarUID);
  }

}
// EXTERNAL MODULE: ./src/redux/actionTypes/dialogs.js
var actionTypes_dialogs = __webpack_require__("hMGF");

// CONCATENATED MODULE: ./src/redux/actions/dialogs.js

const fetchDialogs = dialogs => ({
  type: actionTypes_dialogs["c" /* FETCH_DIALOGS */],
  dialogs: dialogs
});
const updateDialog = dialog => ({
  type: actionTypes_dialogs["e" /* UPDATE_DIALOG */],
  dialog
});
const addNewDialog = dialog => ({
  type: actionTypes_dialogs["a" /* ADD_DIALOG */],
  dialog: dialog
});
const sortDialogs = (message, count) => ({
  type: actionTypes_dialogs["d" /* SORT_DIALOGS */],
  message: message,
  count: count
});
const deleteDialog = dialogId => ({
  type: actionTypes_dialogs["b" /* DELETE_DIALOG */],
  dialogId
});
// EXTERNAL MODULE: ./src/redux/actions/selectedDialog.js
var selectedDialog = __webpack_require__("GN20");

// CONCATENATED MODULE: ./src/redux/actionTypes/users.js
const FETCH_USERS = "FETCH_USERS";
const ADD_USERS = "ADD_USERS";
// CONCATENATED MODULE: ./src/redux/actions/users.js

const fetchUsers = users => ({
  type: FETCH_USERS,
  users
});
const addUsers = users => ({
  type: ADD_USERS,
  users
});
// CONCATENATED MODULE: ./src/redux/models/message.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { message_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function message_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const STATUS_PENDING = 0;
const STATUS_SENT = 1;
const STATUS_DELIVERED = 2;
const STATUS_READ = 3;
const GROUP_CHAT_ALERT_TYPE = {
  CREATE: "create"
};
const defaultMessage = {
  id: '',
  body: '',
  dialog_id: '',
  date_sent: Math.floor(Date.now() / 1000),
  attachments: null,
  sender_id: null,
  sender: null
};
class message_Message {
  constructor(msg = defaultMessage, currentUser) {
    this.id = msg.id || msg._id;
    this.body = msg.body || msg.message;
    this.group_chat_alert_type = msg.group_chat_alert_type || null;
    this.dialog_id = msg.chat_dialog_id || msg.extension && msg.extension.dialog_id;
    this.date_sent = msg.date_sent || msg.extension && msg.extension.date_sent || Math.floor(Date.now() / 1000);
    this.send_state = message_Message.getSendState(msg, currentUser);
    this.attachment = message_Message.getAttachment(msg);
    this.sender_id = msg.sender_id || msg.extension && msg.extension.sender_id;
    this.sender = msg.sender_id;
  }

  static getAttachment(msg) {
    var _msg$extension;

    if (msg.attachments && msg.attachments.length > 0) {
      const attachments = _objectSpread({}, msg.attachments[0]);

      const parseLink = file_getImageLinkFromUID(msg.attachments[0].uid);
      attachments.url = parseLink;
      return [attachments];
    } else if (msg !== null && msg !== void 0 && (_msg$extension = msg.extension) !== null && _msg$extension !== void 0 && _msg$extension.attachments && msg.extension.attachments.length > 0) {
      const attachments = _objectSpread({}, msg.extension.attachments[0]);

      const parseLink = file_getImageLinkFromUID(msg.extension.attachments[0].uid);
      attachments.url = parseLink;
      return [attachments];
    } else return null;
  }

  static getSendState(msg, currentUser) {
    var _msg$read_ids, _msg$delivered_ids;

    if (msg !== null && msg !== void 0 && (_msg$read_ids = msg.read_ids) !== null && _msg$read_ids !== void 0 && _msg$read_ids.find(_id => _id !== currentUser)) {
      return STATUS_READ;
    }

    if (msg !== null && msg !== void 0 && (_msg$delivered_ids = msg.delivered_ids) !== null && _msg$delivered_ids !== void 0 && _msg$delivered_ids.find(msg => msg.delivered_ids !== currentUser)) {
      return STATUS_DELIVERED;
    }

    return STATUS_PENDING;
  }

}
class FakeMessage {
  constructor(msg) {
    this.attachment = msg.extension.attachments;
    this.body = msg.body;
    this.date_sent = msg.extension.date_sent;
    this.dialog_id = msg.extension.dialog_id;
    this.id = msg.id;
    this.send_state = 0;
    this.sender = undefined;
    this.sender_id = msg.extension.sender_id;
  }

}
// CONCATENATED MODULE: ./src/redux/models/user.js

class models_user_User {
  constructor(user) {
    this.id = user.id;
    this.avatar = models_user_User.getAvatarUrl(user.avatar);
    this.login = user.login;
    this.custom_data = user.custom_data ? user.custom_data : '';
    this.full_name = user.full_name || user.login;
    this.phone = user.phone;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
    this.last_request_at = user.last_request_at;
  }

  static getAvatarUrl(avatarUID) {
    return file_getImageLinkFromUID(avatarUID);
  }

}
// CONCATENATED MODULE: ./src/redux/helpers/constants.js
const BTN_TYPE = {
  DIALOG: 1,
  CONTACTS: 2,
  CREATE_GROUP: 3
};
const DIALOG_TYPE = {
  PRIVATE: 3,
  GROUP: 2,
  BROADCAST: 1,
  PUBLIC_CHANNEL: 4
};
// CONCATENATED MODULE: ./src/redux/services/chat-service.js
function chat_service_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class chat_service_ChatService {
  constructor() {
    chat_service_defineProperty(this, "getMoreMessages", async dialog => {
      const currentMessages = this.getMessagesByDialogId(dialog.id);
      const lastMessageDate = currentMessages[0];
      const updateObj = Object.assign(dialog, {
        last_messages_for_fetch: lastMessageDate.date_sent
      });
      const filter = {
        chat_dialog_id: dialog.id,
        date_sent: {
          lt: lastMessageDate.date_sent
        },
        sort_desc: 'date_sent'
      };
      const moreHistoryFromServer = await external_connectycube_default.a.chat.message.list(filter);
      const messages = [];
      moreHistoryFromServer.items.forEach(elem => {
        if (!elem.group_chat_alert_type) {
          messages.push(new message_Message(elem, this.currentUser.id));
        }
      });
      store["a" /* default */].dispatch(updateDialog(updateObj));
      const amountMessages = store["a" /* default */].dispatch(Object(actions_messages["a" /* lazyFetchMessages */])(dialog.id, messages));
      return amountMessages.history.length;
    });

    chat_service_defineProperty(this, "sendMsgChatAlertOnCreate", async (dialog, message, alertType) => {
      const date = Math.floor(Date.now() / 1000);
      const recipient_id = dialog.type === DIALOG_TYPE.PRIVATE ? dialog.occupants_ids.find(elem => elem != this.currentUser.id) : dialog.xmpp_room_jid;
      const messageExtensions = {
        date_sent: date,
        save_to_history: 1,
        dialog_id: dialog.id,
        group_chat_alert_type: alertType,
        sender_id: this.currentUser.id
      };
      const msg = {
        type: !dialog.xmpp_room_jid ? 'chat' : 'groupchat',
        body: message,
        extension: messageExtensions
      };
      external_connectycube_default.a.chat.send(recipient_id, msg);
    });

    chat_service_defineProperty(this, "updateDialogsUnreadMessagesCount", dialog => {
      const updateObj = Object.assign(dialog, {
        unread_messages_count: 0
      });
      store["a" /* default */].dispatch(updateDialog(updateObj));
      return true;
    });
  }

  setUpListeners() {
    external_connectycube_default.a.chat.onMessageListener = this.onMessageListener.bind(this);
    external_connectycube_default.a.chat.onSentMessageCallback = this.onSentMessageListener.bind(this);
    external_connectycube_default.a.chat.onDeliveredStatusListener = this.onDeliveredStatus.bind(this);
    external_connectycube_default.a.chat.onReadStatusListener = this.onReadStatus.bind(this);
  }

  async fetchDialogsFromServer() {
    if (store["a" /* default */].getState().dialogs.length !== 0) {
      return store["a" /* default */].getState().dialogs;
    }

    console.log('in fetch');
    const dialogsFromServer = await external_connectycube_default.a.chat.dialog.list(); // const currentUserId = this.currentUser
    // let privatChatIdsUser = []

    const dialogs = dialogsFromServer.items.map(elem => {
      // if (elem.type === DIALOG_TYPE.PRIVATE) {
      //   elem.occupants_ids.forEach(elem => {
      //     elem !== currentUserId.id && privatChatIdsUser.push(elem)
      //   })
      // }
      return new dialogs_Dialog(elem);
    }); // if (privatChatIdsUser.length !== 0) {
    //   const usersInfo = await this.getUsersList(privatChatIdsUser)
    //   store.dispatch(fetchUsers(usersInfo))
    // }

    store["a" /* default */].dispatch(fetchDialogs(dialogs));
    return store["a" /* default */].getState().dialogs;
  }

  async getMessages(dialog) {
    const isAlredyUpdate = this.getMessagesByDialogId(dialog.id);
    let amountMessages = null; // If the first entry into the chat

    if (!dialog.isAlreadyMessageFetch || dialog.unread_messages_count > 0 && !dialog.isAlreadyMessageFetch) {
      const historyFromServer = await external_connectycube_default.a.chat.message.list({
        chat_dialog_id: dialog.id,
        sort_desc: 'date_sent'
      });
      const messages = [];
      historyFromServer.items.forEach(elem => {
        if (!elem.group_chat_alert_type) {
          messages.push(new message_Message(elem, this.currentUser.id));
        }
      });
      const newObj = Object.assign(dialog, {
        isAlreadyMessageFetch: true
      });
      this.updateDialogsUnreadMessagesCount(newObj);
      store["a" /* default */].dispatch(Object(actions_messages["c" /* setMessages */])(dialog.id, messages));
      amountMessages = messages.length;
    } else {
      // If the second entry into the chat
      if (dialog.unread_messages_count > 0) {
        const messages = this.getMessagesByDialogId(dialog.id);
        const firstUnreadMsg = messages[dialog.unread_messages_count - 1];
        this.readAllMessages(dialog.id);
        await this.sendReadStatus(firstUnreadMsg.id, firstUnreadMsg.sender_id, firstUnreadMsg.dialog_id);
        this.updateDialogsUnreadMessagesCount(dialog);
      }

      amountMessages = isAlredyUpdate.length;
    }

    return amountMessages;
  } // Message loading if more than 100


  async sendMessage(dialog, messageText, attachments = false, scrollToBottom) {
    const user = this.currentUser;
    const text = messageText.trim();
    const date = Math.floor(Date.now() / 1000);
    const recipient_id = dialog.type === DIALOG_TYPE.PRIVATE ? dialog.occupants_ids.find(elem => elem != user.id) : dialog.xmpp_room_jid;
    let msg = {
      type: dialog.xmpp_type,
      body: text,
      extension: {
        save_to_history: 1,
        dialog_id: dialog.id,
        sender_id: user.id,
        date_sent: date
      } // markable: 1

    };
    msg.id = this.messageUniqueId; // If send message as Attachment

    if (attachments) {
      return this.sendMessageAsAttachment(dialog, recipient_id, msg, attachments, scrollToBottom);
    }

    const message = new FakeMessage(msg);
    const newObjFreez = Object.freeze(message);
    await store["a" /* default */].dispatch(Object(actions_messages["b" /* pushMessage */])(newObjFreez, dialog.id));
    scrollToBottom();
    external_connectycube_default.a.chat.send(recipient_id, msg);
    store["a" /* default */].dispatch(sortDialogs(newObjFreez));
  }

  sendChatAlertOnCreate(dialog) {
    const message = 'Group is created';
    this.sendMsgChatAlertOnCreate(dialog, message, GROUP_CHAT_ALERT_TYPE.CREATE);
  }

  async sendMessageAsAttachment(dialog, recipient_id, msg, attachments, scrollToBottom) {
    //create fake data for render img
    const url = URL.createObjectURL(attachments.file);
    msg.extension.attachments = [{
      url
    }];
    msg.body = 'Image attachment';
    const message = new FakeMessage(msg);
    await store["a" /* default */].dispatch(Object(actions_messages["b" /* pushMessage */])(message, dialog.id));
    scrollToBottom(); // create real data for attachment

    const response = await this.uploadPhoto(attachments);
    const newObjAttach = file_preparationAttachment(response);
    msg.extension.attachments = [newObjAttach];
    await external_connectycube_default.a.chat.send(recipient_id, msg);
    store["a" /* default */].dispatch(sortDialogs(message));
    return;
  }

  async createPrivateDialog(userId) {
    const dialogs = store["a" /* default */].getState().dialogs;
    let dialog = null;
    dialogs.forEach(elem => {
      if (elem.type === DIALOG_TYPE.PRIVATE && elem.occupants_ids.find(elem => elem === userId)) {
        dialog = elem;
      }
    });

    if (!dialog) {
      const params = {
        type: DIALOG_TYPE.PRIVATE,
        occupants_ids: userId
      };
      const response = await external_connectycube_default.a.chat.dialog.create(params);
      dialog = new dialogs_Dialog(response);

      if (this.getUserFromReduxById(userId)) {
        store["a" /* default */].dispatch(addNewDialog(dialog));
        return dialog;
      } else {
        const usersInfo = await this.getUserFromServerById(userId);
        usersInfo.user = new models_user_User(usersInfo.user);
        store["a" /* default */].dispatch(fetchUsers([usersInfo.user]));
        store["a" /* default */].dispatch(addNewDialog(dialog));
        return dialog;
      }
    } // If the user is already in the Redux


    if (this.getUserFromReduxById(userId)) {
      return dialog;
    } else {
      const usersInfo = await this.getUserFromServerById(userId);
      usersInfo.user = new models_user_User(usersInfo.user);
      store["a" /* default */].dispatch(fetchUsers([usersInfo.user]));
      return dialog;
    }
  }

  async createPublicDialog(occupants_ids, groupName, img) {
    const currentUser = this.currentUser;
    occupants_ids.unshift(currentUser.id);
    const params = {
      type: DIALOG_TYPE.GROUP,
      occupants_ids,
      name: groupName
    };
    const image = img ? await this.uploadPhoto(img) : null;

    if (image) {
      params.photo = image.uid;
    }

    const dialog = await external_connectycube_default.a.chat.dialog.create(params);
    const newDialog = new dialogs_Dialog(dialog);
    store["a" /* default */].dispatch(addNewDialog(newDialog));
    return newDialog;
  }

  async readAllMessages(dialogId) {
    return external_connectycube_default.a.chat.message.update(null, {
      chat_dialog_id: dialogId,
      read: 1
    });
  }

  async readMessage(messageId, dialogId) {
    this.onReadStatus(messageId, dialogId);
    return external_connectycube_default.a.chat.message.update(null, {
      chat_dialog_id: dialogId,
      read: 1
    });
  }

  async onMessageListener(senderId, msg) {
    var _this$getSelectedDial;

    const message = new message_Message(msg);
    const user = this.currentUser;
    const dialog = (_this$getSelectedDial = this.getSelectedDialog()) === null || _this$getSelectedDial === void 0 ? void 0 : _this$getSelectedDial.id; // If group chat alet

    if (msg.extension.group_chat_alert_type) {
      const dialogsFromServer = await external_connectycube_default.a.chat.dialog.list();
      const dialogs = dialogsFromServer.items.map(elem => {
        return new dialogs_Dialog(elem);
      });
      store["a" /* default */].dispatch(fetchDialogs(dialogs));
      return;
    }

    if (senderId !== user.id) {
      if (dialog === message.dialog_id) {
        store["a" /* default */].dispatch(sortDialogs(message));
        this.readMessage(message.id, message.dialog_id);
        this.sendReadStatus(msg.extension.message_id, msg.extension.sender_id, msg.dialog_id);
      } else {
        this.sendDeliveredStatus(msg.extension.message_id, msg.extension.sender_id, msg.dialog_id);
        store["a" /* default */].dispatch(sortDialogs(message, true));
      }

      store["a" /* default */].dispatch(Object(actions_messages["b" /* pushMessage */])(message, message.dialog_id));
    }
  } // ConnectyCube listeners


  onSentMessageListener(failedMessage, msg) {
    console.warn('onSentMessageListener');

    if (failedMessage || msg.extension.group_chat_alert_type) {
      return;
    }

    store["a" /* default */].dispatch(Object(actions_messages["d" /* updateMessages */])(msg.extension.dialog_id, msg.id, {
      send_state: STATUS_SENT
    }));
  }

  onDeliveredStatus(messageId, dialogId, userId) {
    console.warn('onDeliveredStatus', messageId);
    store["a" /* default */].dispatch(Object(actions_messages["d" /* updateMessages */])(dialogId, messageId, {
      send_state: STATUS_DELIVERED
    }));
  }

  onReadStatus(messageId, dialogId, userId) {
    console.warn('onReadStatus', messageId);
    store["a" /* default */].dispatch(Object(actions_messages["d" /* updateMessages */])(dialogId, messageId, {
      send_state: STATUS_READ
    }));
  }

  sendReadStatus(messageId, userId, dialogId) {
    external_connectycube_default.a.chat.sendReadStatus({
      messageId,
      userId,
      dialogId
    });
  }

  sendDeliveredStatus(messageId, userId, dialogId) {
    external_connectycube_default.a.chat.sendDeliveredStatus({
      messageId,
      userId,
      dialogId
    });
  }

  async getUsersList(ids) {
    const usersList = await external_connectycube_default.a.users.get({
      per_page: 100,
      filter: {
        field: 'id',
        param: 'in',
        value: ids
      }
    });
    return usersList.items.map(elem => {
      return new models_user_User(elem.user);
    });
  }

  async getUserFromServerById(id) {
    return external_connectycube_default.a.users.get(id);
  }

  setSelectDialog(dialog) {
    store["a" /* default */].dispatch(Object(selectedDialog["a" /* selectedDialog */])(dialog));
  }

  getSelectedDialog() {
    return store["a" /* default */].getState().selectedDialog;
  }

  getDialogById(dialogId) {
    return store["a" /* default */].getState().dialogs.find(elem => elem.id === dialogId);
  }

  getMessagesByDialogId(dialogId) {
    const result = store["a" /* default */].getState().messages;
    return result[dialogId];
  }

  async uploadPhoto(file) {
    return external_connectycube_default.a.storage.createAndUpload(file);
  }

  get currentUser() {
    return store["a" /* default */].getState().currentUser.user;
  }

  getUserFromReduxById(id) {
    return store["a" /* default */].getState().users[id];
  }

  get messageUniqueId() {
    return external_connectycube_default.a.chat.helpers.getBsonObjectId();
  }

}

const chatService = new chat_service_ChatService();
Object.freeze(chatService);
/* harmony default export */ var chat_service = (chatService);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/chat/components/ChatIcon.js
var __jsx = external_react_default.a.createElement;





 // import ChatService from "../../redux/services/chat-service";











const ChatMessageIcon = () => {
  const authUser = Object(external_react_redux_["useSelector"])(state => state.auth_user.user);
  const accessToken = Object(external_react_redux_["useSelector"])(state => state.auth_user.accessToken);
  const chatUnreadCount = Object(external_react_redux_["useSelector"])(state => state.chatUnreadCount);
  const {
    0: count,
    1: setcount
  } = Object(external_react_["useState"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (authUser && authUser.connectycube_user) {
      dispatch(chatUnauthenticated());
      dispatch(chatReset());
      dispatch(Object(selectedDialog["b" /* unSelectedDialog */])());
      let init = services_authService.init();

      if (init && authUser.connectycube_user) {
        console.log();
        services_authService.login({
          email: authUser.email,
          password: authUser.connectycube_user.password
        }).then(user => {}).catch(error => {
          console.log(error);
        });
      } // unreadMsg(authUser.id).then((data) => {
      //     data && setcount(data);
      // });

    }
  }, []);

  const connectChat = async () => {
    const CREDENTIALS = {
      email: authUser.email,
      password: authUser.connectycube_user.password
    };
    const CONFIG = {
      on: {
        sessionExpired: (handleResponse, retry) => {
          // call handleResponse() if you do not want to process a session expiration,
          // so an error will be returned to origin request
          // handleResponse();
          // JS SDK v2
          external_connectycube_default.a.createSession().then(retry).catch(error => {});
        }
      }
    };
    let init = await external_connectycube_default.a.init(...appConfig.connectyCubeConfig, CONFIG);
    console.log(init);

    if (init) {
      external_connectycube_default.a.login(CREDENTIALS).then(session => {
        console.log('session', session);
      }).catch(error => {});
    }
  };

  const setUpListeners = () => {
    external_connectycube_default.a.chat.onMessageListener = onMessage;
    const opponentId = 2066645;
    let message = {
      type: 'groupchat',
      body: "How are you today?",
      extension: {
        save_to_history: 1,
        dialog_id: '5f6f3676ca8bf42a744c3f4b'
      },
      markable: 1
    };
    message = external_connectycube_default.a.chat.send(opponentId, message);
    console.log('message', message);
  };

  function onMessage(userId, message) {
    console.log('[ConnectyCube.chat.onMessageListener] callback:', userId, message);
  }

  const handleChatClick = () => {
    if (!accessToken) {
      window.location.replace('/?signup=open');
    } else {
      router_default.a.push('/chat');
    }
  };

  return __jsx("div", null, __jsx(IconButton_default.a, {
    color: "inherit",
    onClick: handleChatClick
  }, __jsx(Badge_default.a, {
    badgeContent: chatUnreadCount,
    color: "secondary"
  }, __jsx(Chat_default.a, null))));
};

/* harmony default export */ var ChatIcon = (ChatMessageIcon);
// EXTERNAL MODULE: external "@material-ui/icons/NotificationsNone"
var NotificationsNone_ = __webpack_require__("15X6");

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// CONCATENATED MODULE: ./src/Layout/Header/utils/useNavbar.js


function useNavbar() {
  const {
    0: isScrolled,
    1: setIsScrolled
  } = Object(external_react_["useState"])(false);
  const navBarRef = Object(external_react_["useRef"])(null);

  const handleScroll = e => {
    const offset = e.srcElement.scrollingElement.scrollTop;

    if (navBarRef.current) {
      setIsScrolled(offset > navBarRef.current.clientHeight);
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return {
    navBarRef,
    isScrolled
  };
}

/* harmony default export */ var utils_useNavbar = (useNavbar);
// EXTERNAL MODULE: external "@material-ui/core/InputBase"
var InputBase_ = __webpack_require__("ynsX");
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_);

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__("GYHf");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__("31Yn");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__("jD8W");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__("xmQw");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// CONCATENATED MODULE: ./src/Layout/Header/Desktop/styles.js
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
const commonStyles = {
  root: {
    position: "absolute",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    zIndex: "99",
    backgroundColor: "#fff",
    transition: "all ease-in 350ms"
  },
  scrolled: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    zIndex: "99",
    backgroundColor: "#fff",
    boxShadow: "0px 14px 18px rgba(0,0,0,0.1)"
  },
  Menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    margin: "0",
    padding: "0",
    listStyleType: "none",
    "& li": {
      marginRight: "1.3rem"
    },
    "& li ul li": {
      marginRight: "0"
    },
    "& a": {
      color: "#000",
      fontSize: "1.1rem",
      fontWeight: "500",
      textDecoration: "none"
    },
    "& li:hover a": {
      color: "var(--theme)"
    },
    "& li:hover .MuiList-root a": {
      color: "#000"
    },
    "& li.active a": {
      color: "var(--theme)"
    },
    "& button": {
      color: "#000",
      fontSize: "1.1rem",
      fontWeight: "500",
      textTransform: "capitalize"
    },
    "& button:hover .MuiButton-label": {
      background: "none",
      color: "var(--theme)"
    },
    "& button .MuiTouchRipple-root": {
      display: 'none'
    }
  },
  MenuRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    margin: "0",
    padding: "0",
    listStyleType: "none",
    "& li": {
      marginRight: "1rem"
    }
  },
  logo: {
    margin: "1rem 0",
    width: "auto",
    height: "85px",
    transition: "all ease-in 350ms"
  },
  logoScrolled: {
    margin: "0.2rem 0",
    width: "auto",
    height: "65px"
  }
};
const mobileStyles = {};
const TabStyles = {
  Menu: {
    '& li': {
      marginRight: '1rem'
    },
    '& a': {
      fontSize: '1rem'
    }
  }
};
const desktopStyles = {};
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__("QzC/");
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: ./src/components/Login_Register/AuthForm.js
var AuthForm = __webpack_require__("Y47r");

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/Collapse"
var Collapse_ = __webpack_require__("igu8");
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandLess"
var ExpandLess_ = __webpack_require__("VRH+");
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountBox"
var AccountBox_ = __webpack_require__("j4BW");
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox_);

// EXTERNAL MODULE: ./src/redux/actions/auth.js
var auth = __webpack_require__("q9EX");

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: ./src/public/static/images/logo.png
var logo = __webpack_require__("cOdk");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/public/static/images/circleCenter.svg
var circleCenter = __webpack_require__("EoII");
var circleCenter_default = /*#__PURE__*/__webpack_require__.n(circleCenter);

// CONCATENATED MODULE: ./src/components/Login_Register/index.js
var Login_Register_jsx = external_react_default.a.createElement;






















const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#ffffff",
      background: "var(--theme)"
    },
    "& .MuiTabs-indicator": {
      display: "none"
    },
    "& .MuiTab-textColorPrimary": {
      background: "#dfdfdf"
    },
    "& .MuiButton-containedPrimary": {
      marginTop: "1rem"
    }
  },
  Login: {
    position: "relative",
    marginTop: "5rem",
    "&::before": {
      top: "0",
      left: "0",
      width: "440px",
      height: "440px",
      content: '""',
      zIndex: "-1",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      background: circleCenter_default.a,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: '1.5rem'
    }
  },
  Img: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      '& img': {
        height: '65px'
      }
    }
  },
  orange: {
    color: "#fff",
    backgroundColor: "var(--theme)",
    width: "30px",
    height: "30px",
    fontSize: "1rem"
  },
  transparent: {
    color: "#000",
    width: "30px",
    height: "25px",
    backgroundColor: "transparent"
  },
  desktopMenu: {
    '& .MuiPopover-paper': {
      minWidth: '200px',
      textAlign: 'right'
    },
    '& li': {
      justifyContent: 'space-between'
    }
  }
}));

const Login_Register = ({
  isMobile = false,
  modalOpen = false
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const [value, setValue] = external_react_default.a.useState(0);
  const router = Object(router_["useRouter"])();
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: openAMenu,
    1: setopenAMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: openBMenu,
    1: setopenBMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: openCMenu,
    1: setopenCMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: openDMenu,
    1: setopenDMenu
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const toggleModal = () => {
    if (location.search.indexOf("signup=open") != -1) {
      setOpen(true);
    } else if (modalOpen != open) {
      setOpen(modalOpen);
    }
  };

  Object(external_react_["useEffect"])(() => {
    toggleModal();
  }, [modalOpen]);
  router.events.on('routeChangeComplete', toggleModal);
  const accessToken = Object(external_react_redux_["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(external_react_redux_["useSelector"])(state => state.auth_user.user); // console.log("User", user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const openModal = event => {
    if (!accessToken) {
      setOpen(true);
    } else {
      if (isMobile) {
        gotoProfile();
      } else {
        setAnchorEl(event.currentTarget);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const gotoProfile = () => {
    router.push("/profile");
  };

  const gotoProfileEdit = () => {
    router.push("/profile/edit");
  };

  const gotoEvents = () => {
    router.push("/profile/events");
  };

  const gotoRequeste = () => {
    router.push("/profile/requests");
  };

  const gotoFavEvents = () => {
    router.push("/profile/favourite-events");
  };

  const gotoFavProducts = () => {
    router.push("/profile/favourite-products");
  };

  const gotoAddRequest = () => {
    router.push("/post/request");
  };

  const gotoResetPassword = () => {
    router.push("/profile/reset-password");
  };

  const logout = () => {
    setAnchorEl(null);
    router.push("/");
    dispatch(Object(auth["b" /* unauthenticated */])());
  };

  const toggleASubmenu = () => {
    setopenAMenu(!openAMenu);
  };

  const toggleBSubmenu = () => {
    setopenBMenu(!openBMenu);
  };

  const toggleCSubmenu = () => {
    setopenCMenu(!openCMenu);
  };

  const toggleDSubmenu = () => {
    setopenDMenu(!openDMenu);
  };

  const classes = useStyles();
  return Login_Register_jsx("div", null, Login_Register_jsx(Avatar_default.a, {
    onClick: openModal,
    "aria-controls": "auth-menu",
    "aria-haspopup": "true",
    className: user.first_name ? classes.orange : classes.transparent
  }, user.first_name ? user.first_name.charAt(0) : Login_Register_jsx(AccountCircle_default.a, null)), Login_Register_jsx(Menu_default.a, {
    id: "auth-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose // open={!!menuPosition}
    // onClose={() => setMenuPosition({}) || handleClose}
    // anchorReference="anchorPosition"
    // anchorPosition={menuPosition}
    ,
    className: classes.desktopMenu
  }, Login_Register_jsx(MenuItem_default.a, {
    button: true,
    onClick: toggleASubmenu
  }, "Profile", openAMenu ? Login_Register_jsx(ExpandLess_default.a, null) : Login_Register_jsx(ExpandMore_default.a, null)), Login_Register_jsx(Collapse_default.a, {
    in: openAMenu,
    timeout: "auto",
    unmountOnExit: true
  }, Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoProfile
  }, "View Profile"), Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoResetPassword
  }, "Reset Password")), Login_Register_jsx(MenuItem_default.a, {
    button: true,
    onClick: toggleBSubmenu
  }, "Ads", openBMenu ? Login_Register_jsx(ExpandLess_default.a, null) : Login_Register_jsx(ExpandMore_default.a, null)), Login_Register_jsx(Collapse_default.a, {
    in: openBMenu,
    timeout: "auto",
    unmountOnExit: true
  }, Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoProfile
  }, "Published Ads"), Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoFavProducts
  }, "Favourite Products")), Login_Register_jsx(MenuItem_default.a, {
    button: true,
    onClick: toggleCSubmenu
  }, "Events", openCMenu ? Login_Register_jsx(ExpandLess_default.a, null) : Login_Register_jsx(ExpandMore_default.a, null)), Login_Register_jsx(Collapse_default.a, {
    in: openCMenu,
    timeout: "auto",
    unmountOnExit: true
  }, Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoEvents
  }, "Published Events"), Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoFavEvents
  }, "Favourite Events")), Login_Register_jsx(MenuItem_default.a, {
    button: true,
    onClick: toggleDSubmenu
  }, "Requests", openDMenu ? Login_Register_jsx(ExpandLess_default.a, null) : Login_Register_jsx(ExpandMore_default.a, null)), Login_Register_jsx(Collapse_default.a, {
    in: openDMenu,
    timeout: "auto",
    unmountOnExit: true
  }, Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoRequeste
  }, "Published Requests"), Login_Register_jsx(MenuItem_default.a, {
    onClick: gotoAddRequest
  }, "Add Product Request")), Login_Register_jsx(MenuItem_default.a, {
    onClick: logout
  }, "Logout")), Login_Register_jsx(Dialog_default.a, {
    open: open,
    onClose: closeModal,
    "aria-labelledby": "form-dialog-title",
    className: classes.modal
  }, Login_Register_jsx("div", {
    className: classes.root
  }, Login_Register_jsx(Tabs_default.a, {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    indicatorColor: "primary",
    textColor: "primary"
  }, Login_Register_jsx(Tab_default.a, {
    label: "Login"
  }), Login_Register_jsx(Tab_default.a, {
    label: "SignUp"
  })), Login_Register_jsx(external_react_swipeable_views_default.a, {
    index: value,
    onChangeIndex: handleChangeIndex
  }, Login_Register_jsx("div", {
    className: classes.Login
  }, Login_Register_jsx("div", {
    className: classes.Img
  }, Login_Register_jsx("img", {
    src: logo_default.a,
    width: "100"
  })), Login_Register_jsx(AuthForm["a" /* AuthForm */], {
    type: "login"
  })), Login_Register_jsx("div", null, Login_Register_jsx(AuthForm["a" /* AuthForm */], {
    type: "signup"
  }))))));
};

/* harmony default export */ var components_Login_Register = (Login_Register);
// EXTERNAL MODULE: ./src/redux/actionTypes/authModal.js
var actionTypes_authModal = __webpack_require__("owve");

// CONCATENATED MODULE: ./src/redux/actions/authModal.js

const showModal = () => ({
  type: actionTypes_authModal["b" /* SHOW_MODAL */]
});
const authModal_closeModal = () => ({
  type: actionTypes_authModal["a" /* CLOSE_MODAL */]
});
// CONCATENATED MODULE: ./src/Layout/Header/Desktop/index.js
var Desktop_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Desktop_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Desktop_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Desktop_ownKeys(Object(source), true).forEach(function (key) { Desktop_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Desktop_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Desktop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const Desktop_useStyles = Object(styles_["makeStyles"])(theme => Desktop_objectSpread(Desktop_objectSpread({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    "&:hover": {
      backgroundColor: '#fff'
    },
    border: "solid 1px #ccc",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}, commonStyles), {}, {
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.down("md")]: TabStyles
}));


function Header({
  modalOpen
}) {
  const {
    isScrolled,
    navBarRef
  } = utils_useNavbar();
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const [open, setOpen] = external_react_default.a.useState(false);
  const [authModal, setauthModal] = external_react_default.a.useState(false);
  const [timeout, settimeout] = external_react_default.a.useState("");
  const anchorRef = external_react_default.a.useRef(null);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const accessToken = Object(external_react_redux_["useSelector"])(state => state.auth_user.accessToken);

  const goto_commingSoon = () => {
    router.push("/coming-soon");
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  const prevOpen = external_react_default.a.useRef(open);
  external_react_default.a.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const classes = Desktop_useStyles();

  const handleListProduct = e => {
    setauthModal(false);
    e.preventDefault();

    if (accessToken) {
      router.push("/post");
    } else {
      router.push("/?signup=open");
    }
  };

  const handleListEvent = e => {
    setauthModal(false);
    e.preventDefault();

    if (accessToken) {
      router.push("/post/event");
    } else {
      router.push("/?signup=open");
    }
  };

  const handleSearch = e => {
    let value = e.target.value;
    if (timeout) clearTimeout(timeout);
    settimeout(setTimeout(() => {
      router.push("/products?s=" + value);
    }, 600));
  };

  return Desktop_jsx("nav", {
    id: "navbar",
    className: external_classnames_default()(classes.root, isScrolled && classes.scrolled),
    ref: navBarRef
  }, Desktop_jsx(core_["Container"], {
    maxWidth: "xl"
  }, Desktop_jsx(core_["Grid"], {
    container: true
  }, Desktop_jsx(core_["Grid"], {
    item: true,
    xs: 2
  }, Desktop_jsx(link_default.a, {
    href: "/"
  }, Desktop_jsx("img", {
    className: external_classnames_default()(classes.logo, isScrolled && classes.logoScrolled),
    src: logo_default.a
  }))), Desktop_jsx(core_["Grid"], {
    item: true,
    xs: 9
  }, Desktop_jsx("ul", {
    className: classes.Menu
  }, Desktop_jsx("li", {
    className: router.pathname == "/" ? "active" : ""
  }, Desktop_jsx(link_default.a, {
    href: "/"
  }, Desktop_jsx("a", null, "Home"))), Desktop_jsx("li", {
    className: router.asPath == "/products?type=buy" ? "active" : ""
  }, Desktop_jsx(link_default.a, {
    href: "/products?type=buy"
  }, "Buy")), Desktop_jsx("li", {
    className: router.asPath == "/products?type=rental" ? "active" : ""
  }, Desktop_jsx(link_default.a, {
    href: "/products?type=rental"
  }, "Rent")), Desktop_jsx("li", {
    className: router.pathname == "/events" ? "active" : ""
  }, Desktop_jsx(link_default.a, {
    href: "/events"
  }, "Events")), Desktop_jsx("li", {
    className: router.pathname == "/buy-request" ? "active" : ""
  }, Desktop_jsx(link_default.a, {
    href: "/buy-request"
  }, "Requests")), Desktop_jsx("li", {
    className: router.pathname == "/post" ? "active" : ""
  }, Desktop_jsx("a", null, Desktop_jsx("span", {
    onClick: handleListProduct
  }, "Sell"))), Desktop_jsx("li", {
    className: router.pathname == "/post/event" ? "active" : ""
  }, Desktop_jsx("a", null, Desktop_jsx("span", {
    onClick: handleListEvent
  }, "Add Event"))), Desktop_jsx("li", {
    className: router.pathname == "/feedback" ? "active" : ""
  }, Desktop_jsx(link_default.a, {
    href: "/feedback"
  }, "Feedback")), Desktop_jsx("li", null, Desktop_jsx(Button_default.a, {
    ref: anchorRef,
    "aria-controls": open ? "More" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle
  }, "More"), Desktop_jsx(Popper_default.a, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, ({
    TransitionProps,
    placement
  }) => Desktop_jsx(Grow_default.a, _extends({}, TransitionProps, {
    style: {
      transformOrigin: placement === "bottom" ? "center top" : "center bottom"
    }
  }), Desktop_jsx(Paper_default.a, null, Desktop_jsx(ClickAwayListener_default.a, {
    onClickAway: handleToggleClose
  }, Desktop_jsx(MenuList_default.a, {
    autoFocusItem: open,
    id: "menu-list-grow",
    onKeyDown: handleListKeyDown
  }, Desktop_jsx(MenuItem_default.a, null, Desktop_jsx(link_default.a, {
    href: "/about"
  }, "About")), Desktop_jsx(MenuItem_default.a, null, Desktop_jsx(link_default.a, {
    href: "/privacy-policy"
  }, "Privacy Policy")), Desktop_jsx(MenuItem_default.a, null, Desktop_jsx(link_default.a, {
    href: "/terms-and-conditions"
  }, "Terms & Conditions")))))))))), Desktop_jsx(core_["Grid"], {
    item: true,
    xs: 1
  }, Desktop_jsx("ul", {
    className: classes.MenuRight
  }, Desktop_jsx("li", null, Desktop_jsx(ChatIcon, null)), Desktop_jsx("li", null, Desktop_jsx(components_Login_Register, {
    modalOpen: authModal
  })))))));
}

/* harmony default export */ var Desktop = (Header);
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var icons_Menu_ = __webpack_require__("4D1s");
var icons_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__("jQ8v");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/icons/LabelImportant"
var LabelImportant_ = __webpack_require__("bL27");

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/icons/MoveToInbox"
var MoveToInbox_ = __webpack_require__("1520");

// EXTERNAL MODULE: external "@material-ui/icons/HomeRounded"
var HomeRounded_ = __webpack_require__("Y8xW");
var HomeRounded_default = /*#__PURE__*/__webpack_require__.n(HomeRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/EventNoteRounded"
var EventNoteRounded_ = __webpack_require__("2BT2");
var EventNoteRounded_default = /*#__PURE__*/__webpack_require__.n(EventNoteRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalMallRounded"
var LocalMallRounded_ = __webpack_require__("CKmv");
var LocalMallRounded_default = /*#__PURE__*/__webpack_require__.n(LocalMallRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/LiveTvRounded"
var LiveTvRounded_ = __webpack_require__("jTlH");
var LiveTvRounded_default = /*#__PURE__*/__webpack_require__.n(LiveTvRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/FormatListBulleted"
var FormatListBulleted_ = __webpack_require__("klsJ");
var FormatListBulleted_default = /*#__PURE__*/__webpack_require__.n(FormatListBulleted_);

// EXTERNAL MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_ = __webpack_require__("RiyV");
var ExitToApp_default = /*#__PURE__*/__webpack_require__.n(ExitToApp_);

// EXTERNAL MODULE: external "@material-ui/icons/NavigateNextRounded"
var NavigateNextRounded_ = __webpack_require__("tVJi");

// EXTERNAL MODULE: external "@material-ui/icons/Feedback"
var Feedback_ = __webpack_require__("Sgq+");
var Feedback_default = /*#__PURE__*/__webpack_require__.n(Feedback_);

// EXTERNAL MODULE: external "@material-ui/icons/More"
var More_ = __webpack_require__("UEfX");
var More_default = /*#__PURE__*/__webpack_require__.n(More_);

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/icons/Notifications"
var Notifications_ = __webpack_require__("0ezn");

// CONCATENATED MODULE: ./src/Layout/Header/Mobile/styles.js
const styles_commonStyles = {
  root: {
    flexGrow: 1
  },
  AppbarBg: {
    background: '#fff',
    color: '#333'
  },
  menuButton: {
    marginRight: "2rem"
  },
  title: {
    flexGrow: 1,
    display: "block"
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "100%"
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    width: "100%"
  },
  fullList: {
    width: "auto"
  },
  logo: {
    height: "50px",
    width: "auto",
    padding: "5px 0"
  },
  menuIcons: {
    marginLeft: "auto",
    display: "flex"
  },
  sideBar: {
    width: "280px",
    "& .MuiDrawer-paper": {
      width: "280px"
    },
    "& .MuiBackdrop-root": {
      pointerEvents: "none"
    },
    "& a": {
      color: "#333",
      textDecoration: "none"
    },
    "& a.active": {
      color: "var(--theme)"
    },
    "& a.active svg": {
      color: "var(--theme)"
    }
  },
  searchBar: {
    position: "fixed",
    width: "100%",
    background: "#fff",
    left: "0",
    zIndex: "100",
    display: "flex",
    top: "0",
    height: "57px"
  },
  searchbtn: {
    height: "35px",
    background: "var(--theme)",
    color: "#fff",
    alignSelf: "center",
    borderRadius: "4px",
    padding: "5px 10px",
    border: "none"
  }
};
// EXTERNAL MODULE: external "@material-ui/icons/Create"
var Create_ = __webpack_require__("rx4r");

// CONCATENATED MODULE: ./src/Layout/Header/Mobile/index.js
var Mobile_jsx = external_react_default.a.createElement;

function Mobile_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Mobile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Mobile_ownKeys(Object(source), true).forEach(function (key) { Mobile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Mobile_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Mobile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














































const Mobile_useStyles = Object(styles_["makeStyles"])(theme => Mobile_objectSpread({}, styles_commonStyles));
function SearchAppBar() {
  const classes = Mobile_useStyles();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const accessToken = Object(external_react_redux_["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(external_react_redux_["useSelector"])(state => state.auth_user.user);
  const router = Object(router_["useRouter"])();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: timeout,
    1: settimeout
  } = Object(external_react_["useState"])("");
  const {
    0: searchValue,
    1: setsearchValue
  } = Object(external_react_["useState"])("");
  const {
    0: openMenu,
    1: setOpenMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: openAMenu,
    1: setOpenAMenu
  } = Object(external_react_["useState"])(false);

  const toggleSubmenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleASubmenu = () => {
    setOpenAMenu(!openAMenu);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [opensearch, setopensearch] = external_react_default.a.useState(false);

  const handleSearchOpen = () => {
    setopensearch(true);
  };

  const handleSearchClose = () => {
    setopensearch(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const logout = () => {
    setAnchorEl(null);
    router.push("/");
    dispatch(Object(auth["b" /* unauthenticated */])());
  }; // const handleSearch = (e) => {
  //   let value = e.target.value;
  //   settimeout(value);
  // };


  const handleSearch = e => {
    let value = e.target.value;
    console.log(value, timeout);
    setsearchValue(value);
    if (timeout) clearTimeout(timeout);
    settimeout(setTimeout(() => {
      router.push("/products?s=" + value);
    }, 600));
  };

  const handleSeachClick = () => {
    router.push("/products?s=" + searchValue);
  };

  const SearchAppBarIcon = () => {
    return Mobile_jsx("div", {
      className: classes.searchBar
    }, Mobile_jsx(IconButton_default.a, {
      type: "submit",
      className: classes.iconButton,
      "aria-label": "search",
      onClick: handleSeachClick
    }, Mobile_jsx(Search_default.a, null)), Mobile_jsx(InputBase_default.a, {
      className: classes.input,
      placeholder: "Search",
      onChange: handleSearch,
      inputProps: {
        "aria-label": "search"
      },
      value: searchValue
    }), Mobile_jsx(IconButton_default.a, {
      className: classes.closeButton,
      onClick: handleSearchClose
    }, Mobile_jsx(Close_default.a, null)));
  };

  const handleListProduct = e => {
    e.preventDefault();

    if (accessToken) {
      router.push("/post");
    } else {
      router.push("/?signup=open"); // setauthModal(true);
    }
  };

  const handleListEvent = e => {
    // setauthModal(false);
    e.preventDefault();

    if (user.id) {
      router.push("/post/event");
    } else {
      router.push("/?signup=open");
    }
  };

  return Mobile_jsx("div", {
    className: classes.root
  }, Mobile_jsx(ClickAwayListener_default.a, {
    onClickAway: handleClickAway
  }, Mobile_jsx(AppBar_default.a, {
    position: "fixed",
    className: classes.AppbarBg
  }, Mobile_jsx(Toolbar_default.a, null, Mobile_jsx(IconButton_default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen
  }, Mobile_jsx(icons_Menu_default.a, null)), Mobile_jsx(Drawer_default.a, {
    open: open,
    className: classes.sideBar
  }, Mobile_jsx("div", {
    className: classes.drawerHeader
  }, Mobile_jsx(IconButton_default.a, {
    onClick: handleDrawerClose
  }, Mobile_jsx(ChevronLeft_default.a, null))), Mobile_jsx(Divider_default.a, null), Mobile_jsx(List_default.a, null, Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/",
    className: router.pathname == "/" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(HomeRounded_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Home"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/products?type=buy",
    className: router.asPath == "/products?type=buy" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(LocalMallRounded_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Buy"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/products?type=rental",
    className: router.asPath == "/products?type=rental" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(LocalMallRounded_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Rent"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/events",
    className: router.pathname == "/events" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(EventNoteRounded_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Event"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a // href={!accessToken ? "/?signup=open" : "/post"}
    ,
    onClick: handleListProduct,
    className: router.pathname == "/post" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(FormatListBulleted_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Sell"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/buy-request",
    className: router.pathname == "/buy-request" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(FormatListBulleted_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Requests"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a // href={!accessToken ? "/?signup=open" : "/post/event"}
    ,
    onClick: handleListEvent,
    className: router.pathname == "/post/event" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(FormatListBulleted_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Add Events"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/feedback",
    className: router.pathname == "/feedback" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(Feedback_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Feedback"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    onClick: toggleSubmenu
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(More_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "More"
  }), openMenu ? Mobile_jsx(ExpandLess_default.a, null) : Mobile_jsx(ExpandMore_default.a, null)), Mobile_jsx(Collapse_default.a, {
    in: openMenu,
    timeout: "auto",
    unmountOnExit: true
  }, Mobile_jsx(List_default.a, {
    component: "div",
    disablePadding: true
  }, Mobile_jsx(Link_default.a, {
    href: "/about"
  }, Mobile_jsx(ListItem_default.a, {
    button: true
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(Feedback_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "About"
  }))), Mobile_jsx(Link_default.a, {
    href: "/privacy-policy"
  }, Mobile_jsx(ListItem_default.a, {
    button: true
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(Feedback_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Privacy Policy"
  }))), Mobile_jsx(Link_default.a, {
    href: "/terms-and-conditions"
  }, Mobile_jsx(ListItem_default.a, {
    button: true
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(Feedback_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Terms & Conditions"
  }))))), Mobile_jsx(Divider_default.a, null), accessToken && Mobile_jsx(external_react_default.a.Fragment, null, Mobile_jsx(ListItem_default.a, {
    button: true,
    onClick: toggleASubmenu
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(AccountBox_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Account"
  }), openAMenu ? Mobile_jsx(ExpandLess_default.a, null) : Mobile_jsx(ExpandMore_default.a, null)), Mobile_jsx(Collapse_default.a, {
    in: openAMenu,
    timeout: "auto",
    unmountOnExit: true
  }, Mobile_jsx(List_default.a, {
    component: "div",
    disablePadding: true
  }, Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile",
    className: router.pathname == "/profile" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "View Profile"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile/edit",
    className: router.pathname == "/profile/edit" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Edit Profile"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile",
    className: router.pathname == "/profile" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Published Adds"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile/events",
    className: router.pathname == "/profile/events" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Published Events"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile/requests",
    className: router.pathname == "/profile/requests" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Published Requests"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile/favourite-events",
    className: router.pathname == "/profile/favourite-events" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Favourite Events"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/profile/favourite-products",
    className: router.pathname == "/profile/favourite-products" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Favourite products"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    component: Link_default.a,
    href: "/post/request",
    className: router.pathname == "/post/request" ? "active" : ""
  }, Mobile_jsx(ListItemIcon_default.a, null), Mobile_jsx(ListItemText_default.a, {
    primary: "Add Product Request"
  })), Mobile_jsx(Divider_default.a, null), Mobile_jsx(ListItem_default.a, {
    button: true,
    onClick: logout
  }, Mobile_jsx(ListItemIcon_default.a, null, Mobile_jsx(ExitToApp_default.a, null)), Mobile_jsx(ListItemText_default.a, {
    primary: "Logout"
  }))))))), Mobile_jsx(Link_default.a, {
    href: "/"
  }, Mobile_jsx("img", {
    className: classes.logo,
    src: logo_default.a
  })), Mobile_jsx("div", {
    className: classes.menuIcons
  }, Mobile_jsx(ChatIcon, null))))));
}
// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__("MbIc");
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/lab/Autocomplete"
var Autocomplete_ = __webpack_require__("YCa+");
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);

// CONCATENATED MODULE: ./src/Layout/Header/index.js
var Header_jsx = external_react_default.a.createElement;

function Header_extends() { Header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Header_extends.apply(this, arguments); }














const Header_useStyles = Object(styles_["makeStyles"])(theme => ({
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    }
  },
  modal: {
    padding: '0.5rem'
  }
}));

function Header_Header() {
  const [open, setOpen] = external_react_default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const matches = useMediaQuery_default()(theme => theme.breakpoints.up('md'));
  const HeaderComponent = matches ? Header_jsx(Desktop, {
    modalOpen: handleClickOpen
  }) : Header_jsx(SearchAppBar, {
    modalOpen: handleClickOpen
  });
  const CollegeNames = [{
    title: 'The Shawshank Redemption'
  }, {
    title: 'The Godfather'
  }, {
    title: 'The Godfather: Part II'
  }, {
    title: 'The Dark Knight'
  }, {
    title: '12 Angry Men'
  }, {
    title: "Schindler's List"
  }, {
    title: 'Pulp Fiction'
  }, {
    title: 'The Lord of the Rings: The Return of the King'
  }, {
    title: 'The Good, the Bad and the Ugly'
  }];
  const classes = Header_useStyles();
  return Header_jsx(external_react_default.a.Fragment, null, HeaderComponent, Header_jsx(Dialog_default.a, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    className: classes.modal
  }, Header_jsx(DialogTitle_default.a, {
    id: "form-dialog-title"
  }, "SignUp"), Header_jsx(DialogContent_default.a, null, Header_jsx(DialogContentText_default.a, null, "To subscribe to this website, please enter your email address here. We will send updates occasionally."), Header_jsx("div", {
    className: classes.form
  }, Header_jsx(TextField_default.a, {
    autoFocus: true,
    margin: "dense",
    id: "fname",
    label: "First Name",
    type: "text",
    fullWidth: true
  }), Header_jsx(TextField_default.a, {
    autoFocus: true,
    margin: "dense",
    id: "lname",
    label: "Last Name",
    type: "text",
    fullWidth: true
  }), Header_jsx(TextField_default.a, {
    autoFocus: true,
    margin: "dense",
    id: "email",
    label: "Email Address",
    type: "email",
    fullWidth: true
  }), Header_jsx(TextField_default.a, {
    autoFocus: true,
    margin: "dense",
    id: "phone",
    label: "Phone No",
    type: "text",
    fullWidth: true
  }), Header_jsx(Autocomplete_default.a, {
    id: "university",
    options: CollegeNames,
    getOptionLabel: option => option.title,
    renderInput: params => Header_jsx(TextField_default.a, Header_extends({}, params, {
      label: "College",
      fullWidth: true
    }))
  }))), Header_jsx(DialogActions_default.a, null, Header_jsx(Button_default.a, {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), Header_jsx(Button_default.a, {
    onClick: handleClose,
    color: "primary"
  }, "SignUp"))));
}

/* harmony default export */ var Layout_Header = (Header_Header);
// CONCATENATED MODULE: ./src/Layout/Footer/styles.js
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
const Footer_styles_commonStyles = {
  Footer: {
    padding: '2rem 0',
    backgroundColor: '#151728'
  },
  FooterMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& ul': {
      listStyleType: 'none'
    },
    '& ul li': {
      marginBottom: '0.5rem'
    },
    '& ul li p': {
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    '& ul li a': {
      color: '#ffffff',
      fontSize: '18px',
      fontWeight: '500'
    }
  },
  SocialMenu: {
    '& ul': {
      listStyleType: 'none',
      display: 'flex',
      paddingLeft: 0,
      flexWrap: 'wrap'
    },
    '& ul li': {
      marginBottom: '0.5rem'
    },
    '& ul li:first-child': {
      width: '100%'
    },
    '& ul li p': {
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: '20px',
      margin: 0,
      fontWeight: 'bold'
    },
    '& ul li a': {
      color: '#000',
      marginRight: '0.8rem',
      display: 'inline-block'
    },
    '& ul li svg': {
      width: '1.3em',
      height: '1.3em',
      fill: '#fff',
      marginRight: '10px'
    }
  },
  logo: {
    width: '148px'
  },
  compInfo: {
    color: '#fff',
    paddingRight: '2rem'
  },
  Copyright: {
    backgroundColor: '#151728f0',
    padding: '1rem',
    textAlign: 'center',
    '& p': {
      color: '#fff',
      fontWeight: '500'
    },
    '& a': {
      color: '#fff',
      textDecoration: 'underline !important'
    }
  },
  downloadApp: {
    padding: "3rem 0",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(235, 238, 239, 0.6)",
      zIndex: "1"
    }
  },
  downloadTitle: {
    position: "relative",
    zIndex: "2",
    marginLeft: "auto",
    "& h3": {
      color: "#2A66EA"
    }
  },
  downloadContent: {
    margin: "0 auto",
    position: "relative",
    zIndex: "2",
    width: "max-content",
    "& h5": {
      marginBottom: "1rem",
      textAlign: "center"
    }
  },
  contactDetails: {
    '& a': {
      display: 'flex',
      alignItems: 'center'
    },
    '& span': {
      color: '#fff',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center'
    },
    '& svg': {
      fontSize: '18px',
      marginRight: '10px'
    }
  },
  downloadLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      width: "48%"
    },
    "& img": {
      width: "100%"
    }
  }
};
const styles_mobileStyles = {
  Copyright: {
    padding: '0.5rem 1rem',
    marginBottom: '2.9rem',
    '& p': {
      fontSize: '14px'
    }
  },
  Footer: {
    paddingTop: '1rem',
    paddingBottom: '0'
  },
  FooterMenu: {
    '& ul': {
      margin: '0',
      borderBottom: 'solid 1px #393939',
      textAlign: 'center',
      padding: '0.4rem 0',
      width: '100%'
    },
    '& ul li p': {
      margin: 0
    },
    '& ul li': {
      marginBottom: '0.3rem'
    },
    '& ul li a': {
      fontSize: '14px'
    },
    '& ul li span': {
      fontSize: '14px'
    }
  },
  logo: {
    display: 'block',
    margin: 'auto'
  },
  contactDetails: {
    '& a': {
      justifyContent: 'center'
    },
    '& span': {
      justifyContent: 'center'
    }
  },
  SocialMenu: {
    textAlign: 'center',
    '& ul': {
      paddingLeft: '0',
      justifyContent: 'center',
      marginBottom: 0,
      borderBottom: 'solid 1px #393939'
    },
    '& ul li svg': {
      width: '1em',
      height: '1em'
    }
  },
  downloadTitle: {
    "& h3": {
      marginBottom: "2rem",
      textAlign: "center"
    }
  },
  downloadLinks: {
    "& img": {
      width: "100px"
    }
  },
  compInfo: {
    paddingRight: 0
  }
};
const styles_TabStyles = {
  Copyright: {
    marginBottom: '2.9rem'
  }
};
const styles_desktopStyles = {
  FooterMenu: {
    '& ul': {
      paddingLeft: 0
    }
  },
  downloadTitle: {
    width: "50%"
  }
};
// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__("0F/j");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);

// EXTERNAL MODULE: external "@material-ui/icons/Instagram"
var Instagram_ = __webpack_require__("JDU/");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);

// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__("s4mK");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);

// EXTERNAL MODULE: external "@material-ui/icons/YouTube"
var YouTube_ = __webpack_require__("MNHr");
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_);

// EXTERNAL MODULE: external "@material-ui/icons/LinkedIn"
var LinkedIn_ = __webpack_require__("V0nV");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_);

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__("lgrB");
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./src/public/static/images/logoft.png
var logoft = __webpack_require__("iycL");
var logoft_default = /*#__PURE__*/__webpack_require__.n(logoft);

// CONCATENATED MODULE: ./src/Layout/Footer/index.js
var Footer_jsx = external_react_default.a.createElement;

function Footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Footer_ownKeys(Object(source), true).forEach(function (key) { Footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const Footer_useStyles = Object(styles_["makeStyles"])(theme => Footer_objectSpread(Footer_objectSpread({}, Footer_styles_commonStyles), {}, {
  [theme.breakpoints.up('md')]: styles_desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: styles_TabStyles,
  [theme.breakpoints.down('xs')]: styles_mobileStyles
}));

function Footer() {
  const classes = Footer_useStyles();
  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("footer", {
    className: classes.Footer
  }, Footer_jsx(core_["Container"], {
    maxWidth: "xl"
  }, Footer_jsx(core_["Grid"], {
    container: true
  }, Footer_jsx(core_["Grid"], {
    item: true,
    lg: 4,
    md: 3,
    sm: 3
  }, Footer_jsx(link_default.a, {
    href: "/"
  }, Footer_jsx("img", {
    className: classes.logo,
    src: logoft_default.a
  })), Footer_jsx("div", {
    className: classes.SocialMenu
  }, Footer_jsx("p", {
    className: classes.compInfo
  }, "Friendzproducts is a platform with such an innovative idea to sell/ purchase or request a wide range of items within the college campus. Besides, you could get information of various events held in colleges throughout India."), Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx("p", null, "FOLLOW US ")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "https://www.facebook.com/FriendzProduct-114628167338547"
  }, Footer_jsx(Facebook_default.a, {
    color: "#fff"
  }))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "https://instagram.com/friendz_product?igshid=ubmjpuoqvsm5"
  }, Footer_jsx(Instagram_default.a, {
    color: "#fff"
  }))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, Footer_jsx(Twitter_default.a, {
    color: "#fff"
  }))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, Footer_jsx(YouTube_default.a, {
    color: "#fff"
  }))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, Footer_jsx(LinkedIn_default.a, {
    color: "#fff"
  })))))), Footer_jsx(core_["Grid"], {
    item: true,
    lg: 8,
    md: 9,
    sm: 9
  }, Footer_jsx("div", {
    className: classes.FooterMenu
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx("p", null, "POPULAR COLLEGES")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/products?s=nit-jalandhar"
  }, "NIT Jalandhar")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/products?s=nit-delhi"
  }, "NIT Delhi")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/products?s=nit-kurukshetra"
  }, "NIT Kurukshetra")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/products?s=nit-delhi"
  }, "IIT Delhi"))), Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx("p", null, "Useful Links")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/about"
  }, "About")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/privacy-policy"
  }, "Privacy Policy")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/terms-and-conditions"
  }, "Terms and Conditions"))), Footer_jsx("ul", {
    className: classes.contactDetails
  }, Footer_jsx("li", null, Footer_jsx("p", null, "Contact")), Footer_jsx("li", null, Footer_jsx("span", null, Footer_jsx(Home_default.a, {
    color: "#fff"
  }), "Jalandhar, Punjab")), Footer_jsx("li", null, Footer_jsx("a", {
    href: "mailto:info@friendzproducts.com"
  }, Footer_jsx(Mail_default.a, {
    color: "#fff"
  }), "info@friendzproducts.com")), Footer_jsx("li", null, Footer_jsx("a", {
    href: "tel:+9170033511"
  }, Footer_jsx(Phone_default.a, {
    color: "#fff"
  }), "+ 9170033511")), Footer_jsx("li", null, Footer_jsx("a", {
    href: "tel:+9170033511"
  }, Footer_jsx(Phone_default.a, {
    color: "#fff"
  }), "+ 9170033511")))))))), Footer_jsx("div", {
    className: classes.Copyright
  }, Footer_jsx(core_["Container"], {
    maxWidth: "lg"
  }, Footer_jsx(core_["Typography"], null, external_moment_default()().year(), " Copyrights All rights Reserved Website Powered by ", Footer_jsx("a", {
    href: "https://www.woodboxdigital.com/",
    target: "_blank"
  }, "Wood Box")))));
}

/* harmony default export */ var Layout_Footer = (Footer);
// EXTERNAL MODULE: external "@material-ui/core/BottomNavigation"
var BottomNavigation_ = __webpack_require__("JH4w");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_);

// EXTERNAL MODULE: external "@material-ui/core/BottomNavigationAction"
var BottomNavigationAction_ = __webpack_require__("8WuN");
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_);

// CONCATENATED MODULE: ./src/Layout/Footer/BottomNavigation.js
var BottomNavigation_jsx = external_react_default.a.createElement;














const BottomNavigation_useStyles = Object(styles_["makeStyles"])({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: '45px',
    zIndex: 2,
    background: "#fdfdfd",
    boxShadow: "0px -3px 20px rgba(0,0,0,0.1)",
    "& button": {
      minWidth: "60px",
      padding: "3px 10px 3px"
    },
    "& a": {
      color: "#908e8e",
      paddingTop: '5px',
      paddingBottom: '5px'
    },
    "& a.active": {
      color: "var(--theme)"
    }
  }
});
function SimpleBottomNavigation() {
  const router = Object(router_["useRouter"])();
  const classes = BottomNavigation_useStyles();
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])('0');
  Object(external_react_["useEffect"])(() => {
    setValue(localStorage.getItem("botMenu"));
  });
  const accessToken = Object(external_react_redux_["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(external_react_redux_["useSelector"])(state => state.auth_user.user);

  const handleAddProduct = () => {
    if (user.id) {
      router.push("/profile");
    } else {
      window.location.replace("/?signup=open");
    }
  };

  return BottomNavigation_jsx(BottomNavigation_default.a, {
    value: value,
    onChange: (event, newValue) => {
      setValue(newValue);
      localStorage.setItem("botMenu", newValue);
    },
    showLabels: true,
    className: classes.root
  }, BottomNavigation_jsx(BottomNavigationAction_default.a, {
    component: core_["Link"],
    href: "/",
    label: "Home",
    className: router.pathname == "/" ? "active" : "",
    icon: BottomNavigation_jsx(HomeRounded_default.a, null)
  }), BottomNavigation_jsx(BottomNavigationAction_default.a, {
    component: core_["Link"],
    href: "/products?type=buy",
    label: "Buy",
    className: router.pathname == "/products" ? "active" : "",
    icon: BottomNavigation_jsx(LocalMallRounded_default.a, null)
  }), BottomNavigation_jsx(BottomNavigationAction_default.a, {
    component: core_["Link"],
    href: "/events",
    label: "Events",
    className: router.pathname == "/events" ? "active" : "",
    icon: BottomNavigation_jsx(EventNoteRounded_default.a, null)
  }), BottomNavigation_jsx(BottomNavigationAction_default.a, {
    component: core_["Link"],
    href: "/buy-request",
    label: "Requests",
    className: router.pathname == "/buy-request" ? "active" : "",
    icon: BottomNavigation_jsx(FormatListBulleted_default.a, null)
  }), accessToken && BottomNavigation_jsx(BottomNavigationAction_default.a, {
    component: core_["Link"] // href="/profile"
    ,
    onClick: handleAddProduct,
    label: "My ads",
    className: router.pathname == "/profile" ? "active" : "",
    icon: BottomNavigation_jsx(LiveTvRounded_default.a, null)
  }), !accessToken && BottomNavigation_jsx(BottomNavigationAction_default.a, {
    label: "Login",
    icon: BottomNavigation_jsx(components_Login_Register, {
      isMobile: true
    })
  }));
}
// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// CONCATENATED MODULE: ./src/Layout/styles.js
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
const Layout_styles_commonStyles = {
  Wrapper: {
    '& ::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#F5F5F5'
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--theme)'
    },
    '& a': {
      cursor: 'pointer !important',
      textDecoration: 'none'
    },
    '& .dialogeCustom .MuiGrid-spacing-xs-8': {
      width: '100%',
      margin: '0'
    }
  },
  Main: {
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      display: 'none'
    },
    '& .image-gallery-content .image-gallery-slide .image-gallery-image': {
      maxHeight: 'calc(100vh - 80px)',
      height: '500px',
      objectFit: 'cover'
    }
  },
  loader: {
    position: 'fixed',
    width: '100vW',
    height: '100vh',
    display: 'flex',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    background: 'rgba(0,0,0,0.7)'
  }
};
const Layout_styles_mobileStyles = {
  Main: {
    paddingTop: '56px',
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      display: 'block',
      bottom: '0'
    },
    '& .swiperScrollbarDrag': {
      backgroundColor: 'rgb(252, 130, 26)'
    },
    '& .image-gallery-content .image-gallery-slide .image-gallery-image': {
      height: 'auto',
      width: '100%',
      objectFit: 'contain'
    }
  }
};
const Layout_styles_TabStyles = {
  Main: {
    paddingTop: '56px'
  }
};
const Layout_styles_desktopStyles = {
  Main: {
    paddingTop: '7.5rem'
  },
  Wrapper: {
    '& .MuiContainer-maxWidthXl': {
      width: '90%',
      maxWidth: '1404px'
    }
  }
};
// CONCATENATED MODULE: ./src/Layout/index.js

var Layout_jsx = external_react_default.a.createElement;

function Layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Layout_ownKeys(Object(source), true).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Layout_useStyles = Object(styles_["makeStyles"])(theme => Layout_objectSpread(Layout_objectSpread({}, Layout_styles_commonStyles), {}, {
  [theme.breakpoints.up("md")]: Layout_styles_desktopStyles,
  // [theme.breakpoints.down("xl")]: TabStyles,
  [theme.breakpoints.down("sm")]: Layout_styles_mobileStyles
}));
function Layout(props) {
  const classes = Layout_useStyles();
  const [isLoaded, setisLoaded] = external_react_default.a.useState(false);
  const matches = useMediaQuery_default()(theme => theme.breakpoints.down("sm"));
  const BottomNav = matches ? Layout_jsx(SimpleBottomNavigation, null) : null;
  const router = Object(router_["useRouter"])();
  const path = router.pathname;
  return Layout_jsx("div", {
    className: classes.Wrapper
  }, Layout_jsx(Layout_Header, null), Layout_jsx("div", {
    className: classes.Main
  }, props.children), props.nofooter == true ? "" : Layout_jsx(Layout_Footer, null), path.includes("chat") ? null : BottomNav, isLoaded && Layout_jsx("div", {
    className: classes.loader
  }, Layout_jsx(CircularProgress_default.a, null)));
}

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2BT2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EventNoteRounded");

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

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sQMQ");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "4jCe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8WuN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CKmv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalMallRounded");

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

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

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "EoII":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MzciIGhlaWdodD0iNTM3Ij48ZyBkYXRhLW5hbWU9IkVsbGlwc2UgNSBjb3B5IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLXRoZW1lKSIgc3Ryb2tlLXdpZHRoPSIxMDAiIG9wYWNpdHk9Ii4wNTEiPjxjaXJjbGUgY3g9IjI2OC41IiBjeT0iMjY4LjUiIHI9IjI2OC41IiBzdHJva2U9Im5vbmUiLz48Y2lyY2xlIGN4PSIyNjguNSIgY3k9IjI2OC41IiByPSIyMTguNSIvPjwvZz48L3N2Zz4="

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

/***/ "FKIu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generalPostRequest */
/* unused harmony export generalGetRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchDialogs; });
/* unused harmony export fetchMessages */
/* unused harmony export createMessage */
/* unused harmony export unreadMsg */
/* unused harmony export readAll */
const API_URL = "http://fanto.in/admin/api";
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
function generalGetRequest(url) {
  return fetch(url).then(response => response.json()).then(responseData => {
    console.log(responseData);
    return responseData;
  }).catch(error => console.log(error));
}
function fetchDialogs(user_id, q) {
  let url = API_URL + "/dialogs/" + user_id;

  if (q) {
    url = url + q;
  }

  console.log(url);
  return generalGetRequest(url);
}
function fetchMessages(dialog_id, q) {
  let url = API_URL + "/messages/" + dialog_id;

  if (q) {
    url = url + q;
  }

  console.log(url);
  return generalGetRequest(url);
}
function createMessage(data) {
  let url = API_URL + "/message";
  console.log(url);
  return generalPostRequest(url, data);
}
function unreadMsg(user_id) {
  let url = API_URL + "/unread-message/" + user_id;
  console.log(url);
  return generalGetRequest(url);
}
function readAll(dialog_id, user_id) {
  let url = API_URL + "/mark-read-dialog/" + dialog_id + '/' + user_id;
  console.log(url);
  return generalGetRequest(url);
}

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GN20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectedDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unSelectedDialog; });
/* harmony import */ var _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PAnh");

const selectedDialog = dialog => ({
  type: _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__[/* SELECTED_DIALOG */ "a"],
  dialog
});
const unSelectedDialog = dialog => ({
  type: _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__[/* UN_SELECTED_DIALOG */ "b"],
  dialog
});

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "InJ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mobileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return desktopStyles; });
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
const commonStyles = {
  backdrop: {
    zIndex: 99999,
    color: "#fff"
  },
  section: {
    padding: "5rem 0",
    position: "relative"
  },
  ptZero: {
    paddingTop: "0 !important"
  },
  spacingBox: {
    margin: "3rem 0"
  },
  sectionHeader: {
    textAlign: "center",
    maxWidth: "910px",
    margin: "0 auto",
    "& h3": {
      marginBottom: "1rem"
    },
    "& h2": {
      marginBottom: "1rem",
      textTransform: "uppercase"
    },
    "& p": {
      color: "#4A4A4A",
      fontSize: "1.25rem"
    }
  },
  IconCardWrapper: {
    maxWidth: "960px",
    margin: "2rem auto 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    "&::before": {
      content: '""',
      background: "url(/static/images/circleCenter.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "540px",
      width: "540px",
      position: "absolute",
      zIndex: "-1"
    },
    "&::after": {
      content: '""',
      background: "url(/static/images/circleCenter.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      bottom: "-15rem",
      left: "-25rem",
      height: "50rem",
      width: "50rem",
      position: "absolute",
      zIndex: "-1"
    }
  },
  EventIconCardWrapper: {
    margin: "2rem auto 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  productsHeader: {
    paddingBottom: "1rem",
    borderBottom: "solid 1px #BDBDBD",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    "& h5": {
      marginBottom: "1rem"
    }
  },
  downloadApp: {
    padding: "3rem 0",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(235, 238, 239, 0.6)",
      zIndex: "1"
    }
  },
  downloadTitle: {
    position: "relative",
    zIndex: "2",
    marginLeft: "auto",
    "& h3": {
      color: "#2A66EA"
    }
  },
  downloadContent: {
    margin: "0 auto",
    position: "relative",
    zIndex: "2",
    width: "max-content",
    "& h5": {
      marginBottom: "1rem",
      textAlign: "center"
    }
  },
  downloadLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      width: "48%"
    },
    "& img": {
      width: "100%"
    }
  },
  ProductsGridWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, 300px )",
    gridGap: '1rem',
    "&:nth-of-type(1)": {
      paddingTop: "2rem"
    },
    "&:nth-last-of-type(1)": {
      paddingTop: "2rem"
    }
  },
  productContentSection: {
    margin: "3rem 0",
    padding: "2rem",
    backgroundSize: "120%",
    textAlign: "center",
    backgroundPosition: "center",
    "& h4": {
      fontWeight: "600"
    },
    "& button": {
      marginTop: "6rem",
      marginBottom: "2rem",
      width: "290px",
      height: "51px",
      border: "2px solid #000",
      background: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      fontWeight: "600"
    }
  },
  fliterBtn: {
    background: "var(--theme)",
    color: "#fff",
    width: "1rem",
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "5px",
    width: "8rem",
    height: "2.5rem",
    display: "flex",
    "&:hover": {
      background: "var(--theme)"
    }
  },
  Breadcrumbs: {
    "& a": {
      fontWeight: "500"
    },
    "& p": {
      fontWeight: "500"
    }
  },
  csoonImg: {
    maxWidth: "500px",
    width: "80%",
    marginBottom: "1rem"
  },
  loadMore: {
    fontSize: "1rem",
    padding: "0.6rem 2rem"
  },
  loadMorewrapper: {
    textAlign: "center",
    position: "relative",
    marginTop: '1.2rem'
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  catBtn: {
    fontSize: "1.5rem",
    textTransform: "capitalize",
    "& + div": {
      zIndex: "99"
    },
    "&:hover": {
      background: "none"
    },
    "& .MuiTouchRipple-root": {
      display: "none"
    }
  }
};
const mobileStyles = {
  section: {
    padding: "1rem 0"
  },
  productContentSection: {
    margin: '1rem 0',
    paddingBottom: '0'
  },
  spacingBox: {
    margin: "0.5rem 0"
  },
  productsHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    "&> div:nth-child(2)": {
      alignSelf: "flex-end"
    },
    "& h5": {
      marginBottom: 0
    }
  },
  sectionHeader: {
    "& h3": {
      marginBottom: "1rem",
      lineHeight: "2rem"
    },
    "& h2": {
      marginBottom: "0rem"
    },
    "& p": {
      fontSize: "14px"
    }
  },
  IconCardWrapper: {
    "&::after": {
      display: "none"
    },
    "&::before": {
      width: "20rem",
      height: "20rem"
    }
  },
  EventIconCardWrapper: {
    marginTop: '1rem',
    "& .swiper-container": {
      paddingBottom: '2.5rem'
    },
    "& .swiper-pagination-bullet-active": {
      background: 'var(--theme)'
    },
    "& .swiper-button-prev": {
      display: "none"
    },
    "& .swiper-button-next": {
      display: "none"
    }
  },
  downloadTitle: {
    "& h3": {
      marginBottom: "2rem",
      textAlign: "center"
    }
  },
  downloadLinks: {
    "& img": {
      width: "100px"
    }
  },
  ProductsGridWrapper: {
    paddingTop: "1rem",
    "& .event__card": {
      width: "100% !important"
    }
  }
};
const TabStyles = {
  IconCardWrapper: {
    "&::after": {
      display: "none"
    }
  }
};
const desktopStyles = {
  downloadTitle: {
    width: "50%"
  },
  EventIconCardWrapper: {
    "& .swiper-pagination": {
      display: 'none'
    }
  }
};

/***/ }),

/***/ "JDU/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "JH4w":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "MNHr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/YouTube");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "QLiB":
/***/ (function(module, exports) {

module.exports = require("connectycube");

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "RiyV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "Sgq+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Feedback");

/***/ }),

/***/ "UEfX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/More");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "V0nV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "VRH+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "Y47r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IbbU");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YCa+");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_global_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vGTh");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vxx+");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apis_auth_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2mpK");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("q9EX");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("rCsO");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4jCe");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("gGTQ");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  form: {
    padding: '1.5rem 2.0rem',
    [theme.breakpoints.up('sm')]: {
      margin: '2.5rem'
    }
  },
  modal: {
    padding: '0.5rem'
  },
  button: {
    '&:focus': {
      background: 'rgb(177, 90, 16)'
    },
    '& .MuiCircularProgress-colorPrimary': {
      marginLeft: '10px',
      color: '#fff'
    }
  }
}));
const AuthForm = ({
  type
}) => {
  const {
    0: firstname,
    1: setfirstname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: lastname,
    1: setlastname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: university,
    1: setuniversity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: ''
  });
  const {
    0: password,
    1: setpassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showpassword,
    1: setshowpassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: confirm_password,
    1: setconfirm_password
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showconfirm_password,
    1: setshowconfirm_password
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: phone_no,
    1: setphone_no
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: errs,
    1: seterrs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: universities,
    1: setuniversities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: branch,
    1: setbranch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: loading,
    1: setloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: btnloading,
    1: setbtnloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: backdrop,
    1: setbackdrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: formerrs,
    1: setformerrs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: showRedirect,
    1: setshowRedirect
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();

  const handleSubmit = e => {
    setformerrs([]);
    submitSignUp();
  };

  const submitLogin = () => {
    setshowRedirect(false);
    setformerrs([]);
    setbtnloading(true);
    let data = {
      email: email,
      password: password
    };
    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_9__[/* login */ "p"])(data).then(response => {
      if (response.error) {
        setbtnloading(false);
        setformerrs(response.msg);
      } else {
        setbtnloading(false);
        let user = response.body.user;
        let accessToken = response.body.user.api_token;
        let favEvents = response.body.favEvents;
        let favProducts = response.body.favProducts;
        setLogin(user, accessToken, favEvents, favProducts);
        setshowRedirect(true);
      }
    });
  };

  const submitSignUp = () => {
    setshowRedirect(false);
    setbtnloading(true); // let university_id = universities.find(
    //   (item) => item.name == university.name
    // );

    let data = {
      // first_name: firstname,
      // last_name: lastname,
      email: email,
      // university_id: university_id.id,
      password: password // phone_number: phone_no,
      // branch: branch,

    };
    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_9__[/* simpleSignup */ "q"])(data).then(response => {
      if (response.error) {
        setbtnloading(false);
        setformerrs(response.msg);
      } else {
        let user = response.body.user;
        let accessToken = response.body.user.api_token;
        setbtnloading(false);
        let favEvents = response.body.favEvents;
        let favProducts = response.body.favProducts;
        setLogin(user, accessToken, favEvents, favProducts);
        setshowRedirect(true);
      }
    });
  };

  const setLogin = (user, accessToken, favEvents, favProducts) => {
    console.log(user, accessToken);
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_11__[/* authenticated */ "a"])(user, accessToken, favEvents, favProducts));

    if (user.is_complete) {
      router.push('/');
    } else {
      router.push('/profile/edit');
    }
  };

  const responseGoogleSuccess = response => {
    let data = {
      email: response.profileObj.email,
      google_id: response.googleId
    }; // return

    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_9__[/* googleSignup */ "o"])(data).then(response => {
      if (response.error) {
        setbtnloading(false);
        setformerrs(response.msg);
      } else {
        let user = response.body.user;
        let accessToken = response.body.user.api_token;
        setbtnloading(false);
        let favEvents = response.body.favEvents;
        let favProducts = response.body.favProducts;
        setLogin(user, accessToken, favEvents, favProducts);
        setshowRedirect(true);
      }
    });
  };

  const responseGoogleFailure = response => {
    console.log(response); // alert('Oops!! there was some problem while logging in.')
  };

  const backdropClose = () => {
    setbackdrop(false);
  };

  const validateform = e => {
    e.preventDefault();

    if (type == 'login') {
      submitLogin();
      return;
    }

    let err = {};

    if (password != confirm_password) {
      err.no_same = 'true';
    }

    if (password.length < 8) {
      err.pwd_length = 'true';
    } // if (!university.name) {
    //   err.university = "true";
    // }


    seterrs(err);
    let has_error = Object.keys(err).length;

    if (!parseInt(has_error)) {
      handleSubmit();
    }
  };

  const updateformData = (e, type) => {
    e.preventDefault();
    eval('set' + type + "('" + e.target.value + "')");
  };

  const handleUniSearch = e => {
    let value = e.target.value;
    if (!value) return;
    setloading(true);
    Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_5__[/* searchUniversities */ "s"])(value).then(response => {
      setloading(false);
      setuniversities(response);
    });
  };

  const gotoForgotPassword = () => {
    router.push('/forgot-password');
  };

  return __jsx("div", {
    className: classes.form
  }, __jsx("div", {
    style: {
      textAlign: 'center'
    },
    className: "googleBtn"
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLogin"], {
    clientId: process.env.GOOGLE_CLIENT_ID,
    buttonText: type == 'login' ? 'Login with Google' : 'SignUp with Google',
    onSuccess: responseGoogleSuccess,
    onFailure: responseGoogleFailure,
    cookiePolicy: 'single_host_origin'
  })), __jsx("br", null), __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, "or"), __jsx("br", null), __jsx("form", {
    className: classes.container,
    onSubmit: validateform
  }, type == 'signup' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    required: true,
    margin: "dense",
    label: "Email Address",
    type: "email",
    fullWidth: true,
    value: email,
    onChange: e => updateformData(e, 'email'),
    name: "email"
  }), type == 'signup' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, errs['university'] && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "error"
  }, "Please select a university.")), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    required: true,
    margin: "dense",
    label: "Password",
    type: showpassword ? 'text' : 'password',
    fullWidth: true,
    value: password,
    onChange: e => updateformData(e, 'password'),
    name: "password"
  }), __jsx("span", {
    onClick: () => setshowpassword(!showpassword)
  }, ' ', showpassword ? __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14___default.a, null) : __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_15___default.a, null))), type == 'signup' && __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    required: true,
    margin: "dense",
    label: "Confirm Password",
    type: showconfirm_password ? 'text' : 'password',
    fullWidth: true,
    value: confirm_password,
    onChange: e => updateformData(e, 'confirm_password'),
    name: "confirm_password"
  }), __jsx("span", {
    onClick: () => setshowconfirm_password(!showconfirm_password)
  }, ' ', showconfirm_password ? __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14___default.a, null) : __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_15___default.a, null))), errs['no_same'] && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "error"
  }, "Password must match with confirm password"), errs['pwd_length'] && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "error"
  }, "Password must have 8 characters"), __jsx("div", null, formerrs.length > 0 && formerrs.map((text, index) => __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "error",
    key: `err-${index}`
  }, text))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "submit",
    className: classes.button,
    variant: "contained",
    color: "primary"
  }, type == 'login' ? 'Login' : 'SignUp', btnloading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "primary",
    size: 20
  }) : null)), __jsx("p", {
    style: {
      cursor: 'pointer'
    },
    onClick: gotoForgotPassword
  }, "Forgot password ? click ", __jsx("span", null, "here")), showRedirect && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "primary"
  }, "Redirecting to profile page!!", ' ', __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "primary",
    size: 20
  })));
};

/***/ }),

/***/ "Y8xW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HomeRounded");

/***/ }),

/***/ "YCa+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "ZUWB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "bL27":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LabelImportant");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

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

/***/ "cOdk":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-29e1a88ac4a90e80c07516594743f9e6.png";

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fPwM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lazyFetchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pushMessage; });
/* unused harmony export deleteAllMessages */
/* harmony import */ var _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FDB9");

const setMessages = (msgs, dialog) => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__[/* SET_MESSAGES */ "d"],
  msgs,
  dialog
});
const lazyFetchMessages = (dialogId, history) => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__[/* LAZY_FETCH_MESSAGES */ "b"],
  dialogId,
  history
});
const updateMessages = (dialogId, msgId, msg) => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_MESSAGES */ "e"],
  dialogId,
  msgId,
  msg
});
const pushMessage = msg => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__[/* PUSH_MESSAGE */ "c"],
  msg
});
const deleteAllMessages = () => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__[/* DELETE_ALL_MESSAGES */ "a"]
});

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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gGTQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "igu8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "iycL":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOX4/xaSpfErFD0BAAAAAElFTkSuQmCC"

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "j4BW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "jQ8v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "jTlH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LiveTvRounded");

/***/ }),

/***/ "klsJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatListBulleted");

/***/ }),

/***/ "lgrB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

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

/***/ "q9EX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticated; });
/* unused harmony export updateUserDeviceToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unauthenticated; });
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fTGU");

const authenticated = (user, accessToken, userFavEvents, userFavProducts) => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__[/* AUTHENTICATED */ "a"],
  payload: {
    user,
    accessToken,
    userFavEvents,
    userFavProducts
  }
});
const updateUserDeviceToken = token => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_DEVICE_TOKEN */ "c"],
  payload: {
    token
  }
});
const unauthenticated = () => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "b"]
});

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rx4r":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Create");

/***/ }),

/***/ "s4mK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "sQMQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1i9w");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("InJ6");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YeXC");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("PxrZ");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("thJL");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZUWB");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vxx+");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("fPwM");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apis_auth_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("2mpK");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__[/* commonStyles */ "b"]), {}, {
  [theme.breakpoints.up("md")]: _styles__WEBPACK_IMPORTED_MODULE_4__[/* desktopStyles */ "c"],
  [theme.breakpoints.between("sm", "md")]: _styles__WEBPACK_IMPORTED_MODULE_4__[/* TabStyles */ "a"],
  [theme.breakpoints.down("sm")]: _styles__WEBPACK_IMPORTED_MODULE_4__[/* mobileStyles */ "d"]
}));

function VerifyEmail({
  query
}) {
  const classes = useStyles();
  const {
    0: message,
    1: setmessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: messageType,
    1: setmessageType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: backdrop,
    1: setbackdrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let {
      token
    } = query;

    if (!token) {
      setbackdrop(false);
      setmessageType("error");
      setmessage("Token is not valid");
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
      return;
    }

    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_13__[/* verifyEmail */ "t"])(token).then(data => {
      setmessageType(data.error ? "error" : "success");
      setbackdrop(false);
      setmessage(data.msg);
      let userData = localStorage.getItem("user");
      userData = userData ? JSON.parse(userData) : "";

      if (userData) {
        userData.email_verified_at = true;
        localStorage.setItem("user", JSON.stringify(userData));
      }

      setTimeout(() => {
        window.location.replace("/profile/edit");
      }, 1000);
    });
  }, [query]);
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("section", {
    style: {
      textAlign: "center",
      minWidth: 275
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    component: "h2"
  }, "Email Verification"), message && __jsx(Alert, {
    severity: messageType,
    style: {
      width: 300,
      margin: "auto"
    }
  }, message), backdrop && __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.backdrop,
    open: backdrop // onClick={handleClose}

  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "inherit"
  }))))));
}

VerifyEmail.getInitialProps = ({
  query
}) => {
  return {
    query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (VerifyEmail);

/***/ }),

/***/ "tVJi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNextRounded");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

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

/***/ "vxx+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ })

/******/ });