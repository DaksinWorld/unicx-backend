(window.webpackJsonp=window.webpackJsonp||[]).push([[22,11],{292:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"d",(function(){return l}));var r="https://usdtcrypt.app",o={greenText:"Lock Team Tokens",greenTextMain:"Locked: refers to token locks with maturity at least 7 days after the presale begins.",orangeText:"-100% price impact",orangeTextMain:"if unlocked tokens are dumped on the pool. Decrease risk in this presale by asking the devs to lock team tokens."},c="https://t.me/CYUSDT_Announcement_Channel",l="https://twitter.com/UNCX_token"},293:function(t,n,e){var content=e(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("22d83b63",content,!0,{sourceMap:!1})},294:function(t,n,e){"use strict";e.r(n);e(28),e(199);var r=e(11),o=(e(65),e(292)),c={name:"MyNav",data:function(){return{data:[],profile:{},baseUrl:o.a,telegram:o.b,twitter:o.d,isModalActive:!1}},mounted:function(){this.fetchData()},methods:{changeTheme:function(){this.$emit("changeTheme")},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$get("/product");case 3:return e=n.sent,t.data=e,n.next=7,t.$axios.$get("/auth/1",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 7:r=n.sent,t.profile=r,n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})))()},logout:function(){localStorage.removeItem("jwt"),this.$router.push("/auth")}}},l=(e(297),e(47)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",[n("nav",{staticClass:"nav px-5"},[n("div",{staticClass:"justify-between flex items-center h-full"},[n("div",{staticClass:"flex items-center"},[t._m(0),t._v(" "),n("NuxtLink",{staticClass:"text-[#fafafa] hover-el font-medium rounded-[50px] fo11px",attrs:{to:"/"}},[t._v("\n            Dashboard\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"text-[#fafafa] hover-el font-medium rounded-[50px] fo11px",attrs:{to:"/document"}},[t._v("\n            Docs\n          ")])],1),t._v(" "),n("div",{staticClass:"flex items-center"},[t.profile.email?n("div",{staticClass:"cursor-pointe p-2 special-c",on:{click:function(n){t.isModalActive=!0}}},[n("i",{staticClass:"fa-regular fa-user text-[16px] color-primary"})]):n("nuxt-link",{staticClass:"cursor-pointe p-2 special-c",attrs:{to:"/auth"}},[n("img",{attrs:{width:"20",src:"/user-icon.png",alt:"user-icon"}})]),t._v(" "),t.isModalActive?n("div",{staticClass:"modal__bg",on:{click:function(n){t.isModalActive=!1}}},[n("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"flex items-start flex-col"},[n("div",{staticClass:"flex"},[t._m(1),t._v(" "),t.profile?n("div",{staticClass:"flex flex-col"},[n("span",[t._v(t._s(t.profile.email.split("@")[0].substr(0,3)+"***"+t.profile.email.split("@")[1]))]),t._v(" "),n("span",{staticClass:"text-[12px] text-gray"},[t._v("UID: "+t._s(t.profile._id))])]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("button",{staticClass:"logout text-[16px]",on:{click:t.logout}},[n("i",{staticClass:"fa-solid fa-power-off mr-2"}),t._v("\n                  Log out\n                ")])])])]):t._e(),t._v(" "),n("div",{staticClass:"cursor-pointe p-2"},[n("img",{attrs:{width:"16",src:"/theme.png",alt:"theme-icon"},on:{click:t.changeTheme}})])],1)])]),t._v(" "),t.data?n("div",{staticClass:"flex items"},t._l(t.data,(function(e){return n("nuxt-link",{key:e._id,staticClass:"card flex align-center cursor-pointer",attrs:{to:"/pages/".concat(e._id)}},[n("img",{staticClass:"rounded-[50%] img mr-[16px]",attrs:{width:"60px",height:"6px",src:t.baseUrl+e.photoUrl[0].url,alt:"img"}}),t._v(" "),n("div",{staticClass:"text flex flex-col"},[n("span",{staticClass:"title text-[12px] font-medium"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("span",{staticClass:"text-[12px] font-medium text-gray"},[t._v("\n            "+t._s(e.maxPool)+" "+t._s(e.poolCurrency)+"\n          ")]),t._v(" "),n("span",{staticClass:"text-[12px] font-medium text-gray"},[t._v("\n            "+t._s(e.startedAt)+"\n          ")])])])})),1):t._e()])}),[function(){var t=this._self._c;return t("a",{staticClass:"mr-[16px]",attrs:{href:"/"}},[t("img",{attrs:{src:"/logo.png",width:"220px",alt:"logo"}})])},function(){var t=this._self._c;return t("div",{staticClass:"bg-gray-300 rounded-[50%] flex items-center justify-center h-[44px] w-[44px] mr-2"},[t("img",{attrs:{src:"/user-pfp.png",alt:"user-pfp"}})])}],!1,null,"a09c85c0",null);n.default=component.exports;installComponents(component,{Nav:e(294).default})},297:function(t,n,e){"use strict";e(293)},298:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.modal__bg[data-v-a09c85c0]{\n  position:fixed;\n  top:0;\n  bottom:0;\n  right:0;\n  left:0\n}\n.modal[data-v-a09c85c0]{\n  position:absolute;\n  border-radius:15px;\n  border:2px solid var(--bgColor);\n  background-color:var(--primary);\n  right:55px;\n  padding:20px;\n  bottom:auto;\n  top:65px;\n  box-shadow:0 0 15px 6px var(--bgColor)\n}\n.color-primary[data-v-a09c85c0]{\n  margin-top:5px;\n  color:#babbbc\n}\n.logout[data-v-a09c85c0]{\n  border-radius:10px;\n  transition:background-color .3s ease-in-out\n}\nhr[data-v-a09c85c0]{\n  width:100%;\n  height:1px;\n  margin:12px 3px;\n  border-color:var(--grayTextColor)\n}\n.cursor-pointe[data-v-a09c85c0]{\n  cursor:pointer\n}\n.font-medium[data-v-a09c85c0]{\n  font-weight:500!important\n}\n.nav[data-v-a09c85c0]{\n  width:100%;\n  position:fixed;\n  top:0;\n  left:0;\n  height:80px;\n  background:var(--primary);\n  color:var(--textColor)\n}\n.img[data-v-a09c85c0]{\n  border:4px solid var(--tabHover);\n  height:60px\n}\n.items[data-v-a09c85c0]{\n  margin-top:85px;\n  overflow-x:scroll\n}\n.items[data-v-a09c85c0]::-webkit-scrollbar{\n  height:4px;\n  width:4px\n}\n.items[data-v-a09c85c0]::-webkit-scrollbar-thumb{\n  border-radius:20px!important;\n  background-color:#363636\n}\n.items[data-v-a09c85c0]::-webkit-scrollbar-track{\n  border-radius:20px!important;\n  background-color:var(--bgColor)\n}\na[data-v-a09c85c0]{\n  font-size:14px;\n  text-transform:uppercase;\n  font-weight:600\n}\n.card[data-v-a09c85c0]{\n  padding:16px;\n  border-radius:10px;\n  background-color:var(--primary);\n  height:96px;\n  min-width:300px!important;\n  width:300px!important;\n  margin:0 2px 4px\n}\n.text-gray[data-v-a09c85c0]{\n  color:var(--grayTextColor)\n}\n.cursor-pointer[data-v-a09c85c0]{\n  transition:background-color .3s ease-in-out\n}\n.cursor-pointer[data-v-a09c85c0]:hover{\n  background-color:var(--aqua)\n}\n@media (max-width:640px){\n.special-c[data-v-a09c85c0]{\n    width:36px\n}\n.fo11px[data-v-a09c85c0]{\n    font-size:10px\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},330:function(t,n,e){var content=e(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("3b0254ea",content,!0,{sourceMap:!1})},355:function(t,n,e){"use strict";e(330)},356:function(t,n,e){var r=e(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.container[data-v-0808a4ca]{\n  margin-top:100px!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},393:function(t,n,e){"use strict";e.r(n);var r=e(11),o=(e(65),{name:"DocumentPage",components:{MyNav:e(294).default},data:function(){return{data:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$get("/docs");case 3:e=n.sent,t.data=e,n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}}),c=(e(355),e(47)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("MyNav"),t._v(" "),n("div",{staticClass:"container"},[n("h1",{staticClass:"text-[40px] font-bold"},[t._v("Docs")]),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),t.data[0]?n("div",{domProps:{innerHTML:t._s(t.data[0].htmlText)}}):t._e()])],1)}),[],!1,null,"0808a4ca",null);n.default=component.exports}}]);