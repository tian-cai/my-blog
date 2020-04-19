### 基本概念
字典是用来存储唯一值的数据结构，字典以[键，值]的形式存储元素，键名是字符串，键值可以是任何类型，键名是用来查询特定元素的。字典也被称为映射，符号表或关联数组。

### 字典的一些方法
- `get(key)`: &nbsp;查询字典中指定键对应的值。
- `set(key, value)`: &nbsp;设置字典中键名key对应的键值为value。
- `hasKey(key)`: &nbsp;某个键是否存在与字典之中，存在返回true，反之返回false。
- `delete(key)`: &nbsp;删除字典中指定的键。
- `clear()`: &nbsp;清空字典。
- `size()`: &nbsp;返回字典包含的值的数量。
- `isEmpty()`: &nbsp;字典是否为空。
- `keys()`: &nbsp;将字典中所有键名以数组形式返回。
- `values()`: &nbsp;将字典中所有键值以数组形式返回。
- `entries()`: &nbsp;将字典中所有[键，值]对返回。
- `show()`: &nbsp;显示字典信息。
- `forEach()`: &nbsp;遍历字典，第一个参数为key，第二个参数为value。

### 用js实现一个字典
```js

function defaultToString(item) {
    return item.toString()
}

class Dictionary {

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    // 需要将key值转为字符串
    hasKey(key) {
        return !!this.table[this.toStrFn(key)]
    }

    get(key) {
        return this.table[this.toStrFn(key)]
    }

    set(key, value) {
        if (key && value && this.toStrFn(key)) {
            this.table[this.toStrFn(key)] = value
            return true
        }
        return false
    }

    delete(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    clear() {
        this.table = {}
    }

    size() {
        return Object.keys(this.table).length
    }

    isEmpty() {
        return this.size() === 0
    }

    keys() {
        return Object.keys(this.table)
    }

    values() {
        return Object.values(this.table)
    }

    entries() {
        return Object.entries(this.table)
    }

    forEach(callback) {
        const entries = this.entries()
        for (let i = 0; i < entries.length; i++) {
            callback(entries[i][0], entries[i][1])
        }
    }

    // 自定义实现
    show() {
        if (this.isEmpty()) {
            return ''
        }
        let str = ''
        this.entries().forEach(ele => {
            str+= `{key: ${ele[0]}, value: ${ele[1]}};`
        });
        return str
    }
}

```

### 参考文章
- javascript数据结构与算法第三版