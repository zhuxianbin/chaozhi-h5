<template>
  <div class="page">
    <div class="t-center mb-20">
      <img src="@/assets/logo.png" @click="doDevTools"/>
    </div>
    <div class="t-lg t-center mb-10">登录您的账号</div>
    <div class="t-xs t-gray t-center mb-20">开启您的学习之旅</div>


    <van-cell-group class="mb-10">
      <van-field
        clearable
        v-model="params.phone"
        placeholder="请输入手机号"
      />
      <van-field
        type="password"
        clearable
        v-model="params.password"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-row gutter="10" class="mb-20">
      <van-col span="8"><van-button @click="$router.push('./register')" :block="true" type="default" size="large">注册</van-button></van-col>
      <van-col span="16"><van-button @click='doLogin' :block="true" type="danger" size="large" :disabled="!isChecked">登录超职</van-button></van-col>
    </van-row>
    <div class="t-center">
      <a class="link" @click="$router.push('./forget')">忘记密码?</a>
    </div>
    <van-actionsheet v-model="devtool.show" :actions="devtool.actions" />
  </div>
</template>

<script>
import { Field, CellGroup, Button, Row, Col, Actionsheet } from "vant";
import { mapActions } from "vuex";
import { getToken, setToken } from "@/utils/auth";
import register from "./register";
import { userLogin } from "@/utils/api";
import { servers, setServer, weixinAuth } from "@/utils/config";
// console.log(servers);
export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Actionsheet.name]: Actionsheet,
    register
  },
  data() {
    return {
      params: {
        phone: "",
        password: ""
      },
      outTime: 0,
      isChecked: true,
      popups: {
        show: false,
        component: "register",
        title: "注册账号"
      },
      devtool: {
        click: 0,
        show: false,
        actions: servers.map(item => {
          return {
            name: item.label,
            subname: item.value,
            callback: this.doChangeServer
          };
        })
      }
    };
  },
  methods: {
    ...mapActions({
      Login: "Login"
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
      userLogin(this.params).then(({ code, msg, token, expired }) => {
        if (code == 200) {
          setToken(token, expired);
          this.bindWeiXinOpenId(window.location.origin);
        }
      });
    },
    doDevTools() {
      this.devtool.click++;
      if (this.devtool.click > 5) {
        this.devtool.show = true;
      }
    },
    doChangeServer(item) {
      setServer(item.subname);
      // set
      window.location.reload();
    }
  },
  created() {
    let { token } = this.$storage.get("userToken");
    if (token) {
      this.$router.push("./index");
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
  @inputHeight: 1.8rem;
  .ui-form-item {
    padding-bottom: 1rem;
  }

  .ui-input-after {
    height: @inputHeight;
    line-height: @inputHeight;
    width: 40vw;
    text-align: center;
  }

  .ui-input {
    position: relative;
    .ui-input-icon {
      position: absolute;
      left: 0.5rem;
      top: 0;
      height: @inputHeight;
      line-height: @inputHeight;
      vertical-align: middle;
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
      height: @inputHeight;
      font-size: 0.6rem;
      &:focus {
        border: 1px solid #f40;
      }
    }
  }
}
</style>
