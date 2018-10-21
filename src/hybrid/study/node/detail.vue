<template>
  <div>
    <van-cell-group>
      <van-cell is-link @click="show=true">
        <div slot="title">
          <span>{{item.name}}</span>
        </div>
      </van-cell>
    </van-cell-group>
     <van-popup class='popup' get-container="#app" v-model="show" position="bottom">
      <template v-for='itemY in item.children'>
        <van-panel :key="itemY.id">
          <div slot="header" class='header t-center'>
            <div>{{itemY.name}}</div>
          </div>
          <van-cell-group>
            <template v-for='itemZ in itemY.children'>
              <van-cell :key='itemZ.id' @click='toAnswer(itemZ)' :title="itemZ.name" is-link>
                <div class='t-gray'>
                  <span class='t-blue'>{{itemZ.answered_question_num}}</span>/<span>{{itemZ.question_num}}</span>
                </div>
              </van-cell>
            </template>
          </van-cell-group>
        </van-panel>
      </template>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object
    }
  },
  data() {
    return {
      show: false,
      item: this.model
    };
  },
  methods: {
    toAnswer(item) {
      this.$router.push({
        name: "hybrid-study-answer",
        params: {
          id: item.id,
          type: 1
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.van-cell-group {
  border-radius: 5px;
  overflow: hidden;
}
.popup {
  width: 100%;
  max-height: 80%;
  .header {
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
