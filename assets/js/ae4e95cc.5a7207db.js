"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[6074],{70224:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(22374);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12957:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(22374),r=a(23082),l="tabItem_idCX";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},87286:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(23405),r=a(22374),l=a(23082),o=a(33108),i=a(95316),s=a(71255),u=a(86125),p="tabList_WZ8v",c="tabItem_x9j1";function m(e){var t,a,o=e.lazy,m=e.block,d=e.defaultValue,v=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),N=T.tabGroupChoices,S=T.setTabGroupChoices,M=(0,r.useState)(h),j=M[0],w=M[1],C=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=N[f];null!=E&&E!==j&&k.some((function(e){return e.value===E}))&&w(E)}var O=function(e){var t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==j&&(x(t),w(n),null!=f&&S(f,String(n)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=C.indexOf(e.currentTarget)+1;a=null!=(n=C[r])?n:C[0];break;case"ArrowLeft":var l,o=C.indexOf(e.currentTarget)-1;a=null!=(l=C[o])?l:C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},77966:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=a(23405),r=a(54751),l=(a(22374),a(70224)),o=a(87286),i=a(12957),s=["components"],u={title:"16.Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",tags:["Mapstruct","Java\u7c7b\u578b\u8f6c\u6362"],date:new Date("2022-03-03T00:00:00.000Z")},p=void 0,c={unversionedId:"Java/Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",id:"Java/Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",title:"16.Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",description:"\u7531\u4e8ejava\u662f\u5f3a\u7c7b\u578b\u663e\u793a\u58f0\u660e\u548c\u8d4b\u503c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u8fd9\u5bfc\u81f4Java\u4e2d\u4ece\u4e00\u4e2a\u7c7b\u578b\u8f6c\u6362\u6210\u53e6\u4e00\u4e2a\u7c7b\u578b\uff0c\u5c31\u662f\u628a\u4e00\u4e2a\u7c7b\u578b\u7684\u503c\u8d4b\u503c\u5230\u53e6\u4e00\u4e2a\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u53c2\u6570\u4e00\u4e2a\u53c2\u6570",source:"@site/docs/09.Java/16.Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6.mdx",sourceDirName:"09.Java",slug:"/Java/Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",permalink:"/docs/Java/Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",draft:!1,editUrl:"https://github.com/wuchuheng/wuchuheng.github.io/edit/master/docs/09.Java/16.Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6.mdx",tags:[{label:"Mapstruct",permalink:"/docs/tags/mapstruct"},{label:"Java\u7c7b\u578b\u8f6c\u6362",permalink:"/docs/tags/java\u7c7b\u578b\u8f6c\u6362"}],version:"current",sidebarPosition:16,frontMatter:{title:"16.Mapstruct\u7c7b\u578b\u8f6c\u6362\u5904\u7406\u6846\u67b6",tags:["Mapstruct","Java\u7c7b\u578b\u8f6c\u6362"],date:"2022-03-03T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"15 jpa\u65e5\u5fd7\u663e\u793asql\u548c\u5b83\u7684\u53c2\u6570(\u8f6c\u8f7d)",permalink:"/docs/Java/jpa\u65e5\u5fd7\u663e\u793asql\u548c\u5b83\u7684\u53c2\u6570"},next:{title:"17.JPA\u53cc\u5411\u6b7b\u5faa\u73af\u89e3\u51b3\u65b9\u6cd5",permalink:"/docs/Java/JPA\u53cc\u5411\u6b7b\u5faa\u73af\u89e3\u51b3\u65b9\u6cd5"}},m={},d=[{value:"1 \u76f4\u63a5\u8f6c\u6362",id:"1-\u76f4\u63a5\u8f6c\u6362",level:2},{value:"2 \u81ea\u5b9a\u4e49\u8f6c\u6362\u5c5e\u6027",id:"2-\u81ea\u5b9a\u4e49\u8f6c\u6362\u5c5e\u6027",level:2},{value:"2.1 List&lt;String&gt;\u8f6cList&lt;&gt;\u590d\u5408\u5bf9\u8c61",id:"21-liststring\u8f6clist\u590d\u5408\u5bf9\u8c61",level:3},{value:"3 \u9ed8\u8ba4\u503c",id:"3-\u9ed8\u8ba4\u503c",level:2},{value:"3.1 <code>constant</code>\u8bbe\u5b9a<code>target</code>\u5c5e\u6027\u9ed8\u8ba4\u503c",id:"31-constant\u8bbe\u5b9atarget\u5c5e\u6027\u9ed8\u8ba4\u503c",level:3}],v={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"java"),"\u662f\u5f3a\u7c7b\u578b\u663e\u793a\u58f0\u660e\u548c\u8d4b\u503c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u8fd9\u5bfc\u81f4",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e2d\u4ece\u4e00\u4e2a\u7c7b\u578b\u8f6c\u6362\u6210\u53e6\u4e00\u4e2a\u7c7b\u578b\uff0c\u5c31\u662f\u628a\u4e00\u4e2a\u7c7b\u578b\u7684\u503c\u8d4b\u503c\u5230\u53e6\u4e00\u4e2a\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u53c2\u6570\u4e00\u4e2a\u53c2\u6570\n\u53bb\u8d4b\u503c\uff0c\u8fd9\u8ba9\u7f16\u7801\u7684\u5de5\u4f5c\u589e\u52a0\u4ee5\u53ca\u4e00\u70b9\u90fd\u4e0d\u9177\u3002\u6240\u4ee5\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"mapstruct"),"\u5c31\u662f\u89e3\u51b32\u4e2a\u7c7b\u578b\u4e4b\u95f4\u7684\u8f6c\u6362\u80fd\u76f4\u63a5\u8f6c\u6362\u7684\u8fd9\u4e48\u4e00\u79cd\u65b9\u6848\u3002\u5176\u5b9e\u4f7f\u7528\u65b9\u5f0f\u662f\u901a\u8fc7\u58f0\u660e\u4e00\u4e2a\u63a5\u53e3\u548c\u63a5\u53e3\u7684\u65b9\u6cd5\n\u58f0\u660e\uff0c\u7136\u540e\u4f7f\u7528\u8005\u5c31\u53ef\u80fd\u901a\u8fc7\u8fd9\u4e9b\u58f0\u660e\u7684\u63a5\u53e3\u65b9\u6cd5\u76f4\u63a5\u8f6c\u6362\u7c7b\u578b\u4e86. \u539f\u7406\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"mapstruct"),"\u901a\u8fc7\u63a5\u53e3\u4ee5\u53ca\u6ce8\u89e3\u7684\u65b9\u5f0f\uff0c\u81ea\u52a8\u751f\u6210\u8f6c\u6362\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u7c7b\u578b\u4e0e\u7c7b\u578b\u4e4b\u95f4\u7684\u8f6c\u6362\uff0c\n\u4ece\u800c\u6765\u51cf\u8f7b\u5f00\u53d1\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\u3002\u5982:"),(0,l.kt)("h2",{id:"1-\u76f4\u63a5\u8f6c\u6362"},"1 \u76f4\u63a5\u8f6c\u6362"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"area",label:"1 \u539f\u7c7b\u578b",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Area"',title:'"Area"'},"@Data\npublic class Area {\n    private String code;\n\n    private String name;\n}\n"))),(0,l.kt)(i.Z,{value:"areaResponse",label:"2 \u76ee\u6807\u7c7b\u578b",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AreaResponse"',title:'"AreaResponse"'},"@Data\npublic class AreaResponse {\n    private String code;\n\n    private String name;\n}\n"))),(0,l.kt)(i.Z,{value:"apple",label:"3 \u58f0\u660e\u8f6c\u6362\u5173\u7cfb",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="DivisionMapper"',title:'"DivisionMapper"'},'@Mapper(componentModel = "spring")\npublic interface DivisionMapper {\n  DivisionMapper INSTANCE = Mappers.getMapper(DivisionMapper.class);\n\n  AreaResponse areaToAreaResponse(Area area); // <-- Area \u7c7b\u578b\u8f6c\u6362\u4e3a AreaResponse\n}\n'))),(0,l.kt)(i.Z,{value:"usage",label:"4 Area\u8f6c\u6362\u4e3aAreaResponse",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final var area = new Area();\n// AreaResponse <-- Area\nAreaResponse areaResponse = divisionMapper.areaToAreaResponse(area);\n")))),(0,l.kt)("h2",{id:"2-\u81ea\u5b9a\u4e49\u8f6c\u6362\u5c5e\u6027"},"2 \u81ea\u5b9a\u4e49\u8f6c\u6362\u5c5e\u6027"),(0,l.kt)("p",null,"\u6709\u4e9b\u5c5e\u6027\u9700\u8981\u81ea\u5b9a\u4e49\u8f6c\u6362\uff0c\u8fd9\u65f6\u6ce8\u89e3\u5df2\u7ecf\u4e0d\u80fd\u6ee1\u8db3\u4e86\uff0c\u8f6c\u6362\u7684\u60c5\u51b5\u4e86\uff0c\u9700\u8981\u4e3a\u8fd9\u90e8\u5206\u7684\u8f6c\u6362\u5199\u8f6c\u6362\u903b\u8f91."),(0,l.kt)("h3",{id:"21-liststring\u8f6clist\u590d\u5408\u5bf9\u8c61"},"2.1 List","<","String",">","\u8f6cList","<",">","\u590d\u5408\u5bf9\u8c61"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"qualifiedByName"),"\u6ce8\u89e3\u6765\u58f0\u660e\u5c5e\u6027\u7684\u8f6c\u6362\u65b9\u6cd5\u540d"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"createStoreRequest",label:"1 \u539f\u7c7b\u578b",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CreateStoreRequest"',title:'"CreateStoreRequest"'},"@Data\n@Builder\npublic class CreateStoreRequest {\n    private String name;\n\n    private List<String> banners; // \u8fd9\u91cc\u4e00\u4e2a\u5355\u4e00\u6570\u7ec4\u7c7b\u578b\n  }\n"))),(0,l.kt)(i.Z,{value:"areaResponse",label:"2 \u76ee\u6807\u7c7b\u578b",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Store"',title:'"Store"'},"public class Store extends BaseEntity{\n    private String name;\n\n    private List<StoreBanner> banners;\n}\n"))),(0,l.kt)(i.Z,{value:"apple",label:"3 banners\u7684\u5143\u7d20\u7c7b\u578b",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="StoreBanner"',title:'"StoreBanner"'},"@Data\n@NoArgsConstructor\n@AllArgsConstructor\n@Entity\n@SuperBuilder\npublic class StoreBanner extends BaseEntity{\n    private Long id;\n\n    String imgKey;\n}\n"))),(0,l.kt)(i.Z,{value:"declare",label:"4 \u58f0\u660e\u8f6c\u6362\u5173\u7cfb",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'  // 1 \u628aCreateStoreRequest \u8f6c\u6362\u4e3a Store\n  @Mappings({\n      // 2 \u58f0\u660ebanners\u7684\u8f6c\u6362\u5904\u7406\u4e1a\u52a1\u540d\n      @Mapping(source = "banners", target = "banners", qualifiedByName = "fromMapToBanners")\n  })\n  Store createRequestToStore(CreateStoreRequest request);\n\n  // 3 \u6807\u8bb0\u8fd9\u91cc\u4e3a\u5904\u7406banners\u5c5e\u6027\u4e1a\u52a1\u7684\u5730\u65b9\n  @Named("fromMapToBanners")\n  default List<StoreBanner> fromMapToBanners(List<String> bannerKeys) {\n      var storeBanners = new ArrayList<StoreBanner>();\n      bannerKeys.stream().forEach(el -> {\n          var storeBannerItem = StoreBanner.builder()\n              .imgKey(el)\n              .build();\n          storeBanners.add(storeBannerItem);\n      });\n\n      return storeBanners;\n  }\n'))),(0,l.kt)(i.Z,{value:"usage",label:"5 \u4f7f\u7528",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"  final var request = new CreateStoreRequest();\n  final var storeDto = storeMapper.createRequestToStore(request);\n")))),(0,l.kt)("h2",{id:"3-\u9ed8\u8ba4\u503c"},"3 \u9ed8\u8ba4\u503c"),(0,l.kt)("h3",{id:"31-constant\u8bbe\u5b9atarget\u5c5e\u6027\u9ed8\u8ba4\u503c"},"3.1 ",(0,l.kt)("inlineCode",{parentName:"h3"},"constant"),"\u8bbe\u5b9a",(0,l.kt)("inlineCode",{parentName:"h3"},"target"),"\u5c5e\u6027\u9ed8\u8ba4\u503c"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u5c5e\u6027\u4e0d\u5b58\u5728\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"target"),"\u5c5e\u6027\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"constant"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"target"),"\u8bbe\u5b9a\u9ed8\u8ba4\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    @Mappings({\n        @Mapping(target = "isEnable", constant = "true")  // <-- \u8bbe\u5b9atarget\u7684isEnable\u7684\u53c2\u6570\u4e3atrue\n    })\n    Store createRequestToStore(CreateStoreRequest request);\n')))}f.isMDXComponent=!0}}]);