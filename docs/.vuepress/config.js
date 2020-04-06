module.exports = {
  title: '阿呆的博客',
  description: '阿呆的博客',
  base: '/my-blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        title: '数据结构',
        path: '/constractor/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['/constractor/stack', '栈'],
          ['/constractor/queue', '队列'],
          ['/constractor/deque', '双端队列'],
          ['/constractor/tree', '树'],
          ['/constractor/minheap', '最小堆'],
          ['/constractor/maxheap', '最大堆']
        ]
      },
      {
        title: '算法',
        path: '/algorithm/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['/algorithm/bubblesort', '冒泡排序'],
          ['/algorithm/selectionSort', '选择排序'],
          ['/algorithm/insertSort', '插入排序'],
          ['/algorithm/mergeSort', '归并排序']
        ]
      }
    ],
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