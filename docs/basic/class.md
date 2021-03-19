> class是如何实现的

### class的内部实现
我们可以在 `class` 中定义实例属性，实例方法，静态属性，静态方法。
```js
class Parent {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
	  height = 170
    toString() {
        console.log(`I am ${this.name}`)
    }
  
  	static eyesCount = 2
    static say() {
        console.log(`I can say`)
    }
}
```
上述代码转换成es5之后，如下所示
```js
"use strict";

var Parent = /*#__PURE__*/function () {
    function Parent(name, age) {
      this.height = 170;
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

Parent.eyesCount = 2;
```
我们不难发现class其实就是一个语法糖，转换之后和我们原来es5的写法一样。
实例属性定义在构造函数中，实例方法定义在原型上，静态属性和静态方法定义在函数上。