<template>
  <van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
>
    <van-panel v-for="item in rows" :key="item.id" :title="'ID:' + item.order_id" status="状态">
      <div class='padd'>
        <van-row gutter="10">
          <van-col span="8">
            <div>
              <img class='img-r' src='https://aci-api.chaozhiedu.com/api/file/31389'>
            </div>
          </van-col>
          <van-col span="16">
            <div class='t-14'>{{item.product_name}}</div>
            <div class='t-16 t-orange'>{{item.price|money(0.01)}}</div>
            <div class='t-12'>{{item.starttime}}</div>
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
// import { List, Panel, Button, Row, Col, Step, Steps } from "vant";
import { getOrderList } from "@/utils/api";
import { baseUrl } from "@/utils/config";
import { getToken } from "@/utils/auth";
export default {
  // components: {
  //   [List.name]: List,
  //   [Panel.name]: Panel,
  //   [Button.name]: Button,
  //   [Row.name]: Row,
  //   [Col.name]: Col,
  //   [Step.name]: Step,
  //   [Steps.name]: Steps
  // },
  data() {
    return {
      loading: false,
      finished: true,
      dialog: {
        show: false,
        data: []
      },
      rows: [],
      status: {
        "-2": "订单超时",
        "-1": "订单取消",
        "0": "待支付",
        "1": "部分支付",
        "2": "支付完成"
      }
    };
  },
  methods: {
    getRows() {
      getOrderList().then(({ code, data }) => {
        let temp = [];
        this.rows = data.map(item => {
          if (temp.indexOf(item.product_id) < 0) {
            temp.push(item.product_id);
          } else {
            item.old = true;
          }
          return item;
        });

        // if(this.rows.length>=this.)
      });
    },
    onLoad() {},
    doPay(item) {
      if (item.can_pay == 2) {
        const order_id = item.order_id;
        window.location.href = `${baseUrl}/api/pay/haimi/h5/${order_id}?token=${getToken()}`;
        return;
      }
      return this.$router.push({
        name: "pay",
        query: { order_id: item.order_id }
      });
    },
    doOption(item) {
      return this.$router.push({
        name: "pay",
        query: { product_id: item.product_id }
      });
    }
  },
  created() {
    this.getRows();
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

