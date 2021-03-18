> js中定义变量的方式

### `var`
- 声明提升，变量可以在声明之前使用，值为 `undefined`
    ```js
    console.log(a)  // undefined
    var a = 1

    // 等同于
    var a
    console.log(a) 
    a = 1
    ```
- 重复声明
    ```js
    var a = 1
    var a = 2
    ```
    **在相同作用域内，可以重复声明同一个变量**

- 不存在块级作用域
    ```js
    for (var i = 0; i < 3; i++) {
        console.log(i)    // 0 1 2
    }
    console.log(i)  // 3
    ```


### `let` 
- 不存在变量提升，必须先定义在使用
    ```js
    console.log(a) // ReferenceError: a is not defined
    let a = 1
    ```
- 不允许重复声明 
    ```js
    let a = 1
    let a = 2   // SyntaxError: Identifier 'a' has already been declared
    ```
- 块级作用域
    ```js
    for (let i = 0; i < 3; i++) {
        console.log(i)   // 0  1  2
    }
    console.log(i)   // ReferenceError: i is not defined
    ```


### `const`
与 `let` 具有同样的性质，不同的是 `const` 用来定义常量，一旦声明，常量的值就不能改变。这意味着，`const` 一旦声明变量，就必须立即初始化，不能留到以后赋值。
```js
const PI = 3.1415926
PI = 4 //  TypeError: Assignment to constant variable
const ZERO  // SyntaxError: Missing initializer in const declaration
```


### 常见面试题目
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
```
上面的代码会如何输出呢？<br>
答案是 `3 3 3` ，数字的输出间隔一秒。这很好理解，因为执行 `setTimeout` 函数时，`i` 已经变成3了<br>
那么如何让输出变成我们想要的`0 1 2`呢？
1. 封装函数，利用函数传递值
    ```js
    for (var i = 0; i < 3; i++) {
        loop(i)
    }

    function loop(i) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
    ```
2. 利用 `let`
    ```js
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
    ```
    问题来了，为啥使用 `let` 就可以达到效果呢？原因很简单，因为上述代码经过 `Babel` 转换之后就变成了下面这个样子，这和我们的第一种方法是一模一样的
    ```js
    "use strict"

    var _loop = function _loop(i) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }

    for (var i = 0; i < 3; i++) {
        _loop(i)
    }
    ```
3. 利用 `setTimeout` 的第三个参数，可以向回调函数传参
    ```js
    for (var i = 0; i < 3; i++) {
        setTimeout((j) => {
            console.log(j)
        }, i * 1000, i)
    }
    ```






