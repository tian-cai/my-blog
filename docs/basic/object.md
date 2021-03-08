### 对象的遍历
- `for in`
    ```js
    const person = {
        name: 'lisi'
    }
    const man = Object.create(person)
    man.sex = 'man'
    for (const key in man) {
        console.log(key)  // sex name 
    }

    for (const key in man) {
        if (Object.hasOwnProperty.call(man, key)) {
            console.log(key)  // sex
        }
    }
    ```
    `for in`循环遍历对象自身的和继承的可枚举属性，所以我们使用`for in`循环时要使用`hasOwnProperty`方法对属性进行判断
- `Object.keys()`和`Object.values()`和`Object.entries()`
    ```js
    for (var key of Object.keys(man)) {
        console.log(key) // sex
    }
    for (var key of Object.values(man)) {
        console.log(key) // man
    }
    for (var [key, value] of Object.entries(man)) {
        console.log(key, value) // sex man
    }
    ```

### 常用方法
- 静态方法
    - `Object.is()` 比较两个值是否严格相等
    - `Object.assign()` 用于对象的合并，将源对象自身的所有可枚举属性，复制到目标对象。第一个参数是目标对象，后面的参数都是源对象
    - 遍历相关
        - `Object.getOwnPropertyNames()` 返回一个数组，包含了该对象自身的所有属性名
        - `Object.keys()` 返回一个数组，成员是参数对象自身的所有可遍历属性的键名
        - `Object.values()` 返回一个数组，成员是参数对象自身的所有可遍历属性的键值
        - `Object.entries()` 返回一个数组，成员是参数对象自身的所有可遍历属性的键值对数组
    - 原型相关
        - `Object.getPrototypeOf()` 用于读取一个对象的原型对象
        - `Object.setPrototypeOf()` 用来设置一个对象的`prototype`对象，返回参数对象本身
        - `Object.create()` 以指定对象为原型，创建并返回一个新的对象
    - 对象状态相关
        - `Object.preventExtensions()` 使得一个对象无法再添加新的属性
        - `Object.isExtensible()` 检查一个对象是否使用了`Object.preventExtensions`方法
        - `Object.seal()` 使得一个对象既无法添加新属性，也无法删除旧属性
        - `Object.isSealed()` 检查一个对象是否使用了`Object.seal`方法
        - `Object.freeze()` 使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值
        - `Object.isFrozen()` 用于检查一个对象是否使用了`Object.freeze`方法
    - 对象属性相关
        - `Object.defineProperty()` 通过描述对象，定义某个属性
        - `Object.defineProperties()` 通过描述对象，定义多个属性
        - `Object.getOwnPropertyDescriptor()` 获取某个属性的描述对象
- 实例方法
    - `Object.prototype.toString()` 返回当前对象对应的字符串形式，主要用于类型判断
    - `Object.prototype.toLocaleString()` 返回当前对象对应的本地字符串形式
    - `Object.prototype.valueOf()` 返回当前对象对应的值，主要用于类型转换
    - `Object.prototype.hasOwnProperty()` 判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
    - `Object.prototype.isPrototypeOf()` 判断当前对象是否为另一个对象的原型