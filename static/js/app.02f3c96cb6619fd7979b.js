webpackJsonp([1],{25:function(t,n,e){"use strict";n.a={name:"app"}},26:function(t,n,e){"use strict";n.a={data:function(){return{jobList:["网络建设","一线服务","服务支撑","市场营销"]}},methods:{formSubmit:function(t){t.preventDefault();var n=t.target,e=n.name.value,a=n.phone.value,r=n.job.value;return e?a?/^\d{8,13}$/.test(a)?void this.$router.push({name:"card",query:{name:e,phone:a,job:r}}):void this.$toasted.show("手机号码无效"):void this.$toasted.show("请填写手机号码"):void this.$toasted.show("请填写姓名")}}}},27:function(t,n,e){"use strict";var a=e(57),r=e.n(a),i=e(60),s=e.n(i),o=e(96),c=e(97),u=e.n(c);n.a={data:function(){return{drawDone:!1,imgSrc:u.a,cardSrc:""}},created:function(){},mounted:function(){var t=this;return s()(r.a.mark(function n(){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=t.$refs.cardTemplate,e.complete?t.draw():e.onload=function(n){return t.draw()};case 2:case"end":return n.stop()}},n,t)}))()},methods:{draw:function(){var t=this;return s()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.drawCard({background:t.$refs.cardTemplate,canvas:t.$refs.canvas,info:t.$route.query});case 2:t.cardSrc=n.sent,t.drawDone=!0;case 4:case"end":return n.stop()}},n,t)}))()}}}},42:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(24),r=e(46),i=e(50),s=e(99),o=e.n(s);a.a.use(o.a,{position:"bottom-center",duration:1500,singleton:!0}),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,render:function(t){return t(r.a)}})},46:function(t,n,e){"use strict";function a(t){e(47)}var r=e(25),i=e(49),s=e(15),o=a,c=s(r.a,i.a,!1,o,null,null);n.a=c.exports},47:function(t,n){},49:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("main",[e("router-view")],1)])},r=[],i={render:a,staticRenderFns:r};n.a=i},50:function(t,n,e){"use strict";var a=e(24),r=e(51),i=e(52),s=e(55);a.a.use(r.a),n.a=new r.a({routes:[{path:"/",name:"input",component:i.a},{path:"/card",name:"card",component:s.a}],mode:"hash"})},52:function(t,n,e){"use strict";function a(t){e(53)}var r=e(26),i=e(54),s=e(15),o=a,c=s(r.a,i.a,!1,o,null,null);n.a=c.exports},53:function(t,n){},54:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-input"},[e("form",{on:{submit:t.formSubmit}},[e("input",{attrs:{name:"name",placeholder:"请输入你的姓名"}}),t._v(" "),e("input",{attrs:{name:"phone",type:"tel",placeholder:"请输入你的手机号码"}}),t._v(" "),e("select",{attrs:{name:"job"}},t._l(t.jobList,function(n,a){return e("option",{key:a,domProps:{value:n}},[t._v(t._s(n))])})),t._v(" "),e("button",{staticClass:"submit",attrs:{type:"submit"}})])])},r=[],i={render:a,staticRenderFns:r};n.a=i},55:function(t,n,e){"use strict";function a(t){e(56)}var r=e(27),i=e(98),s=e(15),o=a,c=s(r.a,i.a,!1,o,null,null);n.a=c.exports},56:function(t,n){},96:function(t,n,e){"use strict";function a(t){var n=t.canvas,e=t.background;t.info;n.width=e.naturalWidth,n.height=e.naturalHeight}function r(t){var n=t.canvas,e=t.background,r=t.info;a.apply(void 0,arguments);var s=function(t){return i(n.width,t)},c=n.getContext("2d");return c.drawImage(e,0,0,n.width,n.height),c.fillStyle="#2070d0",c.font="bold "+s(3.8)+"px 'Microsoft Yahei'",c.fillText(r.job,s(38),s(45.5)),c.fillText(r.name,s(62.5),s(45.5)),c.fillText(r.phone,s(28),s(52)),c.font="bold "+s(5)+"px 'Microsoft Yahei'",c.fillStyle="black",c.fillText(r.name,s(71),s(142.5)),o.a.resolve(n.toDataURL("image/png"))}function i(t,n){return t*n/100}var s=e(28),o=e.n(s);n.a={setCanvasSize:a,drawCard:r}},97:function(t,n,e){t.exports=e.p+"static/img/promise-card.png"},98:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-card"},[t.cardSrc?e("img",{staticClass:"promise-card",attrs:{src:t.cardSrc}}):t._e(),t._v(" "),e("canvas",{ref:"canvas",staticClass:"canvas"}),t._v(" "),t._m(0),t._v(" "),t.drawDone?e("div",{staticClass:"instruction"},[t._v("<长按保存>")]):t._e()])},r=[function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{ref:"cardTemplate",attrs:{src:t.imgSrc,hidden:""}})}],i={render:a,staticRenderFns:r};n.a=i}},[42]);
//# sourceMappingURL=app.02f3c96cb6619fd7979b.js.map