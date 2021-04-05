### 基本概念
树是一种分层数据的抽象模型，它对于存储需要快速查找的数据非常有用。

生活中最常见的例子就是家谱，公司的组织架构等。

### 相关术语
一个树由一系列存在父子关系的节点组成。一个节点可以有祖先和后代。

位于树顶部的节点叫做**根结点**，根结点没有父节点。没有后代的节点称为叶节点。


### 二叉树
**二叉树**中的节点最多只能有两个子节点，一个是左侧子节点，一个是右侧子节点。

### 二叉搜索树
**二叉搜索树**是二叉树的一种，但是只允许在左侧节点存储比父节点小的值，在右侧节点存储比父节点大的值。

### 树的遍历
树的遍历分为两种，分别是**深度优先遍历(简称DFS)**和**广度优先遍历(简称BFS)**。
- **深度优先遍历**
    - **先序遍历**<br>
        先访问节点本身，然后在访问它的左侧子节点，最后是右侧子节点。<br>
        递归代码
        ```js
        var preorderTraversal = function(root) {
            const result = []
            function dfs(root) {
                if(!root) {
                    return
                }
                result.push(root.val)
                dfs(root.left)
                dfs(root.right)
            }
            dfs(root)
            return result
        }
        ```
        迭代代码<br>
        使用颜色标记法，白色表示节点未进行遍历，黑色表示节点已经遍历过了。
        ```js
        var preorderTraversal = function(root) {
            const result = []
            const WHITE = 'WHITE'
            const BLACK = 'BLACK'
            const stack = []
            stack.push({color: WHITE, node: root})
            while(stack.length) {
                const item = stack.pop()
                if(item.node) {
                    if(item.color === WHITE) {
                        stack.push({color: WHITE, node: item.node.right})
                        stack.push({color: WHITE, node: item.node.left})
                        stack.push({color: BLACK, node: item.node})
                    }else {
                        result.push(item.node.val)
                    }
                }
            }
            return result
        }
        ```

    - **中序遍历**<br>
        先访问左侧子节点，然后在访问节点本身，最后是右侧子节点。<br>
        递归代码
        ```js
        var inorderTraversal = function(root) {
            const result = []
            function dfs(root) {
                if(!root) {
                    return
                }
                dfs(root.left)
                result.push(root.val)
                dfs(root.right)
            }
            dfs(root)
            return result
        }
        ```
        迭代代码
        ```js
        var inorderTraversal = function(root) {
            const result = []
            const WHITE = 'WHITE'
            const BLACK = 'BLACK'
            const stack = []
            stack.push({color: WHITE, node: root})
            while(stack.length) {
                const item = stack.pop()
                if(item.node) {
                    if(item.color === WHITE) {
                        stack.push({color: WHITE, node: item.node.right})
                        stack.push({color: BLACK, node: item.node})
                        stack.push({color: WHITE, node: item.node.left}) 
                    }else {
                        result.push(item.node.val)
                    }
                }
            }
            return result
        }
        ```

    - **后序遍历**<br>
        先访问左侧子节点，然后在访问右侧子节点，最后是节点本身。<br>
        递归代码
        ```js
        var postorderTraversal = function(root) {
            const result = []
            function dfs(root) {
                if(!root) {
                    return
                }
                dfs(root.left)
                dfs(root.right)
                result.push(root.val)
            }
            dfs(root)
            return result
        }
        ```
        迭代代码
        ```js
        var postorderTraversal = function(root) {
            const result = []
            const WHITE = 'WHITE'
            const BLACK = 'BLACK'
            const stack = []
            stack.push({color: WHITE, node: root})
            while(stack.length) {
                const item = stack.pop()
                if(item.node) {
                    if(item.color === WHITE) {
                        stack.push({color: BLACK, node: item.node})
                        stack.push({color: WHITE, node: item.node.right})
                        stack.push({color: WHITE, node: item.node.left}) 
                    }else {
                        result.push(item.node.val)
                    }
                }
            }
            return result
        }
        ```

- **广度优先遍历**
    ```js
    var bfs = function(root) {
        if(!root) {
            return []
        }
        const result = []
        const queue = []
        queue.push(root)
        while(queue.length) {
            const node = queue.shift()
            result.push(node.val)
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        return result
    }
    ```
- 小结<br>
我们不难发现树的深度优先遍历方式代码都是几乎一样的，区别只是位置有所调整而已。

### 推荐题目(应该掌握的题目)
- 简单
    - [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
    - [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
    - [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
    - [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
    - [617. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)
    - [108. 将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)
- 中等
    - [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
    - [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
    - [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
    - [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
    - [515. 在每个树行中找最大值](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)
    - [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

### 更多文章
- javascript数据结构与算法第三版
- [力扣加加-树专题](https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree)
- [leetcode-树](https://leetcode-cn.com/tag/tree/)
