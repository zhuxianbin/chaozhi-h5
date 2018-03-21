<template>
  <label class="mint-cell"><!----> 
    <div class="mint-cell-left"></div> 
    <div class="mint-cell-wrapper">
      <div class="mint-cell-title"><!----> 
      <span class="mint-cell-text">{{title}}</span> <!----></div> 
      <div class="mint-cell-value is-link">
        <input type='file' @change='doUpload' class="mint-field-core">
        <span>{{tip}}</span>
      </div>
    </div> 
    <div class="mint-cell-allow-right"></div>
  </label>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    title: String
  },
  data() {
    return {
      tip: "请选择"
    };
  },
  methods: {
    ...mapActions({
      fileUpload: "fileUpload"
    }),
    doUpload({ target: { files } }) {
      this.fileUpload({
        name: "file",
        file: files[0]
      }).then(({ code, msg, data }) => {
        if (code == 200) {
          this.tip = "已上传";
        }
        this.$emit("success", data);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-field-core {
  width: 1px;
  flex: 0;
  opacity: 0;
}
</style>