### 瓶颈
- 构建过程耗时太多

- 构建出的包体积太大

### 可视化分析

输出webpack构建信息的json文件`webpack --profile --json > stats.json`

- [analyse](https://github.com/webpack/analyse): 官方分析工具，上传json文件即可

- [webpack-chart](https://github.com/alexkuz/webpack-chart): webpack 数据交互饼图。

- [webpack-visualizer](https://github.com/chrisbateman/webpack-visualizer): 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。

- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer): 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。

### 构建速度分析
[speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)插件可以分析webpack的插件和loader耗时情况，有助于我们定位构建慢的问题以及如何优化构建速度。


### 缓存
对支持缓存的loader开启缓存，对不支持缓存的loader使用[cache-loader](https://www.npmjs.com/package/cache-loader)

**保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用cache-loader。**


### 多核
- 使用[happypack](https://github.com/amireh/happypack)

- 使用[thread-loader](https://www.webpackjs.com/loaders/thread-loader/)

- 多进程压缩(三选一即可)
    - [webpack-parallel-uglify-plugin](https://github.com/gdborton/webpack-parallel-uglify-plugin)
    - [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) 开启 parallel 参数
    - [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) 开启 parallel 参数(推荐)

### 限定范围
- 在配置 Loader 时通过 include 去缩小命中范围

- 优化 resolve.modules 配置, 可以指明存放第三方模块的绝对路径，以减少寻找

- 优化 resolve.alias 配置, 例如通过配置 resolve.alias 可以让 Webpack 在处理 React 库时，直接使用单独完整的 react.min.js 文件，从而跳过耗时的递归解析操作。
  ```
    module.exports = {
        resolve: {
            // 使用 alias 把导入 react 的语句换成直接使用单独完整的 react.min.js 文件，
            // 减少耗时的递归解析操作
            alias: {
            'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
            }
        },
    }
  ```

- 优化 module.noParse 配置
  可以让 Webpack 忽略对部分没采用模块化的文件的递归解析处理，这样做的好处是能提高构建性能。 原因是一些库，例如 jQuery 、ChartJS， 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义。
  ```
    module.exports = {
        module: {
            // 独完整的 `react.min.js` 文件就没有采用模块化，忽略对 `react.min.js` 文件的递归解析处理
            noParse: [/react\.min\.js$/],
        }
    };
  ```

### 图片压缩
使用[image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)

### tree shaking

生效的前提
- 模块是 ES6 的语法

- 模块代码是没有副作用的

- 在 .babelrc 里设置 modules: false 即可

- 引入一个能够删除未引用代码的压缩工具(例如 UglifyJSPlugin）

### code splitting

代码分离能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。

代码分离可以用于获取更小的 bundle，以及控制资源加载优先级。

有三种常用的代码分离方法：

- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
- 动态导入：通过模块的内联函数调用来分离代码。

### 抽离
对于一些不常变更的静态依赖，比如我们项目中常见的 React 全家桶，亦或是用到的一些工具库等等，我们不希望这些依赖被集成进每一次构建逻辑中，因为它们真的太少时候会被变更了，所以每次的构建的输入输出都应该是相同的。因此，我们会设法将这些静态依赖从每一次的构建逻辑中抽离出去，以提升我们每次构建的构建效率。常见的方案有两种，一种是使用 webpack-dll-plugin 的方式，在首次构建时候就将这些静态依赖单独打包，后续只需要引用这个早就被打好的静态依赖包即可；另一种，也是业内常见的 Externals的方式，我们将这些不需要打包的静态资源从构建逻辑中剔除出去，而使用 CDN 的方式，去引用它们。

#### Dll

- DllPlugin插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin 映射到相关的依赖上去的。
- DllReferencePlugin把只有 dll 的 bundle 引用到需要的预编译的依赖。

以下是代码示例，详情见[demo](https://github.com/tian-cai/demo/tree/master/src/webpack/demo2)
```
// webpack.config.dll.js
const webpack = require("webpack");

const dll = {
  entry: {
    react: ["react", "react-dom", "react-router-dom"]
  },
  output: {
    path: __dirname + "/dll",
    filename: "[name]-[hash:8].dll.js",
    library: "[name]_dll"
  },
  plugins: [
    new cleanWebpackPlugin("dll/*"),
    new webpack.DllPlugin({
        name: "[name]_dll",
        path: __dirname + "/dll/" + "[name].manifest.json",
    })
  ],
  mode: "production",
};
module.exports = dll;

// webpack.config.prod.js
const webpack = require("webpack");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const fs = require('fs')
const path = require('path')

function loadDllAssets() {
  return fs
    .readdirSync(path.resolve(__dirname, './dll'))
    .filter(filename => filename.match(/.dll.js$/))
    .map(filename => `../dll/${filename}`);
}

module.exports = {
    mode: "production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[contenthash].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new webpack.DllReferencePlugin({
            manifest: require("./dll/react.manifest.json")
        }),
        new HtmlWebpackTagsPlugin({
            append: false,
            scripts: loadDllAssets()
        })
    ]
}
```

#### Externals
风险： 会出现CDN服务不稳定而导致了项目出现问题的情况，使用需要谨慎。

优点： 将不经常变更的依赖从构建逻辑中分离出去，提升构建效率。

以下是代码示例，详情见[demo](https://github.com/tian-cai/demo/tree/master/src/webpack/demo1)

```
module.exports = {
  ...,
  externals: {
    // key是我们 import 的包名，value 是CDN为我们提供的全局变量名
    // 所以最后 webpack 会把一个静态资源编译成：module.export.react = window.React
    "react": "React",
    "react-dom": "ReactDOM",
    "redux": "Redux",
    "react-router-dom": "ReactRouterDOM"
  }
}
```

### 参考资料
- [cache-loader](https://www.npmjs.com/package/cache-loader)
- [happypack](https://github.com/amireh/happypack)
- [Webpack优化——将你的构建效率提速翻倍](https://juejin.im/post/6844903924806189070)
- [性能优化篇---Webpack构建速度优化](https://segmentfault.com/a/1190000018493260)
- [webpack构建速度与结果优化](https://huangxsu.com/2018/08/12/webpack-optimization/)
- [体积减少80%！释放webpack tree-shaking的真正潜力](https://juejin.im/post/6844903669100445710)
- [Tree-Shaking性能优化实践 - 原理篇](https://juejin.im/post/6844903544756109319)
- [Tree-Shaking性能优化实践 - 实践篇](https://juejin.im/post/6844903544760336398)
- [加速Webpack-缩小文件搜索范围](https://imweb.io/topic/5a40551ea192c3b460fce335)
- [多进程并行压缩代码](https://jkfhto.github.io/2019-10-17/webpack/%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%B9%B6%E8%A1%8C%E5%8E%8B%E7%BC%A9%E4%BB%A3%E7%A0%81/)
- [进一步分包：预编译资源模块 使用 DLLPlugin 进行分包](https://jkfhto.github.io/2019-10-17/webpack/%E8%BF%9B%E4%B8%80%E6%AD%A5%E5%88%86%E5%8C%85%EF%BC%9A%E9%A2%84%E7%BC%96%E8%AF%91%E8%B5%84%E6%BA%90%E6%A8%A1%E5%9D%97-%E4%BD%BF%E7%94%A8-DLLPlugin-%E8%BF%9B%E8%A1%8C%E5%88%86%E5%8C%85/)
- [webpack优化之code splitting](https://segmentfault.com/a/1190000013000463)
- [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)
- [externals](https://www.webpackjs.com/configuration/externals/)
- [code-splitting](https://www.webpackjs.com/guides/code-splitting/)