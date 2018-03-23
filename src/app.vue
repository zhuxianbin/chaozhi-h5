<template>
  <div>
    <mt-header v-if='currentRouter!="login"' class='layout-header' fixed title="">
      <mt-button v-if="showBack" slot="left" @click.native='$router.back()' icon="back"></mt-button>
      <!-- <div slot="right">
        <mt-button style='width:100%;' @click.native='doCallServer' plain size="small">立即咨询</mt-button>
      </div> -->
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-if='currentRouter!="login"' :fixed="true" v-model="tabActive">
      <mt-tab-item v-for='item in tabList' :key='item.id' :id="item.id">
        <i class='iconfont' :class='item.icon'></i>
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>

    <!-- <mt-popup
      v-model="popupASK"
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
      currentRouter: "index",
      tabActive: "index",
      //popupASK:false,
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
        this.currentRouter = name;
      },
      immediate: true
    }
  },
  methods: {
    // ...mapActions({

    // }),
    // doCallServer() {
    //   console.log(this);
    //   this.$messagebox
    //     .prompt("请输入您的联系电话")
    //     .then(({ value, action }) => {
    //       console.log(value, action);
    //     });
    // }
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
