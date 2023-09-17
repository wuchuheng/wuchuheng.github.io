"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9954],{70224:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(22374);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(23405),a=n(54751),o=(n(22374),n(70224)),i=["components"],c={title:"02.\u7ec4\u4ef6\u901a\u4fe1",tags:["Vue","JS"],categories:["JS"],date:new Date("2020-04-17T04:23:00.000Z")},l=void 0,s={unversionedId:"Web\u76f8\u5173/VUE/\u7ec4\u4ef6\u901a\u4fe1",id:"Web\u76f8\u5173/VUE/\u7ec4\u4ef6\u901a\u4fe1",title:"02.\u7ec4\u4ef6\u901a\u4fe1",description:"1 v-on\u5c5e\u6027\u76d1\u542c\u5b9e\u73b0\u4e0b\u7ea7\u7ec4\u4ef6\u5411\u4e0a\u7ea7\u7ec4\u4ef6\u901a\u4fe1",source:"@site/docs/08.Web\u76f8\u5173/04.VUE/02.\u7ec4\u4ef6\u901a\u4fe1.md",sourceDirName:"08.Web\u76f8\u5173/04.VUE",slug:"/Web\u76f8\u5173/VUE/\u7ec4\u4ef6\u901a\u4fe1",permalink:"/docs/Web\u76f8\u5173/VUE/\u7ec4\u4ef6\u901a\u4fe1",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/08.Web\u76f8\u5173/04.VUE/02.\u7ec4\u4ef6\u901a\u4fe1.md",tags:[{label:"Vue",permalink:"/docs/tags/vue"},{label:"JS",permalink:"/docs/tags/js"}],version:"current",sidebarPosition:2,frontMatter:{title:"02.\u7ec4\u4ef6\u901a\u4fe1",tags:["Vue","JS"],categories:["JS"],date:"2020-04-17T04:23:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"01.\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/Web\u76f8\u5173/VUE/\u57fa\u7840\u77e5\u8bc6"},next:{title:"03.@\u522b\u540d\u8def\u5f84\u8bc6\u522b",permalink:"/docs/Web\u76f8\u5173/VUE/@\u522b\u540d\u8def\u5f84\u8bc6\u522b"}},p={},d=[{value:"1 <code>v-on</code>\u5c5e\u6027\u76d1\u542c\u5b9e\u73b0\u4e0b\u7ea7\u7ec4\u4ef6\u5411\u4e0a\u7ea7\u7ec4\u4ef6\u901a\u4fe1",id:"1-v-on\u5c5e\u6027\u76d1\u542c\u5b9e\u73b0\u4e0b\u7ea7\u7ec4\u4ef6\u5411\u4e0a\u7ea7\u7ec4\u4ef6\u901a\u4fe1",level:3},{value:"1.1 \u7236\u7ec4\u4ef6",id:"11-\u7236\u7ec4\u4ef6",level:4},{value:"1.2 \u5b50\u7ec4\u4ef6",id:"12-\u5b50\u7ec4\u4ef6",level:4},{value:"1.3 \u5c0f\u7ed3",id:"13-\u5c0f\u7ed3",level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-v-on\u5c5e\u6027\u76d1\u542c\u5b9e\u73b0\u4e0b\u7ea7\u7ec4\u4ef6\u5411\u4e0a\u7ea7\u7ec4\u4ef6\u901a\u4fe1"},"1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"v-on"),"\u5c5e\u6027\u76d1\u542c\u5b9e\u73b0\u4e0b\u7ea7\u7ec4\u4ef6\u5411\u4e0a\u7ea7\u7ec4\u4ef6\u901a\u4fe1"),(0,o.kt)("h4",{id:"11-\u7236\u7ec4\u4ef6"},"1.1 \u7236\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    {{val}}\n    <son v-on:val=\"changeVal\"/>\n  </div>\n</template>\n\n<script>\nimport Son from './components/Son'\n\nexport default {\n  name: 'Index',\n  // eslint-disable-next-line vue/no-unused-components\n  components: { Son },\n  data() {\n    return {\n      val: 0\n    }\n  },\n  methods: {\n    changeVal(val) {\n      this.val = val\n    }\n  }\n}\n<\/script>\n\n")),(0,o.kt)("h4",{id:"12-\u5b50\u7ec4\u4ef6"},"1.2 \u5b50\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div></div>\n</template>\n\n<script>\nexport default {\n  name: 'Son',\n  created() {\n    setInterval(\n      () => {\n        this.$emit('val', Math.random())\n      }, 1000\n    )\n  }\n}\n<\/script>\n\n\n")),(0,o.kt)("h4",{id:"13-\u5c0f\u7ed3"},"1.3 \u5c0f\u7ed3"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5b50\u7ec4\u901a\u8fc7\u4e8b\u4ef6\u53d1\u5e03\uff0c\u6539\u53d8\u7236\u7ec4\u4ef6\u76d1\u542c\u7684\u5c5e\u6027\uff0c\u4ece\u800c\u89e6\u53d1\u7236\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4ece\u800c\u4fee\u6539\u7236\u7ec4\u4ef6\u7684\u5c5e\u6027"))),(0,o.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/v2/guide/components.html"},"\u76d1\u542c\u5b50\u7ec4\u4ef6\u4e8b\u4ef6")))))}m.isMDXComponent=!0}}]);