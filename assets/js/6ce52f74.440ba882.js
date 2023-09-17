"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1180],{70224:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(22374);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,k=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39623:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(23405),o=r(54751),a=(r(22374),r(70224)),c=["components"],i={title:"03.\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",date:new Date("2021-05-10T00:00:00.000Z"),tags:["CI/CD","Repository"],categories:["CI/CD"]},u=void 0,l={unversionedId:"CICD/\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",id:"CICD/\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",title:"03.\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",description:"1 \u4ec0\u4e48\u662fdocker\u955c\u50cf\u5e93?",source:"@site/docs/13.CICD/03.\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93.md",sourceDirName:"13.CICD",slug:"/CICD/\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",permalink:"/docs/CICD/\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/13.CICD/03.\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93.md",tags:[{label:"CI/CD",permalink:"/docs/tags/ci-cd"},{label:"Repository",permalink:"/docs/tags/repository"}],version:"current",sidebarPosition:3,frontMatter:{title:"03.\u90e8\u7f72docker\u79c1\u6709\u955c\u50cf\u5e93",date:"2021-05-10T00:00:00.000Z",tags:["CI/CD","Repository"],categories:["CI/CD"]},sidebar:"tutorialSidebar",previous:{title:"02.\u5b89\u88c5jenkins",permalink:"/docs/CICD/\u5b89\u88c5jenkins"},next:{title:"04.\u5b89\u88c5kuburnet\u5e76\u521d\u59cb\u5316master\u8282\u70b9\u548cnode\u8282\u70b9",permalink:"/docs/CICD/\u5b89\u88c5kuburnet\u5e76\u521d\u59cb\u5316master\u8282\u70b9\u548cnode\u8282\u70b9"}},p={},s=[{value:"1 \u4ec0\u4e48\u662fdocker\u955c\u50cf\u5e93?",id:"1-\u4ec0\u4e48\u662fdocker\u955c\u50cf\u5e93",level:2},{value:"docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u4ec0\u4e48\u662fdocker\u955c\u50cf\u5e93"},"1 \u4ec0\u4e48\u662fdocker\u955c\u50cf\u5e93?"),(0,a.kt)("p",null,"\u5c31\u662f\u7528\u6765\u5b58\u653e",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u955c\u50cf\u7684\u6587\u4ef6\u670d\u52a1\u5668\u3002\u5b83\u7684\u4f5c\u7528\u901a\u5e38\u662f\u5b58\u5165\u955c\u50cf\u6587\u4ef6\uff0c\u62c9\u53d6\u955c\u50cf\u6587\u4ef6\u4ee5\u53ca\u4ee3\u7406\u955c\u50cf\u5e93\u6ca1\u6709\u7684\u955c\u50cf\u3002"),(0,a.kt)("h2",{id:"docker-\u5b89\u88c5"},"docker \u5b89\u88c5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5nexus3"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -d -p 8081:8081 --name nexus sonatype/nexus3\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u542f\u52a8\u540e\uff0c\u76f4\u63a5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8081"),"\u5c31\u662f\u4e86")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://help.sonatype.com/repomanager3/installation/installation-methods#InstallationMethods-InstallingwithDocker"},"nexus\u5176\u5b83\u5b89\u88c5\u65b9\u5f0f\u548c\u8bf4\u660e\u6587\u6863"),(0,a.kt)("br",{parentName:"p"}),"\n","\u7761\u89c9\u4e86\uff0c \u540e\u9762\u5f85\u7eed\u3002\u3002\u3002"))}f.isMDXComponent=!0}}]);