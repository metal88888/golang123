webpackJsonp([23],{"7EVb":function(e,t,a){"use strict";t.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},"L8+7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Row",[a("h1",{staticClass:"admin-common-line user-title"},[e._v(e._s(e.siteTitle))]),a("Row",{staticClass:"admin-common-line",attrs:{type:"flex",justify:"end"}},[a("Col",{attrs:{span:6,offset:1}},[a("Select",{attrs:{value:e.role},on:{"on-change":e.onSelectChange}},e._l(e.roles,function(t,n){return a("Option",{key:n,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),a("Table",{staticClass:"admin-common-line",attrs:{columns:e.column,data:e.list}}),e.list.length>0?a("Row",{attrs:{type:"flex",justify:"end"}},[a("span",{staticClass:"ivu-page-total",staticStyle:{"margin-top":"10px"}},[e._v("共 "+e._s(e.totalCount)+" 条")]),a("Page",{staticClass:"common-page",attrs:{current:e.pageNo,"page-size":e.pageSize,total:e.totalCount,"show-elevator":!0},on:{"on-change":e.onPageChange}})],1):e._e()],1)},r=[],o={render:n,staticRenderFns:r};t.a=o},QC0N:function(e,t,a){var n=a("a7iN");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("561c6d6c",n,!0)},VgJH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("z01W"),r=a("wlr+"),o=a("VU/8"),l=o(n.a,r.a,!1,null,null,null);t.default=l.exports},WXXr:function(e,t,a){"use strict";var n=a("7EVb");t.a={props:["list","totalCount","pageNo","pageSize","siteTitle","path","role"],data:function(){var e=this;return{column:[{title:"用户名",key:"name",render:function(e,t){return e("a",{class:"item-user",attrs:{href:"/user/"+t.row.id,target:"_blank"}},t.row.name)}},{title:"邮箱",key:"email"},{title:"角色",key:"role",render:function(t,a){var n="";return e.roles.map(function(e){a.row.role===e.value&&(n=e.label)}),n}},{title:"状态",key:"status",render:function(e,t){switch(t.row.status){case n.a.STATUS_IN_ACTIVE:return"未激活";case n.a.STATUS_ACTIVE:return"已激活";case n.a.STATUS_FROZEN:return"已冻结";default:return""}}}],roles:[{label:"全部",value:0},{label:"普通用户",value:1},{label:"网站编辑",value:2},{label:"管理员",value:3},{label:"爬虫管理员",value:5},{label:"超级管理员",value:4}]}},methods:{onSelectChange:function(e){window.location.href="/admin/user/"+this.path+"?role="+e},onPageChange:function(e){window.location.href="/admin/user/"+this.path+"?pageNo="+e+"&role="+this.role}}}},a7iN:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".user-title{font-size:22px;margin:12px 0}.item-user,.item-user:hover{cursor:pointer;color:#348eed}",""])},cDRK:function(e,t,a){"use strict";function n(e){a("QC0N")}var r=a("WXXr"),o=a("L8+7"),l=a("VU/8"),s=n,i=l(r.a,o.a,!1,s,null,null);t.a=i.exports},"wlr+":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Row",[a("user-list",{attrs:{list:e.list,totalCount:e.totalCount,pageNo:e.pageNo,pageSize:e.pageSize,siteTitle:"今日注册用户",path:"today",role:e.role}})],1)},r=[],o={render:n,staticRenderFns:r};t.a=o},z01W:function(e,t,a){"use strict";var n=a("V8bM"),r=a("cDRK");t.a={asyncData:function(e){var t=new Date,a=e.query||{},r=parseInt(a.role)||0;return n.a.getAdminUserList({client:e.req,query:{pageNo:a.pageNo||1,role:r,startAt:new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}}).then(function(e){return{list:e.data.users||[],totalCount:e.data.totalCount,pageNo:e.data.pageNo,pageSize:e.data.pageSize,role:r}})},head:function(){return{title:"今日注册用户"}},mounted:function(){},components:{"user-list":r.a},layout:"admin"}}});
//# sourceMappingURL=today.0541430e9a93681188b8.js.map