import{u as U,f as G,w as K,d as ot,e as S,x as lt,E as st,P as J,F as ct}from"./default.d4afc7a9.js";import{_ as ut}from"./plugin-vue_export-helper.21dcd24c.js";import{d as A,o as dt,n as ft,h as vt,g as mt,e as W,f as m,c as at,u as pt,F as R,B as T,E as L,K as w,G as Q,D as V,I as X,C as gt,y as bt}from"./index.e8bf956f.js";import{_ as Y}from"./index.8346ef48.js";var z={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},D={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},y=[],q=[];function xt(){var o=document.createElement("div"),t=o.style;"AnimationEvent"in window||(delete z.animationstart.animation,delete D.animationend.animation),"TransitionEvent"in window||(delete z.transitionstart.transition,delete D.transitionend.transition);function n(a,u){for(var d in a)if(a.hasOwnProperty(d)){var f=a[d];for(var s in f)if(s in t){u.push(f[s]);break}}}n(z,y),n(D,q)}typeof window!="undefined"&&typeof document!="undefined"&&xt();function Z(o,t,n){o.addEventListener(t,n,!1)}function tt(o,t,n){o.removeEventListener(t,n,!1)}var ht={startEvents:y,addStartEventListener:function(t,n){if(y.length===0){setTimeout(n,0);return}y.forEach(function(a){Z(t,a,n)})},removeStartEventListener:function(t,n){y.length!==0&&y.forEach(function(a){tt(t,a,n)})},endEvents:q,addEndEventListener:function(t,n){if(q.length===0){setTimeout(n,0);return}q.forEach(function(a){Z(t,a,n)})},removeEndEventListener:function(t,n){q.length!==0&&q.forEach(function(a){tt(t,a,n)})}},$=ht,b;function et(o){return!o||o.offsetParent===null}function _t(o){var t=(o||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}var Et=A({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,n){var a=n.slots,u=n.expose,d=mt(),f=U("",t),s=f.csp,p=f.prefixCls;u({csp:s});var l=null,x=null,g=null,N=!1,r=null,v=!1,k=function(e){if(!v){var i=G(d);!e||e.target!==i||N||C(i)}},P=function(e){!e||e.animationName!=="fadeEffect"||C(e.target)},B=function(){var e=t.insertExtraNode;return e?"".concat(p.value,"-click-animating"):"".concat(p.value,"-click-animating-without-extra-node")},M=function(e,i){var h=t.insertExtraNode,_=t.disabled;if(!(_||!e||et(e)||e.className.indexOf("-leave")>=0)){r=document.createElement("div"),r.className="".concat(p.value,"-click-animating-node");var E=B();if(e.removeAttribute(E),e.setAttribute(E,"true"),b=b||document.createElement("style"),i&&i!=="#ffffff"&&i!=="rgb(255, 255, 255)"&&_t(i)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(i)&&i!=="transparent"){var I;(I=s.value)!==null&&I!==void 0&&I.nonce&&(b.nonce=s.value.nonce),r.style.borderColor=i,b.innerHTML=`
        [`.concat(p.value,"-click-animating-without-extra-node='true']::after, .").concat(p.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(i,`;
        }`),document.body.contains(b)||document.body.appendChild(b)}h&&e.appendChild(r),$.addStartEventListener(e,k),$.addEndEventListener(e,P)}},C=function(e){if(!(!e||e===r||!(e instanceof Element))){var i=t.insertExtraNode,h=B();e.setAttribute(h,"false"),b&&(b.innerHTML=""),i&&r&&e.contains(r)&&e.removeChild(r),$.removeStartEventListener(e,k),$.removeEndEventListener(e,P)}},O=function(e){if(!(!e||!e.getAttribute||e.getAttribute("disabled")||e.className.indexOf("disabled")>=0)){var i=function(_){if(!(_.target.tagName==="INPUT"||et(_.target))){C(e);var E=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");x=setTimeout(function(){return M(e,E)},0),K.cancel(g),N=!0,g=K(function(){N=!1},10)}};return e.addEventListener("click",i,!0),{cancel:function(){e.removeEventListener("click",i,!0)}}}};return dt(function(){ft(function(){var c=G(d);c.nodeType===1&&(l=O(c))})}),vt(function(){l&&l.cancel(),clearTimeout(x),v=!0}),function(){var c;return(c=a.default)===null||c===void 0?void 0:c.call(a)[0]}}}),kt=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},Ct=A({compatConfig:{MODE:3},name:"ACheckableTag",props:kt(),setup:function(t,n){var a=n.slots,u=n.emit,d=U("tag",t),f=d.prefixCls,s=function(x){var g=t.checked;u("update:checked",!g),u("change",!g),u("click",x)},p=W(function(){var l;return ot(f.value,(l={},S(l,"".concat(f.value,"-checkable"),!0),S(l,"".concat(f.value,"-checkable-checked"),t.checked),l))});return function(){var l;return m("span",{class:p.value,onClick:s},[(l=a.default)===null||l===void 0?void 0:l.call(a)])}}}),F=Ct,wt=new RegExp("^(".concat(lt.join("|"),")(-inverse)?$")),Tt=new RegExp("^(".concat(st.join("|"),")$")),yt=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:J.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:J.any}},j=A({compatConfig:{MODE:3},name:"ATag",props:yt(),slots:["closeIcon","icon"],setup:function(t,n){var a=n.slots,u=n.emit,d=n.attrs,f=U("tag",t),s=f.prefixCls,p=f.direction,l=at(!0);pt(function(){t.visible!==void 0&&(l.value=t.visible)});var x=function(v){v.stopPropagation(),u("update:visible",!1),u("close",v),!v.defaultPrevented&&t.visible===void 0&&(l.value=!1)},g=W(function(){var r=t.color;return r?wt.test(r)||Tt.test(r):!1}),N=W(function(){var r;return ot(s.value,(r={},S(r,"".concat(s.value,"-").concat(t.color),g.value),S(r,"".concat(s.value,"-has-color"),t.color&&!g.value),S(r,"".concat(s.value,"-hidden"),!l.value),S(r,"".concat(s.value,"-rtl"),p.value==="rtl"),r))});return function(){var r,v,k,P=t.icon,B=P===void 0?(r=a.icon)===null||r===void 0?void 0:r.call(a):P,M=t.color,C=t.closeIcon,O=C===void 0?(v=a.closeIcon)===null||v===void 0?void 0:v.call(a):C,c=t.closable,e=c===void 0?!1:c,i=function(){return e?O?m("span",{class:"".concat(s.value,"-close-icon"),onClick:x},[O]):m(ct,{class:"".concat(s.value,"-close-icon"),onClick:x},null):null},h={backgroundColor:M&&!g.value?M:void 0},_=B||null,E=(k=a.default)===null||k===void 0?void 0:k.call(a),I=_?m(R,null,[_,m("span",null,[E])]):E,rt="onClick"in d,H=m("span",{class:N.value,style:h},[I,i()]);return rt?m(Et,null,{default:function(){return[H]}}):H}}});j.CheckableTag=F;j.install=function(o){return o.component(j.name,j),o.component(F.name,F),o};const qt={class:"container w-full h-full max-w-full flex flex-col"},St={class:"demo1 flex-1 flex justify-center items-center"},At={class:"relative w-[560px] border text-[0px] m-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:w-[100px] before:bg-gradient-to-r before:from-transparent before:to-white before:pointer-events-none"},Nt={class:"flex w-full flex-nowrap overflow-x-auto p-[8px_10px]"},Pt={class:"demo2 flex-1 flex justify-center items-center"},It={class:"relative w-[560px] border text-[0px] m-auto"},Lt={class:"demos flex w-full flex-nowrap overflow-x-auto p-[8px_10px]"},Bt=A({__name:"index",setup(o){const t=at(10);return(n,a)=>{const u=F;return T(),L("div",qt,[w("div",St,[w("div",At,[w("ul",Nt,[(T(!0),L(R,null,Q(t.value,d=>(T(),L("li",{key:d,class:"mx-6px"},[m(u,{class:"!border !border-[#ddd] !p-[6px_18px] !font-bold hover:bg-[#ddd] hover:text-white"},{default:V(()=>[X(" Button ")]),_:1})]))),128))])])]),w("div",Pt,[w("div",It,[w("ul",Lt,[(T(!0),L(R,null,Q(t.value,d=>(T(),L("li",{key:d,class:"mx-6px"},[m(u,{class:"!border !border-[#ddd] !p-[6px_18px] !font-bold hover:bg-[#ddd] hover:text-white"},{default:V(()=>[X(" Button ")]),_:1})]))),128))])])])])}}});var nt=ut(Bt,[["__scopeId","data-v-e2ad3d70"]]);const Mt=`<h1>\u6E10\u53D8\u906E\u7F69\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<h3>linear-gradient + pointer-event</h3>
<p>\u6848\u4F8B\u4E00\u4F7F\u7528\u7684\u662F\u4F2A\u5143\u7D20\u6E10\u53D8 <code>linear-gradient</code> \u914D\u5408 <code>pointer-event</code> \u5B9E\u73B0\u3002</p>
<p>\u5B9E\u73B0\u53F3\u4FA7\u7684\u6E10\u53D8\u6D88\u5931\u7684\u906E\u7F69\u6548\u679C\uFF0C\u8FD9\u4E2A\u6700\u5E38\u89C1\u7684\uFF0C\u5C31\u662F\u901A\u8FC7\u53E0\u52A0\u4E00\u4E2A\u4ECE\u900F\u660E\u5230\u767D\u8272\u7684\u6E10\u53D8\u5C42\u5B9E\u73B0\u3002</p>
<p>\u53E0\u52A0\u7684\u8FD9\u4E00\u5C42\uFF0C\u786E\u5B9E\u906E\u6321\u4F4F\u4E86\u5176\u4E0B\u65B9\u7684\u6309\u94AE\u70B9\u51FB\u3002</p>
<p>\u9700\u8981\u7ED9\u53E0\u52A0\u7684\u8FD9\u4E00\u5C42\uFF0C\u6DFB\u52A0\u4E00\u4E2A <code>pointer-event: none</code></p>
<blockquote>
<p><code>pointer-event</code>\uFF1ACSS \u5C5E\u6027\u6307\u5B9A\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B (\u5982\u679C\u6709) \u67D0\u4E2A\u7279\u5B9A\u7684\u56FE\u5F62\u5143\u7D20\u53EF\u4EE5\u6210\u4E3A\u9F20\u6807\u4E8B\u4EF6\u7684 target\u3002\u5F53\u503C\u4E3A none \u65F6\uFF0C\u5143\u7D20\u6C38\u8FDC\u4E0D\u4F1A\u6210\u4E3A\u9F20\u6807\u4E8B\u4EF6\u7684 target\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\uFF0C\u5B9E\u73B0\u4E86\u9F20\u6807\u70B9\u51FB\u7A7F\u900F\u3002</p>
</blockquote>
<h3>\u4F7F\u7528 mask \u5B9E\u73B0\u66F4\u5B8C\u7F8E\u7684\u906E\u7F69</h3>
<p>\u4E0A\u8FF0\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5F53\u5BB9\u5668\u5B58\u5728\u80CC\u666F\u8272\u65F6\uFF0C\u53EA\u662F\u4F7F\u7528\u767D\u8272\u7684\u906E\u7F69\u906E\u6321\u3002</p>
<p>\u4E3A\u4E86\u89E3\u51B3\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CCSS \u6709\u4E00\u4E2A\u4E13\u95E8\u7684\u5C5E\u6027\u6765\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E5F\u5C31\u662F -- mask\u3002</p>
<blockquote>
<p><code>mask</code>\uFF1A\u5C5E\u6027\u5141\u8BB8\u4F7F\u7528\u8005\u901A\u8FC7\u906E\u7F69\u6216\u8005\u88C1\u5207\u7279\u5B9A\u533A\u57DF\u7684\u56FE\u7247\u7684\u65B9\u5F0F\u6765\u9690\u85CF\u4E00\u4E2A\u5143\u7D20\u7684\u90E8\u5206\u6216\u8005\u5168\u90E8\u53EF\u89C1\u533A\u57DF\u3002</p>
</blockquote>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u6E10\u53D8\u906E\u7F69\u6548\u679C
 *
 * https://github.com/chokcoco/iCSS/issues/163
 */

import { ref } from 'vue';

const count = ref&lt;number&gt;(10)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full h-full max-w-full flex flex-col&quot;&gt;
    &lt;div class=&quot;demo1 flex-1 flex justify-center items-center&quot;&gt;
      &lt;div class=&quot;relative w-[560px] border text-[0px] m-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:w-[100px] before:bg-gradient-to-r before:from-transparent before:to-white before:pointer-events-none&quot;&gt;
        &lt;ul
          class=&quot;flex w-full flex-nowrap overflow-x-auto p-[8px_10px]&quot;
        &gt;
          &lt;li v-for=&quot;(item) in count&quot; :key=&quot;item&quot; class=&quot;mx-6px&quot;&gt;
            &lt;a-checkable-tag
              class=&quot;!border !border-[#ddd] !p-[6px_18px] !font-bold hover:bg-[#ddd] hover:text-white&quot;
            &gt;
              Button
            &lt;/a-checkable-tag&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;demo2 flex-1 flex justify-center items-center&quot;&gt;
      &lt;div class=&quot;relative w-[560px] border text-[0px] m-auto&quot;&gt;
        &lt;ul
          class=&quot;demos flex w-full flex-nowrap overflow-x-auto p-[8px_10px]&quot;
        &gt;
          &lt;li v-for=&quot;(item) in count&quot; :key=&quot;item&quot; class=&quot;mx-6px&quot;&gt;
            &lt;a-checkable-tag
              class=&quot;!border !border-[#ddd] !p-[6px_18px] !font-bold hover:bg-[#ddd] hover:text-white&quot;
            &gt;
              Button
            &lt;/a-checkable-tag&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.demos {
  mask: linear-gradient(90deg, #fff 70%, transparent);
}
&lt;/style&gt;
</code></pre>
`,zt=A({__name:"page",setup(o){return A({components:{Demo:nt,DemoPreview:Y}}),(t,n)=>(T(),gt(Y,{content:bt(Mt)},{default:V(()=>[m(nt)]),_:1},8,["content"]))}});export{zt as default};
