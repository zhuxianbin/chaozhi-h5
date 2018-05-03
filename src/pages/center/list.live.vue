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
        <div flex style='padding:.5rem;'>
          <div flex-box="0" style='margin-right:.5rem;'>
            <img :src='item.products.img' style='width:5rem;' >
          </div>
          <div flex-box="1">
            <div class="mb-10">{{item.product_name}}</div>
            <div class="t-xs mb-10">
              <!-- <div flex>
                <div flex-box="0" class="t-right mb-10" style='width:2.5rem;'>直播课程：</div>
                <div flex-box="1">{{item.products.live_name}}</div>
              </div> -->
              <!-- <div flex>
                <div flex-box="0" class="t-right" style='width:2.5rem;'>总课时：</div>
                <div flex-box="1">{{item.products.total_course}}节</div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- <div flex class="t-xs border-bottom" style='padding:0 .5rem .5rem;'>
          <div flex-box="1">直播开始时间：<span class="t-orange">{{item.products.live_time}}</span></div>
          <div flex-box="0">当前课时：第{{item.products.current_course}}节</div>
        </div> -->
        <div class="t-xs">
          <div style='background:#f9f9f9;margin-top:.5rem;'>
            <div style='padding:.5rem;background:#fff' class="mb-10">
              <div flex v-for='plan in item.products.live_more' :key='plan.name'>
                <div flex-box="1">
                  <div style='line-height:33px;'>{{plan.live_name}}</div>
                </div>
                <div flex-box="0">
                  <mt-button v-if='plan.live_days > 0' size='small' disabled>
                      <i class="iconfont icon-zhibodating"></i>
                      <span>直播还没开始</span>
                  </mt-button>
                  <a target="_blank" style='line-height:33px;text-decoration: none;' v-if='plan.live_days == 0' :href="plan.live_url" class="mint-button mint-button--danger mint-button--small">
                      <i class="iconfont icon-bofang1"></i>
                      <span>进入直播课堂</span>
                  </a>
                  <a target="_blank" style='line-height:33px;text-decoration: none;' v-if='plan.live_days<0' :href="plan.live_url" class="mint-button mint-button--primary mint-button--small">
                      <i class="iconfont icon-kechenghuifang"></i>
                      <span>回访直播视频</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { mapActions, mapState } from "vuex";
export default {
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
  padding: 40px 0 50px;
}
.mint-tab-item {
  padding: 5px 0;
}
</style>
