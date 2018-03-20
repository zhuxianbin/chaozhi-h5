<template>
  <div>
    <mt-header v-if='tabActive!="login"' class='layout-header' fixed title="">
      <mt-button v-if="showBack" slot="left" @click.native='$router.back()' icon="back"></mt-button>
      <div slot="right">
        <mt-button style='width:100%;' plain size="small">立即咨询</mt-button>
      </div>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-if='tabActive!="login"' :fixed="true" v-model="tabActive">
      <mt-tab-item v-for='item in tabList' :key='item.id' :id="item.id">
        <i class='iconfont' :class='item.icon'></i>
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBack: false,
      tabList: [
        {
          id: "index",
          name: "超职首页",
          icon: "icon-shouye"
        },
        // {
        //   id: "course",
        //   name: "超职课程",
        //   icon: "icon-kecheng"
        // },
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
      tabActive: "index"
    };
  },
  watch: {
    tabActive(val) {
      this.$router.push(`/${val}`);
    },

    $route: {
      handler({ name }) {
        console.log(name);
        let [has] = this.tabList.filter(item => {
          return item.id == name;
        });
        this.showBack = !has;
        //this.tabActive = name;
      },
      immediate: true
    }
  },
  mounted() {
    let { path, name } = this.$route;
    this.tabActive = name;
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
    background: url("./assets/logo.png") no-repeat center;
    background-size: auto 30px;
    height: 40px;
    margin: 0;
  }
}
</style>
