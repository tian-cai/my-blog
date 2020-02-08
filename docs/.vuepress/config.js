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
          sidebarDepth: 1,
          children: [
            ['/constractor/stack','栈'],
            ['/constractor/queue','队列']
          ]
        },
        {
          title: '算法',
          path: '/algorithm/',
          collapsable: false, 
          sidebarDepth: 2,
          children: [
            ['/algorithm/bubblesort','冒泡排序']
          ]
        }
      ],
      smoothScroll: true,
      lastUpdated: 'Last Updated',
      repo: 'https://github.com/tian-cai/my-blog',
      editLinks: true,
    }
  }