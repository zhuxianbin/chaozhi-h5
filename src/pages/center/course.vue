<template>
  <div>
    <div class="mb-10" style='background:#fff;box-shadow:0 1px 2px 0 #eee;'>
        <div flex style='padding:.5rem;'>
          <div flex-box="0" style='margin-right:.5rem;'>
            <img :src='item.products.img' style='width:5rem;' >
          </div>
          <div flex-box="1">
            <div class="mb-10">{{item.product_name}}</div>
            <div class="t-xs mb-10">
              <div flex>
                <div flex-box="0" class="t-right mb-10" style='width:2.5rem;'>直播课程：</div>
                <div flex-box="1">{{item.products.live_name}}</div>
              </div>
              <div flex>
                <div flex-box="0" class="t-right" style='width:2.5rem;'>总课时：</div>
                <div flex-box="1">12节</div>
              </div>
            </div>
          </div>
        </div>
        <div flex class="t-xs border-bottom" style='padding:0 .5rem .5rem;'>
          <div flex-box="1">直播开始时间：<span class="t-orange">2018-03-25 18:00</span> </div>
          <div flex-box="0">当前课时：第2节</div>
        </div>
        <div class="t-xs">
          <div class="mint-navbar">
            <a class="mint-tab-item">
              <div class="mint-tab-item-label">
                <i class="v-center t-orange t-lg iconfont icon-zhibodating"></i>
                <span>进入直播课堂</span>
              </div>
            </a>
            <a class="mint-tab-item">
              <div class="mint-tab-item-label">
                <i class="v-center t-blue t-lg iconfont icon-kechenghuifang"></i>
                <span>查看录播</span>
              </div>
            </a> 
            <a class="mint-tab-item">
              <div class="mint-tab-item-label">
                <i class="v-center t-lg iconfont icon-xiazai-xue"></i>
                <span>下载资料</span>
              </div>
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      getCourseInfo:"getCourseInfo"
    }),
  },
  mounted(a,b,c) {
      console.log(a,b,c);
  }
};
</script>

<style>

</style>
