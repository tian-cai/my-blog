> js中的继承
### es5继承
构造函数 + 原型继承
```js
function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype.toString = function() {
    console.log(`I am ${this.name}`)
}
Parent.say = function() {
    console.log(`I can say`)
}

function Child(name, age) {
    Parent.call(this, name, age)
}

// 子类继承父类实例方法
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
// 子类继承父类静态属性和静态方法
Object.setPrototypeOf(Child, Parent) 

const p = new Parent('lisi', 30)
p.toString()  // I am lisi
const c = new Child('lisan', 10)
c.toString()  // I am lisan
Parent.say()  // I can say
Child.say()   // I can say

```

### class继承
```js
class Parent {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toString() {
        console.log(`I am ${this.name}`)
    }

    static say() {
        console.log(`I can say`)
    }

}

class Child extends Parent {
    constructor(name, age) {
        super(name, age)
    }
}
const p = new Parent('lisi', 30)
p.toString()  // I am lisi
const c = new Child('lisan', 10)
c.toString()  // I am lisan
Parent.say()  // I can say
Child.say()   // I can say
```
### class继承的本质
我们可以把上述代码用 `Babel` 转换一下
```js
"use strict";

function _inheritsLoose(subClass, superClass) { 
    subClass.prototype = Object.create(superClass.prototype); 
    subClass.prototype.constructor = subClass; 
    _setPrototypeOf(subClass, superClass); 
}

function _setPrototypeOf(o, p) { 
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { 
        o.__proto__ = p; 
        return o; 
    }; 
    return _setPrototypeOf(o, p); 
}

var Parent = /*#__PURE__*/function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }

    var _proto = Parent.prototype;

    _proto.toString = function toString() {
        console.log("I am " + this.name);
    };

    Parent.say = function say() {
        console.log("I can say");
    };

    return Parent;
}();

var Child = /*#__PURE__*/function (_Parent) {
    _inheritsLoose(Child, _Parent);

    function Child(name, age) {
        return _Parent.call(this, name, age) || this;
    }

    return Child;
}(Parent);
```
从上述代码中我们可以发现class的继承和es5的继承是一摸一样的。
在 `Child` 内部调用 `Parent` 实现构造函数继承，`_inheritsLoose` 实现原型继承。



### 参考文章
- [Class 的基本语法](https://es6.ruanyifeng.com/#docs/class)
- [Class 的继承](https://es6.ruanyifeng.com/#docs/class-extends)