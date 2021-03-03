
### 模拟实现trim()
```js
String.prototype.trim = function() {
    let reg = /^(\s)*|(\s)*$/g
    return this.replace(reg, '')
}
```

### [是否是回文字符串](https://leetcode-cn.com/problems/valid-palindrome/)
- 利用数组的reverse方法
    ```js
    function isPalindrome(s) {
        s = s.replace(/[\W|_]/g, '').toLowerCase()
        return s === s.split('').reverse().join('')
    }
    ```
- 双指针
    ```js
    function isPalindrome(s) {
        s = s.replace(/[\W|_]/g, '').toLowerCase()
        const len = s.length
        let l = 0, r = len - 1
        while(l < r) {
            if(s[l] !== s[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }
    ```

### 静态方法
- `String.fromCharCode()` 方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串，不能识别码点大于0xFFFF的字符
- `String.fromCodePoint()` 可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足
- `String.raw()` 返回一个斜杠都被转义的字符串

### 实例方法
- `includes()` 返回布尔值，表示是否找到了参数字符串
- `startsWith()` 返回布尔值，表示参数字符串是否在原字符串的头部
- `endsWith()` 返回布尔值，表示参数字符串是否在原字符串的尾部
- `indexOf()` 确定一个字符串在另一个字符串中第一次出现的位置，如果返回-1，就表示不匹配
- `lastIndexOf()` 确定一个字符串在另一个字符串中最后一次出现的位置，如果返回-1，就表示不匹配
- `trim()` 去除字符串两端的空格，返回一个新字符串，不改变原字符串
- `trimStart()` 消除字符串头部的空格, 返回的都是新字符串，不会修改原始字符串
- `trimEnd()` 消除尾部的空格, 返回的都是新字符串，不会修改原始字符串
- `toLowerCase()` 将一个字符串全部转为小写，返回一个新字符串，不改变原字符串
- `toUpperCase()` 将一个字符串全部转为大写，返回一个新字符串，不改变原字符串
- `split()` 按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组，还可以接受第二个参数，限定返回数组的最大成员数
- `replace()` 用于替换匹配的子字符串，只替换第一个匹配，返回一个新字符串，不改变原字符串
- `replaceAll()` 一次性替换所有匹配，返回一个新字符串，不改变原字符串
- `match()` 用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null
- `search()` 用法基本等同于match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1
- `slice()` 从原字符串取出子字符串并返回，不改变原字符串
- `charAt()` 返回指定位置的字符, 参数是从0开始编号的位置
- `charCodeAt()` 返回字符串指定位置的 Unicode 码点
- `concat()` 用于连接两个字符串，返回一个新字符串，不改变原字符串。
- `localeCompare()` 用于比较两个字符串，它返回一个整数，小于0，表示第一个字符串小于第二个字符串
- `repeat()` 返回一个新字符串，表示将原字符串重复n次
- `padStart()` 头部补全字符串长度，返回一个新字符串
- `padEnd()` 尾部补全字符串长度，返回一个新字符串





