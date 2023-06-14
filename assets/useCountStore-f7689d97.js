import{r as h,g as M}from"./index-ff7f5132.js";const g=e=>{let t;const n=new Set,r=(f,p)=>{const s=typeof f=="function"?f(t):f;if(!Object.is(s,t)){const d=t;t=p??typeof s!="object"?s:Object.assign({},t,s),n.forEach(S=>S(t,d))}},o=()=>t,i={setState:r,getState:o,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{({BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,i),i},V=e=>e?g(e):g;var D={exports:{}},O={},b={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=h;function $(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j=typeof Object.is=="function"?Object.is:$,_=v.useState,T=v.useEffect,C=v.useLayoutEffect,I=v.useDebugValue;function P(e,t){var n=t(),r=_({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return C(function(){o.value=n,o.getSnapshot=t,E(o)&&u({inst:o})},[e,n,t]),T(function(){return E(o)&&u({inst:o}),e(function(){E(o)&&u({inst:o})})},[e]),I(n),n}function E(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!j(e,n)}catch{return!0}}function A(e,t){return t()}var B=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?A:P;R.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:B;b.exports=R;var z=b.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=h,L=z;function q(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var U=typeof Object.is=="function"?Object.is:q,W=L.useSyncExternalStore,k=y.useRef,F=y.useEffect,G=y.useMemo,H=y.useDebugValue;O.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var u=k(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=G(function(){function f(a){if(!p){if(p=!0,s=a,a=r(a),o!==void 0&&l.hasValue){var c=l.value;if(o(c,a))return d=c}return d=a}if(c=d,U(s,a))return c;var m=r(a);return o!==void 0&&o(c,m)?c:(s=a,d=m)}var p=!1,s,d,S=n===void 0?null:n;return[function(){return f(t())},S===null?void 0:function(){return f(S())}]},[t,n,r,o]);var i=W(e,u[0],u[1]);return F(function(){l.hasValue=!0,l.value=i},[i]),H(i),i};D.exports=O;var J=D.exports;const K=M(J),{useSyncExternalStoreWithSelector:N}=K;function Q(e,t=e.getState,n){const r=N(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return h.useDebugValue(r),r}const w=e=>{({BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?V(e):e,n=(r,o)=>Q(t,r,o);return Object.assign(n,t),n},X=e=>e?w(e):w,Y=(e,t)=>(n,r,o)=>{let u=r()!==void 0,l=!1;const i=new BroadcastChannel(t.name),f=(...s)=>{const d=r();if(n(...s),t.unsync)return;const S=r(),a=Object.entries(S).reduce((c,[m,x])=>(d[m]!==x&&(c={...c,[m]:x}),c),{});i.postMessage(a)};return i.onmessage=s=>{if(s.data.sync===t.name){if(!l)return;const d=Object.entries(r()).reduce((S,[a,c])=>(typeof c!="function"&&typeof c!="symbol"&&(S={...S,[a]:c}),S),{});i.postMessage(d);return}n(s.data),u=!0},u||(()=>{var s;i.postMessage({sync:t.name}),setTimeout(()=>{u||(l=!0,u=!0)},(s=t.mainTimeout)!=null?s:100)})(),e(f,r,o)},Z=Y,te=X(Z((e,t)=>({count:0,increment:()=>e(n=>({count:n.count+1})),decrement:()=>e({count:t().count-1}),mode:"Sync",setMode:n=>e({mode:n})}),{name:"my-store"}));export{te as u};
