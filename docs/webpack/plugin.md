### 如何使用
插件目的在于解决 loader 无法实现的其他事。
在 webpack 配置中，向 plugins 属性传入 new 实例。
```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
   ]
};
```

### 常用插件
- `HotModuleReplacementPlugin`: 启用模块热替换
- `CopyWebpackPlugin`: 将单个文件或整个目录复制到构建目录
- `DefinePlugin`: 允许在编译时配置的全局常量
- `EnvironmentPlugin`: DefinePlugin 中 process.env 键的简写方式
- `BannerPlugin`: 在每个生成的 chunk 顶部添加 banner
- `CommonsChunkPlugin`: 提取 chunks 之间共享的通用模块
- `DllPlugin`: 为了极大减少构建时间，进行分离打包
- `ExtractTextWebpackPlugin`: 从 bundle 中提取文本到单独的文件
- `HtmlWebpackPlugin`: 简单创建 HTML 文件，用于服务器访问
- `HtmlWebpackTagsPlugin`: 自动将相应文件注入到index.html中
- `I18nWebpackPlugin`: 为 bundle 增加国际化支持
- `NpmInstallWebpackPlugin`: 在开发时自动安装缺少的依赖
- `CssCleanupPlugin`: 移除重复的和没有用到的css代码
- `MiniCssExtractPlugin`: 从 bundle 中提取css到单独的文件
- `cleanWebpackPlugin`: 清空指定目录
- `webpack-build-notifier`: 构建完成时，能够像微信这样的APP弹出消息的方式，提示构建已经完成
- `webpack-dashboard`: 统计和优化webpack日志的工具，以表格形式展示日志信息
- `webpack-deep-scope-analysis-plugin`: 作用域分析

### 参考资料
- [插件列表](https://www.webpackjs.com/plugins/)
- [第三方插件](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)