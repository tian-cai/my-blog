### 使用场景
- 全局执行环境，`this`指向全局对象（浏览器中是`window`）
    ```js
    this.test = 'test'
    console.log(this.test === window.test) // true
    console.log(this === window) // true
    ```
- 函数作为对象的方法被调用时，它的`this`为调用该函数的对象(就近原则)
    ```js
    const person = {
        name: 'lisi',
        say: function() {
            console.log(`I am ${this.name}`)
        }
        son: {
            name: 'lilong',
            say: function() {
                console.log(`I am ${this.name}`)
            }
        }
    }
    person.say() // I am lisi
    person.son.say() // I am lilong， 就近原则，say方法体内this为son对象
    ```
- 函数用作构造函数时（使用`new`关键字），它的`this`被绑定到正在构造的新对象。
    ```js
    function Person(name, age) {
        this.name = name
        this.age = age
        this.toString = function() {
            console.log(`I am ${this.name}`)
        }
    }
    const person = new Person('lisi', 20)
    console.log(person.name) // lisi
    ```
- 箭头函数体内的`this`对象，与封闭词法环境的`this`保持一致，指向固定，无法改变
    - 代码示例
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
    - 特点
        - 不可以使用`arguments`对象
        - 不可以当作构造函数，不能用作`Generator`函数
        - 没有自己的`this`，与创建时封闭词法环境的`this`保持一致
        - `this`指向固定，无法改变

- 当函数被用作事件处理函数时，它的`this`指向触发事件的元素
### 使用注意事项
- 避免多层`this`
    ```js
    var o = {
        f1: function () {
            console.log(this === o)
            var f2 = function () {
                console.log(this === window)
            }()
        }
    }
    o.f1() // true, true
    var o1 = {
        f1: function () {
            console.log(this === o1);
            var f = () => {
                console.log(this === o1);
            }
            f()
        }
    }
    o1.f1()  // true, true
    ```
- 避免数组处理方法中的`this`
    ```js
    const arr = [1]
    arr.forEach(function(ele) {
        console.log(ele, this)  // 1, window
    })
    arr.forEach(function(ele) {
        console.log(ele, this)  // 1, arr
    }, arr)
    arr.forEach((ele) => {
        console.log(ele, this)  // 1, window
    }, arr)
    ```

### 固定this指向
- [call](mycall)
- [apply](mycall)
- [bind](mybind)

### 参考文章
- [MDN-this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [箭头函数](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)