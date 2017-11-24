# 登录界面

实现用户登录页面

## 界面详情

* 标题、Logo，暂定现实为"移动护理"四个文本，居中。
* 账户输入框
* 密码输入框
* 登录按钮
具体界面可参照各类主流APP登录界面。

## 知识栈

* [Weex的CSS相关文档](http://weex.apache.org/cn/references/common-style.html)
* CSS-flex布局
    * 可参照 [Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
* [Vue语法](https://cn.vuejs.org/)
* Weex组件-div、text、input
    * 详见[官方文档](http://weex.apache.org/cn/references/components/input.html)
* Weex模块-stream、navigator、modal
    * stream 参照[文档](http://weex.apache.org/cn/references/modules/stream.html)
    * navigator和modal参照`app.vue`模块。

## 界面功能

用户输入账户和密码，点击登录按钮。如果出错则modal提示错误信息，否则提示"登录成功"跳转到`app.vue`页面。

## 相关接口

登录接口：BackServer + 'api/v1/SystemBusiness/UserInfo?userName=216&password=123'