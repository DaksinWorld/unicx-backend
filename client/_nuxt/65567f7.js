(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{334:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("5b0a5564",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n(334)},363:function(t,e,n){var o=n(78)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.modal[data-v-0139cb0a]{\n  position:fixed;\n  bottom:40px;\n  right:60px;\n  background:var(--primary);\n  padding:20px;\n  border-radius:20px\n}\ntextarea[data-v-0139cb0a]{\n  width:50%\n}\n*[data-v-0139cb0a]{\n  color:var(--textColor)\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},392:function(t,e,n){"use strict";n.r(e);n(41);var o=n(11),r=(n(65),n(80),{name:"ConstantsPage",data:function(){return{constants:[],text:"",pickedConstant:"",locked:"",address:"",terms:"",privacy:"",isModalActive:"",modalValue:{text:"",status:""}}},mounted:function(){this.fetchData()},methods:{pick:function(text){this.pickedConstant=text.name,this.locked=text.text,this.address=text.text,this.terms=text.text,this.privacy=text.text},submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$patch("/constants/"+t._id,{text:e[t.name]},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 3:e.pickedConstant="",e.fetchData(),e.isModalActive=!0,e.modalValue={status:"danger",text:"Successfully changed constant "+t.name},setTimeout((function(){e.isModalActive=!1}),3e3),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(0),e.isModalActive=!0,e.modalValue={status:"danger",text:n.t0.response.data.message},setTimeout((function(){e.isModalActive=!1}),3e3);case 15:case"end":return n.stop()}}),n,null,[[0,10]])})))()},fetchData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/auth/isAdmin",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}});case 3:return e.next=5,t.$axios.$get("/constants/");case 5:n=e.sent,t.constants=n,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),401===e.t0.response.data.statusCode&&(t.isModalActive=!0,t.modalValue={status:"danger",text:e.t0.response.data.message},setTimeout((function(){t.isModalActive=!1,t.$router.push("/auth")}),3e3));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}}),c=(n(362),n(47)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container pt-5 flex flex-col"},[e("div",{staticClass:"mb-1 flex justify-left"},[e("nuxt-link",{staticClass:"underlined",attrs:{to:"/admin"}},[e("i",{staticClass:"fa-solid fa-arrow-left"}),t._v("\n      Back\n    ")])],1),t._v(" "),t.constants[0]?e("div",[t.constants[0]?e("h1",[t._v(t._s(t.constants[0].name))]):t._e(),t._v(" "),"locked"!==t.pickedConstant&&t.constants[0]?e("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.pick(t.constants[0])}}},[t._v("\n      "+t._s(t.constants[0].text)+"\n    ")]):e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.locked,expression:"locked"}],staticClass:"bg-black border-2",attrs:{placeholder:t.constants[0].text},domProps:{value:t.locked},on:{input:function(e){e.target.composing||(t.locked=e.target.value)}}}),t._v(" "),e("button",{staticClass:"mx-2 p-3 rounded bg-gray-500 text-black",on:{click:function(e){return t.submit(t.constants[0])}}},[t._v("\n        Submit\n      ")])]),t._v(" "),e("hr",{staticClass:"my-2"})]):t._e(),t._v(" "),t.constants[1]?e("div",[e("h1",[t._v(t._s(t.constants[1].name))]),t._v(" "),"address"!==t.pickedConstant?e("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.pick(t.constants[1])}}},[t._v("\n      "+t._s(t.constants[1].text)+"\n    ")]):e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"bg-black border-2",attrs:{placeholder:t.constants[1].text},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),e("button",{staticClass:"mx-2 p-3 rounded bg-gray-500 text-black",on:{click:function(e){return t.submit(t.constants[1])}}},[t._v("\n        Submit\n      ")])]),t._v(" "),e("hr",{staticClass:"my-2"})]):t._e(),t._v(" "),t.constants[2]?e("div",[e("h1",[t._v(t._s(t.constants[2].name))]),t._v(" "),t.pickedConstant!==t.constants[2].name?e("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.pick(t.constants[2])}}},[t._v("\n      "+t._s(t.constants[2].text.substr(0,200))+"...\n    ")]):e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],staticClass:"bg-black border-2",attrs:{placeholder:t.constants[2].text},domProps:{value:t.terms},on:{input:function(e){e.target.composing||(t.terms=e.target.value)}}}),t._v(" "),e("button",{staticClass:"mx-2 p-3 rounded bg-gray-500 text-black",on:{click:function(e){return t.submit(t.constants[2])}}},[t._v("\n        Submit\n      ")])]),t._v(" "),e("hr",{staticClass:"my-2"})]):t._e(),t._v(" "),t.constants[3]?e("div",[e("h1",[t._v(t._s(t.constants[3].name))]),t._v(" "),t.pickedConstant!==t.constants[3].name?e("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.pick(t.constants[3])}}},[t._v("\n      "+t._s(t.constants[3].text.substr(0,200))+"...\n    ")]):e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.privacy,expression:"privacy"}],staticClass:"bg-black border-2",attrs:{placeholder:t.constants[3].text},domProps:{value:t.privacy},on:{input:function(e){e.target.composing||(t.privacy=e.target.value)}}}),t._v(" "),e("button",{staticClass:"mx-2 p-3 rounded bg-gray-500 text-black",on:{click:function(e){return t.submit(t.constants[3])}}},[t._v("\n        Submit\n      ")])]),t._v(" "),e("hr",{staticClass:"my-2"})]):t._e(),t._v(" "),t.isModalActive?e("div",{staticClass:"modal"},[e("span",{class:{"text-red-500":"danger"===t.modalValue.status,"text-yellow-600":"warning"===t.modalValue.status,"text-green-500":"primary"===t.modalValue.status}},[t._v("\n      "+t._s(t.modalValue.text)+"\n    ")])]):t._e()])}),[],!1,null,"0139cb0a",null);e.default=component.exports}}]);