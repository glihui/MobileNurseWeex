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

	var _EvaluationList = __webpack_require__(26);

	var _EvaluationList2 = _interopRequireDefault(_EvaluationList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_EvaluationList2.default.el = '#root'; // 主页面
	exports.default = new Vue(_EvaluationList2.default);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(14),
	  /* scopeId */
	  "data-v-021bd090",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/BackHeader.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] BackHeader.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-021bd090", Component.options)
	  } else {
	    hotAPI.reload("data-v-021bd090", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("7cd37801", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-021bd090&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./BackHeader.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-021bd090&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./BackHeader.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.header[data-v-021bd090] {\n  position: relative;\n  height: 120px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #DDDDDD;\n  background-color: #287098;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.title[data-v-021bd090] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 40px;\n  line-height: 44px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.center[data-v-021bd090] {\n  width: 350px;\n}\n.right[data-v-021bd090] {\n  padding-top: 38px;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n}\n.right[data-v-021bd090]:active {\n  padding-top: 38px;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n  background-color: #58B7FF;\n}\n.container[data-v-021bd090] {\n  justify-content: center;\n  width: 450px;\n  height: 120px;\n}\n.img[data-v-021bd090] {\n  width: 30px;\n  height: 48px;\n}\n.imgset[data-v-021bd090] {\n  width: 120px;\n  height: 120px;\n  padding: 40px;\n}\n.imgset[data-v-021bd090]:active {\n  width: 120px;\n  height: 120px;\n  background-color: #58B7FF;\n}\n", ""]);

	// exports


/***/ }),
/* 12 */
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
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	  name: 'BackHeader',
	  data: function data() {
	    return {
	      Back: _ViewServer2.default + 'img/back.png'
	    };
	  },

	  props: {
	    RightContent: String,
	    PatientInfo: String,
	    Content: String
	  },
	  methods: {
	    back: function back() {
	      navigator.pop({
	        animated: 'true'
	      }, function (event) {
	        console.log(event);
	      });
	    },
	    handleSave: function handleSave(event) {
	      this.$emit('save', event);
	    }
	  }
	};

/***/ }),
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('div', {
	    staticClass: "imgset",
	    on: {
	      "click": _vm.back
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    attrs: {
	      "src": _vm.Back
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "container"
	  }, [_c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.Content))]), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.PatientInfo))])]), _vm._v(" "), _c('text', {
	    staticClass: "title right",
	    on: {
	      "click": _vm.handleSave
	    }
	  }, [_vm._v(_vm._s(_vm.RightContent))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-021bd090", module.exports)
	  }
	}

/***/ }),
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(27)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(29),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  "data-v-210e60a7",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/EvaluationList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] EvaluationList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-210e60a7", Component.options)
	  } else {
	    hotAPI.reload("data-v-210e60a7", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("43041792", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.0.26.4@css-loader/index.js!../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-210e60a7&scoped=true!../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./EvaluationList.vue", function() {
	     var newContent = require("!!../../node_modules/.0.26.4@css-loader/index.js!../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-210e60a7&scoped=true!../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./EvaluationList.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.slider[data-v-210e60a7] {\n  background-color: #E5E9F2;\n  width: 750px;\n  height: 1270px;\n}\n.down[data-v-210e60a7] {\n  height: 19px;\n  width: 21px;\n}\n.item[data-v-210e60a7] {\n  font-family: Verdana, Geneva, sans-serif;\n  width: 310px;\n  font-size: 32px;\n  line-height: 44px;\n  color: #FFFFFF;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n}\n.sel[data-v-210e60a7] {\n  background-color: #8492A6;\n}\n.line[data-v-210e60a7] {\n  background-color: #FFFFFF;\n  height: 1px;\n  width: 330px;\n}\n.float[data-v-210e60a7] {\n  position: absolute;\n  left: 200px;\n  top: 100px;\n  width: 350px;\n  min-height: 250px;\n  background-color: #475669;\n  border-radius: 10px;\n  padding: 10px;\n  flex-direction: column;\n}\n.imagedown[data-v-210e60a7] {\n  padding-left:10px;\n  padding-top:4px;\n}\n", ""]);

	// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _BackHeader = __webpack_require__(9);

	var _BackHeader2 = _interopRequireDefault(_BackHeader);

	var _BackHeaderNew = __webpack_require__(30);

	var _BackHeaderNew2 = _interopRequireDefault(_BackHeaderNew);

	var _LevelList = __webpack_require__(35);

	var _LevelList2 = _interopRequireDefault(_LevelList);

	var _EstimateList = __webpack_require__(47);

	var _EstimateList2 = _interopRequireDefault(_EstimateList);

	var _PHQList = __webpack_require__(52);

	var _PHQList2 = _interopRequireDefault(_PHQList);

	var _GADList = __webpack_require__(57);

	var _GADList2 = _interopRequireDefault(_GADList);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'EvaluationList',
	  data: function data() {
	    return {
	      Title: '入院护理评估',
	      ItemList: ['入院护理评估', '护理分级评估', 'PHQ-9抑郁量评估', '广泛性焦虑量表(GAD-7)'],
	      index: 0,
	      IsMenuShow: false,
	      Down: _ViewServer2.default + 'img/down.png'
	    };
	  },

	  methods: {
	    onchange: function onchange(event) {
	      this.IsMenuShow = false;
	      this.Title = this.ItemList[event.index];
	    },
	    showMenu: function showMenu() {
	      console.log('showmenu');
	      this.IsMenuShow = !this.IsMenuShow;
	    },
	    clickRight: function clickRight() {
	      console.log('right');
	    },
	    switchTo: function switchTo(i) {
	      this.index = i;
	      this.IsMenuShow = false;
	    }
	  },
	  components: {
	    BackHeader: _BackHeader2.default,
	    LevelList: _LevelList2.default,
	    EstimateList: _EstimateList2.default,
	    PhqList: _PHQList2.default,
	    BackHeaderNew: _BackHeaderNew2.default,
	    gadList: _GADList2.default
	  }
	}; //
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
	//
	//

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(31)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(33),
	  /* template */
	  __webpack_require__(34),
	  /* scopeId */
	  "data-v-3ac4b9c0",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/BackHeaderNew.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] BackHeaderNew.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3ac4b9c0", Component.options)
	  } else {
	    hotAPI.reload("data-v-3ac4b9c0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("6f5ce500", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3ac4b9c0&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./BackHeaderNew.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3ac4b9c0&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./BackHeaderNew.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.header[data-v-3ac4b9c0] {\n  position: relative;\n  height: 120px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #DDDDDD;\n  background-color: #287098;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.title[data-v-3ac4b9c0] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 40px;\n  line-height: 44px;\n  color: #FFFFFF;\n  min-width: 200px;\n}\n.left[data-v-3ac4b9c0] {\n  padding-left: 15px;\n  text-align: left;\n  width:100px;\n}\n.center[data-v-3ac4b9c0] {\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 120px;\n  width: 510px;\n}\n.right[data-v-3ac4b9c0] {\n  padding-right: 15px;\n  text-align: right;\n  width:100px;\n}\n.img[data-v-3ac4b9c0] {\n  width: 30px;\n  height: 48px;\n}\n.imgset[data-v-3ac4b9c0] {\n  width: 120px;\n  height: 120px;\n  padding: 40px;\n}\n.imgset[data-v-3ac4b9c0]:active {\n  width: 120px;\n  height: 120px;\n  background-color: #58B7FF;\n}\n", ""]);

	// exports


/***/ }),
/* 33 */
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
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	  name: 'BackHeader',
	  data: function data() {
	    return {
	      Back: _ViewServer2.default + 'img/back.png'
	    };
	  },

	  props: {
	    Title: String
	  },
	  methods: {
	    back: function back() {
	      navigator.pop({
	        animated: 'true'
	      }, function (event) {
	        console.log(event);
	      });
	    },
	    handleRight: function handleRight(event) {
	      this.$emit('clickright', event);
	    },
	    handleTitle: function handleTitle(event) {
	      this.$emit('clicktitle', event);
	    }
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('div', {
	    staticClass: "imgset",
	    on: {
	      "click": _vm.back
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    attrs: {
	      "src": _vm.Back
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "center",
	    on: {
	      "click": _vm.handleTitle
	    }
	  }, [_c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.Title))]), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _c('text', {
	    staticClass: "title right",
	    on: {
	      "click": _vm.handleRight
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ac4b9c0", module.exports)
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(36)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(38),
	  /* template */
	  __webpack_require__(46),
	  /* scopeId */
	  "data-v-2475e545",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/tables/LevelList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] LevelList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2475e545", Component.options)
	  } else {
	    hotAPI.reload("data-v-2475e545", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("99cb3010", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-2475e545&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./LevelList.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-2475e545&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./LevelList.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.add[data-v-2475e545] {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #d4d4d4;\n  padding: 20;\n}\n.add[data-v-2475e545]:active {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #AAAAAA;\n  padding: 20;\n}\n", ""]);

	// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EvaluationItem = __webpack_require__(39);

	var _EvaluationItem2 = _interopRequireDefault(_EvaluationItem);

	var _StorageUtil = __webpack_require__(44);

	var _StorageUtil2 = _interopRequireDefault(_StorageUtil);

	var _BackServer = __webpack_require__(45);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');
	var stream = weex.requireModule('stream');
	var globalEvent = weex.requireModule('globalEvent');

	exports.default = {
	  name: 'LevelList',
	  data: function data() {
	    return {
	      List: []
	    };
	  },
	  mounted: function mounted() {
	    console.log('render LevelList');
	    this.loadData();
	    this.addListener();
	  },

	  methods: {
	    loadData: function loadData() {
	      var _this = this;

	      storage.getItem('PatientInfo', function (event) {
	        var Info = JSON.parse(event.data);
	        console.log(event.data);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?HospitalizedHisID=' + Info.ZYH + '&AsstSort=1';
	        console.log(url);
	        stream.fetch({
	          method: 'GET',
	          type: 'json',
	          url: url
	        }, function (res) {
	          var json = eval('(' + res.data + ')');
	          _this.List = json;
	        });
	      });
	    },
	    deleteItem: function deleteItem(AssessID) {
	      var _this2 = this;

	      _StorageUtil2.default.getUserInfo(function (json) {
	        console.log(json);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?AssessID=' + AssessID + '&UserID=' + json.UserID + '&Status=100';
	        modal.confirm({
	          message: '是否要删除该条数据',
	          okTitle: '确认',
	          cancelTitle: '取消',
	          duration: 0.3
	        }, function (value) {
	          if (value === '确认') {
	            stream.fetch({
	              method: 'DELETE',
	              type: 'json',
	              url: url
	            }, function (res) {
	              console.log(res);
	              modal.alert({ message: '删除成功！' });
	              _this2.loadData();
	            });
	          }
	        });
	      });
	    },
	    toDetail: function toDetail(AssessID) {
	      storage.setItem('AssessID', AssessID);
	      navigator.push({
	        url: _ViewServer2.default + 'Level.weex.js',
	        animated: 'true'
	      }, function (event) {
	        console.log('successful entry');
	      });
	    },
	    formatDate: function formatDate(date) {
	      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN') {
	        return '';
	      }
	      var arr = date.split('T');
	      return arr[0];
	    },
	    isChange: function isChange(index) {
	      if (index % 2 === 0) {
	        return '#f2f2f2';
	      } else {
	        return '#FFFFFF';
	      }
	    },
	    addListener: function addListener() {
	      var _this3 = this;

	      globalEvent.addEventListener('onResume', function (e) {
	        storage.getItem('PopCallback', function (event) {
	          if (event.data === 'update level list') {
	            _this3.loadData();
	            storage.setItem('PopCallback', '');
	          }
	        });
	      });
	    }
	  },
	  components: {
	    EvaluationItem: _EvaluationItem2.default
	  }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(40)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(42),
	  /* template */
	  __webpack_require__(43),
	  /* scopeId */
	  "data-v-cee2f1aa",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/EvaluationItem.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] EvaluationItem.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cee2f1aa", Component.options)
	  } else {
	    hotAPI.reload("data-v-cee2f1aa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("3d2e24c2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-cee2f1aa&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./EvaluationItem.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-cee2f1aa&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./EvaluationItem.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.item[data-v-cee2f1aa] {\n  /*   justify-content: space-between; */\n  flex-direction: row;\n  /* background-color: #FFFFFF; */\n  height: 120px;\n}\n.item[data-v-cee2f1aa]:active {\n  /*   justify-content: space-between; */\n  flex-direction: row;\n  background-color: #C0CCDA;\n}\n.listimg[data-v-cee2f1aa] {\n  height: 80px;\n  width: 55px;\n}\n.centersite[data-v-cee2f1aa] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 70px;\n  font-size: 14px;\n}\n.imgblock[data-v-cee2f1aa] {\n  margin-left: 70px;\n  align-items: center;\n  justify-content: center;\n}\n.listicon[data-v-cee2f1aa] {\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-left: 350px;\n}\n.icofont[data-v-cee2f1aa] {\n  font-size: 70px;\n  color: #7F7F7F;\n}\n.txtbottom[data-v-cee2f1aa] {\n  color: #8C8C8C;\n  margin-top: 10px;\n}\n", ""]);

	// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'EvaluationItem',
	  data: function data() {
	    return {
	      // right: ViewServer + 'img/right.png'
	      listimg: _ViewServer2.default + 'img/listimg.png'
	    };
	  },

	  props: {
	    Time: String,
	    Name: String,
	    colorval: String
	  },
	  methods: {
	    handleClick: function handleClick(event) {
	      this.$emit('click', event);
	    },
	    handleLongPress: function handleLongPress(event) {
	      this.$emit('longclick', event);
	    }
	  }
	}; //
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

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "item",
	    style: ({
	      'background-color': _vm.colorval
	    }),
	    on: {
	      "click": _vm.handleClick,
	      "longpress": _vm.handleLongPress
	    }
	  }, [_c('div', {
	    staticClass: "imgblock"
	  }, [_c('image', {
	    staticClass: "listimg",
	    attrs: {
	      "src": _vm.listimg
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "centersite"
	  }, [_c('text', [_vm._v(_vm._s(_vm.Time))]), _vm._v(" "), _c('text', {
	    staticClass: "txtbottom"
	  }, [_vm._v("评估护士：" + _vm._s(_vm.Name))])]), _vm._v(" "), _c('div', {
	    staticClass: "listicon"
	  }, [_c('text', {
	    staticClass: "icofont"
	  }, [_vm._v("›")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cee2f1aa", module.exports)
	  }
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 存储工具类，写一些简单的存储问题。
	var storage = weex.requireModule('storage');

	exports.default = {
	  getCurWard: function getCurWard(callback) {
	    storage.getItem('CurWard', function (event) {
	      callback(event.data);
	    });
	  },
	  setCurWard: function setCurWard(data) {
	    storage.setItem('CurWard', data);
	  },
	  getUserInfo: function getUserInfo(callback) {
	    storage.getItem('UserInfo', function (event) {
	      // let json = eval('(' + event.data + ')')
	      var json = JSON.parse(event.data);
	      callback(json);
	    });
	  },
	  setUserInfo: function setUserInfo(data) {
	    storage.setItem('UserInfo', data);
	  },
	  getPatientInfo: function getPatientInfo(callback) {
	    storage.getItem('PatientInfo', function (event) {
	      var json = JSON.parse(event.data);
	      callback(json);
	    });
	  },
	  setPatientInfo: function setPatientInfo(data) {
	    storage.setItem('PatientInfo', data);
	  }
	};

/***/ }),
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_vm._l((_vm.List), function(item, index) {
	    return _c('evaluation-item', {
	      key: index,
	      attrs: {
	        "colorval": _vm.isChange(index),
	        "Time": _vm.formatDate(item.CollectionDate),
	        "Name": item.EmployeeName
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(item.AssessID)
	        },
	        "longclick": function($event) {
	          _vm.deleteItem(item.AssessID)
	        }
	      }
	    })
	  }), _vm._v(" "), _c('div', {
	    staticClass: "add",
	    on: {
	      "click": function($event) {
	        _vm.toDetail('add')
	      }
	    }
	  }, [_c('text', [_vm._v("+")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2475e545", module.exports)
	  }
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(48)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(51),
	  /* scopeId */
	  "data-v-3b718433",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/tables/EstimateList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] EstimateList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3b718433", Component.options)
	  } else {
	    hotAPI.reload("data-v-3b718433", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("68bb6f00", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3b718433&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./EstimateList.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3b718433&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./EstimateList.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.add[data-v-3b718433] {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #D4D4D4;\n  padding: 20;\n}\n.add[data-v-3b718433]:active {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #AAAAAA;\n  padding: 20;\n}\n", ""]);

	// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EvaluationItem = __webpack_require__(39);

	var _EvaluationItem2 = _interopRequireDefault(_EvaluationItem);

	var _BackServer = __webpack_require__(45);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
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

	exports.default = {
	  name: 'EstimateList',
	  data: function data() {
	    return {
	      List: []
	    };
	  },
	  mounted: function mounted() {
	    console.log('render LevelList');
	    this.loadData();
	  },

	  methods: {
	    loadData: function loadData() {
	      var _this = this;

	      storage.getItem('PatientInfo', function (event) {
	        var Info = JSON.parse(event.data);
	        console.log(event.data);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/NursAsstAdmission?HospitalizedHisID=' + Info.ZYH;
	        console.log(url);
	        stream.fetch({
	          method: 'GET',
	          type: 'json',
	          url: url
	        }, function (res) {
	          var json = eval('(' + res.data + ')');
	          _this.List = json;
	        });
	      });
	    },
	    toDetail: function toDetail(AssessID) {
	      storage.setItem('AssessID', AssessID);
	      navigator.push({
	        url: _ViewServer2.default + 'Estimate.weex.js',
	        animated: 'true'
	      }, function (event) {
	        console.log('successful entry');
	      });
	    },
	    formatDate: function formatDate(date) {
	      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN') {
	        return '';
	      }
	      var arr = date.split('T');
	      return arr[0];
	    },
	    isChange: function isChange(index) {
	      if (index % 2 === 0) {
	        return '#f2f2f2';
	      } else {
	        return '#FFFFFF';
	      }
	    }
	  },
	  components: {
	    EvaluationItem: _EvaluationItem2.default
	  }
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_vm._l((_vm.List), function(item, index) {
	    return _c('evaluation-item', {
	      key: index,
	      attrs: {
	        "colorval": _vm.isChange(index),
	        "Time": _vm.formatDate(item.CollectionDate),
	        "Name": item.EmployeeName
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(item.AdmissionID)
	        }
	      }
	    })
	  }), _vm._v(" "), _c('div', {
	    staticClass: "add",
	    on: {
	      "click": function($event) {
	        _vm.toDetail('add')
	      }
	    }
	  }, [_c('text', [_vm._v("+")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3b718433", module.exports)
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(53)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(55),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  "data-v-faa8de0c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/tables/PHQList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] PHQList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-faa8de0c", Component.options)
	  } else {
	    hotAPI.reload("data-v-faa8de0c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("e0ab6710", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-faa8de0c&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./PHQList.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-faa8de0c&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./PHQList.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.add[data-v-faa8de0c] {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #d4d4d4;\n  padding: 20;\n}\n.add[data-v-faa8de0c]:active {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #AAAAAA;\n  padding: 20;\n}\n", ""]);

	// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EvaluationItem = __webpack_require__(39);

	var _EvaluationItem2 = _interopRequireDefault(_EvaluationItem);

	var _StorageUtil = __webpack_require__(44);

	var _StorageUtil2 = _interopRequireDefault(_StorageUtil);

	var _BackServer = __webpack_require__(45);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');
	var stream = weex.requireModule('stream');
	var globalEvent = weex.requireModule('globalEvent');

	exports.default = {
	  name: 'PHQList',
	  data: function data() {
	    return {
	      List: []
	    };
	  },
	  mounted: function mounted() {
	    console.log('render LevelList');
	    this.loadData();
	    this.addListener();
	  },

	  methods: {
	    loadData: function loadData() {
	      var _this = this;

	      storage.getItem('PatientInfo', function (event) {
	        var Info = JSON.parse(event.data);
	        console.log(event.data);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?HospitalizedHisID=' + Info.ZYH + '&AsstSort=2';
	        console.log(url);
	        stream.fetch({
	          method: 'GET',
	          type: 'json',
	          url: url
	        }, function (res) {
	          var json = eval('(' + res.data + ')');
	          _this.List = json;
	        });
	      });
	    },
	    toDetail: function toDetail(AssessID) {
	      storage.setItem('AssessID', AssessID);
	      navigator.push({
	        url: _ViewServer2.default + 'PHQ.weex.js',
	        animated: 'true'
	      }, function (event) {
	        console.log('successful entry');
	      });
	    },
	    deleteItem: function deleteItem(AssessID) {
	      var _this2 = this;

	      _StorageUtil2.default.getUserInfo(function (json) {
	        console.log(json);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?AssessID=' + AssessID + '&UserID=' + json.UserID + '&Status=100';
	        modal.confirm({
	          message: '是否要删除该条数据',
	          okTitle: '确认',
	          cancelTitle: '取消',
	          duration: 0.3
	        }, function (value) {
	          if (value === '确认') {
	            stream.fetch({
	              method: 'DELETE',
	              type: 'json',
	              url: url
	            }, function (res) {
	              console.log(res);
	              modal.alert({ message: '删除成功！' });
	              _this2.loadData();
	            });
	          }
	        });
	      });
	    },
	    formatDate: function formatDate(date) {
	      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN') {
	        return '';
	      }
	      var arr = date.split('T');
	      return arr[0];
	    },
	    isChange: function isChange(index) {
	      if (index % 2 === 0) {
	        return '#f2f2f2';
	      } else {
	        return '#FFFFFF';
	      }
	    },
	    addListener: function addListener() {
	      var _this3 = this;

	      globalEvent.addEventListener('onResume', function (e) {
	        storage.getItem('PopCallback', function (event) {
	          if (event.data === 'update phq list') {
	            _this3.loadData();
	            storage.setItem('PopCallback', '');
	          }
	        });
	      });
	    }
	  },
	  components: {
	    EvaluationItem: _EvaluationItem2.default
	  }
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_vm._l((_vm.List), function(item, index) {
	    return _c('evaluation-item', {
	      key: index,
	      attrs: {
	        "colorval": _vm.isChange(index),
	        "Time": _vm.formatDate(item.CollectionDate),
	        "Name": item.EmployeeName
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(item.AssessID)
	        },
	        "longclick": function($event) {
	          _vm.deleteItem(item.AssessID)
	        }
	      }
	    })
	  }), _vm._v(" "), _c('div', {
	    staticClass: "add",
	    on: {
	      "click": function($event) {
	        _vm.toDetail('add')
	      }
	    }
	  }, [_c('text', [_vm._v("+")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-faa8de0c", module.exports)
	  }
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(58)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(60),
	  /* template */
	  __webpack_require__(61),
	  /* scopeId */
	  "data-v-11258d4b",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/tables/GADList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] GADList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-11258d4b", Component.options)
	  } else {
	    hotAPI.reload("data-v-11258d4b", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("302ac99e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-11258d4b&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./GADList.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-11258d4b&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./GADList.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.add[data-v-11258d4b] {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #d4d4d4;\n  padding: 20;\n}\n.add[data-v-11258d4b]:active {\n  justify-content: center;\n  flex-direction: row;\n  background-color: #AAAAAA;\n  padding: 20;\n}\n", ""]);

	// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EvaluationItem = __webpack_require__(39);

	var _EvaluationItem2 = _interopRequireDefault(_EvaluationItem);

	var _StorageUtil = __webpack_require__(44);

	var _StorageUtil2 = _interopRequireDefault(_StorageUtil);

	var _BackServer = __webpack_require__(45);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _ViewServer = __webpack_require__(13);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');
	var stream = weex.requireModule('stream');
	var globalEvent = weex.requireModule('globalEvent');

	exports.default = {
	  name: 'GADList',
	  data: function data() {
	    return {
	      List: []
	    };
	  },
	  mounted: function mounted() {
	    console.log('render gadList');
	    this.loadData();
	    this.addListener();
	  },

	  methods: {
	    loadData: function loadData() {
	      var _this = this;

	      storage.getItem('PatientInfo', function (event) {
	        var Info = JSON.parse(event.data);
	        console.log(event.data);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?HospitalizedHisID=' + Info.ZYH + '&AsstSort=3';
	        console.log(url);
	        stream.fetch({
	          method: 'GET',
	          type: 'json',
	          url: url
	        }, function (res) {
	          var json = eval('(' + res.data + ')');
	          _this.List = json;
	        });
	      });
	    },
	    deleteItem: function deleteItem(AssessID) {
	      var _this2 = this;

	      _StorageUtil2.default.getUserInfo(function (json) {
	        console.log(json);
	        var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?AssessID=' + AssessID + '&UserID=' + json.UserID + '&Status=100';
	        modal.confirm({
	          message: '是否要删除该条数据',
	          okTitle: '确认',
	          cancelTitle: '取消',
	          duration: 0.3
	        }, function (value) {
	          if (value === '确认') {
	            stream.fetch({
	              method: 'DELETE',
	              type: 'json',
	              url: url
	            }, function (res) {
	              console.log(res);
	              modal.alert({ message: '删除成功！' });
	              _this2.loadData();
	            });
	          }
	        });
	      });
	    },
	    toDetail: function toDetail(AssessID) {
	      storage.setItem('AssessID', AssessID);
	      navigator.push({
	        url: _ViewServer2.default + 'GAD.weex.js',
	        animated: 'true'
	      }, function (event) {
	        console.log('successful entry');
	      });
	    },
	    formatDate: function formatDate(date) {
	      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN') {
	        return '';
	      }
	      var arr = date.split('T');
	      return arr[0];
	    },
	    isChange: function isChange(index) {
	      if (index % 2 === 0) {
	        return '#f2f2f2';
	      } else {
	        return '#FFFFFF';
	      }
	    },
	    addListener: function addListener() {
	      var _this3 = this;

	      globalEvent.addEventListener('onResume', function (e) {
	        storage.getItem('PopCallback', function (event) {
	          if (event.data === 'update gad list') {
	            _this3.loadData();
	            storage.setItem('PopCallback', '');
	          }
	        });
	      });
	    }
	  },
	  components: {
	    EvaluationItem: _EvaluationItem2.default
	  }
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_vm._l((_vm.List), function(item, index) {
	    return _c('evaluation-item', {
	      key: index,
	      attrs: {
	        "colorval": _vm.isChange(index),
	        "Time": _vm.formatDate(item.CollectionDate),
	        "Name": item.EmployeeName
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(item.AssessID)
	        },
	        "longclick": function($event) {
	          _vm.deleteItem(item.AssessID)
	        }
	      }
	    })
	  }), _vm._v(" "), _c('div', {
	    staticClass: "add",
	    on: {
	      "click": function($event) {
	        _vm.toDetail('add')
	      }
	    }
	  }, [_c('text', [_vm._v("+")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-11258d4b", module.exports)
	  }
	}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrap"
	  }, [_c('back-header-new', {
	    attrs: {
	      "Title": _vm.Title
	    },
	    on: {
	      "clicktitle": _vm.showMenu,
	      "clickright": _vm.clickRight
	    }
	  }, [_c('div', {
	    staticClass: "imagedown"
	  }, [_c('image', {
	    staticClass: "down",
	    attrs: {
	      "src": _vm.Down
	    }
	  })])]), _vm._v(" "), _c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "interval": "4500",
	      "index": _vm.index
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }, [_c('estimate-list'), _vm._v(" "), _c('level-list'), _vm._v(" "), _c('phq-list'), _vm._v(" "), _c('gad-list')], 1), _vm._v(" "), (_vm.IsMenuShow) ? _c('div', {
	    staticClass: "float"
	  }, [_c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchTo(0)
	      }
	    }
	  }, [_vm._v("入院护理评估")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchTo(1)
	      }
	    }
	  }, [_vm._v("护理分级评估")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchTo(2)
	      }
	    }
	  }, [_vm._v("PHQ-9抑郁量评估")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item",
	    on: {
	      "click": function($event) {
	        _vm.switchTo(3)
	      }
	    }
	  }, [_vm._v("广泛性焦虑量表(GAD-7)")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item"
	  }, [_vm._v("膀胱评估")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item"
	  }, [_vm._v("肠道评估")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item"
	  }, [_vm._v("营养评估")]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "item"
	  }, [_vm._v("危重症患者风险评估")])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-210e60a7", module.exports)
	  }
	}

/***/ })
/******/ ]);