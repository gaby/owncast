(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4976,1382],{11382:function(e,t,n){"use strict";var r=n(87462),i=n(4942),o=n(97685),a=n(94184),c=n.n(a),l=n(23279),s=n.n(l),u=n(98423),f=n(67294),p=n(53124),d=n(96159),m=n(93355),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};(0,m.b)("small","default","large");var y=null,g=function(e){var t=e.spinPrefixCls,n=e.spinning,a=void 0===n||n,l=e.delay,m=e.className,g=e.size,h=void 0===g?"default":g,x=e.tip,E=e.wrapperClassName,b=e.style,N=e.children,w=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),j=f.useState(function(){return a&&(!a||!l||!!isNaN(Number(l)))}),O=(0,o.Z)(j,2),S=O[0],_=O[1];return f.useEffect(function(){var e=s()(function(){_(a)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,a]),f.createElement(p.C,null,function(n){var o,a,l,s=n.direction,p=c()(t,(l={},(0,i.Z)(l,"".concat(t,"-sm"),"small"===h),(0,i.Z)(l,"".concat(t,"-lg"),"large"===h),(0,i.Z)(l,"".concat(t,"-spinning"),S),(0,i.Z)(l,"".concat(t,"-show-text"),!!x),(0,i.Z)(l,"".concat(t,"-rtl"),"rtl"===s),l),m),v=(0,u.Z)(w,["indicator","prefixCls"]),g=f.createElement("div",(0,r.Z)({},v,{style:b,className:p,"aria-live":"polite","aria-busy":S}),(o=e.indicator,a="".concat(t,"-dot"),null===o?null:(0,d.l$)(o)?(0,d.Tm)(o,{className:c()(o.props.className,a)}):(0,d.l$)(y)?(0,d.Tm)(y,{className:c()(y.props.className,a)}):f.createElement("span",{className:c()(a,"".concat(t,"-dot-spin"))},f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}))),x?f.createElement("div",{className:"".concat(t,"-text")},x):null);if(void 0!==N){var j=c()("".concat(t,"-container"),(0,i.Z)({},"".concat(t,"-blur"),S));return f.createElement("div",(0,r.Z)({},v,{className:c()("".concat(t,"-nested-loading"),E)}),S&&f.createElement("div",{key:"loading"},g),f.createElement("div",{className:j,key:"container"},N))}return g})},h=function(e){var t=e.prefixCls,n=(0,f.useContext(p.E_).getPrefixCls)("spin",t),i=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return f.createElement(g,(0,r.Z)({},i))};h.setDefaultIndicator=function(e){y=e},t.Z=h},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),i=n(89607),o=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},27561:function(e,t,n){var r=n(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(i){}var l=a.call(e);return r&&(t?e[c]=n:delete e[c]),l}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),i=n(7771),o=n(14841),a=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,f,p,d,m=0,v=!1,y=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var n=l,r=s;return l=s=void 0,m=t,f=e.apply(r,n)}function x(e){var n=e-d,r=e-m;return void 0===d||n>=t||n<0||y&&r>=u}function E(){var e,n,r,o=i();if(x(o))return b(o);p=setTimeout(E,(e=o-d,n=o-m,r=t-e,y?c(r,u-n):r))}function b(e){return(p=void 0,g&&l)?h(e):(l=s=void 0,f)}function N(){var e,n=i(),r=x(n);if(l=arguments,s=this,d=n,r){if(void 0===p)return m=e=d,p=setTimeout(E,t),v?h(e):f;if(y)return clearTimeout(p),p=setTimeout(E,t),h(d)}return void 0===p&&(p=setTimeout(E,t)),f}return t=o(t)||0,r(n)&&(v=!!n.leading,u=(y="maxWait"in n)?a(o(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),N.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=d=s=p=void 0},N.flush=function(){return void 0===p?f:b(i())},N}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),i=n(37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),i=n(13218),o=n(33448),a=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return a;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):c.test(e)?a:+e}},10203:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/actions",function(){return n(86419)}])},86419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(85893),i=n(67294),o=n(6880),a=n(48213),c=n(58091),l=n(64777),s=n(70241);let{Title:u,Paragraph:f}=o.Z;function p(){let[e,t]=(0,i.useState)([]),[n,o]=(0,i.useState)(0),[p,d]=(0,i.useState)(0),m=async()=>{try{let e="".concat(l.op,"?offset=").concat(50*p,"&limit=").concat(50),n=await (0,l.rQ)(e,{auth:!0}),{results:r,total:i}=n;o(i),(0,s.Qr)(r)?t([]):t(r)}catch(a){console.log("==== error",a)}};(0,i.useEffect)(()=>{m()},[p]);let v=[{title:"Action",dataIndex:"type",key:"type",width:50,render:(e,t)=>{let n,i;switch(t.type){case"FEDIVERSE_ENGAGEMENT_REPOST":n="/img/repost.svg",i="Share";break;case"FEDIVERSE_ENGAGEMENT_LIKE":n="/img/like.svg",i="Like";break;case"FEDIVERSE_ENGAGEMENT_FOLLOW":n="/img/follow.svg",i="Follow";break;default:n=""}return(0,r.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,r.jsx)("img",{src:n,width:"70%",alt:i,title:i}),(0,r.jsx)("div",{style:{fontSize:"0.7rem"},children:i})]})}},{title:"From",dataIndex:"actorIRI",key:"from",render:(e,t)=>(0,r.jsx)("a",{href:t.actorIRI,children:t.actorIRI})},{title:"When",dataIndex:"timestamp",key:"timestamp",render:(e,t)=>{let n=new Date(t.timestamp);return(0,c.Z)(n,"P pp")}}];return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{level:3,children:"Fediverse Actions"}),(0,r.jsx)(f,{children:"Below is a list of actions that were taken by others in response to your posts as well as people who requested to follow you."}),(0,r.jsx)(a.Z,{dataSource:e,columns:v,size:"small",rowKey:e=>e.iri,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:n},onChange:e=>{let t=e.current;d(t)}})]})}}},function(e){e.O(0,[6880,6386,3698,3013,8213,8091,9774,2888,179],function(){return e(e.s=10203)}),_N_E=e.O()}]);
//# sourceMappingURL=actions-3c934340f5e5adf1.js.map