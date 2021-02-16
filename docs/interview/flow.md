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

### 参考文章
- [干货!各种常见布局实现+知名网站实例分析](https://juejin.cn/post/6844903574929932301)