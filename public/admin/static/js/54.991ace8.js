(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1089:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"table-basic-vue frame-page h-panel"},[t._m(0),t._v(" "),r("div",{staticClass:"h-panel-body"},[r("p",[r("Button",{staticClass:"h-btn h-btn-primary",attrs:{icon:"icon-arrow-left"},on:{click:function(e){return t.back()}}},[t._v("返回列表")])],1),t._v(" "),r("Form",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}],ref:"form",attrs:{mode:"block",validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:t.rules,model:t.category}},[r("FormItem",{attrs:{label:"升序",prop:"sort"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("升序")]},proxy:!0}])},[t._v(" "),r("Slider",{attrs:{range:{start:1,end:2e3}},model:{value:t.category.sort,callback:function(e){t.$set(t.category,"sort",e)},expression:"category.sort"}}),t._v(" "),r("p",[t._v(t._s(t.category.sort))])],1),t._v(" "),r("FormItem",{attrs:{label:"分类名",prop:"name"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("分类名")]},proxy:!0}])},[t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],attrs:{type:"text"},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}})]),t._v(" "),r("FormItem",{attrs:{label:"显示",prop:"is_show"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("显示")]},proxy:!0}])},[t._v(" "),r("h-switch",{attrs:{trueValue:1,falseValue:0},model:{value:t.category.is_show,callback:function(e){t.$set(t.category,"is_show",e)},expression:"category.is_show"}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{color:"primary"},on:{click:t.create}},[t._v("添加")])],1)],1)],1)])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-panel-bar"},[e("span",{staticClass:"h-panel-title"},[this._v("添加课程分类")])])}];a._withStripped=!0},345:function(t,e,r){"use strict";r.r(e);var a=r(1089),o=r(669);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);var s=r(16),i=Object(s.a)(o.default,a.a,a.b,!1,null,null,null);i.options.__file="src/components/courseCategory/create.vue",e.default=i.exports},669:function(t,e,r){"use strict";r.r(e);var a=r(670),o=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,(function(){return a[t]}))}(n);e.default=o.a},670:function(t,e,r){"use strict";(function(t,a){var o=r(24);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r(774)),s={data:function(){return{category:n.default.parse({}),rules:{required:["sort","name","is_show"]}}},mounted:function(){this.init(),this.category.sort=1},methods:{init:function(){},back:function(){this.$router.push({name:"CourseCategory"})},create:function(){var e=this;this.$refs.form.valid().result&&t.CourseCategory.Create(this.category).then((function(t){a.$Message.success("添加成功"),e.$router.push({name:"CourseCategory"})}))}}};e.default=s}).call(this,r(349).default,r(72))}}]);