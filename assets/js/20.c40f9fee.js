(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{394:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("滑动窗口")])]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("滑动窗口是一种解决问题的思路和方法，通常是暴力解法的优化，主要通过两个指针同向移动来实现优化。")]),t._v(" "),a("p",[t._v("适合"),a("strong",[t._v("求解连续子串 xxx")]),t._v("或者"),a("strong",[t._v("连续子数组 xxx")]),t._v("这种题目。")]),t._v(" "),a("h3",{attrs:{id:"解题步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题步骤"}},[t._v("#")]),t._v(" 解题步骤")]),t._v(" "),a("ol",[a("li",[t._v("初始化左右指针")]),t._v(" "),a("li",[t._v("移动右指针")]),t._v(" "),a("li",[t._v("在区间[left, right]进行条件判断\n"),a("ul",[a("li",[t._v("如果满足条件，则继续移动右指针，更新结果")]),t._v(" "),a("li",[t._v("如果不满足条件，移动左指针，直到满足条件，更新结果")])])])]),t._v(" "),a("h3",{attrs:{id:"伪代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[t._v("#")]),t._v(" 伪代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最终结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化左指针")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移动右指针")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些处理")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不满足条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  一些处理")]),t._v("\n        left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移动左指针")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果")]),t._v("\n")])])]),a("h3",{attrs:{id:"小试牛刀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小试牛刀"}},[t._v("#")]),t._v(" 小试牛刀")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/max-consecutive-ones-iii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1004. 最大连续1的个数 III"),a("OutboundLink")],1),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("longestOnes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" zeroCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            zeroCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zeroCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" zeroCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n            left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"推荐题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐题目"}},[t._v("#")]),t._v(" 推荐题目")]),t._v(" "),a("ul",[a("li",[t._v("中等\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/max-consecutive-ones-iii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1004. 最大连续1的个数 III"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("209. 长度最小的子数组"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("困难\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-window-substring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("76. 最小覆盖子串"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/subarrays-with-k-different-integers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("992. K 个不同整数的子数组"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"更多文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多文章"}},[t._v("#")]),t._v(" 更多文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/slide-window",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣加加-滑动窗口"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/tag/sliding-window/problemset/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leetcode-Sliding Window"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);