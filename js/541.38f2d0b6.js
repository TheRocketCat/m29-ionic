"use strict";(self["webpackChunkionic_frontend"]=self["webpackChunkionic_frontend"]||[]).push([[541],{3541:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return k},keyboardDidClose:function(){return w},keyboardDidOpen:function(){return b},keyboardDidResize:function(){return g},resetKeyboardAssist:function(){return u},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return f},startKeyboardAssist:function(){return c},trackViewportChanges:function(){return D}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i="ionKeyboardDidShow",o="ionKeyboardDidHide",r=150;let s={},a={},d=!1;const u=()=>{s={},a={},d=!1},c=e=>{h(e),e.visualViewport&&(a=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),b()||g(e)?f(e):w(e)&&p(e)})},h=e=>{e.addEventListener("keyboardDidShow",(t=>f(e,t))),e.addEventListener("keyboardDidHide",(()=>p(e)))},f=(e,t)=>{l(e,t),d=!0},p=e=>{y(e),d=!1},b=()=>{const e=(s.height-a.height)*a.scale;return!d&&s.width===a.width&&e>r},g=e=>d&&!w(e),w=e=>d&&a.height===e.innerHeight,l=(e,t)=>{const n=t?t.keyboardHeight:e.innerHeight-a.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(o)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},D=e=>{s=Object.assign({},a),a=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.38f2d0b6.js.map