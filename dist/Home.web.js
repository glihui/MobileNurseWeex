// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Home = __webpack_require__(68);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Home2.default.el = '#root'; // 主页面
	exports.default = new Vue(_Home2.default);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 界面服务器地址

	var AddressURL = 'http://192.168.1.200:8080/dist/'; // 测试主机IP，可修改！

	exports.default = AddressURL;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 后端服务器数据
	var IsTest = true;

	var OfficialServer = {
	  his: '',
	  kf: ''
	};

	var TestServer = {
	  his: '',
	  kf: ''
	  // kf: ''


	  // const LocalServer = {
	  //   his: '',
	  //   kf: ''
	  // }

	};var BackServer = IsTest ? TestServer : OfficialServer;

	exports.default = BackServer;

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(69)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(71),
	  /* template */
	  __webpack_require__(101),
	  /* scopeId */
	  "data-v-386cd968",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/Home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-386cd968", Component.options)
	  } else {
	    hotAPI.reload("data-v-386cd968", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("a4ee61dc", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.0.26.4@css-loader/index.js!../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-386cd968&scoped=true!../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
	     var newContent = require("!!../../node_modules/.0.26.4@css-loader/index.js!../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-386cd968&scoped=true!../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.button[data-v-386cd968] {\n  font-size: 60px;\n  width: 450px;\n  text-align: center;\n  margin-top: 30px;\n  margin-left: 150px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-width: 2px;\n  border-style: solid;\n  color: #666666;\n  border-color: #DDDDDD;\n  background-color: #F5F5F5\n}\n.btn-group[data-v-386cd968] {\n  height: 1000px;\n  margin-top: 20px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.row[data-v-386cd968] {\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 10px;\n}\n.header[data-v-386cd968] {\n  position: relative;\n  height: 120px;\n  margin-bottom: 3px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #DDDDDD;\n  background-color: #287098;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.title[data-v-386cd968] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 40px;\n  line-height: 44px;\n  color: #FFFFFF;\n}\n.clickarea[data-v-386cd968]{\n  width:160px;\n  height: 120px;\n  padding-left: 40px;\n}\n.switch[data-v-386cd968] {\n  width: 120px;\n  height: 120px;\n  padding: 40px;\n}\n.switch[data-v-386cd968]:active {\n  width: 120px;\n  height: 120px;\n  padding: 40px;\n  background-color: #58B7FF;\n}\n.menu[data-v-386cd968] {\n  width: 120px;\n  height: 120px;\n  padding: 40px;\n}\n.white[data-v-386cd968] {\n  background-color: #58B7FF;\n}\n.float[data-v-386cd968] {\n  position: absolute;\n  right: 10px;\n  top: 100px;\n  width: 200px;\n  min-height: 200px;\n  background-color: #475669;\n  border-radius: 10px;\n  padding-top: 10ox;\n  padding-bottom: 10px;\n  flex-direction: column;\n}\n.item[data-v-386cd968] {\n  font-family: Verdana, Geneva, sans-serif;\n  width: 200px;\n  font-size: 32px;\n  line-height: 44px;\n  color: #FFFFFF;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n}\n.item-sel[data-v-386cd968] {\n  background-color: #ABCDEF;\n}\n.line[data-v-386cd968] {\n  background-color: #FFFFFF;\n  height: 1px;\n  width: 330px;\n}\n", ""]);

	// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppHeader = __webpack_require__(72);

	var _AppHeader2 = _interopRequireDefault(_AppHeader);

	var _Bed = __webpack_require__(77);

	var _Bed2 = _interopRequireDefault(_Bed);

	var _Menu = __webpack_require__(88);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Test = __webpack_require__(98);

	var _Test2 = _interopRequireDefault(_Test);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var storage = weex.requireModule('storage'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      Menu: _ViewServer2.default + 'img/menu.png',
	      Switch: _ViewServer2.default + 'img/switch.png',
	      isActive: false,
	      Title: '',
	      TitleArr: ['请选择模块', '床位图', '确费补费', '模块一', '模块二', '模块三', '模块四', '模块五', '模块六', '模块七', '模块八', '模块九', '模块十'],
	      Page: 1,
	      old: 1,
	      IsMenuShow: false,
	      Ward: '三病区'
	    };
	  },
	  mounted: function mounted() {
	    console.log('Render Home');
	    this.getUserInfo();
	    this.toPage(0);
	  },

	  methods: {
	    switchWard: function switchWard(ward) {
	      this.Ward = ward;
	      storage.setItem('CurWard', ward);
	      this.IsMenuShow = false;
	    },
	    showMenu: function showMenu() {
	      this.IsMenuShow = !this.IsMenuShow;
	    },
	    getUserInfo: function getUserInfo() {
	      storage.getItem('UserInfo', function (event) {
	        var Info = eval('(' + event.data + ')');
	        console.log('Home-UserInfo:' + Info);
	      });
	    },
	    toMenu: function toMenu() {
	      console.log('toMenu');
	      this.IsMenuShow = false;
	      this.isActive = !this.isActive;
	      if (this.isActive) {
	        this.old = this.Page;
	        this.Page = 0;
	      } else {
	        this.Page = this.old;
	      }
	      this.showTitle();
	    },
	    toPage: function toPage(i) {
	      console.log('toPage');
	      this.isActive = false;
	      this.Page = i + 1;
	      this.showTitle();
	    },
	    showTitle: function showTitle() {
	      this.Title = this.TitleArr[this.Page];
	    }
	  },
	  components: {
	    AppHeader: _AppHeader2.default,
	    Bed: _Bed2.default,
	    Menu: _Menu2.default,
	    Test: _Test2.default
	  }
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(73)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(75),
	  /* template */
	  __webpack_require__(76),
	  /* scopeId */
	  "data-v-73cdf4fc",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/AppHeader.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] AppHeader.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-73cdf4fc", Component.options)
	  } else {
	    hotAPI.reload("data-v-73cdf4fc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("f2a4b63a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-73cdf4fc&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./AppHeader.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-73cdf4fc&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./AppHeader.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.header[data-v-73cdf4fc] {\n  position: relative;\n  height: 120px;\n  margin-bottom: 3px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #DDDDDD;\n  background-color: #287098;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.title[data-v-73cdf4fc] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 32px;\n  line-height: 44px;\n  color: #FFFFFF;\n}\n.setting[data-v-73cdf4fc] {\n  width: 100px;\n  height: 100px;\n  padding: 10px;\n}\n.menu[data-v-73cdf4fc] {\n  width: 100px;\n  height: 100px;\n  padding: 10px;\n}\n.white[data-v-73cdf4fc] {\n  background-color: #58B7FF;\n}\n", ""]);

	// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');

	exports.default = {
	  name: 'AppHeader',
	  data: function data() {
	    return {
	      Menu: _ViewServer2.default + 'img/menu.png',
	      Setting: _ViewServer2.default + 'img/setting.png',
	      isActive: false,
	      active: 'white'
	    };
	  },

	  props: {
	    PatientInfo: String,
	    initActive: Boolean
	  },
	  watch: {
	    PatientInfo: function PatientInfo(val, old) {
	      console.log('PatientInfo = ' + val);
	    },
	    initActive: function initActive(val, old) {
	      console.log('initActive = ' + val);
	      this.isActive = val;
	    }
	  },
	  methods: {
	    clickMenu: function clickMenu(evt) {
	      this.isActive = !this.isActive;
	      this.$emit('menuClick', this.isActive);
	    },
	    clickSetting: function clickSetting(evt) {
	      this.$emit('settingClick', evt);
	    },
	    back: function back() {
	      navigator.pop({
	        animated: 'true'
	      }, function (event) {
	        console.log(event);
	      });
	    }
	  }
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('image', {
	    staticClass: "menu",
	    class: [_vm.isActive ? _vm.active : ''],
	    attrs: {
	      "src": _vm.Menu
	    },
	    on: {
	      "click": _vm.clickMenu
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.PatientInfo))]), _vm._v(" "), _c('image', {
	    staticClass: "setting",
	    attrs: {
	      "src": _vm.Setting
	    },
	    on: {
	      "click": _vm.clickSetting
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73cdf4fc", module.exports)
	  }
	}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(78)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(80),
	  /* template */
	  __webpack_require__(87),
	  /* scopeId */
	  "data-v-7703edfe",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/home/Bed.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Bed.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7703edfe", Component.options)
	  } else {
	    hotAPI.reload("data-v-7703edfe", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("28e12289", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7703edfe&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Bed.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7703edfe&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Bed.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.list-content[data-v-7703edfe] {\n  width: 750px;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: left;\n}\n.block[data-v-7703edfe] {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  margin-left: 12px;\n  margin-right: 12px;\n  width: 350px;\n  height: 350px;\n}\n.row[data-v-7703edfe] {\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 10px;\n}\n.scroller[data-v-7703edfe] {\n  width: auto;\n}\n", ""]);

	// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Block = __webpack_require__(81);

	var _Block2 = _interopRequireDefault(_Block);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	var _BackServer = __webpack_require__(45);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _Utf = __webpack_require__(86);

	var _Utf2 = _interopRequireDefault(_Utf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var stream = weex.requireModule('stream');
	var navigator = weex.requireModule('navigator');

	exports.default = {
	  name: 'Bed',
	  data: function data() {
	    return {
	      PatientArr: [],
	      UserInfo: ''
	    };
	  },

	  props: {
	    Ward: {
	      type: String,
	      default: '三病区'
	    }
	  },
	  mounted: function mounted() {
	    console.log('Render Bed');
	    this.getUserInfo();
	  },

	  watch: {
	    Ward: function Ward(val) {
	      this.PatientArr = [];
	      this.UserInfo = '';
	      this.getUserInfo();
	    }
	  },
	  methods: {
	    getUserInfo: function getUserInfo() {
	      var that = this;
	      // storage.getItem('CurWard', event => {
	      //   console.log('get CurWard:', event.data)
	      var DepartmentName = this.Ward;
	      if (!DepartmentName) {
	        DepartmentName = '三病区';
	      }
	      var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursStation/NursesViewList?ZYH=' + (0, _Utf2.default)(DepartmentName) + '&type=2';
	      // let url = BackServer.kf + 'api/v1/Hospitalized/NursStation/NursesViewList?ZYH=三病区&type=2'
	      console.log('NurseViewUrl = ' + url);
	      stream.fetch({
	        method: 'GET',
	        type: 'json',
	        url: url
	      }, function (res) {
	        var json = eval('(' + res.data + ')');
	        var PatientList = eval('(' + json.Message + ')');

	        that.PatientArr = PatientList;

	        if (that.PatientArr.length % 2 === 0) {
	          that.LineCount = that.PatientArr.length / 2;
	        } else {
	          that.LineCount = Math.floor(that.PatientArr.length / 2) + 1;
	        }
	      });
	      // })
	    },
	    getAge: function getAge(date) {
	      if (!date) {
	        return '';
	      }
	      var returnAge = void 0;

	      var mDate = date.split('T')[0];

	      var strBirthdayArr = mDate.split('-');
	      var birthYear = strBirthdayArr[0];
	      var birthMonth = strBirthdayArr[1];
	      var birthDay = strBirthdayArr[2];
	      var Now = new Date();
	      var nowYear = Now.getFullYear();
	      var nowMonth = Now.getMonth() + 1;
	      var nowDay = Now.getDate();

	      if (nowYear === birthYear) {
	        returnAge = 0; // 同年则为0岁
	      } else {
	        var ageDiff = nowYear - birthYear; // 年之差
	        if (ageDiff > 0) {
	          if (nowMonth === birthMonth) {
	            var dayDiff = nowDay - birthDay; // 日之差
	            if (dayDiff < 0) {
	              returnAge = ageDiff - 1;
	            } else {
	              returnAge = ageDiff;
	            }
	          } else {
	            var monthDiff = nowMonth - birthMonth; // 月之差
	            if (monthDiff < 0) {
	              returnAge = ageDiff - 1;
	            } else {
	              returnAge = ageDiff;
	            }
	          }
	        } else {
	          returnAge = -1; // 返回-1 表示出生日期输入错误 晚于今天
	        }
	      }
	      return returnAge; // 返回周岁年龄
	    },
	    formatDate: function formatDate(date) {
	      if (!date) {
	        return '';
	      }
	      var arr = date.split('T');
	      return arr[0];
	    },
	    jump: function jump(item, index) {
	      console.log('Bed Jump:' + item);
	      var itemStr = JSON.stringify(item);
	      storage.setItem('PatientInfo', itemStr, function (event) {
	        console.log('sucessful save');
	      });
	      navigator.push({
	        url: _ViewServer2.default + 'PatientDetail.weex.js',
	        animated: 'true'
	      }, function (event) {
	        console.log('successful entry');
	      });
	    }
	  },
	  components: {
	    Block: _Block2.default
	  }
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(82)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(84),
	  /* template */
	  __webpack_require__(85),
	  /* scopeId */
	  "data-v-0f4e5481",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/Block.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Block.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0f4e5481", Component.options)
	  } else {
	    hotAPI.reload("data-v-0f4e5481", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(83);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("9af49f8a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-0f4e5481&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Block.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-0f4e5481&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Block.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.icon[data-v-0f4e5481] {\n  height: 44px;\n  width: 44px;\n}\n.wrap[data-v-0f4e5481] {\n  align-items: center;\n  flex-direction: column;\n  border-width: 1px;\n  border-radius: 30%;\n  border-style: solid;\n  border-color: #99A9BF;\n  width: 750px;\n  height: 1300px;\n}\n.topblock[data-v-0f4e5481] {\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.left[data-v-0f4e5481] {\n  flex: 3;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.right[data-v-0f4e5481] {\n  flex: 1;\n  width: 100px;\n  height: 100px;\n}\n.baseinfo[data-v-0f4e5481] {\n  flex-direction: row;\n}\n.infoa[data-v-0f4e5481] {\n  width: 215px;\n  font-family: Verdana, Geneva, sans-serif;\n  min-height: 20px;\n  font-size: 23px;\n  padding-bottom: 10px;\n  line-height: 33px;\n}\n.infob[data-v-0f4e5481] {\n  width: 210px;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 23px;\n  padding-bottom: 10px;\n  line-height: 33px;\n}\n.infoc[data-v-0f4e5481] {\n  width: 243px;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.footer[data-v-0f4e5481] {\n  background-color: #359efd;\n  border-bottom-left-radius: 33%;\n  border-bottom-right-radius: 34%;\n  border-style: solid;\n  border-color: #99A9BF;\n  border-left-width: 1px;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  width: 350px;\n  height: 65px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0px;\n  top: 285px;\n}\n.baseb[data-v-0f4e5481],\n.basec[data-v-0f4e5481] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 23px;\n  color: #ca5952;\n  font-weight: 200px;\n  padding-top: 8px;\n  margin-left: 12px;\n}\n.basea[data-v-0f4e5481] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 32px;\n  font-weight: 160px;\n}\n.topblock[data-v-0f4e5481] {\n  margin-left: 16px;\n}\n.detailinfo[data-v-0f4e5481] {\n  margin-top: 18px;\n}\n.footfont[data-v-0f4e5481] {\n  font-size: 32px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \n.text-content {\n  margin-top: 10px;\n  font-size: 25px;\n  flex-direction: row;\n}\n\n.datashow {\n  margin-top: 10px;\n  font-size: 25px;\n}\n\n.bedno {\n  margin-right: 0px;\n}\n\n.name {\n  margin-left: 25px;\n}\n\n.imgcon {\n  flex-direction: row;\n  justify-content: center;\n}\n\n.icon1 {\n  margin-left: 1px;\n  padding: 0px 15px;\n}\n\n.icon2 {\n  margin-left: 1px;\n  padding: 0px 20px;\n}\n\n.icon3 {\n  margin-left: 1px;\n  padding: 0px 15px;\n} */\n", ""]);

	// exports


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'Block',
	  props: {
	    BedNo: String,
	    Name: String,
	    DataShow: String,
	    IconUrl: String,
	    Sex: String,
	    Age: [String, Number],
	    MSZD: String,
	    medic: String
	  },
	  methods: {
	    handleClick: function handleClick(evt) {
	      this.$emit('click', evt);
	    }
	  }
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrap",
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_c('div', {
	    staticClass: "topblock"
	  }, [_c('div', {
	    staticClass: "left"
	  }, [_c('div', {
	    staticClass: "baseinfo"
	  }, [_c('text', {
	    staticClass: "basea"
	  }, [_vm._v(_vm._s(_vm.Name))]), _vm._v(" "), _c('text', {
	    staticClass: "baseb"
	  }, [_vm._v(_vm._s(_vm.Sex))]), _vm._v(" "), _c('text', {
	    staticClass: "basec"
	  }, [_vm._v(_vm._s(_vm.Age))])]), _vm._v(" "), _c('div', {
	    staticClass: "detailinfo"
	  }, [_c('text', {
	    staticClass: "infoa"
	  }, [_vm._v(_vm._s(_vm.MSZD))]), _vm._v(" "), _c('text', {
	    staticClass: "infob"
	  }, [_vm._v("过敏药物：" + _vm._s(_vm.medic))]), _vm._v(" "), _c('text', {
	    staticClass: "infoc"
	  }, [_vm._v("入院时间：" + _vm._s(_vm.DataShow))])])]), _vm._v(" "), _c('div', {
	    staticClass: "right"
	  }, [_c('text', [_vm._v("图")])])]), _vm._v(" "), _c('div', {
	    staticClass: "footer"
	  }, [_c('text', {
	    staticClass: "footfont"
	  }, [_vm._v(_vm._s(_vm.BedNo))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0f4e5481", module.exports)
	  }
	}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function EncodeUtf8(s1) {
	  var s = escape(s1);
	  var sa = s.split('%');
	  var retV = '';
	  if (sa[0] !== '') {
	    retV = sa[0];
	  }
	  for (var i = 1; i < sa.length; i++) {
	    if (sa[i].substring(0, 1) === 'u') {
	      retV += Hex2Utf8(Str2Hex(sa[i].substring(1, 5)));
	    } else {
	      retV += '%' + sa[i];
	    }
	  }

	  return retV;
	}
	function Str2Hex(s) {
	  var c = '';
	  var n;
	  var ss = '0123456789ABCDEF';
	  var digS = '';
	  for (var i = 0; i < s.length; i++) {
	    c = s.charAt(i);
	    n = ss.indexOf(c);
	    digS += Dec2Dig(eval(n));
	  }
	  return digS;
	}
	function Dec2Dig(n1) {
	  var s = '';
	  var n2 = 0;
	  for (var i = 0; i < 4; i++) {
	    n2 = Math.pow(2, 3 - i);
	    if (n1 >= n2) {
	      s += '1';
	      n1 = n1 - n2;
	    } else {
	      s += '0';
	    }
	  }
	  return s;
	}
	function Dig2Dec(s) {
	  var retV = 0;
	  if (s.length === 4) {
	    for (var i = 0; i < 4; i++) {
	      retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
	    }
	    return retV;
	  }
	  return -1;
	}
	function Hex2Utf8(s) {
	  var retS = '';
	  var tempS = '';
	  var ss = '';
	  if (s.length === 16) {
	    tempS = '1110' + s.substring(0, 4);
	    tempS += '10' + s.substring(4, 10);
	    tempS += '10' + s.substring(10, 16);
	    var sss = '0123456789ABCDEF';
	    for (var i = 0; i < 3; i++) {
	      retS += '%';
	      ss = tempS.substring(i * 8, (eval(i) + 1) * 8);
	      retS += sss.charAt(Dig2Dec(ss.substring(0, 4)));
	      retS += sss.charAt(Dig2Dec(ss.substring(4, 8)));
	    }
	    return retS;
	  }
	  return '';
	}

	exports.default = EncodeUtf8;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: "scroller"
	  }, [_c('div', {
	    staticClass: "list-content"
	  }, _vm._l((_vm.PatientArr), function(item, index) {
	    return _c('block', {
	      key: index,
	      staticClass: "block",
	      attrs: {
	        "Sex": item.Sex,
	        "medic": item.YWGM,
	        "pressure": item.MonitorUlcer,
	        "Age": _vm.getAge(item.DateOfBirth),
	        "BedNo": item.BedNO,
	        "Name": item.PaientName,
	        "DataShow": _vm.formatDate(item.InTime),
	        "MSZD": item.MSZD,
	        "IconUrl": _vm.TestIconUrl
	      },
	      on: {
	        "click": function($event) {
	          _vm.jump(item, index)
	        }
	      }
	    })
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7703edfe", module.exports)
	  }
	}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(89)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(91),
	  /* template */
	  __webpack_require__(97),
	  /* scopeId */
	  "data-v-1601f49c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/home/Menu.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Menu.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1601f49c", Component.options)
	  } else {
	    hotAPI.reload("data-v-1601f49c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("6f1a68e4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-1601f49c&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Menu.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-1601f49c&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Menu.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.button[data-v-1601f49c] {\n  font-size: 60px;\n  width: 450px;\n  text-align: center;\n  margin-top: 30px;\n  margin-left: 150px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-width: 2px;\n  border-style: solid;\n  color: #666666;\n  border-color: #DDDDDD;\n  background-color: #006699;\n}\n.btn-group[data-v-1601f49c] {\n  height: 1000px;\n  margin-top: 20px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.row[data-v-1601f49c] {\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 10px;\n}\n", ""]);

	// exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _IconButton = __webpack_require__(92);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const navigator = weex.requireModule('navigator')
	// const storage = weex.requireModule('storage')

	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	  name: 'Menu',
	  data: function data() {
	    return {
	      ImgArr: [{ ImgUrl: _ViewServer2.default + 'img/icon01.png', Content: '康复护理' }, { ImgUrl: _ViewServer2.default + 'img/icon02.png', Content: '康复计划' }, { ImgUrl: _ViewServer2.default + 'img/icon03.png', Content: '康复随访' }, { ImgUrl: _ViewServer2.default + 'img/icon04.png', Content: '监测统计' }, { ImgUrl: _ViewServer2.default + 'img/icon05.png', Content: '异常处理' }, { ImgUrl: _ViewServer2.default + 'img/icon06.png', Content: '重点关注病人' }, { ImgUrl: _ViewServer2.default + 'img/icon07.png', Content: '出院信息' }, { ImgUrl: _ViewServer2.default + 'img/icon08.png', Content: '智能输液' }, { ImgUrl: _ViewServer2.default + 'img/icon09.png', Content: '输液记录' }]
	    };
	  },

	  methods: {
	    getImg: function getImg(m, n) {
	      var i = (m - 1) * 3 + n - 1;
	      return this.ImgArr[i];
	    },
	    selectPage: function selectPage(m, n) {
	      var i = (m - 1) * 3 + n - 1;
	      this.$emit('selectPage', i);
	    }
	  },
	  components: {
	    IconButton: _IconButton2.default
	  }
	};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(93)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(95),
	  /* template */
	  __webpack_require__(96),
	  /* scopeId */
	  "data-v-7296b872",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/IconButton.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] IconButton.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7296b872", Component.options)
	  } else {
	    hotAPI.reload("data-v-7296b872", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("84794052", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7296b872&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./IconButton.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7296b872&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./IconButton.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.icon[data-v-7296b872] {\n    height: 200px;\n    width: 200px;\n}\n.wrap[data-v-7296b872] {\n  margin:10px;\n  align-items: center;\n  flex-direction: column;\n}\n.content[data-v-7296b872] {\n  margin-top: 10px;\n  font-size: 40px;\n}\n", ""]);

	// exports


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'IconButton',
	  props: {
	    ImgUrl: String,
	    Content: String
	  },
	  methods: {
	    handleClick: function handleClick(evt) {
	      this.$emit('click', evt);
	    }
	  }
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrap",
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_c('image', {
	    staticClass: "icon",
	    attrs: {
	      "src": _vm.ImgUrl
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "content"
	  }, [_vm._v(_vm._s(_vm.Content))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7296b872", module.exports)
	  }
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "btn-group"
	  }, _vm._l((3), function(m) {
	    return _c('div', {
	      key: m,
	      staticClass: "row"
	    }, _vm._l((3), function(n) {
	      return _c('icon-button', {
	        key: n,
	        attrs: {
	          "ImgUrl": _vm.getImg(m, n).ImgUrl,
	          "Content": _vm.getImg(m, n).Content
	        },
	        on: {
	          "click": function($event) {
	            _vm.selectPage(m, n)
	          }
	        }
	      })
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1601f49c", module.exports)
	  }
	}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(99),
	  /* template */
	  __webpack_require__(100),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/home/Test.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Test.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-56bd3936", Component.options)
	  } else {
	    hotAPI.reload("data-v-56bd3936", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//

	exports.default = {
	  name: 'Test',
	  props: {
	    title: String
	  }
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', [_vm._v(_vm._s(_vm.title))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-56bd3936", module.exports)
	  }
	}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "header"
	  }, [_c('image', {
	    staticClass: "menu",
	    class: [_vm.isActive ? 'white' : ''],
	    attrs: {
	      "src": _vm.Menu
	    },
	    on: {
	      "click": _vm.toMenu
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.Title))]), _vm._v(" "), _c('div', {
	    staticClass: "clickarea"
	  }, [_c('image', {
	    staticClass: "switch",
	    attrs: {
	      "src": _vm.Switch
	    },
	    on: {
	      "click": _vm.showMenu
	    }
	  })])]), _vm._v(" "), (_vm.Page == 0) ? _c('menu', {
	    on: {
	      "selectPage": _vm.toPage
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 1) ? _c('bed', {
	    attrs: {
	      "Ward": _vm.Ward
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 2) ? _c('test', {
	    attrs: {
	      "title": "Page02"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 3) ? _c('test', {
	    attrs: {
	      "title": "Page03"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 4) ? _c('test', {
	    attrs: {
	      "title": "Page04"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 5) ? _c('test', {
	    attrs: {
	      "title": "Page05"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 6) ? _c('test', {
	    attrs: {
	      "title": "Page06"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 7) ? _c('test', {
	    attrs: {
	      "title": "Page07"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 8) ? _c('test', {
	    attrs: {
	      "title": "Page08"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 9) ? _c('test', {
	    attrs: {
	      "title": "Page09"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 10) ? _c('test', {
	    attrs: {
	      "title": "Page10"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 11) ? _c('test', {
	    attrs: {
	      "title": "Page11"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.Page == 12) ? _c('test', {
	    attrs: {
	      "title": "Page12"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.IsMenuShow) ? _c('div', {
	    staticClass: "float"
	  }, [_c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchWard('三病区')
	      }
	    }
	  }, [_vm._v("三病区")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchWard('四病区')
	      }
	    }
	  }, [_vm._v("四病区")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchWard('五病区')
	      }
	    }
	  }, [_vm._v("五病区")])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-386cd968", module.exports)
	  }
	}

/***/ })
/******/ ]);