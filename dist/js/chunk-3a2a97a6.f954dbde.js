(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2a97a6"],{"0464":function(t,a,e){},"408b":function(t,a,e){"use strict";var s=e("0464"),n=e.n(s);n.a},bb23:function(t,a,e){"use strict";e.r(a);var s,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),e("div",{staticClass:"t-lg t-center mb-10"},[t._v("找回您的账号")]),e("div",{staticClass:"t-xs t-gray t-center mb-20"},[t._v("开启您的学习之旅")]),e("van-cell-group",{staticClass:"mb-10"},[e("van-field",{attrs:{placeholder:"请输入手机号"},model:{value:t.params.phone,callback:function(a){t.$set(t.params,"phone",a)},expression:"params.phone"}}),e("van-field",{attrs:{placeholder:"请输入验证码"},model:{value:t.params.captcha,callback:function(a){t.$set(t.params,"captcha",a)},expression:"params.captcha"}},[e("van-button",{attrs:{slot:"button",size:"small",disabled:t.outTime>0,type:"primary"},on:{click:t.doSend},slot:"button"},[t._v(t._s(t.outTime>0?t.outTime+"s":"获取验证码"))])],1),e("van-field",{attrs:{type:"password",placeholder:"设置登陆密码至少6位"},model:{value:t.params.password,callback:function(a){t.$set(t.params,"password",a)},expression:"params.password"}})],1),e("van-row",{staticClass:"mb-20",attrs:{gutter:"10"}},[e("van-col",{attrs:{span:"8"}},[e("van-button",{attrs:{block:!0,type:"default",size:"large"},on:{click:function(a){t.$router.back()}}},[t._v("返 回")])],1),e("van-col",{attrs:{span:"16"}},[e("van-button",{attrs:{block:!0,type:"danger",size:"large",disabled:!t.isChecked},on:{click:t.submitForm}},[t._v("提 交")])],1)],1),e("mt-popup",{attrs:{"popup-transition":"popup-fade"},model:{value:t.popups.show,callback:function(a){t.$set(t.popups,"show",a)},expression:"popups.show"}},[e("div",{staticClass:"ui-alert"},[e("div",{staticClass:"ui-alert-title"},[e("span",[t._v(t._s(t.popups.title))]),e("i",{staticClass:"ui-alert-close iconfont icon-guanbi",on:{click:function(a){t.popups.show=!1}}})]),e("div",{staticClass:"ui-alert-body"},[e(t.popups.component,{tag:"component"})],1)])])],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"t-center mb-20"},[s("img",{attrs:{src:e("cf05")}})])}],c=e("a322"),i=(e("7f7f"),e("b970")),r=(e("2f62"),e("5f87"),e("124c")),p=e("7c15"),l={name:"register",components:(s={},Object(c["a"])(s,i["i"].name,i["i"]),Object(c["a"])(s,i["e"].name,i["e"]),Object(c["a"])(s,i["b"].name,i["b"]),Object(c["a"])(s,i["m"].name,i["m"]),Object(c["a"])(s,i["f"].name,i["f"]),Object(c["a"])(s,"agreement",r["a"]),s),data:function(){return{params:{phone:"",captcha:"",password:"",name:""},outTime:0,isChecked:!0,popups:{show:!1,component:"agreement",title:"超职用户协议"}}},methods:{doSend:function(){var t=this;Object(p["e"])({phone:this.params.phone}).then(function(a){var e=a.code,s=a.msg;if(t.$toast(s),200!=e)return!1;t.outTime=60,window.timer=setInterval(function(){t.outTime>0?t.outTime--:clearInterval(window.timer)},1e3)})},submitForm:function(t){var a=this;Object(p["k"])({phone:this.params.phone,captcha:this.params.captcha,password:this.params.password}).then(function(t){if(200!=t.code)return a.$toast(t.msg),!1;a.$toast("设置成功"),a.$router.back()})}}},u=l,m=(e("408b"),e("2877")),d=Object(m["a"])(u,n,o,!1,null,"dbf1b3b0",null);d.options.__file="forget.vue";a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3a2a97a6.f954dbde.js.map