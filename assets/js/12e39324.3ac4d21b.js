"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[6928],{70224:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(22374);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),m=s(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,o(o({ref:e},u),{},{components:t})):r.createElement(f,o({ref:e},u))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50167:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(23405),i=t(54751),a=(t(22374),t(70224)),o=["components"],c={title:"01.\u57fa\u7840\u7528\u6cd5",date:new Date("2017-09-26T00:00:00.000Z"),tags:["Linux"],categories:["Linux"]},l=void 0,s={unversionedId:"Linux/\u57fa\u7840\u7528\u6cd5",id:"Linux/\u57fa\u7840\u7528\u6cd5",title:"01.\u57fa\u7840\u7528\u6cd5",description:"2 \u5f00\u542f\u548c\u5173\u95ed\u7f51\u5361",source:"@site/docs/02.Linux/01.\u57fa\u7840\u7528\u6cd5.md",sourceDirName:"02.Linux",slug:"/Linux/\u57fa\u7840\u7528\u6cd5",permalink:"/docs/Linux/\u57fa\u7840\u7528\u6cd5",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/02.Linux/01.\u57fa\u7840\u7528\u6cd5.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:1,frontMatter:{title:"01.\u57fa\u7840\u7528\u6cd5",date:"2017-09-26T00:00:00.000Z",tags:["Linux"],categories:["Linux"]},sidebar:"tutorialSidebar",previous:{title:"10.gitgnore\u7684\u4f7f\u7528",permalink:"/docs/Git/gitgnore\u7684\u4f7f\u7528"},next:{title:"02.Bash\u811a\u672c\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/Linux/Bash\u811a\u672c\u57fa\u7840\u77e5\u8bc6"}},u={},p=[{value:"2 \u5f00\u542f\u548c\u5173\u95ed\u7f51\u5361",id:"2-\u5f00\u542f\u548c\u5173\u95ed\u7f51\u5361",level:2},{value:"3 \u67e5\u770b\u6587\u4ef6\u548c\u76ee\u5f55\u5728\u5927\u5c0f",id:"3-\u67e5\u770b\u6587\u4ef6\u548c\u76ee\u5f55\u5728\u5927\u5c0f",level:2},{value:"4 <code>Chattr</code>\u6587\u4ef6\u9501\u5b9a",id:"4-chattr\u6587\u4ef6\u9501\u5b9a",level:2}],m={toc:p};function d(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u547d\u4ee4\u8be6\u60c5\n    # man [\u547d\u4ee4]\n*********************\u76ee\u5f55******************************\n\u4e00.\u6587\u4ef6\u53ca\u76ee\u5f55\u64cd\u4f5c\n\u4e8c,vi\n\u4e09,vim\n\u56db,\u7528\u6237\u64cd\u4f5c\n\u4e94,\u5e2e\u52a9\u547d\u4ee4\u67e5\u770b\n\u516d,\u538b\u7f29\u548c\u89e3\u538b\n\u4e03,\u5173\u673a\n\u516b,\u8fd0\u884c\u7ea7\u522b\n\u4e5d,\u6302\u8f7d\n\u5341,shell\u811a\u672c\n\u5341\u4e00,\u547d\u4ee4\u65e5\u5fd7\n\u5341\u4e8c,\u6587\u4ef6\u4e0b\u8f7d\n\u5341\u4e09,\u901a\u914d\u7b26\n\u5341\u56db,\u4efb\u52a1\u5207\u6362\n\u5341\u4e94,\u7528\u6237\n\u5341\u516d,centos 7 \u6302\u8f7dntfs\u6587\u4ef6\u683c\u5f0f\n\u5341\u4e03,\u670d\u52a1\u8be6\u60c5\n\u5341\u516b\uff0c\u6587\u4ef6\u6743\u9650\n\u5341\u4e5d\uff0c\u73af\u5883\u53d8\u91cf\n\u4e8c\u5341\uff0c(centos 7 firewalld)\u5f00\u673a\u542f\u52a8\n\u4e8c\u5341\u4e00,rpm\u5305\u7ba1\u7406\n\u9644\u4e00\uff1a\u5176\u5b83\u547d\u4ee4\n\u9644\u4e8c:\u5e38\u7528\u5feb\u6377\u952e\n\n\n**********************************\u4e00.\u6587\u4ef6\u53ca\u76ee\u5f55\u64cd\u4f5c**************************\n\n\n  cd(change directory);\n  pwd(print working directory);\u53ea\u80fd\u5220\u9664\u7a7a\u76ee\u5f55\n  rmdir(remove empty diretary);\n  rm -r \u63d0\u793a\u5220\u9664\u76ee\u5f55\u6216\u6587\u4ef6\n  rm -rf \u65e0\u63d0\u793a\u5f3a\u5236\u5220\u9664\u76ee\u5f55\u6216\u6587\u4ef6 \u5305\u62ec rm -rf / \u5982:rm -rf wuchuheng/\n  1,cd ~ \u8fd4\u56de\u7528\u6237\u5bb6\u76ee\u5f55\n    cd    \n  2,cd - \u8fd4\u56de\u4e0a\u6b21\u7684\u76ee\u5f55\n  3,cd .. \u8fdb\u5165\u4e0a\u7ea7\u76ee\u5f55\n  4,cd . \u8fdb\u5165\u5f53\u524d\u76ee\u5f55 \n  5,cp [\u9009\u9879] [\u6587\u4ef6\u6216\u76ee\u5f55] [\u76ee\u6807\u76ee\u5f55](\u6216\u6539\u540d)\n    \u9009\u9879:-r \u590d\u5236\u76ee\u5f55\n         -p \u8fde\u5e26\u6587\u4ef6\u5c5e\u6027\n         -d \u82e5\u6e90\u6587\u4ef6\u662f\u94fe\u63a5\u6587\u4ef6\uff0c\u5219\u590d\u5236\u94fe\u63a5\u5c5e\u6027\n         -a \u76f8\u5f53\u4e8epdr\n         \u9009\u9879\u52a0f \u5f3a\u5236\uff0c\u4e0d\u63d0\u793a\n\n  6,\u65b0\u5efa\u6587\u4ef6\n     vi [\u6587\u4ef6\u540d]    \u67e5\u770b\u6587\u4ef6\n     //\u4fdd\u5b58\u548c\u9000\u51fa\u64cd\u4f5c\uff0c\n      \u6309ESC\u8fdb\u5165\u547d\u4ee4\u884c\u8f93\u5165\n     :q \u9000\u51fa\n     :w \u4fdd\u5b58\n     :wq!\u4fdd\u5b58\u9000\u51fa\n     touch [\u6587\u4ef6\u540d][...] \u65b0\u5efa\u4e0d\u6253\u5f00\u7a7a\u6587\u4ef6\n  7,\u590d\u5236\u76ee\u5f55 cp -R /[\u6587\u4ef6\u5939\u8def\u5f84]/ . /[\u4e0d\u5199\u8def\u5f84\uff0c\u9ed8\u8ba4\u590d\u5236\u5230\u5f53\u524d\u8def\u5f84]\n  8\uff0cmv [\u6587\u4ef6\u6216\u76ee\u5f55] [\u76ee\u6807\u76ee\u5f55](\u6216\u6539\u540d) \u79fb\u52a8\u6587\u4ef6\n  9\uff0c\u76ee\u5f55\u8bf4\u660e\n     /bin/ \u548c /usr/bin/ \u5b58\u653e\u666e\u901a\u7528\u6237\u547d\u4ee4\n     /sbin/ \u548c /usr/sbin \u5b58\u653e\u8d85\u7ea7\u7528\u6237\u547d\u4ee4\n     \uff08linux\u662f\u8fd9\u6837\u6765\u533a\u5206\u8d85\u7ea7\u7528\u6237\u548c\u666e\u901a\u7528\u6237\uff09\n     /boot/     \u542f\u52a8\u76ee\u5f55\n     /dev/      \u7279\u6b8a\u6587\u4ef6\u76ee\u5f55\u3002\u5982\u786c\u4ef6\u6587\u4ef6\n     /etc/      \u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\n     /lib/      \u51fd\u6570\u5e93\n     /media/ \u548c /mnt/ \u548c /misc/ \u5916\u63a5\u8bbe\u5907\u6302\u8f7d\u76d8\u7b26\n     /srv/      \u548c sys \u5185\u5728\u6302\u8f7d\u70b9\n     /temp/     \u4e34\u65f6\u76ee\u5f55\n     /usr/      \n   10,\u94fe\u63a5\u6587\u4ef6\n     ln [\u6587\u4ef6\u540d] [\u76ee\u6807\u6587\u4ef6\u540d] //\u786c\u94fe\u63a5\u76f8\u5f53\u4e00\u4e2a\u6587\u4ef62\u4e2a\u8bbf\u95ee\u8bbf\u95ee\u65b9\u5f0f\uff0c\u5c31\u7b97\u5220\u9664\u539f\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u786c\u94fe\u63a5\u8bbf\u95ee\u6587\u4ef6\u3002\u4e0d\u652f\u6301\u8de8\u5206\u533a\u3002\u80fd\u901a\u8fc7i\u8282\u70b9\u8bc6\u522b\uff0c\u5982: ls -i [\u786c\u94fe\u63a5\u6587\u4ef6] [\u539f\u6587\u4ef6]\n     ln -s [\u6587\u4ef6\u540d/\u76ee\u5f55] [\u76ee\u6807\u8def\u5f84] //\u8f6f\u94fe\u63a5 \u76f8\u5f53\u4e8e\u5feb\u6377\u65b9\u5f0f\n   11,\u6587\u4ef6\u641c\u7d22\n     locate [\u6587\u4ef6\u540d]  // \u4ece/var/lib/mlocate\u6570\u636e\u5e93\u67e5\u627e\u6587\u4ef6\u540d\uff0c\u6570\u636e\u5e93\u4e00\u5929\u4e00\u66f4\u65b0\n     updatedb //\u66f4\u65b0\u6570\u636e\u5e93\u3002\u76f8\u5bf9\u4e8efind\u904d\u5386\u641c\u7d22\uff0clocate\u7684\u914d\u7f6e\u6587\u4ef6/etc/updatedb.conf \u914d\u7f6e\u8fc7\u6ee4\u7684\u641c\u7d22\u89c4\u5219\n     (01), whereis [\u8981\u67e5\u627e\u7684\u547d\u4ee4] //\u641c\u7d22\u547d\u4ee4\u7684\u547d\u4ee4\u3002\n     (02),which [\u8981\u67e5\u770b\u7684\u547d\u4ee4]    //\u67e5\u770b\u547d\u4ee4\u7684\u522b\u540d\n     (03),echo $PATH //\n     find [\u6587\u4ef6\u76ee\u5f55] -name [\u6587\u4ef6\u540d] //\u904d\u5386\u67e5\u627e\n     (01), find [\u6587\u4ef6\u76ee\u5f55] -name "[\u6587\u4ef6\u540d]*/?[]" //\u6b63\u5219\u5339\u914d \u5982:find /root/ -name "[(.|b-z)|a-z]*"\n     (02), find [\u6307\u5b9a\u67e5\u627e\u8303\u56f4\u6587\u4ef6\u76ee\u5f55] -iname [\u6587\u4ef6\u540d] //\u4e0d\u5206\u5927\u5c0f\u6587\u4ef6\u540d\n     (03), find [\u76ee\u5f55] -user [\u4f7f\u7528\u62e5\u6709\u8005] //\u6309\u62e5\u6709\u8005\u67e5\u627e\n     (04), find [\u76ee\u5f55] -nouser  //\u65e0\u62e5\u6709\u8005\u6587\u4ef6\uff0c\u6216\u5185\u6838\u6587\u4ef6\u6216\u5916\u63a5\u6570\u636e\u76d8\u6587\u4ef6\uff0c\u4e0d\u7136\u5c31\u662f\u5783\u573e\u6587\u4ef6\n     (05), find [\u76ee\u5f55] -atime +10/-10/10 //10\u5929\u4e4b\u524d\u4fee\u6539\u7684\u6587\u4ef6/10\u5929\u524d\u5f53\u5929\u4fee\u6539\u7684\u6587\u4ef6/10\u5929\u5185\u4fee\u6539\u7684\u6587\u4ef6 \u3002\u5176\u5b83\u6761\u4ef6:ctime(\u6539\u53d8\u6587\u4ef6\u5c5e\u6027\u65f6\u95f4)\uff0catime(\u8bbf\u95ee\u6587\u4ef6\u5c5e\u6027\u65f6\u95f4)\n     (06), find . -size [\u6587\u4ef6\u5927\u5c0f]/+[]/-[] //\u6309\u6587\u4ef6\u5927\u5c0f\u67e5\u627e,\u6216\u5c0f\u4e8e\uff0c\u6216\u5927\u4e8e ;\u5927\u4e8e\u6216\u5c0f\u4e8e\u6587\u4ef6: find . -size -60k -a -size +50k  //-a(and) -o(or)\n     (07), find . -inum [\u8282\u70b9] //\u8282\u70b9\u641c\u7d22\n     (08), find . +size 10k -a -size 20k -exec rm -rf {} \\; find . -size 10k -a +size 1k -exec ls -ahl {} \\;\n     \n  12\uff0c\u6587\u4ef6\u5185\u5bb9\u67e5\u627e\n      # grep "\u5173\u952e\u8bcd" [\u6587\u4ef61] [\u6587\u4ef62] ...  \n  13,\u4fee\u6539\u6587\u4ef6\u7528\u6237\u7ec4\n      # chown [-R][\u7528\u6237\u540d]:[\u7528\u6237\u7ec4] [\u6587\u4ef6/\u76ee\u5f55] //\u4fee\u6539\u6587\u4ef6/\u76ee\u5f55\u7684\u7528\u6237\u7ec4,[-R]\u9012\u5f52\u5230\u76ee\u5f55\u6bcf\u4e00\u4e2a\u7684\u6bcf\u4e00\u4e2a\u6587\u4ef6\uff0c\u4e0d\u5c31\u662f\u5f53\u524d\u76ee\u5f55\u7684\n***************************************  \u4e8c,vi   **********************************\n \n 1,\u590d\u5236:\n        \u547d\u4ee4\u6a21\u5f0f\u4e0b\uff0cv +\u79fb\u52a8\u5149\u6807\u9009\u4e2d\u8981\u590d\u5236\u7684\u5185\u5bb9+y\n    2,\u7c98\u8d34:\n        \u547d\u4ee4\u6a21\u5f0f\u4e0b\uff0cp\n        \n        \n**************************************\u4e09,vim****************************************\n    \n    1,vim \u6253\u5f00\u591a\u4e2a\u6587\u4ef6  vim a b c .....\n        :files  //\u67e5\u770b\u5f53\u524d\u6253\u5f00\u7684\u6587\u4ef6\n        :bn     //\u4e0b\u4e00\u6587\u4ef6\n        :bp     //\u4e0a\u4e00\u4e2a\u6587\u4ef6\n        :split  //\u540c\u65f6\u663e\u793a\u591a\u4e2a\u6587\u4ef6 :vsplit\n        Ctrl+w+\u65b9\u5411\u952e\u2014\u2014\u5207\u6362\u5230\u524d\uff0f\u4e0b\uff0f\u4e0a\uff0f\u540e\u4e00\u4e2a\u7a97\u683c\n        Ctrl+w+h/j/k/l \u2014\u2014\u540c\u4e0a\n        Ctrl+ww\u2014\u2014\u4f9d\u6b21\u5411\u540e\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u7a97\u683c\u4e2d\n    2.\u63d2\u5165\u4e00\u884c\u6587\u5b57 \n        echo \u63d2\u5165\u5185\u5bb9  >> \u6587\u4ef6\u540d\n    3,\u67e5\u627e\u5173\u952e\u8bcd\n       /[\u5173\u952e\u8bcd]\n       n //\u4e0b\u4e00\u4e2a\n       p //\u7b2c\u4e00\u4e2a     \n    4,\u5f53\u524d\u6587\u4ef6\u8def\u5f84\n       :qw  \n    5,\u64a4\u6d88\u4fee\u6539\n        (1), :u //\u64a4\u6d88\u4e0a\u4e00\u6b21\u7684\u64cd\u4f5c\n        (2), :U //\u64a4\u6d88\u5f53\u524d\u884c\u7684\u6240\u6709\u64cd\u4f5c\n    6, \u653e\u5f03\u4fee\u6539\n        :e!\n    7,\u663e\u793a\u884c\u6570\n        1,\u4e34\u65f6\u663e\u793a\n            :set number\n            :set nonumber (\u4e0d\u663e\u793a\u884c\u6570)\n        2,\u9ed8\u8ba4\u663e\u793a\n            \u5728\u914d\u7f6e\u6587\u4ef6\u7684\u884c\u5934\u6216\u8005\u884c\u5c3e\u52a0\u5165set number    \n            vim /etc/vimrc\n************************************\u56db,\u7528\u6237\u64cd\u4f5c*******************************************   \n    \n    1\uff0cctrl+c  //\u9000\u51fa\u7528\u6237\u5bc6\u7801\u8f93\u5165 \n        2, sudo usermod -G <group> <user> // \u628a\u7528\u6237\u6dfb\u52a0\u8fdb\u7528\u7ec4\n    \n    \n************************************\u4e94,\u5e2e\u52a9*********************************\n    1,man \u7684\u7ea7\u522b\n        # man [\u7ea7\u522b\u6570\u5b57] [\u547d\u4ee4]\n        # man [\u547d\u4ee4] //\u9ed8\u8ba4\u4ece\u7b2c\u4e00\u4e2a\u7ea7\u522b\u67e5\u770b\n        # man -f [\u547d\u4ee4] //\u76f8\u5f53\u4e8e # whatis [\u547d\u4ee4]\n        # apropos [\u6a21\u7cca\u547d\u4ee4] //\u6a21\u7cca\u641c\u7d22\u547d\u4ee4\u7684\u5e2e\u52a9\u6587\u6863\u548c\u547d\u4ee4\u7684\u5168\u79f0\n       (1): \u67e5\u770b\u547d\u4ee4\u7684\u5e2e\u52a9\n       (2): \u67e5\u770b\u53ef\u88ab\u5185\u6838\u8c03\u7528\u7684\u51fd\u6570\u7684\u5e2e\u52a9\n       (3): \u67e5\u770b\u51fd\u6570\u548c\u51fd\u6570\u5e93\u7684\u5e2e\u52a9\n       (4): \u67e5\u770b\u7279\u6b8a\u6587\u4ef6\u7684\u5e2e\u52a9\n       (5): \u67e5\u770b\u914d\u7f6e\u6587\u4ef6\u7684\u5e2e\u52a9\n       (6): \u67e5\u770b\u6e38\u620f\u7684\u5e2e\u52a9\n       (7): \u67e5\u770b\u5176\u5b83\u6742\u9879\u7684\u5e2e\u52a9\n       (8): \u67e5\u770b\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u7528\u547d\u4ee4\u7684\u5e2e\u52a9\n       (9): \u67e5\u770b\u548c\u5185\u6838\u76f8\u5173\u6587\u4ef6\u7684\u5e2e\u52a9\n       (\u53ef\u4ee5 # man man //\u67e5\u770b\u66f4\u591a\u7684\u4fe1\u606f)\n    # man -f []\n\n    \n**********************************\u516d,\u538b\u7f29\u548c\u89e3\u538b***********************************************\n\n    1,\u683c\u5f0f :.giz , .gz , .bz2 , .tar.gz , tar.bz2, tar.xz\n    2,zip\u683c\u5f0f\n        (1) # zip [\u76ee\u6807\u6587\u4ef6.zip] [\u88ab\u538b\u7f29\u6587\u4ef6]\n        (2) # zip -r [\u76ee\u6807\u6587\u4ef6.zip] [\u88ab\u538b\u7f29\u7684\u76ee\u5f55]\n    3,gz\u683c\u5f0f(\u76f8\u5bf9\u4e8ezip,\u4e0d\u4fdd\u7559\u6e90\u6587\u4ef6)\n        (1) # gzip [\u6e90\u6587\u4ef6] //\u4e0d\u4fdd\u7559\u6e90\u6587\u4ef6 (\n            \u901a\u8fc7\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u53ef\u4fdd\u7559\u8fd9\u6837\u7684\u6e90\u6587\u4ef6\uff0c\n            # gzip -c [\u6e90\u6587\u4ef6] //\u538b\u7f29\u4e00\u4e2a\u6587\u4ef6\u5e76\u5c06\u538b\u7f29\u7684\u5185\u5bb9\u8f93\u51fa\u5c4f\u5e55 \n            # gzip -c [\u6e90\u6587\u4ef6] > [\u76ee\u6807\u6587\u4ef6.gz] //\u5c06\u6e90\u6587\u4ef6\u538b\u7f29\u540e\u7684\u5185\u5bb9\u5199\u8fdb\u65b0\u5efa\u6587\u4ef6[\u76ee\u6807\u6587\u4ef62] //\u8fd9\u8981\u538b\u7f29\u5305\u597d\u50cf\u4e0d\u80fd\u89e3\u89e3\u538b\u7f29\n            )\n        (2) \u89e3\u538b\u6587\u4ef6\n            # gzip -d [\u538b\u7f29\u6e90\u6587\u4ef6]\n            # gunzip  [\u538b\u7f29\u6e90\u6587\u4ef6] //\u540c\u4e0a\n            # gunzip -r [\u76ee\u5f55] \u89e3\u538b\u76ee\u5f55\u4e0b\u7684\u6240\u6709.gz\u538b\u7f29\u5305\n    4,bz2\u683c\u5f0f(\u540c\u4e0a\u4e0d\u4fdd\u7559\u6e90\u6587\u4ef6,\u53ca\u4e0d\u538b\u7f29\u76ee\u5f55)\n        (1),\u538b\u7f29\u6587\u4ef6\n            # bzip2 [\u6e90\u6587\u4ef6] //\u4e0d\u4fdd\u7559\u6e90\u6587\u4ef6(\u540c\u4e0a)\n            # bzip2 -k [\u6e90\u6587\u4ef6] //\u4fdd\u7559\u6e90\u6587\u4ef6(\u540c\u4e0a)\n        (2),\u89e3\u538b\u6587\u4ef6\n            # bzip2 -d [\u538b\u7f29\u6e90\u6587\u4ef6]\n            # bunzip2 [\u538b\u7f29\u6e90\u6587\u4ef6]\n            # bunzip2 -k [\u538b\u7f29\u6e90\u6587\u4ef6] //\u4fdd\u7559\u6e90\u538b\u7f29\u6587\u4ef6\n            # bzcat [\u538b\u7f29\u6587\u4ef6] //\u8f93\u51fa\u538b\u7f29\u6587\u4ef6\u7684\u89e3\u538b\u5185\u5bb9\n    5,tar.gz\u548ctar.bz2\u6587\u4ef6/\u76ee\u5f55\u6253\u5305\u538b\u7f29\u548c\u548c\u89e3\u538b\u7f29\n        (1),\u538b\u7f29\n            # tar -zcvf [\u76ee\u6807\u6587\u4ef6.tar.gz] [\u6e90\u6587\u4ef6/\u76ee\u5f55] //gz\u683c\u5f0f\n            # tar -jcvf [\u76ee\u6807\u6587\u4ef6.tar.gz2] [\u6e90\u6587\u4ef6/\u76ee\u5f55] //gz2\u683c\u5f0f\n        (2),\u89e3\u538b\n            # tar -zxvf [\u538b\u7f29\u6587\u4ef6.tar.gz] <-C [\u89e3\u538b\u8def\u5f84]>//gz\u683c\u5f0f\n            # tar -jxvf [\u538b\u7f29\u6587\u4ef6.tar.gz2] <-C [\u89e3\u538b\u8def\u5f84]>//gz2\u683c\u5f0f\n        (3),\u67e5\u770b  \n            # tar -ztvf [\u538b\u7f29\u6587\u4ef6.tar.gz] //\u67e5\u770b\u538b\u7f29\u5305\u7684\u5185\u5bb9\n            # tar -jxvf [\u538b\u7f29\u6587\u4ef6.tar.gz2] //\u67e5\u770b\u538b\u7f29\u5305\u7684\u5185\u5bb9           \n    6,zip\u683c\u5f0f\n        (1),\u89e3\u538b\n            # unzip -o -d ./ [\u6e90\u6587\u4ef6.zip] //\u89e3\u538b\u6587\u4ef6\u81f3\u5f53\u524d\u76ee\u5f55 \n        7,tar.xz\u683c\u5f0f\n                 \uff082\uff09 \u89e3\u538b\n                            tar xvJf  [\u538b\u7f29\u6587\u4ef6.tar.zx]\n\n*************************************\u4e03,\u5173\u673a**********************************************\n    # shutdown [\u9009\u9879][\u53c2\u6570]\n    1,\u5173\u673a\n        (1),\u73b0\u5728\u5173\u673a\n            # shutdown -h now\n        (2),\u5b9a\u65f6\u5173\u673a\n            # shutdown -h 00:00\n            # shutdown -h 00:00 $ //\u540e\u53f0\u5b9a\u65f6\u4efb\u52a1\n        (3),\u91cd\u542f\n            (\u540c\u4e0a)\n    2,\u53d6\u6d88\n        # shutdown -c\n\n        \n**************************************\u516b,\u8fd0\u884c\u7ea7\u522b*******************************************     \n    1,\u67e5\u770b\u7cfb\u7edf\u521d\u59cb\u5316\u8fd0\u884c\u7ea7\u522b\u914d\u7f6e\u6587\u4ef6\n        # cat /etc/inittab \n    2,\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u8fd0\u884c\u7ea7\u522b\n        # runlevel \n    3,\u5f53\u524d\u8fd0\u884c\u7ea7\u522b\u5207\u6362\n        # init [\u8fd0\u884c\u7b49\u7ea7]\n        \n        \n***************************************\u4e5d,\u6302\u8f7d***************************************************\n    1,\u67e5\u770b\u5df2\u7ecf\u6302\u8f7d\u7684\u8bbe\u5907\n        # mount\n    2,\u6302\u8f7d/etc/fstab\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u6240\u6709\u6302\u8f7d\u70b9(\u8fd9\u4e2a\u6587\u4ef6\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\u6240\u6709\u7684\u6302\u8f7d\u70b9)\n        # mount -a\n    3,\u6302\u8f7d\u547d\u4ee4\u683c\u5f0f\n        # mount [-t \u6587\u4ef6\u7cfb\u7edf] [-o \u7279\u6b8a\u9009\u9879] \u8bbe\u5907\u6587\u4ef6\u540d \u6302\u8f7d\u70b9\n    4,\u6302\u8f7d\u5149\u76d8\n        (1), \u65b0\u5efa\u6302\u8f7d\u70b9(\u76ee\u5f55)\n            # mkdir /mnt/cdrom/\n        (2),\u6302\u8f7d\u5149\u76d8\n            # mount -t iso96660 /dev/sr0 /mnt/cdrom/\n        (3),\u5378\u8f7d\u5149\u76d8\n             # umount [\u6302\u8f7d\u70b9\n    5,\u6302\u8f7dU\u76d8\n    \n        (1), \u67e5\u770b\u8bbe\u5907\u7684\u6587\u4ef6\u540d\n            # fdisk -lib\n        (2),\u6302\u8f7dU\u76d8\n            # mount -t vfat [\u8bbe\u5907\u6587\u4ef6\u540d] [/mnt/[\u6302\u8f7d\u70b9\u76ee\u5f55]]\n        (3),\u5378\u8f7d\u6302\u8f7d\u70b9\n            \u540c\u4e0a\uff01\n    \u6ce8:\u9ed8\u8ba4\u4e0d\u652f\u6301NTFS\u6587\u4ef6\u7cfb\u7edf     \n    \n    6,\u6302\u8f7dNTFS\u6587\u4ef6\u7cfb\u7edf\n        \u8bf4\u660e:\u7531\n\n************************************* \u5341,shell\u811a\u672c*****************************************\n\n    1,\u67e5\u770b\u5f53\u524d\u8c03\u7528\u7684shell\n        echo $SHELL  \n    2,echo \u7684\u7279\u6b8a\u8f93\u51fa\u683c\u5f0f\n        # echo [\u9009\u9879] [\u8f93\u51fa\u5185\u5bb9]\n        (# echo -e "hello world";)\n        (1),\u683c\u5f0f\u8f93\u51fa\n            \\n:\u6362\u884c\n            \\t:tab\n            \\b:backspace\n            \\a:\u53d1\u51fa\u8b66\u544a\u97f3\n            \\r:\u56de\u8f66\n            \\0:\u6309ACSII\u8868\u4ee58\u8fdb\u5236\u8f93\u51fa\u5b57\u7b26\n            \\x:16\u8fdb\u5236\u540c\u4e0a\n            (# echo -e "hello world \\n";)\n        (2),\u989c\u8272\u8f93\u51fa\n            (# echo -e "\\e[1;30m hello world \\e[0m";)\n            30m:black;\n            31m:red;\n            32m:green;\n            33m:yellow;\n            34m:blue;\n            35m:magenta;\n            36m:syan;\n            37m:white;\n        (3),\u8fd0\u884csh\u6587\u4ef6\n            1), # chmod 755 [sh\u6587\u4ef6]\n                # ./ [sh\u6587\u4ef6]\n            2),sh | bash [sh\u6587\u4ef6] \n    3,\u522b\u540d\n        (1),\u4e34\u65f6\u522b\u540d\n            1), # alias [\u5b9a\u4e49\u522b\u540d]=[\u547d\u4ee4] \n            2), unalias [\u5df2\u5b9a\u4e49\u522b\u540d]  //\u5220\u9664\u4e34\u65f6\u522b\u540d\n        (2),\u7528\u6237\u522b\u540d\u914d\u7f6e\u6587\u4ef6\n            # vim ~/.bashrc\n            # source ~/.bashrc  //\u8c03\u7528\u522b\u540d\u6587\u4ef6,\u4f7f\u76f4\u63a5\u751f\u6548\n        (3),\u67e5\u770b\u522b\u540d\n            # alias\n    4,\u591a\u547d\u4ee4\u6267\u884c\n        (1),\u683c\u5f0f [\u547d\u4ee41] ; [\u547d\u4ee42] ; ...\n            \u6ce8:\u591a\u4e2a\u547d\u4ee4\u6267\u884c\uff0c\u4e0d\u4f1a\u6253\u65ad\uff0c\u547d\u4ee4\u95f4\u53ef\u4ee5\u6ca1\u6709\u5fc5\u7136\u8054\u7cfb\n        (2),\u591a\u6761\u547d\u4ee4\u987a\u5e8f\u6267\u884c (\u903b\u8f91\u4e0e)  \n            \u683c\u5f0f: [\u547d\u4ee41] && [\u547d\u4ee42] && ...\n            \u6ce8 \uff1a\u4e00\u65e6\u67d0\u6761\u547d\u4ee4\u6267\u884c\u4e0d\u4e86\uff0c\u5c31\u4f1a\u4e2d\u65ad\n        (3),\u6216\u547d\u4ee4\u6267\u884c\n            \u683c\u5f0f: [\u547d\u4ee41]  || [\u547d\u4ee42] || [\u547d\u4ee43] || ...\n            \u6ce8:\u903b\u8f91\u6216,\u76f4\u5230\u627e\u5230\u4e00\u6761\u53ef\u6267\u884c\u7684\u547d\u4ee4,\u5c31\u6267\u884c\u4e00\u6b21\u4e14\u4e2d\u65ad\u3002\n    5,\u7ba1\u9053\u7b26(\u7c7b\u4f3c\u4e8e\u591a\u547d\u4ee4\u7684\u903b\u8f91\u4e0e)   \n        \u683c\u5f0f: [\u547d\u4ee41] | [\u547d\u4ee42] | ... \n        \u6ce8 :\u5c06\u547d\u4ee4\u76841\u7684\u7ed3\u679c\u4f5c\u4e3a\u547d\u4ee42\u7684\u53c2\u6570\u6765\u6267\u884c\n        (\u5982: # ls -ahl | more);\n************************************* \u5341\u4e00,\u547d\u4ee4\u65e5\u5fd7    *************************************\n    1,\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\n        (1),\u547d\u4ee4 > \u6587\u4ef6\n            \u6ce8:\u4ee5\u8986\u76d6\u7684\u65b9\u5f0f,\u5c06\u547d\u4ee4\u7684\u6b63\u786e\u8f93\u51fa\u5199\u5165\u81f3\u6307\u5b9a\u7684\u6587\u4ef6\u3002\n        (2),\u547d\u4ee4 >> \u6587\u4ef6\n            \u6ce8:\u4ee5\u8ffd\u52a0\u65b9\u5f0f,\u5c06\u547d\u4ee4\u7684\u6b63\u786e\u8f93\u51fa\u5199\u5165\u81f3\u6307\u5b9a\u7684\u6587\u4ef6\u3002\n    2,\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u91cd\u5b9a\u5411\n        (1),\u9519\u8bef\u547d\u4ee4 2> \u6587\u4ef6\n            \u6ce8:(\u540c\u4e0a(1),\u53ea\u662f\u5199\u5165\u7684\u662f\u62a5\u9519\u7684\u5185\u5bb9)\n        (2),\u9519\u8bef\u547d\u4ee4 2>> \u6587\u4ef6\n            \u6ce8:(\u540c\u4e0a(2),\u53ea\u662f\u5199\u5165\u7684\u662f\u62a5\u9519\u7684\u5185\u5bb9)\n    3,\u6b63\u786e\u8f93\u51fa\u548c\u9519\u8bef\u8f93\u51fa\u4fdd\u5b58\u81f3\u4e00\u4e2a\u6587\u4ef6\n        (1),\u547d\u4ee4 > \u6587\u4ef6 2>&1 (\u6216,\u547d\u4ee4 &> \u6587\u4ef6 )\n            \u6ce8:\u4ee5\u8986\u76d6\u7684,\u628a\u6b63\u786e\u548c\u9519\u8bef\u7684\u8f93\u51fa\u65b9\u5f0f\u5199\u5165\u540c\u4e00\u4e2a\u6587\u4ef6\n        (2),\u547d\u4ee4 >> \u6587\u4ef6 2>&1 (\u6216,\u547d\u4ee4 &>> \u6587\u4ef6)\n            \u6ce8:\u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\uff0c\u628a\u6b63\u786e\u548c\u9519\u8bef\u7684\u8f93\u51fa\u65b9\u5f0f\u5199\u5165\u540c\u4e00\u4e2a\u6587\u4ef6\n        (3),\u547d\u4ee4 >> \u6587\u4ef61 \u547d\u4ee4 2>> \u6587\u4ef62\n            \u6ce8:\u628a\u6b63\u786e\u7684\u8f93\u51fa\u5199\u5165\u6587\u4ef61,\u9519\u8bef\u7684\u4fe1\u606f\u5199\u5165\u6587\u4ef62\u3002\n            \n    II, \u5b9a\u5411\u8f93\u5165\n        1,\u7edf\u8ba1\u5355\u8bcd\u91cf\n            # wc [...\u8f93\u5165\u5355\u8bcd...,Ctr+d]\n            \u9009\u9879:\n                -c:\u7edf\u8ba1\u5b57\u8282\u6570\n                -w:\u7edf\u8ba1\u5355\u8bcd\u6570\n                -l:\u7edf\u8ba1\u884c\u6570\n                \n        2,\u7edf\u8ba1\u6807\u8bc6\u7b26\u95f4\u7684\u5b57\u7b26\n            \u683c\u5f0f: # wc << [\u6807\u8bc6\u7b26(\u8981\u67e5\u627e\u7684\u5b57\u7b26\u4e32)\n            \u6ce8:\u76f8\u5f53\u4e8e\u5728\u6863\u6848\u4e2d\u7edf\u8ba1\u88ab\u6807\u8bc6\u7684\u5b57\u7b26\u4e4b\u95f4\u7684\u7edf\u8ba1\u4fe1\u606f\n        (netstat -an | grep ESTABLISHED | wc -l //\u7edf\u8ba1\u5f53\u524d\u5728\u5728\u7ebf\u5ba2\u6237\u7aef)   \n        \n        \n************************************* \u5341\u4e8c:\u6587\u4ef6\u4e0b\u8f7d  *************************************\n    1,\u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u65b0\u5efa\u540d,\u4e0b\u8f7d\n        # wget -O [\u6587\u4ef6\u540d] "[\u4e0b\u8f7d\u8def\u5f84]" &>> [\u4e0b\u8f7d\u65e5\u5fd7\u6587\u672c.log] & (\u540e\u53f0\u8fd0\u884c)\n        \n************************************* \u5341\u4e09,\u901a\u914d\u7b26 *********************************\n    \u6ce8:linuc \u5339\u914d\u7684\u662f\u5b57\u7b26\u6570,\u800c\u4e0d\u662f\u5339\u914d\u7684\u6b21\u6570\n    1, ? \u5339\u914d\u4e00\u5b57\u7b26\n    2, * \u5339\u914d0-n\u5b57\u7b26\n    3, [-] \u8303\u56f4\u5339\u914d\n    4, [^0-9] \u4e0d\u5339\u914d\u8303\u56f4 \n\n    \n************************************* \u5341\u56db,\u4efb\u52a1\u5207\u6362 **************************************\n    1,\u67e5\u770b\u540e\u53f0\u6682\u505c\u7684\u4efb\u52a1\n        # jobs\n    2,\u5207\u6362\u4efb\u52a1\n        # bg %[\u4efb\u52a1\u53f7]\n    3,\u5c06\u540e\u53f0\u4e2d\u7684\u547d\u4ee4\u8c03\u81f3\u524d\u53f0\u7ee7\u7eed\u8fd0\u884c\n        # fg %[\u4efb\u52a1\u53f7]\n    4,\u6740\u6389\u540e\u53f0\u4efb\u52a1\n        # kill %[\u4efb\u52a1\u53f7]\n        \n************************************* \u5341\u4e94,\u7528\u6237 ******************************************\n  1\u767b\u5f55\n    (1),\u67e5\u770b\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\n        # w (# who)\n        1),user:\u767b\u5f55\u7684\u7528\u6237\u540d\n        2),TTY:\u767b\u5f55\u7684\u7ec8\u7aef tty1(\u672c\u673a),pts(\u8fdc\u7a0b\u7ec8\u7aef)\n        3),FROM:\u4ece\u54ea\u4e2aip\u5730\u5740\u767b\u5f55\u7684 \n        4),Login@:\u767b\u5f55\u65f6\u95f4\n        5), IDLE:\u7528\u6237\u767b\u5f55\u95f2\u7f6e\u7684\u65f6\u95f4\n        6),JCPU:\u548c\u8be5\u7ec8\u7aef\u8fde\u63a5\u7684\u6240\u6709\u8fdb\u7a0b\u7684\u6240\u6709\u5360\u7528\u7684\u65f6\u95f4\u3002\u8fd9\u4e2a\u65f6\u95f4\u5e76\u4e0d\u5305\u62ec\u8fc7\u53bb\u7684\u540e\u53f0\u7684\u8fdb\u7a0b\u7684\u65f6\u95f4(\u5c31\u662f\u5f00\u4e86\u5728\u540e\u53f0\u5f00\u8fdb\u7a0b\u540e\u9000\u51fa,\u4ece\u65b0\u767b\u5f55,\u5360\u7528\u65f6\u95f4\u7684\u4f30\u8ba1\u662f0)\u3002\n        7),PCPU:\u5f53\u524d\u8fdb\u7a0b\u6240\u5360\u7528\u7684\u65f6\u95f4\n        8),WHAT:\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u547d\u4ee4\n    2,\u6240\u6709\u7528\u6237\u767b\u5f55\u8bb0\u5f55\n        # last\n    3,\u67e5\u770b\u7528\u6237\u6700\u540e\u767b\u5f55\u8bb0\u5f55\n        # lastlog\n    4,\u8e22\u6389\u5f53\u524d\u6307\u5b9a\u7684\u767b\u5f55\u7528\u6237\n        # pkill -kill -t pts/1\n    5,\u9000\u51fa\u767b\u5f55\n        # logout \n    6,\u67e5\u770b\u5f53\u524d\u8ba1\u7b97\u673a\u6709\u54ea\u4e9b\u7528\u6237\n        # cat /etc/passwd\n    7,\u5220\u9664\u7528\u6237\n        # userdel [\u7528\u6237\u540d]\n\n\n************************************ \u5341\u516d,centos 7 \u6302\u8f7dntfs\u6587\u4ef6\u683c\u5f0f *********************\n    \n\n************************************ \u5341\u4e03\uff0c\u670d\u52a1\u8be6\u60c5 **************************************\n    1,\u670d\u52a1\u8be6\u60c5\u67e5\u770b\n        # systemctl status [\u670d\u52a1\u540d]\n    2,\u67e5\u770b\u6240\u6709\u670d\u52a1\n            # service -all --status-all\n          (# netstat)\n         3\uff0c\u67e5\u770b\u670d\u52a1\u5668\u7684\u4f4d\u7f6e\n            which mysql //\u67e5\u770bmysql\u7684\u542f\u52a8\u4f4d\u7f6e\n        4\uff0c\u67e5\u770b\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\n             # systemctl status *.service\n        5,\u67e5\u770b\u542f\u52a8\u5931\u8d25\u7684\u670d\u52a1\n            # systemctl --failed\n        \n************************************* \u5341\u516b\uff0c\u6587\u4ef6\u6743\u9650 *************************************\n        1\uff0c\u4fee\u6539\u6587\u4ef6\u7528\u6237\n               # chown [-R] \u8d26\u53f7\u540d\u79f0   \u6587\u4ef6\u6216\u76ee\u5f55\n        2\uff0c\u4fee\u6539\u7528\u6237\u7ec4\n                # chown [-R] \u8d26\u53f7\u540d\u79f0:\u7528\u6237\u7ec4\u540d\u79f0 \u6587\u4ef6\u6216\u76ee\u5f55\n\n************************************ \u5341\u4e5d\uff0c\u73af\u5883\u53d8\u91cf **************************************\n    [ root@CentOS ~]# vi /etc/profile\n    \u5728\u6587\u4ef6\u672b\u5c3e\u52a0\u4e0a\u5982\u4e0b\u4e24\u884c\u4ee3\u7801\n    PATH=/usr/local/webserver/php/bin:$PATH\n    export PATH\n\n    \u8981\u662f\u521a\u624d\u7684\u4fee\u6539\u9a6c\u4e0a\u751f\u6548\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\n    [root@CentOS ~]# source /etc/profile\n\n************************************* \u4e8c\u5341\uff0c(centos 7 firewalld)\u5f00\u673a\u542f\u52a8 ************************************\n    \u4e00\uff0c\u5f00\u673a\u542f\u52a8\u548c\u7981\u5f00\u673a\u542f\u52a8\n        # systemctl enable firewalld //\u9632\u706b\u5899\u5f00\u673a\u542f\u52a8\n        # sytemctl disable firewalld //\u505c\u6b62\u5e76\u7981\u6b62\u5f00\u673a\u542f\u52a8\n        # systemctl is-enabled postfix.service;echo $? //\u67e5\u770b\u670d\u52a1\u662f\u5426\u5f00\u673a\n        # systemctl list-unit-files|grep enabled // \u67e5\u770b\u5f00\u673a\u542f\u52a8\u5217\u8868\n   \u4e8c\uff0c\u67e5\u770b\u7aef\u53e3\n        # firewall-cmd --zone=public --list-ports \n   \u4e09\uff0c\u5f00\u653e\u7aef\u53e3\n        #  firewall-cmd --zone=public --add-port=80/tcp --permanent   //\u5f00\u653e80\u7aef\u53e3\n        # system restart firewalld.service//\u91cd\u542f\u9632\u706b\u5899\u751f\u6548\u914d\u7f6e\n\n************************************* \u4e8c\u5341\u4e00,rpm\u5305\u7ba1\u7406 *********************************\n    1\uff0c\u67e5\u770b\u5df2\u7ecf\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\n            # rpm -qa\n    2\uff0c\u67e5\u770b\u8f6f\u4ef6\u7684\u5b89\u88c5\u8def\u5f84\n            # whereis mysql //\u67e5\u770bmysql \u7684\u5b89\u88c5\u8def\u5f84\n    3,\u5378\u8f7d\n          # rpm -e [\u8f6f\u4ef6\u5305\u540d]\n\n************************************* \u9644\u4e00\uff1a\u5176\u5b83\u547d\u4ee4 *************************************\n  php [php\u6587\u4ef6\u540d]       \u8fd0\u884cphp\u6587\u4ef6\n \n    5,\u547d\u4ee4\u5386\u53f2\u8bb0\u5f55\n        (1),\u67e5\u770b\n            # history\n            (\u6216 # vim ~/.bash_history  //\u67e5\u770b\u81f3\u4e0a\u6b21\u7528\u6237\u9000\u51fa\u524d\u7684\u547d\u4ee4)\n        (2),\u5c06\u672c\u6b21\u547d\u4ee4\u5386\u53f2\u5408\u5e76\u5165.bash_history\u6587\u4ef6\n            # history -w\n        (3),\u6e05\u9664\u547d\u4ee4\n            # history -c //\u6e05\u9664 # history \u7684\u547d\u4ee4\n        (4),\u4fee\u6539history\u6587\u672c\u7684\u9650\u5b9a\u6761\u6570\u914d\u7f6e\n            vim /etc/profile\n            /HISTSIZE=\n        (5),\u6267\u884c\u7b2cn\u6761\u547d\u4ee4\n            # !n\n        (6),\u91cd\u590d\u6267\u884c\u4e0a\u4e00\u6761\u547d\u4ee4\n            !!\n        (7),\u91cd\u590d\u6267\u884c\u4ee5[\u5b57\u7b26\u4e32]\u5f00\u5934\u7684\u6700\u8fd1\u4e00\u6761\u547d\u4ee4\n            # ![\u5b57\u7b26\u4e32\n    6,\u91cd\u542f\u7f51\u4e0a\n        # service network restart\n    7,\u591a\u6309 Tab\u952e\u5ba1\u67e5\u547d\u4ee4\u7684\u6b63\u786e\u4ee5\u53ca\u8def\u5f84\u7684\u63d0\u793a\n    8,\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u8fde\u63a5\n        # netstat -an\n*********************************** \u9644\u4e8c:\u5e38\u7528\u5feb\u6377\u952e *************************************\n    1,ctrl + c      \u5f3a\u884c\u7ec8\u6b62\u5f53\u524d\u7684\u547d\u4ee4\n    2,ctrl + l      \u6e05\u5c4f\n    3,ctrl + a      \u5c06\u5149\u6807\u79fb\u5230\u547d\u4ee4\u884c\u5934\n    4,ctrl + e      \u5c06\u5149\u6807\u79fb\u5230\u547d\u4ee4\u884c\u5c3e\n    5,ctrl + u      \u5c06\u5149\u6807\u6240\u5728\u7684\u4f4d\u7f6e\u5220\u9664\u81f3\u884c\u884c\u9996\n    6,ctrl + z      \u628a\u547d\u4ee4\u653e\u5230\u540e\u53f0,\u5e76\u505c\u6b62\u8fd0\u884c\n    7,ctrl + r      \u5728\u5386\u53f2\u547d\u4ee4\u4e2d\u641c\u7d22\n')),(0,a.kt)("h2",{id:"2-\u5f00\u542f\u548c\u5173\u95ed\u7f51\u5361"},"2 \u5f00\u542f\u548c\u5173\u95ed\u7f51\u5361"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ifdown <\u7f51\u5361\u540d>\n$ ifup <\u7f51\u5361\u540d>\n")),(0,a.kt)("h2",{id:"3-\u67e5\u770b\u6587\u4ef6\u548c\u76ee\u5f55\u5728\u5927\u5c0f"},"3 \u67e5\u770b\u6587\u4ef6\u548c\u76ee\u5f55\u5728\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ du -h --max-depth=<level> <path>\n")),(0,a.kt)("h2",{id:"4-chattr\u6587\u4ef6\u9501\u5b9a"},"4 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Chattr"),"\u6587\u4ef6\u9501\u5b9a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ chattr -i <path> # <-- \u89e3\u9501\u6587\u4ef6\u6216\u76ee\u5f55\n$ chattr +i <path> # <-- \u9501\u5b9a\u6587\u4ef6\u6216\u76ee\u5f55 \n")))}d.isMDXComponent=!0}}]);