(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{18957:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return n(37990)}])},48186:function(e,s,n){"use strict";n.d(s,{Q:function(){return d},Y:function(){return u}});var t=n(85893),a=n(67294),l=n(6880),i=n(20550),r=n(79139),o=n(73615);let{Title:c}=l.Z,d="#5a67d8",u=e=>{let{title:s,description:n,placeholder:l,maxLength:u,values:h,handleDeleteIndex:f,handleCreateString:p,submitStatus:m,continuousStatusMessage:g}=e,[x,b]=(0,a.useState)(""),w=e=>{let{value:s}=e;b(s)},j=()=>{let e=x.trim();p(e),b("")};return(0,t.jsxs)("div",{className:"edit-string-array-container",children:[(0,t.jsx)(c,{level:3,className:"section-title",children:s}),(0,t.jsx)("p",{className:"description",children:n}),(0,t.jsx)("div",{className:"edit-current-strings",children:null==h?void 0:h.map((e,s)=>{let n=()=>{f(s)};return(0,t.jsx)(i.Z,{closable:!0,onClose:n,color:d,children:e},"tag-".concat(e,"-").concat(s))})}),g&&(0,t.jsx)("div",{className:"continuous-status-section",children:(0,t.jsx)(o.E,{status:g})}),(0,t.jsx)("div",{className:"add-new-string-section",children:(0,t.jsx)(r.nv,{fieldName:"string-input",value:x,onChange:w,onPressEnter:j,maxLength:u,placeholder:l,status:m})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},6979:function(e,s,n){"use strict";n.d(s,{Z:function(){return d}});var t=n(85893),a=n(67294),l=n(94594),i=n(41983),r=n(73615),o=n(90745),c=n(99519);let d=e=>{let{apiPath:s,checked:n,reversed:d=!1,configPath:u="",disabled:h=!1,fieldName:f,label:p,tip:m,useSubmit:g,onChange:x}=e,[b,w]=(0,a.useState)(null),j=null,v=(0,a.useContext)(c.aC),{setFieldInConfigState:y}=v||{},k=()=>{w(null),clearTimeout(j),j=null},N=async e=>{if(g){w((0,i.kg)(i.Jk));let n=d?!e:e;await (0,o.Si)({apiPath:s,data:{value:n},onSuccess:()=>{y({fieldName:f,value:n,path:u}),w((0,i.kg)(i.zv))},onError:e=>{w((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),j=setTimeout(k,o.sI)}x&&x(e)},S=null!==b&&b.type===i.Jk;return(0,t.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,t.jsx)("div",{className:"label-side",children:(0,t.jsx)("span",{className:"formfield-label",children:p})}),(0,t.jsxs)("div",{className:"input-side",children:[(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)(l.Z,{className:"switch field-".concat(f),loading:S,onChange:N,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,t.jsx)(r.E,{status:b})]}),(0,t.jsx)("p",{className:"field-tip",children:m})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},37990:function(e,s,n){"use strict";n.r(s);var t=n(85893),a=n(85402),l=n(71577),i=n(6880),r=n(14670),o=n(71230),c=n(15746),d=n(67294),u=n(45697),h=n.n(u),f=n(79139),p=n(46551),m=n(6979),g=n(48186),x=n(90745),b=n(99519),w=n(41983);let j=e=>{let{cancelPressed:s,okPressed:n}=e;return(0,t.jsxs)(a.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:s,footer:(0,t.jsxs)("div",{children:[(0,t.jsx)(l.Z,{onClick:s,children:"Do not enable"}),(0,t.jsx)(l.Z,{type:"primary",onClick:n,children:"Enable Social Features"})]}),children:[(0,t.jsx)(i.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,t.jsxs)(i.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,t.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,t.jsx)(i.Z.Paragraph,{}),(0,t.jsx)(i.Z.Title,{level:3,children:"What do you need to know?"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,t.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,t.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,t.jsxs)("li",{children:["Turning on ",(0,t.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,t.jsx)(i.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,t.jsxs)(i.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,t.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})};j.propTypes={cancelPressed:h().func.isRequired,okPressed:h().func.isRequired};let v=()=>{let{Title:e}=i.Z,[s,n]=(0,d.useState)(null),[a,l]=(0,d.useState)(!1),u=(0,d.useContext)(b.aC),{serverConfig:h,setFieldInConfigState:v}=u||{},[y,k]=(0,d.useState)(null),{federation:N,yp:S,instanceDetails:C}=h,{enabled:Z,isPrivate:P,username:E,goLiveMessage:U,showEngagement:_,blockedDomains:T}=N,{instanceUrl:F}=S,{nsfw:L}=C,R=e=>{let{fieldName:t,value:a}=e;n({...s,[t]:a})},O=e=>{e?l(!0):n({...s,enabled:!1})},D=()=>{let e=""!==s.instanceUrl,t=s.instanceUrl.startsWith("https://");e&&t||((0,x.Si)({apiPath:x.Kl.apiPath,data:{value:!1}}),n({...s,enabled:!1}))};function I(){k(null)}function q(){try{(0,x.Si)({apiPath:x.pE,data:{value:s.blockedDomains},onSuccess:()=>{v({fieldName:"forbiddenUsernames",value:s.forbiddenUsernames}),k(w.zv),setTimeout(I,x.sI)},onError:e=>{k((0,w.kg)(w.Un,e)),setTimeout(I,x.sI)}})}catch(e){console.error(e),k(w.Un)}}if((0,d.useEffect)(()=>{n({enabled:Z,isPrivate:P,username:E,goLiveMessage:U,showEngagement:_,blockedDomains:T,nsfw:L,instanceUrl:S.instanceUrl})},[h,S]),!s)return null;let Y=""!==F,V=F.startsWith("https://"),z=!V&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,t.jsx)("br",{}),(0,t.jsx)(p.$7,{fieldName:"instanceUrl",...x.yi,value:s.instanceUrl,initialValue:S.instanceUrl,type:f.xA,onChange:R,onSubmit:D,required:!0})]}),K=(0,t.jsx)(r.Z,{message:"Only Owncast instances available on the default SSL port 443 support this feature.",type:"warning",showIcon:!0}),M=F&&""!==new URL(F).port&&"443"!==new URL(F).port;return(0,t.jsxs)("div",{children:[(0,t.jsx)(e,{children:"Configure Social Features"}),(0,t.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,t.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(c.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[z,M&&K,(0,t.jsx)(m.Z,{fieldName:"enabled",onChange:O,...x.Kl,checked:s.enabled,disabled:M||!Y||!V}),(0,t.jsx)(m.Z,{fieldName:"isPrivate",...x.LC,checked:s.isPrivate,disabled:!Z}),(0,t.jsx)(m.Z,{fieldName:"nsfw",useSubmit:!0,...x.B_,checked:s.nsfw,disabled:M||!Y}),(0,t.jsx)(p.$7,{required:!0,fieldName:"username",type:f.Kx,...x.Xc,value:s.username,initialValue:E,onChange:R,disabled:!Z}),(0,t.jsx)(p.$7,{fieldName:"goLiveMessage",...x.BF,type:f.Sk,value:s.goLiveMessage,initialValue:U,onChange:R,disabled:!Z}),(0,t.jsx)(m.Z,{fieldName:"showEngagement",...x.FE,checked:s.showEngagement,disabled:!Z})]}),(0,t.jsx)(c.Z,{span:8,className:"form-module",children:(0,t.jsx)(g.Y,{title:x.dR.label,placeholder:x.dR.placeholder,description:x.dR.tip,values:s.blockedDomains,handleDeleteIndex:function(e){s.blockedDomains.splice(e,1),q()},handleCreateString:function(e){let n;try{let t=new URL(e);n=t.host}catch(a){n=e}s.blockedDomains.push(n),R({fieldName:"blockedDomains",value:s.blockedDomains}),q()},submitStatus:(0,w.kg)(y)})})]}),a&&(0,t.jsx)(j,{cancelPressed:function(){l(!1),n({...s,enabled:!1})},okPressed:function(){l(!1),n({...s,enabled:!0})}})]})};s.default=v}},function(e){e.O(0,[6880,8572,9774,2888,179],function(){return e(e.s=18957)}),_N_E=e.O()}]);
//# sourceMappingURL=config-federation-a7b32cb3704bfa3f.js.map