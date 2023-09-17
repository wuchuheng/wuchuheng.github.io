"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[2322],{70224:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return N}});var r=n(22374);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),N=i,k=c["".concat(m,".").concat(N)]||c[N]||d[N]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(23405),i=n(54751),a=(n(22374),n(70224)),l=["components"],o={title:"03Nerdtree\u5e38\u7528\u5feb\u6377\u952e",date:new Date("2018-05-02T00:00:00.000Z"),tags:["Vim"],categories:["Vim"]},m=void 0,p={unversionedId:"Vim/Nerdtree\u5e38\u7528\u5feb\u6377\u952e",id:"Vim/Nerdtree\u5e38\u7528\u5feb\u6377\u952e",title:"03Nerdtree\u5e38\u7528\u5feb\u6377\u952e",description:"Nerdtree\u662fvim\u76ee\u5f55\u7ba1\u7406\u5de5\u5177",source:"@site/docs/05.Vim/03.Nerdtree\u5e38\u7528\u5feb\u6377\u952e.md",sourceDirName:"05.Vim",slug:"/Vim/Nerdtree\u5e38\u7528\u5feb\u6377\u952e",permalink:"/docs/Vim/Nerdtree\u5e38\u7528\u5feb\u6377\u952e",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/05.Vim/03.Nerdtree\u5e38\u7528\u5feb\u6377\u952e.md",tags:[{label:"Vim",permalink:"/docs/tags/vim"}],version:"current",sidebarPosition:3,frontMatter:{title:"03Nerdtree\u5e38\u7528\u5feb\u6377\u952e",date:"2018-05-02T00:00:00.000Z",tags:["Vim"],categories:["Vim"]},sidebar:"tutorialSidebar",previous:{title:"02\u5e38\u7528\u914d\u7f6e",permalink:"/docs/Vim/\u5e38\u7528\u914d\u7f6e"},next:{title:"04\u6b63\u5219\u7684\u4f7f\u7528",permalink:"/docs/Vim/\u6b63\u5219\u7684\u4f7f\u7528"}},u={},d=[{value:"\u6253\u5f00\u6587\u4ef6\u6216\u76ee\u5f55",id:"\u6253\u5f00\u6587\u4ef6\u6216\u76ee\u5f55",level:4},{value:"Nerdtree\u79fb\u52a8\u5149\u6807\u5feb\u6377\u952e",id:"nerdtree\u79fb\u52a8\u5149\u6807\u5feb\u6377\u952e",level:4},{value:"\u5176\u5b83\u64cd\u4f5c",id:"\u5176\u5b83\u64cd\u4f5c",level:4},{value:"Nerdtree\u914d\u7f6e",id:"nerdtree\u914d\u7f6e",level:4}],c={toc:d};function N(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"Nerdtree"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"vim"),"\u76ee\u5f55\u7ba1\u7406\u5de5\u5177"))),(0,a.kt)("h4",{id:"\u6253\u5f00\u6587\u4ef6\u6216\u76ee\u5f55"},"\u6253\u5f00\u6587\u4ef6\u6216\u76ee\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"o")," : \u6253\u5f00\u4e00\u4e2a\u76ee\u5f55\u6216\u4e00\u4e2a\u6587\u4ef6\u5e76fouce\u5728\u8fd9\u4e2a\u6587\u4ef6\u3002\u5df2\u5728buffer\u4e2d\u5c31fouce\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," go")," : fouce\u5728nerdtree\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u3002\u5982\uff0c\u591a\u4e2a\u7a97\u53e3\uff0c\u6587\u4ef6\u6253\u5f00\u5728\u4e0a-\u4e2afouce\u7684\u7a97\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," t")," : \u5728\u65b0\u7684Tab\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u5e76fouce\u5728\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," T")," :\u5728\u65b0\u7684Tab\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u3002fouce\u7559\u5728Nerdtree\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," i")," :\u6c34\u5e73\u5206\u5272\u6253\u5f00\u6587\u4ef6\u3002\u5e76fouce\u5230\u5f53\u524d\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," gi")," :\u6c34\u5e73\u5206\u5272\u6253\u5f00\u6587\u4ef6\u3002fouce\u5728Nerdtree\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," s")," :\u5782\u76f4\u5206\u5272\u6253\u5f00\u6587\u4ef6\u3002\u540c\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," gs")," :\u540c\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," O")," :\u9012\u5f52\u663e\u793a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002")),(0,a.kt)("h4",{id:"nerdtree\u79fb\u52a8\u5149\u6807\u5feb\u6377\u952e"},"Nerdtree\u79fb\u52a8\u5149\u6807\u5feb\u6377\u952e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"P")," :fouce\u5230\u5f53\u524dNerdtree\u7684\u6839\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"p")," :fouce\u5230\u5f53\u524d\u76ee\u5f55\u7684\u7236\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"K")," :fouce\u5230\u540c\u7ea7\u7b2c\u4e00\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"J")," :\u540c\u4e0a\u76f8\u53cd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C-j")," :fouce\u5230\u4e0b\u4e00\u4e2a\u540c\u7ea7\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C-k")," :fouce\u5230\u4e0a\u4e00\u4e2a\u540c\u7ea7\u8282\u70b9\u3002")),(0,a.kt)("h4",{id:"\u5176\u5b83\u64cd\u4f5c"},"\u5176\u5b83\u64cd\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"r")," :\u5237\u65b0\u5149\u6807\u6240\u5728\u7684\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R")," :\u5237\u65b0\u6839\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I")," :\u663e\u793a\u6216\u4e0d\u663e\u793a\u9690\u85cf\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A")," :\u5168\u5c4f\u663e\u793a\u6216\u4e0d\u663e\u793aNerdtree\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"u")," :\u5c06root\u6839\u76ee\u5f55\u7684\u4e0a\u4e00\u7ea7\u4f5c\u4e3a\u6839\u76ee\u5f55\u3002\u5e76\u5408\u5e76\u5b50\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"U")," :\u5c06root\u6839\u76ee\u5f55\u7684\u4e0a\u4e00\u7ea7\u4f5c\u4e3a\u6839\u76ee\u5f55\u3002\u5e76\u4e0d\u5408\u5e76\u5b50\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C")," :\u5c06\u5f53\u524d\u76ee\u5f55\u4f5c\u4e3a\u6839"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A")," :\u5168\u5c4fNerdtree\u76ee\u5f55\u6216\u5173\u95ed\u5168\u5c4fNerdtree\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X")," :\u9012\u5f52\u5408\u62e2\u5b50\u76ee\u5f55\u4e3a\u4e00\u7ea7\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," :\u5f53\u524d\u76ee\u5f55\u5408\u62e2\u4e3a\u7236\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")," :\u6587\u4ef6\u64cd\u4f5c\u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C-n")," :fouce\u5230Nerdtree\u76ee\u5f55\u5e76\u9012\u5f52\u5408\u5e76\u5b50\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"F")," :\u662f\u5426\u663e\u793a\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"q")," :\u5173\u95edNerdtree\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gt")," :\u4e0b\u4e00\u4e2a\u6807\u7b7e\u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gT")," :\u540c\u4e0a\u76f8\u53cd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"?")," :\u67e5\u770b\u5e2e\u52a9\u6587\u6863\u3002")),(0,a.kt)("h4",{id:"nerdtree\u914d\u7f6e"},"Nerdtree\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vim"},'"Plugin \'scrooloose/nerdtree\' //\u5b89\u88c5nerdtree\u63d2\u4ef6\n let NERDTreeShowLineNumbers=1 " \u663e\u793a\u884c\u53f7\n let NERDTreeAutoCenter=1\n "\u5728 vim \u542f\u52a8\u7684\u65f6\u5019\u9ed8\u8ba4\u5f00\u542f NERDTree\uff08autocmd \u53ef\u4ee5\u7f29\u5199\u4e3a au\uff09\n autocmd VimEnter * NERDTree\n " \u6309\u4e0b F2 \u8c03\u51fa/\u9690\u85cf NERDTree\n map  <F2> :NERDTreeToggle<CR>\n map <C-n> :NERDTree<CR>\n " \u5c06 NERDTree \u7684\u7a97\u53e3\u8bbe\u7f6e\u5728 vim \u7a97\u53e3\u7684\u53f3\u4fa7\uff08\u9ed8\u8ba4\u4e3a\u5de6\u4fa7\uff09\n "let NERDTreeWinPos="left"\n " \u5f53\u6253\u5f00 NERDTree \u7a97\u53e3\u65f6\uff0c\u81ea\u52a8\u663e\u793a Bookmarks\n let NERDTreeShowBookmarks=1\n let g:NERDTreeShowHidden = 1             "\u663e\u793a\u9690\u85cf\u6587\u4ef6\n "\u9ed8\u8ba4\u6253\u5f00\u5b9a\u4f4d\u81f3\u7f16\u8f91\u533a\nautocmd VimEnter * NERDTree\nwincmd w\nautocmd VimEnter * wincmd w\n" \u5149\u6807\u5230\u4e0a\u65b9\u7a97\u53e3,\u9700\u8981<c-w><c-w>k,\u975e\u5e38\u9ebb\u70e6,\u73b0\u5728\u91cd\u6620\u5c04\u4e3a<c-k>\n nnoremap <C-h> <C-w>h\n nnoremap <C-j> <C-w>j\n nnoremap <C-k> <C-w>k\n nnoremap <C-l> <C-w>l\n')))}N.isMDXComponent=!0}}]);