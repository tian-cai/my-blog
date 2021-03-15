> 二分查找法

### 思路
要求被搜索的数据结构是已排序的
1. 选择数组中间的值
2. 如果选中的值是待搜索的值，则直接返回其索引
3. 如果待搜索值比选中值小，则返回步骤1并在选中值左边的子数组中寻找
4. 如果待搜索值比选中值大，则返回步骤1并在选中值右边的子数组中寻找
5. 直到划分区间的长度为0，返回-1

### 具体实现
```js
function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1
    while(left <= right) {
        const midIndex = Math.floor((left + right) / 2)
        const midValue = array[midIndex]
        if (midValue === target) {
            return midIndex
        }
        if(midValue > target) {
            right = midIndex - 1 
        }
        if(midValue < target) {
            left = midIndex + 1
        }
    }
    return -1
}

const arr = [1,4,6,7,9,11,34,56,78]
console.log(binarySearch(arr, 78))   // 8
console.log(binarySearch(arr, -1))   // -1
console.log(binarySearch(arr, 4))    // 1

```

### 参考文章
- javascript数据结构与算法第三版