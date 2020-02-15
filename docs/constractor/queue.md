### 基本概念
队列是一种遵循**先进先出**原则的一组有序的项。一端为队头，一端为队尾，队列在队尾添加新元素，并在队头移除元素。

生活中，最常见的例子就是排队。

### 队列的一些方法
- `enqueue(item)`: &nbsp;添加元素到队尾，称为入队。

- `dequeue()`: &nbsp;移除队列中第一个元素，同时返回被移除的元素，称为出队。

- `peek()`: &nbsp;返回队列中第一个元素，队列不做任何修改。

- `isEmpty()`: &nbsp;队列是否为空，没有任何元素返回true，否则返回false。

- `size()`: &nbsp;返回队列包含的元素个数。

- `clear()`: &nbsp;移除队列里的所有元素。

### 用js实现一个队列

```js
class Queue {
    constructor() {
        this._items = []
    }

    enqueue(item) {
        this._items.push(item)
    }

    dequeue() {
        return this._items.shift()
    }

    peek() {
        if (this._items.length) {
            return this._items[0]
        }
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

### 参考文章
- javascript数据结构与算法第三版
