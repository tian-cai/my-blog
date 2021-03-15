### 关于Set
ES6 提供了新的数据结构 `Set`。它类似于数组，但是成员的值都是唯一的，没有重复的值。
- 构造函数<br>
`Set` 本身是一个构造函数，用来生成 `Set` 数据结构。
`Set` 函数可以接受一个数组（或者具有 `iterable` 接口的其他数据结构）作为参数，用来初始化。

```js
const set = new Set([1, 2, 3, 4, 4, 5, "5", NaN, NaN]);
let arr = [...set]
console.log(arr)    //  [ 1, 2, 3, 4, 5, '5', NaN ]
set.add(9)
for (let item of set.keys()) {
    console.log(item);    //1, 2, 3, 4, 5, '5', NaN, 9
}
for (let item of set.values()) {
    console.log(item);
}
for (let item of set.entries()) {
    console.log(item);   //[1,1] [2,2]...[NaN,NaN] [9,9]  键名=键值  item为数组
}
```
- 方法与属性
  - `add(value)`：添加某个值，返回 `Set` 结构本身。
  - `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
  - `has(value)`：返回一个布尔值，表示该值是否为Set的成员。
  - `clear()`：清除所有成员，没有返回值。
  - `size`：返回Set实例的成员总数。
  - `constructor`：构造函数，默认就是Set函数。
  - `keys()`：返回键名的遍历器。
  - `values()`：返回键值的遍历器。
  - `entries()`：返回键值对的遍历器。
  - `forEach()`：使用回调函数遍历每个成员。参数与数组一致。
- 注意点<br>
`Set` 内部判断两个值是否不同，类似于严格相等运算符（`===`），主要的区别是 `NaN` 等于自身。<br>
由于 `Set` 结构没有键名，只有键值，所以 `keys` 方法和 `values`方法的行为完全一致。
### 关于`WeakSet`
`WeakSet` 结构与 `Set` 类似，也是不重复的值的集合。但是，它与 `Set` 有两个区别。
  1. `WeakSet` 的成员只能是对象，而不能是其他类型的值。
  2. `WeakSet` 中的对象都是弱引用，即垃圾回收机制不考虑 `WeakSet` 对该对象的引用。
- 构造函数<br>
作为构造函数，`WeakSet` 可以接受一个数组或类似数组的对象作为参数。
- 方法<br>
`add(value)`：向 `WeakSet` 实例添加一个新成员。<br>
`delete(value)`：清除 `WeakSet` 实例的指定成员。<br>
`has(value)`：返回一个布尔值，表示某个值是否在 
- 注意点<br>
`WeakSet` 不能遍历，`WeakSet` 的一个用处，是储存 `DOM` 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
### 关于Map
ES6 提供了 `Map` 数据结构。它类似于对象，也是键值对的集合，
但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
也就是说，`Object` 结构提供了“字符串—值”的对应，`Map` 结构提供了“值—值”的对应。
- 构造函数<br>
任何具有 `Iterator` 接口、且每个成员都是一个双元素的数组的数据结构都可以当作 `Map` 构造函数的参数。
```js
const m = new Map()
m.set(1, 1)
m.set("1", "1")
m.set(NaN, 123)
m.set(NaN, 1234)
console.log(m)    //  Map { 1 => 1, '1' => '1', NaN => 1234 }
m.delete(1)
console.log(m)    //  Map { '1' => '1', NaN => 1234 }
console.log(m.size)  //2
for (let key of m.keys()) {
  console.log(key)    //1  NaN
}
for (let value of m.values()) {
  console.log(value)   //1 1234
}
for (let item of m.entries()) {
  console.log(item[0], item[1]) // 1 1 NaN 1234
}
```
- 方法与属性
  - `set(key, value)` 设置键名 `key` 对应的键值为 `value`，然后返回整个 `Map` 结构。
  - `get(key)` 读取 `key` 对应的键值，如果找不到 `key`，返回 `undefined`。
  - `has(key)` 返回一个布尔值，表示某个键是否在当前 Map 对象之中。
  - `delete(key)` 删除某个键，返回 `true`。如果删除失败，返回 `false`。
  - `clear()` 清除所有成员，没有返回值。
  - `size` 返回 `Map` 结构的成员总数。
  - `keys()`：返回键名的遍历器。
  - `values()`：返回键值的遍历器。
  - `entries()`：返回键值对的遍历器。
  - `forEach()`：遍历 `Map` 的所有成员。参数与数组一致。
- 注意点<br>
`Map` 内部判断两个键值是否不同，与键值的类型有关。<br>
如果 `Map` 的键是一个简单类型的值，类似于严格相等运算符（`===`），主要的区别是 `NaN` 等于自身。<br>
如果 `Map` 的键是一个复合类型的值，则与内存地址有关，只要内存地址不一样，就视为两个键。
### 关于WeakMap
`WeakMap` 结构与 `Map` 结构类似，也是用于生成键值对的集合。与 `Map` 的区别有两点。
1. `WeakMap` 只接受对象作为键名。
2. `WeakMap` 的键名所指向的对象，不计入垃圾回收机制。
- 方法<br>
`get()`、`set()`、`has()`、`delete()`
- 注意点<br>
不能遍历，`WeakMap` 应用的典型场合就是 `DOM` 节点作为键名。防止内存泄漏。

### 参考文章
- [Set 和 Map 数据结构](https://es6.ruanyifeng.com/#docs/set-map)