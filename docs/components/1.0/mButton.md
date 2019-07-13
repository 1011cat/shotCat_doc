## 1.0 Button 按钮

---
<baseComponent-goTop></baseComponent-goTop>
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
        export default {{}
        }
    </script>
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-apiTable
  title="Table Attributes"
  :apiData = "apiData">
</baseComponent-apiTable>

<script>
  export default {
    data() {
      return {
        apiData: [{
          params: 'size',
          description: '尺寸',
          type: 'string',
          option: 'medium / small / mini',
          default: '-'
        }]
      }
    },

  }
</script>

<!-- | 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | String | medium / small / mini | — | -->


<style>
/* table th {
	width: 20%;
  color: red;
}

table td {
	width: 20%;
  color: red;
} */

/* table th:first-of-type {
	width: 100px;
  color: red;
} */
</style>