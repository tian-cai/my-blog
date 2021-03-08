### js判断数据的类型
### `typeof`
- 例子
    ```js
    typeof  Symbol(1) // "symbol"
    typeof  123   //  "number"
    typeof  '123'  // "string"
    typeof  true   // "boolean"
    typeof  undefined  // "undefined"
    typeof  function() {} // "function"
    typeof  Object  // "function"
    typeof  null  // "object"
    typeof  []   // "object"
    typeof  {}  // "object"
    typeof  new Date() // "object"
    typeof  /\d/  // "object"
    ```
- 特点
    - 对于`Symbol`、数值、字符串、布尔值分别返回`"symbol"`、`"number"`、`"string"`、`"boolean"`，函数返回`"function"`，`undefined`返回`"undefined"`，除此以外，其他情况都返回`"object"`
    - 如果返回值为`"object"`，我们是无法得知值的类型到底是数组还是对象或者其他值

### `Object.prototype.toString`
- 例子
    ```js
    Object.prototype.toString.call(Symbol(1))  // "[object Symbol]"
    Object.prototype.toString.call(2)    // "[object Number]"
    Object.prototype.toString.call('2')  // "[object String]"
    Object.prototype.toString.call(true)  // "[object Boolean]"
    Object.prototype.toString.call(undefined) //  "[object Undefined]"
    Object.prototype.toString.call(function f() {})  // "[object Function]"
    Object.prototype.toString.call(Object)  // "[object Function]"
    Object.prototype.toString.call(null)   // "[object Null]"
    Object.prototype.toString.call([])  // "[object Array]"
    Object.prototype.toString.call({})  // "[object Object]"
    Object.prototype.toString.call(new Date())  // "[object Date]"
    Object.prototype.toString.call(/d/)  // "[object RegExp]"
    ```
- 特点
    - 返回 `"[object type]"`，其中 type 是对象的类型，因此我们可以利用这一点进行准确的类型判断

- 应用（判断值的类型）
    ```js
    function getType(value) {
        let type = Object.prototype.toString.call(value)
        type = type.slice(8, -1)
        return type
    }
    ```
