(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c127008"],{"28a5":function(t,e,n){n("214f")("split",2,function(t,e,r){"use strict";var s=n("aae3"),i=r,a=[].push,o="split",u="length",c="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[u]||2!="ab"[o](/(?:ab)*/)[u]||4!="."[o](/(.?)(.?)/)[u]||"."[o](/()()/)[u]>1||""[o](/.?/)[u]){var l=void 0===/()??/.exec("")[1];r=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!s(t))return i.call(n,t,e);var r,o,d,p,f,v=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),w=0,_=void 0===e?4294967295:e>>>0,b=new RegExp(t.source,h+"g");l||(r=new RegExp("^"+b.source+"$(?!\\s)",h));while(o=b.exec(n)){if(d=o.index+o[0][u],d>w&&(v.push(n.slice(w,o.index)),!l&&o[u]>1&&o[0].replace(r,function(){for(f=1;f<arguments[u]-2;f++)void 0===arguments[f]&&(o[f]=void 0)}),o[u]>1&&o.index<n[u]&&a.apply(v,o.slice(1)),p=o[0][u],w=d,v[u]>=_))break;b[c]===o.index&&b[c]++}return w===n[u]?!p&&b.test("")||v.push(""):v.push(n.slice(w)),v[u]>_?v.slice(0,_):v}}else"0"[o](void 0,0)[u]&&(r=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(n,s){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,s):r.call(String(i),n,s)},r]})},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),s=n("d8e8"),i=n("4bf8"),a=n("79e5"),o=[].sort,u=[1,2,3];r(r.P+r.F*(a(function(){u.sort(void 0)})||!a(function(){u.sort(null)})||!n("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),s(t))}})},"9df3":function(t,e,n){"use strict";var r=n("a314"),s=n.n(r);s.a},"9f9b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("van-swipe",{ref:"swiper",attrs:{"show-indicators":!1,loop:!1,"initial-swipe":t.initial,touchable:!1},on:{change:t.onChange}},t._l(t.rows,function(e,r){return n("van-swipe-item",{key:e.id},[n("van-cell-group",{staticClass:"mb-10"},[n("van-cell",{attrs:{title:t.types[e.type]}},[n("div",{staticClass:"t-right"},[n("span",{staticClass:"t-red"},[t._v(t._s(r+1))]),t._v("/"),n("span",[t._v(t._s(t.rows.length))])])])],1),n("van-cell-group",[n("van-cell",{attrs:{title:e.title}}),n("div",{staticClass:"answer-options"},[1==e.type?n("van-radio-group",{model:{value:e.user_answer,callback:function(n){t.$set(e,"user_answer",n)},expression:"item.user_answer"}},t._l(e.option,function(e,r){return n("van-radio",{key:r,attrs:{name:r}},[t._v(t._s(e))])})):t._e(),2==e.type?n("van-checkbox-group",{model:{value:e.user_answer_arr,callback:function(n){t.$set(e,"user_answer_arr",n)},expression:"item.user_answer_arr"}},t._l(e.option,function(e,r){return n("van-checkbox",{key:r,attrs:{name:r}},[t._v(t._s(e))])})):t._e(),3==e.type?[n("van-field",{attrs:{type:"textarea",placeholder:"请输入答案",rows:"3",autosize:""},model:{value:e.user_answer,callback:function(n){t.$set(e,"user_answer",n)},expression:"item.user_answer"}})]:t._e()],2)],1)],1)})),n("div",{staticClass:"pf pf-b"},[n("van-button",{attrs:{square:"",type:"danger",size:"large"},on:{click:t.doNext}},[t._v(t._s(t.btnText))])],1)],1)},s=[],i=n("c93e"),a=(n("55dd"),n("28a5"),n("cadf"),n("551c"),n("097d"),n("e8a2")),o=null,u={data:function(){var t=this.$route.params,e=t.id,n=t.type;return{params:{id:e,type:n},rows:[],current:0,initial:0,types:{1:"单选题",2:"多选题",3:"问答题"}}},computed:{btnText:function(){return this.current<this.rows.length-1?"下一题":"提交答案"}},methods:{getQuestionList:function(){var t=this;Object(a["c"])(this.params).then(function(e){var n=e.data;t.rows=n.map(function(t){return 2==t.type&&(t.user_answer_arr=t.user_answer.length>0?t.user_answer.split(","):[]),t})})},onChange:function(t){this.current=t},doNext:function(){this.current++,this.current<this.rows.length?o.swipeTo(this.current):this.submitQuestionAnswer()},submitQuestionAnswer:function(){var t=this;this.$toast.loading({mask:!0,message:"提交中..."});var e=this.rows.map(function(t){var e=t.user_answer;return 2==t.type&&(e=t.user_answer_arr.sort().join(",")),{id:t.id,answer:e}});Object(a["d"])(Object(i["a"])({},this.params,{answer:e})).then(function(){t.$toast.clear(),t.$router.push({name:"hybrid-study-score",params:t.params})}).catch(function(){t.$toast.clear()})}},created:function(){this.getQuestionList()},mounted:function(){o=this.$refs.swiper}},c=u,l=(n("9df3"),n("2877")),d=Object(l["a"])(c,r,s,!1,null,"13ace8e2",null);d.options.__file="index.vue";e["default"]=d.exports},a314:function(t,e,n){},aae3:function(t,e,n){var r=n("d3f4"),s=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==s(t))}},e8a2:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return o});var r=n("b775");function s(t){var e=t.course_id;return Object(r["a"])({url:"/api/node/list",method:"post",data:{course_id:e}})}function i(t){return r["a"].post("/api/course/plan",t)}function a(t){var e=t.id,n=t.type;return Object(r["a"])({url:"/api/question/list",method:"post",data:{id:e,type:n}})}function o(t){var e=t.id,n=t.type,s=t.answer;return Object(r["a"])({url:"/api/question/submit-answer",method:"post",data:{id:e,type:n,answer:s}})}}}]);
//# sourceMappingURL=chunk-1c127008.14596e04.js.map