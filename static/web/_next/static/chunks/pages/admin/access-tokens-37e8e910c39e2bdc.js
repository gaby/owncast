(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882,3403,1382],{48689:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1413),o=n(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=n(42135),s=function(e,t){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};s.displayName="DeleteOutlined";var i=o.forwardRef(s)},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(4942),o=n(87462),c=n(71002),a=n(94184),s=n.n(a),i=n(67294),l=n(53124),u=n(99134),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},p=["xs","sm","md","lg","xl","xxl"],d=i.forwardRef(function(e,t){var n,a=i.useContext(l.E_),d=a.getPrefixCls,m=a.direction,v=i.useContext(u.Z),h=v.gutter,y=v.wrap,x=v.supportFlexGap,b=e.prefixCls,g=e.span,Z=e.order,j=e.offset,O=e.push,w=e.pull,C=e.className,E=e.children,N=e.flex,k=e.style,S=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",b),T={};p.forEach(function(t){var n,a={},s=e[t];"number"==typeof s?a.span=s:"object"===(0,c.Z)(s)&&(a=s||{}),delete S[t],T=(0,o.Z)((0,o.Z)({},T),(n={},(0,r.Z)(n,"".concat(P,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===m),n))});var _=s()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(g),void 0!==g),(0,r.Z)(n,"".concat(P,"-order-").concat(Z),Z),(0,r.Z)(n,"".concat(P,"-offset-").concat(j),j),(0,r.Z)(n,"".concat(P,"-push-").concat(O),O),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),C,T),A={};if(h&&h[0]>0){var I=h[0]/2;A.paddingLeft=I,A.paddingRight=I}if(h&&h[1]>0&&!x){var R=h[1]/2;A.paddingTop=R,A.paddingBottom=R}return N&&(A.flex="number"==typeof N?"".concat(N," ").concat(N," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(N)?"0 0 ".concat(N):N,!1!==y||A.minWidth||(A.minWidth=0)),i.createElement("div",(0,o.Z)({},S,{style:(0,o.Z)((0,o.Z)({},A),k),className:_,ref:t}),E)});t.Z=d},92820:function(e,t,n){"use strict";var r=n(87462),o=n(4942),c=n(71002),a=n(97685),s=n(94184),i=n.n(s),l=n(67294),u=n(53124),f=n(98082),p=n(24308),d=n(93355),m=n(99134),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function h(e,t){var n=l.useState("string"==typeof e?e:""),r=(0,a.Z)(n,2),o=r[0],s=r[1],i=function(){if("object"===(0,c.Z)(e))for(var n=0;n<p.c4.length;n++){var r=p.c4[n];if(t[r]){var o=e[r];if(void 0!==o){s(o);return}}}};return l.useEffect(function(){i()},[JSON.stringify(e),t]),o}(0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between","space-evenly");var y=l.forwardRef(function(e,t){var n,s,d=e.prefixCls,y=e.justify,x=e.align,b=e.className,g=e.style,Z=e.children,j=e.gutter,O=void 0===j?0:j,w=e.wrap,C=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=l.useContext(u.E_),N=E.getPrefixCls,k=E.direction,S=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,a.Z)(S,2),T=P[0],_=P[1],A=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),I=(0,a.Z)(A,2),R=I[0],M=I[1],$=h(x,R),z=h(y,R),D=(0,f.Z)(),G=l.useRef(O);l.useEffect(function(){var e=p.ZP.subscribe(function(e){M(e);var t=G.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&_(e)});return function(){return p.ZP.unsubscribe(e)}},[]);var H=N("row",d),F=(n=[void 0,void 0],(Array.isArray(O)?O:[O,void 0]).forEach(function(e,t){if("object"===(0,c.Z)(e))for(var r=0;r<p.c4.length;r++){var o=p.c4[r];if(T[o]&&void 0!==e[o]){n[t]=e[o];break}}else n[t]=e}),n),U=i()(H,(s={},(0,o.Z)(s,"".concat(H,"-no-wrap"),!1===w),(0,o.Z)(s,"".concat(H,"-").concat(z),z),(0,o.Z)(s,"".concat(H,"-").concat($),$),(0,o.Z)(s,"".concat(H,"-rtl"),"rtl"===k),s),b),W={},B=null!=F[0]&&F[0]>0?-(F[0]/2):void 0,L=null!=F[1]&&F[1]>0?-(F[1]/2):void 0;if(B&&(W.marginLeft=B,W.marginRight=B),D){var Q=(0,a.Z)(F,2);W.rowGap=Q[1]}else L&&(W.marginTop=L,W.marginBottom=L);var X=(0,a.Z)(F,2),Y=X[0],J=X[1],K=l.useMemo(function(){return{gutter:[Y,J],wrap:w,supportFlexGap:D}},[Y,J,w,D]);return l.createElement(m.Z.Provider,{value:K},l.createElement("div",(0,r.Z)({},C,{className:U,style:(0,r.Z)((0,r.Z)({},W),g),ref:t}),Z))});t.Z=y},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},11382:function(e,t,n){"use strict";var r=n(87462),o=n(4942),c=n(97685),a=n(94184),s=n.n(a),i=n(23279),l=n.n(i),u=n(98423),f=n(67294),p=n(53124),d=n(96159),m=n(93355),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};(0,m.b)("small","default","large");var h=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,a=void 0===n||n,i=e.delay,m=e.className,y=e.size,x=void 0===y?"default":y,b=e.tip,g=e.wrapperClassName,Z=e.style,j=e.children,O=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),w=f.useState(function(){return a&&(!a||!i||!!isNaN(Number(i)))}),C=(0,c.Z)(w,2),E=C[0],N=C[1];return f.useEffect(function(){var e=l()(function(){N(a)},i);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[i,a]),f.createElement(p.C,null,function(n){var c,a,i,l=n.direction,p=s()(t,(i={},(0,o.Z)(i,"".concat(t,"-sm"),"small"===x),(0,o.Z)(i,"".concat(t,"-lg"),"large"===x),(0,o.Z)(i,"".concat(t,"-spinning"),E),(0,o.Z)(i,"".concat(t,"-show-text"),!!b),(0,o.Z)(i,"".concat(t,"-rtl"),"rtl"===l),i),m),v=(0,u.Z)(O,["indicator","prefixCls"]),y=f.createElement("div",(0,r.Z)({},v,{style:Z,className:p,"aria-live":"polite","aria-busy":E}),(c=e.indicator,a="".concat(t,"-dot"),null===c?null:(0,d.l$)(c)?(0,d.Tm)(c,{className:s()(c.props.className,a)}):(0,d.l$)(h)?(0,d.Tm)(h,{className:s()(h.props.className,a)}):f.createElement("span",{className:s()(a,"".concat(t,"-dot-spin"))},f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}))),b?f.createElement("div",{className:"".concat(t,"-text")},b):null);if(void 0!==j){var w=s()("".concat(t,"-container"),(0,o.Z)({},"".concat(t,"-blur"),E));return f.createElement("div",(0,r.Z)({},v,{className:s()("".concat(t,"-nested-loading"),g)}),E&&f.createElement("div",{key:"loading"},y),f.createElement("div",{className:w,key:"container"},j))}return y})},x=function(e){var t=e.prefixCls,n=(0,f.useContext(p.E_).getPrefixCls)("spin",t),o=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return f.createElement(y,(0,r.Z)({},o))};x.setDefaultIndicator=function(e){h=e},t.Z=x},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(87462),c=n(97685),a=n(97937),s=n(94184),i=n.n(s),l=n(98423),u=n(67294),f=n(53124),p=n(98787),d=n(68349),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},h=RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),y=RegExp("^(".concat(p.E.join("|"),")$")),x=u.forwardRef(function(e,t){var n,s=e.prefixCls,p=e.className,m=e.style,x=e.children,b=e.icon,g=e.color,Z=e.onClose,j=e.closeIcon,O=e.closable,w=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=u.useContext(f.E_),E=C.getPrefixCls,N=C.direction,k=u.useState(!0),S=(0,c.Z)(k,2),P=S[0],T=S[1];u.useEffect(function(){"visible"in w&&T(w.visible)},[w.visible]);var _=function(){return!!g&&(h.test(g)||y.test(g))},A=(0,o.Z)({backgroundColor:g&&!_()?g:void 0},m),I=_(),R=E("tag",s),M=i()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(g),I),(0,r.Z)(n,"".concat(R,"-has-color"),g&&!I),(0,r.Z)(n,"".concat(R,"-hidden"),!P),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===N),n),p),$=function(e){e.stopPropagation(),null==Z||Z(e),!e.defaultPrevented&&("visible"in w||T(!1))},z="onClick"in w||x&&"a"===x.type,D=(0,l.Z)(w,["visible"]),G=b||null,H=G?u.createElement(u.Fragment,null,G,u.createElement("span",null,x)):x,F=u.createElement("span",(0,o.Z)({},D,{ref:t,className:M,style:A}),H,void 0!==O&&O?j?u.createElement("span",{className:"".concat(R,"-close-icon"),onClick:$},j):u.createElement(a.Z,{className:"".concat(R,"-close-icon"),onClick:$}):null);return z?u.createElement(d.Z,null,F):F});x.CheckableTag=function(e){var t,n=e.prefixCls,c=e.className,a=e.checked,s=e.onChange,l=e.onClick,p=m(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,u.useContext(f.E_).getPrefixCls)("tag",n),v=i()(d,(t={},(0,r.Z)(t,"".concat(d,"-checkable"),!0),(0,r.Z)(t,"".concat(d,"-checkable-checked"),a),t),c);return u.createElement("span",(0,o.Z)({},p,{className:v,onClick:function(e){null==s||s(!a),null==l||l(e)}}))};var b=x},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),c=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):c(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(o){}var i=a.call(e);return r&&(t?e[s]=n:delete e[s]),i}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),c=n(14841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var i,l,u,f,p,d,m=0,v=!1,h=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var n=i,r=l;return i=l=void 0,m=t,f=e.apply(r,n)}function b(e){var n=e-d,r=e-m;return void 0===d||n>=t||n<0||h&&r>=u}function g(){var e,n,r,c=o();if(b(c))return Z(c);p=setTimeout(g,(e=c-d,n=c-m,r=t-e,h?s(r,u-n):r))}function Z(e){return(p=void 0,y&&i)?x(e):(i=l=void 0,f)}function j(){var e,n=o(),r=b(n);if(i=arguments,l=this,d=n,r){if(void 0===p)return m=e=d,p=setTimeout(g,t),v?x(e):f;if(h)return clearTimeout(p),p=setTimeout(g,t),x(d)}return void 0===p&&(p=setTimeout(g,t)),f}return t=c(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?a(c(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,i=d=l=p=void 0},j.flush=function(){return void 0===p?f:Z(o())},j}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),c=n(33448),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=i.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?a:+e}},26562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return n(23341)}])},23341:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),c=n(6880),a=n(94199),s=n(20550),i=n(15746),l=n(32808),u=n(85402),f=n(69677),p=n(71230),d=n(71577),m=n(26713),v=n(48213),h=n(48689),y=n(58091),x=n(64777);let{Title:b,Paragraph:g}=c.Z,Z={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}},j=e=>{let{onOk:t,onCancel:n,open:c}=e,[a,s]=(0,o.useState)([]),[m,v]=(0,o.useState)(""),h=Object.keys(Z).map(e=>({value:e,label:Z[e].description})),y={disabled:0===a.length||""===m},x=h.map(e=>(0,r.jsx)(i.Z,{span:8,children:(0,r.jsx)(l.Z,{value:e.value,children:e.label})},e.value));return(0,r.jsxs)(u.Z,{title:"Create New Access token",open:c,onOk:function(){t(m,a),s([]),v("")},onCancel:n,okButtonProps:y,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,r.jsx)(f.Z,{value:m,placeholder:"Name of bot, service, or integration",onChange:e=>v(e.currentTarget.value)})]}),(0,r.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,r.jsx)(l.Z.Group,{style:{width:"100%"},value:a,onChange:function(e){s(e)},children:(0,r.jsx)(p.Z,{children:x})}),(0,r.jsx)("p",{children:(0,r.jsx)(d.Z,{type:"primary",onClick:function(){s(Object.keys(Z))},children:"Select all"})})]})},O=()=>{let[e,t]=(0,o.useState)([]),[n,c]=(0,o.useState)(!1);function i(e){console.error("error",e)}async function l(){try{let e=await (0,x.rQ)(x.ms);t(e)}catch(n){i(n)}}async function u(e){try{await (0,x.rQ)(x.Wr,{method:"POST",data:{token:e}}),l()}catch(t){i(t)}}async function p(n,r){try{let o=await (0,x.rQ)(x.IO,{method:"POST",data:{name:n,scopes:r}});t(e.concat(o))}catch(c){i(c)}}(0,o.useEffect)(()=>{l()},[]);let O=()=>{c(!0)},w=(e,t)=>{c(!1),p(e,t)},C=()=>{c(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{children:"Access Tokens"}),(0,r.jsx)(g,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,r.jsxs)(g,{children:["Read more about how to use these tokens, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(v.Z,{rowKey:"token",columns:[{title:"",key:"delete",render:(e,t)=>(0,r.jsx)(m.Z,{size:"middle",children:(0,r.jsx)(d.Z,{onClick:()=>u(t.accessToken),icon:(0,r.jsx)(h.Z,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:e=>(0,r.jsx)(f.Z.Password,{size:"small",bordered:!1,value:e})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:e=>(0,r.jsx)(r.Fragment,{children:e.map(e=>(function(e){if(!e||!Z[e])return null;let t=Z[e];return(0,r.jsx)(a.Z,{title:t.description,children:(0,r.jsx)(s.Z,{color:t.color,children:t.name})},e)})(e))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render:e=>{if(!e)return"Never";let t=new Date(e);return(0,y.Z)(t,"P p")}}],dataSource:e,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Z,{type:"primary",onClick:O,children:"Create Access Token"}),(0,r.jsx)(j,{open:n,onOk:w,onCancel:C})]})};t.default=O}},function(e){e.O(0,[6880,6386,3698,3013,8213,8091,9774,2888,179],function(){return e(e.s=26562)}),_N_E=e.O()}]);
//# sourceMappingURL=access-tokens-37e8e910c39e2bdc.js.map