# weex随笔

记录下weex中遇到的一些问题。

## 内容

只能使用[数组语法](https://cn.vuejs.org/v2/guide/class-and-style.html#数组语法)来写class的绑定。

无法使用 `v-show` 和CSS属性 `display: none;`，用 `v-if` 替代。

推荐先过一遍[别人踩的坑](https://github.com/dreamochi/DayDayUp/issues/77),避免无谓的错误。

## 2017/8/22

用了一段时间的weex，发现几个比较麻烦的问题。首先就是用的人还是比较少，社区不健全，很多资料都是要自己看源码，还好我会Android开发不然都快玩不下去了。所以，现在解决问题的方式很多时候只能靠看源码。其次，调试不方便！说是说有个playground可以调试，然而如果报点什么错误无从下手不是~log还得需要通过Android Studio来看（试着只使用DDMS来看log，能快一点）。现在主要就是靠 `console.log()` 来进行逐步的调试，通过ESLint规避一些错误，查看Logcat查看一些JS语法错误，再不行就把打包的JS放到网页版本来进行调试。再不行就只能看源码了。总之，没有想象中那么美好，问题不断。从预研到实现中遇到了很多问题，虽然解决问题的感觉挺好，但问题多到解决不完可不太妙。最后，WEEX的稳定性有待商榷，可能是我优化有问题的缘故，界面加载过程中经常会出现卡顿或者显示不全的情况。这有待进一步测试。另外比较不能忍的是，两个Activity之间的数据传输只能靠存储到本地来解决，这非常不优雅~对于我这种代码优雅强迫症的玩家兼职是浑身难受。
SO……综上所述，WEEX的坑还是非常之多的。不过乐都项目做完应该木有问题，但这个性能问题让我总是有点担忧。特别是报错的复现、调试等问题。
最后呢，如果踩了一些坑尽量总结起来分享出去，共同创造社区才能更好地发展技术。让别人少踩一些坑吧。

## 2017/8/24

一开始用的页面是[WXSample](https://github.com/xkli/WXSample)的demo进行改造的项目，然后 `navigator` 的页面跳转也是用了 WXSample 的 NetworkActivity，结果发现使用过程中经常会遇到页面加载一半，有些数据空白的情况。无奈之下找到了 Playground，把它的 [WXPageActivity](https://github.com/apache/incubator-weex/blob/master/android/playground/app/src/main/java/com/alibaba/weex/WXPageActivity.java) 给搬到我的Android项目中来，虽然增加了好多代码，也算是解决了当前问题，具体原因还不太清楚。还有像 WEEX 的网络通信，使用 Stream 也遇到了一些坑，增删改查 的功能都花了一些时间扫坑。目前而言坑都解决了，项目可以继续下去了。之后要整理出个写表单的流程模板，便于提高效率。
在 WEEX 的 Playground 项目中，总是有一个悬浮的调试工具，如果要去掉，只要删掉 [weex-debug](https://github.com/apache/incubator-weex/tree/master/android/weex_debug) 项目，再稍加配置就好了。因为可能有些人会直接用 Playground 的 WXPageActivity 来跳转，但又不需要调试悬浮按钮，所以这个解决方案应该有点用~