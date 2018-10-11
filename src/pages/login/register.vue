<template>
  <div class="page">

    <div class="t-center mb-20">
      <img src="@/assets/logo.png"/>
    </div>
    <div class="t-lg t-center mb-10">注册您的账号</div>
    <div class="t-xs t-gray t-center mb-20">开启您的学习之旅</div>


    <van-cell-group class="mb-10">
      <van-field
        v-model="params.phone"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="params.captcha"
        placeholder="请输入验证码">
        <van-button slot="button" size="small" :disabled="outTime>0" @click='doSend' type="primary">{{outTime>0?outTime+"s":"获取验证码"}}</van-button>
      </van-field>
      <van-field
        v-model="params.password"
        type="password"
        placeholder="设置登陆密码至少6位"
      />
      <van-field
        v-model="params.name"
        placeholder="请输入姓名"
      />
    </van-cell-group>

    <div class="ui-form">
      <div class="ui-form-item t-sm mb-10">
        <label>
          <input type='checkbox' v-model='isChecked' />
          <span>注册即表示您同意</span>
        </label>
        《<a class="link" @click="popups = { show:true,title:'超职用户协议',component:'agreement'}">超职用户协议</a>》
      </div>
      <div class="ui-form-item">
        <van-row gutter="10" class="mb-20">
      <van-col span="8"><van-button @click="$router.back()" :block="true" type="default" size="large">返 回</van-button></van-col>
      <van-col span="16"><van-button @click='submitForm' :block="true" type="danger" size="large" :disabled="!isChecked">注 册</van-button></van-col>
    </van-row>
        
      </div>
    </div>
    <mt-popup
      v-model="popups.show"
      popup-transition="popup-fade">
      <div class="ui-alert">
        <div class="ui-alert-title">
          <span>{{popups.title}}</span>
          <i @click="popups.show=false" class="ui-alert-close iconfont icon-guanbi"></i>
        </div>
        <div class="ui-alert-body">
            <component :is="popups.component"></component>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { Field, CellGroup, Button, Row, Col } from "vant";
import { mapActions } from "vuex";
import { getToken, setToken } from "@/utils/auth";
import agreement from "./agreement.vue";
import { userRegister, getPhoneCaptcha } from "@/utils/api";
export default {
  name: "register",
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    agreement
  },
  data() {
    return {
      params: {
        phone: "",
        captcha: "",
        password: "",
        name: ""
      },
      outTime: 0,
      isChecked: true,
      popups: {
        show: false,
        component: "agreement",
        title: "超职用户协议"
      }
    };
  },
  methods: {
    doSend() {
      getPhoneCaptcha({
        phone: this.params.phone
      }).then(({ code, msg }) => {
        this.$toast(msg);
        if (code != 200) {
          return false;
        }
        this.outTime = 60;
        window.timer = setInterval(() => {
          if (this.outTime > 0) {
            this.outTime--;
          } else {
            clearInterval(window.timer);
          }
        }, 1000);
      });
    },
    submitForm(formName) {
      userRegister({
        phone: this.params.phone,
        captcha: this.params.captcha,
        password: this.params.password,
        name: this.params.name
      }).then(data => {
        if (data.code != 200) {
          this.$toast(data.msg);
          return false;
        }
        this.$toast("注册成功");
        this.$router.back();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
}
</style>
