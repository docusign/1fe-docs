import{j as m}from"./jsx-runtime.D_zvdyIk.js";import{r as w}from"./index.Dy6lLLXr.js";const se=Object.freeze({left:0,top:0,width:16,height:16}),M=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),B=Object.freeze({...se,...M}),U=Object.freeze({...B,body:"",hidden:!1});function ye(e,n){const o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);const i=((e.rotate||0)+(n.rotate||0))%4;return i&&(o.rotate=i),o}function X(e,n){const o=ye(e,n);for(const i in U)i in M?i in e&&!(i in o)&&(o[i]=M[i]):i in n?o[i]=n[i]:i in e&&(o[i]=e[i]);return o}function we(e,n){const o=e.icons,i=e.aliases||Object.create(null),t=Object.create(null);function r(s){if(o[s])return t[s]=[];if(!(s in t)){t[s]=null;const l=i[s]&&i[s].parent,a=l&&r(l);a&&(t[s]=[l].concat(a))}return t[s]}return Object.keys(o).concat(Object.keys(i)).forEach(r),t}function Ie(e,n,o){const i=e.icons,t=e.aliases||Object.create(null);let r={};function s(l){r=X(i[l]||t[l],r)}return s(n),o.forEach(s),X(e,r)}function ce(e,n){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t)});const i=we(e);for(const t in i){const r=i[t];r&&(n(t,Ie(e,t,r)),o.push(t))}return o}const ve={provider:"",aliases:{},not_found:{},...se};function $(e,n){for(const o in n)if(o in e&&typeof e[o]!=typeof n[o])return!1;return!0}function le(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!$(e,ve))return null;const o=n.icons;for(const t in o){const r=o[t];if(!t||typeof r.body!="string"||!$(r,U))return null}const i=n.aliases||Object.create(null);for(const t in i){const r=i[t],s=r.parent;if(!t||typeof s!="string"||!o[s]&&!i[s]||!$(r,U))return null}return n}const ae=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,n,o,i="")=>{const t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;i=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){const l=t.pop(),a=t.pop(),c={provider:t.length>0?t[0]:i,prefix:a,name:l};return n&&!O(c)?null:c}const r=t[0],s=r.split("-");if(s.length>1){const l={provider:i,prefix:s.shift(),name:s.join("-")};return n&&!O(l)?null:l}if(o&&i===""){const l={provider:i,prefix:"",name:r};return n&&!O(l,o)?null:l}return null},O=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,J=Object.create(null);function je(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function C(e,n){const o=J[e]||(J[e]=Object.create(null));return o[n]||(o[n]=je(e,n))}function ue(e,n){return le(n)?ce(n,(o,i)=>{i?e.icons[o]=i:e.missing.add(o)}):[]}function ke(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return!1}let N=!1;function fe(e){return typeof e=="boolean"&&(N=e),N}function K(e){const n=typeof e=="string"?D(e,!0,N):e;if(n){const o=C(n.provider,n.prefix),i=n.name;return o.icons[i]||(o.missing.has(i)?null:void 0)}}function Se(e,n){const o=D(e,!0,N);if(!o)return!1;const i=C(o.provider,o.prefix);return n?ke(i,o.name,n):(i.missing.add(o.name),!0)}function Ce(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),N&&!n&&!e.prefix){let t=!1;return le(e)&&(e.prefix="",ce(e,(r,s)=>{Se(r,s)&&(t=!0)})),t}const o=e.prefix;if(!O({prefix:o,name:"a"}))return!1;const i=C(n,o);return!!ue(i,e)}const de=Object.freeze({width:null,height:null}),pe=Object.freeze({...de,...M}),Te=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Pe=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Y(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;const i=e.split(Te);if(i===null||!i.length)return e;const t=[];let r=i.shift(),s=Pe.test(r);for(;;){if(s){const l=parseFloat(r);isNaN(l)?t.push(r):t.push(Math.ceil(l*n*o)/o)}else t.push(r);if(r=i.shift(),r===void 0)return t.join("");s=!s}}function Le(e,n="defs"){let o="";const i=e.indexOf("<"+n);for(;i>=0;){const t=e.indexOf(">",i),r=e.indexOf("</"+n);if(t===-1||r===-1)break;const s=e.indexOf(">",r);if(s===-1)break;o+=e.slice(t+1,r).trim(),e=e.slice(0,i).trim()+e.slice(s+1)}return{defs:o,content:e}}function Ee(e,n){return e?"<defs>"+e+"</defs>"+n:n}function Ne(e,n,o){const i=Le(e);return Ee(i.defs,n+i.content+o)}const Fe=e=>e==="unset"||e==="undefined"||e==="none";function Ae(e,n){const o={...B,...e},i={...pe,...n},t={left:o.left,top:o.top,width:o.width,height:o.height};let r=o.body;[o,i].forEach(y=>{const f=[],h=y.hFlip,k=y.vFlip;let I=y.rotate;h?k?I+=2:(f.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),f.push("scale(-1 1)"),t.top=t.left=0):k&&(f.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),f.push("scale(1 -1)"),t.top=t.left=0);let v;switch(I<0&&(I-=Math.floor(I/4)*4),I=I%4,I){case 1:v=t.height/2+t.top,f.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:f.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:v=t.width/2+t.left,f.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}I%2===1&&(t.left!==t.top&&(v=t.left,t.left=t.top,t.top=v),t.width!==t.height&&(v=t.width,t.width=t.height,t.height=v)),f.length&&(r=Ne(r,'<g transform="'+f.join(" ")+'">',"</g>"))});const s=i.width,l=i.height,a=t.width,c=t.height;let u,d;s===null?(d=l===null?"1em":l==="auto"?c:l,u=Y(d,a/c)):(u=s==="auto"?a:s,d=l===null?Y(u,c/a):l==="auto"?c:l);const g={},p=(y,f)=>{Fe(f)||(g[y]=f.toString())};p("width",u),p("height",d);const b=[t.left,t.top,a,c];return g.viewBox=b.join(" "),{attributes:g,viewBox:b,body:r}}const Oe=/\sid="(\S+)"/g,Re="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Me=0;function De(e,n=Re){const o=[];let i;for(;i=Oe.exec(e);)o.push(i[1]);if(!o.length)return e;const t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(r=>{const s=typeof n=="function"?n(r):n+(Me++).toString(),l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+s+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}const _=Object.create(null);function ze(e,n){_[e]=n}function q(e){return _[e]||_[""]}function V(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const G=Object.create(null),P=["https://api.simplesvg.com","https://api.unisvg.com"],R=[];for(;P.length>0;)P.length===1||Math.random()>.5?R.push(P.shift()):R.push(P.pop());G[""]=V({resources:["https://api.iconify.design"].concat(R)});function $e(e,n){const o=V(n);return o===null?!1:(G[e]=o,!0)}function W(e){return G[e]}const He=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Z=He();function Ue(e,n){const o=W(e);if(!o)return 0;let i;if(!o.maxURL)i=0;else{let t=0;o.resources.forEach(s=>{t=Math.max(t,s.length)});const r=n+".json?icons=";i=o.maxURL-t-o.path.length-r.length}return i}function _e(e){return e===404}const qe=(e,n,o)=>{const i=[],t=Ue(e,n),r="icons";let s={type:r,provider:e,prefix:n,icons:[]},l=0;return o.forEach((a,c)=>{l+=a.length+1,l>=t&&c>0&&(i.push(s),s={type:r,provider:e,prefix:n,icons:[]},l=a.length),s.icons.push(a)}),i.push(s),i};function Qe(e){if(typeof e=="string"){const n=W(e);if(n)return n.path}return"/"}const Be=(e,n,o)=>{if(!Z){o("abort",424);return}let i=Qe(n.provider);switch(n.type){case"icons":{const r=n.prefix,l=n.icons.join(","),a=new URLSearchParams({icons:l});i+=r+".json?"+a.toString();break}case"custom":{const r=n.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:o("abort",400);return}let t=503;Z(e+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{o(_e(s)?"abort":"next",s)});return}return t=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?o("abort",r):o("next",t)});return}setTimeout(()=>{o("success",r)})}).catch(()=>{o("next",t)})},Ve={prepare:qe,send:Be};function Ge(e){const n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,r)=>t.provider!==r.provider?t.provider.localeCompare(r.provider):t.prefix!==r.prefix?t.prefix.localeCompare(r.prefix):t.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return e.forEach(t=>{if(i.name===t.name&&i.prefix===t.prefix&&i.provider===t.provider)return;i=t;const r=t.provider,s=t.prefix,l=t.name,a=o[r]||(o[r]=Object.create(null)),c=a[s]||(a[s]=C(r,s));let u;l in c.icons?u=n.loaded:s===""||c.missing.has(l)?u=n.missing:u=n.pending;const d={provider:r,prefix:s,name:l};u.push(d)}),n}function he(e,n){e.forEach(o=>{const i=o.loaderCallbacks;i&&(o.loaderCallbacks=i.filter(t=>t.id!==n))})}function We(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1;const i=e.provider,t=e.prefix;n.forEach(r=>{const s=r.icons,l=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==t)return!0;const c=a.name;if(e.icons[c])s.loaded.push({provider:i,prefix:t,name:c});else if(e.missing.has(c))s.missing.push({provider:i,prefix:t,name:c});else return o=!0,!0;return!1}),s.pending.length!==l&&(o||he([e],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let Xe=0;function Je(e,n,o){const i=Xe++,t=he.bind(null,o,i);if(!n.pending.length)return t;const r={id:i,icons:n,callback:e,abort:t};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),t}function Ke(e,n=!0,o=!1){const i=[];return e.forEach(t=>{const r=typeof t=="string"?D(t,n,o):t;r&&i.push(r)}),i}var Ye={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ze(e,n,o,i){const t=e.resources.length,r=e.random?Math.floor(Math.random()*t):e.index;let s;if(e.random){let x=e.resources.slice(0);for(s=[];x.length>1;){const j=Math.floor(Math.random()*x.length);s.push(x[j]),x=x.slice(0,j).concat(x.slice(j+1))}s=s.concat(x)}else s=e.resources.slice(r).concat(e.resources.slice(0,r));const l=Date.now();let a="pending",c=0,u,d=null,g=[],p=[];typeof i=="function"&&p.push(i);function b(){d&&(clearTimeout(d),d=null)}function y(){a==="pending"&&(a="aborted"),b(),g.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),g=[]}function f(x,j){j&&(p=[]),typeof x=="function"&&p.push(x)}function h(){return{startTime:l,payload:n,status:a,queriesSent:c,queriesPending:g.length,subscribe:f,abort:y}}function k(){a="failed",p.forEach(x=>{x(void 0,u)})}function I(){g.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),g=[]}function v(x,j,T){const F=j!=="success";switch(g=g.filter(S=>S!==x),a){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(j==="abort"){u=T,k();return}if(F){u=T,g.length||(s.length?z():k());return}if(b(),I(),!e.random){const S=e.resources.indexOf(x.resource);S!==-1&&S!==e.index&&(e.index=S)}a="completed",p.forEach(S=>{S(T)})}function z(){if(a!=="pending")return;b();const x=s.shift();if(x===void 0){if(g.length){d=setTimeout(()=>{b(),a==="pending"&&(I(),k())},e.timeout);return}k();return}const j={status:"pending",resource:x,callback:(T,F)=>{v(j,T,F)}};g.push(j),c++,d=setTimeout(z,e.rotate),o(x,n,j.callback)}return setTimeout(z),h}function ge(e){const n={...Ye,...e};let o=[];function i(){o=o.filter(l=>l().status==="pending")}function t(l,a,c){const u=Ze(n,l,a,(d,g)=>{i(),c&&c(d,g)});return o.push(u),u}function r(l){return o.find(a=>l(a))||null}return{query:t,find:r,setIndex:l=>{n.index=l},getIndex:()=>n.index,cleanup:i}}function ee(){}const H=Object.create(null);function et(e){if(!H[e]){const n=W(e);if(!n)return;const o=ge(n),i={config:n,redundancy:o};H[e]=i}return H[e]}function tt(e,n,o){let i,t;if(typeof e=="string"){const r=q(e);if(!r)return o(void 0,424),ee;t=r.send;const s=et(e);s&&(i=s.redundancy)}else{const r=V(e);if(r){i=ge(r);const s=e.resources?e.resources[0]:"",l=q(s);l&&(t=l.send)}}return!i||!t?(o(void 0,424),ee):i.query(n,t,o)().abort}function te(){}function nt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,We(e)}))}function ot(e){const n=[],o=[];return e.forEach(i=>{(i.match(ae)?n:o).push(i)}),{valid:n,invalid:o}}function L(e,n,o){function i(){const t=e.pendingIcons;n.forEach(r=>{t&&t.delete(r),e.icons[r]||e.missing.add(r)})}if(o&&typeof o=="object")try{if(!ue(e,o).length){i();return}}catch(t){console.error(t)}i(),nt(e)}function ne(e,n){e instanceof Promise?e.then(o=>{n(o)}).catch(()=>{n(null)}):n(e)}function it(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:i}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;const r=e.loadIcon;if(e.loadIcons&&(t.length>1||!r)){ne(e.loadIcons(t,i,o),u=>{L(e,t,u)});return}if(r){t.forEach(u=>{const d=r(u,i,o);ne(d,g=>{const p=g?{prefix:i,icons:{[u]:g}}:null;L(e,[u],p)})});return}const{valid:s,invalid:l}=ot(t);if(l.length&&L(e,l,null),!s.length)return;const a=i.match(ae)?q(o):null;if(!a){L(e,s,null);return}a.prepare(o,i,s).forEach(u=>{tt(o,u,d=>{L(e,u.icons,d)})})}))}const rt=(e,n)=>{const o=Ke(e,!0,fe()),i=Ge(o);if(!i.pending.length){let a=!0;return n&&setTimeout(()=>{a&&n(i.loaded,i.missing,i.pending,te)}),()=>{a=!1}}const t=Object.create(null),r=[];let s,l;return i.pending.forEach(a=>{const{provider:c,prefix:u}=a;if(u===l&&c===s)return;s=c,l=u,r.push(C(c,u));const d=t[c]||(t[c]=Object.create(null));d[u]||(d[u]=[])}),i.pending.forEach(a=>{const{provider:c,prefix:u,name:d}=a,g=C(c,u),p=g.pendingIcons||(g.pendingIcons=new Set);p.has(d)||(p.add(d),t[c][u].push(d))}),r.forEach(a=>{const c=t[a.provider][a.prefix];c.length&&it(a,c)}),n?Je(n,i,r):te};function st(e,n){const o={...e};for(const i in n){const t=n[i],r=typeof t;i in de?(t===null||t&&(r==="string"||r==="number"))&&(o[i]=t):r===typeof o[i]&&(o[i]=i==="rotate"?t%4:t)}return o}const ct=/[\s,]+/;function lt(e,n){n.split(ct).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function at(e,n=0){const o=e.replace(/^-?[0-9.]*/,"");function i(t){for(;t<0;)t+=4;return t%4}if(o===""){const t=parseInt(e);return isNaN(t)?0:i(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-o.length));return isNaN(r)?0:(r=r/t,r%1===0?i(r):0)}}return n}function ut(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in n)o+=" "+i+'="'+n[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function ft(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function dt(e){return"data:image/svg+xml,"+ft(e)}function pt(e){return'url("'+dt(e)+'")'}let E;function ht(){try{E=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{E=null}}function gt(e){return E===void 0&&ht(),E?E.createHTML(e):e}const me={...pe,inline:!1},mt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},xt={display:"inline-block"},Q={backgroundColor:"currentColor"},xe={backgroundColor:"transparent"},oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ie={WebkitMask:Q,mask:Q,background:xe};for(const e in ie){const n=ie[e];for(const o in oe)n[e+o]=oe[o]}const bt={...me,inline:!0};function re(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const yt=(e,n,o)=>{const i=n.inline?bt:me,t=st(i,n),r=n.mode||"svg",s={},l=n.style||{},a={...r==="svg"?mt:{}};if(o){const f=D(o,!1,!0);if(f){const h=["iconify"],k=["provider","prefix"];for(const I of k)f[I]&&h.push("iconify--"+f[I]);a.className=h.join(" ")}}for(let f in n){const h=n[f];if(h!==void 0)switch(f){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":a.ref=h;break;case"className":a[f]=(a[f]?a[f]+" ":"")+h;break;case"inline":case"hFlip":case"vFlip":t[f]=h===!0||h==="true"||h===1;break;case"flip":typeof h=="string"&&lt(t,h);break;case"color":s.color=h;break;case"rotate":typeof h=="string"?t[f]=at(h):typeof h=="number"&&(t[f]=h);break;case"ariaHidden":case"aria-hidden":h!==!0&&h!=="true"&&delete a["aria-hidden"];break;default:i[f]===void 0&&(a[f]=h)}}const c=Ae(e,t),u=c.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),r==="svg"){a.style={...s,...l},Object.assign(a,u);let f=0,h=n.id;return typeof h=="string"&&(h=h.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:gt(De(c.body,h?()=>h+"ID"+f++:"iconifyReact"))},w.createElement("svg",a)}const{body:d,width:g,height:p}=e,b=r==="mask"||(r==="bg"?!1:d.indexOf("currentColor")!==-1),y=ut(d,{...u,width:g+"",height:p+""});return a.style={...s,"--svg":pt(y),width:re(u.width),height:re(u.height),...xt,...b?Q:xe,...l},w.createElement("span",a)};fe(!0);ze("",Ve);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Ce(i))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){const i="IconifyProviders["+o+"] is invalid.";try{const t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;$e(o,t)||console.error(i)}catch{console.error(i)}}}}function be(e){const[n,o]=w.useState(!!e.ssr),[i,t]=w.useState({});function r(p){if(p){const b=e.icon;if(typeof b=="object")return{name:"",data:b};const y=K(b);if(y)return{name:b,data:y}}return{name:""}}const[s,l]=w.useState(r(!!e.ssr));function a(){const p=i.callback;p&&(p(),t({}))}function c(p){if(JSON.stringify(s)!==JSON.stringify(p))return a(),l(p),!0}function u(){var p;const b=e.icon;if(typeof b=="object"){c({name:"",data:b});return}const y=K(b);if(c({name:b,data:y}))if(y===void 0){const f=rt([b],u);t({callback:f})}else y&&((p=e.onLoad)===null||p===void 0||p.call(e,b))}w.useEffect(()=>(o(!0),a),[]),w.useEffect(()=>{n&&u()},[e.icon,n]);const{name:d,data:g}=s;return g?yt({...B,...g},e,d):e.children?e.children:e.fallback?e.fallback:w.createElement("span",{})}const A=w.forwardRef((e,n)=>be({...e,_ref:n}));w.forwardRef((e,n)=>be({inline:!0,...e,_ref:n}));function vt(){const e=[{icon:"twemoji:page-facing-up",title:"Application Shell / Layout",subtext:"Lorem Ipsum"},{icon:"twemoji:package",title:"CI/CD",subtext:"Lorem Ipsum"},{icon:"twemoji:test-tube",title:"Testing / Automation",subtext:"Lorem Ipsum"},{icon:"twemoji:man-running",title:"Performance",subtext:"Lorem Ipsum"},{icon:"twemoji:building-construction",title:"Development Tooling",subtext:"Lorem Ipsum"},{icon:"twemoji:cloud",title:"CDN Hosting",subtext:"Lorem Ipsum"},{icon:"twemoji:man-police-officer",title:"Application Security",subtext:"Lorem Ipsum"}],n=[{icon:"twemoji:globe-showing-americas",title:"Internationalization",subtext:"Lorem Ipsum"},{icon:"twemoji:computer-disk",title:"State Management",subtext:"Lorem Ipsum"},{icon:"twemoji:triangular-flag",title:"Feature Flag Management",subtext:"Lorem Ipsum"},{icon:"twemoji:up-right-arrow",title:"Navigation",subtext:"Lorem Ipsum"},{icon:"twemoji:laptop-computer",title:"Browser Information",subtext:"Lorem Ipsum"},{icon:"twemoji:bridge-at-night",title:"Cross Component Communication",subtext:"Lorem Ipsum"},{icon:"twemoji:incoming-envelope",title:"UI Logging",subtext:"Lorem Ipsum"}],[o,i]=w.useState(!1),[t,r]=w.useState(.75),s=w.useRef(null),l=w.useRef(null);return w.useEffect(()=>{const c=s.current,u=l.current;if(c&&u){const p=30/t,b=35/t;c.style.animationDuration=`${p}s`,u.style.animationDuration=`${b}s`,o?(c.style.animationPlayState="paused",u.style.animationPlayState="paused"):(c.style.animationPlayState="running",u.style.animationPlayState="running")}},[o,t]),m.jsxs(m.Fragment,{children:[m.jsx("style",{children:`
    .slider-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    }
    
    .slider-title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-bottom: 24px;
    }
    
    .controls {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;
    }
    
    .pause-button {
      padding: 8px 16px;
      background-color: #4f46e5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    
    .pause-button:hover {
      background-color: #4338ca;
    }
    
    .speed-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .speed-label {
      font-size: 14px;
      color: #666;
    }
    
    .speed-button {
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #e2e8f0;
      color: #334155;
      border: none;
      transition: all 0.2s;
    }
    
    .speed-button.active {
      background-color: #4f46e5;
      color: white;
    }
    
    .row-container {
      position: relative;
      overflow: hidden;
      margin-bottom: 32px;
    }
    
    .slider-track {
      display: flex;
      animation: scroll 30s linear infinite;
    }
    
    .slider-track.bottom {
      margin-left: 160px; /* Staggered positioning */
    }
    
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-270px * 8)); /* Width of cards * number of unique cards */
      }
    }
    
    .card {
      flex: 0 0 250px;
      height: 175px;
      background-color: white;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    
    .icon-placeholder {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-bottom: 12px;
    }
    
    .top-row .icon-placeholder {
      background-color: #e0e7ff;
    }
    
    .bottom-row .icon-placeholder {
      background-color: #dbeafe;
    }
    
    .card-title {
      font-weight: 600;
      font-size: 18px;
      color: #1e293b;
      margin-bottom: 4px;
    }
    
    .card-subtext {
      font-size: 14px;
      color: #64748b;
    }
    
    .fade-gradient {
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }
    
    .fade-left {
      left: 0;
      background: linear-gradient(90deg, #fdfdfd 30%, rgba(251,251,253, 0.00) 100%);
    }
    
    .fade-right {
      right: 0;
      background: linear-gradient(270deg, #f0f9fd 30%, rgba(244,243,252, 0.00) 100%);
    }
    
    .row-labels {
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
      margin-top: 24px;
    }
    
    .row-label {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .color-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    
    .color-dot.indigo {
      background-color: #4f46e5;
    }
    
    .color-dot.blue {
      background-color: #3b82f6;
    }
    
    .label-text {
      font-size: 14px;
      font-weight: 500;
      color: #334155;
    }
  `}),m.jsxs("div",{className:"row-container top-row",children:[m.jsx("div",{className:"fade-gradient fade-left"}),m.jsx("div",{className:"fade-gradient fade-right"}),m.jsxs("div",{ref:s,className:"slider-track",children:[e.map((c,u)=>m.jsxs("div",{className:"card",children:[c.icon&&m.jsx(A,{icon:c.icon,width:"45",height:"45"}),m.jsx("h3",{className:"card-title",children:c.title}),m.jsx("p",{className:"card-subtext",children:c.subtext})]},`top-orig-${u}`)),e.map((c,u)=>m.jsxs("div",{className:"card",children:[c.icon&&m.jsx(A,{icon:c.icon,width:"45",height:"45"}),m.jsx("h3",{className:"card-title",children:c.title}),m.jsx("p",{className:"card-subtext",children:c.subtext})]},`top-dup-${u}`))]})]}),m.jsxs("div",{className:"row-container bottom-row",children:[m.jsx("div",{className:"fade-gradient fade-left"}),m.jsx("div",{className:"fade-gradient fade-right"}),m.jsxs("div",{ref:l,className:"slider-track bottom",children:[n.map((c,u)=>m.jsxs("div",{className:"card",children:[c.icon&&m.jsx(A,{icon:c.icon,width:"45",height:"45"}),m.jsx("h3",{className:"card-title",children:c.title}),m.jsx("p",{className:"card-subtext",children:c.subtext})]},`bottom-orig-${u}`)),n.map((c,u)=>m.jsxs("div",{className:"card",children:[c.icon&&m.jsx(A,{icon:c.icon,width:"45",height:"45"}),m.jsx("h3",{className:"card-title",children:c.title}),m.jsx("p",{className:"card-subtext",children:c.subtext})]},`bottom-dup-${u}`))]})]})]})}export{vt as default};
