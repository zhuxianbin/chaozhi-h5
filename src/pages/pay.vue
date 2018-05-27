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
    <div v-if="!!qrcode" style='padding:1rem;background:#fff;'>
      <div class="mb-20 t-center">
        <div class="t-xs mb-10">请扫二维码进行支付</div>
        <img :src='qrcode' style='width:50vw;height:50vw;max-width:300px;max-height:300px;' /> 
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
import { mapActions } from "vuex";
import QRCode from "qrcode";
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
      qrcode: ""
    };
  },
  watch: {
    payType() {
      this.getQRcode();
    }
  },
  methods: {
    ...mapActions({
      getPayInfo: "getPayInfo",
      refreshPrice: "refreshPrice",
      _getPayResult: "getPayResult",
      pay: "pay"
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
        data.qrtext &&
          QRCode.toDataURL(data.qrtext, { errorCorrectionLevel: "H" }).then(
            url => {
              this.qrcode = url;
            }
          );
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
    }
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