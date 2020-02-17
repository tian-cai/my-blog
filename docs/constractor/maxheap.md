### 最大堆
最大堆和最小堆几乎一模一样，唯一的不同之处在于：最大堆所有的节点都大于等于它的子节点，即根结点是最大的，可以快速导出树的最大值。

### js实现最大堆
要实现最大堆，我们只需要把最小堆稍加改变即可，即上移和下沉方法中的进行父子节点互换的条件判断稍加修改，即由BIGGER_THAN改为LESS_THAN。

但是这不等于我们需要复制最小堆的代码然后进行修改，我们可以扩展最小堆，将比较进行反转也可实现。

```js

function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a)

}
class MaxHeap extends MinHeap {

    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn)
    }
}

```

### 参考文章
- javascript数据结构与算法第三版