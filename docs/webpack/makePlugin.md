### 基本结构
 - 一个js类或者一个函数
 - 该方法的原型上具有apply方法
 - 注册事件钩子
 - 操作webpack内部实例特定数据。
 - 功能完成后，调用webpack提供的回调。

### 如何注册事件钩子
- tap：可以注册同步钩子。
- tapAsync：回调方式注册异步钩子。
- tapPromise：Promise方式注册异步钩子。

### 一个例子
```js
class FileListPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            // Create a header string for the generated file:
            var filelist = 'In this build:\n\n';

            // Loop through all compiled assets,
            // adding a new line item for each filename.
            for (var filename in compilation.assets) {
                filelist += '- ' + filename + '\n';
            }

            // Insert this list into the webpack build as a new file asset:
            compilation.assets['filelist.md'] = {
                source: function () {
                    return filelist;
                },
                size: function () {
                    return filelist.length;
                }
            };

            callback();
        });
    }
}

module.exports = FileListPlugin;

```


### 参考资料
- [揭秘webpack plugin](https://champyin.com/2020/01/12/%E6%8F%AD%E7%A7%98webpack-plugin/)
- [Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)

