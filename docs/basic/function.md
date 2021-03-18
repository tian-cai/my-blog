> 函数的那些知识

###  函数声明
1. `function` 命令
    ```js
    function sum(a, b) {
        return a + b 
    }
    sum(1, 2)  // 3
    ```
2. 函数表达式
    ```js
    var sum = function(a, b) {
        return a + b 
    }
    sum(1, 2)  // 3
    ```
3. `Function` 构造函数
    ```js
    var sum = new Function(
        'a',
        'b',
        'return a + b'
    )
    sum(1, 2)  // 3
    ```
### 声明提升
采用 `function` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。<br>
所以我们可以在函数定义之前就使用函数。
```js
sum(1, 2)  // 3
function sum(a, b) {
    return a + b 
}
```
采用 `function` 命令和 `var` 赋值语句声明同一个函数，由于存在函数提升，最后会采用 `var` 赋值语句的定义
```js
var f = function () {
    console.log('1');
}
function f() {
    console.log('2');
}
f() // 1

// 等同于
var f
function f() {
    console.log('2');
}
f = function () {
    console.log('1');
}
f() // 1
```

### 作用域
函数的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。<br>
下面的例子可以充分说明这一点
```js
let count = 10
function a() {
    return count + 10
}

function b() {
    const count = 20
    return a()
}
console.log(b())    // 20
```

```js
let count = 10
function b() {
    const count = 20
    function a() {
        return count + 10
    }
    return a()
}
console.log(b()) // 30
```

### 属性和方法
- `name` 返回函数的名字
- `length` 返回函数预期传入的参数个数，即函数定义之中的参数个数
- `toString()` 返回一个字符串，内容是函数的源码。对于那些原生的函数，返回`"function String() { [native code] }"`
    ```js
    function log(a) {
        console.log(a)
    }
    log.name    // "log"
    log.length  // 1
    log.toString()  // "function log(a) {console.log(a)}"
    String.toString()  // "function String() { [native code] }"
    ```
### 参数传递方式
- 对于原始类型的值，采用值传递，即在函数体内修改参数值，不会影响到函数外部。
    ```js
    let test = 1
    function log(test) {
        test = 3
    }
    log(test)
    console.log(test)   // 1
    ```
- 对于引用类型的值，采用址传递，在函数内部修改参数，将会影响到原始值。如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
    ```js
    const obj = { p: 1 }
    function f(o) {
        o.p = 2
    }
    f(obj)
    console.log(obj.p) // 2

    const array = [1, 2, 3];
    function f(o) {
        o = [2, 3, 4];
    }
    f(array);
    console.log(array) // [1, 2, 3]
    ```
###  `arguments`对象
`arguments`对象包含了函数运行时的所有参数，只有在函数体内部，才可以使用。<br>
带有一个`callee`属性，返回它所对应的原函数。
```js
function sum(a, b) {
    console.log(a === arguments[0])   // true
    console.log(b === arguments[1])   // true
    console.log(sum === arguments.callee)  // true
}
sum(1, 2)
```

### 箭头函数
- 不可以使用`arguments`对象
- 不可以当作构造函数，不能用作`Generator`函数
- 没有自己的`this`，与创建时封闭词法环境的`this`保持一致
- `this`指向固定，无法改变
```js
var name = 'window'
const person = {
    name: 'lisi',
    say: () => {
        console.log(`I am ${this.name}`)
    }
}
const son = {
    name: 'lilong'
}
person.say()  // I am window
person.say.call(son)   // I am window
person.say.apply(son)   // I am window
person.say.bind(son)()  // I am window
```
**对象不构成封闭词法环境，导致say箭头函数定义时的作用域就是全局作用域，所以`this`指向了`window`**


### 参考文章
- [JavaScript 教程](https://wangdoc.com/javascript/types/function.html)