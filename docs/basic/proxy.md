### Object.defineProperty
- 简介<br>
`Object.defineProperty()`方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象。

- 用法<br>
`Object.defineProperty(object, propertyName, attributesObject)`<br>
接受三个参数：
    - object：属性所在的对象
    - propertyName：字符串，表示属性名
    - attributesObject：属性描述对象

- 属性描述对象<br>
属性描述符有两种主要形式：数据描述符和存取描述符，一个描述符只能是这两者其中之一。
    - 数据描述符
    ```js
    {
        configurable: boolean  // 当该属性为true时，该属性的描述符才能够被改变，默认false
        enumerable: boolean    // 当该属性为true时，该属性才会出现在对象的枚举属性中，默认false
        value: any             // 该属性对应的值，可以是任何有效的JavaScript值（数值，对象，函数等），默认undefined
        writable: boolean      // 当该属性为true时，该属性的值才能被改变，默认false
    }
    ```
    - 存取描述符
    ```js
    {
        configurable: boolean
        enumerable: boolean
        get: function    // 属性的getter函数，当访问该属性时，会调用此函数。
        set: function    // 属性的setter函数，当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值）
    }
    ```
- 一个例子
```js
const  person = {
    name: 'lisi',
    age: 24,
    say: function() {
        console.log(`hello, i am ${this.name}`)
    },
    body: {
        height: 170,
        weight: 60
    }
}
function observe(obj) {
    Object.keys(obj).map(key => {
        reactive(obj, key, obj[key])
    })
}
function reactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        set(newValue) {
            console.log(`set ${key} = ${newValue}`)
            value = newValue
        },
        get() {
            console.log(`get ${key} value`)
            return value
        }
    })
}
observe(person)
person.age   // get age value
person.age = 48 // set age = 48
person.body.height = 180  // 没有触发set
person.childCount = 5    // 没有触发set
person.childCount  // 没有触发get
const skill = ['打篮球', '踢足球', '羽毛球']
observe(skill)
skill[0]   // get 0 value
skill[0] = '乒乓球' // set 0 = '乒乓球'
skill.push('乒乓球')  // 没有触发set
```
- 特点
    - 是对对象属性的劫持。
    - 无法检测到新增/删除属性变化。
    - 只能检测get和set。
    - 对于嵌套的对象无法检测，除非我们深度遍历。
    - 无法检测到数组的某些变化，因为对于数组来说，劫持的属性就是索引下标，如果我们操作未劫持的下标，就无法检测到变化。
### Proxy
- 简介<br>
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义。
- 用法<br>
`const p = new Proxy(target, handler)`<br>
接受两个参数：
    - target， 要使用 Proxy 包装的目标对象。
    - handler 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
- 例子
```js
const  person = {
    name: 'lisi',
    age: 24,
    say: function() {
        console.log(`hello, i am ${this.name}`)
    },
    body: {
        height: 170,
        weight: 60
    }
}

const handler = {
    get: function(target, property, receiver) {
        console.log(`get ${property}`)
        return Reflect.get(target, property, receiver)
    },
    set: function(target, property, value, receiver) {
        console.log(`set ${property} = ${value}`)
        return Reflect.set(target, property, value, receiver)
    }
}

const p = new Proxy(person, handler)
p.age   // get age
p.age = 48 // set age = 48
p.body.height = 180  // 没有触发set
p.childCount = 5    // set childCount = 5
p.childCount  // get childCount
const  skill = ['打篮球', '踢足球', '羽毛球']
const s = new Proxy(skill, handler)
s[0]   // get 0 value
s[0] = '乒乓球' // set 0 = '乒乓球'
s.push('乒乓球')  // get push-->get length--> set 3 = 乒乓球--> set length = 4
s.length    // get length
```

- 特点
    - 是对对象的劫持。
    - 对于嵌套的对象无法检测，除非我们深度遍历。
    - 可以检测到新增/删除属性变化。
    - 可以检测到13种操作，比Object.defineProperty强大很多。
    - 可以检测到数组的所有变化。

### Reflect
- 简介
Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers的方法相同。
- 特点
    - Reflect的所有属性和方法都是静态的。
    - 并非一个构造函数，所以不能通过new运算符对其进行调用。

### 参考文章
- [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [Object.defineProperty()](https://developer.mozilla.org/zh-cn/docs/web/javascript/reference/global_objects/object/defineproperty)