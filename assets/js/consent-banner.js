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
/*!******************************!*\
  !*** ./src/cookiesBanner.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
    const el_cookie_banner = document.querySelector('#wmwp-cookies-banner');
    const el_consent = el_cookie_banner.querySelector('#wmwp-cookies-consent');
    const el_deny = el_cookie_banner.querySelector('#wmwp-cookies-deny');
    //Show if the cookie is not provided
    if (!window.wmwp_cookie_consent) {
        el_cookie_banner.style.display = 'flex';
    }
    if (el_consent)
        el_consent.addEventListener('click', () => {
            window.WMCookiesInst.setCookie('wmc09', 'true', (1000 * 60 * 60 * 24 * 365));
            window.wmwp_cookie_consent = true;
            el_cookie_banner.style.display = 'none';
        });
    if (el_deny)
        el_deny.addEventListener('click', () => {
            window.WMCookiesInst.setCookie('wmc09', 'false', (1000 * 60 * 60 * 24 * 365));
            window.wmwp_cookie_consent = false;
            el_cookie_banner.style.display = 'none';
        });
});


/******/ })()
;
//# sourceMappingURL=consent-banner.js.map