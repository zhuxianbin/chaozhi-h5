webpackJsonp([1],{342:function(a,t,e){"use strict";function s(a){e(374)}Object.defineProperty(t,"__esModule",{value:!0});var n=e(347),o=e(369),i=e(5),r=s,c=i(n.a,o.a,!1,r,"data-v-2a426015",null);t.default=c.exports},347:function(a,t,e){"use strict";var s,n=e(13),o=e.n(n),i=(e(64),e(63)),r=(e(66),e(65)),c=(e(41),e(32)),p=(e(33),e(27)),l=(e(69),e(68)),u=(e(10),e(14),e(136)),m=e(20);t.a={name:"register",components:(s={},o()(s,l.a.name,l.a),o()(s,p.a.name,p.a),o()(s,c.a.name,c.a),o()(s,r.a.name,r.a),o()(s,i.a.name,i.a),o()(s,"agreement",u.a),s),data:function(){return{params:{phone:"",captcha:"",password:"",name:""},outTime:0,isChecked:!0,popups:{show:!1,component:"agreement",title:"超职用户协议"}}},methods:{doSend:function(){var a=this;e.i(m.c)({phone:this.params.phone}).then(function(t){var e=t.code,s=t.msg;if(a.$toast(s),200!=e)return!1;a.outTime=60,window.timer=setInterval(function(){a.outTime>0?a.outTime--:clearInterval(window.timer)},1e3)})},submitForm:function(a){var t=this;e.i(m.d)({phone:this.params.phone,captcha:this.params.captcha,password:this.params.password}).then(function(a){if(200!=a.code)return t.$toast(a.msg),!1;t.$toast("设置成功"),t.$router.back()})}}}},353:function(a,t,e){t=a.exports=e(0)(void 0),t.push([a.i,".page[data-v-2a426015]{height:100vh;box-sizing:border-box;padding:1rem}",""])},369:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page"},[a._m(0),a._v(" "),e("div",{staticClass:"t-lg t-center mb-10"},[a._v("找回您的账号")]),a._v(" "),e("div",{staticClass:"t-xs t-gray t-center mb-20"},[a._v("开启您的学习之旅")]),a._v(" "),e("van-cell-group",{staticClass:"mb-10"},[e("van-field",{attrs:{placeholder:"请输入手机号"},model:{value:a.params.phone,callback:function(t){a.$set(a.params,"phone",t)},expression:"params.phone"}}),a._v(" "),e("van-field",{attrs:{placeholder:"请输入验证码"},model:{value:a.params.captcha,callback:function(t){a.$set(a.params,"captcha",t)},expression:"params.captcha"}},[e("van-button",{attrs:{slot:"button",size:"small",disabled:a.outTime>0,type:"primary"},on:{click:a.doSend},slot:"button"},[a._v(a._s(a.outTime>0?a.outTime+"s":"获取验证码"))])],1),a._v(" "),e("van-field",{attrs:{type:"password",placeholder:"设置登陆密码至少6位"},model:{value:a.params.password,callback:function(t){a.$set(a.params,"password",t)},expression:"params.password"}})],1),a._v(" "),e("van-row",{staticClass:"mb-20",attrs:{gutter:"10"}},[e("van-col",{attrs:{span:"8"}},[e("van-button",{attrs:{block:!0,type:"default",size:"large"},on:{click:function(t){a.$router.back()}}},[a._v("返 回")])],1),a._v(" "),e("van-col",{attrs:{span:"16"}},[e("van-button",{attrs:{block:!0,type:"danger",size:"large",disabled:!a.isChecked},on:{click:a.submitForm}},[a._v("提 交")])],1)],1),a._v(" "),e("mt-popup",{attrs:{"popup-transition":"popup-fade"},model:{value:a.popups.show,callback:function(t){a.$set(a.popups,"show",t)},expression:"popups.show"}},[e("div",{staticClass:"ui-alert"},[e("div",{staticClass:"ui-alert-title"},[e("span",[a._v(a._s(a.popups.title))]),a._v(" "),e("i",{staticClass:"ui-alert-close iconfont icon-guanbi",on:{click:function(t){a.popups.show=!1}}})]),a._v(" "),e("div",{staticClass:"ui-alert-body"},[e(a.popups.component,{tag:"component"})],1)])])],1)},n=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"t-center mb-20"},[s("img",{attrs:{src:e(42)}})])}],o={render:s,staticRenderFns:n};t.a=o},374:function(a,t,e){var s=e(353);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(2)("03ea6c2f",s,!0,{})}});
//# sourceMappingURL=1.js.map?d0aad0416eeec3446409