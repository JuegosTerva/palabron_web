'use strict';function t(e,f,h,p){e.c.la(e.M,f,h,p,void 0)}function E(e,f,h,p){e.c.i?t(e,f,h,p):e.c.Db()._OnMessageFromDOM({type:"event",component:e.M,handler:f,dispatchOpts:p||null,data:h,responseId:null})}function G(e,f,h){e.c.b(e.M,f,h)}function L(e,f){for(const [h,p]of f)G(e,h,p)}window.v=class{constructor(e,f){this.c=e;this.M=f}Ka(){}};
window.qb=class{constructor(e,f){this.Za=e;this.mc=f;this.F=-1;this.aa=-Infinity;this.rc=()=>{this.F=-1;this.aa=Date.now();this.N=!0;this.Za();this.N=!1};this.$a=this.N=!1}};"use strict";function O(e,f){G(e,"get-element",h=>{const p=e.h.get(h.elementId);return f(p,h)})}
window.Fc=class extends self.v{constructor(e,f){super(e,f);this.h=new Map;this.za=!0;L(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const p=this.h.get(h);this.za&&p.parentElement.removeChild(p);this.h.delete(h)}}],["set-visible",h=>{this.za&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.za){var p=this.h.get(h.elementId);p.style.left=h.left+"px";p.style.top=h.top+"px";p.style.width=h.width+"px";p.style.height=
h.height+"px";h=h.fontSize;null!==h&&(p.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>this.va(h)],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);O(this,h=>h)}va(e){var f=this.h.get(e.elementId);e.focus?f.focus():f.blur()}};"use strict";
{const e=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),f=/android/i.test(navigator.userAgent);let h=0;function p(k){const a=document.createElement("script");a.async=!1;a.type="module";return k.wc?new Promise(d=>{const g="c3_resolve_"+h;++h;self[g]=d;a.textContent=k.zc+`\n\nself["${g}"]();`;document.head.appendChild(a)}):new Promise((d,g)=>{a.onload=d;a.onerror=g;a.src=k;document.head.appendChild(a)})}let x=!1,H=!1;function M(){if(!x){try{new Worker("blob://",{get type(){H=
!0}})}catch(k){}x=!0}return H}let y=new Audio;const A={"audio/webm; codecs=opus":!!y.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!y.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!y.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!y.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!y.canPlayType("audio/mp4"),"audio/mpeg":!!y.canPlayType("audio/mpeg")};y=null;async function N(k){k=await I(k);return(new TextDecoder("utf-8")).decode(k)}
function I(k){return new Promise((a,d)=>{const g=new FileReader;g.onload=l=>a(l.target.result);g.onerror=l=>d(l);g.readAsArrayBuffer(k)})}const z=[];let B=0;window.RealFile=window.File;const C=[],u=new Map,D=new Map;let F=0;const J=[];self.runOnStartup=function(k){if("function"!==typeof k)throw Error("runOnStartup called without a function");J.push(k)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.m=class k{constructor(a){this.i=a.Bc;this.P=null;this.f="";this.ga=a.yc;
this.U={};this.Da=this.hb=null;this.Z=[];this.g=this.Ga=null;this.bb=!1;this.O=null;this.C=-1;this.qc=()=>this.Yb();this.gb=[];this.a=a.ib;this.$="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&M()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(f){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.ca=this.l=null;"html5"!==
this.a&&"playable-ad"!==this.a||!this.$||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Jb(d));this.b("runtime",
"create-job-worker",()=>this.Kb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Pa(a)):this.Pa(a)}nb(){return e&&"cordova"===this.a}ka(){const a=navigator.userAgent;return e&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}lb(){return f}Ma(){return f&&b.has(this.a)}async Pa(a){"macos-wkwebview"===this.a&&this.ya({type:"ready"});if("playable-ad"===this.a){this.l=self.c3_base64files;this.ca={};await this.xb();for(let g=0,l=a.G.length;g<l;++g){var d=a.G[g].toLowerCase();
this.ca.hasOwnProperty(d)?a.G[g]={wc:!0,zc:this.ca[d]}:this.l.hasOwnProperty(d)&&(a.G[g]=URL.createObjectURL(this.l[d]))}}a.sc?this.f=a.sc:(d=location.origin,this.f=("null"===d?"file:///":d)+location.pathname,d=this.f.lastIndexOf("/"),-1!==d&&(this.f=this.f.substr(0,d+1)));a.Dc&&(this.U=a.Dc);d=new MessageChannel;this.P=d.port1;this.P.onmessage=g=>this._OnMessageFromRuntime(g.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(g=>this.Vb(g));this.O=new self.ob(this);await P(this.O);
"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Fb(a,d.port2):await this.Eb(a,d.port2)}na(a){a=this.U.hasOwnProperty(a)?this.U[a]:a.endsWith("/workermain.js")&&this.U.hasOwnProperty("workermain.js")?this.U["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ja(a,d,g){if(a.startsWith("blob:"))return new Worker(a,
g);if("cordova"===this.a&&this.$)return a=await this.ia(g.vc?a:this.ga+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),g);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(a,g)}o(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}Oa(a){var d=this.O;return{baseUrl:this.f,previewUrl:location.href,
windowInnerWidth:this.o(),windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:k.I(),projectData:a.Lc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Jc||"",exportType:a.ib,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Kc,jobScheduler:{inputPort:d.Ca,outputPort:d.Fa,maxNumWorkers:d.oc},supportedAudioFormats:A,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.ga+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ga+"opus.wasm.wasm",isFileProtocol:this.$,isiOSCordova:this.nb(),isiOSWebView:this.ka(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Fb(a,d){var g=this.na(a.Cc);this.hb=await this.ja(g,this.f,{type:"module",name:"Runtime",vc:!0});this.g=document.createElement("canvas");this.g.style.display="none";g=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let l=a.Ja||[],
r=a.G;l=await Promise.all(l.map(n=>this.A(n)));r=await Promise.all(r.map(n=>this.A(n)));if("cordova"===this.a)for(let n=0,q=a.ha.length;n<q;++n){const w=a.ha[n],K=w[0];if(K===a.Ia||"scriptsInEvents.js"===K||K.endsWith("/scriptsInEvents.js"))w[1]=await this.A(K)}this.hb.postMessage(Object.assign(this.Oa(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:g,workerDependencyScripts:l,engineScripts:r,projectScripts:a.ha,mainProjectScript:a.Ia,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,g,...Q(this.O)]);this.Z=C.map(n=>new n(this));this.Na();self.c3_callFunction=(n,q)=>this.Ga.Gb(n,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.la("runtime","go-to-last-error-script"))}async Eb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.Z=C.map(n=>new n(this));this.Na();var g=a.G.map(n=>"string"===typeof n?(new URL(n,this.f)).toString():n);Array.isArray(a.Ja)&&g.unshift(...a.Ja);g=await Promise.all(g.map(n=>
this.A(n)));await Promise.all(g.map(n=>p(n)));g=self.C3_ProjectScriptsStatus;const l=a.Ia,r=a.ha;for(let [n,q]of r)if(q||(q=n),n===l)try{q=await this.A(q),await p(q),"preview"!==this.a||g[n]||this.Va(n,"main script did not run to completion")}catch(w){this.Va(n,w)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))q=await this.A(q),await p(q);"preview"===this.a&&"object"!==typeof self.Ec.Gc?(this.X(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Oa(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:J}),this.Ra(),this.Da=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Da,a))}Va(a,d){this.X();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ra(){this.X()}X(){const a=
window.tc;a&&(a.parentElement.removeChild(a),window.tc=null)}async Kb(){const a=await R(this.O);return{outputPort:a,transferables:[a]}}Db(){if(this.i)throw Error("not available in worker mode");return this.Da}la(a,d,g,l,r){this.P.postMessage({type:"event",component:a,handler:d,dispatchOpts:l||null,data:g,responseId:null},r)}pb(a,d){const g=F++,l=new Promise((r,n)=>{D.set(g,{resolve:r,reject:n})});this.P.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:g},
void 0);return l}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Pb(a);if("result"===d)this.ac(a);else if("runtime-ready"===d)this.bc();else if("alert-error"===d)this.X(),alert(a.message);else if("creating-runtime"===d)this.Ra();else throw Error(`unknown message '${d}'`);}Pb(a){const d=a.component,g=a.handler,l=a.data,r=a.responseId;if(a=u.get(d))if(a=a.get(g)){var n=null;try{n=a(l)}catch(q){console.error(`Exception in '${d}' handler '${g}':`,q);null!==r&&this.W(r,!1,""+q);
return}if(null===r)return n;n&&n.then?n.then(q=>this.W(r,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${g}':`,q);this.W(r,!1,""+q)}):this.W(r,!0,n)}else console.warn(`[DOM] No handler '${g}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}W(a,d,g){let l;g&&g.transferables&&(l=g.transferables);this.P.postMessage({type:"result",responseId:a,isOk:d,result:g},l)}ac(a){const d=a.responseId,g=a.isOk;a=a.result;const l=D.get(d);g?l.resolve(a):l.reject(a);
D.delete(d)}b(a,d,g){let l=u.get(a);l||(l=new Map,u.set(a,l));if(l.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);l.set(d,g)}static H(a){if(C.includes(a))throw Error("DOM handler already added");C.push(a)}Na(){for(const a of this.Z)if("runtime"===a.M){this.Ga=a;return}throw Error("cannot find runtime DOM handler");}Vb(a){this.la("debugger","message",a)}bc(){for(const a of this.Z)a.Ka()}static I(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static Y(a){c=!!a}Wa(){-1===this.C&&this.gb.length&&(this.C=requestAnimationFrame(this.qc))}vb(){-1!==this.C&&(cancelAnimationFrame(this.C),this.C=-1)}Yb(){this.C=-1;for(const a of this.gb)a();this.Wa()}xa(){this.Ga.xa()}rb(){this.bb=!0}kb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}mb(a){return!this.kb(a)}async A(a){return"cordova"===this.a&&(a.startsWith("file:")||this.$&&this.mb(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.ia(a),
URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Jb(a){const d=a.filename;switch(a.as){case "text":return await this.jb(d);case "buffer":return await this.ia(d);default:throw Error("unsupported type");}}La(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((g,l)=>{window.resolveLocalFileSystemURL(d,r=>{r.file(g,l)},l)})}async jb(a){a=await this.La(a);return await N(a)}ma(){if(z.length&&!(8<=B)){B++;var a=z.shift();this.yb(a.filename,
a.Ac,a.uc)}}ia(a){return new Promise((d,g)=>{z.push({filename:a,Ac:l=>{B--;this.ma();d(l)},uc:l=>{B--;this.ma();g(l)}});this.ma()})}async yb(a,d,g){try{const l=await this.La(a),r=await I(l);d(r)}catch(l){g(l)}}ya(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async xb(){const a=[];for(const [d,g]of Object.entries(this.l))a.push(this.wb(d,
g));await Promise.all(a)}async wb(a,d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.ca[a]=d.str;else{let g=await this.Cb(d);g||(g=this.zb(d));this.l[a]=g}}async Cb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}zb(a){a=this.hc(a);return this.ub(a.data,
a.xc)}hc(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var g=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const l=d[2];g="base64"===d[1]||"base64"===l?atob(g):decodeURIComponent(g);return{xc:a,data:g}}ub(a,d){var g=a.length;let l=g>>2,r=new Uint8Array(g),n=new Uint32Array(r.buffer,0,l),q,w;for(w=q=0;q<l;++q)n[q]=a.charCodeAt(w++)|a.charCodeAt(w++)<<8|a.charCodeAt(w++)<<16|a.charCodeAt(w++)<<24;for(g&=3;g--;)r[w]=a.charCodeAt(w),++w;return new Blob([r],
{type:d})}}}"use strict";
{const e=self.m;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),p={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},x={dispatchUserScriptEvent:!0},H={dispatchRuntimeEvent:!0};function M(b){return new Promise((c,k)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>k(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function y(b){return new Promise((c,k)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>k(d);a.src=b})}async function A(b){b=URL.createObjectURL(b);try{return await y(b)}finally{URL.revokeObjectURL(b)}}function N(b){return new Promise((c,k)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>k(d);a.readAsText(b)})}async function I(b,c,k){if(!/firefox/i.test(navigator.userAgent))return await A(b);var a=await N(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const g=d.getAttribute("width"),l=d.getAttribute("height");if(!g.includes("%")&&!l.includes("%"))return await A(b)}d.setAttribute("width",c+"px");d.setAttribute("height",k+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await A(b)}function z(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["input",
"textarea","datalist","select"]),C=new Set(["canvas","body","html"]);function u(b){C.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function D(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await A(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,k,a,d){b=await I(b,c,k);const g=document.createElement("canvas");g.width=a;g.height=d;g.getContext("2d").drawImage(b,0,0,c,k);return g};let F=!1;document.addEventListener("pause",()=>F=!0);document.addEventListener("resume",()=>F=!1);function J(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}e.H(class extends self.v{constructor(b){super(b,"runtime");this.cb=!0;this.D=-1;this.Ha="any";this.Xa=this.Ya=!1;this.s=
null;this.ab="";this.Ba=-1;this.B=this.S=null;this.ea=this.da=0;this.fb=b.o();this.ba=b.j();this.T=0;b.b("canvas","update-size",a=>this.dc(a));b.b("runtime","invoke-download",a=>this.Ub(a));b.b("runtime","raster-svg-image",a=>this.Zb(a));b.b("runtime","get-svg-image-size",a=>this.Sb(a));b.b("runtime","set-target-orientation",a=>this.cc(a));b.b("runtime","register-sw",()=>this.$b());b.b("runtime","post-to-debugger",a=>this.Ta(a));b.b("runtime","go-to-script",a=>this.Ta(a));b.b("runtime","before-start-ticking",
()=>this.Ib());b.b("runtime","debug-highlight",a=>this.Lb(a));b.b("runtime","enable-device-orientation",()=>this.tb());b.b("runtime","enable-device-motion",()=>this.sb());b.b("runtime","add-stylesheet",a=>this.Hb(a));b.b("runtime","alert",a=>this.pa(a));b.b("runtime","hide-cordova-splash",()=>this.Tb());b.b("runtime","set-exporting-to-video",a=>this.jc(a));b.b("runtime","export-to-video-progress",a=>this.Qb(a));b.b("runtime","exported-to-video",a=>this.Rb(a));const c=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||z(d)||a.preventDefault()});const k=b.g;window.addEventListener("selectstart",u);window.addEventListener("gesturehold",u);k.addEventListener("selectstart",u);k.addEventListener("gesturehold",u);window.addEventListener("touchstart",u,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",u,{passive:!1}),k.addEventListener("pointerdown",u)):k.addEventListener("touchstart",u);this.R=
0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",D,{passive:!1});window.addEventListener("wheel",D,{passive:!1});window.addEventListener("resize",()=>this.ec());window.addEventListener("fullscreenchange",()=>this.J());window.addEventListener("webkitfullscreenchange",()=>this.J());window.addEventListener("mozfullscreenchange",()=>this.J());window.addEventListener("fullscreenerror",a=>this.ra(a));window.addEventListener("webkitfullscreenerror",
a=>this.ra(a));window.addEventListener("mozfullscreenerror",a=>this.ra(a));if(b.ka())if(window.visualViewport){let a=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>a&&(document.scrollingElement.scrollTop=0);a=d})}else window.addEventListener("focusout",()=>{{const g=document.activeElement;if(g){var a=g.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?d.has(g.type.toLowerCase()||
"text"):z(g)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.fc(a);this.Ea=new Set;this.pc=new WeakSet;this.nc=!1}Ib(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.wa(!0)),document.addEventListener("resume",()=>this.wa(!1))):document.addEventListener("visibilitychange",()=>this.wa(document.hidden));return{isSuspended:!(!document.hidden&&!F)}}Ka(){window.addEventListener("focus",()=>this.L("window-focus"));window.addEventListener("blur",()=>
{this.L("window-blur",{parentHasFocus:J()});this.R=0});window.addEventListener("focusin",c=>{c=c.target;(B.has(c.tagName.toLowerCase())||z(c))&&this.L("keyboard-blur")});window.addEventListener("keydown",c=>this.Sa("keydown",c));window.addEventListener("keyup",c=>this.Sa("keyup",c));window.addEventListener("dblclick",c=>this.ta("dblclick",c,p));window.addEventListener("wheel",c=>this.Wb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.oa(c);this.K("pointerdown",
c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.S=new self.qb(()=>this.Ab(),5),this.S.$a=!0,window.addEventListener("pointerrawupdate",c=>this.Xb(c))):window.addEventListener("pointermove",c=>this.K("pointermove",c)),window.addEventListener("pointerup",c=>this.K("pointerup",c)),window.addEventListener("pointercancel",c=>this.K("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.oa(c);this.ua("pointerdown",c)}),window.addEventListener("mousemove",
c=>this.ua("pointermove",c)),window.addEventListener("mouseup",c=>this.ua("pointerup",c)),window.addEventListener("touchstart",c=>{this.oa(c);this.V("pointerdown",c)}),window.addEventListener("touchmove",c=>this.V("pointermove",c)),window.addEventListener("touchend",c=>this.V("pointerup",c)),window.addEventListener("touchcancel",c=>this.V("pointercancel",c)));const b=()=>this.xa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,
!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.lb()&&!this.c.Ma()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.qa(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}qa(b,c){document.body.style.transform="";if(0<c){var k=document.activeElement;k&&(k=k.getBoundingClientRect(),b=(k.top+k.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=
`translateY(${-b}px)`))}}L(b,c){t(this,b,c||null,H)}o(){return this.c.o()}j(){return this.c.j()}ec(){const b=this.o(),c=this.j();if(this.c.Ma()){if(this.fb===b&&c<this.ba){this.T=this.ba-c;this.qa(this.ba,this.T);return}0<this.T&&(this.T=0,this.qa(c,this.T));this.fb=b;this.ba=c}this.L("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:e.I()});this.c.ka()&&(-1!==this.D&&clearTimeout(this.D),this.Ua(b,c,0))}ic(b,c,k){-1!==this.D&&clearTimeout(this.D);this.D=
setTimeout(()=>this.Ua(b,c,k),48)}Ua(b,c,k){const a=this.o(),d=this.j();this.D=-1;a!=b||d!=c?this.L("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:e.I()}):10>k&&this.ic(a,d,k+1)}cc(b){this.Ha=b.targetOrientation}kc(){const b=this.Ha;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?
c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}J(){const b=e.I();b&&"any"!==this.Ha&&this.kc();t(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.j()})}ra(b){console.warn("[Construct 3] Fullscreen request failed: ",b);t(this,"fullscreenerror",
{isFullscreen:e.I(),innerWidth:this.o(),innerHeight:this.j()})}wa(b){b?this.c.vb():this.c.Wa();t(this,"visibilitychange",{hidden:b})}Sa(b,c){"Backspace"===c.key&&u(c);const k=h.get(c.code)||c.code;E(this,b,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},p)}Wb(b){t(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,
timeStamp:b.timeStamp},p)}ta(b,c,k){f(c)||E(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},k)}ua(b,c){if(!f(c)){var k=this.R;"pointerdown"===b&&0!==k?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");E(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},p);this.R=c.buttons;this.ta(c.type,c,x)}}K(b,c){if(this.S&&"pointermove"!==b){var k=this.S;k.N||(-1!==k.F&&(self.clearTimeout(k.F),k.F=-1),k.aa=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.R);E(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:(c.movementX||0)+this.da,movementY:(c.movementY||0)+this.ea,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},p);this.ea=this.da=0;"mouse"===c.pointerType&&(k="mousemove","pointerdown"===b?k="mousedown":"pointerup"===b&&(k="mouseup"),this.ta(k,c,x),this.R=c.buttons)}Xb(b){this.B&&(this.da+=this.B.movementX||0,this.ea+=this.B.movementY||0);this.B=b;b=this.S;if(-1===
b.F){var c=Date.now(),k=c-b.aa,a=b.mc;k>=a&&b.$a?(b.aa=c,b.N=!0,b.Za(),b.N=!1):b.F=self.setTimeout(b.rc,Math.max(a-k,4))}}Ab(){this.K("pointermove",this.B);this.B=null}V(b,c){for(let k=0,a=c.changedTouches.length;k<a;++k){const d=c.changedTouches[k];E(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||
d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},p)}}oa(b){window!==window.top&&window.focus();this.Qa(b.target)&&document.activeElement&&!this.Qa(document.activeElement)&&document.activeElement.blur()}Qa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}tb(){this.Ya||(this.Ya=!0,window.addEventListener("deviceorientation",b=>this.Nb(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Ob(b)))}sb(){this.Xa||(this.Xa=!0,window.addEventListener("devicemotion",b=>this.Mb(b)))}Nb(b){t(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},p)}Ob(b){t(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},p)}Mb(b){let c=null;var k=b.acceleration;k&&(c=
{x:k.x||0,y:k.y||0,z:k.z||0});k=null;var a=b.accelerationIncludingGravity;a&&(k={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});t(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},p)}dc(b){var c=this.c;c.bb||(c=c.g,c.style.width=b.styleWidth+"px",c.style.height=b.styleHeight+"px",c.style.marginLeft=b.marginLeft+"px",c.style.marginTop=b.marginTop+"px",this.cb&&
(c.style.display="",this.cb=!1))}Ub(b){const c=b.url;b=b.filename;const k=document.createElement("a"),a=document.body;k.textContent=b;k.href=c;k.download=b;a.appendChild(k);k.click();a.removeChild(k)}async Zb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Sb(b){return await self.C3_GetSvgImageSize(b.blob)}async Hb(b){await M(b.url)}xa(){var b=
[...this.Ea];this.Ea.clear();if(!this.nc)for(const c of b)(b=c.play())&&b.catch(()=>{this.pc.has(c)||this.Ea.add(c)})}Tb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Lb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&
(this.s.style.display="none")}$b(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ta(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Gb(b,c){return this.c.pb(this.M,{name:b,params:c})}pa(b){alert(b.message)}fc(b){"entered-fullscreen"===b?(e.Y(!0),this.J()):"exited-fullscreen"===b?(e.Y(!1),this.J()):console.warn("Unknown wrapper message: ",b)}jc(b){const c=document.createElement("h1");c.id="exportToVideoMessage";c.textContent=b.message;document.body.prepend(c);document.body.classList.add("exportingToVideo");
this.c.g.style.display="";this.c.rb()}Qb(b){this.ab=b.message;-1===this.Ba&&(this.Ba=setTimeout(()=>this.Bb(),250))}Bb(){this.Ba=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=this.ab)}Rb(b){window.Ic({type:"exported-video",blob:b.blob,time:b.time})}})}"use strict";
async function P(e){if(e.lc)throw Error("already initialised");e.lc=!0;var f=e.fa.na("dispatchworker.js");e.Aa=await e.fa.ja(f,e.f,{name:"DispatchWorker"});f=new MessageChannel;e.Ca=f.port1;e.Aa.postMessage({type:"_init","in-port":f.port2},[f.port2]);e.Fa=await R(e)}function Q(e){return[e.Ca,e.Fa]}
async function R(e){const f=e.eb.length;var h=e.fa.na("jobworker.js");h=await e.fa.ja(h,e.f,{name:"JobWorker"+f});const p=new MessageChannel,x=new MessageChannel;e.Aa.postMessage({type:"_addJobWorker",port:p.port1},[p.port1]);h.postMessage({type:"init",number:f,"dispatch-port":p.port2,"output-port":x.port2},[p.port2,x.port2]);e.eb.push(h);return x.port1}
self.ob=class{constructor(e){this.fa=e;this.f=e.f;this.f="preview"===e.a?this.f+"workers/":this.f+e.ga;this.oc=Math.min(navigator.hardwareConcurrency||2,16);this.Aa=null;this.eb=[];this.Fa=this.Ca=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.m({Bc:!0,Cc:"workermain.js",G:["scripts/c3runtime.js"],ha:[],Ia:"",yc:"scripts/",Ja:[],ib:"html5"}));"use strict";
self.m.H(class extends self.v{constructor(e){super(e,"mouse");L(this,[["cursor",f=>{document.documentElement.style.cursor=f}],["request-pointer-lock",()=>{this.c.g.requestPointerLock()}],["release-pointer-lock",()=>{document.exitPointerLock()}]]);document.addEventListener("pointerlockchange",()=>{t(this,"pointer-lock-change",{"has-pointer-lock":!!document.pointerLockElement})});document.addEventListener("pointerlockerror",()=>{t(this,"pointer-lock-error",{"has-pointer-lock":!!document.pointerLockElement})})}});
"use strict";function S(e){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>t(e,"sw-message",f.data))}
function T(e){e=e.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(e).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(e):screen.webkitLockOrientation?f=screen.webkitLockOrientation(e):screen.mozLockOrientation?f=screen.mozLockOrientation(e):screen.msLockOrientation&&(f=screen.msLockOrientation(e));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.m.H(class extends self.v{constructor(e){super(e,"browser");this.a="";L(this,[["get-initial-state",f=>this.sa(f)],["ready-for-sw-messages",()=>S(this)],["alert",f=>this.pa(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.va(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>T(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var h=f.type;if("back"===h)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===h)window.history.forward();else if("reload"===h)location.reload();else if("url"===
h){h=f.url;const p=f.target;f=f.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):"preview"===f||"windows-webview2"===f?window.open(h,"_blank"):this.Hc||(2===p?window.top.location=h:1===p?window.parent.location=h:window.location=h)}else"new-window"===h&&(h=f.url,f=f.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):window.open(h,f))}],["request-fullscreen",f=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.m.Y(!0),
this.c.ya({type:"set-fullscreen",fullscreen:!0});else{const h={navigationUI:"auto"};f=f.navUI;1===f?h.navigationUI="hide":2===f&&(h.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(h):f.mozRequestFullScreen?f.mozRequestFullScreen(h):f.msRequestFullscreen?f.msRequestFullscreen(h):f.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):f.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.m.Y(!1),this.c.ya({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{t(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{t(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{t(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{t(this,"backbutton")})}sa(e){this.a=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}pa(e){alert(e.message)}va(e){e=e.isFocus;if("nwjs"===this.a){const f="nwjs"===this.a?nw.Window.get():null;e?f.focus():f.blur()}else e?window.focus():window.blur()}});"use strict";
async function U(e){if(!e.u)try{e.u=await navigator.wakeLock.request("screen"),e.u.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");e.u=null;t(e,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),t(e,"wake-lock-acquired")}catch(f){console.warn("[Construct 3] Failed to acquire screen wake lock: ",f),t(e,"wake-lock-error")}}
function V(){var e=document.body;const f=e.style;f.setProperty("--temp-sai-top","env(safe-area-inset-top)");f.setProperty("--temp-sai-right","env(safe-area-inset-right)");f.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");f.setProperty("--temp-sai-left","env(safe-area-inset-left)");e=getComputedStyle(e);e=[e.getPropertyValue("--temp-sai-top"),e.getPropertyValue("--temp-sai-right"),e.getPropertyValue("--temp-sai-bottom"),e.getPropertyValue("--temp-sai-left")].map(h=>{h=parseInt(h,10);
return isFinite(h)?h:0});f.removeProperty("--temp-sai-top");f.removeProperty("--temp-sai-right");f.removeProperty("--temp-sai-bottom");f.removeProperty("--temp-sai-left");return e}
self.m.H(class extends self.v{constructor(e){super(e,"platform-info");L(this,[["get-initial-state",()=>this.sa()],["request-wake-lock",()=>U(this)],["release-wake-lock",()=>{this.u&&(this.u.release(),this.u=null)}]]);window.addEventListener("resize",()=>{t(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:V()})});this.u=null}sa(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:V(),supportsWakeLock:!!navigator.wakeLock}}});"use strict";async function W(e,f){f=f.type;let h=!0;0===f?h=await X():1===f&&(h=await Y());t(e,"permission-result",{type:f,result:h})}async function X(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(e){return console.warn("[Touch] Failed to request orientation permission: ",e),!1}}
async function Y(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(e){return console.warn("[Touch] Failed to request motion permission: ",e),!1}}self.m.H(class extends self.v{constructor(e){super(e,"touch");G(this,"request-permission",f=>W(this,f))}});
