const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
    title: 'shotCat', //标题
    description: '小源科技 平台架构公共组件', //描述
    // base: '/shotCat/', //基本url
    // base: '/', //基本url
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ['link', { rel: 'icon', href: '/favicon.jpeg' }], // 增加一个自定义的 favicon
    ],
    // dest: './dist', //打包位置
    port: 6868, //端口号 谐音流弊流弊
    
    //主题配置
    themeConfig: {
        //顶部导航栏配置
        nav:[
            { text: '主页', link: '/' },  // 内部链接 以docs为根目录
            { text: '规范指南', link: '/guide/' }, 
            // { text: '组件', link: '/components/' }, 
            {
              text: '文档',
              // 这里是下拉列表展现形式。
              items: [
                { text: '2.0.0', link: '/components/2.0/' }, //外部链接
                { text: '1.0.0',link: '/components/1.0/'},
              ]
            },
            {
              text: '关于作者',
              // 这里是下拉列表展现形式。
              items: [
                { text: 'GitHub地址', link: 'https://github.com/1011cat' }, //外部链接
                { text: '个人博客',link: 'http://shotcat.com'},
                { text: '掘金账号',link: 'https://juejin.im/user/59b7940d5188257e82675bc0'}
              ]
            }        
          ],
        // 多个侧边栏设置
        sidebar:{
            // 对应的是组件页面的侧边栏
            '/components/2.0/':[
              {
                  title:'基础组件',
                  collapsable: false, //右侧侧边栏是否展开
                  children: [
                      '',
                      ['mButton', 'Button 按钮']// 对应md
                      // 'test', // 对应md
                  ]
              },
              {
                title:'基础组件1',
                collapsable: false, //右侧侧边栏是否展开
                children: [
                   
                ]
              }
            ],
            '/components/1.0/':[
              {
                  title:'基础组件',
                  collapsable: false, //右侧侧边栏是否展开
                  children: [
                      '',
                      'mButton', // 对应md
                      // 'test', // 对应md
                  ]
              },
              {
                title:'基础组件1',
                collapsable: false, //右侧侧边栏是否展开
                children: [
                   
                ]
              }
            ],
            // 对应的是组件页面的侧边栏
            '/components/':[
                {
                    title:'基础组件',
                    collapsable: false, //右侧侧边栏是否展开
                    children: [
                        '',
                        'mButton', // 对应md
                        // 'test', // 对应md
                    ]
                },
                {
                  title:'基础组件1',
                  collapsable: false, //右侧侧边栏是否展开
                  children: [
                     
                  ]
                }
            ],
            '/guide/':[
                {
                    title:'规范指南',
                    collapsable: true, //右侧侧边栏是否展开
                    children: [
                        
                    ]

                }
            ]


        },
      sidebarDepth: 1, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上
      lastUpdated: '最后更新于' // 文档更新时间：每个文件git最后提交的时间
    },

    markdown: {
        // lineNumbers: true // 代码块显示行号
    },

    plugins: [
      '@vuepress/back-to-top',
      ['@vuepress/medium-zoom',{selector: 'img'}]
    ],

    chainWebpack: (config, isServer) => {
      config.resolve.alias
        .set('@',resolve('src'))
        .set('assets',path.resolve(__dirname, '../../src/assets'))
        .set('static',resolve('static'))
        .set('utils',path.resolve(__dirname, '../../src/components/baseComponent/iview/utils'))
        .set('node_modules',path.resolve(__dirname, '../../node_modules'))
    }
  };