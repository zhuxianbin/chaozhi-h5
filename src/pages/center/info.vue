<template>
  <div class="page">
    <div flex style='background:#fff;padding:.5rem 0;'>
      <div flex-box="0" class='mr-10 t-sm t-right' style='width:20vw;line-height:46px;'>
        <span>报名状态</span>
      </div>
      <div flex-box="1">
        <div flex class="t-xs t-center">
          <div flex-box="1">
            <span :class="{'t-blue':progress>=0}">填写资料</span>
          </div>
          <div flex-box="1">
            <span :class="{'t-blue':progress>1}">资料审核中</span>
          </div>
          <div flex-box="1">
            <span :class="{'t-blue':progress>2}">报名成功</span>
          </div>
        </div>
        <mt-progress :value="[0,33,66,100][progress]" :bar-height="5"></mt-progress>
      </div>
    </div>
    <!-- {{userInfo.status}} -->
    <div v-if='userInfo.status<=1'>
      <div class="t-center" style='padding:.5rem;'>
        <div class="mb-10">注册国际心理咨询师培训考试报名表</div>
        <a :href="userInfo.entry_form_example_url" class="link t-sm">下载：报名表.doc>></a>
      </div>
      <div>
        <mt-field-upload @success='(data)=>{ 
          params.avatar = data.id;
          params.avatar_file = data.url}' title='1寸照片'></mt-field-upload>
        <mt-field label="中文名" placeholder="请输入中文名" v-model="params.cn_name"></mt-field>
        <mt-field label="英文名" placeholder="请输入英文名" v-model="params.en_name"></mt-field>
        <label class="mint-cell mint-field"><!----> 
          <div class="mint-cell-left"></div> 
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title"><!----> 
            <span class="mint-cell-text">性别</span> <!----></div> 
            <div class="mint-cell-value is-link">
              <select v-model='params.sex' class="mint-field-core" placeholder='请选择'>
                <option value='M'>男，M</option>
                <option value='F'>女，F</option>
              </select>
            </div>
          </div> 
          <div class="mint-cell-allow-right"></div>
        </label>
        <mt-field label="出生日期" placeholder="请输入出生日期" type="date" v-model="params.birthday"></mt-field>
        <mt-field label="毕业学校" placeholder="请输入毕业学校" type="text" v-model="params.college"></mt-field>
        <mt-field label="联系电话" placeholder="请输入联系电话" type="text" v-model="params.contacts_phone"></mt-field>
        <mt-field label="电子邮件" placeholder="请输入电子邮件" type="text" v-model="params.email"></mt-field>
        <mt-field label="身份证号" placeholder="请输入身份证号" type="text" v-model="params.idcard"></mt-field>
        
        <mt-field label="学历编号" placeholder="请输入学历编号" type="text" v-model="params.edu_num"></mt-field>
        <mt-field-upload @success='(data)=>{ 
          params.edu = data.id;
          params.edu_file = data.url}' title='学历复印件'></mt-field-upload>
        <mt-field-upload @success='(data)=>{ 
          params.degree = data.id;
          params.degree_file = data.url}' title='学位复印件'></mt-field-upload>
        <mt-field-upload @success='(data)=>{ 
          params.idcard_front = data.id;
          params.idcard_front_file = data.url}'  title='身份证复印件正面'></mt-field-upload>
        <mt-field-upload @success='(data)=>{ 
          params.idcard_reverse = data.id;
          params.idcard_reverse_file = data.url}'  title='身份证复印件反面'></mt-field-upload>
        <label class="mint-cell mint-field"><!----> 
          <div class="mint-cell-left"></div> 
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title"><!----> 
            <span class="mint-cell-text">课时选择</span> <!----></div> 
            <div class="mint-cell-value is-link">
              <select v-model='params.period' class="mint-field-core" placeholder='请选择'>
                <option v-for='item in userInfo.period' :key='item.id' :value='item.id'>{{item.name}}</option>
              </select>
            </div>
          </div> 
          <div class="mint-cell-allow-right"></div>
        </label>
        <mt-field label="居住地址" placeholder="居住地址" type="textarea" rows="2" v-model="params.addr"></mt-field>
      </div>

      <div class="t-xs" style='padding:.5rem;'>
        <p>1、全部为必填项</p>
        <p>2、上传照片要求（请严格按照照片要求）：</p>
        <p style='text-indent:1em;'>·图片格式：仅支持jpg类型，宽600px，高800px，小于1MB</p>
      </div>
      <div flex class="padding">
        <div flex-box='1' class="mr-10">
          <mt-button type='danger' @click.native='doSubmit' size="large">提交报名</mt-button>
        </div>
        <div flex-box='1'>
          <mt-button type='default' @click.native='doSave' size="large">保存资料</mt-button>
        </div>
      </div>
    </div>

    <div v-else>
        <mt-cell title="中文名" :value="params.cn_name"></mt-cell>
        <mt-cell title="英文名" :value="params.en_name"></mt-cell>
        <mt-cell title="性别" :value="params.sex=='M'?'男':'女'"></mt-cell>
        <mt-cell title="出生日期" :value="params.birthday"></mt-cell>
        <mt-cell title="毕业学校" :value="params.college"></mt-cell>
        <mt-cell title="联系电话" :value="params.contacts_phone"></mt-cell>
        <mt-cell title="电子邮件" :value="params.email"></mt-cell>
        <mt-cell title="身份证号" :value="idcard"></mt-cell>
        <mt-cell title="学历编号" :value="params.edu_num"></mt-cell>
        <mt-cell title="学历复印件" is-link :to="params.edu_file"></mt-cell>
        <mt-cell title="学位复印件" is-link :to="params.degree_file"></mt-cell>
        <mt-cell title="身份证正面" is-link :to="params.idcard_front_file"></mt-cell>
        <mt-cell title="身份证反面" is-link :to="params.idcard_reverse_file"></mt-cell>
        <!-- <mt-cell title="课时选择" value="说明文字"></mt-cell> -->
        <mt-cell title="居住地址" :value="params.addr"></mt-cell>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import mtFieldUpload from "@/components/mt-field-upload.vue";
export default {
  components: {
    mtFieldUpload
  },
  data() {
    return {
      progress: 1,
      params: {
        addr: "",
        birthday: "",
        college: "",
        contacts_phone: "",
        edu: "",
        edu_num: "",
        edu_file: "",
        email: "",
        entry_form: "",
        idcard: "",
        period: "",
        degree: "",
        degree_file: "",
        sex: "M",
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
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  watch: {
    userInfo: {
      handler({ user }) {
        //let { user } = val;
        this.params = user;
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      submitUserInfo: "submitUserInfo",
      addUserInfo: "addUserInfo",
      fileUpload: "fileUpload",
      getUserSign: "getUserSign",
      _getUserSignPayinfo: "getUserSignPayinfo"
    }),
    doSubmit() {
      this.submitUserInfo({ ...this.params, ...{ entry_form: -1 } }).then(
        ({ code, data_msg, msg }) => {
          this.$toast(msg);
          code == 200 && this.getUserSign();
          data_msg && this.errorAlert(data_msg);
        }
      );
    },
    doSave() {
      this.addUserInfo({ ...this.params, ...{ entry_form: -1 } }).then(
        ({ code, data_msg, msg }) => {
          this.$toast(msg);
          code == 200 && this.getUserSign();

          data_msg && this.errorAlert(data_msg);
        }
      );
    },
    errorAlert(data_msg) {
      let [key] = Object.keys.call(this, data_msg);
      const errs = {
        edu_num: "学历编号"
      };

      this.$toast(`${errs[key] || ""}错误`);
    },
    getUserSignPayinfo() {
      this._getUserSignPayinfo().then(res => {
        res.status == 0 &&
          this.$messagebox.alert("您还未支付报名费,请立即前往").then(() => {
            this.$router.push("./signup");
          });
      });
    }
  },
  mounted() {
    this.getUserSign().then(res => {
      this.progress = res.status;
      if (res.status == 3) {
        this.getUserSignPayinfo();
      }
    });
  }
};
</script>
 <style lang="less" scoped>
.page {
  margin: 40px 0 50px;
}
</style>
<style lang="less">
.is-textarea {
  .mint-cell-title {
    margin-top: -50px;
  }
}
</style>
