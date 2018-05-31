<template>
  <div class="page">
    <div class="t-gray t-sm" style='padding:.5rem;'>请确认您的订单信息，并按提示完成支付</div>
    <div class="order-info ui-list">
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单内容</div>
          <div flex-box="1">购买{{product.name}}</div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单价格</div>
          <div flex-box="1">
            <span class="t-orange">{{price}}</span>元
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
      <mt-tab-item id="wechat">微信</mt-tab-item>
      <mt-tab-item id="alipay">支付宝</mt-tab-item>
    </mt-navbar>
    <div v-if="payType=='wechat'" style='padding:1rem 2rem;background:#fff;'>
      <div class="mb-20 t-center">
        <!-- <div class="t-xs mb-10">请扫二维码进行支付</div>
        <img :src='qrcode' style='width:50vw;height:50vw;max-width:300px;max-height:300px;' />
        <div class="t-xs">*如遇到支付问题,请截屏此页面,从微信扫一扫界面,打开相册选择截屏图片进行支付</div> -->
        <!-- <div class="mb-20">或</div> -->
        <mt-button @click.native='jumpWechatPay' size="large" type="primary">去支付</mt-button>
      </div>
    </div>
    <div v-if='payType=="alipay"' class="t-center" style='padding:30px;'>
      <div v-html='payResult.form'></div>
      <mt-button class="mb-10" @click.native='jumpAliPage' size="large" type="primary">去支付</mt-button>
      <div class='t-xs t-gray'>*如果您在微信内打开此页面,请从浏览器打开</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import QRCode from "qrcode";
import storage from "@/utils/storage";
import { weixinAuth } from "@/utils/config";
import api from "@/utils/api";

let timer = 0;
export default {
  data() {
    return {
      isAlipayOrWechat: "",
      popupFail: false,
      popupSuccess: true,
      popupPaying: true,
      product: {},
      orderId: "",
      price: 0,
      productId: "",
      payResult: {},
      payType: "wechat",
      options: [
        {
          label: "微信",
          value: "wechat"
        },
        {
          label: "支付宝",
          value: "alipay"
        }
      ],
      qrcode: "",
      qrtext: ""
    };
  },
  watch: {
    payType() {
      this.getQRcode();
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapActions({
      getPayInfo: "getPayInfo",
      refreshPrice: "refreshPrice",
      _getPayResult: "getPayResult",
      pay: "pay",
      _getUnifiedOrder: "getUnifiedOrder",
      _getUserInfo: "getUserInfo"
      //umsH5: "umsH5"
    }),
    doRefreshPrice() {
      this.refreshPrice(this.orderId).then(({ code, data, msg }) => {
        this.$toast(msg);
        if (code == 200) {
          this.price = data;
          this.getQRcode();
        }
      });
    },
    getQRcode() {
      this.pay({
        product_id: this.productId,
        channel: this.payType
      }).then(data => {
        if (data.code == 202) {
          return this.$messagebox.alert("您已经购买该商品").then(() => {
            this.$router.back();
          });
        }

        this.orderId = data.token;
        this.payResult = data;
        this.getPayResult(data.token);
        this.qrcode = "";
        // this.qrtext = data.qrtext;
        // data.qrtext &&
        //   QRCode.toDataURL(data.qrtext, { errorCorrectionLevel: "H" }).then(
        //     url => {
        //       this.qrcode = url;
        //     }
        //   );
      });
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
    jumpAliPage() {
      //console.log(document.getElementById("alipaysubmit"));
      document.getElementById("alipaysubmit").target = "_blank";
      document.forms["alipaysubmit"].submit();
    },
    jumpWechatPay() {
      this.initWeiXin([], wx => {
        this._getUnifiedOrder({
          orderId: this.payResult.token,
          trade_type: "JSAPI"
        }).then(res => {
          if (res.code == 200) {
            wx.chooseWXPay({
              timestamp: 1414723227,
              nonceStr: "noncestr",
              package:
                "addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D",
              signType: "SHA1", // 注意：新版支付接口使用 MD5 加密
              paySign: "bd5b1933cda6e9548862944836a9b52e8c9a2b69"
            });
          }
        });
      });
    },
    getOpenId() {
      let { token } = storage.get("userToken");
      this._getUserInfo().then(res => {
        if (!res.user.openid) {
          this.bindWeiXinOpenId(window.location.href);
        }
      });
    },
    getWeiXinCode() {}
  },
  mounted() {
    let { id: product_id } = this.$route.query;
    this.productId = product_id;
    this.getPayInfo({ product_id }).then(
      ({ code, msg, price, token, product }) => {
        this.price = price;
        // this.orderId = token;
        this.product = product;
      }
    );

    product_id && this.getQRcode();
    this.getOpenId();
  },
  beforeDestroy() {
    clearTimeout(timer);
  }
};
</script>
<style lang="less" scoped>
.page {
  padding: 40px 0 50px;
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