---
title: 1.0 Button 按钮
---
<!-- 标题建议最大只使用h2 即##以下  -->
![](../../.vuepress/public/favicon.jpeg)
## 基础用法
<baseComponent-codeBox title="基础用法" description="基础的按钮用法。" onlineLink="https://codepen.io/1011cat/pen/KjEOWO">
  <demon-catButton-type_catButton></demon-catButton-type_catButton>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <cat-button text="default"></cat-button>
        <cat-button text="primary" type="primary"></cat-button>
        <cat-button text="success" type="success"></cat-button>
        <cat-button text="info" type="info"></cat-button>
        <cat-button text="warning" type="warning"></cat-button>
        <cat-button text="danger" type="danger"></cat-button>
        <cat-button text="text" type="text"></cat-button>
      </div>
    </template>
    <script>
        export default {
        }
    </script>
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-apiTable
  title="Table Attributes"
  :tableBody = "tableBody"
  :tableHead = "tableHead">
</baseComponent-apiTable>

<baseComponent-star></baseComponent-star>

<Vssue title="Vssue Demo" />

<script>
  export default {
    data() {
      return {
        tableHead:`参数 | 说明 | 类型 | 可选值 | 默认值`,
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`,
          `size | 尺寸 | String | medium / small / mini | —`
        ],
      }
    },

  }
</script>

<style>
</style>