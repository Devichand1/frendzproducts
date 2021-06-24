module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/post/feedback.js");
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

/***/ "./src/Utils/helpers.js":
/*!******************************!*\
  !*** ./src/Utils/helpers.js ***!
  \******************************/
/*! exports provided: fileToBase64, isEmail, isPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileToBase64", function() { return fileToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhone", function() { return isPhone; });
const fileToBase64 = file => {
  return new Promise(resolve => {
    // var file = new File([filename], filepath);
    var reader = new FileReader(); // Read file content on file loaded event

    reader.onload = function (event) {
      resolve(event.target.result);
    }; // Convert data to base64


    reader.readAsDataURL(file);
  });
};
const isEmail = val => {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(val);
};
const isPhone = val => {
  let regEmail = /^\d{10}$/;
  return regEmail.test(val);
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

/***/ "./src/pages/post/feedback.js":
/*!************************************!*\
  !*** ./src/pages/post/feedback.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeedbackForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../src/Layout */ "./src/Layout/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Phone */ "@material-ui/icons/Phone");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Subtitles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Subtitles */ "@material-ui/icons/Subtitles");
/* harmony import */ var _material_ui_icons_Subtitles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Subtitles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Details */ "@material-ui/icons/Details");
/* harmony import */ var _material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_apis_global_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../src/apis/global-api */ "./src/apis/global-api.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_Utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../src/Utils/helpers */ "./src/Utils/helpers.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  section: {
    padding: "5rem 0",
    position: "relative",
    overflow: "hidden"
  },
  form: {
    display: "flex",
    flexWrap: "wrap"
  },
  pdTitle: {
    marginBottom: "2rem"
  },
  card: {
    boxShadow: "none",
    border: "#ccc solid 1px",
    height: "100%",
    background: "rgba(255, 255, 255, 0.6)",
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
  cardBody: {
    padding: "2rem !important"
  },
  formInput: {
    marginBottom: "2rem",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  formInputFullWidth: {
    width: "100%"
  },
  formInputField: {
    width: "80%",
    "& .MuiTextField-root": {
      width: "100%"
    }
  },
  formInputFieldFull: {
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      "& .MuiTextField-root": {
        width: "100%"
      },
      "& textarea": {
        width: "100%",
        border: "none",
        borderBottom: "solid 1px #ccc",
        height: "100px"
      },
      "& textarea:focus": {
        outline: "none",
        borderBottom: "solid 1px #FD8118"
      }
    }
  },
  formControl: {
    width: "100%"
  },
  Button: {
    width: "80%",
    height: "50px",
    marginTop: "1rem",
    backgroundColor: "#FD8118",
    color: "#fff",
    fontSize: "1rem",
    boxShadow: "none",
    maxWidth: "200px"
  },
  Images: {
    display: "flex",
    flexWrap: "wrap",
    "& img": {
      width: "125px",
      height: "125px",
      objectFit: "contain",
      marginRight: "10px",
      marginBottom: "10px",
      border: "solid 1px #333 "
    },
    "& video": {
      width: "125px",
      height: "125px",
      objectFit: "contain",
      marginRight: "10px",
      marginBottom: "10px",
      border: "solid 1px #333 "
    }
  },
  AddBtn: {
    border: "solid 1px #333",
    width: "125px",
    height: "125px",
    display: "grid"
  },
  dialogeCustom: {
    "& .MuiGrid-spacing-xs-8": {
      width: "100%",
      margin: "0"
    }
  }
}));
function FeedbackForm({
  user,
  formtype = "add",
  product = {}
}) {
  const classes = useStyles();
  const {
    0: name,
    1: setname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: phone,
    1: setphone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: message,
    1: setmessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: errs,
    1: seterrs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: backdrop,
    1: setbackdrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formerrs,
    1: setformerrs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: snackbar,
    1: setsnackbar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: snackbarMsg,
    1: setsnackbarMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: snackbarType,
    1: setsnackbarType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("success");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (product.images) {
      let updatedImages = [];
      let updatedImagesInfo = [];
      product.images.map((fileData, index) => {
        updatedImages = updatedImages.concat(fileData.base64_data);
        updatedImagesInfo = updatedImagesInfo.concat({
          type: fileData.type,
          data: fileData.link
        });

        if (index + 1 == product.images.length) {
          setfiles(updatedImages);
          setfilesInfo(updatedImagesInfo);
        }
      });
    }
  }, [product]);

  const updateformData = (e, type) => {
    e.preventDefault();
    eval("set" + type + "('" + e.target.value + "')");
  };

  const checkValidation = () => {
    setformerrs("");

    if (!name || !email || !message) {
      setformerrs(["All fields are required"]);
      return false;
    }

    if (!Object(_src_Utils_helpers__WEBPACK_IMPORTED_MODULE_13__["isEmail"])(email)) {
      setformerrs(["Email not valid"]);
      return false;
    }

    if (!Object(_src_Utils_helpers__WEBPACK_IMPORTED_MODULE_13__["isPhone"])(phone)) {
      setformerrs(["Phone not valid"]);
      return false;
    }

    return true;
  };

  const handleSubmit = e => {
    e && e.preventDefault();
    let is_valid = checkValidation();

    if (!is_valid) {
      return;
    }

    setbackdrop(true);
    let data = {
      name: name,
      email: email,
      message: message,
      phone: phone
    };
    Object(_src_apis_global_api__WEBPACK_IMPORTED_MODULE_10__["sendFeedbackMessage"])(data).then(response => {
      setbackdrop(false); //   if (response.error) {
      //     setformerrs(response.msg);
      //     setsnackbar(true);
      //     setsnackbarMsg("Form not submitted.Try again later");
      //     setsnackbarType("error");
      //   } else {

      setsnackbar(true);
      setsnackbarMsg("Feedback sent successfully");
      setsnackbarType("success"); //   setname("");
      //   setemail("");
      //   setmessage("");
      //   window.location.replace("/");
      //   }
    });
  };

  const handlesnackbar = () => {
    setsnackbar(!snackbar);
  };

  return __jsx(_src_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    open: snackbar,
    autoHideDuration: 6000,
    onClose: handlesnackbar
  }, __jsx(Alert, {
    onClose: handlesnackbar,
    severity: snackbarType
  }, snackbarMsg)), __jsx("section", {
    className: classes.section
  }, backdrop && __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.backdrop,
    open: backdrop // onClick={handleClose}

  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "xl"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    lg: 9,
    md: 9,
    sm: 8,
    xs: 12,
    style: {
      margin: "auto"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classes.card
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    className: classes.cardBody
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    style: {
      marginBottom: "1rem"
    }
  }, "Your Feedback"), __jsx("form", {
    className: classes.form,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: classes.formInput
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-end"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true
  }, __jsx(_material_ui_icons_Subtitles__WEBPACK_IMPORTED_MODULE_6___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: classes.formInputField
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    id: "name",
    label: "Name",
    value: name,
    onChange: e => updateformData(e, "name")
  })))), __jsx("div", {
    className: classes.formInput
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-end"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: classes.formInputField
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    id: "email",
    label: "Email",
    value: email,
    type: "email",
    onChange: e => updateformData(e, "email")
  })))), __jsx("div", {
    className: classes.formInput
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-end"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true
  }, __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_5___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: classes.formInputField
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    id: "phone",
    label: "Phone",
    value: phone,
    type: "phone",
    onChange: e => updateformData(e, "phone")
  })))), __jsx("div", {
    className: `${classes.formInput} ${classes.formInputFullWidth}`
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-end"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true
  }, __jsx(_material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_7___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: `${classes.formInputField} ${classes.formInputFieldFull}`
  }, __jsx("textarea", {
    id: "message",
    label: "Message",
    value: message,
    placeholder: "Message",
    onChange: e => updateformData(e, "message")
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    variant: "contained",
    className: classes.Button
  }, "Submit")), formerrs.length > 0 && formerrs.map((msg, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "error",
    key: `error${index}`
  }, msg)))))))));
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

/***/ "@material-ui/icons/Details":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Details" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Details");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

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

/***/ "@material-ui/icons/Subtitles":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Subtitles" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Subtitles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0Zvb3Rlci9Cb3R0b21OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRm9vdGVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hlYWRlci9EZXNrdG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL0Rlc2t0b3Avc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL01vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hlYWRlci9Nb2JpbGUvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGVhZGVyL3V0aWxzL3VzZU5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2F1dGgtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2NoYXQtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2dsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvY29tcG9uZW50cy9DaGF0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9oZWxwZXJzL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvc2VydmljZXMvYXV0aFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXIvQXV0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdC9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0YXRpYy9pbWFnZXMvY2lyY2xlQ2VudGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0YXRpYy9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL2xvZ29mdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL1BhZ2VWaXNpdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9hdXRoTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL2NoYXRDb25uZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL2NoYXRVbnJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL2NoYXRVc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9kaWFsb2dzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvc2VsZWN0ZWREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NoYXRDb25uZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2hhdFVucmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jaGF0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9kaWFsb2dzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3NlbGVjdGVkRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9oZWxwZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvaGVscGVycy9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tb2RlbHMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvbW9kZWxzL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21vZGVscy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9QYWdlVmlzaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jaGF0Q29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jaGF0VW5yZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jaGF0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zZWxlY3RlZERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc2VydmljZXMvY2hhdC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RldGFpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXZlbnROb3RlUm91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZlZWRiYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYWJlbEltcG9ydGFudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXZlVHZSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFJvdW5kZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0Um91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNOb25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdWJ0aXRsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlPZmZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0eWN1YmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiZGF0YSIsInByb2Nlc3MiLCJlbnYiLCJBUFBfSUQiLCJBVVRIX0tFWSIsIkFVVEhfU0VDUkVUIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJtaW5XaWR0aCIsInBhZGRpbmciLCJjb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJhdXRoX3VzZXIiLCJ1c2VyIiwiaGFuZGxlQWRkUHJvZHVjdCIsImlkIiwibG9jYXRpb24iLCJuZXdWYWx1ZSIsInNldEl0ZW0iLCJ0aGVtZSIsImNvbW1vblN0eWxlcyIsImJyZWFrcG9pbnRzIiwidXAiLCJkZXNrdG9wU3R5bGVzIiwiYmV0d2VlbiIsIlRhYlN0eWxlcyIsImRvd24iLCJtb2JpbGVTdHlsZXMiLCJGb290ZXIiLCJsb2dvIiwibG9nb2Z0IiwiU29jaWFsTWVudSIsImNvbXBJbmZvIiwiRm9vdGVyTWVudSIsImNvbnRhY3REZXRhaWxzIiwiQ29weXJpZ2h0IiwibW9tZW50IiwieWVhciIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbkJvdHRvbSIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiZmlsbCIsInBhZGRpbmdSaWdodCIsInRleHRBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiZG93bmxvYWRBcHAiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImRvd25sb2FkVGl0bGUiLCJtYXJnaW5MZWZ0IiwiZG93bmxvYWRDb250ZW50IiwiYWxpZ25JdGVtcyIsImRvd25sb2FkTGlua3MiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJvcmRlciIsInNwYWNpbmciLCJzZWFyY2hJY29uIiwicG9pbnRlckV2ZW50cyIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJIZWFkZXIiLCJtb2RhbE9wZW4iLCJpc1Njcm9sbGVkIiwibmF2QmFyUmVmIiwidXNlTmF2YmFyIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW4iLCJzZXRPcGVuIiwiYXV0aE1vZGFsIiwic2V0YXV0aE1vZGFsIiwidGltZW91dCIsInNldHRpbWVvdXQiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZ290b19jb21taW5nU29vbiIsImhhbmRsZUNsaWNrIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlVG9nZ2xlQ2xvc2UiLCJjdXJyZW50IiwiY29udGFpbnMiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImhhbmRsZUxpc3RLZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImhhbmRsZUxpc3RQcm9kdWN0IiwiaGFuZGxlTGlzdEV2ZW50IiwiaGFuZGxlU2VhcmNoIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsYXNzTmFtZXMiLCJzY3JvbGxlZCIsImxvZ29TY3JvbGxlZCIsIk1lbnUiLCJ1bmRlZmluZWQiLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJNZW51UmlnaHQiLCJTZWFyY2hBcHBCYXIiLCJzZWFyY2hWYWx1ZSIsInNldHNlYXJjaFZhbHVlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsIm9wZW5BTWVudSIsInNldE9wZW5BTWVudSIsInRvZ2dsZVN1Ym1lbnUiLCJ0b2dnbGVBU3VibWVudSIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsIm9wZW5zZWFyY2giLCJzZXRvcGVuc2VhcmNoIiwiaGFuZGxlU2VhcmNoT3BlbiIsImhhbmRsZVNlYXJjaENsb3NlIiwiaGFuZGxlQ2xpY2tBd2F5IiwibG9nb3V0IiwidW5hdXRoZW50aWNhdGVkIiwibG9nIiwiaGFuZGxlU2VhY2hDbGljayIsIlNlYXJjaEFwcEJhckljb24iLCJzZWFyY2hCYXIiLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJjbG9zZUJ1dHRvbiIsIkFwcGJhckJnIiwibWVudUJ1dHRvbiIsInNpZGVCYXIiLCJkcmF3ZXJIZWFkZXIiLCJtZW51SWNvbnMiLCJ0aXRsZSIsImZ1bGxMaXN0Iiwic2VhcmNoYnRuIiwiYWxpZ25TZWxmIiwiZm9ybSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwibW9kYWwiLCJoYW5kbGVDbGlja09wZW4iLCJtYXRjaGVzIiwidXNlTWVkaWFRdWVyeSIsIkhlYWRlckNvbXBvbmVudCIsIkNvbGxlZ2VOYW1lcyIsIm9wdGlvbiIsInNldElzU2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJvZmZzZXQiLCJzcmNFbGVtZW50Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTGF5b3V0IiwiaXNMb2FkZWQiLCJzZXRpc0xvYWRlZCIsIkJvdHRvbU5hdiIsIldyYXBwZXIiLCJNYWluIiwibm9mb290ZXIiLCJpbmNsdWRlcyIsImxvYWRlciIsImN1cnNvciIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIm1heFdpZHRoIiwiZmlsZVRvQmFzZTY0IiwiZmlsZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVhZEFzRGF0YVVSTCIsImlzRW1haWwiLCJ2YWwiLCJyZWdFbWFpbCIsInRlc3QiLCJpc1Bob25lIiwiQVBJX1VSTCIsInNpZ251cCIsImdlbmVyYWxQb3N0UmVxdWVzdCIsInNpbXBsZVNpZ251cCIsImdvb2dsZVNpZ251cCIsImxvZ2luIiwiZWRpdFByb2ZpbGUiLCJ1cGRhdGVQcm9maWxlSW1nIiwiQWRkUHJvZHVjdCIsIlVwZGF0ZVByb2R1Y3QiLCJEZWxldGVQcm9kdWN0IiwiRGVsZXRlUmVxdWVzdCIsIkFkZEV2ZW50IiwiVXBkYXRlRXZlbnQiLCJEZWxldGVFdmVudCIsIkZhdm91cml0ZSIsIkdldFVzZXJGYXZvdXJpdGUiLCJ1c2VyX2lkIiwidHlwZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlRGF0YSIsImNhdGNoIiwid2FybiIsIkdldFVzZXJSZXF1ZXN0cyIsIkFkZFByb2R1Y3RSZXF1ZXN0IiwiVXBkYXRlUHJvZHVjdFJlcXVlc3QiLCJSZXNldFBhc3N3b3JkQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsInN0YXR1cyIsInVwZGF0ZURldmljZVRva2VuIiwidG9rZW4iLCJ2ZXJpZnlFbWFpbCIsImdlbmVyYWxHZXRSZXF1ZXN0IiwiZmV0Y2hEaWFsb2dzIiwicSIsImZldGNoTWVzc2FnZXMiLCJkaWFsb2dfaWQiLCJjcmVhdGVNZXNzYWdlIiwidW5yZWFkTXNnIiwicmVhZEFsbCIsInNlYXJjaFVuaXZlcnNpdGllcyIsInNlYXJjaENhdGVnb3JpZXMiLCJzZWFyY2hDaXRpZXMiLCJnZXRQcm9kdWN0cyIsImdldFByb2R1Y3QiLCJnZXRTZWxsZXIiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0RXZlbnRDYXRlZ29yaWVzIiwiZ2V0Q2l0aWVzIiwiZ2V0RXZlbnRzIiwic2hvd2FsbCIsImdldEV2ZW50IiwiZ2V0UmVxdWVzdCIsInNlYXJjaEV2ZW50Q2F0ZWdvcmllcyIsIkNyZWF0ZU9yZGVyIiwiQ3JlYXRlQ29udGFjdCIsIkNyZWF0ZVZpc2l0IiwiZ2V0QWxsRmVlZGJhY2siLCJnZXRBbGxCdXlSZXF1ZXN0cyIsIkZvcmdvdFBhc3N3b3JkQVBJIiwiVXBkYXRlUGFzc3dvcmRBUEkiLCJzZW5kQ2hhdFVwZGF0ZSIsInNlbmRWZXJpZnlFbWFpbCIsInVwZGF0ZU9wZW5TdGF0dXMiLCJzZW5kRmVlZGJhY2tNZXNzYWdlIiwiQ2hhdE1lc3NhZ2VJY29uIiwiYXV0aFVzZXIiLCJjaGF0VW5yZWFkQ291bnQiLCJjb3VudCIsInNldGNvdW50IiwiY29ubmVjdHljdWJlX3VzZXIiLCJjaGF0VW5hdXRoZW50aWNhdGVkIiwiY2hhdFJlc2V0IiwidW5TZWxlY3RlZERpYWxvZyIsImluaXQiLCJBdXRoU2VydmljZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25uZWN0Q2hhdCIsIkNSRURFTlRJQUxTIiwiQ09ORklHIiwic2Vzc2lvbkV4cGlyZWQiLCJoYW5kbGVSZXNwb25zZSIsInJldHJ5IiwiQ29ubmVjdHlDdWJlIiwiY3JlYXRlU2Vzc2lvbiIsImFwcENvbmZpZyIsImNvbm5lY3R5Q3ViZUNvbmZpZyIsInNlc3Npb24iLCJzZXRVcExpc3RlbmVycyIsImNoYXQiLCJvbk1lc3NhZ2VMaXN0ZW5lciIsIm9uTWVzc2FnZSIsIm9wcG9uZW50SWQiLCJleHRlbnNpb24iLCJzYXZlX3RvX2hpc3RvcnkiLCJtYXJrYWJsZSIsInNlbmQiLCJ1c2VySWQiLCJoYW5kbGVDaGF0Q2xpY2siLCJnZXRJbWFnZUxpbmtGcm9tVUlEIiwidWlkIiwic3RvcmFnZSIsInByaXZhdGVVcmwiLCJwcmVwYXJhdGlvbkF0dGFjaG1lbnQiLCJzaXplIiwiY29udGVudF90eXBlIiwiVXNlciIsImF2YXRhciIsImdldEF2YXRhclVybCIsImN1c3RvbV9kYXRhIiwiZnVsbF9uYW1lIiwicGhvbmUiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsImxhc3RfcmVxdWVzdF9hdCIsImF2YXRhclVJRCIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJjaGF0QXV0aGVudGljYXRlZCIsImN1c3RvbVNlc3Npb24iLCJhc3NpZ24iLCJzZXRVc2VyU2Vzc2lvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNoYXRDb25uZWN0aW9uIiwiZ2V0VW5yZWFkIiwiY29udGFjdGxpc3QiLCJ1bnJlYWRDb3VudCIsInRvdGFsIiwicmVhc3VsdCIsImJpbmQiLCJwYXJzZSIsImNvbm5lY3R5Y3ViZV9pZCIsImRldmljZV90b2tlbiIsIm5vdGlmIiwicHVzaE1lc3NhZ2UiLCJ1c2VyU2Vzc2lvbiIsIkNVUlJFTlRfVVNFUl9TRVNTSU9OX0tFWSIsImdldFVzZXJTZXNzaW9uIiwiYXV0aFNlcnZpY2UiLCJmcmVlemUiLCJidXR0b24iLCJBdXRoRm9ybSIsImZpcnN0bmFtZSIsInNldGZpcnN0bmFtZSIsImxhc3RuYW1lIiwic2V0bGFzdG5hbWUiLCJzZXRlbWFpbCIsInVuaXZlcnNpdHkiLCJzZXR1bml2ZXJzaXR5Iiwic2V0cGFzc3dvcmQiLCJzaG93cGFzc3dvcmQiLCJzZXRzaG93cGFzc3dvcmQiLCJjb25maXJtX3Bhc3N3b3JkIiwic2V0Y29uZmlybV9wYXNzd29yZCIsInNob3djb25maXJtX3Bhc3N3b3JkIiwic2V0c2hvd2NvbmZpcm1fcGFzc3dvcmQiLCJwaG9uZV9ubyIsInNldHBob25lX25vIiwiZXJycyIsInNldGVycnMiLCJ1bml2ZXJzaXRpZXMiLCJzZXR1bml2ZXJzaXRpZXMiLCJicmFuY2giLCJzZXRicmFuY2giLCJsb2FkaW5nIiwic2V0bG9hZGluZyIsImJ0bmxvYWRpbmciLCJzZXRidG5sb2FkaW5nIiwiYmFja2Ryb3AiLCJzZXRiYWNrZHJvcCIsImZvcm1lcnJzIiwic2V0Zm9ybWVycnMiLCJzaG93UmVkaXJlY3QiLCJzZXRzaG93UmVkaXJlY3QiLCJoYW5kbGVTdWJtaXQiLCJzdWJtaXRTaWduVXAiLCJzdWJtaXRMb2dpbiIsIm1zZyIsImFwaV90b2tlbiIsImZhdkV2ZW50cyIsImZhdlByb2R1Y3RzIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGVkIiwiaXNfY29tcGxldGUiLCJyZXNwb25zZUdvb2dsZVN1Y2Nlc3MiLCJwcm9maWxlT2JqIiwiZ29vZ2xlX2lkIiwiZ29vZ2xlSWQiLCJyZXNwb25zZUdvb2dsZUZhaWx1cmUiLCJiYWNrZHJvcENsb3NlIiwidmFsaWRhdGVmb3JtIiwibm9fc2FtZSIsImxlbmd0aCIsInB3ZF9sZW5ndGgiLCJoYXNfZXJyb3IiLCJ1cGRhdGVmb3JtRGF0YSIsImV2YWwiLCJoYW5kbGVVbmlTZWFyY2giLCJnb3RvRm9yZ290UGFzc3dvcmQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY29udGFpbmVyIiwibWFwIiwidGV4dCIsImluZGV4IiwibWFyZ2luVG9wIiwiTG9naW4iLCJ0cmFuc2Zvcm0iLCJjaXJjbGVjZW50ZXIiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJJbWciLCJvcmFuZ2UiLCJ0cmFuc3BhcmVudCIsImRlc2t0b3BNZW51IiwiTG9naW5fUmVnaXN0ZXIiLCJpc01vYmlsZSIsInNldG9wZW5BTWVudSIsIm9wZW5CTWVudSIsInNldG9wZW5CTWVudSIsIm9wZW5DTWVudSIsInNldG9wZW5DTWVudSIsIm9wZW5ETWVudSIsInNldG9wZW5ETWVudSIsInRvZ2dsZU1vZGFsIiwiaW5kZXhPZiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNoYW5nZUluZGV4Iiwib3Blbk1vZGFsIiwiZ290b1Byb2ZpbGUiLCJjbG9zZU1vZGFsIiwiZ290b1Byb2ZpbGVFZGl0IiwiZ290b0V2ZW50cyIsImdvdG9SZXF1ZXN0ZSIsImdvdG9GYXZFdmVudHMiLCJnb3RvRmF2UHJvZHVjdHMiLCJnb3RvQWRkUmVxdWVzdCIsImdvdG9SZXNldFBhc3N3b3JkIiwidG9nZ2xlQlN1Ym1lbnUiLCJ0b2dnbGVDU3VibWVudSIsInRvZ2dsZURTdWJtZW51IiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsIkJvb2xlYW4iLCJTRUxFQ1RFRF9GSUxURVJfVU5JVkVSU0lUWSIsIlNFTEVDVEVEX0ZJTFRFUl9SRVNFVCIsIlBBR0VfUFJPRFVDVFMiLCJWQUxJRF9ST1VURVMiLCJBbGVydCIsInNlY3Rpb24iLCJvdmVyZmxvdyIsInBkVGl0bGUiLCJjYXJkIiwiY2FyZEJvZHkiLCJmb3JtSW5wdXQiLCJmb3JtSW5wdXRGdWxsV2lkdGgiLCJmb3JtSW5wdXRGaWVsZCIsImZvcm1JbnB1dEZpZWxkRnVsbCIsIm91dGxpbmUiLCJmb3JtQ29udHJvbCIsIkJ1dHRvbiIsIkltYWdlcyIsIkFkZEJ0biIsImRpYWxvZ2VDdXN0b20iLCJGZWVkYmFja0Zvcm0iLCJmb3JtdHlwZSIsInByb2R1Y3QiLCJzZXRuYW1lIiwic2V0cGhvbmUiLCJzZXRtZXNzYWdlIiwic25hY2tiYXIiLCJzZXRzbmFja2JhciIsInNuYWNrYmFyTXNnIiwic2V0c25hY2tiYXJNc2ciLCJzbmFja2JhclR5cGUiLCJzZXRzbmFja2JhclR5cGUiLCJpbWFnZXMiLCJ1cGRhdGVkSW1hZ2VzIiwidXBkYXRlZEltYWdlc0luZm8iLCJmaWxlRGF0YSIsImNvbmNhdCIsImJhc2U2NF9kYXRhIiwibGluayIsInNldGZpbGVzIiwic2V0ZmlsZXNJbmZvIiwiY2hlY2tWYWxpZGF0aW9uIiwiaXNfdmFsaWQiLCJoYW5kbGVzbmFja2JhciIsIkFERF9WSVNJVEVEIiwiUkVNT1ZFX1ZJU0lURUQiLCJGRVRDSF9WSVNJVEVEIiwiQVVUSEVOVElDQVRFRCIsIlVQREFURV9ERVZJQ0VfVE9LRU4iLCJVTkFVVEhFTlRJQ0FURUQiLCJTSE9XX01PREFMIiwiQ0xPU0VfTU9EQUwiLCJDSEFUX0NPTk5FQ1RFRCIsIkNIQVRfUkVTRVQiLCJDSEFUX1VOUkVBRCIsIkNIQVRfVU5SRUFEX1JFU0VUIiwiQ0hBVF9BVVRIRU5USUNBVEVEIiwiQ0hBVF9VTkFVVEhFTlRJQ0FURUQiLCJDSEFUX1VQREFURV9VU0VSIiwiRkVUQ0hfRElBTE9HUyIsIkFERF9ESUFMT0ciLCJTT1JUX0RJQUxPR1MiLCJVUERBVEVfRElBTE9HIiwiREVMRVRFX0RJQUxPRyIsIlNFVF9NRVNTQUdFUyIsIlBVU0hfTUVTU0FHRSIsIkRFTEVURV9BTExfTUVTU0FHRVMiLCJMQVpZX0ZFVENIX01FU1NBR0VTIiwiVVBEQVRFX01FU1NBR0VTIiwiU0VMRUNURURfRElBTE9HIiwiVU5fU0VMRUNURURfRElBTE9HIiwiRkVUQ0hfVVNFUlMiLCJBRERfVVNFUlMiLCJ1c2VyRmF2RXZlbnRzIiwidXNlckZhdlByb2R1Y3RzIiwicGF5bG9hZCIsInVwZGF0ZVVzZXJEZXZpY2VUb2tlbiIsInNob3dNb2RhbCIsImNoYXRVbnJlYWRSZXNldCIsImNoYXRVcGRhdGVVc2VyIiwiZGlhbG9ncyIsInVwZGF0ZURpYWxvZyIsImRpYWxvZyIsImFkZE5ld0RpYWxvZyIsInNvcnREaWFsb2dzIiwiZGVsZXRlRGlhbG9nIiwiZGlhbG9nSWQiLCJzZXRNZXNzYWdlcyIsIm1zZ3MiLCJsYXp5RmV0Y2hNZXNzYWdlcyIsImhpc3RvcnkiLCJ1cGRhdGVNZXNzYWdlcyIsIm1zZ0lkIiwiZGVsZXRlQWxsTWVzc2FnZXMiLCJzZWxlY3RlZERpYWxvZyIsImZldGNoVXNlcnMiLCJ1c2VycyIsImFkZFVzZXJzIiwiQlROX1RZUEUiLCJESUFMT0ciLCJDT05UQUNUUyIsIkNSRUFURV9HUk9VUCIsIkRJQUxPR19UWVBFIiwiUFJJVkFURSIsIkdST1VQIiwiQlJPQURDQVNUIiwiUFVCTElDX0NIQU5ORUwiLCJEaWFsb2ciLCJfaWQiLCJ4bXBwX3Jvb21famlkIiwieG1wcF90eXBlIiwicGhvdG8iLCJkZXNjcmlwdGlvbiIsInJvb21famlkIiwiYWRtaW5zX2lkcyIsIm9jY3VwYW50c19pZHMiLCJ1cGRhdGVkX2RhdGUiLCJEYXRlIiwibm93IiwibGFzdF9tZXNzYWdlX2RhdGVfc2VudCIsImxhc3RfbWVzc2FnZSIsImxhc3RfbWVzc2FnZV9pZCIsImxhc3RfbWVzc2FnZV91c2VyX2lkIiwidW5yZWFkX21lc3NhZ2VzX2NvdW50IiwidW5yZWFkX21lc3NhZ2VzX2lkcyIsInBpbm5lZF9tZXNzYWdlc19pZHMiLCJTVEFUVVNfUEVORElORyIsIlNUQVRVU19TRU5UIiwiU1RBVFVTX0RFTElWRVJFRCIsIlNUQVRVU19SRUFEIiwiR1JPVVBfQ0hBVF9BTEVSVF9UWVBFIiwiQ1JFQVRFIiwiZGVmYXVsdE1lc3NhZ2UiLCJkYXRlX3NlbnQiLCJNYXRoIiwiZmxvb3IiLCJhdHRhY2htZW50cyIsInNlbmRlcl9pZCIsInNlbmRlciIsIk1lc3NhZ2UiLCJncm91cF9jaGF0X2FsZXJ0X3R5cGUiLCJjaGF0X2RpYWxvZ19pZCIsInNlbmRfc3RhdGUiLCJnZXRTZW5kU3RhdGUiLCJhdHRhY2htZW50IiwiZ2V0QXR0YWNobWVudCIsInBhcnNlTGluayIsInJlYWRfaWRzIiwiZmluZCIsImRlbGl2ZXJlZF9pZHMiLCJGYWtlTWVzc2FnZSIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImFyciIsImFycjIiLCJwb3AiLCJ1IiwibG9jYWxmb3JhZ2UiLCJyZW1vdmVJdGVtIiwic2hvdyIsInNvcnRlZERpYWxvZyIsImZpbHRlciIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGhfbW9kYWwiLCJjaGF0X3VzZXIiLCJtZXNzYWdlcyIsInBhZ2VWaXNpdGVkIiwiY2hhdENvbm5lY3RlZCIsImluaXRpYWxfc3RhdGUiLCJjb25uZWN0eV9kaWFsb2dfaWQiLCJyZWFkIiwidXBkYXRlIiwidXNlckRhdGEiLCJhcHBfaWQiLCJPTkVTSUdOQUxfQVBQX0lEIiwiY29udGVudHMiLCJmaWx0ZXJzIiwiQXV0aG9yaXphdGlvbiIsIk9ORVNJR05BTF9SRVNUX0tFWSIsImFscmVhZHlVcGRhdGVkRGlhbG9nIiwiZWxlbSIsIm5ld0FyciIsInJldmVyc2UiLCJuZXdPYmoiLCJzb3J0IiwiaXRlbXMiLCJpbnZlcnRlZCIsIml0ZW1BIiwiaXRlbUIiLCJ1cGRhdGVTdGF0dXNNZXNzYWdlcyIsIm5ld01lc3NhZ2VzIiwidXBkYXRlU2VuZFN0YXR1cyIsIm5ld09ialVzZXJzIiwiZm9yRWFjaCIsIkNoYXRTZXJ2aWNlIiwiY3VycmVudE1lc3NhZ2VzIiwiZ2V0TWVzc2FnZXNCeURpYWxvZ0lkIiwibGFzdE1lc3NhZ2VEYXRlIiwidXBkYXRlT2JqIiwibGFzdF9tZXNzYWdlc19mb3JfZmV0Y2giLCJsdCIsInNvcnRfZGVzYyIsIm1vcmVIaXN0b3J5RnJvbVNlcnZlciIsImxpc3QiLCJhbW91bnRNZXNzYWdlcyIsImFsZXJ0VHlwZSIsImRhdGUiLCJyZWNpcGllbnRfaWQiLCJtZXNzYWdlRXh0ZW5zaW9ucyIsIm9uU2VudE1lc3NhZ2VDYWxsYmFjayIsIm9uU2VudE1lc3NhZ2VMaXN0ZW5lciIsIm9uRGVsaXZlcmVkU3RhdHVzTGlzdGVuZXIiLCJvbkRlbGl2ZXJlZFN0YXR1cyIsIm9uUmVhZFN0YXR1c0xpc3RlbmVyIiwib25SZWFkU3RhdHVzIiwiZmV0Y2hEaWFsb2dzRnJvbVNlcnZlciIsImdldFN0YXRlIiwiZGlhbG9nc0Zyb21TZXJ2ZXIiLCJnZXRNZXNzYWdlcyIsImlzQWxyZWR5VXBkYXRlIiwiaXNBbHJlYWR5TWVzc2FnZUZldGNoIiwiaGlzdG9yeUZyb21TZXJ2ZXIiLCJ1cGRhdGVEaWFsb2dzVW5yZWFkTWVzc2FnZXNDb3VudCIsImZpcnN0VW5yZWFkTXNnIiwicmVhZEFsbE1lc3NhZ2VzIiwic2VuZFJlYWRTdGF0dXMiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2VUZXh0Iiwic2Nyb2xsVG9Cb3R0b20iLCJ0cmltIiwibWVzc2FnZVVuaXF1ZUlkIiwic2VuZE1lc3NhZ2VBc0F0dGFjaG1lbnQiLCJuZXdPYmpGcmVleiIsInNlbmRDaGF0QWxlcnRPbkNyZWF0ZSIsInNlbmRNc2dDaGF0QWxlcnRPbkNyZWF0ZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVwbG9hZFBob3RvIiwibmV3T2JqQXR0YWNoIiwiY3JlYXRlUHJpdmF0ZURpYWxvZyIsImdldFVzZXJGcm9tUmVkdXhCeUlkIiwidXNlcnNJbmZvIiwiZ2V0VXNlckZyb21TZXJ2ZXJCeUlkIiwiVXNlck1vZGVsIiwiY3JlYXRlUHVibGljRGlhbG9nIiwiZ3JvdXBOYW1lIiwiaW1nIiwidW5zaGlmdCIsImltYWdlIiwibmV3RGlhbG9nIiwicmVhZE1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJzZW5kZXJJZCIsImdldFNlbGVjdGVkRGlhbG9nIiwibWVzc2FnZV9pZCIsInNlbmREZWxpdmVyZWRTdGF0dXMiLCJmYWlsZWRNZXNzYWdlIiwiZ2V0VXNlcnNMaXN0IiwiaWRzIiwidXNlcnNMaXN0IiwicGVyX3BhZ2UiLCJzZXRTZWxlY3REaWFsb2ciLCJnZXREaWFsb2dCeUlkIiwiY3JlYXRlQW5kVXBsb2FkIiwiaGVscGVycyIsImdldEJzb25PYmplY3RJZCIsImNoYXRTZXJ2aWNlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcG9zdC9mZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3Bvc3QvZmVlZGJhY2suanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImNvbnN0IGRhdGEgPSB7XG5cbiAgXCJzZW5kZXJJRFwiOiBcIlwiLFxuICBcImNvbm5lY3R5Q3ViZUNvbmZpZ1wiOiBbXG4gICAge1xuICAgICAgXCJhcHBJZFwiOiBwcm9jZXNzLmVudi5BUFBfSUQsXG4gICAgICBcImF1dGhLZXlcIjogcHJvY2Vzcy5lbnYuQVVUSF9LRVksXG4gICAgICBcImF1dGhTZWNyZXRcIjogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2hhdFwiOiB7XG4gICAgICAgIFwic3RyZWFtTWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZWJ1Z1wiOiB7XG4gICAgICAgIFwibW9kZVwiOiAwXG4gICAgICB9XG4gICAgfVxuICBdXG59XG5leHBvcnQgZGVmYXVsdCBkYXRhXG5cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvblwiO1xyXG5pbXBvcnQgSG9tZVJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVJvdW5kZWRcIjtcclxuaW1wb3J0IEV2ZW50Tm90ZVJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXZlbnROb3RlUm91bmRlZFwiO1xyXG5pbXBvcnQgTG9jYWxNYWxsUm91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbE1hbGxSb3VuZGVkXCI7XHJcbmltcG9ydCBMaXZlVHZSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpdmVUdlJvdW5kZWRcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBBdXRoSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2dpbl9SZWdpc3RlclwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZvcm1hdExpc3RCdWxsZXRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZGZkZmRcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggLTNweCAyMHB4IHJnYmEoMCwwLDAsMC4xKVwiLFxyXG4gICAgXCImIGJ1dHRvblwiOiB7XHJcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcclxuICAgICAgcGFkZGluZzogXCIzcHggMTBweCAzcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiM5MDhlOGVcIixcclxuICAgICAgcGFkZGluZ1RvcDogJzVweCcsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1cHgnXHJcbiAgICB9LFxyXG4gICAgXCImIGEuYWN0aXZlXCI6IHtcclxuICAgICAgY29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcwJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvdE1lbnVcIikpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIudXNlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBpZiAodXNlci5pZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvP3NpZ251cD1vcGVuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3R0b21OYXZpZ2F0aW9uXHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgb25DaGFuZ2U9eyhldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJib3RNZW51XCIsIG5ld1ZhbHVlKTtcclxuICAgICAgfX1cclxuICAgICAgc2hvd0xhYmVsc1xyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgID5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIGxhYmVsPVwiSG9tZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICBpY29uPXs8SG9tZVJvdW5kZWRJY29uIC8+fVxyXG4gICAgICAvPlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPVwiL3Byb2R1Y3RzP3R5cGU9YnV5XCJcclxuICAgICAgICBsYWJlbD1cIkJ1eVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZHVjdHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgIGljb249ezxMb2NhbE1hbGxSb3VuZGVkSWNvbiAvPn1cclxuICAgICAgLz5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgaHJlZj1cIi9ldmVudHNcIlxyXG4gICAgICAgIGxhYmVsPVwiRXZlbnRzXCJcclxuICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9ldmVudHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgIGljb249ezxFdmVudE5vdGVSb3VuZGVkSWNvbiAvPn1cclxuICAgICAgLz5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgaHJlZj1cIi9idXktcmVxdWVzdFwiXHJcbiAgICAgICAgbGFiZWw9XCJSZXF1ZXN0c1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvYnV5LXJlcXVlc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgIGljb249ezxGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIC8+fVxyXG4gICAgICAvPlxyXG4gICAgICB7YWNjZXNzVG9rZW4gJiYgKFxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAvLyBocmVmPVwiL3Byb2ZpbGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFByb2R1Y3R9XHJcbiAgICAgICAgbGFiZWw9XCJNeSBhZHNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGVcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgIGljb249ezxMaXZlVHZSb3VuZGVkSWNvbiAvPn1cclxuICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgeyFhY2Nlc3NUb2tlbiAmJiAoXHJcbiAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cclxuICAgICAgICAgIGxhYmVsPVwiTG9naW5cIlxyXG4gICAgICAgICAgaWNvbj17PEF1dGhJY29uIGlzTW9iaWxlPXt0cnVlfSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjb21tb25TdHlsZXMsIGRlc2t0b3BTdHlsZXMsIG1vYmlsZVN0eWxlcywgVGFiU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XHJcbmltcG9ydCBZb3VUdWJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZSc7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluJztcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmUnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBsb2dvZnQgZnJvbSAnLi8uLi8uLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9sb2dvZnQucG5nJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIC4uLmNvbW1vblN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiBkZXNrdG9wU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCd4cycsICdzbScpXTogVGFiU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXTogbW9iaWxlU3R5bGVzXHJcbn0pKVxyXG5cclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIHsvKiBEb3dubG9hZCBBcHAgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgIHsvKiA8c2VjdGlvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5zZWN0aW9ufSAke2NsYXNzZXMuZG93bmxvYWRBcHB9YH1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9zdGF0aWMvaW1hZ2VzL2Rvd25sb2FkLmpwZylcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbGc9ezh9IG1kPXs4fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dubG9hZFRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICBUUlkgT1VSIEFQUCBPTiBZT1VSIE1PQklMRSBQSE9ORVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dubG9hZENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+R0VUIFlPVVIgQVBQIFRPREFZPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZG93bmxvYWRMaW5rc30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9nb29nbGVwbGF5LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2FwcHN0b3JlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvc2VjdGlvbj4gKi99XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLkZvb3Rlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs0fSBtZD17M30gc209ezN9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cclxuICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvZnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Tb2NpYWxNZW51fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wSW5mb30+RnJpZW5kenByb2R1Y3RzIGlzIGEgcGxhdGZvcm0gd2l0aCBzdWNoIGFuIGlubm92YXRpdmUgaWRlYSB0byBzZWxsLyBwdXJjaGFzZSBvciByZXF1ZXN0IGEgd2lkZSByYW5nZSBvZiBpdGVtcyB3aXRoaW4gdGhlIGNvbGxlZ2UgY2FtcHVzLiBCZXNpZGVzLCB5b3UgY291bGQgZ2V0IGluZm9ybWF0aW9uIG9mIHZhcmlvdXMgZXZlbnRzIGhlbGQgaW4gY29sbGVnZXMgdGhyb3VnaG91dCBJbmRpYS48L3A+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48cD5GT0xMT1cgVVMgPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0ZyaWVuZHpQcm9kdWN0LTExNDYyODE2NzMzODU0N1wiPjxGYWNlYm9va0ljb24gY29sb3I9XCIjZmZmXCIgLz48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vZnJpZW5kel9wcm9kdWN0P2lnc2hpZD11Ym1qcHVvcXZzbTVcIj48SW5zdGFncmFtSWNvbiBjb2xvcj1cIiNmZmZcIiAvPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48VHdpdHRlckljb24gY29sb3I9XCIjZmZmXCIgLz48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PFlvdVR1YmVJY29uIGNvbG9yPVwiI2ZmZlwiIC8+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxMaW5rZWRJbkljb24gY29sb3I9XCIjZmZmXCIgLz48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17OH0gbWQ9ezl9IHNtPXs5fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb290ZXJNZW51fT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxwPlBPUFVMQVIgQ09MTEVHRVM8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/cz1uaXQtamFsYW5kaGFyXCI+TklUIEphbGFuZGhhcjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9kdWN0cz9zPW5pdC1kZWxoaVwiPk5JVCBEZWxoaTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9kdWN0cz9zPW5pdC1rdXJ1a3NoZXRyYVwiPk5JVCBLdXJ1a3NoZXRyYTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9kdWN0cz9zPW5pdC1kZWxoaVwiPklJVCBEZWxoaTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxwPlVzZWZ1bCBMaW5rczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PExpbmsgaHJlZj1cIi9cIj5DYXJlZXJzPC9MaW5rPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPlByaXZhY3kgUG9saWN5PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Rlcm1zLWFuZC1jb25kaXRpb25zXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3REZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxwPkNvbnRhY3Q8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPjxIb21lSWNvbiBjb2xvcj1cIiNmZmZcIiAvPkphbGFuZGhhciwgUHVuamFiPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOmluZm9AZnJpZW5kenByb2R1Y3RzLmNvbVwiPjxNYWlsSWNvbiBjb2xvcj1cIiNmZmZcIiAvPmluZm9AZnJpZW5kenByb2R1Y3RzLmNvbTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cInRlbDorOTE3MDAzMzUxMVwiPjxQaG9uZUljb24gY29sb3I9XCIjZmZmXCIgLz4rIDkxNzAwMzM1MTE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0ZWw6KzkxNzAwMzM1MTFcIj48UGhvbmVJY29uIGNvbG9yPVwiI2ZmZlwiIC8+KyA5MTcwMDMzNTExPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db3B5cmlnaHR9PlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHk+e21vbWVudCgpLnllYXIoKX0gQ29weXJpZ2h0cyBBbGwgcmlnaHRzIFJlc2VydmVkIFdlYnNpdGUgUG93ZXJlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cud29vZGJveGRpZ2l0YWwuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPldvb2QgQm94PC9hPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCIvLyBpbXBvcnQge1xyXG4vLyAgIHNlY29uZGFyeURhcmssIGJhY2tncm91bmRDb2xvciwgYmx1ZVRleHQsIG1haW5UZXh0XHJcbi8vIH0gZnJvbSAnc3JjL19zdHlsZXMvY29sb3JzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vblN0eWxlcyA9IHtcclxuICBGb290ZXI6e1xyXG4gICAgcGFkZGluZzogJzJyZW0gMCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTUxNzI4J1xyXG4gIH0sXHJcbiAgRm9vdGVyTWVudTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICcmIHVsJzp7XHJcbiAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSc6e1xyXG4gICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgcCc6e1xyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgYSc6e1xyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgU29jaWFsTWVudTp7XHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjAsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpOmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgcCc6IHtcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBhJzoge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBtYXJnaW5SaWdodDogJzAuOHJlbScsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogJzEuM2VtJyxcclxuICAgICAgaGVpZ2h0OiAnMS4zZW0nLFxyXG4gICAgICBmaWxsOiAnI2ZmZicsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ286e1xyXG4gICAgd2lkdGg6JzE0OHB4J1xyXG4gIH0sXHJcbiAgY29tcEluZm86e1xyXG4gICAgY29sb3I6JyNmZmYnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OicycmVtJ1xyXG4gIH0sXHJcbiAgQ29weXJpZ2h0OntcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxNTE3MjhmMCcsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgJyYgcCc6e1xyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJ1xyXG4gICAgfSxcclxuICAgICcmIGEnOntcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgdGV4dERlY29yYXRpb246J3VuZGVybGluZSAhaW1wb3J0YW50J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZG93bmxvYWRBcHA6IHtcclxuICAgIHBhZGRpbmc6IFwiM3JlbSAwXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjM1LCAyMzgsIDIzOSwgMC42KVwiLFxyXG4gICAgICB6SW5kZXg6IFwiMVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvd25sb2FkVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IFwiMlwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaDNcIjoge1xyXG4gICAgICBjb2xvcjogXCIjMkE2NkVBXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG93bmxvYWRDb250ZW50OiB7XHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgekluZGV4OiBcIjJcIixcclxuICAgIHdpZHRoOiBcIm1heC1jb250ZW50XCIsXHJcbiAgICBcIiYgaDVcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFjdERldGFpbHM6e1xyXG4gICAgJyYgYSc6e1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgc3Bhbic6e1xyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBmb250U2l6ZTonMThweCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOntcclxuICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICBtYXJnaW5SaWdodDogJzEwcHgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBkb3dubG9hZExpbmtzOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBcIiYgYVwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjQ4JVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZVN0eWxlcyA9IHtcclxuICBDb3B5cmlnaHQ6e1xyXG4gICAgcGFkZGluZzonMC41cmVtIDFyZW0nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMi45cmVtJyxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTRweCdcclxuICAgIH1cclxuICB9LFxyXG4gIEZvb3Rlcjp7XHJcbiAgICBwYWRkaW5nVG9wOicxcmVtJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICcwJ1xyXG4gIH0sXHJcbiAgRm9vdGVyTWVudToge1xyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIG1hcmdpbjogJzAnLFxyXG4gICAgICBib3JkZXJCb3R0b206J3NvbGlkIDFweCAjMzkzOTM5JyxcclxuICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiAnMC40cmVtIDAnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgJyYgdWwgbGkgcCc6e1xyXG4gICAgICBtYXJnaW46MFxyXG4gICAgfSxcclxuICAgICcmIHVsIGxpJzp7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTonMC4zcmVtJ1xyXG4gICAgfSxcclxuICAgICcmIHVsIGxpIGEnOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTRweCdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBzcGFuJzoge1xyXG4gICAgICBmb250U2l6ZTogJzE0cHgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvOntcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBtYXJnaW46J2F1dG8nXHJcbiAgfSxcclxuICBjb250YWN0RGV0YWlsczp7XHJcbiAgICAnJiBhJzp7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIHNwYW4nOntcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBTb2NpYWxNZW51OiB7XHJcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6ICcwJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Cb3R0b206MCxcclxuICAgICAgYm9yZGVyQm90dG9tOidzb2xpZCAxcHggIzM5MzkzOSdcclxuICAgIH0sXHJcbiAgICAnJiB1bCBsaSBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiAnMWVtJyxcclxuICAgICAgaGVpZ2h0OiAnMWVtJyxcclxuICAgIH1cclxuICB9LFxyXG4gIGRvd25sb2FkVGl0bGU6IHtcclxuICAgIFwiJiBoM1wiOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIycmVtXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkb3dubG9hZExpbmtzOiB7XHJcbiAgICBcIiYgaW1nXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wSW5mbzp7XHJcbiAgICBwYWRkaW5nUmlnaHQ6MFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlN0eWxlcyA9IHtcclxuICBDb3B5cmlnaHQ6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzIuOXJlbSdcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVza3RvcFN0eWxlcyA9IHtcclxuICBGb290ZXJNZW51OntcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBwYWRkaW5nTGVmdDogMFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvd25sb2FkVGl0bGU6IHtcclxuICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcclxuaW1wb3J0IENoYXRJY29uIGZyb20gXCIuLi8uLi8uLi9jaGF0L2NvbXBvbmVudHMvQ2hhdEljb25cIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNOb25lXCI7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuaW1wb3J0IHVzZU5hdmJhciBmcm9tIFwiLi4vdXRpbHMvdXNlTmF2YmFyXCI7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xyXG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBQb3BwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtcclxuaW1wb3J0IHsgY29tbW9uU3R5bGVzLCBkZXNrdG9wU3R5bGVzLCBtb2JpbGVTdHlsZXMsIFRhYlN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXV0aEljb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTG9naW5fUmVnaXN0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9sb2dvLnBuZydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyOiBcInNvbGlkIDFweCAjY2NjXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEyY2hcIixcclxuICAgICAgXCImOmZvY3VzXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIyMGNoXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLi4uY29tbW9uU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXTogZGVza3RvcFN0eWxlcyxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXTogVGFiU3R5bGVzLFxyXG59KSk7XHJcbmltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhNb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgbW9kYWxPcGVuIH0pIHtcclxuICBjb25zdCB7IGlzU2Nyb2xsZWQsIG5hdkJhclJlZiB9ID0gdXNlTmF2YmFyKCk7XHJcblxyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXV0aE1vZGFsLCBzZXRhdXRoTW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0aW1lb3V0LCBzZXR0aW1lb3V0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci5hY2Nlc3NUb2tlbik7XHJcblxyXG4gIGNvbnN0IGdvdG9fY29tbWluZ1Nvb24gPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9jb21pbmctc29vblwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGVDbG9zZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oKHByZXZPcGVuKSA9PiAhcHJldk9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIGZvY3VzIHRvIHRoZSBidXR0b24gd2hlbiB3ZSB0cmFuc2l0aW9uZWQgZnJvbSAhb3BlbiAtPiBvcGVuXHJcbiAgY29uc3QgcHJldk9wZW4gPSBSZWFjdC51c2VSZWYob3Blbik7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW4gPT09IGZhbHNlKSB7XHJcbiAgICAgIGFuY2hvclJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldk9wZW4uY3VycmVudCA9IG9wZW47XHJcbiAgfSwgW29wZW5dKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMaXN0UHJvZHVjdCA9IChlKSA9PiB7XHJcbiAgICBzZXRhdXRoTW9kYWwoZmFsc2UpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wb3N0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvP3NpZ251cD1vcGVuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RFdmVudCA9IChlKSA9PiB7XHJcbiAgICBzZXRhdXRoTW9kYWwoZmFsc2UpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wb3N0L2V2ZW50XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvP3NpZ251cD1vcGVuXCIpOyAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBzZXR0aW1lb3V0KFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cz9zPVwiICsgdmFsdWUpO1xyXG4gICAgICB9LCA2MDApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2XHJcbiAgICAgIGlkPVwibmF2YmFyXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgaXNTY3JvbGxlZCAmJiBjbGFzc2VzLnNjcm9sbGVkKX1cclxuICAgICAgcmVmPXtuYXZCYXJSZWZ9XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5sb2dvLFxyXG4gICAgICAgICAgICAgICAgICBpc1Njcm9sbGVkICYmIGNsYXNzZXMubG9nb1Njcm9sbGVkXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLk1lbnV9PlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT0gXCIvcHJvZHVjdHM/dHlwZT1idXlcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90eXBlPWJ1eVwiPkJ1eTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT0gXCIvcHJvZHVjdHM/dHlwZT1yZW50YWxcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90eXBlPXJlbnRhbFwiPlJlbnQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvZXZlbnRzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50c1wiPkV2ZW50czwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9idXktcmVxdWVzdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9idXktcmVxdWVzdFwiPlJlcXVlc3RzPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Bvc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVMaXN0UHJvZHVjdH0+U2VsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9wb3N0L2V2ZW50XCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlTGlzdEV2ZW50fT5BZGQgRXZlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvZmVlZGJhY2tcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmVlZGJhY2tcIj5GZWVkYmFjazwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgcmVmPXthbmNob3JSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyBcIk1vcmVcIiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE1vcmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFBvcHBlclxyXG4gICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2VudGVyIHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY2VudGVyIGJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlVG9nZ2xlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVudS1saXN0LWdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVMaXN0S2V5RG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj5Qcml2YWN5IFBvbGljeTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVybXMtYW5kLWNvbmRpdGlvbnNcIj5UZXJtcyAmYW1wOyBDb25kaXRpb25zPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1BvcHBlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuTWVudVJpZ2h0fT5cclxuICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdEljb24gLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc05vbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPEF1dGhJY29uIG1vZGFsT3Blbj17YXV0aE1vZGFsfSAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiLy8gaW1wb3J0IHtcclxuLy8gICBzZWNvbmRhcnlEYXJrLCBiYWNrZ3JvdW5kQ29sb3IsIGJsdWVUZXh0LCBtYWluVGV4dFxyXG4vLyB9IGZyb20gJ3NyYy9fc3R5bGVzL2NvbG9ycydcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25TdHlsZXMgPSB7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gICAgbGVmdDogXCIwXCIsXHJcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgekluZGV4OiBcIjk5XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgZWFzZS1pbiAzNTBtc1wiLFxyXG4gIH0sXHJcbiAgc2Nyb2xsZWQ6IHtcclxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gICAgbGVmdDogXCIwXCIsXHJcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgekluZGV4OiBcIjk5XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCAxNHB4IDE4cHggcmdiYSgwLDAsMCwwLjEpXCIsXHJcbiAgfSxcclxuICBNZW51OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIixcclxuICAgIFwiJiBsaVwiOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjEuM3JlbVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBsaSB1bCBsaVwiOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcclxuICAgIH0sXHJcbiAgICBcIiYgYVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgbGk6aG92ZXIgYVwiOiB7XHJcbiAgICAgIGNvbG9yOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBsaTpob3ZlciAuTXVpTGlzdC1yb290IGFcIjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGxpLmFjdGl2ZSBhXCI6IHtcclxuICAgICAgY29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGJ1dHRvblwiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBidXR0b246aG92ZXIgLk11aUJ1dHRvbi1sYWJlbFwiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10aGVtZSlcIlxyXG4gICAgfSxcclxuICAgIFwiJiBidXR0b24gLk11aVRvdWNoUmlwcGxlLXJvb3RcIjoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIE1lbnVSaWdodDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIixcclxuICAgIFwiJiBsaVwiOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjFyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBtYXJnaW46IFwiMXJlbSAwXCIsXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBoZWlnaHQ6IFwiODVweFwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgZWFzZS1pbiAzNTBtc1wiLFxyXG4gIH0sXHJcbiAgbG9nb1Njcm9sbGVkOiB7XHJcbiAgICBtYXJnaW46IFwiMC4ycmVtIDBcIixcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIGhlaWdodDogXCI2NXB4XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2JpbGVTdHlsZXMgPSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFiU3R5bGVzID0ge1xyXG4gIE1lbnU6IHtcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogJzFyZW0nXHJcbiAgICB9LFxyXG4gICAgJyYgYSc6IHtcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNrdG9wU3R5bGVzID0ge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCI7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGFiZWxJbXBvcnRhbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGFiZWxJbXBvcnRhbnRcIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuaW1wb3J0IEFjY291bnRCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94XCI7XHJcbmltcG9ydCBIb21lUm91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lUm91bmRlZFwiO1xyXG5pbXBvcnQgRXZlbnROb3RlUm91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FdmVudE5vdGVSb3VuZGVkXCI7XHJcbmltcG9ydCBMb2NhbE1hbGxSb3VuZGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFJvdW5kZWRcIjtcclxuaW1wb3J0IExpdmVUdlJvdW5kZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGl2ZVR2Um91bmRlZFwiO1xyXG5pbXBvcnQgRm9ybWF0TGlzdEJ1bGxldGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiO1xyXG5pbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiO1xyXG5pbXBvcnQgTmF2aWdhdGVOZXh0Um91bmRlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRSb3VuZGVkXCI7XHJcbmltcG9ydCBGZWVkYmFja0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GZWVkYmFja1wiO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnXHJcblxyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBjb21tb25TdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IENyZWF0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DcmVhdGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1bmF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBDaGF0TWVzc2FnZUljb24gZnJvbSBcIi4uLy4uLy4uL2NoYXQvY29tcG9uZW50cy9DaGF0SWNvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgLi4uY29tbW9uU3R5bGVzLFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hBcHBCYXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIudXNlcik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RpbWVvdXQsIHNldHRpbWVvdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRzZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbkFNZW51LCBzZXRPcGVuQU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVTdWJtZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbk1lbnUoIW9wZW5NZW51KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVBU3VibWVudSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BTWVudSghb3BlbkFNZW51KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtvcGVuc2VhcmNoLCBzZXRvcGVuc2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoT3BlbiA9ICgpID0+IHtcclxuICAgIHNldG9wZW5zZWFyY2godHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuc2VhcmNoKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0F3YXkgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIGRpc3BhdGNoKHVuYXV0aGVudGljYXRlZCgpKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gIC8vICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgLy8gICBzZXR0aW1lb3V0KHZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgdGltZW91dCk7XHJcbiAgICBzZXRzZWFyY2hWYWx1ZSh2YWx1ZSk7XHJcbiAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgc2V0dGltZW91dChcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHM/cz1cIiArIHZhbHVlKTtcclxuICAgICAgfSwgNjAwKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFjaENsaWNrID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHM/cz1cIiArIHNlYXJjaFZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBTZWFyY2hBcHBCYXJJY29uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfT5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhY2hDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdFByb2R1Y3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Bvc3RcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi8/c2lnbnVwPW9wZW5cIik7ICAgXHJcblxyXG4gICAgICAvLyBzZXRhdXRoTW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdEV2ZW50ID0gKGUpID0+IHtcclxuICAgIC8vIHNldGF1dGhNb2RhbChmYWxzZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodXNlci5pZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wb3N0L2V2ZW50XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvP3NpZ251cD1vcGVuXCIpOyAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVDbGlja0F3YXl9PlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5BcHBiYXJCZ30+XHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPERyYXdlciBvcGVuPXtvcGVufSBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZUJhcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIb21lUm91bmRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0cz90eXBlPWJ1eVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PSBcIi9wcm9kdWN0cz90eXBlPWJ1eVwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbE1hbGxSb3VuZGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQnV5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHM/dHlwZT1yZW50YWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT0gXCIvcHJvZHVjdHM/dHlwZT1yZW50YWxcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxNYWxsUm91bmRlZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9ldmVudHNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9ldmVudHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFdmVudE5vdGVSb3VuZGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRXZlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgLy8gaHJlZj17IWFjY2Vzc1Rva2VuID8gXCIvP3NpZ251cD1vcGVuXCIgOiBcIi9wb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpc3RQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9wb3N0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0TGlzdEJ1bGxldGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU2VsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2J1eS1yZXF1ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvYnV5LXJlcXVlc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSZXF1ZXN0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAvLyBocmVmPXshYWNjZXNzVG9rZW4gPyBcIi8/c2lnbnVwPW9wZW5cIiA6IFwiL3Bvc3QvZXZlbnRcIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGlzdEV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9wb3N0L2V2ZW50XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0TGlzdEJ1bGxldGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWRkIEV2ZW50c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2ZlZWRiYWNrXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvZmVlZGJhY2tcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWVkYmFja0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZlZWRiYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTdWJtZW51fT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1vcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7b3Blbk1lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbk1lbnV9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBYm91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFja0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByaXZhY3kgUG9saWN5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVybXMtYW5kLWNvbmRpdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVGVybXMgJmFtcDsgQ29uZGl0aW9uc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICB7YWNjZXNzVG9rZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlQVN1Ym1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCb3ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWNjb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3BlbkFNZW51ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbkFNZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxBY2NvdW50Q2lyY2xlIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlZpZXcgUHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGUvZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL2VkaXRcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRWRpdCBQcm9maWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlB1Ymxpc2hlZCBBZGRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZS9ldmVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZS9ldmVudHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57LyogPENyZWF0ZUljb24gLz4gKi99PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVibGlzaGVkIEV2ZW50c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGUvcmVxdWVzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZS9yZXF1ZXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdWJsaXNoZWQgUmVxdWVzdHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlL2Zhdm91cml0ZS1ldmVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZS9mYXZvdXJpdGUtZXZlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZhdm91cml0ZSBFdmVudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlL2Zhdm91cml0ZS1wcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL2Zhdm91cml0ZS1wcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPnsvKiA8Q3JlYXRlSWNvbiAvPiAqL308L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGYXZvdXJpdGUgcHJvZHVjdHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0L3JlcXVlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcG9zdC9yZXF1ZXN0XCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+ey8qIDxDcmVhdGVJY29uIC8+ICovfTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFkZCBQcm9kdWN0IFJlcXVlc3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTG9nb3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2xvZ299IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUljb25zfT5cclxuICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgNCBuZXcgbWFpbHNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIDxDaGF0TWVzc2FnZUljb24gLz5cclxuICAgICAgICAgICAgICB7LyogPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoT3Blbn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiB7b3BlbnNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYWNoQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hidG59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhY2hDbGlja31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgIHsvKiB7b3BlbnNlYXJjaCAmJiA8U2VhcmNoQXBwQmFySWNvbiAvPn0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgQXBwYmFyQmc6e1xyXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgY29sb3I6ICcjMzMzJ1xyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMnJlbVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZnVsbExpc3Q6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiBcIjVweCAwXCIsXHJcbiAgfSxcclxuICBtZW51SWNvbnM6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBzaWRlQmFyOiB7XHJcbiAgICB3aWR0aDogXCIyODBweFwiLFxyXG4gICAgXCImIC5NdWlEcmF3ZXItcGFwZXJcIjoge1xyXG4gICAgICB3aWR0aDogXCIyODBweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpQmFja2Ryb3Atcm9vdFwiOiB7XHJcbiAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGEuYWN0aXZlXCI6IHtcclxuICAgICAgY29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGEuYWN0aXZlIHN2Z1wiOiB7XHJcbiAgICAgIGNvbG9yOiBcInZhcigtLXRoZW1lKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgbGVmdDogXCIwXCIsXHJcbiAgICB6SW5kZXg6IFwiMTAwXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIHRvcDogXCIwXCIsXHJcbiAgICBoZWlnaHQ6IFwiNTdweFwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoYnRuOiB7XHJcbiAgICBoZWlnaHQ6IFwiMzVweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJ2YXIoLS10aGVtZSlcIixcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgIHBhZGRpbmc6IFwiNXB4IDEwcHhcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IERlc2t0b3BOYXZiYXIgZnJvbSAnLi9EZXNrdG9wJ1xyXG5pbXBvcnQgTW9iaWxlTmF2YmFyIGZyb20gJy4vTW9iaWxlJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGZvcm06e1xyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOntcclxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmcidcclxuICAgIH1cclxuICB9LFxyXG4gIG1vZGFsOntcclxuICAgIHBhZGRpbmc6ICcwLjVyZW0nXHJcbiAgfVxyXG59KSlcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZSA9PiB0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSlcclxuXHJcbiAgY29uc3QgSGVhZGVyQ29tcG9uZW50ID0gbWF0Y2hlcyA/IDxEZXNrdG9wTmF2YmFyIG1vZGFsT3Blbj17aGFuZGxlQ2xpY2tPcGVufSAvPiA6IDxNb2JpbGVOYXZiYXIgbW9kYWxPcGVuPXtoYW5kbGVDbGlja09wZW59IC8+XHJcblxyXG4gIGNvbnN0IENvbGxlZ2VOYW1lcyA9IFtcclxuICAgIHsgdGl0bGU6ICdUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb24nIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdvZGZhdGhlcid9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXI6IFBhcnQgSUknIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIERhcmsgS25pZ2h0JyB9LFxyXG4gICAgeyB0aXRsZTogJzEyIEFuZ3J5IE1lbicgfSxcclxuICAgIHsgdGl0bGU6IFwiU2NoaW5kbGVyJ3MgTGlzdFwiIH0sXHJcbiAgICB7IHRpdGxlOiAnUHVscCBGaWN0aW9uJyB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIFJldHVybiBvZiB0aGUgS2luZycgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgR29vZCwgdGhlIEJhZCBhbmQgdGhlIFVnbHknfSxcclxuICBdO1xyXG5cclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7SGVhZGVyQ29tcG9uZW50fVxyXG4gICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5TaWduVXA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICBUbyBzdWJzY3JpYmUgdG8gdGhpcyB3ZWJzaXRlLCBwbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzIGhlcmUuIFdlIHdpbGwgc2VuZCB1cGRhdGVzXHJcbiAgICAgICAgICAgIG9jY2FzaW9uYWxseS5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBpZD1cImZuYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBpZD1cImxuYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE5vXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICBpZD1cInVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e0NvbGxlZ2VOYW1lc31cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiQ29sbGVnZVwiIGZ1bGxXaWR0aCAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFNpZ25VcFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvPlxyXG4gIClcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiB1c2VOYXZiYXIgKCkge1xyXG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBuYXZCYXJSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gZSA9PiB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBlLnNyY0VsZW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3BcclxuXHJcbiAgICBpZiAobmF2QmFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2V0SXNTY3JvbGxlZChvZmZzZXQgPiBuYXZCYXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gaGFuZGxlU2Nyb2xsKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmF2QmFyUmVmLFxyXG4gICAgaXNTY3JvbGxlZFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2YmFyXHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gXCIuL0Zvb3Rlci9Cb3R0b21OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCB7IGNvbW1vblN0eWxlcywgZGVza3RvcFN0eWxlcywgbW9iaWxlU3R5bGVzLCBUYWJTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAuLi5jb21tb25TdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiBkZXNrdG9wU3R5bGVzLFxyXG4gIC8vIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieGxcIildOiBUYWJTdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IG1vYmlsZVN0eWxlcyxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbaXNMb2FkZWQsIHNldGlzTG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkoKHRoZW1lKSA9PiB0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG4gIGNvbnN0IEJvdHRvbU5hdiA9IG1hdGNoZXMgPyA8Qm90dG9tTmF2aWdhdGlvbiAvPiA6IG51bGw7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLldyYXBwZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk1haW59Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAge3Byb3BzLm5vZm9vdGVyID09IHRydWUgPyBcIlwiIDogPEZvb3RlciAvPn1cclxuICAgICAge3BhdGguaW5jbHVkZXMoXCJjaGF0XCIpID8gbnVsbCA6IEJvdHRvbU5hdn1cclxuICAgICAge2lzTG9hZGVkICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9PlxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gaW1wb3J0IHtcclxuLy8gICBzZWNvbmRhcnlEYXJrLCBiYWNrZ3JvdW5kQ29sb3IsIGJsdWVUZXh0LCBtYWluVGV4dFxyXG4vLyB9IGZyb20gJ3NyYy9fc3R5bGVzL2NvbG9ycydcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25TdHlsZXMgPSB7XHJcbiAgV3JhcHBlcjoge1xyXG4gICAgJyYgOjotd2Via2l0LXNjcm9sbGJhcic6IHtcclxuICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXHJcbiAgICB9LFxyXG4gICAgJyYgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tdGhlbWUpJyxcclxuICAgIH0sXHJcbiAgICAnJiBhJzoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyICFpbXBvcnRhbnQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgLmRpYWxvZ2VDdXN0b20gLk11aUdyaWQtc3BhY2luZy14cy04Jzp7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1hcmdpbjogJzAnXHJcbiAgICB9XHJcbiAgfSxcclxuICBNYWluOiB7XHJcbiAgICAnJiAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1zY3JvbGxiYXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICcmIC5pbWFnZS1nYWxsZXJ5LWNvbnRlbnQgLmltYWdlLWdhbGxlcnktc2xpZGUgLmltYWdlLWdhbGxlcnktaW1hZ2UnOntcclxuICAgICAgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDgwcHgpJyxcclxuICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGxvYWRlcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB3aWR0aDogJzEwMHZXJyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHpJbmRleDogOTk5OSxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuNyknXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZVN0eWxlcyA9IHtcclxuICBNYWluOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnNTZweCcsXHJcbiAgICAnJiAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1zY3JvbGxiYXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGJvdHRvbTogJzAnXHJcbiAgICB9LFxyXG4gICAgJyYgLnN3aXBlclNjcm9sbGJhckRyYWcnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTIsIDEzMCwgMjYpJ1xyXG4gICAgfSxcclxuICAgICcmIC5pbWFnZS1nYWxsZXJ5LWNvbnRlbnQgLmltYWdlLWdhbGxlcnktc2xpZGUgLmltYWdlLWdhbGxlcnktaW1hZ2UnOiB7XHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBvYmplY3RGaXQ6ICdjb250YWluJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlN0eWxlcyA9IHtcclxuICBNYWluOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnNTZweCdcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVza3RvcFN0eWxlcyA9IHtcclxuICBNYWluOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnNy41cmVtJ1xyXG4gIH0sXHJcbiAgV3JhcHBlcjoge1xyXG4gICAgJyYgLk11aUNvbnRhaW5lci1tYXhXaWR0aFhsJzoge1xyXG4gICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMTQwNHB4J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZmlsZVRvQmFzZTY0ID0gKGZpbGUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gdmFyIGZpbGUgPSBuZXcgRmlsZShbZmlsZW5hbWVdLCBmaWxlcGF0aCk7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy8gUmVhZCBmaWxlIGNvbnRlbnQgb24gZmlsZSBsb2FkZWQgZXZlbnRcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgIH07XG5cbiAgICAvLyBDb252ZXJ0IGRhdGEgdG8gYmFzZTY0XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRW1haWwgPSAodmFsKSA9PiB7XG4gIGxldCByZWdFbWFpbCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcmVnRW1haWwudGVzdCh2YWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUGhvbmU9ICh2YWwpID0+IHtcbiAgbGV0IHJlZ0VtYWlsID0gL15cXGR7MTB9JC87XG4gIHJldHVybiByZWdFbWFpbC50ZXN0KHZhbCk7XG59O1xuIiwiY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LmFwaV91cmw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbnVwKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvc2lnbi11cFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVNpZ251cChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL3NpbXBsZS1zaWduLXVwXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29vZ2xlU2lnbnVwKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXIvZ29vZ2xlLXNpZ24tdXBcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL2xvZ2luXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvZmlsZShkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvdXNlci91cGRhdGUvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVJbWcoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZmlsZS1pbWcvdXBkYXRlXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZFByb2R1Y3QoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0L1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0L2RlbGV0ZS9cIiArIGlkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVSZXF1ZXN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvZGVsZXRlL1wiICsgaWQ7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRFdmVudChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVFdmVudChkYXRhLCBpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZUV2ZW50KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudC9kZWxldGUvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmF2b3VyaXRlKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2Zhdm91cml0ZVwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlckZhdm91cml0ZSh1c2VyX2lkLCB0eXBlKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyLWZhdm91cml0ZS9cIiArIHVzZXJfaWQgKyBcIi9cIiArIHR5cGU7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwsIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRVc2VyUmVxdWVzdHModXNlcl9pZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0L3VzZXIvXCIgKyB1c2VyX2lkO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsLCApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkUHJvZHVjdFJlcXVlc3QoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvcHJvZHVjdC1yZXF1ZXN0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3RSZXF1ZXN0KGRhdGEsIGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvXCIgKyBpZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZEFQSShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9yZXNldC1wYXNzd29yZFwiO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwsIGRhdGEpIHtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoYFJlcXVlc3QgcmVqZWN0ZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURldmljZVRva2VuKHVzZXJfaWQsIHRva2VuKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9kZXZpY2UtdG9rZW4vXCIgKyB1c2VyX2lkICsgXCIvXCIgKyB0b2tlbjtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCwgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUVtYWlsKHRva2VuKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi92ZXJpZnktZW1haWwtdG9rZW4vXCIgKyB0b2tlbjtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCwgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuIiwiY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LmFwaV91cmw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IEVycm9yKGBSZXF1ZXN0IHJlamVjdGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsR2V0UmVxdWVzdCh1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEaWFsb2dzKHVzZXJfaWQsIHEpIHtcbiAgICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2RpYWxvZ3MvXCIgKyB1c2VyX2lkO1xuXG4gICAgaWYgKHEpIHtcbiAgICAgICAgdXJsID0gdXJsICsgcTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICByZXR1cm4gZ2VuZXJhbEdldFJlcXVlc3QodXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhkaWFsb2dfaWQsIHEpIHtcbiAgICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL21lc3NhZ2VzL1wiICsgZGlhbG9nX2lkO1xuXG4gICAgaWYgKHEpIHtcbiAgICAgICAgdXJsID0gdXJsICsgcTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICByZXR1cm4gZ2VuZXJhbEdldFJlcXVlc3QodXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShkYXRhKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9tZXNzYWdlXCI7XG5cbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWFkTXNnKHVzZXJfaWQpIHtcbiAgICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VucmVhZC1tZXNzYWdlL1wiICsgdXNlcl9pZDtcblxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgcmV0dXJuIGdlbmVyYWxHZXRSZXF1ZXN0KHVybClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBbGwoZGlhbG9nX2lkLCB1c2VyX2lkKSB7XG4gICAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9tYXJrLXJlYWQtZGlhbG9nL1wiICsgZGlhbG9nX2lkICsgJy8nICsgdXNlcl9pZDtcblxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgcmV0dXJuIGdlbmVyYWxHZXRSZXF1ZXN0KHVybClcbn0iLCJjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuYXBpX3VybDtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVW5pdmVyc2l0aWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VuaXZlcnNpdGllcy9nbG9iYWwvc2VhcmNoL1wiICsgcTtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDYXRlZ29yaWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvcHJvZHVjdC1jYXRlZ29yaWVzLXNlYXJjaC8ke3F9YDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDaXRpZXMocSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgYC9jaXRpZXMvc2VhcmNoLyR7cX1gO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3RzXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3QoaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3Byb2R1Y3QvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VsbGVyKGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91c2VyL1wiICsgaWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIjtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudENhdGVnb3JpZXMoKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudC1jYXRlZ29yaWVzXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdGllcygpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2NpdGllc1wiO1xyXG5cclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VEYXRhXCIsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudHMocSwgc2hvd2FsbCA9IGZhbHNlKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9ldmVudHNcIjtcclxuICBpZiAoc2hvd2FsbCkge1xyXG4gICAgdXJsID0gdXJsICsgXCIvXCIgKyBzaG93YWxsO1xyXG4gIH1cclxuICBpZiAocSkge1xyXG4gICAgdXJsID0gdXJsICsgcTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudChpZCkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZXZlbnQvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1ZXN0KGlkKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3QvXCIgKyBpZDtcclxuXHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRXZlbnRDYXRlZ29yaWVzKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIGAvZXZlbnQtY2F0ZWdvcmllcy1zZWFyY2gvJHtxfWA7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlT3JkZXIoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvb3JkZXJcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29udGFjdChkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9jb250YWN0XCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZpc2l0KGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3VzZXItdmlzaXRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZlZWRiYWNrKHEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL2ZlZWRiYWNrXCI7XHJcbiAgaWYgKHEpIHtcclxuICAgIHVybCA9IHVybCArIHE7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCdXlSZXF1ZXN0cyhxKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi9wcm9kdWN0LXJlcXVlc3Q/cGFnaW5hdGU9MjBcIjtcclxuICBpZiAocSkge1xyXG4gICAgdXJsID0gdXJsICsgcTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmRBUEkoZGF0YSkge1xyXG4gIGxldCB1cmwgPSBBUElfVVJMICsgXCIvZm9yZ290LXBhc3N3b3JkXCI7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICByZXR1cm4gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVQYXNzd29yZEFQSShkYXRhKSB7XHJcbiAgbGV0IHVybCA9IEFQSV9VUkwgKyBcIi91cGRhdGUtcGFzc3dvcmRcIjtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDaGF0VXBkYXRlKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtY2hhdC1tZXNzYWdlL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFZlcmlmeUVtYWlsKHVzZXJfaWQpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtdmVyaWZ5LWVtYWlsL1wiICsgdXNlcl9pZDtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3BlblN0YXR1cyhkaWFsb2dfaWQsIHN0YXR1cywgdXNlcl9pZCkge1xyXG4gIGxldCB1cmwgPVxyXG4gICAgQVBJX1VSTCArIFwiL3VwZGF0ZS1vcGVuLXN0YXR1cy9cIiArIGRpYWxvZ19pZCArIFwiL1wiICsgc3RhdHVzICsgXCIvXCIgKyB1c2VyX2lkO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgcmV0dXJuIGdlbmVyYWxQb3N0UmVxdWVzdCh1cmwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kRmVlZGJhY2tNZXNzYWdlKGRhdGEpIHtcclxuICBsZXQgdXJsID0gQVBJX1VSTCArIFwiL3NlbmQtZmVlZGJhY2stbWVzc2FnZVwiO1xyXG4gIHJldHVybiBnZW5lcmFsUG9zdFJlcXVlc3QodXJsLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhbFBvc3RSZXF1ZXN0KHVybCwgZGF0YSkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihgUmVxdWVzdCByZWplY3RlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IEJhZGdlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoU2VydmljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCBDaGF0U2VydmljZSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VydmljZXMvY2hhdC1zZXJ2aWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1bnJlYWRNc2cgfSBmcm9tIFwiLi4vLi4vYXBpcy9jaGF0LWFwaVwiO1xuaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tICdjb25uZWN0eWN1YmUnXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uLy4uL2FwcENvbmZpZydcbmltcG9ydCB7IGNoYXRVbmF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0VXNlclwiO1xuaW1wb3J0IHsgY2hhdFJlc2V0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhdENvbm5lY3RlZFwiO1xuaW1wb3J0IGNoYXRTZXJ2aWNlIGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlcy9jaGF0LXNlcnZpY2VcIjtcbmltcG9ydCB7IHVuU2VsZWN0ZWREaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zZWxlY3RlZERpYWxvZ1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IENoYXRNZXNzYWdlSWNvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRoVXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLnVzZXIpO1xuICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aF91c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICBjb25zdCBjaGF0VW5yZWFkQ291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNoYXRVbnJlYWRDb3VudCk7XG5cbiAgICBjb25zdCBbY291bnQsIHNldGNvdW50XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYXV0aFVzZXIgJiYgYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRVbmF1dGhlbnRpY2F0ZWQoKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRSZXNldCgpKVxuICAgICAgICAgICAgZGlzcGF0Y2godW5TZWxlY3RlZERpYWxvZygpKVxuICAgICAgICAgICAgbGV0IGluaXQgPSBBdXRoU2VydmljZS5pbml0KCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGluaXQgJiYgYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogYXV0aFVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoVXNlci5jb25uZWN0eWN1YmVfdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yKSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdW5yZWFkTXNnKGF1dGhVc2VyLmlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZGF0YSAmJiBzZXRjb3VudChkYXRhKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgY29ubmVjdENoYXQgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgQ1JFREVOVElBTFMgPSB7XG4gICAgICAgICAgICBlbWFpbDogYXV0aFVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogYXV0aFVzZXIuY29ubmVjdHljdWJlX3VzZXIucGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IENPTkZJRyA9IHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyZWQ6IChoYW5kbGVSZXNwb25zZSwgcmV0cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCBoYW5kbGVSZXNwb25zZSgpIGlmIHlvdSBkbyBub3Qgd2FudCB0byBwcm9jZXNzIGEgc2Vzc2lvbiBleHBpcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBhbiBlcnJvciB3aWxsIGJlIHJldHVybmVkIHRvIG9yaWdpbiByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZVJlc3BvbnNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSlMgU0RLIHYyXG4gICAgICAgICAgICAgICAgICAgIENvbm5lY3R5Q3ViZS5jcmVhdGVTZXNzaW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJldHJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgbGV0IGluaXQgPSBhd2FpdCAgQ29ubmVjdHlDdWJlLmluaXQoLi4uYXBwQ29uZmlnLmNvbm5lY3R5Q3ViZUNvbmZpZywgQ09ORklHKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5pdClcbiAgICAgIGlmKGluaXQpe1xuICAgICAgICAgIENvbm5lY3R5Q3ViZS5sb2dpbihDUkVERU5USUFMUylcbiAgICAgICAgICAgICAgLnRoZW4oKHNlc3Npb24pID0+IHsgXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbicsc2Vzc2lvbilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVcExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgQ29ubmVjdHlDdWJlLmNoYXQub25NZXNzYWdlTGlzdGVuZXIgPSBvbk1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50SWQgPSAyMDY2NjQ1O1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdncm91cGNoYXQnLFxuICAgICAgICAgICAgYm9keTogXCJIb3cgYXJlIHlvdSB0b2RheT9cIixcbiAgICAgICAgICAgIGV4dGVuc2lvbjoge1xuICAgICAgICAgICAgICAgIHNhdmVfdG9faGlzdG9yeTogMSxcbiAgICAgICAgICAgICAgICBkaWFsb2dfaWQ6ICc1ZjZmMzY3NmNhOGJmNDJhNzQ0YzNmNGInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFya2FibGU6IDFcbiAgICAgICAgfTtcblxuICAgICAgICBtZXNzYWdlID0gQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChvcHBvbmVudElkLCBtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBtZXNzYWdlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZSh1c2VySWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tDb25uZWN0eUN1YmUuY2hhdC5vbk1lc3NhZ2VMaXN0ZW5lcl0gY2FsbGJhY2s6JywgdXNlcklkLCBtZXNzYWdlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYXRDbGljaz0oKT0+e1xuICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8/c2lnbnVwPW9wZW4nKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NoYXQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlQ2hhdENsaWNrfT5cbiAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInlvdSBoYXZlc1wiIGNvbG9yPVwiaW5oZXJpdFwiPiAqL31cbiAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtjaGF0VW5yZWFkQ291bnR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YWNjZXNzVG9rZW4gPyAnL2NoYXQnIDogJy8/c2lnbnVwPW9wZW4nfT4gKi99XG4gICAgICAgICAgICAgIDxDaGF0SWNvbiAvPlxuICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlSWNvbjtcbiIsImltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSAnY29ubmVjdHljdWJlJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VMaW5rRnJvbVVJRCh1aWQpIHtcbiAgaWYgKCF1aWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBDb25uZWN0eUN1YmUuc3RvcmFnZS5wcml2YXRlVXJsKHVpZClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyYXRpb25BdHRhY2htZW50KGZpbGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgdWlkOiBmaWxlLnVpZCxcbiAgICB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSxcbiAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDQwMFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZUxpbmtGcm9tVUlEIH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWRcbiAgICB0aGlzLmF2YXRhciA9IFVzZXIuZ2V0QXZhdGFyVXJsKHVzZXIuYXZhdGFyKVxuICAgIHRoaXMubG9naW4gPSB1c2VyLmxvZ2luXG4gICAgdGhpcy5jdXN0b21fZGF0YSA9IHVzZXIuY3VzdG9tX2RhdGEgPyB1c2VyLmN1c3RvbV9kYXRhIDogJydcbiAgICB0aGlzLmZ1bGxfbmFtZSA9IHVzZXIuZnVsbF9uYW1lIHx8IHVzZXIubG9naW5cbiAgICB0aGlzLnBob25lID0gdXNlci5waG9uZVxuICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVzZXIuY3JlYXRlZF9hdFxuICAgIHRoaXMudXBkYXRlZF9hdCA9IHVzZXIudXBkYXRlZF9hdFxuICAgIHRoaXMubGFzdF9yZXF1ZXN0X2F0ID0gdXNlci5sYXN0X3JlcXVlc3RfYXRcbiAgfVxuICBzdGF0aWMgZ2V0QXZhdGFyVXJsKGF2YXRhclVJRCkge1xuICAgIHJldHVybiBnZXRJbWFnZUxpbmtGcm9tVUlEKGF2YXRhclVJRClcbiAgfVxufVxuIiwiaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tICdjb25uZWN0eWN1YmUnXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uLy4uL2FwcENvbmZpZydcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJ1xuLy8gaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL2N1cnJlbnRVc2VyJ1xuaW1wb3J0IHsgZ2V0SW1hZ2VMaW5rRnJvbVVJRCB9IGZyb20gJy4uL2hlbHBlcnMvZmlsZSdcbmltcG9ydCB7IGNoYXRBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0VXNlcidcbmltcG9ydCB7IGNoYXRDb25uZWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0Q29ubmVjdGVkJ1xuaW1wb3J0IHsgY2hhdFVucmVhZENvdW50IH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGF0VW5yZWFkJ1xuaW1wb3J0IHsgcHVzaE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL21lc3NhZ2VzJ1xuLy8gaW1wb3J0IHsgTG9nT3V0IH0gZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnXG5cbmNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgc3RhdGljIENVUlJFTlRfVVNFUl9TRVNTSU9OX0tFWSA9IFwiQ1VSUkVOVF9VU0VSX1NFU1NJT05fS0VZXCI7XG4gIHN0YXRpYyBERVZJQ0VfVE9LRU5fS0VZID0gXCJERVZJQ0VfVE9LRU5fS0VZXCI7XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDb25uZWN0eUN1YmUuaW5pdCguLi5hcHBDb25maWcuY29ubmVjdHlDdWJlQ29uZmlnKTtcbiAgICByZXR1cm4gcmVzO1xuXG4gICAgLy8gYXdhaXQgQ29ubmVjdHlDdWJlLmNyZWF0ZVNlc3Npb24oe1xuICAgIC8vICAgICBlbWFpbDondGVzdEB0ZXN0LmNvbScsXG4gICAgLy8gICAgIHBhc3N3b3JkOid0ZXN0J1xuICAgIC8vIH0pXG4gICAgLy8gcmV0dXJuIHRoaXMuYXV0b2xvZ2luKClcbiAgfVxuXG4gIC8vIGFzeW5jIGF1dG9sb2dpbigpIHtcbiAgLy8gICAgIGNvbnN0IGNoZWNrVXNlclNlc3Npb25Gcm9tU3RvcmUgPSBhd2FpdCB0aGlzLmdldFVzZXJTZXNzaW9uKClcbiAgLy8gICAgIGlmIChjaGVja1VzZXJTZXNzaW9uRnJvbVN0b3JlKSB7XG4gIC8vICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoY2hlY2tVc2VyU2Vzc2lvbkZyb21TdG9yZSlcbiAgLy8gICAgICAgICBhd2FpdCB0aGlzLnNpZ25Jbih7IGxvZ2luOiBkYXRhLmxvZ2luLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9KVxuICAvLyAgICAgICAgIHJldHVybiAnaG9tZSdcbiAgLy8gICAgIH0gZWxzZSB7IHJldHVybiAnYXV0aCcgfVxuICAvLyB9XG5cbiAgYXN5bmMgbG9naW4ocGFyYW1zKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IENvbm5lY3R5Q3ViZS5jcmVhdGVTZXNzaW9uKHBhcmFtcyk7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBuZXcgVXNlcihzZXNzaW9uLnVzZXIpO1xuICAgIHNlc3Npb24udXNlci5hdmF0YXIgPSBnZXRJbWFnZUxpbmtGcm9tVUlEKHNlc3Npb24udXNlci5hdmF0YXIpO1xuICAgIC8vIHdvcmsgYXJvdW5kXG4gICAgc2Vzc2lvbi51c2VyLmZ1bGxfbmFtZSA9IHNlc3Npb24udXNlci5sb2dpbjtcbiAgICBzdG9yZS5kaXNwYXRjaChjaGF0QXV0aGVudGljYXRlZChzZXNzaW9uKSk7XG4gICAgY29uc3QgY3VzdG9tU2Vzc2lvbiA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRVc2VyLCB7XG4gICAgICBwYXNzd29yZDogcGFyYW1zLnBhc3N3b3JkLFxuICAgIH0pO1xuICAgIHRoaXMuc2V0VXNlclNlc3Npb24oY3VzdG9tU2Vzc2lvbik7XG4gICAgdGhpcy5jb25uZWN0KGN1c3RvbVNlc3Npb24uaWQsIGN1c3RvbVNlc3Npb24ucGFzc3dvcmQpO1xuICB9XG5cbiAgLy8gYXN5bmMgc2lnblVwKHBhcmFtcykge1xuICAvLyAgICAgYXdhaXQgQ29ubmVjdHlDdWJlLmNyZWF0ZVNlc3Npb24oKVxuICAvLyAgICAgYXdhaXQgQ29ubmVjdHlDdWJlLnVzZXJzLnNpZ251cChwYXJhbXMpXG4gIC8vICAgICByZXR1cm4gdGhpcy5zaWduSW4ocGFyYW1zKVxuICAvLyB9XG5cbiAgYXN5bmMgY29ubmVjdCh1c2VySWQsIHBhc3N3b3JkKSB7XG4gICAgY29uc3QgaXNDb25uZWN0ZWQgPSBDb25uZWN0eUN1YmUuY2hhdC5pc0Nvbm5lY3RlZDtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYXRDb25uZWN0aW9uKCkpO1xuICAgICAgdGhpcy5nZXRVbnJlYWQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5jb25uZWN0KHsgdXNlcklkLCBwYXNzd29yZCB9KS50aGVuKChlcnJvciwgY29udGFjdGxpc3QpID0+IHtcbiAgICAgICAgdGhpcy5zZXRVcExpc3RlbmVycygpXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYXRDb25uZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLmdldFVucmVhZCgpXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgYXN5bmMgZ2V0VW5yZWFkKCkge1xuICAgIGF3YWl0IENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2VcbiAgICAgIC51bnJlYWRDb3VudCgpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChjaGF0VW5yZWFkQ291bnQocmVzdWx0LnRvdGFsKSlcbiAgICAgICAgY29uc29sZS5sb2coJ3VucmVhZCcsIHJlYXN1bHQpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHsgfSk7XG4gIH1cblxuICBhc3luYyBzZXRVcExpc3RlbmVycygpIHtcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5vbk1lc3NhZ2VMaXN0ZW5lciA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbk1lc3NhZ2UodXNlcklkLCBtZXNzYWdlKSB7XG4gICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgdXNlciA9IHVzZXIgPyBKU09OLnBhcnNlKHVzZXIpIDogXCJcIjtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB1c2VySWQsIHVzZXIuY29ubmVjdHljdWJlX3VzZXIuY29ubmVjdHljdWJlX2lkKVxuICAgIGlmICghdXNlciB8fCAhdXNlci5jb25uZWN0eWN1YmVfdXNlciB8fCB1c2VySWQgPT0gdXNlci5jb25uZWN0eWN1YmVfdXNlci5jb25uZWN0eWN1YmVfaWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG1lc3NhZ2UubWVzc2FnZSA9IG1lc3NhZ2UuYm9keVxuICAgIG1lc3NhZ2UuZGV2aWNlX3Rva2VuID0gdXNlci5kZXZpY2VfdG9rZW5cbiAgICBtZXNzYWdlLm5vdGlmID0gdHJ1ZVxuICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hNZXNzYWdlKG1lc3NhZ2UpKVxuXG4gIH1cblxuICBzZXRVc2VyU2Vzc2lvbih1c2VyU2Vzc2lvbikge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBdXRoU2VydmljZS5DVVJSRU5UX1VTRVJfU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KHVzZXJTZXNzaW9uKSlcbiAgfVxuXG4gIGdldFVzZXJTZXNzaW9uKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoU2VydmljZS5DVVJSRU5UX1VTRVJfU0VTU0lPTl9LRVkpO1xuICB9XG5cbiAgLy8gYXN5bmMgbG9nb3V0KCkge1xuICAvLyAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgLy8gICAgIGF3YWl0IENvbm5lY3R5Q3ViZS5sb2dvdXQoKVxuICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goTG9nT3V0KCkpXG4gIC8vIH1cbn1cblxuY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKVxuXG5PYmplY3QuZnJlZXplKGF1dGhTZXJ2aWNlKVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoU2VydmljZSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHNlYXJjaFVuaXZlcnNpdGllcyB9IGZyb20gJy4uLy4uL2FwaXMvZ2xvYmFsLWFwaSc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgc2ltcGxlU2lnbnVwLCBsb2dpbiwgZ29vZ2xlU2lnbnVwIH0gZnJvbSAnLi4vLi4vYXBpcy9hdXRoLWFwaSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCBWaXNpYmlsaXR5IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5JztcclxuaW1wb3J0IFZpc2liaWxpdHlPZmYgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlPZmYnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtOiB7XHJcbiAgICBwYWRkaW5nOiAnMS41cmVtIDIuMHJlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbjogJzIuNXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW9kYWw6IHtcclxuICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYigxNzcsIDkwLCAxNiknLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlDaXJjdWxhclByb2dyZXNzLWNvbG9yUHJpbWFyeSc6IHtcclxuICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEZvcm0gPSAoeyB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRmaXJzdG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0bGFzdG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1bml2ZXJzaXR5LCBzZXR1bml2ZXJzaXR5XSA9IHVzZVN0YXRlKHsgbmFtZTogJycgfSk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3dwYXNzd29yZCwgc2V0c2hvd3Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29uZmlybV9wYXNzd29yZCwgc2V0Y29uZmlybV9wYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3djb25maXJtX3Bhc3N3b3JkLCBzZXRzaG93Y29uZmlybV9wYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bob25lX25vLCBzZXRwaG9uZV9ub10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VycnMsIHNldGVycnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFt1bml2ZXJzaXRpZXMsIHNldHVuaXZlcnNpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JyYW5jaCwgc2V0YnJhbmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0bG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2J0bmxvYWRpbmcsIHNldGJ0bmxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtiYWNrZHJvcCwgc2V0YmFja2Ryb3BdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Zvcm1lcnJzLCBzZXRmb3JtZXJyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dSZWRpcmVjdCwgc2V0c2hvd1JlZGlyZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Zm9ybWVycnMoW10pO1xyXG4gICAgc3VibWl0U2lnblVwKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0TG9naW4gPSAoKSA9PiB7XHJcbiAgICBzZXRzaG93UmVkaXJlY3QoZmFsc2UpO1xyXG4gICAgc2V0Zm9ybWVycnMoW10pO1xyXG4gICAgc2V0YnRubG9hZGluZyh0cnVlKTtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH07XHJcbiAgICBsb2dpbihkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICBzZXRidG5sb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRmb3JtZXJycyhyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldGJ0bmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuYm9keS51c2VyO1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmJvZHkudXNlci5hcGlfdG9rZW47XHJcbiAgICAgICAgbGV0IGZhdkV2ZW50cyA9IHJlc3BvbnNlLmJvZHkuZmF2RXZlbnRzO1xyXG4gICAgICAgIGxldCBmYXZQcm9kdWN0cyA9IHJlc3BvbnNlLmJvZHkuZmF2UHJvZHVjdHM7XHJcbiAgICAgICAgc2V0TG9naW4odXNlciwgYWNjZXNzVG9rZW4sIGZhdkV2ZW50cywgZmF2UHJvZHVjdHMpO1xyXG4gICAgICAgIHNldHNob3dSZWRpcmVjdCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0U2lnblVwID0gKCkgPT4ge1xyXG4gICAgc2V0c2hvd1JlZGlyZWN0KGZhbHNlKTtcclxuICAgIHNldGJ0bmxvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyBsZXQgdW5pdmVyc2l0eV9pZCA9IHVuaXZlcnNpdGllcy5maW5kKFxyXG4gICAgLy8gICAoaXRlbSkgPT4gaXRlbS5uYW1lID09IHVuaXZlcnNpdHkubmFtZVxyXG4gICAgLy8gKTtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAvLyBmaXJzdF9uYW1lOiBmaXJzdG5hbWUsXHJcbiAgICAgIC8vIGxhc3RfbmFtZTogbGFzdG5hbWUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgLy8gdW5pdmVyc2l0eV9pZDogdW5pdmVyc2l0eV9pZC5pZCxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAvLyBwaG9uZV9udW1iZXI6IHBob25lX25vLFxyXG4gICAgICAvLyBicmFuY2g6IGJyYW5jaCxcclxuICAgIH07XHJcbiAgICBzaW1wbGVTaWdudXAoZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgc2V0YnRubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0Zm9ybWVycnMocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmJvZHkudXNlcjtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5ib2R5LnVzZXIuYXBpX3Rva2VuO1xyXG4gICAgICAgIHNldGJ0bmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGxldCBmYXZFdmVudHMgPSByZXNwb25zZS5ib2R5LmZhdkV2ZW50cztcclxuICAgICAgICBsZXQgZmF2UHJvZHVjdHMgPSByZXNwb25zZS5ib2R5LmZhdlByb2R1Y3RzO1xyXG4gICAgICAgIHNldExvZ2luKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKTtcclxuICAgICAgICBzZXRzaG93UmVkaXJlY3QodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldExvZ2luID0gKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLCBhY2Nlc3NUb2tlbik7XHJcbiAgICBkaXNwYXRjaChhdXRoZW50aWNhdGVkKHVzZXIsIGFjY2Vzc1Rva2VuLCBmYXZFdmVudHMsIGZhdlByb2R1Y3RzKSk7XHJcbiAgICBpZiAodXNlci5pc19jb21wbGV0ZSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlL2VkaXQnKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlU3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiByZXNwb25zZS5wcm9maWxlT2JqLmVtYWlsLFxyXG4gICAgICBnb29nbGVfaWQ6IHJlc3BvbnNlLmdvb2dsZUlkLFxyXG4gICAgfTtcclxuICAgIC8vIHJldHVyblxyXG5cclxuICAgIGdvb2dsZVNpZ251cChkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICBzZXRidG5sb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRmb3JtZXJycyhyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuYm9keS51c2VyO1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmJvZHkudXNlci5hcGlfdG9rZW47XHJcbiAgICAgICAgc2V0YnRubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgbGV0IGZhdkV2ZW50cyA9IHJlc3BvbnNlLmJvZHkuZmF2RXZlbnRzO1xyXG4gICAgICAgIGxldCBmYXZQcm9kdWN0cyA9IHJlc3BvbnNlLmJvZHkuZmF2UHJvZHVjdHM7XHJcbiAgICAgICAgc2V0TG9naW4odXNlciwgYWNjZXNzVG9rZW4sIGZhdkV2ZW50cywgZmF2UHJvZHVjdHMpO1xyXG4gICAgICAgIHNldHNob3dSZWRpcmVjdCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZUdvb2dsZUZhaWx1cmUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vIGFsZXJ0KCdPb3BzISEgdGhlcmUgd2FzIHNvbWUgcHJvYmxlbSB3aGlsZSBsb2dnaW5nIGluLicpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja2Ryb3BDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldGJhY2tkcm9wKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZWZvcm0gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHR5cGUgPT0gJ2xvZ2luJykge1xyXG4gICAgICBzdWJtaXRMb2dpbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZXJyID0ge307XHJcbiAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZCkge1xyXG4gICAgICBlcnIubm9fc2FtZSA9ICd0cnVlJztcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgIGVyci5wd2RfbGVuZ3RoID0gJ3RydWUnO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCF1bml2ZXJzaXR5Lm5hbWUpIHtcclxuICAgIC8vICAgZXJyLnVuaXZlcnNpdHkgPSBcInRydWVcIjtcclxuICAgIC8vIH1cclxuICAgIHNldGVycnMoZXJyKTtcclxuICAgIGxldCBoYXNfZXJyb3IgPSBPYmplY3Qua2V5cyhlcnIpLmxlbmd0aDtcclxuICAgIGlmICghcGFyc2VJbnQoaGFzX2Vycm9yKSkge1xyXG4gICAgICBoYW5kbGVTdWJtaXQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVmb3JtRGF0YSA9IChlLCB0eXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmFsKCdzZXQnICsgdHlwZSArIFwiKCdcIiArIGUudGFyZ2V0LnZhbHVlICsgXCInKVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVbmlTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICBzZXRsb2FkaW5nKHRydWUpO1xyXG4gICAgc2VhcmNoVW5pdmVyc2l0aWVzKHZhbHVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0dW5pdmVyc2l0aWVzKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvdG9Gb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvZm9yZ290LXBhc3N3b3JkJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJnb29nbGVCdG5cIj5cclxuICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEfVxyXG4gICAgICAgICAgYnV0dG9uVGV4dD17XHJcbiAgICAgICAgICAgIHR5cGUgPT0gJ2xvZ2luJyA/ICdMb2dpbiB3aXRoIEdvb2dsZScgOiAnU2lnblVwIHdpdGggR29vZ2xlJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZVN1Y2Nlc3N9XHJcbiAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlRmFpbHVyZX1cclxuICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+b3I8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG9uU3VibWl0PXt2YWxpZGF0ZWZvcm19PlxyXG4gICAgICAgIHt0eXBlID09ICdzaWdudXAnICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwiZmlyc3RuYW1lXCIpfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xhc3RuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJsYXN0bmFtZVwiKX1cclxuICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCAnZW1haWwnKX1cclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7dHlwZSA9PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTm9cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YWx1ZT17cGhvbmVfbm99XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCBcInBob25lX25vXCIpfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXZlcnNpdGllc31cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24ubmFtZSA9PT0gdmFsdWUubmFtZX1cclxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1bml2ZXJzaXR5fVxyXG4gICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVVuaVNlYXJjaH1cclxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwidW5pdmVyc2l0eVwiKX1cclxuICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHNldHVuaXZlcnNpdHkoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBjb2xsZWdlXCJcclxuICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5JbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJhbXMuSW5wdXRQcm9wcy5lbmRBZG9ybm1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICB7ZXJyc1sndW5pdmVyc2l0eSddICYmIChcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCI+UGxlYXNlIHNlbGVjdCBhIHVuaXZlcnNpdHkuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQnJhbmNoXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnJhbmNoXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YWx1ZT17YnJhbmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJicmFuY2hcIil9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJyYW5jaFwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93cGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsICdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldHNob3dwYXNzd29yZCghc2hvd3Bhc3N3b3JkKX0+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIHtzaG93cGFzc3dvcmQgPyA8VmlzaWJpbGl0eSAvPiA6IDxWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0eXBlID09ICdzaWdudXAnICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT17c2hvd2NvbmZpcm1fcGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtX3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgJ2NvbmZpcm1fcGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybV9wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0c2hvd2NvbmZpcm1fcGFzc3dvcmQoIXNob3djb25maXJtX3Bhc3N3b3JkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAge3Nob3djb25maXJtX3Bhc3N3b3JkID8gPFZpc2liaWxpdHkgLz4gOiA8VmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZXJyc1snbm9fc2FtZSddICYmIChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgUGFzc3dvcmQgbXVzdCBtYXRjaCB3aXRoIGNvbmZpcm0gcGFzc3dvcmRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtlcnJzWydwd2RfbGVuZ3RoJ10gJiYgKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiPlBhc3N3b3JkIG11c3QgaGF2ZSA4IGNoYXJhY3RlcnM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2Zvcm1lcnJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgZm9ybWVycnMubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiBrZXk9e2BlcnItJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0eXBlID09ICdsb2dpbicgPyAnTG9naW4nIDogJ1NpZ25VcCd9XHJcblxyXG4gICAgICAgICAge2J0bmxvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXsyMH0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8cCBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXtnb3RvRm9yZ290UGFzc3dvcmR9PlxyXG4gICAgICAgIEZvcmdvdCBwYXNzd29yZCA/IGNsaWNrIDxzcGFuPmhlcmU8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Nob3dSZWRpcmVjdCAmJiAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBSZWRpcmVjdGluZyB0byBwcm9maWxlIHBhZ2UhIXsnICd9XHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXsyMH0gLz5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XHJcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSBcIi4vQXV0aEZvcm1cIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCBBY2NvdW50Qm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiO1xyXG5pbXBvcnQgeyB1bmF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnXHJcbmltcG9ydCBjaXJjbGVjZW50ZXIgZnJvbSAnLi8uLi8uLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9jaXJjbGVDZW50ZXIuc3ZnJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImIC5NdWlUYWItdGV4dENvbG9yUHJpbWFyeS5NdWktc2VsZWN0ZWRcIjoge1xyXG4gICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlUYWJzLWluZGljYXRvclwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpVGFiLXRleHRDb2xvclByaW1hcnlcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNkZmRmZGZcIixcclxuICAgIH0sXHJcbiAgICBcIiYgLk11aUJ1dHRvbi1jb250YWluZWRQcmltYXJ5XCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBMb2dpbjoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG1hcmdpblRvcDogXCI1cmVtXCIsXHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICB3aWR0aDogXCI0NDBweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNDQwcHhcIixcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB6SW5kZXg6IFwiLTFcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBjaXJjbGVjZW50ZXIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06e1xyXG4gICAgICBtYXJnaW5Ub3A6ICcxLjVyZW0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBJbWc6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOntcclxuICAgICAgJyYgaW1nJzp7XHJcbiAgICAgICAgaGVpZ2h0OiAnNjVweCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3JhbmdlOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tdGhlbWUpXCIsXHJcbiAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gIH0sXHJcbiAgdHJhbnNwYXJlbnQ6IHtcclxuICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgIGhlaWdodDogXCIyNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICB9LFxyXG4gIGRlc2t0b3BNZW51OntcclxuICAgICcmIC5NdWlQb3BvdmVyLXBhcGVyJzp7XHJcbiAgICAgIG1pbldpZHRoOiAnMjAwcHgnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCdcclxuICAgIH0sXHJcbiAgICAnJiBsaSc6e1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5jb25zdCBMb2dpbl9SZWdpc3RlciA9ICh7IGlzTW9iaWxlID0gZmFsc2UsIG1vZGFsT3BlbiA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcGVuQU1lbnUsIHNldG9wZW5BTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5CTWVudSwgc2V0b3BlbkJNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbkNNZW51LCBzZXRvcGVuQ01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuRE1lbnUsIHNldG9wZW5ETWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYXRpb24uc2VhcmNoLmluZGV4T2YoXCJzaWdudXA9b3BlblwiKSAhPSAtMSkge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChtb2RhbE9wZW4gIT0gb3Blbikge1xyXG4gICAgICBzZXRPcGVuKG1vZGFsT3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdG9nZ2xlTW9kYWwoKVxyXG4gIH0sIFttb2RhbE9wZW5dKTtcclxuXHJcblxyXG5cclxuICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdG9nZ2xlTW9kYWwpXHJcblxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoX3VzZXIuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhfdXNlci51c2VyKTtcclxuICAvLyBjb25zb2xlLmxvZyhcIlVzZXJcIiwgdXNlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbmRleCA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoaW5kZXgpO1xyXG4gIH07XHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICBnb3RvUHJvZmlsZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ290b1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b1Byb2ZpbGVFZGl0ID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9lZGl0XCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b0V2ZW50cyA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvZXZlbnRzXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b1JlcXVlc3RlID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9yZXF1ZXN0c1wiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9GYXZFdmVudHMgPSAoKSA9PntcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvZmF2b3VyaXRlLWV2ZW50c1wiKTtcclxuICB9O1xyXG4gIGNvbnN0IGdvdG9GYXZQcm9kdWN0cyA9ICgpID0+e1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9mYXZvdXJpdGUtcHJvZHVjdHNcIik7XHJcbiAgfTtcclxuICBjb25zdCBnb3RvQWRkUmVxdWVzdCA9ICgpID0+e1xyXG4gICAgcm91dGVyLnB1c2goXCIvcG9zdC9yZXF1ZXN0XCIpO1xyXG4gIH07XHJcbiAgY29uc3QgZ290b1Jlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL3Jlc2V0LXBhc3N3b3JkXCIpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICBkaXNwYXRjaCh1bmF1dGhlbnRpY2F0ZWQoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQVN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuQU1lbnUoIW9wZW5BTWVudSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVCU3VibWVudSA9ICgpID0+IHtcclxuICAgIHNldG9wZW5CTWVudSghb3BlbkJNZW51KTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZUNTdWJtZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0b3BlbkNNZW51KCFvcGVuQ01lbnUpO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlRFN1Ym1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRvcGVuRE1lbnUoIW9wZW5ETWVudSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEF2YXRhclxyXG4gICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYXV0aC1tZW51XCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXt1c2VyLmZpcnN0X25hbWUgPyBjbGFzc2VzLm9yYW5nZSA6IGNsYXNzZXMudHJhbnNwYXJlbnR9XHJcbiAgICAgID5cclxuICAgICAgICB7dXNlci5maXJzdF9uYW1lID8gdXNlci5maXJzdF9uYW1lLmNoYXJBdCgwKSA6IDxBY2NvdW50Q2lyY2xlSWNvbiAvPn1cclxuICAgICAgPC9BdmF0YXI+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJhdXRoLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIC8vIG9wZW49eyEhbWVudVBvc2l0aW9ufVxyXG4gICAgICAgIC8vIG9uQ2xvc2U9eygpID0+IHNldE1lbnVQb3NpdGlvbih7fSkgfHwgaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgLy8gYW5jaG9yUmVmZXJlbmNlPVwiYW5jaG9yUG9zaXRpb25cIlxyXG4gICAgICAgIC8vIGFuY2hvclBvc2l0aW9uPXttZW51UG9zaXRpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2t0b3BNZW51fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDxMaXN0PiAqL31cclxuICAgICAgICAgIDxNZW51SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlQVN1Ym1lbnV9PlxyXG4gICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgIHtvcGVuQU1lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbkFNZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvUHJvZmlsZX0+VmlldyBQcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9SZXNldFBhc3N3b3JkfT5SZXNldCBQYXNzd29yZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVCU3VibWVudX0+XHJcbiAgICAgICAgICAgIEFkc1xyXG4gICAgICAgICAgICB7b3BlbkJNZW51ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5CTWVudX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b1Byb2ZpbGV9PlB1Ymxpc2hlZCBBZHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b0ZhdlByb2R1Y3RzfT5GYXZvdXJpdGUgUHJvZHVjdHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDxNZW51SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlQ1N1Ym1lbnV9PlxyXG4gICAgICAgICAgICBFdmVudHNcclxuICAgICAgICAgICAge29wZW5DTWVudSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuQ01lbnV9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2dvdG9FdmVudHN9PlB1Ymxpc2hlZCBFdmVudHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Z290b0ZhdkV2ZW50c30+RmF2b3VyaXRlIEV2ZW50czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEU3VibWVudX0+XHJcbiAgICAgICAgICAgIFJlcXVlc3RzXHJcbiAgICAgICAgICAgIHtvcGVuRE1lbnUgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbkRNZW51fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvUmVxdWVzdGV9PlB1Ymxpc2hlZCBSZXF1ZXN0czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtnb3RvQWRkUmVxdWVzdH0+QWRkIFByb2R1Y3QgUmVxdWVzdDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuXHJcbiAgICAgIDxEaWFsb2dcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJMb2dpblwiIC8+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJTaWduVXBcIiAvPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPFN3aXBlYWJsZVZpZXdzIGluZGV4PXt2YWx1ZX0gb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Mb2dpbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuSW1nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSB3aWR0aD1cIjEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEF1dGhGb3JtIHR5cGU9XCJsb2dpblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxBdXRoRm9ybSB0eXBlPVwic2lnbnVwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbl9SZWdpc3RlcjtcclxuIiwiZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZID0gJ1NFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZJ1xuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCA9IFwiU0VMRUNURURfRklMVEVSX1JFU0VUXCI7XG5leHBvcnQgY29uc3QgUEFHRV9QUk9EVUNUUyA9ICdQQUdFX1BST0RVQ1RTJ1xuXG5leHBvcnQgY29uc3QgVkFMSURfUk9VVEVTPVtcbiAgICB7XG4gICAgICAgIHJvdXRlOididXktcmVxdWVzdCcsXG4gICAgICAgIHRpdGxlOidCdXkgUmVxdWVzdCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzJyxcbiAgICAgICAgdGl0bGU6J1Byb2R1Y3RzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICByb3V0ZToncHJvZHVjdHMtYnV5JyxcbiAgICAgICAgdGl0bGU6J1Byb2R1Y3RzIEJ1eSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzLXNlbGwnLFxuICAgICAgICB0aXRsZTonUHJvZHVjdHMgU2VsbCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm91dGU6J3Byb2R1Y3RzLXNlYXJjaCcsXG4gICAgICAgIHRpdGxlOidQcm9kdWN0cyBTZWFyY2gnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvdXRlOidldmVudHMnLFxuICAgICAgICB0aXRsZTonRXZlbnRzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICByb3V0ZTonZmVlZGJhY2snLFxuICAgICAgICB0aXRsZTonRmVlZGJhY2snXG4gICAgfSxcbl0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vLi4vLi4vLi4vc3JjL0xheW91dFwiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IExvY2FsT2ZmZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIjtcbmltcG9ydCBQaG9uZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZVwiO1xuaW1wb3J0IFN1YnRpdGxlc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TdWJ0aXRsZXNcIjtcbmltcG9ydCBEZXRhaWxzSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RldGFpbHNcIjtcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgeyBzZW5kRmVlZGJhY2tNZXNzYWdlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc3JjL2FwaXMvZ2xvYmFsLWFwaVwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xuaW1wb3J0IE11aUFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XG5pbXBvcnQgeyBpc0VtYWlsLCBpc1Bob25lIH0gZnJvbSBcIi4vLi4vLi4vLi4vc3JjL1V0aWxzL2hlbHBlcnNcIjtcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XG4gIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBzZWN0aW9uOiB7XG4gICAgcGFkZGluZzogXCI1cmVtIDBcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICBmb3JtOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICB9LFxuICBwZFRpdGxlOiB7XG4gICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgYm9yZGVyOiBcIiNjY2Mgc29saWQgMXB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiLFxuICAgIFwiJjo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKC9zdGF0aWMvaW1hZ2VzL2NpcmNsZUNlbnRlci5zdmcpXCIsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgIHRvcDogXCI1NSVcIixcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgICBoZWlnaHQ6IFwiNTQwcHhcIixcbiAgICAgIHdpZHRoOiBcIjU0MHB4XCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgekluZGV4OiBcIi0xXCIsXG4gICAgfSxcbiAgICBcIiY6OmFmdGVyXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKC9zdGF0aWMvaW1hZ2VzL2NpcmNsZUNlbnRlci5zdmcpXCIsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgIGJvdHRvbTogXCItMTVyZW1cIixcbiAgICAgIGxlZnQ6IFwiLTI1cmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiNTByZW1cIixcbiAgICAgIHdpZHRoOiBcIjUwcmVtXCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgekluZGV4OiBcIi0xXCIsXG4gICAgfSxcbiAgfSxcbiAgY2FyZEJvZHk6IHtcbiAgICBwYWRkaW5nOiBcIjJyZW0gIWltcG9ydGFudFwiLFxuICB9LFxuICBmb3JtSW5wdXQ6IHtcbiAgICBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLFxuICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSxcbiAgZm9ybUlucHV0RnVsbFdpZHRoOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBmb3JtSW5wdXRGaWVsZDoge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIFwiJiAuTXVpVGV4dEZpZWxkLXJvb3RcIjoge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1JbnB1dEZpZWxkRnVsbDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBcIiYgLk11aVRleHRGaWVsZC1yb290XCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgfSxcbiAgICAgIFwiJiB0ZXh0YXJlYVwiOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcInNvbGlkIDFweCAjY2NjXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgfSxcbiAgICAgIFwiJiB0ZXh0YXJlYTpmb2N1c1wiOiB7XG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3JkZXJCb3R0b206IFwic29saWQgMXB4ICNGRDgxMThcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIEJ1dHRvbjoge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZEODExOFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICBtYXhXaWR0aDogXCIyMDBweFwiLFxuICB9LFxuICBJbWFnZXM6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgXCImIGltZ1wiOiB7XG4gICAgICB3aWR0aDogXCIxMjVweFwiLFxuICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXG4gICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxuICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggIzMzMyBcIixcbiAgICB9LFxuICAgIFwiJiB2aWRlb1wiOiB7XG4gICAgICB3aWR0aDogXCIxMjVweFwiLFxuICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXG4gICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxuICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggIzMzMyBcIixcbiAgICB9LFxuICB9LFxuICBBZGRCdG46IHtcbiAgICBib3JkZXI6IFwic29saWQgMXB4ICMzMzNcIixcbiAgICB3aWR0aDogXCIxMjVweFwiLFxuICAgIGhlaWdodDogXCIxMjVweFwiLFxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICB9LFxuICBkaWFsb2dlQ3VzdG9tOiB7XG4gICAgXCImIC5NdWlHcmlkLXNwYWNpbmcteHMtOFwiOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXJnaW46IFwiMFwiLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlZWRiYWNrRm9ybSh7IHVzZXIsIGZvcm10eXBlID0gXCJhZGRcIiwgcHJvZHVjdCA9IHt9IH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwaG9uZSwgc2V0cGhvbmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldG1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbZXJycywgc2V0ZXJyc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2JhY2tkcm9wLCBzZXRiYWNrZHJvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtZXJycywgc2V0Zm9ybWVycnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc25hY2tiYXIsIHNldHNuYWNrYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NuYWNrYmFyTXNnLCBzZXRzbmFja2Jhck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NuYWNrYmFyVHlwZSwgc2V0c25hY2tiYXJUeXBlXSA9IHVzZVN0YXRlKFwic3VjY2Vzc1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0LmltYWdlcykge1xuICAgICAgbGV0IHVwZGF0ZWRJbWFnZXMgPSBbXTtcbiAgICAgIGxldCB1cGRhdGVkSW1hZ2VzSW5mbyA9IFtdO1xuICAgICAgcHJvZHVjdC5pbWFnZXMubWFwKChmaWxlRGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgdXBkYXRlZEltYWdlcyA9IHVwZGF0ZWRJbWFnZXMuY29uY2F0KGZpbGVEYXRhLmJhc2U2NF9kYXRhKTtcbiAgICAgICAgdXBkYXRlZEltYWdlc0luZm8gPSB1cGRhdGVkSW1hZ2VzSW5mby5jb25jYXQoe1xuICAgICAgICAgIHR5cGU6IGZpbGVEYXRhLnR5cGUsXG4gICAgICAgICAgZGF0YTogZmlsZURhdGEubGluayxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICsgMSA9PSBwcm9kdWN0LmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICBzZXRmaWxlcyh1cGRhdGVkSW1hZ2VzKTtcbiAgICAgICAgICBzZXRmaWxlc0luZm8odXBkYXRlZEltYWdlc0luZm8pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9kdWN0XSk7XG5cbiAgY29uc3QgdXBkYXRlZm9ybURhdGEgPSAoZSwgdHlwZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBldmFsKFwic2V0XCIgKyB0eXBlICsgXCIoJ1wiICsgZS50YXJnZXQudmFsdWUgKyBcIicpXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICBzZXRmb3JtZXJycyhcIlwiKTtcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFtZXNzYWdlKSB7XG4gICAgICBzZXRmb3JtZXJycyhbXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghaXNFbWFpbChlbWFpbCkpIHtcbiAgICAgIHNldGZvcm1lcnJzKFtcIkVtYWlsIG5vdCB2YWxpZFwiXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghaXNQaG9uZShwaG9uZSkpIHtcbiAgICAgIHNldGZvcm1lcnJzKFtcIlBob25lIG5vdCB2YWxpZFwiXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaXNfdmFsaWQgPSBjaGVja1ZhbGlkYXRpb24oKTtcblxuICAgIGlmICghaXNfdmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0YmFja2Ryb3AodHJ1ZSk7XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgcGhvbmU6IHBob25lLFxuICAgIH07XG5cbiAgICBzZW5kRmVlZGJhY2tNZXNzYWdlKGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRiYWNrZHJvcChmYWxzZSk7XG4gICAgICAvLyAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgLy8gICAgIHNldGZvcm1lcnJzKHJlc3BvbnNlLm1zZyk7XG5cbiAgICAgIC8vICAgICBzZXRzbmFja2Jhcih0cnVlKTtcbiAgICAgIC8vICAgICBzZXRzbmFja2Jhck1zZyhcIkZvcm0gbm90IHN1Ym1pdHRlZC5UcnkgYWdhaW4gbGF0ZXJcIik7XG4gICAgICAvLyAgICAgc2V0c25hY2tiYXJUeXBlKFwiZXJyb3JcIik7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICBzZXRzbmFja2Jhcih0cnVlKTtcbiAgICAgIHNldHNuYWNrYmFyTXNnKFwiRmVlZGJhY2sgc2VudCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICBzZXRzbmFja2JhclR5cGUoXCJzdWNjZXNzXCIpO1xuICAgIC8vICAgc2V0bmFtZShcIlwiKTtcbiAgICAvLyAgIHNldGVtYWlsKFwiXCIpO1xuICAgIC8vICAgc2V0bWVzc2FnZShcIlwiKTtcbiAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcbiAgICAgIC8vICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVzbmFja2JhciA9ICgpID0+IHtcbiAgICBzZXRzbmFja2Jhcighc25hY2tiYXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXtzbmFja2Jhcn1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlc25hY2tiYXJ9XG4gICAgICA+XG4gICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVzbmFja2Jhcn0gc2V2ZXJpdHk9e3NuYWNrYmFyVHlwZX0+XG4gICAgICAgICAge3NuYWNrYmFyTXNnfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9TbmFja2Jhcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAge2JhY2tkcm9wICYmIChcbiAgICAgICAgICA8QmFja2Ryb3BcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH1cbiAgICAgICAgICAgIG9wZW49e2JhY2tkcm9wfVxuICAgICAgICAgICAgLy8gb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICA8L0JhY2tkcm9wPlxuICAgICAgICApfVxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs5fSBtZD17OX0gc209ezh9IHhzPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEJvZHl9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBGZWVkYmFja1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VidGl0bGVzSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUlucHV0RmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1JbnB1dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsT2ZmZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtSW5wdXRGaWVsZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZWZvcm1EYXRhKGUsIFwiZW1haWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCI+RW1haWwgbm90IHZhbGlkPC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1JbnB1dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUlucHV0RmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVmb3JtRGF0YShlLCBcInBob25lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiPkVtYWlsIG5vdCB2YWxpZDwvVHlwb2dyYXBoeT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZm9ybUlucHV0fSAke2NsYXNzZXMuZm9ybUlucHV0RnVsbFdpZHRofWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsc0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmZvcm1JbnB1dEZpZWxkfSAke2NsYXNzZXMuZm9ybUlucHV0RmllbGRGdWxsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlZm9ybURhdGEoZSwgXCJtZXNzYWdlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5CdXR0b259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWVycnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBmb3JtZXJycy5tYXAoKG1zZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIga2V5PXtgZXJyb3Ike2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21zZ31cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJMU16Y2lJR2hsYVdkb2REMGlOVE0zSWlCMmFXVjNRbTk0UFNJd0lEQWdOVE0zSURVek55SStEUW9nSUR4bklHbGtQU0pGYkd4cGNITmxYelZmWTI5d2VTSWdaR0YwWVMxdVlXMWxQU0pGYkd4cGNITmxJRFVnWTI5d2VTSWdabWxzYkQwaWJtOXVaU0lnYzNSeWIydGxQU0oyWVhJb0xTMTBhR1Z0WlNraUlITjBjbTlyWlMxM2FXUjBhRDBpTVRBd0lpQnZjR0ZqYVhSNVBTSXdMakExTVNJK0RRb2dJQ0FnUEdOcGNtTnNaU0JqZUQwaU1qWTRMalVpSUdONVBTSXlOamd1TlNJZ2NqMGlNalk0TGpVaUlITjBjbTlyWlQwaWJtOXVaU0l2UGcwS0lDQWdJRHhqYVhKamJHVWdZM2c5SWpJMk9DNDFJaUJqZVQwaU1qWTRMalVpSUhJOUlqSXhPQzQxSWlCbWFXeHNQU0p1YjI1bElpOCtEUW9nSUR3dlp6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLTJkMTRiZTE4MDQxODA0MTM3ZjZjMTdiZmZiYWExYTdlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvZnQtOTgzY2EwYWMzYTczNzFmN2ZlMWQ4MDhiMTI4N2U0MTEucG5nXCI7IiwiZXhwb3J0IGNvbnN0IEFERF9WSVNJVEVEID0gJ0FERF9WSVNJVEVEJ1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9WSVNJVEVEID0gJ1JFTU9WRV9WSVNJVEVEJ1xuZXhwb3J0IGNvbnN0IEZFVENIX1ZJU0lURUQgPSAnRkVUQ0hfVklTSVRFRCciLCJleHBvcnQgY29uc3QgQVVUSEVOVElDQVRFRCA9IFwiQVVUSEVOVElDQVRFRFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ERVZJQ0VfVE9LRU4gPSBcIlVQREFURV9ERVZJQ0VfVE9LRU5cIjtcbmV4cG9ydCBjb25zdCBVTkFVVEhFTlRJQ0FURUQgPSBcIlVOQVVUSEVOVElDQVRFRFwiOyIsImV4cG9ydCBjb25zdCBTSE9XX01PREFMID0gXCJTSE9XX01PREFMXCI7XG5leHBvcnQgY29uc3QgQ0xPU0VfTU9EQUwgPSBcIkNMT1NFX01PREFMXCI7XG4iLCJleHBvcnQgY29uc3QgQ0hBVF9DT05ORUNURUQgPSBcIkNIQVRfQ09OTkVDVEVEXCI7XG5leHBvcnQgY29uc3QgQ0hBVF9SRVNFVCA9IFwiQ0hBVF9SRVNFVFwiO1xuIiwiZXhwb3J0IGNvbnN0IENIQVRfVU5SRUFEID0gXCJDSEFUX1VOUkVBRFwiO1xuZXhwb3J0IGNvbnN0IENIQVRfVU5SRUFEX1JFU0VUID0gXCJDSEFUX1VOUkVBRF9SRVNFVFwiO1xuIiwiZXhwb3J0IGNvbnN0IENIQVRfQVVUSEVOVElDQVRFRFxuICAgID0gXCJDSEFUX0FVVEhFTlRJQ0FURURcIjtcbmV4cG9ydCBjb25zdCBDSEFUX1VOQVVUSEVOVElDQVRFRCA9IFwiQ0hBVF9VTkFVVEhFTlRJQ0FURURcIjtcbmV4cG9ydCBjb25zdCBDSEFUX1VQREFURV9VU0VSID0gXCJDSEFUX1VQREFURV9VU0VSXCI7IiwiZXhwb3J0IGNvbnN0IEZFVENIX0RJQUxPR1MgPSBcIkZFVENIX0RJQUxPR1NcIjtcbmV4cG9ydCBjb25zdCBBRERfRElBTE9HID0gXCJBRERfRElBTE9HXCI7XG5leHBvcnQgY29uc3QgU09SVF9ESUFMT0dTID0gXCJTT1JUX0RJQUxPR1NcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRElBTE9HID0gXCJVUERBVEVfRElBTE9HXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJQUxPRyA9IFwiREVMRVRFX0RJQUxPR1wiO1xuIiwiZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFUyA9IFwiU0VUX01FU1NBR0VTXCI7XG5leHBvcnQgY29uc3QgUFVTSF9NRVNTQUdFID0gXCJQVVNIX01FU1NBR0VcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfQUxMX01FU1NBR0VTID0gXCJERUxFVEVfQUxMX01FU1NBR0VTXCI7XG5leHBvcnQgY29uc3QgTEFaWV9GRVRDSF9NRVNTQUdFUyA9IFwiTEFaWV9GRVRDSF9NRVNTQUdFU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NRVNTQUdFUyA9IFwiVVBEQVRFX01FU1NBR0VTXCI7XG4iLCJleHBvcnQgY29uc3QgU0VMRUNURURfRElBTE9HID0gXCJTRUxFQ1RFRF9ESUFMT0dcIjtcbmV4cG9ydCBjb25zdCBVTl9TRUxFQ1RFRF9ESUFMT0cgPSBcIlVOX1NFTEVDVEVEX0RJQUxPR1wiO1xuIiwiZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJTID0gXCJGRVRDSF9VU0VSU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9VU0VSUyA9IFwiQUREX1VTRVJTXCI7XG4iLCJpbXBvcnQgeyBVTkFVVEhFTlRJQ0FURUQsIEFVVEhFTlRJQ0FURUQsIFVQREFURV9ERVZJQ0VfVE9LRU4gfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlZCA9ICh1c2VyLCBhY2Nlc3NUb2tlbix1c2VyRmF2RXZlbnRzLHVzZXJGYXZQcm9kdWN0cykgPT4gKHtcbiAgdHlwZTogQVVUSEVOVElDQVRFRCxcbiAgcGF5bG9hZDogeyB1c2VyLCBhY2Nlc3NUb2tlbiwgdXNlckZhdkV2ZW50cyAsIHVzZXJGYXZQcm9kdWN0cyB9LFxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckRldmljZVRva2VuID0gKHRva2VuKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfREVWSUNFX1RPS0VOLFxuICBwYXlsb2FkOiB7IHRva2VuIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHVuYXV0aGVudGljYXRlZCA9ICgpID0+ICh7XG4gIHR5cGU6IFVOQVVUSEVOVElDQVRFRCxcbn0pO1xuIiwiaW1wb3J0IHsgU0hPV19NT0RBTCwgQ0xPU0VfTU9EQUwgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvYXV0aE1vZGFsXCI7XG5cbmV4cG9ydCBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9XX01PREFMLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gKHtcbiAgdHlwZTogQ0xPU0VfTU9EQUwsXG59KTtcbiIsImltcG9ydCB7IENIQVRfQ09OTkVDVEVELCBDSEFUX1JFU0VUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2NoYXRDb25uZWN0ZWRcIjtcblxuZXhwb3J0IGNvbnN0IGNoYXRDb25uZWN0aW9uID0gKCkgPT4gKHtcbiAgICB0eXBlOiBDSEFUX0NPTk5FQ1RFRCxcbiAgICAvLyBwYXlsb2FkOiB7IGN1cnJlbnRVc2VyLCBhY2Nlc3NUb2tlbiB9LFxufSk7XG5leHBvcnQgY29uc3QgY2hhdFJlc2V0ID0gKCkgPT4gKHtcbiAgICB0eXBlOiBDSEFUX1JFU0VULFxuICAgIC8vIHBheWxvYWQ6IHsgY3VycmVudFVzZXIsIGFjY2Vzc1Rva2VuIH0sXG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IGNoYXRVbmF1dGhlbnRpY2F0ZWQgPSAoKSA9PiAoe1xuLy8gICAgIHR5cGU6IENIQVRfVU5BVVRIRU5USUNBVEVELFxuLy8gfSk7XG4iLCJpbXBvcnQgeyBDSEFUX1VOUkVBRCwgQ0hBVF9VTlJFQURfUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVucmVhZFwiO1xuXG5leHBvcnQgY29uc3QgY2hhdFVucmVhZENvdW50ID0gKGNvdW50KSA9PiAoe1xuICAgIHR5cGU6IENIQVRfVU5SRUFELFxuICAgIGNvdW50OiBjb3VudFxufSk7XG5leHBvcnQgY29uc3QgY2hhdFVucmVhZFJlc2V0ID0gKCkgPT4gKHtcbiAgICB0eXBlOiBDSEFUX1VOUkVBRF9SRVNFVCxcbn0pO1xuIiwiaW1wb3J0IHsgQ0hBVF9BVVRIRU5USUNBVEVELCBDSEFUX1VOQVVUSEVOVElDQVRFRCwgQ0hBVF9VUERBVEVfVVNFUn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2NoYXRVc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0QXV0aGVudGljYXRlZCA9IChjdXJyZW50VXNlciwgYWNjZXNzVG9rZW4pID0+ICh7XG4gICAgdHlwZTogQ0hBVF9BVVRIRU5USUNBVEVELFxuICAgIHBheWxvYWQ6IHsgY3VycmVudFVzZXIsIGFjY2Vzc1Rva2VuIH0sXG59KTtcbmV4cG9ydCBjb25zdCBjaGF0VXBkYXRlVXNlciA9IChjdXJyZW50VXNlciwgYWNjZXNzVG9rZW4pID0+ICh7XG4gICAgdHlwZTogQ0hBVF9VUERBVEVfVVNFUixcbiAgICBwYXlsb2FkOiB7IGN1cnJlbnRVc2VyLCBhY2Nlc3NUb2tlbiB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjaGF0VW5hdXRoZW50aWNhdGVkID0gKCkgPT4gKHtcbiAgICB0eXBlOiBDSEFUX1VOQVVUSEVOVElDQVRFRCxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgRkVUQ0hfRElBTE9HUyxcbiAgQUREX0RJQUxPRyxcbiAgU09SVF9ESUFMT0dTLFxuICBVUERBVEVfRElBTE9HLFxuICBERUxFVEVfRElBTE9HLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvZGlhbG9nc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEaWFsb2dzID0gKGRpYWxvZ3MpID0+ICh7XG4gIHR5cGU6IEZFVENIX0RJQUxPR1MsXG4gIGRpYWxvZ3M6IGRpYWxvZ3MsXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVEaWFsb2cgPSAoZGlhbG9nKSA9PiAoeyB0eXBlOiBVUERBVEVfRElBTE9HLCBkaWFsb2cgfSk7XG5leHBvcnQgY29uc3QgYWRkTmV3RGlhbG9nID0gKGRpYWxvZykgPT4gKHsgdHlwZTogQUREX0RJQUxPRywgZGlhbG9nOiBkaWFsb2cgfSk7XG5leHBvcnQgY29uc3Qgc29ydERpYWxvZ3MgPSAobWVzc2FnZSwgY291bnQpID0+ICh7XG4gIHR5cGU6IFNPUlRfRElBTE9HUyxcbiAgbWVzc2FnZTogbWVzc2FnZSxcbiAgY291bnQ6IGNvdW50LFxufSk7XG5leHBvcnQgY29uc3QgZGVsZXRlRGlhbG9nID0gKGRpYWxvZ0lkKSA9PiAoeyB0eXBlOiBERUxFVEVfRElBTE9HLCBkaWFsb2dJZCB9KTtcbiIsImltcG9ydCB7XG4gIFNFVF9NRVNTQUdFUyxcbiAgUFVTSF9NRVNTQUdFLFxuICBERUxFVEVfQUxMX01FU1NBR0VTLFxuICBMQVpZX0ZFVENIX01FU1NBR0VTLFxuICBVUERBVEVfTUVTU0FHRVMsXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9tZXNzYWdlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0TWVzc2FnZXMgPSAobXNncywgZGlhbG9nKSA9PiAoe1xuICB0eXBlOiBTRVRfTUVTU0FHRVMsXG4gIG1zZ3MsXG4gIGRpYWxvZ1xufSk7XG5leHBvcnQgY29uc3QgbGF6eUZldGNoTWVzc2FnZXMgPSAoZGlhbG9nSWQsIGhpc3RvcnkpID0+ICh7XG4gIHR5cGU6IExBWllfRkVUQ0hfTUVTU0FHRVMsXG4gIGRpYWxvZ0lkLFxuICBoaXN0b3J5LFxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlTWVzc2FnZXMgPSAoZGlhbG9nSWQsIG1zZ0lkLCBtc2cpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NRVNTQUdFUyxcbiAgZGlhbG9nSWQsXG4gIG1zZ0lkLFxuICBtc2csXG59KTtcbmV4cG9ydCBjb25zdCBwdXNoTWVzc2FnZSA9ICggbXNnKSA9PiAoe1xuICB0eXBlOiBQVVNIX01FU1NBR0UsXG4gIG1zZ1xufSk7XG5leHBvcnQgY29uc3QgZGVsZXRlQWxsTWVzc2FnZXMgPSAoKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfQUxMX01FU1NBR0VTLFxufSk7XG4iLCJpbXBvcnQge1xuICBTRUxFQ1RFRF9ESUFMT0csXG4gIFVOX1NFTEVDVEVEX0RJQUxPRyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL3NlbGVjdGVkRGlhbG9nXCI7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZERpYWxvZyA9IChkaWFsb2cpID0+ICh7IHR5cGU6IFNFTEVDVEVEX0RJQUxPRywgZGlhbG9nIH0pO1xuZXhwb3J0IGNvbnN0IHVuU2VsZWN0ZWREaWFsb2cgPSAoZGlhbG9nKSA9PiAoe1xuICB0eXBlOiBVTl9TRUxFQ1RFRF9ESUFMT0csXG4gIGRpYWxvZyxcbn0pOyIsImltcG9ydCB7XG4gIEZFVENIX1VTRVJTLFxuICBBRERfVVNFUlNcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL3VzZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gdXNlcnMgPT4gKHsgdHlwZTogRkVUQ0hfVVNFUlMsIHVzZXJzIH0pXG5leHBvcnQgY29uc3QgYWRkVXNlcnMgPSB1c2VycyA9PiAoeyB0eXBlOiBBRERfVVNFUlMsIHVzZXJzIH0pIiwiZXhwb3J0IGNvbnN0IEJUTl9UWVBFID0ge1xuICBESUFMT0c6IDEsXG4gIENPTlRBQ1RTOiAyLFxuICBDUkVBVEVfR1JPVVA6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBESUFMT0dfVFlQRSA9IHtcbiAgUFJJVkFURTogMyxcbiAgR1JPVVA6IDIsXG4gIEJST0FEQ0FTVDogMSxcbiAgUFVCTElDX0NIQU5ORUw6IDRcbn0iLCJpbXBvcnQgQ29ubmVjdHlDdWJlIGZyb20gXCJjb25uZWN0eWN1YmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlTGlua0Zyb21VSUQodWlkKSB7XG4gIGlmICghdWlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIENvbm5lY3R5Q3ViZS5zdG9yYWdlLnByaXZhdGVVcmwodWlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmF0aW9uQXR0YWNobWVudChmaWxlKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogZmlsZS5zaXplLFxuICAgIHVpZDogZmlsZS51aWQsXG4gICAgdHlwZTogZmlsZS5jb250ZW50X3R5cGUsXG4gICAgbmFtZTogZmlsZS5uYW1lLFxuICAgIHdpZHRoOiA0MDAsXG4gICAgaGVpZ2h0OiA0MDAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZUxpbmtGcm9tVUlEIH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihkaWFsb2cpIHtcbiAgICB0aGlzLmlkID0gZGlhbG9nLl9pZCB8fCBkaWFsb2cuaWRcbiAgICB0aGlzLnR5cGUgPSBkaWFsb2cudHlwZVxuICAgIHRoaXMueG1wcF9yb29tX2ppZCA9IGRpYWxvZy54bXBwX3Jvb21famlkXG4gICAgdGhpcy54bXBwX3R5cGUgPSBkaWFsb2cudHlwZSA9PT0gMyA/ICdjaGF0JyA6IGRpYWxvZy50eXBlID8gJ2dyb3VwY2hhdCcgOiAnJ1xuICAgIHRoaXMubmFtZSA9IGRpYWxvZy5uYW1lXG4gICAgdGhpcy5waG90byA9IERpYWxvZy5nZXRBdmF0YXJVcmwoZGlhbG9nLnBob3RvKVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkaWFsb2cuZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGlhbG9nLnhtcHBfcm9vbV9qaWQgfHwgZGlhbG9nLnJvb21famlkXG4gICAgdGhpcy51c2VyX2lkID0gZGlhbG9nLnVzZXJfaWRcbiAgICB0aGlzLmFkbWluc19pZHMgPSBkaWFsb2cuYWRtaW5zX2lkc1xuICAgIHRoaXMub2NjdXBhbnRzX2lkcyA9IGRpYWxvZy5vY2N1cGFudHNfaWRzXG4gICAgdGhpcy51cGRhdGVkX2RhdGUgPSBEYXRlLnBhcnNlKGRpYWxvZy51cGRhdGVkX2F0KSB8fCBEYXRlLm5vdygpXG4gICAgdGhpcy5sYXN0X21lc3NhZ2VfZGF0ZV9zZW50ID0gZGlhbG9nLmxhc3RfbWVzc2FnZV9kYXRlX3NlbnQgfHwgRGF0ZS5wYXJzZShkaWFsb2cudXBkYXRlZF9hdCkgLyAxMDAwIHx8IERhdGUucGFyc2UoZGlhbG9nLmNyZWF0ZWRfYXQpIC8gMTAwMFxuICAgIHRoaXMubGFzdF9tZXNzYWdlID0gZGlhbG9nLmxhc3RfbWVzc2FnZSB8fCAnJ1xuICAgIHRoaXMubGFzdF9tZXNzYWdlX2lkID0gZGlhbG9nLmxhc3RfbWVzc2FnZV9pZFxuICAgIHRoaXMubGFzdF9tZXNzYWdlX3VzZXJfaWQgPSBkaWFsb2cubGFzdF9tZXNzYWdlX3VzZXJfaWRcbiAgICB0aGlzLnVucmVhZF9tZXNzYWdlc19jb3VudCA9IGRpYWxvZy51bnJlYWRfbWVzc2FnZXNfY291bnRcbiAgICB0aGlzLnVucmVhZF9tZXNzYWdlc19pZHMgPSBkaWFsb2cudW5yZWFkX21lc3NhZ2VzX2lkc1xuICAgIHRoaXMucGlubmVkX21lc3NhZ2VzX2lkcyA9IGRpYWxvZy5waW5uZWRfbWVzc2FnZXNfaWRzXG4gIH1cblxuICBzdGF0aWMgZ2V0QXZhdGFyVXJsKGF2YXRhclVJRCkge1xuICAgIHJldHVybiBnZXRJbWFnZUxpbmtGcm9tVUlEKGF2YXRhclVJRClcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0SW1hZ2VMaW5rRnJvbVVJRCB9IGZyb20gJy4uL2hlbHBlcnMvZmlsZSdcblxuZXhwb3J0IGNvbnN0IFNUQVRVU19QRU5ESU5HID0gMFxuZXhwb3J0IGNvbnN0IFNUQVRVU19TRU5UID0gMVxuZXhwb3J0IGNvbnN0IFNUQVRVU19ERUxJVkVSRUQgPSAyXG5leHBvcnQgY29uc3QgU1RBVFVTX1JFQUQgPSAzXG5cbmV4cG9ydCBjb25zdCBHUk9VUF9DSEFUX0FMRVJUX1RZUEUgPSB7XG4gIENSRUFURTogXCJjcmVhdGVcIlxufVxuXG5jb25zdCBkZWZhdWx0TWVzc2FnZSA9IHtcbiAgaWQ6ICcnLFxuICBib2R5OiAnJyxcbiAgZGlhbG9nX2lkOiAnJyxcbiAgZGF0ZV9zZW50OiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgYXR0YWNobWVudHM6IG51bGwsXG4gIHNlbmRlcl9pZDogbnVsbCxcbiAgc2VuZGVyOiBudWxsXG59XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IobXNnID0gZGVmYXVsdE1lc3NhZ2UsIGN1cnJlbnRVc2VyKSB7XG4gICAgdGhpcy5pZCA9IG1zZy5pZCB8fCBtc2cuX2lkXG4gICAgdGhpcy5ib2R5ID0gbXNnLmJvZHkgfHwgbXNnLm1lc3NhZ2VcbiAgICB0aGlzLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSA9IG1zZy5ncm91cF9jaGF0X2FsZXJ0X3R5cGUgfHwgbnVsbFxuICAgIHRoaXMuZGlhbG9nX2lkID0gbXNnLmNoYXRfZGlhbG9nX2lkIHx8IChtc2cuZXh0ZW5zaW9uICYmIG1zZy5leHRlbnNpb24uZGlhbG9nX2lkKVxuICAgIHRoaXMuZGF0ZV9zZW50ID0gbXNnLmRhdGVfc2VudCB8fCAobXNnLmV4dGVuc2lvbiAmJiBtc2cuZXh0ZW5zaW9uLmRhdGVfc2VudCkgfHwgTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMClcbiAgICB0aGlzLnNlbmRfc3RhdGUgPSBNZXNzYWdlLmdldFNlbmRTdGF0ZShtc2csIGN1cnJlbnRVc2VyKVxuICAgIHRoaXMuYXR0YWNobWVudCA9IE1lc3NhZ2UuZ2V0QXR0YWNobWVudChtc2cpXG4gICAgdGhpcy5zZW5kZXJfaWQgPSBtc2cuc2VuZGVyX2lkIHx8IChtc2cuZXh0ZW5zaW9uICYmIG1zZy5leHRlbnNpb24uc2VuZGVyX2lkKVxuICAgIHRoaXMuc2VuZGVyID0gbXNnLnNlbmRlcl9pZFxuICB9XG5cbiAgc3RhdGljIGdldEF0dGFjaG1lbnQobXNnKSB7XG4gICAgaWYgKG1zZy5hdHRhY2htZW50cyAmJiBtc2cuYXR0YWNobWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYXR0YWNobWVudHMgPSB7IC4uLm1zZy5hdHRhY2htZW50c1swXSB9XG4gICAgICBjb25zdCBwYXJzZUxpbmsgPSBnZXRJbWFnZUxpbmtGcm9tVUlEKG1zZy5hdHRhY2htZW50c1swXS51aWQpXG4gICAgICBhdHRhY2htZW50cy51cmwgPSBwYXJzZUxpbmtcbiAgICAgIHJldHVybiBbYXR0YWNobWVudHNdXG4gICAgfSBlbHNlIGlmIChtc2c/LmV4dGVuc2lvbj8uYXR0YWNobWVudHMgJiYgbXNnLmV4dGVuc2lvbi5hdHRhY2htZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhdHRhY2htZW50cyA9IHsgLi4ubXNnLmV4dGVuc2lvbi5hdHRhY2htZW50c1swXSB9XG4gICAgICBjb25zdCBwYXJzZUxpbmsgPSBnZXRJbWFnZUxpbmtGcm9tVUlEKG1zZy5leHRlbnNpb24uYXR0YWNobWVudHNbMF0udWlkKVxuICAgICAgYXR0YWNobWVudHMudXJsID0gcGFyc2VMaW5rXG4gICAgICByZXR1cm4gW2F0dGFjaG1lbnRzXVxuICAgIH0gZWxzZSByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3RhdGljIGdldFNlbmRTdGF0ZShtc2csIGN1cnJlbnRVc2VyKSB7XG4gICAgaWYgKG1zZz8ucmVhZF9pZHM/LmZpbmQoX2lkID0+IF9pZCAhPT0gY3VycmVudFVzZXIpKSB7XG4gICAgICByZXR1cm4gU1RBVFVTX1JFQURcbiAgICB9XG4gICAgaWYgKG1zZz8uZGVsaXZlcmVkX2lkcz8uZmluZChtc2cgPT4gbXNnLmRlbGl2ZXJlZF9pZHMgIT09IGN1cnJlbnRVc2VyKSkge1xuICAgICAgcmV0dXJuIFNUQVRVU19ERUxJVkVSRURcbiAgICB9XG4gICAgcmV0dXJuIFNUQVRVU19QRU5ESU5HXG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRmFrZU1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICB0aGlzLmF0dGFjaG1lbnQgPSBtc2cuZXh0ZW5zaW9uLmF0dGFjaG1lbnRzXG4gICAgdGhpcy5ib2R5ID0gbXNnLmJvZHlcbiAgICB0aGlzLmRhdGVfc2VudCA9IG1zZy5leHRlbnNpb24uZGF0ZV9zZW50XG4gICAgdGhpcy5kaWFsb2dfaWQgPSBtc2cuZXh0ZW5zaW9uLmRpYWxvZ19pZFxuICAgIHRoaXMuaWQgPSBtc2cuaWRcbiAgICB0aGlzLnNlbmRfc3RhdGUgPSAwXG4gICAgdGhpcy5zZW5kZXIgPSB1bmRlZmluZWRcbiAgICB0aGlzLnNlbmRlcl9pZCA9IG1zZy5leHRlbnNpb24uc2VuZGVyX2lkXG4gIH1cbn0iLCJpbXBvcnQgeyBnZXRJbWFnZUxpbmtGcm9tVUlEIH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWRcbiAgICB0aGlzLmF2YXRhciA9IFVzZXIuZ2V0QXZhdGFyVXJsKHVzZXIuYXZhdGFyKVxuICAgIHRoaXMubG9naW4gPSB1c2VyLmxvZ2luXG4gICAgdGhpcy5jdXN0b21fZGF0YSA9IHVzZXIuY3VzdG9tX2RhdGEgPyB1c2VyLmN1c3RvbV9kYXRhIDogJydcbiAgICB0aGlzLmZ1bGxfbmFtZSA9IHVzZXIuZnVsbF9uYW1lIHx8IHVzZXIubG9naW5cbiAgICB0aGlzLnBob25lID0gdXNlci5waG9uZVxuICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVzZXIuY3JlYXRlZF9hdFxuICAgIHRoaXMudXBkYXRlZF9hdCA9IHVzZXIudXBkYXRlZF9hdFxuICAgIHRoaXMubGFzdF9yZXF1ZXN0X2F0ID0gdXNlci5sYXN0X3JlcXVlc3RfYXRcbiAgfVxuICBzdGF0aWMgZ2V0QXZhdGFyVXJsKGF2YXRhclVJRCkge1xuICAgIHJldHVybiBnZXRJbWFnZUxpbmtGcm9tVUlEKGF2YXRhclVJRClcbiAgfVxufVxuIiwiaW1wb3J0IHsgQUREX1ZJU0lURUQsIFJFTU9WRV9WSVNJVEVELCBGRVRDSF9WSVNJVEVEIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL1BhZ2VWaXNpdGVkXCI7XG5cbmxldCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1ZJU0lURUQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnIsIGFjdGlvbi5wYXlsb2FkLml0ZW0pXG4gICAgICAgICAgICBsZXQgYXJyID0gc3RhdGVcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pdGVtKSB7XG4gICAgICAgICAgICAgICAgYXJyID0gc3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZC5pdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFycjtcblxuICAgICAgICBjYXNlIFJFTU9WRV9WSVNJVEVEOlxuICAgICAgICAgICAgbGV0IGFycjIgPSBzdGF0ZVxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLml0ZW0pIHtcbiAgICAgICAgICAgICAgICBhcnIyID0gc3RhdGUucG9wKGFjdGlvbi5wYXlsb2FkLml0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVTkFVVEhFTlRJQ0FURUQsIEFVVEhFTlRJQ0FURUQsIFVQREFURV9ERVZJQ0VfVE9LRU59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9hdXRoXCI7XG5pbXBvcnQgbG9jYWxmb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnXG5pbXBvcnQgeyBTRUxFQ1RFRF9GSUxURVJfUkVTRVQsIFNFTEVDVEVEX0ZJTFRFUl9VTklWRVJTSVRZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHt9LFxuICBhY2Nlc3NUb2tlbjogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFVVEhFTlRJQ0FURUQ6XG4gICAgICBjb25zdCB7IHVzZXIsIGFjY2Vzc1Rva2VuLCB1c2VyRmF2RXZlbnRzLCB1c2VyRmF2UHJvZHVjdHMgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRmF2RXZlbnRzXCIsIHVzZXJGYXZFdmVudHMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRmF2UHJvZHVjdHNcIiwgdXNlckZhdlByb2R1Y3RzKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfREVWSUNFX1RPS0VOOlxuICAgICAgbGV0IHsgdG9rZW4gfSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICBsZXQgdSA9IHN0YXRlLnVzZXJcbiAgICAgIHUuZGV2aWNlX3Rva2VuID0gdG9rZW5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1KSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogdSxcblxuICAgICAgfTtcblxuXG4gICAgY2FzZSBVTkFVVEhFTlRJQ0FURUQ6XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgXCJcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc1Rva2VuXCIsIFwiXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRmF2RXZlbnRzXCIsIFwiXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRmF2UHJvZHVjdHNcIiwgXCJcIik7XG4gICAgICBsb2NhbGZvcmFnZS5yZW1vdmVJdGVtKCdmY21fdG9rZW4nKVxuICAgICAgbG9jYWxmb3JhZ2UucmVtb3ZlSXRlbSgnZmNtX3Rva2VuX3VzZXInKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VMRUNURURfRklMVEVSX1VOSVZFUlNJVFksICcnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFTEVDVEVEX0ZJTFRFUl9SRVNFVCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBsZXQgZGF0YSA9IFwiXCI7XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxldCB1c2VyRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEgPyBKU09OLnBhcnNlKHVzZXJEYXRhKSA6IFwiXCI7XG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbkRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICAgICAgbGV0IHVzZXJGYXZFdmVudHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRmF2RXZlbnRzXCIpO1xuICAgICAgICBsZXQgdXNlckZhdlByb2R1Y3RzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckZhdlByb2R1Y3RzXCIpO1xuICAgICAgICBhY2Nlc3NUb2tlbkRhdGEgPVxuICAgICAgICAgIGFjY2Vzc1Rva2VuRGF0YSAmJiBhY2Nlc3NUb2tlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBhY2Nlc3NUb2tlbkRhdGFcbiAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgaWYgKHVzZXJEYXRhICYmIGFjY2Vzc1Rva2VuRGF0YSkge1xuICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VyOiB1c2VyRGF0YSxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbkRhdGEsXG4gICAgICAgICAgICB1c2VyRmF2RXZlbnRzOiB1c2VyRmF2RXZlbnRzLFxuICAgICAgICAgICAgdXNlckZhdlByb2R1Y3RzOiB1c2VyRmF2UHJvZHVjdHNcblxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhIDogaW5pdGlhbFN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTSE9XX01PREFMLCBDTE9TRV9NT0RBTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9hdXRoTW9kYWxcIjtcblxubGV0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvdzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSE9XX01PREFMOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIENMT1NFX01PREFMOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENIQVRfQ09OTkVDVEVELCBDSEFUX1JFU0VUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2NoYXRDb25uZWN0ZWRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBmYWxzZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIENIQVRfQ09OTkVDVEVEOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY2FzZSBDSEFUX1JFU0VUOlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ0hBVF9VTlJFQURfUkVTRVQsIENIQVRfVU5SRUFEIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL2NoYXRVbnJlYWRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSAwLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQ0hBVF9VTlJFQUQ6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYWN0aW9uLmNvdW50KTtcblxuICAgICAgICBjYXNlIENIQVRfVU5SRUFEX1JFU0VUOlxuICAgICAgICAgICAgcmV0dXJuIDA7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENIQVRfQVVUSEVOVElDQVRFRCwgQ0hBVF9VTkFVVEhFTlRJQ0FURUQsIENIQVRfVVBEQVRFX1VTRVIgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvY2hhdFVzZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3VycmVudFVzZXIgPSBudWxsLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQ0hBVF9BVVRIRU5USUNBVEVEOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuY3VycmVudFVzZXJcblxuICAgICAgICBjYXNlIENIQVRfVVBEQVRFX1VTRVI6IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oY3VycmVudFVzZXIudXNlciwgYWN0aW9uLnBheWxvYWQuY3VycmVudFVzZXIpXG4gICAgICAgICAgICBjdXJyZW50VXNlci51c2VyID0gcmVzdWx0XG4gICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50VXNlciB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDSEFUX1VOQVVUSEVOVElDQVRFRDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFVzZXI7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICBGRVRDSF9ESUFMT0dTLFxuICBBRERfRElBTE9HLFxuICBTT1JUX0RJQUxPR1MsXG4gIFVQREFURV9ESUFMT0csXG4gIERFTEVURV9ESUFMT0csXG59IGZyb20gXCIuLi9hY3Rpb25UeXBlcy9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IHVwZGF0ZURpYWxvZywgc29ydGVkRGlhbG9nIH0gZnJvbSBcIi4vcmVkdWNlci1mdW5jdGlvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChkaWFsb2dzID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ESUFMT0dTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5kaWFsb2dzO1xuXG4gICAgY2FzZSBVUERBVEVfRElBTE9HOiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB1cGRhdGVEaWFsb2coYWN0aW9uLCBkaWFsb2dzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY2FzZSBBRERfRElBTE9HOlxuICAgICAgcmV0dXJuIFthY3Rpb24uZGlhbG9nLCAuLi5kaWFsb2dzXTtcblxuICAgIGNhc2UgU09SVF9ESUFMT0dTOiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0ZWREaWFsb2coYWN0aW9uLCBkaWFsb2dzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfRElBTE9HOiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBkaWFsb2dzLmZpbHRlcigoZGlhbG9nKSA9PiBkaWFsb2cuaWQgIT09IGFjdGlvbi5kaWFsb2dJZCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGlhbG9ncztcbiAgfVxufTtcblxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXV0aF91c2VyIGZyb20gXCIuL2F1dGhcIjtcbmltcG9ydCBhdXRoX21vZGFsIGZyb20gXCIuL2F1dGhNb2RhbFwiO1xuaW1wb3J0IGNoYXRfdXNlciBmcm9tIFwiLi9jaGF0VXNlclwiO1xuaW1wb3J0IGRpYWxvZ3MgZnJvbSBcIi4vZGlhbG9nc1wiO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgc2VsZWN0ZWREaWFsb2cgZnJvbSBcIi4vc2VsZWN0ZWREaWFsb2dcIjtcbmltcG9ydCBwYWdlVmlzaXRlZCBmcm9tIFwiLi9QYWdlVmlzaXRlZFwiO1xuaW1wb3J0IGNoYXRBdXRoZW50aWNhdGVkIGZyb20gXCIuL2NoYXRVc2VyXCI7XG5pbXBvcnQgY2hhdENvbm5lY3RlZCBmcm9tIFwiLi9jaGF0Q29ubmVjdGVkXCI7XG5pbXBvcnQgY2hhdFVucmVhZENvdW50IGZyb20gXCIuL2NoYXRVbnJlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aF91c2VyLFxuICBhdXRoX21vZGFsLFxuICBjaGF0X3VzZXIsXG4gIGRpYWxvZ3MsXG4gIG1lc3NhZ2VzLFxuICBzZWxlY3RlZERpYWxvZyxcbiAgcGFnZVZpc2l0ZWQsXG4gIGNoYXRBdXRoZW50aWNhdGVkLFxuICBjaGF0Q29ubmVjdGVkLFxuICBjaGF0VW5yZWFkQ291bnRcbn0pO1xuIiwiaW1wb3J0IHtcbiAgUFVTSF9NRVNTQUdFLFxuICBTRVRfTUVTU0FHRVMsXG4gIERFTEVURV9BTExfTUVTU0FHRVMsXG4gIExBWllfRkVUQ0hfTUVTU0FHRVMsXG4gIFVQREFURV9NRVNTQUdFUyxcbn0gZnJvbSBcIi4uL2FjdGlvblR5cGVzL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBTRUxFQ1RFRF9ESUFMT0cgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvc2VsZWN0ZWREaWFsb2dcIjtcbmltcG9ydCBDb25uZWN0eUN1YmUgZnJvbSBcImNvbm5lY3R5Y3ViZVwiO1xuXG5pbXBvcnQgeyBsYXp5RmV0Y2hNZXNzYWdlcywgdXBkYXRlU3RhdHVzTWVzc2FnZXMgfSBmcm9tIFwiLi9yZWR1Y2VyLWZ1bmN0aW9uXCI7XG5cbmxldCBpbml0aWFsX3N0YXRlID0ge1xuICBkaWFsb2c6IHt9LFxuICBtZXNzYWdlczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2VzID0gaW5pdGlhbF9zdGF0ZSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01FU1NBR0VTOiB7XG4gICAgICBjb25zdCBtc2dzID0gYWN0aW9uLm1zZ3M7XG4gICAgICBjb25zdCBkaWFsb2cgPSBhY3Rpb24uZGlhbG9nO1xuICAgICAgcmV0dXJuIHsgZGlhbG9nOiBkaWFsb2csIG1lc3NhZ2VzOiBtc2dzIH07XG4gICAgfVxuXG4gICAgLy8gY2FzZSBTRUxFQ1RFRF9ESUFMT0c6IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGFjdGlvbilcbiAgICAvLyAgIGNvbnN0IGRpYWxvZyA9IGFjdGlvbi5kaWFsb2c7XG4gICAgLy8gICByZXR1cm4geyAuLi5tZXNzYWdlcywgZGlhbG9nOiBkaWFsb2cgfTtcbiAgICAvLyB9XG5cblxuICAgIGNhc2UgUFVTSF9NRVNTQUdFOiB7XG4gICAgICBsZXQgbXNnID0gYWN0aW9uLm1zZ1xuICAgICAgaWYgKG1zZyAmJiBtc2cuZGlhbG9nX2lkID09IG1lc3NhZ2VzLmRpYWxvZy5jb25uZWN0eV9kaWFsb2dfaWQpIHtcbiAgICAgICAgaWYgKG1zZy5ub3RpZikge1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJlYWQ6IDEsXG4gICAgICAgICAgICBjaGF0X2RpYWxvZ19pZDogbXNnLmRpYWxvZ19pZFxuICAgICAgICAgIH07XG4gICAgICAgICAgQ29ubmVjdHlDdWJlLmNoYXQubWVzc2FnZVxuICAgICAgICAgICAgLnVwZGF0ZShcIlwiLCBwYXJhbXMpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLm1lc3NhZ2VzLmNvbmNhdChhY3Rpb24ubXNnKTtcbiAgICAgICAgcmV0dXJuIHsgLi4ubWVzc2FnZXMsIG1lc3NhZ2VzOiBtc2dzIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEgPyBKU09OLnBhcnNlKHVzZXJEYXRhKSA6IFwiXCI7XG4gICAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgYXBwX2lkOiBwcm9jZXNzLmVudi5PTkVTSUdOQUxfQVBQX0lELFxuICAgICAgICAgICAgY29udGVudHM6IHsgXCJlblwiOiBcIllvdSByZWNpZXZlZCBhIG5ldyBtZXNzYWdlLlwiIH0sXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXG4gICAgICAgICAgICAgIHsgXCJmaWVsZFwiOiBcInRhZ1wiLCBcImtleVwiOiBcInVzZXJcIiwgXCJyZWxhdGlvblwiOiBcIj1cIiwgXCJ2YWx1ZVwiOiB1c2VyRGF0YS5pZCB9LFxuXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfTtcbiAgICAgICAgICBmZXRjaChcImh0dHBzOi8vb25lc2lnbmFsLmNvbS9hcGkvdjEvbm90aWZpY2F0aW9uc1wiLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJhc2ljIFwiICsgcHJvY2Vzcy5lbnYuT05FU0lHTkFMX1JFU1RfS0VZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSxcbiAgICAgICAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgUmVxdWVzdCByZWplY3RlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZURhdGFzYWRzYWRcIiwgcmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcInJlc3BvbnNlRGF0YXNhZHNhZFwiLCBlcnJvcikpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgICAgcmV0dXJuIG1lc3NhZ2VzXG5cbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9BTExfTUVTU0FHRVM6IHtcblxuICAgICAgcmV0dXJuIGluaXRpYWxfc3RhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpbml0aWFsX3N0YXRlO1xuICB9XG59O1xuIiwiY29uc3QgdXBkYXRlRGlhbG9nID0gKGFjdGlvbiwgZGlhbG9ncykgPT4ge1xuICBjb25zdCBhbHJlYWR5VXBkYXRlZERpYWxvZyA9IGRpYWxvZ3MubWFwKChlbGVtKSA9PiB7XG4gICAgaWYgKGVsZW0uaWQgPT09IGFjdGlvbi5kaWFsb2cuaWQpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGVsZW0sIGFjdGlvbi5kaWFsb2cpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbiAgfSk7XG4gIHJldHVybiBbLi4uYWxyZWFkeVVwZGF0ZWREaWFsb2ddO1xufTtcblxuY29uc3QgbGF6eUZldGNoTWVzc2FnZXMgPSAoYWN0aW9uLCBtZXNzYWdlcykgPT4ge1xuICBjb25zdCBuZXdBcnIgPSBhY3Rpb24uaGlzdG9yeS5yZXZlcnNlKCkuY29uY2F0KG1lc3NhZ2VzW2FjdGlvbi5kaWFsb2dJZF0pO1xuICByZXR1cm4geyAuLi57fSwgW2FjdGlvbi5kaWFsb2dJZF06IG5ld0FyciB9O1xufTtcblxuY29uc3Qgc29ydGVkRGlhbG9nID0gKGFjdGlvbiwgZGlhbG9ncykgPT4ge1xuICBjb25zdCB7IG1lc3NhZ2UsIGNvdW50IH0gPSBhY3Rpb247XG4gIGNvbnN0IHVwZGF0ZURpYWxvZyA9IGRpYWxvZ3MubWFwKChlbGVtKSA9PiB7XG4gICAgaWYgKGVsZW0uaWQgPT09IG1lc3NhZ2UuZGlhbG9nX2lkKSB7XG4gICAgICBjb25zdCBuZXdPYmogPSB7XG4gICAgICAgIGxhc3RfbWVzc2FnZTogbWVzc2FnZS5ib2R5LFxuICAgICAgICBsYXN0X21lc3NhZ2VfZGF0ZV9zZW50OiBtZXNzYWdlLmRhdGVfc2VudCxcbiAgICAgICAgdXBkYXRlZF9kYXRlOiBtZXNzYWdlLmRhdGVfc2VudCxcbiAgICAgICAgdW5yZWFkX21lc3NhZ2VzX2NvdW50OiBjb3VudFxuICAgICAgICAgID8gKGVsZW0udW5yZWFkX21lc3NhZ2VzX2NvdW50ICs9IDEpXG4gICAgICAgICAgOiBlbGVtLnVucmVhZF9tZXNzYWdlc19jb3VudCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihlbGVtLCBuZXdPYmopO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydCA9IChpdGVtcywgaW52ZXJ0ZWQgPSBmYWxzZSkgPT5cbiAgICBpdGVtcy5zb3J0KChpdGVtQSwgaXRlbUIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIG5ldyBEYXRlKGl0ZW1CLmxhc3RfbWVzc2FnZV9kYXRlX3NlbnQgKiAxMDAwKSAtXG4gICAgICAgIG5ldyBEYXRlKGl0ZW1BLmxhc3RfbWVzc2FnZV9kYXRlX3NlbnQgKiAxMDAwKTtcbiAgICAgIHJldHVybiBpbnZlcnRlZCA/ICFyZXN1bHQgOiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gc29ydCh1cGRhdGVEaWFsb2cpO1xuXG4gIHJldHVybiBbLi4ucmVzdWx0XTtcbn07XG5cbmNvbnN0IHVwZGF0ZVN0YXR1c01lc3NhZ2VzID0gKGFjdGlvbiwgbWVzc2FnZSkgPT4ge1xuICBpZiAoT2JqZWN0LmtleXMobWVzc2FnZSkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBjb25zdCBuZXdNZXNzYWdlcyA9IG1lc3NhZ2VbYWN0aW9uLmRpYWxvZ0lkXS5tYXAoKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGVsZW0uaWQgPT09IGFjdGlvbi5tc2dJZCkge1xuICAgICAgY29uc3QgdXBkYXRlU2VuZFN0YXR1cyA9IHsgLi4uZWxlbSB9O1xuICAgICAgdXBkYXRlU2VuZFN0YXR1cy5zZW5kX3N0YXRlID0gYWN0aW9uLm1zZy5zZW5kX3N0YXRlO1xuICAgICAgcmV0dXJuIHsgLi4udXBkYXRlU2VuZFN0YXR1cyB9O1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0geyAuLi5tZXNzYWdlLCBbYWN0aW9uLmRpYWxvZ0lkXTogbmV3TWVzc2FnZXMgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZmV0Y2hVc2VycyA9IChhY3Rpb24sIHVzZXJzKSA9PiB7XG4gIGNvbnN0IG5ld09ialVzZXJzID0ge307XG4gIGFjdGlvbi5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3T2JqVXNlcnNbZWxlbS5pZF0gPSBlbGVtO1xuICB9KTtcbiAgcmV0dXJuIHsgLi4udXNlcnMsIC4uLm5ld09ialVzZXJzIH07XG59O1xuXG5leHBvcnQge1xuICB1cGRhdGVEaWFsb2csXG4gIGxhenlGZXRjaE1lc3NhZ2VzLFxuICBzb3J0ZWREaWFsb2csXG4gIHVwZGF0ZVN0YXR1c01lc3NhZ2VzLFxuICBmZXRjaFVzZXJzLFxufTtcbiIsImltcG9ydCB7XG4gIFNFTEVDVEVEX0RJQUxPRyxcbiAgVU5fU0VMRUNURURfRElBTE9HLFxufSBmcm9tIFwiLi4vYWN0aW9uVHlwZXMvc2VsZWN0ZWREaWFsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGRpYWxvZyA9IG51bGwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRUxFQ1RFRF9ESUFMT0c6IHtcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5kaWFsb2cgfTtcbiAgICB9XG5cbiAgICBjYXNlIFVOX1NFTEVDVEVEX0RJQUxPRzoge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGlhbG9nO1xuICB9XG59O1xuIiwiaW1wb3J0IENvbm5lY3R5Q3ViZSBmcm9tICdjb25uZWN0eWN1YmUnXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uL21vZGVscy9kaWFsb2dzJ1xuaW1wb3J0IHtcbiAgZmV0Y2hEaWFsb2dzLFxuICBzb3J0RGlhbG9ncyxcbiAgdXBkYXRlRGlhbG9nLFxuICBhZGROZXdEaWFsb2csXG59IGZyb20gJy4uL2FjdGlvbnMvZGlhbG9ncydcbmltcG9ydCB7XG4gIHB1c2hNZXNzYWdlLFxuICBzZXRNZXNzYWdlcyxcbiAgbGF6eUZldGNoTWVzc2FnZXMsXG4gIHVwZGF0ZU1lc3NhZ2VzLFxufSBmcm9tICcuLi9hY3Rpb25zL21lc3NhZ2VzJ1xuaW1wb3J0IHsgcHJlcGFyYXRpb25BdHRhY2htZW50IH0gZnJvbSAnLi4vaGVscGVycy9maWxlJ1xuaW1wb3J0IHsgc2VsZWN0ZWREaWFsb2cgfSBmcm9tICcuLi9hY3Rpb25zL3NlbGVjdGVkRGlhbG9nJ1xuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcnMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBNZXNzYWdlLCBGYWtlTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9tZXNzYWdlJ1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvdXNlcidcbmltcG9ydCB7IERJQUxPR19UWVBFIH0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQge1xuICBTVEFUVVNfREVMSVZFUkVELFxuICBTVEFUVVNfUkVBRCxcbiAgU1RBVFVTX1NFTlQsXG4gIEdST1VQX0NIQVRfQUxFUlRfVFlQRVxufSBmcm9tICcuLi9tb2RlbHMvbWVzc2FnZSdcblxuY2xhc3MgQ2hhdFNlcnZpY2Uge1xuXG4gIHNldFVwTGlzdGVuZXJzKCkge1xuICAgIENvbm5lY3R5Q3ViZS5jaGF0Lm9uTWVzc2FnZUxpc3RlbmVyID0gdGhpcy5vbk1lc3NhZ2VMaXN0ZW5lci5iaW5kKHRoaXMpXG4gICAgQ29ubmVjdHlDdWJlLmNoYXQub25TZW50TWVzc2FnZUNhbGxiYWNrID0gdGhpcy5vblNlbnRNZXNzYWdlTGlzdGVuZXIuYmluZCh0aGlzKVxuICAgIENvbm5lY3R5Q3ViZS5jaGF0Lm9uRGVsaXZlcmVkU3RhdHVzTGlzdGVuZXIgPSB0aGlzLm9uRGVsaXZlcmVkU3RhdHVzLmJpbmQodGhpcylcbiAgICBDb25uZWN0eUN1YmUuY2hhdC5vblJlYWRTdGF0dXNMaXN0ZW5lciA9IHRoaXMub25SZWFkU3RhdHVzLmJpbmQodGhpcylcbiAgfVxuXG4gIGFzeW5jIGZldGNoRGlhbG9nc0Zyb21TZXJ2ZXIoKSB7XG4gICAgaWYgKHN0b3JlLmdldFN0YXRlKCkuZGlhbG9ncy5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLmRpYWxvZ3NcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnaW4gZmV0Y2gnKVxuICAgY29uc3QgZGlhbG9nc0Zyb21TZXJ2ZXIgPSAgYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuZGlhbG9nLmxpc3QoKVxuICAgIC8vIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB0aGlzLmN1cnJlbnRVc2VyXG4gICAgLy8gbGV0IHByaXZhdENoYXRJZHNVc2VyID0gW11cblxuICAgIGNvbnN0IGRpYWxvZ3MgPSBkaWFsb2dzRnJvbVNlcnZlci5pdGVtcy5tYXAoZWxlbSA9PiB7XG4gICAgICAvLyBpZiAoZWxlbS50eXBlID09PSBESUFMT0dfVFlQRS5QUklWQVRFKSB7XG4gICAgICAvLyAgIGVsZW0ub2NjdXBhbnRzX2lkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgLy8gICAgIGVsZW0gIT09IGN1cnJlbnRVc2VySWQuaWQgJiYgcHJpdmF0Q2hhdElkc1VzZXIucHVzaChlbGVtKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuICAgICAgcmV0dXJuIG5ldyBEaWFsb2coZWxlbSlcbiAgICB9KVxuXG4gICAgLy8gaWYgKHByaXZhdENoYXRJZHNVc2VyLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vICAgY29uc3QgdXNlcnNJbmZvID0gYXdhaXQgdGhpcy5nZXRVc2Vyc0xpc3QocHJpdmF0Q2hhdElkc1VzZXIpXG4gICAgLy8gICBzdG9yZS5kaXNwYXRjaChmZXRjaFVzZXJzKHVzZXJzSW5mbykpXG4gICAgLy8gfVxuXG4gICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hEaWFsb2dzKGRpYWxvZ3MpKVxuICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLmRpYWxvZ3NcbiAgfVxuXG4gIGFzeW5jIGdldE1lc3NhZ2VzKGRpYWxvZykge1xuICAgIGNvbnN0IGlzQWxyZWR5VXBkYXRlID0gdGhpcy5nZXRNZXNzYWdlc0J5RGlhbG9nSWQoZGlhbG9nLmlkKVxuICAgIGxldCBhbW91bnRNZXNzYWdlcyA9IG51bGxcblxuICAgIC8vIElmIHRoZSBmaXJzdCBlbnRyeSBpbnRvIHRoZSBjaGF0XG4gICAgaWYgKCFkaWFsb2cuaXNBbHJlYWR5TWVzc2FnZUZldGNoIHx8IGRpYWxvZy51bnJlYWRfbWVzc2FnZXNfY291bnQgPiAwICYmICFkaWFsb2cuaXNBbHJlYWR5TWVzc2FnZUZldGNoKSB7XG4gICAgICBjb25zdCBoaXN0b3J5RnJvbVNlcnZlciA9IGF3YWl0IENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2UubGlzdCh7XG4gICAgICAgIGNoYXRfZGlhbG9nX2lkOiBkaWFsb2cuaWQsXG4gICAgICAgIHNvcnRfZGVzYzogJ2RhdGVfc2VudCdcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW11cbiAgICAgIGhpc3RvcnlGcm9tU2VydmVyLml0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmICghZWxlbS5ncm91cF9jaGF0X2FsZXJ0X3R5cGUpIHtcbiAgICAgICAgICBtZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlKGVsZW0sIHRoaXMuY3VycmVudFVzZXIuaWQpKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKGRpYWxvZywgeyBpc0FscmVhZHlNZXNzYWdlRmV0Y2g6IHRydWUgfSlcbiAgICAgIHRoaXMudXBkYXRlRGlhbG9nc1VucmVhZE1lc3NhZ2VzQ291bnQobmV3T2JqKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0TWVzc2FnZXMoZGlhbG9nLmlkLCBtZXNzYWdlcykpXG4gICAgICBhbW91bnRNZXNzYWdlcyA9IG1lc3NhZ2VzLmxlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgc2Vjb25kIGVudHJ5IGludG8gdGhlIGNoYXRcbiAgICAgIGlmIChkaWFsb2cudW5yZWFkX21lc3NhZ2VzX2NvdW50ID4gMCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNCeURpYWxvZ0lkKGRpYWxvZy5pZClcbiAgICAgICAgY29uc3QgZmlyc3RVbnJlYWRNc2cgPSBtZXNzYWdlc1tkaWFsb2cudW5yZWFkX21lc3NhZ2VzX2NvdW50IC0gMV1cbiAgICAgICAgdGhpcy5yZWFkQWxsTWVzc2FnZXMoZGlhbG9nLmlkKVxuICAgICAgICBhd2FpdCB0aGlzLnNlbmRSZWFkU3RhdHVzKGZpcnN0VW5yZWFkTXNnLmlkLCBmaXJzdFVucmVhZE1zZy5zZW5kZXJfaWQsIGZpcnN0VW5yZWFkTXNnLmRpYWxvZ19pZClcbiAgICAgICAgdGhpcy51cGRhdGVEaWFsb2dzVW5yZWFkTWVzc2FnZXNDb3VudChkaWFsb2cpXG4gICAgICB9XG4gICAgICBhbW91bnRNZXNzYWdlcyA9IGlzQWxyZWR5VXBkYXRlLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4gYW1vdW50TWVzc2FnZXNcbiAgfVxuXG4gIC8vIE1lc3NhZ2UgbG9hZGluZyBpZiBtb3JlIHRoYW4gMTAwXG4gIGdldE1vcmVNZXNzYWdlcyA9IGFzeW5jIChkaWFsb2cpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzQnlEaWFsb2dJZChkaWFsb2cuaWQpXG4gICAgY29uc3QgbGFzdE1lc3NhZ2VEYXRlID0gY3VycmVudE1lc3NhZ2VzWzBdXG4gICAgY29uc3QgdXBkYXRlT2JqID0gT2JqZWN0LmFzc2lnbihkaWFsb2csIHsgbGFzdF9tZXNzYWdlc19mb3JfZmV0Y2g6IGxhc3RNZXNzYWdlRGF0ZS5kYXRlX3NlbnQgfSlcblxuICAgIGNvbnN0IGZpbHRlciA9IHtcbiAgICAgIGNoYXRfZGlhbG9nX2lkOiBkaWFsb2cuaWQsXG4gICAgICBkYXRlX3NlbnQ6IHsgbHQ6IGxhc3RNZXNzYWdlRGF0ZS5kYXRlX3NlbnQgfSxcbiAgICAgIHNvcnRfZGVzYzogJ2RhdGVfc2VudCdcbiAgICB9XG5cbiAgICBjb25zdCBtb3JlSGlzdG9yeUZyb21TZXJ2ZXIgPSBhd2FpdCBDb25uZWN0eUN1YmUuY2hhdC5tZXNzYWdlLmxpc3QoZmlsdGVyKVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXVxuICAgIG1vcmVIaXN0b3J5RnJvbVNlcnZlci5pdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKCFlbGVtLmdyb3VwX2NoYXRfYWxlcnRfdHlwZSkge1xuICAgICAgICBtZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlKGVsZW0sIHRoaXMuY3VycmVudFVzZXIuaWQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVEaWFsb2codXBkYXRlT2JqKSlcbiAgICBjb25zdCBhbW91bnRNZXNzYWdlcyA9IHN0b3JlLmRpc3BhdGNoKGxhenlGZXRjaE1lc3NhZ2VzKGRpYWxvZy5pZCwgbWVzc2FnZXMpKVxuICAgIHJldHVybiBhbW91bnRNZXNzYWdlcy5oaXN0b3J5Lmxlbmd0aFxuICB9XG5cblxuICBhc3luYyBzZW5kTWVzc2FnZShkaWFsb2csIG1lc3NhZ2VUZXh0LCBhdHRhY2htZW50cyA9IGZhbHNlLCBzY3JvbGxUb0JvdHRvbSkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyXG4gICAgY29uc3QgdGV4dCA9IG1lc3NhZ2VUZXh0LnRyaW0oKVxuICAgIGNvbnN0IGRhdGUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgIGNvbnN0IHJlY2lwaWVudF9pZCA9IGRpYWxvZy50eXBlID09PSBESUFMT0dfVFlQRS5QUklWQVRFID8gZGlhbG9nLm9jY3VwYW50c19pZHMuZmluZChlbGVtID0+IGVsZW0gIT0gdXNlci5pZClcbiAgICAgIDogZGlhbG9nLnhtcHBfcm9vbV9qaWRcblxuICAgIGxldCBtc2cgPSB7XG4gICAgICB0eXBlOiBkaWFsb2cueG1wcF90eXBlLFxuICAgICAgYm9keTogdGV4dCxcbiAgICAgIGV4dGVuc2lvbjoge1xuICAgICAgICBzYXZlX3RvX2hpc3Rvcnk6IDEsXG4gICAgICAgIGRpYWxvZ19pZDogZGlhbG9nLmlkLFxuICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgIGRhdGVfc2VudDogZGF0ZSxcbiAgICAgIH0sXG4gICAgICAvLyBtYXJrYWJsZTogMVxuICAgIH1cblxuICAgIG1zZy5pZCA9IHRoaXMubWVzc2FnZVVuaXF1ZUlkXG5cbiAgICAvLyBJZiBzZW5kIG1lc3NhZ2UgYXMgQXR0YWNobWVudFxuICAgIGlmIChhdHRhY2htZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2VBc0F0dGFjaG1lbnQoZGlhbG9nLCByZWNpcGllbnRfaWQsIG1zZywgYXR0YWNobWVudHMsIHNjcm9sbFRvQm90dG9tKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgRmFrZU1lc3NhZ2UobXNnKVxuXG4gICAgY29uc3QgbmV3T2JqRnJlZXogPSBPYmplY3QuZnJlZXplKG1lc3NhZ2UpXG5cbiAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChwdXNoTWVzc2FnZShuZXdPYmpGcmVleiwgZGlhbG9nLmlkKSlcbiAgICBzY3JvbGxUb0JvdHRvbSgpXG4gICAgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZChyZWNpcGllbnRfaWQsIG1zZylcbiAgICBzdG9yZS5kaXNwYXRjaChzb3J0RGlhbG9ncyhuZXdPYmpGcmVleikpXG4gIH1cblxuXG4gIHNlbmRNc2dDaGF0QWxlcnRPbkNyZWF0ZSA9IGFzeW5jIChkaWFsb2csIG1lc3NhZ2UsIGFsZXJ0VHlwZSkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgIGNvbnN0IHJlY2lwaWVudF9pZCA9IGRpYWxvZy50eXBlID09PSBESUFMT0dfVFlQRS5QUklWQVRFID8gZGlhbG9nLm9jY3VwYW50c19pZHMuZmluZChlbGVtID0+IGVsZW0gIT0gdGhpcy5jdXJyZW50VXNlci5pZClcbiAgICAgIDogZGlhbG9nLnhtcHBfcm9vbV9qaWRcbiAgICBjb25zdCBtZXNzYWdlRXh0ZW5zaW9ucyA9IHtcbiAgICAgIGRhdGVfc2VudDogZGF0ZSxcbiAgICAgIHNhdmVfdG9faGlzdG9yeTogMSxcbiAgICAgIGRpYWxvZ19pZDogZGlhbG9nLmlkLFxuICAgICAgZ3JvdXBfY2hhdF9hbGVydF90eXBlOiBhbGVydFR5cGUsXG4gICAgICBzZW5kZXJfaWQ6IHRoaXMuY3VycmVudFVzZXIuaWQsXG4gICAgfVxuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIHR5cGU6ICFkaWFsb2cueG1wcF9yb29tX2ppZCA/ICdjaGF0JyA6ICdncm91cGNoYXQnLFxuICAgICAgYm9keTogbWVzc2FnZSxcbiAgICAgIGV4dGVuc2lvbjogbWVzc2FnZUV4dGVuc2lvbnMsXG4gICAgfVxuICAgIENvbm5lY3R5Q3ViZS5jaGF0LnNlbmQocmVjaXBpZW50X2lkLCBtc2cpXG4gIH1cblxuICBzZW5kQ2hhdEFsZXJ0T25DcmVhdGUoZGlhbG9nKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdHcm91cCBpcyBjcmVhdGVkJ1xuICAgIHRoaXMuc2VuZE1zZ0NoYXRBbGVydE9uQ3JlYXRlKGRpYWxvZywgbWVzc2FnZSwgR1JPVVBfQ0hBVF9BTEVSVF9UWVBFLkNSRUFURSlcbiAgfVxuXG4gIGFzeW5jIHNlbmRNZXNzYWdlQXNBdHRhY2htZW50KGRpYWxvZywgcmVjaXBpZW50X2lkLCBtc2csIGF0dGFjaG1lbnRzLCBzY3JvbGxUb0JvdHRvbSkge1xuICAgIC8vY3JlYXRlIGZha2UgZGF0YSBmb3IgcmVuZGVyIGltZ1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXR0YWNobWVudHMuZmlsZSlcbiAgICBtc2cuZXh0ZW5zaW9uLmF0dGFjaG1lbnRzID0gW3sgdXJsIH1dXG4gICAgbXNnLmJvZHkgPSAnSW1hZ2UgYXR0YWNobWVudCdcbiAgICBjb25zdCBtZXNzYWdlID0gbmV3IEZha2VNZXNzYWdlKG1zZylcbiAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChwdXNoTWVzc2FnZShtZXNzYWdlLCBkaWFsb2cuaWQpKVxuICAgIHNjcm9sbFRvQm90dG9tKClcblxuICAgIC8vIGNyZWF0ZSByZWFsIGRhdGEgZm9yIGF0dGFjaG1lbnRcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMudXBsb2FkUGhvdG8oYXR0YWNobWVudHMpXG4gICAgY29uc3QgbmV3T2JqQXR0YWNoID0gcHJlcGFyYXRpb25BdHRhY2htZW50KHJlc3BvbnNlKVxuICAgIG1zZy5leHRlbnNpb24uYXR0YWNobWVudHMgPSBbbmV3T2JqQXR0YWNoXVxuICAgIGF3YWl0IENvbm5lY3R5Q3ViZS5jaGF0LnNlbmQocmVjaXBpZW50X2lkLCBtc2cpXG4gICAgc3RvcmUuZGlzcGF0Y2goc29ydERpYWxvZ3MobWVzc2FnZSkpXG4gICAgcmV0dXJuXG4gIH1cblxuICBhc3luYyBjcmVhdGVQcml2YXRlRGlhbG9nKHVzZXJJZCkge1xuICAgIGNvbnN0IGRpYWxvZ3MgPSBzdG9yZS5nZXRTdGF0ZSgpLmRpYWxvZ3NcbiAgICBsZXQgZGlhbG9nID0gbnVsbFxuXG4gICAgZGlhbG9ncy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGVsZW0udHlwZSA9PT0gRElBTE9HX1RZUEUuUFJJVkFURSAmJiBlbGVtLm9jY3VwYW50c19pZHMuZmluZChlbGVtID0+IGVsZW0gPT09IHVzZXJJZCkpIHtcbiAgICAgICAgZGlhbG9nID0gZWxlbVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICB0eXBlOiBESUFMT0dfVFlQRS5QUklWQVRFLFxuICAgICAgICBvY2N1cGFudHNfaWRzOiB1c2VySWQsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuZGlhbG9nLmNyZWF0ZShwYXJhbXMpXG4gICAgICBkaWFsb2cgPSBuZXcgRGlhbG9nKHJlc3BvbnNlKVxuICAgICAgaWYgKHRoaXMuZ2V0VXNlckZyb21SZWR1eEJ5SWQodXNlcklkKSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChhZGROZXdEaWFsb2coZGlhbG9nKSlcbiAgICAgICAgcmV0dXJuIGRpYWxvZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdXNlcnNJbmZvID0gYXdhaXQgdGhpcy5nZXRVc2VyRnJvbVNlcnZlckJ5SWQodXNlcklkKVxuICAgICAgICB1c2Vyc0luZm8udXNlciA9IG5ldyBVc2VyTW9kZWwodXNlcnNJbmZvLnVzZXIpXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlcnMoW3VzZXJzSW5mby51c2VyXSkpXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZE5ld0RpYWxvZyhkaWFsb2cpKVxuICAgICAgICByZXR1cm4gZGlhbG9nXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVzZXIgaXMgYWxyZWFkeSBpbiB0aGUgUmVkdXhcbiAgICBpZiAodGhpcy5nZXRVc2VyRnJvbVJlZHV4QnlJZCh1c2VySWQpKSB7XG4gICAgICByZXR1cm4gZGlhbG9nXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJzSW5mbyA9IGF3YWl0IHRoaXMuZ2V0VXNlckZyb21TZXJ2ZXJCeUlkKHVzZXJJZClcbiAgICAgIHVzZXJzSW5mby51c2VyID0gbmV3IFVzZXJNb2RlbCh1c2Vyc0luZm8udXNlcilcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlcnMoW3VzZXJzSW5mby51c2VyXSkpXG4gICAgICByZXR1cm4gZGlhbG9nXG4gICAgfVxuICB9XG5cblxuICB1cGRhdGVEaWFsb2dzVW5yZWFkTWVzc2FnZXNDb3VudCA9IChkaWFsb2cpID0+IHtcbiAgICBjb25zdCB1cGRhdGVPYmogPSBPYmplY3QuYXNzaWduKGRpYWxvZywgeyB1bnJlYWRfbWVzc2FnZXNfY291bnQ6IDAgfSlcbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVEaWFsb2codXBkYXRlT2JqKSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgYXN5bmMgY3JlYXRlUHVibGljRGlhbG9nKG9jY3VwYW50c19pZHMsIGdyb3VwTmFtZSwgaW1nKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyXG4gICAgb2NjdXBhbnRzX2lkcy51bnNoaWZ0KGN1cnJlbnRVc2VyLmlkKVxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHR5cGU6IERJQUxPR19UWVBFLkdST1VQLFxuICAgICAgb2NjdXBhbnRzX2lkcyxcbiAgICAgIG5hbWU6IGdyb3VwTmFtZSxcbiAgICB9XG4gICAgY29uc3QgaW1hZ2UgPSBpbWcgPyBhd2FpdCB0aGlzLnVwbG9hZFBob3RvKGltZykgOiBudWxsXG4gICAgaWYgKGltYWdlKSB7XG4gICAgICBwYXJhbXMucGhvdG8gPSBpbWFnZS51aWRcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nID0gYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuZGlhbG9nLmNyZWF0ZShwYXJhbXMpXG4gICAgY29uc3QgbmV3RGlhbG9nID0gbmV3IERpYWxvZyhkaWFsb2cpXG4gICAgc3RvcmUuZGlzcGF0Y2goYWRkTmV3RGlhbG9nKG5ld0RpYWxvZykpXG4gICAgcmV0dXJuIG5ld0RpYWxvZ1xuICB9XG5cbiAgYXN5bmMgcmVhZEFsbE1lc3NhZ2VzKGRpYWxvZ0lkKSB7XG4gICAgcmV0dXJuIENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2UudXBkYXRlKG51bGwsIHtcbiAgICAgIGNoYXRfZGlhbG9nX2lkOiBkaWFsb2dJZCxcbiAgICAgIHJlYWQ6IDFcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgcmVhZE1lc3NhZ2UobWVzc2FnZUlkLCBkaWFsb2dJZCkge1xuICAgIHRoaXMub25SZWFkU3RhdHVzKG1lc3NhZ2VJZCwgZGlhbG9nSWQpXG4gICAgcmV0dXJuIENvbm5lY3R5Q3ViZS5jaGF0Lm1lc3NhZ2UudXBkYXRlKG51bGwsIHtcbiAgICAgIGNoYXRfZGlhbG9nX2lkOiBkaWFsb2dJZCxcbiAgICAgIHJlYWQ6IDFcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25NZXNzYWdlTGlzdGVuZXIoc2VuZGVySWQsIG1zZykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShtc2cpXG4gICAgY29uc3QgdXNlciA9IHRoaXMuY3VycmVudFVzZXJcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmdldFNlbGVjdGVkRGlhbG9nKCk/LmlkXG5cbiAgICAvLyBJZiBncm91cCBjaGF0IGFsZXRcbiAgICBpZiAobXNnLmV4dGVuc2lvbi5ncm91cF9jaGF0X2FsZXJ0X3R5cGUpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ3NGcm9tU2VydmVyID0gYXdhaXQgQ29ubmVjdHlDdWJlLmNoYXQuZGlhbG9nLmxpc3QoKVxuICAgICAgY29uc3QgZGlhbG9ncyA9IGRpYWxvZ3NGcm9tU2VydmVyLml0ZW1zLm1hcChlbGVtID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEaWFsb2coZWxlbSlcbiAgICAgIH0pXG4gICAgICBzdG9yZS5kaXNwYXRjaChmZXRjaERpYWxvZ3MoZGlhbG9ncykpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2VuZGVySWQgIT09IHVzZXIuaWQpIHtcbiAgICAgIGlmIChkaWFsb2cgPT09IG1lc3NhZ2UuZGlhbG9nX2lkKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHNvcnREaWFsb2dzKG1lc3NhZ2UpKVxuICAgICAgICB0aGlzLnJlYWRNZXNzYWdlKG1lc3NhZ2UuaWQsIG1lc3NhZ2UuZGlhbG9nX2lkKVxuICAgICAgICB0aGlzLnNlbmRSZWFkU3RhdHVzKG1zZy5leHRlbnNpb24ubWVzc2FnZV9pZCwgbXNnLmV4dGVuc2lvbi5zZW5kZXJfaWQsIG1zZy5kaWFsb2dfaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmREZWxpdmVyZWRTdGF0dXMobXNnLmV4dGVuc2lvbi5tZXNzYWdlX2lkLCBtc2cuZXh0ZW5zaW9uLnNlbmRlcl9pZCwgbXNnLmRpYWxvZ19pZClcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc29ydERpYWxvZ3MobWVzc2FnZSwgdHJ1ZSkpXG4gICAgICB9XG4gICAgICBzdG9yZS5kaXNwYXRjaChwdXNoTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLmRpYWxvZ19pZCkpXG4gICAgfVxuICB9XG5cbiAgLy8gQ29ubmVjdHlDdWJlIGxpc3RlbmVyc1xuICBvblNlbnRNZXNzYWdlTGlzdGVuZXIoZmFpbGVkTWVzc2FnZSwgbXNnKSB7XG4gICAgY29uc29sZS53YXJuKCdvblNlbnRNZXNzYWdlTGlzdGVuZXInKVxuICAgIGlmIChmYWlsZWRNZXNzYWdlIHx8IG1zZy5leHRlbnNpb24uZ3JvdXBfY2hhdF9hbGVydF90eXBlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTWVzc2FnZXMobXNnLmV4dGVuc2lvbi5kaWFsb2dfaWQsIG1zZy5pZCwgeyBzZW5kX3N0YXRlOiBTVEFUVVNfU0VOVCB9KSlcbiAgfVxuXG4gIG9uRGVsaXZlcmVkU3RhdHVzKG1lc3NhZ2VJZCwgZGlhbG9nSWQsIHVzZXJJZCkge1xuICAgIGNvbnNvbGUud2Fybignb25EZWxpdmVyZWRTdGF0dXMnLCBtZXNzYWdlSWQpXG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTWVzc2FnZXMoZGlhbG9nSWQsIG1lc3NhZ2VJZCwgeyBzZW5kX3N0YXRlOiBTVEFUVVNfREVMSVZFUkVEIH0pKVxuICB9XG5cbiAgb25SZWFkU3RhdHVzKG1lc3NhZ2VJZCwgZGlhbG9nSWQsIHVzZXJJZCkge1xuICAgIGNvbnNvbGUud2Fybignb25SZWFkU3RhdHVzJywgbWVzc2FnZUlkKVxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZU1lc3NhZ2VzKGRpYWxvZ0lkLCBtZXNzYWdlSWQsIHsgc2VuZF9zdGF0ZTogU1RBVFVTX1JFQUQgfSkpXG4gIH1cblxuXG5cbiAgc2VuZFJlYWRTdGF0dXMobWVzc2FnZUlkLCB1c2VySWQsIGRpYWxvZ0lkKSB7XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZFJlYWRTdGF0dXMoeyBtZXNzYWdlSWQsIHVzZXJJZCwgZGlhbG9nSWQgfSlcbiAgfVxuXG4gIHNlbmREZWxpdmVyZWRTdGF0dXMobWVzc2FnZUlkLCB1c2VySWQsIGRpYWxvZ0lkKSB7XG4gICAgQ29ubmVjdHlDdWJlLmNoYXQuc2VuZERlbGl2ZXJlZFN0YXR1cyh7IG1lc3NhZ2VJZCwgdXNlcklkLCBkaWFsb2dJZCB9KVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlcnNMaXN0KGlkcykge1xuICAgIGNvbnN0IHVzZXJzTGlzdCA9IGF3YWl0IENvbm5lY3R5Q3ViZS51c2Vycy5nZXQoe1xuICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgIGZpbHRlcjoge1xuICAgICAgICBmaWVsZDogJ2lkJywgcGFyYW06ICdpbicsIHZhbHVlOiBpZHMsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gdXNlcnNMaXN0Lml0ZW1zLm1hcChlbGVtID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlck1vZGVsKGVsZW0udXNlcilcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlckZyb21TZXJ2ZXJCeUlkKGlkKSB7XG4gICAgcmV0dXJuIENvbm5lY3R5Q3ViZS51c2Vycy5nZXQoaWQpXG4gIH1cblxuICBzZXRTZWxlY3REaWFsb2coZGlhbG9nKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goc2VsZWN0ZWREaWFsb2coZGlhbG9nKSlcbiAgfVxuXG4gIGdldFNlbGVjdGVkRGlhbG9nKCkge1xuICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkRGlhbG9nXG4gIH1cblxuICBnZXREaWFsb2dCeUlkKGRpYWxvZ0lkKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuZGlhbG9ncy5maW5kKGVsZW0gPT4gZWxlbS5pZCA9PT0gZGlhbG9nSWQpXG4gIH1cblxuICBnZXRNZXNzYWdlc0J5RGlhbG9nSWQoZGlhbG9nSWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdG9yZS5nZXRTdGF0ZSgpLm1lc3NhZ2VzXG4gICAgcmV0dXJuIHJlc3VsdFtkaWFsb2dJZF1cbiAgfVxuXG4gIGFzeW5jIHVwbG9hZFBob3RvKGZpbGUpIHtcbiAgICByZXR1cm4gQ29ubmVjdHlDdWJlLnN0b3JhZ2UuY3JlYXRlQW5kVXBsb2FkKGZpbGUpXG4gIH1cblxuICBnZXQgY3VycmVudFVzZXIoKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkuY3VycmVudFVzZXIudXNlclxuICB9XG5cbiAgZ2V0VXNlckZyb21SZWR1eEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS51c2Vyc1tpZF1cbiAgfVxuXG4gIGdldCBtZXNzYWdlVW5pcXVlSWQoKSB7XG4gICAgcmV0dXJuIENvbm5lY3R5Q3ViZS5jaGF0LmhlbHBlcnMuZ2V0QnNvbk9iamVjdElkKClcbiAgfVxufVxuXG5cbmNvbnN0IGNoYXRTZXJ2aWNlID0gbmV3IENoYXRTZXJ2aWNlKClcblxuT2JqZWN0LmZyZWV6ZShjaGF0U2VydmljZSlcblxuZXhwb3J0IGRlZmF1bHQgY2hhdFNlcnZpY2VcblxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIj8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKTpcIlwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uQWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGV0YWlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V2ZW50Tm90ZVJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZlZWRiYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVSb3VuZGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhYmVsSW1wb3J0YW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGl2ZVR2Um91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsUm91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dFJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNOb25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdWJ0aXRsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlPZmZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3R5Y3ViZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2NhbGZvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbG9naW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=