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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PHQ = __webpack_require__(117);

	var _PHQ2 = _interopRequireDefault(_PHQ);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_PHQ2.default.el = '#root'; // 等级评定
	exports.default = new Vue(_PHQ2.default);

/***/ }),

/***/ 4:
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

/***/ 5:
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

/***/ 6:
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

/***/ 7:
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

/***/ 9:
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

/***/ 10:
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.header[data-v-021bd090] {\n  position: relative;\n  height: 120px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #DDDDDD;\n  background-color: #287098;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.title[data-v-021bd090] {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 40px;\n  line-height: 44px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.center[data-v-021bd090] {\n  width: 350px;\n}\n.right[data-v-021bd090] {\n  padding-top: 38px;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n}\n.right[data-v-021bd090]:active {\n  padding-top: 38px;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n  background-color: #58B7FF;\n}\n.container[data-v-021bd090] {\n  justify-content: center;\n  width: 450px;\n  height: 120px;\n}\n.img[data-v-021bd090] {\n  width: 30px;\n  height: 48px;\n}\n.imgset[data-v-021bd090] {\n  width: 120px;\n  height: 120px;\n  padding: 40px;\n}\n.imgset[data-v-021bd090]:active {\n  width: 120px;\n  height: 120px;\n  background-color: #58B7FF;\n}\n", ""]);

	// exports


/***/ }),

/***/ 12:
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

/***/ 13:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 界面服务器地址

	var AddressURL = 'http://192.168.1.200:8080/dist/'; // 测试主机IP，可修改！

	exports.default = AddressURL;

/***/ }),

/***/ 14:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(21)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(23),
	  /* template */
	  __webpack_require__(24),
	  /* scopeId */
	  "data-v-1c5d8ce6",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/ListItem.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] ListItem.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1c5d8ce6", Component.options)
	  } else {
	    hotAPI.reload("data-v-1c5d8ce6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("165ad7fd", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-1c5d8ce6&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./ListItem.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-1c5d8ce6&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./ListItem.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.wrap[data-v-1c5d8ce6] {\n  flex-direction: column;\n  align-items: center;\n}\n.line[data-v-1c5d8ce6] {\n  width: 730px;\n  border-style: solid;\n  border-top-width: 1px;\n}\n.item[data-v-1c5d8ce6] {\n  justify-content: space-between;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  width: 750px;\n  padding: 20;\n}\n.item[data-v-1c5d8ce6]:active {\n  justify-content: space-between;\n  flex-direction: row;\n  background-color: #C0CCDA;\n  padding: 20;\n}\n.img[data-v-1c5d8ce6] {\n  width: 50px;\n  height: 50px;\n}\n.text[data-v-1c5d8ce6] {\n  width: 460;\n}\n.right[data-v-1c5d8ce6] {\n  width: 240;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.value[data-v-1c5d8ce6] {\n  color: #8492A6;\n  margin-right: 5px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 23:
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

	// import ViewServer from '../../view-server.js'

	exports.default = {
	  name: 'ListItem',
	  data: function data() {
	    return {
	      // right: ViewServer + 'img/right.png'
	    };
	  },

	  props: {
	    title: String,
	    value: String,
	    isLink: Boolean
	  },
	  methods: {
	    handleClick: function handleClick(event) {
	      this.$emit('click', event);
	    }
	  }
	};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrap"
	  }, [_c('div', {
	    staticClass: "item",
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_c('text', {
	    staticClass: "text"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    staticClass: "right"
	  }, [_c('text', {
	    staticClass: "value"
	  }, [_vm._v(_vm._s(_vm.value))]), _vm._v(" "), (_vm.isLink) ? _c('text', [_vm._v("›")]) : _vm._e()])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1c5d8ce6", module.exports)
	  }
	}

/***/ }),

/***/ 44:
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

/***/ 45:
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(118)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(120),
	  /* template */
	  __webpack_require__(121),
	  /* scopeId */
	  "data-v-15e9ed3c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/tables/PHQ.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] PHQ.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-15e9ed3c", Component.options)
	  } else {
	    hotAPI.reload("data-v-15e9ed3c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("8def24d2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-15e9ed3c&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./PHQ.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.26.4@css-loader/index.js!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-15e9ed3c&scoped=true!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./PHQ.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.scroller[data-v-15e9ed3c] {\n  height: 1300px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _BackHeader = __webpack_require__(9);

	var _BackHeader2 = _interopRequireDefault(_BackHeader);

	var _ListItem = __webpack_require__(20);

	var _ListItem2 = _interopRequireDefault(_ListItem);

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

	var modal = weex.requireModule('modal');
	var storage = weex.requireModule('storage');
	var stream = weex.requireModule('stream');
	var globalEvent = weex.requireModule('globalEvent');
	var picker = weex.requireModule('picker');

	exports.default = {
	  name: 'Level',
	  data: function data() {
	    return {
	      Type: 'add',
	      AssessID: '',
	      DataObj: {},
	      UserInfo: {}
	    };
	  },
	  mounted: function mounted() {
	    this.initData();
	    this.getData();
	    this.addListener();
	  },

	  methods: {
	    getData: function getData() {
	      var that = this;
	      storage.getItem('AssessID', function (event) {
	        var AssessID = event.data;
	        console.log('AssessID = ' + AssessID);
	        if (AssessID !== 'add' && AssessID) {
	          that.Type = 'edit';
	          var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?AssessID=' + AssessID;
	          stream.fetch({
	            method: 'GET',
	            type: 'json',
	            url: url
	          }, function (res) {
	            var json = eval('(' + res.data + ')');
	            that.DataObj = json;
	          });
	        }
	      });
	    },
	    commitData: function commitData() {
	      if (this.DataObj.CollectionDate === '') {
	        modal.alert({ message: '评估时间不能为空' });
	        return;
	      }

	      this.DataObj['UserID'] = this.UserInfo.UserID;
	      this.DataObj['EmployeeID'] = this.UserInfo.EmployeeID;
	      var url = _BackServer2.default.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs';

	      var StreamType = 'POST';
	      if (this.Type === 'edit') {
	        StreamType = 'PUT';
	      }

	      stream.fetch({
	        method: StreamType,
	        type: 'json',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        url: url,
	        body: JSON.stringify(this.DataObj)
	      }, function (res) {
	        console.log(res);
	        var json = eval('(' + res.data + ')');
	        modal.alert({
	          message: json.Message
	        }, function (event) {
	          storage.setItem('PopCallback', 'update phq list', function (event) {
	            navigator.pop({ animated: 'true' });
	          });
	        });
	      });
	    },
	    initData: function initData() {
	      var _this = this;

	      var that = this;
	      _StorageUtil2.default.getUserInfo(function (user) {
	        console.log(user);
	        _this.UserInfo = user;
	        _StorageUtil2.default.getPatientInfo(function (info) {
	          that.DataObj = {
	            HospitalizedID: '',
	            HospitalizedHisID: info.ZYH,
	            PatientID: '',
	            PatientHisID: info.ZYHM,
	            PatientName: info.PaientName,
	            AsstSort: '2',
	            Assessment1: -1,
	            Assessment2: -1,
	            Assessment3: -1,
	            Assessment4: -1,
	            Assessment5: -1,
	            Assessment6: -1,
	            Assessment7: -1,
	            Assessment8: -1,
	            Assessment9: -1,
	            AssessScore: 0,
	            IncidenceLevel: 0,
	            IncidenceLevelT: '',
	            NursingLevel: 0,
	            CollectionDate: '',
	            EmployeeID: user.EmployeeId,
	            UserID: user.UserId
	          };
	          console.log(that.DataObj);
	        });
	      });
	    },
	    showIncidenceLevel: function showIncidenceLevel(key) {
	      var num = parseInt(key);
	      switch (num) {
	        case 0:
	          return '请选择';
	        case 1:
	          return '没有抑郁';
	        case 2:
	          return '轻度抑郁';
	        case 3:
	          return '中度抑郁';
	        case 4:
	          return '中重度抑郁';
	        case 5:
	          return '重度抑郁';
	        case 6:
	          return '病人不愿意配合';
	      }
	      return '';
	    },
	    addListener: function addListener() {
	      var _this2 = this;

	      globalEvent.addEventListener('onResume', function (e) {
	        storage.getItem('PopCallback', function (event) {
	          if (event.data !== '') {
	            var json = eval('(' + event.data + ')');
	            console.log('callback');
	            console.log(json);
	            _this2.DataObj[json.key] = json.value;

	            // 计算总分
	            var count = 0;
	            for (var i = 1; i <= 10; i++) {
	              var val = parseInt(_this2.DataObj['Assessment' + i]);
	              if (val && val !== -1) {
	                count += val;
	              }
	            }
	            _this2.DataObj.AssessScore = count;

	            // 计算抑郁程度
	            if (count <= 4) {
	              _this2.DataObj.IncidenceLevel = 1;
	              _this2.DataObj.IncidenceLevelT = _this2.showIncidenceLevel(1);
	            } else if (count >= 5 && count <= 9) {
	              _this2.DataObj.IncidenceLevel = 2;
	              _this2.DataObj.IncidenceLevelT = _this2.showIncidenceLevel(2);
	            } else if (count >= 10 && count <= 14) {
	              _this2.DataObj.IncidenceLevel = 3;
	              _this2.DataObj.IncidenceLevelT = _this2.showIncidenceLevel(3);
	            } else if (count >= 15 && count <= 19) {
	              _this2.DataObj.IncidenceLevel = 4;
	              _this2.DataObj.IncidenceLevelT = _this2.showIncidenceLevel(4);
	            } else if (count >= 20 && count <= 27) {
	              _this2.DataObj.IncidenceLevel = 5;
	              _this2.DataObj.IncidenceLevelT = _this2.showIncidenceLevel(5);
	            }

	            storage.setItem('PopCallback', '');
	          }
	        });
	      });
	    },
	    pickDate: function pickDate() {
	      var _this3 = this;

	      picker.pickDate({
	        value: this.DataObj.CollectionDate
	      }, function (event) {
	        console.log(event);
	        if (event.result === 'success') {
	          console.log(event.data);
	          _this3.DataObj.CollectionDate = _this3.formatPicker(event.data);
	        }
	      });
	    },
	    formatPicker: function formatPicker(data) {
	      var arr = data.split('-');
	      var result = arr[0] + '-' + arr[1] + '-';
	      if (arr[2].length === 1) {
	        result += '0' + arr[2];
	      } else {
	        result += arr[2];
	      }
	      return result;
	    },
	    toEdit: function toEdit(module, key, value, option, text) {
	      var obj = { key: key, value: value, option: option, text: text };
	      var ModuleName = '';
	      switch (module) {
	        case 1:
	          ModuleName = 'Editor';
	          break;
	        case 2:
	          ModuleName = 'SingleSelector';
	          break;
	        case 3:
	          ModuleName = 'MultSelector';
	          break;
	      }
	      if (ModuleName !== '') {
	        storage.setItem('PushVulues', JSON.stringify(obj), function (event) {
	          navigator.push({
	            url: _ViewServer2.default + ModuleName + '.weex.js',
	            animated: 'true'
	          }, function (event) {
	            // TODO 页面跳转获取数据详情。
	          });
	        });
	      }
	    },
	    formatDate: function formatDate(date) {
	      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN' || date === undefined) {
	        return '';
	      }
	      var arr = date.split('T');
	      return arr[0];
	    },
	    showLevel: function showLevel(jsonResult) {
	      var text = '';
	      var key = parseInt(jsonResult);
	      switch (key) {
	        case 0:
	          text = '请选择';
	          break;
	        case 1:
	          text = '特级护理';
	          break;
	        case 2:
	          text = '一级护理';
	          break;
	        case 3:
	          text = '二级护理';
	          break;
	        case 4:
	          text = '三级护理';
	          break;
	      }
	      return text;
	    }
	  },
	  components: {
	    BackHeader: _BackHeader2.default,
	    ListItem: _ListItem2.default
	  }
	};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('back-header', {
	    attrs: {
	      "PatientInfo": "PHQ-9抑郁量表",
	      "RightContent": "保存"
	    },
	    on: {
	      "save": _vm.commitData
	    }
	  }), _vm._v(" "), _c('scroller', {
	    staticClass: "scroller"
	  }, [_c('list-item', {
	    attrs: {
	      "title": "评估时间",
	      "value": _vm.formatDate(_vm.DataObj.CollectionDate),
	      "is-link": ""
	    },
	    on: {
	      "click": _vm.pickDate
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "1.做事提不起劲或没兴趣",
	      "value": _vm.DataObj.Assessment1 == -1 ? '请选择' : _vm.DataObj.Assessment1,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment1', _vm.DataObj.Assessment1, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "2.感到心情低落、沮丧或绝望",
	      "value": _vm.DataObj.Assessment2 == -1 ? '请选择' : _vm.DataObj.Assessment2,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment2', _vm.DataObj.Assessment2, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "3.入睡困难，睡不安稳或睡眠过多",
	      "value": _vm.DataObj.Assessment3 == -1 ? '请选择' : _vm.DataObj.Assessment3,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment3', _vm.DataObj.Assessment3, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "4.感觉疲倦或没有活力",
	      "value": _vm.DataObj.Assessment4 == -1 ? '请选择' : _vm.DataObj.Assessment4,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment4', _vm.DataObj.Assessment4, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "5.食欲不振或吃的太多",
	      "value": _vm.DataObj.Assessment5 == -1 ? '请选择' : _vm.DataObj.Assessment5,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment5', _vm.DataObj.Assessment5, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "6.觉得自己很糟或觉得自己很失败，或让自己和家人很失望",
	      "value": _vm.DataObj.Assessment6 == -1 ? '请选择' : _vm.DataObj.Assessment6,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment6', _vm.DataObj.Assessment6, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "7.对事物专注有困难，例如阅读报纸或看电视时",
	      "value": _vm.DataObj.Assessment7 == -1 ? '请选择' : _vm.DataObj.Assessment7,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment7', _vm.DataObj.Assessment7, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "8.动作或说话速度缓慢到别人已经察觉，或正好相反-烦躁或坐立不安，动来动去的情况更胜于平常",
	      "value": _vm.DataObj.Assessment8 == -1 ? '请选择' : _vm.DataObj.Assessment8,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment8', _vm.DataObj.Assessment8, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "9.有不如死掉或用某种方式伤害自己的念头",
	      "value": _vm.DataObj.Assessment9 == -1 ? '请选择' : _vm.DataObj.Assessment9,
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'Assessment9', _vm.DataObj.Assessment9, '-1,0,1,2,3', '请选择,完全不会,好几天,超过一周,几乎每天')
	      }
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "总分",
	      "value": _vm.DataObj.AssessScore
	    }
	  }), _vm._v(" "), _c('list-item', {
	    attrs: {
	      "title": "等级评定",
	      "value": _vm.showIncidenceLevel(_vm.DataObj.IncidenceLevel),
	      "is-link": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.toEdit(2, 'IncidenceLevel', _vm.DataObj.IncidenceLevel, '0,1,2,3,4,5,6', '请选择,没有抑郁,轻度抑郁,中度抑郁,中重度抑郁,重度抑郁,病人不愿意配合')
	      }
	    }
	  })], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-15e9ed3c", module.exports)
	  }
	}

/***/ })

/******/ });