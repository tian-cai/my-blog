### 基本概念
栈是一种遵循**后进先出**原则的有序集合。一端叫栈顶，一端叫栈底，新元素靠近栈顶，旧元素靠近栈底。

生活中我们可以发现很多栈的例子，例如一摞书或者叠放的盘子。

### 栈的一些方法
- `push(item)`: &nbsp;添加元素到栈顶，称为入栈。

- `pop()`: &nbsp;移除栈顶元素，同时返回被移除的元素，称为出栈。

- `peek()`: &nbsp;返回栈顶元素，不对栈做任何修改。

- `isEmpty()`: &nbsp;栈是否为空，没有任何元素返回true，否则返回false。

- `clear()`: &nbsp;移除栈里的所有元素。

- `size()`: &nbsp;返回栈里元素个数。

### 用js实现一个栈

```js
class Stack {
    constructor() {
        this._items = []
    }

    push(item) {
        this._items.push(item)
    }

    pop() {
        return this._items.pop()
    }

    peek() {
        if (this._items.length) {
            return this._items[this._items.length - 1]
        }
        return undefined
    }

    isEmpty() {
        return this._items.length === 0
    }

    size() {
        return this._items.length
    }

    clear() {
        this._items = []
    }
}
```

### 栈的应用
- 进制转换

    十进制整数转换二进制：除2取余，直到商为0为止，将得到的余数反向排列输出即可；

    同理，十进制整数转换R进制：除R取余，直到商为0为止，将得到的余数反向排列输出即可；

    ```js
    function decimalBaseConvert(decimalNumber, base) {
        if (typeof decimalNumber !== "number" ||  typeof base !== "number") {
            throw new Error('decimalNumber && base should be number')
        }
        const remStack = new Stack()
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let baseStr = ''
        let rem
        let number = decimalNumber
        if (base < 2 || base > 36) {
            throw new Error('base should >=2 && <=36')
        }
        while (number !== 0) {
            rem = number % base
            remStack.push(rem)
            number = Math.floor(number / base)
        }
        while (!remStack.isEmpty()) {
            baseStr += digits[remStack.pop()]
        }
        return baseStr
    }

    ```

### 参考文章
- javascript数据结构与算法第三版
