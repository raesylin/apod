(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/apod/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f7":function(t,e,a){},"21bb":function(t,e,a){"use strict";var n=a("2dad"),r=a.n(n);r.a},"27fb":function(t,e,a){},"2b35":function(t,e,a){"use strict";var n=a("27fb"),r=a.n(n);r.a},"2d4e":function(t,e,a){"use strict";var n=a("6e2b"),r=a.n(n);r.a},"2dad":function(t,e,a){},3312:function(t,e,a){},"53d7":function(t,e,a){"use strict";var n=a("01f7"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("ecee"),o=a("c074"),s=a("ad3d"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],u=a("2f62"),l=(a("99af"),a("d3b7"),a("ac1f"),a("25f0"),a("466d"),a("4d90"),a("1276"),a("3835")),d=(a("4d63"),"eDPVcxeGKAu9cLMSsn9MEIMnvjOtvSmKABqngm6m"),p=new RegExp(/[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}/g),f=3e3,v={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},m=["01","02","03","04","05","06","07","08","09","10","11","12"],h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iso";if("string"===typeof t){var a=t.match(p);if(a){var n=t.split("-"),r=Object(l["a"])(n,3),o=r[0],s=r[1],i=r[2];if("intl"===e){var c=v[s],u=parseInt(i,10);return"".concat(u," ").concat(c,", ").concat(o)}return"".concat(o,"-").concat(s,"-").concat(i)}return t}throw Error("Date format not supported")},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iso";if(t instanceof Date){var a=t.getFullYear(),n=m[t.getMonth()],r=t.getDate().toString();if("intl"===e){var o=v[n];return"".concat(r," ").concat(o,", ").concat(a)}var s=1===r.length?r.padStart("0"):r;return"".concat(a,"-").concat(n,"-").concat(s)}return t.toString()},g=function(t){var e=t.match(p);if(e){var a=t.split("-"),n=Object(l["a"])(a,3),r=n[0],o=n[1],s=n[2],i=parseInt(o,10)-1,c=parseInt(s,10);return new Date(r,i,c)}return new Date(t)},b={methods:{goPrev:function(){var t=g(this.$route.params.date),e=new Date(t.setDate(t.getDate()-1));this.$router.push({name:"Home",params:{date:_(e)}})},goNext:function(){var t=_(),e=g(this.$route.params.date);if(t!==_(e)){var a=new Date(e.setDate(e.getDate()+1));this.$router.push({name:"Home",params:{date:_(a)}})}}}},w={mixins:[b],created:function(){var t=this;window.addEventListener("keyup",(function(e){"ArrowLeft"===e.key?t.goPrev():"ArrowRight"===e.key&&t.goNext()})),setTimeout((function(){t.toggleCanvas(!0)}),f)},methods:Object(u["b"])(["toggleCanvas"])},y=w,x=(a("5c0b"),a("2877")),E=Object(x["a"])(y,i,c,!1,null,null,null),O=E.exports,C=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",style:{backgroundImage:"url("+t.meta.hdurl+"), url("+t.meta.url+")"}},[a("Canvas",{attrs:{isExpanded:t.isExpanded,title:t.meta.title,copyright:t.meta.copyright}},["image"===t.meta.media_type?a("ImageWrapper",{attrs:{slot:"media"},slot:"media"}):a("VideoWrapper",{attrs:{slot:"media",url:t.meta.url},slot:"media"})],1),a("Meta",{attrs:{meta:t.meta,isCollapsed:t.isExpanded}}),a("Footer")],1)},D=[],S=(a("96cf"),a("1da1")),k=a("5530"),P=function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(e,a){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,a);case 2:if(n=t.sent,r=n.status,!(r>=400)){t.next=6;break}throw new Error(n.message||"Error");case 6:return t.abrupt("return",n.json());case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),A={getPicData:function(t){return Object(S["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="https://api.nasa.gov/planetary/apod?api_key=".concat(d,"&date=").concat(t),e.next=3,P(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()}};n["a"].use(u["a"]);var H=new u["a"].Store({state:{isExpanded:!1,meta:{}},mutations:{SET_IS_EXPANDED:function(t,e){t.isExpanded=e},SET_PIC_METADATA:function(t,e){t.meta=e}},actions:{toggleCanvas:function(t,e){var a=t.commit;a("SET_IS_EXPANDED",e)},fetchPicMeta:function(t,e){return Object(S["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,A.getPicData(e);case 3:r=a.sent,n("SET_PIC_METADATA",r);case 5:case"end":return a.stop()}}),a)})))()}},modules:{}}),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["canvas",{"canvas--expanded":t.isExpanded}],on:{mouseenter:function(e){t.isHovered=!0},mouseleave:function(e){t.isHovered=!1}}},[t._t("media"),a("div",{staticClass:"canvas__text"},[a("span",{staticClass:"canvas__copyright"},[t._v("© "+t._s(t.copyright))]),a("h1",{class:["canvas__title",{"canvas__title--show":t.isHovered&&t.isExpanded}]},[t._v(" "+t._s(t.title)+" ")])]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isHovered,expression:"isHovered"}],staticClass:"canvas__nav canvas__nav--left",on:{click:t.goPrev}},[a("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isHovered&&!t.isToday,expression:"isHovered && !isToday"}],staticClass:"canvas__nav canvas__nav--right",on:{click:t.goNext}},[a("font-awesome-icon",{attrs:{icon:["fas","chevron-right"]}})],1)]),a("div",{staticClass:"canvas__toggle",on:{click:function(){t.toggleCanvas(!t.isExpanded)}}},[a("font-awesome-icon",{class:["canvas__toggle-arrow",{"canvas__toggle-arrow--rotated":t.isExpanded}],attrs:{icon:["fas","long-arrow-alt-right"]}})],1)],2)},T=[],$={mixins:[b],data:function(){return{isHovered:!1,today:_()}},props:{isExpanded:{type:Boolean,default:!1},title:{type:String,default:"Astronomy Picture of the Day"},copyright:{type:String,required:!1}},computed:{isToday:function(){return this.$route.params.date===this.today}},methods:Object(k["a"])({},Object(u["b"])(["toggleCanvas"]))},R=$,I=(a("875a"),Object(x["a"])(R,M,T,!1,null,null,null)),N=I.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["footer",{"footer--hidden":t.isHidden}],on:{mouseenter:function(e){t.isHidden=!1},mouseleave:function(e){t.isHidden=!0}}},[a("div",{staticClass:"footer__toggle"},[t._v(t._s(t.isHidden?"⇑":"⇓"))]),t._m(0)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer__content"},[a("h1",{staticClass:"footer__title"},[t._v("Astronomy Picture of the Day")]),a("span",{staticClass:"footer__sub"},[t._v(" Source: "),a("a",{staticClass:"footer__link",attrs:{href:"https://api.nasa.gov/",target:"_blank"}},[t._v("NASA")])]),a("span",{staticClass:"footer__sub"},[t._v(" Redesign and development: "),a("a",{staticClass:"footer__link",attrs:{href:"https://raesylin.github.io",target:"_blank"}},[t._v("Rachel Lin")])])])}],L={data:function(){return{isHidden:!1}},created:function(){var t=this,e=!1;e||setTimeout((function(){t.isHidden=!0}),f)}},W=L,q=(a("53d7"),Object(x["a"])(W,J,F,!1,null,null,null)),B=q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-right"}},[a("div",{class:["meta",{"meta--collapsed":t.isCollapsed}]},[a("span",{staticClass:"meta__sub"},[t._v(t._s(t.intlDate))]),a("h3",{staticClass:"meta__title"},[t._v(t._s(t.meta.title))]),a("p",{staticClass:"meta__explanation"},[t._v(t._s(t.meta.explanation))])])])},K=[],X={props:{meta:{type:Object,default:function(){return{}}},isCollapsed:{type:Boolean,default:!1}},computed:{intlDate:function(){return h(this.meta.date,"intl")}}},G=X,U=(a("2b35"),Object(x["a"])(G,V,K,!1,null,null,null)),Y=U.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-wrapper",style:{backgroundImage:"url("+t.url+")"}})},Q=[],Z={props:{url:{type:String,default:""}}},tt=Z,et=(a("2d4e"),Object(x["a"])(tt,z,Q,!1,null,null,null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-wrapper"},[a("iframe",{staticClass:"video-wrapper__frame",attrs:{src:t.url,frameborder:"0"}})])},rt=[],ot={props:{url:{type:String,default:""}}},st=ot,it=(a("c70d"),Object(x["a"])(st,nt,rt,!1,null,null,null)),ct=it.exports,ut={components:{Canvas:N,Footer:B,Meta:Y,ImageWrapper:at,VideoWrapper:ct},props:{date:{type:String,required:!1}},computed:Object(k["a"])({},Object(u["c"])(["isExpanded","meta"])),beforeRouteUpdate:function(t,e,a){return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.dispatch("fetchPicMeta",t.params.date);case 3:a(),e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log("error fetching pic meta",e.t0),a(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()},created:function(){H.dispatch("fetchPicMeta",this.date)}},lt=ut,dt=(a("21bb"),Object(x["a"])(lt,j,D,!1,null,null,null)),pt=dt.exports;n["a"].use(C["a"]);var ft=[{path:"/",redirect:function(){return"/date/".concat(_())}},{path:"/date/:date",name:"Home",component:pt,props:!0},{path:"*",redirect:"/"}],vt=new C["a"]({mode:"history",base:"/apod/",routes:ft}),mt=vt;r["c"].add(o["a"],o["b"],o["d"],o["c"]),n["a"].component("font-awesome-icon",s["a"]),n["a"].config.productionTip=!1,new n["a"]({router:mt,store:H,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"6e2b":function(t,e,a){},"875a":function(t,e,a){"use strict";var n=a("ed2e"),r=a.n(n);r.a},"9c0c":function(t,e,a){},c70d:function(t,e,a){"use strict";var n=a("3312"),r=a.n(n);r.a},ed2e:function(t,e,a){}});
//# sourceMappingURL=app.71132fc4.js.map