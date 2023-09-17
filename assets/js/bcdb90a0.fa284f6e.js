"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1749],{70224:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var i=r(22374);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||n;return r?i.createElement(g,s(s({ref:t},d),{},{components:r})):i.createElement(g,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<n;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94138:function(e,t,r){r.d(t,{Z:function(){return n}});var i=r(22374),a="wrapper_IeeA",n=function(e){var t=e.children;return i.createElement("div",{className:a},t)}},41484:function(e,t,r){r.d(t,{d:function(){return s}});var i=r(22374),a=r(95192),n=function(e){var t=e.rep,r=e.desc,n=[a.Z.grid,a.Z.gridColumn3],s=d(t),o=l(t),c="https://img.shields.io/github/stars/"+s+"/"+o,m="https://img.shields.io/github/forks/"+s+"/"+o,p="https://img.shields.io/github/followers/"+s;return i.createElement("div",{className:n.join(" ")},i.createElement("img",{src:c,alt:r}),i.createElement("img",{src:m,alt:r}),i.createElement("img",{src:p,alt:r}))},s=function(e){var t=e.tags;if(!t)return i.createElement(i.Fragment,null);var r=[a.Z.grid,a.Z.tagsRender].concat(1===t.length?[a.Z.gridColumn1]:[],2===t.length?[a.Z.gridColumn2]:[],3===t.length?[a.Z.gridColumn3]:[],4===t.length?[a.Z.gridColumn4]:[],t.length>=5?[a.Z.gridColumn5]:[]),n=[{color:"#D96868",background:"#FAEEEE"},{color:"#DFB573",background:"#FBF4E9"},{color:"#BABBBF",background:"#F2F2F3"},{color:"#8EC358",background:"#F0F8E8"},{color:"#5C97FC",background:"#ECF3FF"}];return i.createElement("div",{className:r.join(" ")},t.map((function(e,t){var r=n[t%n.length],s=r.color,o=r.background;return i.createElement("span",{style:{color:s,background:o},className:a.Z.tag,key:t},e)})))},o=function(e){var t=e.website,r=e.rep,a=e.name,n=t||r;return a=a||d(r)+"/"+l(r),i.createElement("a",{href:n,target:"_blank"},i.createElement("h3",null,a," \u2192"))},l=function(e){return e.match(/github\.com\/([^\/]+)\/([\w|_|-]+)/)[2]},c=function(e){var t=e.cover,r=e.desc,a=e.rep;return t=t||"https://github.com/"+d(a)+".png?size=80",i.createElement("img",{src:t,alt:r})},d=function(e){var t=e.match(/github\.com\/([^\/]+)/);t[0];return t[1]};t.Z=function(e){var t=e.desc,r=e.rep,l=e.cover,d=e.name,m=e.website,p=e.tags;return i.createElement("div",{className:a.Z.itemRender},i.createElement(c,{desc:t,rep:r,cover:l}),i.createElement(o,{rep:r,name:d,website:m}),i.createElement("p",null,t),i.createElement(s,{tags:p}),i.createElement(n,{desc:t,rep:r}))}},8502:function(e,t,r){var i=r(22374),a=r(41484),n=r(95192),s=function(e){var t=e.website,r=e.name;return t?i.createElement("a",{href:t,target:"_blank",className:"toolsName"},r," \u2192"):i.createElement("h3",{className:"toolsName"},r)},o=function(e){var t=e.links;if(!t)return i.createElement(i.Fragment,null);var r=Object.getOwnPropertyNames(t),a=[n.Z.grid].concat(1===r.length?[n.Z.gridColumn1]:[],2===r.length?[n.Z.gridColumn2]:[],r.length>=1?[n.Z.gridColumn3]:[]);return i.createElement("div",{className:a.join(" ")},r.map((function(e,r){return i.createElement("a",{key:r,href:t[e]},i.createElement("button",{className:n.Z.button},e))})))};t.Z=function(e){var t=e.links,r=e.website,l=e.name,c=e.desc,d=e.cover,m=e.tags;return i.createElement("div",{className:n.Z.itemRender},i.createElement("img",{src:d}),i.createElement(s,{name:l,website:r}),i.createElement("p",{className:"toolsDesc"},c),i.createElement(a.d,{tags:m}),i.createElement(o,{links:t}))}},937:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return g}});var i=r(23405),a=r(54751),n=(r(22374),r(70224)),s=r(8502),o=r(94138),l=r(41484),c=["components"],d={title:"98 \u6536\u5f55\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee",date:new Date("2021-08-27T00:00:00.000Z"),tags:["APP","Office","Web"]},m=void 0,p={unversionedId:"awsomeProjects",id:"awsomeProjects",title:"98 \u6536\u5f55\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee",description:"1 \u7f51\u7ad9\u7c7b",source:"@site/docs/98.awsomeProjects.mdx",sourceDirName:".",slug:"/awsomeProjects",permalink:"/docs/awsomeProjects",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/98.awsomeProjects.mdx",tags:[{label:"APP",permalink:"/docs/tags/app"},{label:"Office",permalink:"/docs/tags/office"},{label:"Web",permalink:"/docs/tags/web"}],version:"current",sidebarPosition:98,frontMatter:{title:"98 \u6536\u5f55\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee",date:"2021-08-27T00:00:00.000Z",tags:["APP","Office","Web"]},sidebar:"tutorialSidebar",previous:{title:"96 \u6536\u5f55\u4f18\u79c0\u7684\u5f00\u6e90\u5e93",permalink:"/docs/\u6536\u5f55\u4f18\u79c0\u7684\u5f00\u6e90\u5e93"},next:{title:"99 \u6536\u5f55\u4f18\u79c0\u5f00\u6e90\u5f00\u53d1\u6846\u67b6",permalink:"/docs/\u6536\u5f55\u4f18\u79c0\u5f00\u6e90\u5f00\u53d1\u6846\u67b6"}},u={},g=[{value:"1 \u7f51\u7ad9\u7c7b",id:"1-\u7f51\u7ad9\u7c7b",level:2},{value:"2 \u90ae\u4ef6\u670d\u52a1\u5668",id:"2-\u90ae\u4ef6\u670d\u52a1\u5668",level:2},{value:"3 \u6536\u96c6\u4f18\u79c0\u9879\u76ee\u7684\u9879\u76ee",id:"3-\u6536\u96c6\u4f18\u79c0\u9879\u76ee\u7684\u9879\u76ee",level:2},{value:"4 \u641c\u7d22\u5f15\u64ce",id:"4-\u641c\u7d22\u5f15\u64ce",level:2},{value:"5 k8s\u548c\u5bb9\u5668\u9879\u76ee",id:"5-k8s\u548c\u5bb9\u5668\u9879\u76ee",level:2},{value:"6 \u7f16\u8f91\u5668",id:"6-\u7f16\u8f91\u5668",level:2},{value:"7 \u5f00\u6e90\u6559\u7a0b",id:"7-\u5f00\u6e90\u6559\u7a0b",level:2},{value:"8 email\u9879\u76ee",id:"8-email\u9879\u76ee",level:2},{value:"9 diagram \u9879\u76ee",id:"9-diagram-\u9879\u76ee",level:2},{value:"10 \u4ee3\u7406\u8f6c\u53d1",id:"10-\u4ee3\u7406\u8f6c\u53d1",level:2},{value:"11 CI/CD",id:"11-cicd",level:2},{value:"11 \u7535\u5b50\u4e66",id:"11-\u7535\u5b50\u4e66",level:2},{value:"12 \u76d1\u6d4b\u8f6f\u4ef6",id:"12-\u76d1\u6d4b\u8f6f\u4ef6",level:2},{value:"13 \u6587\u6863",id:"13-\u6587\u6863",level:2},{value:"14 \u6559\u7a0b",id:"14-\u6559\u7a0b",level:2},{value:"15 AI",id:"15-ai",level:2},{value:"16 Engine",id:"16-engine",level:2},{value:"17 webAssembly",id:"17-webassembly",level:2},{value:"18 nodejs binary compiler",id:"18-nodejs-binary-compiler",level:2},{value:"19 \u68af\u5b50",id:"19-\u68af\u5b50",level:2},{value:"20 \u7f51\u7ad9\u8bbe\u8ba1\u89c4\u8303",id:"20-\u7f51\u7ad9\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"21 \u5bf9\u8c61\u5b58\u50a8",id:"21-\u5bf9\u8c61\u5b58\u50a8",level:2},{value:"22 blog website",id:"22-blog-website",level:2}],b={toc:g};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,n.kt)("wrapper",(0,i.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-\u7f51\u7ad9\u7c7b"},"1 \u7f51\u7ad9\u7c7b"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/wuchuhengtools/app-distribution",desc:"\u4e00\u6b3e\u4eff\u7167fir.im\u7684\u5f00\u6e90APP\u5206\u53d1\u7f51\u7ad9\u9879\u76ee\uff0c\u8fd8\u884c\uff0c\u80fd\u7528",tags:["APP"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/zyx0814/dzzoffice",desc:"Dzzoffice\u662f\u4e00\u5957\u5f00\u6e90\u529e\u516c\u5957\u4ef6\uff0c\u9002\u7528\u4e8e\u4f01\u4e1a\u3001\u56e2\u961f\u642d\u5efa\u81ea\u5df1\u7684 \u7c7b\u4f3c\u201cGoogle\u4f01\u4e1a\u5e94\u7528\u5957\u4ef6\u201d\u3001\u201c\u5fae\u8f6fOffice365\u201d\u7684\u4f01\u4e1a\u534f\u540c\u529e\u516c\u5e73\u53f0\u3002",tags:["Web","Office"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/makeplane/plane",desc:"\u56e2\u961f\u9879\u76ee\u4efb\u52a1\u7ba1\u7406\u9762\u677f",tags:["task manager","project planning tool"],mdxType:"Library"})),(0,n.kt)("h2",{id:"2-\u90ae\u4ef6\u670d\u52a1\u5668"},"2 \u90ae\u4ef6\u670d\u52a1\u5668"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(s.Z,{cover:"https://james.apache.org/images/james.svg",name:"james",desc:"\u57fa\u4e8ejava\u5b9e\u73b0\u7684\u90ae\u4ef6\u670d\u52a1\u5668",tags:["Java","Email Server"],website:"https://james.apache.org/index.html",mdxType:"Tools"})),(0,n.kt)("h2",{id:"3-\u6536\u96c6\u4f18\u79c0\u9879\u76ee\u7684\u9879\u76ee"},"3 \u6536\u96c6\u4f18\u79c0\u9879\u76ee\u7684\u9879\u76ee"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/sindresorhus/awesome",cover:"https://github.com/sindresorhus/awesome/raw/main/media/logo.svg",desc:"awesome \u6536\u96c6\u4e16\u754c\u4e0a\u5404\u79cd\u4f18\u79c0\u5f00\u6e90\u9879\u76ee",tags:["awesome"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/521xueweihan/HelloGitHub",desc:"helloGithub \u6536\u96c6\u4e16\u754c\u4e0a\u5404\u79cd\u4f18\u79c0\u5f00\u6e90\u9879\u76ee",tags:["awesome","helloGithub"],mdxType:"Library"})),(0,n.kt)("h2",{id:"4-\u641c\u7d22\u5f15\u64ce"},"4 \u641c\u7d22\u5f15\u64ce"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/meilisearch/MeiliSearch",desc:"\u641c\u7d22\u5f15\u64ce\uff0c\u8ddfalgolia\u4e00\u6837\uff0c\u4e0d\u540c\u7684\u662f\u8fd9\u4e2a\u662f\u5f00\u6e90\u7684",tags:["meiliSearch","search engine","\u641c\u7d22\u5f15\u64ce"],mdxType:"Library"})),(0,n.kt)("h2",{id:"5-k8s\u548c\u5bb9\u5668\u9879\u76ee"},"5 k8s\u548c\u5bb9\u5668\u9879\u76ee"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/ameizi/vagrant-kubernetes-cluster",desc:"vagrant\u4e00\u952e\u5b89\u88c5k8s\u96c6\u7fa4",tags:["k8s","vagrant","kubernetes","cluster"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/kubesphere/kubesphere",desc:"kubesphere \u5f88\u8ba9\u4eba\u7740\u8ff7\u7684\u9879\u76ee",tags:["docker","k8s"],mdxType:"Library"})),(0,n.kt)("h2",{id:"6-\u7f16\u8f91\u5668"},"6 \u7f16\u8f91\u5668"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/cdr/deploy-code-server",desc:"vscode \u5728\u7ebf\u7248",tags:["vscode","\u5728\u7ebf\u7f16\u8f91\u5668"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/coder/code-server",desc:"coder\u662f\u5b8c\u5168\u7684\u4e00\u4e2a\u7ebf\u4e0a\u7684IDE\u5f00\u53d1\u73af\u5883\uff0c\u53ef\u4ee5\u662fvscode\u6216webstorm\u6216idea\u7b49\u7b49, \u5f88\u4e86\u4e0d\u8d77",tags:["coder","\u5728\u7ebf\u7f16\u8f91\u5668","\u5728\u7ebfvscode","\u5728\u7ebfwebstorm","\u5728\u7ebfidea"],mdxType:"Library"})),(0,n.kt)("h2",{id:"7-\u5f00\u6e90\u6559\u7a0b"},"7 \u5f00\u6e90\u6559\u7a0b"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/wangdoc/clang-tutorial",desc:"\u962e\u4e00\u5cf0\u5199\u7684C\u6559\u7a0b",tags:["C\u6559\u7a0b"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/philip-jvm/learn-spring-boot-graphql",desc:"youtube\u4e0a\u7684springBoot graphql \u89c6\u9891\u6559\u7a0b\ud83d\udc4b",tags:["graphql","springBoot","java","youtube"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/ossu/computer-science",desc:"\u5f00\u6e90\u8ba1\u7b97\u673a\u79d1\u5b66\u8bfe\u7a0b\uff0c\u662f\u4e16\u754c\u662f\u6700\u597d\u7684\u8ba1\u7b97\u673a\u79d1\u5b66\u6559\u5b66\u8d44\u6599\u4e4b\u4e00\uff0c\u8d44\u6599\u6765\u81ea\u54c8\u4f5b\u5b66 \u666e\u6797\u65af\u987f\u7b49\u9662\u6821,\u5b66\u5b8c\u540e\u76f8\u5f53\u4e8e\u4e0a\u5b8c\u4e86\u5927\u5b66\u7684\u8ba1\u7b97\u673a\u79d1\u5b66\u8bfe\u7a0b",tags:["University","OSSU"],mdxType:"Library"})),(0,n.kt)("h2",{id:"8-email\u9879\u76ee"},"8 email\u9879\u76ee"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/mailu/mailu",desc:"Mailu is a simple yet full-featured mail server as a set of Docker images.",tags:["mailu","email","\u90ae\u4ef6","docker email"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/axllent/mailpit",desc:"SMTP server for testing email sending in development",tags:["email","\u90ae\u4ef6","email debug tools"],mdxType:"Library"})),(0,n.kt)("h2",{id:"9-diagram-\u9879\u76ee"},"9 diagram \u9879\u76ee"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/weidagang/text-diagram",desc:"TextDiagam is a web tool for drawing UML sequence diagram in pure text.",tags:["diagram","UML"],mdxType:"Library"})),(0,n.kt)("h2",{id:"10-\u4ee3\u7406\u8f6c\u53d1"},"10 \u4ee3\u7406\u8f6c\u53d1"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/ehang-io/nps",desc:"\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u3001\u9ad8\u6027\u80fd\u3001\u529f\u80fd\u5f3a\u5927\u7684\u5185\u7f51\u7a7f\u900f\u4ee3\u7406\u670d\u52a1\u5668",tags:["nps","\u4ee3\u7406\u8f6c\u53d1"],mdxType:"Library"})),(0,n.kt)("h2",{id:"11-cicd"},"11 CI/CD"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/harness/drone",website:"https://www.drone.io/",desc:"\u4e00\u4e2a\u57fa\u4e8e\u5bb9\u5668\u7684CI/CD",tags:["CI/CD","Drone"],mdxType:"Library"})),(0,n.kt)("h2",{id:"11-\u7535\u5b50\u4e66"},"11 \u7535\u5b50\u4e66"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/cdhigh/KindleEar",desc:"\u628a\u5185\u5bb9\u4ecerss\u8f6c\u6362\u6210mobi\u5e76\u53d1\u5e03\u5230kindle\u7684\u7a0b\u5e8f\uff0c\u6709\u65f6\u95f4\u6211\u518d\u641e\u4e0b",tags:["ebook","kindle"],mdxType:"Library"})),(0,n.kt)("h2",{id:"12-\u76d1\u6d4b\u8f6f\u4ef6"},"12 \u76d1\u6d4b\u8f6f\u4ef6"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/TwiN/gatus",desc:"\u4e00\u4e2a\u53ef\u4ee5\u76d1\u6d4bhttp,graphql,tcp\u7684\u9879\u76ee",tags:["\u76d1\u6d4b"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/louislam/uptime-kuma",desc:"\u6709web\u7aefui\u7684\u76d1\u6d4b\u8f6f\u4ef6",tags:["\u76d1\u6d4b"],mdxType:"Library"})),(0,n.kt)("h2",{id:"13-\u6587\u6863"},"13 \u6587\u6863"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/umijs/dumi",desc:"\u4e00\u4e2a\u4e13\u4e3areact\u7ec4\u4ef6\u5e93\u63d0\u4f9b\u6587\u6863\u548c\u793a\u4f8b\u7684\u6587\u6863\uff0c\u89e3\u51b3react\u7ec4\u4ef6\u5e93\u7684\u6587\u6863\u529f\u80fd\u548c\u5f00\u53d1\u8c03\u8bd5\u529f\u80fd",tags:["react\u6587\u6863","react\u7ec4\u4ef6\u5e93"],mdxType:"Library"})),(0,n.kt)("h2",{id:"14-\u6559\u7a0b"},"14 \u6559\u7a0b"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/worldzhao/react-ui-library-tutorial",desc:"\u4e00\u4e2areact\u5e93\u7684\u6559\u7a0b, \u83b7\u76ca\u826f\u591a",tags:["react\u6587\u6863","react\u7ec4\u4ef6\u5e93"],mdxType:"Library"})),(0,n.kt)("h2",{id:"15-ai"},"15 AI"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/zyddnys/manga-image-translator",desc:"\u6f2b\u753b\u673a\u5668\u7ffb\u8bd1",tags:["manga"],mdxType:"Library"})),(0,n.kt)("h2",{id:"16-engine"},"16 Engine"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/bellard/quickjs",desc:"a small and  embeddable javascript engine",tags:["js engine","javascript engine"],mdxType:"Library"})),(0,n.kt)("h2",{id:"17-webassembly"},"17 webAssembly"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/WasmEdge/WasmEdge",desc:"WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime",tags:["webAssembly","wasm"],mdxType:"Library"})),(0,n.kt)("h2",{id:"18-nodejs-binary-compiler"},"18 nodejs binary compiler"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/vercel/pkg",desc:"Single-Command node.js binary compiler",tags:["nodejs compiler","node","compiler","binary"],mdxType:"Library"}),(0,n.kt)(l.Z,{rep:"https://github.com/nexe/nexe",desc:"Nexe is a command-line utility that compiles your Node.js application into a single executable file.",tags:["nodejs compiler","node","compiler","binary"],mdxType:"Library"})),(0,n.kt)("h2",{id:"19-\u68af\u5b50"},"19 \u68af\u5b50"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/233boy/v2ray",desc:"v2ray automatic installed script",tags:["v2ray"],mdxType:"Library"})),(0,n.kt)("h2",{id:"20-\u7f51\u7ad9\u8bbe\u8ba1\u89c4\u8303"},"20 \u7f51\u7ad9\u8bbe\u8ba1\u89c4\u8303"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)(l.Z,{rep:"https://github.com/uswds/uswds",desc:"\u7f8e\u56fd\u653f\u5e9c\u7f51\u7ad9\u8bbe\u8ba1\u89c4\u8303",tags:["uswds"],mdxType:"Library"})),(0,n.kt)("h2",{id:"21-\u5bf9\u8c61\u5b58\u50a8"},"21 \u5bf9\u8c61\u5b58\u50a8"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<Library\n    rep='https://github.com/minio/minio'\n    desc='\u5bf9\u8c61\u5b58\u50a8,\u81ea\u5df1\u641e\u6ca1\u6709\u5907\u6848\u8fd9\u56de\u4e8b'\n    tags={[  'object storage']}\n/>\n"))),(0,n.kt)("h2",{id:"22-blog-website"},"22 blog website"),(0,n.kt)(o.Z,{mdxType:"Grid"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<Library\n    rep='https://github.com/typecho/typecho'\n    desc='\u6781\u7b80\u535a\u5ba2\u7f51\u7ad9,\u5f88\u7cbe\u7b80\u7684\u9879\u76ee\uff0c\u6e90\u7801\u4e0d\u8db3400kb,\u6570\u636e\u88687\u5f20\uff0c\u7f51\u9875\u8bbe\u8ba1\u98ce\u683c\u201c\u5927\u9053\u81f3\u7b80\u201d\uff0c\u8ffd\u6c42\u7684\u5c31\u662f\u5b9e\u7528,\u80fd\u8ba9\u6211\u4e3a\u6570\u4e0d\u591a\u6311\u4e0d\u51fa\u95ee\u9898\u7684\u9879\u76ee(\u538b\u6839\u6ca1\u6709\u597d\u6311\u7684)'\n    tags={['php', 'blog', 'website']}\n/>\n"))))}h.isMDXComponent=!0},95192:function(e,t){t.Z={grid:"grid_ZRF5",gridColumn1:"gridColumn1_OrMm",gridColumn2:"gridColumn2_aCvf",gridColumn3:"gridColumn3_ju8H",gridColumn4:"gridColumn4_T6dr",gridColumn5:"gridColumn5_LmNZ",itemRender:"itemRender_nDZT","el-button":"el-button_Qzj1",tagsRender:"tagsRender_d4l1",tag:"tag_kie6",button:"button_Kz__"}}}]);