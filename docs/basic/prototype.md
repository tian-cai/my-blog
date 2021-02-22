### prototype 与 __proto__
- prototype 是函数对象才有的属性，指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型
- __proto__ 是所有对象拥有的属性，指向对象的原型
- 对象的 __proto__ 属性等于构造函数的prototype属性
- __proto__ 来自于 Object.prototype，可以理解成Object.getPrototypeOf()


### 原型链
- 对象的原型也是一个对象，也拥有自己的原型，形成原型链，原型链顶层是Object.prototype
- 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
### 代码示例
```js
function Person(name, age) {
    this.name = name
    this.age = age
}
const person = new Person('lisi', 20)
console.log(person.__proto__ === Person.prototype)  // true
console.log(person.__proto__.__proto__ === Object.prototype) // true
// person的原型链
// person--> Person.prototype --> Object.prototype
console.log(Person.__proto__ === Function.prototype)
console.log(Person.__proto__.__proto__ === Object.prototype)
// Person的原型链
// Person ---> Function.prototype --> Object.prototype
```

### 参考文章
- [深入理解 JavaScript 原型](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)
- [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)