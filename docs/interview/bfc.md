### 定义
块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域。

### 常见的创建时机
- 根元素（`<html>`）
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
- display 值为 flow-root 的元素(创建无副作用的bfc)
- overflow 不为 visible 的块元素
- ......

### 性质
- 内部的元素与外界的元素互不干扰。它不会影响外部的布局，外部的布局也不会影响到它。
- 计算BFC的高度时，浮动子元素也参与计算
- 垂直外边距折叠也只会发生在属于同一BFC的块级元素之间。

### 作用
- 解决浮动子元素导致父元素，高度坍塌的问题(清除浮动)
    - 代码
    ```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            background-color: rgb(224, 206, 247);
            overflow: auto;
        }

        .float {
            float: left;
            width: 200px;
            height: 150px;
            border: 1px solid black;
        }
    </style>
    <div class="box">
        <div class="float">I am a floated box!</div>
        <p>I am content inside the container.</p>
    </div>
    ```
- 解决垂直外边距重叠
    - 代码
    ```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .blue {
            background: blue;
            height: 50px;
            margin: 10px 0; 
        }

        .red-outer {
            background: red;
            height: 100px;
            margin-top: 20px;
        }
        .red-inner {
            margin-top: 10px
        }
    </style>
    <div class="blue"></div>
    <div class="red-outer">
        <div class="red-inner">red inner</div>
    </div>
    ```
    - 说明<br>
        - `.blue` 和 `.red-outer` 属于同个bfc，所以这两个元素之间的`margin`会重叠，`margin`值为较大的那一个，此例子中为`20px`
        - `.red-inner` 设置的`margin-top`看起来并没有生效，原因就是它和`.blue` 和 `.red-outer` 属于同个bfc
        - 要想`.red-inner` 设置的`margin-top`生效，我们只需要重新生成一个bfc即可，即对`.red-outer`设置`display: flow-root`


### 参考
- [mdn](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- [从Float谈谈BFC](https://github.com/allenGKC/Blog/issues/4)
- [第7天 简述你对BFC规范的理解](https://github.com/haizlin/fe-interview/issues/20)