webpackJsonp([21],{"/MCe":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"book-box"},[a("div",{staticClass:"editor-box-wrap"},[a("md-editor",{attrs:{value:e.htmlContent,user:e.user},on:{save:e.onContentSave,change:e.onContentChage}})],1)])])},n=[],o={render:i,staticRenderFns:n};t.a=o},"7EVb":function(e,t,a){"use strict";t.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},LY7n:function(e,t,a){"use strict";var i=a("MyuZ");t.a={data:function(){},asyncData:function(e){return{htmlContent:""}},head:function(){return{title:"创作图片",link:[{rel:"stylesheet",href:"/styles/editor/simplemde.min.css"}]}},methods:{onContentChage:function(){},onContentSave:function(){}},middleware:"userRequired",components:{"md-editor":i.a}}},MyuZ:function(e,t,a){"use strict";var i=a("pq6b"),n=a("UNwd"),o=a("VU/8"),s=o(i.a,n.a,!1,null,null,null);t.a=s.exports},NFnn:function(e,t,a){var i=a("oa/0");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("c4b86da0",i,!0)},UNwd:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang123-editor"},[e.isMounted?a("textarea",{ref:"textarea"}):e._e(),a("Modal",{attrs:{title:"上传图片"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("Upload",{attrs:{"on-success":e.onUploadCallback,name:"upFile",format:["jpg","jpeg","png","gif"],action:e.uploadURL}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传图片")])],1)],1),e.isFullscreen?a("div",{staticClass:"editor-fullScreen-save"},[a("Button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保  存")])],1):e._e()],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},eeMA:function(e,t,a){"use strict";function i(e){a("NFnn")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("LY7n"),o=a("/MCe"),s=a("VU/8"),l=i,r=s(n.a,o.a,!1,l,null,null);t.default=r.exports},"oa/0":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".book-box{width:1200px;margin:0 auto}.editor-box-wrap{width:900px;padding-top:24px;min-height:720px;background:#fff}",""])},pq6b:function(e,t,a){"use strict";var i=a("y8ae"),n=a("7EVb"),o=a("FhoZ"),s=a.n(o);t.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{isMounted:!1,host:"",simplemde:null,SimpleMDE:null,uploadURL:s.a.apiURL+"/upload",modalVisible:!1,toolbar:null,isFullscreen:!1}},methods:{ok:function(){},cancel:function(){},showUpload:function(){if(this.user.status===n.a.STATUS_IN_ACTIVE)return void this.$Message.error({duration:s.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"});this.modalVisible=!0},onToggleFullScreen:function(e){e.toggleFullScreen(),this.isFullscreen=!this.isFullscreen},onSave:function(){this.$emit("save")},onUploadCallback:function(e,t){if(e)if(e.errNo===i.a.SUCCESS){var a=e.data.url;this.simplemde.setImageURL(a),this.SimpleMDE.drawImage(this.simplemde)}else e.errNo===i.a.IN_ACTIVE?(this.modalVisible=!1,this.$Message.error({duration:s.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"})):e.errNo===i.a.ERROR?(this.modalVisible=!1,this.$Message.error({duration:s.a.messageDuration,closable:!0,content:e.msg})):e.errNo===i.a.LOGIN_TIMEOUT&&(location.href="/signin")}},head:function(){return{script:[{src:"/javascripts/editor/simplemde.js"}]}},mounted:function(){this.isMounted=!0,this.$nextTick(function(){this.host=document.location.hostname;var e=window.SimpleMDE;this.toolbar=[{name:"bold",action:e.toggleBold,className:"fa fa-bold",title:"粗体"},{name:"italic",action:e.toggleItalic,className:"fa fa-italic",title:"斜体"},{name:"heading",action:e.toggleHeadingSmaller,className:"fa fa-header",title:"标题"},"|",{name:"unordered-list",action:e.toggleUnorderedList,className:"fa fa-list-ul",title:"无序列表"},{name:"ordered-list",action:e.toggleOrderedList,className:"fa fa-list-ol",title:"有序列表"},{name:"table",action:e.drawTable,className:"fa fa-table",title:"表格"},{name:"horizontal-rule",action:e.drawHorizontalRule,className:"fa fa-minus",title:"水平分隔线"},"|",{name:"code",action:e.toggleCodeBlock,className:"fa fa-code",title:"代码"},{name:"quote",action:e.toggleBlockquote,className:"fa fa-quote-left",title:"块引用"},{name:"link",action:e.drawLink,className:"fa fa-link",title:"链接"},{name:"image",action:this.showUpload,className:"fa fa-picture-o",title:"上传图片"},"|",{name:"preview",action:e.togglePreview,className:"fa fa-eye no-disable",title:"预览"},{name:"fullscreen",action:this.onToggleFullScreen,className:"fa fa-arrows-alt no-disable no-mobile",title:"全屏"}],this.SimpleMDE=e;var t=new e({element:this.$refs.textarea,promptURLs:!1,spellChecker:!1,toolbar:this.toolbar});this.simplemde=t;var a=e.prototype;a.getImageURL||(a.getImageURL=function(){return this.imageURL},a.setImageURL=function(e){this.imageURL=e});var i=this;this.simplemde.codemirror.on("change",function(){i.$emit("change",i.simplemde.value())}),this.simplemde.value(this.value)})},watch:{value:function(e,t){e!==t&&""===e&&this.simplemde.value("")}}}},y8ae:function(e,t,a){"use strict";t.a={SUCCESS:0,ERROR:1,LOGIN_TIMEOUT:1001,IN_ACTIVE:1002}}});
//# sourceMappingURL=create.4d1150f76dcf09eb8b8a.js.map