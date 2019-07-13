# Button 按钮
---
## 1.0
<baseComponent-goTop></baseComponent-goTop>
<baseComponent-codeBox title="按钮类型" description="按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。通过设置type为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。" onlineLink="https://codepen.io/1011cat/pen/KjEOWO">
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

<baseComponent-codeBox title="图标按钮" description="通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。">
  <demon-mButton-icon_mButton></demon-mButton-icon_mButton>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <m-button text="" icon="ios-search" ></m-button>
        <m-button text="Primary" type="primary" icon="ios-search" ></m-button>
        <m-button text="Dashed" type="dashed" icon="ios-search"></m-button>
        <m-button text="Text" type="text" icon="ios-search"></m-button>
        <m-button text="Info" type="info" icon="ios-search"></m-button>
        <m-button text="Success" type="success" icon="ios-search"></m-button>
        <m-button text="Warning" type="warning" icon="ios-search"></m-button>
        <m-button text="Error" type="error" icon="ios-search"></m-button>
    </template>
    <script>
        export default {
        }
    </script>
  </highlight-code>
</baseComponent-codeBox>

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置 | String | default |
| ghost | 幽灵属性，使按钮背景透明 | Boolean | false |
| size | 按钮大小，可选值为`large`、`small`、`default`或者不设置 | String | default |
| shape | 按钮形状，可选值为`circle`或者不设置 | String | - |
| long | 开启后，按钮的长度为 100% | Boolean | false |
| html-type | 设置`button`原生的`type`，可选值为`button`、`submit`、`reset` | String | button |
| disabled | 设置按钮为禁用状态 | Boolean | false |
| loading | 设置按钮为加载中状态 | Boolean | false |
| icon | 设置按钮的图标类型 | String | - |
| custom-icon | 设置按钮的自定义图标 | String | - |
| to | 跳转的链接，支持 vue-router 对象 | String | Object | - |
| replace | 路由跳转时，开启 replace 将不会向 history 添加新记录 | Boolean | false |
| target | 相当于 a 链接的 target 属性 | String | _self |
| append ^3.4.0^ | 同 vue-router append | Boolean | false |

<style>
table th:first-of-type {
	width: 100px;
  color: red;
}
</style>