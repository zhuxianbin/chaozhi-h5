webpackJsonp([4],{361:function(t,e,n){"use strict";function i(t){n(484)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(391),s=n(468),r=n(3),o=i,l=r(a.a,s.a,!1,o,null,null);e.default=l.exports},373:function(t,e,n){"use strict";e.a={data:function(){return{parent:null}},methods:{findParent:function(t){for(var e=this.$parent;e;){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}}},383:function(t,e,n){"use strict";(function(t){function i(t){var e=Date.now(),n=Math.max(0,16-(e-r)),i=setTimeout(t,n);return r=e+n,i}function a(t){return l.call(o,t)}e.a=a;var s=n(17),r=Date.now(),o=s.b?t:window,l=o.requestAnimationFrame||o.webkitRequestAnimationFrame||i;o.cancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout}).call(e,n(21))},391:function(t,e,n){"use strict";var i,a=n(13),s=n.n(a),r=(n(436),n(435)),o=(n(438),n(437)),l=(n(33),n(29)),c=(n(66),n(43));e.a={components:(i={},s()(i,c.a.name,c.a),s()(i,l.a.name,l.a),s()(i,o.a.name,o.a),s()(i,r.a.name,r.a),i),data:function(){return{activeNames:["1"]}}}},402:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".van-collapse-item__title .van-cell__right-icon:before{transition:.3s;transform:rotate(90deg)}.van-collapse-item__title:after{visibility:hidden}.van-collapse-item__wrapper{overflow:hidden;will-change:height;transition:height .3s ease-in-out}.van-collapse-item__content{padding:15px;background-color:#fff}.van-collapse-item--expanded .van-collapse-item__title .van-cell__right-icon:before{transform:rotate(-90deg)}.van-collapse-item--expanded .van-collapse-item__title:after{visibility:visible}",""])},421:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".page-doc .van-collapse-item__content{padding:0}",""])},423:function(t,e,n){var i=n(402);"string"==typeof i&&(i=[[t.i,i,""]]);n(1)(i,{});i.locals&&(t.exports=i.locals)},435:function(t,e,n){"use strict";var i=n(383),a=n(9),s=n(373);e.a=n.i(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.b({expanded:t.expanded}),{"van-hairline--top":t.index}]},[n("cell",t._b({class:t.b("title"),on:{click:t.onClick}},"cell",t.$props,!1),[t._t("title",null,{slot:"title"}),t._t("icon",null,{slot:"icon"}),t._t("value"),t._t("right-icon",null,{slot:"right-icon"})],2),t.inited?n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrapper",class:t.b("wrapper"),on:{transitionend:t.onTransitionEnd}},[n("div",{ref:"content",class:t.b("content")},[t._t("default")],2)]):t._e()],1)},name:"collapse-item",mixins:[s.a],props:{name:[String,Number],icon:String,label:String,title:[String,Number],value:[String,Number],border:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0}},data:function(){return{show:null,inited:null}},computed:{items:function(){return this.parent.items},index:function(){return this.items.indexOf(this)},currentName:function(){return this.isDef(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent.value;return this.parent.accordion?e===this.currentName:e.some(function(e){return e===t.currentName})}},created:function(){this.findParent("van-collapse"),this.items.push(this),this.show=this.expanded,this.inited=this.expanded},destroyed:function(){this.items.splice(this.index,1)},watch:{expanded:function(t,e){var a=this;null!==e&&(t&&(this.show=!0,this.inited=!0),this.$nextTick(function(){var e=a.$refs,s=e.content,r=e.wrapper;if(s&&r){var o=s.clientHeight+"px";r.style.height=t?0:o,n.i(i.a)(function(){r.style.height=t?o:0})}}))}},methods:{onClick:function(){var t=this.parent,e=t.accordion&&this.currentName===t.value?"":this.currentName,n=!this.expanded;this.parent.switch(e,n)},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height=null:this.show=!1}}})},436:function(t,e,n){"use strict";var i=n(5);n.n(i)},437:function(t,e,n){"use strict";var i=n(9);e.a=n.i(i.a)({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"van-hairline--top-bottom",class:t.b()},[t._t("default")],2)},name:"collapse",props:{accordion:Boolean,value:[String,Number,Array]},data:function(){return{items:[]}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter(function(e){return e!==t})),this.$emit("change",t),this.$emit("input",t)}}})},438:function(t,e,n){"use strict";var i=n(5),a=(n.n(i),n(423));n.n(a)},468:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-doc"},[n("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("van-collapse-item",{staticClass:"lala",attrs:{title:"有赞微商城",name:"1"}},[n("van-cell-group",{staticStyle:{"margin-top":"-1px"}},t._l(4,function(e){return n("van-cell",{key:"item"+e},[n("div",{staticClass:"van-clearfix",attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"pull-left"},[t._v("\n              《普通心理学》课件资料一\n            ")]),t._v(" "),n("div",{staticClass:"pull-right t-12 t-gray"},[n("span",{staticClass:"iconfont icon-ziliao"})])])])}))],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},484:function(t,e,n){var i=n(421);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("09f70632",i,!0,{})}});
//# sourceMappingURL=4.js.map?abad87354f2ccde9696d