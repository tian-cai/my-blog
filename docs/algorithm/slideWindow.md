> 滑动窗口

### 介绍
滑动窗口是一种解决问题的思路和方法，通常是暴力解法的优化，主要通过两个指针同向移动来实现优化。

适合**求解连续子串 xxx**或者**连续子数组 xxx**这种题目。


### 解题步骤
1. 初始化左右指针
2. 移动右指针
3. 在区间[left, right]进行条件判断
    - 如果满足条件，则继续移动右指针，更新结果
    - 如果不满足条件，移动左指针，直到满足条件，更新结果

### 伪代码
```js
let result = 0  // 最终结果
let left = 0   // 初始化左指针
for(let right = 0; right < nums.length; right++) {  // 移动右指针
    // 一些处理

    while(不满足条件) { 
        //  一些处理
        left++    // 移动左指针
    }
    result = Math.max(result, right - left + 1)   // 更新结果
}
return result  // 返回结果
```


### 小试牛刀
- [1004. 最大连续1的个数 III](https://leetcode-cn.com/problems/max-consecutive-ones-iii/)
    ```js
    var longestOnes = function(nums, k) {
        let result = 0
        let left = 0
        let zeroCount = 0
        for(let right = 0; right < nums.length; right++) {
            if(nums[right] === 0) {
                zeroCount++ 
            }
            while(zeroCount > k) {
                if(nums[left] === 0) zeroCount--
                left++
            }
            result = Math.max(result, right - left + 1)
        }
        return result
    };
    ```

### 推荐题目
- 中等
    - [1004. 最大连续1的个数 III](https://leetcode-cn.com/problems/max-consecutive-ones-iii/)
    - [209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)
- 困难
    - [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)
    - [992. K 个不同整数的子数组](https://leetcode-cn.com/problems/subarrays-with-k-different-integers/)


### 更多文章
- [力扣加加-滑动窗口](https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/slide-window)
- [leetcode-Sliding Window](https://leetcode-cn.com/tag/sliding-window/problemset/)