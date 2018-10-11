<template>
  <div>
    <div class="padd">
      <div v-for='item in 3' :key='item'>
        <div class='t-center mb-5'>
          <span class='time'>2018-06-29 19:00</span>
        </div>
        <div class='bin-card mb-10' @click='showDeital'>
          <div class='mb-5 t-14'>
            消息一
          </div>
          <div class='t-12'>
            未读消息一条，未读消息一条，未读消息一条，未读消息一条，未读消息一条，未读消息一条…
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popups: {
        detail: {
          show: false,
          data: {}
        }
      }
    };
  },
  methods: {
    showDeital() {
      this.$dialog.alert({
        title: '标题',
        message: "弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.padd {
  padding: 10px 15px;
}
.bin-card {
  background: #fff;
  border-radius: 5px;
  padding: 10px;
}
.time {
  display: inline-block;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  padding: 0 20px;
  background: #c8c8c8;
  border-radius: 8px;
  color: #fff;
}
</style>

