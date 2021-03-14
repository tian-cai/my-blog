### js中的类型转换
在js中，运算符和函数会自动将赋予它们的值转换为正确的类型，这被称为类型转换

### 其他类型转成字符串
- 一个小例子
    ```js
    String(Symbol('sy')) // "Symbol(sy)"
    String(undefined)  // "undefined"
    String(null)       // "null"
    String(NaN)        // "NaN"
    String(Infinity)   // "Infinity"
    String(123)        // "123"
    String(-123)       //  "-123"
    String(-0)         //  "0"
    String(+0)         //  "0"
    String(true)       //  "true"
    String([])         //  ""
    String([1, 2])     //  "1,2"
    String({})         // "[object Object]"
    String({a: 1})     // "[object Object]"
    const obj = {
        toString() {
            return "toString"
        }
    }
    String(obj)        // "toString"
    ```
- 转换规律
    - 对于基本类型转换成字符串，直接对原来的值加双引号即可，`+0`，`-0` 均转换为 `"0"`
    - 对于引用类型转换成字符串，使用 `toString()` 的返回值进行转换

- 转换方法
    - 使用 `String()` 函数进行转换
    - 使用 `原来的值 + ''` 来进行转换(对于 `Symbol` 类型会报错)
    - 调用 `toString()` 方法

### 其他类型转成数字
- 一个小例子
    ```js
    Number(Symbol('num')) //Uncaught TypeError: Cannot convert a Symbol value to a number
    Number(undefined)  // NaN
    Number(null)       // 0
    Number('123str')   // NaN
    Number('123')      // 123
    Number('-123')     // -123
    Number('-0')       // -0
    Number('+0')       // 0
    Number("0xA")      // 10
    Number(true)       // 1
    Number(false)      // 0
    Number([])         // 0
    Number([9])        // 9
    Number([1,2])      // NaN
    const arr = [1, 2]
    arr.valueOf = function() {
        return 5
    }
    Number(arr)        // 5
    Number({})         // NaN
    const obj = {
        valueOf() {
            return 5
        }
    }
    Number(obj)        // 5

    ```
- 转换规律
    - 对于不可以转换成数字的值，返回 `NaN`，如含有非数字的字符串，`undefined` 等
    - 对于引用类型，首先使用 `valueOf()` 的返回值进行转换，如果转换的结果是 `NaN`，则使用 `toString()` 的返回值进行转换

- 转换方法
    - 使用 `Number()` 函数转换
    - 使用 `+`
    - 使用 `parseInt()`
        ```js
        parseInt('  123str')  // 123
        Number('123str')    // NaN
        parseInt('str123')  // NaN
        Number('str')       // NaN
        parseInt('')        // NaN
        parseInt("0xA")     // 10
        ```
        `parseInt()` 函数在转换字符串时，它会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或者负号，`parseInt()` 就会返回 `NaN`; 如果第一个字符是数字字符，`parseInt()` 会继续解析第二个字符，直到解析完所有后续字符或者遇到了 一个非数字字符

### 其他类型转成布尔值
- 一个小例子
    ```js
    Boolean(Symbol('fn')) // true
    Boolean("")          // false
    Boolean("123")       // true
    Boolean("str")       // true
    Boolean(+0)          // false
    Boolean(-0)          // false
    Boolean(1)           // true
    Boolean(12)          // true
    Boolean(NaN)         // false
    Boolean(undefined)   // false
    Boolean(null)        // false
    Boolean([])          // true
    Boolean({})          // true
    ```
- 转换规律
    - 对于 `""` , `undefined` , `null` , `+0` , `-0`, `NaN` 会转为 `false` ，剩余均转换为 `true`

- 转换方法
    - 使用 `Boolean()` 函数转换
    - 使用 `!!`
    - 一些运算符，如 `&&` ，`||` 等

### `a == 1` && `a == 2` && `a == 3`可以为`true`吗?
- 利用对象的类型转换
    ```js
    const a = {
        _i: 1,
        valueOf() {
            return this._i++
        }
    }
    const result = a == 1 && a == 2 && a == 3   // true
    ```
- 利用 `Object.defineProperty()` 对数据的劫持
    ```js
    let _a = 1
    Object.defineProperty(window, 'a', {
        get() {
            return _a++
        }
    })
    const result = a == 1 && a == 2 && a == 3  // true
    ```


