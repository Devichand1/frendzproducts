webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/IconCard/index.js":
/*!******************************************!*\
  !*** ./src/components/IconCard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/IconCard/styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _objectSpread2;

  return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__["commonStyles"]), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.up('sm'), _styles__WEBPACK_IMPORTED_MODULE_4__["desktopStyles"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.between('xs', 'sm'), _styles__WEBPACK_IMPORTED_MODULE_4__["TabStyles"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down('xs'), _styles__WEBPACK_IMPORTED_MODULE_4__["mobileStyles"]), _objectSpread2));
});

var IconCard = function IconCard(_ref) {
  _s();

  var data = _ref.data;
  var classes = useStyles();
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: data.slug
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: " ".concat(classes.card, " ").concat(data.title.substring(0, 3))
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    className: classes.cardBody
  }, __jsx("img", {
    src: data.image.url,
    alt: "",
    className: classes.image
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    className: classes.title
  }, data.title))));
};

_s(IconCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = IconCard;
/* harmony default export */ __webpack_exports__["default"] = (IconCard);

var _c;

$RefreshReg$(_c, "IconCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSWNvbkNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29tbW9uU3R5bGVzIiwiYnJlYWtwb2ludHMiLCJ1cCIsImRlc2t0b3BTdHlsZXMiLCJiZXR3ZWVuIiwiVGFiU3R5bGVzIiwiZG93biIsIm1vYmlsZVN0eWxlcyIsIkljb25DYXJkIiwiZGF0YSIsImNsYXNzZXMiLCJzbHVnIiwiY2FyZCIsInRpdGxlIiwic3Vic3RyaW5nIiwiY2FyZEJvZHkiLCJpbWFnZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSx5Q0FDN0JDLG9EQUQ2Qix1SUFFL0JELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGK0IsRUFFRkMscURBRkUsNkdBRy9CSixLQUFLLENBQUNFLFdBQU4sQ0FBa0JHLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBSCtCLEVBR1NDLGlEQUhULDZHQUkvQk4sS0FBSyxDQUFDRSxXQUFOLENBQWtCSyxJQUFsQixDQUF1QixJQUF2QixDQUorQixFQUlBQyxvREFKQTtBQUFBLENBQU4sQ0FBNUI7O0FBT0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUUzQixNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVZLElBQUksQ0FBQ0U7QUFBakIsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxhQUFNRCxPQUFPLENBQUNFLElBQWQsY0FBc0JILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxTQUFYLENBQXFCLENBQXJCLEVBQXVCLENBQXZCLENBQXRCO0FBQWYsS0FDRSxNQUFDLDZEQUFEO0FBQWEsYUFBUyxFQUFFSixPQUFPLENBQUNLO0FBQWhDLEtBQ0U7QUFBSyxPQUFHLEVBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxHQUFyQjtBQUEwQixPQUFHLEVBQUMsRUFBOUI7QUFBaUMsYUFBUyxFQUFFUCxPQUFPLENBQUNNO0FBQXBELElBREYsRUFFRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRU4sT0FBTyxDQUFDRztBQUE1QyxLQUNHSixJQUFJLENBQUNJLEtBRFIsQ0FGRixDQURGLENBREYsQ0FERjtBQVlELENBaEJEOztHQUFNTCxRO1VBRVlYLFM7OztLQUZaVyxRO0FBa0JTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZGY1Y2E0NDMyM2VjODI0ZWUyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBjb21tb25TdHlsZXMsIGRlc2t0b3BTdHlsZXMsIG1vYmlsZVN0eWxlcywgVGFiU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgLi4uY29tbW9uU3R5bGVzLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IGRlc2t0b3BTdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3hzJywgJ3NtJyldOiBUYWJTdHlsZXMsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiBtb2JpbGVTdHlsZXNcclxufSkpXHJcblxyXG5jb25zdCBJY29uQ2FyZCA9ICh7ZGF0YX0pID0+IHtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtkYXRhLnNsdWd9PlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2AgJHtjbGFzc2VzLmNhcmR9ICR7ZGF0YS50aXRsZS5zdWJzdHJpbmcoMCwzKX1gfT5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRCb2R5fT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlLnVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAge2RhdGEudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25DYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=