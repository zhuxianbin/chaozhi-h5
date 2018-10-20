<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="tabActive" @change='changeTab' v-if='!["login","register","forget"].includes(currentRouter)'>
      <van-tabbar-item icon="shop" v-for='item in tabList' :key='item.id' :id="item.id">
        <i class='iconfont' slot="icon" :class='item.icon'></i>
        {{item.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      // showBack: false,
      tabList: [
        {
          id: "index",
          name: "超职首页",
          icon: "icon-shouye"
        },
        {
          id: "male",
          name: "课程商城",
          icon: "icon-gouwuche"
        },
        {
          id: "center",
          name: "我的",
          icon: "icon-wode"
        }
      ],
      currentRouter: "index",
      tabActive: 0
    };
  },
  watch: {
    $route: {
      handler({ name }) {
        //console.log(name);
        let [has] = this.tabList.filter(item => {
          return item.id == name;
        });
        // this.showBack = !has;
        this.currentRouter = name;
      },
      immediate: true
    }
  },
  methods: {
    changeTab(index) {
      const { id } = this.tabList[index];
      this.$router.push({ path: `/${id}` });
    }
  },
  mounted() {
    let { path, name } = this.$route;

    this.tabActive = this.tabList.findIndex(item => item.name == name);
  }
};
</script>

<style lang='less'>
.mint-tabbar {
  color: #999;
  background-color: #fff;
  .iconfont {
    font-size: 1rem;
    display: block;
  }
  > .mint-tab-item.is-selected {
    background-color: transparent;
    color: #f40;
  }
}
.layout-header.mint-header {
  background-color: #fff;
  color: #333;
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 50%
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom left;
  .mint-button--small {
    height: 26px;
  }
  .mint-header-title {
    background: url("../assets/logo.png") no-repeat center;
    background-size: auto 30px;
    height: 40px;
    margin: 0;
  }
}
</style>
