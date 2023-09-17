"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[769],{34135:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(23405),r=n(22374),o=n(85986),l="layoutWrapper_U3sX";var i=function(t){var e=t.src,n=t.alt,i=t.align,d=t.size,m=e.match("https?://[^\\.]+\\.[^\\.]+"),u=(Object.assign({},n?{alt:n}:{}),r.createElement(o.Z,(0,a.Z)({url:m?e:"//qiniu.wuchuheng.com"+e,alt:n||""},null!=d?{width:d}:{width:30})));return"center"===i?r.createElement("div",{className:l},u):u}},85986:function(t,e,n){var a=n(22374),r=n(44171);e.Z=function(t){var e=t.alt,n=t.url,o=t.width,l=(0,a.useState)(!1),i=l[0],d=l[1];return a.createElement(a.Fragment,null,a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",justifyItems:"center"}},a.createElement("img",{src:n,onClick:function(){return d(!0)},alt:e,style:Object.assign({},null!=o?{width:o+"rem"}:{})}),i&&a.createElement(r.Z,{mainSrc:n,onCloseRequest:function(){return d(!1)}})))}},95417:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return g}});var a=n(23405),r=n(54751),o=(n(22374),n(70224)),l=n(34135),i=["components"],d={title:"01.mod\u7684\u4f7f\u7528",author:"\u5434\u695a\u8861",tags:["Golang"],categories:["Golang"],date:new Date("2021-03-26T19:59:00.000Z")},m=void 0,u={unversionedId:"Golang/mod\u7684\u4f7f\u7528",id:"Golang/mod\u7684\u4f7f\u7528",title:"01.mod\u7684\u4f7f\u7528",description:"&emsp;mod\u662fgo\u7684\u4e00\u4e2a\u4f9d\u8d56\u7ba1\u7406\u5de5\u3002\u4e4b\u524d1.11\u4e4b\u524d\u7684go\u7248\u672c\u662f\u6ca1\u6709\u8fd9\u4e2a\u6a21\u5757\u7ba1\u7406\uff0c\u7531\u4e8e\u6240\u4ee5\u4f9d\u8d56\u90fd\u653e\u5728$GOPATH/src\u4f1a\u9020\u6210\u9879\u76ee\u4e4b\u95f4\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u800c\u53ef\u80fd\u51fa\u9519\u3002",source:"@site/docs/18.Golang/01.mod\u7684\u4f7f\u7528.mdx",sourceDirName:"18.Golang",slug:"/Golang/mod\u7684\u4f7f\u7528",permalink:"/docs/Golang/mod\u7684\u4f7f\u7528",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/18.Golang/01.mod\u7684\u4f7f\u7528.mdx",tags:[{label:"Golang",permalink:"/docs/tags/golang"}],version:"current",sidebarPosition:1,frontMatter:{title:"01.mod\u7684\u4f7f\u7528",author:"\u5434\u695a\u8861",tags:["Golang"],categories:["Golang"],date:"2021-03-26T19:59:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"02.\u6570\u636e\u7ed3\u6784",permalink:"/docs/Python/\u6570\u636e\u7ed3\u6784"},next:{title:"02.\u6d4b\u8bd5",permalink:"/docs/Golang/\u6d4b\u8bd5"}},p={},g=[],s={toc:g};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{src:"/image/go-modules-1.png",align:"center",mdxType:"Img"}),(0,o.kt)("p",null,"\u2003",(0,o.kt)("inlineCode",{parentName:"p"},"mod"),"\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"go"),"\u7684\u4e00\u4e2a\u4f9d\u8d56\u7ba1\u7406\u5de5\u3002\u4e4b\u524d1.11\u4e4b\u524d\u7684go\u7248\u672c\u662f\u6ca1\u6709\u8fd9\u4e2a\u6a21\u5757\u7ba1\u7406\uff0c\u7531\u4e8e\u6240\u4ee5\u4f9d\u8d56\u90fd\u653e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/src"),"\u4f1a\u9020\u6210\u9879\u76ee\u4e4b\u95f4\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u800c\u53ef\u80fd\u51fa\u9519\u3002\n","\u2003","\u6709\u4f7f\u7528\u524d\u8981\u628a\u73af\u5883\u53d8\u91cf\u4fee\u6539\u4e0b,\u6765\u542f\u52a8\u6a21\u5757\u7ba1\u7406:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ export GO111MODULE=on # \u542f\u52a8\u540e\uff0c\u9879\u76ee\u7684\u4f9d\u8d56\u662f\u6839\u636ego.mod\u7684\u914d\u7f6e\u6765\u52a0\u8f7d\u7684\u3002\u4e5f\u53ef\u4ee5\u8131\u79bb$GOPATH\u76ee\u5f55\u624d\u80fd\u521b\u5efa\u9879\u76ee\u7684\u60c5\u51b5\u3002\n  $ export GO111MODULE=off # \u53cd\u4e4b\u5173\u95ed\n  $ export GO111MODULE=auto # \u8fd9\u4e2a\u662f\u81ea\u52a8\u8bc6\u522b\uff0c\u5982\u679c\u53c8\u60f3\u7528\u6a21\u5757\u7ba1\u7406\u53c8\u60f3\u8ba9\u4e4b\u524d\u4e0d\u662f\u6a21\u5757\u7ba1\u7406\u7684\u5e94\u7528\u4e5f\u80fd\u8dd1\u8d77\u6765\uff0c\u53ef\u4ee5\u5148\u7528\u8fd9\u4e2a\n")),(0,o.kt)("p",null,"\u9009\u62e9\u597d\u81ea\u5df1\u9700\u8981\u7684\u6a21\u5f0f\u540e\uff0c\u628a\u5b83\u5199\u8fdb",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"zsh"),"\u7684\u914d\u7f6e\u4e2d\uff0c\u8ba9\u5b83\u9ed8\u8ba4\u751f\u6548\uff0c \u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n  $ echo "export GO111MODULE=<\u4f60\u7684\u9009\u62e9>" >> ~/.zshrc #\u5199\u5165zsh\u914d\u7f6e\n  $ echo "export GO111MODULE=<\u4f60\u7684\u9009\u62e9>" >> ~/.bashrc #\u5199\u5165bash\u914d\u7f6e\n')),(0,o.kt)("p",null,"  \u800c\u8fd9\u4e9b\u4f9d\u8d56\u4f1a\u4fdd\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/pkg/mod"),"\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod init"),(0,o.kt)("td",{parentName:"tr",align:null},"\u751f\u6210go.mod\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod download"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7dgo.mod\u58f0\u660e\u7684\u4f9d\u8d56")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod tidy"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6574\u7406\u4e0b\u4f9d\u8d56\uff0c \u5982\u5220\u9664\u6ca1\u7528\u7684\u4f9d\u8d56")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod  graph"),(0,o.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u4f9d\u8d56\u7ed3\u6784")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod edit"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91go.mod\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod vendor"),(0,o.kt)("td",{parentName:"tr",align:null},"\u628a\u4f9d\u8d56\u5bfc\u5165\u5230\u9879\u76ee\u7684vendor\u76ee\u5f55\u4e2d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod verify"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6821\u9a8c\u6a21\u5757\u662f\u5426\u88ab\u7be1\u6539")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go mod why"),(0,o.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56\u6a21\u5757")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go clean -modcache"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6e05\u9664\u7f13\u5b58")))))}c.isMDXComponent=!0}}]);