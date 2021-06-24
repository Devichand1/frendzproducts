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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/feedback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./appConfig.js":
/*!**********************!*\
  !*** ./appConfig.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

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
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
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
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

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

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

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

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

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
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

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

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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


    if (true) {
      return;
    }

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

    if (false) {}

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

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
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

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
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
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

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
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
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
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

/***/ "./src/Layout/Footer/BottomNavigation.js":
/*!***********************************************!*\
  !*** ./src/Layout/Footer/BottomNavigation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleBottomNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "@material-ui/core/BottomNavigation");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "@material-ui/core/BottomNavigationAction");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HomeRounded */ "@material-ui/icons/HomeRounded");
/* harmony import */ var _material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/EventNoteRounded */ "@material-ui/icons/EventNoteRounded");
/* harmony import */ var _material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocalMallRounded */ "@material-ui/icons/LocalMallRounded");
/* harmony import */ var _material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LiveTvRounded */ "@material-ui/icons/LiveTvRounded");
/* harmony import */ var _material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Login_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Login_Register */ "./src/components/Login_Register/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FormatListBulleted */ "@material-ui/icons/FormatListBulleted");
/* harmony import */ var _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const classes = useStyles();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(localStorage.getItem("botMenu"));
  });
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.auth_user.user);

  const handleAddProduct = () => {
    if (user.id) {
      router.push("/profile");
    } else {
      window.location.replace("/?signup=open");
    }
  };

  return __jsx(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: value,
    onChange: (event, newValue) => {
      setValue(newValue);
      localStorage.setItem("botMenu", newValue);
    },
    showLabels: true,
    className: classes.root
  }, __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Link"],
    href: "/",
    label: "Home",
    className: router.pathname == "/" ? "active" : "",
    icon: __jsx(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_4___default.a, null)
  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Link"],
    href: "/products?type=buy",
    label: "Buy",
    className: router.pathname == "/products" ? "active" : "",
    icon: __jsx(_material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_6___default.a, null)
  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Link"],
    href: "/events",
    label: "Events",
    className: router.pathname == "/events" ? "active" : "",
    icon: __jsx(_material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Link"],
    href: "/buy-request",
    label: "Requests",
    className: router.pathname == "/buy-request" ? "active" : "",
    icon: __jsx(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13___default.a, null)
  }), accessToken && __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Link"] // href="/profile"
    ,
    onClick: handleAddProduct,
    label: "My ads",
    className: router.pathname == "/profile" ? "active" : "",
    icon: __jsx(_material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_7___default.a, null)
  }), !accessToken && __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Login",
    icon: __jsx(_components_Login_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isMobile: true
    })
  }));
}

/***/ }),

/***/ "./src/Layout/Footer/index.js":
/*!************************************!*\
  !*** ./src/Layout/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/Layout/Footer/styles.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "@material-ui/icons/Instagram");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "@material-ui/icons/YouTube");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Phone */ "@material-ui/icons/Phone");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_static_images_logoft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../public/static/images/logoft.png */ "./src/public/static/images/logoft.png");
/* harmony import */ var _public_static_images_logoft_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_logoft_png__WEBPACK_IMPORTED_MODULE_15__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__["commonStyles"]), {}, {
  [theme.breakpoints.up('md')]: _styles__WEBPACK_IMPORTED_MODULE_4__["desktopStyles"],
  [theme.breakpoints.between('xs', 'sm')]: _styles__WEBPACK_IMPORTED_MODULE_4__["TabStyles"],
  [theme.breakpoints.down('xs')]: _styles__WEBPACK_IMPORTED_MODULE_4__["mobileStyles"]
}));

function Footer() {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
    className: classes.Footer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    md: 3,
    sm: 3
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    className: classes.logo,
    src: _public_static_images_logoft_png__WEBPACK_IMPORTED_MODULE_15___default.a
  })), __jsx("div", {
    className: classes.SocialMenu
  }, __jsx("p", {
    className: classes.compInfo
  }, "Friendzproducts is a platform with such an innovative idea to sell/ purchase or request a wide range of items within the college campus. Besides, you could get information of various events held in colleges throughout India."), __jsx("ul", null, __jsx("li", null, __jsx("p", null, "FOLLOW US ")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "https://www.facebook.com/FriendzProduct-114628167338547"
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "#fff"
  }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "https://instagram.com/friendz_product?igshid=ubmjpuoqvsm5"
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "#fff"
  }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "#fff"
  }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "#fff"
  }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9___default.a, {
    color: "#fff"
  })))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 8,
    md: 9,
    sm: 9
  }, __jsx("div", {
    className: classes.FooterMenu
  }, __jsx("ul", null, __jsx("li", null, __jsx("p", null, "POPULAR COLLEGES")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/products?s=nit-jalandhar"
  }, "NIT Jalandhar")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/products?s=nit-delhi"
  }, "NIT Delhi")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/products?s=nit-kurukshetra"
  }, "NIT Kurukshetra")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/products?s=nit-delhi"
  }, "IIT Delhi"))), __jsx("ul", null, __jsx("li", null, __jsx("p", null, "Useful Links")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/about"
  }, "About")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/privacy-policy"
  }, "Privacy Policy")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/terms-and-conditions"
  }, "Terms and Conditions"))), __jsx("ul", {
    className: classes.contactDetails
  }, __jsx("li", null, __jsx("p", null, "Contact")), __jsx("li", null, __jsx("span", null, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "#fff"
  }), "Jalandhar, Punjab")), __jsx("li", null, __jsx("a", {
    href: "mailto:info@friendzproducts.com"
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, {
    color: "#fff"
  }), "info@friendzproducts.com")), __jsx("li", null, __jsx("a", {
    href: "tel:+9170033511"
  }, __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "#fff"
  }), "+ 9170033511")), __jsx("li", null, __jsx("a", {
    href: "tel:+9170033511"
  }, __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "#fff"
  }), "+ 9170033511")))))))), __jsx("div", {
    className: classes.Copyright
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "lg"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, moment__WEBPACK_IMPORTED_MODULE_14___default()().year(), " Copyrights All rights Reserved Website Powered by ", __jsx("a", {
    href: "https://www.woodboxdigital.com/",
    target: "_blank"
  }, "Wood Box")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Layout/Footer/styles.js":
/*!*************************************!*\
  !*** ./src/Layout/Footer/styles.js ***!
  \*************************************/
/*! exports provided: commonStyles, mobileStyles, TabStyles, desktopStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyles", function() { return commonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileStyles", function() { return mobileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStyles", function() { return TabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopStyles", function() { return desktopStyles; });
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
const commonStyles = {
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
const mobileStyles = {
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
const TabStyles = {
  Copyright: {
    marginBottom: '2.9rem'
  }
};
const desktopStyles = {
  FooterMenu: {
    '& ul': {
      paddingLeft: 0
    }
  },
  downloadTitle: {
    width: "50%"
  }
};

/***/ }),

/***/ "./src/Layout/Header/Desktop/index.js":
/*!********************************************!*\
  !*** ./src/Layout/Header/Desktop/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chat_components_ChatIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chat/components/ChatIcon */ "./src/chat/components/ChatIcon.js");
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/NotificationsNone */ "@material-ui/icons/NotificationsNone");
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useNavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useNavbar */ "./src/Layout/Header/utils/useNavbar.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/Layout/Header/Desktop/styles.js");
/* harmony import */ var _components_Login_Register__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/Login_Register */ "./src/components/Login_Register/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../public/static/images/logo.png */ "./src/public/static/images/logo.png");
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _redux_actions_authModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../redux/actions/authModal */ "./src/redux/actions/authModal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({
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
}, _styles__WEBPACK_IMPORTED_MODULE_18__["commonStyles"]), {}, {
  [theme.breakpoints.up("md")]: _styles__WEBPACK_IMPORTED_MODULE_18__["desktopStyles"],
  [theme.breakpoints.down("md")]: _styles__WEBPACK_IMPORTED_MODULE_18__["TabStyles"]
}));


function Header({
  modalOpen
}) {
  const {
    isScrolled,
    navBarRef
  } = Object(_utils_useNavbar__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [authModal, setauthModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [timeout, settimeout] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_21__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_20__["useRouter"])();
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_21__["useSelector"])(state => state.auth_user.accessToken);

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


  const prevOpen = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(open);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const classes = useStyles();

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

  return __jsx("nav", {
    id: "navbar",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, isScrolled && classes.scrolled),
    ref: navBarRef
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 2
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/"
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.logo, isScrolled && classes.logoScrolled),
    src: _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_22___default.a
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 9
  }, __jsx("ul", {
    className: classes.Menu
  }, __jsx("li", {
    className: router.pathname == "/" ? "active" : ""
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/"
  }, __jsx("a", null, "Home"))), __jsx("li", {
    className: router.asPath == "/products?type=buy" ? "active" : ""
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/products?type=buy"
  }, "Buy")), __jsx("li", {
    className: router.asPath == "/products?type=rental" ? "active" : ""
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/products?type=rental"
  }, "Rent")), __jsx("li", {
    className: router.pathname == "/events" ? "active" : ""
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/events"
  }, "Events")), __jsx("li", {
    className: router.pathname == "/buy-request" ? "active" : ""
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/buy-request"
  }, "Requests")), __jsx("li", {
    className: router.pathname == "/post" ? "active" : ""
  }, __jsx("a", null, __jsx("span", {
    onClick: handleListProduct
  }, "Sell"))), __jsx("li", {
    className: router.pathname == "/post/event" ? "active" : ""
  }, __jsx("a", null, __jsx("span", {
    onClick: handleListEvent
  }, "Add Event"))), __jsx("li", {
    className: router.pathname == "/feedback" ? "active" : ""
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/feedback"
  }, "Feedback")), __jsx("li", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    ref: anchorRef,
    "aria-controls": open ? "More" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle
  }, "More"), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_15___default.a, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, ({
    TransitionProps,
    placement
  }) => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_13___default.a, _extends({}, TransitionProps, {
    style: {
      transformOrigin: placement === "bottom" ? "center top" : "center bottom"
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default.a, null, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_12___default.a, {
    onClickAway: handleToggleClose
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17___default.a, {
    autoFocusItem: open,
    id: "menu-list-grow",
    onKeyDown: handleListKeyDown
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/about"
  }, "About")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/privacy-policy"
  }, "Privacy Policy")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/terms-and-conditions"
  }, "Terms & Conditions")))))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 1
  }, __jsx("ul", {
    className: classes.MenuRight
  }, __jsx("li", null, __jsx(_chat_components_ChatIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx("li", null, __jsx(_components_Login_Register__WEBPACK_IMPORTED_MODULE_19__["default"], {
    modalOpen: authModal
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Layout/Header/Desktop/styles.js":
/*!*********************************************!*\
  !*** ./src/Layout/Header/Desktop/styles.js ***!
  \*********************************************/
/*! exports provided: commonStyles, mobileStyles, TabStyles, desktopStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyles", function() { return commonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileStyles", function() { return mobileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStyles", function() { return TabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopStyles", function() { return desktopStyles; });
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

/***/ }),

/***/ "./src/Layout/Header/Mobile/index.js":
/*!*******************************************!*\
  !*** ./src/Layout/Header/Mobile/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_LabelImportant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/LabelImportant */ "@material-ui/icons/LabelImportant");
/* harmony import */ var _material_ui_icons_LabelImportant__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LabelImportant__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/AccountBox */ "@material-ui/icons/AccountBox");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/HomeRounded */ "@material-ui/icons/HomeRounded");
/* harmony import */ var _material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/EventNoteRounded */ "@material-ui/icons/EventNoteRounded");
/* harmony import */ var _material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/LocalMallRounded */ "@material-ui/icons/LocalMallRounded");
/* harmony import */ var _material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/LiveTvRounded */ "@material-ui/icons/LiveTvRounded");
/* harmony import */ var _material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LiveTvRounded__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/FormatListBulleted */ "@material-ui/icons/FormatListBulleted");
/* harmony import */ var _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_NavigateNextRounded__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/NavigateNextRounded */ "@material-ui/icons/NavigateNextRounded");
/* harmony import */ var _material_ui_icons_NavigateNextRounded__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNextRounded__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/Feedback */ "@material-ui/icons/Feedback");
/* harmony import */ var _material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_More__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/More */ "@material-ui/icons/More");
/* harmony import */ var _material_ui_icons_More__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../public/static/images/logo.png */ "./src/public/static/images/logo.png");
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./styles */ "./src/Layout/Header/Mobile/styles.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/icons/Create */ "@material-ui/icons/Create");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var _chat_components_ChatIcon__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../chat/components/ChatIcon */ "./src/chat/components/ChatIcon.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














































const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => _objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_38__["commonStyles"]));
function SearchAppBar() {
  const classes = useStyles();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_40__["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_40__["useSelector"])(state => state.auth_user.user);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_41__["useRouter"])();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_40__["useDispatch"])();
  const {
    0: timeout,
    1: settimeout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: searchValue,
    1: setsearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: openMenu,
    1: setOpenMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openAMenu,
    1: setOpenAMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

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

  const [opensearch, setopensearch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

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
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_42__["unauthenticated"])());
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
    return __jsx("div", {
      className: classes.searchBar
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "submit",
      className: classes.iconButton,
      "aria-label": "search",
      onClick: handleSeachClick
    }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, null)), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.input,
      placeholder: "Search",
      onChange: handleSearch,
      inputProps: {
        "aria-label": "search"
      },
      value: searchValue
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.closeButton,
      onClick: handleSearchClose
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_31___default.a, null)));
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

  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_36___default.a, {
    onClickAway: handleClickAway
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    position: "fixed",
    className: classes.AppbarBg
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, null)), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    open: open,
    className: classes.sideBar
  }, __jsx("div", {
    className: classes.drawerHeader
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleDrawerClose
  }, __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_11___default.a, null))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/",
    className: router.pathname == "/" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_21___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Home"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/products?type=buy",
    className: router.asPath == "/products?type=buy" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_23___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Buy"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/products?type=rental",
    className: router.asPath == "/products?type=rental" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_LocalMallRounded__WEBPACK_IMPORTED_MODULE_23___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Rent"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/events",
    className: router.pathname == "/events" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_EventNoteRounded__WEBPACK_IMPORTED_MODULE_22___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Event"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a // href={!accessToken ? "/?signup=open" : "/post"}
    ,
    onClick: handleListProduct,
    className: router.pathname == "/post" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_25___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Sell"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/buy-request",
    className: router.pathname == "/buy-request" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_25___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Requests"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a // href={!accessToken ? "/?signup=open" : "/post/event"}
    ,
    onClick: handleListEvent,
    className: router.pathname == "/post/event" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_25___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Add Events"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/feedback",
    className: router.pathname == "/feedback" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Feedback"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    onClick: toggleSubmenu
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_29___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "More"
  }), openMenu ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_34___default.a, null) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_35___default.a, null)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_32___default.a, {
    in: openMenu,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "div",
    disablePadding: true
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a, {
    href: "/about"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "About"
  }))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a, {
    href: "/privacy-policy"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Privacy Policy"
  }))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a, {
    href: "/terms-and-conditions"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_28___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Terms & Conditions"
  }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), accessToken && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    onClick: toggleASubmenu
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_20___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Account"
  }), openAMenu ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_34___default.a, null) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_35___default.a, null)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_32___default.a, {
    in: openAMenu,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "div",
    disablePadding: true
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile",
    className: router.pathname == "/profile" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "View Profile"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile/edit",
    className: router.pathname == "/profile/edit" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Edit Profile"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile",
    className: router.pathname == "/profile" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Published Adds"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile/events",
    className: router.pathname == "/profile/events" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Published Events"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile/requests",
    className: router.pathname == "/profile/requests" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Published Requests"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile/favourite-events",
    className: router.pathname == "/profile/favourite-events" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Favourite Events"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/profile/favourite-products",
    className: router.pathname == "/profile/favourite-products" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Favourite products"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a,
    href: "/post/request",
    className: router.pathname == "/post/request" ? "active" : ""
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Add Product Request"
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    button: true,
    onClick: logout
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_26___default.a, null)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
    primary: "Logout"
  }))))))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_44___default.a, {
    href: "/"
  }, __jsx("img", {
    className: classes.logo,
    src: _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_33___default.a
  })), __jsx("div", {
    className: classes.menuIcons
  }, __jsx(_chat_components_ChatIcon__WEBPACK_IMPORTED_MODULE_43__["default"], null))))));
}

/***/ }),

/***/ "./src/Layout/Header/Mobile/styles.js":
/*!********************************************!*\
  !*** ./src/Layout/Header/Mobile/styles.js ***!
  \********************************************/
/*! exports provided: commonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyles", function() { return commonStyles; });
const commonStyles = {
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

/***/ }),

/***/ "./src/Layout/Header/index.js":
/*!************************************!*\
  !*** ./src/Layout/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Desktop */ "./src/Layout/Header/Desktop/index.js");
/* harmony import */ var _Mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mobile */ "./src/Layout/Header/Mobile/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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

function Header() {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme => theme.breakpoints.up('md'));
  const HeaderComponent = matches ? __jsx(_Desktop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalOpen: handleClickOpen
  }) : __jsx(_Mobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, HeaderComponent, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default.a, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    className: classes.modal
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "form-dialog-title"
  }, "SignUp"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default.a, null, "To subscribe to this website, please enter your email address here. We will send updates occasionally."), __jsx("div", {
    className: classes.form
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    autoFocus: true,
    margin: "dense",
    id: "fname",
    label: "First Name",
    type: "text",
    fullWidth: true
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    autoFocus: true,
    margin: "dense",
    id: "lname",
    label: "Last Name",
    type: "text",
    fullWidth: true
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    autoFocus: true,
    margin: "dense",
    id: "email",
    label: "Email Address",
    type: "email",
    fullWidth: true
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    autoFocus: true,
    margin: "dense",
    id: "phone",
    label: "Phone No",
    type: "text",
    fullWidth: true
  }), __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "university",
    options: CollegeNames,
    getOptionLabel: option => option.title,
    renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({}, params, {
      label: "College",
      fullWidth: true
    }))
  }))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClose,
    color: "primary"
  }, "SignUp"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Layout/Header/utils/useNavbar.js":
/*!**********************************************!*\
  !*** ./src/Layout/Header/utils/useNavbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useNavbar() {
  const {
    0: isScrolled,
    1: setIsScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const navBarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleScroll = e => {
    const offset = e.srcElement.scrollingElement.scrollTop;

    if (navBarRef.current) {
      setIsScrolled(offset > navBarRef.current.clientHeight);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/* harmony default export */ __webpack_exports__["default"] = (useNavbar);

/***/ }),

/***/ "./src/Layout/index.js":
/*!*****************************!*\
  !*** ./src/Layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Layout/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/Layout/Footer/index.js");
/* harmony import */ var _Footer_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer/BottomNavigation */ "./src/Layout/Footer/BottomNavigation.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/Layout/styles.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_6__["commonStyles"]), {}, {
  [theme.breakpoints.up("md")]: _styles__WEBPACK_IMPORTED_MODULE_6__["desktopStyles"],
  // [theme.breakpoints.down("xl")]: TabStyles,
  [theme.breakpoints.down("sm")]: _styles__WEBPACK_IMPORTED_MODULE_6__["mobileStyles"]
}));
function Layout(props) {
  const classes = useStyles();
  const [isLoaded, setisLoaded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default()(theme => theme.breakpoints.down("sm"));
  const BottomNav = matches ? __jsx(_Footer_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const path = router.pathname;
  return __jsx("div", {
    className: classes.Wrapper
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
    className: classes.Main
  }, props.children), props.nofooter == true ? "" : __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), path.includes("chat") ? null : BottomNav, isLoaded && __jsx("div", {
    className: classes.loader
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5___default.a, null)));
}

/***/ }),

/***/ "./src/Layout/styles.js":
/*!******************************!*\
  !*** ./src/Layout/styles.js ***!
  \******************************/
/*! exports provided: commonStyles, mobileStyles, TabStyles, desktopStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyles", function() { return commonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileStyles", function() { return mobileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStyles", function() { return TabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopStyles", function() { return desktopStyles; });
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
const commonStyles = {
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
const mobileStyles = {
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
const TabStyles = {
  Main: {
    paddingTop: '56px'
  }
};
const desktopStyles = {
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

/***/ "./src/apis/chat-api.js":
/*!******************************!*\
  !*** ./src/apis/chat-api.js ***!
  \******************************/
/*! exports provided: generalPostRequest, generalGetRequest, fetchDialogs, fetchMessages, createMessage, unreadMsg, readAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalPostRequest", function() { return generalPostRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalGetRequest", function() { return generalGetRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDialogs", function() { return fetchDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMessages", function() { return fetchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMessage", function() { return createMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unreadMsg", function() { return unreadMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAll", function() { return readAll; });
const API_URL = "http://fanto.in/api";
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

/***/ "./src/chat/components/ChatIcon.js":
/*!*****************************************!*\
  !*** ./src/chat/components/ChatIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authService */ "./src/chat/services/authService.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_chat_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../apis/chat-api */ "./src/apis/chat-api.js");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! connectycube */ "connectycube");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(connectycube__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../appConfig */ "./appConfig.js");
/* harmony import */ var _redux_actions_chatUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/chatUser */ "./src/redux/actions/chatUser.js");
/* harmony import */ var _redux_actions_chatConnected__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/chatConnected */ "./src/redux/actions/chatConnected.js");
/* harmony import */ var _redux_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/services/chat-service */ "./src/redux/services/chat-service.js");
/* harmony import */ var _redux_actions_selectedDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/selectedDialog */ "./src/redux/actions/selectedDialog.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import ChatService from "../../redux/services/chat-service";











const ChatMessageIcon = () => {
  const authUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.auth_user.user);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.auth_user.accessToken);
  const chatUnreadCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.chatUnreadCount);
  const {
    0: count,
    1: setcount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (authUser && authUser.connectycube_user) {
      dispatch(Object(_redux_actions_chatUser__WEBPACK_IMPORTED_MODULE_10__["chatUnauthenticated"])());
      dispatch(Object(_redux_actions_chatConnected__WEBPACK_IMPORTED_MODULE_11__["chatReset"])());
      dispatch(Object(_redux_actions_selectedDialog__WEBPACK_IMPORTED_MODULE_13__["unSelectedDialog"])());
      let init = _services_authService__WEBPACK_IMPORTED_MODULE_4__["default"].init();

      if (init && authUser.connectycube_user) {
        console.log();
        _services_authService__WEBPACK_IMPORTED_MODULE_4__["default"].login({
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
          connectycube__WEBPACK_IMPORTED_MODULE_8___default.a.createSession().then(retry).catch(error => {});
        }
      }
    };
    let init = await connectycube__WEBPACK_IMPORTED_MODULE_8___default.a.init(..._appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].connectyCubeConfig, CONFIG);
    console.log(init);

    if (init) {
      connectycube__WEBPACK_IMPORTED_MODULE_8___default.a.login(CREDENTIALS).then(session => {
        console.log('session', session);
      }).catch(error => {});
    }
  };

  const setUpListeners = () => {
    connectycube__WEBPACK_IMPORTED_MODULE_8___default.a.chat.onMessageListener = onMessage;
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
    message = connectycube__WEBPACK_IMPORTED_MODULE_8___default.a.chat.send(opponentId, message);
    console.log('message', message);
  };

  function onMessage(userId, message) {
    console.log('[ConnectyCube.chat.onMessageListener] callback:', userId, message);
  }

  const handleChatClick = () => {
    if (!accessToken) {
      window.location.replace('/?signup=open');
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/chat');
    }
  };

  return __jsx("div", null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "inherit",
    onClick: handleChatClick
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
    badgeContent: chatUnreadCount,
    color: "secondary"
  }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_1___default.a, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatMessageIcon);

/***/ }),

/***/ "./src/chat/helpers/file.js":
/*!**********************************!*\
  !*** ./src/chat/helpers/file.js ***!
  \**********************************/
/*! exports provided: getImageLinkFromUID, preparationAttachment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageLinkFromUID", function() { return getImageLinkFromUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preparationAttachment", function() { return preparationAttachment; });
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connectycube */ "connectycube");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connectycube__WEBPACK_IMPORTED_MODULE_0__);

function getImageLinkFromUID(uid) {
  if (!uid) {
    return null;
  }

  return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.storage.privateUrl(uid);
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

/***/ }),

/***/ "./src/chat/models/user.js":
/*!*********************************!*\
  !*** ./src/chat/models/user.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _helpers_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/file */ "./src/chat/helpers/file.js");

class User {
  constructor(user) {
    this.id = user.id;
    this.avatar = User.getAvatarUrl(user.avatar);
    this.login = user.login;
    this.custom_data = user.custom_data ? user.custom_data : '';
    this.full_name = user.full_name || user.login;
    this.phone = user.phone;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
    this.last_request_at = user.last_request_at;
  }

  static getAvatarUrl(avatarUID) {
    return Object(_helpers_file__WEBPACK_IMPORTED_MODULE_0__["getImageLinkFromUID"])(avatarUID);
  }

}

/***/ }),

/***/ "./src/chat/services/authService.js":
/*!******************************************!*\
  !*** ./src/chat/services/authService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connectycube */ "connectycube");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connectycube__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../appConfig */ "./appConfig.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/chat/models/user.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.js");
/* harmony import */ var _helpers_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/file */ "./src/chat/helpers/file.js");
/* harmony import */ var _redux_actions_chatUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/chatUser */ "./src/redux/actions/chatUser.js");
/* harmony import */ var _redux_actions_chatConnected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/chatConnected */ "./src/redux/actions/chatConnected.js");
/* harmony import */ var _redux_actions_chatUnread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/chatUnread */ "./src/redux/actions/chatUnread.js");
/* harmony import */ var _redux_actions_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/messages */ "./src/redux/actions/messages.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { setCurrentUser } from '../actions/currentUser'





 // import { LogOut } from '../reducers/index'

class AuthService {
  async init() {
    const res = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.init(..._appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].connectyCubeConfig);
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
    const session = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.createSession(params);
    const currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_2__["default"](session.user);
    session.user.avatar = Object(_helpers_file__WEBPACK_IMPORTED_MODULE_4__["getImageLinkFromUID"])(session.user.avatar); // work around

    session.user.full_name = session.user.login;
    _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_chatUser__WEBPACK_IMPORTED_MODULE_5__["chatAuthenticated"])(session));
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
    const isConnected = connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.isConnected;

    if (isConnected) {
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_chatConnected__WEBPACK_IMPORTED_MODULE_6__["chatConnection"])());
      this.getUnread();
    } else {
      await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.connect({
        userId,
        password
      }).then((error, contactlist) => {
        this.setUpListeners();
        _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_chatConnected__WEBPACK_IMPORTED_MODULE_6__["chatConnection"])());
        this.getUnread();
      });
    }
  }

  async getUnread() {
    await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.message.unreadCount().then(result => {
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_chatUnread__WEBPACK_IMPORTED_MODULE_7__["chatUnreadCount"])(result.total));
      console.log('unread', reasult);
    }).catch(error => {});
  }

  async setUpListeners() {
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.onMessageListener = this.onMessage.bind(this);
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
    _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_messages__WEBPACK_IMPORTED_MODULE_8__["pushMessage"])(message));
  }

  setUserSession(userSession) {
    return localStorage.setItem(AuthService.CURRENT_USER_SESSION_KEY, JSON.stringify(userSession));
  }

  getUserSession() {
    return localStorage.getItem(AuthService.CURRENT_USER_SESSION_KEY);
  } // async logout() {
  //     localStorage.clear()
  //     await ConnectyCube.logout()
  //     store.dispatch(LogOut())
  // }


}

_defineProperty(AuthService, "CURRENT_USER_SESSION_KEY", "CURRENT_USER_SESSION_KEY");

_defineProperty(AuthService, "DEVICE_TOKEN_KEY", "DEVICE_TOKEN_KEY");

const authService = new AuthService();
Object.freeze(authService);
/* harmony default export */ __webpack_exports__["default"] = (authService);

/***/ }),

/***/ "./src/components/Login_Register/AuthForm.js":
/*!***************************************************!*\
  !*** ./src/components/Login_Register/AuthForm.js ***!
  \***************************************************/
/*! exports provided: AuthForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthForm", function() { return AuthForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_global_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apis_auth_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../apis/auth-api */ "./src/apis/auth-api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
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
    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_9__["login"])(data).then(response => {
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
    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_9__["simpleSignup"])(data).then(response => {
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
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_11__["authenticated"])(user, accessToken, favEvents, favProducts));

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

    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_9__["googleSignup"])(data).then(response => {
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
    Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_5__["searchUniversities"])(value).then(response => {
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

/***/ "./src/components/Login_Register/index.js":
/*!************************************************!*\
  !*** ./src/components/Login_Register/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthForm */ "./src/components/Login_Register/AuthForm.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/AccountBox */ "@material-ui/icons/AccountBox");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../public/static/images/logo.png */ "./src/public/static/images/logo.png");
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_static_images_circleCenter_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../public/static/images/circleCenter.svg */ "./src/public/static/images/circleCenter.svg");
/* harmony import */ var _public_static_images_circleCenter_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_circleCenter_svg__WEBPACK_IMPORTED_MODULE_21__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
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
      background: _public_static_images_circleCenter_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const {
    0: openAMenu,
    1: setopenAMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openBMenu,
    1: setopenBMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openCMenu,
    1: setopenCMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openDMenu,
    1: setopenDMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  const toggleModal = () => {
    if (location.search.indexOf("signup=open") != -1) {
      setOpen(true);
    } else if (modalOpen != open) {
      setOpen(modalOpen);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    toggleModal();
  }, [modalOpen]);
  router.events.on('routeChangeComplete', toggleModal);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.auth_user.user); // console.log("User", user);

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
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_18__["unauthenticated"])());
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
  return __jsx("div", null, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: openModal,
    "aria-controls": "auth-menu",
    "aria-haspopup": "true",
    className: user.first_name ? classes.orange : classes.transparent
  }, user.first_name ? user.first_name.charAt(0) : __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_1___default.a, null)), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    button: true,
    onClick: toggleASubmenu
  }, "Profile", openAMenu ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default.a, null) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, null)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14___default.a, {
    in: openAMenu,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoProfile
  }, "View Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoResetPassword
  }, "Reset Password")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    button: true,
    onClick: toggleBSubmenu
  }, "Ads", openBMenu ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default.a, null) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, null)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14___default.a, {
    in: openBMenu,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoProfile
  }, "Published Ads"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoFavProducts
  }, "Favourite Products")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    button: true,
    onClick: toggleCSubmenu
  }, "Events", openCMenu ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default.a, null) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, null)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14___default.a, {
    in: openCMenu,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoEvents
  }, "Published Events"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoFavEvents
  }, "Favourite Events")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    button: true,
    onClick: toggleDSubmenu
  }, "Requests", openDMenu ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default.a, null) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, null)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14___default.a, {
    in: openDMenu,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoRequeste
  }, "Published Requests"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: gotoAddRequest
  }, "Add Product Request")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: logout
  }, "Logout")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: open,
    onClose: closeModal,
    "aria-labelledby": "form-dialog-title",
    className: classes.modal
  }, __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    indicatorColor: "primary",
    textColor: "primary"
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, {
    label: "Login"
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, {
    label: "SignUp"
  })), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default.a, {
    index: value,
    onChangeIndex: handleChangeIndex
  }, __jsx("div", {
    className: classes.Login
  }, __jsx("div", {
    className: classes.Img
  }, __jsx("img", {
    src: _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    width: "100"
  })), __jsx(_AuthForm__WEBPACK_IMPORTED_MODULE_7__["AuthForm"], {
    type: "login"
  })), __jsx("div", null, __jsx(_AuthForm__WEBPACK_IMPORTED_MODULE_7__["AuthForm"], {
    type: "signup"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login_Register);

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

/***/ "./src/pages/feedback.js":
/*!*******************************!*\
  !*** ./src/pages/feedback.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feedback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../src/Layout */ "./src/Layout/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_apis_global_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../src/apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    marginBottom: "1rem",
    boxShadow: "none"
  },
  cardBody: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "1rem",
    flexShrink: "0"
  },
  reviewContent: {
    flex: "1"
  },
  heading: {
    fontSize: '3rem',
    textAlign: 'center',
    margin: '1rem 0',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2.5rem'
    }
  }
}));
function Feedback() {
  const classes = useStyles();
  const {
    0: list_reviews,
    1: setlist_reviews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_src_apis_global_api__WEBPACK_IMPORTED_MODULE_5__["getAllFeedback"])().then(data => {
      setlist_reviews(data);
    });
  }, []);
  return __jsx(_src_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("section", {
    className: classes.section
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h3",
    className: classes.heading
  }, "Feedback"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    color: "primary",
    style: {
      textAlign: 'center',
      marginBottom: '1rem'
    },
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/post/feedback');
    }
  }, "Add Your Feedback"), list_reviews && list_reviews.length > 0 && list_reviews.map(item => __jsx("div", {
    className: classes.TestimonialSlide,
    key: item.id
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.card
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    className: classes.cardBody
  }, __jsx("img", {
    src: item.link,
    alt: "",
    className: classes.image
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: classes.reviewContent
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.name
  }, item.name), __jsx(react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default.a, {
    rating: item.rating,
    starRatedColor: "#FFC107",
    starHoverColor: "#FFC107",
    starDimension: "21px",
    numberOfStars: 5,
    name: item.id
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: classes.review
  }, item.text)))))), list_reviews && list_reviews.length <= 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    style: {
      textAlign: 'center',
      margin: 20
    }
  }, "No feedbacks for now"))));
}

/***/ }),

/***/ "./src/public/static/images/circleCenter.svg":
/*!***************************************************!*\
  !*** ./src/public/static/images/circleCenter.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MzciIGhlaWdodD0iNTM3IiB2aWV3Qm94PSIwIDAgNTM3IDUzNyI+DQogIDxnIGlkPSJFbGxpcHNlXzVfY29weSIgZGF0YS1uYW1lPSJFbGxpcHNlIDUgY29weSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS10aGVtZSkiIHN0cm9rZS13aWR0aD0iMTAwIiBvcGFjaXR5PSIwLjA1MSI+DQogICAgPGNpcmNsZSBjeD0iMjY4LjUiIGN5PSIyNjguNSIgcj0iMjY4LjUiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxjaXJjbGUgY3g9IjI2OC41IiBjeT0iMjY4LjUiIHI9IjIxOC41IiBmaWxsPSJub25lIi8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/public/static/images/logo.png":
/*!*******************************************!*\
  !*** ./src/public/static/images/logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-2d14be18041804137f6c17bffbaa1a7e.png";

/***/ }),

/***/ "./src/public/static/images/logoft.png":
/*!*********************************************!*\
  !*** ./src/public/static/images/logoft.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoft-983ca0ac3a7371f7fe1d808b1287e411.png";

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

/***/ "./src/redux/actionTypes/users.js":
/*!****************************************!*\
  !*** ./src/redux/actionTypes/users.js ***!
  \****************************************/
/*! exports provided: FETCH_USERS, ADD_USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USERS", function() { return ADD_USERS; });
const FETCH_USERS = "FETCH_USERS";
const ADD_USERS = "ADD_USERS";

/***/ }),

/***/ "./src/redux/actions/auth.js":
/*!***********************************!*\
  !*** ./src/redux/actions/auth.js ***!
  \***********************************/
/*! exports provided: authenticated, updateUserDeviceToken, unauthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticated", function() { return authenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserDeviceToken", function() { return updateUserDeviceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unauthenticated", function() { return unauthenticated; });
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/auth */ "./src/redux/actionTypes/auth.js");

const authenticated = (user, accessToken, userFavEvents, userFavProducts) => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"],
  payload: {
    user,
    accessToken,
    userFavEvents,
    userFavProducts
  }
});
const updateUserDeviceToken = token => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DEVICE_TOKEN"],
  payload: {
    token
  }
});
const unauthenticated = () => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
});

/***/ }),

/***/ "./src/redux/actions/authModal.js":
/*!****************************************!*\
  !*** ./src/redux/actions/authModal.js ***!
  \****************************************/
/*! exports provided: showModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony import */ var _actionTypes_authModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/authModal */ "./src/redux/actionTypes/authModal.js");

const showModal = () => ({
  type: _actionTypes_authModal__WEBPACK_IMPORTED_MODULE_0__["SHOW_MODAL"]
});
const closeModal = () => ({
  type: _actionTypes_authModal__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MODAL"]
});

/***/ }),

/***/ "./src/redux/actions/chatConnected.js":
/*!********************************************!*\
  !*** ./src/redux/actions/chatConnected.js ***!
  \********************************************/
/*! exports provided: chatConnection, chatReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatConnection", function() { return chatConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatReset", function() { return chatReset; });
/* harmony import */ var _actionTypes_chatConnected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/chatConnected */ "./src/redux/actionTypes/chatConnected.js");

const chatConnection = () => ({
  type: _actionTypes_chatConnected__WEBPACK_IMPORTED_MODULE_0__["CHAT_CONNECTED"] // payload: { currentUser, accessToken },

});
const chatReset = () => ({
  type: _actionTypes_chatConnected__WEBPACK_IMPORTED_MODULE_0__["CHAT_RESET"] // payload: { currentUser, accessToken },

}); // export const chatUnauthenticated = () => ({
//     type: CHAT_UNAUTHENTICATED,
// });

/***/ }),

/***/ "./src/redux/actions/chatUnread.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/chatUnread.js ***!
  \*****************************************/
/*! exports provided: chatUnreadCount, chatUnreadReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatUnreadCount", function() { return chatUnreadCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatUnreadReset", function() { return chatUnreadReset; });
/* harmony import */ var _actionTypes_chatUnread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/chatUnread */ "./src/redux/actionTypes/chatUnread.js");

const chatUnreadCount = count => ({
  type: _actionTypes_chatUnread__WEBPACK_IMPORTED_MODULE_0__["CHAT_UNREAD"],
  count: count
});
const chatUnreadReset = () => ({
  type: _actionTypes_chatUnread__WEBPACK_IMPORTED_MODULE_0__["CHAT_UNREAD_RESET"]
});

/***/ }),

/***/ "./src/redux/actions/chatUser.js":
/*!***************************************!*\
  !*** ./src/redux/actions/chatUser.js ***!
  \***************************************/
/*! exports provided: chatAuthenticated, chatUpdateUser, chatUnauthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatAuthenticated", function() { return chatAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatUpdateUser", function() { return chatUpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatUnauthenticated", function() { return chatUnauthenticated; });
/* harmony import */ var _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/chatUser */ "./src/redux/actionTypes/chatUser.js");

const chatAuthenticated = (currentUser, accessToken) => ({
  type: _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__["CHAT_AUTHENTICATED"],
  payload: {
    currentUser,
    accessToken
  }
});
const chatUpdateUser = (currentUser, accessToken) => ({
  type: _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__["CHAT_UPDATE_USER"],
  payload: {
    currentUser,
    accessToken
  }
});
const chatUnauthenticated = () => ({
  type: _actionTypes_chatUser__WEBPACK_IMPORTED_MODULE_0__["CHAT_UNAUTHENTICATED"]
});

/***/ }),

/***/ "./src/redux/actions/dialogs.js":
/*!**************************************!*\
  !*** ./src/redux/actions/dialogs.js ***!
  \**************************************/
/*! exports provided: fetchDialogs, updateDialog, addNewDialog, sortDialogs, deleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDialogs", function() { return fetchDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDialog", function() { return updateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewDialog", function() { return addNewDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDialogs", function() { return sortDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDialog", function() { return deleteDialog; });
/* harmony import */ var _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/dialogs */ "./src/redux/actionTypes/dialogs.js");

const fetchDialogs = dialogs => ({
  type: _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["FETCH_DIALOGS"],
  dialogs: dialogs
});
const updateDialog = dialog => ({
  type: _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DIALOG"],
  dialog
});
const addNewDialog = dialog => ({
  type: _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["ADD_DIALOG"],
  dialog: dialog
});
const sortDialogs = (message, count) => ({
  type: _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["SORT_DIALOGS"],
  message: message,
  count: count
});
const deleteDialog = dialogId => ({
  type: _actionTypes_dialogs__WEBPACK_IMPORTED_MODULE_0__["DELETE_DIALOG"],
  dialogId
});

/***/ }),

/***/ "./src/redux/actions/messages.js":
/*!***************************************!*\
  !*** ./src/redux/actions/messages.js ***!
  \***************************************/
/*! exports provided: setMessages, lazyFetchMessages, updateMessages, pushMessage, deleteAllMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessages", function() { return setMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyFetchMessages", function() { return lazyFetchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMessages", function() { return updateMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushMessage", function() { return pushMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllMessages", function() { return deleteAllMessages; });
/* harmony import */ var _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/messages */ "./src/redux/actionTypes/messages.js");

const setMessages = (msgs, dialog) => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["SET_MESSAGES"],
  msgs,
  dialog
});
const lazyFetchMessages = (dialogId, history) => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["LAZY_FETCH_MESSAGES"],
  dialogId,
  history
});
const updateMessages = (dialogId, msgId, msg) => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MESSAGES"],
  dialogId,
  msgId,
  msg
});
const pushMessage = msg => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["PUSH_MESSAGE"],
  msg
});
const deleteAllMessages = () => ({
  type: _actionTypes_messages__WEBPACK_IMPORTED_MODULE_0__["DELETE_ALL_MESSAGES"]
});

/***/ }),

/***/ "./src/redux/actions/selectedDialog.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/selectedDialog.js ***!
  \*********************************************/
/*! exports provided: selectedDialog, unSelectedDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedDialog", function() { return selectedDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unSelectedDialog", function() { return unSelectedDialog; });
/* harmony import */ var _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/selectedDialog */ "./src/redux/actionTypes/selectedDialog.js");

const selectedDialog = dialog => ({
  type: _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__["SELECTED_DIALOG"],
  dialog
});
const unSelectedDialog = dialog => ({
  type: _actionTypes_selectedDialog__WEBPACK_IMPORTED_MODULE_0__["UN_SELECTED_DIALOG"],
  dialog
});

/***/ }),

/***/ "./src/redux/actions/users.js":
/*!************************************!*\
  !*** ./src/redux/actions/users.js ***!
  \************************************/
/*! exports provided: fetchUsers, addUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUsers", function() { return addUsers; });
/* harmony import */ var _actionTypes_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/users */ "./src/redux/actionTypes/users.js");

const fetchUsers = users => ({
  type: _actionTypes_users__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"],
  users
});
const addUsers = users => ({
  type: _actionTypes_users__WEBPACK_IMPORTED_MODULE_0__["ADD_USERS"],
  users
});

/***/ }),

/***/ "./src/redux/helpers/constants.js":
/*!****************************************!*\
  !*** ./src/redux/helpers/constants.js ***!
  \****************************************/
/*! exports provided: BTN_TYPE, DIALOG_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_TYPE", function() { return BTN_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_TYPE", function() { return DIALOG_TYPE; });
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

/***/ }),

/***/ "./src/redux/helpers/file.js":
/*!***********************************!*\
  !*** ./src/redux/helpers/file.js ***!
  \***********************************/
/*! exports provided: getImageLinkFromUID, preparationAttachment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageLinkFromUID", function() { return getImageLinkFromUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preparationAttachment", function() { return preparationAttachment; });
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connectycube */ "connectycube");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connectycube__WEBPACK_IMPORTED_MODULE_0__);

function getImageLinkFromUID(uid) {
  if (!uid) {
    return null;
  }

  return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.storage.privateUrl(uid);
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

/***/ }),

/***/ "./src/redux/models/dialogs.js":
/*!*************************************!*\
  !*** ./src/redux/models/dialogs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dialog; });
/* harmony import */ var _helpers_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/file */ "./src/redux/helpers/file.js");

class Dialog {
  constructor(dialog) {
    this.id = dialog._id || dialog.id;
    this.type = dialog.type;
    this.xmpp_room_jid = dialog.xmpp_room_jid;
    this.xmpp_type = dialog.type === 3 ? 'chat' : dialog.type ? 'groupchat' : '';
    this.name = dialog.name;
    this.photo = Dialog.getAvatarUrl(dialog.photo);
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
    return Object(_helpers_file__WEBPACK_IMPORTED_MODULE_0__["getImageLinkFromUID"])(avatarUID);
  }

}

/***/ }),

/***/ "./src/redux/models/message.js":
/*!*************************************!*\
  !*** ./src/redux/models/message.js ***!
  \*************************************/
/*! exports provided: STATUS_PENDING, STATUS_SENT, STATUS_DELIVERED, STATUS_READ, GROUP_CHAT_ALERT_TYPE, Message, FakeMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_PENDING", function() { return STATUS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_SENT", function() { return STATUS_SENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_DELIVERED", function() { return STATUS_DELIVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_READ", function() { return STATUS_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_CHAT_ALERT_TYPE", function() { return GROUP_CHAT_ALERT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMessage", function() { return FakeMessage; });
/* harmony import */ var _helpers_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/file */ "./src/redux/helpers/file.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
class Message {
  constructor(msg = defaultMessage, currentUser) {
    this.id = msg.id || msg._id;
    this.body = msg.body || msg.message;
    this.group_chat_alert_type = msg.group_chat_alert_type || null;
    this.dialog_id = msg.chat_dialog_id || msg.extension && msg.extension.dialog_id;
    this.date_sent = msg.date_sent || msg.extension && msg.extension.date_sent || Math.floor(Date.now() / 1000);
    this.send_state = Message.getSendState(msg, currentUser);
    this.attachment = Message.getAttachment(msg);
    this.sender_id = msg.sender_id || msg.extension && msg.extension.sender_id;
    this.sender = msg.sender_id;
  }

  static getAttachment(msg) {
    var _msg$extension;

    if (msg.attachments && msg.attachments.length > 0) {
      const attachments = _objectSpread({}, msg.attachments[0]);

      const parseLink = Object(_helpers_file__WEBPACK_IMPORTED_MODULE_0__["getImageLinkFromUID"])(msg.attachments[0].uid);
      attachments.url = parseLink;
      return [attachments];
    } else if (msg !== null && msg !== void 0 && (_msg$extension = msg.extension) !== null && _msg$extension !== void 0 && _msg$extension.attachments && msg.extension.attachments.length > 0) {
      const attachments = _objectSpread({}, msg.extension.attachments[0]);

      const parseLink = Object(_helpers_file__WEBPACK_IMPORTED_MODULE_0__["getImageLinkFromUID"])(msg.extension.attachments[0].uid);
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

/***/ }),

/***/ "./src/redux/models/user.js":
/*!**********************************!*\
  !*** ./src/redux/models/user.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _helpers_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/file */ "./src/redux/helpers/file.js");

class User {
  constructor(user) {
    this.id = user.id;
    this.avatar = User.getAvatarUrl(user.avatar);
    this.login = user.login;
    this.custom_data = user.custom_data ? user.custom_data : '';
    this.full_name = user.full_name || user.login;
    this.phone = user.phone;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
    this.last_request_at = user.last_request_at;
  }

  static getAvatarUrl(avatarUID) {
    return Object(_helpers_file__WEBPACK_IMPORTED_MODULE_0__["getImageLinkFromUID"])(avatarUID);
  }

}

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

/***/ "./src/redux/services/chat-service.js":
/*!********************************************!*\
  !*** ./src/redux/services/chat-service.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connectycube */ "connectycube");
/* harmony import */ var connectycube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connectycube__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/dialogs */ "./src/redux/models/dialogs.js");
/* harmony import */ var _actions_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/dialogs */ "./src/redux/actions/dialogs.js");
/* harmony import */ var _actions_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/messages */ "./src/redux/actions/messages.js");
/* harmony import */ var _helpers_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/file */ "./src/redux/helpers/file.js");
/* harmony import */ var _actions_selectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/selectedDialog */ "./src/redux/actions/selectedDialog.js");
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/users */ "./src/redux/actions/users.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./src/redux/store.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/message */ "./src/redux/models/message.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/user */ "./src/redux/models/user.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/constants */ "./src/redux/helpers/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class ChatService {
  constructor() {
    _defineProperty(this, "getMoreMessages", async dialog => {
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
      const moreHistoryFromServer = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.message.list(filter);
      const messages = [];
      moreHistoryFromServer.items.forEach(elem => {
        if (!elem.group_chat_alert_type) {
          messages.push(new _models_message__WEBPACK_IMPORTED_MODULE_8__["Message"](elem, this.currentUser.id));
        }
      });
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["updateDialog"])(updateObj));
      const amountMessages = _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["lazyFetchMessages"])(dialog.id, messages));
      return amountMessages.history.length;
    });

    _defineProperty(this, "sendMsgChatAlertOnCreate", async (dialog, message, alertType) => {
      const date = Math.floor(Date.now() / 1000);
      const recipient_id = dialog.type === _helpers_constants__WEBPACK_IMPORTED_MODULE_10__["DIALOG_TYPE"].PRIVATE ? dialog.occupants_ids.find(elem => elem != this.currentUser.id) : dialog.xmpp_room_jid;
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
      connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.send(recipient_id, msg);
    });

    _defineProperty(this, "updateDialogsUnreadMessagesCount", dialog => {
      const updateObj = Object.assign(dialog, {
        unread_messages_count: 0
      });
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["updateDialog"])(updateObj));
      return true;
    });
  }

  setUpListeners() {
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.onMessageListener = this.onMessageListener.bind(this);
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.onSentMessageCallback = this.onSentMessageListener.bind(this);
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.onDeliveredStatusListener = this.onDeliveredStatus.bind(this);
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.onReadStatusListener = this.onReadStatus.bind(this);
  }

  async fetchDialogsFromServer() {
    if (_store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().dialogs.length !== 0) {
      return _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().dialogs;
    }

    console.log('in fetch');
    const dialogsFromServer = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.dialog.list(); // const currentUserId = this.currentUser
    // let privatChatIdsUser = []

    const dialogs = dialogsFromServer.items.map(elem => {
      // if (elem.type === DIALOG_TYPE.PRIVATE) {
      //   elem.occupants_ids.forEach(elem => {
      //     elem !== currentUserId.id && privatChatIdsUser.push(elem)
      //   })
      // }
      return new _models_dialogs__WEBPACK_IMPORTED_MODULE_1__["default"](elem);
    }); // if (privatChatIdsUser.length !== 0) {
    //   const usersInfo = await this.getUsersList(privatChatIdsUser)
    //   store.dispatch(fetchUsers(usersInfo))
    // }

    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["fetchDialogs"])(dialogs));
    return _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().dialogs;
  }

  async getMessages(dialog) {
    const isAlredyUpdate = this.getMessagesByDialogId(dialog.id);
    let amountMessages = null; // If the first entry into the chat

    if (!dialog.isAlreadyMessageFetch || dialog.unread_messages_count > 0 && !dialog.isAlreadyMessageFetch) {
      const historyFromServer = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.message.list({
        chat_dialog_id: dialog.id,
        sort_desc: 'date_sent'
      });
      const messages = [];
      historyFromServer.items.forEach(elem => {
        if (!elem.group_chat_alert_type) {
          messages.push(new _models_message__WEBPACK_IMPORTED_MODULE_8__["Message"](elem, this.currentUser.id));
        }
      });
      const newObj = Object.assign(dialog, {
        isAlreadyMessageFetch: true
      });
      this.updateDialogsUnreadMessagesCount(newObj);
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["setMessages"])(dialog.id, messages));
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
    const recipient_id = dialog.type === _helpers_constants__WEBPACK_IMPORTED_MODULE_10__["DIALOG_TYPE"].PRIVATE ? dialog.occupants_ids.find(elem => elem != user.id) : dialog.xmpp_room_jid;
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

    const message = new _models_message__WEBPACK_IMPORTED_MODULE_8__["FakeMessage"](msg);
    const newObjFreez = Object.freeze(message);
    await _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["pushMessage"])(newObjFreez, dialog.id));
    scrollToBottom();
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.send(recipient_id, msg);
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["sortDialogs"])(newObjFreez));
  }

  sendChatAlertOnCreate(dialog) {
    const message = 'Group is created';
    this.sendMsgChatAlertOnCreate(dialog, message, _models_message__WEBPACK_IMPORTED_MODULE_8__["GROUP_CHAT_ALERT_TYPE"].CREATE);
  }

  async sendMessageAsAttachment(dialog, recipient_id, msg, attachments, scrollToBottom) {
    //create fake data for render img
    const url = URL.createObjectURL(attachments.file);
    msg.extension.attachments = [{
      url
    }];
    msg.body = 'Image attachment';
    const message = new _models_message__WEBPACK_IMPORTED_MODULE_8__["FakeMessage"](msg);
    await _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["pushMessage"])(message, dialog.id));
    scrollToBottom(); // create real data for attachment

    const response = await this.uploadPhoto(attachments);
    const newObjAttach = Object(_helpers_file__WEBPACK_IMPORTED_MODULE_4__["preparationAttachment"])(response);
    msg.extension.attachments = [newObjAttach];
    await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.send(recipient_id, msg);
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["sortDialogs"])(message));
    return;
  }

  async createPrivateDialog(userId) {
    const dialogs = _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().dialogs;
    let dialog = null;
    dialogs.forEach(elem => {
      if (elem.type === _helpers_constants__WEBPACK_IMPORTED_MODULE_10__["DIALOG_TYPE"].PRIVATE && elem.occupants_ids.find(elem => elem === userId)) {
        dialog = elem;
      }
    });

    if (!dialog) {
      const params = {
        type: _helpers_constants__WEBPACK_IMPORTED_MODULE_10__["DIALOG_TYPE"].PRIVATE,
        occupants_ids: userId
      };
      const response = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.dialog.create(params);
      dialog = new _models_dialogs__WEBPACK_IMPORTED_MODULE_1__["default"](response);

      if (this.getUserFromReduxById(userId)) {
        _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["addNewDialog"])(dialog));
        return dialog;
      } else {
        const usersInfo = await this.getUserFromServerById(userId);
        usersInfo.user = new _models_user__WEBPACK_IMPORTED_MODULE_9__["default"](usersInfo.user);
        _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_users__WEBPACK_IMPORTED_MODULE_6__["fetchUsers"])([usersInfo.user]));
        _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["addNewDialog"])(dialog));
        return dialog;
      }
    } // If the user is already in the Redux


    if (this.getUserFromReduxById(userId)) {
      return dialog;
    } else {
      const usersInfo = await this.getUserFromServerById(userId);
      usersInfo.user = new _models_user__WEBPACK_IMPORTED_MODULE_9__["default"](usersInfo.user);
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_users__WEBPACK_IMPORTED_MODULE_6__["fetchUsers"])([usersInfo.user]));
      return dialog;
    }
  }

  async createPublicDialog(occupants_ids, groupName, img) {
    const currentUser = this.currentUser;
    occupants_ids.unshift(currentUser.id);
    const params = {
      type: _helpers_constants__WEBPACK_IMPORTED_MODULE_10__["DIALOG_TYPE"].GROUP,
      occupants_ids,
      name: groupName
    };
    const image = img ? await this.uploadPhoto(img) : null;

    if (image) {
      params.photo = image.uid;
    }

    const dialog = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.dialog.create(params);
    const newDialog = new _models_dialogs__WEBPACK_IMPORTED_MODULE_1__["default"](dialog);
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["addNewDialog"])(newDialog));
    return newDialog;
  }

  async readAllMessages(dialogId) {
    return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.message.update(null, {
      chat_dialog_id: dialogId,
      read: 1
    });
  }

  async readMessage(messageId, dialogId) {
    this.onReadStatus(messageId, dialogId);
    return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.message.update(null, {
      chat_dialog_id: dialogId,
      read: 1
    });
  }

  async onMessageListener(senderId, msg) {
    var _this$getSelectedDial;

    const message = new _models_message__WEBPACK_IMPORTED_MODULE_8__["Message"](msg);
    const user = this.currentUser;
    const dialog = (_this$getSelectedDial = this.getSelectedDialog()) === null || _this$getSelectedDial === void 0 ? void 0 : _this$getSelectedDial.id; // If group chat alet

    if (msg.extension.group_chat_alert_type) {
      const dialogsFromServer = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.dialog.list();
      const dialogs = dialogsFromServer.items.map(elem => {
        return new _models_dialogs__WEBPACK_IMPORTED_MODULE_1__["default"](elem);
      });
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["fetchDialogs"])(dialogs));
      return;
    }

    if (senderId !== user.id) {
      if (dialog === message.dialog_id) {
        _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["sortDialogs"])(message));
        this.readMessage(message.id, message.dialog_id);
        this.sendReadStatus(msg.extension.message_id, msg.extension.sender_id, msg.dialog_id);
      } else {
        this.sendDeliveredStatus(msg.extension.message_id, msg.extension.sender_id, msg.dialog_id);
        _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_dialogs__WEBPACK_IMPORTED_MODULE_2__["sortDialogs"])(message, true));
      }

      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["pushMessage"])(message, message.dialog_id));
    }
  } // ConnectyCube listeners


  onSentMessageListener(failedMessage, msg) {
    console.warn('onSentMessageListener');

    if (failedMessage || msg.extension.group_chat_alert_type) {
      return;
    }

    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["updateMessages"])(msg.extension.dialog_id, msg.id, {
      send_state: _models_message__WEBPACK_IMPORTED_MODULE_8__["STATUS_SENT"]
    }));
  }

  onDeliveredStatus(messageId, dialogId, userId) {
    console.warn('onDeliveredStatus', messageId);
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["updateMessages"])(dialogId, messageId, {
      send_state: _models_message__WEBPACK_IMPORTED_MODULE_8__["STATUS_DELIVERED"]
    }));
  }

  onReadStatus(messageId, dialogId, userId) {
    console.warn('onReadStatus', messageId);
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_messages__WEBPACK_IMPORTED_MODULE_3__["updateMessages"])(dialogId, messageId, {
      send_state: _models_message__WEBPACK_IMPORTED_MODULE_8__["STATUS_READ"]
    }));
  }

  sendReadStatus(messageId, userId, dialogId) {
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.sendReadStatus({
      messageId,
      userId,
      dialogId
    });
  }

  sendDeliveredStatus(messageId, userId, dialogId) {
    connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.sendDeliveredStatus({
      messageId,
      userId,
      dialogId
    });
  }

  async getUsersList(ids) {
    const usersList = await connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.users.get({
      per_page: 100,
      filter: {
        field: 'id',
        param: 'in',
        value: ids
      }
    });
    return usersList.items.map(elem => {
      return new _models_user__WEBPACK_IMPORTED_MODULE_9__["default"](elem.user);
    });
  }

  async getUserFromServerById(id) {
    return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.users.get(id);
  }

  setSelectDialog(dialog) {
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_actions_selectedDialog__WEBPACK_IMPORTED_MODULE_5__["selectedDialog"])(dialog));
  }

  getSelectedDialog() {
    return _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().selectedDialog;
  }

  getDialogById(dialogId) {
    return _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().dialogs.find(elem => elem.id === dialogId);
  }

  getMessagesByDialogId(dialogId) {
    const result = _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().messages;
    return result[dialogId];
  }

  async uploadPhoto(file) {
    return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.storage.createAndUpload(file);
  }

  get currentUser() {
    return _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().currentUser.user;
  }

  getUserFromReduxById(id) {
    return _store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().users[id];
  }

  get messageUniqueId() {
    return connectycube__WEBPACK_IMPORTED_MODULE_0___default.a.chat.helpers.getBsonObjectId();
  }

}

const chatService = new ChatService();
Object.freeze(chatService);
/* harmony default export */ __webpack_exports__["default"] = (chatService);

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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/BottomNavigation":
/*!*****************************************************!*\
  !*** external "@material-ui/core/BottomNavigation" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "@material-ui/core/BottomNavigationAction":
/*!***********************************************************!*\
  !*** external "@material-ui/core/BottomNavigationAction" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/AccountBox":
/*!************************************************!*\
  !*** external "@material-ui/icons/AccountBox" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Create":
/*!********************************************!*\
  !*** external "@material-ui/icons/Create" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Create");

/***/ }),

/***/ "@material-ui/icons/EventNoteRounded":
/*!******************************************************!*\
  !*** external "@material-ui/icons/EventNoteRounded" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EventNoteRounded");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/Feedback":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Feedback" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Feedback");

/***/ }),

/***/ "@material-ui/icons/FormatListBulleted":
/*!********************************************************!*\
  !*** external "@material-ui/icons/FormatListBulleted" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatListBulleted");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/HomeRounded":
/*!*************************************************!*\
  !*** external "@material-ui/icons/HomeRounded" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HomeRounded");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "@material-ui/icons/LabelImportant":
/*!****************************************************!*\
  !*** external "@material-ui/icons/LabelImportant" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LabelImportant");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "@material-ui/icons/LiveTvRounded":
/*!***************************************************!*\
  !*** external "@material-ui/icons/LiveTvRounded" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LiveTvRounded");

/***/ }),

/***/ "@material-ui/icons/LocalMallRounded":
/*!******************************************************!*\
  !*** external "@material-ui/icons/LocalMallRounded" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalMallRounded");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/More":
/*!******************************************!*\
  !*** external "@material-ui/icons/More" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/More");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/NavigateNextRounded":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/NavigateNextRounded" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNextRounded");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/NotificationsNone":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/NotificationsNone" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NotificationsNone");

/***/ }),

/***/ "@material-ui/icons/Phone":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Phone" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/icons/YouTube":
/*!*********************************************!*\
  !*** external "@material-ui/icons/YouTube" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/YouTube");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "connectycube":
/*!*******************************!*\
  !*** external "connectycube" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connectycube");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-star-ratings":
/*!*************************************!*\
  !*** external "react-star-ratings" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-star-ratings");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0Zvb3Rlci9Cb3R0b21OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRm9vdGVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hlYWRlci9EZXNrdG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL0Rlc2t0b3Avc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL01vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hlYWRlci9Nb2JpbGUvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL3V0aWxzL3VzZU5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2F1dGgtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2NoYXQtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2dsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvY29tcG9uZW50cy9DaGF0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9oZWxwZXJzL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvc2VydmljZXMvYXV0aFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXIvQXV0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2NpcmNsZUNlbnRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc3RhdGljL2ltYWdlcy9sb2dvZnQucG5nIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9QYWdlVmlzaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvYXV0aE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0VW5yZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL3NlbGVjdGVkRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NoYXRVbnJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2hhdFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zZWxlY3RlZERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2hlbHBlcnMvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvbW9kZWxzL2RpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21vZGVscy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvUGFnZVZpc2l0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hhdENvbm5lY3RlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hhdFVucmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hhdFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2RpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVkdWNlci1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2VsZWN0ZWREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NlcnZpY2VzL2NoYXQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25BY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DcmVhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXZlbnROb3RlUm91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZlZWRiYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYWJlbEltcG9ydGFudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXZlVHZSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFJvdW5kZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0Um91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNOb25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eU9mZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdHljdWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9jYWxmb3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1sb2dpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGFyLXJhdGluZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbImRhdGEiLCJwcm9jZXNzIiwiZW52IiwiQVBQX0lEIiwiQVVUSF9LRVkiLCJBVVRIX1NFQ1JFVCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwiYm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwibWluV2lkdGgiLCJwYWRkaW5nIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIlNpbXBsZUJvdHRvbU5hdmlnYXRpb24iLCJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwiYXV0aF91c2VyIiwidXNlciIsImhhbmRsZUFkZFByb2R1Y3QiLCJpZCIsImxvY2F0aW9uIiwibmV3VmFsdWUiLCJzZXRJdGVtIiwidGhlbWUiLCJjb21tb25TdHlsZXMiLCJicmVha3BvaW50cyIsInVwIiwiZGVza3RvcFN0eWxlcyIsImJldHdlZW4iLCJUYWJTdHlsZXMiLCJkb3duIiwibW9iaWxlU3R5bGVzIiwiRm9vdGVyIiwibG9nbyIsImxvZ29mdCIsIlNvY2lhbE1lbnUiLCJjb21wSW5mbyIsIkZvb3Rlck1lbnUiLCJjb250YWN0RGV0YWlscyIsIkNvcHlyaWdodCIsIm1vbWVudCIsInllYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImZpbGwiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsImRvd25sb2FkQXBwIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJkb3dubG9hZFRpdGxlIiwibWFyZ2luTGVmdCIsImRvd25sb2FkQ29udGVudCIsImFsaWduSXRlbXMiLCJkb3dubG9hZExpbmtzIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJib3JkZXIiLCJzcGFjaW5nIiwic2VhcmNoSWNvbiIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiSGVhZGVyIiwibW9kYWxPcGVuIiwiaXNTY3JvbGxlZCIsIm5hdkJhclJlZiIsInVzZU5hdmJhciIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuIiwic2V0T3BlbiIsImF1dGhNb2RhbCIsInNldGF1dGhNb2RhbCIsInRpbWVvdXQiLCJzZXR0aW1lb3V0IiwiYW5jaG9yUmVmIiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImdvdG9fY29tbWluZ1Nvb24iLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVRvZ2dsZUNsb3NlIiwiY3VycmVudCIsImNvbnRhaW5zIiwiaGFuZGxlVG9nZ2xlIiwicHJldk9wZW4iLCJoYW5kbGVMaXN0S2V5RG93biIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJoYW5kbGVMaXN0UHJvZHVjdCIsImhhbmRsZUxpc3RFdmVudCIsImhhbmRsZVNlYXJjaCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGFzc05hbWVzIiwic2Nyb2xsZWQiLCJsb2dvU2Nyb2xsZWQiLCJNZW51IiwidW5kZWZpbmVkIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwiTWVudVJpZ2h0IiwiU2VhcmNoQXBwQmFyIiwic2VhcmNoVmFsdWUiLCJzZXRzZWFyY2hWYWx1ZSIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJvcGVuQU1lbnUiLCJzZXRPcGVuQU1lbnUiLCJ0b2dnbGVTdWJtZW51IiwidG9nZ2xlQVN1Ym1lbnUiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJvcGVuc2VhcmNoIiwic2V0b3BlbnNlYXJjaCIsImhhbmRsZVNlYXJjaE9wZW4iLCJoYW5kbGVTZWFyY2hDbG9zZSIsImhhbmRsZUNsaWNrQXdheSIsImxvZ291dCIsInVuYXV0aGVudGljYXRlZCIsImxvZyIsImhhbmRsZVNlYWNoQ2xpY2siLCJTZWFyY2hBcHBCYXJJY29uIiwic2VhcmNoQmFyIiwiaWNvbkJ1dHRvbiIsImlucHV0IiwiY2xvc2VCdXR0b24iLCJBcHBiYXJCZyIsIm1lbnVCdXR0b24iLCJzaWRlQmFyIiwiZHJhd2VySGVhZGVyIiwibWVudUljb25zIiwidGl0bGUiLCJmdWxsTGlzdCIsInNlYXJjaGJ0biIsImFsaWduU2VsZiIsImZvcm0iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZEdhcCIsIm1vZGFsIiwiaGFuZGxlQ2xpY2tPcGVuIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJIZWFkZXJDb21wb25lbnQiLCJDb2xsZWdlTmFtZXMiLCJvcHRpb24iLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwib2Zmc2V0Iiwic3JjRWxlbWVudCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkxheW91dCIsImlzTG9hZGVkIiwic2V0aXNMb2FkZWQiLCJCb3R0b21OYXYiLCJXcmFwcGVyIiwiTWFpbiIsIm5vZm9vdGVyIiwiaW5jbHVkZXMiLCJsb2FkZXIiLCJjdXJzb3IiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJtYXhXaWR0aCIsIkFQSV9VUkwiLCJzaWdudXAiLCJnZW5lcmFsUG9zdFJlcXVlc3QiLCJzaW1wbGVTaWdudXAiLCJnb29nbGVTaWdudXAiLCJsb2dpbiIsImVkaXRQcm9maWxlIiwidXBkYXRlUHJvZmlsZUltZyIsIkFkZFByb2R1Y3QiLCJVcGRhdGVQcm9kdWN0IiwiRGVsZXRlUHJvZHVjdCIsIkRlbGV0ZVJlcXVlc3QiLCJBZGRFdmVudCIsIlVwZGF0ZUV2ZW50IiwiRGVsZXRlRXZlbnQiLCJGYXZvdXJpdGUiLCJHZXRVc2VyRmF2b3VyaXRlIiwidXNlcl9pZCIsInR5cGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZURhdGEiLCJjYXRjaCIsIndhcm4iLCJHZXRVc2VyUmVxdWVzdHMiLCJBZGRQcm9kdWN0UmVxdWVzdCIsIlVwZGF0ZVByb2R1Y3RSZXF1ZXN0IiwiUmVzZXRQYXNzd29yZEFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJ1cGRhdGVEZXZpY2VUb2tlbiIsInRva2VuIiwidmVyaWZ5RW1haWwiLCJnZW5lcmFsR2V0UmVxdWVzdCIsImZldGNoRGlhbG9ncyIsInEiLCJmZXRjaE1lc3NhZ2VzIiwiZGlhbG9nX2lkIiwiY3JlYXRlTWVzc2FnZSIsInVucmVhZE1zZyIsInJlYWRBbGwiLCJzZWFyY2hVbml2ZXJzaXRpZXMiLCJzZWFyY2hDYXRlZ29yaWVzIiwic2VhcmNoQ2l0aWVzIiwiZ2V0UHJvZHVjdHMiLCJnZXRQcm9kdWN0IiwiZ2V0U2VsbGVyIiwiZ2V0Q2F0ZWdvcmllcyIsImdldEV2ZW50Q2F0ZWdvcmllcyIsImdldENpdGllcyIsImdldEV2ZW50cyIsInNob3dhbGwiLCJnZXRFdmVudCIsImdldFJlcXVlc3QiLCJzZWFyY2hFdmVudENhdGVnb3JpZXMiLCJDcmVhdGVPcmRlciIsIkNyZWF0ZUNvbnRhY3QiLCJDcmVhdGVWaXNpdCIsImdldEFsbEZlZWRiYWNrIiwiZ2V0QWxsQnV5UmVxdWVzdHMiLCJGb3Jnb3RQYXNzd29yZEFQSSIsIlVwZGF0ZVBhc3N3b3JkQVBJIiwic2VuZENoYXRVcGRhdGUiLCJzZW5kVmVyaWZ5RW1haWwiLCJ1cGRhdGVPcGVuU3RhdHVzIiwic2VuZEZlZWRiYWNrTWVzc2FnZSIsIkNoYXRNZXNzYWdlSWNvbiIsImF1dGhVc2VyIiwiY2hhdFVucmVhZENvdW50IiwiY291bnQiLCJzZXRjb3VudCIsImNvbm5lY3R5Y3ViZV91c2VyIiwiY2hhdFVuYXV0aGVudGljYXRlZCIsImNoYXRSZXNldCIsInVuU2VsZWN0ZWREaWFsb2ciLCJpbml0IiwiQXV0aFNlcnZpY2UiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29ubmVjdENoYXQiLCJDUkVERU5USUFMUyIsIkNPTkZJRyIsInNlc3Npb25FeHBpcmVkIiwiaGFuZGxlUmVzcG9uc2UiLCJyZXRyeSIsIkNvbm5lY3R5Q3ViZSIsImNyZWF0ZVNlc3Npb24iLCJhcHBDb25maWciLCJjb25uZWN0eUN1YmVDb25maWciLCJzZXNzaW9uIiwic2V0VXBMaXN0ZW5lcnMiLCJjaGF0Iiwib25NZXNzYWdlTGlzdGVuZXIiLCJvbk1lc3NhZ2UiLCJvcHBvbmVudElkIiwiZXh0ZW5zaW9uIiwic2F2ZV90b19oaXN0b3J5IiwibWFya2FibGUiLCJzZW5kIiwidXNlcklkIiwiaGFuZGxlQ2hhdENsaWNrIiwiZ2V0SW1hZ2VMaW5rRnJvbVVJRCIsInVpZCIsInN0b3JhZ2UiLCJwcml2YXRlVXJsIiwicHJlcGFyYXRpb25BdHRhY2htZW50IiwiZmlsZSIsInNpemUiLCJjb250ZW50X3R5cGUiLCJVc2VyIiwiYXZhdGFyIiwiZ2V0QXZhdGFyVXJsIiwiY3VzdG9tX2RhdGEiLCJmdWxsX25hbWUiLCJwaG9uZSIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkX2F0IiwibGFzdF9yZXF1ZXN0X2F0IiwiYXZhdGFyVUlEIiwiY3VycmVudFVzZXIiLCJzdG9yZSIsImNoYXRBdXRoZW50aWNhdGVkIiwiY3VzdG9tU2Vzc2lvbiIsImFzc2lnbiIsInNldFVzZXJTZXNzaW9uIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY2hhdENvbm5lY3Rpb24iLCJnZXRVbnJlYWQiLCJjb250YWN0bGlzdCIsInVucmVhZENvdW50IiwidG90YWwiLCJyZWFzdWx0IiwiYmluZCIsInBhcnNlIiwiY29ubmVjdHljdWJlX2lkIiwiZGV2aWNlX3Rva2VuIiwibm90aWYiLCJwdXNoTWVzc2FnZSIsInVzZXJTZXNzaW9uIiwiQ1VSUkVOVF9VU0VSX1NFU1NJT05fS0VZIiwiZ2V0VXNlclNlc3Npb24iLCJhdXRoU2VydmljZSIsImZyZWV6ZSIsImJ1dHRvbiIsIkF1dGhGb3JtIiwiZmlyc3RuYW1lIiwic2V0Zmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzZXRsYXN0bmFtZSIsInNldGVtYWlsIiwidW5pdmVyc2l0eSIsInNldHVuaXZlcnNpdHkiLCJzZXRwYXNzd29yZCIsInNob3dwYXNzd29yZCIsInNldHNob3dwYXNzd29yZCIsImNvbmZpcm1fcGFzc3dvcmQiLCJzZXRjb25maXJtX3Bhc3N3b3JkIiwic2hvd2NvbmZpcm1fcGFzc3dvcmQiLCJzZXRzaG93Y29uZmlybV9wYXNzd29yZCIsInBob25lX25vIiwic2V0cGhvbmVfbm8iLCJlcnJzIiwic2V0ZXJycyIsInVuaXZlcnNpdGllcyIsInNldHVuaXZlcnNpdGllcyIsImJyYW5jaCIsInNldGJyYW5jaCIsImxvYWRpbmciLCJzZXRsb2FkaW5nIiwiYnRubG9hZGluZyIsInNldGJ0bmxvYWRpbmciLCJiYWNrZHJvcCIsInNldGJhY2tkcm9wIiwiZm9ybWVycnMiLCJzZXRmb3JtZXJycyIsInNob3dSZWRpcmVjdCIsInNldHNob3dSZWRpcmVjdCIsImhhbmRsZVN1Ym1pdCIsInN1Ym1pdFNpZ25VcCIsInN1Ym1pdExvZ2luIiwibXNnIiwiYXBpX3Rva2VuIiwiZmF2RXZlbnRzIiwiZmF2UHJvZHVjdHMiLCJzZXRMb2dpbiIsImF1dGhlbnRpY2F0ZWQiLCJpc19jb21wbGV0ZSIsInJlc3BvbnNlR29vZ2xlU3VjY2VzcyIsInByb2ZpbGVPYmoiLCJnb29nbGVfaWQiLCJnb29nbGVJZCIsInJlc3BvbnNlR29vZ2xlRmFpbHVyZSIsImJhY2tkcm9wQ2xvc2UiLCJ2YWxpZGF0ZWZvcm0iLCJub19zYW1lIiwibGVuZ3RoIiwicHdkX2xlbmd0aCIsImhhc19lcnJvciIsInVwZGF0ZWZvcm1EYXRhIiwiZXZhbCIsImhhbmRsZVVuaVNlYXJjaCIsImdvdG9Gb3Jnb3RQYXNzd29yZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjb250YWluZXIiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJtYXJnaW5Ub3AiLCJMb2dpbiIsInRyYW5zZm9ybSIsImNpcmNsZWNlbnRlciIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIkltZyIsIm9yYW5nZSIsInRyYW5zcGFyZW50IiwiZGVza3RvcE1lbnUiLCJMb2dpbl9SZWdpc3RlciIsImlzTW9iaWxlIiwic2V0b3BlbkFNZW51Iiwib3BlbkJNZW51Iiwic2V0b3BlbkJNZW51Iiwib3BlbkNNZW51Iiwic2V0b3BlbkNNZW51Iiwib3BlbkRNZW51Iiwic2V0b3BlbkRNZW51IiwidG9nZ2xlTW9kYWwiLCJpbmRleE9mIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlSW5kZXgiLCJvcGVuTW9kYWwiLCJnb3RvUHJvZmlsZSIsImNsb3NlTW9kYWwiLCJnb3RvUHJvZmlsZUVkaXQiLCJnb3RvRXZlbnRzIiwiZ290b1JlcXVlc3RlIiwiZ290b0ZhdkV2ZW50cyIsImdvdG9GYXZQcm9kdWN0cyIsImdvdG9BZGRSZXF1ZXN0IiwiZ290b1Jlc2V0UGFzc3dvcmQiLCJ0b2dnbGVCU3VibWVudSIsInRvZ2dsZUNTdWJtZW51IiwidG9nZ2xlRFN1Ym1lbnUiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwiQm9vbGVhbiIsIlNFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZIiwiU0VMRUNURURfRklMVEVSX1JFU0VUIiwiUEFHRV9QUk9EVUNUUyIsIlZBTElEX1JPVVRFUyIsImNhcmQiLCJjYXJkQm9keSIsImltYWdlIiwiZmxleFNocmluayIsInJldmlld0NvbnRlbnQiLCJmbGV4IiwiaGVhZGluZyIsIkZlZWRiYWNrIiwibGlzdF9yZXZpZXdzIiwic2V0bGlzdF9yZXZpZXdzIiwic2VjdGlvbiIsIlRlc3RpbW9uaWFsU2xpZGUiLCJsaW5rIiwicmF0aW5nIiwicmV2aWV3IiwiQUREX1ZJU0lURUQiLCJSRU1PVkVfVklTSVRFRCIsIkZFVENIX1ZJU0lURUQiLCJBVVRIRU5USUNBVEVEIiwiVVBEQVRFX0RFVklDRV9UT0tFTiIsIlVOQVVUSEVOVElDQVRFRCIsIlNIT1dfTU9EQUwiLCJDTE9TRV9NT0RBTCIsIkNIQVRfQ09OTkVDVEVEIiwiQ0hBVF9SRVNFVCIsIkNIQVRfVU5SRUFEIiwiQ0hBVF9VTlJFQURfUkVTRVQiLCJDSEFUX0FVVEhFTlRJQ0FURUQiLCJDSEFUX1VOQVVUSEVOVElDQVRFRCIsIkNIQVRfVVBEQVRFX1VTRVIiLCJGRVRDSF9ESUFMT0dTIiwiQUREX0RJQUxPRyIsIlNPUlRfRElBTE9HUyIsIlVQREFURV9ESUFMT0ciLCJERUxFVEVfRElBTE9HIiwiU0VUX01FU1NBR0VTIiwiUFVTSF9NRVNTQUdFIiwiREVMRVRFX0FMTF9NRVNTQUdFUyIsIkxBWllfRkVUQ0hfTUVTU0FHRVMiLCJVUERBVEVfTUVTU0FHRVMiLCJTRUxFQ1RFRF9ESUFMT0ciLCJVTl9TRUxFQ1RFRF9ESUFMT0ciLCJGRVRDSF9VU0VSUyIsIkFERF9VU0VSUyIsInVzZXJGYXZFdmVudHMiLCJ1c2VyRmF2UHJvZHVjdHMiLCJwYXlsb2FkIiwidXBkYXRlVXNlckRldmljZVRva2VuIiwic2hvd01vZGFsIiwiY2hhdFVucmVhZFJlc2V0IiwiY2hhdFVwZGF0ZVVzZXIiLCJkaWFsb2dzIiwidXBkYXRlRGlhbG9nIiwiZGlhbG9nIiwiYWRkTmV3RGlhbG9nIiwic29ydERpYWxvZ3MiLCJkZWxldGVEaWFsb2ciLCJkaWFsb2dJZCIsInNldE1lc3NhZ2VzIiwibXNncyIsImxhenlGZXRjaE1lc3NhZ2VzIiwiaGlzdG9yeSIsInVwZGF0ZU1lc3NhZ2VzIiwibXNnSWQiLCJkZWxldGVBbGxNZXNzYWdlcyIsInNlbGVjdGVkRGlhbG9nIiwiZmV0Y2hVc2VycyIsInVzZXJzIiwiYWRkVXNlcnMiLCJCVE5fVFlQRSIsIkRJQUxPRyIsIkNPTlRBQ1RTIiwiQ1JFQVRFX0dST1VQIiwiRElBTE9HX1RZUEUiLCJQUklWQVRFIiwiR1JPVVAiLCJCUk9BRENBU1QiLCJQVUJMSUNfQ0hBTk5FTCIsIkRpYWxvZyIsIl9pZCIsInhtcHBfcm9vbV9qaWQiLCJ4bXBwX3R5cGUiLCJwaG90byIsImRlc2NyaXB0aW9uIiwicm9vbV9qaWQiLCJhZG1pbnNfaWRzIiwib2NjdXBhbnRzX2lkcyIsInVwZGF0ZWRfZGF0ZSIsIkRhdGUiLCJub3ciLCJsYXN0X21lc3NhZ2VfZGF0ZV9zZW50IiwibGFzdF9tZXNzYWdlIiwibGFzdF9tZXNzYWdlX2lkIiwibGFzdF9tZXNzYWdlX3VzZXJfaWQiLCJ1bnJlYWRfbWVzc2FnZXNfY291bnQiLCJ1bnJlYWRfbWVzc2FnZXNfaWRzIiwicGlubmVkX21lc3NhZ2VzX2lkcyIsIlNUQVRVU19QRU5ESU5HIiwiU1RBVFVTX1NFTlQiLCJTVEFUVVNfREVMSVZFUkVEIiwiU1RBVFVTX1JFQUQiLCJHUk9VUF9DSEFUX0FMRVJUX1RZUEUiLCJDUkVBVEUiLCJkZWZhdWx0TWVzc2FnZSIsImRhdGVfc2VudCIsIk1hdGgiLCJmbG9vciIsImF0dGFjaG1lbnRzIiwic2VuZGVyX2lkIiwic2VuZGVyIiwiTWVzc2FnZSIsImdyb3VwX2NoYXRfYWxlcnRfdHlwZSIsImNoYXRfZGlhbG9nX2lkIiwic2VuZF9zdGF0ZSIsImdldFNlbmRTdGF0ZSIsImF0dGFjaG1lbnQiLCJnZXRBdHRhY2htZW50IiwicGFyc2VMaW5rIiwicmVhZF9pZHMiLCJmaW5kIiwiZGVsaXZlcmVkX2lkcyIsIkZha2VNZXNzYWdlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwiYXJyIiwiYXJyMiIsInBvcCIsInUiLCJsb2NhbGZvcmFnZSIsInJlbW92ZUl0ZW0iLCJzaG93Iiwic29ydGVkRGlhbG9nIiwiZmlsdGVyIiwiY29tYmluZVJlZHVjZXJzIiwiYXV0aF9tb2RhbCIsImNoYXRfdXNlciIsIm1lc3NhZ2VzIiwicGFnZVZpc2l0ZWQiLCJjaGF0Q29ubmVjdGVkIiwiaW5pdGlhbF9zdGF0ZSIsImNvbm5lY3R5X2RpYWxvZ19pZCIsInJlYWQiLCJ1cGRhdGUiLCJjb25jYXQiLCJ1c2VyRGF0YSIsImFwcF9pZCIsIk9ORVNJR05BTF9BUFBfSUQiLCJjb250ZW50cyIsImZpbHRlcnMiLCJBdXRob3JpemF0aW9uIiwiT05FU0lHTkFMX1JFU1RfS0VZIiwiYWxyZWFkeVVwZGF0ZWREaWFsb2ciLCJlbGVtIiwibmV3QXJyIiwicmV2ZXJzZSIsIm5ld09iaiIsInNvcnQiLCJpdGVtcyIsImludmVydGVkIiwiaXRlbUEiLCJpdGVtQiIsInVwZGF0ZVN0YXR1c01lc3NhZ2VzIiwibmV3TWVzc2FnZXMiLCJ1cGRhdGVTZW5kU3RhdHVzIiwibmV3T2JqVXNlcnMiLCJmb3JFYWNoIiwiQ2hhdFNlcnZpY2UiLCJjdXJyZW50TWVzc2FnZXMiLCJnZXRNZXNzYWdlc0J5RGlhbG9nSWQiLCJsYXN0TWVzc2FnZURhdGUiLCJ1cGRhdGVPYmoiLCJsYXN0X21lc3NhZ2VzX2Zvcl9mZXRjaCIsImx0Iiwic29ydF9kZXNjIiwibW9yZUhpc3RvcnlGcm9tU2VydmVyIiwibGlzdCIsImFtb3VudE1lc3NhZ2VzIiwiYWxlcnRUeXBlIiwiZGF0ZSIsInJlY2lwaWVudF9pZCIsIm1lc3NhZ2VFeHRlbnNpb25zIiwib25TZW50TWVzc2FnZUNhbGxiYWNrIiwib25TZW50TWVzc2FnZUxpc3RlbmVyIiwib25EZWxpdmVyZWRTdGF0dXNMaXN0ZW5lciIsIm9uRGVsaXZlcmVkU3RhdHVzIiwib25SZWFkU3RhdHVzTGlzdGVuZXIiLCJvblJlYWRTdGF0dXMiLCJmZXRjaERpYWxvZ3NGcm9tU2VydmVyIiwiZ2V0U3RhdGUiLCJkaWFsb2dzRnJvbVNlcnZlciIsImdldE1lc3NhZ2VzIiwiaXNBbHJlZHlVcGRhdGUiLCJpc0FscmVhZHlNZXNzYWdlRmV0Y2giLCJoaXN0b3J5RnJvbVNlcnZlciIsInVwZGF0ZURpYWxvZ3NVbnJlYWRNZXNzYWdlc0NvdW50IiwiZmlyc3RVbnJlYWRNc2ciLCJyZWFkQWxsTWVzc2FnZXMiLCJzZW5kUmVhZFN0YXR1cyIsInNlbmRNZXNzYWdlIiwibWVzc2FnZVRleHQiLCJzY3JvbGxUb0JvdHRvbSIsInRyaW0iLCJtZXNzYWdlVW5pcXVlSWQiLCJzZW5kTWVzc2FnZUFzQXR0YWNobWVudCIsIm5ld09iakZyZWV6Iiwic2VuZENoYXRBbGVydE9uQ3JlYXRlIiwic2VuZE1zZ0NoYXRBbGVydE9uQ3JlYXRlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXBsb2FkUGhvdG8iLCJuZXdPYmpBdHRhY2giLCJjcmVhdGVQcml2YXRlRGlhbG9nIiwiZ2V0VXNlckZyb21SZWR1eEJ5SWQiLCJ1c2Vyc0luZm8iLCJnZXRVc2VyRnJvbVNlcnZlckJ5SWQiLCJVc2VyTW9kZWwiLCJjcmVhdGVQdWJsaWNEaWFsb2ciLCJncm91cE5hbWUiLCJpbWciLCJ1bnNoaWZ0IiwibmV3RGlhbG9nIiwicmVhZE1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJzZW5kZXJJZCIsImdldFNlbGVjdGVkRGlhbG9nIiwibWVzc2FnZV9pZCIsInNlbmREZWxpdmVyZWRTdGF0dXMiLCJmYWlsZWRNZXNzYWdlIiwiZ2V0VXNlcnNMaXN0IiwiaWRzIiwidXNlcnNMaXN0IiwicGVyX3BhZ2UiLCJzZXRTZWxlY3REaWFsb2ciLCJnZXREaWFsb2dCeUlkIiwiY3JlYXRlQW5kVXBsb2FkIiwiaGVscGVycyIsImdldEJzb25PYmplY3RJZCIsImNoYXRTZXJ2aWNlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFH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Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9mZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2ZlZWRiYWNrLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJjb25zdCBkYXRhID0ge1xuXG4gIFwic2VuZGVySURcIjogXCJcIixcbiAgXCJjb25uZWN0eUN1YmVDb25maWdcIjogW1xuICAgIHtcbiAgICAgIFwiYXBwSWRcIjogcHJvY2Vzcy5lbnYuQVBQX0lELFxuICAgICAgXCJhdXRoS2V5XCI6IHByb2Nlc3MuZW52LkFVVEhfS0VZLFxuICAgICAgXCJhdXRoU2VjcmV0XCI6IHByb2Nlc3MuZW52LkFVVEhfU0VDUkVUXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNoYXRcIjoge1xuICAgICAgICBcInN0cmVhbU1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGVidWdcIjoge1xuICAgICAgICBcIm1vZGVcIjogMFxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuZXhwb3J0IGRlZmF1bHQgZGF0YVxuXG5cbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25BY3Rpb25cIjtcclxuaW1wb3J0IEhvbWVSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVSb3VuZGVkXCI7XHJcbmltcG9ydCBFdmVudE5vdGVSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V2ZW50Tm90ZVJvdW5kZWRcIjtcclxuaW1wb3J0IExvY2FsTWFsbFJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsUm91bmRlZFwiO1xyXG5pbXBvcnQgTGl2ZVR2Um91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXZlVHZSb3VuZGVkXCI7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgQXV0aEljb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXJcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0TGlzdEJ1bGxldGVkXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgekluZGV4OiAyLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZmRmZGZkXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IC0zcHggMjBweCByZ2JhKDAsMCwwLDAuMSlcIixcclxuICAgIFwiJiBidXR0b25cIjoge1xyXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiM3B4IDEwcHggM3B4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGFcIjoge1xyXG4gICAgICBjb2xvcjogXCIjOTA4ZThlXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICc1cHgnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNXB4J1xyXG4gICAgfSxcclxuICAgIFwiJiBhLmFjdGl2ZVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlQm90dG9tTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnMCcpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJib3RNZW51XCIpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLnVzZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIuaWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiLz9zaWdudXA9b3BlblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm90dG9tTmF2aWdhdGlvblxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm90TWVudVwiLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH19XHJcbiAgICAgIHNob3dMYWJlbHNcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICA+XHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXHJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICBsYWJlbD1cIkhvbWVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgaWNvbj17PEhvbWVSb3VuZGVkSWNvbiAvPn1cclxuICAgICAgLz5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgaHJlZj1cIi9wcm9kdWN0cz90eXBlPWJ1eVwiXHJcbiAgICAgICAgbGFiZWw9XCJCdXlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2R1Y3RzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICBpY29uPXs8TG9jYWxNYWxsUm91bmRlZEljb24gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXHJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgIGhyZWY9XCIvZXZlbnRzXCJcclxuICAgICAgICBsYWJlbD1cIkV2ZW50c1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvZXZlbnRzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICBpY29uPXs8RXZlbnROb3RlUm91bmRlZEljb24gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXHJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgIGhyZWY9XCIvYnV5LXJlcXVlc3RcIlxyXG4gICAgICAgIGxhYmVsPVwiUmVxdWVzdHNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2J1eS1yZXF1ZXN0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICBpY29uPXs8Rm9ybWF0TGlzdEJ1bGxldGVkSWNvbiAvPn1cclxuICAgICAgLz5cclxuICAgICAge2FjY2Vzc1Rva2VuICYmIChcclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgLy8gaHJlZj1cIi9wcm9maWxlXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRQcm9kdWN0fVxyXG4gICAgICAgIGxhYmVsPVwiTXkgYWRzXCJcclxuICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICBpY29uPXs8TGl2ZVR2Um91bmRlZEljb24gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshYWNjZXNzVG9rZW4gJiYgKFxyXG4gICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXHJcbiAgICAgICAgICBsYWJlbD1cIkxvZ2luXCJcclxuICAgICAgICAgIGljb249ezxBdXRoSWNvbiBpc01vYmlsZT17dHJ1ZX0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY29tbW9uU3R5bGVzLCBkZXNrdG9wU3R5bGVzLCBtb2JpbGVTdHlsZXMsIFRhYlN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmUnO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lJztcclxuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgbG9nb2Z0IGZyb20gJy4vLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvbG9nb2Z0LnBuZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAuLi5jb21tb25TdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXTogZGVza3RvcFN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2VlbigneHMnLCAnc20nKV06IFRhYlN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IG1vYmlsZVN0eWxlc1xyXG59KSlcclxuXHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICB7LyogRG93bmxvYWQgQXBwIFNlY3Rpb24gKi99XHJcblxyXG4gICAgICB7LyogPHNlY3Rpb25cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuc2VjdGlvbn0gJHtjbGFzc2VzLmRvd25sb2FkQXBwfWB9XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvc3RhdGljL2ltYWdlcy9kb3dubG9hZC5qcGcpXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs4fSBtZD17OH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZG93bmxvYWRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICAgICAgVFJZIE9VUiBBUFAgT04gWU9VUiBNT0JJTEUgUEhPTkVcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZG93bmxvYWRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkdFVCBZT1VSIEFQUCBUT0RBWTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRvd25sb2FkTGlua3N9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ29vZ2xlcGxheS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9hcHBzdG9yZS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L3NlY3Rpb24+ICovfVxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb290ZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBsZz17NH0gbWQ9ezN9IHNtPXszfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nb2Z0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU29jaWFsTWVudX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29tcEluZm99PkZyaWVuZHpwcm9kdWN0cyBpcyBhIHBsYXRmb3JtIHdpdGggc3VjaCBhbiBpbm5vdmF0aXZlIGlkZWEgdG8gc2VsbC8gcHVyY2hhc2Ugb3IgcmVxdWVzdCBhIHdpZGUgcmFuZ2Ugb2YgaXRlbXMgd2l0aGluIHRoZSBjb2xsZWdlIGNhbXB1cy4gQmVzaWRlcywgeW91IGNvdWxkIGdldCBpbmZvcm1hdGlvbiBvZiB2YXJpb3VzIGV2ZW50cyBoZWxkIGluIGNvbGxlZ2VzIHRocm91Z2hvdXQgSW5kaWEuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PHA+Rk9MTE9XIFVTIDwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9GcmllbmR6UHJvZHVjdC0xMTQ2MjgxNjczMzg1NDdcIj48RmFjZWJvb2tJY29uIGNvbG9yPVwiI2ZmZlwiIC8+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2ZyaWVuZHpfcHJvZHVjdD9pZ3NoaWQ9dWJtanB1b3F2c201XCI+PEluc3RhZ3JhbUljb24gY29sb3I9XCIjZmZmXCIgLz48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PFR3aXR0ZXJJY29uIGNvbG9yPVwiI2ZmZlwiIC8+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxZb3VUdWJlSWNvbiBjb2xvcj1cIiNmZmZcIiAvPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48TGlua2VkSW5JY29uIGNvbG9yPVwiI2ZmZlwiIC8+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbGc9ezh9IG1kPXs5fSBzbT17OX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9vdGVyTWVudX0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48cD5QT1BVTEFSIENPTExFR0VTPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2R1Y3RzP3M9bml0LWphbGFuZGhhclwiPk5JVCBKYWxhbmRoYXI8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/cz1uaXQtZGVsaGlcIj5OSVQgRGVsaGk8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/cz1uaXQta3VydWtzaGV0cmFcIj5OSVQgS3VydWtzaGV0cmE8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/cz1uaXQtZGVsaGlcIj5JSVQgRGVsaGk8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48cD5Vc2VmdWwgTGlua3M8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPjxMaW5rIGhyZWY9XCIvXCI+Q2FyZWVyczwvTGluaz48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj5Qcml2YWN5IFBvbGljeTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0RGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48cD5Db250YWN0PC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj48SG9tZUljb24gY29sb3I9XCIjZmZmXCIgLz5KYWxhbmRoYXIsIFB1bmphYjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIm1haWx0bzppbmZvQGZyaWVuZHpwcm9kdWN0cy5jb21cIj48TWFpbEljb24gY29sb3I9XCIjZmZmXCIgLz5pbmZvQGZyaWVuZHpwcm9kdWN0cy5jb208L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0ZWw6KzkxNzAwMzM1MTFcIj48UGhvbmVJY29uIGNvbG9yPVwiI2ZmZlwiIC8+KyA5MTcwMDMzNTExPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwidGVsOis5MTcwMDMzNTExXCI+PFBob25lSWNvbiBjb2xvcj1cIiNmZmZcIiAvPisgOTE3MDAzMzUxMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29weXJpZ2h0fT5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5Pnttb21lbnQoKS55ZWFyKCl9IENvcHlyaWdodHMgQWxsIHJpZ2h0cyBSZXNlcnZlZCBXZWJzaXRlIFBvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lndvb2Rib3hkaWdpdGFsLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Xb29kIEJveDwvYT48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiLy8gaW1wb3J0IHtcclxuLy8gICBzZWNvbmRhcnlEYXJrLCBiYWNrZ3JvdW5kQ29sb3IsIGJsdWVUZXh0LCBtYWluVGV4dFxyXG4vLyB9IGZyb20gJ3NyYy9fc3R5bGVzL2NvbG9ycydcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25TdHlsZXMgPSB7XHJcbiAgRm9vdGVyOntcclxuICAgIHBhZGRpbmc6ICcycmVtIDAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzE1MTcyOCdcclxuICB9LFxyXG4gIEZvb3Rlck1lbnU6e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAnJiB1bCc6e1xyXG4gICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGknOntcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIHAnOntcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIGEnOntcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCdcclxuICAgIH1cclxuICB9LFxyXG4gIFNvY2lhbE1lbnU6e1xyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBwYWRkaW5nTGVmdDowLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGknOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAuNXJlbSdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaTpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIHAnOiB7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICBtYXJnaW46MCxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgYSc6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICcwLjhyZW0nLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6ICcxLjNlbScsXHJcbiAgICAgIGhlaWdodDogJzEuM2VtJyxcclxuICAgICAgZmlsbDogJyNmZmYnLFxyXG4gICAgICBtYXJnaW5SaWdodDogJzEwcHgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvOntcclxuICAgIHdpZHRoOicxNDhweCdcclxuICB9LFxyXG4gIGNvbXBJbmZvOntcclxuICAgIGNvbG9yOicjZmZmJyxcclxuICAgIHBhZGRpbmdSaWdodDonMnJlbSdcclxuICB9LFxyXG4gIENvcHlyaWdodDp7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTUxNzI4ZjAnLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICcmIHAnOntcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCdcclxuICAgIH0sXHJcbiAgICAnJiBhJzp7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOid1bmRlcmxpbmUgIWltcG9ydGFudCdcclxuICAgIH1cclxuICB9LFxyXG4gIGRvd25sb2FkQXBwOiB7XHJcbiAgICBwYWRkaW5nOiBcIjNyZW0gMFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDIzNSwgMjM4LCAyMzksIDAuNilcIixcclxuICAgICAgekluZGV4OiBcIjFcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkb3dubG9hZFRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgekluZGV4OiBcIjJcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgXCImIGgzXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzJBNjZFQVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvd25sb2FkQ29udGVudDoge1xyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHpJbmRleDogXCIyXCIsXHJcbiAgICB3aWR0aDogXCJtYXgtY29udGVudFwiLFxyXG4gICAgXCImIGg1XCI6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhY3REZXRhaWxzOntcclxuICAgICcmIGEnOntcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIHNwYW4nOntcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzp7XHJcbiAgICAgIGZvbnRTaXplOicxOHB4JyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZG93bmxvYWRMaW5rczoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgXCImIGFcIjoge1xyXG4gICAgICB3aWR0aDogXCI0OCVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaW1nXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb2JpbGVTdHlsZXMgPSB7XHJcbiAgQ29weXJpZ2h0OntcclxuICAgIHBhZGRpbmc6JzAuNXJlbSAxcmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzIuOXJlbScsXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBmb250U2l6ZTogJzE0cHgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBGb290ZXI6e1xyXG4gICAgcGFkZGluZ1RvcDonMXJlbScsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnMCdcclxuICB9LFxyXG4gIEZvb3Rlck1lbnU6IHtcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBtYXJnaW46ICcwJyxcclxuICAgICAgYm9yZGVyQm90dG9tOidzb2xpZCAxcHggIzM5MzkzOScsXHJcbiAgICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogJzAuNHJlbSAwJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIHAnOntcclxuICAgICAgbWFyZ2luOjBcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSc6e1xyXG4gICAgICBtYXJnaW5Cb3R0b206JzAuM3JlbSdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBhJzoge1xyXG4gICAgICBmb250U2l6ZTogJzE0cHgnXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgc3Bhbic6IHtcclxuICAgICAgZm9udFNpemU6ICcxNHB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nbzp7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWFyZ2luOidhdXRvJ1xyXG4gIH0sXHJcbiAgY29udGFjdERldGFpbHM6e1xyXG4gICAgJyYgYSc6e1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBzcGFuJzp7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgU29jaWFsTWVudToge1xyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luQm90dG9tOjAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTonc29saWQgMXB4ICMzOTM5MzknXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogJzFlbScsXHJcbiAgICAgIGhlaWdodDogJzFlbScsXHJcbiAgICB9XHJcbiAgfSxcclxuICBkb3dubG9hZFRpdGxlOiB7XHJcbiAgICBcIiYgaDNcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRMaW5rczoge1xyXG4gICAgXCImIGltZ1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcEluZm86e1xyXG4gICAgcGFkZGluZ1JpZ2h0OjBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWJTdHlsZXMgPSB7XHJcbiAgQ29weXJpZ2h0OiB7XHJcbiAgICBtYXJnaW5Cb3R0b206ICcyLjlyZW0nXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2t0b3BTdHlsZXMgPSB7XHJcbiAgRm9vdGVyTWVudTp7XHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IDBcclxuICAgIH0sXHJcbiAgfSxcclxuICBkb3dubG9hZFRpdGxlOiB7XHJcbiAgICB3aWR0aDogXCI1MCVcIixcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCBDaGF0SWNvbiBmcm9tIFwiLi4vLi4vLi4vY2hhdC9jb21wb25lbnRzL0NoYXRJY29uXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zTm9uZVwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCB1c2VOYXZiYXIgZnJvbSBcIi4uL3V0aWxzL3VzZU5hdmJhclwiO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcclxuaW1wb3J0IEdyb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XHJcbmltcG9ydCB7IGNvbW1vblN0eWxlcywgZGVza3RvcFN0eWxlcywgbW9iaWxlU3R5bGVzLCBUYWJTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IEF1dGhJY29uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvZ2luX1JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgfSxcclxuICAgIGJvcmRlcjogXCJzb2xpZCAxcHggI2NjY1wiLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMmNoXCIsXHJcbiAgICAgIFwiJjpmb2N1c1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjBjaFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC4uLmNvbW1vblN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IGRlc2t0b3BTdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IFRhYlN0eWxlcyxcclxufSkpO1xyXG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoTW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IG1vZGFsT3BlbiB9KSB7XHJcbiAgY29uc3QgeyBpc1Njcm9sbGVkLCBuYXZCYXJSZWYgfSA9IHVzZU5hdmJhcigpO1xyXG5cclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2F1dGhNb2RhbCwgc2V0YXV0aE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGltZW91dCwgc2V0dGltZW91dF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIuYWNjZXNzVG9rZW4pO1xyXG5cclxuICBjb25zdCBnb3RvX2NvbW1pbmdTb29uID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvY29taW5nLXNvb25cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxyXG4gIGNvbnN0IHByZXZPcGVuID0gUmVhY3QudXNlUmVmKG9wZW4pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJldk9wZW4uY3VycmVudCA9PT0gdHJ1ZSAmJiBvcGVuID09PSBmYWxzZSkge1xyXG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuO1xyXG4gIH0sIFtvcGVuXSk7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdFByb2R1Y3QgPSAoZSkgPT4ge1xyXG4gICAgc2V0YXV0aE1vZGFsKGZhbHNlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcG9zdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiLz9zaWdudXA9b3BlblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMaXN0RXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgc2V0YXV0aE1vZGFsKGZhbHNlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcG9zdC9ldmVudFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiLz9zaWdudXA9b3BlblwiKTsgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgc2V0dGltZW91dChcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHM/cz1cIiArIHZhbHVlKTtcclxuICAgICAgfSwgNjAwKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdlxyXG4gICAgICBpZD1cIm5hdmJhclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGlzU2Nyb2xsZWQgJiYgY2xhc3Nlcy5zY3JvbGxlZCl9XHJcbiAgICAgIHJlZj17bmF2QmFyUmVmfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMubG9nbyxcclxuICAgICAgICAgICAgICAgICAgaXNTY3JvbGxlZCAmJiBjbGFzc2VzLmxvZ29TY3JvbGxlZFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5NZW51fT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09IFwiL3Byb2R1Y3RzP3R5cGU9YnV5XCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dHlwZT1idXlcIj5CdXk8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09IFwiL3Byb2R1Y3RzP3R5cGU9cmVudGFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dHlwZT1yZW50YWxcIj5SZW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2V2ZW50c1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudHNcIj5FdmVudHM8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvYnV5LXJlcXVlc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnV5LXJlcXVlc3RcIj5SZXF1ZXN0czwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9wb3N0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlTGlzdFByb2R1Y3R9PlNlbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcG9zdC9ldmVudFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUxpc3RFdmVudH0+QWRkIEV2ZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2ZlZWRiYWNrXCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlZWRiYWNrXCI+RmVlZGJhY2s8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17YW5jaG9yUmVmfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gXCJNb3JlXCIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNb3JlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvclJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNlbnRlciB0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNlbnRlciBib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZVRvZ2dsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+UHJpdmFjeSBQb2xpY3k8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rlcm1zLWFuZC1jb25kaXRpb25zXCI+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Qb3BwZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLk1lbnVSaWdodH0+XHJcbiAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPENoYXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNOb25lSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxBdXRoSWNvbiBtb2RhbE9wZW49e2F1dGhNb2RhbH0gLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsIi8vIGltcG9ydCB7XHJcbi8vICAgc2Vjb25kYXJ5RGFyaywgYmFja2dyb3VuZENvbG9yLCBibHVlVGV4dCwgbWFpblRleHRcclxuLy8gfSBmcm9tICdzcmMvX3N0eWxlcy9jb2xvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgdG9wOiBcIjBcIixcclxuICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgIHpJbmRleDogXCI5OVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIGVhc2UtaW4gMzUwbXNcIixcclxuICB9LFxyXG4gIHNjcm9sbGVkOiB7XHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgdG9wOiBcIjBcIixcclxuICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgIHpJbmRleDogXCI5OVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggMTRweCAxOHB4IHJnYmEoMCwwLDAsMC4xKVwiLFxyXG4gIH0sXHJcbiAgTWVudToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgbGlzdFN0eWxlVHlwZTogXCJub25lXCIsXHJcbiAgICBcIiYgbGlcIjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogXCIxLjNyZW1cIixcclxuICAgIH0sXHJcbiAgICBcIiYgbGkgdWwgbGlcIjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogXCIwXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGFcIjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGxpOmhvdmVyIGFcIjoge1xyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10aGVtZSlcIixcclxuICAgIH0sXHJcbiAgICBcIiYgbGk6aG92ZXIgLk11aUxpc3Qtcm9vdCBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBsaS5hY3RpdmUgYVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBidXR0b25cIjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYnV0dG9uOmhvdmVyIC5NdWlCdXR0b24tbGFiZWxcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuICAgICAgY29sb3I6IFwidmFyKC0tdGhlbWUpXCJcclxuICAgIH0sXHJcbiAgICBcIiYgYnV0dG9uIC5NdWlUb3VjaFJpcHBsZS1yb290XCI6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBNZW51UmlnaHQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgbGlzdFN0eWxlVHlwZTogXCJub25lXCIsXHJcbiAgICBcIiYgbGlcIjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogXCIxcmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgbWFyZ2luOiBcIjFyZW0gMFwiLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgaGVpZ2h0OiBcIjg1cHhcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIGVhc2UtaW4gMzUwbXNcIixcclxuICB9LFxyXG4gIGxvZ29TY3JvbGxlZDoge1xyXG4gICAgbWFyZ2luOiBcIjAuMnJlbSAwXCIsXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBoZWlnaHQ6IFwiNjVweFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW9iaWxlU3R5bGVzID0ge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlN0eWxlcyA9IHtcclxuICBNZW51OiB7XHJcbiAgICAnJiBsaSc6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6ICcxcmVtJ1xyXG4gICAgfSxcclxuICAgICcmIGEnOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVza3RvcFN0eWxlcyA9IHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiO1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExhYmVsSW1wb3J0YW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhYmVsSW1wb3J0YW50XCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBBY2NvdW50Qm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiO1xyXG5pbXBvcnQgSG9tZVJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVJvdW5kZWRcIjtcclxuaW1wb3J0IEV2ZW50Tm90ZVJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXZlbnROb3RlUm91bmRlZFwiO1xyXG5pbXBvcnQgTG9jYWxNYWxsUm91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbE1hbGxSb3VuZGVkXCI7XHJcbmltcG9ydCBMaXZlVHZSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpdmVUdlJvdW5kZWRcIjtcclxuaW1wb3J0IEZvcm1hdExpc3RCdWxsZXRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcclxuaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIjtcclxuaW1wb3J0IE5hdmlnYXRlTmV4dFJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0Um91bmRlZFwiO1xyXG5pbXBvcnQgRmVlZGJhY2tJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmVlZGJhY2tcIjtcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nJ1xyXG5cclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgY29tbW9uU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdW5hdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgQ2hhdE1lc3NhZ2VJY29uIGZyb20gXCIuLi8uLi8uLi9jaGF0L2NvbXBvbmVudHMvQ2hhdEljb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIC4uLmNvbW1vblN0eWxlcyxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLnVzZXIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt0aW1lb3V0LCBzZXR0aW1lb3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0c2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5BTWVudSwgc2V0T3BlbkFNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU3VibWVudSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5NZW51KCFvcGVuTWVudSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQVN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQU1lbnUoIW9wZW5BTWVudSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbb3BlbnNlYXJjaCwgc2V0b3BlbnNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaE9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuc2VhcmNoKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0b3BlbnNlYXJjaChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tBd2F5ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICBkaXNwYXRjaCh1bmF1dGhlbnRpY2F0ZWQoKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAvLyAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gIC8vICAgc2V0dGltZW91dCh2YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUsIHRpbWVvdXQpO1xyXG4gICAgc2V0c2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHNldHRpbWVvdXQoXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzP3M9XCIgKyB2YWx1ZSk7XHJcbiAgICAgIH0sIDYwMClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhY2hDbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzP3M9XCIgKyBzZWFyY2hWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgU2VhcmNoQXBwQmFySWNvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn0+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYWNoQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoXCIgfX1cclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17aGFuZGxlU2VhcmNoQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RQcm9kdWN0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wb3N0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvP3NpZ251cD1vcGVuXCIpOyAgIFxyXG5cclxuICAgICAgLy8gc2V0YXV0aE1vZGFsKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RFdmVudCA9IChlKSA9PiB7XHJcbiAgICAvLyBzZXRhdXRoTW9kYWwoZmFsc2UpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHVzZXIuaWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcG9zdC9ldmVudFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiLz9zaWdudXA9b3BlblwiKTsgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xpY2tBd2F5fT5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuQXBwYmFyQmd9PlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17b3Blbn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGVCYXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SG9tZVJvdW5kZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHM/dHlwZT1idXlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT0gXCIvcHJvZHVjdHM/dHlwZT1idXlcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxNYWxsUm91bmRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkJ1eVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3RzP3R5cGU9cmVudGFsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09IFwiL3Byb2R1Y3RzP3R5cGU9cmVudGFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsTWFsbFJvdW5kZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZXZlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvZXZlbnRzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RXZlbnROb3RlUm91bmRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkV2ZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGhyZWY9eyFhY2Nlc3NUb2tlbiA/IFwiLz9zaWdudXA9b3BlblwiIDogXCIvcG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaXN0UHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcG9zdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdExpc3RCdWxsZXRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlNlbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9idXktcmVxdWVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2J1eS1yZXF1ZXN0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0TGlzdEJ1bGxldGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmVxdWVzdHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgLy8gaHJlZj17IWFjY2Vzc1Rva2VuID8gXCIvP3NpZ251cD1vcGVuXCIgOiBcIi9wb3N0L2V2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpc3RFdmVudH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcG9zdC9ldmVudFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdExpc3RCdWxsZXRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFkZCBFdmVudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9mZWVkYmFja1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2ZlZWRiYWNrXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGZWVkYmFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlU3VibWVudX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgICAgICAgICAgICAge29wZW5NZW51ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5NZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWJvdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcml2YWN5IFBvbGljeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rlcm1zLWFuZC1jb25kaXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFja0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlRlcm1zICZhbXA7IENvbmRpdGlvbnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAge2FjY2Vzc1Rva2VuICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUFTdWJtZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50Qm94IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFjY291bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge29wZW5BTWVudSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5BTWVudX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8QWNjb3VudENpcmNsZSAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJWaWV3IFByb2ZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlL2VkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZS9lZGl0XCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkVkaXQgUHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdWJsaXNoZWQgQWRkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGUvZXZlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGUvZXZlbnRzXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlB1Ymxpc2hlZCBFdmVudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlL3JlcXVlc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGUvcmVxdWVzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVibGlzaGVkIFJlcXVlc3RzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZS9mYXZvdXJpdGUtZXZlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGUvZmF2b3VyaXRlLWV2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGYXZvdXJpdGUgRXZlbnRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZS9mYXZvdXJpdGUtcHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZS9mYXZvdXJpdGUtcHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmF2b3VyaXRlIHByb2R1Y3RzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcG9zdC9yZXF1ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Bvc3QvcmVxdWVzdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBZGQgUHJvZHVjdCBSZXF1ZXN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkxvZ291dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gc3JjPXtsb2dvfSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJY29uc30+XHJcbiAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IDQgbmV3IG1haWxzXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWFpbEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8Q2hhdE1lc3NhZ2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyAxNyBuZXcgbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICB7LyogPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaE9wZW59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7Lyoge29wZW5zZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFjaENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoYnRufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYWNoQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaENsb3NlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICB7Lyoge29wZW5zZWFyY2ggJiYgPFNlYXJjaEFwcEJhckljb24gLz59ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGNvbW1vblN0eWxlcyA9IHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIEFwcGJhckJnOntcclxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgIGNvbG9yOiAnIzMzMydcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiBcIjJyZW1cIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGZ1bGxMaXN0OiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gIH0sXHJcbiAgbWVudUljb25zOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgc2lkZUJhcjoge1xyXG4gICAgd2lkdGg6IFwiMjgwcHhcIixcclxuICAgIFwiJiAuTXVpRHJhd2VyLXBhcGVyXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMjgwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYgLk11aUJhY2tkcm9wLXJvb3RcIjoge1xyXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMzMzNcIixcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBhLmFjdGl2ZVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBhLmFjdGl2ZSBzdmdcIjoge1xyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10aGVtZSlcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcclxuICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgekluZGV4OiBcIjEwMFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gICAgaGVpZ2h0OiBcIjU3cHhcIixcclxuICB9LFxyXG4gIHNlYXJjaGJ0bjoge1xyXG4gICAgaGVpZ2h0OiBcIjM1cHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjVweCAxMHB4XCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBEZXNrdG9wTmF2YmFyIGZyb20gJy4vRGVza3RvcCdcclxuaW1wb3J0IE1vYmlsZU5hdmJhciBmcm9tICcuL01vYmlsZSdcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBmb3JtOntcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXTp7XHJcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb2RhbDp7XHJcbiAgICBwYWRkaW5nOiAnMC41cmVtJ1xyXG4gIH1cclxufSkpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUgPT4gdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJykpXHJcblxyXG4gIGNvbnN0IEhlYWRlckNvbXBvbmVudCA9IG1hdGNoZXMgPyA8RGVza3RvcE5hdmJhciBtb2RhbE9wZW49e2hhbmRsZUNsaWNrT3Blbn0gLz4gOiA8TW9iaWxlTmF2YmFyIG1vZGFsT3Blbj17aGFuZGxlQ2xpY2tPcGVufSAvPlxyXG5cclxuICBjb25zdCBDb2xsZWdlTmFtZXMgPSBbXHJcbiAgICB7IHRpdGxlOiAnVGhlIFNoYXdzaGFuayBSZWRlbXB0aW9uJyB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXInfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgR29kZmF0aGVyOiBQYXJ0IElJJyB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBEYXJrIEtuaWdodCcgfSxcclxuICAgIHsgdGl0bGU6ICcxMiBBbmdyeSBNZW4nIH0sXHJcbiAgICB7IHRpdGxlOiBcIlNjaGluZGxlcidzIExpc3RcIiB9LFxyXG4gICAgeyB0aXRsZTogJ1B1bHAgRmljdGlvbicgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBSZXR1cm4gb2YgdGhlIEtpbmcnIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdvb2QsIHRoZSBCYWQgYW5kIHRoZSBVZ2x5J30sXHJcbiAgXTtcclxuXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge0hlYWRlckNvbXBvbmVudH1cclxuICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIiBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+U2lnblVwPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgVG8gc3Vic2NyaWJlIHRvIHRoaXMgd2Vic2l0ZSwgcGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyBoZXJlLiBXZSB3aWxsIHNlbmQgdXBkYXRlc1xyXG4gICAgICAgICAgICBvY2Nhc2lvbmFsbHkuXHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJsbmFtZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOb1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtDb2xsZWdlTmFtZXN9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkNvbGxlZ2VcIiBmdWxsV2lkdGggLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBTaWduVXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8Lz5cclxuICApXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gdXNlTmF2YmFyICgpIHtcclxuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgbmF2QmFyUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IGUgPT4ge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gZS5zcmNFbGVtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wXHJcblxyXG4gICAgaWYgKG5hdkJhclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHNldElzU2Nyb2xsZWQob2Zmc2V0ID4gbmF2QmFyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hdkJhclJlZixcclxuICAgIGlzU2Nyb2xsZWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZU5hdmJhclxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tIFwiLi9Gb290ZXIvQm90dG9tTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBjb21tb25TdHlsZXMsIGRlc2t0b3BTdHlsZXMsIG1vYmlsZVN0eWxlcywgVGFiU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgLi4uY29tbW9uU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXTogZGVza3RvcFN0eWxlcyxcclxuICAvLyBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhsXCIpXTogVGFiU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiBtb2JpbGVTdHlsZXMsXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRpc0xvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KCh0aGVtZSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuICBjb25zdCBCb3R0b21OYXYgPSBtYXRjaGVzID8gPEJvdHRvbU5hdmlnYXRpb24gLz4gOiBudWxsO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5XcmFwcGVyfT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5NYWlufT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIHtwcm9wcy5ub2Zvb3RlciA9PSB0cnVlID8gXCJcIiA6IDxGb290ZXIgLz59XHJcbiAgICAgIHtwYXRoLmluY2x1ZGVzKFwiY2hhdFwiKSA/IG51bGwgOiBCb3R0b21OYXZ9XHJcbiAgICAgIHtpc0xvYWRlZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIGltcG9ydCB7XHJcbi8vICAgc2Vjb25kYXJ5RGFyaywgYmFja2dyb3VuZENvbG9yLCBibHVlVGV4dCwgbWFpblRleHRcclxuLy8gfSBmcm9tICdzcmMvX3N0eWxlcy9jb2xvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gIFdyYXBwZXI6IHtcclxuICAgICcmIDo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XHJcbiAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxyXG4gICAgfSxcclxuICAgICcmIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXRoZW1lKScsXHJcbiAgICB9LFxyXG4gICAgJyYgYSc6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlciAhaW1wb3J0YW50JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJ1xyXG4gICAgfSxcclxuICAgICcmIC5kaWFsb2dlQ3VzdG9tIC5NdWlHcmlkLXNwYWNpbmcteHMtOCc6e1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXJnaW46ICcwJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgTWFpbjoge1xyXG4gICAgJyYgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItc2Nyb2xsYmFyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiAuaW1hZ2UtZ2FsbGVyeS1jb250ZW50IC5pbWFnZS1nYWxsZXJ5LXNsaWRlIC5pbWFnZS1nYWxsZXJ5LWltYWdlJzp7XHJcbiAgICAgIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSA4MHB4KScsXHJcbiAgICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2FkZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgd2lkdGg6ICcxMDB2VycsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDk5OTksXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjcpJ1xyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb2JpbGVTdHlsZXMgPSB7XHJcbiAgTWFpbjoge1xyXG4gICAgcGFkZGluZ1RvcDogJzU2cHgnLFxyXG4gICAgJyYgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItc2Nyb2xsYmFyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBib3R0b206ICcwJ1xyXG4gICAgfSxcclxuICAgICcmIC5zd2lwZXJTY3JvbGxiYXJEcmFnJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjUyLCAxMzAsIDI2KSdcclxuICAgIH0sXHJcbiAgICAnJiAuaW1hZ2UtZ2FsbGVyeS1jb250ZW50IC5pbWFnZS1nYWxsZXJ5LXNsaWRlIC5pbWFnZS1nYWxsZXJ5LWltYWdlJzoge1xyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgb2JqZWN0Rml0OiAnY29udGFpbidcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWJTdHlsZXMgPSB7XHJcbiAgTWFpbjoge1xyXG4gICAgcGFkZGluZ1RvcDogJzU2cHgnXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2t0b3BTdHlsZXMgPSB7XHJcbiAgTWFpbjoge1xyXG4gICAgcGFkZGluZ1RvcDogJzcuNXJlbSdcclxuICB9LFxyXG4gIFdyYXBwZXI6IHtcclxuICAgICcmIC5NdWlDb250YWluZXItbWF4V2lkdGhYbCc6IHtcclxuICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICBtYXhXaWR0aDogJzE0MDRweCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LmFwaV91cmw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbnVwKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvc2lnbi11cFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVNpZ251cChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL3NpbXBsZS1zaWduLXVwXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29vZ2xlU2lnbnVwKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvZ29vZ2xlLXNpZ24tdXBcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL2xvZ2luXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvZmlsZShkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci91cGRhdGUvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVJbWcoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZmlsZS1pbWcvdXBkYXRlXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZFByb2R1Y3QoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0L1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0L2RlbGV0ZS9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVSZXF1ZXN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvZGVsZXRlL1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRFdmVudChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVFdmVudChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZUV2ZW50KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudC9kZWxldGUvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmF2b3VyaXRlKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2Zhdm91cml0ZVwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlckZhdm91cml0ZSh1c2VyX2lkLCB0eXBlKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyLWZhdm91cml0ZS9cIiArIHVzZXJfaWQgKyBcIi9cIiArIHR5cGU7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwsIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRVc2VyUmVxdWVzdHModXNlcl9pZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0L3VzZXIvXCIgKyB1c2VyX2lkO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsLCApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkUHJvZHVjdFJlcXVlc3QoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3RSZXF1ZXN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZEFQSShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9yZXNldC1wYXNzd29yZFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpIHtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoYFJlcXVlc3QgcmVqZWN0ZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURldmljZVRva2VuKHVzZXJfaWQsIHRva2VuKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9kZXZpY2UtdG9rZW4vXCIgKyB1c2VyX2lkICsgXCIvXCIgKyB0b2tlbjtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCwgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUVtYWlsKHRva2VuKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi92ZXJpZnktZW1haWwtdG9rZW4vXCIgKyB0b2tlbjtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCwgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuIiwiY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LmFwaV91cmw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IEVycm9yKGBSZXF1ZXN0IHJlamVjdGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsR2V0UmVxdWVzdCh1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEaWFsb2dzKHVzZXJfaWQsIHEpIHtcbiAgICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2RpYWxvZ3MvXCIgKyB1c2VyX2lkO1xuXG4gICAgaWYgKHEpIHtcbiAgICAgICAgdXJsID0gdXJsICsgcTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICByZXR1cm4gZ2VuZXJhbEdldFJlcXVlc3QodXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhkaWFsb2dfaWQsIHEpIHtcbiAgICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL21lc3NhZ2VzL1wiICsgZGlhbG9nX2lkO1xuXG4gICAgaWYgKHEpIHtcbiAgICAgICAgdXJsID0gdXJsICsgcTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICByZXR1cm4gZ2VuZXJhbEdldFJlcXVlc3QodXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShkYXRhKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9tZXNzYWdlXCI7XG5cbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWFkTXNnKHVzZXJfaWQpIHtcbiAgICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VucmVhZC1tZXNzYWdlL1wiICsgdXNlcl9pZDtcblxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgcmV0dXJuIGdlbmVyYWxHZXRSZXF1ZXN0KHVybClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBbGwoZGlhbG9nX2lkLCB1c2VyX2lkKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9tYXJrLXJlYWQtZGlhbG9nL1wiICsgZGlhbG9nX2lkICsgJy8nICsgdXNlcl9pZDtcblxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgcmV0dXJuIGdlbmVyYWxHZXRSZXF1ZXN0KHVybClcbn0iLCJjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuYXBpX3VybDtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVW5pdmVyc2l0aWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VuaXZlcnNpdGllcy9nbG9iYWwvc2VhcmNoL1wiICsgcTtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDYXRlZ29yaWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvcHJvZHVjdC1jYXRlZ29yaWVzLXNlYXJjaC8ke3F9YDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDaXRpZXMocSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgYC9jaXRpZXMvc2VhcmNoLyR7cX1gO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3RzXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3QoaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VsbGVyKGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL1wiICsgaWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIjtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudENhdGVnb3JpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudC1jYXRlZ29yaWVzXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdGllcygpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2NpdGllc1wiO1xyXG5cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VEYXRhXCIsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudHMocSwgc2hvd2FsbCA9IGZhbHNlKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudHNcIjtcclxuICBpZiAoc2hvd2FsbCkge1xyXG4gICAgdXJsID0gdXJsICsgXCIvXCIgKyBzaG93YWxsO1xyXG4gIH1cclxuICBpZiAocSkge1xyXG4gICAgdXJsID0gdXJsICsgcTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudChpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1ZXN0KGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRXZlbnRDYXRlZ29yaWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvZXZlbnQtY2F0ZWdvcmllcy1zZWFyY2gvJHtxfWA7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlT3JkZXIoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvb3JkZXJcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29udGFjdChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9jb250YWN0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZpc2l0KGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXItdmlzaXRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZlZWRiYWNrKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2ZlZWRiYWNrXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCdXlSZXF1ZXN0cyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3Q/cGFnaW5hdGU9MjBcIjtcclxuICBpZiAocSkge1xyXG4gICAgdXJsID0gdXJsICsgcTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmRBUEkoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZm9yZ290LXBhc3N3b3JkXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVQYXNzd29yZEFQSShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91cGRhdGUtcGFzc3dvcmRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDaGF0VXBkYXRlKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtY2hhdC1tZXNzYWdlL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFZlcmlmeUVtYWlsKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtdmVyaWZ5LWVtYWlsL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3BlblN0YXR1cyhkaWFsb2dfaWQsIHN0YXR1cywgdXNlcl9pZCkge1xyXG4gIGxldCB1cmwgPVxyXG4gICAgQVBJX1VSTCArIFwiL3VwZGF0ZS1vcGVuLXN0YXR1cy9cIiArIGRpYWxvZ19pZCArIFwiL1wiICsgc3RhdHVzICsgXCIvXCIgKyB1c2VyX2lkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kRmVlZGJhY2tNZXNzYWdlKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtZmVlZGJhY2stbWVzc2FnZVwiO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihgUmVxdWVzdCByZWplY3RlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IEJhZGdlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoU2VydmljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCBDaGF0U2VydmljZSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VydmljZXMvY2hhdC1zZXJ2aWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1bnJlYWRNc2cgfSBmcm9tIFwiLi4vLi4vYXBpcy9jaGF0LWFwaVwiO1xuaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tICdjb25uZWN0eWN1YmUnXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uLy4uL2FwcENvbmZpZydcbmltcG9ydCB7IGNoYXRVbmF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0VXNlclwiO1xuaW1wb3J0IHsgY2hhdFJlc2V0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhdENvbm5lY3RlZFwiO1xuaW1wb3J0IGNoYXRTZXJ2aWNlIGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlcy9jaGF0LXNlcnZpY2VcIjtcbmltcG9ydCB7IHVuU2VsZWN0ZWREaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IENoYXRNZXNzYWdlSWNvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRoVXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLnVzZXIpO1xuICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICBjb25zdCBjaGF0VW5yZWFkQ291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNoYXRVbnJlYWRDb3VudCk7XG5cbiAgICBjb25zdCBbY291bnQsIHNldGNvdW50XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYXV0aFVzZXIgJiYgYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRVbmF1dGhlbnRpY2F0ZWQoKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRSZXNldCgpKVxuICAgICAgICAgICAgZGlzcGF0Y2godW5TZWxlY3RlZERpYWxvZygpKVxuICAgICAgICAgICAgbGV0IGluaXQgPSBBdXRoU2VydmljZS5pbml0KCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGluaXQgJiYgYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogYXV0aFVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoVXNlci5jb25uZWN0eWN1YmVfdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yKSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdW5yZWFkTXNnKGF1dGhVc2VyLmlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZGF0YSAmJiBzZXRjb3VudChkYXRhKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgY29ubmVjdENoYXQgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgQ1JFREVOVElBTFMgPSB7XG4gICAgICAgICAgICBlbWFpbDogYXV0aFVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIucGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IENPTkZJRyA9IHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyZWQ6IChoYW5kbGVSZXNwb25zZSwgcmV0cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCBoYW5kbGVSZXNwb25zZSgpIGlmIHlvdSBkbyBub3Qgd2FudCB0byBwcm9jZXNzIGEgc2Vzc2lvbiBleHBpcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBhbiBlcnJvciB3aWxsIGJlIHJldHVybmVkIHRvIG9yaWdpbiByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZVJlc3BvbnNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSlMgU0RLIHYyXG4gICAgICAgICAgICAgICAgICAgIENvbm5lY3R5Q3ViZS5jcmVhdGVTZXNzaW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJldHJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgbGV0IGluaXQgPSBhd2FpdCAgQ29ubmVjdHlDdWJlLmluaXQoLi4uYXBwQ29uZmlnLmNvbm5lY3R5Q3ViZUNvbmZpZywgQ09ORklHKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5pdClcbiAgICAgIGlmKGluaXQpe1xuICAgICAgICAgIENvbm5lY3R5Q3ViZS5sb2dpbihDUkVERU5USUFMUylcbiAgICAgICAgICAgICAgLnRoZW4oKHNlc3Npb24pID0+IHsgXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbicsc2Vzc2lvbilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVcExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgQ29ubmVjdHlDdWJlLmNoYXQub25NZXNzYWdlTGlzdGVuZXIgPSBvbk1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50SWQgPSAyMDY2NjQ1O1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdncm91cGNoYXQnLFxuICAgICAgICAgICAgYm9keTogXCJIb3cgYXJlIHlvdSB0b2RheT9cIixcbiAgICAgICAgICAgIGV4dGVuc2lvbjoge1xuICAgICAgICAgICAgICAgIHNhdmVfdG9faGlzdG9yeTogMSxcbiAgICAgICAgICAgICAgICBkaWFsb2dfaWQ6ICc1ZjZmMzY3NmNhOGJmNDJhNzQ0YzNmNGInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFya2FibGU6IDFcbiAgICAgICAgfTtcblxuICAgICAgICBtZXNzYWdlID0gQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChvcHBvbmVudElkLCBtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBtZXNzYWdlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZSh1c2VySWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tDb25uZWN0eUN1YmUuY2hhdC5vbk1lc3NhZ2VMaXN0ZW5lcl0gY2FsbGJhY2s6JywgdXNlcklkLCBtZXNzYWdlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYXRDbGljaz0oKT0+e1xuICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8/c2lnbnVwPW9wZW4nKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NoYXQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlQ2hhdENsaWNrfT5cbiAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInlvdSBoYXZlc1wiIGNvbG9yPVwiaW5oZXJpdFwiPiAqL31cbiAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtjaGF0VW5yZWFkQ291bnR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YWNjZXNzVG9rZW4gPyAnL2NoYXQnIDogJy8/c2lnbnVwPW9wZW4nfT4gKi99XG4gICAgICAgICAgICAgIDxDaGF0SWNvbiAvPlxuICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlSWNvbjtcbiIsImltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSAnY29ubmVjdHljdWJlJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VMaW5rRnJvbVVJRCh1aWQpIHtcbiAgaWYgKCF1aWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBDb25uZWN0eUN1YmUuc3RvcmFnZS5wcml2YXRlVXJsKHVpZClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyYXRpb25BdHRhY2htZW50KGZpbGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgdWlkOiBmaWxlLnVpZCxcbiAgICB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSxcbiAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDQwMFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZUxpbmtGcm9tVUlEIH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWRcbiAgICB0aGlzLmF2YXRhciA9IFVzZXIuZ2V0QXZhdGFyVXJsKHVzZXIuYXZhdGFyKVxuICAgIHRoaXMubG9naW4gPSB1c2VyLmxvZ2luXG4gICAgdGhpcy5jdXN0b21fZGF0YSA9IHVzZXIuY3VzdG9tX2RhdGEgPyB1c2VyLmN1c3RvbV9kYXRhIDogJydcbiAgICB0aGlzLmZ1bGxfbmFtZSA9IHVzZXIuZnVsbF9uYW1lIHx8IHVzZXIubG9naW5cbiAgICB0aGlzLnBob25lID0gdXNlci5waG9uZVxuICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVzZXIuY3JlYXRlZF9hdFxuICAgIHRoaXMudXBkYXRlZF9hdCA9IHVzZXIudXBkYXRlZF9hdFxuICAgIHRoaXMubGFzdF9yZXF1ZXN0X2F0ID0gdXNlci5sYXN0X3JlcXVlc3RfYXRcbiAgfVxuICBzdGF0aWMgZ2V0QXZhdGFyVXJsKGF2YXRhclVJRCkge1xuICAgIHJldHVybiBnZXRJbWFnZUxpbmtGcm9tVUlEKGF2YXRhclVJRClcbiAgfVxufVxuIiwiaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tICdjb25uZWN0eWN1YmUnXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uLy4uL2FwcENvbmZpZydcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJ1xuLy8gaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL2N1cnJlbnRVc2VyJ1xuaW1wb3J0IHsgZ2V0SW1hZ2VMaW5rRnJvbVVJRCB9IGZyb20gJy4uL2hlbHBlcnMvZmlsZSdcbmltcG9ydCB7IGNoYXRBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0VXNlcidcbmltcG9ydCB7IGNoYXRDb25uZWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0Q29ubmVjdGVkJ1xuaW1wb3J0IHsgY2hhdFVucmVhZENvdW50IH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0VW5yZWFkJ1xuaW1wb3J0IHsgcHVzaE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL21lc3NhZ2VzJ1xuLy8gaW1wb3J0IHsgTG9nT3V0IH0gZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnXG5cbmNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgc3RhdGljIENVUlJFTlRfVVNFUl9TRVNTSU9OX0tFWSA9IFwiQ1VSUkVOVF9VU0VSX1NFU1NJT05fS0VZXCI7XG4gIHN0YXRpYyBERVZJQ0VfVE9LRU5fS0VZID0gXCJERVZJQ0VfVE9LRU5fS0VZXCI7XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDb25uZWN0eUN1YmUuaW5pdCguLi5hcHBDb25maWcuY29ubmVjdHlDdWJlQ29uZmlnKTtcbiAgICByZXR1cm4gcmVzO1xuXG4gICAgLy8gYXdhaXQgQ29ubmVjdHlDdWJlLmNyZWF0ZVNlc3Npb24oe1xuICAgIC8vICAgICBlbWFpbDondGVzdEB0ZXN0LmNvbScsXG4gICAgLy8gICAgIHBhc3N3b3JkOid0ZXN0J1xuICAgIC8vIH0pXG4gICAgLy8gcmV0dXJuIHRoaXMuYXV0b2xvZ2luKClcbiAgfVxuXG4gIC8vIGFzeW5jIGF1dG9sb2dpbigpIHtcbiAgLy8gICAgIGNvbnN0IGNoZWNrVXNlclNlc3Npb25Gcm9tU3RvcmUgPSBhd2FpdCB0aGlzLmdldFVzZXJTZXNzaW9uKClcbiAgLy8gICAgIGlmIChjaGVja1VzZXJTZXNzaW9uRnJvbVN0b3JlKSB7XG4gIC8vICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoY2hlY2tVc2VyU2Vzc2lvbkZyb21TdG9yZSlcbiAgLy8gICAgICAgICBhd2FpdCB0aGlzLnNpZ25Jbih7IGxvZ2luOiBkYXRhLmxvZ2luLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9KVxuICAvLyAgICAgICAgIHJldHVybiAnaG9tZSdcbiAgLy8gICAgIH0gZWxzZSB7IHJldHVybiAnYXV0aCcgfVxuICAvLyB9XG5cbiAgYXN5bmMgbG9naW4ocGFyYW1zKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IENvbm5lY3R5Q3ViZS5jcmVhdGVTZXNzaW9uKHBhcmFtcyk7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBuZXcgVXNlcihzZXNzaW9uLnVzZXIpO1xuICAgIHNlc3Npb24udXNlci5hdmF0YXIgPSBnZXRJbWFnZUxpbmtGcm9tVUlEKHNlc3Npb24udXNlci5hdmF0YXIpO1xuICAgIC8vIHdvcmsgYXJvdW5kXG4gICAgc2Vzc2lvbi51c2VyLmZ1bGxfbmFtZSA9IHNlc3Npb24udXNlci5sb2dpbjtcbiAgICBzdG9yZS5kaXNwYXRjaChjaGF0QXV0aGVudGljYXRlZChzZXNzaW9uKSk7XG4gICAgY29uc3QgY3VzdG9tU2Vzc2lvbiA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRVc2VyLCB7XG4gICAgICBwYXNzd29yZDogcGFyYW1zLnBhc3N3b3JkLFxuICAgIH0pO1xuICAgIHRoaXMuc2V0VXNlclNlc3Npb24oY3VzdG9tU2Vzc2lvbik7XG4gICAgdGhpcy5jb25uZWN0KGN1c3RvbVNlc3Npb24uaWQsIGN1c3RvbVNlc3Npb24ucGFzc3dvcmQpO1xuICB9XG5cbiAgLy8gYXN5bmMgc2lnblVwKHBhcmFtcykge1xuICAvLyAgICAgYXdhaXQgQ29ubmVjdHlDdWJlLmNyZWF0ZVNlc3Npb24oKVxuICAvLyAgICAgYXdhaXQgQ29ubmVjdHlDdWJlLnVzZXJzLnNpZ251cChwYXJhbXMpXG4gIC8vICAgICByZXR1cm4gdGhpcy5zaWduSW4ocGFyYW1zKVxuICAvLyB9XG5cbiAgYXN5bmMgY29ubmVjdCh1c2VySWQsIHBhc3N3b3JkKSB7XG4gICAgY29uc3QgaXNDb25uZWN0ZWQgPSBDb25uZWN0eUN1YmUuY2hhdC5pc0Nvbm5lY3RlZDtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYXRDb25uZWN0aW9uKCkpO1xuICAgICAgdGhpcy5nZXRVbnJlYWQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5jb25uZWN0KHsgdXNlcklkLCBwYXNzd29yZCB9KS50aGVuKChlcnJvciwgY29udGFjdGxpc3QpID0+IHtcbiAgICAgICAgdGhpcy5zZXRVcExpc3RlbmVycygpXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYXRDb25uZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLmdldFVucmVhZCgpXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgYXN5bmMgZ2V0VW5yZWFkKCkge1xuICAgIGF3YWl0IENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2VcbiAgICAgIC51bnJlYWRDb3VudCgpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChjaGF0VW5yZWFkQ291bnQocmVzdWx0LnRvdGFsKSlcbiAgICAgICAgY29uc29sZS5sb2coJ3VucmVhZCcsIHJlYXN1bHQpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHsgfSk7XG4gIH1cblxuICBhc3luYyBzZXRVcExpc3RlbmVycygpIHtcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5vbk1lc3NhZ2VMaXN0ZW5lciA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbk1lc3NhZ2UodXNlcklkLCBtZXNzYWdlKSB7XG4gICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgdXNlciA9IHVzZXIgPyBKU09OLnBhcnNlKHVzZXIpIDogXCJcIjtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB1c2VySWQsIHVzZXIuY29ubmVjdHljdWJlX3VzZXIuY29ubmVjdHljdWJlX2lkKVxuICAgIGlmICghdXNlciB8fCAhdXNlci5jb25uZWN0eWN1YmVfdXNlciB8fCB1c2VySWQgPT0gdXNlci5jb25uZWN0eWN1YmVfdXNlci5jb25uZWN0eWN1YmVfaWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG1lc3NhZ2UubWVzc2FnZSA9IG1lc3NhZ2UuYm9keVxuICAgIG1lc3NhZ2UuZGV2aWNlX3Rva2VuID0gdXNlci5kZXZpY2VfdG9rZW5cbiAgICBtZXNzYWdlLm5vdGlmID0gdHJ1ZVxuICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG1lc3NhZ2UpKVxuXG4gIH1cblxuICBzZXRVc2VyU2Vzc2lvbih1c2VyU2Vzc2lvbikge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBdXRoU2VydmljZS5DVVJSRU5UX1VTRVJfU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KHVzZXJTZXNzaW9uKSlcbiAgfVxuXG4gIGdldFVzZXJTZXNzaW9uKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoU2VydmljZS5DVVJSRU5UX1VTRVJfU0VTU0lPTl9LRVkpO1xuICB9XG5cbiAgLy8gYXN5bmMgbG9nb3V0KCkge1xuICAvLyAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgLy8gICAgIGF3YWl0IENvbm5lY3R5Q3ViZS5sb2dvdXQoKVxuICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goTG9nT3V0KCkpXG4gIC8vIH1cbn1cblxuY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKVxuXG5PYmplY3QuZnJlZXplKGF1dGhTZXJ2aWNlKVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoU2VydmljZSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHNlYXJjaFVuaXZlcnNpdGllcyB9IGZyb20gJy4uLy4uL2FwaXMvZ2xvYmFsLWFwaSc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgc2ltcGxlU2lnbnVwLCBsb2dpbiwgZ29vZ2xlU2lnbnVwIH0gZnJvbSAnLi4vLi4vYXBpcy9hdXRoLWFwaSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCBWaXNpYmlsaXR5IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5JztcclxuaW1wb3J0IFZpc2liaWxpdHlPZmYgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlPZmYnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtOiB7XHJcbiAgICBwYWRkaW5nOiAnMS41cmVtIDIuMHJlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbjogJzIuNXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW9kYWw6IHtcclxuICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYigxNzcsIDkwLCAxNiknLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlDaXJjdWxhclByb2dyZXNzLWNvbG9yUHJpbWFyeSc6IHtcclxuICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEZvcm0gPSAoeyB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRmaXJzdG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0bGFzdG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1bml2ZXJzaXR5LCBzZXR1bml2ZXJzaXR5XSA9IHVzZVN0YXRlKHsgbmFtZTogJycgfSk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3dwYXNzd29yZCwgc2V0c2hvd3Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29uZmlybV9wYXNzd29yZCwgc2V0Y29uZmlybV9wYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3djb25maXJtX3Bhc3N3b3JkLCBzZXRzaG93Y29uZmlybV9wYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bob25lX25vLCBzZXRwaG9uZV9ub10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VycnMsIHNldGVycnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFt1bml2ZXJzaXRpZXMsIHNldHVuaXZlcnNpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JyYW5jaCwgc2V0YnJhbmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0bG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2J0bmxvYWRpbmcsIHNldGJ0bmxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtiYWNrZHJvcCwgc2V0YmFja2Ryb3BdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Zvcm1lcnJzLCBzZXRmb3JtZXJyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dSZWRpcmVjdCwgc2V0c2hvd1JlZGlyZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Zm9ybWVycnMoW10pO1xyXG4gICAgc3VibWl0U2lnblVwKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0TG9naW4gPSAoKSA9PiB7XHJcbiAgICBzZXRzaG93UmVkaXJlY3QoZmFsc2UpO1xyXG4gICAgc2V0Zm9ybWVycnMoW10pO1xyXG4gICAgc2V0YnRubG9hZGluZyh0cnVlKTtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH07XHJcbiAgICBsb2dpbihkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICBzZXRidG5sb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRmb3JtZXJycyhyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldGJ0bmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuYm9keS51c2VyO1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmJvZHkudXNlci5hcGlfdG9rZW47XHJcbiAgICAgICAgbGV0IGZhdkV2ZW50cyA9IHJlc3BvbnNlLmJvZHkuZmF2RXZlbnRzO1xyXG4gICAgICAgIGxldCBmYXZQcm9kdWN0cyA9IHJlc3BvbnNlLmJvZHkuZmF2UHJvZHVjdHM7XHJcbiAgICAgICAgc2V0TG9naW4odXNlciwgYWNjZXNzVG9rZW4sIGZhdkV2ZW50cywgZmF2UHJvZHVjdHMpO1xyXG4gICAgICAgIHNldHNob3dSZWRpcmVjdCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0U2lnblVwID0gKCkgPT4ge1xyXG4gICAgc2V0c2hvd1JlZGlyZWN0KGZhbHNlKTtcclxuICAgIHNldGJ0bmxvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyBsZXQgdW5pdmVyc2l0eV9pZCA9IHVuaXZlcnNpdGllcy5maW5kKFxyXG4gICAgLy8gICAoaXRlbSkgPT4gaXRlbS5uYW1lID09IHVuaXZlcnNpdHkubmFtZVxyXG4gICAgLy8gKTtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAvLyBmaXJzdF9uYW1lOiBmaXJzdG5hbWUsXHJcbiAgICAgIC8vIGxhc3RfbmFtZTogbGFzdG5hbWUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgLy8gdW5pdmVyc2l0eV9pZDogdW5pdmVyc2l0eV9pZC5pZCxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAvLyBwaG9uZV9udW1iZXI6IHBob25lX25vLFxyXG4gICAgICAvLyBicmFuY2g6IGJyYW5jaCxcclxuICAgIH07XHJcbiAgICBzaW1wbGVTaWdudXAoZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgc2V0YnRubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0Zm9ybWVycnMocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmJvZHkudXNlcjtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5ib2R5LnVzZXIuYXBpX3Rva2VuO1xyXG4gICAgICAgIHNldGJ0bmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGxldCBmYXZFdmVudHMgPSByZXNwb25zZS5ib2R5LmZhdkV2ZW50cztcclxuICAgICAgICBsZXQgZmF2UHJvZHVjdHMgPSByZXNwb25zZS5ib2R5LmZhdlByb2R1Y3RzO1xyXG4gICAgICAgIHNldExvZ2luKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKTtcclxuICAgICAgICBzZXRzaG93UmVkaXJlY3QodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldExvZ2luID0gKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLCBhY2Nlc3NUb2tlbik7XHJcbiAgICBkaXNwYXRjaChhdXRoZW50aWNhdGVkKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKSk7XHJcbiAgICBpZiAodXNlci5pc19jb21wbGV0ZSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlL2VkaXQnKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlU3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiByZXNwb25zZS5wcm9maWxlT2JqLmVtYWlsLFxyXG4gICAgICBnb29nbGVfaWQ6IHJlc3BvbnNlLmdvb2dsZUlkLFxyXG4gICAgfTtcclxuICAgIC8vIHJldHVyblxyXG5cclxuICAgIGdvb2dsZVNpZ251cChkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICBzZXRidG5sb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRmb3JtZXJycyhyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuYm9keS51c2VyO1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmJvZHkudXNlci5hcGlfdG9rZW47XHJcbiAgICAgICAgc2V0YnRubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgbGV0IGZhdkV2ZW50cyA9IHJlc3BvbnNlLmJvZHkuZmF2RXZlbnRzO1xyXG4gICAgICAgIGxldCBmYXZQcm9kdWN0cyA9IHJlc3BvbnNlLmJvZHkuZmF2UHJvZHVjdHM7XHJcbiAgICAgICAgc2V0TG9naW4odXNlciwgYWNjZXNzVG9rZW4sIGZhdkV2ZW50cywgZmF2UHJvZHVjdHMpO1xyXG4gICAgICAgIHNldHNob3dSZWRpcmVjdCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZUdvb2dsZUZhaWx1cmUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vIGFsZXJ0KCdPb3BzISEgdGhlcmUgd2FzIHNvbWUgcHJvYmxlbSB3aGlsZSBsb2dnaW5nIGluLicpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja2Ryb3BDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldGJhY2tkcm9wKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZWZvcm0gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHR5cGUgPT0gJ2xvZ2luJykge1xyXG4gICAgICBzdWJtaXRMb2dpbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZXJyID0ge307XHJcbiAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZCkge1xyXG4gICAgICBlcnIubm9fc2FtZSA9ICd0cnVlJztcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgIGVyci5wd2RfbGVuZ3RoID0gJ3RydWUnO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCF1bml2ZXJzaXR5Lm5hbWUpIHtcclxuICAgIC8vICAgZXJyLnVuaXZlcnNpdHkgPSBcInRydWVcIjtcclxuICAgIC8vIH1cclxuICAgIHNldGVycnMoZXJyKTtcclxuICAgIGxldCBoYXNfZXJyb3IgPSBPYmplY3Qua2V5cyhlcnIpLmxlbmd0aDtcclxuICAgIGlmICghcGFyc2VJbnQoaGFzX2Vycm9yKSkge1xyXG4gICAgICBoYW5kbGVTdWJtaXQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVmb3JtRGF0YSA9IChlLCB0eXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmFsKCdzZXQnICsgdHlwZSArIFwiKCdcIiArIGUudGFyZ2V0LnZhbHVlICsgXCInKVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVbmlTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICBzZXRsb2FkaW5nKHRydWUpO1xyXG4gICAgc2VhcmNoVW5pdmVyc2l0aWVzKHZhbHVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0dW5pdmVyc2l0aWVzKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvdG9Gb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvZm9yZ290LXBhc3N3b3JkJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJnb29nbGVCdG5cIj5cclxuICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEfVxyXG4gICAgICAgICAgYnV0dG9uVGV4dD17XHJcbiAgICAgICAgICAgIHR5cGUgPT0gJ2xvZ2luJyA/ICdMb2dpbiB3aXRoIEdvb2dsZScgOiAnU2lnblVwIHdpdGggR29vZ2xlJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZVN1Y2Nlc3N9XHJcbiAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlRmFpbHVyZX1cclxuICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+b3I8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG9uU3VibWl0PXt2YWxpZGF0ZWZvcm19PlxyXG4gICAgICAgIHt0eXBlID09ICdzaWdudXAnICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwiZmlyc3RuYW1lXCIpfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xhc3RuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJsYXN0bmFtZVwiKX1cclxuICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCAnZW1haWwnKX1cclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7dHlwZSA9PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTm9cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YWx1ZT17cGhvbmVfbm99XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCBcInBob25lX25vXCIpfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXZlcnNpdGllc31cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24ubmFtZSA9PT0gdmFsdWUubmFtZX1cclxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1bml2ZXJzaXR5fVxyXG4gICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVVuaVNlYXJjaH1cclxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwidW5pdmVyc2l0eVwiKX1cclxuICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHNldHVuaXZlcnNpdHkoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBjb2xsZWdlXCJcclxuICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5JbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJhbXMuSW5wdXRQcm9wcy5lbmRBZG9ybm1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICB7ZXJyc1sndW5pdmVyc2l0eSddICYmIChcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCI+UGxlYXNlIHNlbGVjdCBhIHVuaXZlcnNpdHkuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQnJhbmNoXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnJhbmNoXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YWx1ZT17YnJhbmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJicmFuY2hcIil9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJyYW5jaFwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93cGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsICdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldHNob3dwYXNzd29yZCghc2hvd3Bhc3N3b3JkKX0+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIHtzaG93cGFzc3dvcmQgPyA8VmlzaWJpbGl0eSAvPiA6IDxWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0eXBlID09ICdzaWdudXAnICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT17c2hvd2NvbmZpcm1fcGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtX3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgJ2NvbmZpcm1fcGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybV9wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0c2hvd2NvbmZpcm1fcGFzc3dvcmQoIXNob3djb25maXJtX3Bhc3N3b3JkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAge3Nob3djb25maXJtX3Bhc3N3b3JkID8gPFZpc2liaWxpdHkgLz4gOiA8VmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZXJyc1snbm9fc2FtZSddICYmIChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgUGFzc3dvcmQgbXVzdCBtYXRjaCB3aXRoIGNvbmZpcm0gcGFzc3dvcmRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtlcnJzWydwd2RfbGVuZ3RoJ10gJiYgKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiPlBhc3N3b3JkIG11c3QgaGF2ZSA4IGNoYXJhY3RlcnM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2Zvcm1lcnJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgZm9ybWVycnMubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiBrZXk9e2BlcnItJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0eXBlID09ICdsb2dpbicgPyAnTG9naW4nIDogJ1NpZ25VcCd9XHJcblxyXG4gICAgICAgICAge2J0bmxvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXsyMH0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8cCBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXtnb3RvRm9yZ290UGFzc3dvcmR9PlxyXG4gICAgICAgIEZvcmdvdCBwYXNzd29yZCA/IGNsaWNrIDxzcGFuPmhlcmU8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Nob3dSZWRpcmVjdCAmJiAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBSZWRpcmVjdGluZyB0byBwcm9maWxlIHBhZ2UhIXsnICd9XHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXsyMH0gLz5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XHJcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSBcIi4vQXV0aEZvcm1cIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCBBY2NvdW50Qm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiO1xyXG5pbXBvcnQgeyB1bmF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnXHJcbmltcG9ydCBjaXJjbGVjZW50ZXIgZnJvbSAnLi8uLi8uLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9jaXJjbGVDZW50ZXIuc3ZnJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImIC5NdWlUYWItdGV4dENvbG9yUHJpbWFyeS5NdWktc2VsZWN0ZWRcIjoge1xyXG4gICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlUYWJzLWluZGljYXRvclwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpVGFiLXRleHRDb2xvclByaW1hcnlcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNkZmRmZGZcIixcclxuICAgIH0sXHJcbiAgICBcIiYgLk11aUJ1dHRvbi1jb250YWluZWRQcmltYXJ5XCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBMb2dpbjoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG1hcmdpblRvcDogXCI1cmVtXCIsXHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICB3aWR0aDogXCI0NDBweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNDQwcHhcIixcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB6SW5kZXg6IFwiLTFcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBjaXJjbGVjZW50ZXIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06e1xyXG4gICAgICBtYXJnaW5Ub3A6ICcxLjVyZW0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBJbWc6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOntcclxuICAgICAgJyYgaW1nJzp7XHJcbiAgICAgICAgaGVpZ2h0OiAnNjVweCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3JhbmdlOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gIH0sXHJcbiAgdHJhbnNwYXJlbnQ6IHtcclxuICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgIGhlaWdodDogXCIyNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICB9LFxyXG4gIGRlc2t0b3BNZW51OntcclxuICAgICcmIC5NdWlQb3BvdmVyLXBhcGVyJzp7XHJcbiAgICAgIG1pbldpZHRoOiAnMjAwcHgnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCdcclxuICAgIH0sXHJcbiAgICAnJiBsaSc6e1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5jb25zdCBMb2dpbl9SZWdpc3RlciA9ICh7IGlzTW9iaWxlID0gZmFsc2UsIG1vZGFsT3BlbiA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcGVuQU1lbnUsIHNldG9wZW5BTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5CTWVudSwgc2V0b3BlbkJNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbkNNZW51LCBzZXRvcGVuQ01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuRE1lbnUsIHNldG9wZW5ETWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYXRpb24uc2VhcmNoLmluZGV4T2YoXCJzaWdudXA9b3BlblwiKSAhPSAtMSkge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChtb2RhbE9wZW4gIT0gb3Blbikge1xyXG4gICAgICBzZXRPcGVuKG1vZGFsT3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdG9nZ2xlTW9kYWwoKVxyXG4gIH0sIFttb2RhbE9wZW5dKTtcclxuXHJcblxyXG5cclxuICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdG9nZ2xlTW9kYWwpXHJcblxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci51c2VyKTtcclxuICAvLyBjb25zb2xlLmxvZyhcIlVzZXJcIiwgdXNlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbmRleCA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoaW5kZXgpO1xyXG4gIH07XHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICBnb3RvUHJvZmlsZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ290b1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b1Byb2ZpbGVFZGl0ID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9lZGl0XCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b0V2ZW50cyA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvZXZlbnRzXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b1JlcXVlc3RlID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9yZXF1ZXN0c1wiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9GYXZFdmVudHMgPSAoKSA9PntcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvZmF2b3VyaXRlLWV2ZW50c1wiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9GYXZQcm9kdWN0cyA9ICgpID0+e1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9mYXZvdXJpdGUtcHJvZHVjdHNcIik7XHJcbiAgfTtcclxuICBjb25zdCBnb3RvQWRkUmVxdWVzdCA9ICgpID0+e1xyXG4gICAgcm91dGVyLnB1c2goXCIvcG9zdC9yZXF1ZXN0XCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b1Jlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL3Jlc2V0LXBhc3N3b3JkXCIpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICBkaXNwYXRjaCh1bmF1dGhlbnRpY2F0ZWQoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQVN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuQU1lbnUoIW9wZW5BTWVudSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVCU3VibWVudSA9ICgpID0+IHtcclxuICAgIHNldG9wZW5CTWVudSghb3BlbkJNZW51KTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZUNTdWJtZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0b3BlbkNNZW51KCFvcGVuQ01lbnUpO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlRFN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuRE1lbnUoIW9wZW5ETWVudSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEF2YXRhclxyXG4gICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYXV0aC1tZW51XCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXt1c2VyLmZpcnN0X25hbWUgPyBjbGFzc2VzLm9yYW5nZSA6IGNsYXNzZXMudHJhbnNwYXJlbnR9XHJcbiAgICAgID5cclxuICAgICAgICB7dXNlci5maXJzdF9uYW1lID8gdXNlci5maXJzdF9uYW1lLmNoYXJBdCgwKSA6IDxBY2NvdW50Q2lyY2xlSWNvbiAvPn1cclxuICAgICAgPC9BdmF0YXI+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJhdXRoLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIC8vIG9wZW49eyEhbWVudVBvc2l0aW9ufVxyXG4gICAgICAgIC8vIG9uQ2xvc2U9eygpID0+IHNldE1lbnVQb3NpdGlvbih7fSkgfHwgaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgLy8gYW5jaG9yUmVmZXJlbmNlPVwiYW5jaG9yUG9zaXRpb25cIlxyXG4gICAgICAgIC8vIGFuY2hvclBvc2l0aW9uPXttZW51UG9zaXRpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2t0b3BNZW51fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDxMaXN0PiAqL31cclxuICAgICAgICAgIDxNZW51SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlQVN1Ym1lbnV9PlxyXG4gICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgIHtvcGVuQU1lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbkFNZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvUHJvZmlsZX0+VmlldyBQcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9SZXNldFBhc3N3b3JkfT5SZXNldCBQYXNzd29yZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVCU3VibWVudX0+XHJcbiAgICAgICAgICAgIEFkc1xyXG4gICAgICAgICAgICB7b3BlbkJNZW51ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5CTWVudX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b1Byb2ZpbGV9PlB1Ymxpc2hlZCBBZHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b0ZhdlByb2R1Y3RzfT5GYXZvdXJpdGUgUHJvZHVjdHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDxNZW51SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlQ1N1Ym1lbnV9PlxyXG4gICAgICAgICAgICBFdmVudHNcclxuICAgICAgICAgICAge29wZW5DTWVudSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuQ01lbnV9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9FdmVudHN9PlB1Ymxpc2hlZCBFdmVudHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b0ZhdkV2ZW50c30+RmF2b3VyaXRlIEV2ZW50czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEU3VibWVudX0+XHJcbiAgICAgICAgICAgIFJlcXVlc3RzXHJcbiAgICAgICAgICAgIHtvcGVuRE1lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbkRNZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvUmVxdWVzdGV9PlB1Ymxpc2hlZCBSZXF1ZXN0czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvQWRkUmVxdWVzdH0+QWRkIFByb2R1Y3QgUmVxdWVzdDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuXHJcbiAgICAgIDxEaWFsb2dcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJMb2dpblwiIC8+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJTaWduVXBcIiAvPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPFN3aXBlYWJsZVZpZXdzIGluZGV4PXt2YWx1ZX0gb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Mb2dpbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuSW1nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSB3aWR0aD1cIjEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEF1dGhGb3JtIHR5cGU9XCJsb2dpblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxBdXRoRm9ybSB0eXBlPVwic2lnbnVwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbl9SZWdpc3RlcjtcclxuIiwiZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZID0gJ1NFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZJ1xuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCA9IFwiU0VMRUNURURfRklMVEVSX1JFU0VUXCI7XG5leHBvcnQgY29uc3QgUEFHRV9QUk9EVUNUUyA9ICdQQUdFX1BST0RVQ1RTJ1xuXG5leHBvcnQgY29uc3QgVkFMSURfUk9VVEVTPVtcbiAgICB7XG4gICAgICAgIHJvdXRlOididXktcmVxdWVzdCcsXG4gICAgICAgIHRpdGxlOidCdXkgUmVxdWVzdCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzJyxcbiAgICAgICAgdGl0bGU6J1Byb2R1Y3RzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICByb3V0ZToncHJvZHVjdHMtYnV5JyxcbiAgICAgICAgdGl0bGU6J1Byb2R1Y3RzIEJ1eSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzLXNlbGwnLFxuICAgICAgICB0aXRsZTonUHJvZHVjdHMgU2VsbCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzLXNlYXJjaCcsXG4gICAgICAgIHRpdGxlOidQcm9kdWN0cyBTZWFyY2gnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidldmVudHMnLFxuICAgICAgICB0aXRsZTonRXZlbnRzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICByb3V0ZTonZmVlZGJhY2snLFxuICAgICAgICB0aXRsZTonRmVlZGJhY2snXG4gICAgfSxcbl0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vLi4vLi4vc3JjL0xheW91dFwiO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gXCJyZWFjdC1zdGFyLXJhdGluZ3NcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgQ2FyZCwgQ2FyZENvbnRlbnQsIEJveCwgVHlwb2dyYXBoeSwgTGluaywgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBnZXRBbGxGZWVkYmFjayB9IGZyb20gXCIuLy4uLy4uL3NyYy9hcGlzL2dsb2JhbC1hcGlcIjtcblxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhcmQ6IHtcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gIH0sXG4gIGNhcmRCb2R5OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICB9LFxuICBpbWFnZToge1xuICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjFyZW1cIixcbiAgICBmbGV4U2hyaW5rOiBcIjBcIixcbiAgfSxcbiAgcmV2aWV3Q29udGVudDoge1xuICAgIGZsZXg6IFwiMVwiLFxuICB9LFxuICBoZWFkaW5nOntcbiAgICBmb250U2l6ZTogJzNyZW0nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXTp7XG4gICAgICBmb250U2l6ZTogJzIuNXJlbSdcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZGJhY2soKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2xpc3RfcmV2aWV3cywgc2V0bGlzdF9yZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbEZlZWRiYWNrKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0bGlzdF9yZXZpZXdzKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XG4gICAgICAgICAgICBGZWVkYmFja1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3Bvc3QvZmVlZGJhY2snKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIFlvdXIgRmVlZGJhY2tcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7bGlzdF9yZXZpZXdzICYmXG4gICAgICAgICAgICBsaXN0X3Jldmlld3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgbGlzdF9yZXZpZXdzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXN0aW1vbmlhbFNsaWRlfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEJvZHl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5saW5rfSBhbHQ9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJldmlld0NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJSYXRlZENvbG9yPVwiI0ZGQzEwN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFySG92ZXJDb2xvcj1cIiNGRkMxMDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhckRpbWVuc2lvbj1cIjIxcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTdGFycz17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAge2xpc3RfcmV2aWV3cyAmJiBsaXN0X3Jldmlld3MubGVuZ3RoIDw9IDAgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luOjIwfX0+Tm8gZmVlZGJhY2tzIGZvciBub3c8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0kxTXpjaUlHaGxhV2RvZEQwaU5UTTNJaUIyYVdWM1FtOTRQU0l3SURBZ05UTTNJRFV6TnlJK0RRb2dJRHhuSUdsa1BTSkZiR3hwY0hObFh6VmZZMjl3ZVNJZ1pHRjBZUzF1WVcxbFBTSkZiR3hwY0hObElEVWdZMjl3ZVNJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bFBTSjJZWElvTFMxMGFHVnRaU2tpSUhOMGNtOXJaUzEzYVdSMGFEMGlNVEF3SWlCdmNHRmphWFI1UFNJd0xqQTFNU0krRFFvZ0lDQWdQR05wY21Oc1pTQmplRDBpTWpZNExqVWlJR041UFNJeU5qZ3VOU0lnY2owaU1qWTRMalVpSUhOMGNtOXJaVDBpYm05dVpTSXZQZzBLSUNBZ0lEeGphWEpqYkdVZ1kzZzlJakkyT0M0MUlpQmplVDBpTWpZNExqVWlJSEk5SWpJeE9DNDFJaUJtYVd4c1BTSnViMjVsSWk4K0RRb2dJRHd2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMmQxNGJlMTgwNDE4MDQxMzdmNmMxN2JmZmJhYTFhN2UucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ29mdC05ODNjYTBhYzNhNzM3MWY3ZmUxZDgwOGIxMjg3ZTQxMS5wbmdcIjsiLCJleHBvcnQgY29uc3QgQUREX1ZJU0lURUQgPSAnQUREX1ZJU0lURUQnXG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZJU0lURUQgPSAnUkVNT1ZFX1ZJU0lURUQnXG5leHBvcnQgY29uc3QgRkVUQ0hfVklTSVRFRCA9ICdGRVRDSF9WSVNJVEVEJyIsImV4cG9ydCBjb25zdCBBVVRIRU5USUNBVEVEID0gXCJBVVRIRU5USUNBVEVEXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0RFVklDRV9UT0tFTiA9IFwiVVBEQVRFX0RFVklDRV9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSEVOVElDQVRFRCA9IFwiVU5BVVRIRU5USUNBVEVEXCI7IiwiZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSBcIlNIT1dfTU9EQUxcIjtcbmV4cG9ydCBjb25zdCBDTE9TRV9NT0RBTCA9IFwiQ0xPU0VfTU9EQUxcIjtcbiIsImV4cG9ydCBjb25zdCBDSEFUX0NPTk5FQ1RFRCA9IFwiQ0hBVF9DT05ORUNURURcIjtcbmV4cG9ydCBjb25zdCBDSEFUX1JFU0VUID0gXCJDSEFUX1JFU0VUXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9VTlJFQUQgPSBcIkNIQVRfVU5SRUFEXCI7XG5leHBvcnQgY29uc3QgQ0hBVF9VTlJFQURfUkVTRVQgPSBcIkNIQVRfVU5SRUFEX1JFU0VUXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9BVVRIRU5USUNBVEVEXG4gICAgPSBcIkNIQVRfQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVU5BVVRIRU5USUNBVEVEID0gXCJDSEFUX1VOQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVVBEQVRFX1VTRVIgPSBcIkNIQVRfVVBEQVRFX1VTRVJcIjsiLCJleHBvcnQgY29uc3QgRkVUQ0hfRElBTE9HUyA9IFwiRkVUQ0hfRElBTE9HU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9ESUFMT0cgPSBcIkFERF9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBTT1JUX0RJQUxPR1MgPSBcIlNPUlRfRElBTE9HU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ESUFMT0cgPSBcIlVQREFURV9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfRElBTE9HID0gXCJERUxFVEVfRElBTE9HXCI7XG4iLCJleHBvcnQgY29uc3QgU0VUX01FU1NBR0VTID0gXCJTRVRfTUVTU0FHRVNcIjtcbmV4cG9ydCBjb25zdCBQVVNIX01FU1NBR0UgPSBcIlBVU0hfTUVTU0FHRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9BTExfTUVTU0FHRVMgPSBcIkRFTEVURV9BTExfTUVTU0FHRVNcIjtcbmV4cG9ydCBjb25zdCBMQVpZX0ZFVENIX01FU1NBR0VTID0gXCJMQVpZX0ZFVENIX01FU1NBR0VTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX01FU1NBR0VTID0gXCJVUERBVEVfTUVTU0FHRVNcIjtcbiIsImV4cG9ydCBjb25zdCBTRUxFQ1RFRF9ESUFMT0cgPSBcIlNFTEVDVEVEX0RJQUxPR1wiO1xuZXhwb3J0IGNvbnN0IFVOX1NFTEVDVEVEX0RJQUxPRyA9IFwiVU5fU0VMRUNURURfRElBTE9HXCI7XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfVVNFUlMgPSBcIkZFVENIX1VTRVJTXCI7XG5leHBvcnQgY29uc3QgQUREX1VTRVJTID0gXCJBRERfVVNFUlNcIjtcbiIsImltcG9ydCB7IFVOQVVUSEVOVElDQVRFRCwgQVVUSEVOVElDQVRFRCwgVVBEQVRFX0RFVklDRV9UT0tFTiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVkID0gKHVzZXIsIGFjY2Vzc1Rva2VuLHVzZXJGYXZFdmVudHMsdXNlckZhdlByb2R1Y3RzKSA9PiAoe1xuICB0eXBlOiBBVVRIRU5USUNBVEVELFxuICBwYXlsb2FkOiB7IHVzZXIsIGFjY2Vzc1Rva2VuLCB1c2VyRmF2RXZlbnRzICwgdXNlckZhdlByb2R1Y3RzIH0sXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyRGV2aWNlVG9rZW4gPSAodG9rZW4pID0+ICh7XG4gIHR5cGU6IFVQREFURV9ERVZJQ0VfVE9LRU4sXG4gIHBheWxvYWQ6IHsgdG9rZW4gfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdW5hdXRoZW50aWNhdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogVU5BVVRIRU5USUNBVEVELFxufSk7XG4iLCJpbXBvcnQgeyBTSE9XX01PREFMLCBDTE9TRV9NT0RBTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9hdXRoTW9kYWxcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dNb2RhbCA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1dfTU9EQUwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiAoe1xuICB0eXBlOiBDTE9TRV9NT0RBTCxcbn0pO1xuIiwiaW1wb3J0IHsgQ0hBVF9DT05ORUNURUQsIENIQVRfUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdENvbm5lY3RlZFwiO1xuXG5leHBvcnQgY29uc3QgY2hhdENvbm5lY3Rpb24gPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfQ09OTkVDVEVELFxuICAgIC8vIHBheWxvYWQ6IHsgY3VycmVudFVzZXIsIGFjY2Vzc1Rva2VuIH0sXG59KTtcbmV4cG9ydCBjb25zdCBjaGF0UmVzZXQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfUkVTRVQsXG4gICAgLy8gcGF5bG9hZDogeyBjdXJyZW50VXNlciwgYWNjZXNzVG9rZW4gfSxcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgY2hhdFVuYXV0aGVudGljYXRlZCA9ICgpID0+ICh7XG4vLyAgICAgdHlwZTogQ0hBVF9VTkFVVEhFTlRJQ0FURUQsXG4vLyB9KTtcbiIsImltcG9ydCB7IENIQVRfVU5SRUFELCBDSEFUX1VOUkVBRF9SRVNFVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9jaGF0VW5yZWFkXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0VW5yZWFkQ291bnQgPSAoY291bnQpID0+ICh7XG4gICAgdHlwZTogQ0hBVF9VTlJFQUQsXG4gICAgY291bnQ6IGNvdW50XG59KTtcbmV4cG9ydCBjb25zdCBjaGF0VW5yZWFkUmVzZXQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfVU5SRUFEX1JFU0VULFxufSk7XG4iLCJpbXBvcnQgeyBDSEFUX0FVVEhFTlRJQ0FURUQsIENIQVRfVU5BVVRIRU5USUNBVEVELCBDSEFUX1VQREFURV9VU0VSfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVzZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYXRBdXRoZW50aWNhdGVkID0gKGN1cnJlbnRVc2VyLCBhY2Nlc3NUb2tlbikgPT4gKHtcbiAgICB0eXBlOiBDSEFUX0FVVEhFTlRJQ0FURUQsXG4gICAgcGF5bG9hZDogeyBjdXJyZW50VXNlciwgYWNjZXNzVG9rZW4gfSxcbn0pO1xuZXhwb3J0IGNvbnN0IGNoYXRVcGRhdGVVc2VyID0gKGN1cnJlbnRVc2VyLCBhY2Nlc3NUb2tlbikgPT4gKHtcbiAgICB0eXBlOiBDSEFUX1VQREFURV9VU0VSLFxuICAgIHBheWxvYWQ6IHsgY3VycmVudFVzZXIsIGFjY2Vzc1Rva2VuIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoYXRVbmF1dGhlbnRpY2F0ZWQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfVU5BVVRIRU5USUNBVEVELFxufSk7XG4iLCJpbXBvcnQge1xuICBGRVRDSF9ESUFMT0dTLFxuICBBRERfRElBTE9HLFxuICBTT1JUX0RJQUxPR1MsXG4gIFVQREFURV9ESUFMT0csXG4gIERFTEVURV9ESUFMT0csXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9kaWFsb2dzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERpYWxvZ3MgPSAoZGlhbG9ncykgPT4gKHtcbiAgdHlwZTogRkVUQ0hfRElBTE9HUyxcbiAgZGlhbG9nczogZGlhbG9ncyxcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURpYWxvZyA9IChkaWFsb2cpID0+ICh7IHR5cGU6IFVQREFURV9ESUFMT0csIGRpYWxvZyB9KTtcbmV4cG9ydCBjb25zdCBhZGROZXdEaWFsb2cgPSAoZGlhbG9nKSA9PiAoeyB0eXBlOiBBRERfRElBTE9HLCBkaWFsb2c6IGRpYWxvZyB9KTtcbmV4cG9ydCBjb25zdCBzb3J0RGlhbG9ncyA9IChtZXNzYWdlLCBjb3VudCkgPT4gKHtcbiAgdHlwZTogU09SVF9ESUFMT0dTLFxuICBtZXNzYWdlOiBtZXNzYWdlLFxuICBjb3VudDogY291bnQsXG59KTtcbmV4cG9ydCBjb25zdCBkZWxldGVEaWFsb2cgPSAoZGlhbG9nSWQpID0+ICh7IHR5cGU6IERFTEVURV9ESUFMT0csIGRpYWxvZ0lkIH0pO1xuIiwiaW1wb3J0IHtcbiAgU0VUX01FU1NBR0VTLFxuICBQVVNIX01FU1NBR0UsXG4gIERFTEVURV9BTExfTUVTU0FHRVMsXG4gIExBWllfRkVUQ0hfTUVTU0FHRVMsXG4gIFVQREFURV9NRVNTQUdFUyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRNZXNzYWdlcyA9IChtc2dzLCBkaWFsb2cpID0+ICh7XG4gIHR5cGU6IFNFVF9NRVNTQUdFUyxcbiAgbXNncyxcbiAgZGlhbG9nXG59KTtcbmV4cG9ydCBjb25zdCBsYXp5RmV0Y2hNZXNzYWdlcyA9IChkaWFsb2dJZCwgaGlzdG9yeSkgPT4gKHtcbiAgdHlwZTogTEFaWV9GRVRDSF9NRVNTQUdFUyxcbiAgZGlhbG9nSWQsXG4gIGhpc3RvcnksXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IChkaWFsb2dJZCwgbXNnSWQsIG1zZykgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01FU1NBR0VTLFxuICBkaWFsb2dJZCxcbiAgbXNnSWQsXG4gIG1zZyxcbn0pO1xuZXhwb3J0IGNvbnN0IHB1c2hNZXNzYWdlID0gKCBtc2cpID0+ICh7XG4gIHR5cGU6IFBVU0hfTUVTU0FHRSxcbiAgbXNnXG59KTtcbmV4cG9ydCBjb25zdCBkZWxldGVBbGxNZXNzYWdlcyA9ICgpID0+ICh7XG4gIHR5cGU6IERFTEVURV9BTExfTUVTU0FHRVMsXG59KTtcbiIsImltcG9ydCB7XG4gIFNFTEVDVEVEX0RJQUxPRyxcbiAgVU5fU0VMRUNURURfRElBTE9HLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvc2VsZWN0ZWREaWFsb2dcIjtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkRGlhbG9nID0gKGRpYWxvZykgPT4gKHsgdHlwZTogU0VMRUNURURfRElBTE9HLCBkaWFsb2cgfSk7XG5leHBvcnQgY29uc3QgdW5TZWxlY3RlZERpYWxvZyA9IChkaWFsb2cpID0+ICh7XG4gIHR5cGU6IFVOX1NFTEVDVEVEX0RJQUxPRyxcbiAgZGlhbG9nLFxufSk7IiwiaW1wb3J0IHtcbiAgRkVUQ0hfVVNFUlMsXG4gIEFERF9VU0VSU1xufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvdXNlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSB1c2VycyA9PiAoeyB0eXBlOiBGRVRDSF9VU0VSUywgdXNlcnMgfSlcbmV4cG9ydCBjb25zdCBhZGRVc2VycyA9IHVzZXJzID0+ICh7IHR5cGU6IEFERF9VU0VSUywgdXNlcnMgfSkiLCJleHBvcnQgY29uc3QgQlROX1RZUEUgPSB7XG4gIERJQUxPRzogMSxcbiAgQ09OVEFDVFM6IDIsXG4gIENSRUFURV9HUk9VUDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IERJQUxPR19UWVBFID0ge1xuICBQUklWQVRFOiAzLFxuICBHUk9VUDogMixcbiAgQlJPQURDQVNUOiAxLFxuICBQVUJMSUNfQ0hBTk5FTDogNFxufSIsImltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSBcImNvbm5lY3R5Y3ViZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VMaW5rRnJvbVVJRCh1aWQpIHtcbiAgaWYgKCF1aWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gQ29ubmVjdHlDdWJlLnN0b3JhZ2UucHJpdmF0ZVVybCh1aWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyYXRpb25BdHRhY2htZW50KGZpbGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgdWlkOiBmaWxlLnVpZCxcbiAgICB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSxcbiAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDQwMCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdldEltYWdlTGlua0Zyb21VSUQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKGRpYWxvZykge1xuICAgIHRoaXMuaWQgPSBkaWFsb2cuX2lkIHx8IGRpYWxvZy5pZFxuICAgIHRoaXMudHlwZSA9IGRpYWxvZy50eXBlXG4gICAgdGhpcy54bXBwX3Jvb21famlkID0gZGlhbG9nLnhtcHBfcm9vbV9qaWRcbiAgICB0aGlzLnhtcHBfdHlwZSA9IGRpYWxvZy50eXBlID09PSAzID8gJ2NoYXQnIDogZGlhbG9nLnR5cGUgPyAnZ3JvdXBjaGF0JyA6ICcnXG4gICAgdGhpcy5uYW1lID0gZGlhbG9nLm5hbWVcbiAgICB0aGlzLnBob3RvID0gRGlhbG9nLmdldEF2YXRhclVybChkaWFsb2cucGhvdG8pXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRpYWxvZy5kZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkaWFsb2cueG1wcF9yb29tX2ppZCB8fCBkaWFsb2cucm9vbV9qaWRcbiAgICB0aGlzLnVzZXJfaWQgPSBkaWFsb2cudXNlcl9pZFxuICAgIHRoaXMuYWRtaW5zX2lkcyA9IGRpYWxvZy5hZG1pbnNfaWRzXG4gICAgdGhpcy5vY2N1cGFudHNfaWRzID0gZGlhbG9nLm9jY3VwYW50c19pZHNcbiAgICB0aGlzLnVwZGF0ZWRfZGF0ZSA9IERhdGUucGFyc2UoZGlhbG9nLnVwZGF0ZWRfYXQpIHx8IERhdGUubm93KClcbiAgICB0aGlzLmxhc3RfbWVzc2FnZV9kYXRlX3NlbnQgPSBkaWFsb2cubGFzdF9tZXNzYWdlX2RhdGVfc2VudCB8fCBEYXRlLnBhcnNlKGRpYWxvZy51cGRhdGVkX2F0KSAvIDEwMDAgfHwgRGF0ZS5wYXJzZShkaWFsb2cuY3JlYXRlZF9hdCkgLyAxMDAwXG4gICAgdGhpcy5sYXN0X21lc3NhZ2UgPSBkaWFsb2cubGFzdF9tZXNzYWdlIHx8ICcnXG4gICAgdGhpcy5sYXN0X21lc3NhZ2VfaWQgPSBkaWFsb2cubGFzdF9tZXNzYWdlX2lkXG4gICAgdGhpcy5sYXN0X21lc3NhZ2VfdXNlcl9pZCA9IGRpYWxvZy5sYXN0X21lc3NhZ2VfdXNlcl9pZFxuICAgIHRoaXMudW5yZWFkX21lc3NhZ2VzX2NvdW50ID0gZGlhbG9nLnVucmVhZF9tZXNzYWdlc19jb3VudFxuICAgIHRoaXMudW5yZWFkX21lc3NhZ2VzX2lkcyA9IGRpYWxvZy51bnJlYWRfbWVzc2FnZXNfaWRzXG4gICAgdGhpcy5waW5uZWRfbWVzc2FnZXNfaWRzID0gZGlhbG9nLnBpbm5lZF9tZXNzYWdlc19pZHNcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdmF0YXJVcmwoYXZhdGFyVUlEKSB7XG4gICAgcmV0dXJuIGdldEltYWdlTGlua0Zyb21VSUQoYXZhdGFyVUlEKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZUxpbmtGcm9tVUlEIH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuXG5leHBvcnQgY29uc3QgU1RBVFVTX1BFTkRJTkcgPSAwXG5leHBvcnQgY29uc3QgU1RBVFVTX1NFTlQgPSAxXG5leHBvcnQgY29uc3QgU1RBVFVTX0RFTElWRVJFRCA9IDJcbmV4cG9ydCBjb25zdCBTVEFUVVNfUkVBRCA9IDNcblxuZXhwb3J0IGNvbnN0IEdST1VQX0NIQVRfQUxFUlRfVFlQRSA9IHtcbiAgQ1JFQVRFOiBcImNyZWF0ZVwiXG59XG5cbmNvbnN0IGRlZmF1bHRNZXNzYWdlID0ge1xuICBpZDogJycsXG4gIGJvZHk6ICcnLFxuICBkaWFsb2dfaWQ6ICcnLFxuICBkYXRlX3NlbnQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICBhdHRhY2htZW50czogbnVsbCxcbiAgc2VuZGVyX2lkOiBudWxsLFxuICBzZW5kZXI6IG51bGxcbn1cblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihtc2cgPSBkZWZhdWx0TWVzc2FnZSwgY3VycmVudFVzZXIpIHtcbiAgICB0aGlzLmlkID0gbXNnLmlkIHx8IG1zZy5faWRcbiAgICB0aGlzLmJvZHkgPSBtc2cuYm9keSB8fCBtc2cubWVzc2FnZVxuICAgIHRoaXMuZ3JvdXBfY2hhdF9hbGVydF90eXBlID0gbXNnLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSB8fCBudWxsXG4gICAgdGhpcy5kaWFsb2dfaWQgPSBtc2cuY2hhdF9kaWFsb2dfaWQgfHwgKG1zZy5leHRlbnNpb24gJiYgbXNnLmV4dGVuc2lvbi5kaWFsb2dfaWQpXG4gICAgdGhpcy5kYXRlX3NlbnQgPSBtc2cuZGF0ZV9zZW50IHx8IChtc2cuZXh0ZW5zaW9uICYmIG1zZy5leHRlbnNpb24uZGF0ZV9zZW50KSB8fCBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgIHRoaXMuc2VuZF9zdGF0ZSA9IE1lc3NhZ2UuZ2V0U2VuZFN0YXRlKG1zZywgY3VycmVudFVzZXIpXG4gICAgdGhpcy5hdHRhY2htZW50ID0gTWVzc2FnZS5nZXRBdHRhY2htZW50KG1zZylcbiAgICB0aGlzLnNlbmRlcl9pZCA9IG1zZy5zZW5kZXJfaWQgfHwgKG1zZy5leHRlbnNpb24gJiYgbXNnLmV4dGVuc2lvbi5zZW5kZXJfaWQpXG4gICAgdGhpcy5zZW5kZXIgPSBtc2cuc2VuZGVyX2lkXG4gIH1cblxuICBzdGF0aWMgZ2V0QXR0YWNobWVudChtc2cpIHtcbiAgICBpZiAobXNnLmF0dGFjaG1lbnRzICYmIG1zZy5hdHRhY2htZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhdHRhY2htZW50cyA9IHsgLi4ubXNnLmF0dGFjaG1lbnRzWzBdIH1cbiAgICAgIGNvbnN0IHBhcnNlTGluayA9IGdldEltYWdlTGlua0Zyb21VSUQobXNnLmF0dGFjaG1lbnRzWzBdLnVpZClcbiAgICAgIGF0dGFjaG1lbnRzLnVybCA9IHBhcnNlTGlua1xuICAgICAgcmV0dXJuIFthdHRhY2htZW50c11cbiAgICB9IGVsc2UgaWYgKG1zZz8uZXh0ZW5zaW9uPy5hdHRhY2htZW50cyAmJiBtc2cuZXh0ZW5zaW9uLmF0dGFjaG1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGF0dGFjaG1lbnRzID0geyAuLi5tc2cuZXh0ZW5zaW9uLmF0dGFjaG1lbnRzWzBdIH1cbiAgICAgIGNvbnN0IHBhcnNlTGluayA9IGdldEltYWdlTGlua0Zyb21VSUQobXNnLmV4dGVuc2lvbi5hdHRhY2htZW50c1swXS51aWQpXG4gICAgICBhdHRhY2htZW50cy51cmwgPSBwYXJzZUxpbmtcbiAgICAgIHJldHVybiBbYXR0YWNobWVudHNdXG4gICAgfSBlbHNlIHJldHVybiBudWxsXG4gIH1cblxuICBzdGF0aWMgZ2V0U2VuZFN0YXRlKG1zZywgY3VycmVudFVzZXIpIHtcbiAgICBpZiAobXNnPy5yZWFkX2lkcz8uZmluZChfaWQgPT4gX2lkICE9PSBjdXJyZW50VXNlcikpIHtcbiAgICAgIHJldHVybiBTVEFUVVNfUkVBRFxuICAgIH1cbiAgICBpZiAobXNnPy5kZWxpdmVyZWRfaWRzPy5maW5kKG1zZyA9PiBtc2cuZGVsaXZlcmVkX2lkcyAhPT0gY3VycmVudFVzZXIpKSB7XG4gICAgICByZXR1cm4gU1RBVFVTX0RFTElWRVJFRFxuICAgIH1cbiAgICByZXR1cm4gU1RBVFVTX1BFTkRJTkdcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGYWtlTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKG1zZykge1xuICAgIHRoaXMuYXR0YWNobWVudCA9IG1zZy5leHRlbnNpb24uYXR0YWNobWVudHNcbiAgICB0aGlzLmJvZHkgPSBtc2cuYm9keVxuICAgIHRoaXMuZGF0ZV9zZW50ID0gbXNnLmV4dGVuc2lvbi5kYXRlX3NlbnRcbiAgICB0aGlzLmRpYWxvZ19pZCA9IG1zZy5leHRlbnNpb24uZGlhbG9nX2lkXG4gICAgdGhpcy5pZCA9IG1zZy5pZFxuICAgIHRoaXMuc2VuZF9zdGF0ZSA9IDBcbiAgICB0aGlzLnNlbmRlciA9IHVuZGVmaW5lZFxuICAgIHRoaXMuc2VuZGVyX2lkID0gbXNnLmV4dGVuc2lvbi5zZW5kZXJfaWRcbiAgfVxufSIsImltcG9ydCB7IGdldEltYWdlTGlua0Zyb21VSUQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZFxuICAgIHRoaXMuYXZhdGFyID0gVXNlci5nZXRBdmF0YXJVcmwodXNlci5hdmF0YXIpXG4gICAgdGhpcy5sb2dpbiA9IHVzZXIubG9naW5cbiAgICB0aGlzLmN1c3RvbV9kYXRhID0gdXNlci5jdXN0b21fZGF0YSA/IHVzZXIuY3VzdG9tX2RhdGEgOiAnJ1xuICAgIHRoaXMuZnVsbF9uYW1lID0gdXNlci5mdWxsX25hbWUgfHwgdXNlci5sb2dpblxuICAgIHRoaXMucGhvbmUgPSB1c2VyLnBob25lXG4gICAgdGhpcy5jcmVhdGVkX2F0ID0gdXNlci5jcmVhdGVkX2F0XG4gICAgdGhpcy51cGRhdGVkX2F0ID0gdXNlci51cGRhdGVkX2F0XG4gICAgdGhpcy5sYXN0X3JlcXVlc3RfYXQgPSB1c2VyLmxhc3RfcmVxdWVzdF9hdFxuICB9XG4gIHN0YXRpYyBnZXRBdmF0YXJVcmwoYXZhdGFyVUlEKSB7XG4gICAgcmV0dXJuIGdldEltYWdlTGlua0Zyb21VSUQoYXZhdGFyVUlEKVxuICB9XG59XG4iLCJpbXBvcnQgeyBBRERfVklTSVRFRCwgUkVNT1ZFX1ZJU0lURUQsIEZFVENIX1ZJU0lURUQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvUGFnZVZpc2l0ZWRcIjtcblxubGV0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVklTSVRFRDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyciwgYWN0aW9uLnBheWxvYWQuaXRlbSlcbiAgICAgICAgICAgIGxldCBhcnIgPSBzdGF0ZVxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLml0ZW0pIHtcbiAgICAgICAgICAgICAgICBhcnIgPSBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkLml0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuXG4gICAgICAgIGNhc2UgUkVNT1ZFX1ZJU0lURUQ6XG4gICAgICAgICAgICBsZXQgYXJyMiA9IHN0YXRlXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaXRlbSkge1xuICAgICAgICAgICAgICAgIGFycjIgPSBzdGF0ZS5wb3AoYWN0aW9uLnBheWxvYWQuaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVOQVVUSEVOVElDQVRFRCwgQVVUSEVOVElDQVRFRCwgVVBEQVRFX0RFVklDRV9UT0tFTn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2F1dGhcIjtcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSdcbmltcG9ydCB7IFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCwgU0VMRUNURURfRklMVEVSX1VOSVZFUlNJVFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge30sXG4gIGFjY2Vzc1Rva2VuOiBcIlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVVUSEVOVElDQVRFRDpcbiAgICAgIGNvbnN0IHsgdXNlciwgYWNjZXNzVG9rZW4sIHVzZXJGYXZFdmVudHMsIHVzZXJGYXZQcm9kdWN0cyB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZFdmVudHNcIiwgdXNlckZhdkV2ZW50cyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZQcm9kdWN0c1wiLCB1c2VyRmF2UHJvZHVjdHMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1JFU0VULCBmYWxzZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgfTtcbiAgICBjYXNlIFVQREFURV9ERVZJQ0VfVE9LRU46XG4gICAgICBsZXQgeyB0b2tlbiB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIGxldCB1ID0gc3RhdGUudXNlclxuICAgICAgdS5kZXZpY2VfdG9rZW4gPSB0b2tlblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHUpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB1LFxuXG4gICAgICB9O1xuXG5cbiAgICBjYXNlIFVOQVVUSEVOVElDQVRFRDpcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBcIlwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzVG9rZW5cIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZFdmVudHNcIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZQcm9kdWN0c1wiLCBcIlwiKTtcbiAgICAgIGxvY2FsZm9yYWdlLnJlbW92ZUl0ZW0oJ2ZjbV90b2tlbicpXG4gICAgICBsb2NhbGZvcmFnZS5yZW1vdmVJdGVtKCdmY21fdG9rZW5fdXNlcicpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSwgJycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1JFU0VULCBmYWxzZSk7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCBkYXRhID0gXCJcIjtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV0IHVzZXJEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgICAgICBsZXQgdXNlckZhdkV2ZW50cyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJGYXZFdmVudHNcIik7XG4gICAgICAgIGxldCB1c2VyRmF2UHJvZHVjdHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRmF2UHJvZHVjdHNcIik7XG4gICAgICAgIGFjY2Vzc1Rva2VuRGF0YSA9XG4gICAgICAgICAgYWNjZXNzVG9rZW5EYXRhICYmIGFjY2Vzc1Rva2VuRGF0YSAhPSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGFjY2Vzc1Rva2VuRGF0YVxuICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICBpZiAodXNlckRhdGEgJiYgYWNjZXNzVG9rZW5EYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHVzZXJEYXRhLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuRGF0YSxcbiAgICAgICAgICAgIHVzZXJGYXZFdmVudHM6IHVzZXJGYXZFdmVudHMsXG4gICAgICAgICAgICB1c2VyRmF2UHJvZHVjdHM6IHVzZXJGYXZQcm9kdWN0c1xuXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiBpbml0aWFsU3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNIT1dfTU9EQUwsIENMT1NFX01PREFMIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2F1dGhNb2RhbFwiO1xuXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgQ0xPU0VfTU9EQUw6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9DT05ORUNURUQsIENIQVRfUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdENvbm5lY3RlZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQ0hBVF9DT05ORUNURUQ6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBjYXNlIENIQVRfUkVTRVQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDSEFUX1VOUkVBRF9SRVNFVCwgQ0hBVF9VTlJFQUQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVucmVhZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IDAsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDSEFUX1VOUkVBRDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhY3Rpb24uY291bnQpO1xuXG4gICAgICAgIGNhc2UgQ0hBVF9VTlJFQURfUkVTRVQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9BVVRIRU5USUNBVEVELCBDSEFUX1VOQVVUSEVOVElDQVRFRCwgQ0hBVF9VUERBVEVfVVNFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9jaGF0VXNlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdXJyZW50VXNlciA9IG51bGwsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDSEFUX0FVVEhFTlRJQ0FURUQ6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50VXNlclxuXG4gICAgICAgIGNhc2UgQ0hBVF9VUERBVEVfVVNFUjoge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihjdXJyZW50VXNlci51c2VyLCBhY3Rpb24ucGF5bG9hZC5jdXJyZW50VXNlcilcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyLnVzZXIgPSByZXN1bHRcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRVc2VyIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIENIQVRfVU5BVVRIRU5USUNBVEVEOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50VXNlcjtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gIEZFVENIX0RJQUxPR1MsXG4gIEFERF9ESUFMT0csXG4gIFNPUlRfRElBTE9HUyxcbiAgVVBEQVRFX0RJQUxPRyxcbiAgREVMRVRFX0RJQUxPRyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgdXBkYXRlRGlhbG9nLCBzb3J0ZWREaWFsb2cgfSBmcm9tIFwiLi9yZWR1Y2VyLWZ1bmN0aW9uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGRpYWxvZ3MgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0RJQUxPR1M6XG4gICAgICByZXR1cm4gYWN0aW9uLmRpYWxvZ3M7XG5cbiAgICBjYXNlIFVQREFURV9ESUFMT0c6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVwZGF0ZURpYWxvZyhhY3Rpb24sIGRpYWxvZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9ESUFMT0c6XG4gICAgICByZXR1cm4gW2FjdGlvbi5kaWFsb2csIC4uLmRpYWxvZ3NdO1xuXG4gICAgY2FzZSBTT1JUX0RJQUxPR1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRlZERpYWxvZyhhY3Rpb24sIGRpYWxvZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESUFMT0c6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRpYWxvZ3MuZmlsdGVyKChkaWFsb2cpID0+IGRpYWxvZy5pZCAhPT0gYWN0aW9uLmRpYWxvZ0lkKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaWFsb2dzO1xuICB9XG59O1xuXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBhdXRoX3VzZXIgZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IGF1dGhfbW9kYWwgZnJvbSBcIi4vYXV0aE1vZGFsXCI7XG5pbXBvcnQgY2hhdF91c2VyIGZyb20gXCIuL2NoYXRVc2VyXCI7XG5pbXBvcnQgZGlhbG9ncyBmcm9tIFwiLi9kaWFsb2dzXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBzZWxlY3RlZERpYWxvZyBmcm9tIFwiLi9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IHBhZ2VWaXNpdGVkIGZyb20gXCIuL1BhZ2VWaXNpdGVkXCI7XG5pbXBvcnQgY2hhdEF1dGhlbnRpY2F0ZWQgZnJvbSBcIi4vY2hhdFVzZXJcIjtcbmltcG9ydCBjaGF0Q29ubmVjdGVkIGZyb20gXCIuL2NoYXRDb25uZWN0ZWRcIjtcbmltcG9ydCBjaGF0VW5yZWFkQ291bnQgZnJvbSBcIi4vY2hhdFVucmVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoX3VzZXIsXG4gIGF1dGhfbW9kYWwsXG4gIGNoYXRfdXNlcixcbiAgZGlhbG9ncyxcbiAgbWVzc2FnZXMsXG4gIHNlbGVjdGVkRGlhbG9nLFxuICBwYWdlVmlzaXRlZCxcbiAgY2hhdEF1dGhlbnRpY2F0ZWQsXG4gIGNoYXRDb25uZWN0ZWQsXG4gIGNoYXRVbnJlYWRDb3VudFxufSk7XG4iLCJpbXBvcnQge1xuICBQVVNIX01FU1NBR0UsXG4gIFNFVF9NRVNTQUdFUyxcbiAgREVMRVRFX0FMTF9NRVNTQUdFUyxcbiAgTEFaWV9GRVRDSF9NRVNTQUdFUyxcbiAgVVBEQVRFX01FU1NBR0VTLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNFTEVDVEVEX0RJQUxPRyB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tIFwiY29ubmVjdHljdWJlXCI7XG5cbmltcG9ydCB7IGxhenlGZXRjaE1lc3NhZ2VzLCB1cGRhdGVTdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3JlZHVjZXItZnVuY3Rpb25cIjtcblxubGV0IGluaXRpYWxfc3RhdGUgPSB7XG4gIGRpYWxvZzoge30sXG4gIG1lc3NhZ2VzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAobWVzc2FnZXMgPSBpbml0aWFsX3N0YXRlLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUVTU0FHRVM6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBhY3Rpb24ubXNncztcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGFjdGlvbi5kaWFsb2c7XG4gICAgICByZXR1cm4geyBkaWFsb2c6IGRpYWxvZywgbWVzc2FnZXM6IG1zZ3MgfTtcbiAgICB9XG5cbiAgICAvLyBjYXNlIFNFTEVDVEVEX0RJQUxPRzoge1xuICAgIC8vICAgY29uc29sZS5sb2coYWN0aW9uKVxuICAgIC8vICAgY29uc3QgZGlhbG9nID0gYWN0aW9uLmRpYWxvZztcbiAgICAvLyAgIHJldHVybiB7IC4uLm1lc3NhZ2VzLCBkaWFsb2c6IGRpYWxvZyB9O1xuICAgIC8vIH1cblxuXG4gICAgY2FzZSBQVVNIX01FU1NBR0U6IHtcbiAgICAgIGxldCBtc2cgPSBhY3Rpb24ubXNnXG4gICAgICBpZiAobXNnICYmIG1zZy5kaWFsb2dfaWQgPT0gbWVzc2FnZXMuZGlhbG9nLmNvbm5lY3R5X2RpYWxvZ19pZCkge1xuICAgICAgICBpZiAobXNnLm5vdGlmKSB7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgcmVhZDogMSxcbiAgICAgICAgICAgIGNoYXRfZGlhbG9nX2lkOiBtc2cuZGlhbG9nX2lkXG4gICAgICAgICAgfTtcbiAgICAgICAgICBDb25uZWN0eUN1YmUuY2hhdC5tZXNzYWdlXG4gICAgICAgICAgICAudXBkYXRlKFwiXCIsIHBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMubWVzc2FnZXMuY29uY2F0KGFjdGlvbi5tc2cpO1xuICAgICAgICByZXR1cm4geyAuLi5tZXNzYWdlcywgbWVzc2FnZXM6IG1zZ3MgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcbiAgICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBhcHBfaWQ6IHByb2Nlc3MuZW52Lk9ORVNJR05BTF9BUFBfSUQsXG4gICAgICAgICAgICBjb250ZW50czogeyBcImVuXCI6IFwiWW91IHJlY2lldmVkIGEgbmV3IG1lc3NhZ2UuXCIgfSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgeyBcImZpZWxkXCI6IFwidGFnXCIsIFwia2V5XCI6IFwidXNlclwiLCBcInJlbGF0aW9uXCI6IFwiPVwiLCBcInZhbHVlXCI6IHVzZXJEYXRhLmlkIH0sXG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vbmVzaWduYWwuY29tL2FwaS92MS9ub3RpZmljYXRpb25zXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgXCIgKyBwcm9jZXNzLmVudi5PTkVTSUdOQUxfUkVTVF9LRVksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLFxuICAgICAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBSZXF1ZXN0IHJlamVjdGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlRGF0YXNhZHNhZFwiLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwicmVzcG9uc2VEYXRhc2Fkc2FkXCIsIGVycm9yKSk7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgICByZXR1cm4gbWVzc2FnZXNcblxuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0FMTF9NRVNTQUdFUzoge1xuXG4gICAgICByZXR1cm4gaW5pdGlhbF9zdGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGluaXRpYWxfc3RhdGU7XG4gIH1cbn07XG4iLCJjb25zdCB1cGRhdGVEaWFsb2cgPSAoYWN0aW9uLCBkaWFsb2dzKSA9PiB7XG4gIGNvbnN0IGFscmVhZHlVcGRhdGVkRGlhbG9nID0gZGlhbG9ncy5tYXAoKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gYWN0aW9uLmRpYWxvZy5pZCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZWxlbSwgYWN0aW9uLmRpYWxvZyk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcbiAgcmV0dXJuIFsuLi5hbHJlYWR5VXBkYXRlZERpYWxvZ107XG59O1xuXG5jb25zdCBsYXp5RmV0Y2hNZXNzYWdlcyA9IChhY3Rpb24sIG1lc3NhZ2VzKSA9PiB7XG4gIGNvbnN0IG5ld0FyciA9IGFjdGlvbi5oaXN0b3J5LnJldmVyc2UoKS5jb25jYXQobWVzc2FnZXNbYWN0aW9uLmRpYWxvZ0lkXSk7XG4gIHJldHVybiB7IC4uLnt9LCBbYWN0aW9uLmRpYWxvZ0lkXTogbmV3QXJyIH07XG59O1xuXG5jb25zdCBzb3J0ZWREaWFsb2cgPSAoYWN0aW9uLCBkaWFsb2dzKSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgY291bnQgfSA9IGFjdGlvbjtcbiAgY29uc3QgdXBkYXRlRGlhbG9nID0gZGlhbG9ncy5tYXAoKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gbWVzc2FnZS5kaWFsb2dfaWQpIHtcbiAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgbGFzdF9tZXNzYWdlOiBtZXNzYWdlLmJvZHksXG4gICAgICAgIGxhc3RfbWVzc2FnZV9kYXRlX3NlbnQ6IG1lc3NhZ2UuZGF0ZV9zZW50LFxuICAgICAgICB1cGRhdGVkX2RhdGU6IG1lc3NhZ2UuZGF0ZV9zZW50LFxuICAgICAgICB1bnJlYWRfbWVzc2FnZXNfY291bnQ6IGNvdW50XG4gICAgICAgICAgPyAoZWxlbS51bnJlYWRfbWVzc2FnZXNfY291bnQgKz0gMSlcbiAgICAgICAgICA6IGVsZW0udW5yZWFkX21lc3NhZ2VzX2NvdW50LFxuICAgICAgfTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGVsZW0sIG5ld09iaik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcblxuICBjb25zdCBzb3J0ID0gKGl0ZW1zLCBpbnZlcnRlZCA9IGZhbHNlKSA9PlxuICAgIGl0ZW1zLnNvcnQoKGl0ZW1BLCBpdGVtQikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgbmV3IERhdGUoaXRlbUIubGFzdF9tZXNzYWdlX2RhdGVfc2VudCAqIDEwMDApIC1cbiAgICAgICAgbmV3IERhdGUoaXRlbUEubGFzdF9tZXNzYWdlX2RhdGVfc2VudCAqIDEwMDApO1xuICAgICAgcmV0dXJuIGludmVydGVkID8gIXJlc3VsdCA6IHJlc3VsdDtcbiAgICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBzb3J0KHVwZGF0ZURpYWxvZyk7XG5cbiAgcmV0dXJuIFsuLi5yZXN1bHRdO1xufTtcblxuY29uc3QgdXBkYXRlU3RhdHVzTWVzc2FnZXMgPSAoYWN0aW9uLCBtZXNzYWdlKSA9PiB7XG4gIGlmIChPYmplY3Qua2V5cyhtZXNzYWdlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIGNvbnN0IG5ld01lc3NhZ2VzID0gbWVzc2FnZVthY3Rpb24uZGlhbG9nSWRdLm1hcCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gYWN0aW9uLm1zZ0lkKSB7XG4gICAgICBjb25zdCB1cGRhdGVTZW5kU3RhdHVzID0geyAuLi5lbGVtIH07XG4gICAgICB1cGRhdGVTZW5kU3RhdHVzLnNlbmRfc3RhdGUgPSBhY3Rpb24ubXNnLnNlbmRfc3RhdGU7XG4gICAgICByZXR1cm4geyAuLi51cGRhdGVTZW5kU3RhdHVzIH07XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSB7IC4uLm1lc3NhZ2UsIFthY3Rpb24uZGlhbG9nSWRdOiBuZXdNZXNzYWdlcyB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBmZXRjaFVzZXJzID0gKGFjdGlvbiwgdXNlcnMpID0+IHtcbiAgY29uc3QgbmV3T2JqVXNlcnMgPSB7fTtcbiAgYWN0aW9uLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXdPYmpVc2Vyc1tlbGVtLmlkXSA9IGVsZW07XG4gIH0pO1xuICByZXR1cm4geyAuLi51c2VycywgLi4ubmV3T2JqVXNlcnMgfTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZURpYWxvZyxcbiAgbGF6eUZldGNoTWVzc2FnZXMsXG4gIHNvcnRlZERpYWxvZyxcbiAgdXBkYXRlU3RhdHVzTWVzc2FnZXMsXG4gIGZldGNoVXNlcnMsXG59O1xuIiwiaW1wb3J0IHtcbiAgU0VMRUNURURfRElBTE9HLFxuICBVTl9TRUxFQ1RFRF9ESUFMT0csXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9zZWxlY3RlZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoZGlhbG9nID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFTEVDVEVEX0RJQUxPRzoge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLmRpYWxvZyB9O1xuICAgIH1cblxuICAgIGNhc2UgVU5fU0VMRUNURURfRElBTE9HOiB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaWFsb2c7XG4gIH1cbn07XG4iLCJpbXBvcnQgQ29ubmVjdHlDdWJlIGZyb20gJ2Nvbm5lY3R5Y3ViZSdcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vbW9kZWxzL2RpYWxvZ3MnXG5pbXBvcnQge1xuICBmZXRjaERpYWxvZ3MsXG4gIHNvcnREaWFsb2dzLFxuICB1cGRhdGVEaWFsb2csXG4gIGFkZE5ld0RpYWxvZyxcbn0gZnJvbSAnLi4vYWN0aW9ucy9kaWFsb2dzJ1xuaW1wb3J0IHtcbiAgcHVzaE1lc3NhZ2UsXG4gIHNldE1lc3NhZ2VzLFxuICBsYXp5RmV0Y2hNZXNzYWdlcyxcbiAgdXBkYXRlTWVzc2FnZXMsXG59IGZyb20gJy4uL2FjdGlvbnMvbWVzc2FnZXMnXG5pbXBvcnQgeyBwcmVwYXJhdGlvbkF0dGFjaG1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5pbXBvcnQgeyBzZWxlY3RlZERpYWxvZyB9IGZyb20gJy4uL2FjdGlvbnMvc2VsZWN0ZWREaWFsb2cnXG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VycydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IE1lc3NhZ2UsIEZha2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL21lc3NhZ2UnXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy91c2VyJ1xuaW1wb3J0IHsgRElBTE9HX1RZUEUgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIFNUQVRVU19ERUxJVkVSRUQsXG4gIFNUQVRVU19SRUFELFxuICBTVEFUVVNfU0VOVCxcbiAgR1JPVVBfQ0hBVF9BTEVSVF9UWVBFXG59IGZyb20gJy4uL21vZGVscy9tZXNzYWdlJ1xuXG5jbGFzcyBDaGF0U2VydmljZSB7XG5cbiAgc2V0VXBMaXN0ZW5lcnMoKSB7XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQub25NZXNzYWdlTGlzdGVuZXIgPSB0aGlzLm9uTWVzc2FnZUxpc3RlbmVyLmJpbmQodGhpcylcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5vblNlbnRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLm9uU2VudE1lc3NhZ2VMaXN0ZW5lci5iaW5kKHRoaXMpXG4gICAgQ29ubmVjdHlDdWJlLmNoYXQub25EZWxpdmVyZWRTdGF0dXNMaXN0ZW5lciA9IHRoaXMub25EZWxpdmVyZWRTdGF0dXMuYmluZCh0aGlzKVxuICAgIENvbm5lY3R5Q3ViZS5jaGF0Lm9uUmVhZFN0YXR1c0xpc3RlbmVyID0gdGhpcy5vblJlYWRTdGF0dXMuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hEaWFsb2dzRnJvbVNlcnZlcigpIHtcbiAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5kaWFsb2dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuZGlhbG9nc1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdpbiBmZXRjaCcpXG4gICBjb25zdCBkaWFsb2dzRnJvbVNlcnZlciA9ICBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cubGlzdCgpXG4gICAgLy8gY29uc3QgY3VycmVudFVzZXJJZCA9IHRoaXMuY3VycmVudFVzZXJcbiAgICAvLyBsZXQgcHJpdmF0Q2hhdElkc1VzZXIgPSBbXVxuXG4gICAgY29uc3QgZGlhbG9ncyA9IGRpYWxvZ3NGcm9tU2VydmVyLml0ZW1zLm1hcChlbGVtID0+IHtcbiAgICAgIC8vIGlmIChlbGVtLnR5cGUgPT09IERJQUxPR19UWVBFLlBSSVZBVEUpIHtcbiAgICAgIC8vICAgZWxlbS5vY2N1cGFudHNfaWRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAvLyAgICAgZWxlbSAhPT0gY3VycmVudFVzZXJJZC5pZCAmJiBwcml2YXRDaGF0SWRzVXNlci5wdXNoKGVsZW0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9XG4gICAgICByZXR1cm4gbmV3IERpYWxvZyhlbGVtKVxuICAgIH0pXG5cbiAgICAvLyBpZiAocHJpdmF0Q2hhdElkc1VzZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gICBjb25zdCB1c2Vyc0luZm8gPSBhd2FpdCB0aGlzLmdldFVzZXJzTGlzdChwcml2YXRDaGF0SWRzVXNlcilcbiAgICAvLyAgIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlcnModXNlcnNJbmZvKSlcbiAgICAvLyB9XG5cbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaERpYWxvZ3MoZGlhbG9ncykpXG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuZGlhbG9nc1xuICB9XG5cbiAgYXN5bmMgZ2V0TWVzc2FnZXMoZGlhbG9nKSB7XG4gICAgY29uc3QgaXNBbHJlZHlVcGRhdGUgPSB0aGlzLmdldE1lc3NhZ2VzQnlEaWFsb2dJZChkaWFsb2cuaWQpXG4gICAgbGV0IGFtb3VudE1lc3NhZ2VzID0gbnVsbFxuXG4gICAgLy8gSWYgdGhlIGZpcnN0IGVudHJ5IGludG8gdGhlIGNoYXRcbiAgICBpZiAoIWRpYWxvZy5pc0FscmVhZHlNZXNzYWdlRmV0Y2ggfHwgZGlhbG9nLnVucmVhZF9tZXNzYWdlc19jb3VudCA+IDAgJiYgIWRpYWxvZy5pc0FscmVhZHlNZXNzYWdlRmV0Y2gpIHtcbiAgICAgIGNvbnN0IGhpc3RvcnlGcm9tU2VydmVyID0gYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZS5saXN0KHtcbiAgICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZy5pZCxcbiAgICAgICAgc29ydF9kZXNjOiAnZGF0ZV9zZW50J1xuICAgICAgfSlcblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXVxuICAgICAgaGlzdG9yeUZyb21TZXJ2ZXIuaXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYgKCFlbGVtLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSkge1xuICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2UoZWxlbSwgdGhpcy5jdXJyZW50VXNlci5pZCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oZGlhbG9nLCB7IGlzQWxyZWFkeU1lc3NhZ2VGZXRjaDogdHJ1ZSB9KVxuICAgICAgdGhpcy51cGRhdGVEaWFsb2dzVW5yZWFkTWVzc2FnZXNDb3VudChuZXdPYmopXG4gICAgICBzdG9yZS5kaXNwYXRjaChzZXRNZXNzYWdlcyhkaWFsb2cuaWQsIG1lc3NhZ2VzKSlcbiAgICAgIGFtb3VudE1lc3NhZ2VzID0gbWVzc2FnZXMubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBzZWNvbmQgZW50cnkgaW50byB0aGUgY2hhdFxuICAgICAgaWYgKGRpYWxvZy51bnJlYWRfbWVzc2FnZXNfY291bnQgPiAwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc0J5RGlhbG9nSWQoZGlhbG9nLmlkKVxuICAgICAgICBjb25zdCBmaXJzdFVucmVhZE1zZyA9IG1lc3NhZ2VzW2RpYWxvZy51bnJlYWRfbWVzc2FnZXNfY291bnQgLSAxXVxuICAgICAgICB0aGlzLnJlYWRBbGxNZXNzYWdlcyhkaWFsb2cuaWQpXG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZFJlYWRTdGF0dXMoZmlyc3RVbnJlYWRNc2cuaWQsIGZpcnN0VW5yZWFkTXNnLnNlbmRlcl9pZCwgZmlyc3RVbnJlYWRNc2cuZGlhbG9nX2lkKVxuICAgICAgICB0aGlzLnVwZGF0ZURpYWxvZ3NVbnJlYWRNZXNzYWdlc0NvdW50KGRpYWxvZylcbiAgICAgIH1cbiAgICAgIGFtb3VudE1lc3NhZ2VzID0gaXNBbHJlZHlVcGRhdGUubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBhbW91bnRNZXNzYWdlc1xuICB9XG5cbiAgLy8gTWVzc2FnZSBsb2FkaW5nIGlmIG1vcmUgdGhhbiAxMDBcbiAgZ2V0TW9yZU1lc3NhZ2VzID0gYXN5bmMgKGRpYWxvZykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNCeURpYWxvZ0lkKGRpYWxvZy5pZClcbiAgICBjb25zdCBsYXN0TWVzc2FnZURhdGUgPSBjdXJyZW50TWVzc2FnZXNbMF1cbiAgICBjb25zdCB1cGRhdGVPYmogPSBPYmplY3QuYXNzaWduKGRpYWxvZywgeyBsYXN0X21lc3NhZ2VzX2Zvcl9mZXRjaDogbGFzdE1lc3NhZ2VEYXRlLmRhdGVfc2VudCB9KVxuXG4gICAgY29uc3QgZmlsdGVyID0ge1xuICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZy5pZCxcbiAgICAgIGRhdGVfc2VudDogeyBsdDogbGFzdE1lc3NhZ2VEYXRlLmRhdGVfc2VudCB9LFxuICAgICAgc29ydF9kZXNjOiAnZGF0ZV9zZW50J1xuICAgIH1cblxuICAgIGNvbnN0IG1vcmVIaXN0b3J5RnJvbVNlcnZlciA9IGF3YWl0IENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2UubGlzdChmaWx0ZXIpXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdXG4gICAgbW9yZUhpc3RvcnlGcm9tU2VydmVyLml0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoIWVsZW0uZ3JvdXBfY2hhdF9hbGVydF90eXBlKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2UoZWxlbSwgdGhpcy5jdXJyZW50VXNlci5pZCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZURpYWxvZyh1cGRhdGVPYmopKVxuICAgIGNvbnN0IGFtb3VudE1lc3NhZ2VzID0gc3RvcmUuZGlzcGF0Y2gobGF6eUZldGNoTWVzc2FnZXMoZGlhbG9nLmlkLCBtZXNzYWdlcykpXG4gICAgcmV0dXJuIGFtb3VudE1lc3NhZ2VzLmhpc3RvcnkubGVuZ3RoXG4gIH1cblxuXG4gIGFzeW5jIHNlbmRNZXNzYWdlKGRpYWxvZywgbWVzc2FnZVRleHQsIGF0dGFjaG1lbnRzID0gZmFsc2UsIHNjcm9sbFRvQm90dG9tKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuY3VycmVudFVzZXJcbiAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZVRleHQudHJpbSgpXG4gICAgY29uc3QgZGF0ZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgY29uc3QgcmVjaXBpZW50X2lkID0gZGlhbG9nLnR5cGUgPT09IERJQUxPR19UWVBFLlBSSVZBVEUgPyBkaWFsb2cub2NjdXBhbnRzX2lkcy5maW5kKGVsZW0gPT4gZWxlbSAhPSB1c2VyLmlkKVxuICAgICAgOiBkaWFsb2cueG1wcF9yb29tX2ppZFxuXG4gICAgbGV0IG1zZyA9IHtcbiAgICAgIHR5cGU6IGRpYWxvZy54bXBwX3R5cGUsXG4gICAgICBib2R5OiB0ZXh0LFxuICAgICAgZXh0ZW5zaW9uOiB7XG4gICAgICAgIHNhdmVfdG9faGlzdG9yeTogMSxcbiAgICAgICAgZGlhbG9nX2lkOiBkaWFsb2cuaWQsXG4gICAgICAgIHNlbmRlcl9pZDogdXNlci5pZCxcbiAgICAgICAgZGF0ZV9zZW50OiBkYXRlLFxuICAgICAgfSxcbiAgICAgIC8vIG1hcmthYmxlOiAxXG4gICAgfVxuXG4gICAgbXNnLmlkID0gdGhpcy5tZXNzYWdlVW5pcXVlSWRcblxuICAgIC8vIElmIHNlbmQgbWVzc2FnZSBhcyBBdHRhY2htZW50XG4gICAgaWYgKGF0dGFjaG1lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZUFzQXR0YWNobWVudChkaWFsb2csIHJlY2lwaWVudF9pZCwgbXNnLCBhdHRhY2htZW50cywgc2Nyb2xsVG9Cb3R0b20pXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBGYWtlTWVzc2FnZShtc2cpXG5cbiAgICBjb25zdCBuZXdPYmpGcmVleiA9IE9iamVjdC5mcmVlemUobWVzc2FnZSlcblxuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG5ld09iakZyZWV6LCBkaWFsb2cuaWQpKVxuICAgIHNjcm9sbFRvQm90dG9tKClcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5zZW5kKHJlY2lwaWVudF9pZCwgbXNnKVxuICAgIHN0b3JlLmRpc3BhdGNoKHNvcnREaWFsb2dzKG5ld09iakZyZWV6KSlcbiAgfVxuXG5cbiAgc2VuZE1zZ0NoYXRBbGVydE9uQ3JlYXRlID0gYXN5bmMgKGRpYWxvZywgbWVzc2FnZSwgYWxlcnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgY29uc3QgcmVjaXBpZW50X2lkID0gZGlhbG9nLnR5cGUgPT09IERJQUxPR19UWVBFLlBSSVZBVEUgPyBkaWFsb2cub2NjdXBhbnRzX2lkcy5maW5kKGVsZW0gPT4gZWxlbSAhPSB0aGlzLmN1cnJlbnRVc2VyLmlkKVxuICAgICAgOiBkaWFsb2cueG1wcF9yb29tX2ppZFxuICAgIGNvbnN0IG1lc3NhZ2VFeHRlbnNpb25zID0ge1xuICAgICAgZGF0ZV9zZW50OiBkYXRlLFxuICAgICAgc2F2ZV90b19oaXN0b3J5OiAxLFxuICAgICAgZGlhbG9nX2lkOiBkaWFsb2cuaWQsXG4gICAgICBncm91cF9jaGF0X2FsZXJ0X3R5cGU6IGFsZXJ0VHlwZSxcbiAgICAgIHNlbmRlcl9pZDogdGhpcy5jdXJyZW50VXNlci5pZCxcbiAgICB9XG4gICAgY29uc3QgbXNnID0ge1xuICAgICAgdHlwZTogIWRpYWxvZy54bXBwX3Jvb21famlkID8gJ2NoYXQnIDogJ2dyb3VwY2hhdCcsXG4gICAgICBib2R5OiBtZXNzYWdlLFxuICAgICAgZXh0ZW5zaW9uOiBtZXNzYWdlRXh0ZW5zaW9ucyxcbiAgICB9XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChyZWNpcGllbnRfaWQsIG1zZylcbiAgfVxuXG4gIHNlbmRDaGF0QWxlcnRPbkNyZWF0ZShkaWFsb2cpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ0dyb3VwIGlzIGNyZWF0ZWQnXG4gICAgdGhpcy5zZW5kTXNnQ2hhdEFsZXJ0T25DcmVhdGUoZGlhbG9nLCBtZXNzYWdlLCBHUk9VUF9DSEFUX0FMRVJUX1RZUEUuQ1JFQVRFKVxuICB9XG5cbiAgYXN5bmMgc2VuZE1lc3NhZ2VBc0F0dGFjaG1lbnQoZGlhbG9nLCByZWNpcGllbnRfaWQsIG1zZywgYXR0YWNobWVudHMsIHNjcm9sbFRvQm90dG9tKSB7XG4gICAgLy9jcmVhdGUgZmFrZSBkYXRhIGZvciByZW5kZXIgaW1nXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdHRhY2htZW50cy5maWxlKVxuICAgIG1zZy5leHRlbnNpb24uYXR0YWNobWVudHMgPSBbeyB1cmwgfV1cbiAgICBtc2cuYm9keSA9ICdJbWFnZSBhdHRhY2htZW50J1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgRmFrZU1lc3NhZ2UobXNnKVxuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG1lc3NhZ2UsIGRpYWxvZy5pZCkpXG4gICAgc2Nyb2xsVG9Cb3R0b20oKVxuXG4gICAgLy8gY3JlYXRlIHJlYWwgZGF0YSBmb3IgYXR0YWNobWVudFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy51cGxvYWRQaG90byhhdHRhY2htZW50cylcbiAgICBjb25zdCBuZXdPYmpBdHRhY2ggPSBwcmVwYXJhdGlvbkF0dGFjaG1lbnQocmVzcG9uc2UpXG4gICAgbXNnLmV4dGVuc2lvbi5hdHRhY2htZW50cyA9IFtuZXdPYmpBdHRhY2hdXG4gICAgYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChyZWNpcGllbnRfaWQsIG1zZylcbiAgICBzdG9yZS5kaXNwYXRjaChzb3J0RGlhbG9ncyhtZXNzYWdlKSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVByaXZhdGVEaWFsb2codXNlcklkKSB7XG4gICAgY29uc3QgZGlhbG9ncyA9IHN0b3JlLmdldFN0YXRlKCkuZGlhbG9nc1xuICAgIGxldCBkaWFsb2cgPSBudWxsXG5cbiAgICBkaWFsb2dzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoZWxlbS50eXBlID09PSBESUFMT0dfVFlQRS5QUklWQVRFICYmIGVsZW0ub2NjdXBhbnRzX2lkcy5maW5kKGVsZW0gPT4gZWxlbSA9PT0gdXNlcklkKSkge1xuICAgICAgICBkaWFsb2cgPSBlbGVtXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHR5cGU6IERJQUxPR19UWVBFLlBSSVZBVEUsXG4gICAgICAgIG9jY3VwYW50c19pZHM6IHVzZXJJZCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cuY3JlYXRlKHBhcmFtcylcbiAgICAgIGRpYWxvZyA9IG5ldyBEaWFsb2cocmVzcG9uc2UpXG4gICAgICBpZiAodGhpcy5nZXRVc2VyRnJvbVJlZHV4QnlJZCh1c2VySWQpKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZE5ld0RpYWxvZyhkaWFsb2cpKVxuICAgICAgICByZXR1cm4gZGlhbG9nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1c2Vyc0luZm8gPSBhd2FpdCB0aGlzLmdldFVzZXJGcm9tU2VydmVyQnlJZCh1c2VySWQpXG4gICAgICAgIHVzZXJzSW5mby51c2VyID0gbmV3IFVzZXJNb2RlbCh1c2Vyc0luZm8udXNlcilcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycyhbdXNlcnNJbmZvLnVzZXJdKSlcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkTmV3RGlhbG9nKGRpYWxvZykpXG4gICAgICAgIHJldHVybiBkaWFsb2dcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXNlciBpcyBhbHJlYWR5IGluIHRoZSBSZWR1eFxuICAgIGlmICh0aGlzLmdldFVzZXJGcm9tUmVkdXhCeUlkKHVzZXJJZCkpIHtcbiAgICAgIHJldHVybiBkaWFsb2dcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnNJbmZvID0gYXdhaXQgdGhpcy5nZXRVc2VyRnJvbVNlcnZlckJ5SWQodXNlcklkKVxuICAgICAgdXNlcnNJbmZvLnVzZXIgPSBuZXcgVXNlck1vZGVsKHVzZXJzSW5mby51c2VyKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycyhbdXNlcnNJbmZvLnVzZXJdKSlcbiAgICAgIHJldHVybiBkaWFsb2dcbiAgICB9XG4gIH1cblxuXG4gIHVwZGF0ZURpYWxvZ3NVbnJlYWRNZXNzYWdlc0NvdW50ID0gKGRpYWxvZykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZU9iaiA9IE9iamVjdC5hc3NpZ24oZGlhbG9nLCB7IHVucmVhZF9tZXNzYWdlc19jb3VudDogMCB9KVxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZURpYWxvZyh1cGRhdGVPYmopKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBhc3luYyBjcmVhdGVQdWJsaWNEaWFsb2cob2NjdXBhbnRzX2lkcywgZ3JvdXBOYW1lLCBpbWcpIHtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHRoaXMuY3VycmVudFVzZXJcbiAgICBvY2N1cGFudHNfaWRzLnVuc2hpZnQoY3VycmVudFVzZXIuaWQpXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgdHlwZTogRElBTE9HX1RZUEUuR1JPVVAsXG4gICAgICBvY2N1cGFudHNfaWRzLFxuICAgICAgbmFtZTogZ3JvdXBOYW1lLFxuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IGltZyA/IGF3YWl0IHRoaXMudXBsb2FkUGhvdG8oaW1nKSA6IG51bGxcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHBhcmFtcy5waG90byA9IGltYWdlLnVpZFxuICAgIH1cbiAgICBjb25zdCBkaWFsb2cgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cuY3JlYXRlKHBhcmFtcylcbiAgICBjb25zdCBuZXdEaWFsb2cgPSBuZXcgRGlhbG9nKGRpYWxvZylcbiAgICBzdG9yZS5kaXNwYXRjaChhZGROZXdEaWFsb2cobmV3RGlhbG9nKSlcbiAgICByZXR1cm4gbmV3RGlhbG9nXG4gIH1cblxuICBhc3luYyByZWFkQWxsTWVzc2FnZXMoZGlhbG9nSWQpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZS51cGRhdGUobnVsbCwge1xuICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZ0lkLFxuICAgICAgcmVhZDogMVxuICAgIH0pXG4gIH1cblxuICBhc3luYyByZWFkTWVzc2FnZShtZXNzYWdlSWQsIGRpYWxvZ0lkKSB7XG4gICAgdGhpcy5vblJlYWRTdGF0dXMobWVzc2FnZUlkLCBkaWFsb2dJZClcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZS51cGRhdGUobnVsbCwge1xuICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZ0lkLFxuICAgICAgcmVhZDogMVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbk1lc3NhZ2VMaXN0ZW5lcihzZW5kZXJJZCwgbXNnKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG1zZylcbiAgICBjb25zdCB1c2VyID0gdGhpcy5jdXJyZW50VXNlclxuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuZ2V0U2VsZWN0ZWREaWFsb2coKT8uaWRcblxuICAgIC8vIElmIGdyb3VwIGNoYXQgYWxldFxuICAgIGlmIChtc2cuZXh0ZW5zaW9uLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSkge1xuICAgICAgY29uc3QgZGlhbG9nc0Zyb21TZXJ2ZXIgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cubGlzdCgpXG4gICAgICBjb25zdCBkaWFsb2dzID0gZGlhbG9nc0Zyb21TZXJ2ZXIuaXRlbXMubWFwKGVsZW0gPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERpYWxvZyhlbGVtKVxuICAgICAgfSlcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoRGlhbG9ncyhkaWFsb2dzKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZW5kZXJJZCAhPT0gdXNlci5pZCkge1xuICAgICAgaWYgKGRpYWxvZyA9PT0gbWVzc2FnZS5kaWFsb2dfaWQpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc29ydERpYWxvZ3MobWVzc2FnZSkpXG4gICAgICAgIHRoaXMucmVhZE1lc3NhZ2UobWVzc2FnZS5pZCwgbWVzc2FnZS5kaWFsb2dfaWQpXG4gICAgICAgIHRoaXMuc2VuZFJlYWRTdGF0dXMobXNnLmV4dGVuc2lvbi5tZXNzYWdlX2lkLCBtc2cuZXh0ZW5zaW9uLnNlbmRlcl9pZCwgbXNnLmRpYWxvZ19pZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VuZERlbGl2ZXJlZFN0YXR1cyhtc2cuZXh0ZW5zaW9uLm1lc3NhZ2VfaWQsIG1zZy5leHRlbnNpb24uc2VuZGVyX2lkLCBtc2cuZGlhbG9nX2lkKVxuICAgICAgICBzdG9yZS5kaXNwYXRjaChzb3J0RGlhbG9ncyhtZXNzYWdlLCB0cnVlKSlcbiAgICAgIH1cbiAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UuZGlhbG9nX2lkKSlcbiAgICB9XG4gIH1cblxuICAvLyBDb25uZWN0eUN1YmUgbGlzdGVuZXJzXG4gIG9uU2VudE1lc3NhZ2VMaXN0ZW5lcihmYWlsZWRNZXNzYWdlLCBtc2cpIHtcbiAgICBjb25zb2xlLndhcm4oJ29uU2VudE1lc3NhZ2VMaXN0ZW5lcicpXG4gICAgaWYgKGZhaWxlZE1lc3NhZ2UgfHwgbXNnLmV4dGVuc2lvbi5ncm91cF9jaGF0X2FsZXJ0X3R5cGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNZXNzYWdlcyhtc2cuZXh0ZW5zaW9uLmRpYWxvZ19pZCwgbXNnLmlkLCB7IHNlbmRfc3RhdGU6IFNUQVRVU19TRU5UIH0pKVxuICB9XG5cbiAgb25EZWxpdmVyZWRTdGF0dXMobWVzc2FnZUlkLCBkaWFsb2dJZCwgdXNlcklkKSB7XG4gICAgY29uc29sZS53YXJuKCdvbkRlbGl2ZXJlZFN0YXR1cycsIG1lc3NhZ2VJZClcbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNZXNzYWdlcyhkaWFsb2dJZCwgbWVzc2FnZUlkLCB7IHNlbmRfc3RhdGU6IFNUQVRVU19ERUxJVkVSRUQgfSkpXG4gIH1cblxuICBvblJlYWRTdGF0dXMobWVzc2FnZUlkLCBkaWFsb2dJZCwgdXNlcklkKSB7XG4gICAgY29uc29sZS53YXJuKCdvblJlYWRTdGF0dXMnLCBtZXNzYWdlSWQpXG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTWVzc2FnZXMoZGlhbG9nSWQsIG1lc3NhZ2VJZCwgeyBzZW5kX3N0YXRlOiBTVEFUVVNfUkVBRCB9KSlcbiAgfVxuXG5cblxuICBzZW5kUmVhZFN0YXR1cyhtZXNzYWdlSWQsIHVzZXJJZCwgZGlhbG9nSWQpIHtcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5zZW5kUmVhZFN0YXR1cyh7IG1lc3NhZ2VJZCwgdXNlcklkLCBkaWFsb2dJZCB9KVxuICB9XG5cbiAgc2VuZERlbGl2ZXJlZFN0YXR1cyhtZXNzYWdlSWQsIHVzZXJJZCwgZGlhbG9nSWQpIHtcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5zZW5kRGVsaXZlcmVkU3RhdHVzKHsgbWVzc2FnZUlkLCB1c2VySWQsIGRpYWxvZ0lkIH0pXG4gIH1cblxuICBhc3luYyBnZXRVc2Vyc0xpc3QoaWRzKSB7XG4gICAgY29uc3QgdXNlcnNMaXN0ID0gYXdhaXQgQ29ubmVjdHlDdWJlLnVzZXJzLmdldCh7XG4gICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIGZpZWxkOiAnaWQnLCBwYXJhbTogJ2luJywgdmFsdWU6IGlkcyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiB1c2Vyc0xpc3QuaXRlbXMubWFwKGVsZW0gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyTW9kZWwoZWxlbS51c2VyKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBnZXRVc2VyRnJvbVNlcnZlckJ5SWQoaWQpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLnVzZXJzLmdldChpZClcbiAgfVxuXG4gIHNldFNlbGVjdERpYWxvZyhkaWFsb2cpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChzZWxlY3RlZERpYWxvZyhkaWFsb2cpKVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWREaWFsb2coKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuc2VsZWN0ZWREaWFsb2dcbiAgfVxuXG4gIGdldERpYWxvZ0J5SWQoZGlhbG9nSWQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS5kaWFsb2dzLmZpbmQoZWxlbSA9PiBlbGVtLmlkID09PSBkaWFsb2dJZClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzQnlEaWFsb2dJZChkaWFsb2dJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JlLmdldFN0YXRlKCkubWVzc2FnZXNcbiAgICByZXR1cm4gcmVzdWx0W2RpYWxvZ0lkXVxuICB9XG5cbiAgYXN5bmMgdXBsb2FkUGhvdG8oZmlsZSkge1xuICAgIHJldHVybiBDb25uZWN0eUN1YmUuc3RvcmFnZS5jcmVhdGVBbmRVcGxvYWQoZmlsZSlcbiAgfVxuXG4gIGdldCBjdXJyZW50VXNlcigpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VXNlci51c2VyXG4gIH1cblxuICBnZXRVc2VyRnJvbVJlZHV4QnlJZChpZCkge1xuICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJzW2lkXVxuICB9XG5cbiAgZ2V0IG1lc3NhZ2VVbmlxdWVJZCgpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLmNoYXQuaGVscGVycy5nZXRCc29uT2JqZWN0SWQoKVxuICB9XG59XG5cblxuY29uc3QgY2hhdFNlcnZpY2UgPSBuZXcgQ2hhdFNlcnZpY2UoKVxuXG5PYmplY3QuZnJlZXplKGNoYXRTZXJ2aWNlKVxuXG5leHBvcnQgZGVmYXVsdCBjaGF0U2VydmljZVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpOlwiXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25BY3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FdmVudE5vdGVSb3VuZGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GZWVkYmFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0TGlzdEJ1bGxldGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lUm91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MYWJlbEltcG9ydGFudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpdmVUdlJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRSb3VuZGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zTm9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eU9mZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3R5Y3ViZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2NhbGZvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbG9naW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3Rhci1yYXRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9