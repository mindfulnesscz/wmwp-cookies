/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/WMCookies.ts":
/*!*************************************!*\
  !*** ./src/components/WMCookies.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*jshint esversion: 6 */
class WMCookies {
    /**
     * Constructor fuction inilializes the class
     * and stores cookies in an array to be nandled and saved more easily
     *
     *  @param path string where the cookie is meant to be stored
     */
    constructor(path) {
        this.path = path;
        // just for testing purposes at the moment.
        this.createCookiesArray();
    }
    /**
     * Creates new cookie or replace existing one
     *
     * @param cname name of the new cookie
     * @param cvalue value of the cookie
     * @param extime time to expire in miliseconds
     *
     * @returns void
     * @since 0.9
     */
    setCookie(cname, cvalue, extime) {
        const d = new Date();
        d.setTime(d.getTime() + (extime));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/' + this.path;
    }
    /**
     * Gets value of a cookie
     *
     * @param cname name of the cookie to be given
     * @returns string if the cookie is found or undefined
     */
    getCookie(cname) {
        const name = cname + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return undefined;
    }
    /**
     * Deletes cookie given
     *
     * TODO: make this functional. I don't really like this.
     * Seems to delete all cookies and replaces with tha one given with expired date (#221218)
     *
     * @param name string name of the cookie to be deleted
     *
     * @returns void
     * @since 0.9
     */
    static deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
    /**
     * Stores document cookie string as array inside this class instance
     *
     * @returns void
     * @since 0.9
     */
    createCookiesArray() {
        this.arr_cookies = [];
        if (document.cookie && document.cookie != '') {
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                const csa = c.split('=');
                this.arr_cookies.push(csa);
            }
            console.log(this.arr_cookies);
        }
    }
    /**
     * Saves cookie from arr_cookies array
     *
     * @returns void
     * @since 0.9
     */
    make_cookie_from_array() {
        if (Object.keys(this.arr_cookies).length != 0) {
            let updated_cookie = '';
            for (const key in this.arr_cookies) {
                const value = this.arr_cookies[key];
                updated_cookie = updated_cookie + key + '=' + value;
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WMCookies);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WMCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/WMCookies */ "./src/components/WMCookies.ts");

/**
 * Code to stop storing all cookies
 *
export {};
declare global {
  interface Document {
    __defineGetter__: any;
    __defineSetter__: any;
  }
}
if( !document.__defineGetter__ ) {
  Object.defineProperty( document, 'cookie', {
    get: function () {return '';},
    set: function () {return true;},
  } );
} else {
  document.__defineGetter__( 'cookie', function () { return '';} );
  document.__defineSetter__( 'cookie', function () { return '';} );
}
*/
const WMCookiesInst = new _components_WMCookies__WEBPACK_IMPORTED_MODULE_0__["default"]('');
window.wmwp_cookie_consent = false;
document.addEventListener('DOMContentLoaded', () => {
    const el_cookie_banner = document.querySelector('#wmwp-cookies-banner');
    const el_consent = el_cookie_banner.querySelector('#wmwp-cookies-consent');
    const el_deny = el_cookie_banner.querySelector('#wmwp-cookies-deny');
    //Show if the cookie is not provided
    const wmc = WMCookiesInst.getCookie('wmc09');
    if (!wmc) {
        el_cookie_banner.style.display = 'flex';
    }
    else if (wmc == 'true') {
        window.wmwp_cookie_consent = true;
    }
    el_consent.addEventListener('click', () => {
        WMCookiesInst.setCookie('wmc09', 'true', (1000 * 60 * 60 * 24 * 365));
        el_cookie_banner.style.display = 'none';
    });
    el_deny.addEventListener('click', () => {
        WMCookiesInst.setCookie('wmc09', 'false', (1000 * 60 * 60 * 24 * 365));
        el_cookie_banner.style.display = 'none';
    });
});

})();

/******/ })()
;
//# sourceMappingURL=wmwp-cookies-frontend.js.map