"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3927],{34135:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(23405),i=n(22374),l=n(85986),a="layoutWrapper_U3sX";var o=function(e){var t=e.src,n=e.alt,o=e.align,u=e.size,s=t.match("https?://[^\\.]+\\.[^\\.]+"),c=(Object.assign({},n?{alt:n}:{}),i.createElement(l.Z,(0,r.Z)({url:s?t:"//qiniu.wuchuheng.com"+t,alt:n||""},null!=u?{width:u}:{width:30})));return"center"===o?i.createElement("div",{className:a},c):c}},85986:function(e,t,n){var r=n(22374),i=n(44171);t.Z=function(e){var t=e.alt,n=e.url,l=e.width,a=(0,r.useState)(!1),o=a[0],u=a[1];return r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",justifyItems:"center"}},r.createElement("img",{src:n,onClick:function(){return u(!0)},alt:t,style:Object.assign({},null!=l?{width:l+"rem"}:{})}),o&&r.createElement(i.Z,{mainSrc:n,onCloseRequest:function(){return u(!1)}})))}},12158:function(e,t,n){n.d(t,{Z:function(){return P}});var r,i,l,a,o=n(23405),u=n(18482),s=n(22374),c=n(61411),d=n(50827),p=n(8129),m=c.ZP.pre(r||(r=(0,u.Z)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n"]))),h=c.ZP.div(i||(i=(0,u.Z)(["\n  display: table-row;\n"]))),f=c.ZP.span(l||(l=(0,u.Z)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]))),g=c.ZP.span(a||(a=(0,u.Z)(["\n  display: table-cell;\n"]))),v=function(e){var t=e.code;return s.createElement(d.ZP,(0,o.Z)({},d.lG,{theme:p.Z,code:t,language:"jsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,i=e.getLineProps,l=e.getTokenProps;return s.createElement(m,{className:t,style:n},r.map((function(e,t){return s.createElement(h,(0,o.Z)({key:t},i({line:e,key:t})),s.createElement(f,null,t+1),s.createElement(g,null,e.map((function(e,t){return s.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))}))))})))}))},k="\nimport 'package:flutter/material.dart';\n\nclass DailyCaloriesTitleView extends StatelessWidget {\n  const DailyCaloriesTitleView({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    double btnWidth = 200;\n    return SizedBox(\n      width: btnWidth,\n      child: ClipPath(\n        clipper: TrapezoidPath(),\n        child: Container(\n          width: btnWidth,\n          height: 77,\n          alignment: Alignment.center,\n          decoration: const BoxDecoration(color: Colors.red),\n          child: const Text(\n            'Clipper',\n            style: TextStyle(\n              fontSize: 26,\n              fontWeight: FontWeight.bold,\n              color: Colors.white,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n\nclass TrapezoidPath extends CustomClipper<Path> {\n  @override\n  Path getClip(Size size) {\n    double x = size.width;\n    double y = size.height;\n    var path = Path();\n    double skewing = 25;\n    path.moveTo(skewing, y); // step 1: \u9009\u62e9\u4e00\u4e2a\u70b9\n    path.lineTo(0, 0); // step 2: \u6dfb\u52a0\u5750\u6807(0, 0)\n    path.lineTo(x, 0); // step 3: \u6dfb\u52a0\u5750\u6807(x, 0)\n    path.lineTo(x - skewing, y); // step 4: \u6dfb\u7f6e\u7b2c4\u4e2a\u5750\u6807\u70b9\uff0c\u5f62\u6210\u56db\u8fb9\u5f62\n    path.close();\n\n    return path;\n  }\n\n  @override\n  bool shouldReclip(CustomClipper<Path> oldClipper) {\n    return true;\n  }\n}\n".trim(),P=function(){return s.createElement(v,{code:k})}},85545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(23405),i=n(54751),l=(n(22374),n(70224)),a=n(34135),o=(n(85986),n(12158),n(87286),n(12957),["components"]),u={title:"12 Flutter\u7684\u52a8\u753b\u5b9e\u73b0",date:"2023-01-12 20:02"},s=void 0,c={unversionedId:"NativeApp/19.1.FlutterAPP/Flutter\u7684\u52a8\u753b\u5b9e\u73b0",id:"NativeApp/19.1.FlutterAPP/Flutter\u7684\u52a8\u753b\u5b9e\u73b0",title:"12 Flutter\u7684\u52a8\u753b\u5b9e\u73b0",description:"1 \u4ec0\u4e48\u662fflutter\u52a8\u753b?\u539f\u7406\u662f\u4ec0\u4e48?",source:"@site/docs/19.NativeApp/19.1.FlutterAPP/12.Flutter\u7684\u52a8\u753b\u5b9e\u73b0.mdx",sourceDirName:"19.NativeApp/19.1.FlutterAPP",slug:"/NativeApp/19.1.FlutterAPP/Flutter\u7684\u52a8\u753b\u5b9e\u73b0",permalink:"/docs/NativeApp/19.1.FlutterAPP/Flutter\u7684\u52a8\u753b\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/19.NativeApp/19.1.FlutterAPP/12.Flutter\u7684\u52a8\u753b\u5b9e\u73b0.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"12 Flutter\u7684\u52a8\u753b\u5b9e\u73b0",date:"2023-01-12 20:02"},sidebar:"tutorialSidebar",previous:{title:"10 Flutter\u81ea\u5b9a\u4e49\u88c1\u526a",permalink:"/docs/NativeApp/19.1.FlutterAPP/Flutter\u88c1\u526a"},next:{title:"13 Flutter\u56fe\u7247\u7684\u4f7f\u7528",permalink:"/docs/NativeApp/19.1.FlutterAPP/Flutter\u56fe\u7247\u7684\u4f7f\u7528"}},d={},p=[{value:"1 \u4ec0\u4e48\u662fflutter\u52a8\u753b?\u539f\u7406\u662f\u4ec0\u4e48?",id:"1-\u4ec0\u4e48\u662fflutter\u52a8\u753b\u539f\u7406\u662f\u4ec0\u4e48",level:2},{value:"2 flutter\u7684\u52a8\u753b\u662f\u5982\u4f55\u5b9e\u73b0?",id:"2-flutter\u7684\u52a8\u753b\u662f\u5982\u4f55\u5b9e\u73b0",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u4ec0\u4e48\u662fflutter\u52a8\u753b\u539f\u7406\u662f\u4ec0\u4e48"},"1 \u4ec0\u4e48\u662fflutter\u52a8\u753b?\u539f\u7406\u662f\u4ec0\u4e48?"),(0,l.kt)("p",null,"\u52a8\u753b\u7684\u672c\u8d28\u5c31\u662f\u4e00\u4e2a\u65f6\u95f4\u5185\u5feb\u901f\u64ad\u653e\u4e0d\u540c\u7684\u753b\u9762\u3002\u800c\u7531\u4e8e\u4eba\u7684\u89c6\u7f51\u819c\u7684\u5bf9\u56fe\u50cf\u7684\u611f\u77e5\u80fd\u529b\u662f0.1s\u3002\u4e5f\u5c31\u662f\u8bf4\u5728\u53ea\u8981\u57281\u79d2\u5185\u5feb\u901f\u64ad\u653e10\u5f20\u4ee5\u4e0a\u7684\u56fe\u50cf\u3002\u90a3\u4e48\u4eba\u773c\u662f\u65e0\u6cd5\n\u611f\u77e5\u5230\u505c\u987f\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u4f55\u8fd9\u4e9b\u753b\u50cf\u662f\u8fde\u7eed\u7684\uff0c\u90a3\u4e48\u7531\u4e8e\u64ad\u653e\u7684\u901f\u5ea6\u8fc7\u5feb\uff0c\u5bf9\u4eba\u773c\u6765\u8bf4\uff0c\u65e0\u6cd5\u611f\u77e5\u5176\u4e2d\u7684\u5361\u987f\uff0c\u90a3\u770b\u8d77\u6765\u5c31\u662f\u4e00\u7ec4\u52a8\u753b\u4e86\u3002\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"flutter"),"\u7684\u52a8\u753b\u4e5f\n\u662f\u8fd9\u4e2a\u539f\u7406\u3002\u5c31\u662f\u5728\u5355\u4f4d\u7684\u65f6\u95f4\u5185\u4e0d\u505c\u6e32\u67d3\u753b\u9762\u3002\u4ece\u800c\u5b9e\u73b0\u52a8\u753b\u7684\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"2-flutter\u7684\u52a8\u753b\u662f\u5982\u4f55\u5b9e\u73b0"},"2 flutter\u7684\u52a8\u753b\u662f\u5982\u4f55\u5b9e\u73b0?"),(0,l.kt)("p",null,"\u524d\u9762\u8bf4\u4e86\uff0c\u52a8\u753b\u7684\u539f\u7406\u5c31\u662f\u5728\u77ed\u65f6\u95f4\u5185\u5feb\u901f\u64ad\u653e\u753b\u9762\u3002\u800c",(0,l.kt)("strong",{parentName:"p"},"flutter"),"\u7684\u52a8\u753b\u5b9e\u73b0\u4e5f\u662f\u5728\u5355\u4f4d\u65f6\u95f4\u5185\u5feb\u901f\u64ad\u653e\u753b\u9762\u5f62\u6210\u7684\u3002\u800c\u5728",(0,l.kt)("strong",{parentName:"p"},"flutter"),"\u7684\u6709\u4e2a\u52a8\u753b\u6784\u5efa\u5668(",(0,l.kt)("strong",{parentName:"p"},"AnimatedBuilder"),")\u3002\n\u5b83\u7684\u4f5c\u7528\u5c31\u662f\uff0c\u58f0\u660e\u597d\u7684\u52a8\u753b\u7684\u64ad\u653e\u65f6\u95f4\u3001\u64ad\u653e\u65b9\u5f0f\u548c\u63a7\u5236\u5668\u3002\u7136\u540e\u901a\u8fc7\u8fd9\u4e2a\u52a8\u753b\u63a7\u5236\u5668\u6765\u63a7\u5236\u52a8\u753b\u7684\u64ad\u653e\u548c\u5012\u653e\u3002\u7136\u540e",(0,l.kt)("strong",{parentName:"p"},"AnimatedBuilder"),"\u5c31\u4f1a\u4e0d\u505c\u53bb\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\u3002\n\u5e76\u4f20\u9012\u4e00\u4e2a\u4e0d\u505c\u53d8\u5316\u7684\u6570\u503c\uff0c\u800c\u8fd9\u4e2a\u503c\u5c31\u662f\u6bcf\u4e00\u5e40\u7684\u53d8\u91cf\u3002\u7136\u540e\u5b50\u7ec4\u4ef6\u6839\u636e\u8fd9\u4e2a\u53d8\u91cf\u53bb\u8fdb\u884c\u753b\u9762\u7684\u6539\u52a8\uff0c\u4ece\u800c\u5728\u77ed\u65f6\u95f4\u5185\u7531\u4e8e\u53d8\u91cf\u4e0d\u4e00\u6837\uff0c\u4ece\u800c\u5b50\u7ec4\u4ef6\u5c31\u4f1a\u7ed8\u5236\u4e0d\u4f1a\u7684\n\u753b\u9762\uff0c\u4ece\u800c\u5b9e\u73b0\u7684\u52a8\u753b\u7684\u6548\u679c\u3002\u4ee3\u7801\u5982\u4e0b: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="flutter\u7ebf\u6027\u52a8\u753b\u793a\u4f8b\u4ee3\u7801"',title:'"flutter\u7ebf\u6027\u52a8\u753b\u793a\u4f8b\u4ee3\u7801"'},"import 'package:flutter/material.dart';\n\nclass AnimationDemo extends StatefulWidget {\n  const AnimationDemo({Key? key}) : super(key: key);\n\n  @override\n  State<AnimationDemo> createState() => _AnimationDemoState();\n}\n\n/// step 1: \u4f7f\u7528 SingleTickerProviderStateMixin\nclass _AnimationDemoState extends State<AnimationDemo>\n    with SingleTickerProviderStateMixin {\n  double height = 300;\n  late AnimationController controller;\n  late Animation animation;\n  final double animateEnd = 1;\n\n  @override\n  void initState() {\n    super.initState();\n\n    /// step: 2 \u58f0\u660e\u52a8\u753b\u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u542f\u52a8\u52a8\u753b\u7684\u64ad\u653e\n    controller = AnimationController(\n      duration: const Duration(microseconds: 200000),\n      vsync: this,\n    );\n    animation = Tween<double>(\n      begin: 0,\n      end: animateEnd,\n    ).animate(\n      CurvedAnimation(\n        parent: controller,\n        curve: Curves.linear, // \u7ebf\u6027\u64ad\u653e\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    super.dispose();\n\n    /// step 5: \u7ec4\u4ef6\u9500\u6bc1\u65f6\uff0c\u4e5f\u8981\u8bb0\u5f97\u9500\u6bc1\u52a8\u753b\n    controller.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        AnimatedBuilder(\n          animation: animation,\n          builder: (BuildContext context, Widget? child) {\n            /// step: 3 \u8bbe\u7f6e\u5b50\u7ec4\u4ef6\u753b\u9762\n            return Container(\n              height: animation.value * height,\n              width: 50,\n              color: Colors.red,\n            );\n          },\n        ),\n\n        /// step 4: \u542f\u52a8\u64ad\u653e\n        TextButton(\n          onPressed: () {\n            if (controller.value == 0) {\n              controller.forward(from: 0); // \u6b63\u5411\u64ad\u653e\n            }\n            if (controller.value == 1) {\n              controller.animateBack(0); // \u53cd\u5411\u64ad\u653e\n            }\n          },\n          child: Text('Play'),\n        ),\n      ],\n    );\n  }\n}\n\n")),(0,l.kt)(a.Z,{src:"/images/2023-01-14%2020-36-02.2023-01-14%2020_36_22.gif",mdxType:"Img"}))}h.isMDXComponent=!0}}]);