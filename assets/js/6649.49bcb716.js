"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[6649],{79229:function(e,t,n){n.d(t,{Ps:function(){return z}});var i=n(24387);function r(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const s=/\r\n|[\n\r]/g;function o(e,t){let n=0,i=1;for(const o of e.body.matchAll(s)){if("number"==typeof o.index||r(!1),o.index>=t)break;n=o.index+o[0].length,i+=1}return{line:i,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,h=t.column+a,l=`${e.name}:${o}:${h}\n`,u=i.split(/\r\n|[\n\r]/g),p=u[r];if(p.length>120){const e=Math.floor(h/80),t=h%80,n=[];for(let i=0;i<p.length;i+=80)n.push(p.slice(i,i+80));return l+c([[`${o} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return l+c([[o-1+" |",u[r-1]],[`${o} |`,p],["|","^".padStart(h)],[`${o+1} |`,u[r+1]]])}function c(e){const t=e.filter((([e,t])=>void 0!==t)),n=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(n)+(t?" "+t:""))).join("\n")}class h extends Error{constructor(e,...t){var n,i,r;const{nodes:s,source:a,positions:c,path:u,originalError:p,extensions:d}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=u?u:void 0,this.originalError=null!=p?p:void 0,this.nodes=l(Array.isArray(s)?s:s?[s]:void 0);const f=l(null===(n=this.nodes)||void 0===n?void 0:n.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!=a?a:null==f||null===(i=f[0])||void 0===i?void 0:i.source,this.positions=null!=c?c:null==f?void 0:f.map((e=>e.start)),this.locations=c&&a?c.map((e=>o(a,e))):null==f?void 0:f.map((e=>o(e.source,e.start)));const E="object"==typeof(m=null==p?void 0:p.extensions)&&null!==m?null==p?void 0:p.extensions:void 0;var m;this.extensions=null!==(r=null!=d?d:E)&&void 0!==r?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=p&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+a(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function l(e){return void 0===e||0===e.length?void 0:e}function u(e,t,n){return new h(`Syntax Error: ${n}`,{source:e,positions:[t]})}var p=n(17048);let d;!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(d||(d={}));var f=n(22229),E=n(52073),m=n(71709);let N;!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(N||(N={}));class T{constructor(e){const t=new p.WU(N.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==N.EOF)do{if(e.next)e=e.next;else{const t=D(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===N.COMMENT);return e}}function v(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function k(e,t){return _(e.charCodeAt(t))&&x(e.charCodeAt(t+1))}function _(e){return e>=55296&&e<=56319}function x(e){return e>=56320&&e<=57343}function A(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return N.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function I(e,t,n,i,r){const s=e.line,o=1+n-e.lineStart;return new p.WU(t,n,i,s,o,r)}function D(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const t=n.charCodeAt(r);switch(t){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:10===n.charCodeAt(r+1)?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return y(e,r);case 33:return I(e,N.BANG,r,r+1);case 36:return I(e,N.DOLLAR,r,r+1);case 38:return I(e,N.AMP,r,r+1);case 40:return I(e,N.PAREN_L,r,r+1);case 41:return I(e,N.PAREN_R,r,r+1);case 46:if(46===n.charCodeAt(r+1)&&46===n.charCodeAt(r+2))return I(e,N.SPREAD,r,r+3);break;case 58:return I(e,N.COLON,r,r+1);case 61:return I(e,N.EQUALS,r,r+1);case 64:return I(e,N.AT,r,r+1);case 91:return I(e,N.BRACKET_L,r,r+1);case 93:return I(e,N.BRACKET_R,r,r+1);case 123:return I(e,N.BRACE_L,r,r+1);case 124:return I(e,N.PIPE,r,r+1);case 125:return I(e,N.BRACE_R,r,r+1);case 34:return 34===n.charCodeAt(r+1)&&34===n.charCodeAt(r+2)?F(e,r):C(e,r)}if((0,m.X1)(t)||45===t)return O(e,r,t);if((0,m.LQ)(t))return M(e,r);throw u(e.source,r,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":v(t)||k(n,r)?`Unexpected character: ${A(e,r)}.`:`Invalid character: ${A(e,r)}.`)}return I(e,N.EOF,i,i)}function y(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(10===e||13===e)break;if(v(e))++r;else{if(!k(n,r))break;r+=2}}return I(e,N.COMMENT,t,r,n.slice(t+1,r))}function O(e,t,n){const i=e.source.body;let r=t,s=n,o=!1;if(45===s&&(s=i.charCodeAt(++r)),48===s){if(s=i.charCodeAt(++r),(0,m.X1)(s))throw u(e.source,r,`Invalid number, unexpected digit after 0: ${A(e,r)}.`)}else r=g(e,r,s),s=i.charCodeAt(r);if(46===s&&(o=!0,s=i.charCodeAt(++r),r=g(e,r,s),s=i.charCodeAt(r)),69!==s&&101!==s||(o=!0,s=i.charCodeAt(++r),43!==s&&45!==s||(s=i.charCodeAt(++r)),r=g(e,r,s),s=i.charCodeAt(r)),46===s||(0,m.LQ)(s))throw u(e.source,r,`Invalid number, expected digit but got: ${A(e,r)}.`);return I(e,o?N.FLOAT:N.INT,t,r,i.slice(t,r))}function g(e,t,n){if(!(0,m.X1)(n))throw u(e.source,t,`Invalid number, expected digit but got: ${A(e,t)}.`);const i=e.source.body;let r=t+1;for(;(0,m.X1)(i.charCodeAt(r));)++r;return r}function C(e,t){const n=e.source.body,i=n.length;let r=t+1,s=r,o="";for(;r<i;){const i=n.charCodeAt(r);if(34===i)return o+=n.slice(s,r),I(e,N.STRING,t,r+1,o);if(92!==i){if(10===i||13===i)break;if(v(i))++r;else{if(!k(n,r))throw u(e.source,r,`Invalid character within String: ${A(e,r)}.`);r+=2}}else{o+=n.slice(s,r);const t=117===n.charCodeAt(r+1)?123===n.charCodeAt(r+2)?R(e,r):S(e,r):w(e,r);o+=t.value,r+=t.size,s=r}}throw u(e.source,r,"Unterminated string.")}function R(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const e=n.charCodeAt(t+r++);if(125===e){if(r<5||!v(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|b(e),i<0)break}throw u(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function S(e,t){const n=e.source.body,i=L(n,t+2);if(v(i))return{value:String.fromCodePoint(i),size:6};if(_(i)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=L(n,t+8);if(x(e))return{value:String.fromCodePoint(i,e),size:12}}throw u(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function L(e,t){return b(e.charCodeAt(t))<<12|b(e.charCodeAt(t+1))<<8|b(e.charCodeAt(t+2))<<4|b(e.charCodeAt(t+3))}function b(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function w(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw u(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function F(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,s=t+3,o=s,a="";const c=[];for(;s<i;){const i=n.charCodeAt(s);if(34===i&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){a+=n.slice(o,s),c.push(a);const i=I(e,N.BLOCK_STRING,t,s+3,(0,E.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=r,i}if(92!==i||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==i&&13!==i)if(v(i))++s;else{if(!k(n,s))throw u(e.source,s,`Invalid character within String: ${A(e,s)}.`);s+=2}else a+=n.slice(o,s),c.push(a),13===i&&10===n.charCodeAt(s+1)?s+=2:++s,a="",o=s,r=s;else a+=n.slice(o,s),o=s+1,s+=4}throw u(e.source,s,"Unterminated string.")}function M(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(!(0,m.HQ)(e))break;++r}return I(e,N.NAME,t,r,n.slice(t,r))}var P=n(80202);class U{constructor(e,t){const n=(0,P.T)(e)?e:new P.H(e);this._lexer=new T(n),this._options=t}parseName(){const e=this.expectToken(N.NAME);return this.node(e,{kind:f.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:f.h.DOCUMENT,definitions:this.many(N.SOF,this.parseDefinition,N.EOF)})}parseDefinition(){if(this.peek(N.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===N.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw u(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(N.BRACE_L))return this.node(e,{kind:f.h.OPERATION_DEFINITION,operation:p.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(N.NAME)&&(n=this.parseName()),this.node(e,{kind:f.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(N.NAME);switch(e.value){case"query":return p.ku.QUERY;case"mutation":return p.ku.MUTATION;case"subscription":return p.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(N.PAREN_L,this.parseVariableDefinition,N.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:f.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(N.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(N.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(N.DOLLAR),this.node(e,{kind:f.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:f.h.SELECTION_SET,selections:this.many(N.BRACE_L,this.parseSelection,N.BRACE_R)})}parseSelection(){return this.peek(N.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,i;return this.expectOptionalToken(N.COLON)?(n=t,i=this.parseName()):i=t,this.node(e,{kind:f.h.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(N.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(N.PAREN_L,t,N.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,n=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:f.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(N.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(N.NAME)?this.node(e,{kind:f.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:f.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var e;const t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacyFragmentVariables)?this.node(t,{kind:f.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:f.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case N.BRACKET_L:return this.parseList(e);case N.BRACE_L:return this.parseObject(e);case N.INT:return this._lexer.advance(),this.node(t,{kind:f.h.INT,value:t.value});case N.FLOAT:return this._lexer.advance(),this.node(t,{kind:f.h.FLOAT,value:t.value});case N.STRING:case N.BLOCK_STRING:return this.parseStringLiteral();case N.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:f.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:f.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:f.h.NULL});default:return this.node(t,{kind:f.h.ENUM,value:t.value})}case N.DOLLAR:if(e){if(this.expectToken(N.DOLLAR),this._lexer.token.kind===N.NAME){const e=this._lexer.token.value;throw u(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:f.h.STRING,value:e.value,block:e.kind===N.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:f.h.LIST,values:this.any(N.BRACKET_L,(()=>this.parseValueLiteral(e)),N.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:f.h.OBJECT,fields:this.any(N.BRACE_L,(()=>this.parseObjectField(e)),N.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:f.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(N.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(N.AT),this.node(t,{kind:f.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(N.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(N.BRACKET_R),t=this.node(e,{kind:f.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(N.BANG)?this.node(e,{kind:f.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:f.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(N.STRING)||this.peek(N.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);return this.node(e,{kind:f.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(N.COLON);const n=this.parseNamedType();return this.node(e,{kind:f.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:f.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:f.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(N.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseFieldDefinition,N.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(N.COLON);const r=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:f.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:s})}parseArgumentDefs(){return this.optionalMany(N.PAREN_L,this.parseInputValueDef,N.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(N.COLON);const i=this.parseTypeReference();let r;this.expectOptionalToken(N.EQUALS)&&(r=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:f.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:f.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:f.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(N.EQUALS)?this.delimitedMany(N.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:f.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r})}parseEnumValuesDefinition(){return this.optionalMany(N.BRACE_L,this.parseEnumValueDefinition,N.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:f.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw u(this._lexer.source,this._lexer.token.start,`${B(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:f.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseInputValueDef,N.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===N.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:f.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:f.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:f.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:f.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(N.AT);const n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:f.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:s})}parseDirectiveLocations(){return this.delimitedMany(N.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(d,t.value))return t;throw this.unexpected(e)}node(e,t){var n;return!0!==(null===(n=this._options)||void 0===n?void 0:n.noLocation)&&(t.loc=new p.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw u(this._lexer.source,t.start,`Expected ${V(e)}, found ${B(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this._lexer.advance(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==N.NAME||t.value!==e)throw u(this._lexer.source,t.start,`Expected "${e}", found ${B(t)}.`);this._lexer.advance()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===N.NAME&&t.value===e&&(this._lexer.advance(),!0)}unexpected(e){const t=null!=e?e:this._lexer.token;return u(this._lexer.source,t.start,`Unexpected ${B(t)}.`)}any(e,t,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(t.call(this));return i}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}}function B(e){const t=e.value;return V(e.kind)+(null!=t?` "${t}"`:"")}function V(e){return function(e){return e===N.BANG||e===N.DOLLAR||e===N.AMP||e===N.PAREN_L||e===N.PAREN_R||e===N.SPREAD||e===N.COLON||e===N.EQUALS||e===N.AT||e===N.BRACKET_L||e===N.BRACKET_R||e===N.BRACE_L||e===N.PIPE||e===N.BRACE_R}(e)?`"${e}"`:e}var K=new Map,G=new Map,$=!0,j=!1;function Y(e){return e.replace(/[\s,]+/g," ").trim()}function Q(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=Y((o=e.loc).source.body.substring(o.start,o.end)),s=G.get(i);s&&!s.has(r)?$&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||G.set(i,s=new Set),s.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e);var o})),(0,i.pi)((0,i.pi)({},e),{definitions:n})}function q(e){var t=Y(e);if(!K.has(t)){var n=function(e,t){return new U(e,t).parseDocument()}(e,{experimentalFragmentVariables:j,allowLegacyFragmentVariables:j});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");K.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"==typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(Q(n)))}return K.get(t)}function z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),q(i)}var J,X=z,H=function(){K.clear(),G.clear()},W=function(){$=!1},Z=function(){j=!0},ee=function(){j=!1};(J=z||(z={})).gql=X,J.resetCaches=H,J.disableFragmentWarnings=W,J.enableExperimentalFragmentVariables=Z,J.disableExperimentalFragmentVariables=ee,z.default=z},76324:function(e,t,n){n.d(t,{D:function(){return f}});var i,r=n(24387),s=n(22374),o=n(79098),a=n(98094),c=n(82851);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(i||(i={}));var h=new Map;function l(e){var t;switch(e){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}function u(e,t){var n=function(e){var t,n,r=h.get(e);if(r)return r;__DEV__?(0,c.kG)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,c.kG)(!!e&&!!e.kind,30);for(var s=[],o=[],a=[],l=[],u=0,p=e.definitions;u<p.length;u++){var d=p[u];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":o.push(d);break;case"mutation":a.push(d);break;case"subscription":l.push(d)}}else s.push(d)}__DEV__?(0,c.kG)(!s.length||o.length||a.length||l.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,c.kG)(!s.length||o.length||a.length||l.length,31),__DEV__?(0,c.kG)(o.length+a.length+l.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(l.length," ")+"subscriptions and ".concat(a.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,c.kG)(o.length+a.length+l.length<=1,32),n=o.length?i.Query:i.Mutation,o.length||a.length||(n=i.Subscription);var f=o.length?o:a.length?a:l;__DEV__?(0,c.kG)(1===f.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,c.kG)(1===f.length,33);var E=f[0];t=E.variableDefinitions||[];var m={name:E.name&&"Name"===E.name.kind?E.name.value:"data",type:n,variables:t};return h.set(e,m),m}(e),r=l(t),s=l(n.type);__DEV__?(0,c.kG)(n.type===t,"Running a ".concat(r," requires a graphql ")+"".concat(r,", but a ").concat(s," was used instead.")):(0,c.kG)(n.type===t,34)}var p=n(62005),d=n(63965);function f(e,t){var n=function(e){var t=(0,s.useContext)((0,d.K)()),n=e||t.client;return __DEV__?(0,c.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,c.kG)(!!n,29),n}(null==t?void 0:t.client);u(e,i.Mutation);var h=(0,s.useState)({called:!1,loading:!1,client:n}),l=h[0],f=h[1],E=(0,s.useRef)({result:l,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(E.current,{client:n,options:t,mutation:e});var m=(0,s.useCallback)((function(e){void 0===e&&(e={});var t=E.current,n=t.client,i=t.options,s=t.mutation,c=(0,r.pi)((0,r.pi)({},i),{mutation:s});E.current.result.loading||c.ignoreResults||f(E.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:n});var h=++E.current.mutationId,l=(0,o.J)(c,e);return n.mutate(l).then((function(t){var i,r,s,o=t.data,c=t.errors,u=c&&c.length>0?new p.c({graphQLErrors:c}):void 0;if(h===E.current.mutationId&&!l.ignoreResults){var d={called:!0,loading:!1,data:o,error:u,client:n};E.current.isMounted&&!(0,a.D)(E.current.result,d)&&f(E.current.result=d)}return null===(r=null===(i=E.current.options)||void 0===i?void 0:i.onCompleted)||void 0===r||r.call(i,t.data),null===(s=e.onCompleted)||void 0===s||s.call(e,t.data),t})).catch((function(t){var i,r,s,o;if(h===E.current.mutationId&&E.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:n};(0,a.D)(E.current.result,c)||f(E.current.result=c)}if((null===(i=E.current.options)||void 0===i?void 0:i.onError)||l.onError)return null===(s=null===(r=E.current.options)||void 0===r?void 0:r.onError)||void 0===s||s.call(r,t),null===(o=e.onError)||void 0===o||o.call(e,t),{data:void 0,errors:t};throw t}))}),[]),N=(0,s.useCallback)((function(){f({called:!1,loading:!1,client:n})}),[]);return(0,s.useEffect)((function(){return E.current.isMounted=!0,function(){E.current.isMounted=!1}}),[]),[m,(0,r.pi)({reset:N},l)]}}}]);