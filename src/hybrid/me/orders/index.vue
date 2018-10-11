<template>
  <van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
>
    <van-panel v-for="item in list" :key="item" :title="'订单号:' + '182739273910934'" status="状态">
      <div class='padd'>
        <van-row gutter="10">
          <van-col span="8">
            <div>
              <img class='img-r' src='https://aci-api.chaozhiedu.com/api/file/31389'>
            </div>
          </van-col>
          <van-col span="16">
            <div class='t-14'>ACI注册国际心理咨询师-零基础特招班</div>
            <div class='t-16 t-orange'>￥4000</div>
            <div class='t-12'>2018-07-27 21:05:49</div>
          </van-col>
        </van-row>
      </div>
      <div slot="footer">
        <div class='t-right'>
          <van-button size="small">电子收据</van-button>
          <van-button size="small" type="warning">学员协议</van-button>
          <van-button size="small" type="danger">去支付</van-button>
          <van-button size="small" type="primary">重新下单</van-button>
        </div>
      </div>
    </van-panel>
  </van-list>
</template>

<script>
import { List, Panel, Button, Row, Col } from "vant";
export default {
  components: {
    [List.name]: List,
    [Button.name]: Button,
    [Panel.name]: Panel,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.van-panel {
  margin-top: 0.5rem;
}
.padd {
  padding: 10px 15px;
}
</style>

