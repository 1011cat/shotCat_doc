---
title: 2.0 Button 按钮
---
<!-- 标题建议最大只使用h2 即##以下  -->
![](../../.vuepress/public/logo.png)
## 基础用法
<baseComponent-codeBox title="基础用法" description="基础的按钮用法。" onlineLink="https://codepen.io/1011cat/pen/KjEOWO">
  <demon-mButton-type_mButton></demon-mButton-type_mButton>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <m-button text="Default"></m-button>
        <m-button text="Primary" type="primary"></m-button>
        <m-button text="Dashed" type="dashed"></m-button>
        <m-button text="Text" type="text"></m-button>
        <m-button text="Info" type="info"></m-button>
        <m-button text="Success" type="success"></m-button>
        <m-button text="Warning" type="warning"></m-button>
        <m-button text="Error" type="error"></m-button>
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