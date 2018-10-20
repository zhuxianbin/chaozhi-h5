<template>
  <div class="page">
    
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img class='img-r' src="../assets/20180316155148.png" >
      </van-swipe-item>
      <van-swipe-item>
        <img class='img-r' src="../assets/20180316155148.png" >
      </van-swipe-item>
    </van-swipe>
    <div class="t-gray" style='background:#f9f9f9;padding:.5rem;'>
      超职商城欢迎您，请选择学科
    </div>
    <div class="cate-list">
      <van-button :type="cateActive==0?'warning':'default'" @click='changeCate(0)' size="small">全部</van-button>
      <van-button v-for='item in category' :key='item.id' 
        class='ml-10'
        :type="cateActive==item.id?'warning':'default'" 
        @click='changeCate(item.id)' size="small">{{item.name}}</van-button>
    </div>
    <van-list
      v-model="isloading"
      :finished="finished"
      @load="loadMore"
    >
      <template v-for="item in rows">
        <van-card :key='item.id'
          :title="item.name"
          :thumb="item.img"
          class="mb-10"
        >
          <div slot="desc">
            <span class="t-orange t-bold">{{item.price}}</span>元
            <s class="t-xs t-gray">{{item.original_price}}元</s>
          </div>
          <div slot="footer">
            <van-button type="danger" size="small" @click='$router.push({name:"pay",query:{product_id:item.id}})'>立即购买</van-button>
            <van-button type="default" size="small" @click='showDesc(item)'>课程介绍</van-button>
          </div>
        </van-card>
      </template>
      <!-- <div class="product-list-item" v-for="item in rows" :key='item.id'>
          <div flex class="mb-10">
            <div flex-box="0">
              <img :src='item.img' style='width:6rem;margin-right:.5rem;'>
            </div>
            <div flex-box="1">
              <div class="mb-10 t-sm">{{item.name}}</div>
              <div class="mb-10 t-sm">
                <span class="t-orange t-bold">{{item.price}}</span>元
                <s class="t-xs t-gray">{{item.original_price}}元</s>
              </div>
              <div flex class="t-left">
                <div flex-box='1'>
                  <mt-button type="danger" @click.native='$router.push("./pay/"+item.id)' size="small">立即购买</mt-button></div>
                <div flex-box='1'>
                  <mt-button @click.native='showDesc(item)' size="small">课程介绍</mt-button>
                </div>
              </div>
            </div>
          </div>
      </div> -->
    </van-list>
    <van-popup
      v-model="popups.show">
      <div class="ui-alert">
        <div class="ui-alert-title">
          <span>课程介绍</span>
          <i @click="popups.show=false" class="ui-alert-close iconfont icon-guanbi"></i>
        </div>
        <div class="ui-alert-body" v-html="popups.content"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Button, Card } from "vant";
import { mapActions, mapState } from "vuex";
import { getProductList } from "@/utils/api";
export default {
  components: {
    [Button.name]: Button,
    [Card.name]: Card
  },
  data() {
    return {
      cateActive: 0,
      params: {
        p: 1,
        offset: 10,
        category_id: ""
      },
      rows: [],
      total: 10,
      isloading: false,
      finished: false,
      popups: {
        show: false,
        content: ""
      }
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
      //console.log(cateId);
      this.cateActive = cateId;

      this.params.category_id = cateId || "";
      this.rows = [];
      this.getRows(1);
      this.finished = false;
    },
    getRows(page) {
      this.isloading = true;
      this.params.p = page || this.params.p;
      getProductList(this.params).then(({ code, data, msg }) => {
        this.total = data.total;
        this.rows = [...this.rows, ...data.rows];
        this.$nextTick(() => {
          this.isloading = false;
          if (this.rows.length >= this.total) {
            this.finished = true;
          }
        });
      });
    },
    loadMore() {
      this.getRows(++this.params.p);
    },
    showDesc(item) {
      this.popups.content = item.description;
      this.popups.show = true;
    }
  },
  created() {
    this.getCategory();
    this.changeCate(0);
  }
};
</script>

<style lang='less' scoped>
.page {
  padding: 0 0 50px;
}

.van-card {
  background: #ffffff;
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
