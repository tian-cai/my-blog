### 基本思路
比较所有相邻的两个项，如果第一个比第二个大，则交换他们的位置。元素项向上移动至正确的顺序，
就好像气泡升至表面一样，因此叫冒泡排序。复杂度是O($n^2$)

### 具体实现
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

function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

function bubbleSort(array, compareFn = defaultCompare) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

```


### 参考文章
- javascript数据结构与算法第三版