"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7574],{70224:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(22374);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94138:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(22374),a="wrapper_IeeA",c=function(e){var t=e.children;return n.createElement("div",{className:a},t)}},41484:function(e,t,r){r.d(t,{d:function(){return i}});var n=r(22374),a=r(95192),c=function(e){var t=e.rep,r=e.desc,c=[a.Z.grid,a.Z.gridColumn3],i=l(t),o=u(t),s="https://img.shields.io/github/stars/"+i+"/"+o,d="https://img.shields.io/github/forks/"+i+"/"+o,p="https://img.shields.io/github/followers/"+i;return n.createElement("div",{className:c.join(" ")},n.createElement("img",{src:s,alt:r}),n.createElement("img",{src:d,alt:r}),n.createElement("img",{src:p,alt:r}))},i=function(e){var t=e.tags;if(!t)return n.createElement(n.Fragment,null);var r=[a.Z.grid,a.Z.tagsRender].concat(1===t.length?[a.Z.gridColumn1]:[],2===t.length?[a.Z.gridColumn2]:[],3===t.length?[a.Z.gridColumn3]:[],4===t.length?[a.Z.gridColumn4]:[],t.length>=5?[a.Z.gridColumn5]:[]),c=[{color:"#D96868",background:"#FAEEEE"},{color:"#DFB573",background:"#FBF4E9"},{color:"#BABBBF",background:"#F2F2F3"},{color:"#8EC358",background:"#F0F8E8"},{color:"#5C97FC",background:"#ECF3FF"}];return n.createElement("div",{className:r.join(" ")},t.map((function(e,t){var r=c[t%c.length],i=r.color,o=r.background;return n.createElement("span",{style:{color:i,background:o},className:a.Z.tag,key:t},e)})))},o=function(e){var t=e.website,r=e.rep,a=e.name,c=t||r;return a=a||l(r)+"/"+u(r),n.createElement("a",{href:c,target:"_blank"},n.createElement("h3",null,a," \u2192"))},u=function(e){return e.match(/github\.com\/([^\/]+)\/([\w|_|-]+)/)[2]},s=function(e){var t=e.cover,r=e.desc,a=e.rep;return t=t||"https://github.com/"+l(a)+".png?size=80",n.createElement("img",{src:t,alt:r})},l=function(e){var t=e.match(/github\.com\/([^\/]+)/);t[0];return t[1]};t.Z=function(e){var t=e.desc,r=e.rep,u=e.cover,l=e.name,d=e.website,p=e.tags;return n.createElement("div",{className:a.Z.itemRender},n.createElement(s,{desc:t,rep:r,cover:u}),n.createElement(o,{rep:r,name:l,website:d}),n.createElement("p",null,t),n.createElement(i,{tags:p}),n.createElement(c,{desc:t,rep:r}))}},58655:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=r(23405),a=r(54751),c=(r(22374),r(70224)),i=r(94138),o=r(41484),u=["components"],s={title:"92 \u6211\u7684\u5de5\u5177\u5e93",date:new Date("2022-08-11T00:00:00.000Z")},l=void 0,d={unversionedId:"myLiberies",id:"myLiberies",title:"92 \u6211\u7684\u5de5\u5177\u5e93",description:"1 Dart\u5e93",source:"@site/docs/92.myLiberies.mdx",sourceDirName:".",slug:"/myLiberies",permalink:"/docs/myLiberies",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/92.myLiberies.mdx",tags:[],version:"current",sidebarPosition:92,frontMatter:{title:"92 \u6211\u7684\u5de5\u5177\u5e93",date:"2022-08-11T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"01 \u4ec0\u4e48\u662f\u97f3\u4e50?",permalink:"/docs/\u4e50\u7406/\u4ec0\u4e48\u662f\u97f3\u4e50"},next:{title:"93 \u90a3\u5e74\u6211\u6316\u7684\u5751",permalink:"/docs/\u90a3\u4e9b\u5e74\u6316\u7684\u5751"}},p={},m=[{value:"1 Dart\u5e93",id:"1-dart\u5e93",level:2},{value:"2 react \u5e93",id:"2-react-\u5e93",level:2},{value:"3 NPM \u5e93",id:"3-npm-\u5e93",level:2},{value:"4 PHP \u5e93",id:"4-php-\u5e93",level:2}],g={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"1-dart\u5e93"},"1 Dart\u5e93"),(0,c.kt)(i.Z,{mdxType:"Grid"},(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/task_util_dart",desc:"\u591a\u4efb\u52a1\u5904\u7406\u5e93,\u89e3\u51b3\u5e76\u53d1\u7684\u573a\u666f\u4e0b,\u4efb\u52a1\u7684\u5904\u7406\u65b9\u5f0f",tags:["Task","dart"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuhengtools/router_dart",desc:"\u4e13\u95e8\u4e3a\u89e3\u51b3flutter\u7684\u5185\u7f6e\u53cd\u4eba\u7c7b\u7684\u8def\u7531\u5e93\u800c\u7f16\u5199\u7684\u4eba\u6027\u5316\u8def\u7531\u5e93",tags:["flutter router"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/imap_cache_dart",desc:"\u57fa\u4e8eimap\u4e4b\u4e0a\u7684\u6570\u636e\u7f13\u5b58\u548c\u540c\u6b65\u7684\u5e93,\u603b\u4e4b\u5c31\u662f\u4e2a\u80fd\u57fa\u4e8eimap\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u7f13\u5b58\u5e93",tags:["imap cache"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/local_cache_dart",desc:"\u672c\u5730\u7f13\u5b58\u5e93",tags:["cache"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/logger_dart",desc:"\u65e5\u5fd7\u5e93",tags:["Log libery"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/hooks_dart",desc:"\u72b6\u6001\u7ba1\u7406\u548c\u53d8\u66f4\u8ba2\u9605\u5e93",tags:["hook dart"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/dot_env_dart",desc:"env \u52a0\u8f7d\u5e93",tags:["env","dart"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/isolate_channel_dart",desc:"isolate channel",tags:["chnnel","isolate"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/helper_dart",desc:"helper libery",tags:["helper"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/ui_notice_bar_dart",desc:"notice bar ",tags:["flutter ui"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/iconfont_dart",desc:"\u5728flutter \u4e2d\u4f7f\u7528iconfont",tags:["iconfont"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/wuchuheng_route_parser_dart",desc:"\u8def\u7531\u89e3\u6790\u5668",tags:["dart","flutter"],mdxType:"Library"})),(0,c.kt)("h2",{id:"2-react-\u5e93"},"2 react \u5e93"),(0,c.kt)(i.Z,{mdxType:"Grid"},(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/rxjs",desc:"\u4e13\u95e8\u4e3areact\u5199\u7684rxjs\u5e93",tags:["react","rxjs"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuhengtools/typewriter-js",desc:"\u4e00\u4e9b\u81ea\u5df1\u5199\u7684react\u7ec4\u4ef6\u5e93",tags:["react components"],mdxType:"Library"})),(0,c.kt)("h2",{id:"3-npm-\u5e93"},"3 NPM \u5e93"),(0,c.kt)(i.Z,{mdxType:"Grid"},(0,c.kt)(o.Z,{rep:"https://github.com/wuchuhengtools/gbk-parser",desc:"GBK\u89e3\u6790\u5de5\u5177",tags:["GBK"],mdxType:"Library"}),(0,c.kt)(o.Z,{rep:"https://github.com/wuchuhengtools/helper",desc:"\u81ea\u5b9a\u4e49\u52a9\u624b\u5e93",tags:["helper"],mdxType:"Library"})),(0,c.kt)("h2",{id:"4-php-\u5e93"},"4 PHP \u5e93"),(0,c.kt)(i.Z,{mdxType:"Grid"},(0,c.kt)(o.Z,{rep:"https://github.com/wuchuheng/qr_merge",desc:"\u4e8c\u7ef4\u7801\u5e93",tags:["QR"],mdxType:"Library"})))}h.isMDXComponent=!0},95192:function(e,t){t.Z={grid:"grid_ZRF5",gridColumn1:"gridColumn1_OrMm",gridColumn2:"gridColumn2_aCvf",gridColumn3:"gridColumn3_ju8H",gridColumn4:"gridColumn4_T6dr",gridColumn5:"gridColumn5_LmNZ",itemRender:"itemRender_nDZT","el-button":"el-button_Qzj1",tagsRender:"tagsRender_d4l1",tag:"tag_kie6",button:"button_Kz__"}}}]);