(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{42011:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return t(9267)}])},36981:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Y:function(){return d}});var a=t(85893),s=t(67294),c=t(23657),l=t(91624),r=t(25510),i=t(17586);let{Title:o}=c.default,u="#5a67d8",d=e=>{let{title:n,description:t,placeholder:c,maxLength:d,values:f,handleDeleteIndex:h,handleCreateString:m,submitStatus:g,continuousStatusMessage:p}=e,[b,v]=(0,s.useState)("");return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(o,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:t}),(0,a.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,n)=>(0,a.jsx)(l.Z,{closable:!0,onClose:()=>{h(n)},color:u,children:e},"tag-".concat(e,"-").concat(n)))}),p&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(i.E,{status:p})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(r.nv,{fieldName:"string-input",value:b,onChange:e=>{let{value:n}=e;v(n)},onPressEnter:()=>{m(b.trim()),v("")},maxLength:d,placeholder:c,status:g})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},22067:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(85893),s=t(67294),c=t(59633),l=t(28700),r=t(17586),i=t(70869),o=t(4481);let u=e=>{let{apiPath:n,checked:t,reversed:u=!1,configPath:d="",disabled:f=!1,fieldName:h,label:m,tip:g,useSubmit:p,onChange:b}=e,[v,x]=(0,s.useState)(null),C=null,{setFieldInConfigState:N}=(0,s.useContext)(o.a)||{},j=()=>{x(null),clearTimeout(C),C=null},k=async e=>{if(p){x((0,l.kg)(l.Jk));let t=u?!e:e;await (0,i.Si)({apiPath:n,data:{value:t},onSuccess:()=>{N({fieldName:h,value:t,path:d}),x((0,l.kg)(l.zv))},onError:e=>{x((0,l.kg)(l.Un,"There was an error: ".concat(e)))}}),C=setTimeout(j,i.sI)}b&&b(e)},E=null!==v&&v.type===l.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[m&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:m})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(c.Z,{className:"switch field-".concat(h),loading:E,onChange:k,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,a.jsx)(r.E,{status:v})]}),(0,a.jsx)("p",{className:"field-tip",children:g})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},78021:function(e,n,t){"use strict";var a=t(78235);n.Z=a.Z},65765:function(e,n,t){"use strict";var a=t(61185),s=t(59408),c=a.ZP;c.Header=a.h4,c.Footer=a.$_,c.Content=a.VY,c.Sider=s.Z,c._InternalSiderContext=s.D,n.default=c},10227:function(e,n,t){"use strict";var a=t(79338);n.Z=a.Z},59633:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var a=t(87462),s=t(4942),c=t(72034),l=t(93967),r=t.n(l),i=t(97685),o=t(45987),u=t(67294),d=t(22720),f=t(77524),h=u.forwardRef(function(e,n){var t,a=e.prefixCls,c=void 0===a?"rc-switch":a,l=e.className,h=e.checked,m=e.defaultChecked,g=e.disabled,p=e.loadingIcon,b=e.checkedChildren,v=e.unCheckedChildren,x=e.onClick,C=e.onChange,N=e.onKeyDown,j=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:h,defaultValue:m}),E=(0,i.Z)(k,2),Z=E[0],y=E[1];function w(e,n){var t=Z;return g||(y(t=e),null==C||C(t,n)),t}var S=r()(c,l,(t={},(0,s.Z)(t,"".concat(c,"-checked"),Z),(0,s.Z)(t,"".concat(c,"-disabled"),g),t));return u.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":Z,disabled:g,className:S,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?w(!1,e):e.which===f.Z.RIGHT&&w(!0,e),null==N||N(e)},onClick:function(e){var n=w(!Z,e);null==x||x(n,e)}}),p,u.createElement("span",{className:"".concat(c,"-inner")},Z?b:v))});h.displayName="Switch";var m=t(17399),g=t(92933),p=t(23173),b=t(51964),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},x=u.forwardRef(function(e,n){var t=e.prefixCls,l=e.size,i=e.disabled,o=e.loading,d=e.className,f=v(e,["prefixCls","size","disabled","loading","className"]),x=u.useContext(m.E_),C=x.getPrefixCls,N=x.direction,j=u.useContext(p.Z),k=u.useContext(g.Z),E=(null!=i?i:k)||o,Z=C("switch",t),y=u.createElement("div",{className:"".concat(Z,"-handle")},o&&u.createElement(c.Z,{className:"".concat(Z,"-loading-icon")})),w=r()((0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(Z,"-small"),"small"===(l||j)),"".concat(Z,"-loading"),o),"".concat(Z,"-rtl"),"rtl"===N),void 0===d?"":d);return u.createElement(b.Z,{insertExtraNode:!0},u.createElement(h,(0,a.Z)({},f,{prefixCls:Z,className:w,disabled:E,ref:n,loadingIcon:y})))});x.__ANT_SWITCH=!0;var C=x},91624:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(4942),s=t(87462),c=t(97685),l=t(69156),r=t(93967),i=t.n(r),o=t(97485),u=t(67294),d=t(17399),f=t(22781),h=t(51964),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},p=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(f.E.join("|"),")$")),v=u.forwardRef(function(e,n){var t=e.prefixCls,r=e.className,f=e.style,m=e.children,v=e.icon,x=e.color,C=e.onClose,N=e.closeIcon,j=e.closable,k=g(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=u.useContext(d.E_),Z=E.getPrefixCls,y=E.direction,w=u.useState(!0),S=(0,c.Z)(w,2),O=S[0],P=S[1];u.useEffect(function(){"visible"in k&&P(k.visible)},[k.visible]);var _=function(){return!!x&&(p.test(x)||b.test(x))},U=(0,s.Z)({backgroundColor:x&&!_()?x:void 0},f),I=_(),D=Z("tag",t),T=i()(D,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(D,"-").concat(x),I),"".concat(D,"-has-color"),x&&!I),"".concat(D,"-hidden"),!O),"".concat(D,"-rtl"),"rtl"===y),r),M=function(e){e.stopPropagation(),null==C||C(e),!e.defaultPrevented&&("visible"in k||P(!1))},F="onClick"in k||m&&"a"===m.type,J=(0,o.Z)(k,["visible"]),A=v||null,L=A?u.createElement(u.Fragment,null,A,u.createElement("span",null,m)):m,R=u.createElement("span",(0,s.Z)({},J,{ref:n,className:T,style:U}),L,void 0!==j&&j?N?u.createElement("span",{className:"".concat(D,"-close-icon"),onClick:M},N):u.createElement(l.Z,{className:"".concat(D,"-close-icon"),onClick:M}):null);return F?u.createElement(h.Z,null,R):R});v.CheckableTag=function(e){var n=e.prefixCls,t=e.className,c=e.checked,l=e.onChange,r=e.onClick,o=m(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,u.useContext(d.E_).getPrefixCls)("tag",n),h=i()(f,(0,a.Z)((0,a.Z)({},"".concat(f,"-checkable"),!0),"".concat(f,"-checkable-checked"),c),t);return u.createElement("span",(0,s.Z)({},o,{className:h,onClick:function(e){null==l||l(!c),null==r||r(e)}}))};var x=v},9267:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(85893),s=t(23657),c=t(10227),l=t(78021),r=t(67294),i=t(25510),o=t(18063),u=t(22067),d=t(36981),f=t(28700),h=t(70869),m=t(4481),g=t(25889);function p(){var e;let{Title:n}=s.default,[t,g]=(0,r.useState)(null),[p,b]=(0,r.useState)(null),[v,x]=(0,r.useState)(null),{serverConfig:C,setFieldInConfigState:N}=(0,r.useContext)(m.a)||{},{chatDisabled:j,chatJoinMessagesEnabled:k,forbiddenUsernames:E,instanceDetails:Z,suggestedUsernames:y,chatEstablishedUserMode:w,chatSpamProtectionEnabled:S,chatSlurFilterEnabled:O}=C,{welcomeMessage:P}=Z,_=e=>{let{fieldName:n,value:a}=e;g({...t,[n]:a})};function U(){b(null)}function I(){(0,h.Si)({apiPath:h.CJ,data:{value:t.forbiddenUsernames},onSuccess:()=>{N({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),b((0,f.kg)(f.zv)),setTimeout(U,h.sI)},onError:e=>{b((0,f.kg)(f.Un,e)),setTimeout(U,h.sI)}})}function D(){x(null)}function T(){(0,h.Si)({apiPath:h.cf,data:{value:t.suggestedUsernames},onSuccess:()=>{N({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),x((0,f.kg)(f.zv)),setTimeout(D,h.sI)},onError:e=>{b((0,f.kg)(f.Un,e)),setTimeout(D,h.sI)}})}return((0,r.useEffect)(()=>{g({chatDisabled:j,chatJoinMessagesEnabled:k,forbiddenUsernames:E,suggestedUsernames:y,welcomeMessage:P,chatEstablishedUserMode:w,chatSpamProtectionEnabled:S,chatSlurFilterEnabled:O})},[C]),t)?(0,a.jsxs)("div",{className:"config-server-details-form",children:[(0,a.jsx)(n,{children:"Chat Settings"}),(0,a.jsxs)(c.Z,{gutter:[45,16],children:[(0,a.jsx)(l.Z,{md:24,lg:12,children:(0,a.jsxs)("div",{className:"form-module",children:[(0,a.jsx)(u.Z,{fieldName:"chatDisabled",...h.yj,checked:!t.chatDisabled,reversed:!0,onChange:function(e){_({fieldName:"chatDisabled",value:!e})}}),(0,a.jsx)(u.Z,{fieldName:"chatJoinMessagesEnabled",...h.kB,checked:t.chatJoinMessagesEnabled,onChange:function(e){_({fieldName:"chatJoinMessagesEnabled",value:e})}}),(0,a.jsx)(o.$7,{fieldName:"welcomeMessage",...h.IX,type:i.Sk,value:t.welcomeMessage,initialValue:P,onChange:_}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Y,{title:h.Dg.label,placeholder:h.Dg.placeholder,description:h.Dg.tip,values:t.forbiddenUsernames,handleDeleteIndex:function(e){t.forbiddenUsernames.splice(e,1),I()},handleCreateString:function(e){t.forbiddenUsernames.push(e),_({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),I()},submitStatus:p}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Y,{title:h.AN.label,placeholder:h.AN.placeholder,description:h.AN.tip,values:t.suggestedUsernames,handleDeleteIndex:function(e){t.suggestedUsernames.splice(e,1),T()},handleCreateString:function(e){t.suggestedUsernames.push(e),_({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),T()},submitStatus:v,continuousStatusMessage:0===(e=t.suggestedUsernames.length)?(0,f.kg)("success",h.AN.no_entries):e>0&&e<10?(0,f.kg)("warning",h.AN.min_not_reached):null})]})}),(0,a.jsx)(l.Z,{md:24,lg:12,children:(0,a.jsxs)("div",{className:"form-module",children:[(0,a.jsx)(u.Z,{fieldName:"chatSpamProtectionEnabled",...h.U5,checked:t.chatSpamProtectionEnabled,onChange:function(e){_({fieldName:"chatSpamProtectionEnabled",value:e})}}),(0,a.jsx)(u.Z,{fieldName:"chatEstablishedUserMode",...h.dj,checked:t.chatEstablishedUserMode,onChange:function(e){_({fieldName:"chatEstablishedUserMode",value:e})}}),(0,a.jsx)(u.Z,{fieldName:"chatSlurFilterEnabled",...h.T_,checked:t.chatSlurFilterEnabled,onChange:function(e){_({fieldName:"chatSlurFilterEnabled",value:e})}})]})})]})]}):null}p.getLayout=function(e){return(0,a.jsx)(g.l,{page:e})}},11163:function(e,n,t){e.exports=t(43079)},55945:function(e,n,t){"use strict";function a(e){return n=>{let t=(e?Math[e]:Math.trunc)(n);return 0===t?0:t}}t.d(n,{u:function(){return a}})},96707:function(e,n,t){"use strict";t.d(n,{H_:function(){return i},I7:function(){return o},dP:function(){return s},fH:function(){return r},jE:function(){return a},vh:function(){return l},yJ:function(){return c}});let a=6048e5,s=864e5,c=6e4,l=36e5,r=43200,i=1440,o=Symbol.for("constructDateFrom")},16393:function(e,n,t){"use strict";t.d(n,{L:function(){return s}});var a=t(96707);function s(e,n){return"function"==typeof e?e(n):e&&"object"==typeof e&&a.I7 in e?e[a.I7](n):e instanceof Date?new e.constructor(n):new Date(n)}},64077:function(e,n,t){"use strict";t.d(n,{_:function(){return s}});var a=t(46042);function s(e,n){return+(0,a.Q)(e)-+(0,a.Q)(n)}},94817:function(e,n,t){"use strict";t.d(n,{c:function(){return c}});var a=t(55945),s=t(64077);function c(e,n,t){let c=(0,s._)(e,n)/1e3;return(0,a.u)(null==t?void 0:t.roundingMethod)(c)}},46042:function(e,n,t){"use strict";t.d(n,{Q:function(){return s}});var a=t(16393);function s(e,n){return(0,a.L)(n||e,e)}}},function(e){e.O(0,[83,1287,3800,7786,443,9904,3657,6167,2502,5889,2888,9774,179],function(){return e(e.s=42011)}),_N_E=e.O()}]);