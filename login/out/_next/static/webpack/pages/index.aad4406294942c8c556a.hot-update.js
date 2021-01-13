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
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Journey_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: "/images/logotipo.png",
    alt: "Logotipo",
    width: 250,
    height: 250
  }), __jsx("h1", null, "Projeto 1 ")), __jsx(_Journey_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSm91cm5leXMvSm91cm5leS50c3giXSwibmFtZXMiOlsiSm91cm5leVNjcmVlbiIsInVzZVN0YXRlIiwidmFsdWVQcm9ncmVzcyIsInNldFZhbHVlUHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFtQjtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLENBQUQsQ0FESjtBQUFBLE1BQ3ZDQyxhQUR1QztBQUFBLE1BQ3hCQyxnQkFEd0I7O0FBRTlDQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsY0FBVSxDQUFDLFlBQUs7QUFDZCxVQUFHSCxhQUFhLEdBQUcsR0FBbkIsRUFBdUI7QUFDckJDLHdCQUFnQixDQUFDRCxhQUFhLEdBQUcsRUFBakIsQ0FBaEI7QUFDRCxPQUZELE1BRU07QUFDSkMsd0JBQWdCLENBQUMsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FOUyxDQUFWO0FBT0QsR0FSUSxDQUFUO0FBU0EsU0FDQSxtRUFDRSxNQUFDLHlEQUFELFFBQ0UsTUFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyxzQkFBWDtBQUFrQyxPQUFHLEVBQUMsVUFBdEM7QUFBaUQsU0FBSyxFQUFFLEdBQXhEO0FBQTZELFVBQU0sRUFBRTtBQUFyRSxJQURGLEVBRUksK0JBRkosQ0FERixFQUtFLE1BQUMseURBQUQsUUFDRSxNQUFDLCtEQUFEO0FBQWEsV0FBTyxFQUFFO0FBQXRCLElBREYsQ0FMRixDQURBO0FBV0QsQ0F0Qk07O0dBQU1ILGE7O0tBQUFBLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWFkNDQwNjI5NDk0MmM4YzU1NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9Kb3VybmV5LnN0eWxlZCc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyJztcblxuXG4vKipcbiAqIEBleHBvcnRcbiAqIEBjb21wb25lbnRcbiAqIEBuYW1lIEpvdXJuZXlTY3JlZW5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlc3BvbnPDoXZlbCBwZWxvIHdyYXBwZXIgZGEgaG9tZSBwYWdlLlxuICovXG5leHBvcnQgY29uc3QgSm91cm5leVNjcmVlbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFt2YWx1ZVByb2dyZXNzLCBzZXRWYWx1ZVByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgaWYodmFsdWVQcm9ncmVzcyA8IDEwMCl7XG4gICAgICAgIHNldFZhbHVlUHJvZ3Jlc3ModmFsdWVQcm9ncmVzcyArIDEwKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgc2V0VmFsdWVQcm9ncmVzcygwKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4oXG4gIDw+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2xvZ290aXBvLnBuZ1wiIGFsdD1cIkxvZ290aXBvXCIgd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9Lz5cbiAgICAgICAgPGgxPlByb2pldG8gMSA8L2gxPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8UHJvZ3Jlc3NCYXIgcGVyY2VudD17MjV9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIDwvPlxuKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=