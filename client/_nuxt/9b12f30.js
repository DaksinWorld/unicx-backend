(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{331:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("34a9037e",content,!0,{sourceMap:!1})},364:function(e,t,r){var o=r(2),n=r(203).values;o({target:"Object",stat:!0},{values:function(e){return n(e)}})},365:function(e,t,r){"use strict";r(331)},366:function(e,t,r){var o=r(77)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n.modal[data-v-30e22a8a]{\n  position:fixed;\n  bottom:40px;\n  right:60px;\n  padding:20px;\n  border-radius:20px\n}\n.modal[data-v-30e22a8a],.select[data-v-30e22a8a]{\n  background:var(--primary)\n}\n.select[data-v-30e22a8a]{\n  margin-bottom:10px\n}\noption[data-v-30e22a8a]{\n  color:var(--textColor)\n}\ninput[data-v-30e22a8a]{\n  border-radius:20px;\n  margin-bottom:15px;\n  color:var(--grayTextColor);\n  background:var(--primary);\n  border:0 solid var(--grayTextColor);\n  padding:10px 20px\n}\nform[data-v-30e22a8a]{\n  width:50%\n}\n*[data-v-30e22a8a]{\n  color:var(--textColor)\n}\nform div[data-v-30e22a8a]{\n  display:flex;\n  flex-direction:column\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},388:function(e,t,r){"use strict";r.r(t);r(48),r(39),r(14);var o=r(11),n=(r(64),r(42),r(364),r(79),r(32),r(33),r(329),r(199),{name:"PRoductId",data:function(){return{typeValue:["Upcoming","Live","Success"],type:"",file:"",status:"",totalWhitelist:"",whitelistedUsers:"",softCap:"",title:"",startedAt:"",lockedPercentage:"",durationDays:"",maxPool:"",poolCurrency:"",poolValue:"",maxUsers:"",totalUsers:"",twitter:"",site:"",liveText:"",telegram:"",badgesUser:"",graph:"",graph1:"",graph2:"",graph3:"",graph4:"",graph5:"",graph6:"",text:"",id:"",tokenAddress:"",successPercentage:"",isModalActive:!1,modalValue:{text:"",status:""}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,i,l,d,v,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$get("/auth/isAdmin",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}});case 3:return t.next=5,e.$axios.$get("/product/find/"+e.$route.params.id);case 5:for(i in r=t.sent,e.id=r._id,o=Object.keys(r),n=Object.values(r),o)l=o[i],d=n[i],e[l]=d;for(c in v=JSON.parse(r.graph[0]))m="graph".concat(+c+1),e[m]=v[c];t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),401===t.t0.response.data.statusCode&&(e.isModalActive=!0,e.modalValue={status:"danger",text:t.t0.response.data.message},setTimeout((function(){e.isModalActive=!1,e.$router.push("/auth")}),3e3));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},handleFile:function(e){this.file=e.target.files[0]},submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=new FormData,e.graph=[e.graph1,e.graph2,e.graph3,e.graph4,e.graph5,e.graph6],r.append("file",e.file),r.append("title",e.title),r.append("softCap",e.softCap),r.append("poolValue",e.poolValue),r.append("poolCurrency",e.poolCurrency),r.append("text",e.text),r.append("maxUsers",e.maxUsers),r.append("maxPool",e.maxPool),r.append("totalUsers",e.totalUsers),r.append("telegram",e.telegram),r.append("twitter",e.twitter),r.append("site",e.site),r.append("liveText",e.liveText),r.append("status",e.status),r.append("type",e.type),r.append("graph",JSON.stringify(e.graph)),r.append("badgesUser",e.badgesUser),r.append("durationDays",e.durationDays),r.append("lockedPercentage",e.lockedPercentage),r.append("startedAt",e.startedAt),r.append("whitelistedUsers",e.whitelistedUsers),r.append("totalWhitelist",e.totalWhitelist),r.append("tokenAddress",e.tokenAddress),r.append("successPercentage",e.successPercentage),t.next=29,e.$axios.$patch("/product/"+e._id,r,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("jwt")}});case 29:e.isModalActive=!0,e.modalValue={text:"Successfully updated new token",status:"primary"},setTimeout((function(){e.isModalActive=!1}),3e3),t.next=39;break;case 34:t.prev=34,t.t0=t.catch(0),e.isModalActive=!0,e.modalValue={text:t.t0.response.data.message,status:"danger"},setTimeout((function(){e.isModalActive=!1}),3e3);case 39:case"end":return t.stop()}}),t,null,[[0,34]])})))()}},computed:{data:function(){var e="",t=[this.graph1,this.graph2,this.graph3,this.graph4,this.graph5,this.graph6];return this.file&&(e=window.URL.createObjectURL(this.file)),{photoUrl:e,graph:JSON.stringify(t),title:this.title,softCap:this.softCap,poolValue:this.poolValue,poolCurrency:this.poolCurrency,text:this.text,maxUsers:this.maxUsers,maxPool:this.maxPool,totalUsers:this.totalUsers,telegram:this.telegram,twitter:this.twitter,site:this.site,status:this.status,type:this.type,badgesUser:this.badgesUser,durationDays:this.durationDays,lockedPercentage:this.lockedPercentage,startedAt:this.startedAt,totalWhitelist:this.totalWhitelist,liveText:this.liveText,successPercentage:this.successPercentage,whitelistedUsers:this.whitelistedUsers,tokenAddress:this.tokenAddress}}}}),l=(r(365),r(47)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container flex justify-left"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"mb-1 flex justify-left"},[t("nuxt-link",{staticClass:"underlined",attrs:{to:"/admin"}},[t("i",{staticClass:"fa-solid fa-arrow-left"}),e._v("\n          Back\n      ")])],1),e._v(" "),t("label",{staticClass:"mb-[10px]",attrs:{for:"type"}},[e._v("Section")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"select w-full",attrs:{required:"",id:"type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.type=t.target.multiple?r:r[0]}}},e._l(e.typeValue,(function(r){return t("option",{key:r,domProps:{value:r}},[e._v(e._s(r))])})),0),e._v(" "),t("div",[t("label",[e._v("status example: Started, awaiting to start, etc.")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"status"}],attrs:{required:"",type:"text",placeholder:e.status},domProps:{value:e.status},on:{input:function(t){t.target.composing||(e.status=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("softCap")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.softCap,expression:"softCap"}],attrs:{required:"",type:"number",placeholder:e.softCap},domProps:{value:e.softCap},on:{input:function(t){t.target.composing||(e.softCap=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("title 1.Title")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{required:"",type:"text",placeholder:e.title},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Started At")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.startedAt,expression:"startedAt"}],attrs:{required:"",type:"text",placeholder:e.startedAt},domProps:{value:e.startedAt},on:{input:function(t){t.target.composing||(e.startedAt=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Locked Percentage")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lockedPercentage,expression:"lockedPercentage"}],attrs:{required:"",type:"number",placeholder:e.lockedPercentage},domProps:{value:e.lockedPercentage},on:{input:function(t){t.target.composing||(e.lockedPercentage=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Duration Days")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.durationDays,expression:"durationDays"}],attrs:{required:"",type:"number",placeholder:e.durationDays},domProps:{value:e.durationDays},on:{input:function(t){t.target.composing||(e.durationDays=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Max Pool (bar)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPool,expression:"maxPool"}],attrs:{required:"",type:"number",min:"1",placeholder:e.maxPool},domProps:{value:e.maxPool},on:{input:function(t){t.target.composing||(e.maxPool=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Pool Currency (Bnb, usdt, etc.)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.poolCurrency,expression:"poolCurrency"}],attrs:{required:"",type:"text",placeholder:e.poolCurrency},domProps:{value:e.poolCurrency},on:{input:function(t){t.target.composing||(e.poolCurrency=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Pool Value, Example 100(Pool Value) / 300(Max Pool)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.poolValue,expression:"poolValue"}],attrs:{required:"",type:"number",placeholder:e.poolValue},domProps:{value:e.poolValue},on:{input:function(t){t.target.composing||(e.poolValue=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Max Users(bar)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxUsers,expression:"maxUsers"}],attrs:{required:"",type:"number",min:"1",placeholder:e.maxUsers},domProps:{value:e.maxUsers},on:{input:function(t){t.target.composing||(e.maxUsers=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Current Users, the same logic as pool")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.totalUsers,expression:"totalUsers"}],attrs:{required:"",type:"number",placeholder:e.totalUsers},domProps:{value:e.totalUsers},on:{input:function(t){t.target.composing||(e.totalUsers=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Twiiter link")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.twitter,expression:"twitter"}],attrs:{required:"",type:"text",placeholder:e.twitter},domProps:{value:e.twitter},on:{input:function(t){t.target.composing||(e.twitter=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Site link")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.site,expression:"site"}],attrs:{required:"",type:"text",placeholder:e.site},domProps:{value:e.site},on:{input:function(t){t.target.composing||(e.site=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Telegram link")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.telegram,expression:"telegram"}],attrs:{required:"",type:"text",placeholder:e.telegram},domProps:{value:e.telegram},on:{input:function(t){t.target.composing||(e.telegram=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Badged Users")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.badgesUser,expression:"badgesUser"}],attrs:{required:"",type:"number",placeholder:e.badgesUser},domProps:{value:e.badgesUser},on:{input:function(t){t.target.composing||(e.badgesUser=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Total Whitelist")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.totalWhitelist,expression:"totalWhitelist"}],attrs:{required:"",type:"number",min:"1",placeholder:e.totalWhitelist},domProps:{value:e.totalWhitelist},on:{input:function(t){t.target.composing||(e.totalWhitelist=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Whitelisted Users, the same logic as pool, (bar)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.whitelistedUsers,expression:"whitelistedUsers"}],attrs:{required:"",type:"number",placeholder:e.whitelistedUsers},domProps:{value:e.whitelistedUsers},on:{input:function(t){t.target.composing||(e.whitelistedUsers=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Success Percentage (Success Percentage at Success section)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.successPercentage,expression:"successPercentage"}],attrs:{type:"number",placeholder:e.successPercentage},domProps:{value:e.successPercentage},on:{input:function(t){t.target.composing||(e.successPercentage=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Token Address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenAddress,expression:"tokenAddress"}],attrs:{required:"",type:"text",placeholder:e.tokenAddress},domProps:{value:e.tokenAddress},on:{input:function(t){t.target.composing||(e.tokenAddress=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Text in Live Section")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.liveText,expression:"liveText"}],attrs:{type:"text",placeholder:e.liveText},domProps:{value:e.liveText},on:{input:function(t){t.target.composing||(e.liveText=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Graph")]),e._v(" "),t("div",[t("label",[e._v("Presale Value")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.graph1,expression:"graph1"}],attrs:{required:"",type:"number",placeholder:e.graph1},domProps:{value:e.graph1},on:{input:function(t){t.target.composing||(e.graph1=t.target.value)}}}),e._v(" "),t("label",[e._v("Liquidity")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.graph2,expression:"graph2"}],attrs:{required:"",type:"number",placeholder:e.graph2},domProps:{value:e.graph2},on:{input:function(t){t.target.composing||(e.graph2=t.target.value)}}}),e._v(" "),t("label",[e._v("Fees")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.graph3,expression:"graph3"}],attrs:{required:"",type:"number",placeholder:e.graph3},domProps:{value:e.graph3},on:{input:function(t){t.target.composing||(e.graph3=t.target.value)}}}),e._v(" "),t("label",[e._v("Locked")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.graph4,expression:"graph4"}],attrs:{required:"",type:"number",placeholder:e.graph4},domProps:{value:e.graph4},on:{input:function(t){t.target.composing||(e.graph4=t.target.value)}}}),e._v(" "),t("label",[e._v("Burnt")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.graph5,expression:"graph5"}],attrs:{type:"number",placeholder:e.graph5},domProps:{value:e.graph5},on:{input:function(t){t.target.composing||(e.graph5=t.target.value)}}}),e._v(" "),t("label",[e._v("Unlocked")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.graph6,expression:"graph6"}],attrs:{required:"",type:"number",placeholder:e.graph6},domProps:{value:e.graph6},on:{input:function(t){t.target.composing||(e.graph6=t.target.value)}}})])]),e._v(" "),t("div",[t("label",[e._v("text (Info section)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{required:"",type:"text",placeholder:e.text},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Icon (Token Logo)")]),e._v(" "),t("input",{staticClass:"pl-[25px]",attrs:{required:"",type:"file"},on:{change:e.handleFile}})]),e._v(" "),t("div",{staticClass:"flex flex-col items-center"},[t("span",{staticClass:"font-semibold underlined cursor-pointer",on:{click:function(t){return e.$router.push("/pages/".concat(e.id))}}},[e._v("\n        Visit Token Page\n      ")]),e._v(" "),t("button",{staticClass:"p-3 bg-yellow-400 text-black rounded-xl mt-5",attrs:{type:"submit"}},[e._v("Submit")])])]),e._v(" "),t("UICard",{staticClass:"fixed right-[80px]",attrs:{data:e.data}}),e._v(" "),e.isModalActive?t("div",{staticClass:"modal"},[t("span",{class:{"text-red-500":"danger"===e.modalValue.status,"text-yellow-600":"warning"===e.modalValue.status,"text-green-500":"primary"===e.modalValue.status}},[e._v("\n      "+e._s(e.modalValue.text)+"\n    ")])]):e._e()],1)}),[],!1,null,"30e22a8a",null);t.default=component.exports;installComponents(component,{UICard:r(308).default})}}]);