(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e3a75c8"],{b13a:function(t,e,a){"use strict";a.r(e);var s,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[200!=t.userInfo.code||t.userInfo.orders?t._e():a("div",{staticClass:"mb-10",staticStyle:{background:"#fff",padding:".5rem"},attrs:{flex:""}},[t._m(0),a("div",{attrs:{"flex-box":"1"}},[a("div",{staticClass:"mb-10"},[t._v("亲爱的学员：")]),a("div",{staticClass:"t-xs mb-10"},[t._v("\n        您还未参考网校的ACI注册国际心理咨询师课程培训，请先缴费学习课程，再进行报名。\n      ")]),a("div",{staticClass:"t-xs"},[a("van-button",{attrs:{type:"danger",size:"small"}},[t._v("点击购买课程")])],1)])]),a("div",t._l(t.rows,function(e){return a("div",{key:e.id,staticClass:"mb-10",staticStyle:{background:"#fff","box-shadow":"0 1px 2px 0 #eee"}},[a("van-card",{attrs:{title:e.product_name,thumb:e.product_img}}),a("van-cell-group",t._l(e.products,function(e){return a("van-cell",{key:e.id,attrs:{title:e.live_name,label:e.live_st,value:"内容"}},[0===e.status?a("van-button",{attrs:{size:"small",type:"default",disabled:""}},[a("i",{staticClass:"iconfont icon-zhibodating"}),a("span",[t._v("直播还没开始")])]):t._e(),e.status>0?a("van-button",{attrs:{size:"small",type:"primary",tag:"a",href:e.live_url+"?token="+t.Token}},[a("i",{staticClass:"iconfont icon-bofang1"}),a("span",[t._v("进入直播课堂")])]):t._e(),e.status<0?a("van-button",{attrs:{size:"small",type:"danger",tag:"a",href:e.live_url}},[a("i",{staticClass:"iconfont icon-kechenghuifang"}),a("span",[t._v("回放直播视频")])]):t._e()],1)}))],1)})),a("van-popup",{attrs:{"popup-transition":"popup-fade"},model:{value:t.play.show,callback:function(e){t.$set(t.play,"show",e)},expression:"play.show"}},[a("div",{staticClass:"ui-alert",staticStyle:{width:"100vw"}},[a("div",{staticClass:"ui-alert-body",staticStyle:{padding:"2vw"}},[t.play.show?a("iframe",{staticStyle:{width:"96vw",height:"72vw"},attrs:{frameborder:"0",src:t.play.src}}):t._e()])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-right":"1rem"},attrs:{"flex-box":"0"}},[a("i",{staticClass:"iconfont icon-course",staticStyle:{color:"#FF5900","font-size":"2rem"}})])}],o=a("c93e"),c=a("a322"),r=(a("7f7f"),a("b970")),l=a("2f62"),u={components:(s={},Object(c["a"])(s,r["b"].name,r["b"]),Object(c["a"])(s,r["c"].name,r["c"]),Object(c["a"])(s,r["d"].name,r["d"]),Object(c["a"])(s,r["e"].name,r["e"]),s),data:function(){return{rows:[],play:{show:!1,src:""}}},computed:Object(o["a"])({},Object(l["c"])({userInfo:function(t){return t.userInfo}})),methods:Object(o["a"])({},Object(l["b"])({getLiveList:"getLiveList"}),{getRows:function(){var t=this;this.getLiveList({p:1,offset:100}).then(function(e){var a=e.data;e.code;t.rows=a})},getInfo:function(t,e){var a=this;this.getCourseInfo({pid:t.product_id,p:1,offset:100}).then(function(t){var s=t.data;t.code;a.rows[e].downList=s.rows})},getPlan:function(t,e){var a=this;this.getCoursePlan({pid:t.product_id,p:1,offset:100}).then(function(t){t.code;var s=t.data;t.msg;a.rows[e].planLine=s.rows})},toPlay:function(t){var e=t.view_url;this.play.src=e,this.play.show=!0}}),mounted:function(){this.getRows(1)}},f=u,d=(a("d9ba"),a("2877")),p=Object(d["a"])(f,i,n,!1,null,"21169454",null);p.options.__file="list.live.vue";e["default"]=p.exports},d9ba:function(t,e,a){"use strict";var s=a("f1fe"),i=a.n(s);i.a},f1fe:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7e3a75c8.bf450e63.js.map