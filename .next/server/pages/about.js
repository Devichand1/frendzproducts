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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/about.js");
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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../src/Layout */ "./src/Layout/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../src/styles */ "./src/styles/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _src_styles__WEBPACK_IMPORTED_MODULE_4__["commonStyles"]), {}, {
  [theme.breakpoints.up('md')]: _src_styles__WEBPACK_IMPORTED_MODULE_4__["desktopStyles"],
  [theme.breakpoints.between('sm', 'md')]: _src_styles__WEBPACK_IMPORTED_MODULE_4__["TabStyles"],
  [theme.breakpoints.down('sm')]: _src_styles__WEBPACK_IMPORTED_MODULE_4__["mobileStyles"]
}));
function About({
  bproducts,
  sproducts,
  events,
  reviews,
  ads
}) {
  const classes = useStyles();
  return __jsx(_src_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("section", {
    className: classes.section
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.sectionHeader
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h3"
  }, "About"), __jsx("p", null, "Friendzproducts platform is only made for college students where one can find a plethora of items options to opt. The best part about us is that neither buyer nor seller has to move anywhere. One gets all things done within the college campus at feasible prices. We come forward to save your energy, time and efforts. Want to buy a bike? We are here for you. Want to sell your books? We are again here for you. We care for you and your pocket-money that is why we serve without any service fee.You could also put a request for a particular item you are looking for. At Friendzpreoducts.com, you will also get to know about various events happening throughout colleges in India.")))));
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

/***/ "./src/styles/index.js":
/*!*****************************!*\
  !*** ./src/styles/index.js ***!
  \*****************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0Zvb3Rlci9Cb3R0b21OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRm9vdGVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hlYWRlci9EZXNrdG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL0Rlc2t0b3Avc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL01vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hlYWRlci9Nb2JpbGUvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL3V0aWxzL3VzZU5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2F1dGgtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2NoYXQtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2dsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvY29tcG9uZW50cy9DaGF0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9oZWxwZXJzL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvc2VydmljZXMvYXV0aFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXIvQXV0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2NpcmNsZUNlbnRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc3RhdGljL2ltYWdlcy9sb2dvZnQucG5nIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9QYWdlVmlzaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvYXV0aE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0VW5yZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9jaGF0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL3NlbGVjdGVkRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NoYXRVbnJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2hhdFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zZWxlY3RlZERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2hlbHBlcnMvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvbW9kZWxzL2RpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21vZGVscy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvUGFnZVZpc2l0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hhdENvbm5lY3RlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hhdFVucmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hhdFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2RpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVkdWNlci1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2VsZWN0ZWREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NlcnZpY2VzL2NoYXQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FdmVudE5vdGVSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmVlZGJhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0TGlzdEJ1bGxldGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVJvdW5kZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhYmVsSW1wb3J0YW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpdmVUdlJvdW5kZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsUm91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc05vbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5T2ZmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0eWN1YmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiZGF0YSIsInByb2Nlc3MiLCJlbnYiLCJBUFBfSUQiLCJBVVRIX0tFWSIsIkFVVEhfU0VDUkVUIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJtaW5XaWR0aCIsInBhZGRpbmciLCJjb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJhdXRoX3VzZXIiLCJ1c2VyIiwiaGFuZGxlQWRkUHJvZHVjdCIsImlkIiwibG9jYXRpb24iLCJuZXdWYWx1ZSIsInNldEl0ZW0iLCJ0aGVtZSIsImNvbW1vblN0eWxlcyIsImJyZWFrcG9pbnRzIiwidXAiLCJkZXNrdG9wU3R5bGVzIiwiYmV0d2VlbiIsIlRhYlN0eWxlcyIsImRvd24iLCJtb2JpbGVTdHlsZXMiLCJGb290ZXIiLCJsb2dvIiwibG9nb2Z0IiwiU29jaWFsTWVudSIsImNvbXBJbmZvIiwiRm9vdGVyTWVudSIsImNvbnRhY3REZXRhaWxzIiwiQ29weXJpZ2h0IiwibW9tZW50IiwieWVhciIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbkJvdHRvbSIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiZmlsbCIsInBhZGRpbmdSaWdodCIsInRleHRBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiZG93bmxvYWRBcHAiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImRvd25sb2FkVGl0bGUiLCJtYXJnaW5MZWZ0IiwiZG93bmxvYWRDb250ZW50IiwiYWxpZ25JdGVtcyIsImRvd25sb2FkTGlua3MiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJvcmRlciIsInNwYWNpbmciLCJzZWFyY2hJY29uIiwicG9pbnRlckV2ZW50cyIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJIZWFkZXIiLCJtb2RhbE9wZW4iLCJpc1Njcm9sbGVkIiwibmF2QmFyUmVmIiwidXNlTmF2YmFyIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW4iLCJzZXRPcGVuIiwiYXV0aE1vZGFsIiwic2V0YXV0aE1vZGFsIiwidGltZW91dCIsInNldHRpbWVvdXQiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZ290b19jb21taW5nU29vbiIsImhhbmRsZUNsaWNrIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlVG9nZ2xlQ2xvc2UiLCJjdXJyZW50IiwiY29udGFpbnMiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImhhbmRsZUxpc3RLZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImhhbmRsZUxpc3RQcm9kdWN0IiwiaGFuZGxlTGlzdEV2ZW50IiwiaGFuZGxlU2VhcmNoIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsYXNzTmFtZXMiLCJzY3JvbGxlZCIsImxvZ29TY3JvbGxlZCIsIk1lbnUiLCJ1bmRlZmluZWQiLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJNZW51UmlnaHQiLCJTZWFyY2hBcHBCYXIiLCJzZWFyY2hWYWx1ZSIsInNldHNlYXJjaFZhbHVlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsIm9wZW5BTWVudSIsInNldE9wZW5BTWVudSIsInRvZ2dsZVN1Ym1lbnUiLCJ0b2dnbGVBU3VibWVudSIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsIm9wZW5zZWFyY2giLCJzZXRvcGVuc2VhcmNoIiwiaGFuZGxlU2VhcmNoT3BlbiIsImhhbmRsZVNlYXJjaENsb3NlIiwiaGFuZGxlQ2xpY2tBd2F5IiwibG9nb3V0IiwidW5hdXRoZW50aWNhdGVkIiwibG9nIiwiaGFuZGxlU2VhY2hDbGljayIsIlNlYXJjaEFwcEJhckljb24iLCJzZWFyY2hCYXIiLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJjbG9zZUJ1dHRvbiIsIkFwcGJhckJnIiwibWVudUJ1dHRvbiIsInNpZGVCYXIiLCJkcmF3ZXJIZWFkZXIiLCJtZW51SWNvbnMiLCJ0aXRsZSIsImZ1bGxMaXN0Iiwic2VhcmNoYnRuIiwiYWxpZ25TZWxmIiwiZm9ybSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwibW9kYWwiLCJoYW5kbGVDbGlja09wZW4iLCJtYXRjaGVzIiwidXNlTWVkaWFRdWVyeSIsIkhlYWRlckNvbXBvbmVudCIsIkNvbGxlZ2VOYW1lcyIsIm9wdGlvbiIsInNldElzU2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJvZmZzZXQiLCJzcmNFbGVtZW50Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTGF5b3V0IiwiaXNMb2FkZWQiLCJzZXRpc0xvYWRlZCIsIkJvdHRvbU5hdiIsIldyYXBwZXIiLCJNYWluIiwibm9mb290ZXIiLCJpbmNsdWRlcyIsImxvYWRlciIsImN1cnNvciIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIm1heFdpZHRoIiwiQVBJX1VSTCIsInNpZ251cCIsImdlbmVyYWxQb3N0UmVxdWVzdCIsInNpbXBsZVNpZ251cCIsImdvb2dsZVNpZ251cCIsImxvZ2luIiwiZWRpdFByb2ZpbGUiLCJ1cGRhdGVQcm9maWxlSW1nIiwiQWRkUHJvZHVjdCIsIlVwZGF0ZVByb2R1Y3QiLCJEZWxldGVQcm9kdWN0IiwiRGVsZXRlUmVxdWVzdCIsIkFkZEV2ZW50IiwiVXBkYXRlRXZlbnQiLCJEZWxldGVFdmVudCIsIkZhdm91cml0ZSIsIkdldFVzZXJGYXZvdXJpdGUiLCJ1c2VyX2lkIiwidHlwZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlRGF0YSIsImNhdGNoIiwid2FybiIsIkdldFVzZXJSZXF1ZXN0cyIsIkFkZFByb2R1Y3RSZXF1ZXN0IiwiVXBkYXRlUHJvZHVjdFJlcXVlc3QiLCJSZXNldFBhc3N3b3JkQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsInN0YXR1cyIsInVwZGF0ZURldmljZVRva2VuIiwidG9rZW4iLCJ2ZXJpZnlFbWFpbCIsImdlbmVyYWxHZXRSZXF1ZXN0IiwiZmV0Y2hEaWFsb2dzIiwicSIsImZldGNoTWVzc2FnZXMiLCJkaWFsb2dfaWQiLCJjcmVhdGVNZXNzYWdlIiwidW5yZWFkTXNnIiwicmVhZEFsbCIsInNlYXJjaFVuaXZlcnNpdGllcyIsInNlYXJjaENhdGVnb3JpZXMiLCJzZWFyY2hDaXRpZXMiLCJnZXRQcm9kdWN0cyIsImdldFByb2R1Y3QiLCJnZXRTZWxsZXIiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0RXZlbnRDYXRlZ29yaWVzIiwiZ2V0Q2l0aWVzIiwiZ2V0RXZlbnRzIiwic2hvd2FsbCIsImdldEV2ZW50IiwiZ2V0UmVxdWVzdCIsInNlYXJjaEV2ZW50Q2F0ZWdvcmllcyIsIkNyZWF0ZU9yZGVyIiwiQ3JlYXRlQ29udGFjdCIsIkNyZWF0ZVZpc2l0IiwiZ2V0QWxsRmVlZGJhY2siLCJnZXRBbGxCdXlSZXF1ZXN0cyIsIkZvcmdvdFBhc3N3b3JkQVBJIiwiVXBkYXRlUGFzc3dvcmRBUEkiLCJzZW5kQ2hhdFVwZGF0ZSIsInNlbmRWZXJpZnlFbWFpbCIsInVwZGF0ZU9wZW5TdGF0dXMiLCJzZW5kRmVlZGJhY2tNZXNzYWdlIiwiQ2hhdE1lc3NhZ2VJY29uIiwiYXV0aFVzZXIiLCJjaGF0VW5yZWFkQ291bnQiLCJjb3VudCIsInNldGNvdW50IiwiY29ubmVjdHljdWJlX3VzZXIiLCJjaGF0VW5hdXRoZW50aWNhdGVkIiwiY2hhdFJlc2V0IiwidW5TZWxlY3RlZERpYWxvZyIsImluaXQiLCJBdXRoU2VydmljZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25uZWN0Q2hhdCIsIkNSRURFTlRJQUxTIiwiQ09ORklHIiwic2Vzc2lvbkV4cGlyZWQiLCJoYW5kbGVSZXNwb25zZSIsInJldHJ5IiwiQ29ubmVjdHlDdWJlIiwiY3JlYXRlU2Vzc2lvbiIsImFwcENvbmZpZyIsImNvbm5lY3R5Q3ViZUNvbmZpZyIsInNlc3Npb24iLCJzZXRVcExpc3RlbmVycyIsImNoYXQiLCJvbk1lc3NhZ2VMaXN0ZW5lciIsIm9uTWVzc2FnZSIsIm9wcG9uZW50SWQiLCJleHRlbnNpb24iLCJzYXZlX3RvX2hpc3RvcnkiLCJtYXJrYWJsZSIsInNlbmQiLCJ1c2VySWQiLCJoYW5kbGVDaGF0Q2xpY2siLCJnZXRJbWFnZUxpbmtGcm9tVUlEIiwidWlkIiwic3RvcmFnZSIsInByaXZhdGVVcmwiLCJwcmVwYXJhdGlvbkF0dGFjaG1lbnQiLCJmaWxlIiwic2l6ZSIsImNvbnRlbnRfdHlwZSIsIlVzZXIiLCJhdmF0YXIiLCJnZXRBdmF0YXJVcmwiLCJjdXN0b21fZGF0YSIsImZ1bGxfbmFtZSIsInBob25lIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJsYXN0X3JlcXVlc3RfYXQiLCJhdmF0YXJVSUQiLCJjdXJyZW50VXNlciIsInN0b3JlIiwiY2hhdEF1dGhlbnRpY2F0ZWQiLCJjdXN0b21TZXNzaW9uIiwiYXNzaWduIiwic2V0VXNlclNlc3Npb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjaGF0Q29ubmVjdGlvbiIsImdldFVucmVhZCIsImNvbnRhY3RsaXN0IiwidW5yZWFkQ291bnQiLCJ0b3RhbCIsInJlYXN1bHQiLCJiaW5kIiwicGFyc2UiLCJjb25uZWN0eWN1YmVfaWQiLCJkZXZpY2VfdG9rZW4iLCJub3RpZiIsInB1c2hNZXNzYWdlIiwidXNlclNlc3Npb24iLCJDVVJSRU5UX1VTRVJfU0VTU0lPTl9LRVkiLCJnZXRVc2VyU2Vzc2lvbiIsImF1dGhTZXJ2aWNlIiwiZnJlZXplIiwiYnV0dG9uIiwiQXV0aEZvcm0iLCJmaXJzdG5hbWUiLCJzZXRmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInNldGxhc3RuYW1lIiwic2V0ZW1haWwiLCJ1bml2ZXJzaXR5Iiwic2V0dW5pdmVyc2l0eSIsInNldHBhc3N3b3JkIiwic2hvd3Bhc3N3b3JkIiwic2V0c2hvd3Bhc3N3b3JkIiwiY29uZmlybV9wYXNzd29yZCIsInNldGNvbmZpcm1fcGFzc3dvcmQiLCJzaG93Y29uZmlybV9wYXNzd29yZCIsInNldHNob3djb25maXJtX3Bhc3N3b3JkIiwicGhvbmVfbm8iLCJzZXRwaG9uZV9ubyIsImVycnMiLCJzZXRlcnJzIiwidW5pdmVyc2l0aWVzIiwic2V0dW5pdmVyc2l0aWVzIiwiYnJhbmNoIiwic2V0YnJhbmNoIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJidG5sb2FkaW5nIiwic2V0YnRubG9hZGluZyIsImJhY2tkcm9wIiwic2V0YmFja2Ryb3AiLCJmb3JtZXJycyIsInNldGZvcm1lcnJzIiwic2hvd1JlZGlyZWN0Iiwic2V0c2hvd1JlZGlyZWN0IiwiaGFuZGxlU3VibWl0Iiwic3VibWl0U2lnblVwIiwic3VibWl0TG9naW4iLCJtc2ciLCJhcGlfdG9rZW4iLCJmYXZFdmVudHMiLCJmYXZQcm9kdWN0cyIsInNldExvZ2luIiwiYXV0aGVudGljYXRlZCIsImlzX2NvbXBsZXRlIiwicmVzcG9uc2VHb29nbGVTdWNjZXNzIiwicHJvZmlsZU9iaiIsImdvb2dsZV9pZCIsImdvb2dsZUlkIiwicmVzcG9uc2VHb29nbGVGYWlsdXJlIiwiYmFja2Ryb3BDbG9zZSIsInZhbGlkYXRlZm9ybSIsIm5vX3NhbWUiLCJsZW5ndGgiLCJwd2RfbGVuZ3RoIiwiaGFzX2Vycm9yIiwidXBkYXRlZm9ybURhdGEiLCJldmFsIiwiaGFuZGxlVW5pU2VhcmNoIiwiZ290b0ZvcmdvdFBhc3N3b3JkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNvbnRhaW5lciIsIm1hcCIsInRleHQiLCJpbmRleCIsIm1hcmdpblRvcCIsIkxvZ2luIiwidHJhbnNmb3JtIiwiY2lyY2xlY2VudGVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiSW1nIiwib3JhbmdlIiwidHJhbnNwYXJlbnQiLCJkZXNrdG9wTWVudSIsIkxvZ2luX1JlZ2lzdGVyIiwiaXNNb2JpbGUiLCJzZXRvcGVuQU1lbnUiLCJvcGVuQk1lbnUiLCJzZXRvcGVuQk1lbnUiLCJvcGVuQ01lbnUiLCJzZXRvcGVuQ01lbnUiLCJvcGVuRE1lbnUiLCJzZXRvcGVuRE1lbnUiLCJ0b2dnbGVNb2RhbCIsImluZGV4T2YiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2VJbmRleCIsIm9wZW5Nb2RhbCIsImdvdG9Qcm9maWxlIiwiY2xvc2VNb2RhbCIsImdvdG9Qcm9maWxlRWRpdCIsImdvdG9FdmVudHMiLCJnb3RvUmVxdWVzdGUiLCJnb3RvRmF2RXZlbnRzIiwiZ290b0ZhdlByb2R1Y3RzIiwiZ290b0FkZFJlcXVlc3QiLCJnb3RvUmVzZXRQYXNzd29yZCIsInRvZ2dsZUJTdWJtZW51IiwidG9nZ2xlQ1N1Ym1lbnUiLCJ0b2dnbGVEU3VibWVudSIsImZpcnN0X25hbWUiLCJjaGFyQXQiLCJCb29sZWFuIiwiU0VMRUNURURfRklMVEVSX1VOSVZFUlNJVFkiLCJTRUxFQ1RFRF9GSUxURVJfUkVTRVQiLCJQQUdFX1BST0RVQ1RTIiwiVkFMSURfUk9VVEVTIiwiQWJvdXQiLCJicHJvZHVjdHMiLCJzcHJvZHVjdHMiLCJyZXZpZXdzIiwiYWRzIiwic2VjdGlvbiIsInNlY3Rpb25IZWFkZXIiLCJBRERfVklTSVRFRCIsIlJFTU9WRV9WSVNJVEVEIiwiRkVUQ0hfVklTSVRFRCIsIkFVVEhFTlRJQ0FURUQiLCJVUERBVEVfREVWSUNFX1RPS0VOIiwiVU5BVVRIRU5USUNBVEVEIiwiU0hPV19NT0RBTCIsIkNMT1NFX01PREFMIiwiQ0hBVF9DT05ORUNURUQiLCJDSEFUX1JFU0VUIiwiQ0hBVF9VTlJFQUQiLCJDSEFUX1VOUkVBRF9SRVNFVCIsIkNIQVRfQVVUSEVOVElDQVRFRCIsIkNIQVRfVU5BVVRIRU5USUNBVEVEIiwiQ0hBVF9VUERBVEVfVVNFUiIsIkZFVENIX0RJQUxPR1MiLCJBRERfRElBTE9HIiwiU09SVF9ESUFMT0dTIiwiVVBEQVRFX0RJQUxPRyIsIkRFTEVURV9ESUFMT0ciLCJTRVRfTUVTU0FHRVMiLCJQVVNIX01FU1NBR0UiLCJERUxFVEVfQUxMX01FU1NBR0VTIiwiTEFaWV9GRVRDSF9NRVNTQUdFUyIsIlVQREFURV9NRVNTQUdFUyIsIlNFTEVDVEVEX0RJQUxPRyIsIlVOX1NFTEVDVEVEX0RJQUxPRyIsIkZFVENIX1VTRVJTIiwiQUREX1VTRVJTIiwidXNlckZhdkV2ZW50cyIsInVzZXJGYXZQcm9kdWN0cyIsInBheWxvYWQiLCJ1cGRhdGVVc2VyRGV2aWNlVG9rZW4iLCJzaG93TW9kYWwiLCJjaGF0VW5yZWFkUmVzZXQiLCJjaGF0VXBkYXRlVXNlciIsImRpYWxvZ3MiLCJ1cGRhdGVEaWFsb2ciLCJkaWFsb2ciLCJhZGROZXdEaWFsb2ciLCJzb3J0RGlhbG9ncyIsImRlbGV0ZURpYWxvZyIsImRpYWxvZ0lkIiwic2V0TWVzc2FnZXMiLCJtc2dzIiwibGF6eUZldGNoTWVzc2FnZXMiLCJoaXN0b3J5IiwidXBkYXRlTWVzc2FnZXMiLCJtc2dJZCIsImRlbGV0ZUFsbE1lc3NhZ2VzIiwic2VsZWN0ZWREaWFsb2ciLCJmZXRjaFVzZXJzIiwidXNlcnMiLCJhZGRVc2VycyIsIkJUTl9UWVBFIiwiRElBTE9HIiwiQ09OVEFDVFMiLCJDUkVBVEVfR1JPVVAiLCJESUFMT0dfVFlQRSIsIlBSSVZBVEUiLCJHUk9VUCIsIkJST0FEQ0FTVCIsIlBVQkxJQ19DSEFOTkVMIiwiRGlhbG9nIiwiX2lkIiwieG1wcF9yb29tX2ppZCIsInhtcHBfdHlwZSIsInBob3RvIiwiZGVzY3JpcHRpb24iLCJyb29tX2ppZCIsImFkbWluc19pZHMiLCJvY2N1cGFudHNfaWRzIiwidXBkYXRlZF9kYXRlIiwiRGF0ZSIsIm5vdyIsImxhc3RfbWVzc2FnZV9kYXRlX3NlbnQiLCJsYXN0X21lc3NhZ2UiLCJsYXN0X21lc3NhZ2VfaWQiLCJsYXN0X21lc3NhZ2VfdXNlcl9pZCIsInVucmVhZF9tZXNzYWdlc19jb3VudCIsInVucmVhZF9tZXNzYWdlc19pZHMiLCJwaW5uZWRfbWVzc2FnZXNfaWRzIiwiU1RBVFVTX1BFTkRJTkciLCJTVEFUVVNfU0VOVCIsIlNUQVRVU19ERUxJVkVSRUQiLCJTVEFUVVNfUkVBRCIsIkdST1VQX0NIQVRfQUxFUlRfVFlQRSIsIkNSRUFURSIsImRlZmF1bHRNZXNzYWdlIiwiZGF0ZV9zZW50IiwiTWF0aCIsImZsb29yIiwiYXR0YWNobWVudHMiLCJzZW5kZXJfaWQiLCJzZW5kZXIiLCJNZXNzYWdlIiwiZ3JvdXBfY2hhdF9hbGVydF90eXBlIiwiY2hhdF9kaWFsb2dfaWQiLCJzZW5kX3N0YXRlIiwiZ2V0U2VuZFN0YXRlIiwiYXR0YWNobWVudCIsImdldEF0dGFjaG1lbnQiLCJwYXJzZUxpbmsiLCJyZWFkX2lkcyIsImZpbmQiLCJkZWxpdmVyZWRfaWRzIiwiRmFrZU1lc3NhZ2UiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJhcnIiLCJhcnIyIiwicG9wIiwidSIsImxvY2FsZm9yYWdlIiwicmVtb3ZlSXRlbSIsInNob3ciLCJzb3J0ZWREaWFsb2ciLCJmaWx0ZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhdXRoX21vZGFsIiwiY2hhdF91c2VyIiwibWVzc2FnZXMiLCJwYWdlVmlzaXRlZCIsImNoYXRDb25uZWN0ZWQiLCJpbml0aWFsX3N0YXRlIiwiY29ubmVjdHlfZGlhbG9nX2lkIiwicmVhZCIsInVwZGF0ZSIsImNvbmNhdCIsInVzZXJEYXRhIiwiYXBwX2lkIiwiT05FU0lHTkFMX0FQUF9JRCIsImNvbnRlbnRzIiwiZmlsdGVycyIsIkF1dGhvcml6YXRpb24iLCJPTkVTSUdOQUxfUkVTVF9LRVkiLCJhbHJlYWR5VXBkYXRlZERpYWxvZyIsImVsZW0iLCJuZXdBcnIiLCJyZXZlcnNlIiwibmV3T2JqIiwic29ydCIsIml0ZW1zIiwiaW52ZXJ0ZWQiLCJpdGVtQSIsIml0ZW1CIiwidXBkYXRlU3RhdHVzTWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsInVwZGF0ZVNlbmRTdGF0dXMiLCJuZXdPYmpVc2VycyIsImZvckVhY2giLCJDaGF0U2VydmljZSIsImN1cnJlbnRNZXNzYWdlcyIsImdldE1lc3NhZ2VzQnlEaWFsb2dJZCIsImxhc3RNZXNzYWdlRGF0ZSIsInVwZGF0ZU9iaiIsImxhc3RfbWVzc2FnZXNfZm9yX2ZldGNoIiwibHQiLCJzb3J0X2Rlc2MiLCJtb3JlSGlzdG9yeUZyb21TZXJ2ZXIiLCJsaXN0IiwiYW1vdW50TWVzc2FnZXMiLCJhbGVydFR5cGUiLCJkYXRlIiwicmVjaXBpZW50X2lkIiwibWVzc2FnZUV4dGVuc2lvbnMiLCJvblNlbnRNZXNzYWdlQ2FsbGJhY2siLCJvblNlbnRNZXNzYWdlTGlzdGVuZXIiLCJvbkRlbGl2ZXJlZFN0YXR1c0xpc3RlbmVyIiwib25EZWxpdmVyZWRTdGF0dXMiLCJvblJlYWRTdGF0dXNMaXN0ZW5lciIsIm9uUmVhZFN0YXR1cyIsImZldGNoRGlhbG9nc0Zyb21TZXJ2ZXIiLCJnZXRTdGF0ZSIsImRpYWxvZ3NGcm9tU2VydmVyIiwiZ2V0TWVzc2FnZXMiLCJpc0FscmVkeVVwZGF0ZSIsImlzQWxyZWFkeU1lc3NhZ2VGZXRjaCIsImhpc3RvcnlGcm9tU2VydmVyIiwidXBkYXRlRGlhbG9nc1VucmVhZE1lc3NhZ2VzQ291bnQiLCJmaXJzdFVucmVhZE1zZyIsInJlYWRBbGxNZXNzYWdlcyIsInNlbmRSZWFkU3RhdHVzIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsInNjcm9sbFRvQm90dG9tIiwidHJpbSIsIm1lc3NhZ2VVbmlxdWVJZCIsInNlbmRNZXNzYWdlQXNBdHRhY2htZW50IiwibmV3T2JqRnJlZXoiLCJzZW5kQ2hhdEFsZXJ0T25DcmVhdGUiLCJzZW5kTXNnQ2hhdEFsZXJ0T25DcmVhdGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1cGxvYWRQaG90byIsIm5ld09iakF0dGFjaCIsImNyZWF0ZVByaXZhdGVEaWFsb2ciLCJnZXRVc2VyRnJvbVJlZHV4QnlJZCIsInVzZXJzSW5mbyIsImdldFVzZXJGcm9tU2VydmVyQnlJZCIsIlVzZXJNb2RlbCIsImNyZWF0ZVB1YmxpY0RpYWxvZyIsImdyb3VwTmFtZSIsImltZyIsInVuc2hpZnQiLCJpbWFnZSIsIm5ld0RpYWxvZyIsInJlYWRNZXNzYWdlIiwibWVzc2FnZUlkIiwic2VuZGVySWQiLCJnZXRTZWxlY3RlZERpYWxvZyIsIm1lc3NhZ2VfaWQiLCJzZW5kRGVsaXZlcmVkU3RhdHVzIiwiZmFpbGVkTWVzc2FnZSIsImdldFVzZXJzTGlzdCIsImlkcyIsInVzZXJzTGlzdCIsInBlcl9wYWdlIiwic2V0U2VsZWN0RGlhbG9nIiwiZ2V0RGlhbG9nQnlJZCIsImNyZWF0ZUFuZFVwbG9hZCIsImhlbHBlcnMiLCJnZXRCc29uT2JqZWN0SWQiLCJjaGF0U2VydmljZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJwdFplcm8iLCJzcGFjaW5nQm94IiwiSWNvbkNhcmRXcmFwcGVyIiwiRXZlbnRJY29uQ2FyZFdyYXBwZXIiLCJwcm9kdWN0c0hlYWRlciIsIlByb2R1Y3RzR3JpZFdyYXBwZXIiLCJwcm9kdWN0Q29udGVudFNlY3Rpb24iLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJmbGl0ZXJCdG4iLCJCcmVhZGNydW1icyIsImNzb29uSW1nIiwibG9hZE1vcmUiLCJsb2FkTW9yZXdyYXBwZXIiLCJidXR0b25Qcm9ncmVzcyIsImNhdEJ0biIsImZsZXhEaXJlY3Rpb24iLCJsaW5lSGVpZ2h0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Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9hYm91dC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiY29uc3QgZGF0YSA9IHtcblxuICBcInNlbmRlcklEXCI6IFwiXCIsXG4gIFwiY29ubmVjdHlDdWJlQ29uZmlnXCI6IFtcbiAgICB7XG4gICAgICBcImFwcElkXCI6IHByb2Nlc3MuZW52LkFQUF9JRCxcbiAgICAgIFwiYXV0aEtleVwiOiBwcm9jZXNzLmVudi5BVVRIX0tFWSxcbiAgICAgIFwiYXV0aFNlY3JldFwiOiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjaGF0XCI6IHtcbiAgICAgICAgXCJzdHJlYW1NYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRlYnVnXCI6IHtcbiAgICAgICAgXCJtb2RlXCI6IDBcbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cbmV4cG9ydCBkZWZhdWx0IGRhdGFcblxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uQWN0aW9uXCI7XHJcbmltcG9ydCBIb21lUm91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lUm91bmRlZFwiO1xyXG5pbXBvcnQgRXZlbnROb3RlUm91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FdmVudE5vdGVSb3VuZGVkXCI7XHJcbmltcG9ydCBMb2NhbE1hbGxSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFJvdW5kZWRcIjtcclxuaW1wb3J0IExpdmVUdlJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGl2ZVR2Um91bmRlZFwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuaW1wb3J0IEF1dGhJY29uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvZ2luX1JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRm9ybWF0TGlzdEJ1bGxldGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIHpJbmRleDogMixcclxuICAgIGJhY2tncm91bmQ6IFwiI2ZkZmRmZFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCAtM3B4IDIwcHggcmdiYSgwLDAsMCwwLjEpXCIsXHJcbiAgICBcIiYgYnV0dG9uXCI6IHtcclxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjNweCAxMHB4IDNweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzkwOGU4ZVwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnNXB4JyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzVweCdcclxuICAgIH0sXHJcbiAgICBcIiYgYS5hY3RpdmVcIjoge1xyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10aGVtZSlcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZUJvdHRvbU5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIFxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJzAnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm90TWVudVwiKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci51c2VyKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGlmICh1c2VyLmlkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi8/c2lnbnVwPW9wZW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJvdHRvbU5hdmlnYXRpb25cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJvdE1lbnVcIiwgbmV3VmFsdWUpO1xyXG4gICAgICB9fVxyXG4gICAgICBzaG93TGFiZWxzXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgPlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgbGFiZWw9XCJIb21lXCJcclxuICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgIGljb249ezxIb21lUm91bmRlZEljb24gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXHJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgIGhyZWY9XCIvcHJvZHVjdHM/dHlwZT1idXlcIlxyXG4gICAgICAgIGxhYmVsPVwiQnV5XCJcclxuICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9kdWN0c1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgaWNvbj17PExvY2FsTWFsbFJvdW5kZWRJY29uIC8+fVxyXG4gICAgICAvPlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPVwiL2V2ZW50c1wiXHJcbiAgICAgICAgbGFiZWw9XCJFdmVudHNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2V2ZW50c1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgaWNvbj17PEV2ZW50Tm90ZVJvdW5kZWRJY29uIC8+fVxyXG4gICAgICAvPlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPVwiL2J1eS1yZXF1ZXN0XCJcclxuICAgICAgICBsYWJlbD1cIlJlcXVlc3RzXCJcclxuICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9idXktcmVxdWVzdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgaWNvbj17PEZvcm1hdExpc3RCdWxsZXRlZEljb24gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgIHthY2Nlc3NUb2tlbiAmJiAoXHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXHJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgIC8vIGhyZWY9XCIvcHJvZmlsZVwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQWRkUHJvZHVjdH1cclxuICAgICAgICBsYWJlbD1cIk15IGFkc1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgaWNvbj17PExpdmVUdlJvdW5kZWRJY29uIC8+fVxyXG4gICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7IWFjY2Vzc1Rva2VuICYmIChcclxuICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxyXG4gICAgICAgICAgbGFiZWw9XCJMb2dpblwiXHJcbiAgICAgICAgICBpY29uPXs8QXV0aEljb24gaXNNb2JpbGU9e3RydWV9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNvbW1vblN0eWxlcywgZGVza3RvcFN0eWxlcywgbW9iaWxlU3R5bGVzLCBUYWJTdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlJztcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW4nO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG9uZSc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGxvZ29mdCBmcm9tICcuLy4uLy4uL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ29mdC5wbmcnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgLi4uY29tbW9uU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IGRlc2t0b3BTdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3hzJywgJ3NtJyldOiBUYWJTdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiBtb2JpbGVTdHlsZXNcclxufSkpXHJcblxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuICAgICAgey8qIERvd25sb2FkIEFwcCBTZWN0aW9uICovfVxyXG5cclxuICAgICAgey8qIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnNlY3Rpb259ICR7Y2xhc3Nlcy5kb3dubG9hZEFwcH1gfVxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3N0YXRpYy9pbWFnZXMvZG93bmxvYWQuanBnKVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17OH0gbWQ9ezh9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRvd25sb2FkVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRSWSBPVVIgQVBQIE9OIFlPVVIgTU9CSUxFIFBIT05FXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRvd25sb2FkQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5HRVQgWU9VUiBBUFAgVE9EQVk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dubG9hZExpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dvb2dsZXBsYXkucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXBwc3RvcmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPiAqL31cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuRm9vdGVyfT5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbGc9ezR9IG1kPXszfSBzbT17M30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ29mdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNvY2lhbE1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBJbmZvfT5GcmllbmR6cHJvZHVjdHMgaXMgYSBwbGF0Zm9ybSB3aXRoIHN1Y2ggYW4gaW5ub3ZhdGl2ZSBpZGVhIHRvIHNlbGwvIHB1cmNoYXNlIG9yIHJlcXVlc3QgYSB3aWRlIHJhbmdlIG9mIGl0ZW1zIHdpdGhpbiB0aGUgY29sbGVnZSBjYW1wdXMuIEJlc2lkZXMsIHlvdSBjb3VsZCBnZXQgaW5mb3JtYXRpb24gb2YgdmFyaW91cyBldmVudHMgaGVsZCBpbiBjb2xsZWdlcyB0aHJvdWdob3V0IEluZGlhLjwvcD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxwPkZPTExPVyBVUyA8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vRnJpZW5kelByb2R1Y3QtMTE0NjI4MTY3MzM4NTQ3XCI+PEZhY2Vib29rSWNvbiBjb2xvcj1cIiNmZmZcIiAvPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9mcmllbmR6X3Byb2R1Y3Q/aWdzaGlkPXVibWpwdW9xdnNtNVwiPjxJbnN0YWdyYW1JY29uIGNvbG9yPVwiI2ZmZlwiIC8+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxUd2l0dGVySWNvbiBjb2xvcj1cIiNmZmZcIiAvPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48WW91VHViZUljb24gY29sb3I9XCIjZmZmXCIgLz48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PExpbmtlZEluSWNvbiBjb2xvcj1cIiNmZmZcIiAvPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs4fSBtZD17OX0gc209ezl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvb3Rlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PHA+UE9QVUxBUiBDT0xMRUdFUzwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9kdWN0cz9zPW5pdC1qYWxhbmRoYXJcIj5OSVQgSmFsYW5kaGFyPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2R1Y3RzP3M9bml0LWRlbGhpXCI+TklUIERlbGhpPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2R1Y3RzP3M9bml0LWt1cnVrc2hldHJhXCI+TklUIEt1cnVrc2hldHJhPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2R1Y3RzP3M9bml0LWRlbGhpXCI+SUlUIERlbGhpPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PHA+VXNlZnVsIExpbmtzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaT48TGluayBocmVmPVwiL1wiPkNhcmVlcnM8L0xpbms+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+UHJpdmFjeSBQb2xpY3k8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvdGVybXMtYW5kLWNvbmRpdGlvbnNcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdERldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PHA+Q29udGFjdDwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+PEhvbWVJY29uIGNvbG9yPVwiI2ZmZlwiIC8+SmFsYW5kaGFyLCBQdW5qYWI8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJtYWlsdG86aW5mb0BmcmllbmR6cHJvZHVjdHMuY29tXCI+PE1haWxJY29uIGNvbG9yPVwiI2ZmZlwiIC8+aW5mb0BmcmllbmR6cHJvZHVjdHMuY29tPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwidGVsOis5MTcwMDMzNTExXCI+PFBob25lSWNvbiBjb2xvcj1cIiNmZmZcIiAvPisgOTE3MDAzMzUxMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cInRlbDorOTE3MDAzMzUxMVwiPjxQaG9uZUljb24gY29sb3I9XCIjZmZmXCIgLz4rIDkxNzAwMzM1MTE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvcHlyaWdodH0+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT57bW9tZW50KCkueWVhcigpfSBDb3B5cmlnaHRzIEFsbCByaWdodHMgUmVzZXJ2ZWQgV2Vic2l0ZSBQb3dlcmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy53b29kYm94ZGlnaXRhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V29vZCBCb3g8L2E+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIi8vIGltcG9ydCB7XHJcbi8vICAgc2Vjb25kYXJ5RGFyaywgYmFja2dyb3VuZENvbG9yLCBibHVlVGV4dCwgbWFpblRleHRcclxuLy8gfSBmcm9tICdzcmMvX3N0eWxlcy9jb2xvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gIEZvb3Rlcjp7XHJcbiAgICBwYWRkaW5nOiAnMnJlbSAwJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxNTE3MjgnXHJcbiAgfSxcclxuICBGb290ZXJNZW51OntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgJyYgdWwnOntcclxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgICcmIHVsIGxpJzp7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAuNXJlbSdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBwJzp7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBhJzp7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnXHJcbiAgICB9XHJcbiAgfSxcclxuICBTb2NpYWxNZW51OntcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgcGFkZGluZ0xlZnQ6MCxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGk6Zmlyc3QtY2hpbGQnOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBwJzoge1xyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIGEnOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMC44cmVtJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiAnMS4zZW0nLFxyXG4gICAgICBoZWlnaHQ6ICcxLjNlbScsXHJcbiAgICAgIGZpbGw6ICcjZmZmJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nbzp7XHJcbiAgICB3aWR0aDonMTQ4cHgnXHJcbiAgfSxcclxuICBjb21wSW5mbzp7XHJcbiAgICBjb2xvcjonI2ZmZicsXHJcbiAgICBwYWRkaW5nUmlnaHQ6JzJyZW0nXHJcbiAgfSxcclxuICBDb3B5cmlnaHQ6e1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzE1MTcyOGYwJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJiBwJzp7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnXHJcbiAgICB9LFxyXG4gICAgJyYgYSc6e1xyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjondW5kZXJsaW5lICFpbXBvcnRhbnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBkb3dubG9hZEFwcDoge1xyXG4gICAgcGFkZGluZzogXCIzcmVtIDBcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyMzUsIDIzOCwgMjM5LCAwLjYpXCIsXHJcbiAgICAgIHpJbmRleDogXCIxXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRUaXRsZToge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHpJbmRleDogXCIyXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgIFwiJiBoM1wiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMyQTY2RUFcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkb3dubG9hZENvbnRlbnQ6IHtcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IFwiMlwiLFxyXG4gICAgd2lkdGg6IFwibWF4LWNvbnRlbnRcIixcclxuICAgIFwiJiBoNVwiOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWN0RGV0YWlsczp7XHJcbiAgICAnJiBhJzp7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBzcGFuJzp7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZvbnRTaXplOicxOHB4JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6e1xyXG4gICAgICBmb250U2l6ZTonMThweCcsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCdcclxuICAgIH1cclxuICB9LFxyXG4gIGRvd25sb2FkTGlua3M6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgd2lkdGg6IFwiNDglXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGltZ1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW9iaWxlU3R5bGVzID0ge1xyXG4gIENvcHlyaWdodDp7XHJcbiAgICBwYWRkaW5nOicwLjVyZW0gMXJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyLjlyZW0nLFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgZm9udFNpemU6ICcxNHB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgRm9vdGVyOntcclxuICAgIHBhZGRpbmdUb3A6JzFyZW0nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzAnXHJcbiAgfSxcclxuICBGb290ZXJNZW51OiB7XHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbWFyZ2luOiAnMCcsXHJcbiAgICAgIGJvcmRlckJvdHRvbTonc29saWQgMXB4ICMzOTM5MzknLFxyXG4gICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgIHBhZGRpbmc6ICcwLjRyZW0gMCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBwJzp7XHJcbiAgICAgIG1hcmdpbjowXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGknOntcclxuICAgICAgbWFyZ2luQm90dG9tOicwLjNyZW0nXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgYSc6IHtcclxuICAgICAgZm9udFNpemU6ICcxNHB4J1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIHNwYW4nOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTRweCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ286e1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIG1hcmdpbjonYXV0bydcclxuICB9LFxyXG4gIGNvbnRhY3REZXRhaWxzOntcclxuICAgICcmIGEnOntcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgc3Bhbic6e1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIFNvY2lhbE1lbnU6IHtcclxuICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBwYWRkaW5nTGVmdDogJzAnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTowLFxyXG4gICAgICBib3JkZXJCb3R0b206J3NvbGlkIDFweCAjMzkzOTM5J1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6ICcxZW0nLFxyXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZG93bmxvYWRUaXRsZToge1xyXG4gICAgXCImIGgzXCI6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvd25sb2FkTGlua3M6IHtcclxuICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBJbmZvOntcclxuICAgIHBhZGRpbmdSaWdodDowXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFiU3R5bGVzID0ge1xyXG4gIENvcHlyaWdodDoge1xyXG4gICAgbWFyZ2luQm90dG9tOiAnMi45cmVtJ1xyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNrdG9wU3R5bGVzID0ge1xyXG4gIEZvb3Rlck1lbnU6e1xyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRUaXRsZToge1xyXG4gICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgfSxcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgQ2hhdEljb24gZnJvbSBcIi4uLy4uLy4uL2NoYXQvY29tcG9uZW50cy9DaGF0SWNvblwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc05vbmVcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgdXNlTmF2YmFyIGZyb20gXCIuLi91dGlscy91c2VOYXZiYXJcIjtcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFBvcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBjb21tb25TdHlsZXMsIGRlc2t0b3BTdHlsZXMsIG1vYmlsZVN0eWxlcywgVGFiU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBBdXRoSWNvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2dpbl9SZWdpc3RlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IFwic29saWQgMXB4ICNjY2NcIixcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiksXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTJjaFwiLFxyXG4gICAgICBcIiY6Zm9jdXNcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjIwY2hcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAuLi5jb21tb25TdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiBkZXNrdG9wU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiBUYWJTdHlsZXMsXHJcbn0pKTtcclxuaW1wb3J0IHsgc2hvd01vZGFsIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aE1vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBtb2RhbE9wZW4gfSkge1xyXG4gIGNvbnN0IHsgaXNTY3JvbGxlZCwgbmF2QmFyUmVmIH0gPSB1c2VOYXZiYXIoKTtcclxuXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthdXRoTW9kYWwsIHNldGF1dGhNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RpbWVvdXQsIHNldHRpbWVvdXRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLmFjY2Vzc1Rva2VuKTtcclxuXHJcbiAgY29uc3QgZ290b19jb21taW5nU29vbiA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL2NvbWluZy1zb29uXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNsb3NlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbigocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gZm9jdXMgdG8gdGhlIGJ1dHRvbiB3aGVuIHdlIHRyYW5zaXRpb25lZCBmcm9tICFvcGVuIC0+IG9wZW5cclxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByZXZPcGVuLmN1cnJlbnQgPT09IHRydWUgJiYgb3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2T3Blbi5jdXJyZW50ID0gb3BlbjtcclxuICB9LCBbb3Blbl0pO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RQcm9kdWN0ID0gKGUpID0+IHtcclxuICAgIHNldGF1dGhNb2RhbChmYWxzZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Bvc3RcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi8/c2lnbnVwPW9wZW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdEV2ZW50ID0gKGUpID0+IHtcclxuICAgIHNldGF1dGhNb2RhbChmYWxzZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Bvc3QvZXZlbnRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi8/c2lnbnVwPW9wZW5cIik7ICAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHNldHRpbWVvdXQoXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzP3M9XCIgKyB2YWx1ZSk7XHJcbiAgICAgIH0sIDYwMClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgaWQ9XCJuYXZiYXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBpc1Njcm9sbGVkICYmIGNsYXNzZXMuc2Nyb2xsZWQpfVxyXG4gICAgICByZWY9e25hdkJhclJlZn1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmxvZ28sXHJcbiAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsZWQgJiYgY2xhc3Nlcy5sb2dvU2Nyb2xsZWRcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuTWVudX0+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PSBcIi9wcm9kdWN0cz90eXBlPWJ1eVwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3R5cGU9YnV5XCI+QnV5PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PSBcIi9wcm9kdWN0cz90eXBlPXJlbnRhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3R5cGU9cmVudGFsXCI+UmVudDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9ldmVudHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+RXZlbnRzPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2J1eS1yZXF1ZXN0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1eS1yZXF1ZXN0XCI+UmVxdWVzdHM8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcG9zdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUxpc3RQcm9kdWN0fT5TZWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Bvc3QvZXZlbnRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVMaXN0RXZlbnR9PkFkZCBFdmVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9mZWVkYmFja1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mZWVkYmFja1wiPkZlZWRiYWNrPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICByZWY9e2FuY2hvclJlZn1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/IFwiTW9yZVwiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UG9wcGVyXHJcbiAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8R3Jvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjZW50ZXIgdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjZW50ZXIgYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVUb2dnbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNJdGVtPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPlByaXZhY3kgUG9saWN5PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiPlRlcm1zICZhbXA7IENvbmRpdGlvbnM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5NZW51UmlnaHR9PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxDaGF0SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zTm9uZUljb24gLz5cclxuICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QXV0aEljb24gbW9kYWxPcGVuPXthdXRoTW9kYWx9IC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCIvLyBpbXBvcnQge1xyXG4vLyAgIHNlY29uZGFyeURhcmssIGJhY2tncm91bmRDb2xvciwgYmx1ZVRleHQsIG1haW5UZXh0XHJcbi8vIH0gZnJvbSAnc3JjL19zdHlsZXMvY29sb3JzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vblN0eWxlcyA9IHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIHRvcDogXCIwXCIsXHJcbiAgICBsZWZ0OiBcIjBcIixcclxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICB6SW5kZXg6IFwiOTlcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCBlYXNlLWluIDM1MG1zXCIsXHJcbiAgfSxcclxuICBzY3JvbGxlZDoge1xyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIHRvcDogXCIwXCIsXHJcbiAgICBsZWZ0OiBcIjBcIixcclxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICB6SW5kZXg6IFwiOTlcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDE0cHggMThweCByZ2JhKDAsMCwwLDAuMSlcIixcclxuICB9LFxyXG4gIE1lbnU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxyXG4gICAgXCImIGxpXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMS4zcmVtXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGxpIHVsIGxpXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBsaTpob3ZlciBhXCI6IHtcclxuICAgICAgY29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGxpOmhvdmVyIC5NdWlMaXN0LXJvb3QgYVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgIH0sXHJcbiAgICBcIiYgbGkuYWN0aXZlIGFcIjoge1xyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10aGVtZSlcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYnV0dG9uXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGJ1dHRvbjpob3ZlciAuTXVpQnV0dG9uLWxhYmVsXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiBcInZhcigtLXRoZW1lKVwiXHJcbiAgICB9LFxyXG4gICAgXCImIGJ1dHRvbiAuTXVpVG91Y2hSaXBwbGUtcm9vdFwiOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgTWVudVJpZ2h0OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxyXG4gICAgXCImIGxpXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIG1hcmdpbjogXCIxcmVtIDBcIixcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIGhlaWdodDogXCI4NXB4XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCBlYXNlLWluIDM1MG1zXCIsXHJcbiAgfSxcclxuICBsb2dvU2Nyb2xsZWQ6IHtcclxuICAgIG1hcmdpbjogXCIwLjJyZW0gMFwiLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgaGVpZ2h0OiBcIjY1cHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZVN0eWxlcyA9IHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWJTdHlsZXMgPSB7XHJcbiAgTWVudToge1xyXG4gICAgJyYgbGknOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMXJlbSdcclxuICAgIH0sXHJcbiAgICAnJiBhJzoge1xyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2t0b3BTdHlsZXMgPSB7XHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIjtcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMYWJlbEltcG9ydGFudEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MYWJlbEltcG9ydGFudFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCI7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgQWNjb3VudEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3hcIjtcclxuaW1wb3J0IEhvbWVSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVSb3VuZGVkXCI7XHJcbmltcG9ydCBFdmVudE5vdGVSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V2ZW50Tm90ZVJvdW5kZWRcIjtcclxuaW1wb3J0IExvY2FsTWFsbFJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsUm91bmRlZFwiO1xyXG5pbXBvcnQgTGl2ZVR2Um91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXZlVHZSb3VuZGVkXCI7XHJcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0TGlzdEJ1bGxldGVkXCI7XHJcbmltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwXCI7XHJcbmltcG9ydCBOYXZpZ2F0ZU5leHRSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dFJvdW5kZWRcIjtcclxuaW1wb3J0IEZlZWRiYWNrSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZlZWRiYWNrXCI7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9sb2dvLnBuZydcclxuXHJcbmltcG9ydCBFeHBhbmRMZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiO1xyXG5pbXBvcnQgRXhwYW5kTW9yZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGNvbW1vblN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVuYXV0aGVudGljYXRlZCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IENoYXRNZXNzYWdlSWNvbiBmcm9tIFwiLi4vLi4vLi4vY2hhdC9jb21wb25lbnRzL0NoYXRJY29uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAuLi5jb21tb25TdHlsZXMsXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFwcEJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci51c2VyKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGltZW91dCwgc2V0dGltZW91dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldHNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuQU1lbnUsIHNldE9wZW5BTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuTWVudSghb3Blbk1lbnUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFTdWJtZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkFNZW51KCFvcGVuQU1lbnUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW29wZW5zZWFyY2gsIHNldG9wZW5zZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0b3BlbnNlYXJjaCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldG9wZW5zZWFyY2goZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrQXdheSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgZGlzcGF0Y2godW5hdXRoZW50aWNhdGVkKCkpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgLy8gICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAvLyAgIHNldHRpbWVvdXQodmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlLCB0aW1lb3V0KTtcclxuICAgIHNldHNlYXJjaFZhbHVlKHZhbHVlKTtcclxuICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBzZXR0aW1lb3V0KFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cz9zPVwiICsgdmFsdWUpO1xyXG4gICAgICB9LCA2MDApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYWNoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cz9zPVwiICsgc2VhcmNoVmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFNlYXJjaEFwcEJhckljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9PlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFjaENsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaFwiIH19XHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVNlYXJjaENsb3NlfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMaXN0UHJvZHVjdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcG9zdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiLz9zaWdudXA9b3BlblwiKTsgICBcclxuXHJcbiAgICAgIC8vIHNldGF1dGhNb2RhbCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMaXN0RXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgLy8gc2V0YXV0aE1vZGFsKGZhbHNlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh1c2VyLmlkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Bvc3QvZXZlbnRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi8/c2lnbnVwPW9wZW5cIik7ICAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsaWNrQXdheX0+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLkFwcGJhckJnfT5cclxuICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8RHJhd2VyIG9wZW49e29wZW59IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlQmFyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhvbWVSb3VuZGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3RzP3R5cGU9YnV5XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09IFwiL3Byb2R1Y3RzP3R5cGU9YnV5XCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsTWFsbFJvdW5kZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJCdXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0cz90eXBlPXJlbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PSBcIi9wcm9kdWN0cz90eXBlPXJlbnRhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbE1hbGxSb3VuZGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2V2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2V2ZW50c1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV2ZW50Tm90ZVJvdW5kZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFdmVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAvLyBocmVmPXshYWNjZXNzVG9rZW4gPyBcIi8/c2lnbnVwPW9wZW5cIiA6IFwiL3Bvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGlzdFByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Bvc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTZWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYnV5LXJlcXVlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9idXktcmVxdWVzdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdExpc3RCdWxsZXRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJlcXVlc3RzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGhyZWY9eyFhY2Nlc3NUb2tlbiA/IFwiLz9zaWdudXA9b3BlblwiIDogXCIvcG9zdC9ldmVudFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaXN0RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Bvc3QvZXZlbnRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBZGQgRXZlbnRzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZmVlZGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9mZWVkYmFja1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmVlZGJhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVN1Ym1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtvcGVuTWVudSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuTWVudX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFja0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFib3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJpdmFjeSBQb2xpY3lcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUZXJtcyAmYW1wOyBDb25kaXRpb25zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIHthY2Nlc3NUb2tlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVBU3VibWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBY2NvdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcGVuQU1lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuQU1lbnV9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGVcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPEFjY291bnRDaXJjbGUgLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVmlldyBQcm9maWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZS9lZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGUvZWRpdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFZGl0IFByb2ZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGVcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVibGlzaGVkIEFkZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlL2V2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL2V2ZW50c1wiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdWJsaXNoZWQgRXZlbnRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZS9yZXF1ZXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL3JlcXVlc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlB1Ymxpc2hlZCBSZXF1ZXN0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGUvZmF2b3VyaXRlLWV2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL2Zhdm91cml0ZS1ldmVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmF2b3VyaXRlIEV2ZW50c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGUvZmF2b3VyaXRlLXByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGUvZmF2b3VyaXRlLXByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZhdm91cml0ZSBwcm9kdWN0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvcmVxdWVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wb3N0L3JlcXVlc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWRkIFByb2R1Y3QgUmVxdWVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMb2dvdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IHNyYz17bG9nb30gLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SWNvbnN9PlxyXG4gICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPENoYXRNZXNzYWdlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxN30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hPcGVufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIHtvcGVuc2VhcmNoICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhY2hDbGlja31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaGJ0bn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFjaENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgey8qIHtvcGVuc2VhcmNoICYmIDxTZWFyY2hBcHBCYXJJY29uIC8+fSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjb21tb25TdHlsZXMgPSB7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBBcHBiYXJCZzp7XHJcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICBjb2xvcjogJyMzMzMnXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogXCIycmVtXCIsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBmdWxsTGlzdDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgaGVpZ2h0OiBcIjUwcHhcIixcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcclxuICB9LFxyXG4gIG1lbnVJY29uczoge1xyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIHNpZGVCYXI6IHtcclxuICAgIHdpZHRoOiBcIjI4MHB4XCIsXHJcbiAgICBcIiYgLk11aURyYXdlci1wYXBlclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjI4MHB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlCYWNrZHJvcC1yb290XCI6IHtcclxuICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGFcIjoge1xyXG4gICAgICBjb2xvcjogXCIjMzMzXCIsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYS5hY3RpdmVcIjoge1xyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10aGVtZSlcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYS5hY3RpdmUgc3ZnXCI6IHtcclxuICAgICAgY29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXHJcbiAgICBsZWZ0OiBcIjBcIixcclxuICAgIHpJbmRleDogXCIxMDBcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgdG9wOiBcIjBcIixcclxuICAgIGhlaWdodDogXCI1N3B4XCIsXHJcbiAgfSxcclxuICBzZWFyY2hidG46IHtcclxuICAgIGhlaWdodDogXCIzNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgcGFkZGluZzogXCI1cHggMTBweFwiLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRGVza3RvcE5hdmJhciBmcm9tICcuL0Rlc2t0b3AnXHJcbmltcG9ydCBNb2JpbGVOYXZiYXIgZnJvbSAnLi9Nb2JpbGUnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZm9ybTp7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXHJcbiAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06e1xyXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9kYWw6e1xyXG4gICAgcGFkZGluZzogJzAuNXJlbSdcclxuICB9XHJcbn0pKVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lID0+IHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpKVxyXG5cclxuICBjb25zdCBIZWFkZXJDb21wb25lbnQgPSBtYXRjaGVzID8gPERlc2t0b3BOYXZiYXIgbW9kYWxPcGVuPXtoYW5kbGVDbGlja09wZW59IC8+IDogPE1vYmlsZU5hdmJhciBtb2RhbE9wZW49e2hhbmRsZUNsaWNrT3Blbn0gLz5cclxuXHJcbiAgY29uc3QgQ29sbGVnZU5hbWVzID0gW1xyXG4gICAgeyB0aXRsZTogJ1RoZSBTaGF3c2hhbmsgUmVkZW1wdGlvbicgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgR29kZmF0aGVyJ30sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdvZGZhdGhlcjogUGFydCBJSScgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgRGFyayBLbmlnaHQnIH0sXHJcbiAgICB7IHRpdGxlOiAnMTIgQW5ncnkgTWVuJyB9LFxyXG4gICAgeyB0aXRsZTogXCJTY2hpbmRsZXIncyBMaXN0XCIgfSxcclxuICAgIHsgdGl0bGU6ICdQdWxwIEZpY3Rpb24nIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJyB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHb29kLCB0aGUgQmFkIGFuZCB0aGUgVWdseSd9LFxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtIZWFkZXJDb21wb25lbnR9XHJcbiAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlNpZ25VcDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgIFRvIHN1YnNjcmliZSB0byB0aGlzIHdlYnNpdGUsIHBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgaGVyZS4gV2Ugd2lsbCBzZW5kIHVwZGF0ZXNcclxuICAgICAgICAgICAgb2NjYXNpb25hbGx5LlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZm5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGlkPVwibG5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTm9cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgIGlkPVwidW5pdmVyc2l0eVwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Q29sbGVnZU5hbWVzfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDb2xsZWdlXCIgZnVsbFdpZHRoIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2lnblVwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC8+XHJcbiAgKVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIHVzZU5hdmJhciAoKSB7XHJcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IG5hdkJhclJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSBlID0+IHtcclxuICAgIGNvbnN0IG9mZnNldCA9IGUuc3JjRWxlbWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcFxyXG5cclxuICAgIGlmIChuYXZCYXJSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRJc1Njcm9sbGVkKG9mZnNldCA+IG5hdkJhclJlZi5jdXJyZW50LmNsaWVudEhlaWdodClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBoYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYXZCYXJSZWYsXHJcbiAgICBpc1Njcm9sbGVkXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VOYXZiYXJcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSBcIi4vRm9vdGVyL0JvdHRvbU5hdmlnYXRpb25cIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgY29tbW9uU3R5bGVzLCBkZXNrdG9wU3R5bGVzLCBtb2JpbGVTdHlsZXMsIFRhYlN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIC4uLmNvbW1vblN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IGRlc2t0b3BTdHlsZXMsXHJcbiAgLy8gW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4bFwiKV06IFRhYlN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXTogbW9iaWxlU3R5bGVzLFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0aXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSgodGhlbWUpID0+IHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcbiAgY29uc3QgQm90dG9tTmF2ID0gbWF0Y2hlcyA/IDxCb3R0b21OYXZpZ2F0aW9uIC8+IDogbnVsbDtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuV3JhcHBlcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFpbn0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICB7cHJvcHMubm9mb290ZXIgPT0gdHJ1ZSA/IFwiXCIgOiA8Rm9vdGVyIC8+fVxyXG4gICAgICB7cGF0aC5pbmNsdWRlcyhcImNoYXRcIikgPyBudWxsIDogQm90dG9tTmF2fVxyXG4gICAgICB7aXNMb2FkZWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlcn0+XHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBpbXBvcnQge1xyXG4vLyAgIHNlY29uZGFyeURhcmssIGJhY2tncm91bmRDb2xvciwgYmx1ZVRleHQsIG1haW5UZXh0XHJcbi8vIH0gZnJvbSAnc3JjL19zdHlsZXMvY29sb3JzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vblN0eWxlcyA9IHtcclxuICBXcmFwcGVyOiB7XHJcbiAgICAnJiA6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xyXG4gICAgICB3aWR0aDogJzEwcHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjVGNUY1JyxcclxuICAgIH0sXHJcbiAgICAnJiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS10aGVtZSknLFxyXG4gICAgfSxcclxuICAgICcmIGEnOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXIgIWltcG9ydGFudCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiAuZGlhbG9nZUN1c3RvbSAuTXVpR3JpZC1zcGFjaW5nLXhzLTgnOntcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luOiAnMCdcclxuICAgIH1cclxuICB9LFxyXG4gIE1haW46IHtcclxuICAgICcmIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXNjcm9sbGJhcic6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgLmltYWdlLWdhbGxlcnktY29udGVudCAuaW1hZ2UtZ2FsbGVyeS1zbGlkZSAuaW1hZ2UtZ2FsbGVyeS1pbWFnZSc6e1xyXG4gICAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gODBweCknLFxyXG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9hZGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHdpZHRoOiAnMTAwdlcnLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiA5OTk5LFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC43KSdcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW9iaWxlU3R5bGVzID0ge1xyXG4gIE1haW46IHtcclxuICAgIHBhZGRpbmdUb3A6ICc1NnB4JyxcclxuICAgICcmIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXNjcm9sbGJhcic6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgYm90dG9tOiAnMCdcclxuICAgIH0sXHJcbiAgICAnJiAuc3dpcGVyU2Nyb2xsYmFyRHJhZyc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1MiwgMTMwLCAyNiknXHJcbiAgICB9LFxyXG4gICAgJyYgLmltYWdlLWdhbGxlcnktY29udGVudCAuaW1hZ2UtZ2FsbGVyeS1zbGlkZSAuaW1hZ2UtZ2FsbGVyeS1pbWFnZSc6IHtcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFiU3R5bGVzID0ge1xyXG4gIE1haW46IHtcclxuICAgIHBhZGRpbmdUb3A6ICc1NnB4J1xyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNrdG9wU3R5bGVzID0ge1xyXG4gIE1haW46IHtcclxuICAgIHBhZGRpbmdUb3A6ICc3LjVyZW0nXHJcbiAgfSxcclxuICBXcmFwcGVyOiB7XHJcbiAgICAnJiAuTXVpQ29udGFpbmVyLW1heFdpZHRoWGwnOiB7XHJcbiAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgbWF4V2lkdGg6ICcxNDA0cHgnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5hcGlfdXJsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ251cChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL3NpZ24tdXBcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVTaWdudXAoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci9zaW1wbGUtc2lnbi11cFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvb2dsZVNpZ251cChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL2dvb2dsZS1zaWduLXVwXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci9sb2dpblwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2ZpbGUoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvdXBkYXRlL1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9maWxlSW1nKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2ZpbGUtaW1nL3VwZGF0ZVwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRQcm9kdWN0KGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3RcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC9kZWxldGUvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlUmVxdWVzdChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0L2RlbGV0ZS9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRkRXZlbnQoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlRXZlbnQoZGF0YSwgaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2V2ZW50L1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVFdmVudChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQvZGVsZXRlL1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEZhdm91cml0ZShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9mYXZvdXJpdGVcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFVzZXJGYXZvdXJpdGUodXNlcl9pZCwgdHlwZSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci1mYXZvdXJpdGUvXCIgKyB1c2VyX2lkICsgXCIvXCIgKyB0eXBlO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsLCApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlclJlcXVlc3RzKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QtcmVxdWVzdC91c2VyL1wiICsgdXNlcl9pZDtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCwgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZFByb2R1Y3RSZXF1ZXN0KGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QtcmVxdWVzdFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0UmVxdWVzdChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0L1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRBUEkoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcmVzZXQtcGFzc3dvcmRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKSB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKGBSZXF1ZXN0IHJlamVjdGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEZXZpY2VUb2tlbih1c2VyX2lkLCB0b2tlbikge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZGV2aWNlLXRva2VuL1wiICsgdXNlcl9pZCArIFwiL1wiICsgdG9rZW47XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwsIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlFbWFpbCh0b2tlbikge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdmVyaWZ5LWVtYWlsLXRva2VuL1wiICsgdG9rZW47XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwsIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbiIsImNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5hcGlfdXJsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgUmVxdWVzdCByZWplY3RlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhbEdldFJlcXVlc3QodXJsKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGlhbG9ncyh1c2VyX2lkLCBxKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9kaWFsb2dzL1wiICsgdXNlcl9pZDtcblxuICAgIGlmIChxKSB7XG4gICAgICAgIHVybCA9IHVybCArIHE7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgcmV0dXJuIGdlbmVyYWxHZXRSZXF1ZXN0KHVybClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoZGlhbG9nX2lkLCBxKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9tZXNzYWdlcy9cIiArIGRpYWxvZ19pZDtcblxuICAgIGlmIChxKSB7XG4gICAgICAgIHVybCA9IHVybCArIHE7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgcmV0dXJuIGdlbmVyYWxHZXRSZXF1ZXN0KHVybClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2UoZGF0YSkge1xuICAgIGxldCB1cmwgPSBBUElfVVJMICsgXCIvbWVzc2FnZVwiO1xuXG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVhZE1zZyh1c2VyX2lkKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91bnJlYWQtbWVzc2FnZS9cIiArIHVzZXJfaWQ7XG5cbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIHJldHVybiBnZW5lcmFsR2V0UmVxdWVzdCh1cmwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQWxsKGRpYWxvZ19pZCwgdXNlcl9pZCkge1xuICAgIGxldCB1cmwgPSBBUElfVVJMICsgXCIvbWFyay1yZWFkLWRpYWxvZy9cIiArIGRpYWxvZ19pZCArICcvJyArIHVzZXJfaWQ7XG5cbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIHJldHVybiBnZW5lcmFsR2V0UmVxdWVzdCh1cmwpXG59IiwiY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LmFwaV91cmw7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFVuaXZlcnNpdGllcyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91bml2ZXJzaXRpZXMvZ2xvYmFsL3NlYXJjaC9cIiArIHE7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2F0ZWdvcmllcyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBgL3Byb2R1Y3QtY2F0ZWdvcmllcy1zZWFyY2gvJHtxfWA7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2l0aWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvY2l0aWVzL3NlYXJjaC8ke3F9YDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0c1wiO1xyXG4gIGlmIChxKSB7XHJcbiAgICB1cmwgPSB1cmwgKyBxO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0L1wiICsgaWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlbGxlcihpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci9cIiArIGlkO1xyXG5cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1jYXRlZ29yaWVzXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRDYXRlZ29yaWVzKCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQtY2F0ZWdvcmllc1wiO1xyXG5cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaXRpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9jaXRpZXNcIjtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlRGF0YVwiLCByZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRzKHEsIHNob3dhbGwgPSBmYWxzZSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnRzXCI7XHJcbiAgaWYgKHNob3dhbGwpIHtcclxuICAgIHVybCA9IHVybCArIFwiL1wiICsgc2hvd2FsbDtcclxuICB9XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnQoaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2V2ZW50L1wiICsgaWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWVzdChpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0L1wiICsgaWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEV2ZW50Q2F0ZWdvcmllcyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBgL2V2ZW50LWNhdGVnb3JpZXMtc2VhcmNoLyR7cX1gO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZU9yZGVyKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL29yZGVyXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNvbnRhY3QoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvY29udGFjdFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVWaXNpdChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyLXZpc2l0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxGZWVkYmFjayhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9mZWVkYmFja1wiO1xyXG4gIGlmIChxKSB7XHJcbiAgICB1cmwgPSB1cmwgKyBxO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGEuZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQnV5UmVxdWVzdHMocSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0P3BhZ2luYXRlPTIwXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcmdvdFBhc3N3b3JkQVBJKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2ZvcmdvdC1wYXNzd29yZFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlUGFzc3dvcmRBUEkoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXBkYXRlLXBhc3N3b3JkXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ2hhdFVwZGF0ZSh1c2VyX2lkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9zZW5kLWNoYXQtbWVzc2FnZS9cIiArIHVzZXJfaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRWZXJpZnlFbWFpbCh1c2VyX2lkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9zZW5kLXZlcmlmeS1lbWFpbC9cIiArIHVzZXJfaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9wZW5TdGF0dXMoZGlhbG9nX2lkLCBzdGF0dXMsIHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID1cclxuICAgIEFQSV9VUkwgKyBcIi91cGRhdGUtb3Blbi1zdGF0dXMvXCIgKyBkaWFsb2dfaWQgKyBcIi9cIiArIHN0YXR1cyArIFwiL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZEZlZWRiYWNrTWVzc2FnZShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9zZW5kLWZlZWRiYWNrLW1lc3NhZ2VcIjtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpIHtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoYFJlcXVlc3QgcmVqZWN0ZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBCYWRnZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIjtcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFNlcnZpY2VcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgQ2hhdFNlcnZpY2UgZnJvbSBcIi4uLy4uL3JlZHV4L3NlcnZpY2VzL2NoYXQtc2VydmljZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdW5yZWFkTXNnIH0gZnJvbSBcIi4uLy4uL2FwaXMvY2hhdC1hcGlcIjtcbmltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSAnY29ubmVjdHljdWJlJ1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHBDb25maWcnXG5pbXBvcnQgeyBjaGF0VW5hdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhdFVzZXJcIjtcbmltcG9ydCB7IGNoYXRSZXNldCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXRDb25uZWN0ZWRcIjtcbmltcG9ydCBjaGF0U2VydmljZSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VydmljZXMvY2hhdC1zZXJ2aWNlXCI7XG5pbXBvcnQgeyB1blNlbGVjdGVkRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc2VsZWN0ZWREaWFsb2dcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBDaGF0TWVzc2FnZUljb24gPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0aFVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci51c2VyKTtcbiAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci5hY2Nlc3NUb2tlbik7XG4gICAgY29uc3QgY2hhdFVucmVhZENvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jaGF0VW5yZWFkQ291bnQpO1xuXG4gICAgY29uc3QgW2NvdW50LCBzZXRjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGF1dGhVc2VyICYmIGF1dGhVc2VyLmNvbm5lY3R5Y3ViZV91c2VyKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChjaGF0VW5hdXRoZW50aWNhdGVkKCkpXG4gICAgICAgICAgICBkaXNwYXRjaChjaGF0UmVzZXQoKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHVuU2VsZWN0ZWREaWFsb2coKSlcbiAgICAgICAgICAgIGxldCBpbml0ID0gQXV0aFNlcnZpY2UuaW5pdCgpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpbml0ICYmIGF1dGhVc2VyLmNvbm5lY3R5Y3ViZV91c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgICAgICAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGF1dGhVc2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfSkudGhlbigodXNlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcikgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVucmVhZE1zZyhhdXRoVXNlci5pZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGRhdGEgJiYgc2V0Y291bnQoZGF0YSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGNvbm5lY3RDaGF0ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IENSRURFTlRJQUxTID0ge1xuICAgICAgICAgICAgZW1haWw6IGF1dGhVc2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGhVc2VyLmNvbm5lY3R5Y3ViZV91c2VyLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBDT05GSUcgPSB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHNlc3Npb25FeHBpcmVkOiAoaGFuZGxlUmVzcG9uc2UsIHJldHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgaGFuZGxlUmVzcG9uc2UoKSBpZiB5b3UgZG8gbm90IHdhbnQgdG8gcHJvY2VzcyBhIHNlc3Npb24gZXhwaXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gYW4gZXJyb3Igd2lsbCBiZSByZXR1cm5lZCB0byBvcmlnaW4gcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVSZXNwb25zZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEpTIFNESyB2MlxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0eUN1YmUuY3JlYXRlU2Vzc2lvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXRyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgIGxldCBpbml0ID0gYXdhaXQgIENvbm5lY3R5Q3ViZS5pbml0KC4uLmFwcENvbmZpZy5jb25uZWN0eUN1YmVDb25maWcsIENPTkZJRyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluaXQpXG4gICAgICBpZihpbml0KXtcbiAgICAgICAgICBDb25uZWN0eUN1YmUubG9naW4oQ1JFREVOVElBTFMpXG4gICAgICAgICAgICAgIC50aGVuKChzZXNzaW9uKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb24nLHNlc3Npb24pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VXBMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIENvbm5lY3R5Q3ViZS5jaGF0Lm9uTWVzc2FnZUxpc3RlbmVyID0gb25NZXNzYWdlO1xuICAgICAgICBjb25zdCBvcHBvbmVudElkID0gMjA2NjY0NTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZ3JvdXBjaGF0JyxcbiAgICAgICAgICAgIGJvZHk6IFwiSG93IGFyZSB5b3UgdG9kYXk/XCIsXG4gICAgICAgICAgICBleHRlbnNpb246IHtcbiAgICAgICAgICAgICAgICBzYXZlX3RvX2hpc3Rvcnk6IDEsXG4gICAgICAgICAgICAgICAgZGlhbG9nX2lkOiAnNWY2ZjM2NzZjYThiZjQyYTc0NGMzZjRiJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmthYmxlOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVzc2FnZSA9IENvbm5lY3R5Q3ViZS5jaGF0LnNlbmQob3Bwb25lbnRJZCwgbWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgbWVzc2FnZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UodXNlcklkLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbQ29ubmVjdHlDdWJlLmNoYXQub25NZXNzYWdlTGlzdGVuZXJdIGNhbGxiYWNrOicsIHVzZXJJZCwgbWVzc2FnZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGF0Q2xpY2s9KCk9PntcbiAgICAgICAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvP3NpZ251cD1vcGVuJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jaGF0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUNoYXRDbGlja30+XG4gICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJ5b3UgaGF2ZXNcIiBjb2xvcj1cImluaGVyaXRcIj4gKi99XG4gICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17Y2hhdFVucmVhZENvdW50fSBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2FjY2Vzc1Rva2VuID8gJy9jaGF0JyA6ICcvP3NpZ251cD1vcGVuJ30+ICovfVxuICAgICAgICAgICAgICA8Q2hhdEljb24gLz5cbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TWVzc2FnZUljb247XG4iLCJpbXBvcnQgQ29ubmVjdHlDdWJlIGZyb20gJ2Nvbm5lY3R5Y3ViZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlTGlua0Zyb21VSUQodWlkKSB7XG4gIGlmICghdWlkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gQ29ubmVjdHlDdWJlLnN0b3JhZ2UucHJpdmF0ZVVybCh1aWQpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmF0aW9uQXR0YWNobWVudChmaWxlKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogZmlsZS5zaXplLFxuICAgIHVpZDogZmlsZS51aWQsXG4gICAgdHlwZTogZmlsZS5jb250ZW50X3R5cGUsXG4gICAgbmFtZTogZmlsZS5uYW1lLFxuICAgIHdpZHRoOiA0MDAsXG4gICAgaGVpZ2h0OiA0MDBcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0SW1hZ2VMaW5rRnJvbVVJRCB9IGZyb20gJy4uL2hlbHBlcnMvZmlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cbiAgY29uc3RydWN0b3IodXNlcikge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkXG4gICAgdGhpcy5hdmF0YXIgPSBVc2VyLmdldEF2YXRhclVybCh1c2VyLmF2YXRhcilcbiAgICB0aGlzLmxvZ2luID0gdXNlci5sb2dpblxuICAgIHRoaXMuY3VzdG9tX2RhdGEgPSB1c2VyLmN1c3RvbV9kYXRhID8gdXNlci5jdXN0b21fZGF0YSA6ICcnXG4gICAgdGhpcy5mdWxsX25hbWUgPSB1c2VyLmZ1bGxfbmFtZSB8fCB1c2VyLmxvZ2luXG4gICAgdGhpcy5waG9uZSA9IHVzZXIucGhvbmVcbiAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1c2VyLmNyZWF0ZWRfYXRcbiAgICB0aGlzLnVwZGF0ZWRfYXQgPSB1c2VyLnVwZGF0ZWRfYXRcbiAgICB0aGlzLmxhc3RfcmVxdWVzdF9hdCA9IHVzZXIubGFzdF9yZXF1ZXN0X2F0XG4gIH1cbiAgc3RhdGljIGdldEF2YXRhclVybChhdmF0YXJVSUQpIHtcbiAgICByZXR1cm4gZ2V0SW1hZ2VMaW5rRnJvbVVJRChhdmF0YXJVSUQpXG4gIH1cbn1cbiIsImltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSAnY29ubmVjdHljdWJlJ1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHBDb25maWcnXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcidcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSdcbi8vIGltcG9ydCB7IHNldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9jdXJyZW50VXNlcidcbmltcG9ydCB7IGdldEltYWdlTGlua0Zyb21VSUQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5pbXBvcnQgeyBjaGF0QXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhdFVzZXInXG5pbXBvcnQgeyBjaGF0Q29ubmVjdGlvbiB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhdENvbm5lY3RlZCdcbmltcG9ydCB7IGNoYXRVbnJlYWRDb3VudCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhdFVucmVhZCdcbmltcG9ydCB7IHB1c2hNZXNzYWdlIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9tZXNzYWdlcydcbi8vIGltcG9ydCB7IExvZ091dCB9IGZyb20gJy4uL3JlZHVjZXJzL2luZGV4J1xuXG5jbGFzcyBBdXRoU2VydmljZSB7XG4gIHN0YXRpYyBDVVJSRU5UX1VTRVJfU0VTU0lPTl9LRVkgPSBcIkNVUlJFTlRfVVNFUl9TRVNTSU9OX0tFWVwiO1xuICBzdGF0aWMgREVWSUNFX1RPS0VOX0tFWSA9IFwiREVWSUNFX1RPS0VOX0tFWVwiO1xuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ29ubmVjdHlDdWJlLmluaXQoLi4uYXBwQ29uZmlnLmNvbm5lY3R5Q3ViZUNvbmZpZyk7XG4gICAgcmV0dXJuIHJlcztcblxuICAgIC8vIGF3YWl0IENvbm5lY3R5Q3ViZS5jcmVhdGVTZXNzaW9uKHtcbiAgICAvLyAgICAgZW1haWw6J3Rlc3RAdGVzdC5jb20nLFxuICAgIC8vICAgICBwYXNzd29yZDondGVzdCdcbiAgICAvLyB9KVxuICAgIC8vIHJldHVybiB0aGlzLmF1dG9sb2dpbigpXG4gIH1cblxuICAvLyBhc3luYyBhdXRvbG9naW4oKSB7XG4gIC8vICAgICBjb25zdCBjaGVja1VzZXJTZXNzaW9uRnJvbVN0b3JlID0gYXdhaXQgdGhpcy5nZXRVc2VyU2Vzc2lvbigpXG4gIC8vICAgICBpZiAoY2hlY2tVc2VyU2Vzc2lvbkZyb21TdG9yZSkge1xuICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNoZWNrVXNlclNlc3Npb25Gcm9tU3RvcmUpXG4gIC8vICAgICAgICAgYXdhaXQgdGhpcy5zaWduSW4oeyBsb2dpbjogZGF0YS5sb2dpbiwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSlcbiAgLy8gICAgICAgICByZXR1cm4gJ2hvbWUnXG4gIC8vICAgICB9IGVsc2UgeyByZXR1cm4gJ2F1dGgnIH1cbiAgLy8gfVxuXG4gIGFzeW5jIGxvZ2luKHBhcmFtcykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBDb25uZWN0eUN1YmUuY3JlYXRlU2Vzc2lvbihwYXJhbXMpO1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gbmV3IFVzZXIoc2Vzc2lvbi51c2VyKTtcbiAgICBzZXNzaW9uLnVzZXIuYXZhdGFyID0gZ2V0SW1hZ2VMaW5rRnJvbVVJRChzZXNzaW9uLnVzZXIuYXZhdGFyKTtcbiAgICAvLyB3b3JrIGFyb3VuZFxuICAgIHNlc3Npb24udXNlci5mdWxsX25hbWUgPSBzZXNzaW9uLnVzZXIubG9naW47XG4gICAgc3RvcmUuZGlzcGF0Y2goY2hhdEF1dGhlbnRpY2F0ZWQoc2Vzc2lvbikpO1xuICAgIGNvbnN0IGN1c3RvbVNlc3Npb24gPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50VXNlciwge1xuICAgICAgcGFzc3dvcmQ6IHBhcmFtcy5wYXNzd29yZCxcbiAgICB9KTtcbiAgICB0aGlzLnNldFVzZXJTZXNzaW9uKGN1c3RvbVNlc3Npb24pO1xuICAgIHRoaXMuY29ubmVjdChjdXN0b21TZXNzaW9uLmlkLCBjdXN0b21TZXNzaW9uLnBhc3N3b3JkKTtcbiAgfVxuXG4gIC8vIGFzeW5jIHNpZ25VcChwYXJhbXMpIHtcbiAgLy8gICAgIGF3YWl0IENvbm5lY3R5Q3ViZS5jcmVhdGVTZXNzaW9uKClcbiAgLy8gICAgIGF3YWl0IENvbm5lY3R5Q3ViZS51c2Vycy5zaWdudXAocGFyYW1zKVxuICAvLyAgICAgcmV0dXJuIHRoaXMuc2lnbkluKHBhcmFtcylcbiAgLy8gfVxuXG4gIGFzeW5jIGNvbm5lY3QodXNlcklkLCBwYXNzd29yZCkge1xuICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gQ29ubmVjdHlDdWJlLmNoYXQuaXNDb25uZWN0ZWQ7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChjaGF0Q29ubmVjdGlvbigpKTtcbiAgICAgIHRoaXMuZ2V0VW5yZWFkKClcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuY29ubmVjdCh7IHVzZXJJZCwgcGFzc3dvcmQgfSkudGhlbigoZXJyb3IsIGNvbnRhY3RsaXN0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VXBMaXN0ZW5lcnMoKVxuICAgICAgICBzdG9yZS5kaXNwYXRjaChjaGF0Q29ubmVjdGlvbigpKTtcbiAgICAgICAgdGhpcy5nZXRVbnJlYWQoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIGdldFVucmVhZCgpIHtcbiAgICBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5tZXNzYWdlXG4gICAgICAudW5yZWFkQ291bnQoKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goY2hhdFVucmVhZENvdW50KHJlc3VsdC50b3RhbCkpXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bnJlYWQnLCByZWFzdWx0KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7IH0pO1xuICB9XG5cbiAgYXN5bmMgc2V0VXBMaXN0ZW5lcnMoKSB7XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQub25NZXNzYWdlTGlzdGVuZXIgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25NZXNzYWdlKHVzZXJJZCwgbWVzc2FnZSkge1xuICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xuICAgIHVzZXIgPSB1c2VyID8gSlNPTi5wYXJzZSh1c2VyKSA6IFwiXCI7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSwgdXNlcklkLCB1c2VyLmNvbm5lY3R5Y3ViZV91c2VyLmNvbm5lY3R5Y3ViZV9pZClcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuY29ubmVjdHljdWJlX3VzZXIgfHwgdXNlcklkID09IHVzZXIuY29ubmVjdHljdWJlX3VzZXIuY29ubmVjdHljdWJlX2lkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBtZXNzYWdlLm1lc3NhZ2UgPSBtZXNzYWdlLmJvZHlcbiAgICBtZXNzYWdlLmRldmljZV90b2tlbiA9IHVzZXIuZGV2aWNlX3Rva2VuXG4gICAgbWVzc2FnZS5ub3RpZiA9IHRydWVcbiAgICBzdG9yZS5kaXNwYXRjaChwdXNoTWVzc2FnZShtZXNzYWdlKSlcblxuICB9XG5cbiAgc2V0VXNlclNlc3Npb24odXNlclNlc3Npb24pIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSX1NFU1NJT05fS0VZLCBKU09OLnN0cmluZ2lmeSh1c2VyU2Vzc2lvbikpXG4gIH1cblxuICBnZXRVc2VyU2Vzc2lvbigpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSX1NFU1NJT05fS0VZKTtcbiAgfVxuXG4gIC8vIGFzeW5jIGxvZ291dCgpIHtcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIC8vICAgICBhd2FpdCBDb25uZWN0eUN1YmUubG9nb3V0KClcbiAgLy8gICAgIHN0b3JlLmRpc3BhdGNoKExvZ091dCgpKVxuICAvLyB9XG59XG5cbmNvbnN0IGF1dGhTZXJ2aWNlID0gbmV3IEF1dGhTZXJ2aWNlKClcblxuT2JqZWN0LmZyZWV6ZShhdXRoU2VydmljZSlcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFNlcnZpY2UiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBzZWFyY2hVbml2ZXJzaXRpZXMgfSBmcm9tICcuLi8uLi9hcGlzL2dsb2JhbC1hcGknO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHNpbXBsZVNpZ251cCwgbG9naW4sIGdvb2dsZVNpZ251cCB9IGZyb20gJy4uLy4uL2FwaXMvYXV0aC1hcGknO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgVmlzaWJpbGl0eSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBWaXNpYmlsaXR5T2ZmIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5T2ZmJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9ybToge1xyXG4gICAgcGFkZGluZzogJzEuNXJlbSAyLjByZW0nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW46ICcyLjVyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vZGFsOiB7XHJcbiAgICBwYWRkaW5nOiAnMC41cmVtJyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMTc3LCA5MCwgMTYpJyxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpQ2lyY3VsYXJQcm9ncmVzcy1jb2xvclByaW1hcnknOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhGb3JtID0gKHsgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0bmFtZSwgc2V0Zmlyc3RuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFzdG5hbWUsIHNldGxhc3RuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdW5pdmVyc2l0eSwgc2V0dW5pdmVyc2l0eV0gPSB1c2VTdGF0ZSh7IG5hbWU6ICcnIH0pO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0cGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG93cGFzc3dvcmQsIHNldHNob3dwYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1fcGFzc3dvcmQsIHNldGNvbmZpcm1fcGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG93Y29uZmlybV9wYXNzd29yZCwgc2V0c2hvd2NvbmZpcm1fcGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwaG9uZV9ubywgc2V0cGhvbmVfbm9dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJzLCBzZXRlcnJzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbdW5pdmVyc2l0aWVzLCBzZXR1bml2ZXJzaXRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFticmFuY2gsIHNldGJyYW5jaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtidG5sb2FkaW5nLCBzZXRidG5sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYmFja2Ryb3AsIHNldGJhY2tkcm9wXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmb3JtZXJycywgc2V0Zm9ybWVycnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93UmVkaXJlY3QsIHNldHNob3dSZWRpcmVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIHNldGZvcm1lcnJzKFtdKTtcclxuICAgIHN1Ym1pdFNpZ25VcCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdExvZ2luID0gKCkgPT4ge1xyXG4gICAgc2V0c2hvd1JlZGlyZWN0KGZhbHNlKTtcclxuICAgIHNldGZvcm1lcnJzKFtdKTtcclxuICAgIHNldGJ0bmxvYWRpbmcodHJ1ZSk7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9O1xyXG4gICAgbG9naW4oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgc2V0YnRubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0Zm9ybWVycnMocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRidG5sb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmJvZHkudXNlcjtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5ib2R5LnVzZXIuYXBpX3Rva2VuO1xyXG4gICAgICAgIGxldCBmYXZFdmVudHMgPSByZXNwb25zZS5ib2R5LmZhdkV2ZW50cztcclxuICAgICAgICBsZXQgZmF2UHJvZHVjdHMgPSByZXNwb25zZS5ib2R5LmZhdlByb2R1Y3RzO1xyXG4gICAgICAgIHNldExvZ2luKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKTtcclxuICAgICAgICBzZXRzaG93UmVkaXJlY3QodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFNpZ25VcCA9ICgpID0+IHtcclxuICAgIHNldHNob3dSZWRpcmVjdChmYWxzZSk7XHJcbiAgICBzZXRidG5sb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gbGV0IHVuaXZlcnNpdHlfaWQgPSB1bml2ZXJzaXRpZXMuZmluZChcclxuICAgIC8vICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PSB1bml2ZXJzaXR5Lm5hbWVcclxuICAgIC8vICk7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgLy8gZmlyc3RfbmFtZTogZmlyc3RuYW1lLFxyXG4gICAgICAvLyBsYXN0X25hbWU6IGxhc3RuYW1lLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIC8vIHVuaXZlcnNpdHlfaWQ6IHVuaXZlcnNpdHlfaWQuaWQsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgLy8gcGhvbmVfbnVtYmVyOiBwaG9uZV9ubyxcclxuICAgICAgLy8gYnJhbmNoOiBicmFuY2gsXHJcbiAgICB9O1xyXG4gICAgc2ltcGxlU2lnbnVwKGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgIHNldGJ0bmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldGZvcm1lcnJzKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHVzZXIgPSByZXNwb25zZS5ib2R5LnVzZXI7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuYm9keS51c2VyLmFwaV90b2tlbjtcclxuICAgICAgICBzZXRidG5sb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBsZXQgZmF2RXZlbnRzID0gcmVzcG9uc2UuYm9keS5mYXZFdmVudHM7XHJcbiAgICAgICAgbGV0IGZhdlByb2R1Y3RzID0gcmVzcG9uc2UuYm9keS5mYXZQcm9kdWN0cztcclxuICAgICAgICBzZXRMb2dpbih1c2VyLCBhY2Nlc3NUb2tlbiwgZmF2RXZlbnRzLCBmYXZQcm9kdWN0cyk7XHJcbiAgICAgICAgc2V0c2hvd1JlZGlyZWN0KHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRMb2dpbiA9ICh1c2VyLCBhY2Nlc3NUb2tlbiwgZmF2RXZlbnRzLCBmYXZQcm9kdWN0cykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codXNlciwgYWNjZXNzVG9rZW4pO1xyXG4gICAgZGlzcGF0Y2goYXV0aGVudGljYXRlZCh1c2VyLCBhY2Nlc3NUb2tlbiwgZmF2RXZlbnRzLCBmYXZQcm9kdWN0cykpO1xyXG4gICAgaWYgKHVzZXIuaXNfY29tcGxldGUpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZS9lZGl0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZUdvb2dsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgZ29vZ2xlX2lkOiByZXNwb25zZS5nb29nbGVJZCxcclxuICAgIH07XHJcbiAgICAvLyByZXR1cm5cclxuXHJcbiAgICBnb29nbGVTaWdudXAoZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgc2V0YnRubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0Zm9ybWVycnMocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmJvZHkudXNlcjtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5ib2R5LnVzZXIuYXBpX3Rva2VuO1xyXG4gICAgICAgIHNldGJ0bmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGxldCBmYXZFdmVudHMgPSByZXNwb25zZS5ib2R5LmZhdkV2ZW50cztcclxuICAgICAgICBsZXQgZmF2UHJvZHVjdHMgPSByZXNwb25zZS5ib2R5LmZhdlByb2R1Y3RzO1xyXG4gICAgICAgIHNldExvZ2luKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKTtcclxuICAgICAgICBzZXRzaG93UmVkaXJlY3QodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVzcG9uc2VHb29nbGVGYWlsdXJlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyBhbGVydCgnT29wcyEhIHRoZXJlIHdhcyBzb21lIHByb2JsZW0gd2hpbGUgbG9nZ2luZyBpbi4nKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJhY2tkcm9wQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRiYWNrZHJvcChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVmb3JtID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0eXBlID09ICdsb2dpbicpIHtcclxuICAgICAgc3VibWl0TG9naW4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVyciA9IHt9O1xyXG4gICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1fcGFzc3dvcmQpIHtcclxuICAgICAgZXJyLm5vX3NhbWUgPSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICBlcnIucHdkX2xlbmd0aCA9ICd0cnVlJztcclxuICAgIH1cclxuICAgIC8vIGlmICghdW5pdmVyc2l0eS5uYW1lKSB7XHJcbiAgICAvLyAgIGVyci51bml2ZXJzaXR5ID0gXCJ0cnVlXCI7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRlcnJzKGVycik7XHJcbiAgICBsZXQgaGFzX2Vycm9yID0gT2JqZWN0LmtleXMoZXJyKS5sZW5ndGg7XHJcbiAgICBpZiAoIXBhcnNlSW50KGhhc19lcnJvcikpIHtcclxuICAgICAgaGFuZGxlU3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlZm9ybURhdGEgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZhbCgnc2V0JyArIHR5cGUgKyBcIignXCIgKyBlLnRhcmdldC52YWx1ZSArIFwiJylcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVW5pU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgc2V0bG9hZGluZyh0cnVlKTtcclxuICAgIHNlYXJjaFVuaXZlcnNpdGllcyh2YWx1ZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldHVuaXZlcnNpdGllcyhyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb3RvRm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2ZvcmdvdC1wYXNzd29yZCcpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY2xhc3NOYW1lPVwiZ29vZ2xlQnRuXCI+XHJcbiAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICBjbGllbnRJZD17cHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRH1cclxuICAgICAgICAgIGJ1dHRvblRleHQ9e1xyXG4gICAgICAgICAgICB0eXBlID09ICdsb2dpbicgPyAnTG9naW4gd2l0aCBHb29nbGUnIDogJ1NpZ25VcCB3aXRoIEdvb2dsZSdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGVTdWNjZXNzfVxyXG4gICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZUZhaWx1cmV9XHJcbiAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pm9yPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBvblN1Ym1pdD17dmFsaWRhdGVmb3JtfT5cclxuICAgICAgICB7dHlwZSA9PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCBcImZpcnN0bmFtZVwiKX1cclxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwibGFzdG5hbWVcIil9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgJ2VtYWlsJyl9XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3R5cGUgPT0gJ3NpZ251cCcgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE5vXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bob25lX25vfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJwaG9uZV9ub1wiKX1cclxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvcHRpb25zPXt1bml2ZXJzaXRpZXN9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLm5hbWUgPT09IHZhbHVlLm5hbWV9XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICB2YWx1ZT17dW5pdmVyc2l0eX1cclxuICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtoYW5kbGVVbmlTZWFyY2h9XHJcbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCBcInVuaXZlcnNpdHlcIil9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiBzZXR1bml2ZXJzaXR5KHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggY29sbGVnZVwiXHJcbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuSW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyYW1zLklucHV0UHJvcHMuZW5kQWRvcm5tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAge2VycnNbJ3VuaXZlcnNpdHknXSAmJiAoXHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiPlBsZWFzZSBzZWxlY3QgYSB1bml2ZXJzaXR5LjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkJyYW5jaFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJyYW5jaFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2JyYW5jaH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwiYnJhbmNoXCIpfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJicmFuY2hcIlxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd3Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCAncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRzaG93cGFzc3dvcmQoIXNob3dwYXNzd29yZCl9PlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7c2hvd3Bhc3N3b3JkID8gPFZpc2liaWxpdHkgLz4gOiA8VmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dHlwZSA9PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9e3Nob3djb25maXJtX3Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsICdjb25maXJtX3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1fcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldHNob3djb25maXJtX3Bhc3N3b3JkKCFzaG93Y29uZmlybV9wYXNzd29yZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIHtzaG93Y29uZmlybV9wYXNzd29yZCA/IDxWaXNpYmlsaXR5IC8+IDogPFZpc2liaWxpdHlPZmYgLz59XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2VycnNbJ25vX3NhbWUnXSAmJiAoXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCI+XHJcbiAgICAgICAgICAgIFBhc3N3b3JkIG11c3QgbWF0Y2ggd2l0aCBjb25maXJtIHBhc3N3b3JkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZXJyc1sncHdkX2xlbmd0aCddICYmIChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIj5QYXNzd29yZCBtdXN0IGhhdmUgOCBjaGFyYWN0ZXJzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtmb3JtZXJycy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGZvcm1lcnJzLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIga2V5PXtgZXJyLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dHlwZSA9PSAnbG9naW4nID8gJ0xvZ2luJyA6ICdTaWduVXAnfVxyXG5cclxuICAgICAgICAgIHtidG5sb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT17MjB9IC8+IDogbnVsbH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17Z290b0ZvcmdvdFBhc3N3b3JkfT5cclxuICAgICAgICBGb3Jnb3QgcGFzc3dvcmQgPyBjbGljayA8c3Bhbj5oZXJlPC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtzaG93UmVkaXJlY3QgJiYgKFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgUmVkaXJlY3RpbmcgdG8gcHJvZmlsZSBwYWdlISF7JyAnfVxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XHJcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xyXG5pbXBvcnQgeyBBdXRoRm9ybSB9IGZyb20gXCIuL0F1dGhGb3JtXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIjtcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3hcIjtcclxuaW1wb3J0IHsgdW5hdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLy4uLy4uL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nJ1xyXG5pbXBvcnQgY2lyY2xlY2VudGVyIGZyb20gJy4vLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvY2lyY2xlQ2VudGVyLnN2ZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiAuTXVpVGFiLXRleHRDb2xvclByaW1hcnkuTXVpLXNlbGVjdGVkXCI6IHtcclxuICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpVGFicy1pbmRpY2F0b3JcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgLk11aVRhYi10ZXh0Q29sb3JQcmltYXJ5XCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjZGZkZmRmXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlCdXR0b24tY29udGFpbmVkUHJpbWFyeVwiOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgTG9naW46IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNXJlbVwiLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgd2lkdGg6IFwiNDQwcHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjQ0MHB4XCIsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgekluZGV4OiBcIi0xXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgYmFja2dyb3VuZDogY2lyY2xlY2VudGVyLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOntcclxuICAgICAgbWFyZ2luVG9wOiAnMS41cmVtJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgSW1nOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXTp7XHJcbiAgICAgICcmIGltZyc6e1xyXG4gICAgICAgIGhlaWdodDogJzY1cHgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG9yYW5nZToge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICB9LFxyXG4gIHRyYW5zcGFyZW50OiB7XHJcbiAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMjVweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgfSxcclxuICBkZXNrdG9wTWVudTp7XHJcbiAgICAnJiAuTXVpUG9wb3Zlci1wYXBlcic6e1xyXG4gICAgICBtaW5XaWR0aDogJzIwMHB4JyxcclxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnXHJcbiAgICB9LFxyXG4gICAgJyYgbGknOntcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuY29uc3QgTG9naW5fUmVnaXN0ZXIgPSAoeyBpc01vYmlsZSA9IGZhbHNlLCBtb2RhbE9wZW4gPSBmYWxzZSB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3BlbkFNZW51LCBzZXRvcGVuQU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuQk1lbnUsIHNldG9wZW5CTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5DTWVudSwgc2V0b3BlbkNNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbkRNZW51LCBzZXRvcGVuRE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKFwic2lnbnVwPW9wZW5cIikgIT0gLTEpIHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAobW9kYWxPcGVuICE9IG9wZW4pIHtcclxuICAgICAgc2V0T3Blbihtb2RhbE9wZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRvZ2dsZU1vZGFsKClcclxuICB9LCBbbW9kYWxPcGVuXSk7XHJcblxyXG5cclxuXHJcbiAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHRvZ2dsZU1vZGFsKVxyXG5cclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIudXNlcik7XHJcbiAgLy8gY29uc29sZS5sb2coXCJVc2VyXCIsIHVzZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5kZXggPSAoaW5kZXgpID0+IHtcclxuICAgIHNldFZhbHVlKGluZGV4KTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKCFhY2Nlc3NUb2tlbikge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgZ290b1Byb2ZpbGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvdG9Qcm9maWxlID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9Qcm9maWxlRWRpdCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvZWRpdFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9FdmVudHMgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2V2ZW50c1wiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9SZXF1ZXN0ZSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvcmVxdWVzdHNcIik7XHJcbiAgfTtcclxuICBjb25zdCBnb3RvRmF2RXZlbnRzID0gKCkgPT57XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2Zhdm91cml0ZS1ldmVudHNcIik7XHJcbiAgfTtcclxuICBjb25zdCBnb3RvRmF2UHJvZHVjdHMgPSAoKSA9PntcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvZmF2b3VyaXRlLXByb2R1Y3RzXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b0FkZFJlcXVlc3QgPSAoKSA9PntcclxuICAgIHJvdXRlci5wdXNoKFwiL3Bvc3QvcmVxdWVzdFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9SZXNldFBhc3N3b3JkID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9yZXNldC1wYXNzd29yZFwiKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgZGlzcGF0Y2godW5hdXRoZW50aWNhdGVkKCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFTdWJtZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0b3BlbkFNZW51KCFvcGVuQU1lbnUpO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlQlN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuQk1lbnUoIW9wZW5CTWVudSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVDU3VibWVudSA9ICgpID0+IHtcclxuICAgIHNldG9wZW5DTWVudSghb3BlbkNNZW51KTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZURTdWJtZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0b3BlbkRNZW51KCFvcGVuRE1lbnUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBdmF0YXJcclxuICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cImF1dGgtbWVudVwiXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17dXNlci5maXJzdF9uYW1lID8gY2xhc3Nlcy5vcmFuZ2UgOiBjbGFzc2VzLnRyYW5zcGFyZW50fVxyXG4gICAgICA+XHJcbiAgICAgICAge3VzZXIuZmlyc3RfbmFtZSA/IHVzZXIuZmlyc3RfbmFtZS5jaGFyQXQoMCkgOiA8QWNjb3VudENpcmNsZUljb24gLz59XHJcbiAgICAgIDwvQXZhdGFyPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwiYXV0aC1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAvLyBvcGVuPXshIW1lbnVQb3NpdGlvbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXsoKSA9PiBzZXRNZW51UG9zaXRpb24oe30pIHx8IGhhbmRsZUNsb3NlfVxyXG4gICAgICAgIC8vIGFuY2hvclJlZmVyZW5jZT1cImFuY2hvclBvc2l0aW9uXCJcclxuICAgICAgICAvLyBhbmNob3JQb3NpdGlvbj17bWVudVBvc2l0aW9ufVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNrdG9wTWVudX1cclxuICAgICAgPlxyXG4gICAgICAgIHsvKiA8TGlzdD4gKi99XHJcbiAgICAgICAgICA8TWVudUl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUFTdWJtZW51fT5cclxuICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICB7b3BlbkFNZW51ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5BTWVudX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b1Byb2ZpbGV9PlZpZXcgUHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvUmVzZXRQYXNzd29yZH0+UmVzZXQgUGFzc3dvcmQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDxNZW51SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlQlN1Ym1lbnV9PlxyXG4gICAgICAgICAgICBBZHNcclxuICAgICAgICAgICAge29wZW5CTWVudSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuQk1lbnV9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9Qcm9maWxlfT5QdWJsaXNoZWQgQWRzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9GYXZQcm9kdWN0c30+RmF2b3VyaXRlIFByb2R1Y3RzPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNTdWJtZW51fT5cclxuICAgICAgICAgICAgRXZlbnRzXHJcbiAgICAgICAgICAgIHtvcGVuQ01lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbkNNZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvRXZlbnRzfT5QdWJsaXNoZWQgRXZlbnRzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9GYXZFdmVudHN9PkZhdm91cml0ZSBFdmVudHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDxNZW51SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlRFN1Ym1lbnV9PlxyXG4gICAgICAgICAgICBSZXF1ZXN0c1xyXG4gICAgICAgICAgICB7b3BlbkRNZW51ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5ETWVudX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b1JlcXVlc3RlfT5QdWJsaXNoZWQgUmVxdWVzdHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b0FkZFJlcXVlc3R9PkFkZCBQcm9kdWN0IFJlcXVlc3Q8L01lbnVJdGVtPiBcclxuICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcblxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiTG9naW5cIiAvPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiU2lnblVwXCIgLz5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDxTd2lwZWFibGVWaWV3cyBpbmRleD17dmFsdWV9IG9uQ2hhbmdlSW5kZXg9e2hhbmRsZUNoYW5nZUluZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTG9naW59PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkltZ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gd2lkdGg9XCIxMDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxBdXRoRm9ybSB0eXBlPVwibG9naW5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QXV0aEZvcm0gdHlwZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Td2lwZWFibGVWaWV3cz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5fUmVnaXN0ZXI7XHJcbiIsImV4cG9ydCBjb25zdCBTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSA9ICdTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSdcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9GSUxURVJfUkVTRVQgPSBcIlNFTEVDVEVEX0ZJTFRFUl9SRVNFVFwiO1xuZXhwb3J0IGNvbnN0IFBBR0VfUFJPRFVDVFMgPSAnUEFHRV9QUk9EVUNUUydcblxuZXhwb3J0IGNvbnN0IFZBTElEX1JPVVRFUz1bXG4gICAge1xuICAgICAgICByb3V0ZTonYnV5LXJlcXVlc3QnLFxuICAgICAgICB0aXRsZTonQnV5IFJlcXVlc3QnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidwcm9kdWN0cycsXG4gICAgICAgIHRpdGxlOidQcm9kdWN0cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzLWJ1eScsXG4gICAgICAgIHRpdGxlOidQcm9kdWN0cyBCdXknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidwcm9kdWN0cy1zZWxsJyxcbiAgICAgICAgdGl0bGU6J1Byb2R1Y3RzIFNlbGwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidwcm9kdWN0cy1zZWFyY2gnLFxuICAgICAgICB0aXRsZTonUHJvZHVjdHMgU2VhcmNoJ1xuICAgIH0sXG4gICAge1xuICAgICAgICByb3V0ZTonZXZlbnRzJyxcbiAgICAgICAgdGl0bGU6J0V2ZW50cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J2ZlZWRiYWNrJyxcbiAgICAgICAgdGl0bGU6J0ZlZWRiYWNrJ1xuICAgIH0sXG5dIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vLi4vc3JjL0xheW91dCc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIGNvbW1vblN0eWxlcyxcbiAgZGVza3RvcFN0eWxlcyxcbiAgbW9iaWxlU3R5bGVzLFxuICBUYWJTdHlsZXMsXG59IGZyb20gJy4vLi4vLi4vc3JjL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAuLi5jb21tb25TdHlsZXMsXG4gIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IGRlc2t0b3BTdHlsZXMsXG4gIFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCdzbScsICdtZCcpXTogVGFiU3R5bGVzLFxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IG1vYmlsZVN0eWxlcyxcbn0pKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHsgYnByb2R1Y3RzLCBzcHJvZHVjdHMsIGV2ZW50cywgcmV2aWV3cywgYWRzIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25IZWFkZXJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgXG5GcmllbmR6cHJvZHVjdHMgcGxhdGZvcm0gaXMgb25seSBtYWRlIGZvciBjb2xsZWdlIHN0dWRlbnRzIHdoZXJlIG9uZSBjYW4gZmluZCBhIHBsZXRob3JhIG9mIGl0ZW1zIG9wdGlvbnMgdG8gb3B0LiBUaGUgYmVzdCBwYXJ0IGFib3V0IHVzIGlzIHRoYXQgbmVpdGhlciBidXllciBub3Igc2VsbGVyIGhhcyB0byBtb3ZlIGFueXdoZXJlLiBPbmUgZ2V0cyBhbGwgdGhpbmdzIGRvbmUgd2l0aGluIHRoZSBjb2xsZWdlIGNhbXB1cyBhdCBmZWFzaWJsZSBwcmljZXMuIFdlIGNvbWUgZm9yd2FyZCB0byBzYXZlIHlvdXIgZW5lcmd5LCB0aW1lIGFuZCBlZmZvcnRzLiBXYW50IHRvIGJ1eSBhIGJpa2U/IFdlIGFyZSBoZXJlIGZvciB5b3UuIFdhbnQgdG8gc2VsbCB5b3VyIGJvb2tzPyBXZSBhcmUgYWdhaW4gaGVyZSBmb3IgeW91LiBXZSBjYXJlIGZvciB5b3UgYW5kIHlvdXIgcG9ja2V0LW1vbmV5IHRoYXQgaXMgd2h5IHdlIHNlcnZlIHdpdGhvdXQgYW55IHNlcnZpY2UgZmVlLllvdSBjb3VsZCBhbHNvIHB1dCBhIHJlcXVlc3QgZm9yIGEgcGFydGljdWxhciBpdGVtIHlvdSBhcmUgbG9va2luZyBmb3IuIEF0IEZyaWVuZHpwcmVvZHVjdHMuY29tLCB5b3Ugd2lsbCBhbHNvIGdldCB0byBrbm93IGFib3V0IHZhcmlvdXMgZXZlbnRzIGhhcHBlbmluZyB0aHJvdWdob3V0IGNvbGxlZ2VzIGluIEluZGlhLlxuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0kxTXpjaUlHaGxhV2RvZEQwaU5UTTNJaUIyYVdWM1FtOTRQU0l3SURBZ05UTTNJRFV6TnlJK0RRb2dJRHhuSUdsa1BTSkZiR3hwY0hObFh6VmZZMjl3ZVNJZ1pHRjBZUzF1WVcxbFBTSkZiR3hwY0hObElEVWdZMjl3ZVNJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bFBTSjJZWElvTFMxMGFHVnRaU2tpSUhOMGNtOXJaUzEzYVdSMGFEMGlNVEF3SWlCdmNHRmphWFI1UFNJd0xqQTFNU0krRFFvZ0lDQWdQR05wY21Oc1pTQmplRDBpTWpZNExqVWlJR041UFNJeU5qZ3VOU0lnY2owaU1qWTRMalVpSUhOMGNtOXJaVDBpYm05dVpTSXZQZzBLSUNBZ0lEeGphWEpqYkdVZ1kzZzlJakkyT0M0MUlpQmplVDBpTWpZNExqVWlJSEk5SWpJeE9DNDFJaUJtYVd4c1BTSnViMjVsSWk4K0RRb2dJRHd2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMmQxNGJlMTgwNDE4MDQxMzdmNmMxN2JmZmJhYTFhN2UucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ29mdC05ODNjYTBhYzNhNzM3MWY3ZmUxZDgwOGIxMjg3ZTQxMS5wbmdcIjsiLCJleHBvcnQgY29uc3QgQUREX1ZJU0lURUQgPSAnQUREX1ZJU0lURUQnXG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZJU0lURUQgPSAnUkVNT1ZFX1ZJU0lURUQnXG5leHBvcnQgY29uc3QgRkVUQ0hfVklTSVRFRCA9ICdGRVRDSF9WSVNJVEVEJyIsImV4cG9ydCBjb25zdCBBVVRIRU5USUNBVEVEID0gXCJBVVRIRU5USUNBVEVEXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0RFVklDRV9UT0tFTiA9IFwiVVBEQVRFX0RFVklDRV9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSEVOVElDQVRFRCA9IFwiVU5BVVRIRU5USUNBVEVEXCI7IiwiZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSBcIlNIT1dfTU9EQUxcIjtcbmV4cG9ydCBjb25zdCBDTE9TRV9NT0RBTCA9IFwiQ0xPU0VfTU9EQUxcIjtcbiIsImV4cG9ydCBjb25zdCBDSEFUX0NPTk5FQ1RFRCA9IFwiQ0hBVF9DT05ORUNURURcIjtcbmV4cG9ydCBjb25zdCBDSEFUX1JFU0VUID0gXCJDSEFUX1JFU0VUXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9VTlJFQUQgPSBcIkNIQVRfVU5SRUFEXCI7XG5leHBvcnQgY29uc3QgQ0hBVF9VTlJFQURfUkVTRVQgPSBcIkNIQVRfVU5SRUFEX1JFU0VUXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9BVVRIRU5USUNBVEVEXG4gICAgPSBcIkNIQVRfQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVU5BVVRIRU5USUNBVEVEID0gXCJDSEFUX1VOQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVVBEQVRFX1VTRVIgPSBcIkNIQVRfVVBEQVRFX1VTRVJcIjsiLCJleHBvcnQgY29uc3QgRkVUQ0hfRElBTE9HUyA9IFwiRkVUQ0hfRElBTE9HU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9ESUFMT0cgPSBcIkFERF9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBTT1JUX0RJQUxPR1MgPSBcIlNPUlRfRElBTE9HU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ESUFMT0cgPSBcIlVQREFURV9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfRElBTE9HID0gXCJERUxFVEVfRElBTE9HXCI7XG4iLCJleHBvcnQgY29uc3QgU0VUX01FU1NBR0VTID0gXCJTRVRfTUVTU0FHRVNcIjtcbmV4cG9ydCBjb25zdCBQVVNIX01FU1NBR0UgPSBcIlBVU0hfTUVTU0FHRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9BTExfTUVTU0FHRVMgPSBcIkRFTEVURV9BTExfTUVTU0FHRVNcIjtcbmV4cG9ydCBjb25zdCBMQVpZX0ZFVENIX01FU1NBR0VTID0gXCJMQVpZX0ZFVENIX01FU1NBR0VTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX01FU1NBR0VTID0gXCJVUERBVEVfTUVTU0FHRVNcIjtcbiIsImV4cG9ydCBjb25zdCBTRUxFQ1RFRF9ESUFMT0cgPSBcIlNFTEVDVEVEX0RJQUxPR1wiO1xuZXhwb3J0IGNvbnN0IFVOX1NFTEVDVEVEX0RJQUxPRyA9IFwiVU5fU0VMRUNURURfRElBTE9HXCI7XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfVVNFUlMgPSBcIkZFVENIX1VTRVJTXCI7XG5leHBvcnQgY29uc3QgQUREX1VTRVJTID0gXCJBRERfVVNFUlNcIjtcbiIsImltcG9ydCB7IFVOQVVUSEVOVElDQVRFRCwgQVVUSEVOVElDQVRFRCwgVVBEQVRFX0RFVklDRV9UT0tFTiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVkID0gKHVzZXIsIGFjY2Vzc1Rva2VuLHVzZXJGYXZFdmVudHMsdXNlckZhdlByb2R1Y3RzKSA9PiAoe1xuICB0eXBlOiBBVVRIRU5USUNBVEVELFxuICBwYXlsb2FkOiB7IHVzZXIsIGFjY2Vzc1Rva2VuLCB1c2VyRmF2RXZlbnRzICwgdXNlckZhdlByb2R1Y3RzIH0sXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyRGV2aWNlVG9rZW4gPSAodG9rZW4pID0+ICh7XG4gIHR5cGU6IFVQREFURV9ERVZJQ0VfVE9LRU4sXG4gIHBheWxvYWQ6IHsgdG9rZW4gfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdW5hdXRoZW50aWNhdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogVU5BVVRIRU5USUNBVEVELFxufSk7XG4iLCJpbXBvcnQgeyBTSE9XX01PREFMLCBDTE9TRV9NT0RBTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9hdXRoTW9kYWxcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dNb2RhbCA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1dfTU9EQUwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiAoe1xuICB0eXBlOiBDTE9TRV9NT0RBTCxcbn0pO1xuIiwiaW1wb3J0IHsgQ0hBVF9DT05ORUNURUQsIENIQVRfUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdENvbm5lY3RlZFwiO1xuXG5leHBvcnQgY29uc3QgY2hhdENvbm5lY3Rpb24gPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfQ09OTkVDVEVELFxuICAgIC8vIHBheWxvYWQ6IHsgY3VycmVudFVzZXIsIGFjY2Vzc1Rva2VuIH0sXG59KTtcbmV4cG9ydCBjb25zdCBjaGF0UmVzZXQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfUkVTRVQsXG4gICAgLy8gcGF5bG9hZDogeyBjdXJyZW50VXNlciwgYWNjZXNzVG9rZW4gfSxcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgY2hhdFVuYXV0aGVudGljYXRlZCA9ICgpID0+ICh7XG4vLyAgICAgdHlwZTogQ0hBVF9VTkFVVEhFTlRJQ0FURUQsXG4vLyB9KTtcbiIsImltcG9ydCB7IENIQVRfVU5SRUFELCBDSEFUX1VOUkVBRF9SRVNFVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9jaGF0VW5yZWFkXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0VW5yZWFkQ291bnQgPSAoY291bnQpID0+ICh7XG4gICAgdHlwZTogQ0hBVF9VTlJFQUQsXG4gICAgY291bnQ6IGNvdW50XG59KTtcbmV4cG9ydCBjb25zdCBjaGF0VW5yZWFkUmVzZXQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfVU5SRUFEX1JFU0VULFxufSk7XG4iLCJpbXBvcnQgeyBDSEFUX0FVVEhFTlRJQ0FURUQsIENIQVRfVU5BVVRIRU5USUNBVEVELCBDSEFUX1VQREFURV9VU0VSfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVzZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYXRBdXRoZW50aWNhdGVkID0gKGN1cnJlbnRVc2VyLCBhY2Nlc3NUb2tlbikgPT4gKHtcbiAgICB0eXBlOiBDSEFUX0FVVEhFTlRJQ0FURUQsXG4gICAgcGF5bG9hZDogeyBjdXJyZW50VXNlciwgYWNjZXNzVG9rZW4gfSxcbn0pO1xuZXhwb3J0IGNvbnN0IGNoYXRVcGRhdGVVc2VyID0gKGN1cnJlbnRVc2VyLCBhY2Nlc3NUb2tlbikgPT4gKHtcbiAgICB0eXBlOiBDSEFUX1VQREFURV9VU0VSLFxuICAgIHBheWxvYWQ6IHsgY3VycmVudFVzZXIsIGFjY2Vzc1Rva2VuIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoYXRVbmF1dGhlbnRpY2F0ZWQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENIQVRfVU5BVVRIRU5USUNBVEVELFxufSk7XG4iLCJpbXBvcnQge1xuICBGRVRDSF9ESUFMT0dTLFxuICBBRERfRElBTE9HLFxuICBTT1JUX0RJQUxPR1MsXG4gIFVQREFURV9ESUFMT0csXG4gIERFTEVURV9ESUFMT0csXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9kaWFsb2dzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERpYWxvZ3MgPSAoZGlhbG9ncykgPT4gKHtcbiAgdHlwZTogRkVUQ0hfRElBTE9HUyxcbiAgZGlhbG9nczogZGlhbG9ncyxcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURpYWxvZyA9IChkaWFsb2cpID0+ICh7IHR5cGU6IFVQREFURV9ESUFMT0csIGRpYWxvZyB9KTtcbmV4cG9ydCBjb25zdCBhZGROZXdEaWFsb2cgPSAoZGlhbG9nKSA9PiAoeyB0eXBlOiBBRERfRElBTE9HLCBkaWFsb2c6IGRpYWxvZyB9KTtcbmV4cG9ydCBjb25zdCBzb3J0RGlhbG9ncyA9IChtZXNzYWdlLCBjb3VudCkgPT4gKHtcbiAgdHlwZTogU09SVF9ESUFMT0dTLFxuICBtZXNzYWdlOiBtZXNzYWdlLFxuICBjb3VudDogY291bnQsXG59KTtcbmV4cG9ydCBjb25zdCBkZWxldGVEaWFsb2cgPSAoZGlhbG9nSWQpID0+ICh7IHR5cGU6IERFTEVURV9ESUFMT0csIGRpYWxvZ0lkIH0pO1xuIiwiaW1wb3J0IHtcbiAgU0VUX01FU1NBR0VTLFxuICBQVVNIX01FU1NBR0UsXG4gIERFTEVURV9BTExfTUVTU0FHRVMsXG4gIExBWllfRkVUQ0hfTUVTU0FHRVMsXG4gIFVQREFURV9NRVNTQUdFUyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRNZXNzYWdlcyA9IChtc2dzLCBkaWFsb2cpID0+ICh7XG4gIHR5cGU6IFNFVF9NRVNTQUdFUyxcbiAgbXNncyxcbiAgZGlhbG9nXG59KTtcbmV4cG9ydCBjb25zdCBsYXp5RmV0Y2hNZXNzYWdlcyA9IChkaWFsb2dJZCwgaGlzdG9yeSkgPT4gKHtcbiAgdHlwZTogTEFaWV9GRVRDSF9NRVNTQUdFUyxcbiAgZGlhbG9nSWQsXG4gIGhpc3RvcnksXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IChkaWFsb2dJZCwgbXNnSWQsIG1zZykgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01FU1NBR0VTLFxuICBkaWFsb2dJZCxcbiAgbXNnSWQsXG4gIG1zZyxcbn0pO1xuZXhwb3J0IGNvbnN0IHB1c2hNZXNzYWdlID0gKCBtc2cpID0+ICh7XG4gIHR5cGU6IFBVU0hfTUVTU0FHRSxcbiAgbXNnXG59KTtcbmV4cG9ydCBjb25zdCBkZWxldGVBbGxNZXNzYWdlcyA9ICgpID0+ICh7XG4gIHR5cGU6IERFTEVURV9BTExfTUVTU0FHRVMsXG59KTtcbiIsImltcG9ydCB7XG4gIFNFTEVDVEVEX0RJQUxPRyxcbiAgVU5fU0VMRUNURURfRElBTE9HLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvc2VsZWN0ZWREaWFsb2dcIjtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkRGlhbG9nID0gKGRpYWxvZykgPT4gKHsgdHlwZTogU0VMRUNURURfRElBTE9HLCBkaWFsb2cgfSk7XG5leHBvcnQgY29uc3QgdW5TZWxlY3RlZERpYWxvZyA9IChkaWFsb2cpID0+ICh7XG4gIHR5cGU6IFVOX1NFTEVDVEVEX0RJQUxPRyxcbiAgZGlhbG9nLFxufSk7IiwiaW1wb3J0IHtcbiAgRkVUQ0hfVVNFUlMsXG4gIEFERF9VU0VSU1xufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvdXNlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSB1c2VycyA9PiAoeyB0eXBlOiBGRVRDSF9VU0VSUywgdXNlcnMgfSlcbmV4cG9ydCBjb25zdCBhZGRVc2VycyA9IHVzZXJzID0+ICh7IHR5cGU6IEFERF9VU0VSUywgdXNlcnMgfSkiLCJleHBvcnQgY29uc3QgQlROX1RZUEUgPSB7XG4gIERJQUxPRzogMSxcbiAgQ09OVEFDVFM6IDIsXG4gIENSRUFURV9HUk9VUDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IERJQUxPR19UWVBFID0ge1xuICBQUklWQVRFOiAzLFxuICBHUk9VUDogMixcbiAgQlJPQURDQVNUOiAxLFxuICBQVUJMSUNfQ0hBTk5FTDogNFxufSIsImltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSBcImNvbm5lY3R5Y3ViZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VMaW5rRnJvbVVJRCh1aWQpIHtcbiAgaWYgKCF1aWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gQ29ubmVjdHlDdWJlLnN0b3JhZ2UucHJpdmF0ZVVybCh1aWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyYXRpb25BdHRhY2htZW50KGZpbGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgdWlkOiBmaWxlLnVpZCxcbiAgICB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSxcbiAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDQwMCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdldEltYWdlTGlua0Zyb21VSUQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKGRpYWxvZykge1xuICAgIHRoaXMuaWQgPSBkaWFsb2cuX2lkIHx8IGRpYWxvZy5pZFxuICAgIHRoaXMudHlwZSA9IGRpYWxvZy50eXBlXG4gICAgdGhpcy54bXBwX3Jvb21famlkID0gZGlhbG9nLnhtcHBfcm9vbV9qaWRcbiAgICB0aGlzLnhtcHBfdHlwZSA9IGRpYWxvZy50eXBlID09PSAzID8gJ2NoYXQnIDogZGlhbG9nLnR5cGUgPyAnZ3JvdXBjaGF0JyA6ICcnXG4gICAgdGhpcy5uYW1lID0gZGlhbG9nLm5hbWVcbiAgICB0aGlzLnBob3RvID0gRGlhbG9nLmdldEF2YXRhclVybChkaWFsb2cucGhvdG8pXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRpYWxvZy5kZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkaWFsb2cueG1wcF9yb29tX2ppZCB8fCBkaWFsb2cucm9vbV9qaWRcbiAgICB0aGlzLnVzZXJfaWQgPSBkaWFsb2cudXNlcl9pZFxuICAgIHRoaXMuYWRtaW5zX2lkcyA9IGRpYWxvZy5hZG1pbnNfaWRzXG4gICAgdGhpcy5vY2N1cGFudHNfaWRzID0gZGlhbG9nLm9jY3VwYW50c19pZHNcbiAgICB0aGlzLnVwZGF0ZWRfZGF0ZSA9IERhdGUucGFyc2UoZGlhbG9nLnVwZGF0ZWRfYXQpIHx8IERhdGUubm93KClcbiAgICB0aGlzLmxhc3RfbWVzc2FnZV9kYXRlX3NlbnQgPSBkaWFsb2cubGFzdF9tZXNzYWdlX2RhdGVfc2VudCB8fCBEYXRlLnBhcnNlKGRpYWxvZy51cGRhdGVkX2F0KSAvIDEwMDAgfHwgRGF0ZS5wYXJzZShkaWFsb2cuY3JlYXRlZF9hdCkgLyAxMDAwXG4gICAgdGhpcy5sYXN0X21lc3NhZ2UgPSBkaWFsb2cubGFzdF9tZXNzYWdlIHx8ICcnXG4gICAgdGhpcy5sYXN0X21lc3NhZ2VfaWQgPSBkaWFsb2cubGFzdF9tZXNzYWdlX2lkXG4gICAgdGhpcy5sYXN0X21lc3NhZ2VfdXNlcl9pZCA9IGRpYWxvZy5sYXN0X21lc3NhZ2VfdXNlcl9pZFxuICAgIHRoaXMudW5yZWFkX21lc3NhZ2VzX2NvdW50ID0gZGlhbG9nLnVucmVhZF9tZXNzYWdlc19jb3VudFxuICAgIHRoaXMudW5yZWFkX21lc3NhZ2VzX2lkcyA9IGRpYWxvZy51bnJlYWRfbWVzc2FnZXNfaWRzXG4gICAgdGhpcy5waW5uZWRfbWVzc2FnZXNfaWRzID0gZGlhbG9nLnBpbm5lZF9tZXNzYWdlc19pZHNcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdmF0YXJVcmwoYXZhdGFyVUlEKSB7XG4gICAgcmV0dXJuIGdldEltYWdlTGlua0Zyb21VSUQoYXZhdGFyVUlEKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZUxpbmtGcm9tVUlEIH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuXG5leHBvcnQgY29uc3QgU1RBVFVTX1BFTkRJTkcgPSAwXG5leHBvcnQgY29uc3QgU1RBVFVTX1NFTlQgPSAxXG5leHBvcnQgY29uc3QgU1RBVFVTX0RFTElWRVJFRCA9IDJcbmV4cG9ydCBjb25zdCBTVEFUVVNfUkVBRCA9IDNcblxuZXhwb3J0IGNvbnN0IEdST1VQX0NIQVRfQUxFUlRfVFlQRSA9IHtcbiAgQ1JFQVRFOiBcImNyZWF0ZVwiXG59XG5cbmNvbnN0IGRlZmF1bHRNZXNzYWdlID0ge1xuICBpZDogJycsXG4gIGJvZHk6ICcnLFxuICBkaWFsb2dfaWQ6ICcnLFxuICBkYXRlX3NlbnQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICBhdHRhY2htZW50czogbnVsbCxcbiAgc2VuZGVyX2lkOiBudWxsLFxuICBzZW5kZXI6IG51bGxcbn1cblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihtc2cgPSBkZWZhdWx0TWVzc2FnZSwgY3VycmVudFVzZXIpIHtcbiAgICB0aGlzLmlkID0gbXNnLmlkIHx8IG1zZy5faWRcbiAgICB0aGlzLmJvZHkgPSBtc2cuYm9keSB8fCBtc2cubWVzc2FnZVxuICAgIHRoaXMuZ3JvdXBfY2hhdF9hbGVydF90eXBlID0gbXNnLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSB8fCBudWxsXG4gICAgdGhpcy5kaWFsb2dfaWQgPSBtc2cuY2hhdF9kaWFsb2dfaWQgfHwgKG1zZy5leHRlbnNpb24gJiYgbXNnLmV4dGVuc2lvbi5kaWFsb2dfaWQpXG4gICAgdGhpcy5kYXRlX3NlbnQgPSBtc2cuZGF0ZV9zZW50IHx8IChtc2cuZXh0ZW5zaW9uICYmIG1zZy5leHRlbnNpb24uZGF0ZV9zZW50KSB8fCBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgIHRoaXMuc2VuZF9zdGF0ZSA9IE1lc3NhZ2UuZ2V0U2VuZFN0YXRlKG1zZywgY3VycmVudFVzZXIpXG4gICAgdGhpcy5hdHRhY2htZW50ID0gTWVzc2FnZS5nZXRBdHRhY2htZW50KG1zZylcbiAgICB0aGlzLnNlbmRlcl9pZCA9IG1zZy5zZW5kZXJfaWQgfHwgKG1zZy5leHRlbnNpb24gJiYgbXNnLmV4dGVuc2lvbi5zZW5kZXJfaWQpXG4gICAgdGhpcy5zZW5kZXIgPSBtc2cuc2VuZGVyX2lkXG4gIH1cblxuICBzdGF0aWMgZ2V0QXR0YWNobWVudChtc2cpIHtcbiAgICBpZiAobXNnLmF0dGFjaG1lbnRzICYmIG1zZy5hdHRhY2htZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhdHRhY2htZW50cyA9IHsgLi4ubXNnLmF0dGFjaG1lbnRzWzBdIH1cbiAgICAgIGNvbnN0IHBhcnNlTGluayA9IGdldEltYWdlTGlua0Zyb21VSUQobXNnLmF0dGFjaG1lbnRzWzBdLnVpZClcbiAgICAgIGF0dGFjaG1lbnRzLnVybCA9IHBhcnNlTGlua1xuICAgICAgcmV0dXJuIFthdHRhY2htZW50c11cbiAgICB9IGVsc2UgaWYgKG1zZz8uZXh0ZW5zaW9uPy5hdHRhY2htZW50cyAmJiBtc2cuZXh0ZW5zaW9uLmF0dGFjaG1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGF0dGFjaG1lbnRzID0geyAuLi5tc2cuZXh0ZW5zaW9uLmF0dGFjaG1lbnRzWzBdIH1cbiAgICAgIGNvbnN0IHBhcnNlTGluayA9IGdldEltYWdlTGlua0Zyb21VSUQobXNnLmV4dGVuc2lvbi5hdHRhY2htZW50c1swXS51aWQpXG4gICAgICBhdHRhY2htZW50cy51cmwgPSBwYXJzZUxpbmtcbiAgICAgIHJldHVybiBbYXR0YWNobWVudHNdXG4gICAgfSBlbHNlIHJldHVybiBudWxsXG4gIH1cblxuICBzdGF0aWMgZ2V0U2VuZFN0YXRlKG1zZywgY3VycmVudFVzZXIpIHtcbiAgICBpZiAobXNnPy5yZWFkX2lkcz8uZmluZChfaWQgPT4gX2lkICE9PSBjdXJyZW50VXNlcikpIHtcbiAgICAgIHJldHVybiBTVEFUVVNfUkVBRFxuICAgIH1cbiAgICBpZiAobXNnPy5kZWxpdmVyZWRfaWRzPy5maW5kKG1zZyA9PiBtc2cuZGVsaXZlcmVkX2lkcyAhPT0gY3VycmVudFVzZXIpKSB7XG4gICAgICByZXR1cm4gU1RBVFVTX0RFTElWRVJFRFxuICAgIH1cbiAgICByZXR1cm4gU1RBVFVTX1BFTkRJTkdcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGYWtlTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKG1zZykge1xuICAgIHRoaXMuYXR0YWNobWVudCA9IG1zZy5leHRlbnNpb24uYXR0YWNobWVudHNcbiAgICB0aGlzLmJvZHkgPSBtc2cuYm9keVxuICAgIHRoaXMuZGF0ZV9zZW50ID0gbXNnLmV4dGVuc2lvbi5kYXRlX3NlbnRcbiAgICB0aGlzLmRpYWxvZ19pZCA9IG1zZy5leHRlbnNpb24uZGlhbG9nX2lkXG4gICAgdGhpcy5pZCA9IG1zZy5pZFxuICAgIHRoaXMuc2VuZF9zdGF0ZSA9IDBcbiAgICB0aGlzLnNlbmRlciA9IHVuZGVmaW5lZFxuICAgIHRoaXMuc2VuZGVyX2lkID0gbXNnLmV4dGVuc2lvbi5zZW5kZXJfaWRcbiAgfVxufSIsImltcG9ydCB7IGdldEltYWdlTGlua0Zyb21VSUQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZFxuICAgIHRoaXMuYXZhdGFyID0gVXNlci5nZXRBdmF0YXJVcmwodXNlci5hdmF0YXIpXG4gICAgdGhpcy5sb2dpbiA9IHVzZXIubG9naW5cbiAgICB0aGlzLmN1c3RvbV9kYXRhID0gdXNlci5jdXN0b21fZGF0YSA/IHVzZXIuY3VzdG9tX2RhdGEgOiAnJ1xuICAgIHRoaXMuZnVsbF9uYW1lID0gdXNlci5mdWxsX25hbWUgfHwgdXNlci5sb2dpblxuICAgIHRoaXMucGhvbmUgPSB1c2VyLnBob25lXG4gICAgdGhpcy5jcmVhdGVkX2F0ID0gdXNlci5jcmVhdGVkX2F0XG4gICAgdGhpcy51cGRhdGVkX2F0ID0gdXNlci51cGRhdGVkX2F0XG4gICAgdGhpcy5sYXN0X3JlcXVlc3RfYXQgPSB1c2VyLmxhc3RfcmVxdWVzdF9hdFxuICB9XG4gIHN0YXRpYyBnZXRBdmF0YXJVcmwoYXZhdGFyVUlEKSB7XG4gICAgcmV0dXJuIGdldEltYWdlTGlua0Zyb21VSUQoYXZhdGFyVUlEKVxuICB9XG59XG4iLCJpbXBvcnQgeyBBRERfVklTSVRFRCwgUkVNT1ZFX1ZJU0lURUQsIEZFVENIX1ZJU0lURUQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvUGFnZVZpc2l0ZWRcIjtcblxubGV0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVklTSVRFRDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyciwgYWN0aW9uLnBheWxvYWQuaXRlbSlcbiAgICAgICAgICAgIGxldCBhcnIgPSBzdGF0ZVxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLml0ZW0pIHtcbiAgICAgICAgICAgICAgICBhcnIgPSBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkLml0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuXG4gICAgICAgIGNhc2UgUkVNT1ZFX1ZJU0lURUQ6XG4gICAgICAgICAgICBsZXQgYXJyMiA9IHN0YXRlXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaXRlbSkge1xuICAgICAgICAgICAgICAgIGFycjIgPSBzdGF0ZS5wb3AoYWN0aW9uLnBheWxvYWQuaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVOQVVUSEVOVElDQVRFRCwgQVVUSEVOVElDQVRFRCwgVVBEQVRFX0RFVklDRV9UT0tFTn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2F1dGhcIjtcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSdcbmltcG9ydCB7IFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCwgU0VMRUNURURfRklMVEVSX1VOSVZFUlNJVFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge30sXG4gIGFjY2Vzc1Rva2VuOiBcIlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVVUSEVOVElDQVRFRDpcbiAgICAgIGNvbnN0IHsgdXNlciwgYWNjZXNzVG9rZW4sIHVzZXJGYXZFdmVudHMsIHVzZXJGYXZQcm9kdWN0cyB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZFdmVudHNcIiwgdXNlckZhdkV2ZW50cyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZQcm9kdWN0c1wiLCB1c2VyRmF2UHJvZHVjdHMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1JFU0VULCBmYWxzZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgfTtcbiAgICBjYXNlIFVQREFURV9ERVZJQ0VfVE9LRU46XG4gICAgICBsZXQgeyB0b2tlbiB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIGxldCB1ID0gc3RhdGUudXNlclxuICAgICAgdS5kZXZpY2VfdG9rZW4gPSB0b2tlblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHUpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB1LFxuXG4gICAgICB9O1xuXG5cbiAgICBjYXNlIFVOQVVUSEVOVElDQVRFRDpcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBcIlwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzVG9rZW5cIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZFdmVudHNcIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJGYXZQcm9kdWN0c1wiLCBcIlwiKTtcbiAgICAgIGxvY2FsZm9yYWdlLnJlbW92ZUl0ZW0oJ2ZjbV90b2tlbicpXG4gICAgICBsb2NhbGZvcmFnZS5yZW1vdmVJdGVtKCdmY21fdG9rZW5fdXNlcicpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSwgJycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1JFU0VULCBmYWxzZSk7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCBkYXRhID0gXCJcIjtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV0IHVzZXJEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgICAgICBsZXQgdXNlckZhdkV2ZW50cyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJGYXZFdmVudHNcIik7XG4gICAgICAgIGxldCB1c2VyRmF2UHJvZHVjdHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRmF2UHJvZHVjdHNcIik7XG4gICAgICAgIGFjY2Vzc1Rva2VuRGF0YSA9XG4gICAgICAgICAgYWNjZXNzVG9rZW5EYXRhICYmIGFjY2Vzc1Rva2VuRGF0YSAhPSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGFjY2Vzc1Rva2VuRGF0YVxuICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICBpZiAodXNlckRhdGEgJiYgYWNjZXNzVG9rZW5EYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHVzZXJEYXRhLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuRGF0YSxcbiAgICAgICAgICAgIHVzZXJGYXZFdmVudHM6IHVzZXJGYXZFdmVudHMsXG4gICAgICAgICAgICB1c2VyRmF2UHJvZHVjdHM6IHVzZXJGYXZQcm9kdWN0c1xuXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiBpbml0aWFsU3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNIT1dfTU9EQUwsIENMT1NFX01PREFMIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2F1dGhNb2RhbFwiO1xuXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgQ0xPU0VfTU9EQUw6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9DT05ORUNURUQsIENIQVRfUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdENvbm5lY3RlZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQ0hBVF9DT05ORUNURUQ6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBjYXNlIENIQVRfUkVTRVQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDSEFUX1VOUkVBRF9SRVNFVCwgQ0hBVF9VTlJFQUQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVucmVhZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IDAsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDSEFUX1VOUkVBRDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhY3Rpb24uY291bnQpO1xuXG4gICAgICAgIGNhc2UgQ0hBVF9VTlJFQURfUkVTRVQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9BVVRIRU5USUNBVEVELCBDSEFUX1VOQVVUSEVOVElDQVRFRCwgQ0hBVF9VUERBVEVfVVNFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9jaGF0VXNlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdXJyZW50VXNlciA9IG51bGwsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDSEFUX0FVVEhFTlRJQ0FURUQ6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50VXNlclxuXG4gICAgICAgIGNhc2UgQ0hBVF9VUERBVEVfVVNFUjoge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihjdXJyZW50VXNlci51c2VyLCBhY3Rpb24ucGF5bG9hZC5jdXJyZW50VXNlcilcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyLnVzZXIgPSByZXN1bHRcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRVc2VyIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIENIQVRfVU5BVVRIRU5USUNBVEVEOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50VXNlcjtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gIEZFVENIX0RJQUxPR1MsXG4gIEFERF9ESUFMT0csXG4gIFNPUlRfRElBTE9HUyxcbiAgVVBEQVRFX0RJQUxPRyxcbiAgREVMRVRFX0RJQUxPRyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgdXBkYXRlRGlhbG9nLCBzb3J0ZWREaWFsb2cgfSBmcm9tIFwiLi9yZWR1Y2VyLWZ1bmN0aW9uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGRpYWxvZ3MgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0RJQUxPR1M6XG4gICAgICByZXR1cm4gYWN0aW9uLmRpYWxvZ3M7XG5cbiAgICBjYXNlIFVQREFURV9ESUFMT0c6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVwZGF0ZURpYWxvZyhhY3Rpb24sIGRpYWxvZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9ESUFMT0c6XG4gICAgICByZXR1cm4gW2FjdGlvbi5kaWFsb2csIC4uLmRpYWxvZ3NdO1xuXG4gICAgY2FzZSBTT1JUX0RJQUxPR1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRlZERpYWxvZyhhY3Rpb24sIGRpYWxvZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESUFMT0c6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRpYWxvZ3MuZmlsdGVyKChkaWFsb2cpID0+IGRpYWxvZy5pZCAhPT0gYWN0aW9uLmRpYWxvZ0lkKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaWFsb2dzO1xuICB9XG59O1xuXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBhdXRoX3VzZXIgZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IGF1dGhfbW9kYWwgZnJvbSBcIi4vYXV0aE1vZGFsXCI7XG5pbXBvcnQgY2hhdF91c2VyIGZyb20gXCIuL2NoYXRVc2VyXCI7XG5pbXBvcnQgZGlhbG9ncyBmcm9tIFwiLi9kaWFsb2dzXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBzZWxlY3RlZERpYWxvZyBmcm9tIFwiLi9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IHBhZ2VWaXNpdGVkIGZyb20gXCIuL1BhZ2VWaXNpdGVkXCI7XG5pbXBvcnQgY2hhdEF1dGhlbnRpY2F0ZWQgZnJvbSBcIi4vY2hhdFVzZXJcIjtcbmltcG9ydCBjaGF0Q29ubmVjdGVkIGZyb20gXCIuL2NoYXRDb25uZWN0ZWRcIjtcbmltcG9ydCBjaGF0VW5yZWFkQ291bnQgZnJvbSBcIi4vY2hhdFVucmVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoX3VzZXIsXG4gIGF1dGhfbW9kYWwsXG4gIGNoYXRfdXNlcixcbiAgZGlhbG9ncyxcbiAgbWVzc2FnZXMsXG4gIHNlbGVjdGVkRGlhbG9nLFxuICBwYWdlVmlzaXRlZCxcbiAgY2hhdEF1dGhlbnRpY2F0ZWQsXG4gIGNoYXRDb25uZWN0ZWQsXG4gIGNoYXRVbnJlYWRDb3VudFxufSk7XG4iLCJpbXBvcnQge1xuICBQVVNIX01FU1NBR0UsXG4gIFNFVF9NRVNTQUdFUyxcbiAgREVMRVRFX0FMTF9NRVNTQUdFUyxcbiAgTEFaWV9GRVRDSF9NRVNTQUdFUyxcbiAgVVBEQVRFX01FU1NBR0VTLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNFTEVDVEVEX0RJQUxPRyB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tIFwiY29ubmVjdHljdWJlXCI7XG5cbmltcG9ydCB7IGxhenlGZXRjaE1lc3NhZ2VzLCB1cGRhdGVTdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3JlZHVjZXItZnVuY3Rpb25cIjtcblxubGV0IGluaXRpYWxfc3RhdGUgPSB7XG4gIGRpYWxvZzoge30sXG4gIG1lc3NhZ2VzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAobWVzc2FnZXMgPSBpbml0aWFsX3N0YXRlLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUVTU0FHRVM6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBhY3Rpb24ubXNncztcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGFjdGlvbi5kaWFsb2c7XG4gICAgICByZXR1cm4geyBkaWFsb2c6IGRpYWxvZywgbWVzc2FnZXM6IG1zZ3MgfTtcbiAgICB9XG5cbiAgICAvLyBjYXNlIFNFTEVDVEVEX0RJQUxPRzoge1xuICAgIC8vICAgY29uc29sZS5sb2coYWN0aW9uKVxuICAgIC8vICAgY29uc3QgZGlhbG9nID0gYWN0aW9uLmRpYWxvZztcbiAgICAvLyAgIHJldHVybiB7IC4uLm1lc3NhZ2VzLCBkaWFsb2c6IGRpYWxvZyB9O1xuICAgIC8vIH1cblxuXG4gICAgY2FzZSBQVVNIX01FU1NBR0U6IHtcbiAgICAgIGxldCBtc2cgPSBhY3Rpb24ubXNnXG4gICAgICBpZiAobXNnICYmIG1zZy5kaWFsb2dfaWQgPT0gbWVzc2FnZXMuZGlhbG9nLmNvbm5lY3R5X2RpYWxvZ19pZCkge1xuICAgICAgICBpZiAobXNnLm5vdGlmKSB7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgcmVhZDogMSxcbiAgICAgICAgICAgIGNoYXRfZGlhbG9nX2lkOiBtc2cuZGlhbG9nX2lkXG4gICAgICAgICAgfTtcbiAgICAgICAgICBDb25uZWN0eUN1YmUuY2hhdC5tZXNzYWdlXG4gICAgICAgICAgICAudXBkYXRlKFwiXCIsIHBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMubWVzc2FnZXMuY29uY2F0KGFjdGlvbi5tc2cpO1xuICAgICAgICByZXR1cm4geyAuLi5tZXNzYWdlcywgbWVzc2FnZXM6IG1zZ3MgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YSA/IEpTT04ucGFyc2UodXNlckRhdGEpIDogXCJcIjtcbiAgICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBhcHBfaWQ6IHByb2Nlc3MuZW52Lk9ORVNJR05BTF9BUFBfSUQsXG4gICAgICAgICAgICBjb250ZW50czogeyBcImVuXCI6IFwiWW91IHJlY2lldmVkIGEgbmV3IG1lc3NhZ2UuXCIgfSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgeyBcImZpZWxkXCI6IFwidGFnXCIsIFwia2V5XCI6IFwidXNlclwiLCBcInJlbGF0aW9uXCI6IFwiPVwiLCBcInZhbHVlXCI6IHVzZXJEYXRhLmlkIH0sXG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vbmVzaWduYWwuY29tL2FwaS92MS9ub3RpZmljYXRpb25zXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgXCIgKyBwcm9jZXNzLmVudi5PTkVTSUdOQUxfUkVTVF9LRVksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLFxuICAgICAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBSZXF1ZXN0IHJlamVjdGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlRGF0YXNhZHNhZFwiLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwicmVzcG9uc2VEYXRhc2Fkc2FkXCIsIGVycm9yKSk7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgICByZXR1cm4gbWVzc2FnZXNcblxuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0FMTF9NRVNTQUdFUzoge1xuXG4gICAgICByZXR1cm4gaW5pdGlhbF9zdGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGluaXRpYWxfc3RhdGU7XG4gIH1cbn07XG4iLCJjb25zdCB1cGRhdGVEaWFsb2cgPSAoYWN0aW9uLCBkaWFsb2dzKSA9PiB7XG4gIGNvbnN0IGFscmVhZHlVcGRhdGVkRGlhbG9nID0gZGlhbG9ncy5tYXAoKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gYWN0aW9uLmRpYWxvZy5pZCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZWxlbSwgYWN0aW9uLmRpYWxvZyk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcbiAgcmV0dXJuIFsuLi5hbHJlYWR5VXBkYXRlZERpYWxvZ107XG59O1xuXG5jb25zdCBsYXp5RmV0Y2hNZXNzYWdlcyA9IChhY3Rpb24sIG1lc3NhZ2VzKSA9PiB7XG4gIGNvbnN0IG5ld0FyciA9IGFjdGlvbi5oaXN0b3J5LnJldmVyc2UoKS5jb25jYXQobWVzc2FnZXNbYWN0aW9uLmRpYWxvZ0lkXSk7XG4gIHJldHVybiB7IC4uLnt9LCBbYWN0aW9uLmRpYWxvZ0lkXTogbmV3QXJyIH07XG59O1xuXG5jb25zdCBzb3J0ZWREaWFsb2cgPSAoYWN0aW9uLCBkaWFsb2dzKSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgY291bnQgfSA9IGFjdGlvbjtcbiAgY29uc3QgdXBkYXRlRGlhbG9nID0gZGlhbG9ncy5tYXAoKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gbWVzc2FnZS5kaWFsb2dfaWQpIHtcbiAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgbGFzdF9tZXNzYWdlOiBtZXNzYWdlLmJvZHksXG4gICAgICAgIGxhc3RfbWVzc2FnZV9kYXRlX3NlbnQ6IG1lc3NhZ2UuZGF0ZV9zZW50LFxuICAgICAgICB1cGRhdGVkX2RhdGU6IG1lc3NhZ2UuZGF0ZV9zZW50LFxuICAgICAgICB1bnJlYWRfbWVzc2FnZXNfY291bnQ6IGNvdW50XG4gICAgICAgICAgPyAoZWxlbS51bnJlYWRfbWVzc2FnZXNfY291bnQgKz0gMSlcbiAgICAgICAgICA6IGVsZW0udW5yZWFkX21lc3NhZ2VzX2NvdW50LFxuICAgICAgfTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGVsZW0sIG5ld09iaik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcblxuICBjb25zdCBzb3J0ID0gKGl0ZW1zLCBpbnZlcnRlZCA9IGZhbHNlKSA9PlxuICAgIGl0ZW1zLnNvcnQoKGl0ZW1BLCBpdGVtQikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgbmV3IERhdGUoaXRlbUIubGFzdF9tZXNzYWdlX2RhdGVfc2VudCAqIDEwMDApIC1cbiAgICAgICAgbmV3IERhdGUoaXRlbUEubGFzdF9tZXNzYWdlX2RhdGVfc2VudCAqIDEwMDApO1xuICAgICAgcmV0dXJuIGludmVydGVkID8gIXJlc3VsdCA6IHJlc3VsdDtcbiAgICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBzb3J0KHVwZGF0ZURpYWxvZyk7XG5cbiAgcmV0dXJuIFsuLi5yZXN1bHRdO1xufTtcblxuY29uc3QgdXBkYXRlU3RhdHVzTWVzc2FnZXMgPSAoYWN0aW9uLCBtZXNzYWdlKSA9PiB7XG4gIGlmIChPYmplY3Qua2V5cyhtZXNzYWdlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIGNvbnN0IG5ld01lc3NhZ2VzID0gbWVzc2FnZVthY3Rpb24uZGlhbG9nSWRdLm1hcCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gYWN0aW9uLm1zZ0lkKSB7XG4gICAgICBjb25zdCB1cGRhdGVTZW5kU3RhdHVzID0geyAuLi5lbGVtIH07XG4gICAgICB1cGRhdGVTZW5kU3RhdHVzLnNlbmRfc3RhdGUgPSBhY3Rpb24ubXNnLnNlbmRfc3RhdGU7XG4gICAgICByZXR1cm4geyAuLi51cGRhdGVTZW5kU3RhdHVzIH07XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSB7IC4uLm1lc3NhZ2UsIFthY3Rpb24uZGlhbG9nSWRdOiBuZXdNZXNzYWdlcyB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBmZXRjaFVzZXJzID0gKGFjdGlvbiwgdXNlcnMpID0+IHtcbiAgY29uc3QgbmV3T2JqVXNlcnMgPSB7fTtcbiAgYWN0aW9uLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXdPYmpVc2Vyc1tlbGVtLmlkXSA9IGVsZW07XG4gIH0pO1xuICByZXR1cm4geyAuLi51c2VycywgLi4ubmV3T2JqVXNlcnMgfTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZURpYWxvZyxcbiAgbGF6eUZldGNoTWVzc2FnZXMsXG4gIHNvcnRlZERpYWxvZyxcbiAgdXBkYXRlU3RhdHVzTWVzc2FnZXMsXG4gIGZldGNoVXNlcnMsXG59O1xuIiwiaW1wb3J0IHtcbiAgU0VMRUNURURfRElBTE9HLFxuICBVTl9TRUxFQ1RFRF9ESUFMT0csXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9zZWxlY3RlZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoZGlhbG9nID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFTEVDVEVEX0RJQUxPRzoge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLmRpYWxvZyB9O1xuICAgIH1cblxuICAgIGNhc2UgVU5fU0VMRUNURURfRElBTE9HOiB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaWFsb2c7XG4gIH1cbn07XG4iLCJpbXBvcnQgQ29ubmVjdHlDdWJlIGZyb20gJ2Nvbm5lY3R5Y3ViZSdcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vbW9kZWxzL2RpYWxvZ3MnXG5pbXBvcnQge1xuICBmZXRjaERpYWxvZ3MsXG4gIHNvcnREaWFsb2dzLFxuICB1cGRhdGVEaWFsb2csXG4gIGFkZE5ld0RpYWxvZyxcbn0gZnJvbSAnLi4vYWN0aW9ucy9kaWFsb2dzJ1xuaW1wb3J0IHtcbiAgcHVzaE1lc3NhZ2UsXG4gIHNldE1lc3NhZ2VzLFxuICBsYXp5RmV0Y2hNZXNzYWdlcyxcbiAgdXBkYXRlTWVzc2FnZXMsXG59IGZyb20gJy4uL2FjdGlvbnMvbWVzc2FnZXMnXG5pbXBvcnQgeyBwcmVwYXJhdGlvbkF0dGFjaG1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2ZpbGUnXG5pbXBvcnQgeyBzZWxlY3RlZERpYWxvZyB9IGZyb20gJy4uL2FjdGlvbnMvc2VsZWN0ZWREaWFsb2cnXG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VycydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IE1lc3NhZ2UsIEZha2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL21lc3NhZ2UnXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy91c2VyJ1xuaW1wb3J0IHsgRElBTE9HX1RZUEUgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIFNUQVRVU19ERUxJVkVSRUQsXG4gIFNUQVRVU19SRUFELFxuICBTVEFUVVNfU0VOVCxcbiAgR1JPVVBfQ0hBVF9BTEVSVF9UWVBFXG59IGZyb20gJy4uL21vZGVscy9tZXNzYWdlJ1xuXG5jbGFzcyBDaGF0U2VydmljZSB7XG5cbiAgc2V0VXBMaXN0ZW5lcnMoKSB7XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQub25NZXNzYWdlTGlzdGVuZXIgPSB0aGlzLm9uTWVzc2FnZUxpc3RlbmVyLmJpbmQodGhpcylcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5vblNlbnRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLm9uU2VudE1lc3NhZ2VMaXN0ZW5lci5iaW5kKHRoaXMpXG4gICAgQ29ubmVjdHlDdWJlLmNoYXQub25EZWxpdmVyZWRTdGF0dXNMaXN0ZW5lciA9IHRoaXMub25EZWxpdmVyZWRTdGF0dXMuYmluZCh0aGlzKVxuICAgIENvbm5lY3R5Q3ViZS5jaGF0Lm9uUmVhZFN0YXR1c0xpc3RlbmVyID0gdGhpcy5vblJlYWRTdGF0dXMuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hEaWFsb2dzRnJvbVNlcnZlcigpIHtcbiAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5kaWFsb2dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuZGlhbG9nc1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdpbiBmZXRjaCcpXG4gICBjb25zdCBkaWFsb2dzRnJvbVNlcnZlciA9ICBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cubGlzdCgpXG4gICAgLy8gY29uc3QgY3VycmVudFVzZXJJZCA9IHRoaXMuY3VycmVudFVzZXJcbiAgICAvLyBsZXQgcHJpdmF0Q2hhdElkc1VzZXIgPSBbXVxuXG4gICAgY29uc3QgZGlhbG9ncyA9IGRpYWxvZ3NGcm9tU2VydmVyLml0ZW1zLm1hcChlbGVtID0+IHtcbiAgICAgIC8vIGlmIChlbGVtLnR5cGUgPT09IERJQUxPR19UWVBFLlBSSVZBVEUpIHtcbiAgICAgIC8vICAgZWxlbS5vY2N1cGFudHNfaWRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAvLyAgICAgZWxlbSAhPT0gY3VycmVudFVzZXJJZC5pZCAmJiBwcml2YXRDaGF0SWRzVXNlci5wdXNoKGVsZW0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9XG4gICAgICByZXR1cm4gbmV3IERpYWxvZyhlbGVtKVxuICAgIH0pXG5cbiAgICAvLyBpZiAocHJpdmF0Q2hhdElkc1VzZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gICBjb25zdCB1c2Vyc0luZm8gPSBhd2FpdCB0aGlzLmdldFVzZXJzTGlzdChwcml2YXRDaGF0SWRzVXNlcilcbiAgICAvLyAgIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlcnModXNlcnNJbmZvKSlcbiAgICAvLyB9XG5cbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaERpYWxvZ3MoZGlhbG9ncykpXG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuZGlhbG9nc1xuICB9XG5cbiAgYXN5bmMgZ2V0TWVzc2FnZXMoZGlhbG9nKSB7XG4gICAgY29uc3QgaXNBbHJlZHlVcGRhdGUgPSB0aGlzLmdldE1lc3NhZ2VzQnlEaWFsb2dJZChkaWFsb2cuaWQpXG4gICAgbGV0IGFtb3VudE1lc3NhZ2VzID0gbnVsbFxuXG4gICAgLy8gSWYgdGhlIGZpcnN0IGVudHJ5IGludG8gdGhlIGNoYXRcbiAgICBpZiAoIWRpYWxvZy5pc0FscmVhZHlNZXNzYWdlRmV0Y2ggfHwgZGlhbG9nLnVucmVhZF9tZXNzYWdlc19jb3VudCA+IDAgJiYgIWRpYWxvZy5pc0FscmVhZHlNZXNzYWdlRmV0Y2gpIHtcbiAgICAgIGNvbnN0IGhpc3RvcnlGcm9tU2VydmVyID0gYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZS5saXN0KHtcbiAgICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZy5pZCxcbiAgICAgICAgc29ydF9kZXNjOiAnZGF0ZV9zZW50J1xuICAgICAgfSlcblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXVxuICAgICAgaGlzdG9yeUZyb21TZXJ2ZXIuaXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYgKCFlbGVtLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSkge1xuICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2UoZWxlbSwgdGhpcy5jdXJyZW50VXNlci5pZCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oZGlhbG9nLCB7IGlzQWxyZWFkeU1lc3NhZ2VGZXRjaDogdHJ1ZSB9KVxuICAgICAgdGhpcy51cGRhdGVEaWFsb2dzVW5yZWFkTWVzc2FnZXNDb3VudChuZXdPYmopXG4gICAgICBzdG9yZS5kaXNwYXRjaChzZXRNZXNzYWdlcyhkaWFsb2cuaWQsIG1lc3NhZ2VzKSlcbiAgICAgIGFtb3VudE1lc3NhZ2VzID0gbWVzc2FnZXMubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBzZWNvbmQgZW50cnkgaW50byB0aGUgY2hhdFxuICAgICAgaWYgKGRpYWxvZy51bnJlYWRfbWVzc2FnZXNfY291bnQgPiAwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc0J5RGlhbG9nSWQoZGlhbG9nLmlkKVxuICAgICAgICBjb25zdCBmaXJzdFVucmVhZE1zZyA9IG1lc3NhZ2VzW2RpYWxvZy51bnJlYWRfbWVzc2FnZXNfY291bnQgLSAxXVxuICAgICAgICB0aGlzLnJlYWRBbGxNZXNzYWdlcyhkaWFsb2cuaWQpXG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZFJlYWRTdGF0dXMoZmlyc3RVbnJlYWRNc2cuaWQsIGZpcnN0VW5yZWFkTXNnLnNlbmRlcl9pZCwgZmlyc3RVbnJlYWRNc2cuZGlhbG9nX2lkKVxuICAgICAgICB0aGlzLnVwZGF0ZURpYWxvZ3NVbnJlYWRNZXNzYWdlc0NvdW50KGRpYWxvZylcbiAgICAgIH1cbiAgICAgIGFtb3VudE1lc3NhZ2VzID0gaXNBbHJlZHlVcGRhdGUubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBhbW91bnRNZXNzYWdlc1xuICB9XG5cbiAgLy8gTWVzc2FnZSBsb2FkaW5nIGlmIG1vcmUgdGhhbiAxMDBcbiAgZ2V0TW9yZU1lc3NhZ2VzID0gYXN5bmMgKGRpYWxvZykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNCeURpYWxvZ0lkKGRpYWxvZy5pZClcbiAgICBjb25zdCBsYXN0TWVzc2FnZURhdGUgPSBjdXJyZW50TWVzc2FnZXNbMF1cbiAgICBjb25zdCB1cGRhdGVPYmogPSBPYmplY3QuYXNzaWduKGRpYWxvZywgeyBsYXN0X21lc3NhZ2VzX2Zvcl9mZXRjaDogbGFzdE1lc3NhZ2VEYXRlLmRhdGVfc2VudCB9KVxuXG4gICAgY29uc3QgZmlsdGVyID0ge1xuICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZy5pZCxcbiAgICAgIGRhdGVfc2VudDogeyBsdDogbGFzdE1lc3NhZ2VEYXRlLmRhdGVfc2VudCB9LFxuICAgICAgc29ydF9kZXNjOiAnZGF0ZV9zZW50J1xuICAgIH1cblxuICAgIGNvbnN0IG1vcmVIaXN0b3J5RnJvbVNlcnZlciA9IGF3YWl0IENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2UubGlzdChmaWx0ZXIpXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdXG4gICAgbW9yZUhpc3RvcnlGcm9tU2VydmVyLml0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoIWVsZW0uZ3JvdXBfY2hhdF9hbGVydF90eXBlKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2UoZWxlbSwgdGhpcy5jdXJyZW50VXNlci5pZCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZURpYWxvZyh1cGRhdGVPYmopKVxuICAgIGNvbnN0IGFtb3VudE1lc3NhZ2VzID0gc3RvcmUuZGlzcGF0Y2gobGF6eUZldGNoTWVzc2FnZXMoZGlhbG9nLmlkLCBtZXNzYWdlcykpXG4gICAgcmV0dXJuIGFtb3VudE1lc3NhZ2VzLmhpc3RvcnkubGVuZ3RoXG4gIH1cblxuXG4gIGFzeW5jIHNlbmRNZXNzYWdlKGRpYWxvZywgbWVzc2FnZVRleHQsIGF0dGFjaG1lbnRzID0gZmFsc2UsIHNjcm9sbFRvQm90dG9tKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuY3VycmVudFVzZXJcbiAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZVRleHQudHJpbSgpXG4gICAgY29uc3QgZGF0ZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgY29uc3QgcmVjaXBpZW50X2lkID0gZGlhbG9nLnR5cGUgPT09IERJQUxPR19UWVBFLlBSSVZBVEUgPyBkaWFsb2cub2NjdXBhbnRzX2lkcy5maW5kKGVsZW0gPT4gZWxlbSAhPSB1c2VyLmlkKVxuICAgICAgOiBkaWFsb2cueG1wcF9yb29tX2ppZFxuXG4gICAgbGV0IG1zZyA9IHtcbiAgICAgIHR5cGU6IGRpYWxvZy54bXBwX3R5cGUsXG4gICAgICBib2R5OiB0ZXh0LFxuICAgICAgZXh0ZW5zaW9uOiB7XG4gICAgICAgIHNhdmVfdG9faGlzdG9yeTogMSxcbiAgICAgICAgZGlhbG9nX2lkOiBkaWFsb2cuaWQsXG4gICAgICAgIHNlbmRlcl9pZDogdXNlci5pZCxcbiAgICAgICAgZGF0ZV9zZW50OiBkYXRlLFxuICAgICAgfSxcbiAgICAgIC8vIG1hcmthYmxlOiAxXG4gICAgfVxuXG4gICAgbXNnLmlkID0gdGhpcy5tZXNzYWdlVW5pcXVlSWRcblxuICAgIC8vIElmIHNlbmQgbWVzc2FnZSBhcyBBdHRhY2htZW50XG4gICAgaWYgKGF0dGFjaG1lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZUFzQXR0YWNobWVudChkaWFsb2csIHJlY2lwaWVudF9pZCwgbXNnLCBhdHRhY2htZW50cywgc2Nyb2xsVG9Cb3R0b20pXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBGYWtlTWVzc2FnZShtc2cpXG5cbiAgICBjb25zdCBuZXdPYmpGcmVleiA9IE9iamVjdC5mcmVlemUobWVzc2FnZSlcblxuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG5ld09iakZyZWV6LCBkaWFsb2cuaWQpKVxuICAgIHNjcm9sbFRvQm90dG9tKClcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5zZW5kKHJlY2lwaWVudF9pZCwgbXNnKVxuICAgIHN0b3JlLmRpc3BhdGNoKHNvcnREaWFsb2dzKG5ld09iakZyZWV6KSlcbiAgfVxuXG5cbiAgc2VuZE1zZ0NoYXRBbGVydE9uQ3JlYXRlID0gYXN5bmMgKGRpYWxvZywgbWVzc2FnZSwgYWxlcnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgY29uc3QgcmVjaXBpZW50X2lkID0gZGlhbG9nLnR5cGUgPT09IERJQUxPR19UWVBFLlBSSVZBVEUgPyBkaWFsb2cub2NjdXBhbnRzX2lkcy5maW5kKGVsZW0gPT4gZWxlbSAhPSB0aGlzLmN1cnJlbnRVc2VyLmlkKVxuICAgICAgOiBkaWFsb2cueG1wcF9yb29tX2ppZFxuICAgIGNvbnN0IG1lc3NhZ2VFeHRlbnNpb25zID0ge1xuICAgICAgZGF0ZV9zZW50OiBkYXRlLFxuICAgICAgc2F2ZV90b19oaXN0b3J5OiAxLFxuICAgICAgZGlhbG9nX2lkOiBkaWFsb2cuaWQsXG4gICAgICBncm91cF9jaGF0X2FsZXJ0X3R5cGU6IGFsZXJ0VHlwZSxcbiAgICAgIHNlbmRlcl9pZDogdGhpcy5jdXJyZW50VXNlci5pZCxcbiAgICB9XG4gICAgY29uc3QgbXNnID0ge1xuICAgICAgdHlwZTogIWRpYWxvZy54bXBwX3Jvb21famlkID8gJ2NoYXQnIDogJ2dyb3VwY2hhdCcsXG4gICAgICBib2R5OiBtZXNzYWdlLFxuICAgICAgZXh0ZW5zaW9uOiBtZXNzYWdlRXh0ZW5zaW9ucyxcbiAgICB9XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChyZWNpcGllbnRfaWQsIG1zZylcbiAgfVxuXG4gIHNlbmRDaGF0QWxlcnRPbkNyZWF0ZShkaWFsb2cpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ0dyb3VwIGlzIGNyZWF0ZWQnXG4gICAgdGhpcy5zZW5kTXNnQ2hhdEFsZXJ0T25DcmVhdGUoZGlhbG9nLCBtZXNzYWdlLCBHUk9VUF9DSEFUX0FMRVJUX1RZUEUuQ1JFQVRFKVxuICB9XG5cbiAgYXN5bmMgc2VuZE1lc3NhZ2VBc0F0dGFjaG1lbnQoZGlhbG9nLCByZWNpcGllbnRfaWQsIG1zZywgYXR0YWNobWVudHMsIHNjcm9sbFRvQm90dG9tKSB7XG4gICAgLy9jcmVhdGUgZmFrZSBkYXRhIGZvciByZW5kZXIgaW1nXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdHRhY2htZW50cy5maWxlKVxuICAgIG1zZy5leHRlbnNpb24uYXR0YWNobWVudHMgPSBbeyB1cmwgfV1cbiAgICBtc2cuYm9keSA9ICdJbWFnZSBhdHRhY2htZW50J1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgRmFrZU1lc3NhZ2UobXNnKVxuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG1lc3NhZ2UsIGRpYWxvZy5pZCkpXG4gICAgc2Nyb2xsVG9Cb3R0b20oKVxuXG4gICAgLy8gY3JlYXRlIHJlYWwgZGF0YSBmb3IgYXR0YWNobWVudFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy51cGxvYWRQaG90byhhdHRhY2htZW50cylcbiAgICBjb25zdCBuZXdPYmpBdHRhY2ggPSBwcmVwYXJhdGlvbkF0dGFjaG1lbnQocmVzcG9uc2UpXG4gICAgbXNnLmV4dGVuc2lvbi5hdHRhY2htZW50cyA9IFtuZXdPYmpBdHRhY2hdXG4gICAgYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChyZWNpcGllbnRfaWQsIG1zZylcbiAgICBzdG9yZS5kaXNwYXRjaChzb3J0RGlhbG9ncyhtZXNzYWdlKSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVByaXZhdGVEaWFsb2codXNlcklkKSB7XG4gICAgY29uc3QgZGlhbG9ncyA9IHN0b3JlLmdldFN0YXRlKCkuZGlhbG9nc1xuICAgIGxldCBkaWFsb2cgPSBudWxsXG5cbiAgICBkaWFsb2dzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoZWxlbS50eXBlID09PSBESUFMT0dfVFlQRS5QUklWQVRFICYmIGVsZW0ub2NjdXBhbnRzX2lkcy5maW5kKGVsZW0gPT4gZWxlbSA9PT0gdXNlcklkKSkge1xuICAgICAgICBkaWFsb2cgPSBlbGVtXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHR5cGU6IERJQUxPR19UWVBFLlBSSVZBVEUsXG4gICAgICAgIG9jY3VwYW50c19pZHM6IHVzZXJJZCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cuY3JlYXRlKHBhcmFtcylcbiAgICAgIGRpYWxvZyA9IG5ldyBEaWFsb2cocmVzcG9uc2UpXG4gICAgICBpZiAodGhpcy5nZXRVc2VyRnJvbVJlZHV4QnlJZCh1c2VySWQpKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZE5ld0RpYWxvZyhkaWFsb2cpKVxuICAgICAgICByZXR1cm4gZGlhbG9nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1c2Vyc0luZm8gPSBhd2FpdCB0aGlzLmdldFVzZXJGcm9tU2VydmVyQnlJZCh1c2VySWQpXG4gICAgICAgIHVzZXJzSW5mby51c2VyID0gbmV3IFVzZXJNb2RlbCh1c2Vyc0luZm8udXNlcilcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycyhbdXNlcnNJbmZvLnVzZXJdKSlcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkTmV3RGlhbG9nKGRpYWxvZykpXG4gICAgICAgIHJldHVybiBkaWFsb2dcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXNlciBpcyBhbHJlYWR5IGluIHRoZSBSZWR1eFxuICAgIGlmICh0aGlzLmdldFVzZXJGcm9tUmVkdXhCeUlkKHVzZXJJZCkpIHtcbiAgICAgIHJldHVybiBkaWFsb2dcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnNJbmZvID0gYXdhaXQgdGhpcy5nZXRVc2VyRnJvbVNlcnZlckJ5SWQodXNlcklkKVxuICAgICAgdXNlcnNJbmZvLnVzZXIgPSBuZXcgVXNlck1vZGVsKHVzZXJzSW5mby51c2VyKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycyhbdXNlcnNJbmZvLnVzZXJdKSlcbiAgICAgIHJldHVybiBkaWFsb2dcbiAgICB9XG4gIH1cblxuXG4gIHVwZGF0ZURpYWxvZ3NVbnJlYWRNZXNzYWdlc0NvdW50ID0gKGRpYWxvZykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZU9iaiA9IE9iamVjdC5hc3NpZ24oZGlhbG9nLCB7IHVucmVhZF9tZXNzYWdlc19jb3VudDogMCB9KVxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZURpYWxvZyh1cGRhdGVPYmopKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBhc3luYyBjcmVhdGVQdWJsaWNEaWFsb2cob2NjdXBhbnRzX2lkcywgZ3JvdXBOYW1lLCBpbWcpIHtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHRoaXMuY3VycmVudFVzZXJcbiAgICBvY2N1cGFudHNfaWRzLnVuc2hpZnQoY3VycmVudFVzZXIuaWQpXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgdHlwZTogRElBTE9HX1RZUEUuR1JPVVAsXG4gICAgICBvY2N1cGFudHNfaWRzLFxuICAgICAgbmFtZTogZ3JvdXBOYW1lLFxuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IGltZyA/IGF3YWl0IHRoaXMudXBsb2FkUGhvdG8oaW1nKSA6IG51bGxcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHBhcmFtcy5waG90byA9IGltYWdlLnVpZFxuICAgIH1cbiAgICBjb25zdCBkaWFsb2cgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cuY3JlYXRlKHBhcmFtcylcbiAgICBjb25zdCBuZXdEaWFsb2cgPSBuZXcgRGlhbG9nKGRpYWxvZylcbiAgICBzdG9yZS5kaXNwYXRjaChhZGROZXdEaWFsb2cobmV3RGlhbG9nKSlcbiAgICByZXR1cm4gbmV3RGlhbG9nXG4gIH1cblxuICBhc3luYyByZWFkQWxsTWVzc2FnZXMoZGlhbG9nSWQpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZS51cGRhdGUobnVsbCwge1xuICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZ0lkLFxuICAgICAgcmVhZDogMVxuICAgIH0pXG4gIH1cblxuICBhc3luYyByZWFkTWVzc2FnZShtZXNzYWdlSWQsIGRpYWxvZ0lkKSB7XG4gICAgdGhpcy5vblJlYWRTdGF0dXMobWVzc2FnZUlkLCBkaWFsb2dJZClcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZS51cGRhdGUobnVsbCwge1xuICAgICAgY2hhdF9kaWFsb2dfaWQ6IGRpYWxvZ0lkLFxuICAgICAgcmVhZDogMVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbk1lc3NhZ2VMaXN0ZW5lcihzZW5kZXJJZCwgbXNnKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG1zZylcbiAgICBjb25zdCB1c2VyID0gdGhpcy5jdXJyZW50VXNlclxuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuZ2V0U2VsZWN0ZWREaWFsb2coKT8uaWRcblxuICAgIC8vIElmIGdyb3VwIGNoYXQgYWxldFxuICAgIGlmIChtc2cuZXh0ZW5zaW9uLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSkge1xuICAgICAgY29uc3QgZGlhbG9nc0Zyb21TZXJ2ZXIgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5kaWFsb2cubGlzdCgpXG4gICAgICBjb25zdCBkaWFsb2dzID0gZGlhbG9nc0Zyb21TZXJ2ZXIuaXRlbXMubWFwKGVsZW0gPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERpYWxvZyhlbGVtKVxuICAgICAgfSlcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoRGlhbG9ncyhkaWFsb2dzKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZW5kZXJJZCAhPT0gdXNlci5pZCkge1xuICAgICAgaWYgKGRpYWxvZyA9PT0gbWVzc2FnZS5kaWFsb2dfaWQpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc29ydERpYWxvZ3MobWVzc2FnZSkpXG4gICAgICAgIHRoaXMucmVhZE1lc3NhZ2UobWVzc2FnZS5pZCwgbWVzc2FnZS5kaWFsb2dfaWQpXG4gICAgICAgIHRoaXMuc2VuZFJlYWRTdGF0dXMobXNnLmV4dGVuc2lvbi5tZXNzYWdlX2lkLCBtc2cuZXh0ZW5zaW9uLnNlbmRlcl9pZCwgbXNnLmRpYWxvZ19pZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VuZERlbGl2ZXJlZFN0YXR1cyhtc2cuZXh0ZW5zaW9uLm1lc3NhZ2VfaWQsIG1zZy5leHRlbnNpb24uc2VuZGVyX2lkLCBtc2cuZGlhbG9nX2lkKVxuICAgICAgICBzdG9yZS5kaXNwYXRjaChzb3J0RGlhbG9ncyhtZXNzYWdlLCB0cnVlKSlcbiAgICAgIH1cbiAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UuZGlhbG9nX2lkKSlcbiAgICB9XG4gIH1cblxuICAvLyBDb25uZWN0eUN1YmUgbGlzdGVuZXJzXG4gIG9uU2VudE1lc3NhZ2VMaXN0ZW5lcihmYWlsZWRNZXNzYWdlLCBtc2cpIHtcbiAgICBjb25zb2xlLndhcm4oJ29uU2VudE1lc3NhZ2VMaXN0ZW5lcicpXG4gICAgaWYgKGZhaWxlZE1lc3NhZ2UgfHwgbXNnLmV4dGVuc2lvbi5ncm91cF9jaGF0X2FsZXJ0X3R5cGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNZXNzYWdlcyhtc2cuZXh0ZW5zaW9uLmRpYWxvZ19pZCwgbXNnLmlkLCB7IHNlbmRfc3RhdGU6IFNUQVRVU19TRU5UIH0pKVxuICB9XG5cbiAgb25EZWxpdmVyZWRTdGF0dXMobWVzc2FnZUlkLCBkaWFsb2dJZCwgdXNlcklkKSB7XG4gICAgY29uc29sZS53YXJuKCdvbkRlbGl2ZXJlZFN0YXR1cycsIG1lc3NhZ2VJZClcbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNZXNzYWdlcyhkaWFsb2dJZCwgbWVzc2FnZUlkLCB7IHNlbmRfc3RhdGU6IFNUQVRVU19ERUxJVkVSRUQgfSkpXG4gIH1cblxuICBvblJlYWRTdGF0dXMobWVzc2FnZUlkLCBkaWFsb2dJZCwgdXNlcklkKSB7XG4gICAgY29uc29sZS53YXJuKCdvblJlYWRTdGF0dXMnLCBtZXNzYWdlSWQpXG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTWVzc2FnZXMoZGlhbG9nSWQsIG1lc3NhZ2VJZCwgeyBzZW5kX3N0YXRlOiBTVEFUVVNfUkVBRCB9KSlcbiAgfVxuXG5cblxuICBzZW5kUmVhZFN0YXR1cyhtZXNzYWdlSWQsIHVzZXJJZCwgZGlhbG9nSWQpIHtcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5zZW5kUmVhZFN0YXR1cyh7IG1lc3NhZ2VJZCwgdXNlcklkLCBkaWFsb2dJZCB9KVxuICB9XG5cbiAgc2VuZERlbGl2ZXJlZFN0YXR1cyhtZXNzYWdlSWQsIHVzZXJJZCwgZGlhbG9nSWQpIHtcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5zZW5kRGVsaXZlcmVkU3RhdHVzKHsgbWVzc2FnZUlkLCB1c2VySWQsIGRpYWxvZ0lkIH0pXG4gIH1cblxuICBhc3luYyBnZXRVc2Vyc0xpc3QoaWRzKSB7XG4gICAgY29uc3QgdXNlcnNMaXN0ID0gYXdhaXQgQ29ubmVjdHlDdWJlLnVzZXJzLmdldCh7XG4gICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIGZpZWxkOiAnaWQnLCBwYXJhbTogJ2luJywgdmFsdWU6IGlkcyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiB1c2Vyc0xpc3QuaXRlbXMubWFwKGVsZW0gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyTW9kZWwoZWxlbS51c2VyKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBnZXRVc2VyRnJvbVNlcnZlckJ5SWQoaWQpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLnVzZXJzLmdldChpZClcbiAgfVxuXG4gIHNldFNlbGVjdERpYWxvZyhkaWFsb2cpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChzZWxlY3RlZERpYWxvZyhkaWFsb2cpKVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWREaWFsb2coKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuc2VsZWN0ZWREaWFsb2dcbiAgfVxuXG4gIGdldERpYWxvZ0J5SWQoZGlhbG9nSWQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS5kaWFsb2dzLmZpbmQoZWxlbSA9PiBlbGVtLmlkID09PSBkaWFsb2dJZClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzQnlEaWFsb2dJZChkaWFsb2dJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JlLmdldFN0YXRlKCkubWVzc2FnZXNcbiAgICByZXR1cm4gcmVzdWx0W2RpYWxvZ0lkXVxuICB9XG5cbiAgYXN5bmMgdXBsb2FkUGhvdG8oZmlsZSkge1xuICAgIHJldHVybiBDb25uZWN0eUN1YmUuc3RvcmFnZS5jcmVhdGVBbmRVcGxvYWQoZmlsZSlcbiAgfVxuXG4gIGdldCBjdXJyZW50VXNlcigpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VXNlci51c2VyXG4gIH1cblxuICBnZXRVc2VyRnJvbVJlZHV4QnlJZChpZCkge1xuICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJzW2lkXVxuICB9XG5cbiAgZ2V0IG1lc3NhZ2VVbmlxdWVJZCgpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLmNoYXQuaGVscGVycy5nZXRCc29uT2JqZWN0SWQoKVxuICB9XG59XG5cblxuY29uc3QgY2hhdFNlcnZpY2UgPSBuZXcgQ2hhdFNlcnZpY2UoKVxuXG5PYmplY3QuZnJlZXplKGNoYXRTZXJ2aWNlKVxuXG5leHBvcnQgZGVmYXVsdCBjaGF0U2VydmljZVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpOlwiXCIpO1xuIiwiLy8gaW1wb3J0IHtcclxuLy8gICBzZWNvbmRhcnlEYXJrLCBiYWNrZ3JvdW5kQ29sb3IsIGJsdWVUZXh0LCBtYWluVGV4dFxyXG4vLyB9IGZyb20gJ3NyYy9fc3R5bGVzL2NvbG9ycydcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25TdHlsZXMgPSB7XHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHpJbmRleDogOTk5OTksXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwYWRkaW5nOiBcIjVyZW0gMFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIHB0WmVybzoge1xyXG4gICAgcGFkZGluZ1RvcDogXCIwICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIHNwYWNpbmdCb3g6IHtcclxuICAgIG1hcmdpbjogXCIzcmVtIDBcIixcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIG1heFdpZHRoOiBcIjkxMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBcIiYgaDNcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBoMlwiOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBjb2xvcjogXCIjNEE0QTRBXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMjVyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBJY29uQ2FyZFdyYXBwZXI6IHtcclxuICAgIG1heFdpZHRoOiBcIjk2MHB4XCIsXHJcbiAgICBtYXJnaW46IFwiMnJlbSBhdXRvIDBcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKC9zdGF0aWMvaW1hZ2VzL2NpcmNsZUNlbnRlci5zdmcpXCIsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIHRvcDogXCI1NSVcIixcclxuICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNTQwcHhcIixcclxuICAgICAgd2lkdGg6IFwiNTQwcHhcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgekluZGV4OiBcIi0xXCIsXHJcbiAgICB9LFxyXG4gICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgYmFja2dyb3VuZDogXCJ1cmwoL3N0YXRpYy9pbWFnZXMvY2lyY2xlQ2VudGVyLnN2ZylcIixcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgYm90dG9tOiBcIi0xNXJlbVwiLFxyXG4gICAgICBsZWZ0OiBcIi0yNXJlbVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNTByZW1cIixcclxuICAgICAgd2lkdGg6IFwiNTByZW1cIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgekluZGV4OiBcIi0xXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgRXZlbnRJY29uQ2FyZFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCIycmVtIGF1dG8gMFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBwcm9kdWN0c0hlYWRlcjoge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwic29saWQgMXB4ICNCREJEQkRcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIFwiJiBoNVwiOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRBcHA6IHtcclxuICAgIHBhZGRpbmc6IFwiM3JlbSAwXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjM1LCAyMzgsIDIzOSwgMC42KVwiLFxyXG4gICAgICB6SW5kZXg6IFwiMVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvd25sb2FkVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IFwiMlwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaDNcIjoge1xyXG4gICAgICBjb2xvcjogXCIjMkE2NkVBXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRDb250ZW50OiB7XHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgekluZGV4OiBcIjJcIixcclxuICAgIHdpZHRoOiBcIm1heC1jb250ZW50XCIsXHJcbiAgICBcIiYgaDVcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRMaW5rczoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgXCImIGFcIjoge1xyXG4gICAgICB3aWR0aDogXCI0OCVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaW1nXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFByb2R1Y3RzR3JpZFdyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoIGF1dG8tZml0LCAzMDBweCApXCIsXHJcbiAgICBncmlkR2FwOicxcmVtJyxcclxuICAgIFwiJjpudGgtb2YtdHlwZSgxKVwiOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiMnJlbVwiLFxyXG4gICAgfSxcclxuICAgIFwiJjpudGgtbGFzdC1vZi10eXBlKDEpXCI6IHtcclxuICAgICAgcGFkZGluZ1RvcDogXCIycmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJvZHVjdENvbnRlbnRTZWN0aW9uOiB7XHJcbiAgICBtYXJnaW46IFwiM3JlbSAwXCIsXHJcbiAgICBwYWRkaW5nOiBcIjJyZW1cIixcclxuICAgIGJhY2tncm91bmRTaXplOiBcIjEyMCVcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgIFwiJiBoNFwiOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGJ1dHRvblwiOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCI2cmVtXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIycmVtXCIsXHJcbiAgICAgIHdpZHRoOiBcIjI5MHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCI1MXB4XCIsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZmxpdGVyQnRuOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgd2lkdGg6IFwiMXJlbVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCI4cmVtXCIsXHJcbiAgICBoZWlnaHQ6IFwiMi41cmVtXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQnJlYWRjcnVtYnM6IHtcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgIH0sXHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3Nvb25JbWc6IHtcclxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXHJcbiAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgfSxcclxuICBsb2FkTW9yZToge1xyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgcGFkZGluZzogXCIwLjZyZW0gMnJlbVwiLFxyXG4gIH0sXHJcbiAgbG9hZE1vcmV3cmFwcGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgbWFyZ2luVG9wOiAnMS4ycmVtJ1xyXG4gIH0sXHJcbiAgYnV0dG9uUHJvZ3Jlc3M6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gIH0sXHJcbiAgY2F0QnRuOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgXCImICsgZGl2XCI6IHtcclxuICAgICAgekluZGV4OiBcIjk5XCIsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlUb3VjaFJpcHBsZS1yb290XCI6IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW9iaWxlU3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHBhZGRpbmc6IFwiMXJlbSAwXCIsXHJcbiAgfSxcclxuICBwcm9kdWN0Q29udGVudFNlY3Rpb246e1xyXG4gICAgbWFyZ2luOiAnMXJlbSAwJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICcwJ1xyXG4gIH0sXHJcbiAgc3BhY2luZ0JveDoge1xyXG4gICAgbWFyZ2luOiBcIjAuNXJlbSAwXCIsXHJcbiAgfSxcclxuICBwcm9kdWN0c0hlYWRlcjoge1xyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBcIiY+IGRpdjpudGgtY2hpbGQoMilcIjoge1xyXG4gICAgICBhbGlnblNlbGY6IFwiZmxleC1lbmRcIiBcclxuICAgIH0sXHJcbiAgICBcIiYgaDVcIjp7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTowXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZWN0aW9uSGVhZGVyOiB7XHJcbiAgICBcIiYgaDNcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjJyZW1cIixcclxuICAgIH0sXHJcbiAgICBcIiYgaDJcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMHJlbVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBwXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIEljb25DYXJkV3JhcHBlcjoge1xyXG4gICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMjByZW1cIixcclxuICAgICAgaGVpZ2h0OiBcIjIwcmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgRXZlbnRJY29uQ2FyZFdyYXBwZXI6IHtcclxuICAgIG1hcmdpblRvcDogJzFyZW0nLFxyXG4gICAgXCImIC5zd2lwZXItY29udGFpbmVyXCI6e1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMi41cmVtJ1xyXG4gICAgfSxcclxuICAgIFwiJiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZVwiOntcclxuICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLXRoZW1lKSdcclxuICAgIH0sXHJcbiAgICBcIiYgLnN3aXBlci1idXR0b24tcHJldlwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuc3dpcGVyLWJ1dHRvbi1uZXh0XCI6IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRUaXRsZToge1xyXG4gICAgXCImIGgzXCI6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvd25sb2FkTGlua3M6IHtcclxuICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFByb2R1Y3RzR3JpZFdyYXBwZXI6IHtcclxuICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxyXG4gICAgXCImIC5ldmVudF9fY2FyZFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlN0eWxlcyA9IHtcclxuICBJY29uQ2FyZFdyYXBwZXI6IHtcclxuICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXNrdG9wU3R5bGVzID0ge1xyXG4gIGRvd25sb2FkVGl0bGU6IHtcclxuICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gIH0sXHJcbiAgRXZlbnRJY29uQ2FyZFdyYXBwZXI6IHtcclxuICAgIFwiJiAuc3dpcGVyLXBhZ2luYXRpb25cIjp7XHJcbiAgICAgIGRpc3BsYXk6J25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DcmVhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V2ZW50Tm90ZVJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZlZWRiYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVSb3VuZGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhYmVsSW1wb3J0YW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGl2ZVR2Um91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsUm91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dFJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNOb25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5T2ZmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdHljdWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvY2FsZm9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==