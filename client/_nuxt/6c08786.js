(window.webpackJsonp=window.webpackJsonp||[]).push([[27,7,12,14],{293:function(t,n,e){var content=e(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("22d83b63",content,!0,{sourceMap:!1})},294:function(t,n,e){"use strict";e.r(n);e(28),e(199);var r=e(11),o=(e(65),e(292)),c={name:"MyNav",data:function(){return{data:[],profile:{},baseUrl:o.a,telegram:o.b,twitter:o.d,isModalActive:!1}},mounted:function(){this.fetchData()},methods:{changeTheme:function(){this.$emit("changeTheme")},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$get("/product");case 3:return e=n.sent,t.data=e,n.next=7,t.$axios.$get("/auth/1",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 7:r=n.sent,t.profile=r,n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})))()},logout:function(){localStorage.removeItem("jwt"),this.$router.push("/auth")}}},d=(e(297),e(47)),component=Object(d.a)(c,(function(){var t=this,n=t._self._c;return n("div",[n("nav",{staticClass:"nav px-5"},[n("div",{staticClass:"justify-between flex items-center h-full"},[n("div",{staticClass:"flex items-center"},[t._m(0),t._v(" "),n("NuxtLink",{staticClass:"text-[#fafafa] hover-el font-medium rounded-[50px] fo11px",attrs:{to:"/"}},[t._v("\n            Dashboard\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"text-[#fafafa] hover-el font-medium rounded-[50px] fo11px",attrs:{to:"/document"}},[t._v("\n            Docs\n          ")])],1),t._v(" "),n("div",{staticClass:"flex items-center"},[t.profile.email?n("div",{staticClass:"cursor-pointe p-2 special-c",on:{click:function(n){t.isModalActive=!0}}},[n("i",{staticClass:"fa-regular fa-user text-[16px] color-primary"})]):n("nuxt-link",{staticClass:"cursor-pointe p-2 special-c",attrs:{to:"/auth"}},[n("img",{attrs:{width:"20",src:"/user-icon.png",alt:"user-icon"}})]),t._v(" "),t.isModalActive?n("div",{staticClass:"modal__bg",on:{click:function(n){t.isModalActive=!1}}},[n("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"flex items-start flex-col"},[n("div",{staticClass:"flex"},[t._m(1),t._v(" "),t.profile?n("div",{staticClass:"flex flex-col"},[n("span",[t._v(t._s(t.profile.email.split("@")[0].substr(0,3)+"***"+t.profile.email.split("@")[1]))]),t._v(" "),n("span",{staticClass:"text-[12px] text-gray"},[t._v("UID: "+t._s(t.profile._id))])]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("button",{staticClass:"logout text-[16px]",on:{click:t.logout}},[n("i",{staticClass:"fa-solid fa-power-off mr-2"}),t._v("\n                  Log out\n                ")])])])]):t._e(),t._v(" "),n("div",{staticClass:"cursor-pointe p-2"},[n("img",{attrs:{width:"16",src:"/theme.png",alt:"theme-icon"},on:{click:t.changeTheme}})])],1)])]),t._v(" "),t.data?n("div",{staticClass:"flex items"},t._l(t.data,(function(e){return n("nuxt-link",{key:e._id,staticClass:"card flex align-center cursor-pointer",attrs:{to:"/pages/".concat(e._id)}},[n("img",{staticClass:"rounded-[50%] img mr-[16px]",attrs:{width:"60px",height:"6px",src:t.baseUrl+e.photoUrl[0].url,alt:"img"}}),t._v(" "),n("div",{staticClass:"text flex flex-col"},[n("span",{staticClass:"title text-[12px] font-medium"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("span",{staticClass:"text-[12px] font-medium text-gray"},[t._v("\n            "+t._s(e.maxPool)+" "+t._s(e.poolCurrency)+"\n          ")]),t._v(" "),n("span",{staticClass:"text-[12px] font-medium text-gray"},[t._v("\n            "+t._s(e.startedAt)+"\n          ")])])])})),1):t._e()])}),[function(){var t=this._self._c;return t("a",{staticClass:"mr-[16px]",attrs:{href:"/"}},[t("img",{attrs:{src:"/logo.png",width:"220px",alt:"logo"}})])},function(){var t=this._self._c;return t("div",{staticClass:"bg-gray-300 rounded-[50%] flex items-center justify-center h-[44px] w-[44px] mr-2"},[t("img",{attrs:{src:"/user-pfp.png",alt:"user-pfp"}})])}],!1,null,"a09c85c0",null);n.default=component.exports;installComponents(component,{Nav:e(294).default})},295:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},296:function(t,n,e){var r=e(3),o=e(23),c=e(13),d=e(295),l=r("".replace),f="["+d+"]",v=RegExp("^"+f+f+"*"),x=RegExp(f+f+"*$"),m=function(t){return function(n){var e=c(o(n));return 1&t&&(e=l(e,v,"")),2&t&&(e=l(e,x,"")),e}};t.exports={start:m(1),end:m(2),trim:m(3)}},297:function(t,n,e){"use strict";e(293)},298:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.modal__bg[data-v-a09c85c0]{\n  position:fixed;\n  top:0;\n  bottom:0;\n  right:0;\n  left:0\n}\n.modal[data-v-a09c85c0]{\n  position:absolute;\n  border-radius:15px;\n  border:2px solid var(--bgColor);\n  background-color:var(--primary);\n  right:55px;\n  padding:20px;\n  bottom:auto;\n  top:65px;\n  box-shadow:0 0 15px 6px var(--bgColor)\n}\n.color-primary[data-v-a09c85c0]{\n  margin-top:5px;\n  color:#babbbc\n}\n.logout[data-v-a09c85c0]{\n  border-radius:10px;\n  transition:background-color .3s ease-in-out\n}\nhr[data-v-a09c85c0]{\n  width:100%;\n  height:1px;\n  margin:12px 3px;\n  border-color:var(--grayTextColor)\n}\n.cursor-pointe[data-v-a09c85c0]{\n  cursor:pointer\n}\n.font-medium[data-v-a09c85c0]{\n  font-weight:500!important\n}\n.nav[data-v-a09c85c0]{\n  width:100%;\n  position:fixed;\n  top:0;\n  left:0;\n  height:80px;\n  background:var(--primary);\n  color:var(--textColor)\n}\n.img[data-v-a09c85c0]{\n  border:4px solid var(--tabHover);\n  height:60px\n}\n.items[data-v-a09c85c0]{\n  margin-top:85px;\n  overflow-x:scroll\n}\n.items[data-v-a09c85c0]::-webkit-scrollbar{\n  height:4px;\n  width:4px\n}\n.items[data-v-a09c85c0]::-webkit-scrollbar-thumb{\n  border-radius:20px!important;\n  background-color:#363636\n}\n.items[data-v-a09c85c0]::-webkit-scrollbar-track{\n  border-radius:20px!important;\n  background-color:var(--bgColor)\n}\na[data-v-a09c85c0]{\n  font-size:14px;\n  text-transform:uppercase;\n  font-weight:600\n}\n.card[data-v-a09c85c0]{\n  padding:16px;\n  border-radius:10px;\n  background-color:var(--primary);\n  height:96px;\n  min-width:300px!important;\n  width:300px!important;\n  margin:0 2px 4px\n}\n.text-gray[data-v-a09c85c0]{\n  color:var(--grayTextColor)\n}\n.cursor-pointer[data-v-a09c85c0]{\n  transition:background-color .3s ease-in-out\n}\n.cursor-pointer[data-v-a09c85c0]:hover{\n  background-color:var(--aqua)\n}\n@media (max-width:640px){\n.special-c[data-v-a09c85c0]{\n    width:36px\n}\n.fo11px[data-v-a09c85c0]{\n    font-size:10px\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},299:function(t,n,e){var content=e(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("57cbabcd",content,!0,{sourceMap:!1})},300:function(t,n,e){var r=e(3);t.exports=r(1..valueOf)},301:function(t,n,e){var content=e(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("50166ca8",content,!0,{sourceMap:!1})},302:function(t,n,e){"use strict";var r=e(10),o=e(5),c=e(3),d=e(114),l=e(17),f=e(12),v=e(201),x=e(40),m=e(81),h=e(200),_=e(4),y=e(82).f,C=e(31).f,w=e(16).f,k=e(300),M=e(296).trim,P="Number",T=o.Number,A=T.prototype,E=o.TypeError,N=c("".slice),I=c("".charCodeAt),j=function(t){var n=h(t,"number");return"bigint"==typeof n?n:$(n)},$=function(t){var n,e,r,o,c,d,l,code,f=h(t,"number");if(m(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=M(f),43===(n=I(f,0))||45===n){if(88===(e=I(f,2))||120===e)return NaN}else if(48===n){switch(I(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(d=(c=N(f,2)).length,l=0;l<d;l++)if((code=I(c,l))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(d(P,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var D,L=function(t){var n=arguments.length<1?0:T(j(t)),e=this;return x(A,e)&&_((function(){k(e)}))?v(Object(n),e,L):n},S=r?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;S.length>O;O++)f(T,D=S[O])&&!f(L,D)&&w(L,D,C(T,D));L.prototype=A,A.constructor=L,l(o,P,L,{constructor:!0})}},303:function(t,n,e){var content=e(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("3162bd82",content,!0,{sourceMap:!1})},304:function(t,n,e){"use strict";e(299)},305:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.lds-roller[data-v-c1edd370]{\n  display:inline-block;\n  position:relative;\n  width:80px;\n  height:80px\n}\n.lds-roller div[data-v-c1edd370]{\n  -webkit-animation:lds-roller-c1edd370 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-roller-c1edd370 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  transform-origin:40px 40px\n}\n.lds-roller div[data-v-c1edd370]:after{\n  content:" ";\n  display:block;\n  position:absolute;\n  width:7px;\n  height:7px;\n  border-radius:50%;\n  background:#fff;\n  margin:-4px 0 0 -4px\n}\n.lds-roller div[data-v-c1edd370]:first-child{\n  -webkit-animation-delay:-36ms;\n          animation-delay:-36ms\n}\n.lds-roller div[data-v-c1edd370]:first-child:after{\n  top:63px;\n  left:63px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(2){\n  -webkit-animation-delay:-72ms;\n          animation-delay:-72ms\n}\n.lds-roller div[data-v-c1edd370]:nth-child(2):after{\n  top:68px;\n  left:56px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(3){\n  -webkit-animation-delay:-.108s;\n          animation-delay:-.108s\n}\n.lds-roller div[data-v-c1edd370]:nth-child(3):after{\n  top:71px;\n  left:48px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(4){\n  -webkit-animation-delay:-.144s;\n          animation-delay:-.144s\n}\n.lds-roller div[data-v-c1edd370]:nth-child(4):after{\n  top:72px;\n  left:40px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(5){\n  -webkit-animation-delay:-.18s;\n          animation-delay:-.18s\n}\n.lds-roller div[data-v-c1edd370]:nth-child(5):after{\n  top:71px;\n  left:32px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(6){\n  -webkit-animation-delay:-.216s;\n          animation-delay:-.216s\n}\n.lds-roller div[data-v-c1edd370]:nth-child(6):after{\n  top:68px;\n  left:24px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(7){\n  -webkit-animation-delay:-.252s;\n          animation-delay:-.252s\n}\n.lds-roller div[data-v-c1edd370]:nth-child(7):after{\n  top:63px;\n  left:17px\n}\n.lds-roller div[data-v-c1edd370]:nth-child(8){\n  -webkit-animation-delay:-.288s;\n          animation-delay:-.288s\n}\n.lds-roller div[data-v-c1edd370]:nth-child(8):after{\n  top:56px;\n  left:12px\n}\n@-webkit-keyframes lds-roller-c1edd370{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-roller-c1edd370{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},306:function(t,n,e){"use strict";e.r(n);e(41);var r=e(11),o=(e(65),e(39),e(15),e(49),e(83),e(84),e(80),{name:"MyMain",components:{MyCard:e(315).default},data:function(){return{data:[],isLoading:!1,isModalActive:!1,isAllocationActive:!1,items:[],searchValue:"",tabs:["Upcoming","Live","Success","Your Allocation"],currentTab:"Live",currentPage:0}},computed:{slicedData:function(){var t=this,n=0===this.currentPage?0:6*this.currentPage;return this.data.slice(n,n+6).filter((function(n){return t.searchValue?n.title.toLowerCase().includes(t.searchValue.toLowerCase()):n}))}},watch:{currentTab:function(){this.fetchData()}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$post("/product/findByCategory",{type:t.currentTab});case 2:return e=n.sent,n.next=5,t.$axios.$post("/constants/find",{name:"isAllocationActive"});case 5:return r=n.sent,t.isAllocationActive=r.text,n.next=9,t.$axios.$get("/allocation");case 9:o=n.sent,t.items=o,t.data=e;case 12:case"end":return n.stop()}}),n)})))()},claim:function(){var t=this;this.isModalActive=!0,this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),1e4)},close:function(){!0!==this.isLoading&&(this.isModalActive=!1,this.items=[])}}}),c=(e(312),e(47)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"tab-container flex flex-col first-section"},[n("ul",{staticClass:"flex justify-center tabs"},t._l(t.tabs,(function(e,i){return n("li",{key:i,staticClass:"flex flex-col tab-w items-center min-w-[150px] cursor-pointer",class:{active:t.currentTab===e},on:{click:function(n){t.currentTab=e,t.currentPage=0}}},["Upcoming"===e?n("i",{staticClass:"fa-regular fa-clock text-[20px]"}):t._e(),t._v(" "),"Live"===e?n("i",{staticClass:"fa-regular fa-circle text-[20px]"}):t._e(),t._v(" "),"Success"===e?n("i",{staticClass:"fa-solid fa-check text-[20px]"}):t._e(),t._v(" "),"Your Allocation"===e?n("i",{staticClass:"fa-solid fa-xmark text-[20px]"}):t._e(),t._v(" "),n("span",{staticClass:"h-[20px] text-[14px] text-center"},[t._v("\n            "+t._s(e)+"\n          ")])])})),0)]),t._v(" "),"Your Allocation"!==t.currentTab?n("div",{staticClass:"flex tab-container mt-2 py-3 px-5 color-primary"},[t._v("\n      "+t._s(t.data.length)+" Pre Sales\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"flex flex-wrap bg-darker px-2 py-1"},[t._l(t.slicedData,(function(t){return n("div",{key:t._id,staticClass:"w-50"},[n("MyCard",{staticClass:"rounded-lg",attrs:{data:t}})],1)})),t._v(" "),"Your Allocation"===t.currentTab?n("div",{staticClass:"w-full mt-1 text-center"},[n("table",{staticClass:"w-full"},[t._m(0),t._v(" "),"true"===t.isAllocationActive?n("tbody",t._l(t.items,(function(e){return n("tr",{key:e.name+e.date,staticClass:"min-h-[40px]"},[n("td",{staticClass:"border-x-2 border-y-2 h-[40px]"},[t._v("\n                "+t._s(e.token)+"\n              ")]),t._v(" "),n("td",{staticClass:"border-2 h-[40px]"},[t._v("\n                "+t._s(e.date)+"\n              ")]),t._v(" "),n("td",{staticClass:"border-2 h-[40px]"},[t._v("\n                "+t._s(e.percentage)+"\n              ")]),t._v(" "),n("td",{staticClass:"border-x-2 border-y-2 h-[40px]"},[t._v("\n                "+t._s(e.profit)+"\n              ")])])})),0):t._e()]),t._v(" "),n("button",{staticClass:"border rounded-[35px] min-w-[190px] px-5 py-2 my-[20px] claim disabled:cursor-not-allowed",attrs:{disabled:0===t.items.length||"false"===t.isAllocationActive},on:{click:t.claim}},[n("span",{staticClass:"font-bold"},[t._v("+")]),t._v("\n          Claim Your USDT\n        ")])]):t._e()],2),t._v(" "),"Your Allocation"!==t.currentTab?n("div",{staticClass:"pagination font-[12px] font-medium"},[n("button",{staticClass:"disabled:text-[#4E5153]",attrs:{disabled:0===t.currentPage},on:{click:function(n){t.currentPage-=1}}},[n("i",{staticClass:"fa-solid fa-backward",class:{"text-[#4E5153]":0===t.currentPage}}),t._v("\n        Previous\n      ")]),t._v(" "),n("h1",{staticClass:"mx-3"},[t._v(t._s(t.currentPage+1)+"/"+t._s(Math.ceil(t.data.length/6)))]),t._v(" "),n("button",{staticClass:"disabled:text-[#4E5153]",attrs:{disabled:t.currentPage===Math.ceil(t.data.length/6)-1},on:{click:function(n){t.currentPage+=1}}},[t._v("\n        Next\n        "),n("i",{staticClass:"fa-solid fa-forward",class:{"text-[#4E5153]":t.currentPage===Math.ceil(t.data.length/6)-1}})])]):t._e()]),t._v(" "),t.isModalActive?n("div",{staticClass:"modal",on:{click:t.close}},[t.isLoading?n("div",[n("UISpinner")],1):n("div",{staticClass:"modal__content",on:{click:function(t){t.stopPropagation()}}},[n("span",{staticClass:"font-medium text-[14px] text-[#b9babb]"},[t._v("\n        Congratulation! We sent USDT To Your Wallet\n      ")])])]):t._e()])}),[function(){var t=this,n=t._self._c;return n("thead",[n("tr",{staticClass:"bg-[#232323] font-regular"},[n("th",{staticClass:"p-2 border-r-2"},[t._v("\n                Token\n              ")]),t._v(" "),n("th",{staticClass:"p-2 border-r-2"},[t._v("\n                Date\n              ")]),t._v(" "),n("th",{staticClass:"p-2 border-r-2"},[t._v("\n                Percentage\n              ")]),t._v(" "),n("th",{staticClass:"p-2"},[t._v("\n                Profit\n              ")])])])}],!1,null,"6d1bf65c",null);n.default=component.exports;installComponents(component,{UISpinner:e(307).default,Main:e(306).default})},307:function(t,n,e){"use strict";e.r(n);var r={},o=(e(304),e(47)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"lds-roller"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])}],!1,null,"c1edd370",null);n.default=component.exports},308:function(t,n,e){"use strict";e(301)},309:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-646cb52d]{\n  background:var(--primary);\n  height:80px;\n  width:100%;\n  position:relative;\n  bottom:0;\n  left:0\n}\n.el-hover-bg-rounded[data-v-646cb52d],footer[data-v-646cb52d]{\n  display:flex;\n  align-items:center;\n  justify-content:center\n}\n.el-hover-bg-rounded[data-v-646cb52d]{\n  border-radius:50%;\n  padding:12px 14px\n}\n.el-hover-bg[data-v-646cb52d]{\n  background:#333538\n}\n.el-hover-bg-rounded[data-v-646cb52d]:hover{\n  padding:12px 14px\n}\n.hover-el[data-v-646cb52d]{\n  border-radius:25px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},311:function(t,n,e){"use strict";e.r(n);var r=e(11),o=(e(65),e(292)),c={name:"MyFooter",data:function(){return{telegram:o.b,twitter:o.d}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$get("/constants");case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})))()}}},d=(e(308),e(47)),component=Object(d.a)(c,(function(){var t=this,n=t._self._c;return n("footer",[n("nuxt-link",{staticClass:"hover-el cursor-pointer font-medium text-[#b9babb] text-[14px]",class:{"el-hover-bg":"/terms"===t.$route.path},attrs:{to:"/terms"}},[t._v("\n      Terms and Conditions\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"hover-el cursor-pointer font-medium text-[#b9babb] text-[14px]",class:{"el-hover-bg":"/terms/privacy-policy"===t.$route.path},attrs:{to:"/terms/privacy-policy"}},[t._v("\n      Privacy Policy\n    ")])],1)}),[],!1,null,"646cb52d",null);n.default=component.exports},312:function(t,n,e){"use strict";e(303)},313:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nmain[data-v-6d1bf65c]{\n  min-height:calc(100vh - 300px)\n}\n.modal[data-v-6d1bf65c]{\n  position:fixed;\n  top:0;\n  bottom:0;\n  right:0;\n  left:0;\n  background:rgba(0,0,0,.3);\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.modal__content[data-v-6d1bf65c]{\n  background:var(--primary);\n  border-radius:5px;\n  padding:20px\n}\n.claim[data-v-6d1bf65c]{\n  border:none;\n  background-color:#68d67c;\n  width:170px\n}\n.claim[data-v-6d1bf65c]:disabled{\n  background:var(--grayTextColor)\n}\ntd[data-v-6d1bf65c],th[data-v-6d1bf65c]{\n  border-color:#363636\n}\n.w-50[data-v-6d1bf65c]{\n  margin:2px 4px;\n  width:calc(50% - 4px)\n}\n.w-50[data-v-6d1bf65c]:nth-child(odd){\n  margin-left:0\n}\n.w-50[data-v-6d1bf65c]:nth-child(2n){\n  margin-right:0\n}\n.pagination[data-v-6d1bf65c]{\n  margin-top:5px;\n  background:var(--primary);\n  width:100%;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  padding:10px 0\n}\n@media (max-width:1200px){\n.w-50[data-v-6d1bf65c]{\n    width:100%\n}\n}\n.tabs li[data-v-6d1bf65c]{\n  padding:20px\n}\n.tab-container[data-v-6d1bf65c],.tabs li[data-v-6d1bf65c]{\n  transition:all .3s ease-in-out\n}\n.tab-container[data-v-6d1bf65c]{\n  background:var(--primary);\n  color:var(--textColor);\n  width:100%;\n  display:flex\n}\nli i[data-v-6d1bf65c],li span[data-v-6d1bf65c]{\n  color:var(--grayTextColor)\n}\n.tabs li[data-v-6d1bf65c]:hover{\n  background:#292a2d;\n  color:var(--textColor)\n}\n.active i[data-v-6d1bf65c],.active span[data-v-6d1bf65c]{\n  color:var(--light-aqua)!important\n}\n.active[data-v-6d1bf65c]:hover{\n  background:#143847!important;\n  color:var(--textColor)\n}\n.first-section[data-v-6d1bf65c]{\n  border-radius:20px 20px 0 0;\n  padding-top:16px;\n  padding-left:32px;\n  padding-right:32px\n}\n.color-primary[data-v-6d1bf65c]{\n  color:var(--grayTextColor);\n  font-size:16px;\n  font-weight:400\n}\n.bg-darker[data-v-6d1bf65c]{\n  background:var(--underCardColor)\n}\n@media(max-width:640px){\n.tab-w[data-v-6d1bf65c]{\n    min-width:85px\n}\n.tab-container[data-v-6d1bf65c]{\n    padding-bottom:7px\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},331:function(t,n,e){var content=e(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("4b2b0229",content,!0,{sourceMap:!1})},332:function(t,n,e){var content=e(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("da62cf1a",content,!0,{sourceMap:!1})},357:function(t,n,e){"use strict";e(331)},358:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.arond[data-v-53d375a0]{\n  background:var(--primary);\n  width:36px;\n  height:36px;\n  border-radius:50%;\n  transition:background-color .2s ease-in-out\n}\n.arond[data-v-53d375a0]:hover{\n  background:#aaa\n}\n.card[data-v-53d375a0]{\n  border-radius:0 0 20px 20px;\n  max-width:770px;\n  background:var(--primary)\n}\n.bx[data-v-53d375a0]{\n  border-radius:20px;\n  box-shadow:0 5.40728px 10.8146px rgba(0,0,0,.3)!important\n}\n.card-header[data-v-53d375a0]{\n  background:#151617;\n  border-radius:20px 20px 0 0;\n  color:#b9babb;\n  font-size:20px;\n  font-weight:500;\n  padding:16px\n}\na[data-v-53d375a0]{\n  transition:all .2s ease-in-out\n}\na[data-v-53d375a0]:hover{\n  background-color:#1c2228\n}\nmain[data-v-53d375a0]{\n  min-height:calc(100vh - 300px)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},359:function(t,n,e){"use strict";e(332)},360:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\np{\n  margin-bottom:16px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},394:function(t,n,e){"use strict";e.r(n);var r=e(11),o=(e(65),{name:"TermsPage",components:{MyNav:e(294).default},data:function(){return{data:""}},mounted:function(){this.fetchData()},methods:{changeTheme:function(){"#181a1e"===getComputedStyle(document.documentElement).getPropertyValue("--primary")?(document.documentElement.style.setProperty("--primary","#ffffff"),document.documentElement.style.setProperty("--bgColor","#eaeef2"),document.documentElement.style.setProperty("--textColor","#000"),document.documentElement.style.setProperty("--underCardColor","#F4F4F9"),document.documentElement.style.setProperty("--hoverColor","#c4c4c4")):(document.documentElement.style.setProperty("--primary","#181a1e"),document.documentElement.style.setProperty("--bgColor","#0d0e10"),document.documentElement.style.setProperty("--textColor","#fff"),document.documentElement.style.setProperty("--underCardColor","#17181B"),document.documentElement.style.setProperty("--hoverColor","#27282b"))},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$get("/constants");case 3:e=n.sent,t.data=e[2].text,n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}}),c=(e(357),e(359),e(47)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("MyNav",{on:{changeTheme:t.changeTheme}}),t._v(" "),n("div",{staticClass:"container"},[n("main",{staticClass:"flex justify-center"},[n("div",{staticClass:"flex flex-col bx"},[n("div",{staticClass:"card-header flex items-center"},[n("nuxt-link",{staticClass:"flex items-center justify-center arond mr-2",attrs:{to:"/"}},[n("i",{staticClass:"fa-solid fa-arrow-left"})]),t._v("\n          Terms and Conditions\n        ")],1),t._v(" "),n("div",{staticClass:"card w-full"},[n("div",{domProps:{innerHTML:t._s(t.data)}})])])])]),t._v(" "),n("MyFooter")],1)}),[],!1,null,"53d375a0",null);n.default=component.exports;installComponents(component,{Main:e(306).default,MyFooter:e(311).default})}}]);