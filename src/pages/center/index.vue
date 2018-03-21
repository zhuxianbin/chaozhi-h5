<template>
  <div class="page">
    <div flex class="mb-20 user-info">
      <div flex-box="0" style='margin-right:1rem;'>
        <img class="user-avatar" :src='userInfo.user.avatar_file||avatar' style='width:2.5rem;height:2.5rem;'>
      </div>
      <div flex-box="1">
        <div class="mb-10">学员账号:<span v-text='userInfo.user.phone'></span></div>
        <div class="t-xs">
          欢迎您来到超职ACI课程培训中心
        </div>
      </div>
    </div>
    <div v-if='userInfo.code==201' flex class="mb-20 user-info">
      <div flex-box="0" style='margin-right:1rem;'>
        <i style='color:#7ED321;font-size:2rem;' class="iconfont icon-caifang-tianbaoren"></i>
      </div>
      <div flex-box="1">
        <div class="mb-10">亲爱的学员：</div>
        <div class="t-xs mb-10">
          您已参考网校的ACI注册国际心理咨询师课程培训，可以进行报名。
        </div>
        <div class="t-xs">
          <mt-button type='danger' @click.native='$router.push("./info")' size='small'>点击填写报名资料</mt-button>
        </div>
      </div>
    </div>
    <div v-if='userInfo.code==200&&!userInfo.courseCount' flex class="mb-20 user-info">
      <div flex-box="0" style='margin-right:1rem;'>
        <i style='color:#FF5900;font-size:2rem;' class="iconfont icon-course"></i>
      </div>
      <div flex-box="1">
        <div class="mb-10">亲爱的学员：</div>
        <div class="t-xs mb-10">
          您还未参考网校的ACI注册国际心理咨询师课程培训，请先缴费学习课程，再进行报名。
        </div>
        <div class="t-xs">
          <mt-button type='danger' size='small'>点击购买课程</mt-button>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <mt-cell title="我的报考资料" @click.native='$router.push("./info")' is-link>
        <span v-if='userInfo.code==201' class='t-gray'>未报名</span>
        <span v-if='userInfo.code==200' style="color: green">已报名</span>
      </mt-cell>
      <mt-cell @click.native='userInfo.code==200&&$router.push("./courseList")' title="我购买的课程" is-link>
        <span>已购{{courseCount}}个课程</span>
      </mt-cell>
      <mt-cell title="客服热线" :to='"tel:"+tel' is-link>
        <span>{{tel}}</span>
      </mt-cell>
    </div>
    <div class="t-center user-logout">
      <mt-button @click.native='doLogout' style="width:60vw;">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tel: "010-51657777",
      avatar: require("../../assets/avatar.png")
    };
  },
  methods: {
    ...mapActions({
      getUserInfo: "getUserInfo",
      getCourseCount:"getCourseCount"
    }),
    doLogout() {
      this.$storage.remove("userToken");
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      courseCount: state => state.courseCount
    })
  },
  mounted() {
    this.getUserInfo();
    this.getCourseCount();
  }
};
</script>
<style lang="less" scoped>
.page {
  padding: 40px 0 50px;
  //height: 100vh;
  //box-sizing: border-box;
}
.user-info {
  padding: 1rem;
  background-color: white;
  .user-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
  }
}
.user-logout {
  //position: fixed;
  margin: 2rem 0;
  width: 100vw;
  bottom: 3rem;
}
</style>
