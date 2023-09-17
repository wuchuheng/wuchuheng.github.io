"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8290],{70224:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var o=t(22374);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return t?o.createElement(k,l(l({ref:n},s),{},{components:t})):o.createElement(k,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39166:function(e,n,t){var o=t(23405),a=t(54751),r=t(22374),l=t(67042),i=["src","style"];n.Z=function(e){var n=e.src,t=e.style,c=((0,a.Z)(e,i),(0,r.useState)(!0)),p=c[0],s=c[1],m=function(){return s(!1)},u={sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"},d=null!=n.match(/codesandbox\.io/),k=function(){return r.createElement(r.Fragment,null,r.createElement("iframe",(0,o.Z)({src:n,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",onLoad:m},d?u:{})),p&&r.createElement(l.Z,{style:Object.assign({},t)}))},b=function(){return r.createElement(r.Fragment,null,r.createElement("iframe",(0,o.Z)({src:n,style:Object.assign({width:"100%",height:"100%"},t,{display:p?"none":"block"}),onLoad:m},d?u:{})),p&&r.createElement(l.Z,{style:Object.assign({},t)}))};return r.createElement(r.Fragment,null,d&&r.createElement(k,null),!d&&r.createElement(b,null))}},67042:function(e,n,t){t.d(n,{Z:function(){return s}});var o,a=t(18482),r=t(22374),l=t(68196),i=t.n(l),c=t(13430),p="mainWrapper_wpRl",s=function(e){var n=e.style,t=(0,c.css)(o||(o=(0,a.Z)(["\n        display: block;\n        margin: 0 auto;\n    "])));return r.createElement("div",{className:p,style:Object.assign({},n)},r.createElement(i(),{css:t,color:"var(--ifm-color-primary)"}))}},40342:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=t(23405),a=t(54751),r=(t(22374),t(70224)),l=t(39166),i=["components"],c={title:"03 React Hook\u7684\u5e94\u7528",tags:["React","Hook"],date:"2021-11-19 3:05"},p=void 0,s={unversionedId:"Web\u76f8\u5173/React/ReactHook\u7684\u5e94\u7528",id:"Web\u76f8\u5173/React/ReactHook\u7684\u5e94\u7528",title:"03 React Hook\u7684\u5e94\u7528",description:"1 Hook\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u8981\u7528\u5b83?",source:"@site/docs/08.Web\u76f8\u5173/06.React/03.ReactHook\u7684\u5e94\u7528.mdx",sourceDirName:"08.Web\u76f8\u5173/06.React",slug:"/Web\u76f8\u5173/React/ReactHook\u7684\u5e94\u7528",permalink:"/docs/Web\u76f8\u5173/React/ReactHook\u7684\u5e94\u7528",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/08.Web\u76f8\u5173/06.React/03.ReactHook\u7684\u5e94\u7528.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Hook",permalink:"/docs/tags/hook"}],version:"current",sidebarPosition:3,frontMatter:{title:"03 React Hook\u7684\u5e94\u7528",tags:["React","Hook"],date:"2021-11-19 3:05"},sidebar:"tutorialSidebar",previous:{title:"02.redux\u72b6\u6001\u7ba1\u7406",permalink:"/docs/Web\u76f8\u5173/React/Redux\u72b6\u6001\u7ba1\u7406"},next:{title:"04 \u81ea\u5df1\u5199\u4e2aredux",permalink:"/docs/Web\u76f8\u5173/React/\u81ea\u5df1\u5199\u4e2aredux"}},m={},u=[{value:"1 Hook\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u8981\u7528\u5b83?",id:"1-hook\u662f\u4ec0\u4e48\u4e3a\u4ec0\u4e48\u8981\u7528\u5b83",level:2},{value:"2 <code>useCallback</code>\u7684\u4f7f\u7528",id:"2-usecallback\u7684\u4f7f\u7528",level:2},{value:"2.1 <code>useCallback</code>\u793a\u4f8b",id:"21-usecallback\u793a\u4f8b",level:3},{value:"3 <code>React.memo</code> \u51fd\u6570\u7684\u4f7f\u7528",id:"3-reactmemo-\u51fd\u6570\u7684\u4f7f\u7528",level:2},{value:"4 <code>useMemo</code>\u7684\u4f7f\u7528",id:"4-usememo\u7684\u4f7f\u7528",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-hook\u662f\u4ec0\u4e48\u4e3a\u4ec0\u4e48\u8981\u7528\u5b83"},"1 Hook\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u8981\u7528\u5b83?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u672c\u8d28\u662f\u4e2a\u6709\u70b9\u4e0d\u4e00\u6837\u7684\u51fd\u6570,\u4e0d\u4e00\u6837\u5728\u4e8e\u8fd4\u56de\u7684\u503c\uff0c\u5982\u5e38\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),",\u7528\u4e8e\u4fdd\u5b58\u72b6\u6001\uff0c\u90a3\u4e48\u5b83\u662f\u600e\u4e48\u4fdd\u5b58\u5176\u72b6\u6001\u7684\u3002\u6211\u4eec\u77e5\u9053\u4e00\u4e2a\u7ec4\u4ef6\u51fd\u6570\u88ab\u8c03\u7528\uff08\u6e32\u67d3\uff09\n\u91cc\u9762\u7684\u5f15\u7528\u51fd\u6570\u5c31\u4e00\u5b9a\u4e5f\u4f1a\u88ab\u8c03\u7528\u4e86\uff0c\u4e4b\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),"\u80fd\u4fdd\u5b58\u72b6\u6001\u662f\u56e0\u4e3a\u5b83\u80fd\u8fd4\u56de\u8ddf\u4e0a\u6b21\u7ec4\u4ef6\u51fd\u6570\u4e00\u6837\u7684\u7ed3\u679c\uff0c\u6240\u4ee5\u5b83\u662f\u7a33\u5b9a\u7684\uff0c\u4e5f\u5c31\u662f\u80fd\u4fdd\u5b58\u7ec4\u4ef6\u7684\u4e86\u72b6\u6001.",(0,r.kt)("br",{parentName:"p"}),"\n","\u8fd9\u6837\u4e00\u6765\uff0c\u51fd\u6570\u7ec4\u4ef6\u4e0d\u5c31\u8ddf\u7c7b\u7ec4\u4ef6\u4e00\u6837\u6709\u72b6\u6001\u4e86\u5417\u3002\u800c\u8fd9\u53ea\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u4e2d\u7684\u4e00\u4e2a.   ",(0,r.kt)("br",null),"\n","\u2003"," \u597d\uff0c\u56de\u5230\u6807\u9898\u7684\u95ee\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Hook"),"\u662f\u4ec0\u4e48\uff1f",(0,r.kt)("inlineCode",{parentName:"p"},"Hook"),"\u672c\u8d28\u662f\u4e2a\u51fd\u6570\uff0c\u4f46\u4f1a\u6839\u636e\u51fd\u6570\u7ec4\u4ef6\u7684\u60c5\u51b5\uff0c\u4e0d\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u6709\u4e0d\u540c\u7684\u5b9e\u73b0\u529f\u80fd\u3002   ",(0,r.kt)("br",null),"\n","\u2003"," \u90a3\u4e3a\u4ec0\u4e48\u8981\u7528\u5b83\uff1f\u76f8\u8f83\u7c7b\u7ec4\u4ef6\uff0c\u51fd\u6570\u7ec4\u4ef6\u7b80\u5355\u8f7b\u91cf\uff0c\u597d\u62c6\u5206\uff0c\u4f46\u51fd\u6570\u7ec4\u4ef6\u5c31\u662f\u51fd\u6570\uff0c\u6ca1\u6709\u7c7b\u7ec4\u4ef6\u7684\u5bf9\u5e94\u7684\u72b6\u6001\u548c\u751f\u547d\u5468\u671f\u529f\u80fd\uff0c\u800c\u8fd9\u4e9b\u529f\u80fd\u6216\u591a\u6216\u5c11\u53ef\u80fd\u901a\u8fc7\n",(0,r.kt)("inlineCode",{parentName:"p"},"Hook"),"\u6765\u5f25\u8865\u5b9e\u73b0\u51fa\u6765,\u8fd9\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Hook"),"\u7684\u610f\u4e49\u3002"),(0,r.kt)("h2",{id:"2-usecallback\u7684\u4f7f\u7528"},"2 ",(0,r.kt)("inlineCode",{parentName:"h2"},"useCallback"),"\u7684\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"userCallback")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"userCallback"),"\u7684\u4f5c\u7528\u662f\u4ec0\u4e48? ",(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\u6709\u4e00\u4e2a\u8fc7\u6ee4\u8c03\u7528(\u6e32\u67d3)\u7684\u60c5\u51b5,\u7ec4\u4ef6\u7684\u66f4\u65b0\u672c\u8d28\u4e0a\u5c31\u662f\u628a\u8be5\u51fd\u6570\u91cd\u65b0\u8c03\u7528\u4e00\u904d\uff0c\u4f46\u5f80\u540e\u7684\u5b50\u7ec4\u4ef6,\n\u53ef\u80fd\u4e0d\u9700\u8981\u8c03\u7528\u4e86\uff0c\u5c31\u662f\u6ca1\u5fc5\u8981\u4e86\u3002\u800c\u7ec4\u4ef6\u7684\u8c03\u7528(\u6e32\u67d3)\u89e6\u53d1\u6761\u4ef6\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u53d1\u751f\u53d8\u52a8\u624d\u91cd\u65b0\u8c03\u7528\uff08\u6e32\u67d3\uff09\u81ea\u8eab\u3002\u8bf4\u767d\u4e86\uff0c\u4e00\u4f46\u7ec4\u4ef6\u5185\u6709\u4e00\u4e01\u70b9\u7684\u5173\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\n\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u6216\u5176\u5b83",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u7684\u53d8\u5316\u90fd\u4f1a\u5f15\u53d1\u7ec4\u4ef6\u5168\u90e8\u91cd\u65b0\u518d\u8fd0\u884c\u4e00\u6b21\uff0c\u4e5f\u76f4\u63a5\u6ce2\u53ca\u5230\u5168\u90e8\u5b50\u7ec4\u4ef6\u7684\u66f4\u65b0\u3002\u8fd9\u662f\u662f\u51fd\u6570\u7ec4\u4ef6\u66f4\u65b0\u7684\u65b9\u5f0f\uff0c\u907f\u514d\u4e0d\u4e86\uff0c\u4f46\u53ef\u4ee5\u907f\u514d\u4e00\u4e9b\u4ee3\u7801\u5757\n\u5c31\u91cd\u590d\u8c03\u7528\u548c\u5b50\u7ec4\u4ef6\u88ab\u52a8\u8c03\u7528\u7684\u6e32\u67d3\u7684\u60c5\u51b5\u3002\u800c\u7ec4\u4ef6\u5185\u7684\u4ee3\u7801\u5757\u907f\u514d\u518d\u6b21\u88ab\u8c03\u7528\u5219\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"userCallback"),"\u6765\u5b9e\u73b0"),(0,r.kt)("h3",{id:"21-usecallback\u793a\u4f8b"},"2.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"useCallback"),"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u7684\u63a5\u65362\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662f\u4e0d\u53d8\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4e00\u4e2a\u662f\u4f9d\u8d56\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u4f9d\u8d56\u53d8\u4e86\uff0c\u51fd\u6570\u624d\u4f1a\u91cd\u65b0\u5237\u65b0\u4e00\u4e2a\u65b0\u7684\u7248\u672c\uff0c\u5982\u679c\u6ca1\u6709\u5219\uff0c\u9ed8\u8ba4\u4e0d\u53d8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import React, {useCallback, useState} from "react";\n\nconst UseCallbackDemo = (): React.ReactElement => {\n    const [count, setCount] = useState<number>(0)\n\n    const callback = useCallback(() => {\n        console.log("callback\u7684\u5185\u90e8\u8bbf\u95ee\u5230\u7684count\u503c: " + count)\n        // todo some thing ...\n    }, [])\n\n    return (\n        <>\n            <p>count: {count}</p>\n            <button onClick={() => setCount(() => count + 1) }>\u4fee\u6539count</button>\n            <button onClick={callback}>\u5728useCallback\u5185\u90e8\u6253\u5370count</button>\n        </>\n    )\n}\n\nexport default UseCallbackDemo\n')),(0,r.kt)("p",null,"\u540e\u9762\u4e0d\u7ba1\u7406\u600e\u4e48\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"\uff0c\u800c\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"\u6765\u8bf4,",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"\u5c31\u662f0\uff0c\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"\u662f\u4e0d\u53d8\u7684\uff0c\u54ea\u6015\u7531\u4e8e\u5916\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"\u5f15\u53d1\u7ec4\u4ef6\u591a\u6b21\u5237\u65b0\uff0c\u53ef\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"\n\u5e76\u6ca1\u6709\u66f4\u65b0\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"\u5185\u90e8\u4e00\u5f00\u59cb\u8bbf\u95ee\u5230\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"count"),'\u4e5f\u5c31\u662f\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u521d\u59cb\u5316\u65f6\u7684\u53c2\u6570\u5c31\u662f0. \u6240\u4ee5\u5b83\u5c31\u53ea\u80fd\u5728\u63a7\u5236\u53f0\u4e2d\u6253\u5370\u51fa"callback\u7684\u5185\u90e8\u8bbf\u95ee\u5230\u7684count\u503c: 0"\u8fd9\u6837\n\u7684\u7ed3\u679c\u3002'),(0,r.kt)(l.Z,{src:"https://codesandbox.io/embed/note-demo-for-react-7b6mf?expanddevtools=1&amp;fontsize=14&hidenavigation=1&initialpath=%2FUseCallbackDemo&module=%2Fsrc%2Fpages%2FUseCallbackDemo%2Findex.tsx&theme=dark",mdxType:"IframeContainer"}),(0,r.kt)("p",null,"\u800c\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u662f\u5f97\u5230\u4e86\u4e00\u4e2a\u4e0d\u4f1a\u968f\u7740\u7ec4\u4ef6\u6e32\u67d3\u800c\u4ea7\u751f\u7684\u65b0\u7684\u7248\u672c\u7684\u51fd\u6570\u4e86\uff0c\u4f46\u6709\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"userCallback"),"\u4e2d\u8fd8\u662f\u9700\u8981\u4f7f\u7528\u6700\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u7684\uff0c\u6700\u76f4\u63a5\u7684\u65b9\u5f0f\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 \u628a\u9700\u8981\u7528\u5230\u7684\u6700\u65b0",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u52a0\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"userCallback"),"\u7684\u4f9d\u8d56\u6570\u7ec4\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"2 \u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"useReducer"),"\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"dispatcher"),"\u7684\u65b9\u5f0f\uff0c\u628a\u5bf9",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u5904\u7406\u59d4\u6258\u7ed9",(0,r.kt)("inlineCode",{parentName:"li"},"useReducer"),"\u6765\u5904\u7406\uff0c \u8fd9\u6837\u7684\u597d\u5904\u662f\u76f8\u5bf9\u4e8e\u4f9d\u8d56\u7684\u6bcf\u6b21\u90fd\u8981\u66f4\u65b0\u4e00\u6b21\uff0c\n\u4e0d\u53ef\u4ee5\u76f4\u89c2\u5730\u5728\u4ee3\u7801\u4e2d\u51b3\u5b9a\u8981\u4e0d\u8981\u5904\u7406\u5173\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u95ee\u9898\uff0c\u53e6\u4e00\u4e2a\u597d\u5904\u5c31\u662f\u666e\u901a\u7684\u9632\u6296\u7b97\u6cd5\u662f\u57fa\u4e8e\u65f6\u95f4\u7684\u6765\u91c7\u6837\u7684\uff0c\u8fd9\u6837\u628a\u903b\u8f91\u5199",(0,r.kt)("inlineCode",{parentName:"li"},"userCallback"),"\u53ef\u4ee5\u907f\u514d\u4ea7\u751f\u65b0\u7684\n\u7248\u672c\uff0c\u4ece\u800c\u4fdd\u8bc1\u9632\u6296\u7b97\u6cd5\u7684\u7a33\u5b9a\uff0c\u800c\u9700\u8981\u5904\u7406\u6700\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u65f6\uff0c\u5219\u76f4\u63a5\u59d4\u6258\u7ed9",(0,r.kt)("inlineCode",{parentName:"li"},"useReducer"),"\u6765\u5904\u7406\u5c31\u53ef\u4ee5\u4e86\u3002")),(0,r.kt)("h2",{id:"3-reactmemo-\u51fd\u6570\u7684\u4f7f\u7528"},"3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"React.memo")," \u51fd\u6570\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u4f5c\u7528\u4e8e\u5b50\u7ec4\u4ef6\u548c\u7236\u7ec4\u4ef6\u4e4b\u95f4\uff0c\u5982\u679c\u7236\u7ec4\u4ef6\u66f4\u65b0\u4e86\uff0c\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u88ab\u52a8\u66f4\u65b0\uff0c\u4e0d\u7ba1\u6709\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u7684\u53d8\u52a8\u3002\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo"),"\u7684\u4f5c\u7528\u5305\u88f9\u5b50\u7ec4\u4ef6\u7528\u7684\uff0c\u5145\u5f53\u4e00\u4e2a\u4e2d\u95f4\u8005\u7684\u4f5c\u7528\uff0c\n\u5c31\u662f\u5f53\u7236\u7ec4\u4ef6\u66f4\u65b0\u65f6\uff0c\u5982\u679c\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u7684\u66f4\u65b0\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo"),"\u5c31\u662f\u4e0d\u4f1a\u8ba9\u5b50\u7ec4\u4ef6\u6e32\u67d3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="React.memo\u793a\u4f8b\u4ee3\u7801"',title:'"React.memo\u793a\u4f8b\u4ee3\u7801"'},"import React, {useState} from \"react\";\n\nconst Children1 = () => {\n    console.log('Children1 reload.')\n    return <>Children1</>\n}\nconst Children2 = React.memo(() => {\n    console.log('Children2 reload.')\n    return <>Children1</>\n})\n\nconst UseMemoDemo = (): React.ReactElement => {\n    const [count, setCount] = useState<number>(0)\n    console.log(\"Parent component reload.\" + count)\n    return (<>\n        <Children1 />\n        <br />\n        <Children2 />\n        <br/>\n        <button onClick={() => setCount(() => count + 1)}>Reload component</button>\n    </>)\n}\n\nexport default UseMemoDemo;\n")),(0,r.kt)(l.Z,{src:"https://codesandbox.io/embed/note-demo-for-react-7b6mf?expanddevtools=1&fontsize=14&hidenavigation=1&initialpath=%2FmemoDemo&module=%2Fsrc%2Fpages%2FMemoDemo%2Findex.tsx&theme=light",mdxType:"IframeContainer"}),(0,r.kt)("p",null,"\u4ee5\u4e0a\u793a\u4f8b\uff0c\u5728\u6253\u5370\u53f0\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5982\u679c\u7236\u7ec4\u4ef6\u66f4\u65b0\u4e86\uff0c\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u88ab\u52a8\u66f4\u65b0\uff0c\u800c\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo"),"\u51fd\u6570\u5219\u907f\u514d\u4e86\u8fd9\u79cd\u8fc7\u591a\u7684\u6e32\u67d3\u3002"),(0,r.kt)("h2",{id:"4-usememo\u7684\u4f7f\u7528"},"4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"useMemo"),"\u7684\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u8ddf",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u7684\u7528\u6cd5\u4e00\u6837\uff0c\u800c\u8ddf\u540e\u8005\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u4e0d\u4e00\u6837\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u56fa\u5b9a\u7684\u53d8\u91cf\u3002\u5b83\u7684\u4f5c\u7528\u662f\uff0c\u5982\u679c\u5b50\u7ec4\u4ef6\u63a5\u6536\u7684\u5c5e\u6027\u662f\u590d\u5408\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\n\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\u65f6\uff0c\u5c3d\u7ba1\u6570\u503c\u6ca1\u53d8\uff0c\u4f46\u8fd8\u662f\u4f1a\u5f15\u53d1\u5b50\u7ec4\u4ef6\u7684\u66f4\u65b0\uff0c\u6211\u731c\u8fd9\u662f\u56e0\u4e3a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"js"),"\u4e2d\uff0c\u81ea\u5b9a\u4e49\u7684\u590d\u5408\u7c7b\u578b\u5c3d\u7ba1\u6bcf\u6b21\u90fd\u503c\u662f\u4e00\u6837\u7684\uff0c\u4f46\u5e95\u5c42\u7684\u5185\u5b58\u5730\u5740\u5df2\u7ecf\u4e0d\u4e00\u6837\u4e86\uff0c\u4ece\u800c\n\u5b50\u7ec4\u4ef6\u628a\u8be5\u5c5e\u6027\u5224\u5b9a\u4e3a\u65b0\u7684\u7ec4\u4ef6\u800c\u89e6\u53d1\u5b50\u7ec4\u4ef6\u7684\u66f4\u65b0\u3002\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u5219\u80fd\u4fdd\u8bc1\u88ab\u81ea\u5b9a\u4e49\u7684\u503c\u662f\u4e0d\u4e00\u53d8\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="useMemo\u793a\u4f8b\u4ee3\u7801"',jsx:!0,title:'"useMemo\u793a\u4f8b\u4ee3\u7801"'},"\nimport React, {useMemo, useState} from \"react\";\n type InfoType = {text: string}\n type ChildrenPropsType = {info: InfoType}\n const Children1 = () => {\n     console.log('Children1 reload.')\n     return <>Children1</>\n }\n const Children2 = React.memo(({info}: ChildrenPropsType) => {\n     console.log('Children2 reload.' + JSON.stringify(info))\n     return <>Children2</>\n })\n const Children3 = React.memo(({info}: ChildrenPropsType) => {\n     console.log('Children3 reload.' + JSON.stringify(info))\n     return <>Children3</>\n })\n const UseMemoDemo = (): React.ReactElement => {\n     const [count, setCount] = useState<number>(0)\n     console.log(\"Parent component reload.\" + count)\n     const text2: InfoType = {text: 'text2'}\n     const text3 = useMemo((): InfoType => ({text: \"text3\"}), [])\n     return (<>\n         <Children1 />\n         <br />\n         <Children2 info={text2} />\n         <br/>\n         <Children3 info={text3} />\n         <button onClick={() => setCount(() => count + 1)}>Reload component</button>\n     </>)\n }\n\nexport default UseMemoDemo;\n\n")),(0,r.kt)(l.Z,{src:"https://codesandbox.io/embed/note-demo-for-react-7b6mf?expanddevtools=1&fontsize=14&hidenavigation=1&initialpath=%2FuseMemoDemo&module=%2Fsrc%2Fpages%2FUseMemoDemo%2Findex.tsx&theme=dark",mdxType:"IframeContainer"}),(0,r.kt)("p",null,"\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u4f1a\u6253\u5370:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u63a7\u5236\u53f0\u6253\u5370"',title:'"\u63a7\u5236\u53f0\u6253\u5370"'},'Parent component reload.2\nindex.tsx:5 Children1 reload.\nindex.tsx:9 Children2 reload.{"text":"text2"}\n')),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/014ee0ebe959"},"useCallback()\u3001useMemo() \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_39107093/article/details/119514549"},"React useCallback\u7684\u5b9e\u9645\u5e94\u7528 \u4e3a\u4ec0\u4e48\u8981\u7528\u8fd9\u4e2a\u51fd\u6570\uff1f ")))}k.isMDXComponent=!0}}]);