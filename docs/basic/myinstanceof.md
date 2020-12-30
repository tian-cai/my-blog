### instanceof 运算符
- 例子
    ```js
    function Dog (name) {
        this.name = name
    }
    const dog = new Dog('wang')
    console.log(dog instanceof Dog)  // true
    console.log(dog instanceof Object)  // true
    ```
- 特点
    - 返回一个布尔值，表示对象是否为某个构造函数的实例。
    - 左边是实例对象，右边是构造函数。它会检查右边构造函数的原型对象，是否在左边对象的原型链上。

### 模拟实现
```js
function myInstanceOf(left, right) {
    let leftValue = left.__proto__
    let rightValue = right.prototype
    while (true) {
        if (leftValue === null) {
            return false
        }
        if (leftValue === rightValue) {
            return true
        }
        leftValue = leftValue.__proto__
    }
}
```
### 参考文章
- [阮一峰教程](https://javascript.ruanyifeng.com/oop/prototype.html#toc5)
- [20道JS原理题助你面试一臂之力](https://juejin.cn/post/6844903891591495693#heading-4)