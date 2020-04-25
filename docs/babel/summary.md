### Babel是什么
Babel是一个JavaScript编译器（输入源码 => 输出编译后的代码），主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### Babel做了什么
- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
- 源码转换

### Babel如何编译
Babel 的编译过程可以分为三个阶段
1. 解析：将代码解析成抽象语法树。
2. 转换：对抽象语法树进行转换操作。
3. 输出：根据转换后的抽象语法树再生成代码。


### Babel的插件(plugin)
Babel 虽然开箱即用，但是什么动作都不做。将代码解析之后再输出同样的代码。<br>
如果想要 Babel 做一些实际的工作，就需要为其添加插件。<br>
插件分为两种：
- 转换插件: 用于转换你的代码，将会启用相应的语法插件。
- 语法插件: 只用于解析你的代码。

### Babel的预设(preset)
预设就是插件的组合，官方推出了很多预设，我们可以直接使用，避免我们手动去组合插件。

### Babel的polyfill
polyfill意思就是垫片，垫片就是垫平不同浏览器环境的差异，让大家都一样。

### 参考文章
- [Babel官网](https://www.babeljs.cn/)
- [不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)
- [前端工程师的自我修养-关于 Babel 那些事儿](https://juejin.im/post/5e5b488af265da574112089f)