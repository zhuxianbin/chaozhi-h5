<template>
  <div class="page">
    <div class="t-center mb-20">
      <img src="@/assets/logo.png"/>
    </div>
    <div class="t-lg t-center mb-10">登录您的账号</div>
    <div class="t-xs t-gray t-center mb-20">开启您的学习之旅</div>


    <van-cell-group class="mb-10">
      <van-field
        v-model="params.phone"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="params.captcha"
        placeholder="请输入手机号"
      >
      <van-button slot="button" size="small" :disabled="outTime>0" @click='doSend' type="primary">{{outTime>0?outTime+"s":"获取验证码"}}</van-button>
      </van-field>
    </van-cell-group>

    <div class="ui-form">
      <div class="ui-form-item t-sm">
        <label>
          <input type='checkbox' v-model='isChecked' />
          <span>登录即表示您同意</span>
        </label>
        《<a class="link" @click="popups.show=true;">超职用户协议</a>》
      </div>
      <div class="ui-form-item">
        <mt-button size='large' @click.native='doLogin' :disabled="!isChecked" type="danger">登录超职</mt-button>
      </div>
      <div class="ui-form-item t-center">
        <i class="iconfont icon-return link"></i>
        <a class="link" href="/">返回</a>
      </div>
    </div>
    <mt-popup
      v-model="popups.show"
      popup-transition="popup-fade">
      <div class="ui-alert">
        <div class="ui-alert-title">
          <span>超职用户协议</span>
          <i @click="popups.show=false" class="ui-alert-close iconfont icon-guanbi"></i>
        </div>
        <div class="ui-alert-body">
            <div style="height: 430px; overflow: auto;">
              1、超职教育服务条款的确认和接纳<br >
              　　超职教育的各项网络服务的所有权、运作权归超职教育。超职教育提供的服务将完全按照其发布的章程、服务条款和操作规则严格执行。您必须完全同意所有服务条款并完成注册（报名）程序。<br >
              2、服务简介<br >
              　　基于超职教育所提供的网络服务的重要性，学员应同意：<br >
              　　（1）提供详尽、准确的个人资料。<br >
              　　（2）不断更新注册（报名）资料,符合及时、详尽、准确的要求。超职教育不公开学员的姓名、地址、电子邮箱和笔名，除以下情况外：<br >
              　　1)学员授权超职教育透露这些信息。<br >
              　　2)相应的法律及程序要求超职教育提供学员的个人资料。如果学员提供的资料包含有不正确的信息，超职教育保留结束学员使用网络服务资格的权利。<br >
              3、服务条款的修改和服务修订<br >
              　　超职教育有权在必要时修改服务条款，超职教育服务条款一旦发生变动，将会在重要页面上提示修改内容。如果学员继续享用网络服务，则视为接受服务条款的变动。<br >
              4、学员的账号，密码和安全性<br >
              　　学员一旦注册（报名）成功，成为超职教育的合法学员，将得到一个密码和学员代码，学员将对学员代码、密码安全及学员代码的使用负全部责任；<br >
              　　同时，每个学员的学习代码仅限学员个人私自使用，学员以任何方式与任何第三方共享学习代码或公开学习课程（包括但不限于向任何第三方透露学习课程、与他人共享学习代码、将自己的学习代码提供给第三方使用、将学习课程公开播放或以任何方式供多人同时使用）都是严格禁止的；<br >
              　　上述情况一旦发生，我司将立即停止违规代码的学习权限，同时我司会进一步追究违规人员的法律责任，包含不限于追偿损失、司法追责等。<br >
              　　超职教育不对学员所发布信息的删除或储存失败负责。超职教育有判定学员的行为是否符合超职教育服务条款的要求和精神的保留权利，如果学员违背了服务条款的规定，超职教育有中断对其提供网络服务的权利。<br >
              6、学员管理<br >
              　　严禁发表、散布、传播任何反动、色情及违反国家安全、扰乱社会秩序等有害信息，学员需对自己在网上的行为承担法律责任。学员若在超职教育上散布和传播反动、色情或其他违反国家法律的信息，超职教育的系统记录将作为学员违反法律的证据。<br >

              7、开始/结束服务<br >
              　　学员付费经公司确认后，开通相应的服务权限（服务权限是指学员享受所购买服务的资格）。具体服务内容开通的时间和进度以网站的最新公告或课件更新记录为准。<br >
              　　(1)停止使用超职教育的网络服务。<br >
              　　(2)通告超职教育停止对该学员的服务。<br >
              　　结束学员服务后，学员使用网络服务的权利马上中止。<br >
              8、学员咨询<br >
              　　在如下时间里您可拨打网校的客服咨询电话：<br >
              　　咨询服务电话：<br >
              　　咨询时间：<br >
              9、网络服务内容的所有权<br >
              　　超职教育定义的网络服务内容包括：文字、软件、声音、图片、录像、图表、邮件及广告中的全部内容，超职教育拥有以上内容的完全版权，严禁任何个人或单位在未经超职教育许可的情况下对这些内容进行翻版、复制、转载、篡改等一切用于商业活动的行为；超职教育的学员/会员账号只为本网校的个人注册用户本人所专有，严禁一个账号多人使用，如若发现上述情况，超职教育将有权停止其账号使用，并没收其非法所得，并根据情节的严重程度对其实行相应罚款或诉诸法律。<br >
              10、免责条款<br >
              　　当本网站以链接形式推荐其他网站内容时，由于本站并不控制相关网站和资源，因此访问者需理解并同意，本站并不对这些网站或资源的可用性负责，且不保证从这些网站获取的任何内容、产品、服务或其他材料的真实性、合法性，对于任何因使用或信赖从此类网站或资源上获取的内容、产品、服务或其他材料而造成（或声称造成）的任何直接或间接损失，本站均不承担任何责任。<br >
              　　由于用户将个人密码告知他人或与他人共享注册帐户，由此导致的任何个人资料泄露，本网站不负任何责任。<br >
              　　任何由于黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营的不可抗力而造成的个人资料泄露、丢失、被盗用或被窜改等，本网站均得免责。<br >
              　　本网站如因系统维护或升级而需暂停服务时，将事先公告。若因线路及非本公司控制范围外的硬件故障或其它不可抗力而导致暂停服务，于暂停服务期间造成的一切不便与损失，本网站不负任何责任。<br >
              　　本网站使用者因为违反本声明的规定而触犯中华人民共和国法律的，一切后果自己负责，本网站不承担任何责任。<br >
              　　本声明未涉及的问题参见国家有关法律法规，当本声明与国家法律法规冲突时，以国家法律法规为准。<br ></div>
        </div>
      </div>
    </mt-popup>
    </div>
</template>

<script>
import { Field, CellGroup, Button } from "vant";
import { mapActions } from "vuex";
export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data() {
    return {
      params: {
        phone: "",
        captcha: ""
      },
      outTime: 0,
      isChecked: true,
      popups: {
        show: false
      }
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
        this.$router.push("./index");

        // action="./#/center/index"
      });
    }
    // toBack() {
    //   window.location.href = "./";
    // }
  },
  mounted() {
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
