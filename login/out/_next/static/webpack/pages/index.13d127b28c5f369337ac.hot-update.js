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
var _s = $RefreshSig$();

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
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      valueProgress = _useState[0],
      setValueProgress = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      if (valueProgress < 100) {
        setValueProgress(valueProgress + 10);
      } else {
        setValueProgress(0);
      }
    }, 2000);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Journey_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: "/images/logotipo.png",
    alt: "Logotipo",
    width: 250,
    height: 250
  }), __jsx("h1", null, "Projeto 1 ")), __jsx(_Journey_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: valueProgress
  })));
};

_s(JourneyScreen, "vNmUpVNG9A4vP7BWZjrwVr6V/hQ=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSm91cm5leXMvSm91cm5leS50c3giXSwibmFtZXMiOlsiSm91cm5leVNjcmVlbiIsInVzZVN0YXRlIiwidmFsdWVQcm9ncmVzcyIsInNldFZhbHVlUHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFtQjtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLENBQUQsQ0FESjtBQUFBLE1BQ3ZDQyxhQUR1QztBQUFBLE1BQ3hCQyxnQkFEd0I7O0FBRTlDQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsY0FBVSxDQUFDLFlBQUs7QUFDZCxVQUFHSCxhQUFhLEdBQUcsR0FBbkIsRUFBdUI7QUFDckJDLHdCQUFnQixDQUFDRCxhQUFhLEdBQUcsRUFBakIsQ0FBaEI7QUFDRCxPQUZELE1BRU07QUFDSkMsd0JBQWdCLENBQUMsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FOUyxFQU1QLElBTk8sQ0FBVjtBQU9ELEdBUlEsQ0FBVDtBQVNBLFNBQ0EsbUVBQ0UsTUFBQyx5REFBRCxRQUNFLE1BQUMsaURBQUQ7QUFBTyxPQUFHLEVBQUMsc0JBQVg7QUFBa0MsT0FBRyxFQUFDLFVBQXRDO0FBQWlELFNBQUssRUFBRSxHQUF4RDtBQUE2RCxVQUFNLEVBQUU7QUFBckUsSUFERixFQUVJLCtCQUZKLENBREYsRUFLRSxNQUFDLHlEQUFELFFBQ0UsTUFBQywrREFBRDtBQUFhLFdBQU8sRUFBRUQ7QUFBdEIsSUFERixDQUxGLENBREE7QUFXRCxDQXRCTTs7R0FBTUYsYTs7S0FBQUEsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xM2QxMjdiMjhjNWYzNjkzMzdhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuL0pvdXJuZXkuc3R5bGVkJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuXG5cbi8qKlxuICogQGV4cG9ydFxuICogQGNvbXBvbmVudFxuICogQG5hbWUgSm91cm5leVNjcmVlblxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmVzcG9uc8OhdmVsIHBlbG8gd3JhcHBlciBkYSBob21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBKb3VybmV5U2NyZWVuID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW3ZhbHVlUHJvZ3Jlc3MsIHNldFZhbHVlUHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICBpZih2YWx1ZVByb2dyZXNzIDwgMTAwKXtcbiAgICAgICAgc2V0VmFsdWVQcm9ncmVzcyh2YWx1ZVByb2dyZXNzICsgMTApO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBzZXRWYWx1ZVByb2dyZXNzKDApO1xuICAgICAgfVxuICAgIH0sIDIwMDApXG4gIH0pXG4gIHJldHVybihcbiAgPD5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvbG9nb3RpcG8ucG5nXCIgYWx0PVwiTG9nb3RpcG9cIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0vPlxuICAgICAgICA8aDE+UHJvamV0byAxIDwvaDE+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxQcm9ncmVzc0JhciBwZXJjZW50PXt2YWx1ZVByb2dyZXNzfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8Lz5cbik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9