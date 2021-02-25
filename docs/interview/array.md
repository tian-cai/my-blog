### es6数组新增方法
- `Array.from()` 用于将两类对象转为真正的数组：类似数组的对象和可遍历（iterable）的对象(set和map)
- `Array.of()` 用于将一组值，转换为数组
- 数组实例的`flat()` 用于将嵌套的数组“拉平”，变成一维的数组，该方法返回一个新数组，对原数据没有影响
- 数组实例的`keys()`,`values()`,`entries()` 用于遍历数组，使用`for of`
- 数组实例的`includes()` 返回一个布尔值，表示某个数组是否包含给定的值
- 数组实例的`fill()` fill方法使用给定值，填充一个数组
- 数组实例的`find()` 用于找出第一个符合条件的数组成员，如果没有符合条件的成员，则返回undefined
- 数组实例的`findIndex()` 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

### 常用方法
- 静态方法
    - `Array.isArray()` 返回一个布尔值，表示参数是否为数组
- 改变原数组
    - `push()` 向数组的末尾添加一个或更多元素
    - `pop()` 删除并返回数组的最后一个元素
    - `unshift()` 向数组的开头添加一个或更多元素
    - `shift()` 删除并返回数组的第一个元素
    - `reverse()` 颠倒数组中元素的顺序
    - `splice()` 删除原数组的一部分成员，并可以在删除的位置添加新的数组成员
    - `sort()` 对数组的元素进行排序，默认是按照字典顺序排序
- 不改变原数组
    - `concat()` 用于多个数组的合并，返回一个新数组
    - `slice()` 用于提取目标数组的一部分，返回一个新数组
    - `join()` 以指定参数作为分隔符，将所有数组成员连接为一个字符串返回，默认逗号分隔
    - `map()` 将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回
    - `forEach()` 对数组的所有成员依次执行参数函数，不返回值
    - `filter()` 用于过滤数组成员，满足条件的成员组成一个新数组返回
    - `every()` 所有成员的返回值都是true，整个every方法才返回true
    - `some()`  只要一个成员的返回值是true，则整个some方法的返回值就是true
    - `reduce()` 从左到右依次处理数组的每个成员，最终累计为一个值
    - `reduceRight()` 从右到左依次处理数组的每个成员，最终累计为一个值
    - `indexOf()` 返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1，不能搜索NaN
    - `lastIndexOf()` 返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1

### 数组去重
- for循环+indexOf
    ```js
    function unique(arr) {
        let uniqueArr = []
        const len = arr.length
        for (let i = 0; i < len; i++) {
            if (uniqueArr.indexOf(arr[i]) == -1) {
                uniqueArr.push(arr[i])
            }
        }
        return uniqueArr
    }
    const arr = [1,2,1,3,'1',2,3,4]
    const result = unique(arr)
    console.log(result) // [ 1, 2, 3, '1', 4 ]
    ```
- 排序后去重
    ```js
    function unique(arr) {
        let uniqueArr = []
        let sortArr = arr.concat().sort()
        let len = sortArr.length
        let prev
        for (let i = 0; i < len; i++) {
            if (!i || prev !== sortArr[i]) {
                uniqueArr.push(sortArr[i])
            }
            prev = sortArr[i]
        }
        return uniqueArr
    }
    const arr = [1,2,1,3,'1',2,3,4]
    const result = unique(arr)
    console.log(result) // [ 1, '1', 2, 3, 4 ]
    ```
- 哈希表
    ```js
    function unique(arr) {
        let uniqueArr = []
        let obj = {}
        const len = arr.length
        for (let i = 0; i < len; i++) {
            obj[typeof arr[i] + arr[i]] = arr[i]
        }
        for (let i in obj) {
            uniqueArr.push(obj[i])
        }
        return uniqueArr
    }
    const arr = [1, 2, 1, 3, '1', 2, 3, 4]
    const result = unique(arr)
    console.log(result) // [ 1, 2, 3, '1', 4 ]
    ```
- 利用set结构
    ```js
    function unique(arr) {
        return Array.from(new Set(arr))
    }
    const arr = [1, 2, 1, 3, '1', 2, 3, 4]
    const result = unique(arr)
    console.log(result) // [ 1, 2, 3, '1', 4 ]
    ```

### 数组扁平化
- 遍历递归
    ```js
    function flatten(array) {
        const len = array.length
        let result = []
        for (let i = 0; i < len; i++) {
            if(Array.isArray(array[i])) {
                result = result.concat(flatten(array[i]))
            }else {
                result.push(array[i])
            } 
        }
        return result
    }
    const arr = [1, [2,[3,4]],5,6]
    const result = flatten(arr)
    console.log(result) // [ 1, 2, 3, 4, 5, 6 ]
    ```
- 数组的flat方法
    ```js
    function flatten(array) {
        return array.flat(Infinity)
    }
    const arr = [1, [2,[3,4]],5,6]
    const result = flatten(arr)
    console.log(result) // [ 1, 2, 3, 4, 5, 6 ]
    ```
    flat方法接受一个参数表示想要拉平的层数，默认为1
- 扩展运算符
    ```js
    function flatten(array) {
        while (array.some(item => Array.isArray(item))) {
            array = [].concat(...array);
        }
        return array
    }
    const arr = [1, [2,[3,4]],5,6]
    const result = flatten(arr)
    console.log(result) // [ 1, 2, 3, 4, 5, 6 ]
    ```

### reduce
- demo
    ```js
    const res = [1,2,3,4,5].reduce(function (a, b, i) {
        return a + b;
    })
    console.log(res) // 15
    const res1 = [1,2,3,4,5].reduce(function (a, b, i) {
        return a + b;
    }, 10);
    console.log(res1) // 25
    ```
- 模拟实现
    ```js
    Array.prototype.reduce = function(callback, total) {
        const array = this
        if (array.length === 0 && arguments.length < 2) {
            throw new Error('TypeError: Reduce of empty array with no initial value')
        }
        let startIndex
        let result
        if (arguments.length >= 2) {
            startIndex = 0
            result = total
        }else {
            startIndex = 1
            result = array[0]
        }
        for (let i = startIndex; i < array.length; i++) {
            result = callback(result, array[i], i, array)
        }
        return result
    }
    ```