import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{d as a,c as p,B as n,E as e,K as o,F as d,G as m,M as f,N as _,C as g,D as h,y as v,f as b}from"./index.fbeb59c3.js";import{_ as l}from"./index.b9dd6921.js";const x=t=>(f("data-v-0894a0b5"),t=t(),_(),t),y={class:"container w-full h-full max-w-full flex"},q={class:"demo flex-1 items-stretch flex justify-center bg-black blur-[4px] contrast-[8]"},w={class:"loading w-[30px] h-[30px] relative m-auto"},k=x(()=>o("div",{class:"base absolute top-0 left-0 right-0 bottom-0 bg-white rounded-[50%] opacity-0 translate-x-[-700%]"},null,-1)),$=a({__name:"index",setup(t){const s=p(7);return(i,I)=>(n(),e("div",y,[o("div",q,[o("div",w,[k,(n(!0),e(d,null,m(s.value,c=>(n(),e("div",{key:c,class:"ball absolute top-0 left-0 right-0 bottom-0 bg-white rounded-[50%] opacity-0 translate-x-[-700%]"}))),128))])])]))}});var r=u($,[["__scopeId","data-v-0894a0b5"]]);const B=`<h1>\u5C0F\u7403\u7A7F\u68ADLoading\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<p>...</p>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u5C0F\u7403\u7A7F\u68ADLoading\u6548\u679C
 *
 * https://csscoco.com/inspiration/#/./filter/filter-ball-loading
 */

import { ref } from 'vue';

const count = ref&lt;number&gt;(7)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full h-full max-w-full flex&quot;&gt;
    &lt;div class=&quot;demo flex-1 items-stretch flex justify-center bg-black blur-[4px] contrast-[8]&quot;&gt;
      &lt;div class=&quot;loading w-[30px] h-[30px] relative m-auto&quot;&gt;
        &lt;div class=&quot;base absolute top-0 left-0 right-0 bottom-0 bg-white rounded-[50%] opacity-0 translate-x-[-700%]&quot;&gt;&lt;/div&gt;
        &lt;div
          v-for=&quot;(item) in count&quot;
          :key=&quot;item&quot;
          class=&quot;ball absolute top-0 left-0 right-0 bottom-0 bg-white rounded-[50%] opacity-0 translate-x-[-700%]&quot;
        &gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;

.base {
  animation: scaleMove 3.5s linear infinite;
}

.ball {
  $count: 7;

  @for $i from 0 through $count {
    &amp;:nth-child(#{$i}) {
        animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
    }
  }
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  50% {
    opacity: 1;
    transform: translate(50%, 0);
  }
  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(50%, 0) scale(2);
  }
  90%,
  100% {
    opacity: 0;
    transform: translate(50%, 0) scale(1);
  }
}
&lt;/style&gt;
</code></pre>
`,M=a({__name:"page",setup(t){return a({components:{Demo:r,DemoPreview:l}}),(s,i)=>(n(),g(l,{content:v(B)},{default:h(()=>[b(r)]),_:1},8,["content"]))}});export{M as default};
