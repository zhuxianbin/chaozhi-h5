webpackJsonp([8],{367:function(t,a,s){"use strict";function e(t){s(462)}Object.defineProperty(a,"__esModule",{value:!0});var i=s(395),n=s(445),o=s(3),r=e,c=o(i.a,n.a,!1,r,"data-v-15a550f6",null);a.default=c.exports},395:function(t,a,s){"use strict";var e,i=s(11),n=s.n(i),o=s(13),r=s.n(o),c=(s(33),s(29)),l=(s(66),s(43)),u=(s(136),s(135)),d=(s(42),s(32)),v=s(10);a.a={components:(e={},r()(e,d.a.name,d.a),r()(e,u.a.name,u.a),r()(e,l.a.name,l.a),r()(e,c.a.name,c.a),e),data:function(){return{rows:[],play:{show:!1,src:""}}},computed:n()({},s.i(v.c)({userInfo:function(t){return t.userInfo}})),methods:n()({},s.i(v.b)({getLiveList:"getLiveList"}),{getRows:function(){var t=this;this.getLiveList({p:1,offset:100}).then(function(a){var s=a.data;a.code;t.rows=s})},getInfo:function(t,a){var s=this;this.getCourseInfo({pid:t.product_id,p:1,offset:100}).then(function(t){var e=t.data;t.code;s.rows[a].downList=e.rows})},getPlan:function(t,a){var s=this;this.getCoursePlan({pid:t.product_id,p:1,offset:100}).then(function(t){var e=(t.code,t.data);t.msg;s.rows[a].planLine=e.rows})},toPlay:function(t){var a=t.view_url;this.play.src=a,this.play.show=!0}}),mounted:function(){this.getRows(1)}}},405:function(t,a,s){a=t.exports=s(0)(void 0),a.push([t.i,".page[data-v-15a550f6]{min-height:100vh;box-sizing:border-box;padding:0 0 50px}.mint-tab-item[data-v-15a550f6]{padding:5px 0}.van-card[data-v-15a550f6]{background:#fff}",""])},445:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[200!=t.userInfo.code||t.userInfo.orders?t._e():s("div",{staticClass:"mb-10",staticStyle:{background:"#fff",padding:".5rem"},attrs:{flex:""}},[t._m(0),t._v(" "),s("div",{attrs:{"flex-box":"1"}},[s("div",{staticClass:"mb-10"},[t._v("亲爱的学员：")]),t._v(" "),s("div",{staticClass:"t-xs mb-10"},[t._v("\n        您还未参考网校的ACI注册国际心理咨询师课程培训，请先缴费学习课程，再进行报名。\n      ")]),t._v(" "),s("div",{staticClass:"t-xs"},[s("mt-button",{attrs:{type:"danger",size:"small"}},[t._v("点击购买课程")])],1)])]),t._v(" "),s("div",t._l(t.rows,function(a){return s("div",{key:a.id,staticClass:"mb-10",staticStyle:{background:"#fff","box-shadow":"0 1px 2px 0 #eee"}},[s("van-card",{attrs:{title:a.product_name,thumb:a.product_img}}),t._v(" "),s("van-cell-group",t._l(a.products,function(a){return s("van-cell",{key:a.id,attrs:{title:a.live_name,label:a.live_st,value:"内容"}},[0===a.status?s("van-button",{attrs:{size:"small",type:"default",disabled:""}},[s("i",{staticClass:"iconfont icon-zhibodating"}),t._v(" "),s("span",[t._v("直播还没开始")])]):t._e(),t._v(" "),a.status>0?s("van-button",{attrs:{size:"small",type:"primary",tag:"a",href:a.live_url+"?token="+t.Token}},[s("i",{staticClass:"iconfont icon-bofang1"}),t._v(" "),s("span",[t._v("进入直播课堂")])]):t._e(),t._v(" "),a.status<0?s("van-button",{attrs:{size:"small",type:"danger",tag:"a",href:a.live_url}},[s("i",{staticClass:"iconfont icon-kechenghuifang"}),t._v(" "),s("span",[t._v("回放直播视频")])]):t._e()],1)}))],1)})),t._v(" "),s("mt-popup",{attrs:{"popup-transition":"popup-fade"},model:{value:t.play.show,callback:function(a){t.$set(t.play,"show",a)},expression:"play.show"}},[s("div",{staticClass:"ui-alert",staticStyle:{width:"100vw"}},[s("div",{staticClass:"ui-alert-body",staticStyle:{padding:"2vw"}},[t.play.show?s("iframe",{staticStyle:{width:"96vw",height:"72vw"},attrs:{frameborder:"0",src:t.play.src}}):t._e()])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"margin-right":"1rem"},attrs:{"flex-box":"0"}},[s("i",{staticClass:"iconfont icon-course",staticStyle:{color:"#FF5900","font-size":"2rem"}})])}],n={render:e,staticRenderFns:i};a.a=n},462:function(t,a,s){var e=s(405);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(2)("40c1c43c",e,!0,{})}});
//# sourceMappingURL=8.js.map?542bde85c95c5e9b0a7c