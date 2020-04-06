### 基本思路
把一个新元素插入到一个已经排好序的数组中形成一个新的已排好序的数组，就跟打扑克牌是一个道理。
我们左手拿的扑克牌是已排好序的，右手每次摸到一张新牌，我们都会在左手的牌中给它找到合适的位置并插入。
算法时间复杂度是O($n^2$)

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

function insertSort(array, compareFn = defaultCompare) {
    const len = array.length
    for (let i = 1; i < len; i++) {
        let j = i
        const temp = array[i]
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array
}

```


### 参考文章
- javascript数据结构与算法第三版