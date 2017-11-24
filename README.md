# MobileNurseWeex

weex构建的乐都移动护理APP项目，

## getting start

打开CMD终端，进入项目根目录，安装插件。

```bash
npm install
```

## 文件结构

* `src/*`: 项目代码
* `app.js`: Weex页面的入口文件
* `build/*`: 构建脚本
* `dist/*`: 代码生成路径
* `assets/*`: 资源文件
* `index.html`: 带测试二维码的预览页面
* `weex.html`: 渲染的预览页面
* `.babelrc`: babel config （默认ES6）
* `.eslintrc`: eslint config (默认Standard)
* `android`: Android项目,本项目根据[WXSample](https://github.com/xkli/WXSample)改造而来。

## npm scripts

```bash
# 打包项目并将打包文件复制到Android项目中
npm run build

# 实时打包项目
npm run dev

# 打包并开启本地服务器预览效果，访问 localhost:8080
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## 环境安装

* [node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## 参考资料

* [Vue官方文档](https://cn.vuejs.org/)
* [Weex官方文档](http://weex.apache.org/cn/)
* [VSCode插件配置安装](https://github.com/varHarrie/Dawn-Blossoms/issues/10)

## 其他

安装完环境后，既可以进行开发。

### 页面开发

只需要修改 `src` 文件夹中的 `.vue` 文件。

### 页面测试

* 运行 `npm run build` ，脚本会对项目进行打包并将打包好的文件复制到Android项目中，运行Android项目到手机即可实现本地调试。
* 运行 `npm run serve` 会开启一个服务，访问 `http://localhost:8080/` 即可进行查看。同时，也可以使用手机APP的远程调试功能进行远程调试 **（注：远程调试主机地址为 `@吴洪` 的电脑，如需变更主机地址需要修改Android项目中的IP地址）** 。
* 运行 `npm run dev` 进行实时打包项目，即只要项目有变动就会重新进行打包。

tips：可以开两个窗口分别运行 `npm run dev` 和 `npm run serve` 来实现实时渲染，即改动完保存之后，刷新页面就可以看到效果，避免了反复 `npm run serve`。

### 当前测试服务器地址

```
http://192.168.1.196:8080
```

### 图片获取方式

将图片放到 `./dist/img` 目录下，访问 `http://192.168.1.200:8080/dist/img/me.png` 即可获取到数据。

### 二维码调试流程

1. 在项目目录下运行 `npm run serve` 命令，打包项目并开启服务器。
2. 如果不报错，访问 `http://localhost:8080/` 页面。
3. 使用 [WEEX Playground](http://weex.apache.org/cn/playground.html) 扫描二维码查看效果。

**注意**： `npm run serve` 只会打包一次项目，如有改动需要重新执行命令来打包并启动服务器。