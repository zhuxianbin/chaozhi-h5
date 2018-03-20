<template>
  <div class="page">
    <div flex style='background:#fff;padding:.5rem 0;'>
      <div flex-box="0" class='mr-10 t-right' style='width:20vw;'>
        报名状态
      </div>
      <div flex-box="1">
        <mt-progress :value="33" :bar-height="5"></mt-progress>
        <div flex class="t-xs t-center">
          <div flex-box="1">
            填写资料
          </div>
          <div flex-box="1">
            资料审核中
          </div>
          <div flex-box="1">
            报名成功
          </div>
        </div>
      </div>
    </div>

    <div>
      <mt-cell
        title="1寸照片"
        is-link
        value="请选择">
      </mt-cell>
      <mt-field label="中文名" placeholder="请输入中文名" v-model="params.cn_name"></mt-field>
      <mt-field label="英文名" placeholder="请输入英文名" v-model="params.en_name"></mt-field>
      <a class="mint-cell mint-field"><!----> 
        <div class="mint-cell-left"></div> 
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title"><!----> 
          <span class="mint-cell-text">性别</span> <!----></div> 
          <div class="mint-cell-value">
            <select v-model='params.sex' class="mint-field-core" placeholder='请选择'>
              <option>男</option>
              <option>女</option>
            </select>
            <!-- <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div> 
            <span class="mint-field-state is-default"><i class="mintui mintui-field-default"></i></span> 
            <div class="mint-field-other"></div> -->
          </div> <!---->
        </div> 
        <!-- <div class="mint-cell-right">111</div> -->
      </a>
      <mt-cell
        title="身份证复印件正面"
        is-link
        value="上传成功">
      </mt-cell>
      <mt-cell
        title="身份证复印件反面"
        is-link
        value="上传成功">
      </mt-cell>
    </div>

    <div class="t-xs" style='padding:.5rem;'>
      <p>1、全部为必填项</p>
      <p>2、上传照片要求（请严格按照照片要求）：</p>
      <p style='text-indent:1em;'>·图片格式：仅支持jpg类型，宽600px，高800px，小于1MB</p>
    </div>
    <div flex>
      <div flex-box='1'>
      
      </div>
      <div flex-box='1'>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        sex: "",
        cn_name: "",
        en_name: "",
        avatar: "",
        avatar_file: "",
        idcard_front: "",
        idcard_front_file: "", //身份证前面照片
        idcard_reverse: "",
        idcard_reverse_file: "" //身份证背面照片
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
 <style lang="less" scoped>
.page {
  margin: 40px 0 50px;
}
</style>
 
