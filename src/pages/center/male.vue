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
    <div class="product-list" 
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <div class="product-list-item" v-for="item in rows" :key='item.id'>
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
                  <mt-button type="danger" @click.native='$router.push({path:"./pay",query:{id:item.id}})' size="small">立即购买</mt-button></div>
                <div flex-box='1'>
                  <mt-button @click.native='showDesc(item)' size="small">课程介绍</mt-button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="t-gray t-xs">
            <div>课程介绍：</div>
            <div class="t-ell-2" style='height:1.4rem;'>{{item.description|htmlfilter}}</div>
          </div> -->
      </div>
    </div>
    <mt-popup
      v-model="popups.show"
      popup-transition="popup-fade">
      <div class="ui-alert">
        <div class="ui-alert-title">
          <span>课程介绍</span>
          <i @click="popups.show=false" class="ui-alert-close iconfont icon-guanbi"></i>
        </div>
        <div class="ui-alert-body" v-html="popups.content"></div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
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
      getCategory: "getCategory",
      getProductList: "getProductList"
    }),
    changeCate(cateId) {
      //console.log(cateId);
      this.cateActive = cateId;

      this.params.category_id = cateId || "";
      this.rows = [];
      this.getRows(1);
    },
    getRows(page) {
      this.isloading = true;
      this.params.p = page ? page : this.params.p;
      this.getProductList(this.params).then(({ code, data, msg }) => {
        this.total = data.total;
        this.rows = [...this.rows, ...data.rows];
        this.$nextTick(() => {
          this.isloading = false;
        });
      });
    },
    loadMore() {
      if (this.rows.length >= this.total || this.isloading) return false;
      this.getRows(++this.params.p);
    },
    showDesc(item) {
      this.popups.content = item.description;
      this.popups.show = true;
    }
  },
  mounted() {
    this.getCategory();
    this.changeCate(0);
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
