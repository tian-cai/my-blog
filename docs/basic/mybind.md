### bind
bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

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
    name: 'lisi',
}
var b1 = person.bind(null)
var b2 = person.bind(obj, 18)
var b3 = person.bind(obj, 20)
var p1 = b1() // p1 = { age: undefined, height: undefined, name: "zhangsan" }
var p2 = b2(180)  // p2 = { age: 18, height: 180, name: "lisi" }
var p3 = new b3(190)  // p3 = { age: 20, height: 190, name: undefined }
```
### 特点
通过以上示例，我们可以看出bind函数的一些特点
- 返回一个函数
- 使用new运算符的时候，绑定的 this 会失效，但传入参数依然生效
- 返回的函数依然可以传入参数
### 模拟实现bind
```js
Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    context = context || window
    // 获取调用bind的函数，此时就是this
    var that = this
    // 获取在调用bind时传入的参数
    var args = [...arguments].slice(1)
    return function F() {
        // 拼接参数，此时的arguments代表调用bind返回函数时传入的参数
        var allArgs = args.concat([...arguments])
        if (this instanceof F) {
            // 表示使用了new，则忽略绑定的this值
            return new that(...allArgs)
        } else {
            return that.apply(context, allArgs) 
        }
    }
}
```


### 参考文章
- [JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
- [20道JS原理题助你面试一臂之力](https://juejin.cn/post/6844903891591495693)