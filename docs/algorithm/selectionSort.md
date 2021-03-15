> 选择排序

### 基本思路
找到数据结构中的最小值并将其放在第一位，接着找到第二小的值将其放到第二位，以此类推。复杂度是O($n^2$)

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

function selectionSort(array, compareFn = defaultCompare) {
    const len = array.length
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (compareFn(array[minIndex], array[j]) === Compare.BIGGER_THAN) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            swap(array, i, minIndex)
        }
    }
    return array
}

```


### 参考文章
- javascript数据结构与算法第三版