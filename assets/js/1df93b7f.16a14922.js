"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3237],{67042:function(e,t,n){n.d(t,{Z:function(){return s}});var a,r=n(18482),i=n(22374),l=n(68196),o=n.n(l),c=n(13430),u="mainWrapper_wpRl",s=function(e){var t=e.style,n=(0,c.css)(a||(a=(0,r.Z)(["\n        display: block;\n        margin: 0 auto;\n    "])));return i.createElement("div",{className:u,style:Object.assign({},t)},i.createElement(o(),{css:n,color:"var(--ifm-color-primary)"}))}},89997:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(22374),r=n(38333),i=n(40268),l="mainWraper_YFAs",o="manRender_lTdl",c=function(e){var t=e.children;return a.createElement("main",{className:l},a.createElement("div",{className:o},t))},u="mainWrapper__BRH",s="buttonLayoutWrapper_bCdW",m=n(63501),h=n(59497),d=function(){return a.createElement("div",{className:u},a.createElement("h1",null,"Wuchuheng's notes"),a.createElement("p",null,"A full-stack developer based in China!"),a.createElement("div",{className:s},a.createElement("a",{href:"https://github.com/wuchuheng",target:"_blank"},a.createElement("button",null,a.createElement(m.Jmn,null))," "),a.createElement("a",{href:"mailto:root@wuchuheng.com",target:"_blank"},a.createElement("button",null,a.createElement(m.hIW,null))," "),a.createElement("a",{href:"https://www.npmjs.com/~wuchuheng",target:"_blank"},a.createElement("button",null,a.createElement(h.yu4,null))," "),a.createElement("a",{href:"https://www.npmjs.com/~wuchuheng",target:"_blank"},a.createElement("button",null,a.createElement(h.trc,null))," ")))},p="mainWrapper_zxgU",w=function(){return a.createElement("div",{className:p},a.createElement("p",null,"\xa9 2017 - ",(new Date).getFullYear()," Wuchuheng. All Rights Reserved. \u2003 ",a.createElement("a",{href:"https://beian.miit.gov.cn/"},"\u7ca4ICP\u590717071471\u53f7-2")))},f=n(67042),v=n(70320),E=n(72521),g=n(89393);var b=n(15302),S=(0,a.forwardRef)((function(e,t){var n=e.children;return a.createElement(b.xu,{ref:t,className:"voxel-dog",m:"auto",mt:["-20px","-60px","-120px"],mb:["-40px","-140px","-200px"],w:[280,480,640],h:[280,480,640],position:"relative"},n)}));var k=function(e){var t=e.onLoad,n=(0,a.useRef)(),r=(0,a.useState)(!0),i=(r[0],r[1]),l=(0,a.useState)(),o=l[0],c=l[1],u=(0,a.useState)(),s=(u[0],u[1]),m=(0,a.useState)(new v.Pa4(-.5,1.2,0))[0],h=(0,a.useState)(new v.Pa4(20*Math.sin(.2*Math.PI),10,20*Math.cos(.2*Math.PI)))[0],d=(0,a.useState)(new v.xsS)[0],p=(0,a.useState)(),w=(p[0],p[1]),f=(0,a.useCallback)((function(){var e=n.current;if(e&&o){var t=e.clientWidth,a=e.clientHeight;o.setSize(t,a)}}),[o]);return(0,a.useEffect)((function(){var e=n.current;if(e&&!o){var a=window.innerWidth<=600?window.innerWidth:.4*window.innerWidth,r=a,l=a,u=new v.CP7({antialias:!0,alpha:!0});u.setPixelRatio(window.devicePixelRatio),u.setSize(r,l),u.outputEncoding=v.knz,e.appendChild(u.domElement),c(u);var p=.005*l+4.8,f=new v.iKG(-p,p,p,-p,.01,5e4);f.position.copy(h),f.lookAt(m),s(f);var b=new v.Mig(13421772,1);d.add(b);var S=new E.z(f,u.domElement);S.autoRotate=!0,S.target=m,w(S),function(e,t,n){void 0===n&&(n={receiveShadow:!0,castShadow:!0});var a=n,r=a.receiveShadow,i=a.castShadow;return new Promise((function(n,a){(new g.E).load(t,(function(t){var a=t.scene;a.name="dog",a.position.y=0,a.position.x=0,a.receiveShadow=r,a.castShadow=i,e.add(a),a.traverse((function(e){e.isMesh&&(e.castShadow=i,e.receiveShadow=r)})),n(a)}),void 0,(function(e){a(e)}))}))}(d,"/dog.glb",{receiveShadow:!1,castShadow:!1}).then((function(){y(),i(!1),t&&t(!0)}));var k=null,x=0,y=function e(){if(k=requestAnimationFrame(e),(x=x<=100?x+1:x)<=100){var t=h,n=20*(a=x/120,-Math.sqrt(1-Math.pow(a-1,4))*Math.PI);f.position.y=10,f.position.x=t.x*Math.cos(n)+t.z*Math.sin(n),f.position.z=t.z*Math.cos(n)-t.x*Math.sin(n),f.lookAt(m)}else S.update();var a;u.render(d,f)};return function(){console.log("unmount"),cancelAnimationFrame(k),u.dispose()}}}),[]),(0,a.useEffect)((function(){return window.addEventListener("resize",f,!1),function(){window.removeEventListener("resize",f,!1)}}),[o,f]),a.createElement(S,{ref:n})},x=function(){var e=(0,a.useState)(!0),t=e[0],n=e[1],r=(0,a.useCallback)((function(){n(!1)}),[]);return a.createElement(a.Fragment,null,t&&a.createElement(f.Z,null),a.createElement("div",{style:{display:t?"none":"block"}},a.createElement(k,{onLoad:r})))},y=n(63588),M=n(93311),W=n(2091),_=n(72718),z=n(90203),C=n(32219),P=n(98966),R=n(93855),A="https://wuchuheng.com/query",N=new y.u({uri:A}),I="https"===A.substr(0,"https".length)?"wss"+A.substr(5):"http"+A.substr(0,4),F="undefined"!=typeof window?(0,M.V)((function(e){var t=e.query,n=(0,R.p$)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),new C.g((0,P.eI)({url:I})),N):N,L=new W.f({link:F,cache:new _.h});function Z(){var e=(0,i.Z)().siteConfig;return a.createElement(z.e,{client:L},a.createElement(r.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},a.createElement("main",null,a.createElement(c,null,a.createElement(x,null),a.createElement(d,null))),a.createElement(w,null)))}}}]);