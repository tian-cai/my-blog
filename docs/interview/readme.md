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
- setTimeout() 方法用于在指定的毫秒数后将函数放入队列。
- setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
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
#### 防抖
- 防抖的原理就是：要等你触发完事件 n 秒内不再触发事件，我才执行。
```js
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            func.apply(context, args)
        }, wait);
    }
}
```
#### 节流
- 节流的原理很简单：如果你持续触发事件，每隔一段时间，只执行一次事件。
- 时间戳，第一次事件会立刻执行，停止触发后没有办法再执行事件
```js
function throttle(func, wait) {
    var previous = 0;
    return function () {
        var now = Date.now();
        var context = this;
        var args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
```
- 定时器，会在 n 秒后第一次执行，事件停止触发后依然会再执行一次事件
```js
function throttle(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        if (!timeout) {
            timeout = setTimeout(function () {
                func.apply(context, args)
                timeout = null;
            }, wait)
        }
    }
}
```
#### 深拷贝


## vue
#### 生命周期
- beforeCreate->created->beforeMount->mounted->beforeUpdate->updated->beforeDestroy->destroyed
- created 钩子函数中可以访问到数据，在 mounted 钩子函数中可以访问到 DOM，在 destroy 钩子函数中可以做一些定时器销毁工作
#### computed和watch的区别
- computed是计算属性，基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值。
- watch是侦听属性，主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑
- 都起到监听/依赖一个数据，并进行处理的作用
- [Vue.js的computed和watch是如何工作的？](https://juejin.cn/post/6844903667884097543)
#### v-if和v-show的区别
- v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
- v-show 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
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
- 1xx 表示请求已被接受并需要处理
- 2xx 成功（这系列表明请求被正常处理了）
- 3xx 重定向（表明浏览器要执行特殊处理）
- 4xx 客户端错误
- 5xx 服务器错误
- 200 OK，表示从客户端发来的请求在服务器端被正确处理
- 204 No content，表示请求成功，但响应报文不含实体的主体部分
- 301 永久性重定向
- 302 临时性重定向
- 400 bad request，请求报文存在语法错误
- 401 unauthorized 表示发送的请求需要有通过 HTTP 认证的认证信息
- 403 forbidden 表示对请求资源的访问被服务器拒绝
#### http缓存
- 强缓存
    - Expires和Cache-Control，其中Cache-Control优先级比Expires高。
    - Cache-Control的值
        - no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
        - no-cache：使用协商缓存
        - public：所有内容都将被缓存（客户端和代理服务器都可缓存）
        - private 所有内容只有客户端可以缓存，Cache-Control的默认取值
        - max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效
    - Expires 缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点
- 协商缓存
    - Last-Modified和If-Modified-Since
    - ETag和If-None-Match（优先级更高）
- [浏览器缓存](https://github.com/xiangxingchen/blog/issues/9)
- [关于浏览器缓存你知道多少](https://mp.weixin.qq.com/s/Wvc0lkLpgyEW_u7bbMdvpQ)
#### http1.0
- 串行连接即每次连接只能处理一个请求，收到响应后立即断开连接
#### http1.1
- 默认开启持久连接(Keep-Alive)，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟。
但是持久连接采用阻塞模式，下次请求必须等到上次响应返回后才能发起，即线头阻塞问题
- 引入了更多的缓存控制策略
- [HTTP keep-alive 二三事](https://lotabout.me/2019/Things-about-keepalive/)
#### http1.x缺陷
- 基于文本协议，请求和响应的头信息非常大，并且无法压缩。
- 不能控制响应优先级，必须按照请求顺序响应。
- 只能单向请求，也就是客户端请求什么，服务器只能返回什么。
- 线头阻塞（Head of line blocking）问题：同一个连接中的请求，需要一个接一个串行发送和接收
#### http2新特性
- 传输的内容使用二进制协议，更小的传输体积，http1传输内容，都是文本/ASCII编码的
- 使用帧作为最小传输单位，规范中一共定义了 10 种不同的帧，每个帧都有序列标识表明该帧属于哪个流
- 流也就是多个帧组成的数据流，每个流表示一个请求
- 多路复用就是在一个 TCP 连接中可以存在多条流，也就是可以发送多个请求，服务端则可以通过帧中的标识知道该帧属于哪个流（即请求），通过重新排序还原请求
- 多路复用允许并发的发起多个请求，每个请求及该请求的响应不需要等待其他的请求或响应，避免了线头阻塞问题
- 头压缩，首部表和头部压缩算法
- 服务器推送
- 优先级，当资源有限的时候，服务器会根据优先级来选择应该先发送哪些流。
- 可重制，我们可以通过发送 RST_STREAM 帧来实现这种需求，从而避免浪费带宽和中断已有的连接。
#### http2缺陷
- HTTP/2.0 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。但当这个连接中出现了丢包的情况，那就会导致整个 TCP 都要开始等待该包重传后，才能继续传输其它流的数据包，也就导致了后面的所有数据都被阻塞了。

- [HTTP2基本概念学习笔记](https://juejin.cn/post/6844903589635162120)
#### http3.0
- 使用 QUIC 协议
- 避免包阻塞，QUIC协议中，不同的流之间的数据传输真正实现了相互独立互不干扰，某个流的数据包在出问题需要重传时，并不会对其他流的数据包传输产生影响。
- 快速重启会话，QUIC协议使用特有的UUID来标记每一次连接，在网络环境发生变化的时候，只要UUID不变，就能不需要握手，继续传输数据。
- [前端基础篇之HTTP协议](https://juejin.cn/post/6844903844216832007)
#### https
- 加密和解密用同一个秘钥的加密方式叫做对称加密
- 非对称加密有一对秘钥：公钥和私钥。 公钥加密的内容，只有私钥可以解开，私钥加密的内容，只有公钥可以解开
- 私钥只保存在服务器端，公钥可以发送给所有的客户端
- HTTPS就是使用SSL/TLS协议进行加密传输，让客户端拿到服务器的公钥，然后客户端随机生成一个对称加密的秘钥，使用公钥加密，传输给服务端，后续的所有信息都通过该对称秘钥进行加密解密，完成整个HTTPS的流程。
- 数字证书 = 网站信息（公钥+加密方法） + 数字签名
- [看图学HTTPS](https://juejin.cn/post/6844903608421449742)
#### web安全
- XSS跨站脚本攻击
    - 原理
        攻击者向有 XSS 漏洞的网站中输入恶意的代码
    - 类别
        - 持久型： 客户端攻击的脚本植入到服务器上
        - 非持久型： 对一个页面的 URL 中的某个参数做文章，需要攻击者诱骗点击
    - 防御手段
        过滤转义用户的输入

- CSRF跨站请求伪造
    - 原理
        利用 WEB 的隐式身份验证机制，在用户不知情的情况下构造了一个合法的请求
    - 防御手段（过滤那些非法伪造的请求来源）
        - 验证码
        - Token（一次性，随机性，保密性）
        - 检测 Referer（服务器不是任何时候都接受到 Referer 的值，所以一般用于监控 CSRF 攻击的发生）

- SQL注入
    - 原理
        通过把 SQL 命令插入到 Web 表单提交或页面请求的查询字符串，最终达到服务器执行恶意的 SQL 命令
    - 防御手段
        - 不要相信用户的输入，对用户的输入进行校验
        - 不要使用动态拼装 SQL，可以使用参数化的 SQL
- DDoS攻击(分布式拒绝服务)
    - 原理
        利用大量的请求造成资源过载，导致服务不可用
    - 攻击形式
        - 网络层DDoS，包括 SYN Flood、ACK Flood、UDP Flood、ICMP Flood
        - 应用层DDoS，包括 HTTP 慢速连接攻击，DNS Flood，CC 攻击

- [谈谈对 Web 安全的理解](https://zhuanlan.zhihu.com/p/25486768?group_id=820705780520079360)
- [常见 Web 安全攻防总结](https://zoumiaojiang.com/article/common-web-security)
- [前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
## webpack
#### 动态引入原理


## 算法
#### 二分查找
#### [链表反转](https://leetcode-cn.com/problems/reverse-linked-list/)
#### 最长回文字串

## 准备
- [2021年前端面试必读文章](https://juejin.cn/post/6844904116339261447)

