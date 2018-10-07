<template>
  <div class="page">
    <div class="t-gray t-sm" style='padding:.5rem;'>请确认您的订单信息，并按提示完成支付</div>
    <div class="order-info ui-list">
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单内容</div>
          <div flex-box="1" v-if="order_info">购买{{order_info.product_name}}</div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单价格</div>
          <div flex-box="1">
            <span class="t-orange" v-if="order_info">{{(order_info.price/100).toFixed(2)}}</span>元
          </div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0"></div>
          <div flex-box="1">
            <van-button plain size="small" @click="doRefreshPrice">刷新价格</van-button>
          </div>
        </div>
    </div>
    <van-tabs color='#26a2ff' @change="getOrderPay" v-model="payType">
      <van-tab v-if='pay_info.wechat.status' title="微信"></van-tab>
      <van-tab v-if='pay_info.alipay.status' title="支付宝"></van-tab>
      <van-tab v-if='pay_info.haimi.status' title="海米分期"></van-tab>
    </van-tabs>
    <!-- <mt-navbar v-model="payType">
      <mt-tab-item v-if='pay_info.wechat.status' :id="wechatType">微信</mt-tab-item>
      <mt-tab-item v-if='pay_info.alipay.status' id="alipay">支付宝</mt-tab-item>
      <mt-tab-item v-if='pay_info.haimi.status' id="haimi">海米分期</mt-tab-item>
    </mt-navbar> -->
    <div v-if='0==payType' style='padding:1rem 2rem;background:#fff;'>
      <div class="mb-20 t-center">
        <mt-button @click.native='payOrder("wechat")' size="large" type="primary">去支付</mt-button>
      </div>
    </div>
    <div v-if='1==payType' style='padding:1rem 2rem;background:#fff;'>
      <div class="mb-20 t-center">
        <div v-html='alipay_form'></div>
        <mt-button class="mb-10" v-if='!isWeixin' @click.native='payOrder("alipay")' size="large" type="primary">去支付</mt-button>
        <div class='t-xs t-gray'>*如需支付宝支付，请使用浏览器访问超职</div>
      </div>
    </div>
    <div v-if='2==payType' style='padding:.2rem 0 1rem 0;background:#fff;'>
      <van-notice-bar class='mb-10' :scrollable="false">
        注:海米审核后，请在24个小时内完成首付的支付即可。
      </van-notice-bar>
      <div>
        <van-tabs color='#26a2ff' type='card' v-model="haimiParams.term">
          <van-tab v-for='item in pay_info.haimi.term' :key='"qi"+item' :title="item+'期'"></van-tab>
        </van-tabs>
      </div>
      <div class='t-12 t-center mt-10 mb-10'>
        首付金额为订单金额的10%，剩余金额进行分期。
      </div>
      <van-cell-group>
        <van-field label='真实姓名'
          v-model="haimiParams.name" placeholder="请输入真实姓名" />
        <van-field label='身份证号' v-model="haimiParams.identity" placeholder="请输入身份证号" />
        <van-field label='居住地' v-model="haimiParams.address" placeholder="请输入居住地" />
      </van-cell-group>
      <div style='padding:0 20px;' class='mt-20'>
        <van-button block @click='doHaimiPay' type='primary'>立即申请</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import QRCode from "qrcode";
import storage from "@/utils/storage";
import { weixinAuth } from "@/utils/config";
import { orderPay, getOrder, orderPaybyHaimi, getPayResult } from "@/utils/api";
import {
  Dialog,
  Toast,
  Field,
  CellGroup,
  Tab,
  Tabs,
  Button,
  NoticeBar
} from "vant";
import { getToken, removeToken } from "@/utils/auth";
import { isWeixin } from "@/utils/tools";
let timer = 0;
export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [NoticeBar.name]: NoticeBar
  },
  data() {
    const wechatType = isWeixin ? "wechat_jsapi" : "wechat_h5";
    return {
      isWeixin,
      wechatType,
      isAlipayOrWechat: "",
      popupFail: false,
      popupSuccess: true,
      popupPaying: true,
      // product: {},
      order_id: "",
      product_id: "",
      payResult: {},
      // payData: null,
      wechatType,
      payType: 0,
      payTypes: [wechatType, "alipay", "haimi"],
      qrcode: "",
      qrtext: "",
      wxconfig: {},
      mweb_url: "",
      alipay_form: "",
      pay_info: {},
      haimiParams: {
        term: 0,
        order_id: "",
        type: "h5",
        name: "",
        address: "",
        // pcaArray: [],
        identity: ""
      }
    };
  },
  // watch: {
  //   payType(val) {
  //     this.getOrderPay();
  //   }
  // },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    doRefreshPrice() {
      // this.getOrderPay();
      window.location.reload();
    },
    doHaimiPay() {
      //姓名
      if (!this.haimiParams.name) {
        return Toast.fail("请输入姓名");
      }
      //身份证
      if (!this.haimiParams.identity) {
        return Toast.fail("请输入身份证");
      }
      //地址
      if (!this.haimiParams.address) {
        return Toast.fail("请输入地址");
      }

      orderPaybyHaimi({
        ...this.haimiParams,
        order_id: this.order_id,
        term: this.pay_info.haimi.term[this.haimiParams.term]
        // address: `${this.forms.pcaArray.join("")}${this.forms.address}`
      }).then(({ pay_url }) => {
        // this.openNew(pay_url);
        window.location.href = pay_url;
        // window.open(pay_url);

        // Dialog.confirm({
        //   title: "温馨提示",
        //   message: "您已经提交了海米分期，如果想要了解详情，请进入“订单管理”"
        // })
        //   .then(() => {
        //     // this.$router.push("/");
        //     this.$router.push({
        //       name: "orders"
        //     });
        //   })
        //   .catch(() => {
        //     // this.$router.push("/");
        //     this.$router.push({
        //       name: "index"
        //     });
        //   });
      });
    },
    payOrder(type) {
      if (type == "wechat") {
        if (isWeixin) {
          this.weixinPay(this.wxconfig, () => {
            return this.$messagebox.alert("购买成功").then(() => {
              this.$router.push("/male");
            });
          });
        } else {
          window.location.href = this.mweb_url;
        }
      } else if (type == "alipay") {
        document.forms["alipaysubmit"].submit();
      }
    },
    getPayResult(token) {
      getPayResult({
        token
      }).then(({ code, msg }) => {
        if (code != 200) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            this.getPayResult(token);
          }, 5000);
          return false;
        }
        return Dialog.alert({
          title: "温馨提示",
          message: "支付完成,前往查看"
        }).then(() => {
          this.$router.push("/courseList");
        });
      });
    },

    getOrderPay() {
      if (this.payType == 2) {
        return;
      }

      orderPay({
        order_id: this.order_id,
        channel: this.payTypes[this.payType]
      }).then(data => {
        if (data.code == 210) {
          return Dialog.alert({
            title: "温馨提示",
            message:
              "您的订单已经被分期，请到【个人中心】的【我的课程订单】中进行付款。"
          }).then(() => {
            this.$router.push({
              path: "/orders"
            });
          });
        }
        this.wxconfig = data.config;
        this.payData = data.order_info;
        this.alipay_form = data.form;
        this.mweb_url = data.mweb_url;
      });
    },
    getOrderInfo(params) {
      // this.product_id &&
      getOrder(params).then(data => {
        if (data.code == 202) {
          return Dialog.alert({
            title: "温馨提示",
            message: "您已经购买过该课程,请勿重复购买"
          }).then(() => {
            this.$router.push({
              path: "/male"
            });
          });
        }
        if (data.code == 210) {
          return Dialog.alert({
            title: "温馨提示",
            message:
              "您的订单已经被分期，请到【个人中心】的【我的课程订单】中进行付款。"
          }).then(() => {
            this.$router.push({
              path: "/orders"
            });
          });
        }

        if (data.code == 220) {
          return window.open(
            `${baseUrl}/api/pay/haimi/pc/${this.order_id}?token=${getToken()}`
          );
        }

        if (data.code == 230) {
          this.status.isFree = true;
          return false;
        }

        this.order_id = data.order_id;
        this.pay_info = data.pay_info;
        this.order_info = data.order_info;
        this.getPayResult(this.order_id);
        this.getOrderPay();
      });
    }
  },
  created() {
    let { product_id, order_id } = this.$route.query;

    if (product_id || order_id) {
      this.product_id = product_id;
      this.order_id = order_id;

      return this.getOrderInfo({
        product_id,
        order_id
      });
    }

    this.$router.push({
      name: "male"
    });
  },
  beforeDestroy() {
    clearTimeout(timer);
  }
};
</script>
<style lang="less" scoped>
.page {
  padding: 0 0 50px;
  box-sizing: border-box;
  min-height: 100vh;
}
.order-info {
  background: #fff;
  padding: 0.5rem;
}

.ui-list-item {
  margin-bottom: 0.5rem;
  .ui-list-label {
    color: #666;
    width: 3.2rem;
  }
}
.btn-pay {
  line-height: 41px;
  text-decoration: none;
}
</style>