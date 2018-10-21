<template>
  <div>
    <div class='score mb-10'>
      <div>
        <span>答对</span>
      </div>
      <div class='t-center'>
        <span style='font-size:100px;'>{{rightCount}}</span>
      </div>
      <div class='t-right'>/{{rows.length}}道</div>
    </div>
    <van-cell-group>
      <van-cell title="测试情况">
        <span class="t-blue mr-5">●正确</span>
        <span class='t-red mr-5'>●错误</span>
        <span class='t-orange'>○无评判</span>
      </van-cell>
      <div class='clearfix answer'>
        <div v-for='(item,index) in rows' 
          :key='item.id' 
          :class="styles[item.result]"
          class="answer-item">
          {{index+1}}
        </div>
      </div>
    </van-cell-group>
    <div class='pf pf-b'>
      <van-row>
        <van-col span="9">
          <van-button square type='default' size='large'>试题解析</van-button>
        </van-col>
        <van-col span="15">
            <van-button square type='danger' size='large'>下一套试题</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
/**
 * 答题测验
 */
import { getQuestionList } from "../../../api/hybrid";
export default {
  data() {
    const { id, type } = this.$route.params;
    return {
      params: { id, type },
      rows: [],
      rightCount: 0,
      styles: {
        "-1": "error",
        "0": "",
        "1": "right",
        "2": ""
      }
    };
  },
  methods: {
    getQuestionList() {
      getQuestionList(this.params).then(({ data }) => {
        this.rows = data.map(item => {
          if (item.result == 1) {
            this.rightCount++;
          }
          return item;
        });
      });
    }
  },
  created() {
    this.getQuestionList();
  }
};
</script>
<style lang="less" scoped>
.score {
  background: #07f;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  padding: 20px;
}
.answer {
  padding: 15px 0;
  overflow: hidden;
}
.answer-item {
  float: left;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #f5a623;
  text-align: center;
  border: 1px solid #f5a623;
  box-sizing: border-box;
  margin: 10px 15px;

  &.error {
    background: #d0021b;
    border: 0;
    color: #fff;
  }
  &.right {
    color: #fff;
    border: 0;
    background: #07f;
  }
}
</style>

