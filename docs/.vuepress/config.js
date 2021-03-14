module.exports = {
  title: '阿呆的博客',
  description: '阿呆的博客',
  base: '/my-blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: '数据结构与算法',
            items: [
              { text: '数据结构', link: '/constractor/' },
              { text: '算法', link: '/algorithm/' }
            ]
          },
          {
            text: '工程化',
            items: [
              { text: 'webpack', link: '/webpack/' },
              { text: 'Babel', link: '/babel/' }
            ]
          },
          {
            text: '调试工具',
            items: [
              { text: 'chrome devtool', link: '/devtool/' }
            ]
          },
          {
            text: '基础与框架',
            items: [
              { text: '基础', link: '/basic/' },
              { text: '浏览器', link: '/brower/' }
            ]
          },
          {
            text: 'Node',
            items: [
              { text: 'Node', link: '/node/' }
            ]
          }
        ]
      },
      { text: '好文收藏', link: '/collectArticle/' },
      { text: '面经', link: '/interview/' }
    ],
    sidebar: {
      '/constractor/': getConstractorSidebar(),
      '/algorithm/': getAlgorithmSidebar(),
      '/collectArticle/': getArticleSidebar(),
      '/babel/': getProjectSidebar(),
      '/webpack/': getWebpackSidebar(),
      '/devtool/': getDevtoolSidebar(),
      '/basic/': getBasicSidebar(),
      '/interview/': getInterviewSidebar(),
      '/brower/': getBrowerSidebar()
    },
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/tian-cai/my-blog',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    displayAllHeaders: true,
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  markdown: {
    plugins: ['markdown-it-katex'],
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
    }
  },
  plugins: ['@vuepress/back-to-top', 'one-click-copy']
}

function getWebpackSidebar() {
  return [
    {
      title: 'webpack',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/webpack/summary','概述'],
        ['/webpack/plugin','常用插件'],
        ['/webpack/loader','常用loader'],
        ['/webpack/config','一般配置'],
        ['/webpack/pack','打包优化'],
        ['/webpack/makePlugin','开发插件'],
        ['/webpack/makeLoader','开发loader']
      ]
    }
  ]
}

function  getProjectSidebar() {
  return [
    {
      title: 'Babel',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/babel/summary','概述']
      ]
    }
  ]
}

function getConstractorSidebar() {
  return [
    {
      title: '数据结构',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/constractor/stack', '栈'],
        ['/constractor/queue', '队列'],
        ['/constractor/deque', '双端队列'],
        ['/constractor/dictionary', '字典'],
        ['/constractor/tree', '树'],
        ['/constractor/minheap', '最小堆'],
        ['/constractor/maxheap', '最大堆']
      ]
    }
  ]
}

function getAlgorithmSidebar() {
  return [
    {
      title: '算法',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/algorithm/bubblesort', '冒泡排序'],
        ['/algorithm/selectionSort', '选择排序'],
        ['/algorithm/insertSort', '插入排序'],
        ['/algorithm/mergeSort', '归并排序']
      ]
    }
  ]
}

function getArticleSidebar() {
  return [
    {
      title: '好文收藏',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ''
      ]
    }
  ]
}

function getInterviewSidebar() {
  return [
    {
      title: '面经',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['boxModel', '盒模型'],
        ['bfc', 'BFC'],
        ['flow', '布局']
      ]
    }
  ]
}

function getDevtoolSidebar() {
  return [
    {
      title: 'devtool',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/devtool/network', 'network'],
        ['/devtool/css', 'css'],
        ['/devtool/memory', 'memory']
      ]
    }
  ]
}

function getBasicSidebar() {
  return [
    {
      title: 'js基础',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/basic/string', '字符串的常见操作'],
        ['/basic/array', '数组的常见操作'],
        ['/basic/number', '数字的常见操作'],
        ['/basic/object', '对象的常见操作'],
        ['/basic/type', '判断数据类型'],
        ['/basic/converttype', '类型转换'],
        ['/basic/mycall', '实现call和apply'],
        ['/basic/mybind', '实现bind'],
        ['/basic/mynew', '实现new'],
        ['/basic/myinstanceof', '实现instanceof'],
        ['/basic/prototype', 'js 原型'],
        ['/basic/this', 'this 指向'],
        ['/basic/extends', 'js 继承'],
        ['/basic/promise', ' Promise'],
        ['/basic/set-map', 'set和map'],
        ['/basic/proxy', 'Proxy vs defineproperty'],
        ['/basic/closure', ' 闭包'],
        ['/basic/deepclone', '实现深克隆'],
        ['/basic/debounce', '实现debounce'],
        ['/basic/throttle', '实现throttle']
      ]
    }
  ]
}

function getBrowerSidebar() {
  return [
    {
      title: '浏览器',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['/brower/load', '浏览器加载'],
        ['/brower/eventstream', '浏览器-事件流'],
        ['/brower/eventloop', '浏览器-eventloop'],
        ['/brower/collectgarbage', 'v8垃圾回收']
      ]
    }
  ]
}
