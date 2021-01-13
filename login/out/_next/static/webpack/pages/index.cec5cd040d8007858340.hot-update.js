webpackHotUpdate_N_E("pages/index",{

/***/ "./src/screens/Journeys/Journey.tsx":
/*!******************************************!*\
  !*** ./src/screens/Journeys/Journey.tsx ***!
  \******************************************/
/*! exports provided: JourneyScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyScreen", function() { return JourneyScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Journey_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Journey.styled */ "./src/screens/Journeys/Journey.styled.tsx");
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProgressBar */ "./src/screens/Journeys/components/ProgressBar/index.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/**
 * @export
 * @component
 * @name JourneyScreen
 *
 * @description
 * Responsável pelo wrapper da home page.
 */

var JourneyScreen = function JourneyScreen() {
  return __jsx(_Journey_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: "/images/logotipo.png",
    alt: "Logotipo",
    width: 250,
    height: 250
  }), __jsx("h1", null, "Projeto 1 "), __jsx(_Journey_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: 55
  })));
};
_c = JourneyScreen;

var _c;

$RefreshReg$(_c, "JourneyScreen");

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

/***/ }),

/***/ "./src/screens/Journeys/components/ProgressBar/ProgressBar.tsx":
/*!*********************************************************************!*\
  !*** ./src/screens/Journeys/components/ProgressBar/ProgressBar.tsx ***!
  \*********************************************************************/
/*! exports provided: ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/screens/Journeys/components/ProgressBar/styled.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * @export
 * @component
 * @name ProgressBar
 *
 * @description
 * Componente responsável por montar o ProgressBar.
 */
var ProgressBar = function ProgressBar(_ref) {
  var percent = _ref.percent;

  function progress() {
    if (percent < 0) {
      return 0;
    }

    if (percent > 100) {
      return 100;
    }

    return percent;
  }

  return __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["ContainerStyled"], null, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["ContainerProgressStyled"], null, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["ProgressStyled"], {
    percent: progress()
  })), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["PercentStyled"], null, percent, "%"));
};
_c = ProgressBar;

var _c;

$RefreshReg$(_c, "ProgressBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/screens/Journeys/components/ProgressBar/index.tsx":
/*!***************************************************************!*\
  !*** ./src/screens/Journeys/components/ProgressBar/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./src/screens/Journeys/components/ProgressBar/ProgressBar.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_ProgressBar__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/screens/Journeys/components/ProgressBar/styled.tsx":
/*!****************************************************************!*\
  !*** ./src/screens/Journeys/components/ProgressBar/styled.tsx ***!
  \****************************************************************/
/*! exports provided: ContainerStyled, ContainerProgressStyled, ProgressStyled, PercentStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerStyled", function() { return ContainerStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerProgressStyled", function() { return ContainerProgressStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressStyled", function() { return ProgressStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentStyled", function() { return PercentStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ContainerStyled",
  componentId: "sc-108j7f4-0"
})(["display:flex;align-items:center;margin-top:15px;justify-content:space-between;"]);
var ContainerProgressStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ContainerProgressStyled",
  componentId: "sc-108j7f4-1"
})(["background:#f7f7f7;border-radius:5px;min-width:300px;min-height:8px;padding:2px;"]);
var ProgressStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ProgressStyled",
  componentId: "sc-108j7f4-2"
})(["background:transparent linear-gradient(270deg,#117eff 0%,#00e1ff 100%) 0% 0% no-repeat padding-box;border-radius:5px;width:", ";min-height:4px;transition:width 1s;"], function (props) {
  return props.percent ? "".concat(props.percent, "%") : '0%';
});
var PercentStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__PercentStyled",
  componentId: "sc-108j7f4-3"
})(["font-weight:bold;font-size:14px;float:right;"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSm91cm5leXMvSm91cm5leS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JlZW5zL0pvdXJuZXlzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvc2NyZWVucy9Kb3VybmV5cy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSm91cm5leXMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9zdHlsZWQudHN4Il0sIm5hbWVzIjpbIkpvdXJuZXlTY3JlZW4iLCJQcm9ncmVzc0JhciIsInBlcmNlbnQiLCJwcm9ncmVzcyIsIkNvbnRhaW5lclN0eWxlZCIsInN0eWxlZCIsImRpdiIsIkNvbnRhaW5lclByb2dyZXNzU3R5bGVkIiwiUHJvZ3Jlc3NTdHlsZWQiLCJwcm9wcyIsIlBlcmNlbnRTdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFNBQzNCLE1BQUMseURBQUQsUUFDQSxNQUFDLGlEQUFEO0FBQU8sT0FBRyxFQUFDLHNCQUFYO0FBQWtDLE9BQUcsRUFBQyxVQUF0QztBQUFpRCxTQUFLLEVBQUUsR0FBeEQ7QUFBNkQsVUFBTSxFQUFFO0FBQXJFLElBREEsRUFFRSwrQkFGRixFQUdFLE1BQUMseURBQUQsUUFDRSxNQUFDLCtEQUFEO0FBQWEsV0FBTyxFQUFFO0FBQXRCLElBREYsQ0FIRixDQUQyQjtBQUFBLENBQXRCO0tBQU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkYjtBQUVBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnRDtBQUFBLE1BQTdDQyxPQUE2QyxRQUE3Q0EsT0FBNkM7O0FBQ3pFLFdBQVNDLFFBQVQsR0FBb0I7QUFDbEIsUUFBSUQsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDZixhQUFPLENBQVA7QUFDRDs7QUFDRCxRQUFJQSxPQUFPLEdBQUcsR0FBZCxFQUFtQjtBQUNqQixhQUFPLEdBQVA7QUFDRDs7QUFDRCxXQUFPQSxPQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLHVEQUFELFFBQ0UsTUFBQywrREFBRCxRQUNFLE1BQUMsc0RBQUQ7QUFBZ0IsV0FBTyxFQUFFQyxRQUFRO0FBQWpDLElBREYsQ0FERixFQUlFLE1BQUMscURBQUQsUUFBZ0JELE9BQWhCLE1BSkYsQ0FERjtBQVFELENBbEJNO0tBQU1ELFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmI7QUFBQTtBQUFBO0FBRWVBLHVIQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1HLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRkFBckI7QUFPQSxJQUFNQyx1QkFBdUIsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFBN0I7QUFPQSxJQUFNRSxjQUFjLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNEtBSWhCLFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNQLE9BQU4sYUFBbUJPLEtBQUssQ0FBQ1AsT0FBekIsU0FBc0MsSUFBbEQ7QUFBQSxDQUpnQixDQUFwQjtBQVNBLElBQU1RLGFBQWEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2VjNWNkMDQwZDgwMDc4NTgzNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuL0pvdXJuZXkuc3R5bGVkJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuXG5cbi8qKlxuICogQGV4cG9ydFxuICogQGNvbXBvbmVudFxuICogQG5hbWUgSm91cm5leVNjcmVlblxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmVzcG9uc8OhdmVsIHBlbG8gd3JhcHBlciBkYSBob21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBKb3VybmV5U2NyZWVuID0gKCk6IEpTWC5FbGVtZW50ID0+IChcbiAgPENvbnRhaW5lcj5cbiAgPEltYWdlIHNyYz1cIi9pbWFnZXMvbG9nb3RpcG8ucG5nXCIgYWx0PVwiTG9nb3RpcG9cIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0vPlxuICAgIDxoMT5Qcm9qZXRvIDEgPC9oMT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFByb2dyZXNzQmFyIHBlcmNlbnQ9ezU1fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NvbnRhaW5lcj5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb250YWluZXJQcm9ncmVzc1N0eWxlZCxcclxuICBQcm9ncmVzc1N0eWxlZCxcclxuICBDb250YWluZXJTdHlsZWQsXHJcbiAgUGVyY2VudFN0eWxlZCxcclxufSBmcm9tICcuL3N0eWxlZCc7XHJcblxyXG50eXBlIFByb2dyZXNzQmFyUHJvcHMgPSB7XHJcbiAgcGVyY2VudDogbnVtYmVyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBleHBvcnRcclxuICogQGNvbXBvbmVudFxyXG4gKiBAbmFtZSBQcm9ncmVzc0JhclxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29tcG9uZW50ZSByZXNwb25zw6F2ZWwgcG9yIG1vbnRhciBvIFByb2dyZXNzQmFyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gKHsgcGVyY2VudCB9OiBQcm9ncmVzc0JhclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGZ1bmN0aW9uIHByb2dyZXNzKCkge1xyXG4gICAgaWYgKHBlcmNlbnQgPCAwKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHBlcmNlbnQgPiAxMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH1cclxuICAgIHJldHVybiBwZXJjZW50O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclN0eWxlZD5cclxuICAgICAgPENvbnRhaW5lclByb2dyZXNzU3R5bGVkPlxyXG4gICAgICAgIDxQcm9ncmVzc1N0eWxlZCBwZXJjZW50PXtwcm9ncmVzcygpfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lclByb2dyZXNzU3R5bGVkPlxyXG4gICAgICA8UGVyY2VudFN0eWxlZD57cGVyY2VudH0lPC9QZXJjZW50U3R5bGVkPlxyXG4gICAgPC9Db250YWluZXJTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL1Byb2dyZXNzQmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJQcm9ncmVzc1N0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NTdHlsZWQgPSBzdHlsZWQuZGl2PHsgcGVyY2VudDogbnVtYmVyIH0+YFxyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxMTdlZmYgMCUsICMwMGUxZmYgMTAwJSkgMCVcclxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMucGVyY2VudCA/IGAke3Byb3BzLnBlcmNlbnR9JWAgOiAnMCUnKX07XHJcbiAgbWluLWhlaWdodDogNHB4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBlcmNlbnRTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=