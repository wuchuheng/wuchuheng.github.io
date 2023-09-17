"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[2559],{70224:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(22374);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66510:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(23405),r=t(54751),s=(t(22374),t(70224)),i=["components"],l={title:"10.ssh\u57fa\u7840\u7528\u6cd5",date:new Date("2017-12-08T00:00:00.000Z"),tags:["SSH"],categories:["Linux"]},o=void 0,p={unversionedId:"Linux/ssh\u57fa\u7840\u7528\u6cd5",id:"Linux/ssh\u57fa\u7840\u7528\u6cd5",title:"10.ssh\u57fa\u7840\u7528\u6cd5",description:"1\u4ec0\u4e48\u662fSSH?",source:"@site/docs/02.Linux/10.ssh\u57fa\u7840\u7528\u6cd5.md",sourceDirName:"02.Linux",slug:"/Linux/ssh\u57fa\u7840\u7528\u6cd5",permalink:"/docs/Linux/ssh\u57fa\u7840\u7528\u6cd5",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/02.Linux/10.ssh\u57fa\u7840\u7528\u6cd5.md",tags:[{label:"SSH",permalink:"/docs/tags/ssh"}],version:"current",sidebarPosition:10,frontMatter:{title:"10.ssh\u57fa\u7840\u7528\u6cd5",date:"2017-12-08T00:00:00.000Z",tags:["SSH"],categories:["Linux"]},sidebar:"tutorialSidebar",previous:{title:"09.\u7f51\u7edc\u9759\u6001ip\u914d\u7f6e",permalink:"/docs/Linux/\u7f51\u7edc\u9759\u6001ip\u914d\u7f6e"},next:{title:"11.Shell\u5e38\u7528\u5feb\u6377\u952e",permalink:"/docs/Linux/Shell\u5e38\u7528\u5feb\u6377\u952e"}},c={},u=[{value:"1\u4ec0\u4e48\u662fSSH?",id:"1\u4ec0\u4e48\u662fssh",level:2},{value:"2ssh-key\u751f\u6210\u5bc6\u94a5",id:"2ssh-key\u751f\u6210\u5bc6\u94a5",level:2},{value:"2.1 \u76f4\u63a5\u751f\u6210",id:"21-\u76f4\u63a5\u751f\u6210",level:3},{value:"2.2 \u914d\u7f6e\u9879",id:"22-\u914d\u7f6e\u9879",level:3},{value:"3\u4e0a\u4f20\u516c\u94a5",id:"3\u4e0a\u4f20\u516c\u94a5",level:2},{value:"4 <code>~/.ssh/config</code>\u7684\u4f7f\u7528",id:"4-sshconfig\u7684\u4f7f\u7528",level:2},{value:"4.1 \u522b\u540d\u4f7f\u7528",id:"41-\u522b\u540d\u4f7f\u7528",level:3},{value:"4.2 <code>ssh</code>\u4fdd\u6301\u8fde\u63a5",id:"42-ssh\u4fdd\u6301\u8fde\u63a5",level:3},{value:"4.3 <code>ssh</code>\u7ec8\u7aef\u50f5\u6b7b\u9000\u51fa\u5feb\u6377\u952e",id:"43-ssh\u7ec8\u7aef\u50f5\u6b7b\u9000\u51fa\u5feb\u6377\u952e",level:3},{value:"4.4 \u628assh\u4f1a\u8bdd\u5207\u6362\u56de\u672c\u5730",id:"44-\u628assh\u4f1a\u8bdd\u5207\u6362\u56de\u672c\u5730",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u4ec0\u4e48\u662fssh"},"1\u4ec0\u4e48\u662fSSH?"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SSH"),"\u5168\u540d\u662fSecure Shell\u3002\u662f\u4e2a\u57fa\u4e8e\u5b89\u5168",(0,s.kt)("inlineCode",{parentName:"p"},"socket"),"\u65b9\u5f0f\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"shell"),"\uff0c\u901a\u4fd7\u8bb2\u5c31\u662f\u5728\u4e0d\u5b89\u5168\u7684\u7f51\u7edc\u4e2d\u4e5f\u80fd\u5b89\u5168\u8fde\u63a5\u8fdc\u7a0b\u4e3b\u673a\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"shell"),"\u7684\u5de5\u5177\u3002\u5b83\u7684\n\u5b89\u5168\u5b9e\u73b0\u5b9e\u73b0\u539f\u7406\u91c7\u7528\u4e86\u975e\u5bf9\u79f0\u52a0\u5bc6\u65b9\u5f0f\uff0c\u5373\u672c\u5730\u79c1\u94a5\u52a0\u5bc6\u8fdc\u7a0b\u516c\u94a5\u89e3\u5bc6\u53cd\u4e4b\u8fdc\u7a0b\u516c\u94a5\u52a0\u5bc6\u672c\u5730\u79c1\u94a5\u89e3\u5bc6\uff0c\u4ece\u800c\u786e\u4fdd\u4e2d\u95f4\u62a5\u6587\u88ab\u76d1\u542c\u4e5f\u89e3\u5bc6\u4e0d\u4e86\uff0c\u4ece\u800c\u4fdd\u8bc1\u5176\u5b89\u5168\u6027\u3002"),(0,s.kt)("h2",{id:"2ssh-key\u751f\u6210\u5bc6\u94a5"},"2ssh-key\u751f\u6210\u5bc6\u94a5"),(0,s.kt)("p",null,"\u5982\u679c\u91c7\u7528\u5bc6\u94a5\u767b\u5f55\uff0c\u90a3\u4e48\u5c31\u8981\u5728\u672c\u5730\u751f\u6210\u8fd9\u4e48\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\u51fa\u6765\uff0c\u516c\u94a5\u7ed9\u8fdc\u7a0b\u4e3b\u673a\u4f7f\u7528\uff0c\u79c1\u94a5\u81ea\u5df1\u7528\u3002"),(0,s.kt)("h3",{id:"21-\u76f4\u63a5\u751f\u6210"},"2.1 \u76f4\u63a5\u751f\u6210"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh-key  \n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u8fd0\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u540e\uff0c\u4e00\u8def\u56de\u8f66\uff0c\u5c31\u4f1a\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u4e2d\u751f\u6210\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"id_rsa"),"\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"id_ras.pub"),"\u524d\u8005\u662f\u79c1\u94a5\u540e\u8005\u53cd\u4e4b\u3002"))),(0,s.kt)("h3",{id:"22-\u914d\u7f6e\u9879"},"2.2 \u914d\u7f6e\u9879"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ man ssh-keygen \n     ssh-keygen [-q] [-b bits] [-t dsa | ecdsa | ed25519 | rsa] [-N new_passphrase] [-C comment] [-f output_keyfile]\n     ssh-keygen -c [-P passphrase] [-C comment] [-f keyfile]\n     ...\n")),(0,s.kt)("p",null,"\u5728\u8fd9\u4e9b\u9009\u9879\u4e2d\uff0c \u5e38\u7528\u7684\u6709: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ ssh-keygen -C "your_email@domain.com" # <-- \u751f\u6210\u4e00\u4e2a\u6709\u6ce8\u91ca\u7684\u516c\u79c1\u94a5\n')),(0,s.kt)("p",null,"\u516c\u94a5\u6dfb\u52a0\u6ce8\u91ca",(0,s.kt)("inlineCode",{parentName:"p"},"your_email@domain.com"),"\u7684\u6ce8\u91ca"),(0,s.kt)("h2",{id:"3\u4e0a\u4f20\u516c\u94a5"},"3\u4e0a\u4f20\u516c\u94a5"),(0,s.kt)("p",null,"\u4e0a\u4f20\u516c\u94a5\u662f\u7528\u4e8e\u540e\u671f\u7684\u81ea\u52a8\u8fdc\u7a0b\u767b\u5f55\u7528\u7684\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh-copy-id username@host\n")),(0,s.kt)("p",null,"\u6839\u636e\u63d0\u793a\u8f93\u5165\u8fdc\u7a0b\u4e3b\u673a\u540d,\u8d26\u6237\u548c\u5bc6\u7801,\u7136\u540e\u672c\u5730\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"is_ras.pub"),"\u5c31\u4f1a\u4e0a\u4f20\u5230\u5bf9\u65b9\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),"\u4e2d\u3002\n\u8fd9\u6837\u8f93\u5165",(0,s.kt)("inlineCode",{parentName:"p"},"ssh username@host"),"\u5c31\u81ea\u52a8\u767b\u5f55\u5230\u8fdc\u7a0b\u4e3b\u673a\u4e0a\uff0c\u5176\u539f\u7406\u662f\u4ece\u672c\u5730\u7528\u79c1\u94a5\u52a0\u5bc6\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u8fdc\u7a0b\u4e3b\u673a\u5219\u7528\u5df2\u7ecf\u4e0a\u4f20\u8fc7\u53bb\u7684\u516c\u94a5\u89e3\u5bc6\uff0c\u5982\u679c\u80fd\u89e3\u5f00\u5219\u8fdc\u7a0b\u4e3b\u673a\u5141\u8bb8\u672c\u6b21\u767b\u5f55\uff0c\u53cc\u65b9\u57fa\u4e8e\u975e\u5bf9\u79f0\u52a0\u5bc6\u4ea4\u6362\u6570\u636e\u3002"),(0,s.kt)("h2",{id:"4-sshconfig\u7684\u4f7f\u7528"},"4 ",(0,s.kt)("inlineCode",{parentName:"h2"},"~/.ssh/config"),"\u7684\u4f7f\u7528"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"ssh"),"\u8fde\u63a5\u8fdc\u7a0b\u4e3b\u673a\u7684\u4f1a\u8bdd\u4e2d\u8d77\u5230\u4e86\u9ed8\u8ba4\u914d\u7f6e\u7684\u4f5c\u7528\u3002\u5229\u7528\u597d\u5b83\u80fd\u63d0\u9ad8\u4e9b itt"),(0,s.kt)("h3",{id:"41-\u522b\u540d\u4f7f\u7528"},"4.1 \u522b\u540d\u4f7f\u7528"),(0,s.kt)("p",null,"\u53e6\u540d\u80fd\u4e0d\u7528\u8bb0\u4f4f\u8d26\u53f7\u548c\u4e3b\u673a\u540d\uff0c\u901a\u8fc7\u522b\u540d\u4e3b\u80fd\u767b\u5f55\u4e86, \u5982\u628a\u4ee5\u4e0b\u914d\u7f6e\u52a0\u5165\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Host             alias\nUser             username\nHostname         ip\nIdentityFile    ~/.ssh/id_rsa\nPort            22\n")),(0,s.kt)("p",null,"\u7136\u540e:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh alias\n")),(0,s.kt)("p",null,"\u5c31\u53ef\u4ee5\u767b\u5f55\u4e86"),(0,s.kt)("h3",{id:"42-ssh\u4fdd\u6301\u8fde\u63a5"},"4.2 ",(0,s.kt)("inlineCode",{parentName:"h3"},"ssh"),"\u4fdd\u6301\u8fde\u63a5"),(0,s.kt)("p",null,"\u2003",(0,s.kt)("inlineCode",{parentName:"p"},"ssh"),"\u5982\u679c\u8fde\u63a5\u540e\u6ca1\u6709\u64cd\u4f5c\u5c31\u4f1a\u88ab\u9632\u706b\u5899\u65ad\u5f00,\u4e5f\u4e3a\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\u51fa\u73b0,\u4ee5\u6bcf\u9694\u4e00\u5b9a\u7684\u95f4\u9694\u65f6\u95f4\u5411\u8fdc\u7a0b\u7aef\u53d1\u9001\u7a7a\u6570\u636e\u5305\u6765\u4fdd\u6301\u8fde\u63a5.\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\u6dfb\u52a0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Host    *                #\u4efb\u4f55\u4e3b\u673a\nServerAliveInterval 60   #\u6bcf60\u79d2\u53d1\u9001\u7a7a\u6570\u636e\u5305\u7ed9\u8fdc\u7aef\nServerAliveCountMax 3    #\u8fdc\u7aef\u8fde\u7eed\u4e0d\u54cd\u5e943\u6b21,\u65ad\u5f00\n")),(0,s.kt)("p",null,"\u6216\u8005\u5728\u670d\u52a1\u7aef\u53e3",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\u7684",(0,s.kt)("inlineCode",{parentName:"p"}," ClientAliveInterval 300"),"\uff08\u9ed8\u8ba40),\u533a\u522b\u4e8e\u4ee5\u4e0a\u7684\u662f\uff0c\u8fd9\u662f\u4ece\u670d\u52a1\u5668\u53d1\u9001\u5fc3\u8df3\u3002\n\u66f4\u591a\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/panda2046/p/5933498.html"},"linux ssh_config\u548csshd_config\u914d\u7f6e\u6587\u4ef6\u5b66\u4e60")),(0,s.kt)("h3",{id:"43-ssh\u7ec8\u7aef\u50f5\u6b7b\u9000\u51fa\u5feb\u6377\u952e"},"4.3 ",(0,s.kt)("inlineCode",{parentName:"h3"},"ssh"),"\u7ec8\u7aef\u50f5\u6b7b\u9000\u51fa\u5feb\u6377\u952e"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ssh"),"\u8fde\u63a5\u4e0d\u52a0\u5fc3\u8df3\uff0c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u4f1a\u65ad\u5f00\u5e76\u50f5\u6b7b\u3002\u6309",(0,s.kt)("inlineCode",{parentName:"p"},"\u56de\u8f66~."),"\u6765\u9000\u51fa\u3002"),(0,s.kt)("h3",{id:"44-\u628assh\u4f1a\u8bdd\u5207\u6362\u56de\u672c\u5730"},"4.4 \u628assh\u4f1a\u8bdd\u5207\u6362\u56de\u672c\u5730"),(0,s.kt)("p",null,"\u5f53\u6211\u4eec\u8fde\u63a5\u4e86\u8fdc\u7a0b\u4e3b\u673a\u65f6\uff0c\u9700\u8981\u4e34\u65f6\u628a\u5207\u6362\u56de\u672c\u5730\u64cd\u4f5c\uff0c\u53c8\u4e0d\u60f3\u65ad\u5f00\u8fdc\u7a0b\u7684\u8fde\u63a5\u65f6\uff0c\u6309",(0,s.kt)("inlineCode",{parentName:"p"},"~ CTRl+z")," \u5c31\u53ef\u4ee5\u56de\u5230\u672c\u5730\u5e76\u8fdc\u7a0b\u7684\u8fde\u63a5\u4f5c\u4e3a\u540e\u53f0\u4efb\u52a1\u9690\u85cf\u8d77\u6765\u3002\n\u5f53\u9700\u8981\u518d\u6b21\u56de\u6765\u8fdc\u7a0b\u8fde\u63a5\u65f6\uff0c\u8f93\u5165",(0,s.kt)("inlineCode",{parentName:"p"},"fg"),"\u6216",(0,s.kt)("inlineCode",{parentName:"p"},"fg <\u4efb\u52a1>"),"\u7f16\u53f7\u91cd\u65b0\u5207\u6362\u5230\u8fde\u63a5\u4f1a\u8bdd\u3002"))}m.isMDXComponent=!0}}]);