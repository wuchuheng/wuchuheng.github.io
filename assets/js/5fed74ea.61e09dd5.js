"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8838],{70224:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(22374);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5698:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(23405),r=n(54751),i=(n(22374),n(70224)),l=["components"],o={title:"01.JWT\u9274\u6743",tags:["JWT","Auth"],categories:["Auth"]},p=void 0,d={unversionedId:"\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/JWT\u9274\u6743",id:"\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/JWT\u9274\u6743",title:"01.JWT\u9274\u6743",description:"1 \u4ec0\u4e48\u662fJWT",source:"@site/docs/15.\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/01.JWT\u9274\u6743.md",sourceDirName:"15.\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6",slug:"/\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/JWT\u9274\u6743",permalink:"/docs/\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/JWT\u9274\u6743",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/15.\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/01.JWT\u9274\u6743.md",tags:[{label:"JWT",permalink:"/docs/tags/jwt"},{label:"Auth",permalink:"/docs/tags/auth"}],version:"current",sidebarPosition:1,frontMatter:{title:"01.JWT\u9274\u6743",tags:["JWT","Auth"],categories:["Auth"]},sidebar:"tutorialSidebar",previous:{title:"\u90ae\u4ef6\u670d\u52a1\u90e8\u7f72",permalink:"/docs/\u5e94\u7528\u90e8\u7f72/\u90ae\u4ef6\u670d\u52a1\u90e8\u7f72"},next:{title:"02.\u5c0f\u7a0b\u5e8f\u7684EAS\u89e3\u5bc6",permalink:"/docs/\u9274\u6743\u6216\u52a0\u5bc6\u89e3\u5bc6/\u5c0f\u7a0b\u5e8f\u7684EAS\u89e3\u5bc6"}},u={},m=[{value:"1 \u4ec0\u4e48\u662fJWT",id:"1-\u4ec0\u4e48\u662fjwt",level:2},{value:"2 JWT\u7684\u7ec4\u6210(\u660e\u6587)",id:"2-jwt\u7684\u7ec4\u6210\u660e\u6587",level:2},{value:"2 \u4ee5\u4e0b\u662f\u91c7\u7528<code>HMAC</code>\u7b97\u6cd5\u7684<code>PHP JWT</code>\u5c01\u88c5\u7c7b",id:"2-\u4ee5\u4e0b\u662f\u91c7\u7528hmac\u7b97\u6cd5\u7684php-jwt\u5c01\u88c5\u7c7b",level:2}],s={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u4ec0\u4e48\u662fjwt"},"1 \u4ec0\u4e48\u662fJWT"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"JWT"),"\u662f\u4e00\u79cd\u7528\u4e8e\u8bbe\u5907\u95f4\u6570\u636e\u4f20\u8f93\u7684\u5f00\u653e\u6027\u6807\u51c6\u7684\u7b80\u6d01\u72ec\u7acb\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),"\u5bf9\u8c61\u7684\u8bc1\u4e66\u3002\n\u7531\u4e8e\u4f7f\u7528\u6570\u5b57\u7b7e\u540d,\u6240\u4ee5\u8377\u8f7d\u7684\u660e\u6587\u5185\u5bb9\u662f\u4e0d\u80fd\u88ab\u4e32\u6539\u7684, \u4e00\u4f46\u4e32\u6539\u5c06\u5bfc\u81f4\u7531\u5bc6\u94a5\u52a0\u5bc6\u88ab\u7a9c\u6539\u660e\u6587\u65f6\u751f\u6210\u7684\u6570\u5b57\u7b7e\u540d\u5bf9\u4e0d\u4e0a\u9644\u52a0\u5728\u51ed\u8bc1\u4e0a\u7684\u7b7e\u540d\u800c\u65e0\u6548\uff0c\n\u6240\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"JWT"),"\u662f\u4e00\u79cd\u660e\u6587\u52a0\u7b7e\u540d\u7684\u7684\u51ed\u8bc1, \u660e\u6587\u5185\u5bb9\u4f7f\u5185\u5bb9\u80fd\u88ab\u4eba\u67e5\u770b\uff0c\u800c\u7b7e\u540d\u4f7f\u5185\u5bb9\u4e0d\u80fd\u88ab\u7a9c\u6539"))),(0,i.kt)("h2",{id:"2-jwt\u7684\u7ec4\u6210\u660e\u6587"},"2 JWT\u7684\u7ec4\u6210(\u660e\u6587)"),(0,i.kt)("p",null,"\u2003","3\u90e8\u5206\u7ec4\u6210\uff0c\u5206\u522b",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),",",(0,i.kt)("inlineCode",{parentName:"p"},"Payload"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"signature"),"\u4e4b\u95f4\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"."),"\u5206\u9694\u5e76",(0,i.kt)("inlineCode",{parentName:"p"},"base64"),"\u7f16\u7801\u540e\u53cd\u7ed9\u7528\u6237\u3002\u7f16\u7801\u524d\u683c\u5f0f\u5927\u81f4",(0,i.kt)("inlineCode",{parentName:"p"},'\'{"type":"JWT",...}.{"sub":"\u4e3b\u9898",...}.ABCDEFfsa!...\''),"\u3002\n.",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),"\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "typ": "JWT",\n    "alg": "HS256",\n    "jti": "aakfkd11"\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u6709"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"typ"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u7c7b\u578b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alt"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7b97\u6cd5\u7c7b\u578b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jti"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"JWT\u7684\u7f16\u53f7\u4e5f\u53ef\u653e\u5165",(0,i.kt)("inlineCode",{parentName:"td"},"payload"))))),(0,i.kt)("p",null,".",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),"\u53c2\u6570(\u660e\u6587)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "iss": "http:\\/\\/a784admin.mxnt.net\\/api\\/authorizations",\n    "iat": 1569330469,\n    "exp": 1569330529,\n    "nbf": 1569330469,\n    "jti": "fASGUWtJfSgBOXLq",\n    "sub": 33,\n    "prv": "cb78b5e1ffce0f831d0231df2c8bd7c806477762"\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u6709"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iss"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010issuer\u3011\u53d1\u5e03\u8005\u7684url\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sub"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010subject\u3011\u8be5JWT\u6240\u9762\u5411\u7684\u7528\u6237\uff0c\u7528\u4e8e\u5904\u7406\u7279\u5b9a\u5e94\u7528\uff0c\u4e0d\u662f\u5e38\u7528\u7684\u5b57\u6bb5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aud"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010audience\u3011\u63a5\u53d7\u8005\u7684url\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"exp"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010expiration\u3011 \u8be5jwt\u9500\u6bc1\u7684\u65f6\u95f4\uff1bunix\u65f6\u95f4\u6233")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nbf"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010not before\u3011 \u8be5jwt\u7684\u4f7f\u7528\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u8be5\u65f6\u95f4\uff1bunix\u65f6\u95f4\u6233")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iat"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010issued at\u3011 \u8be5jwt\u7684\u53d1\u5e03\u65f6\u95f4\uff1bunix \u65f6\u95f4\u6233")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jti"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u3010JWT ID\u3011 \u8be5jwt\u7684\u552f\u4e00ID\u7f16\u53f7")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"payload")," \u7684\u5185\u5bb9\u6839\u636e\u60c5\u51b5\u8c03\u6574\uff0c \u4ee5\u4e0a\u662f\u5b98\u65b9\u7684\u63a8\u8350\u53c2\u6570."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"signture"),"\u662f\u7528\u4e8e\u9a8c\u8bc1",(0,i.kt)("inlineCode",{parentName:"p"},"token"),"\u662f\u5426\u5408\u6cd5\uff0c\u6ca1\u6709\u88ab\u7be1\u6539\u7684\u9a8c\u8bc1\u4f9d\u636e\u7684\u5b57\u4e32\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"JWT"),"\u7684\u751f\u6210\u7b97\u6cd5\u67093\u79cd\uff1a\n.\u5bf9\u79f0\u52a0\u5bc6 HMAC \u3010\u54c8\u5e0c\u6d88\u606f\u9a8c\u8bc1\u7801\u3011\nHS256/HS384/HS512\n. \u975e\u5bf9\u79f0\u52a0\u5bc6 RSASSA\u3010RSA\u7b7e\u540d\u7b97\u6cd5\u3011 \u548c ECDSA\u3010\u692d\u5706\u66f2\u7ebf\u6570\u636e\u7b7e\u540d\u7b97\u6cd5\u3011\nRS256/RS384/RS512\nES256/ES384/ES512"))),(0,i.kt)("h2",{id:"2-\u4ee5\u4e0b\u662f\u91c7\u7528hmac\u7b97\u6cd5\u7684php-jwt\u5c01\u88c5\u7c7b"},"2 \u4ee5\u4e0b\u662f\u91c7\u7528",(0,i.kt)("inlineCode",{parentName:"h2"},"HMAC"),"\u7b97\u6cd5\u7684",(0,i.kt)("inlineCode",{parentName:"h2"},"PHP JWT"),"\u5c01\u88c5\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  <?php\n\nnamespace App;\n\nclass Jwt\n{\n    private $alg = 'sha256';\n\n    private $secret = \"123456\";\n\n    /**\n     * alg\u5c5e\u6027\u8868\u793a\u7b7e\u540d\u7684\u7b97\u6cd5\uff08algorithm\uff09\uff0c\u9ed8\u8ba4\u662f HMAC SHA256\uff08\u5199\u6210 HS256\uff09\uff1btyp\u5c5e\u6027\u8868\u793a\u8fd9\u4e2a\u4ee4\u724c\uff08token\uff09\u7684\u7c7b\u578b\uff08type\uff09\uff0cJWT \u4ee4\u724c\u7edf\u4e00\u5199\u4e3aJWT\n     */\n    public function getHeader()\n    {\n        $header = [\n            'alg' => $this->alg,\n            'typ' => 'JWT'\n        ];\n\n        return $this->base64urlEncode(json_encode($header, JSON_UNESCAPED_UNICODE));\n    }\n\n    /**\n     * Payload \u90e8\u5206\u4e5f\u662f\u4e00\u4e2a JSON \u5bf9\u8c61\uff0c\u7528\u6765\u5b58\u653e\u5b9e\u9645\u9700\u8981\u4f20\u9012\u7684\u6570\u636e\u3002JWT \u89c4\u5b9a\u4e867\u4e2a\u5b98\u65b9\u5b57\u6bb5\uff0c\u4f9b\u9009\u7528\uff0c\u8fd9\u91cc\u53ef\u4ee5\u5b58\u653e\u79c1\u6709\u4fe1\u606f\uff0c\u6bd4\u5982uid\n     * @param $uid int \u7528\u6237id\n     * @return mixed\n     */\n    public function getPayload($uid)\n    {\n        $payload = [\n            'iss' => 'admin', //\u7b7e\u53d1\u4eba\n            'exp' => time() + 600, //\u8fc7\u671f\u65f6\u95f4\n            'sub' => 'test', //\u4e3b\u9898\n            'aud' => 'every', //\u53d7\u4f17\n            'nbf' => time(), //\u751f\u6548\u65f6\u95f4\n            'iat' => time(), //\u7b7e\u53d1\u65f6\u95f4\n            'jti' => 10001, //\u7f16\u53f7\n            'uid' => $uid, //\u79c1\u6709\u4fe1\u606f\uff0cuid\n        ];\n\n        return $this->base64urlEncode(json_encode($payload, JSON_UNESCAPED_UNICODE));\n    }\n\n    /**\n     * \u751f\u6210token,\u5047\u8bbe\u73b0\u5728payload\u91cc\u9762\u53ea\u5b58\u4e00\u4e2auid\n     * @param $uid int\n     * @return string\n     */\n    public function genToken($uid)\n    {\n        $header  = $this->getHeader();\n        $payload = $this->getPayload($uid);\n\n        $raw   = $header . '.' . $payload;\n        $token = $raw . '.' . hash_hmac($this->alg, $raw, $this->secret);\n\n        return $token;\n    }\n\n\n    /**\n     * \u89e3\u5bc6\u6821\u9a8ctoken,\u6210\u529f\u7684\u8bdd\u8fd4\u56deuid\n     * @param $token\n     * @return mixed\n     */\n    public function verifyToken($token)\n    {\n        if (!$token) {\n            return false;\n        }\n        $tokenArr = explode('.', $token);\n        if (count($tokenArr) != 3) {\n            return false;\n        }\n        $header    = $tokenArr[0];\n        $payload   = $tokenArr[1];\n        $signature = $tokenArr[2];\n\n        $payloadArr = json_decode($this->base64urlDecode($payload), true);\n\n        if (!$payloadArr) {\n            return false;\n        }\n\n        //\u5df2\u8fc7\u671f\n        if (isset($payloadArr['exp']) && $payloadArr['exp'] < time()) {\n            return false;\n        }\n\n        $expected = hash_hmac($this->alg, $header . '.' . $payload, $this->secret);\n\n        //\u7b7e\u540d\u4e0d\u5bf9\n        if ($expected !== $signature) {\n            return false;\n        }\n\n        return $payloadArr['uid'];\n    }\n\n    /**\n     * \u5b89\u5168\u7684base64 url\u7f16\u7801\n     * @param $data\n     * @return string\n     */\n    private function base64urlEncode($data)\n    {\n        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');\n    }\n\n    /**\n     * \u5b89\u5168\u7684base64 url\u89e3\u7801\n     * @param $data\n     * @return bool|string\n     */\n    private function base64urlDecode($data)\n    {\n        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT))\n    }\n}\n\n")))}c.isMDXComponent=!0}}]);