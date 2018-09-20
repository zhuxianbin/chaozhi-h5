<template>
  <!-- 优惠券列表 -->
  <van-coupon-list
    :show-exchange-bar="false"
    :show-close-button="false"
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</template>

<script>
import { CouponList } from "vant";
export default {
  components: {
    [CouponList.name]: CouponList
  },
  data() {
    return {
      coupons: [],
      chosenCoupon: -1,
      disabledCoupons:[]
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
      this.disabledCoupons.push(coupon);
    }
  },
  created() {
    const coupon = {
      available: 1,
      discount: 0,
      denominations: 150,
      originCondition: 0,
      reason: "",
      value: 150,
      name: "优惠券名称",
      startAt: 1489104000,
      endAt: 1514592000
    };
    this.coupons.push(coupon);
  }
};
</script>
