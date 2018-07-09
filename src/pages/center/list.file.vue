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
            <img :src='item.product_img' style='width:5rem;' >
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
                <div flex-box="1">{{item.products.total_course}}节</div>
              </div>
            </div>
          </div>
        </div>
        <div flex class="t-xs border-bottom" style='padding:0 .5rem .5rem;'>
          <div flex-box="1">直播开始时间：<span class="t-orange">{{item.products.live_time}}</span></div>
          <div flex-box="0">当前课时：第{{item.products.current_course}}节</div>
        </div>
        <div class="t-xs">
          <mt-navbar v-model="item.selected">
            <mt-tab-item id="1">
              <i class="v-center t-orange t-lg iconfont icon-zhibodating"></i>
              <span>进入直播课堂</span>
            </mt-tab-item>
            <mt-tab-item id="2">
              <i class="v-center t-blue t-lg iconfont icon-kechenghuifang"></i>
              <span>查看录播</span>
            </mt-tab-item>
            <mt-tab-item id="3">
              <i class="v-center t-lg iconfont icon-xiazai-xue"></i>
              <span>下载资料</span>
            </mt-tab-item>
          </mt-navbar>
          <!-- tab-container -->
          <mt-tab-container v-model="item.selected">
            <mt-tab-container-item id="1">
              <!-- 直播列表 -->
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <div style='background:#f9f9f9;margin-top:.5rem;'>
                <div style='padding:.5rem 0;background:#fff' class="mb-10" v-for='course in item.planLine' :key='course.id'>
                  <div class="t-sm mb-10" style='padding:0 .5rem ;'>
                    <span class="t-bold">{{course.name}}</span>
                    <span class="t-gray">讲师:{{course.teacher}}</span>
                  </div>
                  <div style='padding-left:.5rem;box-sizing:border-box;width:100%;overflow:auto;white-space:nowrap'>
                    <mt-button type='primary' style='margin-right:.5rem' @click.native='toPlay(plan)' size='small' v-for='plan in course.teach_plan' :key='plan.name'>
                      <i class="t-md v-center iconfont icon-kechenghuifang"></i>
                      <span>{{plan.name}}</span>
                    </mt-button>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <mt-cell v-for="dl in item.downList" :key='dl.id'
                :title="dl.file_name"
                :to="dl.file"
                is-link
                value="下载">
              </mt-cell>
            </mt-tab-container-item>
          </mt-tab-container>
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
      getCourseList: "getCourseList",
      getCourseInfo: "getCourseInfo",
      getCoursePlan: "getCoursePlan"
    }),
    getRows() {
      this.getCourseList().then(({ data, code }) => {
        this.rows = data.map(item => {
          item.planLine = [];
          item.downList = [];
          item.selected = "";
          return item;
        });

        this.rows.forEach((item, index) => {
          this.getInfo(item, index);
          this.getPlan(item, index);
        });
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
