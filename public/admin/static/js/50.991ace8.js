(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1076:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"table-basic-vue frame-page h-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"h-panel-body"},[a("p",[a("Button",{staticClass:"h-btn h-btn-primary",attrs:{icon:"icon-arrow-left"},on:{click:function(e){return t.back()}}},[t._v("返回列表")])],1),t._v(" "),a("Form",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}],ref:"form",attrs:{mode:"block",validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:t.rules,model:t.administrator}},[a("FormItem",{attrs:{label:"姓名",prop:"name"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("姓名")]},proxy:!0}])},[t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.administrator.name,expression:"administrator.name"}],attrs:{type:"text"},domProps:{value:t.administrator.name},on:{input:function(e){e.target.composing||t.$set(t.administrator,"name",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"邮箱",prop:"email"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("邮箱")]},proxy:!0}])},[t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.administrator.email,expression:"administrator.email"}],attrs:{type:"text"},domProps:{value:t.administrator.email},on:{input:function(e){e.target.composing||t.$set(t.administrator,"email",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"密码",prop:"password"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("密码")]},proxy:!0}])},[t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.administrator.password,expression:"administrator.password"}],attrs:{type:"text"},domProps:{value:t.administrator.password},on:{input:function(e){e.target.composing||t.$set(t.administrator,"password",e.target.value)}}})]),t._v(" "),a("FormItem",[a("Button",{attrs:{color:"primary"},on:{click:t.create}},[t._v("添加")])],1)],1)],1)])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-panel-bar"},[e("span",{staticClass:"h-panel-title"},[this._v("添加管理员")])])}];r._withStripped=!0},332:function(t,e,a){"use strict";a.r(e);var r=a(1076),n=a(643);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var o=a(16),s=Object(o.a)(n.default,r.a,r.b,!1,null,null,null);s.options.__file="src/components/administrator/create.vue",e.default=s.exports},643:function(t,e,a){"use strict";a.r(e);var r=a(644),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},644:function(t,e,a){"use strict";(function(t,r){var n=a(24);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(771)),o={data:function(){return{administrator:i.default.parse({}),rules:{required:["name","email","password"]}}},mounted:function(){this.init()},methods:{init:function(){},back:function(){this.$router.push({name:"Administrator"})},create:function(){var e=this;if(this.$refs.form.valid().result){var a=this.administrator;a.password_confirmation=a.password,t.Administrator.Create(this.administrator).then((function(t){r.$Message.success("添加成功"),e.$router.push({name:"Administrator"})}))}}}};e.default=o}).call(this,a(349).default,a(72))}}]);