<template>
  <label class="mint-cell mint-field"><!----> 
        <div class="mint-cell-left"></div> 
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title"><!----> 
          <span class="mint-cell-text">性别</span> <!----></div> 
          <div class="mint-cell-value is-link">
            <select v-model='params.sex' class="mint-field-core" placeholder='请选择'>
              <option v-for='item in data' :key='item[keyName]' :value='item[keyName]'>{{item[valueName]}}</option>
            </select>
            <!-- <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div> 
            <span class="mint-field-state is-default"><i class="mintui mintui-field-default"></i></span> 
            <div class="mint-field-other"></div> -->
          </div> <!---->
        </div> 
        <div class="mint-cell-allow-right"></div>
      </label>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    title: String,
    data:Array,
    keyName:{
      type:String,
      default(){
        return "key"
      }
    },
    valueName:{
      type:String,
      default(){
        return "value"
      }
    }
  },
  data() {
    return {
      val: ""
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