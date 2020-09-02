(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"), require("react"), require("react-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet", "react", "react-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("leaflet"), require("react"), require("react-leaflet"));
	else
		root["ReactLeaflet"] = factory(root["L"], root["React"], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_leaflet__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_leaflet__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bing/Bing.tsx":
/*!***************************!*\
  !*** ./src/Bing/Bing.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_leaflet_1 = __webpack_require__(/*! react-leaflet */ \"react-leaflet\");\r\nconst L = __importStar(__webpack_require__(/*! leaflet */ \"leaflet\"));\r\nclass BingLayer extends react_leaflet_1.GridLayer {\r\n    createLeafletElement(props) {\r\n        return L.bingLayer(props.bingkey, this.getOptions(props));\r\n    }\r\n}\r\nexports.default = react_leaflet_1.withLeaflet(BingLayer);\r\n\n\n//# sourceURL=webpack://ReactLeaflet/./src/Bing/Bing.tsx?");

/***/ }),

/***/ "./src/Bing/BingGroup.tsx":
/*!********************************!*\
  !*** ./src/Bing/BingGroup.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_leaflet_1 = __webpack_require__(/*! react-leaflet */ \"react-leaflet\");\r\nconst Bing_1 = __importDefault(__webpack_require__(/*! ./Bing */ \"./src/Bing/Bing.tsx\"));\r\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/Bing/types.ts\");\r\nconst { BaseLayer } = react_leaflet_1.LayersControl;\r\nconst BingLayerGroup = (props) => {\r\n    var _a;\r\n    const [layers, setLayers] = react_1.useState([]);\r\n    react_1.useEffect(() => {\r\n        switch (props.ml) {\r\n            case types_1.MapLayers.TrafficFlow:\r\n                const { ml } = props, rest = __rest(props, [\"ml\"]);\r\n                console.log(props, rest);\r\n                const Imagery = react_1.default.createElement(Bing_1.default, Object.assign({}, rest)), Traffic = react_1.default.createElement(Bing_1.default, Object.assign({}, props));\r\n                setLayers([Imagery, Traffic]);\r\n                break;\r\n            default:\r\n                throw new Error(\"Not yet supported\");\r\n        }\r\n    }, [props.ml]);\r\n    return layers.length > 0 ? react_1.default.createElement(react_1.default.Fragment, null, layers) : (_a = props === null || props === void 0 ? void 0 : props.fallback) !== null && _a !== void 0 ? _a : react_1.default.createElement(\"p\", null, \"Loading...\");\r\n};\r\nexports.default = BingLayerGroup;\r\n\n\n//# sourceURL=webpack://ReactLeaflet/./src/Bing/BingGroup.tsx?");

/***/ }),

/***/ "./src/Bing/index.ts":
/*!***************************!*\
  !*** ./src/Bing/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BingLayerGroup = exports.BingLayer = void 0;\r\nconst Bing_1 = __importDefault(__webpack_require__(/*! ./Bing */ \"./src/Bing/Bing.tsx\"));\r\nexports.BingLayer = Bing_1.default;\r\nconst BingGroup_1 = __importDefault(__webpack_require__(/*! ./BingGroup */ \"./src/Bing/BingGroup.tsx\"));\r\nexports.BingLayerGroup = BingGroup_1.default;\r\n__exportStar(__webpack_require__(/*! ./types */ \"./src/Bing/types.ts\"), exports);\r\n\n\n//# sourceURL=webpack://ReactLeaflet/./src/Bing/index.ts?");

/***/ }),

/***/ "./src/Bing/types.ts":
/*!***************************!*\
  !*** ./src/Bing/types.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BingLayer = exports.ImagerySets = exports.MapLayers = void 0;\r\nconst react_leaflet_1 = __webpack_require__(/*! react-leaflet */ \"react-leaflet\");\r\nvar MapLayers;\r\n(function (MapLayers) {\r\n    MapLayers[\"Basemap\"] = \"Basemap\";\r\n    MapLayers[\"Buildings\"] = \"Buildings\";\r\n    MapLayers[\"OrdnanceSurvey\"] = \"OrdnanceSurvey\";\r\n    MapLayers[\"TrafficFlow\"] = \"TrafficFlow\";\r\n})(MapLayers = exports.MapLayers || (exports.MapLayers = {}));\r\nvar ImagerySets;\r\n(function (ImagerySets) {\r\n    ImagerySets[\"Aerial\"] = \"Aerial\";\r\n    ImagerySets[\"AerialWithLabels\"] = \"AerialWithLabels\";\r\n    ImagerySets[\"AerialWithLabelIsOnDemand\"] = \"AerialWithLabelIsOnDemand\";\r\n    ImagerySets[\"Streetside\"] = \"Streetside\";\r\n    ImagerySets[\"BirdsEye\"] = \"BirdsEye\";\r\n    ImagerySets[\"BirdsEyeWithLabels\"] = \"BirdsEyeWithLabels\";\r\n    ImagerySets[\"Road\"] = \"Road\";\r\n    ImagerySets[\"CanvasDark\"] = \"CanvasDark\";\r\n    ImagerySets[\"CanvasLight\"] = \"CanvasLight\";\r\n    ImagerySets[\"CanvasGrey\"] = \"CanvasGrey\";\r\n})(ImagerySets = exports.ImagerySets || (exports.ImagerySets = {}));\r\nclass BingLayer extends react_leaflet_1.GridLayer {\r\n}\r\nexports.BingLayer = BingLayer;\r\n\n\n//# sourceURL=webpack://ReactLeaflet/./src/Bing/types.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./leaflet.bing */ \"./src/leaflet.bing.ts\");\r\n__exportStar(__webpack_require__(/*! ./Bing */ \"./src/Bing/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack://ReactLeaflet/./src/index.ts?");

/***/ }),

/***/ "./src/leaflet.bing.ts":
/*!*****************************!*\
  !*** ./src/leaflet.bing.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// @ts-ignore As there is conflict in the @types/leaflet\r\nL.BingLayer = L.TileLayer.extend({\r\n    options: {\r\n        subdomains: [0, 1, 2, 3],\r\n        type: 'Aerial',\r\n        attribution: 'Bing',\r\n        culture: '',\r\n        style: ''\r\n    },\r\n    initialize: function (bing_key, options) {\r\n        L.Util.setOptions(this, options);\r\n        this._bing_key = bing_key;\r\n        this._url = null;\r\n        this._providers = [];\r\n        this.metaRequested = false;\r\n    },\r\n    tile2quad: function (x, y, z) {\r\n        var quad = '';\r\n        for (var i = z; i > 0; i--) {\r\n            var digit = 0;\r\n            var mask = 1 << (i - 1);\r\n            if ((x & mask) !== 0)\r\n                digit += 1;\r\n            if ((y & mask) !== 0)\r\n                digit += 2;\r\n            quad = quad + digit;\r\n        }\r\n        return quad;\r\n    },\r\n    getTileUrl: function (tilePoint) {\r\n        var _a;\r\n        var zoom = this._getZoomForUrl();\r\n        var subdomains = this.options.subdomains, s = this.options.subdomains[Math.abs((tilePoint.x + tilePoint.y) % subdomains.length)];\r\n        const new_url = (((_a = this.options) === null || _a === void 0 ? void 0 : _a.ml) === \"TrafficFlow\") ?\r\n            this._url.replace('{subdomain}', s)\r\n                .replace(/.({quadkey})/, 't$1')\r\n                .replace('jpeg', 'png')\r\n                .replace('{quadkey}', this.tile2quad(tilePoint.x, tilePoint.y, zoom))\r\n                .replace('{culture}', this.options.culture)\r\n            :\r\n                this._url.replace('{subdomain}', s)\r\n                    .replace('{quadkey}', this.tile2quad(tilePoint.x, tilePoint.y, zoom))\r\n                    .replace('{culture}', this.options.culture);\r\n        return new_url;\r\n    },\r\n    loadMetadata: function () {\r\n        if (this.metaRequested)\r\n            return;\r\n        this.metaRequested = true;\r\n        var _this = this;\r\n        var cbid = '_bing_metadata_' + L.Util.stamp(this);\r\n        window[cbid] = function (meta) {\r\n            window[cbid] = undefined;\r\n            var e = document.getElementById(cbid);\r\n            e.parentNode.removeChild(e);\r\n            if (meta.errorDetails) {\r\n                console.log(meta.errorDetails);\r\n                return;\r\n            }\r\n            _this.initMetadata(meta);\r\n        };\r\n        var urlScheme = (document.location.protocol === 'file:') ? 'http' : document.location.protocol.slice(0, -1);\r\n        var url = urlScheme + '://dev.virtualearth.net/REST/v1/Imagery/Metadata/'\r\n            + this.options.type + '?include=ImageryProviders&jsonp=' + cbid +\r\n            '&key=' + this._bing_key + '&UriScheme=' + urlScheme + '&culture=' + this.options.culture + '&style=' + this.options.style;\r\n        var script = document.createElement('script');\r\n        script.type = 'text/javascript';\r\n        script.src = url;\r\n        script.id = cbid;\r\n        document.getElementsByTagName('head')[0].appendChild(script);\r\n    },\r\n    initMetadata: function (meta) {\r\n        var r = meta.resourceSets[0].resources[0];\r\n        this.options.subdomains = r.imageUrlSubdomains;\r\n        this._url = r.imageUrl;\r\n        console.log(this._url);\r\n        if (r.imageryProviders) {\r\n            for (var i = 0; i < r.imageryProviders.length; i++) {\r\n                var p = r.imageryProviders[i];\r\n                for (var j = 0; j < p.coverageAreas.length; j++) {\r\n                    var c = p.coverageAreas[j];\r\n                    var coverage = {\r\n                        zoomMin: c.zoomMin,\r\n                        zoomMax: c.zoomMax,\r\n                        active: false,\r\n                        bounds: new L.LatLngBounds(new L.LatLng(c.bbox[0] + 0.01, c.bbox[1] + 0.01), new L.LatLng(c.bbox[2] - 0.01, c.bbox[3] - 0.01)),\r\n                        attrib: p.attribution\r\n                    };\r\n                    this._providers.push(coverage);\r\n                }\r\n            }\r\n        }\r\n        this._update();\r\n    },\r\n    _update: function () {\r\n        if (this._url === null || !this._map)\r\n            return;\r\n        this._update_attribution();\r\n        L.TileLayer.prototype._update.apply(this, []);\r\n    },\r\n    _update_attribution: function () {\r\n        var bounds = this._map.getBounds();\r\n        var zoom = this._map.getZoom();\r\n        for (var i = 0; i < this._providers.length; i++) {\r\n            var p = this._providers[i];\r\n            if ((zoom <= p.zoomMax && zoom >= p.zoomMin) &&\r\n                bounds.intersects(p.bounds)) {\r\n                if (!p.active && this._map.attributionControl)\r\n                    this._map.attributionControl.addAttribution(p.attrib);\r\n                p.active = true;\r\n            }\r\n            else {\r\n                if (p.active && this._map.attributionControl)\r\n                    this._map.attributionControl.removeAttribution(p.attrib);\r\n                p.active = false;\r\n            }\r\n        }\r\n    },\r\n    onAdd: function (map) {\r\n        this.loadMetadata();\r\n        L.TileLayer.prototype.onAdd.apply(this, [map]);\r\n    },\r\n    onRemove: function (map) {\r\n        for (var i = 0; i < this._providers.length; i++) {\r\n            var p = this._providers[i];\r\n            if (p.active && this._map.attributionControl) {\r\n                this._map.attributionControl.removeAttribution(p.attrib);\r\n                p.active = false;\r\n            }\r\n        }\r\n        L.TileLayer.prototype.onRemove.apply(this, [map]);\r\n    }\r\n});\r\n// @ts-ignore -- Let JS be js\r\nL.bingLayer = function (bing_key, options) {\r\n    return new L.BingLayer(bing_key, options);\r\n};\r\n\n\n//# sourceURL=webpack://ReactLeaflet/./src/leaflet.bing.ts?");

/***/ }),

/***/ "leaflet":
/*!****************************************************************************************!*\
  !*** external {"amd":"leaflet","commonjs":"leaflet","commonjs2":"leaflet","root":"L"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_leaflet__;\n\n//# sourceURL=webpack://ReactLeaflet/external_%7B%22amd%22:%22leaflet%22,%22commonjs%22:%22leaflet%22,%22commonjs2%22:%22leaflet%22,%22root%22:%22L%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactLeaflet/external_%7B%22amd%22:%22react%22,%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22root%22:%22React%22%7D?");

/***/ }),

/***/ "react-leaflet":
/*!***********************************************************************************************!*\
  !*** external {"amd":"react-leaflet","commonjs":"react-leaflet","commonjs2":"react-leaflet"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_leaflet__;\n\n//# sourceURL=webpack://ReactLeaflet/external_%7B%22amd%22:%22react-leaflet%22,%22commonjs%22:%22react-leaflet%22,%22commonjs2%22:%22react-leaflet%22%7D?");

/***/ })

/******/ });
});