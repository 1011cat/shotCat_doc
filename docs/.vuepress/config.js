// 很多时候，我们引入自己的组件库，路径是不对的，
//这时就需要引入path，并在后面的chainWebpack进行配置
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, '../../', dir)
// }


// -------------------！！！重要！！！！-----------------
// 为了更好的理解，以下所有配置，注释，须配合查看页面实际效果！

module.exports = {
    title: 'shotCat_doc', //标题
    description: '开箱即用的组件库文档', //描述
    base: '/', //基本url
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ['link', { rel: 'icon', href: '/favicon.jpeg' }], // 增加一个自定义的 favicon
    ],
    // dest: './dist', //打包位置
    port: 6868, //端口号 谐音流弊流弊
    
    //主题配置
    themeConfig: {
      //顶部导航栏配置
      nav: [
          { text: '主页', link: '/' },  // 内部链接 以docs为根目录
          { text: '使用说明', link: '/guide/introduction' }, 
          {
            text: '文档',
            // 这里是下拉列表展现形式。
            items: [
              { text: '2.0.0', link: '/components/2.0/catButton' },
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
      // 这里使用的是多个侧边栏设置
      sidebar:{
          // 如果你不需要文档版本功能，只需去掉2.0，1.0文件夹，将md文件直接放在components文件夹下
          '/components/2.0/':[
            {
              title: '基础组件',   // 必要的
              path: '', //如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton' 
              collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
              // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
              children: [
                {
                  title:'Button 按钮',
                  path: 'catButton',
                }
              ]
            },
            {
              title: '基础组件1',
              path: './' //和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
            },
          ],
          '/components/1.0/':[
            {
              title: '基础组件',
              path: '',      
              collapsable: false, 
              children: [
                {
                  title:'Button 按钮',
                  path: 'catButton'
                }
              ]
            }
          ],
          '/guide/':[
            {
              title:'使用说明',
              collapsable: false,
              children: [
                {
                  title:'简介',
                  path: 'introduction',
                  collapsable: false, 
                },
                {
                  title:'快速上手',
                  path: 'quickStart',
                  collapsable: false, 
                },
              ]
            }
          ]
        },
      sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
      lastUpdated: '最后更新于' // 文档更新时间：每个文件git最后提交的时间
    },

    markdown: {
        // lineNumbers: true // 代码块显示行号
    },

    plugins: [
      '@vuepress/back-to-top',
      ['@vuepress/medium-zoom',{selector: 'img'}],
      ['@vssue/vuepress-plugin-vssue',{
        // 设置 `platform` 而不是 `api`
        platform: 'github',

        // 其他的 Vssue 配置
        owner: '1011cat',
        repo: 'shotCat_doc',
        clientId: '8eb502d1ef7c8a588832',
        clientSecret: 'd7c87b1f07e3c95e4d95479329b1d910a1cdbabc',
        locale: 'zh',
        baseURL: 'https://github.com'}]
    ]


    // vuepress里修改webpack配置，使用的是chainWebpack进行链式调用
    // 具体使用可以参考我这个例子和 https://github.com/neutrinojs/webpack-chain/tree/v5
    // chainWebpack: (config, isServer) => {
    //   config.resolve.alias
    //     .set('@',resolve('src'))
    // }
  };