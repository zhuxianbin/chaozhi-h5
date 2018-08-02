<template>
  <div class="page">
    <div class="t-gray t-sm" style='padding:.5rem;'>请确认您的订单信息，并按提示完成支付</div>
    <div class="order-info ui-list">
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单内容</div>
          <div flex-box="1" v-if="payData">购买{{payData.product_name}}</div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单价格</div>
          <div flex-box="1">
            <span class="t-orange" v-if="payData">{{(payData.price/100).toFixed(2)}}</span>元
          </div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0"></div>
          <div flex-box="1">
            <mt-button plain size="small" @click.native="doRefreshPrice">刷新价格</mt-button>
          </div>
        </div>
    </div>

    <mt-navbar v-model="payType">
      <mt-tab-item :id="wechatType">微信</mt-tab-item>
      <mt-tab-item id="alipay">支付宝</mt-tab-item>
    </mt-navbar>
    
    <div v-if='payType=="alipay"' style='padding:1rem 2rem;background:#fff;'>
      <div class="mb-20 t-center">
        <div v-html='alipay_form'></div>
        <mt-button class="mb-10" @click.native='payOrder("alipay")' size="large" type="primary">去支付</mt-button>
        <div class='t-xs t-gray'>*请从浏览器打开此页面</div>
      </div>
    </div>
    <div v-if='wechatType==payType' style='padding:1rem 2rem;background:#fff;'>
      <div class="mb-20 t-center">
        <mt-button @click.native='payOrder("wechat")' size="large" type="primary">去支付</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import QRCode from "qrcode";
import storage from "@/utils/storage";
import { weixinAuth } from "@/utils/config";
import { orderPay, getOrder } from "@/utils/api";
import { Dialog } from "vant";
import {
  getToken,
  removeToken
} from "@/utils/auth"
let timer = 0;
export default {
  data() {
    const wechatType = this.$tools.isWechat() ? "wechat_jsapi" : "wechat_h5";
    return {
      wechatType,
      isAlipayOrWechat: "",
      popupFail: false,
      popupSuccess: true,
      popupPaying: true,
      product: {},
      order_id: "",
      product_id: "",
      payResult: {},
      payData: null,
      payType: wechatType,
      options: [
        {
          label: "微信",
          value: wechatType
        },
        {
          label: "支付宝",
          value: "alipay"
        }
      ],
      qrcode: "",
      qrtext: "",
      wxconfig: {},
      mweb_url: "",
      alipay_form: ""
    };
  },
  watch: {
    payType(val) {
      this.getOrderPay();
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    doRefreshPrice() {
      this.getOrderPay();
    },
    payOrder(type) {
      if (type == "wechat") {
        if (this.$tools.isWechat()) {
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
      this._getPayResult({
        token
      }).then(({ code, msg }) => {
        if (code != 200) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            this.getPayResult(token);
          }, 5000);
          return false;
        }
        return this.$messagebox.alert("支付完成,前往查看").then(() => {
          this.$router.push("/courseList");
        });
      });
    },
    bindOpenId(isGet) {
      if (this.$tools.isWechat()) {
        if (isGet <= 0) {
          //console.log(1111111);
          let token = getToken();// storage.get("userToken");
          let redirect_uri = encodeURIComponent(
            window.location.href + `/${+isGet + 1}`
          );
          let href = `${weixinAuth}/api/weixinauth?token=${token}&url=${redirect_uri}`;
          window.location.href = href;
        }
      }
    },
    getOrderPay() {
      // console.log({
      //   order_id: this.order_id,
      //   channel: this.payType
      // });

      this.order_id &&
        orderPay({
          order_id: this.order_id,
          channel: this.payType
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
    getOrderByProductId() {
      this.product_id &&
        getOrder({ product_id: this.product_id }).then(data => {
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
          this.order_id = data.order_id;
          this.getOrderPay();
        });
    }
  },
  created() {
    let { id, isGet = 0 } = this.$route.params;
    id = "" + id;
    this.bindOpenId(isGet);
    if (id.length > 0 && id.length < 17) {
      this.product_id = id;
      //console.log(id);
      return this.getOrderByProductId();
    }
    if (id.length >= 17) {
      this.order_id = id;
      return this.getOrderPay();
    }

    // this.productId = product_id;
    // this.getPayInfo({ product_id }).then(
    //   ({ code, msg, price, token, product }) => {
    //     if (code == 200) {
    //       this.price = price;
    //       // this.orderId = token;
    //       this.product = product;
    //     }
    //   }
    // );

    // product_id && this.getOrder();
  },
  beforeDestroy() {
    clearTimeout(timer);
  }
};
</script>
<style lang="less" scoped>
.page {
  padding: 0 0 50px;
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