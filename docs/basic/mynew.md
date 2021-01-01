### 用法示例
```js
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function() {
    console.log('I am ' + this.name)
}

function Person1(name, age) {
    this.name = name
    this.age = age
    return {
        height: 18
    }
}

function Person2(name, age) {
    this.name = name
    this.age = age
    return name
}

var p1 = new Person('lisi', 20) // {name: "lisi", age: 20}
p1.say()
var p2 = new Person1('lisi', 20) // {height: 18}
var p3 = new Person2('lisi', 20) // {name: "lisi", age: 20}
```

### 特点
- 就是执行构造函数，返回一个实例对象。
- 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

### 原理
使用new命令时，它后面的函数依次执行以下步骤
1. 创建一个空对象，作为将要返回的对象实例。
2. 将这个空对象的原型，指向构造函数的prototype属性。
3. 将这个空对象赋值给函数内部的this关键字。
4. 开始执行构造函数内部的代码。

### 模拟实现
```js
function myNew() {
    // 将 arguments 对象转为数组
    var args = [...arguments];
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
}

```
### 判断函数属否被new调用
- new.target
```js
// 函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined。
function f() {
  console.log(new.target === f);
}
f() // false
new f() // true
```
- instanceof
```js
function f() {
  console.log(this instanceof f);
}
f() // false
new f() // true
```

### 参考文章
- [构造函数与 new 命令](https://javascript.ruanyifeng.com/oop/basic.html)