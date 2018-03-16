<template>
  <div class="page">
    <div class="t-center mb-20">
      <img src="@/assets/logo.png"/>
    </div>
    <div class="t-lg t-center mb-10">登录您的账号</div>
    <div class="t-xs t-gray t-center mb-20">开启您的学习之旅</div>
    <div class="ui-form">
      <div class="ui-form-item">
        <div class="ui-input">
          <div class="ui-input-icon">
            <i class="iconfont icon-shoujihao"></i>
          </div>
          <input type='text' v-model='params.phone' placeholder="使用的手机号码">
        </div>
      </div>
      <div class="ui-form-item" flex>
        <div class="ui-input" flex-box="1">
          <div class="ui-input-icon">
            <i class="iconfont icon-unie615"></i>
          </div>
          <input type='text' v-model='params.captcha' placeholder="短信验证码">
        </div>
        <div class="ui-input-after" flex-box="0">
          <button class='btn-link' :disabled="outTime>0" @click='doSend'>{{outTime>0?outTime+"s":"获取验证码"}}</button>
        </div>
      </div>
      <div class="ui-form-item">
        <label>
          <input type='checkbox' v-model='isChecked' />
          <span>登录即表示您同意</span>
        </label>
        《<a class="link">超职用户协议</a>》
      </div>
      <div class="ui-form-item">
        <mt-button size='large' @click.native='doLogin' :disabled="!isChecked" type="danger">登录超职</mt-button>
      </div>
      <div class="ui-form-item t-center">
        <i class="iconfont icon-return link"></i>
        <a class="link">返回</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      params: {
        phone: "",
        captcha: ""
      },
      outTime: 0,
      isChecked: true
    };
  },
  methods: {
    ...mapActions({
      Login: "Login",
      getPhoneCaptcha: "getPhoneCaptcha"
    }),
    doSend() {
      this.getPhoneCaptcha({
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
    doLogin() {
      this.Login(this.params).then(({ code, msg, token, expired }) => {
        if (code != 200) {
          return this.$toast(msg);
        }
        this.$storage.set("userToken", { token, expired });
        this.$router.push("./center/index");

        // action="./#/center/index"
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
.ui-form {
  .ui-form-item {
    padding-bottom: 1rem;
  }

  .ui-input-after {
    height: 2rem;
    line-height: 2rem;
    width: 40vw;
    text-align: center;
  }

  .ui-input {
    position: relative;
    .ui-input-icon {
      position: absolute;
      left: 0.5rem;
      top: 0.2rem;
      font-size: 1.2rem;
    }
    .ui-input-icon + input {
      padding-left: 1.5rem;
    }
    input {
      display: inline-block;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      padding: 0.2rem 0.5rem;
      box-sizing: border-box;
      height: 2rem;
      font-size: 0.7rem;
      &:focus {
        border: 1px solid #f40;
      }
    }
  }
}
</style>
