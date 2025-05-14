import{r as a}from"./index.BVOCwoKb.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function T(){if(x)return i;x=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function r(l,e,t){var n=null;if(t!==void 0&&(n=""+t),e.key!==void 0&&(n=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:s,type:l,key:n,ref:e!==void 0?e:null,props:t}}return i.Fragment=u,i.jsx=r,i.jsxs=r,i}var f;function v(){return f||(f=1,p.exports=T()),p.exports}var h=v();const d=["Author Code","Target Browser Compatibility","Write Tests","Deploy Experiences","Enforce Quality","Monitor Performance","Measure Impact","Release Components","Establish Standards","Govern Architecture","Introduce Change","Handle Migrations","Manage Dependencies","Automate CICD","Enforce Linting","Collaborate","Integrate Components","Establish Independence","Scale Teams","Enforce Security","Enable Optimizations","Scaffold New Experiences","Experiment","Authenticate","Enforce No-Flys","Enable Rapid Prototyping","Assure Compliance"],E=100,S=40,I=()=>{const[s,u]=a.useState(0),[r,l]=a.useState(""),[e,t]=a.useState(!1),[n,o]=a.useState(E);return a.useEffect(()=>{const m=()=>{const c=d[s];l(e?c.substring(0,r.length-1):c.substring(0,r.length+1)),o(e?S:E),!e&&r===c?setTimeout(()=>t(!0),500):e&&r===""&&(t(!1),u((s+1)%d.length))},R=setInterval(()=>{m()},n);return()=>clearInterval(R)},[r,e,s,n,d]),h.jsx("span",{style:{color:"#4f46e5"},children:r})};export{I as default};
