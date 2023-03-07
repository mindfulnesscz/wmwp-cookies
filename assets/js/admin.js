/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/SettingsPage.tsx":
/*!*****************************************!*\
  !*** ./src/components/SettingsPage.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Guttenberg & React based settings page for ESS Career Plugin
 */
//framework




/**
 *
 * @returns
 */
const WMCookiesSettingsPage = () => {
    const [isAPILoaded, setIsApiLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [isAPILoading, setIsApiLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [settingsList, setSettingsList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    /**
     * Grabs settings to further refference
     * Name of the settings is
     * @return void
     */
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        wp.api.loadPromise.then(() => {
            const settings = new wp.api.models.Settings();
            if (false === isAPILoaded) {
                settings.fetch().then((response) => {
                    console.log('response');
                    console.log(response);
                    const Settings = JSON.parse(response.wmcookies_settings_json);
                    setSettingsList(Settings);
                    setIsApiLoaded(true);
                });
            }
        });
    }, []);
    /**
     * responsible for saving changed settings back to database
     * @return void
     */
    const saveOptions = () => {
        setIsApiLoading(true);
        const model = new wp.api.models.Settings({
            ['wmcookies_settings_json']: JSON.stringify(settingsList),
        });
        model.save().then(() => {
            setIsApiLoading(false);
        });
    };
    /**
     * Updates settings when some of the career post meta option is changed
     * @param key_name String option slug
     * @param data Array data to be passed to itemsList
     * @return void
     */
    const updateSetting = (key_name, data) => {
        const newList = Object.assign({}, settingsList);
        newList[key_name] = data;
        setSettingsList(newList);
    };
    /**
     * Updates settings when some of the career post meta option is changed
     * @return JSX.Elementd
     */
    const render = () => {
        if (!isAPILoaded) {
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { id: "wmwp-settings-main" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", { className: 'text-center' }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Webmind Cookies Plugin Settings')),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "wmwp-settings-group" },
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global settings'), initialOpen: true },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, { className: "pb-8" },
                                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, { label: "Test toggle", help: 'test toggle', checked: settingsList ? settingsList.setting1 : false, onChange: () => {
                                            updateSetting('setting1', settingsList && !settingsList.setting1);
                                            console.log(settingsList);
                                        } })))),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, { className: 'my-12' },
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { className: 'wmwp-settings-submit', disabled: isAPILoading, onClick: saveOptions },
                                "Save",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null),
                                "Options"))))));
        }
    };
    return (render());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WMCookiesSettingsPage);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!***********************!*\
  !*** ./src/admin.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/components/SettingsPage.tsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const { render } = _wordpress_element__WEBPACK_IMPORTED_MODULE_2__;
document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('wmcookies-options-wrapper');
    if (cont) {
        render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"], null), cont);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=admin.js.map