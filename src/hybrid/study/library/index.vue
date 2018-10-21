<template>
  <div>
    <van-cell-group>
      <van-cell title="本班型课程" />
    </van-cell-group>
    <div class='courses'>
      <div class="courses-card" 
          v-for='(item,index) in rows' 
          :class="{active:active==index}"
          @click='active = index'
          :key='item.id'>
        <div class='t-16 mb-10'>{{item.name}}</div>
        <div class='t-gray t-14'>
          <span>进度：<span class='t-blue'>{{item.answer_question_num}}</span>/{{item.question_num}}</span>
        </div>
      </div>
    </div>
    <div class='card t-center t-12 mb-10' v-if='rows.length>0'>
      <van-row>
        <van-col span="6">
          <router-link tag='div' :to='{name:"hybrid-study-node",params:{course_id:rows[active].id}}'>
            <img style='width:30px' src='/static/images/hybrid/icon_zjlx@2x.png'>
            <div>章节练习</div>
          </router-link>
        </van-col>
        <van-col span="6">
          <div>
            <img style='width:30px' src='/static/images/hybrid/icon_ztmk@2x.png'>
            <div>真题模考</div>
          </div>
        </van-col>
        <van-col span="6">
          <div>
            <img style='width:30px' src='/static/images/hybrid/icon_ctlx@2x.png'>
            <div>错题练习</div>
          </div>
        </van-col>
        <van-col span="6">
          <div>
            <img style='width:30px' src='/static/images/hybrid/icon_sstk@2x.png'>
            <div>收藏题库</div>
          </div>
        </van-col>
      </van-row>
    </div>
    <van-panel>
      <div slot='header' class='t-center lh-3'>
        <span>我的学习进度</span>
      </div>
      
      <van-cell-group>
        <van-cell v-for='item in 4' :key='"item"+item'>
          <div slot="title" class='van-clearfix'>
            <div class='pull-left'>
              完成了123道题，错误23道题2
            </div>
            <div class='pull-right t-12 t-gray'>
              <span>7/9</span>
            </div>
          </div>
        </van-cell>
      </van-cell-group>

</van-panel>
  </div>
</template>

<script>
/**
 * 题库
 */
import { getCoursePlan } from "../../../api/hybrid";
export default {
  // components: {
  //   [Cell.name]: Cell,
  //   [CellGroup.name]: CellGroup,
  //   [Panel.name]: Panel,
  //   [Button.name]: Button,
  //   [Row.name]: Row,
  //   [Col.name]: Col
  // }
  data() {
    return {
      params: {
        pid: "",
        p: 1,
        offset: 999,
        is_question: 1
      },
      rows: [],
      active: 0
    };
  },
  methods: {
    getCoursePlan() {
      getCoursePlan(this.params).then(({ data }) => {
        // console.log(data);
        this.rows = data.rows;
      });
    }
  },
  created() {
    const { id } = this.$route.params;
    this.params.pid = id;
    this.getCoursePlan();
  }
};
</script>

<style lang="less" scoped>
.courses {
  padding: 10px 10px 10px 0;
  overflow-x: auto;
  box-sizing: border-box;
  white-space: nowrap;
}
.courses-card {
  display: inline-block;
  width: 120px;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #fff;
  text-align: center;
  margin-left: 10px;
  box-sizing: border-box;
  &.active {
    border: 1px solid #c31a1f;
  }
}
.card {
  background: #fff;
  padding: 20px;
}
</style>
