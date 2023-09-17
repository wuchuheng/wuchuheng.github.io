"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7673],{70224:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(22374);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(23405),i=n(54751),o=(n(22374),n(70224)),a=["components"],l={title:"03.\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",date:new Date("2018-05-25T00:00:00.000Z"),tags:["Git"],categories:["Git"]},c=void 0,u={unversionedId:"Git/\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",id:"Git/\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",title:"03.\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",description:"1,\u5173\u4e8egit\u7684\u4e00\u70b9\u731c\u6d4b",source:"@site/docs/01.Git/03.\u642d\u5efa\u4ed3\u5e93\u670d\u52a1.md",sourceDirName:"01.Git",slug:"/Git/\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",permalink:"/docs/Git/\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/01.Git/03.\u642d\u5efa\u4ed3\u5e93\u670d\u52a1.md",tags:[{label:"Git",permalink:"/docs/tags/git"}],version:"current",sidebarPosition:3,frontMatter:{title:"03.\u642d\u5efa\u4ed3\u5e93\u670d\u52a1",date:"2018-05-25T00:00:00.000Z",tags:["Git"],categories:["Git"]},sidebar:"tutorialSidebar",previous:{title:"02.\u57fa\u7840\u7528\u6cd5",permalink:"/docs/Git/\u57fa\u7840\u7528\u6cd5"},next:{title:"04.Commit\u7684\u8bed\u4e49\u89c4\u8303",permalink:"/docs/Git/Commit\u7684\u8bed\u4e49\u89c4\u8303"}},p={},s=[{value:"1,\u5173\u4e8egit\u7684\u4e00\u70b9\u731c\u6d4b",id:"1\u5173\u4e8egit\u7684\u4e00\u70b9\u731c\u6d4b",level:4},{value:"2,\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u548c\u7528\u6237\u540d",id:"2\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u548c\u7528\u6237\u540d",level:4},{value:"3,\u8fde\u63a5\u4ed3\u5e93",id:"3\u8fde\u63a5\u4ed3\u5e93",level:4},{value:"4,\u7981\u7528git\u5e10\u6237\u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\u7684bash",id:"4\u7981\u7528git\u5e10\u6237\u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\u7684bash",level:4}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"1\u5173\u4e8egit\u7684\u4e00\u70b9\u731c\u6d4b"},"1,\u5173\u4e8egit\u7684\u4e00\u70b9\u731c\u6d4b"),(0,o.kt)("p",null,"\u4f7f\u7528git\u540e\u4e00\u56de\u5934\uff0c\u8fd9\u6761\u547d\u4ee4\u80bf\u4e48\u770b\u7740\u773c\u719f",(0,o.kt)("inlineCode",{parentName:"p"},"git clone [user]@[domain]:[path]"),"\u3002\n\u8ddf\u4ee5\u524d\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"scp [-r] [user]@[domain]:[path]"),"\u597d\u50cf\u3002\u4e5f\u8bb8git\u662f\u57fa\u4e8essh\u6765\u901a\u4fe1\uff0c\n\u8fde\u63a5\u8fdc\u7a0b\u7684\u4e3b\u673a\u3002\u5c31\u50cfshell,\u8fdc\u7a0b\u7684git\u547d\u4ee4\u4e5f\u4f1a\u5728\u8fdc\u7a0b\u4e3b\u673a\u4e2d\u6267\u884c\u3002"),(0,o.kt)("h4",{id:"2\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u548c\u7528\u6237\u540d"},"2,\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u548c\u7528\u6237\u540d"),(0,o.kt)("p",null,"\u6ce8:\u5148\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86git\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"sudo adduser git")," \u521b\u5efagit\u7528\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /home/git/repository/demo.git; #\u521b\u5efademo.git\u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u9879\u76ee\ncd /home/git/repository; \nchown -R git:git ../repository;\ngit init --bare demo.git;  # git\u521d\u59cb\u5316\u7a7a\u76ee\u5f55\n")),(0,o.kt)("h4",{id:"3\u8fde\u63a5\u4ed3\u5e93"},"3,\u8fde\u63a5\u4ed3\u5e93"),(0,o.kt)("p",null,"\u63d0\u4ea4\u672c\u5730\u516c\u94a5:",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-copy-id <username>@<remotehost>"),(0,o.kt)("br",{parentName:"p"}),"\n","\u5728git\u4e0a\u8f93\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"git clone git@[domain]:/home/git/repository/demo.git"),"\u5c06\u8fdc\u7a0b\u7684demo\n\u9879\u76ee\u514b\u9686\u4e0b\u6765\u5f00\u53d1\u3002"),(0,o.kt)("h4",{id:"4\u7981\u7528git\u5e10\u6237\u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\u7684bash"},"4,\u7981\u7528git\u5e10\u6237\u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\u7684bash"),(0,o.kt)("p",null,"\u4fee\u6539/etc/passwd\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git:x:1004:1004::/home/git:/bin/shell # \u6539\u4e3a\ngit:x:1004:1004::/home/git:/usr/bin/git-shell\n")))}m.isMDXComponent=!0}}]);