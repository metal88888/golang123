webpackJsonp([34],{DHAk:function(e,t,i){"use strict";var o=i("//Fk"),n=i.n(o),r=i("FN0O"),a=i.n(r),l=i("V8bM"),s=i("b1Yp");t.a={data:function(){return{}},validate:function(e){return!!e.params.id},asyncData:function(e){var t=e.query||{};return parseInt(t.folder)?n.a.all([l.a.getPublicUser({client:e.req,params:{id:e.params.id}}),l.a.collectList({client:e.req,query:{folderID:t.folder,userID:e.params.id,pageNo:t.pageNo||1,pageSize:20}})]).then(function(t){for(var i=t[1].data.collects||[],o=0;o<i.length;o++){var n="topic",r=i[o].articleID;"collect_source_vote"===i[o].sourceName&&(n="vote",r=i[o].voteID);var l='...&nbsp;&nbsp;<a href="/'+n+"/"+r+'" target="_blank"   class="golang123-digest-continue">继续阅读»</a>',p=!i[o].articleID&&!i[o].voteID;i[o].noSource=p;var c=a()(i[o].htmlContent,{limit:100,suffix:p?"":l,moreLink:!1}),d=c.html;if(d=s.a.trimImg(d),!c.more){d=a()(i[o].htmlContent,{limit:100,preserveTags:!1}).html+(p?"":l)}i[o].htmlContent=d}return{user:e.user,currentUser:t[0].data.user,collectList:i,folderID:t[1].data.folderID,folderName:t[1].data.folderName,pageNo:t[1].data.pageNo,pageSize:t[1].data.pageSize,totalCount:t[1].data.totalCount}}).catch(function(t){console.log(t),e.error({statusCode:404,message:"Page not found"})}):e.error({statusCode:404,message:"Page not found"})},methods:{onPageChange:function(e){var t=this.currentUser.id,i=this.folderID;window.location.href="/user/collect/"+t+"?folder="+i+"&pageNo="+e}},head:function(){return{title:"收藏"}}}},FN0O:function(e,t){function i(e,t){t=t||{};for(var i,n,r,a,l,s=t.limit||100,p=void 0===t.preserveTags||t.preserveTags,c=void 0!==t.wordBreak&&t.wordBreak,d=t.suffix||"...",g=t.moreLink||"",f=t.moreText||"»",m=t.preserveWhiteSpace||!1,u=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),h=0,x=[],b=!1,v=0;v<u.length;v++)if(i=u[v],rowCut=m?i:i.replace(/[ ]+/g," "),i.length){var k=o(rowCut);if("<"!==i[0])if(h>=s)i="";else if(h+k.length>=s){if(n=s-h," "===k[n-1])for(;n&&(n-=1," "===k[n-1]););else r=k.slice(n).indexOf(" "),c||(-1!==r?n+=r:n=i.length);i=k.slice(0,n).join("")+d,g&&(i+='<a href="'+g+'" style="display:inline">'+f+"</a>"),h=s,b=!0}else h+=k.length;else if(p){if(h>=s)if(a=i.match(/[a-zA-Z]+/),l=a?a[0]:"")if("</"!==i.substring(0,2))x.push(l),i="";else{for(;x[x.length-1]!==l&&x.length;)x.pop();x.length&&(i=""),x.pop()}else i=""}else i="";u[v]=i}return{html:u.join("\n").replace(/\n/g,""),more:b}}function o(e){for(var t,i,o,n=[],r=0;r<rowCut.length;r++)t=rowCut.substring(r),i=t.match(/^&[a-z0-9#]+;/),i?(o=i[0],n.push(o),r+=o.length-1):n.push(rowCut[r]);return n}void 0!==e&&e.exports&&(e.exports=i)},HIoO:function(e,t,i){"use strict";function o(e){i("MjaJ")}Object.defineProperty(t,"__esModule",{value:!0});var n=i("DHAk"),r=i("h1HW"),a=i("VU/8"),l=o,s=a(n.a,r.a,!1,l,null,null);t.default=s.exports},MjaJ:function(e,t,i){var o=i("lhsP");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("6541ac08",o,!0)},b1Yp:function(e,t,i){"use strict";var o={trimImg:function(e){return e=e.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},i=/&(lt|gt|nbsp|amp|quot);/gi;return e.replace(i,function(e,i){return t[i]})}};t.a=o},h1HW:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"golang-home-body"},[i("div",{staticClass:"golang-home-body-left",staticStyle:{"padding-top":"20px","min-height":"500px"}},[e.user&&e.user.id==e.currentUser.id?i("p",{staticClass:"back-container"},[i("a",{staticClass:"top100-link link-left",attrs:{href:"/user/"+e.user.id+"/collect"}},[e._v("« 去我的收藏")])]):i("p",{staticClass:"back-container"},[i("a",{staticClass:"top100-link link-left",attrs:{href:"/user/"+e.currentUser.id+"/collect"}},[e._v("«  "+e._s(e.currentUser.name)+" 的收藏")]),e.user?i("a",{staticClass:"top100-link link-right",attrs:{href:"/user/"+e.user.id+"/collect"}},[e._v("去我的收藏 »")]):e._e()]),i("h1",{staticClass:"collect-line title",staticStyle:{"font-size":"22px","padding-bottom":"20px"}},[e._v(e._s(e.folderName))]),e._l(e.collectList,function(t,o){return i("div",{staticClass:"articles-item"},[i("h1",{staticClass:"collect-article-title"},[t.noSource?i("span",{staticClass:"collect-no-source"},[e._v(e._s("collect_source_vote"===t.sourceName?"原投票已被作者删除":"原话题已被作者删除"))]):i("a",{attrs:{href:t.voteID?"/vote/"+t.voteID:"/topic/"+t.articleID,target:"_blank"}},[e._v(e._s(t.voteName?t.voteName:t.articleName))])]),i("div",{staticClass:"golang123-digest",domProps:{innerHTML:e._s(t.htmlContent)}})])}),i("div",{staticStyle:{"text-align":"center"}},[i("Page",{staticClass:"common-page",attrs:{current:e.pageNo,"page-size":e.pageSize,total:e.totalCount,"show-elevator":!0},on:{"on-change":e.onPageChange}})],1)],2)])])},n=[],r={render:o,staticRenderFns:n};t.a=r},lhsP:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,'.golang-main-top{position:relative;border-radius:3px;overflow:hidden}.mine-img-box{min-height:140px;background-color:#96a1a9;background-size:cover;background-position:50%;background-repeat:no-repeat}.mine-info-container{position:relative;height:120px;padding:10px;background-color:#fff}.mine-edit-container{position:relative;padding:20px;background-color:#fff}.mine-info-icon{cursor:default;position:absolute;top:-80px;left:20px;padding:5px;background-color:#fff;border-radius:3px;width:160px;height:160px;z-index:2}.mine-info-icon img{width:100%}.mine-info-line{margin-left:200px}.mine-info-upload{cursor:pointer;opacity:0;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;width:100%;height:100%;z-index:3;background-color:rgba(0,0,0,.5);border-radius:3px;overflow:hidden;position:absolute;left:0;top:0;text-align:center}.mine-info-icon:hover .mine-info-upload{opacity:1}.mine-info-upload img{width:48px;height:48px}.mine-info-upload p{font-size:14px;color:#fff;font-weight:700;letter-spacing:.1em;margin-top:10px}.mine-info-upload-icon{font-size:50px;color:#fff;margin-top:40px}.mine-info-name{font-size:26px;font-weight:700}.mine-info-desc{font-size:14px;color:#8590a6;margin-top:20px}.mine-info-btn{position:absolute;right:20px;top:30px}.golang-mine-content{margin-top:20px}.mine-content-left{width:900px;display:inline-block;min-height:450px;border-radius:3px;padding:0 20px 20px;overflow:hidden;background-color:#fff}.mine-content-right{width:288px;float:right}.right-border{border-right:1px solid #ccd8e1}.mine-attention-box{background-color:#fff;border-radius:3px;overflow:hidden;padding:10px 0}.attention-item{padding:5px 0;width:50%;display:inline-block}.attention-item p{text-align:center;margin-bottom:5px}.attention-item-label{font-size:14px;color:#8590a6}.attention-item-num{color:#000;font-size:18px}.attention-item:hover p{color:#2d8cf0;cursor:default}.mine-menu-list{width:860px;border-bottom:1px solid #f0f2f7}.mine-menu-item,.mine-menu-list{display:inline-block;vertical-align:top}.mine-menu-item{font-weight:400;font-size:16px;padding:0 20px}.mine-menu-item-active{font-weight:500;color:#333!important}.mine-menu-item-active:after{position:absolute;right:0;bottom:-1px;left:0;height:3px;background:#0f88eb;content:""}.mine-menu-item a{display:inline-block;text-decoration:none;position:relative;padding:14px 0;font-size:16px;line-height:22px;color:#2e2e2e}.mine-menu-meta{margin-left:6px;font-size:14px;font-weight:300;line-height:20px;color:#a1aebf}.article-top{padding:15px 0;border-bottom:1px solid #e5e5e5}.article-top div{font-size:15px;font-weight:600;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif}.articles-title{font-size:18px;margin-top:10px}.articles-title a{line-height:26px}.articles-title a:hover{color:#2d8cf0;text-decoration:none}.articles-user-info{margin-top:14px;margin-bottom:14px}.articles-user-info-img{width:38px;height:38px;display:inline-block;vertical-align:top}.articles-user-info-name{margin-left:14px;display:inline-block;vertical-align:top;line-height:38px;font-size:15px;font-weight:600;color:#555}.golang123-editor{overflow:hidden;margin-top:5px}.articles-item{padding:15px 0;min-height:100px;border-top:1px solid #e5e5e5}.articles-item-no{border:0}.articles-button{text-align:right;margin-top:5px;margin-right:10px}.articles-button a{font-size:14px;color:#8590a6}.articles-button .ivu-icon{margin-left:5px;font-size:12px}.articles-item-empty{line-height:200px;font-size:14px;color:#8590a6;text-align:center}.mine-info-item{margin-top:10px;font-size:14px}.mine-info-label{line-height:30px;width:100px;font-weight:700;display:inline-block}.mine-edit-form{width:800px;margin-top:20px}.mine-edit-form,.mine-info-box{margin-left:200px}.mine-info-edit-top{margin-top:30px}.mine-info-edit,.mine-info-edit-top{font-size:14px;padding-top:30px;padding-bottom:30px}.mine-info-edit{border-top:1px solid #e5e5e5}.mine-info-value{display:inline-block;min-width:200px}.mine-info-value .ivu-icon{margin-right:5px}.mine-info-value:hover .edit-action{display:inline}.edit-action{display:none;color:#175199;cursor:pointer}.edit-action .ivu-icon{margin-right:0}.edit-item{display:inline-block;vertical-align:top}.edit-item .ivu-radio-wrapper{margin-right:30px}.radio-label{font-size:14px}.button-box{margin-top:20px}.button-seq{margin-right:20px}.home-link-box{float:right;font-size:14px;color:#8590a6}.home-link-box:hover{color:#8590a6}.schools-item{margin-left:100px;padding:10px;font-size:15px;color:#262626;font-weight:600;width:400px}.schools-item:hover{background-color:#f7f8fa;border-radius:4px}.schools-item:hover .schools-delete{display:inline}.schools-delete{float:right;cursor:pointer;display:none}.mine-info-edit .schools-item:first-of-type{margin-top:10px}.male{color:#2196f3}.women{color:#fb8db2}.collect-line{margin-top:10px}.collect-line span{color:#8590a6;font-size:14px}#uploader-pop-title{font-size:24px;font-weight:500;line-height:normal;height:32px;color:#262626}#uploader-pop-subheading{color:#8590a6}#avatarUploader{min-height:294px}#topicCountBox{text-decoration:none}#topicCountBox p{cursor:pointer;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}#replyCountBox{text-decoration:none}#replyCountBox p{cursor:pointer;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.collect-no-source,.reply-no-source{display:inline-block;vertical-align:top;background:#ededed;color:#7e7e7e;text-decoration:line-through;padding:6px 14px;font-size:14px;font-weight:400}.collect-content-count:before{margin:0 5px;content:"\\B7"}.collect-article-title{line-height:28px}body{background-color:#e1e1e1}.golang-home-body-left{padding:10px}.top100-link{font-size:13px}.link-left{float:left}.link-right{float:right}.back-container{height:20px}.collect-line{margin-left:9px}.title{font-size:18px}.desc,.title{margin-top:10px}.desc{margin-bottom:15px;font-size:14px}.desc,.desc a{color:#999}.collect-article-title a{font-weight:700;font-size:18px;outline:0;color:#259;line-height:26px}.collect-article-title a:hover{text-decoration:none}',""])}});
//# sourceMappingURL=_id.2caf5ab001460b5ccfff.js.map