<template>
  <div class='page'>
    <div class='panel-title'>
      选择反馈类型
    </div>
    <div class='t-center card'>
      <van-button plain @click='params.type=1' size='small' :type="params.type==1?'danger':'default'">产品建议</van-button>
      <van-button plain @click='params.type=2' size='small' :type="params.type==2?'danger':'default'">使用问题</van-button>
      <van-button plain @click='params.type=3' size='small' :type="params.type==3?'danger':'default'">其他问题</van-button>
    </div>
    <div class='panel-title'>
      详细情况
    </div>
    <van-cell-group>
      <van-field
        v-model="params.message"
        type="textarea"
        placeholder="请输入留言"
        rows="5"
        autosize
      />
    </van-cell-group>
    <div class='panel-title'>
      联系方式
    </div>
    <van-cell-group>
      <van-field v-model="params.contact" placeholder="请输入您的联系方式QQ/手机号码" />
    </van-cell-group>
    <div class='pf pf-b'>
      <van-button type='danger' square size="large">提交反馈</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Field } from "vant";
export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      params: {
        type: 1,
        message: "",
        contact: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
.panel-title {
  padding: 5px 15px;
  font-size: 14px;
}
.card {
  background: #fff;
  padding: 20px;
}
.page {
  position: relative;
  height: 100vh;
}
</style>
