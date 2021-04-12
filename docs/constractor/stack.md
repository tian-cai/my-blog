### 基本概念
栈是一种遵循**后进先出**原则的有序集合。一端叫栈顶，一端叫栈底，新元素靠近栈顶，旧元素靠近栈底。<br>
栈是一种受限的数据结构， 体现在只允许新的内容从一个方向插入或删除。<br>
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

### 单调栈
单调栈要求栈中的元素是**单调递减**或者**单调递减**的。<br>
单调增还是单调减取决于出栈顺序。如果出栈的元素是单调增的，那就是单调递增栈，如果出栈的元素是单调减的，那就是单调递减栈。
例如[1,2,3,4] 就是一个单调递减栈，[3,2,1] 就是一个单调递增栈。
单调递减栈也被称为最大栈，因为栈顶元素始终是最大的；单调递增栈也被称为最小栈，因为栈顶元素始终是最小的。
适合**求解下一个大于 xxx**或者**下一个小于 xxx**这种题目。
### 栈的常见题目
大家在使用栈的时候，要始终牢记栈的特性**后进先出**，多多练习相关题目和各种题解，逐渐形成题感。
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
- [150. 逆波兰表达式求值](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

    该题目就是利用栈先进后出的特性来进行解决，遇到运算符，出栈两次进行运算，然后将结果入栈；遇到非运算符直接入栈，最后栈顶就是我们表达式的结果。
    ```js
    function evalRPN(tokens) {
        const stack = new Stack()
        const map = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b)
        }
        tokens.forEach(ele => {
            if (map.hasOwnProperty(ele)) {
                const first = stack.pop()
                const second = stack.pop()
                let result = map[ele](second, first)
                stack.push(result)
            } else {
                stack.push(Number(ele))
            }
        });
        return stack.pop()
    }
    ```

- [496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)

    该题目我们就可以巧用单调栈进行解决，降低时间复杂度，更多详解请看官方题解。
    ```js
    var nextGreaterElement = function(nums1, nums2) {
        const result = []
        const stack = []
        const map = new Map()
        for(let i = 0; i < nums2.length; i++) {
            while(stack.length && stack[stack.length - 1] < nums2[i]) {
                map.set(stack.pop(), nums2[i])   
            }
            stack.push(nums2[i])
        }
        stack.forEach((ele) => map.set(ele, -1))
        for(let i = 0; i < nums1.length; i++) {
            result[i] = map.get(nums1[i])
        }
        return result
    }
    ```

### 推荐题目(应该掌握的题目)
- 简单
    - [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
    - [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)
    - [496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)
- 中等
    - [150. 逆波兰表达式求值](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)
    - [739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)
    - [316. 去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters/)
- 困难
    - [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)
    - [84. 柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

### 更多文章
- javascript数据结构与算法第三版
- [leetcode-栈](https://leetcode-cn.com/tag/stack/)
- [力扣加加-单调栈](https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/monotone-stack)
