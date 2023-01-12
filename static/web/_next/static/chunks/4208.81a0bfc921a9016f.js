(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4208],{54907:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var a=n(87462),r=n(4942),i=n(18073),o=n(94184),s=n.n(o),c=n(74902),l=n(15671),d=n(43144),u=n(60136),p=n(33643),h=n(71002),v=n(50344),m=n(67294),f=n(96774),y=n.n(f),x=n(45987),g=n(62874),A=n(97685),C=m.forwardRef(function(e,t){var n,a=e.prefixCls,i=e.forceRender,o=e.className,c=e.style,l=e.children,d=e.isActive,u=e.role,p=m.useState(d||i),h=(0,A.Z)(p,2),v=h[0],f=h[1];return(m.useEffect(function(){(i||d)&&f(!0)},[i,d]),v)?m.createElement("div",{ref:t,className:s()("".concat(a,"-content"),(n={},(0,r.Z)(n,"".concat(a,"-content-active"),d),(0,r.Z)(n,"".concat(a,"-content-inactive"),!d),n),o),style:c,role:u},m.createElement("div",{className:"".concat(a,"-content-box")},l)):null});C.displayName="PanelContent";var Z=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],b=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"==typeof n&&n(a)},e.handleKeyPress=function(t){("Enter"===t.key||13===t.keyCode||13===t.which)&&e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,a=t.expandIcon,r=t.prefixCls,i=t.collapsible;if(!n)return null;var o="function"==typeof a?a(e.props):m.createElement("i",{className:"arrow"});return o&&m.createElement("div",{className:"".concat(r,"-expand-icon"),onClick:"header"===i||"icon"===i?e.onItemClick:null},o)},e.renderTitle=function(){var t=e.props,n=t.header,a=t.prefixCls,r=t.collapsible;return m.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===r?e.onItemClick:null},n)},e}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!y()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,i=n.className,o=n.id,c=n.style,l=n.prefixCls,d=n.headerClass,u=n.children,p=n.isActive,h=n.destroyInactivePanel,v=n.accordion,f=n.forceRender,y=n.openMotion,A=n.extra,b=n.collapsible,N=(0,x.Z)(n,Z),j="disabled"===b,w="header"===b,I="icon"===b,k=s()((e={},(0,r.Z)(e,"".concat(l,"-item"),!0),(0,r.Z)(e,"".concat(l,"-item-active"),p),(0,r.Z)(e,"".concat(l,"-item-disabled"),j),e),i),E={className:s()("".concat(l,"-header"),(t={},(0,r.Z)(t,d,d),(0,r.Z)(t,"".concat(l,"-header-collapsible-only"),w),(0,r.Z)(t,"".concat(l,"-icon-collapsible-only"),I),t)),"aria-expanded":p,"aria-disabled":j,onKeyPress:this.handleKeyPress};return w||I||(E.onClick=this.onItemClick,E.role=v?"tab":"button",E.tabIndex=j?-1:0),delete N.header,delete N.panelKey,delete N.onItemClick,delete N.showArrow,delete N.expandIcon,m.createElement("div",(0,a.Z)({},N,{className:k,style:c,id:o}),m.createElement("div",E,this.renderIcon(),this.renderTitle(),null!=A&&"boolean"!=typeof A&&m.createElement("div",{className:"".concat(l,"-extra")},A)),m.createElement(g.Z,(0,a.Z)({visible:p,leavedClassName:"".concat(l,"-content-hidden")},y,{forceRender:f,removeOnLeave:h}),function(e,t){var n=e.className,a=e.style;return m.createElement(C,{ref:t,prefixCls:l,className:n,style:a,isActive:p,forceRender:f,role:v?"tabpanel":null},u)}))}}]),n}(m.Component);function N(e){var t=e;if(!Array.isArray(t)){var n=(0,h.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}b.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var j=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(e){(0,l.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,c.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,r=a.props,i=r.prefixCls,o=r.openMotion,s=r.accordion,c=r.destroyInactivePanel,l=r.expandIcon,d=r.collapsible,u=e.key||String(t),p=e.props,h=p.header,v=p.headerClass,f=p.destroyInactivePanel,y=p.collapsible,x=!1;x=s?n[0]===u:n.indexOf(u)>-1;var g=null!=y?y:d,A={key:u,panelKey:u,header:h,headerClass:v,isActive:x,prefixCls:i,destroyInactivePanel:null!=f?f:c,openMotion:o,accordion:s,children:e.props.children,onItemClick:"disabled"===g?null:a.onClickItem,expandIcon:l,collapsible:g};return"string"==typeof e.type?e:(Object.keys(A).forEach(function(e){void 0===A[e]&&delete A[e]}),m.cloneElement(e,A))},a.getItems=function(){var e=a.props.children;return(0,v.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var a,r=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=r),a.state={activeKey:N(i)},a}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!y()(this.props,e)||!y()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,i=t.style,o=t.accordion,c=s()((e={},(0,r.Z)(e,n,!0),(0,r.Z)(e,a,!!a),e));return m.createElement("div",{className:c,style:i,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=N(e.activeKey)),t}}]),n}(m.Component);j.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},j.Panel=b,j.Panel;var w=n(98423),I=n(53124),k=n(33603),E=n(96159),O=function(e){var t,n,o=m.useContext(I.E_),c=o.getPrefixCls,l=o.direction,d=e.prefixCls,u=e.className,p=e.bordered,h=e.ghost,f=e.expandIconPosition,y=void 0===f?"start":f,x=c("collapse",d),g=m.useMemo(function(){return"left"===y?"start":"right"===y?"end":y},[y]),A=s()("".concat(x,"-icon-position-").concat(g),(n={},(0,r.Z)(n,"".concat(x,"-borderless"),!(void 0===p||p)),(0,r.Z)(n,"".concat(x,"-rtl"),"rtl"===l),(0,r.Z)(n,"".concat(x,"-ghost"),!!h),n),void 0===u?"":u),C=(0,a.Z)((0,a.Z)({},k.ZP),{motionAppear:!1,leavedClassName:"".concat(x,"-content-hidden")});return m.createElement(j,(0,a.Z)({openMotion:C},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):m.createElement(i.Z,{rotate:t.isActive?90:void 0});return(0,E.Tm)(a,function(){return{className:s()(a.props.className,"".concat(x,"-arrow"))}})},prefixCls:x,className:A}),(t=e.children,(0,v.Z)(t).map(function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),i=e.props,o=i.disabled,s=i.collapsible,c=(0,a.Z)((0,a.Z)({},(0,w.Z)(e.props,["disabled"])),{key:r,collapsible:null!=s?s:o?"disabled":void 0});return(0,E.Tm)(e,c)}return e})))};O.Panel=function(e){var t=m.useContext(I.E_).getPrefixCls,n=e.prefixCls,i=e.className,o=e.showArrow,c=t("collapse",n),l=s()((0,r.Z)({},"".concat(c,"-no-arrow"),!(void 0===o||o)),void 0===i?"":i);return m.createElement(j.Panel,(0,a.Z)({},e,{prefixCls:c,className:l}))};var P=O},11382:function(e,t,n){"use strict";var a=n(87462),r=n(4942),i=n(97685),o=n(94184),s=n.n(o),c=n(23279),l=n.n(c),d=n(98423),u=n(67294),p=n(53124),h=n(96159),v=n(93355),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,v.b)("small","default","large");var f=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,o=void 0===n||n,c=e.delay,v=e.className,y=e.size,x=void 0===y?"default":y,g=e.tip,A=e.wrapperClassName,C=e.style,Z=e.children,b=m(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),N=u.useState(function(){return o&&(!o||!c||!!isNaN(Number(c)))}),j=(0,i.Z)(N,2),w=j[0],I=j[1];return u.useEffect(function(){var e=l()(function(){I(o)},c);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[c,o]),u.createElement(p.C,null,function(n){var i,o,c,l=n.direction,p=s()(t,(c={},(0,r.Z)(c,"".concat(t,"-sm"),"small"===x),(0,r.Z)(c,"".concat(t,"-lg"),"large"===x),(0,r.Z)(c,"".concat(t,"-spinning"),w),(0,r.Z)(c,"".concat(t,"-show-text"),!!g),(0,r.Z)(c,"".concat(t,"-rtl"),"rtl"===l),c),v),m=(0,d.Z)(b,["indicator","prefixCls"]),y=u.createElement("div",(0,a.Z)({},m,{style:C,className:p,"aria-live":"polite","aria-busy":w}),(i=e.indicator,o="".concat(t,"-dot"),null===i?null:(0,h.l$)(i)?(0,h.Tm)(i,{className:s()(i.props.className,o)}):(0,h.l$)(f)?(0,h.Tm)(f,{className:s()(f.props.className,o)}):u.createElement("span",{className:s()(o,"".concat(t,"-dot-spin"))},u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}))),g?u.createElement("div",{className:"".concat(t,"-text")},g):null);if(void 0!==Z){var N=s()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),w));return u.createElement("div",(0,a.Z)({},m,{className:s()("".concat(t,"-nested-loading"),A)}),w&&u.createElement("div",{key:"loading"},y),u.createElement("div",{className:N,key:"container"},Z))}return y})},x=function(e){var t=e.prefixCls,n=(0,u.useContext(p.E_).getPrefixCls)("spin",t),r=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return u.createElement(y,(0,a.Z)({},r))};x.setDefaultIndicator=function(e){f=e},t.Z=x},44208:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthModal:function(){return k}});var a=n(85893),r=n(90575),i=n(4480),o=n(8751),s=n(54907),c=n(6880),l=n(11382),d=n(26713),u=n(14670),p=n(69677),h=n(71577),v=n(67294),m=n(37174);let{Panel:f}=s.Z,{Link:y}=c.Z,x=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,c]=(0,v.useState)(null),[x,g]=(0,v.useState)(!1),[A,C]=(0,v.useState)(!1),[Z,b]=(0,v.useState)(""),N=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Use your own domain to authenticate ",(0,a.jsx)("span",{children:n})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),j=i;j&&j.includes("url does not support indieauth")&&(j="The provided URL is either invalid or does not support IndieAuth.");let w=e=>{if(!(0,m.jv)(e)||!e.includes(".")){C(!1);return}C(!0)},I=e=>{let t=e.nativeEvent.data;if(":"===t)return;b(e.target.value);let n="https://".concat(e.target.value);w(n)},k=async()=>{if(A){g(!0);try{let e=await fetch("/api/auth/indieauth?accessToken=".concat(r),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authHost:"https://".concat(Z)})}),t=await e.json();if(t.message){c(t.message),g(!1);return}if(!t.redirect){c("Auth provider did not return a redirect URL."),g(!1);return}if(t.redirect){let{redirect:n}=t;window.location=n}}catch(a){c(a.message)}g(!1)}};return(0,a.jsx)(l.Z,{spinning:x,children:(0,a.jsxs)(d.Z,{direction:"vertical",children:[N,j&&(0,a.jsx)(u.Z,{message:"Error",description:j,type:"error",showIcon:!0}),(0,a.jsx)("div",{children:"Your domain"}),(0,a.jsx)(p.Z.Search,{addonBefore:"https://",onInput:I,type:"url",value:Z,placeholder:"yoursite.com",status:!A&&Z.length>0?"error":void 0,onSearch:k,enterButton:(0,a.jsx)(h.Z,{type:A?"primary":"default",disabled:!A||0===Z.length,children:(0,a.jsx)(o.Z,{})})}),(0,a.jsx)(s.Z,{ghost:!0,children:(0,a.jsxs)(f,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,a.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,a.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,a.jsx)(y,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var g=n(50501),A=n.n(g);let{Panel:C}=s.Z,Z=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,c]=(0,v.useState)(null),[m,f]=(0,v.useState)(!1),[y,x]=(0,v.useState)(!1),[g,Z]=(0,v.useState)(""),[b,N]=(0,v.useState)(""),[j,w]=(0,v.useState)(!1),I=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,a.jsx)("strong",{children:n}),", or login as a previously linked chat user."]}),k=i;k&&k.includes("url does not support indieauth")&&(k="The provided URL is either invalid or does not support IndieAuth.");let E=e=>{x(function(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e))},O=e=>{Z(e.target.value),E(e.target.value)},P=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),a=await n.json();a.message&&(c(a.message),f(!1))},S=async()=>{f(!0);try{await P("/api/auth/fediverse/verify?accessToken=".concat(r),{code:b}),window.location.href="/"}catch(e){console.error(e),c(e)}f(!1)},T=async()=>{if(!y)return;f(!0),c(null);let e=g.replace(/^@+/,"");try{await P("/api/auth/fediverse?accessToken=".concat(r),{account:e}),w(!0)}catch(t){console.error(t),c(t)}f(!1)},_=(0,a.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,a.jsxs)("div",{className:A().codeInputContainer,children:[(0,a.jsx)(p.Z,{value:b,onChange:e=>N(e.target.value),className:A().codeInput,placeholder:"123456",maxLength:6}),(0,a.jsx)(h.Z,{type:"primary",onClick:S,disabled:b.length<6,className:A().submitButton,children:"Verify Code"})]})]}),K=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:"Your Fediverse Account"}),(0,a.jsx)(p.Z.Search,{addonBefore:"@",onInput:O,value:g,placeholder:"youraccount@yourserver.com",status:!y&&g.length>0?"error":void 0,onSearch:T,enterButton:(0,a.jsx)(h.Z,{type:y?"primary":"default",disabled:!y||0===g.length,children:(0,a.jsx)(o.Z,{})})})]});return(0,a.jsx)(l.Z,{spinning:m,children:(0,a.jsxs)(d.Z,{direction:"vertical",children:[I,k&&(0,a.jsx)(u.Z,{message:"Error",description:k,type:"error",showIcon:!0}),j?_:K,(0,a.jsx)(s.Z,{ghost:!0,children:(0,a.jsx)(C,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,a.jsx)("p",{children:"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."})},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var b=n(22825),N={src:"/_next/static/media/indieauth.38c52a3d.png",height:512,width:406,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAJFBMVEU4ODg4ODg5OTk5OTk5OTk4ODg5OTk4ODg5OTk5OTk5OTk4ODiRUFfYAAAAC3RSTlMCFOuovTv1zI8wabTrOYwAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAsSURBVHicBcGFAQAwDMCg1Gb5/98BHG1gd2UQGeQwVvl4ujyUEzbbi8nyhn4bVgEfoFU38wAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},j=n(54639),w=n.n(j),I=n(77466);let k=e=>{let{forceTabs:t}=e,n=(0,i.sJ)(I.L4),o=(0,i.sJ)(I.FI),s=(0,i.sJ)(I.db),c=(0,i.sJ)(I.g1);if(!s)return null;let{displayName:l}=s,{federation:d}=c,{enabled:u}=d,p=(0,a.jsxs)("span",{className:w().tabContent,children:[(0,a.jsx)("img",{className:w().icon,src:N.src,alt:"IndieAuth"}),"IndieAuth"]}),h=(0,a.jsx)(x,{authenticated:n,displayName:l,accessToken:o}),v=(0,a.jsxs)("span",{className:w().tabContent,children:[(0,a.jsx)("img",{className:w().icon,src:b.Z.src,alt:"Fediverse auth"}),"FediAuth"]}),m=(0,a.jsx)(Z,{authenticated:n,displayName:l,accessToken:o});return(0,a.jsx)("div",{children:(0,a.jsx)(r.Z,{defaultActiveKey:"1",items:[{label:p,key:"1",children:h},{label:v,key:"2",children:m}],type:"card",size:"small",renderTabBar:u||t?null:()=>null})})}},54639:function(e){e.exports={tabContent:"AuthModal_tabContent__KgMU3",icon:"AuthModal_icon__kpEuV"}},50501:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__M_dAD",codeInput:"FediAuthModal_codeInput__dIE6u",submitButton:"FediAuthModal_submitButton__iuF9R"}}}]);
//# sourceMappingURL=4208.81a0bfc921a9016f.js.map