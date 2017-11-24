# 调试流程摸索

发现weex的调试工作不像网页端那么轻松，需要一定时间摸索。

* Android端获取 `console log`：打开Android Studio，连接手机。在Logcat里面看手机log，过滤信息 `jslog`。
* 可以在log看到weex渲染的各个步骤、渲染时间等数据。
* 单步调试变得有些困难了。