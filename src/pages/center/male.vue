<template>
  <div class="page">
    <mt-swipe style='height:140px;' :auto="5000">
      <mt-swipe-item>
        <img src="../../assets/20180316155148.png" style='height:140px;'>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/20180316155148.png" style='height:140px;'>
      </mt-swipe-item>
    </mt-swipe>
    <div class="t-gray" style='background:#f9f9f9;padding:.5rem;'>
      超职商城欢迎您，请选择学科
    </div>
    <div class="cate-list">
      <mt-button :type="cateActive==0?'danger':'default'" @click='changeCate(0)' size="small">全部</mt-button><mt-button v-for='item in category' :key='item.id' :type="cateActive==item.id?'danger':'default'" @click='changeCate(item.id)' size="small">{{item.name}}</mt-button>
    </div>
    <div class="product-list">
      <div class="product-list-item" v-for="item in 10" :key='item'>
          <div flex>
            <div flex-box="0">
              <img src='http://aci-api.chaozhiedu.com/api/file/10241' style='width:6rem;margin-right:.5rem;'>
            </div>
            <div flex-box="1">
              <div class="mb-10">ACI心理咨询师-普通心理</div>
              <div class="mb-10">活动价:
                <span class="t-orange">13200</span>元
                <s class="t-xs t-gray">13200元</s>
              </div>
              <div class='t-right'>
                <mt-button type="danger" @click.native='$router.push("./pay")' size="small">立即购买</mt-button>
              </div>
            </div>
          </div>
          <div class="t-gray t-xs">
            <span>课程介绍：</span>是我校理、工、经管类本科生必修的一门重要的基础课。也是工学、 经济学硕士研究生入学考试的一 门必考科目
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      cateActive: 0
    };
  },
  computed: {
    ...mapState({
      category: state => state.category
    })
  },
  methods: {
    ...mapActions({
      getCategory: "getCategory"
    }),
    changeCate(cateId) {
      console.log(cateId);
      this.cateActive = cateId;
    }
  },
  mounted() {
    this.getCategory();
  }
};
</script>

<style lang='less'>
.page {
  padding: 40px 0 50px;
}
.cate-list {
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 0.5rem;

  .mint-button {
    margin-right: 0.5rem;
  }
}
.product-list-item {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: #fff;
}
</style>
