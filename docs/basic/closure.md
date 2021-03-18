### 词法环境
- 在`JavaScript`中，每个运行的函数，代码块以及整个脚本，都有一个被称为词法环境的内部（隐藏）的关联对象（也被叫做作用域）
- 词法环境对象由两部分组成
    - 环境记录，一个存储所有局部变量作为其属性的对象。
    - 对外部词法环境的引用
- 当代码要访问一个变量时，首先会搜索当前词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。
- 所有的函数在“诞生”时都会记住创建它们的词法环境，都有名为 `[[Environment]]` 的隐藏属性，该属性保存了对创建该函数的词法环境的引用
- 当函数调用时，会为该调用创建一个新的词法环境，并且其外部词法环境引用获取于 `[[Environment]]`属性

### 闭包
- 定义<br>
是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被调用返回了之后
- 如何产生
    - 返回函数
    - 函数当作参数传递
- 本质<br>
通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除，因为现在没有任何对它们的引用了。
因为内部函数可以访问外部函数中声明的变量和参数，导致函数调用完成后，与之关联的词法环境无法被垃圾回收，依然在内存中。
- 应用场景
    - 柯里化
### 柯里化
- 定义<br>
柯里化是一种函数的转换，把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下参数且返回结果的新函数

- 实现
```js
function curry(func, args = []) {
    const originArgsLength = func.length
    return function() {
        const _args = args.slice()
        _args.push(...arguments)
        if(originArgsLength <= _args.length) {
            return func.apply(this, _args)
        }else {
            return curry.call(this, func, _args)
        }
    }
}
var sum = function(a, b, c) {
    return a + b + c
};
curriedSum = curry(sum)
console.log(curriedSum(1,2,3))   // 6
console.log(curriedSum(1)(2)(3))  // 6
console.log(curriedSum(1, 2)(3))  // 6
console.log(curriedSum(1)(2, 3))  // 6
```

### 参考文章
- [变量作用域，闭包](https://zh.javascript.info/closure)
- [JavaScript函数式编程](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/JavaScript/JavaScript%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.md#%E6%9F%AF%E9%87%8C%E5%8C%96)