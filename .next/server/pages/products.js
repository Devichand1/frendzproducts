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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/products.js");
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

/***/ "./src/components/Advertisement/index.js":
/*!***********************************************!*\
  !*** ./src/components/Advertisement/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Advertisement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  Ad: {
    margin: '0',
    '& a': {
      display: 'block',
      lineHeight: 0
    },
    '& img': {
      width: '100%',
      height: 'auto',
      maxHeight: '380px',
      objectFit: 'cover'
    }
  }
}));
function Advertisement(props) {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.Ad
  }, __jsx("a", {
    href: props.adlink,
    target: "_blank"
  }, __jsx("img", {
    src: props.adImg
  })));
}
;

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

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/Modal/styles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apis_global_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../public/static/images/logo.png */ "./src/public/static/images/logo.png");
/* harmony import */ var _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const StyledDialog = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_7__["commonStyles"]), {}, {
  [theme.breakpoints.up('sm')]: _styles__WEBPACK_IMPORTED_MODULE_7__["desktopStyles"],
  [theme.breakpoints.between('xs', 'sm')]: _styles__WEBPACK_IMPORTED_MODULE_7__["TabStyles"],
  [theme.breakpoints.down('xs')]: _styles__WEBPACK_IMPORTED_MODULE_7__["mobileStyles"]
}));

const Modal = ({
  openStatus
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('openStatus', openStatus);
    setopen(openStatus);
  }, [openStatus]);
  const {
    0: open,
    1: setopen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(openStatus);
  const {
    0: loading,
    1: setloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: universities,
    1: setuniversities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    name: "",
    id: ""
  }]);
  const {
    0: university,
    1: setuniversity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    id: ""
  });

  const openModal = () => {
    setopen(true);
  };

  const closeModal = () => {
    setopen(false);
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const top100Films = [{
    title: 'The Shawshank Redemption',
    year: 1994
  }, {
    title: 'The Godfather',
    year: 1972
  }, {
    title: 'The Godfather: Part II',
    year: 1974
  }, {
    title: 'The Dark Knight',
    year: 2008
  }, {
    title: '12 Angry Men',
    year: 1957
  }, {
    title: "Schindler's List",
    year: 1993
  }, {
    title: 'Pulp Fiction',
    year: 1994
  }, {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003
  }, {
    title: 'The Good, the Bad and the Ugly',
    year: 1966
  }];
  const defaultProps = {
    options: top100Films,
    getOptionLabel: option => option.title
  };
  const flatProps = {
    options: top100Films.map(option => option.title)
  };

  const handleUniSearch = e => {
    let value = e.target.value;
    if (!value) return;
    setloading(true);
    Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_9__["searchUniversities"])(value).then(response => {
      setloading(false);
      setuniversities(response);
    });
  };

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleFormSubmit = () => {
    // let uni = universities.find(
    //   (item) => item.name == university.name
    // );
    closeModal();
    router.push("/products?m_uni=" + university.name); // console.log(uni)
  };

  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledDialog, {
    open: open,
    onClose: closeModal,
    "aria-labelledby": "form-dialog-title",
    className: classes.modal
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.card
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    className: classes.cardBody
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: closeModal,
    className: classes.closeIcon
  }), __jsx("img", {
    src: _public_static_images_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    className: classes.image
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    className: classes.title
  }, "Fill Important Details"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], null, "To make Your Search Easy Kindly Please Select Your College Name or Location"), __jsx("form", {
    className: classes.container
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.Autocomplete,
    required: true,
    options: universities,
    getOptionLabel: option => {
      return option.name;
    },
    getOptionSelected: (option, value) => option.name === value.name,
    loading: loading // value={university}
    ,
    onInputChange: e => e && handleUniSearch(e) // onChange={(e) => updateformData(e, "university")}
    ,
    onSelect: e => e.target.value && setuniversity({
      name: e.target.value
    }),
    renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, params, {
      label: "Type Your College Name",
      margin: "normal"
    }))
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    className: classes.Button,
    onClick: handleFormSubmit
  }, "Done"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/Modal/styles.js":
/*!****************************************!*\
  !*** ./src/components/Modal/styles.js ***!
  \****************************************/
/*! exports provided: commonStyles, mobileStyles, TabStyles, desktopStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyles", function() { return commonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileStyles", function() { return mobileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStyles", function() { return TabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopStyles", function() { return desktopStyles; });
const commonStyles = {
  card: {
    border: 'none',
    boxShadow: 'none',
    margin: '1rem 1.5rem'
  },
  Autocomplete: {
    '& .MuiInputBase-root': {
      width: '250px'
    }
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center'
  },
  image: {
    width: '90px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '1rem'
  },
  title: {
    marginBottom: '1rem',
    textAlign: 'center'
  },
  Button: {
    marginTop: '2rem',
    fontSize: '1rem',
    color: '#fff',
    borderRadius: '4px',
    width: '150px',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#000',
      textDecoration: 'none'
    }
  },
  closeIcon: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: '#444'
  }
};
const mobileStyles = {
  image: {
    width: '50px',
    height: '50px',
    marginBottom: '5px'
  },
  cardBody: {
    padding: '1rem !important'
  }
};
const TabStyles = {};
const desktopStyles = {};

/***/ }),

/***/ "./src/components/ProductCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProductCard/index.js ***!
  \*********************************************/
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
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/ProductCard/styles.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/BorderColor */ "@material-ui/icons/BorderColor");
/* harmony import */ var _material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apis_auth_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../apis/auth-api */ "./src/apis/auth-api.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_18__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




















const API_HOST = process.env.API_HOST;

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__["commonStyles"]), {}, {
  [theme.breakpoints.up("sm")]: _styles__WEBPACK_IMPORTED_MODULE_4__["desktopStyles"],
  [theme.breakpoints.between("xs", "sm")]: _styles__WEBPACK_IMPORTED_MODULE_4__["TabStyles"],
  [theme.breakpoints.down("xs")]: _styles__WEBPACK_IMPORTED_MODULE_4__["mobileStyles"]
}));

function ProductCard({
  data,
  isAuthUser = false
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])();
  const [isSaved, setisSaved] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(data.saved);
  const [productStar, setproductStar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(isSaved ? 1 : 0);
  const [snackbar, setsnackbar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [snackbarMsg, setsnackbarMsg] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [snackbarType, setsnackbarType] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("success");
  const userdetail = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(state => state.auth_user.user);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(state => state.auth_user.accessToken);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(state => state.auth_user.user.id);
  const userFavProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(state => state.auth_user.userFavProducts);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isFavourite();
  }, [userFavProducts]);
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])();
  const favPage = router.pathname.search("favourite") == -1 ? false : true;

  const changeRating = () => {
    if (!accessToken || accessToken == "") {
      window.location.replace("/?signup=open");
    }

    if (!isSaved && productStar == 0) {
      Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_13__["Favourite"])({
        type_id: data.id,
        type: "product",
        user_id: user,
        action: "add"
      }).then(response => {
        if (response.error) {
          setsnackbar(true);
          setsnackbarMsg("There is some error.Please try again later");
          setsnackbarType("error");
          console.log(response.error);
        } else {
          setsnackbar(true);
          setsnackbarMsg("Added to favourites");
          setsnackbarType("success");
          console.log(userdetail, accessToken, response);
          dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__["authenticated"])(userdetail, accessToken, response.body.favEvents, response.body.favProducts));
        }
      });
      setproductStar(1);
      setisSaved(!isSaved);
    } else {
      Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_13__["Favourite"])({
        type_id: data.id,
        type: "product",
        user_id: user,
        action: "remove"
      }).then(response => {
        console.log(response);

        if (response.error) {
          setsnackbar(true);
          setsnackbarMsg("There is some error.Please try again later");
          setsnackbarType("error");
          console.log(response.error);
        } else {
          setsnackbar(true);
          setsnackbarMsg("Removed from favourites");
          setsnackbarType("success");
          dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__["authenticated"])(userdetail, accessToken, response.body.favEvents, response.body.favProducts));

          if (favPage) {
            document.getElementById("card_" + data.id).parentElement.remove();
          }
        }
      });
      setproductStar(0);
      setisSaved(!isSaved);
    }
  };

  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    router.push("/post/edit/" + data.id);
  };

  const handleDelete = () => {
    Object(_apis_auth_api__WEBPACK_IMPORTED_MODULE_13__["DeleteProduct"])(data, data.id).then(response => {
      if (response.error) {
        setsnackbar(true);
        setsnackbarMsg("There is some error.Please try again later");
        setsnackbarType("error");
      } else {
        setsnackbar(true);
        setsnackbarMsg("Deleted");
        setsnackbarType("success");
        location.reload();
      }
    });
  };

  const isFavourite = () => {
    if (userFavProducts && userFavProducts.includes(data.id)) {
      console.log(userFavProducts, userFavProducts.includes(data.id));
      setisSaved(true);
      setproductStar(1);
    }
  };

  const handlesnackbar = () => {
    setsnackbar(!snackbar);
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    id: 'card_' + data.id,
    className: isSaved ? `${classes.card} ${classes.Orangecard} ` : `${classes.card}`
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    className: classes.cardInner
  }, __jsx("div", {
    className: classes.cardHead
  }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    open: snackbar,
    autoHideDuration: 6000,
    onClose: handlesnackbar
  }, __jsx(Alert, {
    onClose: handlesnackbar,
    severity: snackbarType
  }, snackbarMsg)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title
  }, data.title.length >= 25 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: `/products/item/${data.id}`
  }, data.title.substring(0, 25) + '...', ' '), data.title.length < 25 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: `/products/item/${data.id}`
  }, data.title)), isAuthUser && __jsx("div", null, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: handleEdit
  }, "Edit"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: handleDelete
  }, "Delete"))), !isAuthUser && isSaved ? __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_17___default.a, {
    style: {
      color: 'var(--theme)'
    },
    onClick: changeRating,
    id: data.id
  }) : __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_18___default.a, {
    style: {
      color: 'var(--theme)'
    },
    onClick: changeRating,
    id: data.id
  })), __jsx("div", {
    className: classes.cardBody
  }, data.images.length > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: `/products/item/${data.id}`
  }, __jsx("img", {
    src: `${API_HOST}/generate-thumb/145/300/${data.images[0].absolute_path}`,
    alt: "",
    className: classes.image
  }))), __jsx("div", {
    className: classes.cardFooter
  }, __jsx("div", {
    className: classes.left
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.excerpt
  }, data.description.substring(0, 35) + '...', ' '), data.university.name.length >= 25 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.college
  }, data.university.name.substring(0, 25) + '...', ' '), data.university.name.length < 25 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.college
  }, data.university.name)), __jsx("div", {
    className: classes.right
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: isSaved ? `${classes.price} ${classes.Orangeprice} ` : `${classes.price}`
  }, "\u20B9", data.price), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.date
  }, moment__WEBPACK_IMPORTED_MODULE_5___default()(data.created_at).format('MMMM D '))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./src/components/ProductCard/styles.js":
/*!**********************************************!*\
  !*** ./src/components/ProductCard/styles.js ***!
  \**********************************************/
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
  card: {
    border: '#D6D6D6 solid 4px',
    boxShadow: 'none',
    width: 'auto',
    maxWidth: '310px'
  },
  Orangecard: {
    border: 'solid 4px var(--theme)'
  },
  cardInner: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0.7rem 1rem !important'
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  title: {
    flex: '0 0 80%',
    textAlign: 'left',
    fontSize: '1.35rem',
    fontWeight: '500'
  },
  image: {
    width: 'auto',
    height: '140px',
    objectFit: 'contain',
    maxWidth: '100%'
  },
  cardBody: {
    textAlign: 'center'
  },
  cardFooter: {
    display: 'flex'
  },
  left: {
    flex: '0 0 70%'
  },
  right: {
    flex: '0 0 30%',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: '600',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  Orangeprice: {
    color: 'var(--theme)'
  },
  date: {
    fontSize: '0.8rem'
  },
  college: {
    fontSize: '0.8rem',
    color: '#4A4A4A',
    marginTop: '0.2rem'
  },
  excerpt: {
    fontSize: '1rem',
    color: '#4A4A4A'
  }
};
const mobileStyles = {
  card: {
    margin: 'auto'
  },
  title: {
    fontSize: '1rem'
  },
  excerpt: {
    fontSize: '14px'
  },
  cardFooter: {
    marginTop: '1rem'
  },
  price: {
    fontSize: '1.2rem'
  }
};
const TabStyles = {};
const desktopStyles = {};

/***/ }),

/***/ "./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ "@material-ui/core/Accordion");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "@material-ui/core/AccordionSummary");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "@material-ui/core/AccordionDetails");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apis_global_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/components/Sidebar/styles.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Tune */ "@material-ui/icons/Tune");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _redux_actions_PageVisited__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/actions/PageVisited */ "./src/redux/actions/PageVisited.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_14__["commonStyles"]), {}, {
  [theme.breakpoints.up("sm")]: _styles__WEBPACK_IMPORTED_MODULE_14__["desktopStyles"],
  [theme.breakpoints.between("xs", "sm")]: _styles__WEBPACK_IMPORTED_MODULE_14__["TabStyles"],
  [theme.breakpoints.down("xs")]: _styles__WEBPACK_IMPORTED_MODULE_14__["mobileStyles"]
}));

function Sidebar({
  type = "",
  showFilterBtn = false,
  m_uni,
  query
}) {
  const {
    0: categories,
    1: setcategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedCategories,
    1: setselectedCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: universities,
    1: setuniversities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selecteduniversities,
    1: setselecteduniversities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: Cities,
    1: setCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedCities,
    1: setselectedCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: producttype,
    1: setproducttype
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: uniMsg,
    1: setUniMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useDispatch"])();
  const pageVisited = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useSelector"])(state => state.pageVisited);

  const handleTypeChange = x => {
    setproducttype(producttype.includes(x) ? producttype.filter(c => c !== x) : [...producttype, x]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (type == "events") {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["getEventCategories"])().then(response => {
        setcategories(response.categories.data);
      });
    } else {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["getCategories"])().then(response => {
        setcategories(response.categories.data);
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("query", query);
    setshowsidebar(!showFilterBtn); // console.log('pageVisited',pageVisited.includes(PAGE_PRODUCTS))

    let {
      m_city,
      m_cat,
      type
    } = query;

    if (m_uni) {
      if (!selecteduniversities.length && m_uni) {
        const now = new Date();
        Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchUniversities"])(m_uni).then(response => {
          setselecteduniversities(response);
          setExpanded("panel3");
          let data = {
            response: response,
            expiry: now.getTime()
          };
          localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_17__["SELECTED_FILTER_UNIVERSITY"], JSON.stringify(data));
        });
      }
    }

    if (!selectedCities.length && m_city) {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchCities"])(m_city).then(response => {
        setselectedCities(response.data);
        setExpanded("panel2");
      });
    }

    if (!selectedCategories.length && m_cat) {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchCategories"])(m_cat).then(response => {
        setselectedCategories(response.data);
        setExpanded("panel1");
      });
    }

    if (!producttype.length && type) {
      handleTypeChange(type);
    }
  }, [m_uni]);

  const handleCatSearch = e => {
    console.log(type);
    let value = e ? e.target.value : "";

    if (!value) {
      setcategories([]);
      return;
    }

    if (type == "events") {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchEventCategories"])(value).then(response => {
        setcategories(response.data);
      });
    } else {
      Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchCategories"])(value).then(response => {
        setcategories(response.data);
      });
    }
  };

  const handleUniSearch = e => {
    let value = e ? e.target.value : "";

    if (!value) {
      setuniversities([]);
      return;
    }

    Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchUniversities"])(value).then(response => {
      setuniversities(response);
    });
  };

  const handleCitySearch = e => {
    let value = e ? e.target.value : "";

    if (!value) {
      setCities([]);
      return;
    }

    Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_13__["searchCities"])(value).then(response => {
      console.log("college", response);
      setCities(response.data);
    });
  };

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleChange = (event, type, val) => {
    console.log(event.target.checked);
    console.log(type);
    console.log(val);

    if (type == "category") {
      if (selectedCategories.some(item => item.id === val.id)) {
        setselectedCategories(selectedCategories.filter(c => c.id !== val.id));
      } else {
        setselectedCategories([...selectedCategories, val]);
      }

      console.log(selectedCategories);
    }

    if (type == "cities") {
      if (selectedCities.some(item => item.id === val.id)) {
        setselectedCities(selectedCities.filter(c => c.id !== val.id));
      } else {
        setselectedCities([...selectedCities, val]);
      }
    }

    if (type == "university") {
      if (selecteduniversities.some(item => item.id === val.id)) {
        setselecteduniversities(selecteduniversities.filter(c => c.id !== val.id));
      } else {
        setselecteduniversities([...selecteduniversities, val]);
      }
    } // setState({ ...state, [event.target.name]: event.target.checked });

  };

  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("panel1");

  const handlePanelChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {
    mobile,
    sports,
    cars
  } = state;
  const classes = useStyles();

  const filterSearch = () => {
    let cities = selectedCities.map(v => v.name).join(",");
    let categories = selectedCategories.map(v => v.name).join(",");
    let universities = selecteduniversities.map(v => v.name).join(",");
    console.log(cities, categories, universities);

    if (!universities.length) {
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_17__["SELECTED_FILTER_RESET"], true);
    }

    let p_type = producttype.length == 1 ? producttype[0] : "";
    let query = "?m_city=" + cities + "&m_cat=" + categories + "&m_uni=" + universities + "&type=" + p_type;
    let reqquery = "?m_uni=" + universities;

    if (type == "events") {
      window.location.replace("/events" + query); // router.push("/events" + query);
    } else if (type == "requests") {
      window.location.replace("/buy-request" + reqquery); // router.push("/events" + query);
    } else {
      window.location.replace("/products" + query); // router.push("/products" + query);
    }
  };

  const toggle = () => {
    setshowsidebar(!showsidebar);
  };

  const [showsidebar, setshowsidebar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // const [showsidebar, setshowsidebar] = React.useState(!showFilterBtn);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showFilterBtn && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.fliterBtn,
    onClick: toggle
  }, __jsx(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_16___default.a, null), "Filter"), showsidebar && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.heading
  }, "FILTER"), type != "events" && type != "requests" && __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expanded: expanded === "panel0",
    onChange: handlePanelChange("panel0")
  }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    "aria-controls": "panel0a-content",
    id: "panel0a-header"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title
  }, "Type")), __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
    value: "buy",
    checked: producttype.includes("buy"),
    inputProps: {
      "aria-label": "Checkbox A"
    },
    onChange: () => handleTypeChange("buy")
  }), " ", "Buy", __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
    value: "rental",
    checked: producttype.includes("rental"),
    inputProps: {
      "aria-label": "Checkbox A"
    },
    onChange: () => handleTypeChange("rental")
  }), "Rent"), type != "requests" && __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expanded: expanded === "panel1",
    onChange: handlePanelChange("panel1")
  }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title
  }, "Category")), __jsx("input", {
    className: classes.searchField,
    type: "text",
    placeholder: "search Categoty",
    onKeyUp: handleCatSearch
  }), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default.a, null, categories && categories.map(cat => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    key: cat.id,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
      onChange: e => handleChange(e, "category", cat),
      color: "primary"
    }),
    label: cat.name,
    checked: selectedCategories.filter(item => item.id == cat.id).length > 0
  })))), categories && categories.length < 1 && selectedCategories.length > 0 && __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default.a, null, selectedCategories && selectedCategories.map(cat => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    key: cat.id,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
      onChange: e => handleChange(e, "category", cat),
      color: "primary"
    }),
    checked: true,
    label: cat.name
  })))))), type != "requests" && __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expanded: expanded === "panel2",
    onChange: handlePanelChange("panel2")
  }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title
  }, "City")), __jsx("input", {
    className: classes.searchField,
    type: "text",
    placeholder: "search City",
    onKeyUp: handleCitySearch
  }), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default.a, null, Cities && Cities.map(cat => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
      onChange: e => handleChange(e, "cities", cat),
      color: "primary",
      name: "mobile"
    }),
    label: cat.name,
    checked: selectedCities.filter(item => item.id == cat.id).length > 0
  })))), Cities.length < 1 && selectedCities.length > 0 && __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default.a, null, selectedCities && selectedCities.map(cat => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
      onChange: e => handleChange(e, "cities", cat),
      color: "primary"
    }),
    checked: true,
    label: cat.name
  })))))), __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expanded: expanded === "panel3",
    onChange: handlePanelChange("panel3")
  }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title
  }, "College")), __jsx("input", {
    className: classes.searchField,
    type: "text",
    placeholder: "search College",
    onKeyUp: handleUniSearch
  }), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default.a, null, universities && universities.map(cat => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
      onChange: e => handleChange(e, "university", cat),
      color: "primary",
      name: "mobile"
    }),
    label: cat.name
  })))), universities.length < 1 && selecteduniversities.length > 0 && __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default.a, null, selecteduniversities && selecteduniversities.map(cat => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
      onChange: e => handleChange(e, "university", cat),
      color: "primary"
    }),
    checked: true,
    label: cat.name
  }))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.filterBtn,
    onClick: filterSearch
  }, "Filter")));
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/Sidebar/styles.js":
/*!******************************************!*\
  !*** ./src/components/Sidebar/styles.js ***!
  \******************************************/
/*! exports provided: commonStyles, mobileStyles, TabStyles, desktopStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonStyles", function() { return commonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileStyles", function() { return mobileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStyles", function() { return TabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopStyles", function() { return desktopStyles; });
const commonStyles = {
  root: {
    marginTop: '3rem',
    marginBottom: 0,
    borderBottom: 'solid 1px #BDBDBD',
    '& .MuiAccordion-root': {
      borderTop: 'solid 1px #BDBDBD',
      boxShadow: 'none'
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      marginBottom: '0'
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: '0'
    },
    '& .MuiAccordionDetails-root': {
      paddingLeft: '0',
      maxHeight: '300px',
      overflow: 'auto'
    },
    '& .MuiAccordionSummary-root': {
      paddingLeft: '0'
    },
    '& .MuiFormControlLabel-label': {
      fontSize: '1.1rem'
    },
    '& .MuiCheckbox-colorPrimary.Mui-checked + .MuiFormControlLabel-label': {
      color: 'var(--theme)'
    }
  },
  title: {
    fontSize: '20px'
  },
  heading: {
    fontSize: '20px',
    marginBottom: '1rem'
  },
  searchField: {
    width: '100%',
    margin: '1rem 0',
    border: 'solid 2px var(--theme)',
    padding: '0.7rem 1rem'
  },
  filterBtn: {
    marginTop: '1rem',
    background: 'var(--theme)',
    color: '#fff',
    fontSize: '1rem',
    '&:hover': {
      background: 'var(--theme)'
    }
  }
};
const mobileStyles = {};
const TabStyles = {};
const desktopStyles = {
  root: {
    marginRight: '2rem'
  }
};

/***/ }),

/***/ "./src/components/Testimonial/index.js":
/*!*********************************************!*\
  !*** ./src/components/Testimonial/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/Testimonial/styles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_5__["commonStyles"]), {}, {
  [theme.breakpoints.up('sm')]: _styles__WEBPACK_IMPORTED_MODULE_5__["desktopStyles"],
  [theme.breakpoints.between('xs', 'sm')]: _styles__WEBPACK_IMPORTED_MODULE_5__["TabStyles"],
  [theme.breakpoints.down('xs')]: _styles__WEBPACK_IMPORTED_MODULE_5__["mobileStyles"]
}));

const Testimonial = ({
  data
}) => {
  const classes = useStyles();
  const params = {
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '1',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 600,
      modifier: 1
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      600: {
        slidesPerView: '2'
      }
    }
  };
  return __jsx("div", {
    className: classes.carousel
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, params, data && data.length && data.map(item => __jsx("div", {
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
    className: classes.slideContent
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.name
  }, item.name), __jsx(react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default.a, {
    rating: item.rating,
    starRatedColor: "#FFC107",
    starHoverColor: "#FFC107",
    starDimension: "26px",
    numberOfStars: 5,
    name: data.id
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: classes.review
  }, item.text))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./src/components/Testimonial/styles.js":
/*!**********************************************!*\
  !*** ./src/components/Testimonial/styles.js ***!
  \**********************************************/
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
  carousel: {
    marginTop: '5rem',
    '& .swiper-button-prev': {
      color: '#000',
      left: '4%',
      outline: 'none'
    },
    '& .swiper-button-next': {
      color: '#000',
      right: '4%',
      outline: 'none'
    },
    '& .swiper-button-disabled': {
      opacity: '0'
    },
    '& .swiper-container': {
      paddingBottom: '2rem'
    },
    '& .swiper-slide-shadow-left': {
      backgroundImage: 'linear-gradient(to left, var(--theme-light), rgba(0, 0, 0, 0))'
    },
    '& .swiper-slide-shadow-right': {
      backgroundImage: 'linear-gradient(to left, var(--theme-light), rgba(0, 0, 0, 0))'
    }
  },
  slideContent: {
    marginTop: '1rem'
  },
  card: {
    width: '100%',
    minHeight: '500px',
    boxShadow: '0 14px 18px rgba(0,0,0,0.05)'
  },
  cardBody: {
    textAlign: 'center',
    padding: '2rem 3rem'
  },
  name: {
    marginBottom: '5px',
    textTransform: 'uppercase'
  },
  review: {
    marginTop: '1.5rem',
    fontSize: '1.2rem'
  },
  image: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover'
  }
};
const mobileStyles = {
  carousel: {
    marginTop: '1rem',
    '& .swiper-button-prev': {
      transform: 'scale(0.6)'
    },
    '& .swiper-button-next': {
      transform: 'scale(0.6)'
    },
    '& .swiper-container': {
      paddingBottom: 0
    }
  },
  review: {
    fontSize: '14px',
    marginTop: '1rem'
  },
  card: {
    minHeight: 'auto'
  },
  cardBody: {
    padding: '2rem'
  }
};
const TabStyles = {};
const desktopStyles = {};

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

/***/ "./src/containers/products.js":
/*!************************************!*\
  !*** ./src/containers/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout */ "./src/Layout/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ "./src/components/ProductCard/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Advertisement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Advertisement */ "./src/components/Advertisement/index.js");
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Testimonial */ "./src/components/Testimonial/index.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Tune */ "@material-ui/icons/Tune");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-sticky-box */ "react-sticky-box");
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles */ "./src/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _apis_global_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import CardHorizontal from "../components/CardHorizontal";









const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_12__["commonStyles"]), {}, {
  [theme.breakpoints.up("md")]: _styles__WEBPACK_IMPORTED_MODULE_12__["desktopStyles"],
  [theme.breakpoints.between("sm", "md")]: _styles__WEBPACK_IMPORTED_MODULE_12__["TabStyles"],
  [theme.breakpoints.down("sm")]: _styles__WEBPACK_IMPORTED_MODULE_12__["mobileStyles"]
}));




function Products({
  data,
  url,
  m_uni,
  query
}) {
  const {
    0: products,
    1: setproducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loadMore,
    1: setloadMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: lastPage,
    1: setlastPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: page,
    1: setpage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: list_reviews,
    1: setlist_reviews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: adslist,
    1: setadslist
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(state => state.auth_user.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const API_URL = "http://fanto.in/api";

    async function fetchAds() {
      let adsres = await fetch(API_URL + "/adverts");
      const ads = await adsres.json();
      setadslist(ads);
    }

    fetchAds();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (url) fetchTypeProducts(url, 0, []);
    Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_15__["getAllFeedback"])().then(data => {
      setlist_reviews(data);
    }); // setproducts(data);
  }, [data, url, m_uni, query]);

  const handleButtonClick = () => {
    if (!loadMore) {
      setloadMore(true);
      fetchTypeProducts(url, page, products); // timer.current = setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    }
  };

  const fetchTypeProducts = async (url, page, products) => {
    page = !page ? 1 : page + 1;
    setpage(page);
    url = `${url}&page=${page}`;
    await Object(_apis_global_api__WEBPACK_IMPORTED_MODULE_15__["getProducts"])(url).then(data => {
      if (products && products.data) {
        data.data = products.data.concat(data.data);
      }

      if (data && data.current_page == data.last_page) {
        setlastPage(true);
      } // console.log(page, url, data);


      setproducts(data);
      setloadMore(false);
    });
  }; // console.log(products)


  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  const classes = useStyles();
  const matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default()('(max-width:600px)');

  const MobileSidebar = () => {
    const toggle = () => {
      setshowsidebar(!showsidebar);
    };

    const [showsidebar, setshowsidebar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    return __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: classes.fliterBtn,
      onClick: toggle
    }, __jsx(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_8___default.a, null), "Filter"), showsidebar && __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  };

  const handleAddProduct = () => {
    if (user.id) {
      router.push("/post");
    } else {
      window.location.replace("/?signup=open");
    }
  };

  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, adslist && adslist.productHeader && __jsx(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    adImg: adslist.productHeader.link,
    adlink: adslist.productHeader.openlink
  }), __jsx("section", {
    className: classes.section
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.productsHeader
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5"
  }, "Buy/Rent Used Products in your College"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleAddProduct
  }, "Add Product"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    lg: 3,
    md: 3,
    sm: 12,
    xs: 12
  }, matches ? __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showFilterBtn: "true",
    m_uni: m_uni,
    query: query
  }) : __jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_11___default.a, {
    offsetTop: 100,
    offsetBottom: 20
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    m_uni: m_uni,
    query: query
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.ProductsGridWrapper
  }, products.data && products.data.length > 0 && products.data.slice(0, 8).map((data, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: data.id
  }, __jsx(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data
  }), index == 2 && adslist && adslist.product1 && __jsx(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    adImg: adslist.product1.link,
    adlink: adslist.product1.openlink
  })))), products.data && products.data.length <= 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4"
  }, "Oops!! we we could not find related to your search. Please search something else"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    style: {
      backgroundImage: 'url(/static/images/boxbg.png)'
    },
    className: classes.productContentSection
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4"
  }, "Want to see Your Stuffs Here ?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], null, "Upload the products you want to sell, and get a buyer within your college."), __jsx("a", {
    onClick: handleAddProduct,
    className: "selProd"
  }, "Selling Product")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.ProductsGridWrapper
  }, products.data && products.data.length > 0 && products.data.slice(8, products.data.length).map((data, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: data.id
  }, __jsx(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data
  }), index == 2 && adslist && adslist.product2 && __jsx(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    adImg: adslist.product2.link,
    adlink: adslist.product2.openlink
  })))), products.data && products.data.length > 0 && !lastPage && __jsx("div", {
    className: classes.loadMorewrapper
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.loadMore,
    disabled: loadMore,
    onClick: handleButtonClick
  }, "Load More"), loadMore && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
    size: 24,
    className: classes.buttonProgress
  })))))), __jsx("section", {
    className: classes.section,
    style: {
      background: 'var(--theme-light)'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.sectionHeader
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h2"
  }, "REVIEW")), list_reviews && list_reviews.length > 0 && __jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: list_reviews
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/pages/products.js":
/*!*******************************!*\
  !*** ./src/pages/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../containers/products */ "./src/containers/products.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../constants */ "./src/constants.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function ProductsPage({
  query
}) {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.auth_user.user);
  const {
    0: open,
    1: setopen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: url,
    1: seturl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: m_uni,
    1: setm_uni
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setQuery(query); // setModalStatus(query)
  }, [query]); // const setModalStatus = (query) => {
  //   const { m_uni } = query;
  //   console.log('testttt', !m_uni)
  //   console.log('testttt', !user, user)
  // }

  const setQuery = query => {
    let {
      s,
      m_city,
      m_cat,
      m_uni,
      type
    } = query;
    let url = s ? `?s=${s}&paginate=12` : "?paginate=12";
    let data = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["SELECTED_FILTER_UNIVERSITY"]);
    let selection_reset = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["SELECTED_FILTER_RESET"]);
    data = data && JSON.parse(data) ? JSON.parse(data).response : "";

    if (!m_uni && data && data.length) {
      m_uni = !selection_reset ? data[0].name : m_uni;
    } else if (!m_uni && !user.id) {
      setopen(true);
    } else if (!m_uni && user.university && user.university.name) {
      m_uni = !selection_reset ? user.university.name : m_uni;
    }

    setm_uni(m_uni);

    if (m_city) {
      url = url + "&m_city=" + m_city;
    }

    if (m_cat) {
      url = url + "&m_cat=" + m_cat;
    }

    if (m_uni) {
      url = url + "&m_uni=" + m_uni;
    } //  else if (user && user.university) {
    //   url = url + '&m_uni=' + user.university.name
    // }


    if (type) {
      url = url + "&type=" + type;
    }

    seturl(url);
  };

  return __jsx("div", null, open && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    openStatus: open
  }), __jsx(_containers_products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: url,
    m_uni: m_uni,
    query: query
  }));
}

ProductsPage.getInitialProps = ({
  query
}) => {
  return {
    query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsPage);

/***/ }),

/***/ "./src/public/static/images/bike.png":
/*!*******************************************!*\
  !*** ./src/public/static/images/bike.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/book.png":
/*!*******************************************!*\
  !*** ./src/public/static/images/book.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAA/CAYAAACVb1RbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0VCNDBGMjE5RjY3MTFFQTlEMEI4OTFFRDg4NDk0OTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0VCNDBGMjI5RjY3MTFFQTlEMEI4OTFFRDg4NDk0OTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRUI0MEYxRjlGNjcxMUVBOUQwQjg5MUVEODg0OTQ5MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRUI0MEYyMDlGNjcxMUVBOUQwQjg5MUVEODg0OTQ5MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq7YYZUAAAaTSURBVHja7FxbbBRl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"

/***/ }),

/***/ "./src/public/static/images/circleCenter.svg":
/*!***************************************************!*\
  !*** ./src/public/static/images/circleCenter.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MzciIGhlaWdodD0iNTM3IiB2aWV3Qm94PSIwIDAgNTM3IDUzNyI+DQogIDxnIGlkPSJFbGxpcHNlXzVfY29weSIgZGF0YS1uYW1lPSJFbGxpcHNlIDUgY29weSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS10aGVtZSkiIHN0cm9rZS13aWR0aD0iMTAwIiBvcGFjaXR5PSIwLjA1MSI+DQogICAgPGNpcmNsZSBjeD0iMjY4LjUiIGN5PSIyNjguNSIgcj0iMjY4LjUiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxjaXJjbGUgY3g9IjI2OC41IiBjeT0iMjY4LjUiIHI9IjIxOC41IiBmaWxsPSJub25lIi8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/public/static/images/culture.png":
/*!**********************************************!*\
  !*** ./src/public/static/images/culture.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/enterprenurship.png":
/*!******************************************************!*\
  !*** ./src/public/static/images/enterprenurship.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/event.png":
/*!********************************************!*\
  !*** ./src/public/static/images/event.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/event-bade62561b6abde817e0337359dba840.png";

/***/ }),

/***/ "./src/public/static/images/gym.png":
/*!******************************************!*\
  !*** ./src/public/static/images/gym.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/library.png":
/*!**********************************************!*\
  !*** ./src/public/static/images/library.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/library-8bd056fe35eaf681e03fc7ed5b0e0185.png";

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

/***/ "./src/public/static/images/product.png":
/*!**********************************************!*\
  !*** ./src/public/static/images/product.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/product-2b47547eebb325ae46c8b0cb4d6ff364.png";

/***/ }),

/***/ "./src/public/static/images/profile.png":
/*!**********************************************!*\
  !*** ./src/public/static/images/profile.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-cb27df30882bc3d00db02e997c42f317.png";

/***/ }),

/***/ "./src/public/static/images/shop.png":
/*!*******************************************!*\
  !*** ./src/public/static/images/shop.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABPCAYAAACwCHgIAAAABHNCSVQICAgIfAhkiAAAEBZJREFUeF7lXHt4HNV1/53ZlazYss3DxrF2VrKMvLOSY4N3VjaGpHHihoQQQkN5hIRHvtRtHZp+JSXQNoVASNIPiEvSNA8SkhZKyyNN+oCWNH2A+YoxtnZWgLG0sxbGaGdFMAHXxsS2pJ3T78xDHq1X+9DKL3T+say599xzf3Pvuef+zhkRjoN0L2n5TVtRLgJIB9sdIHoXgEMM7CCGobD9aM+Oof8+1qbRsRxQj0fPB/h2MFZVMe5WEN1iZHL/WUXbKWlyzMDQNfVbAP6oyOptAHIA7Qf4FAAagLZxbYjvNjL5G6ZkthWUHBMwdC36CMCXe7a8Tkz3wi78tHm0sX/jrl0HfRsvA0Ivx9X3gXk9g64Ys53xkJG1PnW0ATmqYKzq6JgzEj50GzF/wZsIA5DVIEu/BcByBv9r2szfXDxRPRb9LRA/BKDJeUa4w8hYf3Y0AakLjBUd754PNM4P02hLgZR2KDyfmNoBtAI4w/v3tIoTGGk8xdi5c29xu4SmLicgBaBBnjEpyXRm0Kiob5INKoKxbFnrqQ2H7DUgdACYR4wogHYQZJIqgJmTGPsNAGEAc6WvXVCW9g4M9pXSk9AiHyTQ/zhgAD1p01o5ifGq6lIWDFnmo6GD271JV6UQwCiAPQAPguiXAIZgYycR7Sa7MEghGmzgQ68eQNN6Au4SpYptfyh4lCZjkWtYUeYz2ZvS/flnk5r6AANXOQaw3WlkhzLVGlNLu7JgnBVTI2GCVaRQlvM+gAaZ7Bwx7Qawk8D5AiFv2zQYnm3vMYyhX5czJKlFL2bwv7hvnD6bNnN/Kz/rS9RVUPBsoG8WwP8BcFYEgb6VMnO+D6plrhXbVtomiq6pO73jbpu8nZFGJbdt26AAYlfUXqZBUms5j6E87TahLxtm7qvyUzKu3saMW8vrpk0gewvZSo9Cypat5isv12OL37cSGEhq6jMMrAbwgmFaZ03FoKJjpdbWXkBBgAYxfpjKWr8vPyc09XECLgCwn4nuJWYZU4K0WROOzdgOwmYiTmGUt6YGhp6fzMuqCIauqf8I4FIABwqHwi3P7dolS7Zu6ejomDE3dDAP4HQGfp42rY+K+9A19XVAnDNtMszce72BlGRn61rYvJKJV4PR7Z1WE9mRI0YPE7aywk+J36nG4IpgJOLRu/04QQkp7+npGxSHOiWia+oLAJb5q25lPBIrMJme8usN0/qr7jNboj0vDeWCA65W1XcdbOazFVCSwecSk4Bz5sQrh24wsrm7KxldEYxkLPIFJnIUkaKcn+of/K9KSqt9ntSijzL4IgC/NExroR5XPwXGP3j9nySgyduiO9FsLyvnlLu7WpfyaEFnUmRLrwRYwHGObgI/kjLzn6xkV0UwdC1yGUA/EUVBr19JcTXPdS3yXYCuAyAh+b8B+I0Jl7/NHzN25P+9Gr3SZtxLZL4mlc0/UKlvZTCCRx3jViNr3V5J6UTPly9fMCt8sDFBClYx8zkEvF8CuTL65FiXwK7mcDwRU/+aCJ93+obsNqNvaLCS3RXBEAW6pg47ITHhXiNj/V4lpf5zffHiuTRjdCXbvApgWb5yKpw+YX9CHzOeJcZmbsDGGXuRH54FcbKnAvhfw7Rk5VQluqYOiB+pJWotC4auRT/ncA/EVwJoBPC4YVoXTmSN3tm2kHkkCaZVBJLJ6/6+LdFnGKAXAftZEG0qEHqe67d2FLfTNVVC8Q/KaTYyY2T+Cy+89nYlNM6OL1oU4lE/9pCg7efO0czUa2Rz35uo/4RgBH1FoHPJWKOrq6uxqbDv++SGzAJaKdkPoJcg0SU9PcJsPJ+15K2XlWAQxuC1aTP/RKU+CU29ioAJfARfbph5CReOkJJgrFmD8Fuvqr8q8VZfPxCao/b19cm2GZPlZy44oyHc8FqR9j1gTjFoEym0GXYhbWSHRGdN4lGE3gl2OFItp2Scv3AbFsRzeH32zl5ozdu40blDjZOSYIxjpZhuIAmMiL/kXJOUQntv/6uvFOvRNVVunXEAexXCxcpoU++WgYF9Nc28ROPztHmzD6JJQJQV9wvDtD5SSaeuRVIOvwr8SrGVVXaYDsAuiONf5/X9tmFaxawbjgBD74ieiRCL8xHZZ5jWXD0euRZM98kvWOHVpSK6hBa9h8ASUg8fCM2ZXbx6Kk2g7JvW1E0EnCtAHwjNOaOc7tVL1dOGRyGrNMzgR9Nm/mJPt0S3ewDMcdcKdRgDuZeC4x4JRkzdDMI5TiPvbE9o6qcJ+HsHDLI/ns4MPVZsvMdM/bPTJnALrQcEv28ipt5KhNvc8csTPMnO1g+xbTskMhH+MJWxvuPr0ZdELoRCEs/IUb3FyFjuPD0ZB0ZSi1zKIN+5PGGY1lrp1r2kZa2tKO6+JbrRyOT+sniS3Uta223FFs8dgstZfnoqgBAdyZj6ESY87s6Bbk6Zub+YSHdCU+8g4Ca3rf3elDn0TKAtB04ngXacMx0DY4UWbVHAQprM9jpLkCKORyg3cT4Lvd/L0SbLrVhGvKu+4j0o5kHqwUboAqESRWScYmcd1P1uj0WT34lv8x2n31f+7+t6ywbFe83ckAueJ0G/UI/VJ11f4s8Ymfz948BwqDYi55cOooQ3ZfOfdJOrZDCBwQ5/6+RniPnaVDb/d+NXhhZZD9D35ZfVBjeVxj1Rn6+IRdYqRF76kj9nmPl7xoGR0NQbfYLWJj63N5PffKJOpl67uuMt59qsbHJfPG5Km9Y3inyG+hUwvuw0qDM/sTIeOd0GXQlGq83YMWc4/EAwc1brZITMOTQTVymEJSAMNoTw4Obt1pu16vHbJ+KtOrEt+RjxmrcbGcvhXMd8QpDRItjxlDnkM041jdkdV99vM/7Jpe7GZJCBi9KmJcxWTaLH1WVgh+vwTwDp/6ZCuKQnYz1VkzKvcVJr0RiKk25gom+mM7k/LvIZ6r1euMrKqN1WTLVVM6gea5kHUiRXEjzO/K5voNlurZRCCI6j6y0zsV+RI77Utb8QIl6wNZOXhFRNIlSiHXb0ynIYoyUCKyPyEDEJNfZ2iLhtMoPo8egXwezsPyb+84PK3A0zC2/dyeDrnXGrZJz8mRWdcBvQvOBLtH/3TQz+mjsRJwDcUBMSwiu4L01ikJlM/HA6kxeK4vA2CfCRu9Fst9fyBg8br/6ACUL+vE2My2wCK+BmBj0owRuDv14qyTzRZJKx6Ne9C+IIMa+zFd4DhIaJWbbhTAb9IG3m1tcMhrvidgGYT6DHUmbu48XbRHiCDwC8yzDzi11HW5sktMj1BPqmVOEAmBHoLdflMDFdmcrmHq5WazIevZKZBUinf6Cfr99h0KvVF2hHuqYK+SOxhn/tCESgmrrFYZUJfUbGWjqJASA0HxqGJbQtlYy29haaOgYGBmQiVYmXW5EbtMuDjpdfY6SxpVT2vhrlelzdDkYXgK2GaTmVRIFw3H0oJQAp05I8xKRkhRZNKmC5vQYnkOEwLkpvt3xqoGrdiaVqB41CbsnClfhiKUyX9GRzPVUrKmqY1NQeBpJgbDey1nuCYASXzUbDtD4w2UGkn7DgDYca5GiOeINJoqjmbRewQdHj6jbvTeZHZoxo1XCh5eaQ0NSNLjvvuAWpKXFXxppFi5remjEqWat5QYdSDyCBbNnYnqxTn+fTsM0wreX16JK+ekx9DISPCRs2+1A4KkGhA4ZEjAUmOWpmeVxE3fVTuqZKUKMx8EzatM6r1/hAAtw0TCu4ZSalWo+pD4IgR+pYKOGAoXe1tKKgiHdVas2NTGTJCQ9GXP0hGL/rZOtDdrskmRwwEkvaOkkpuGVEU1RqqGuq+IwYwE8bZv59k3p9gU66Fn0aYFlhWcO0pESyLgleP9gOdaV3vNLvgOGdAK5nDlxc6hnthF8ZWuR2gG6ROdqg7l4zl3LA8C5XG+Xn4JW2HjASmrqV4NRR7DRMa+JygSoH0bXIywAtCsYFVXYt2SypqTcxcKc8VAhr5NLngJGMqR9lgpfhpusMM+eQPPWIrqlSWiCOmMMFbt0ykJ80J+r5NCdXIyx9yrSursc2x09K6hTspBqJcWEqa0nFkJQORS4n0CPug+rS95WMSWrRzzL4x1Ox2nRN/RMAd7i6DhfDVbKh3PNkLHI1Ezl0H4OvSJv5n7grQ1N/h4EfOQ8Yl6SzlpP/qEe8sklh0YUtf8MwrXKlB2WH0jVVrunCjxTChabTpiJTl4ipnyByeBdZbetSpvVj92jVVEm1SaH7ETWZ9QCia6pc57/o6XjQMGvPpQTiATH6GynTcnIi9Uow2QTAufB5YERvBtgpPZwofTiZwXVdb8D+14Ts8VmvDYZp3VitLj0W2QAi/4uCN9C8YKFhGJI3qVtWxCOrFSYvwUS3GGbua/7KkP0o+1LWzHIjY0mx+5SI3rkwATt0uN7bofDsG8tV+eqxljhR6C6v3ss1q2AnUgNDvVNilFtiKXXpUiIpcqdhWn/q+oy4+h1m/IHz6xIJ2XoNSMSjHyZmSQ/62TZhwh5WbDxeIKU/bNObowqfFmK7y1Zwgce4+cPaILpgqj/C8W7DTnEMEb6bylifd1dGLHofiK+VDDqU0CKj/5VX6wWguL+8CQA/8mKPqtQLnVBgXtebzftvsKp+1TTy0qlyBWkE0/1GNvcZ72hVf0rAbzs51JHG9skSJtUYIScXgPUOlzCBSB2WAronZeb+phqdk2njEVFC/Z3CwM/SpnWp7zP+A8CHAeRnL7QWlapqmcyA5fpICkCKWZm4jZjmMPE+kpuzgq2p/tyLUz1esT6vOkkYckmoO0Uw/mniXoIYA0bWWnK0DTlR9PsVgX5ptr8yngMgBevPG6Z19oli7NG2Q9dU8UXiy5x5+2A4NZNFxetH25bjrj9xuDzqJcO0Oki+GNypqUL5je2d427lMTJA19RfADhfvpZabFqt5HlVOWJO9b3qMbLluA+TjKk/Y8IlcoqGC02LSKp6YRcEjBn+eXvcrTxGBujx6P1gvsZJeimhdhpf6sjfM8y8G4lOAwl81eBE3hSM0Rm4K21a7h1lGkhCU+/0KwMZOIsSnZFzyCavSse9vU0DHJwp6lr0FucPFXi3danxlD/f4H9dNNlE7kmJXyBR7vA4FKzs9Rmfk3JmkzBaj6nrJE/kdGX6BI3jApk+mc7mHC50OkgiFr2CiJ0SCQauplIs8XQAwvEZwVpy0HVymoyVPPr5g+kCRnG+iPQSmaVpA0Ys2m0Tb3Xny1+lUjnH6QLGio7WLiVkux8tE99N+uFsdAEhe3E1nzy+U8Ba0bmwTbFD8j2+U31AgbzEfrDdPpnvyE5WcLwSSLmXNUtdioBxRAXLyTq5Wu2WMuzhWRDqz6lYklquJ6WSST6rMExLstzTSnRNlYS2lGI/SWNVb8CLhmlJIdq0Ej2mvgjCUmHk5WjtA6iTgafSpiUrZFrJWNUfoU+2iewZ+QtLu5n4CYWlXEF5532BVPSKCTZLOTcxyafl8me0cgJGPfWZ76hVJKfJt0GQ1OJ0l/v+H0NmyAdJRQQYAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/public/static/images/shopping.png":
/*!***********************************************!*\
  !*** ./src/public/static/images/shopping.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAABHNCSVQICAgIfAhkiAAAA+9JREFUeF7tnFuojUEUx3/HLUQohVySEg+E8iC3FA8uUV6kpChPLqXkEoUHIUoU5QXFC3nx4FIo92e3IiG55a6Q3C/9WfucMZ29v2/v78z+9j5mnuacveabNf9vzVoz/1nfNPBv6QbcAvoADd5vre3PX8BrYDjwojA4f9DTgROtbeQJ45kDHC0GyAzguP14F/hodVlML+AncKPOAJMFtAVeAU9N907AEKvPBY6kAWQ8cMUEtwBrgM+AHlZP5QPQBdgNLDPFRwDXIiARkD82ENRC6mmq+LoGmTIREM+pfgc21Rkqa4EO0ak2vbWgPiSG3YR1SHugN9AmYRp9BZ55Mn2BdkXa/QCeeL9pcSjTL1W0cNQyXP0VSlUtZD+wMKVPmQ0cM9kpwJmEdjOdVfM04GTKfrQM13I8F0BOAVNTKroK2G6yG4CNCe02A+tMZok5xTRdXQYm5A3IS++tFPQZBMiKVFYD26wuMASKyiLgntUHAAetru2CIoSKC4gr7wJ02KZvTQDyGNBg/DIMuJkAyEjguskMBW4nADLK2Ye4/T0ABgIREEMlAuKZYy6ApHFqtSoT9zLemwkCiHjId7VqAkX0Ek8sqjQIIHHp7oTASCFGThVc1r05kjmr+5APeg5oBavppyI2X2S2mPGxziawI3AH6N9CZ0RBfEhWQNReoAwG7tvDBEKB3Z8EXLD/CzQdhSTtpNPqFAQQbcsPpdWgiJyA8Fk3HQ+IStjhtdH+R8v5LGWePTsIIDHKxCjTdJQZT+5IjjL+lNkJLLUIUWqefwFmAadNaBxwzuZ2c+3E7oslO5vFeVjbqlKI1WLMsuCSCyBvgBXNaN3PiSjFGLP1wCNrKyJZTJmKy5jVHSChGbMISLSQvzZQjFOtWQvJoljebYOsVPMeVJb+IyAeekEAiXuZuJeJe5l/ZlpoxiyLU8zaNogPyapUnu2DAKKElIt5jqqCvpUaIb42CCAxysQoE6NMWVEm65SZD+wrwZQVlBHDNtk5nhhjbFvXBB/yDdgFrHTkqkoQlevjyknSc3PMFgN7UnZ2CZhYL4AcABaYslud07uC/j2No/UZMzfHbK+d/vn4LAe6551SlfKlNYq5gEh5P7Wi7nPMIiAZv6hqdRZSrkXUknyQlWotDbBcXSIgkTFr3mZqemFWrpm3hHwExEMxKCAt8cbyekZ0qtVwqkqYe5jXK66wX322osS9IBaSdftf4ZgyNQvqQ/5rQK46u1HljMr06hkQXZWhvFcV3RYx2uolr8tI+vrxE9A5kwFXv/F7oBTTVvJClR525Y7Srf3bZ3QEcd6oveoPq/IedWOOvhz1M6IVIN7alTuN3xT/Blh8lmNGEMFuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/public/static/images/sports-and-competition.png":
/*!*************************************************************!*\
  !*** ./src/public/static/images/sports-and-competition.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/sports.png":
/*!*********************************************!*\
  !*** ./src/public/static/images/sports.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/stationary.png":
/*!*************************************************!*\
  !*** ./src/public/static/images/stationary.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/technical.png":
/*!************************************************!*\
  !*** ./src/public/static/images/technical.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/public/static/images/video1.png":
/*!*********************************************!*\
  !*** ./src/public/static/images/video1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/video1-d1b07cc10c6274728f9ee555d7269faf.png";

/***/ }),

/***/ "./src/public/static/images/video2.png":
/*!*********************************************!*\
  !*** ./src/public/static/images/video2.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/video2-7b621be21ab8af47ab6e33c0c1e634ee.png";

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

/***/ "./src/redux/actions/PageVisited.js":
/*!******************************************!*\
  !*** ./src/redux/actions/PageVisited.js ***!
  \******************************************/
/*! exports provided: addVisited, fetchVisited, removeVisited */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisited", function() { return addVisited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVisited", function() { return fetchVisited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeVisited", function() { return removeVisited; });
/* harmony import */ var _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/PageVisited */ "./src/redux/actionTypes/PageVisited.js");

const addVisited = item => ({
  type: _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__["ADD_VISITED"],
  payload: {
    item
  }
});
const fetchVisited = () => ({
  type: _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__["FETCH_VISITED"]
});
const removeVisited = () => ({
  type: _actionTypes_PageVisited__WEBPACK_IMPORTED_MODULE_0__["REMOVE_VISITED"]
});

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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: IconCardsData, EventIconCardsData, ProductCardsData, EventCardsData, OurConceptData, TestimonialData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconCardsData", function() { return IconCardsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventIconCardsData", function() { return EventIconCardsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardsData", function() { return ProductCardsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardsData", function() { return EventCardsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurConceptData", function() { return OurConceptData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialData", function() { return TestimonialData; });
/* harmony import */ var _public_static_images_bike_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/static/images/bike.png */ "./src/public/static/images/bike.png");
/* harmony import */ var _public_static_images_bike_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_bike_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_images_book_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/static/images/book.png */ "./src/public/static/images/book.png");
/* harmony import */ var _public_static_images_book_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_book_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_images_sports_and_competition_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/static/images/sports-and-competition.png */ "./src/public/static/images/sports-and-competition.png");
/* harmony import */ var _public_static_images_sports_and_competition_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_sports_and_competition_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_images_shopping_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/static/images/shopping.png */ "./src/public/static/images/shopping.png");
/* harmony import */ var _public_static_images_shopping_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_shopping_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_gym_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/static/images/gym.png */ "./src/public/static/images/gym.png");
/* harmony import */ var _public_static_images_gym_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_gym_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_stationary_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/static/images/stationary.png */ "./src/public/static/images/stationary.png");
/* harmony import */ var _public_static_images_stationary_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_stationary_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_shop_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/static/images/shop.png */ "./src/public/static/images/shop.png");
/* harmony import */ var _public_static_images_shop_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_shop_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_images_technical_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/static/images/technical.png */ "./src/public/static/images/technical.png");
/* harmony import */ var _public_static_images_technical_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_technical_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_images_enterprenurship_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/static/images/enterprenurship.png */ "./src/public/static/images/enterprenurship.png");
/* harmony import */ var _public_static_images_enterprenurship_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_enterprenurship_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_static_images_culture_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/static/images/culture.png */ "./src/public/static/images/culture.png");
/* harmony import */ var _public_static_images_culture_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_culture_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_images_library_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/static/images/library.png */ "./src/public/static/images/library.png");
/* harmony import */ var _public_static_images_library_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_library_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/static/images/product.png */ "./src/public/static/images/product.png");
/* harmony import */ var _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./public/static/images/event.png */ "./src/public/static/images/event.png");
/* harmony import */ var _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_images_video1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public/static/images/video1.png */ "./src/public/static/images/video1.png");
/* harmony import */ var _public_static_images_video1_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_video1_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_images_video2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./public/static/images/video2.png */ "./src/public/static/images/video2.png");
/* harmony import */ var _public_static_images_video2_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_video2_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_static_images_sports_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./public/static/images/sports.png */ "./src/public/static/images/sports.png");
/* harmony import */ var _public_static_images_sports_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_sports_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./public/static/images/profile.png */ "./src/public/static/images/profile.png");
/* harmony import */ var _public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16__);

















const IconCardsData = [{
  id: 1,
  title: "Vehicle",
  image: {
    url: _public_static_images_bike_png__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  slug: "/products?m_cat=vehicles"
}, {
  id: 2,
  title: "Books",
  image: {
    url: _public_static_images_book_png__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  slug: "/products?m_cat=books"
}, {
  id: 3,
  title: "Gadgets",
  image: {
    url: _public_static_images_sports_and_competition_png__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  slug: "/products?m_cat=gadgets"
}, {
  id: 4,
  title: "Hostel Items",
  image: {
    url: _public_static_images_shopping_png__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  slug: "/products?m_cat=hostel-items"
}, {
  id: 5,
  title: "Sports & Gym",
  image: {
    url: _public_static_images_gym_png__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  slug: "/products?m_cat=sports-gym"
}, {
  id: 6,
  title: "Stationary",
  image: {
    url: _public_static_images_stationary_png__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  slug: "/products?m_cat=stationary"
}, {
  id: 7,
  title: "Others",
  image: {
    url: _public_static_images_shop_png__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  slug: "/products"
}];
const EventIconCardsData = [{
  id: "EventIcon1",
  title: "Technical",
  image: {
    url: _public_static_images_technical_png__WEBPACK_IMPORTED_MODULE_7___default.a
  },
  slug: "/events?m_cat=technical"
}, {
  id: "EventIcon2",
  title: "Entrepreneurship",
  image: {
    url: _public_static_images_enterprenurship_png__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  slug: "/events?m_cat=entrepreneurship"
}, {
  id: "EventIcon3",
  title: "Culture",
  image: {
    url: _public_static_images_culture_png__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  slug: "/events?m_cat=culture"
}, {
  id: "EventIcon4",
  title: "Sports Events",
  image: {
    url: _public_static_images_sports_png__WEBPACK_IMPORTED_MODULE_15___default.a
  },
  slug: "/events?m_cat=sports"
}, {
  id: "EventIcon5",
  title: "Education Events",
  image: {
    url: _public_static_images_book_png__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  slug: "/events?m_cat=books"
}, {
  id: "EventIcon6",
  title: "Library",
  image: {
    url: _public_static_images_library_png__WEBPACK_IMPORTED_MODULE_10___default.a
  },
  slug: "/events?m_cat=library"
}];
const ProductCardsData = [{
  id: "product1",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: true
}, {
  id: "product2",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}, {
  id: "product3",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}, {
  id: "product4",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}, {
  id: "product5",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}, {
  id: "product6",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_product_png__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}];
const EventCardsData = [{
  id: "event1",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: true
}, {
  id: "event2",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}, {
  id: "event3",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "April 14",
  categories: [],
  saved: false
}, {
  id: "event4",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "2020-01-06 17:06:41",
  categories: [],
  saved: false
}, {
  id: "event5",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "2020-01-06 17:06:41",
  categories: [],
  saved: false
}, {
  id: "event6",
  title: "Immortal Reign",
  image: {
    url: _public_static_images_event_png__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  collegeName: "Gulzar College of Arts",
  excerpt: "Lorem ipsum dolor sit consectetuer..................",
  price: "$15",
  date: "2020-01-06 17:06:41",
  categories: [],
  saved: false
}];
const OurConceptData = [{
  id: "concept1",
  title: "Provocative content for an accounting",
  image: {
    url: _public_static_images_video1_png__WEBPACK_IMPORTED_MODULE_13___default.a
  },
  video: {
    url: "https://www.youtube.com/embed/rUWxSEwctFU"
  },
  excerpt: "Provocative content for an accounting firm may include six reasons you’re paying too much in tax; why the top line is more important than the bottom line; and how to get your clients to offer to pay you more than you ask.",
  link: {
    url: "/coming-soon",
    name: "Learn More"
  }
}, {
  id: "concept2",
  title: "Provocative content for an accounting",
  image: {
    url: _public_static_images_video2_png__WEBPACK_IMPORTED_MODULE_14___default.a
  },
  excerpt: "Provocative content for an accounting firm may include six reasons you’re paying too much in tax; why the top line is more important than the bottom line; and how to get your clients to offer to pay you more than you ask.",
  collegeName: "Gulzar College of Arts",
  link: {
    url: "/static/pdf.pdf",
    name: "Download Pdf"
  }
}];
const TestimonialData = [{
  id: "review1",
  name: "JANE JOHNSONS",
  image: {
    url: _public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16___default.a
  },
  rating: 5,
  review: "Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit. Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit"
}, {
  id: "review2",
  name: "JANE JOHNSONS",
  image: {
    url: _public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16___default.a
  },
  rating: 5,
  review: "Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit. Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit"
}, {
  id: "review3",
  name: "JANE JOHNSONS",
  image: {
    url: _public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16___default.a
  },
  rating: 5,
  review: "Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit. Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit"
}, {
  id: "review4",
  name: "JANE JOHNSONS",
  image: {
    url: _public_static_images_profile_png__WEBPACK_IMPORTED_MODULE_16___default.a
  },
  rating: 5,
  review: "Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit. Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit"
}];

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Accordion":
/*!**********************************************!*\
  !*** external "@material-ui/core/Accordion" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "@material-ui/core/AccordionDetails":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionDetails" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "@material-ui/core/AccordionSummary":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionSummary" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

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

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

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

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

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

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

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

/***/ "@material-ui/icons/BorderColor":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BorderColor" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BorderColor");

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

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

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

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

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

/***/ "@material-ui/icons/Tune":
/*!******************************************!*\
  !*** external "@material-ui/icons/Tune" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Tune");

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

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

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

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

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

/***/ "react-sticky-box":
/*!***********************************!*\
  !*** external "react-sticky-box" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky-box");

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