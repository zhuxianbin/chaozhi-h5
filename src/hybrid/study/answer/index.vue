<template>
  <div class='page'>
    <van-swipe 
      ref='swiper'
      :show-indicators='false' 
      :loop='false'
      :initial-swipe='initial'
      @change="onChange"
      :touchable='false'>
      <van-swipe-item v-for='(item,index) in rows' :key="item.id">
        <van-cell-group class='mb-10'>
          <van-cell :title="types[item.type]">
            <div class='t-right'>
              <span class='t-red'>{{index+1}}</span>/<span>{{rows.length}}</span>
            </div>
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <van-cell :title="item.title" />
          <div class='answer-options'>
            <van-radio-group v-if='item.type==1' v-model="item.user_answer">
              <van-radio v-for='(value,key) in item.option' :key="key" :name="key">{{value}}</van-radio>
            </van-radio-group>
            <van-checkbox-group v-if='item.type==2' v-model="item.user_answer_arr">
              <van-checkbox v-for='(value,key) in item.option' :key="key" :name="key">{{value}}</van-checkbox>
            </van-checkbox-group>
            <template v-if='item.type==3'>
              <van-field
                v-model="item.user_answer"
                type="textarea"
                placeholder="请输入答案"
                rows="3"
                autosize
              />
            </template>
          </div>
        </van-cell-group>
      </van-swipe-item>
    </van-swipe>
    
    <div class='pf pf-b'>
      <van-button square @click='doNext' type='danger' size='large'>{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
/**
 * 答题测验
 */
import { getQuestionList, submitQuestionAnswer } from "../../../api/hybrid";
let swiper = null;
export default {
  data() {
    const { id, type } = this.$route.params;
    return {
      params: { id, type },
      rows: [],
      current: 0,
      initial: 0,
      types: {
        "1": "单选题",
        "2": "多选题",
        "3": "问答题"
      }
    };
  },
  computed: {
    btnText() {
      return this.current < this.rows.length - 1 ? "下一题" : "提交答案";
    }
  },
  methods: {
    getQuestionList() {
      getQuestionList(this.params).then(({ data }) => {
        this.rows = data.map(item => {
          if (item.type == 2) {
            item.user_answer_arr =
              item.user_answer.length > 0 ? item.user_answer.split(",") : [];
          }
          return item;
        });
      });
    },
    onChange(index) {
      this.current = index;
    },
    doNext() {
      this.current++;
      if (this.current < this.rows.length) {
        swiper.swipeTo(this.current);
      } else {
        this.submitQuestionAnswer();
      }
    },
    submitQuestionAnswer() {
      this.$toast.loading({
        mask: true,
        message: "提交中..."
      });

      const answer = this.rows.map(item => {
        let userAnswer = item.user_answer;
        if (item.type == 2) {
          userAnswer = item.user_answer_arr.sort().join(",");
        }
        return { id: item.id, answer: userAnswer };
      });
      submitQuestionAnswer({ ...this.params, answer })
        .then(() => {
          this.$toast.clear();
          this.$router.push({
            name: "hybrid-study-score",
            params: this.params
          });
        })
        .catch(() => {
          this.$toast.clear();
        });
    }
  },
  created() {
    this.getQuestionList();
  },
  mounted() {
    swiper = this.$refs.swiper;
  }
};
</script>

<style lang="less" scoped>
.page {
  padding: 10px;
}
.answer-options {
  padding: 20px 15px;
  line-height: 1;
  .van-radio {
    margin-bottom: 20px;
  }
  .van-checkbox {
    margin-bottom: 20px;
  }
}
.van-cell-group {
  border-radius: 5px;
  overflow: hidden;
}
</style>

