(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9620],{67211:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var o=n(23405),i=n(54751),a=(n(22374),n(70224)),l=n(91297),r=["components"],c={title:"02.e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",tags:["TCP/IP"],categoris:["TCP/IP"],date:new Date("2020-01-31T00:00:00.000Z")},s=void 0,m={unversionedId:"\u7f51\u7edc\u7f16\u7a0b/e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",id:"\u7f51\u7edc\u7f16\u7a0b/e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",title:"02.e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",description:"1 \u4ec0\u4e48\u662f\u90ae\u4ef6\uff1f",source:"@site/docs/10.\u7f51\u7edc\u7f16\u7a0b/02.e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0.md",sourceDirName:"10.\u7f51\u7edc\u7f16\u7a0b",slug:"/\u7f51\u7edc\u7f16\u7a0b/e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",permalink:"/docs/\u7f51\u7edc\u7f16\u7a0b/e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/10.\u7f51\u7edc\u7f16\u7a0b/02.e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0.md",tags:[{label:"TCP/IP",permalink:"/docs/tags/tcp-ip"}],version:"current",sidebarPosition:2,frontMatter:{title:"02.e-mail\u521d\u8bc6\u5b66\u4e60\u7b14\u8bb0",tags:["TCP/IP"],categoris:["TCP/IP"],date:"2020-01-31T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"01.iso\u7f51\u7edc\u4e03\u5c42\u6a21\u578b\u4ee5\u53ca\u5b9e\u73b0",permalink:"/docs/\u7f51\u7edc\u7f16\u7a0b/iso\u7f51\u7edc\u4e03\u5c42\u6a21\u578b\u4ee5\u53ca\u5b9e\u73b0"},next:{title:"03.wireshark\u7684\u57fa\u672c\u4f7f\u7528\u548cFQA\u8bb0\u5f55",permalink:"/docs/\u7f51\u7edc\u7f16\u7a0b/wireshark\u7684\u57fa\u672c\u4f7f\u7528\u548cFQA\u8bb0\u5f55"}},d={},u=[{value:"1 \u4ec0\u4e48\u662f\u90ae\u4ef6\uff1f",id:"1-\u4ec0\u4e48\u662f\u90ae\u4ef6",level:2},{value:"2 \u4ec0\u4e48\u662f\u90ae\u4ef6\u7684\u683c\u5f0f\uff1f",id:"2-\u4ec0\u4e48\u662f\u90ae\u4ef6\u7684\u683c\u5f0f",level:2},{value:"3 \u7535\u5b50\u90ae\u4ef6\u662f\u5982\u4f55\u5b9e\u73b0\u6536\u53d1\u7684\uff1f",id:"3-\u7535\u5b50\u90ae\u4ef6\u662f\u5982\u4f55\u5b9e\u73b0\u6536\u53d1\u7684",level:2},{value:"3.1 \u90ae\u4ef6\u7684\u53d1\u9001",id:"31-\u90ae\u4ef6\u7684\u53d1\u9001",level:3},{value:"3.2 \u4f7f\u7528<code>telnet</code>\u8fde\u63a5<code>smtp</code>\u670d\u52a1\u5668\u53d1\u9001\u90ae\u4ef6",id:"32-\u4f7f\u7528telnet\u8fde\u63a5smtp\u670d\u52a1\u5668\u53d1\u9001\u90ae\u4ef6",level:3},{value:"3.3 \u90ae\u4ef6\u7684\u63a5\u6536",id:"33-\u90ae\u4ef6\u7684\u63a5\u6536",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u90ae\u4ef6"},"1 \u4ec0\u4e48\u662f\u90ae\u4ef6\uff1f"),(0,a.kt)("p",null,"\u2003","\u4e0d\u8ba8\u8bba\u90ae\u4ef6\u4ee5\u5916\u7684\u4efb\u4f55\u5b9a\u4e49\uff0c\u4ece\u90ae\u4ef6\u672c\u8eab\u6765\u770b\u53ea\u5e722\u4ef6\u4e8b\uff1a\u6536\u4fe1\u548c\u53d1\u4fe1\uff0c\u7ec6\u70b9\u8bf4\u662f\u627e\u5230\u81ea\u5df1\u7684\u90ae\u7bb1\u6536\u4fe1\u548c\u6ce8\u660e\u522b\u4eba\u7684\u4fe1\u7bb1\u5730\u5740\u53d1\u4fe1\u3002\n\u800c\u7535\u5b50\u90ae\u4ef6\u4e0d\u8fc7\u662f\u628a\u73b0\u5b9e\u7684\u5730\u5740\u6620\u5c04\u4e3a:",(0,a.kt)("inlineCode",{parentName:"p"},"<usre>@<domain>"),"\u7684\u683c\u5f0f\uff0c\u7136\u540e\u7167\u5e38\u6536\u53d1\u4fe1\u3002\u6240\u4ee5\u7535\u5b50\u90ae\u4ef6\u65e0\u8bba\u591a\u590d\u6742\uff0c\u6700\u7ec8\u53ea\u662f\u8981\u5b9e\u73b0\u201c\u6536\u4fe1\u201d\u548c\u201c\u53d1\u4fe1\u201d"),(0,a.kt)("h2",{id:"2-\u4ec0\u4e48\u662f\u90ae\u4ef6\u7684\u683c\u5f0f"},"2 \u4ec0\u4e48\u662f\u90ae\u4ef6\u7684\u683c\u5f0f\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   from: <username>@<domain>\n   to: <username>@<domain>\n   subject: <the email title>\n   \n   <the email content>\n   .\n")),(0,a.kt)("p",null,"\u2003",' \u4ee5\u4e0a\u662f\u90ae\u4ef6\u7684\u6700\u7ec8\u7684\u6587\u672c\u4f20\u8f93\u5f62\u5f0f\uff0c\u5206\u522b\u662f\u53d1\u4ef6\u4eba\u5730\u5740\u6536\u4ef6\u3001\u6536\u4ef6\u4eba\u5730\u5740\u3001\u6807\u9898\u3001\u7a7a\u884c\u3001\u90ae\u4ef6\u6b63\u6587\u548c"."\u3002\u5176\u4e2d\u7a7a\u884c\u628a\u90ae\u4ef6\u53c8\u5212\u5206\u4e3a\u90ae\u4ef6\u5934\uff08\u7a7a\u884c\u4ee5\u4e0a\uff09\u548c\u90ae\u4ef6\u6b63\u6587\uff08\u7a7a\u884c\u4e0b\uff09\uff0c\u53c8\u7528"."\u4ee3\u8868\u90ae\u4ef6\u7684\u7ed3\u675f\u3002'),(0,a.kt)("h2",{id:"3-\u7535\u5b50\u90ae\u4ef6\u662f\u5982\u4f55\u5b9e\u73b0\u6536\u53d1\u7684"},"3 \u7535\u5b50\u90ae\u4ef6\u662f\u5982\u4f55\u5b9e\u73b0\u6536\u53d1\u7684\uff1f"),(0,a.kt)("h3",{id:"31-\u90ae\u4ef6\u7684\u53d1\u9001"},"3.1 \u90ae\u4ef6\u7684\u53d1\u9001"),(0,a.kt)("p",null,"\u2003","\u90ae\u4ef6\u7684\u53d1\u9001\u662f\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"smtp"),"(Simple Mail Transfer Protocol)\u6765\u4f20\u8f93\u7684\uff0c\u9996\u5148\u90ae\u4ef6\u670d\u52a1\u5668\u4f1a\u8ddf\u90ae\u4ef6\u5ba2\u6237\u7aef\u5efa\u7acb\u8fde\u63a5\u5e76\u8fdb\u884c\u767b\u5f55\u9a8c\u8bc1\u901a\u8fc7\u540e\u628a\u90ae\u4ef6\u53d1\u9001\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u518d\u8bfb\u53d6\u90ae\u4ef6\u7684\u5934\u7684\u6536\u4ef6\u5730\u5740\u7684\u57df\u540d\u540e\uff0c\u518d\u6839\u636e\u8fd9\u4e2a\u57df\u540d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"smtp"),"\u628a\u90ae\u4ef6\u53d1\u9001\u5230\u8fd9\u57df\u540d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"MX"),"\u89e3\u6790\u6307\u5411",(0,a.kt)("inlineCode",{parentName:"p"},"IP"),"\u4e3b\u673a\u4e0a\uff0c\u5982\u679c\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"MX"),"\u8bb0\u5f55\u5219\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u8bb0\u5f55\u7684\u6307\u5411\u3002"),(0,a.kt)(l.Mermaid,{config:{},chart:"sequenceDiagram\nTitle: \u90ae\u4ef6\u7684\u53d1\u9001\u65f6\u5e8f\u56fe\n    clientA&#64host1.com\u5ba2\u6237\u7aef ->> host1.com\u4e3b\u673a :sent to :clientB&#64host2.com\n    host1.com\u4e3b\u673a ->> host2.com\u4e3b\u673a: \u6839\u636e\u90ae\u4ef6\u5730\u5740\u8fdb\u884c\u8f6c\u53d1\u5bf9\u5e94\u4e3b\u673a\u4e0a\n    host2.com\u4e3b\u673a ->> host1.com\u4e3b\u673a: 250 OK\n    host1.com\u4e3b\u673a ->> clientA&#64host1.com\u5ba2\u6237\u7aef: 250 OK\n    Note right of host2.com\u4e3b\u673a: \u6574\u4e2a\u6d41\u7a0b\u7684\u53d1\u9001\u534f\u8bae\u90fd\u662f\u4f7f\u7528smtp\u5e76\u57fa\u4e8e\u516c\u7f51\u4e3b\u673a\u768425\u7aef\u53e3IO.\n    ",mdxType:"Mermaid"}),(0,a.kt)("h3",{id:"32-\u4f7f\u7528telnet\u8fde\u63a5smtp\u670d\u52a1\u5668\u53d1\u9001\u90ae\u4ef6"},"3.2 \u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h3"},"telnet"),"\u8fde\u63a5",(0,a.kt)("inlineCode",{parentName:"h3"},"smtp"),"\u670d\u52a1\u5668\u53d1\u9001\u90ae\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ telnet smtp.163.com 25 # \u8fde\u63a5smtp\u670d\u52a1\u5668\nTrying 220.181.12.16...\nConnected to smtp.163.com.\nEscape character is '^]'.\n220 163.com Anti-spam GT for Coremail System (163com[20141201])\n$ helo fs # helo \u662f\u8ddf\u670d\u52a1\u5668\u8fde\u63a5\u540e\u8981\u53d1\u9001\u7684\u7b2c\u4e00\u6761\u547d\u4ee4\u4e00\u822c\u683c\u5f0f\u4e3a helo <domain>\n250 OK\n$ auth login # \u8fdb\u5165\u767b\u5f55\n334 dXNlcm5hbWU6\n$ d3VjaHVoZW5nQDE2My5jb20= # \u7528\u6237\u540dbash64\n334 UGFzc3dvcmQ6\n$ b*********lJSUlI5NA== # \u5bc6\u7801base64\n235 Authentication successful\n$ mail from: <wuchuheng@163.com> # \u90ae\u4ef6\u53d1\u9001\u5730\u5740\n250 Mail OK\n$ rcpt to: <tnmrlj@163.com> # \u6536\u4ef6\u5730\u5740\n250 Mail OK\n$ rcpt to: <2831473954@qq.com> # \u6284\u9001\u5730\u5740\n250 Mail OK\n$ data # \u8fdb\u5165\u5199\u90ae\u4ef6\u5185\u5bb9\n354 End data with <CR><LF>.<CR><LF>\n$ from: wuchuheng@163.com # \u90ae\u4ef6\u53d1\u9001\u5730\u5740\n$ to: tnmrlj@163.com # \u6536\u4ef6\u5730\u5740\n$ subject: test title # \u90ae\u4ef6\u6807\u9898\n$ #\u7a7a\u884c \u8fdb\u5165\u7f16\u8f91\u90ae\u4ef6\u6b63\u6587\n$ the test content. # \u90ae\u4ef6\u6b63\u6587\n$ # \u7a7a\u884c+.\u4ee3\u8868\u4e00\u5c01\u90ae\u4ef6\u7684\u7ed3\u675f\u5e76\u53d1\u9001\n$ .\n250 Mail OK queued as smtp12,EMCowABXD0kOKjVehG6dAA--.53084S2 1580542691\n$ quit # \u9000\u51fa\n221 Bye\nConnection closed by foreign host.\n[root@JD ~]#\n")),(0,a.kt)("h2",{id:"33-\u90ae\u4ef6\u7684\u63a5\u6536"},"3.3 \u90ae\u4ef6\u7684\u63a5\u6536"),(0,a.kt)("p",null,"\u2003","\u90ae\u4ef6\u7684\u63a5\u6536\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"IMAP"),"(Internet Mail Access Protocol)\n\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"POP3"),"()\u534f\u8bae\u8fdb\u884c\u63a5\u6536\u7684\u3002"))}h.isMDXComponent=!0},95537:function(e,t,n){var o={"./locale":14360,"./locale.js":14360};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=95537}}]);