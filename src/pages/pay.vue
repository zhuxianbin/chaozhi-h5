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
    <div v-if="!isAlipayOrWechat" class="t-gray t-sm" style='padding:.5rem;'>支持微信、支付宝、银联在线支付</div>
    <div style='padding:1rem;background:#fff;'>
      <!-- <div class='mb-20'>
        <a v-if='payResult.url&&isWechat' target='_blank' :href='payResult.url' class="btn-pay mint-button mint-button--success mint-button--large">微信支付</a>
        <a v-if='payResult.url&&isAlipay' target='_blank' :href='payResult.url' class="btn-pay mint-button mint-button--primary mint-button--large">支付宝支付</a>
        <div v-if="!isAlipayOrWechat">
          <mt-button class="mb-10 mint-button--success" @click.native="doPay('wechat')"  size='large'>微信</mt-button>
          <mt-button class="mb-10" @click.native="doPay('alipay')" type='primary' size='large'>支付宝</mt-button>
          <mt-button class="mb-10" @click.native="doPay('unionpay')" type='danger' size='large'>银联</mt-button>
        </div>
      </div> -->
      <div class="mb-20 t-center">
        <div class="t-xs mb-10">请扫二维码进行支付</div>
        <img :src='payResult.qrcode' style='width:50vw;height:50vw;max-width:300px;max-height:300px;' /> 
      </div>
      <div v-if="!isAlipayOrWechat" class="t-center">
        <img src="@/assets/20180316111851.png" style='width:100%;'/>
      </div>
    </div>
    <mt-popup
      v-model="popupFail"
      popup-transition="popup-fade">
      <div class="ui-alert">
        <div class="ui-alert-title">支付提醒</div>
        <div class="ui-alert-body">
          <div flex>
            <div flex-box="0">
              <i style='font-size:2rem;margin-right:1rem;' class="iconfont icon-tishi t-red"></i>
            </div>
            <div flex-box="1">
              <div class="mb-10">支付失败,请点击重新支付</div>
              <div class="mb-20">订单信息:剑桥英语第一次</div>
            </div>
          </div>
          <div flex class="mb-10">
            <div flex-box="1" style='margin-right:.5rem;'>
              <mt-button type="danger" style='width:100%;'>继续支付</mt-button>
            </div>
            <div flex-box="1">
              <mt-button type="default" style='width:100%;'>返回商城</mt-button>
            </div>
          </div>
          
          <div class="t-center t-xs">
              支付遇到问题:请联系010-5165777
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      popupFail: false,
      popupSuccess: true,
      popupPaying: true,
      product: {},
      orderId: "",
      price: 0,
      productId: "",
      payResult: {},
      isAlipayOrWechat: false,
      isWechat: false,
      isAlipay: false
    };
  },
  methods: {
    ...mapActions({
      getPayInfo: "getPayInfo",
      refreshPrice: "refreshPrice",
      pay: "pay",
      umsH5: "umsH5"
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
        channel: "ums"
      }).then(data => {
        this.payResult = data;
      });
    },
    doPay(payType) {
      if (this.isAlipayOrWechat) {
        window.location.href = this.payResult.url;
      } else {
        window.location.href = `http://aci-api.chaozhiedu.com/api/pay/umsH5/${
          this.orderId
        }/${payType}`;
        // this.umsH5({ orderId: this.orderId, type: payType }).then(res => {
        //   console.log(res);
        // });
      }

      //能进入此处,说明用户不是双端访问者
      //       与子偕老:
      // aci-api.chaozhiedu.com/api/pay/umsH5/{token}/{type}
      // 与子偕老:

      // type 的取值 alipay wechat
    }
  },
  mounted() {
    //console.log(this.$TOOLS);
    this.isAlipayOrWechat = this.$TOOLS.isAlipayOrWechat();
    this.isAlipay = this.$TOOLS.isAlipay();
    this.isWechat = this.$TOOLS.isWechat();

    let { id: product_id } = this.$route.query;
    this.productId = product_id;
    this.getPayInfo({ product_id }).then(
      ({ code, msg, price, token, product }) => {
        this.price = price;
        this.orderId = token;
        this.product = product;
        //this.isAlipayOrWechat && this.getQRcode();
        this.getQRcode();
      }
    );
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