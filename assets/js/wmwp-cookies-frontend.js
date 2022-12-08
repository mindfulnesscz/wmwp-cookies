/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
if (!document.__defineGetter__) {
    Object.defineProperty(document, 'cookie', {
        get: function () { return ''; },
        set: function () { return true; },
    });
}
else {
    document.__defineGetter__("cookie", function () { return ''; });
    document.__defineSetter__("cookie", function () { });
}
document.addEventListener('DOMContentLoaded', () => {
    const el_cookie_banner = document.querySelector('#wmwp-cookies-banner');
    const el_consent = el_cookie_banner.querySelector('#wmwp-cookies-consent');
    const el_deny = el_cookie_banner.querySelector('#wmwp-cookies-deny');
    el_consent.addEventListener('click', () => {
        el_cookie_banner.style.display = 'none';
    });
    el_deny.addEventListener('click', () => {
        el_cookie_banner.style.display = 'none';
    });
});


/******/ })()
;
//# sourceMappingURL=wmwp-cookies-frontend.js.map