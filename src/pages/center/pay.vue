<template>
  <div class="page">
    <div class="t-gray t-sm" style='padding:.5rem;'>请确认您的订单信息，并按提示完成支付</div>
    <div class="order-info ui-list">
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单内容</div>
          <div flex-box="1">购买ACI心理咨询师课程</div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0">订单价格</div>
          <div flex-box="1">
            <span class="t-orange">13000</span>元
          </div>
        </div>
        <div class='ui-list-item' flex>
          <div class='ui-list-label' flex-box="0"></div>
          <div flex-box="1">
            <mt-button plain size="small">刷新价格</mt-button>
          </div>
        </div>
    </div>
    <div class="t-gray t-sm" style='padding:.5rem;'>支持微信、支付宝、银联在线支付</div>
    <div style='padding:1rem;background:#fff;'>
      <div class='mb-20'>
        <mt-button type="danger" size="large">进入支付页面</mt-button>
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
export default {
  data() {
    return {
      popupFail: true,
      popupSuccess: true,
      popupPaying: true
    };
  },
  methods: {},
  mounted() {
    let { id } = this.$route.query;
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
</style>