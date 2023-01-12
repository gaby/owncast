(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6801],{6440:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-video",function(){return t(34211)}])},6979:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var s=t(85893),n=t(67294),i=t(94594),r=t(41983),o=t(73615),l=t(90745),d=t(99519);let c=e=>{let{apiPath:a,checked:t,reversed:c=!1,configPath:u="",disabled:h=!1,fieldName:m,label:v,tip:x,useSubmit:p,onChange:g}=e,[f,j]=(0,n.useState)(null),b=null,y=(0,n.useContext)(d.aC),{setFieldInConfigState:N}=y||{},w=()=>{j(null),clearTimeout(b),b=null},k=async e=>{if(p){j((0,r.kg)(r.Jk));let t=c?!e:e;await (0,l.Si)({apiPath:a,data:{value:t},onSuccess:()=>{N({fieldName:m,value:t,path:u}),j((0,r.kg)(r.zv))},onError:e=>{j((0,r.kg)(r.Un,"There was an error: ".concat(e)))}}),b=setTimeout(w,l.sI)}g&&g(e)},C=null!==f&&f.type===r.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[v&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:v})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(i.Z,{className:"switch field-".concat(m),loading:C,onChange:k,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,s.jsx)(o.E,{status:f})]}),(0,s.jsx)("p",{className:"field-tip",children:x})]})]})};c.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},34211:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return R}});var s=t(85893),n=t(54907),i=t(6880),r=t(71230),o=t(15746),l=t(67294),d=t(34041),c=t(65360),u=t(82661),h=t(90745),m=t(41983),v=t(99519),x=t(73615);let p=()=>{let e=(0,l.useContext)(v.aC),{serverConfig:a,setFieldInConfigState:t}=e||{},{videoCodec:n,supportedCodecs:r}=a||{},{Title:o}=i.Z,{Option:p}=d.Z,[g,f]=(0,l.useState)(null),{setMessage:j}=(0,l.useContext)(u.k),[b,y]=(0,l.useState)(n),[N,w]=(0,l.useState)(n),[k,C]=l.useState(!1);(0,l.useEffect)(()=>{y(n)},[n]);let Z=()=>{f(null),clearTimeout(null)};async function P(){y(N),w(""),C(!1),await (0,h.Si)({apiPath:h.CQ,data:{value:N},onSuccess:()=>{t({fieldName:"videoCodec",value:N,path:"videoSettings"}),f((0,m.kg)(m.zv,"Video codec updated.")),setTimeout(Z,h.sI),e.online&&j("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{f((0,m.kg)(m.Un,e)),setTimeout(Z,h.sI)}})}let T=r.map(e=>{let a=e;return"libx264"===a?a="Default (libx264)":"h264_nvenc"===a?a="NVIDIA GPU acceleration":"h264_vaapi"===a?a="VA-API hardware encoding":"h264_qsv"===a?a="Intel QuickSync":"h264_v4l2m2m"===a?a="Video4Linux hardware encoding":"h264_omx"===a?a="OpenMax (omx) for Raspberry Pi":"h264_videotoolbox"===a&&(a="Apple VideoToolbox (hardware)"),(0,s.jsx)(p,{value:e,children:a},e)}),I="";return"libx264"===b?I="libx264 is the default codec and generally the only working choice for shared VPS environments. This is likely what you should be using unless you know you have set up other options.":"h264_nvenc"===b?I="You can use your NVIDIA GPU for encoding if you have a modern NVIDIA card with encoding cores.":"h264_vaapi"===b?I="VA-API may be supported by your NVIDIA proprietary drivers, Mesa open-source drivers for AMD or Intel graphics.":"h264_qsv"===b?I="Quick Sync Video is Intel's brand for its dedicated video encoding and decoding hardware. It may be an option if you have a modern Intel CPU with integrated graphics.":"h264_v4l2m2m"===b?I="Video4Linux is an interface to multiple different hardware encoding platforms such as Intel and AMD.":"h264_omx"===b?I="OpenMax is a codec most often used with a Raspberry Pi.":"h264_videotoolbox"===b&&(I="Apple VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders."),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{level:3,className:"section-title",children:"Video Codec"}),(0,s.jsxs)("div",{className:"description",children:["If you have access to specific hardware with the drivers and software installed for them, you may be able to improve your video encoding performance.",(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"https://owncast.online/docs/codecs?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation about this setting before changing it or you may make your stream unplayable."})})]}),(0,s.jsxs)("div",{className:"segment-slider-container",children:[(0,s.jsx)(c.Z,{title:"Are you sure you want to change your video codec to ".concat(N," and understand what this means?"),open:k,placement:"leftBottom",onConfirm:P,onCancel:()=>C(!1),okText:"Yes",cancelText:"No",children:(0,s.jsx)(d.Z,{defaultValue:b,value:b,style:{width:"100%"},onChange:function(e){w(e),C(!0)},children:T})}),(0,s.jsx)(x.E,{status:g}),(0,s.jsx)("p",{id:"selected-codec-note",className:"selected-value-note",children:I})]})]})};var g=t(22918);let{Title:f}=i.Z,j={0:"Lowest",1:"",2:"",3:"",4:"Highest"},b={0:"Lowest latency, lowest error tolerance (Not recommended, may not work for all content/configurations.)",1:"Low latency, low error tolerance",2:"Medium latency, medium error tolerance (Default)",3:"High latency, high error tolerance",4:"Highest latency, highest error tolerance"},y=()=>{let[e,a]=(0,l.useState)(null),[t,n]=(0,l.useState)(null),i=(0,l.useContext)(v.aC),{setMessage:r}=(0,l.useContext)(u.k),{serverConfig:o,setFieldInConfigState:d}=i||{},{videoSettings:c}=o||{};if(!c)return null;(0,l.useEffect)(()=>{n(c.latencyLevel)},[c]);let p=()=>{a(null),clearTimeout(null)},y=async e=>{a((0,m.kg)(m.Jk)),await (0,h.Si)({apiPath:h.sv,data:{value:e},onSuccess:()=>{d({fieldName:"latencyLevel",value:e,path:"videoSettings"}),a((0,m.kg)(m.zv,"Latency buffer level updated.")),setTimeout(p,h.sI),i.online&&r("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{a((0,m.kg)(m.Un,e)),setTimeout(p,h.sI)}})},N=e=>{y(e)};return(0,s.jsxs)("div",{className:"config-video-latency-container",children:[(0,s.jsx)(f,{level:3,className:"section-title",children:"Latency Buffer"}),(0,s.jsx)("p",{className:"description",children:"While it's natural to want to keep your latency as low as possible, you may experience reduced error tolerance and stability the lower you go. The lowest setting is not recommended."}),(0,s.jsxs)("p",{className:"description",children:["For interactive live streams you may want to experiment with a lower latency, for non-interactive broadcasts you may want to increase it."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/encoding#latency-buffer?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read to learn more."})]}),(0,s.jsxs)("div",{className:"segment-slider-container",children:[(0,s.jsx)(g.Z,{tipFormatter:e=>b[e],onChange:N,min:0,max:4,marks:j,defaultValue:t,value:t}),(0,s.jsx)("p",{className:"selected-value-note",children:b[t]}),(0,s.jsx)(x.E,{status:e})]})]})};var N=t(71577),w=t(14670),k=t(48213),C=t(85402),Z=t(48689),P=t(21640),T=t(94184),I=t.n(T),_=t(79139),S=t(6979);let{Panel:V}=n.Z,E=e=>{let{dataState:a=h.gX,onUpdateField:t}=e,l=a.videoPassthrough,d=e=>{t({fieldName:"framerate",value:e})},u=e=>{t({fieldName:"videoBitrate",value:e})},m=e=>{t({fieldName:"cpuUsageLevel",value:e})},v=e=>{let a=Number(e.value);isNaN(a)||t({fieldName:"scaledWidth",value:a||0})},x=e=>{let a=Number(e.value);isNaN(a)||t({fieldName:"scaledHeight",value:a||0})},p=()=>{t({fieldName:"videoPassthrough",value:!0})},f=e=>{l&&t({fieldName:"videoPassthrough",value:e})},j=e=>{t({fieldName:"name",value:e.value})},b=I()({"config-variant-form":!0,"video-passthrough-enabled":l});return(0,s.jsxs)("div",{className:b,children:[(0,s.jsx)("div",{className:"video-varient-alert",children:(0,s.jsx)(w.Z,{type:"info",action:(0,s.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:"video-varient-alert-button-container",children:(0,s.jsx)(N.Z,{size:"small",type:"text",icon:(0,s.jsx)(P.Z,{}),children:"Read more about how each of these settings can impact the performance of your server."})})})})}),l&&(0,s.jsxs)("p",{className:"passthrough-warning",children:["NOTE: Video Passthrough for this output stream variant is ",(0,s.jsx)("em",{children:"enabled"}),", disabling the below video encoding settings."]}),(0,s.jsxs)(r.Z,{gutter:16,children:[(0,s.jsx)(o.Z,{xs:24,lg:{span:24,pull:3},className:"video-text-field-container",children:(0,s.jsx)(_.nv,{maxLength:"10",...h.SS,value:a.name,onChange:j})}),(0,s.jsx)(o.Z,{sm:24,md:12,children:(0,s.jsxs)("div",{className:"form-module cpu-usage-container",children:[(0,s.jsx)(i.Z.Title,{level:3,children:"CPU or GPU Utilization"}),(0,s.jsx)("p",{className:"description",children:"Reduce to improve server performance, or increase it to improve video quality."}),(0,s.jsxs)("div",{className:"segment-slider-container",children:[(0,s.jsx)(g.Z,{tipFormatter:e=>h.I$[e],onChange:m,min:1,max:Object.keys(h.t$).length,marks:h.t$,defaultValue:a.cpuUsageLevel,value:a.cpuUsageLevel,disabled:a.videoPassthrough}),(0,s.jsx)("p",{className:"selected-value-note",children:l?"CPU usage selection is disabled when Video Passthrough is enabled.":h.I$[a.cpuUsageLevel]||""})]}),(0,s.jsxs)("p",{className:"read-more-subtext",children:["This could mean GPU or CPU usage depending on your server environment.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#cpu-usage",target:"_blank",rel:"noopener noreferrer",children:"Read more about hardware performance."})]})]})}),(0,s.jsx)(o.Z,{sm:24,md:11,offset:1,children:(0,s.jsxs)("div",{className:"form-module bitrate-container ".concat(a.videoPassthrough?"disabled":""),children:[(0,s.jsx)(i.Z.Title,{level:3,children:"Video Bitrate"}),(0,s.jsx)("p",{className:"description",children:h.yC.tip}),(0,s.jsxs)("div",{className:"segment-slider-container",children:[(0,s.jsx)(g.Z,{tipFormatter:e=>"".concat(e," ").concat(h.yC.unit),disabled:a.videoPassthrough,defaultValue:a.videoBitrate,value:a.videoBitrate,onChange:u,step:h.yC.incrementBy,min:h.yC.min,max:h.yC.max,marks:h.HM}),(0,s.jsx)("p",{className:"selected-value-note",children:(()=>{if(l)return"Bitrate selection is disabled when Video Passthrough is enabled.";let e="".concat(a.videoBitrate).concat(h.yC.unit);return a.videoBitrate<2e3?"".concat(e," - Good for low bandwidth environments."):a.videoBitrate<3500?"".concat(e," - Good for most bandwidth environments."):"".concat(e," - Good for high bandwidth environments.")})()})]}),(0,s.jsx)("p",{className:"read-more-subtext",children:(0,s.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about bitrates."})})]})})]}),(0,s.jsx)(n.Z,{className:"advanced-settings",children:(0,s.jsxs)(V,{header:"Advanced Settings",children:[(0,s.jsxs)(r.Z,{gutter:16,children:[(0,s.jsx)(o.Z,{sm:24,md:12,children:(0,s.jsxs)("div",{className:"form-module resolution-module",children:[(0,s.jsx)(i.Z.Title,{level:3,children:"Resolution"}),(0,s.jsxs)("p",{className:"description",children:["Resizing your content will take additional resources on your server. If you wish to optionally resize your content for this stream output then you should either set the width ",(0,s.jsx)("strong",{children:"or"})," the height to keep your aspect ratio. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about resolutions."})]}),(0,s.jsx)("br",{}),(0,s.jsx)(_.nv,{type:"number",...h.dL.scaledWidth,value:a.scaledWidth,onChange:v,disabled:a.videoPassthrough}),(0,s.jsx)(_.nv,{type:"number",...h.dL.scaledHeight,value:a.scaledHeight,onChange:x,disabled:a.videoPassthrough})]})}),(0,s.jsx)(o.Z,{sm:24,md:12,children:(0,s.jsxs)("div",{className:"form-module video-passthrough-module",children:[(0,s.jsx)(i.Z.Title,{level:3,children:"Video Passthrough"}),(0,s.jsxs)("div",{className:"description",children:[(0,s.jsxs)("p",{children:["Enabling video passthrough may allow for less hardware utilization, but may also make your stream ",(0,s.jsx)("strong",{children:"unplayable"}),"."]}),(0,s.jsx)("p",{children:"All other settings for this stream output will be disabled if passthrough is used."}),(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#video-passthrough",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation before enabling, as it impacts your stream."})})]}),(0,s.jsx)("div",{className:"advanced-switch-container",children:(0,s.jsxs)(c.Z,{disabled:!0===a.videoPassthrough,title:"Did you read the documentation about video passthrough and understand the risks involved with enabling it?",icon:(0,s.jsx)(P.Z,{}),onConfirm:p,okText:"Yes",cancelText:"No",children:[(0,s.jsx)("a",{href:"#",children:(0,s.jsxs)("div",{className:"advanced-description-switch-container",children:[(0,s.jsx)("div",{className:"advanced-description-wrapper",children:(0,s.jsx)("p",{children:"Use Video Passthrough?"})}),(0,s.jsx)(S.Z,{label:"",fieldName:"video-passthrough",checked:a.videoPassthrough,onChange:f})]})}),(0,s.jsxs)("p",{children:["*",h.dL.videoPassthrough.tip]})]})})]})})]}),(0,s.jsxs)("div",{className:"form-module frame-rate-module",children:[(0,s.jsx)(i.Z.Title,{level:3,children:"Frame rate"}),(0,s.jsx)("p",{className:"description",children:h.nm.tip}),(0,s.jsxs)("div",{className:"segment-slider-container",children:[(0,s.jsx)(g.Z,{tipFormatter:e=>"".concat(e," ").concat(h.nm.unit),defaultValue:a.framerate,value:a.framerate,onChange:d,step:h.nm.incrementBy,min:h.nm.min,max:h.nm.max,marks:h.Xq,disabled:a.videoPassthrough}),(0,s.jsx)("p",{className:"selected-value-note",children:l?"Framerate selection is disabled when Video Passthrough is enabled.":h.x8[a.framerate]||""})]}),(0,s.jsx)("p",{className:"read-more-subtext",children:(0,s.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#framerate",target:"_blank",rel:"noopener noreferrer",children:"Read more about framerates."})})]})]},"1")})]})},{Title:U}=i.Z,L=()=>{let[e,a]=(0,l.useState)(!1),[t,n]=(0,l.useState)(!1),[i,r]=(0,l.useState)(0),{setMessage:o}=(0,l.useContext)(u.k),[d,c]=(0,l.useState)(h.gX),[p,g]=(0,l.useState)(null),f=(0,l.useContext)(v.aC),{serverConfig:j,setFieldInConfigState:b}=f||{},{videoSettings:y}=j||{},{videoQualityVariants:P}=y||{};if(!y)return null;let T=()=>{g(null),clearTimeout(null)},I=()=>{a(!1),r(-1),c(h.gX)},_=async e=>{g((0,m.kg)(m.Jk)),await (0,h.Si)({apiPath:h.vv,data:{value:e},onSuccess:()=>{b({fieldName:"videoQualityVariants",value:e,path:"videoSettings"}),n(!1),I(),g((0,m.kg)(m.zv,"Variants updated")),setTimeout(T,h.sI),f.online&&o("Updating your video configuration will take effect the next time you begin a new stream.")},onError:e=>{g((0,m.kg)(m.Un,e)),n(!1),setTimeout(T,h.sI)}})},S=()=>{n(!0);let e=[...P];-1===i?e.push(d):e.splice(i,1,d),_(e)},V=e=>{let a=[...P];a.splice(e,1),_(a)},L=e=>{let{fieldName:a,value:t}=e;c({...d,[a]:t})},A=P.map((e,a)=>({key:a+1,...e}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U,{level:3,className:"section-title",children:"Stream output"}),(()=>{if(1!==P.length)return!1;let[e]=P;return h.i3.VIDEO_HEIGHT<=e.scaledHeight||h.i3.VIDEO_BITRATE<=e.videoBitrate})()&&(0,s.jsx)(w.Z,{message:h.i3.HELP_TEXT,type:"info",closable:!0}),(0,s.jsx)(x.E,{status:p}),(0,s.jsx)(k.Z,{className:"variants-table",pagination:!1,size:"small",columns:[{title:"Name",dataIndex:"name",render:e=>e||"No name"},{title:"Video bitrate",dataIndex:"videoBitrate",key:"videoBitrate",render:(e,a)=>!e||a.videoPassthrough?"Same as source":"".concat(e," kbps")},{title:"CPU Usage",dataIndex:"cpuUsageLevel",key:"cpuUsageLevel",render:(e,a)=>!e||a.videoPassthrough?"n/a":h.I$[e].split(" ")[0]},{title:"",dataIndex:"",key:"edit",render:e=>{let{key:t}=e,n=t-1;return(0,s.jsxs)("span",{className:"actions",children:[(0,s.jsx)(N.Z,{size:"small",onClick:()=>{r(n),c(P[n]),a(!0)},children:"Edit"}),(0,s.jsx)(N.Z,{className:"delete-button",icon:(0,s.jsx)(Z.Z,{}),size:"small",disabled:1===P.length,onClick:()=>{V(n)}})]})}}],dataSource:A}),(0,s.jsxs)(C.Z,{title:"Edit Video Variant Details",open:e,onOk:S,onCancel:I,confirmLoading:t,width:900,children:[(0,s.jsx)(E,{dataState:{...d},onUpdateField:L}),(0,s.jsx)(x.E,{status:p})]}),(0,s.jsx)("br",{}),(0,s.jsx)(N.Z,{type:"primary",onClick:()=>{r(-1),c(h.gX),a(!0)},children:"Add a new variant"})]})},{Panel:A}=n.Z,{Title:B}=i.Z;function R(){return(0,s.jsxs)("div",{className:"config-video-variants",children:[(0,s.jsx)(B,{children:"Video configuration"}),(0,s.jsxs)("p",{className:"description",children:["Before changing your video configuration"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:"visit the video documentation"})," ","to learn how it impacts your stream performance. The general rule is to start conservatively by having one middle quality stream output variant and experiment with adding more of varied qualities."]}),(0,s.jsxs)(r.Z,{gutter:[16,16],children:[(0,s.jsx)(o.Z,{md:24,lg:12,children:(0,s.jsx)("div",{className:"form-module variants-table-module",children:(0,s.jsx)(L,{})})}),(0,s.jsxs)(o.Z,{md:24,lg:12,children:[(0,s.jsx)("div",{className:"form-module latency-module",children:(0,s.jsx)(y,{})}),(0,s.jsx)(n.Z,{className:"advanced-settings codec-module",children:(0,s.jsx)(A,{header:"Advanced Settings",children:(0,s.jsx)("div",{className:"form-module variants-table-module",children:(0,s.jsx)(p,{})})},"1")})]})]})]})}}},function(e){e.O(0,[6880,6386,3698,3013,8213,969,8740,9774,2888,179],function(){return e(e.s=6440)}),_N_E=e.O()}]);
//# sourceMappingURL=config-video-62abba85a0f06119.js.map