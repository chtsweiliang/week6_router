(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daa6d"],{"6d09":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",[t._v("管理後台 Products 的頁面")]),a("div",{staticClass:"container"},[t._m(0),a("table",{staticClass:"table mt-4 table-hover"},[t._m(1),a("tbody",t._l(t.products,(function(s,e){return a("tr",{key:e},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),a("td",[t._v(t._s(s.category))]),a("td",[t._v(t._s(s.title))]),a("td",[t._v(t._s(t._f("thousands")(s.origin_price)))]),a("td",[t._v(t._s(t._f("thousands")(s.price)))]),a("td",[s.enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",{staticClass:"text-danger"},[t._v("未啟用")])]),t._m(2,!0)])})),0)])])])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("建立新的產品")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("登出")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("分類")]),a("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),a("th",{attrs:{scope:"col"}},[t._v("原價")]),a("th",{attrs:{scope:"col"}},[t._v("售價")]),a("th",{attrs:{scope:"col"}},[t._v("是否啟用")]),a("th",{attrs:{scope:"col"}},[t._v("編輯")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("td",[a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"}},[t._v("刪除")])])])}],c=(a("99af"),{data:function(){return{products:[]}},props:["token"],created:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("0b72368a-0360-43da-afbe-d5cd4fbf874f","/admin/ec/products");this.axios.get(s).then((function(s){console.log(s.data.data),t.products=s.data.data}))}}),o=c,r=a("2877"),i=Object(r["a"])(o,e,n,!1,null,null,null);s["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0daa6d.0ef2c5e9.js.map