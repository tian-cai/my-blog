### 数字的一些操作

### 比较两个值是否相等
- `==`
    ```js
    1 == '1'  // true
    '' == false // true
    null == undefined // true
    null == false  // false
    +0 == -0  // true
    NaN == NaN // false
    ```
    `==` 会先进行一次类型转换，然后才会按照 `===` 去比较
- `===`
    ```js
    1 === '1'  // false 
    null === undefined // false
    +0 === -0  // true
    NaN === NaN // false
    ```
    `===` 类型不同，直接返回`false`；类型相同再进行比较
- `Object.is()`
    ```js
    Object.is(1, '1')  // false
    Object.is(undefined, null)  // false
    Object.is(+0, -0)  // false
    Object.is(NaN, NaN) // true
    ```
    与`===`相等类似，唯一的不同就是对于`NaN` 和 `+0` `-0` 的处理

### 进制转换
- `Number.prototype.toString()` 将一个数字转化成某个进制的字符串，默认转为十进制
    ```js
    Number.prototype.toString.call(10, 2) // "1010"
    10..toString(2) // "1010"
    10.0.toString(2)  // "1010"
    ```
- `parseInt(string, radix)` 解析一个字符串并返回指定基数的十进制整数
    ```js
    parseInt('10', 2)  // 2
    parseInt('1010', 2)  // 10
    ```

### `NaN`(Not-A-Number)
- NaN 不等于任何值，包括自己
- 只能用`isNaN()`或`Number.isNaN()`来判断一个值是不是`NaN`
    ```js
    isNaN('hello world')   // true
    isNaN(NaN)    // true
    Number.isNaN('hello world') // false
    Number.isNaN(NaN)  //  true
    ```
- `isNaN()` 如果参数是`NaN`，或者将其强制转换为数字后是NaN，则返回`true`
- `Number.isNaN()` 只有当前参数是`NaN`，才返回`true`

### 取整
- `Math.floor()` 向下取整
- `Math.ceil()`  向上取整
- `Math.round()` 四舍五入
- `Math.trunc()` 数字的小数部分去掉，只保留整数部分
- `Number.prototype.toFixed()`
- `parseInt()`

|        | Math.floor() | Math.ceil() | Math.round() | Math.trunc() | toFixed(0) | parseInt() |
|  ----  | :----:       |     :----:  |    :----:    |    :----:    |    :----:  |     :----: |
| 3.1    |   3          |   4         |   3          |    3         |    3       |   3        |
| 3.7    |   3          |   4         |   4          |    3         |    4       |   3        |
| -3.1   |  -4          |   -3        |   -3         |    -3        |    -3      |   -3       |
| -3.7   |  -4          |   -3        |   -4         |    -3        |    -4      |   -3       |

### 精度损失问题
```js
0.1 + 0.2 === 0.3 // false
6.35.toFixed(1) === '6.3' // true
1e500 === Infinity // true
```
- 原因
    - JavaScript 中的常规数字以 64 位的格式 IEEE-754 存储，其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置，1 位用于符号
    - 如果一个数字太大，溢出 64 位存储，就会导致无穷大
    - 在二进制数字系统中，可以保证以 2 的整数次幂作为除数时能够正常工作
    - 0.1，0.2 这样的小数，实际上在二进制形式中是无限循环小数，IEEE-754 数字格式通过将数字舍入到最接近的可能数字来解决此问题
- 解决办法
    - 使用toFixed
    - 先乘再除(先转换成整数)
    ```js
    +(0.1 + 0.2).toFixed(2) === 0.3  // true
    (0.1 * 10 + 0.2 * 10) / 10 === 0.3 // true
    ```

### Number对象
- 静态属性
    - `Number.NaN` 表示非数值，指向NaN(Not-A-Number)
    - `Number.MIN_VALUE` 表示最小的正数
    - `Number.MAX_VALUE` 表示最大的正数
    - `Number.MIN_SAFE_INTEGER` 表示能够精确表示的最小整数
    - `Number.MAX_SAFE_INTEGER` 表示能够精确表示的最大整数
    - `Number.POSITIVE_INFINITY` 正的无限，指向Infinity
    - `Number.NEGATIVE_INFINITY` 负的无限，指向-Infinity

- 实例方法
    - `Number.prototype.toString()` 将一个数字转化成某个进制的字符串，默认转为十进制
    - `Number.prototype.toFixed()` 将一个数转为指定位数的小数，然后返回这个小数对应的字符串
    - `Number.prototype.toPrecision()` 将一个数转为指定位数的有效数字
    - `Number.prototype.toExponential()` 将一个数转为科学计数法形式
    - `Number.prototype.toLocaleString()` 接受一个地区码作为参数，返回一个字符串，表示当前数字在该地区的当地书写形式
