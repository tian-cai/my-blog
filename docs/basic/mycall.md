### call
使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法，其实就是改变了this的指向。

### 示例
```js
function person(age, height) {
    console.log(this.name)
    console.log(age)
    console.log(height)
    return {
        name: this.name,
        age,
        height
    }
}

var name = 'zhangsan'
var obj = {
    name: 'lisi'
}
var p1 = person.call(null)
// p1 = {age: undefined, height: undefined, name: "zhangsan"}
var p2 = person.call(obj, 18, 180)
// p2 = {age: 18, height: 180, name: "lisi"}

```
### 模拟实现call
- es6版本
    使用Symbol避免属性重复，使用扩展运算符处理参数
    ```js
    Function.prototype.myCall = function(context) {
        if (typeof this !== 'function') {
            throw new TypeError('not funciton')
        }
        // 如果没有指定this值，则为window
        context = context || window
        // 获取调用call的函数，此时就是this，将它作为指定this值(context)的一个属性
        // 为了避免属性名重复，使用Symbol
        var uniqueKey = Symbol('fn')
        context[uniqueKey] = this
        // 获取参数列表(去掉第一个参数context，剩下的就是函数需要的参数)
        var args = [...arguments].slice(1)
        // 然后调用它，保存返回值
        const result = context[uniqueKey](...args)
        // 删除新加的属性
        delete context[uniqueKey]
        return result
    }
    ```
- es5版本
    主要不同的地方就是避免属性名重复和处理参数列表，其他地方一样
    ```js
    Function.prototype.myCall2 = function(context) {
        if (typeof this !== 'function') {
            throw new TypeError('not funciton')
        }
        // 如果没有指定this值，则为window
        context = context || window
        // 获取调用call的函数，此时就是this，将它作为指定this值(context)的一个属性
        var uniqueKey = createUniqueKey()
        while(context.hasOwnProperty(uniqueKey)) {
            uniqueKey = createUniqueKey()
        }
        context[uniqueKey] = this
        // 获取参数列表(去掉第一个参数context，剩下的就是函数需要的参数)
        var args = []
        for(var i = 1, len = arguments.length; i < len; i++) {
            args.push('arguments[' + i + ']')
        }
        // 然后调用它，保存返回值
        const result = eval('context[uniqueKey](' + args +')')
        // 删除新加的属性
        delete context[uniqueKey]
        return result
    }

    function createUniqueKey() {
        return Math.random() * 100 + '-' + Date.now()
    }
    ```
### apply
apply和call的作用是一样的，都是改变this的指向，只不过调用方式略有不同
apply接受两个参数，第一参数为指定的this值，第二个参数为数组
### 模拟实现apply
```js
Function.prototype.myApply = function(context, array) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    context = context || window
    var uniqueKey = Symbol('fn')
    context[uniqueKey] = this
    var args = array || []
    const result = context[uniqueKey](...args)
    delete context[uniqueKey]
    return result
}
```

### 参考文章
- [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
- [面试官问：能否模拟实现JS的call和apply方法](https://juejin.cn/post/6844903728147857415)
