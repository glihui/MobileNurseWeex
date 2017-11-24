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

	var _Home = __webpack_require__(52);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Home2.default.el = '#root'; // 主页面
	exports.default = new Vue(_Home2.default);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 界面服务器地址

	var AddressURL = 'http://192.168.1.200:8080/dist/'; // 测试主机IP，可修改！

	exports.default = AddressURL;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
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
/* 33 */
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
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(53)
	)

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(79)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/Home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-922a6890"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = {
	  "button": {
	    "fontSize": 60,
	    "width": 450,
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginLeft": 150,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "color": "#666666",
	    "borderColor": "#DDDDDD",
	    "backgroundColor": "#F5F5F5"
	  },
	  "btn-group": {
	    "height": 1000,
	    "marginTop": 20,
	    "flexDirection": "column",
	    "justifyContent": "space-between"
	  },
	  "row": {
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "margin": 10
	  },
	  "header": {
	    "position": "relative",
	    "height": 120,
	    "marginBottom": 3,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD",
	    "backgroundColor": "#287098",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "title": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 40,
	    "lineHeight": 44,
	    "color": "#FFFFFF"
	  },
	  "clickarea": {
	    "width": 160,
	    "height": 120,
	    "paddingLeft": 40
	  },
	  "switch": {
	    "width": 120,
	    "height": 120,
	    "padding": 40,
	    "width:active": 120,
	    "height:active": 120,
	    "padding:active": 40,
	    "backgroundColor:active": "#58B7FF"
	  },
	  "menu": {
	    "width": 120,
	    "height": 120,
	    "padding": 40
	  },
	  "white": {
	    "backgroundColor": "#58B7FF"
	  },
	  "float": {
	    "position": "absolute",
	    "right": 10,
	    "top": 100,
	    "width": 200,
	    "minHeight": 200,
	    "backgroundColor": "#475669",
	    "borderRadius": 10,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "flexDirection": "column"
	  },
	  "item": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "width": 200,
	    "fontSize": 32,
	    "lineHeight": 44,
	    "color": "#FFFFFF",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "paddingLeft": 20
	  },
	  "item-sel": {
	    "backgroundColor": "#ABCDEF"
	  },
	  "line": {
	    "backgroundColor": "#FFFFFF",
	    "height": 1,
	    "width": 330
	  }
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppHeader = __webpack_require__(55);

	var _AppHeader2 = _interopRequireDefault(_AppHeader);

	var _Bed = __webpack_require__(59);

	var _Bed2 = _interopRequireDefault(_Bed);

	var _Menu = __webpack_require__(68);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Test = __webpack_require__(76);

	var _Test2 = _interopRequireDefault(_Test);

	var _ViewServer = __webpack_require__(7);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(56)
	)

	/* script */
	__vue_exports__ = __webpack_require__(57)

	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/AppHeader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6773e5ee"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = {
	  "header": {
	    "position": "relative",
	    "height": 120,
	    "marginBottom": 3,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD",
	    "backgroundColor": "#287098",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "title": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 32,
	    "lineHeight": 44,
	    "color": "#FFFFFF"
	  },
	  "setting": {
	    "width": 100,
	    "height": 100,
	    "padding": 10
	  },
	  "menu": {
	    "width": 100,
	    "height": 100,
	    "padding": 10
	  },
	  "white": {
	    "backgroundColor": "#58B7FF"
	  }
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ViewServer = __webpack_require__(7);

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
/* 58 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["header"]
	  }, [_c('image', {
	    staticClass: ["menu"],
	    class: [_vm.isActive ? _vm.active : ''],
	    attrs: {
	      "src": _vm.Menu
	    },
	    on: {
	      "click": _vm.clickMenu
	    }
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.PatientInfo))]), _c('image', {
	    staticClass: ["setting"],
	    attrs: {
	      "src": _vm.Setting
	    },
	    on: {
	      "click": _vm.clickSetting
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(60)
	)

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(67)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/home/Bed.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2689df2c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = {
	  "list-content": {
	    "width": 750,
	    "flexWrap": "wrap",
	    "flexDirection": "row"
	  },
	  "block": {
	    "marginTop": 3,
	    "marginBottom": 3,
	    "marginLeft": 12,
	    "marginRight": 12,
	    "width": 350,
	    "height": 350
	  },
	  "row": {
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "margin": 10
	  }
	}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Block = __webpack_require__(62);

	var _Block2 = _interopRequireDefault(_Block);

	var _ViewServer = __webpack_require__(7);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	var _BackServer = __webpack_require__(33);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _Utf = __webpack_require__(66);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(63)
	)

	/* script */
	__vue_exports__ = __webpack_require__(64)

	/* template */
	var __vue_template__ = __webpack_require__(65)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/Block.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-fcbb6a26"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = {
	  "icon": {
	    "height": 44,
	    "width": 44
	  },
	  "wrap": {
	    "alignItems": "center",
	    "flexDirection": "column",
	    "borderWidth": 1,
	    "borderRadius": 30,
	    "borderStyle": "solid",
	    "borderColor": "#99A9BF",
	    "width": 750,
	    "height": 1300
	  },
	  "topblock": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginLeft": 16
	  },
	  "left": {
	    "flex": 3,
	    "flexDirection": "column",
	    "marginTop": 20
	  },
	  "right": {
	    "flex": 1,
	    "width": 100,
	    "height": 100
	  },
	  "baseinfo": {
	    "flexDirection": "row"
	  },
	  "infoa": {
	    "width": 215,
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "minHeight": 20,
	    "fontSize": 23,
	    "paddingBottom": 10,
	    "lineHeight": 33
	  },
	  "infob": {
	    "width": 210,
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 23,
	    "paddingBottom": 10,
	    "lineHeight": 33
	  },
	  "infoc": {
	    "width": 243,
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 23,
	    "paddingBottom": 10
	  },
	  "footer": {
	    "backgroundColor": "#359efd",
	    "borderBottomLeftRadius": 33,
	    "borderBottomRightRadius": 34,
	    "borderStyle": "solid",
	    "borderColor": "#99A9BF",
	    "borderLeftWidth": 1,
	    "borderRightWidth": 1,
	    "borderBottomWidth": 1,
	    "width": 350,
	    "height": 65,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "position": "absolute",
	    "left": 0,
	    "top": 285
	  },
	  "baseb": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 23,
	    "color": "#ca5952",
	    "paddingTop": 8,
	    "marginLeft": 12
	  },
	  "basec": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 23,
	    "color": "#ca5952",
	    "paddingTop": 8,
	    "marginLeft": 12
	  },
	  "basea": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 32
	  },
	  "detailinfo": {
	    "marginTop": 18
	  },
	  "footfont": {
	    "fontSize": 32
	  }
	}

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrap"],
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_c('div', {
	    staticClass: ["topblock"]
	  }, [_c('div', {
	    staticClass: ["left"]
	  }, [_c('div', {
	    staticClass: ["baseinfo"]
	  }, [_c('text', {
	    staticClass: ["basea"]
	  }, [_vm._v(_vm._s(_vm.Name))]), _c('text', {
	    staticClass: ["baseb"]
	  }, [_vm._v(_vm._s(_vm.Sex))]), _c('text', {
	    staticClass: ["basec"]
	  }, [_vm._v(_vm._s(_vm.Age))])]), _c('div', {
	    staticClass: ["detailinfo"]
	  }, [_c('text', {
	    staticClass: ["infoa"]
	  }, [_vm._v(_vm._s(_vm.MSZD))]), _c('text', {
	    staticClass: ["infob"]
	  }, [_vm._v("过敏药物：" + _vm._s(_vm.medic))]), _c('text', {
	    staticClass: ["infoc"]
	  }, [_vm._v("入院时间：" + _vm._s(_vm.DataShow))])])]), _vm._m(0)]), _c('div', {
	    staticClass: ["footer"]
	  }, [_c('text', {
	    staticClass: ["footfont"]
	  }, [_vm._v(_vm._s(_vm.BedNo))])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["right"]
	  }, [_c('text', [_vm._v("图")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["scroller"]
	  }, [_c('div', {
	    staticClass: ["list-content"]
	  }, _vm._l((_vm.PatientArr), function(item, index) {
	    return _c('block', {
	      key: index,
	      staticClass: ["block"],
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

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(69)
	)

	/* script */
	__vue_exports__ = __webpack_require__(70)

	/* template */
	var __vue_template__ = __webpack_require__(75)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/home/Menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-362c30c6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = {
	  "button": {
	    "fontSize": 60,
	    "width": 450,
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginLeft": 150,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "color": "#666666",
	    "borderColor": "#DDDDDD",
	    "backgroundColor": "#006699"
	  },
	  "btn-group": {
	    "height": 1000,
	    "marginTop": 20,
	    "flexDirection": "column",
	    "justifyContent": "space-between"
	  },
	  "row": {
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "margin": 10
	  }
	}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _IconButton = __webpack_require__(71);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _ViewServer = __webpack_require__(7);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(72)
	)

	/* script */
	__vue_exports__ = __webpack_require__(73)

	/* template */
	var __vue_template__ = __webpack_require__(74)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/components/IconButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-50b5d0db"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = {
	  "icon": {
	    "height": 200,
	    "width": 200
	  },
	  "wrap": {
	    "margin": 10,
	    "alignItems": "center",
	    "flexDirection": "column"
	  },
	  "content": {
	    "marginTop": 10,
	    "fontSize": 40
	  }
	}

/***/ }),
/* 73 */
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
/* 74 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrap"],
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_c('image', {
	    staticClass: ["icon"],
	    attrs: {
	      "src": _vm.ImgUrl
	    }
	  }), _c('text', {
	    staticClass: ["content"]
	  }, [_vm._v(_vm._s(_vm.Content))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["btn-group"]
	  }, _vm._l((3), function(m) {
	    return _c('div', {
	      key: m,
	      staticClass: ["row"]
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

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(77)

	/* template */
	var __vue_template__ = __webpack_require__(78)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/violetjack/Documents/WorkSpace/mobilenurseweex/src/views/home/Test.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', [_vm._v(_vm._s(_vm.title))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["header"]
	  }, [_c('image', {
	    staticClass: ["menu"],
	    class: [_vm.isActive ? 'white' : ''],
	    attrs: {
	      "src": _vm.Menu
	    },
	    on: {
	      "click": _vm.toMenu
	    }
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.Title))]), _c('div', {
	    staticClass: ["clickarea"]
	  }, [_c('image', {
	    staticClass: ["switch"],
	    attrs: {
	      "src": _vm.Switch
	    },
	    on: {
	      "click": _vm.showMenu
	    }
	  })])]), (_vm.Page == 0) ? _c('menu', {
	    on: {
	      "selectPage": _vm.toPage
	    }
	  }) : _vm._e(), (_vm.Page == 1) ? _c('bed', {
	    attrs: {
	      "Ward": _vm.Ward
	    }
	  }) : _vm._e(), (_vm.Page == 2) ? _c('test', {
	    attrs: {
	      "title": "Page02"
	    }
	  }) : _vm._e(), (_vm.Page == 3) ? _c('test', {
	    attrs: {
	      "title": "Page03"
	    }
	  }) : _vm._e(), (_vm.Page == 4) ? _c('test', {
	    attrs: {
	      "title": "Page04"
	    }
	  }) : _vm._e(), (_vm.Page == 5) ? _c('test', {
	    attrs: {
	      "title": "Page05"
	    }
	  }) : _vm._e(), (_vm.Page == 6) ? _c('test', {
	    attrs: {
	      "title": "Page06"
	    }
	  }) : _vm._e(), (_vm.Page == 7) ? _c('test', {
	    attrs: {
	      "title": "Page07"
	    }
	  }) : _vm._e(), (_vm.Page == 8) ? _c('test', {
	    attrs: {
	      "title": "Page08"
	    }
	  }) : _vm._e(), (_vm.Page == 9) ? _c('test', {
	    attrs: {
	      "title": "Page09"
	    }
	  }) : _vm._e(), (_vm.Page == 10) ? _c('test', {
	    attrs: {
	      "title": "Page10"
	    }
	  }) : _vm._e(), (_vm.Page == 11) ? _c('test', {
	    attrs: {
	      "title": "Page11"
	    }
	  }) : _vm._e(), (_vm.Page == 12) ? _c('test', {
	    attrs: {
	      "title": "Page12"
	    }
	  }) : _vm._e(), (_vm.IsMenuShow) ? _c('div', {
	    staticClass: ["float"]
	  }, [_c('text', {
	    staticClass: ["item"],
	    on: {
	      "click": function($event) {
	        _vm.switchWard('三病区')
	      }
	    }
	  }, [_vm._v("三病区")]), _c('div', {
	    staticClass: ["line"]
	  }), _c('text', {
	    staticClass: ["item"],
	    on: {
	      "click": function($event) {
	        _vm.switchWard('四病区')
	      }
	    }
	  }, [_vm._v("四病区")]), _c('div', {
	    staticClass: ["line"]
	  }), _c('text', {
	    staticClass: ["item"],
	    on: {
	      "click": function($event) {
	        _vm.switchWard('五病区')
	      }
	    }
	  }, [_vm._v("五病区")])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);