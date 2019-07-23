// catButton 的type属性 示例
<template>
  <!-- 注意这里代码必须再包裹一层div，否则会解析报错 -->
  <div>
    <cat-button text="default"></cat-button>
    <cat-button text="primary"
                type="primary"></cat-button>
    <cat-button text="success"
                type="success"></cat-button>
    <cat-button text="info"
                type="info"></cat-button>
    <cat-button text="warning"
                type="warning"></cat-button>
    <cat-button text="danger"
                type="danger"></cat-button>
    <cat-button text="text"
                type="text"></cat-button>
  </div>
</template>
<script>
export default {
}

// 有时如果修改了示例代码，需要到对应md中同步修改展示代码，这样不仅麻烦而且有时会忘记同步修改
// 为了避免这种情况，可以加上一个对外输出展示代码（字符串形式）。在对应的md中引入就行，这里就是catButton.md

export let demo_type_catButton = `
  <div>
    <cat-button text="default"></cat-button>
    <cat-button text="primary"
                type="primary"></cat-button>
    <cat-button text="success"
                type="success"></cat-button>
    <cat-button text="info"
                type="info"></cat-button>
    <cat-button text="warning"
                type="warning"></cat-button>
    <cat-button text="danger"
                type="danger"></cat-button>
    <cat-button text="text"
                type="text"></cat-button>
  </div>
`
</script>



