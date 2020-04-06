### 基本思路
将原始数组切分为较小的数组，直至每个小数组的长度为1，接着将小数组归并(排序发生在归并过程中)成大数组，直至最后只有一个大数组。算法时间复杂度是O($n\log(n)$)

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

function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) {
        const len = array.length
        const midIndex = Math.floor(len / 2)
        const leftArr = mergeSort(array.slice(0, midIndex), compareFn)
        const rightArr = mergeSort(array.slice(midIndex, len), compareFn)
        array = merge(leftArr, rightArr, compareFn)
    }
    return array
}

function merge(left, right, compareFn = defaultCompare) {
    const result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        const value = compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
        result.push(value)
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

```


### 参考文章
- javascript数据结构与算法第三版