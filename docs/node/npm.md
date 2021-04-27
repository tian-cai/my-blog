### 简介
`npm` 是 `Node` 的模块管理器，功能极其强大。主要分为三个部分：<br>
1. [网站](https://www.npmjs.com/)<br>
   开发者可以在该网站查找各种各样的包，以供使用。
   
2. 注册表（registry）<br>
   注册表是一个巨大的数据库，保存了每个包（package）的信息。<br>
   例如我们要查询 `react` 包的信息，可以访问`https://registry.npmjs.org/react`，就会看到    `react` 模块所有版本的信息。<br>
   模块名后面，还可以跟上版本号或者标签，用来查询某个具体版本的信息，例如：`https://registry.npmjs.org/react/16.8.1` 查看 `react` 16.8.1版本的信息 <br>
   具体用法就是，`https://registry.npmjs.org/` 后面跟上模块名，就会得到一个JSON对象，    包含模块所有版本的信息。
   
3. 命令行工具 (CLI)<br>
   开发者可以使用该命令行工具和 `npm` 进行交互，包括包的安装，发布等。
    
### 安装机制
`node` 模块的首次安装过程可以简单分为四步：
1. 执行 `npm install <package>` 命令
2. `npm` 向 `registry` 注册表查询模块压缩包的网址
3. 下载压缩包，存放在缓存目录，默认就是 `~/.npm`
4. 解压压缩包到当前项目的 `node_modules` 目录

**那么什么是压缩包的网址呢？**<br>
我们通过注册表查询模块的信息时，返回的 JSON 对象里面，有一个 `dist.tarball` 属性，就是模块该版本压缩包的网址。

### 安装包的几种方式
- 包名安装<br>
  `npm i react` : 默认安装 `react`模块 `latest` 标签上的最新版本
- 包名加版本<br>
  `npm i react@16.8.1` : 安装 `react`模块16.8.1的版本
- 包名加 `tag`<br>
  `npm i react@next` : 安装 `react`模块 `next` 标签上的最新版本
- `tarball url` <br>
  `npm i https://registry.npmjs.org/react/-/react-16.8.1.tgz` : 安装 `react`模块16.8.1的版本
- `tarball file` <br>
  `npm i file: xxxx.xxx.tgz` tarball file 可以通过 `npm pack` 命令得到
- `git url`<br>
  `npm i git+https://github.com/facebook/react.git`
  
- `username/project` <br>
  `npm i github:facebook/react`
  
### 版本号
`npm` 采用了 `semver` 规范作为依赖版本管理方案，版本格式一般为：主版本号.次版本号.修订号。
- 主版本号（`major`）：一般改动很大，不兼容低版本。
- 次版本号（`minor`）：兼容同一个大版本的API和用法。
- 修订号（`patch`）：一般用来修复bug。
- 有的时候在修订号后面可能还会有先行版本号，例如 `1.0.0-alpha.1` ， `1.0.0-beta.4` ，  `2.0.0-rc.1` 等。常用的先行版本一般为 `alpha` ，`beta` ，`rc` ，`stable` ，`csp` 等。

### 发布
- **修改版本号**<br>
  `npm version major` : 主版本号加 1，其余版本号归 0。<br>
  `npm version minor` : 次版本号加 1，修订号归 0。<br>
  `npm version patch` : 修订号加 1。<br>
  `npm version 版本号` : 设置版本号为指定的版本号<br>
  `npm version prerelease` : 先行版本号增加1<br>
  `npm version prerelease --preid=<prerelease-id>` : 指定先行版本的名字
   ```js
   // 假定现在的版本号是1.1.1
   npm version major  // 2.0.0
   npm version minor  // 1.2.0
   npm version patch  // 1.1.2
   npm version prerelease // 1.1.2-0
   npm version prerelease --preid=alpha // 1.1.2-alpha.0
   npm version 4.1.2  // 4.1.2
   ```
   执行 `npm version` 修改完版本号之后，还会默认执行 `git add` -> `git commit` -> `git tag` 操作，`commit` 的信息和为 `tag` 均为版本号。
- **修改 `commit` 信息**<br>
  假如我们需要修改提交信息的话，只需在 `npm version` 命令后加上 `-m` 选项即可，`%s` 会被替换成为版本号。`npm version prerelease -m "update %s"`
- **禁用版本提交和标记tag**<br>
  `npm version prerelease --no-git-tag-version`
- **发布**<br>
  `npm publish` : 发布npm包
  
### tag
`npm` 中的 `tag` 类似于 `git` 中的 `branch` ，发布者可以在指定的 `tag` 上进行发版，使用者可以选择指定 `tag` 来安装，默认的`tag`是 `latest`。这对于我们日常开发非常有用，很多时候我们想要发布版本来进行验证功能，但是又不想影响正在使用的人，我们就可以利用tag和先行版本来进行发包。<br>

```js
npm publish --tag alpha  // 发版到名为alpha的tag上
npm i <package>@<tag>    // 从指定tag上安装包
```

### link
我们在日常的开发中经常会有这样的情况：有两个项目分别为A和B，A项目我们封装了一些基本的逻辑，供其他项目进行使用；B项目为我们的业务项目，依赖了A项目。然后现在来了一个新的需求，需要对AB两个项目进行改动，此时我们写完了A项目，想要在B项目中进行验证A项目的逻辑是否正确。<br>
当然我们可以通过A项目发版，然后B项目进行版本升级来进行验证，但是这导致的问题就是可能需要频繁发版；另外一种解决方案就是 `link`。<br>

具体做法如下：
1. 在A项目中执行 `npm link` 命令。
2. 在B项目中执行 `npm link A的包名` 命令。

执行完上述两步之后，此时B项目中 `node_modules` 里A的依赖就会指向我们的A项目。这样就可以不用发版进行验证，非常方便。当然 `link` 的本质原理其实就是软连接。

### `npx`
`npx` 执行 Node 软件包的工具。原理很简单，就是运行的时候，会到 `node_modules/.bin` 路径和环境变量 `$PATH` 里面，检查命令是否存在；如果存在，则执行；不存在，则进行临时安装，然后执行，执行完毕将包删除。

### 配置
`npm config` 命令用来管理 npm 的配置
- `npm config set <key> <value>` : 设置一些配置
- `npm config get <key>` : 获取指定的配置
- `npm config delete <key>` : 删除指定的配置
- `npm config list` : 配置列表
- `npm config edit` : 用编辑器打开配置文件<br>

例如我们经常会对 `npm` 的 `registry` 进行设置<br>
`npm config set registry https://registry.npm.taobao.org/`

### `npm ci`
- 该命令只能一次安装整个项目，不能添加单独的依赖项
- 项目必须有 `package-lock.json` 文件
- 每次开始安装之前，都会清除 `node_modules`
- 不会改写 `package.json` 和 `package-lock.json` 文件
- 安装速度更快，更严格
  
很多时候，我们新克隆一个项目，进行 `npm i` 安装的时候，经常会出现改动 `package.json` 和 `package-lock.json` 文件的情况，这有的时候会带来一些风险，而此时使用 `npm ci` 就是一个好的选择。


### 查询包信息
- `npm view 包名` : 显示包的详细信息
- `npm view 包名 versions` : 显示包的所有历史版本
- `npm repo 包名` : 打开包的源码仓库页面
- `npm docs 包名` : 打开包的文档地址

### 其他
- `npm login` : 登陆 npm
- `npm whoami` : 显示 npm 用户名
- `npm bin` : 显示 npm 的 bin 文件夹的路径
- `npm root` : 显示 npm 根目录

### 参考文章
- [npm 中文文档](https://www.npmjs.cn/)
- [npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)
- [npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)