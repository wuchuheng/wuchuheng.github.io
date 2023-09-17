"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9739],{70224:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return y}});var a=t(22374);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),y=r,m=u["".concat(d,".").concat(y)]||u[y]||s[y]||i;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60850:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=t(23405),r=t(54751),i=(t(22374),t(70224)),l=["components"],o={title:"06 Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",date:new Date("2022-10-25T00:00:00.000Z")},d=void 0,p={unversionedId:"NativeApp/19.1.FlutterAPP/Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",id:"NativeApp/19.1.FlutterAPP/Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",title:"06 Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",description:"1 sync* \u548cyield \u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528",source:"@site/docs/19.NativeApp/19.1.FlutterAPP/06.Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528.md",sourceDirName:"19.NativeApp/19.1.FlutterAPP",slug:"/NativeApp/19.1.FlutterAPP/Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",permalink:"/docs/NativeApp/19.1.FlutterAPP/Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/19.NativeApp/19.1.FlutterAPP/06.Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"06 Dart\u5f02\u6b65\u548c\u540c\u6b65\u5173\u952e\u5b57\u5e94\u7528",date:"2022-10-25T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"05.JSON\u8f6c\u6362\u4ee3\u7801\u81ea\u52a8\u751f\u6210",permalink:"/docs/NativeApp/19.1.FlutterAPP/JSON\u8f6c\u6362\u4ee3\u7801\u81ea\u52a8\u751f\u6210"},next:{title:"07 \u5982\u4f55\u7b80\u5355\u9ad8\u6548\u521b\u5efa\u4e00\u4e2a\u5b50\u7ebf\u7a0b?",permalink:"/docs/NativeApp/19.1.FlutterAPP/\u5982\u4f55\u7b80\u5355\u9ad8\u6548\u521b\u5efa\u4e00\u4e2a\u5b50\u7ebf\u7a0b"}},c={},s=[{value:"1 <code>sync*</code> \u548c<code>yield</code> \u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528",id:"1-sync-\u548cyield-\u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528",level:2},{value:"1.1 <code>sync*</code> \u548c <code>yield</code>\u7684\u5143\u7d20\u7ec4\u540c\u6b65\u8fed\u4ee3",id:"11-sync-\u548c-yield\u7684\u5143\u7d20\u7ec4\u540c\u6b65\u8fed\u4ee3",level:3},{value:"1.2 \u4ee3\u7801\u8fed\u4ee3\u548c<code>for</code>\u904d\u5386\u7684\u533a\u522b",id:"12-\u4ee3\u7801\u8fed\u4ee3\u548cfor\u904d\u5386\u7684\u533a\u522b",level:3},{value:"2 <code>sync*</code> \u548c<code>yield*</code>\u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528",id:"2-sync-\u548cyield\u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528",level:2},{value:"3 \u5355\u5143\u7d20\u5f02\u6b65\u5904\u7406<code>async</code> \u548c<code>await</code>",id:"3-\u5355\u5143\u7d20\u5f02\u6b65\u5904\u7406async-\u548cawait",level:2},{value:"4 \u591a\u5143\u7d20\u5f02\u6b65\u5904\u7406: <code>async*</code>, <code>yield</code>\u548c<code>await</code>",id:"4-\u591a\u5143\u7d20\u5f02\u6b65\u5904\u7406-async-yield\u548cawait",level:2},{value:"5 \u591a\u5143\u7d20\u5f02\u6b65\u5d4c\u5957\u5904\u7406: <code>async*</code>, <code>yield*</code>\u548c<code>await</code>",id:"5-\u591a\u5143\u7d20\u5f02\u6b65\u5d4c\u5957\u5904\u7406-async-yield\u548cawait",level:2}],u={toc:s};function y(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-sync-\u548cyield-\u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528"},"1 ",(0,i.kt)("inlineCode",{parentName:"h2"},"sync*")," \u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"yield")," \u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528"),(0,i.kt)("h3",{id:"11-sync-\u548c-yield\u7684\u5143\u7d20\u7ec4\u540c\u6b65\u8fed\u4ee3"},"1.1 ",(0,i.kt)("inlineCode",{parentName:"h3"},"sync*")," \u548c ",(0,i.kt)("inlineCode",{parentName:"h3"},"yield"),"\u7684\u5143\u7d20\u7ec4\u540c\u6b65\u8fed\u4ee3"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"dart"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u5e94\u7528\u4e8e\u65b9\u6cd5\u6216\u51fd\u6570\u4e2d\uff0c\u8d77\u5230\u6682\u505c\u7684\u4f5c\u7528\uff0c\u52a0\u4e0a\u5173\u952e\u5b57",(0,i.kt)("inlineCode",{parentName:"p"},"sync*"),"\u540e\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Iterior"),"\u7c7b\u578b\u3002\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"Iterior"),"\u7684\n\u6210\u5458\u53d6\u51b3\u4e8e\u65b9\u6cd5\u5185\u6709\u591a\u5c11\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u6682\u505c."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"group('keyword yield and sync* Test ', () {\n    test('Length test', () {\n      Iterable<String> getItems() sync* {\n        yield 'hello';\n        yield 'world';\n      }\n\n      print(getItems().length); // 2\n    });\n  });\n\n")),(0,i.kt)("h3",{id:"12-\u4ee3\u7801\u8fed\u4ee3\u548cfor\u904d\u5386\u7684\u533a\u522b"},"1.2 \u4ee3\u7801\u8fed\u4ee3\u548c",(0,i.kt)("inlineCode",{parentName:"h3"},"for"),"\u904d\u5386\u7684\u533a\u522b"),(0,i.kt)("p",null,"\u6240\u4ee5\u6709\u5f53\u591a\u4e2a\u5143\u7d20\u4e2d\u8fdb\u884c\u540c\u6b65\u8fed\u4ee3\u65f6\uff0c\u80fd\u6267\u884c\u5230\u591a\u5c11\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u5219\u7b97\u591a\u5c11\u4e2a\u5143\u7d20\u3002\n\u90a3\u4e48\u8fd9\u6837\u7684\u6765\u5199\u4ee3\u7801\u6709\u4ec0\u4e48\u7528\uff1f\u80fd\u89e3\u51b3\u4ec0\u4e48\u6837\u573a\u666f\u7684\u95ee\u9898\uff1f\u5047\u8bbe\u4e00\u4e2a\u6709\u9650\u96c6\u5408\uff0c\u800c\u6211\u4eec\u8981\u627e\u7684\u5176\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\u5c31\u5728\u5176\u4e2d\uff0c\u800c\u6bcf\u8bfb\u53d6\u4e00\u4e2a\u5143\u7d20\uff0c\u610f\u5473\u7740\uff0c\n\u8ba1\u7b97\u673a\u8fd0\u884c\u5230\u4e0b\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u5e76\u8fd4\u56de\u5f53\u524d",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u7684\u7ed3\u679c\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e00\u7ed3\u679c\u518d\u51b3\u5b9a\u8981\u4e0d\u8981\u63a5\u9001\u6267\u884c\u4e0b\u53bb\u3002 \u5176\u8fd0\u884c\u7684\u7ed3\u679c\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u904d\u5386\u4e00\u6837\u3002\u5982,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"}," test('Foreach Iterable', () {\n    Iterable<String> getItems() sync* {\n      yield 'hello';\n      yield 'world';\n    }\n\n    getItems().forEach(print);\n    // hello\n    // world\n  });\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u5f88\u660e\u663e\uff0c\u8fd9\u79cd\u904d\u5386",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u4e5f\u662f\u53ef\u4ee5\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\uff0c\u90a3\u4e3a\u4ec0\u4e48\u8981\u7528\u8fed\u4ee3\u5668\u5462?\u4f7f\u7528\u8fed\u4ee3\u5668\u76f8\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u904d\u5386\uff0c\u53ef\u4ee5\u6709\u6548\u53bb\u63a7\u5236\u5185\u5b58\u3002\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u904d\u5386\u5217\u8868\u65f6\uff0c\u9700\u8981\n\u628a\u6570\u636e\u90fd\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u7136\u540e\u8fdb\u884c\u904d\u5386\uff0c\u5047\u8bbe\u4e00\u4e2a\u5217\u8868\uff0c\u91cc\u9762\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u6765\u904d\u5386\u7684\u8bdd\uff0c\u53ea\u80fd\u628a\u6570\u636e\u90fd\u52a0\u8f7d\u8fdb\u6765\uff0c\u518d\u8fdb\u884c\u904d\u5386\uff0c\u800c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u6765\n\u5904\u7406\u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u6bcf\u8981\u628a\u6267\u884c\u4e0b\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u5219\uff0c\u8fd9\u91cc\u7684\u5904\u7406\u903b\u8f91\u5219\u53ef\u4ee5\u5199\u6210\u4ee5\u6e38\u6807\u7684\u65b9\u5f0f\u53bb\u8bfb\u53d6\u8be5\u6761\u6570\u636e\uff0c\u7136\u540e\u8fd4\u56de\u7ed3\u679c\u5e76\u6682\u505c\u3002\u76f8\u5bf9\u6765\u8bf4\uff0c\u5360\u7528\u5185\u5b58\u53ef\u4ee5\u66f4\u5c11\u3002\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"\n  test('Foreach Iterable', () {\n    // \u5047\u8bbe\u8fd9\u662f\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u4e00\u4e2a\u5355\u8bcd\u51fa\u6765\n    String readFromFile(int index) => ['hello', 'wolrd'][index];\n    Iterable<String> getItems() sync* {\n      for (var index = 0; index < 2; index++) {\n        yield readFromFile(index);\n      }\n    }\n\n    getItems().map(prints);\n    // hello\n    // world\n  });\n")),(0,i.kt)("p",null,"\u6240\u4ee5\u76f8\u4ea4\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u7684\u4e00\u6b21\u6027\u904d\u5386\u9700\u8981\u52a0\u8f7d\u5168\u90e8\u7684\u6570\u636e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable"),"\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u6e38\u6807\u7684\u65b9\u5f0f\u4e00\u4e2a\u4e00\u4e2a\u53bb\u8bfb\u53d6\u6570\u636e\uff0c\u4ece\u800c\u4e0d\u4f1a\u4e00\u5f00\u59cb\u5c31\u5360\u7528\u8fc7\u591a\u7684\u5185\u5b58\u3002"),(0,i.kt)("h2",{id:"2-sync-\u548cyield\u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528"},"2 ",(0,i.kt)("inlineCode",{parentName:"h2"},"sync*")," \u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"yield*"),"\u591a\u5143\u7d20\u540c\u6b65\u8fed\u4ee3\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yield*"),"\u5173\u952e\u5b57\u540e\u63a5",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable"),",\u53ef\u4ee5\u7406\u89e3\u6210\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"yield*"),"\u540e\u9762\u5bf9\u63a5\u7684\u5c31\u662f\u53e6\u4e00\u4e2a\u8fed\u4ee3\u96c6\uff0c\u5982\u679c\u628a\u51fd\u6570\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u6bd4\u4f5c\u662f\u4e00\u4e2a\u5143\u7d20\u7684\u8bdd\uff0c\u90a3\u4e48",(0,i.kt)("inlineCode",{parentName:"p"},"yield*"),"\u5c31\u662f\u628a\u4e00\u4e2a\u6574\u4e2a\n\u5143\u7d20\u96c6\u62ff\u8fc7\u6765\u5230\u8fd9\u4e2a\u51fd\u6570\u4e2d\u8fdb\u884c\u4e00\u4e2a\u4e00\u4e2a\u8fed\u4ee3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  test('Test for sync* yield*', () {\n    Iterable<String> getEmojiWithTime(int count) sync* {\n      Iterable<String> getItems() sync* {\n        yield 'hello';\n        yield 'world';\n      }\n\n      yield* getItems();\n      yield '!';\n    }\n\n    print(getEmojiWithTime(10).join(' ')); // hello world !\n  });\n")),(0,i.kt)("h2",{id:"3-\u5355\u5143\u7d20\u5f02\u6b65\u5904\u7406async-\u548cawait"},"3 \u5355\u5143\u7d20\u5f02\u6b65\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"h2"},"async")," \u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"await")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"\u672c\u8d28\u4e0a\u662f\u5bf9\u4e00\u4e2a\u56de\u8c03\u5d4c\u5957\u7684\u51fd\u6570\u8fdb\u884c\u540c\u6b65\u5199\u6cd5,\u4ece\u800c\u907f\u514d\u4e86\u56de\u8c03\u5730\u72f1\u7684\u60c5\u51b5\u3002\u5982: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  test( 'async await test', () async {\n      Future.delayed(const Duration(seconds: 1)).then((value) {\n        print('OK');\n      });\n      await Future.delayed(Duration(seconds: 3));\n    },\n  );\n")),(0,i.kt)("p",null,"\u8fd92\u79cd\u5199\u6cd5\u7684\u4f5c\u7528\u662f\u4e00\u6837\u7684\uff0c\u4e0d\u8fc7\uff0c\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"\u7684\u8bed\u6cd5\u7cd6\u65b9\u5f0f\u907f\u514d\u4e86\u5d4c\u5957\u7684\u5199\u6cd5\uff0c\u7ed9\u4eba\u4e00\u79cd\u4e32\u884c\u7684\u4ee3\u7801\u5f62\u5f0f\uff0c\u5176\u5b9e\u672c\u8d28\u8fd8\u662f\u4ee5\u56de\u8c03\u7684\u65b9\u5f0f\u5b9e\u73b0\u5f02\u6b65\u7684\uff0c\u53ea\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"\n\u8bed\u6cd5\u7cd6\u5f62\u5f0f\u7b80\u5316\u4e86\u5199\u6cd5\uff0c\u907f\u514d\u5f00\u53d1\u8005\u4e0d\u5fc5\u8981\u7684\u5fc3\u7406\u8d1f\u62c5\u3002"),(0,i.kt)("h2",{id:"4-\u591a\u5143\u7d20\u5f02\u6b65\u5904\u7406-async-yield\u548cawait"},"4 \u591a\u5143\u7d20\u5f02\u6b65\u5904\u7406: ",(0,i.kt)("inlineCode",{parentName:"h2"},"async*"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"yield"),"\u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"await")),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u51fd\u6570\u5185\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"async*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"\uff0c\u90a3\u4e48\u8fd9\u4e2a\u51fd\u6570\u5fc5\u7136\u8fd4\u56de\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Stream<T>"),"\u5bf9\u8c61.\u5176\u7ed3\u679c\u540c\u591a\u5143\u7d20\u540c\u6b65\u5904\u7406\u7684\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7\u8fd4\u56de\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Stream<T>"),"\u5bf9\u8c61\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"test('Multiple async test', () async {\n    Future<String> getWord() async => 'Hello world!';\n\n    Stream<String> getStream() async* {\n      yield await getWord();\n    }\n\n    getStream().listen(print);\n\n    await Future.delayed(const Duration(seconds: 3));\n  });\n")),(0,i.kt)("h2",{id:"5-\u591a\u5143\u7d20\u5f02\u6b65\u5d4c\u5957\u5904\u7406-async-yield\u548cawait"},"5 \u591a\u5143\u7d20\u5f02\u6b65\u5d4c\u5957\u5904\u7406: ",(0,i.kt)("inlineCode",{parentName:"h2"},"async*"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"yield*"),"\u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"await")),(0,i.kt)("p",null,"\u5176\u5b9e\u8fd9\u4e2a\u8ddf\u4e0a\u9762\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"async*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"\uff0c\u552f\u4e00\u7684\u533a\u522b\u53ef\u4ee5\u770b\u6210\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"yield*"),"\u5e76\u5165\u4e86\u4e00\u4e2a\u6d41.\u7136\u540e\u5148\u5904\u7406\u5b8c\u8fd9\u4e2a\u6d41\uff0c\u518d\u6267\u884c\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"yield*")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"test('Multiple async* test', () async {\nStream<String> getWord() async* {\nyield await Future(() => 'Hello world!');\nyield await Future(() => 'Hello world!');\n}\n\n    Stream<String> getStream() async* {\n      yield* getWord();\n    }\n\n    getStream().listen(print);\n\n    await Future.delayed(const Duration(seconds: 3));\n});\n")))}y.isMDXComponent=!0}}]);