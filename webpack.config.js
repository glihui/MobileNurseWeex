// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

var path = require('path')
var webpack = require('webpack')
var fs = require('fs')

var files = fs.readdirSync('./src/entrys')

var entry = {}

files.forEach(function (file) {
  var item = file.replace('.js', '')
  entry[item] = path.resolve('./src/entrys/' + file)
})

var bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n', { raw: true }
)

function getBaseConfig() {
  return {
    entry: entry,
    output: {
      path: 'dist'
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        'views': path.resolve('./src/views'),
        'utils': path.resolve('./src/utils')
      }
    },
    module: {
      // ESLint配置
      preLoaders: [{
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
      ],
      // 如果注释掉以上这段将不产生ESLint检查
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        loaders: []
      }]
    },
    vue: {
      // // You can use PostCSS now!
      // // Take cssnext for example:
      // // 1. npm install postcss-cssnext --save-dev
      // // 2. write `var cssnext = require('postcss-cssnext')` at the top
      // // 3. set the config below
      // postcss: [cssnext({
      //   features: {
      //     autoprefixer: false
      //   }
      // })]
    },
    plugins: [bannerPlugin]
  }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.loaders[1].loaders.push('vue')

var weexConfig = getBaseConfig()
weexConfig.output.filename = '[name].weex.js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]