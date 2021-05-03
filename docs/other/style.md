### git commit 规范
[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)是目前使用最广的写法，比较合理和系统化，并且有配套的工具。

格式如下:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

`commitlint`: 用于检查提交信息是否符合约定式提交规范的检查器。

`commitizen`: 是一个撰写合格 `commit message` 的工具。

`conventional-changelog`: 一套从 git 历史中解析出约定式提交说明的工具，生成 changelog。

[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

### css 命名
BEM(Block、Element、Modifier)规范
- Block: 是一个可以重用的单元，比如组件，应该描述是什么
- Element: 是Block的一部分，并且不能离开Block单独使用，应该描述它的目标
- Modifier: 主要定义了Block或者Element的状态、外观等“附加”的样式，应该描述外观，状态等

格式: `block-name__element-name_modifier-name`  `block-name_modifier-name`

Block 与 Element 之间用双下划线__连接；Modifieer 跟 Block 或者 Element 以下划线_连接。

```html
<form class="search-form search-form_focused">
    <input class="search-form__input">

    <!-- The `button` element has the `disabled` Boolean modifier -->
    <button class="search-form__button search-form__button_disabled">Search</button>
</form>
```

[bem官网](https://en.bem.info/)
