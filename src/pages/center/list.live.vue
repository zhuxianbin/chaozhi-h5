<template>
  <div class="page">
    <div v-if='userInfo.code==200&&!userInfo.orders' flex class="mb-10" style='background:#fff;padding:.5rem;'>
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
    <div>
      <div class="mb-10" style='background:#fff;box-shadow:0 1px 2px 0 #eee;' v-for='item in rows' :key='item.id'>
        
        <van-card
          :title="item.product_name"
          :thumb="item.product_img"
        />
        
        <van-cell-group>
          <van-cell v-for='plan in item.products' :key='plan.id' :title="plan.live_name" :label="plan.live_st" value="内容">
            <van-button size="small" type="default" disabled v-if='plan.status === 0'>
              <i class="iconfont icon-zhibodating"></i>
              <span>直播还没开始</span>
            </van-button>
            <van-button size="small" type="primary" v-if='plan.status>0' tag="a" :href="plan.live_url">
              <i class="iconfont icon-bofang1"></i>
              <span>进入直播课堂</span>
            </van-button>
            <van-button size="small" type="danger" v-if='plan.status<0' tag="a" :href="plan.live_url">
              <i class="iconfont icon-kechenghuifang"></i>
              <span>回放直播视频</span>
            </van-button>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
    <mt-popup
      v-model="play.show"
      popup-transition="popup-fade">
      <div class="ui-alert" style='width:100vw;'>
        <!-- <div class="ui-alert-title"></div> -->
        <div class="ui-alert-body" style='padding:2vw;'>
            <iframe frameborder=0 style='width:96vw;height:72vw;' v-if='play.show' :src='play.src'></iframe>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { Button, Card, Cell, CellGroup } from "vant";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    [Button.name]: Button,
    [Card.name]: Card,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      rows: [],
      play: {
        show: false,
        src: ""
      }
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapActions({
      getLiveList: "getLiveList"
    }),
    getRows() {
      this.getLiveList({
        p: 1,
        offset: 100
      }).then(({ data, code }) => {
        this.rows = data;
      });
    },
    getInfo(item, index) {
      this.getCourseInfo({
        pid: item.product_id,
        p: 1,
        offset: 100
      }).then(({ data, code }) => {
        this.rows[index].downList = data.rows;
      });
    },
    getPlan(item, index) {
      this.getCoursePlan({
        pid: item.product_id,
        p: 1,
        offset: 100
      }).then(({ code, data, msg }) => {
        this.rows[index].planLine = data.rows;
      });
    },
    toPlay({ view_url }) {
      //window.location.href = view_url;
      this.play.src = view_url;
      this.play.show = true;
    }
    // toCourse(item, tag = "videos") {
    //   this.$router.push({ path: "./course", query: { id: item, id } });
    // }
  },
  mounted() {
    this.getRows(1);
  }
};
</script>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 40px 0 50px;
}
.mint-tab-item {
  padding: 5px 0;
}
.van-card {
  background: #fff;
}
</style>
