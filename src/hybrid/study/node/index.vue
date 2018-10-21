<template>
  <div class='page'>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class='padd'>
        <template v-for='item in rows'>
          <detail-link :key='item.id' :model='item' class='mb-10'></detail-link>
        </template>
      </div>
    </van-pull-refresh>
   
  </div>
</template>

<script>
import { getNodeList } from "../../../api/hybrid";
import detailLink from "./detail";
export default {
  components: { detailLink },
  data() {
    return {
      isLoading: false,
      course_id: "",
      rows: [],
      popups: {
        show: false,
        data: {}
      }
    };
  },
  methods: {
    onRefresh() {
      // setTimeout(() => {
      //   this.$toast("刷新成功");
      //   this.isLoading = false;
      //   this.count++;
      // }, 500);
      this.getNodeList();
    },
    doDetail(item) {
      this.popups.data = item.children;
      this.popups.show = true;
    },
    getNodeList() {
      getNodeList({ course_id: this.course_id }).then(({ data }) => {
        this.rows = data;
        // this.$toast("刷新成功");
        this.isLoading = false;
      });
    }
  },
  created() {
    this.course_id = this.$route.params.course_id;
    this.getNodeList();
  }
};
</script>

<style lang="less" scoped>
.page {
  height: 100vh;
  overflow-y: auto;
}
.van-pull-refresh {
  height: 100%;
}
.padd {
  padding: 10px;
}
</style>

