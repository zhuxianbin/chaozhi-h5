(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca3131a"],{"6dc1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"t-gray t-sm",staticStyle:{padding:".5rem"}},[t._v("请确认您的订单信息，并按提示完成支付")]),i("div",{staticClass:"order-info ui-list"},[t._m(0),i("div",{staticClass:"ui-list-item",attrs:{flex:""}},[i("div",{staticClass:"ui-list-label",attrs:{"flex-box":"0"}},[t._v("订单价格")]),i("div",{attrs:{"flex-box":"1"}},[i("span",{staticClass:"t-orange"},[t._v(t._s(t.price))]),t._v("元\n        ")])])]),i("div",{staticStyle:{padding:"1rem",background:"#fff"}},[i("div",{staticClass:"mb-20 t-center"},[i("div",{staticClass:"t-xs mb-10"},[t._v("请扫二维码进行支付")]),i("img",{staticStyle:{width:"50vw",height:"50vw","max-width":"300px","max-height":"300px"},attrs:{src:t.qrcode}})])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui-list-item",attrs:{flex:""}},[i("div",{staticClass:"ui-list-label",attrs:{"flex-box":"0"}},[t._v("订单内容")]),i("div",{attrs:{"flex-box":"1"}},[t._v("支付ACI注册国际心理咨询师培训考试报名费")])])}],n=i("c93e"),c=i("2f62"),o=0,r={name:"paySiginUp",data:function(){return{qrcode:"",price:""}},methods:Object(n["a"])({},Object(c["b"])({vuex_paySingup:"paySingup",vuex_getSingupPayInfo:"getSingupPayInfo"}),{paySingup:function(){var t=this;this.vuex_paySingup({}).then(function(e){var i=e.code,s=e.msg,a=e.qrcode,n=e.price;console.log(i,s),t.qrcode=a,t.price=n.toFixed(2)})},getPayInfo:function(){var t=this;this.vuex_getSingupPayInfo({}).then(function(e){var i=e.code;e.msg,e.qrcode;200==i&&t.$messagebox.alert("支付成功,立即填写资料").then(function(){t.$router.push("./info")})})}}),mounted:function(){this.paySingup(),o=setInterval(this.getPayInfo,6180)},destroyed:function(){console.log("destroyed"),clearTimeout(o)}},u=r,l=(i("f75a"),i("2877")),d=Object(l["a"])(u,s,a,!1,null,"85394b52",null);d.options.__file="signup.vue";e["default"]=d.exports},dbe6:function(t,e,i){},f75a:function(t,e,i){"use strict";var s=i("dbe6"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-1ca3131a.e8ed13d7.js.map