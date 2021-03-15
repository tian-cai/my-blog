> 快速排序

### 简介
快排的性能在所有排序算法里面是最好的，数据规模越大快速排序的性能越优。

### 两种具体实现
- 阮一峰老师的快排js实现
    - 思路
        1. 从数组中选择一个值作为主元，也就是数组中间的那个值
        2. 准备两个数组容器，遍历数组，逐个与主元比对，较小的放左边容器，较大的放右边容器
        3. 递归处理两个容器的元素，并将处理后的数据与主元按大小合并成一个数组，返回
    ```js
    function quickSort(array) {
        if(array.length <= 1) return array
        const pivotIndex = Math.floor(array.length / 2)
        const pivot = array[pivotIndex]
        array.splice(pivotIndex, 1)
        const left = []
        const right = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] <= pivot) {
                left.push(array[i])
            } else {
                right.push(array[i])
            }
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }

    const array = [15,6,23,34,5,0,89,34,3]
    const result = quickSort(array)
    console.log(result)  // [ 0,  3,  5,  6, 15, 23, 34, 34, 89]
    ```

- 其他实现
    - 思路
        1. 从数组中选择一个值作为主元，也就是数组中间的那个值
        2. 创建两个指针，左边指向数组第一个值，右边指向数组最后一个值。移动左指针直到找到一个比主元大的值，移动右指针直到找到一个比主元小的值，然后交换他们，重复这个过程，直到左指针超过右指针。这个过程称为划分，划分过后比主元值小的都在他的左边，比主元值大的在他的右边
        3. 接着，对划分后的两个数组重复之前的步骤，直至数组排序完成
    ```js
    function quickSort(array) {
        quick(array, 0, array.length - 1)
    }

    function quick(array, left, right) {
        if(array.length <= 1) return array
        index = divide(array, left, right)
        if(left < index -1) {
            quick(array, left, index - 1)
        }
        if(right > index) {
            quick(array, index, right)
        }
    }

    function divide(array, left, right) {
        const mid = Math.floor((left + right) / 2)
        const pivot = array[mid]
        while(left <= right) {
            while(array[left] < pivot) {
                left++
            }
            while(array[right] > pivot) {
                right--
            }
            if(left <= right) {
                swap(array, left,right)
                left++
                right--
            }
        }
        return left
    }

    function swap(array, i, j) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    const array = [15,6,23,34,5,0,89,34,3]
    quickSort(array)
    console.log(array)   // [ 0,  3,  5,  6, 15, 23, 34, 34, 89]
    ```


### 参考文章
- javascript数据结构与算法第三版