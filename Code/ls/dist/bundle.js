/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var genguxuanyin_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! genguxuanyin-localstorage */ \"./node_modules/genguxuanyin-localstorage/main.js\");\n// import ls from './node_modules/genguxuanyin-localstorage/main.js';\r\n\r\nvar LS = new genguxuanyin_localstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('LS__');\r\nLS.set('a', 'xiaoming', function () {\r\n    console.log(arguments);\r\n});\r\nLS.set('b', 'xiaobai', function () {\r\n    console.log(arguments);\r\n});\r\nLS.get('a', function () {\r\n    console.log(arguments)\r\n});\r\nLS.remove('a', function () {\r\n    console.log(arguments)\r\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/genguxuanyin-localstorage/main.js":
/*!********************************************************!*\
  !*** ./node_modules/genguxuanyin-localstorage/main.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description: \r\n * @param {String} \r\n * @param {String} \r\n * @return: Object\r\n */\r\nvar BaseLocalStorage = function(preId,timeSign){\r\n    this.preId = preId;\r\n    this.timeSign = timeSign || '|-|';\r\n}\r\nObject.assign(BaseLocalStorage.prototype,{\r\n    status:{\r\n        SUCCESS:0,\r\n        FAILURE:1,\r\n        OVERFLOW:2,\r\n        TIMEOUT:3\r\n    },\r\n    storage: localStorage || window.localStorage,\r\n    getKey(key){\r\n        return this.preId + key;\r\n    },\r\n    set(key,value,callback,time){\r\n        var status = this.status.SUCCESS,\r\n            key = this.getKey(key);\r\n        try {\r\n            time = new Date(time).getTime() || time.getTime();\r\n        } catch (error) {\r\n            time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;\r\n        }\r\n        try {\r\n            this.storage.setItem(key,time + this.timeSign + value);\r\n        } catch (error) {\r\n            status = this.status.OVERFLOW;\r\n        }\r\n        callback && callback(this,status,key,value);\r\n    },\r\n    get(key,callback){\r\n        var status = this.status.SUCCESS,\r\n            key = this.getKey(key),\r\n            value = null,\r\n            timeSignLen = this.timeSign.length,\r\n            me = this,\r\n            index,\r\n            time,\r\n            result;\r\n        try {\r\n            value = me.storage.getItem(key);\r\n        } catch (error) {\r\n            result = {\r\n                status:me.status.FAILURE,\r\n                value\r\n            }\r\n        }\r\n        if(value){\r\n            index = value.indexOf(this.timeSign);\r\n            time = +value.slice(0,index);\r\n            if(new Date(time).getTime() > new Date().getTime() || time ==0){\r\n                value = value.slice(index + timeSignLen);\r\n            } else {\r\n                value = null,\r\n                status = this.status.TIMEOUT;\r\n                this.remove(key);\r\n            }\r\n        } else {\r\n            status = this.status.FAILURE;\r\n        }\r\n        result = {\r\n            status,value\r\n        }\r\n        callback && callback.call(this,result.status,result.value);\r\n        return result;\r\n    },\r\n    remove(key,callback){\r\n        var status = this.status.FAILURE,\r\n            key = this.getKey(key),\r\n            value = null;\r\n        try {\r\n            value = this.storage.getItem(key);\r\n        } catch (error) {\r\n            \r\n        }\r\n        if(value){\r\n            try {\r\n                this.storage.removeItem(key);\r\n                status = this.status.SUCCESS;\r\n            } catch (error) {\r\n                \r\n            }\r\n        }\r\n        callback&&callback.call(this,status,value==null?null:value.slice(value.indexOf(this.timeSign) + this.timeSign.length))\r\n    }\r\n});\r\n/**\r\n    var LS = new BaseLocalStorage('LS__');\r\n    LS.set('a','xiaoming',function(){\r\n        console.log(arguments);\r\n    });\r\n    LS.set('b','xiaobai',function(){\r\n        console.log(arguments);\r\n    });\r\n    LS.get('a',function(){\r\n        console.log(arguments)\r\n    });\r\n    LS.remove('a',function(){\r\n        console.log(arguments)\r\n    });\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseLocalStorage);\n\n//# sourceURL=webpack:///./node_modules/genguxuanyin-localstorage/main.js?");

/***/ })

/******/ });