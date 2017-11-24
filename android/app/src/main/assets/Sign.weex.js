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

	var _Sign = __webpack_require__(120);

	var _Sign2 = _interopRequireDefault(_Sign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Sign2.default.el = '#root'; // 登录页面
	exports.default = new Vue(_Sign2.default);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 界面服务器地址

	var AddressURL = 'http://192.168.1.200:8080/dist/'; // 测试主机IP，可修改！
	// let AddressURL = 'http://192.168.12.192/Content/app/' // 正式库IP
	// let AddressURL = 'http://192.168.1.28:8083/Content/app/' // 测试库IP
	// let AddressURL = 'http://192.168.1.182:8080/dist/'
	exports.default = AddressURL;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 后端服务器数据
	var IsTest = true;

	var OfficialServer = {
	  his: 'http://192.168.12.192:82/',
	  kf: 'http://192.168.12.192:81/'
	};

	var TestServer = {
	  his: 'http://192.168.1.28:8081/',
	  kf: 'http://192.168.1.28:8082/'
	  // kf: 'http://localhost:13557/'


	  // const LocalServer = {
	  //   his: 'http://192.168.1.28:8081/',
	  //   kf: 'http://192.168.1.200:13557/'
	  // }

	};var BackServer = IsTest ? TestServer : OfficialServer;

	exports.default = BackServer;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(121)
	)

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(127)
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
	__vue_options__.__file = "E:\\WorkSpace\\MobileNurseWeex\\src\\views\\Sign.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-19ea8873"
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

/***/ 121:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "width": 750,
	    "height": 1300
	  },
	  "title-wrapper": {
	    "textAlign": "center",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 750
	  },
	  "imgbackgr": {
	    "textAlign": "center",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 750,
	    "height": 400
	  },
	  "title": {
	    "position": "absolute",
	    "left": 200,
	    "top": 135,
	    "fontSize": 55,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "width": 350
	  },
	  "input": {
	    "height": 80,
	    "width": 600
	  },
	  "button-container": {
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "marginTop": 40,
	    "height": 150,
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "button": {
	    "width": 600,
	    "textAlign": "center",
	    "fontSize": 50,
	    "color": "#717171",
	    "padding": 20,
	    "borderRadius": 75,
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderColor": "#99A9BF",
	    "backgroundColor": "#ffffff",
	    "width:active": 600,
	    "textAlign:active": "center",
	    "fontSize:active": 50,
	    "color:active": "#717171",
	    "padding:active": 20,
	    "borderRadius:active": 75,
	    "borderStyle:active": "solid",
	    "borderWidth:active": 1,
	    "borderColor:active": "#99A9BF",
	    "backgroundColor:active": "#EFF2F7"
	  },
	  "line": {
	    "height": 1
	  },
	  "bckcolor": {
	    "width": 750,
	    "height": 120,
	    "backgroundColor": "#DEEBF3",
	    "border": "2px solid #DEEBF3",
	    "marginBottom": 10
	  },
	  "footers": {
	    "flexDirection": "row",
	    "marginLeft": 460,
	    "fontSize": 40,
	    "color": "#606060",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "textAlign": "center",
	    "marginTop": 13,
	    "width": 230,
	    "backgroundColor:active": "#C0CCDA",
	    "flexDirection:active": "row"
	  },
	  "loginfont": {
	    "width": 315,
	    "height": 85,
	    "paddingLeft": 160,
	    "paddingTop": 30
	  },
	  "check": {
	    "color": "#13CE66",
	    "marginRight": 6,
	    "width": 56,
	    "height": 56,
	    "borderWidth": 1,
	    "borderColor": "#606060"
	  },
	  "value": {
	    "fontSize": 40,
	    "color": "#606060",
	    "paddingLeft": 10
	  },
	  "footcolor": {
	    "backgroundColor": "#336699",
	    "width": 750,
	    "height": 120,
	    "position": "relative",
	    "left": 0,
	    "top": 70
	  }
	}

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _BackServer = __webpack_require__(33);

	var _BackServer2 = _interopRequireDefault(_BackServer);

	var _ViewServer = __webpack_require__(7);

	var _ViewServer2 = _interopRequireDefault(_ViewServer);

	var _DeleteInput = __webpack_require__(123);

	var _DeleteInput2 = _interopRequireDefault(_DeleteInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = weex.requireModule('modal'); //
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

	var stream = weex.requireModule('stream');
	var navigator = weex.requireModule('navigator');
	var storage = weex.requireModule('storage');

	module.exports = {
	  data: function data() {
	    return {
	      WorkerNO: '',
	      Password: '',
	      user: _ViewServer2.default + 'img/user.png',
	      psd: _ViewServer2.default + 'img/psd.png',
	      imgbackgr: _ViewServer2.default + 'img/login.png',
	      imgfont: _ViewServer2.default + 'img/loginfont.png',
	      value: '记住密码',
	      checkimg: _ViewServer2.default + 'img/check.png',
	      actionimg: true
	    };
	  },
	  mounted: function mounted() {
	    console.log('Render Sign');
	    this.getAccountInfo();
	  },

	  methods: {
	    getAccountInfo: function getAccountInfo() {
	      var _this = this;

	      storage.getItem('AccountInfo', function (event) {
	        var AccountInfo = JSON.parse(event.data);
	        console.log(AccountInfo);
	        _this.WorkerNO = AccountInfo.WorkerNO;
	        _this.Password = AccountInfo.Password;
	        _this.actionimg = Boolean(AccountInfo.Remember);
	        console.log(_this.WorkerNO);
	        console.log(_this.actionimg);
	      });
	    },
	    signIn: function signIn() {
	      if (this.WorkerNO === '' || this.Password === '') {
	        modal.alert({
	          message: '用户名和密码不能为空',
	          duration: 0.3
	        }, function (value) {});
	        return;
	      }

	      if (this.actionimg) {
	        var AccountInfo = { WorkerNO: this.WorkerNO, Password: this.Password, Remember: this.actionimg };
	        storage.setItem('AccountInfo', JSON.stringify(AccountInfo));
	      } else {
	        var _AccountInfo = { WorkerNO: this.WorkerNO, Password: '', Remember: this.actionimg };
	        storage.setItem('AccountInfo', JSON.stringify(_AccountInfo));
	      }

	      var url = _BackServer2.default.kf + 'api/v1/SystemBusiness/UserInfo?userName=' + this.WorkerNO + '&password=' + this.Password;
	      stream.fetch({
	        method: 'GET',
	        type: 'json',
	        url: url
	      }, function (res) {
	        if (res.data !== '') {
	          console.log('login log' + res.data);
	          storage.setItem('UserInfo', res.data);
	          // let json = eval('(' + res.data + ')')
	          // storage.setItem('CurWard', json.DepartmentName)
	          // console.log('CurWard = ' + json.DepartmentName)
	          // modal.toast({ message: '登录成功' })
	          navigator.push({
	            url: _ViewServer2.default + 'Home.weex.js',
	            animated: 'true'
	          });
	        } else {
	          modal.toast({ message: '登录失败,请检查用户名、密码和网络！' });
	        }
	      });
	    },
	    inputWorkerNO: function inputWorkerNO(val) {
	      this.WorkerNO = val;
	    },
	    inputPassword: function inputPassword(val) {
	      this.Password = val;
	    },
	    hid: function hid() {
	      this.actionimg = !this.actionimg;
	    }
	  },
	  components: {
	    DeleteInput: _DeleteInput2.default
	  }
	};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(124)
	)

	/* script */
	__vue_exports__ = __webpack_require__(125)

	/* template */
	var __vue_template__ = __webpack_require__(126)
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
	__vue_options__.__file = "E:\\WorkSpace\\MobileNurseWeex\\src\\views\\components\\DeleteInput.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-09c7420f"
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

/***/ 124:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 550,
	    "borderStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderColor": "#99A9BF",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-around",
	    "marginTop": 25,
	    "marginBottom": 34,
	    "marginLeft": 90,
	    "paddingLeft": 40
	  },
	  "input": {
	    "height": 80,
	    "width": 600,
	    "marginTop": 10,
	    "marginBottom": 1,
	    "paddingLeft": 95,
	    "color": "#717171"
	  },
	  "img": {
	    "width": 60,
	    "height": 60
	  },
	  "delete": {
	    "width": 60,
	    "height": 60,
	    "fontSize": 50
	  }
	}

/***/ }),

/***/ 125:
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

	exports.default = {
	  name: 'DeleteInput',
	  data: function data() {
	    return {
	      result: this.value,
	      del: ''
	    };
	  },

	  props: {
	    icon: String,
	    type: String,
	    placeholder: String,
	    value: String
	  },
	  watch: {
	    value: function value(val) {
	      this.result = val;
	    }
	  },
	  methods: {
	    oninput: function oninput(event) {
	      if (event.value === '') {
	        this.del = '';
	      } else {
	        this.del = '×';
	      }
	      this.$emit('input', event.value);
	    },
	    onreturn: function onreturn(event) {
	      this.$emit('return', event);
	    },
	    showDel: function showDel() {
	      return this.result !== '';
	    }
	  }
	};

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": _vm.type,
	      "placeholder": _vm.placeholder,
	      "value": _vm.result
	    },
	    on: {
	      "input": _vm.oninput,
	      "return": _vm.onreturn
	    }
	  }), _c('text', {
	    staticClass: ["delete"],
	    on: {
	      "click": function($event) {
	        _vm.result = ''
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.del))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["title-wrapper"]
	  }, [_c('image', {
	    staticClass: ["imgbackgr"],
	    attrs: {
	      "src": _vm.imgbackgr
	    }
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("第五康复医院移动护理平台")])]), _c('div', {
	    staticClass: ["bckcolor"]
	  }, [_c('image', {
	    staticClass: ["loginfont"],
	    attrs: {
	      "src": _vm.imgfont
	    }
	  })]), _c('delete-input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入账号",
	      "icon": _vm.user,
	      "value": _vm.WorkerNO
	    },
	    on: {
	      "input": _vm.inputWorkerNO
	    }
	  }), _c('div', {
	    staticClass: ["line"]
	  }), _c('delete-input', {
	    attrs: {
	      "type": "password",
	      "placeholder": "请输入密码",
	      "icon": _vm.psd,
	      "value": _vm.Password
	    },
	    on: {
	      "input": _vm.inputPassword,
	      "return": _vm.signIn
	    }
	  }), _c('div', {
	    staticClass: ["button-container"]
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.signIn
	    }
	  }, [_vm._v("登 录")])]), _c('div', {
	    staticClass: ["footers"],
	    on: {
	      "click": function($event) {
	        _vm.hid()
	      }
	    }
	  }, [_c('div', [(_vm.actionimg == true) ? _c('image', {
	    staticClass: ["check"],
	    attrs: {
	      "src": _vm.checkimg
	    }
	  }) : _c('div', {
	    staticClass: ["check"]
	  })]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.value))])]), _c('div', {
	    staticClass: ["footcolor"]
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });