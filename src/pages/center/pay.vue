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
    <div class="t-gray t-sm" style='padding:.5rem;'>支持微信、支付宝、银联在线支付</div>
    <div style='padding:1rem;background:#fff;'>
      <div class='mb-20'>
        <a v-if='payResult.url' target='_blank' :href='payResult.url' class="btn-pay mint-button mint-button--danger mint-button--large">进入支付页面</a>
      </div>
      <div class="t-center">
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
      payResult: {}
    };
  },
  methods: {
    ...mapActions({
      getPayInfo: "getPayInfo",
      refreshPrice: "refreshPrice",
      pay: "pay"
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
        console.log(data);
        this.payResult = data;
      });
    }
  },
  mounted() {
    let { id: product_id } = this.$route.query;
    this.productId = product_id;
    this.getPayInfo({ product_id }).then(
      ({ code, msg, price, token, product }) => {
        this.price = price;
        this.orderId = token;
        this.product = product;
        this.getQRcode();
      }
    );
  }
};
</script>
<style lang="less" scoped>
.page {
  padding: 40px 0 50px;
  height: 100vh;
  box-sizing: border-box;
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
.btn-pay{
  line-height: 41px;
  text-decoration:none;
}
</style>