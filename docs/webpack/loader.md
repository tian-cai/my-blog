### 三种使用方式
- 配置（最常用），在 webpack.config.js 文件中指定 loader。
    ```js
    // webpack.config.js
    module.exports = {
        module: {
            rules: [
                { test: /\.js$/, use: 'babel-loader' },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' },
                    ]
                }
            ]
        }
    };
    ```
    每一条 rule 会包含两个属性：test 和 use。test用来匹配对应的文件，use 指定 loader 转换匹配的文件。

- 内联，在每个 import 语句中显式指定 loader。

    `import style from 'style-loader!css-loader?modules!./styles.css';`
    可以在 import 语句指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。

- CLI，在shell命令中指定它们。

    `webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'`

### loader 特性
- 支持链式传递，一组链式的 loader 将按照相反的顺序执行。
- 可以是同步的，也可以是异步的。
- 接收查询参数，用于对 loader 传递配置；也能够使用 options 对象进行配置。

### 常用 loader
- `vue-loader`: 加载和转译 Vue 组件
- `babel-loader`: 加载 ES2015+ 代码，然后使用 Babel 转译为 ES5
- `ts-loader`: 加载ts代码，转译为 js
- `script-loader` 在全局上下文中执行一次 JavaScript 文件
- `json-loader`: 加载 JSON 文件
- `file-loader`: 将文件发送到输出文件夹，并返回（相对）URL
- `raw-loader`: 加载文件原始内容（utf-8）
- `val-loader`: 将代码作为模块执行，并将 exports 转为 JS 代码
- `eslint-loader`: 使用 ESLint 清理代码
- `style-loader`: 将模块的导出作为样式添加到 DOM 中
- `css-loader` 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
- `less-loader`: 加载和转译 LESS 文件
- `sass-loader`: 加载和转译 SASS/SCSS 文件
- `html-loader` 导出 HTML 为字符串，需要引用静态资源
- `markdown-loader`: 将 Markdown 转译为 HTML

### 参考资料
- [module.rules配置](https://www.webpackjs.com/configuration/module/#module-rules)
- [loader列表](https://www.webpackjs.com/loaders/)
- [前端工程师都得掌握的 webpack Loader](https://github.com/axuebin/articles/issues/38)