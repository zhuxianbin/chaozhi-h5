<template>
  <div class="page">
    <div class="t-gray t-sm" style='padding:.5rem;'>请确认您的订单信息，并按提示完成支付</div>
    <div class="order-info ui-list">
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单内容</div>
          <div flex-box="1">支付ACI注册国际心理咨询师培训考试报名费</div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单价格</div>
          <div flex-box="1">
            <span class="t-orange">{{price}}</span>元
          </div>
        </div>
        <!-- <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0"></div>
          <div flex-box="1">
            <mt-button plain size="small" @click.native="doRefreshPrice">刷新价格</mt-button>
          </div>
        </div> -->
    </div>
    <!-- <div v-if="!isAlipayOrWechat" class="t-gray t-sm" style='padding:.5rem;'>支持微信、支付宝、银联在线支付</div> -->
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
        <img :src='qrcode' style='width:50vw;height:50vw;max-width:300px;max-height:300px;' /> 
      </div>
      <!-- <div v-if="!isAlipayOrWechat" class="t-center">
        <img src="@/assets/20180316111851.png" style='width:100%;'/>
      </div> -->
    </div>
    <!-- <mt-popup
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
    </mt-popup> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
let timer = 0;
export default {
  name: "paySiginUp",
  data() {
    return {
      qrcode: "",
      price: ""
    };
  },
  methods: {
    ...mapActions({
      vuex_paySingup: "paySingup",
      vuex_getSingupPayInfo: "getSingupPayInfo"
    }),
    paySingup() {
      //获取支付报名费订单
      this.vuex_paySingup({}).then(({ code, msg, qrcode, price }) => {
        console.log(code, msg);
        this.qrcode = qrcode;
        this.price = price.toFixed(2);
      });
    },
    getPayInfo() {
      //获取支付报名费订单
      this.vuex_getSingupPayInfo({}).then(({ code, msg, qrcode }) => {
        if (code == 200) {
          this.$messagebox.alert("支付成功,立即填写资料").then(() => {
            this.$router.push("./info");
          });
        }
      });
    }
  },
  mounted() {
    this.paySingup();
    timer = setInterval(this.getPayInfo, 6180);
  },
  destroyed() {
    console.log("destroyed");
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