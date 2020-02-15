### 基本概念
双端队列是一种允许我们同时从**队头和队尾添加和移除元素的特殊队列**，是把**队列和栈**相结合的一种数据结构。生活中的例子还是排队，在队尾的人可以随时离开，有的人需要到窗口询问信息，可以去队伍头部。

### 双端队列的一些方法
- `addFront(item)`: &nbsp;在双端队列队头添加新的元素。

- `addBack(item)`: &nbsp;在双端队列队尾添加新的元素。

- `removeFront()`: &nbsp;在双端队列队头移除第一个元素，同时返回被移除的元素。

- `removeBack()`: &nbsp;在双端队列队尾移除第一个元素，同时返回被移除的元素。

- `peekFront()`: &nbsp;返回双端队列队头第一个元素，队列不做任何修改。

- `peekBack()`: &nbsp;返回双端队列队尾第一个元素，队列不做任何修改。

- `isEmpty()`: &nbsp;队列是否为空，没有任何元素返回true，否则返回false。

- `size()`: &nbsp;返回队列包含的元素个数。

- `clear()`: &nbsp;移除队列里的所有元素。

### 用js实现一个双端队列

```js
class Deque {

    constructor() {
        this._items = []
    }

    addFront(item) {
        this._items.unshift(item)
    }

    addBack(item) {
        this._items.push(item)
    }

    removeFront() {
        return this._items.shift()
    }

    removeBack() {
        return this._items.pop()
    }

    peekFront() {
        if (this._items.length) {
            return this._items[0]
        }
        return undefined
    }

    peekBack() {
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

### 双端队列的应用
- 回文检查器

    回文就是正反都能读通的单词，词组或一系列字符的序列，例如madam。
    要检查一个字符串是否为回文，我们就可以使用双端队列。当然你也可以直接将字符串反向排列并与原字符串进行比较，相同就是回文，反之不是。
    ```js
    function palindromeCheck(str) {
        if (typeof str !== 'string') {
            return false
        }
        const deque = new Deque()
        const lowStr = str.toLowerCase().split(' ').join('')
        for (let i = 0; i < lowStr.length; i++) {
            deque.addBack(lowStr.charAt(i)) 
        }
        let isPalindrome = true
        while(deque.size() > 1 && isPalindrome) {
            const firstChar = deque.removeFront()
            const lastChar = deque.removeBack()
            if (firstChar !== lastChar) {  // 首尾不同不是回文
                isPalindrome = false
            }
        }
        return isPalindrome
    }
    ```

### 参考文章
- javascript数据结构与算法第三版
