(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/view/my/index"],{"3a7f":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.show=!n.show},n.e1=function(t){n.show=!1})},i=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i})},"4f4e":function(n,t,o){"use strict";o.r(t);var e=o("c9bf"),i=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,function(){return e[n]})}(u);t["default"]=i.a},"721c":function(n,t,o){},c9bf:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{show:!1}},methods:{goBack:function(){n.navigateBack({delta:1})},jion:function(){n.navigateTo({url:"jionClass/index"})},look:function(){n.navigateTo({url:"dataDetails/index"})},toMyInformation:function(){n.navigateTo({url:"myInformation/index"})},toAllCollections:function(){n.navigateTo({url:"allCollections/index"})},loginOut:function(){this.$minApi.loginOut({}).then(function(t){console.log(t),n.removeStorageSync("token"),n.redirectTo({url:"../my/login/index"})}),this.show=!1}},created:function(){n.getStorageSync("token")||n.redirectTo({url:"login/index"})}};t.default=o}).call(this,o("543d")["default"])},f107:function(n,t,o){"use strict";o.r(t);var e=o("3a7f"),i=o("4f4e");for(var u in i)"default"!==u&&function(n){o.d(t,n,function(){return i[n]})}(u);o("f474");var a=o("2877"),c=Object(a["a"])(i["default"],e["a"],e["b"],!1,null,null,null);t["default"]=c.exports},f474:function(n,t,o){"use strict";var e=o("721c"),i=o.n(e);i.a}},[["19f4","common/runtime","common/vendor"]]]);