### 事件三个阶段
1. 捕获阶段：事件从顶部(window)向下走近元素
    ```html
    <div id="parent">
        <div id="child"></div>
    </div>
    <script>
        const child = document.getElementById('child')
        const parent = document.getElementById('parent')
        child.addEventListener('click', function(event) {
            console.log('child true')
        }, true)

        parent.addEventListener('click', function(event) {
            console.log('parent true')
        }, true)

        window.addEventListener('click', function(event) {
            console.log('window true')
        }, true)
        // 点击child元素，依次打印window true-->parent true-->child true
    </script>
    ```
2. 目标阶段：事件到达目标元素
    ```html
     <div id="parent">
        <div id="child"></div>
    </div>
    <script>
        const child = document.getElementById('child')
        const parent = document.getElementById('parent')
        child.addEventListener('click', function(event) {
            console.log('child false')
        }, false)

        child.addEventListener('click', function(event) {
            console.log('child true')
        }, true)

        child.addEventListener('click', function(event) {
            console.log('child second  false')
        }, false)
        // 点击child元素，依次打印child false-->child true-->child second  false
    </script>
    ```
    同一个元素事件的触发顺序，就是注册的顺序
3. 冒泡阶段：事件从元素上开始向顶层冒泡
    ```html
    <div id="parent">
        <div id="child"></div>
    </div>
    <script>
        const child = document.getElementById('child')
        const parent = document.getElementById('parent')
        child.addEventListener('click', function(event) {
            console.log('child false')
        }, false)

        parent.addEventListener('click', function(event) {
            console.log('parent false')
        }, false)

        window.addEventListener('click', function(event) {
            console.log('window false')
        }, false)
        // 点击child元素，依次打印child false-->parent false-->window false
    </script>
    ```
    虽然形式上有 3 个阶段，但第 2 阶段（“目标阶段”：事件到达元素）没有被单独处理；<br>
    捕获阶段和冒泡阶段的处理程序都在该阶段被触发

### `addEventListener`
我们使用`addEventListener`来进行事件的监听
- `element.addEventListener(event, handler, [options])`
    - `event`: 事件名，例如："click"
    - `handler`: 处理程序
    - `options`: 可选对象，具有三个属性
        - `once`：如果为 true，那么会在被触发后自动删除监听器
        - `capture`: 事件处理的阶段，true为捕获，false为冒泡
        - `passive`: 如果为 true，那么处理程序将不会调用 `preventDefault()`
- 简写形式
    - `element.addEventListener(event, handler, false)`等同于`element.addEventListener(event, handler, { capture: false})`

### 事件对象
- 阻止冒泡
    - `event.stopPropagation()` 停止向上冒泡，但是当前元素上的其他处理程序都会继续运行
    - `event.stopImmediatePropagation()` 用于停止冒泡，并阻止当前元素上的其他处理程序运行
    - `event.cancelBubble = true` 停止冒泡，不标准的属性，已废弃，尽量不要使用该特性
- 阻止浏览器默认行为
    - `event.preventDefault()`
    - 如果处理程序是使用 `on<event>`分配的，那返回 `false` 也同样有效
    - `event.cancelable = true` 
- 常见的浏览器默认行为
    - 在文本上按下鼠标按钮并移动选中文本。
    - 点击一个链接，触发导航到该`url`
    - 鼠标右键，显示上下文菜单

- `target`与`currentTarget`
    - `event.target`是引发事件的“目标”元素，它在冒泡过程中不会发生变化
    - `event.currentTarget`是“当前”元素，其中有一个当前正在运行的处理程序

### 事件委托
通常用于为许多相似的元素添加相同的处理，不必为每个元素分配一个处理程序，而是将单个处理程序放在它们的共同祖先上。
在处理程序中，我们获取 `event.target` 以查看事件实际发生的位置并进行处理。
- 一个小`demo`<br>
    要求点击`li`元素时，弹出`li`元素的文本，点击其他元素无反应
    ```html
    <ul id="ul">
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <script>
        const ul = document.getElementById('ul')
        ul.addEventListener('click', function(event) {
            const target = event.target
            if(target.tagName === 'LI') {
                alert(target.innerText)
            } 
        })
    </script>
    ```





### 自定义事件
- 一个小`demo`
    ```html
    <div id="test">test</div>
    <script>
        const testDom = document.getElementById("test")
        testDom.addEventListener('test', function(event) {
            alert('test')
        })
        const testEvent = new Event('test')
        testDom.dispatchEvent(testEvent)
    </script>
    ```
    进入页面之后，会有`alert`弹窗。使用`Event`构造事件，使用`dispatchEvent`触发事件
- 事件构造器<br>
    - `Event`<br>
        - `let event = new Event(type, [options])`
            - `type`: 事件类型，可以是像这样 "click" 的字符串
            - `options`: 具有两个可选属性的对象
                - `bubbles`: 如果为 true，那么事件会冒泡
                - `cancelable`: 如果为 true，那么“默认行为”就会被阻止
    - `CustomEvent`<br>
    在第二个参数中，我们可以添加一个附加的属性 `detail`，剩下的和 `Event` 一样
- `event.isTrusted`<br>
来自真实用户操作的事件，`event.isTrusted` 属性为 `true` ;
对于脚本生成的事件，`event.isTrusted` 属性为 `false`

### 参考文章
- [现代 JavaScript 教程](https://zh.javascript.info/)