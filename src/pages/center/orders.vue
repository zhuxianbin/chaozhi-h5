<template>
  <div class="page">
    <van-list>
      <template v-for="item in rows">
        <van-panel class="mb-10" :key="item.id">
          <div slot="header" style="padding:5px 15px;">
            <van-row>
              <van-col span="20">
                <div style="font-size:14px;">{{item.product_name}}</div>
                <div style="font-size:12px;" class="t-gray">{{item.starttime}}</div>
              </van-col>
              <van-col span="4" class="t-right">
                <span style="font-size:12px;" v-if="item.status==0" class="t-red">{{status[item.status]}}</span>
                <span style="font-size:12px;" v-else-if="item.status==1" class="t-blue">{{status[item.status]}}</span>
                <span style="font-size:12px;" v-else-if="item.status==2" class="t-green">{{status[item.status]}}</span>
                <span style="font-size:12px;" v-else class="t-gray">{{status[item.status]}}</span>
                <div>
                  <span style="font-size:12px;">¥{{item.price/100}}</span>
                </div>
              </van-col>
            </van-row>
          </div>
          <template v-if="item.status>=0">
            <div v-if="item.sub_orders" style="padding:10px">
              <div class="t-gray mb-10 t-12">
                分期付款
              </div>
              <van-steps direction="vertical"  active-color="#f60">
                <van-step v-for="sub in item.sub_orders" :key="sub.id">
                  <van-row>
                    <van-col span="18">【{{sub.instalment_num}}/{{item.sub_orders.length}}】金额:¥{{sub.price/100}}</van-col>
                    <van-col span="6" class="t-right">
                      <van-button size="small" @click="doPay(sub)" v-if='sub.can_pay==2' type="primary">申请分期</van-button>
                      <van-button @click="doPay(sub)" v-if="sub.can_pay == 1" size="small" type="danger">支付</van-button>
                    </van-col>
                  </van-row>
                  <div class='t-12' v-if='sub.due_time'>最后付款日:{{sub.due_time}}</div>
                </van-step>
              </van-steps>
              <!-- <div class="t-center t-12">
                <van-row gutter="10">
                  <template v-for="sub in item.sub_orders">
                    <van-col span="12" :key='sub.id' class="mb-10">
                      <van-button type="primary" style="line-height:20px;" :disabled="!sub.can_pay" block plain>
                        <div>期数:{{sub.instalment_num}}/{{item.sub_orders.length}}</div>
                        <div>金额:¥{{sub.price/100}}</div>
                      </van-button>
                    </van-col>
                  </template>
                </van-row>
              </div> -->
            </div>
          </template>
          <div style="padding:10px 15px">
            <van-row>
              <van-col span="24" class="t-right">
                <!-- <van-button size="small">按钮</van-button> -->
                <template v-if="!item.is_split">
                  <van-button @click="doPay(item)" v-if="item.status == 0" size="small" type="danger">支付</van-button>
                  <van-button @click="doOption(item)" v-if="item.status<0&&!item.old" size="small" type="danger" plain>重新下单</van-button>
                </template>
              </van-col>
            </van-row>
            
          </div>
        </van-panel>
      </template>
    </van-list>
  </div>
</template>

<script>
import { List, Panel, Button, Row, Col, Step, Steps } from "vant";
import { getOrderList } from "@/utils/api";
import { baseUrl } from "@/utils/config";
import { getToken } from "@/utils/auth";
export default {
  components: {
    [List.name]: List,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Step.name]: Step,
    [Steps.name]: Steps
  },
  data() {
    return {
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
      });
    },
    doPay(item) {
      if (item.can_pay == 2) {
        const order_id = item.order_id;
        window.location.href = `${baseUrl}/api/pay/haimi/pc/${order_id}?token=${getToken()}`;
        return;
      }
      return this.$router.push({
        name: "pay",
        params: { id: item.order_id }
      });
    },
    doOption(item) {
      return this.$router.push({
        name: "pay",
        params: { id: item.product_id }
      });
    }
  },
  created() {
    this.getRows();
  }
};
</script>

<style lang='less'>
.page {
  padding: 0 0 50px;
}
</style>
