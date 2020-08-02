### 常用配置
一共有三个配置，分别为base，dev，prod。
- base，为开发环境和生产环境共有的配置
```js
// webpack.config.base.js
let htmlWebpackPlugin = require("html-webpack-plugin")
let path = require("path")
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

let base = {
  entry: __dirname + "/src/index.js",
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      title: "My Cnode",
      favicon: "src/assets/favicon.png"
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory=true']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(jsx|js)$/,
        use: ["happypack/loader?id=js"],
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // 打包第三方库
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
          minChunks: 1
        }
      }
    }
  }
}
module.exports = base
```

- dev，开发环境的配置
```js
// webpack.config.dev.js 
const base = require("./webpack.config.base");
const webpack = require("webpack");
const merge = require('webpack-merge');

module.exports = merge(base, {
    mode: "development",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash:8].js"
    },
    devServer: {
        contentBase: __dirname + "/build",
        compress: true
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ]
    },
})
```

- prod，生产环境的配置
```js
const base = require("./webpack.config.base");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(base, {
    mode: "production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[contenthash:8].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash:8].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                style: {
                    name: 'style',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
})
```

[配置demo](https://github.com/tian-cai/my-cnode)