(window.webpackJsonp=window.webpackJsonp||[]).push([["UEditor"],{"0b90":function(t,e,n){"use strict";var r=n("fc0f");n.n(r).a},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80");r({target:"String",proto:!0,forced:!n("ab13")("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},2934:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return s}));var i=n("bc3a"),o=n.n(i),a=(n("caad"),n("d3b7"),n("25f0"),n("2532"),n("c9d9")),u=o.a.create({baseURL:a.a,timeout:6e4});u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){var e=t.data,n=(e.errCode,e.errMsg,e.data);return 1===e.status?n:Promise.reject(t.data)}),(function(t){var e=t.toString();return e.includes("timeout")||e.includes("Network Error"),Promise.reject(t)}));var c=u,s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"getOssSign",value:function(){return c({url:"/common/oss_sign/",method:"post"})}},{key:"getHtml",value:function(t){return o()({url:t,method:"get"})}}],(n=null)&&r(e.prototype,n),i&&r(e,i),t}()},"72a0":function(t,e,n){},"7e1a":function(t,e,n){"use strict";n.r(e),n("4160"),n("a9e3"),n("d3b7"),n("25f0"),n("159b"),n("96cf");var r=n("1da1"),i=n("5530"),o=n("ed08"),a=n("2934"),u={toolbars:[["bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","selectall","cleardoc","|","rowspacingtop","rowspacingbottom","lineheight","|","paragraph","fontsize","|","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","|","touppercase","tolowercase","|","imagenone","imageleft","imageright","imagecenter","|","emotion","template","|","horizontal","date","time","spechars","|","searchreplace"]],zIndex:99,wordCount:!1,wordCountMsg:"",maximumWords:Number.MAX_VALUE,serverUrl:"",enableAutoSave:!1,enableContextMenu:!1,autoHeightEnabled:!1,elementPathEnabled:!1},c=window.UE;window.UEDITOR_HOME_URL="/editor/ueditor";var s={name:"UEditor",props:{height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"},html:{type:String,default:""}},data:function(){return{ueditor:null}},computed:{id:function(){return Math.random().toString(36).substring(2,15)+"-ueditor-"+ +new Date},editorWidth:function(){var t=this.width;return"number"==typeof t?"".concat(t,"px"):t},editorHeight:function(){var t=this.height;return"number"==typeof t?"".concat(t,"px"):t}},watch:{html:function(t){this.getHtml()}},mounted:function(){this.initEditor()},beforeDestroy:function(){this.destroyEditor()},methods:{initEditor:function(){this.ueditor=c.getEditor(this.id,Object(i.a)({},u)),this.getHtml()},getHtml:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.html){e.next=2;break}return e.abrupt("return");case 2:if(n=t.html,!Object(o.a)(t.html)){e.next=8;break}return e.next=6,a.a.getHtml(t.html);case 6:r=e.sent,n=r.data;case 8:t.setContent(n);case 9:case"end":return e.stop()}}),e)})))()},imageSuccess:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r="",t.forEach((function(t){var e='<img style="max-width:100%;" src="'.concat(t,'">');r+=e})),e.inserthtml(r,!0)}catch(t){}case 1:case"end":return n.stop()}}),n)})))()},setContent:function(t,e){var n=this;t&&this.ueditor.ready((function(){n.ueditor.setContent(t,e)}))},insertHtml:function(t){t&&this.ueditor.execCommand("inserthtml",t)},getContent:function(){return this.ueditor.getContent()},setFocus:function(){this.ueditor.focus()},hasContent:function(){return this.ueditor.hasContents()},destroyEditor:function(){this.ueditor.destroy()}}},d=(n("8ed9"),n("0b90"),n("2877")),f={name:"UEditorPage",components:{UEditor:Object(d.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-editor-container"},[e("div",{style:{width:this.editorWidth,height:this.editorHeight},attrs:{id:this.id}})])}),[],!1,null,"f00ae580",null).exports},data:function(){return{html:"https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html"}}},l=Object(d.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("u-editor",{attrs:{html:this.html}})}),[],!1,null,null,null);e.default=l.exports},"8ed9":function(t,e,n){"use strict";var r=n("72a0");n.n(r).a},c9d9:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u}));var r=Object({NODE_ENV:"production",BASE_URL:"/vue-editor-demo/"}),i=r.VUE_APP_API_URL,o=r.VUE_APP_OSS_URL,a=i,u=o},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0,forced:!n("ae40")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},ed08:function(t,e,n){"use strict";function r(t){return/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(t)}n.d(e,"a",(function(){return r}))},fc0f:function(t,e,n){}}]);