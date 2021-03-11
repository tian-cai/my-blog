### 浅克隆
- 克隆数组`slice()`
    ```js
    const arr = [1, [2,3,4], { a : 1}]
    const copyArr = arr.slice()
    console.log(copyArr === arr)  // false
    console.log(copyArr[2] === arr[2])  // true
    console.log(copyArr[2].a)  // 1
    arr[2].a = 2
    console.log(copyArr[2].a)  // 2
    ```
    上述例子我们可以清晰看到`slice()`是一个对数组的浅克隆
- 克隆对象`Object.assign()`
    ```js
    const obj = {
        name: 'lisi',
        age: 28,
        friends: ['zhangsan', 'wangwu'],
        father: {
            name: 'liliu'
        }
    }
    const copyObj = Object.assign({}, obj)
    console.log(copyObj === obj)  // false
    console.log(copyObj.friends === obj.friends) // true
    copyObj.friends.push('wangmazi')
    console.log(obj.friends)  // ["zhangsan", "wangwu", "wangmazi"]
    copyObj.father.name = 'liqi'
    console.log(obj.father.name) // 'liqi'
    ```
    上述例子我们可以清晰看到`Object.assign()`是一个对对象的浅克隆
- 自制
    ```js
    //判断值的数据类型
    function getValueType(value) {
        var type = Object.prototype.toString.call(value)
        type = type.slice(8, -1)
        return type
    }
    function shallowClone(source) {
        const sourceType = getValueType(source)
        if (sourceType !== 'Object' &&  sourceType !== 'Array') {
            throw new TypeError('not object')
        }
        const targetObj = sourceType === 'Array' ? [] : {} // 判断复制的目标是数组还是对象
        for (let keys in source) { // 遍历目标
            if (source.hasOwnProperty(keys)) {
                targetObj[keys] = source[keys]
            }
        }
        return targetObj
    }
    ```
### 深克隆
- 利用`JSON`对象的`parse` 和 `stringify`
    - 示例说明
    ```js
    const arr = [1, [2,3,4], { a : 1}]
    const copyArr = JSON.parse(JSON.stringify(arr))
    console.log(copyArr === arr)  // false
    console.log(copyArr[2] === arr[2])  // false

    const obj = {
        name: 'lisi',
        age: 28,
        friends: ['zhangsan', 'wangwu'],
        father: {
            name: 'liliu'
        }
    }
    const copyObj = JSON.parse(JSON.stringify(obj))
    console.log(copyObj === obj)  // false
    console.log(copyObj.friends === obj.friends) // false
    ```
    - 缺陷
        - 存在循环引用时无法克隆
        ```js
        const obj = {}
        const o = {
            name: 'liliu',
            child: obj
        }
        obj.name = 'lisi'
        obj.father = o

        const copyObj = JSON.parse(JSON.stringify(obj))
        // Uncaught TypeError: Converting circular structure to JSON
        ```
        - 克隆会丢失对象属性（函数，Symbol，undefined会被忽略）
        ```js
        const o = {
            name: 'liliu',
            age: undefined,
            say: function() {
                console.log('I can say')
            },
            DNA: Symbol('DNA')
        }
        const copyObj = JSON.parse(JSON.stringify(obj))
        // copyObj只有name属性
        ```

- 递归

解决了JSON方法丢失对象属性的缺陷，对于循环依赖会栈溢出
```js
function deepClone(source) {
    const sourceType = getValueType(source)
    if (sourceType !== 'Object' &&  sourceType !== 'Array') {
        throw new TypeError('not object')
    }
    const targetObj = sourceType === 'Array' ? [] : {} // 判断复制的目标是数组还是对象
    for (let keys in source) { // 遍历目标
        if (source.hasOwnProperty(keys)) {
            const keyType = getValueType(source[keys])
            if (keyType  === 'Object' || keyType  === 'Array') {  // 是引用类型就递归
                targetObj[keys] = deepClone(source[keys])
            } else {
                targetObj[keys] = source[keys]
            }
        }
    }
    return targetObj
}

```
