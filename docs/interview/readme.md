> 面试题目

## css
#### BFC
[BFC详解](bfc)
#### 水平垂直居中
- flex布局
- 父相子绝
- [布局](flow)
#### flex布局
- 容器（采用flex布局的元素）
    - flex-direction：决定主轴的方向（即项目的排列方向）
    - flex-wrap：决定项目如何换行
    - flex-flow：是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
    - justify-content：项目在主轴上的对齐方式
    - align-items：项目在交叉轴上如何对齐
    - align-content：定义了多根轴线的对齐方式
- 项目（容器的所有子元素）
    - order：定义项目的排列顺序。数值越小，排列越靠前，默认为0
    - flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
    - flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
    - flex-basis：定义了在分配多余空间之前，项目占据的主轴空间
    - flex：是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
    - align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


## js
#### setTimeout和setInterval
#### == 和 === 的区别
#### call, apply, bind
#### 如何实现bind
#### this的指向
- [this 指向](/basic/this)
#### js的原型
#### js的继承
#### js的事件流
#### promise
#### es6模块化和commonjs的区别
#### 实现一个异步队列
#### Set和Map
- Set表示不重复的值的集合，成员唯一
- Map表示键值对的集合，各种类型的值（包括对象）都可以当作键
- WeakSet与Set类似，只是成员都是对象（弱引用），并且不可遍历
- WeakMap结构与Map结构类似，只是键都是对象（弱引用），不可遍历
- [Set和Map](set-map)
#### proxy
- [proxy](/basic/proxy)
#### es6新特性
- let/const，set/map，解构赋值
- 箭头函数
- class
- for of
- 新增api
#### 对象的遍历
#### iterator
#### 防抖与节流
#### 深拷贝


## vue
#### 生命周期
#### computed和watch的区别
#### v-if和v-show的区别
#### vue如何监听数组的
#### nextTick原理
#### 组件通信
#### vuex原理
#### vue3新特性

## 浏览器
#### 跨域


## 网络
#### http为啥是无状态的
#### http常用状态码
#### http缓存
#### http2和http1的区别
#### https和http的区别
#### web安全

## webpack
#### 动态引入原理


## 算法
#### 二分查找
#### [链表反转](https://leetcode-cn.com/problems/reverse-linked-list/)
#### 最长回文字串

## 准备
- [2021年前端面试必读文章](https://juejin.cn/post/6844904116339261447)

