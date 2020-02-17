### 二叉堆的基本性质
- 它是一棵完全二叉树，即除了最后一层的叶节点外，其他每层都有左侧和右侧子节点；最后一层的叶节点尽可能都是左侧叶子节点。

- 二叉堆不是最小堆就是最大堆。

### 最小堆的性质
所有的节点都小于等于它的子节点，即根结点是最小的，可以快速导出树的最小值。

### 二叉树的表示方式
- 使用指针

- 使用数组，通过索引值检索父节点，左侧和右侧子节点的值。

我们最小堆使用数组来表示，这样我们可以根据索引来检索它的父节点与子节点。

对于给定位置index的节点：

它的左侧子节点位置为：`2 * index + 1`

它的右侧子节点位置为：`2 * index + 2`

它的父节点位置为：`Math.floor((index - 1) / 2)`


### 最小堆的主要操作
- `insert(value)`: &nbsp;向堆中插入一个新值，如果插入成功，返回 true，否则返回 false。

- `extract()`: &nbsp;移除最小值，并返回这个值。

- `findMinimum()`: &nbsp;返回最小值，但是不会移除。

### js实现最小堆
- 代码实现
```js
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUAL: 0
}

function defaultCompare(a, b) {
    if (a === b) {
        return 0
    }
    return a < b ? -1 : 1
}

class MinHeap {

    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }

    getLeftIndex(index) {
        return 2 * index + 1
    }

    getRightIndex(index) {
        return 2 * index + 2
    }

    getParentIndex(index) {
        if (index === 0) {
            return undefined
        }
        return Math.floor((index - 1) / 2)
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.heap.length === 0
    }

    clear() {
        this.heap = []
    }


    // 返回最小值，但是不会移除
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0]
    }

    // 向堆中插入一个新值
    insert(value) {
        if (value !== null && value !== undefined) {
            this.heap.push(value)
            this.siftUp(this.heap.length - 1) // 上移，保证堆的特性
            return true
        }
        return false
    }

    // 上移操作
    siftUp(index) {
        let currentIndex = index
        let parentIndex = this.getParentIndex(index)
        while (currentIndex > 0 && this.compareFn(this.heap[parentIndex], this.heap[currentIndex]) === Compare.BIGGER_THAN) {
            this.swap(this.heap, parentIndex, currentIndex)
            currentIndex = parentIndex
            parentIndex = this.getParentIndex(currentIndex)
        }
    }

    // 交换数组的两个元素
    swap(array, a, b) {
        const temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }

    // 移除最小值，并返回这个值
    extract() {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.size() === 1) {
            return this.heap.shift()
        }
        const removedValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.siftDown(0)  // 下沉，保证堆的特性
        return removedValue
    }

    // 下沉操作
    siftDown(index) {
        let currentIndex = index
        const left = this.getLeftIndex(currentIndex)
        const right = this.getRightIndex(currentIndex)
        const size = this.size()
        if (left < size && this.compareFn(this.heap[currentIndex], this.heap[left]) === Compare.BIGGER_THAN) {
            currentIndex = left
        }
        if (right < size && this.compareFn(this.heap[currentIndex], this.heap[right]) === Compare.BIGGER_THAN) {
            currentIndex = right
        }
        if (currentIndex !== index) {
            this.swap(this.heap, currentIndex, index)
            this.siftDown(currentIndex)
        }
    }
}

```

- 注意点

为了保证最小堆的特性（所有的节点都小于等于它的子节点），我们的堆有一个**上移**方法，一个**下沉**方法。

每次插入新值的时候，我们都是首先在末尾添加，然后进行上移，找到新值的正确位置。

每次移除最小值的时候，我们先取出堆顶的值，然后将末尾元素pop，放在堆顶，进行下沉，找到末尾元素的正确位置，最后返回我们之前取出的堆顶值。


### 参考文章
- javascript数据结构与算法第三版