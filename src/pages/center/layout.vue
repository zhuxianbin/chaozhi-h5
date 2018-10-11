<template>
  <div>
    <router-view></router-view>
      <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  mounted(){
  }
};
</script>

<style lang='less'>
</style>
