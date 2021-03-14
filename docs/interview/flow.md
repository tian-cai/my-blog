### 水平居中
- 文本/行内元素/行内块级元素
```css
text-align: center;
```
- 块级元素
```css
.box {
    width: 300px;
    margin: 0 auto
}
```
**必须定宽**

- 定位实现
```css
.parent {
    height: 200px;
    position: relative;  /*父相*/
}
.child {
    width: 400px;
    position: absolute;  /* 子绝 */
    left: 50%;
    transform: translateX(-50%);
}
```
- flex
```css
.box {
    display: flex;
    justify-content: center;
} 
```

### 垂直居中
- 单行文本/行内元素/行内块级元素
```css
.box {
    height: 150px;
    line-height: 150px;  /*与height等值*/
}
```
- 单个块级元素
```css
.box {
    display: table-cell;
    vertical-align: middle;
}
```
- 图片
```css
.box {
    height: 400px;
    line-height: 400px;
    font-size: 0;
}
.box img {
    vertical-align: middle;
}
```
- 定位实现
```css
.parent {
    height: 200px;
    position: relative;  /*父相*/
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```
- flex
```css
.box {
    display: flex;
    align-items: center;
} 
```

### 两列布局
- 左列定宽，右列自适应
    - float + margin<br>
    ```html
    <style>
        #left {
            background-color: red;
            float: left;
            width: 100px;
            height: 300px;
        }

        #right {
            background-color: blue;
            margin-left: 100px;
            height: 300px;
        }
    </style>
    
    <div id="left">左列定宽</div>
    <div id="right">右列自适应</div>
    ```
    - flex
    ```html
    <style>
        #parent {
            height: 500px;
            display: flex;
        }

        #left {
            width: 100px;
            background-color: red;
        }

        #right {
            flex: 1;
            background-color: blue;
        }
    </style>
    <div id="parent">
      <div id="left">左列定宽</div>
      <div id="right">右列自适应</div>
    </div>
    ```
    - grid
    ```html
    <style>
        #parent {
            display: grid;
            grid-template-columns: 100px auto;
        }

        #left {
            background-color: red;
        }

        #right {
            background-color: blue;
        }
    </style>
    <div id="parent">
      <div id="left">左列定宽</div>
      <div id="right">右列自适应</div>
    </div>
    ```
    - table
    ```html
    <style>
        #parent {
            width: 100%;
            display: table;
        }

        #left {
            width: 100px;
            background-color: red;
        }

        #right {
            background-color: blue;
        }

        #left,
        #right {
            display: table-cell;
        }

    </style>

    <div id="parent">
      <div id="left">左列定宽</div>
      <div id="right">右列自适应</div>
    </div>

    ```
    - 绝对定位
    ```html
    <style>
        #parent {
            position: relative;
        }

        #left {
            position: absolute;
            top: 0;
            left: 0;
            background-color: red;
            width: 100px;
        }

        #right {
            position: absolute;
            top: 0;
            left: 100px;
            right: 0;
            background-color: blue;
        }
    </style>

    <div id="parent">
      <div id="left">左列定宽</div>
      <div id="right">右列自适应</div>
    </div>
    ```

### 三列布局
- 两侧定宽,中间自适应
    - float + margin
    ```html
    <style>
        #left {
            width: 100px;
            float: left;
            background: red
        }

        #center {
            margin-left: 100px;
            margin-right: 200px;
            background: blue
        }

        #right {
            width: 200px;
            float: right;
            background: greenyellow
        }
    </style>

    <div id="left">左列定宽</div>
    <div id="right">右列定宽</div>
    <div id="center">中间自适应</div>
    ```
    - flex
    - grid
    - table
    - 绝对定位


### position 
position规定元素的定位类型
- absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
- fixed  生成固定定位的元素，相对于浏览器窗口进行定位，当祖先元素的`transform`, `perspective` 或 `filter` 属性非 none 时，相对该祖先定位
- relative 生成相对定位的元素，相对于其正常位置进行定位
- static 默认值，没有定位，元素出现在正常的流中
- inherit 从父元素继承 position 属性的值
### float
float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围
- left 元素向左浮动。
- right 元素向右浮动。
- none 默认值。元素不浮动
### 清除浮动
- 原因<br>
    正常情况下，容器的高度会被容器内容撑开。<br>
    但是当容器内容中有浮动元素的话，容器的高度不能自动伸长以适应内容的高度，使得内容溢出到容器外面而影响布局的现象，这个现象叫浮动溢出。<br>
    为了防止这个现象的出现而进行的CSS处理，就叫CSS清除浮动。
- 方法
    - 利用BFC
    ```html
    <style>
        .box {
            background-color: rgb(224, 206, 247);
            overflow: auto
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
    - 伪元素
     ```html
    <style>
        .box {
            background-color: rgb(224, 206, 247);
        }

        .clearfix::after {
            content: '';
            clear: both;
            display: block;
            height: 0;
        }

        .float {
            float: left;
            width: 200px;
            height: 150px;
            border: 1px solid black;
        }
    </style>

    <div class="box clearfix">
        <div class="float">I am a floated box!</div>
        <p>I am content inside the container.</p>
    </div>
    ```
    - 空标签
     ```html
    <style>
        .box {
            background-color: rgb(224, 206, 247);
        }

        .clearfix {
            clear: both;
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
        <div class="clearfix"></div>
    </div>
    ```
    - 给容器设置高度

### 伪元素与伪类
- 区别
    - 伪类用于向某些选择器添加特殊的效果，作用于标签本身，使用`:`
    - 伪元素用于创建一些不在DOM树中的元素，并为其添加样式，使用`::`
- 常见伪元素
    - ::before 在元素之前插入内容
    - ::after  在元素之后插入内容
    - ::first-letter 选择元素的第一个字母
    - ::first-line 选择元素的第一行
- 常见伪类
    - :link，:visited，:hover，:active 锚伪类
    - :first-child，:last-child，:only-child，:nth-child(n)，:nth-of-type(n)等
    - :checked，:disabled，:enabled，:focus等

### 参考文章
- [干货!各种常见布局实现+知名网站实例分析](https://juejin.cn/post/6844903574929932301)