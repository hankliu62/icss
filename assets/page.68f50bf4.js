import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e,c as d,B as t,E as n,K as u,F as p,G as f,C as h,D as b,y as m,f as g}from"./index.e8bf956f.js";import{_ as r}from"./index.8346ef48.js";const _={class:"container w-full h-full max-w-full overflow-hidden"},v={class:"bubbles"},x=e({__name:"index",setup(c){const o=d(200);return(a,q)=>(t(),n("div",_,[u("div",v,[(t(!0),n(p,null,f(o.value,i=>(t(),n("div",{key:i,class:"bubble"}))),128))])]))}});var l=s(x,[["__scopeId","data-v-5ff9adb2"]]);const w=`<h1>\u8D85\u9177\u70AB\u7684\u6C14\u6CE1\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<h3>\u5229\u7528 filter: contrast() \u6EE4\u955C\u4E0E filter: blur() \u6EE4\u955C\u6DFB\u52A0\u878D\u5408\u6548\u679C</h3>
<p>\u5229\u7528 <code>filter: contrast()</code> \u6EE4\u955C\u4E0E <code>filter: blur()</code> \u6EE4\u955C\u3002</p>
<p>\u6A21\u7CCA\u6EE4\u955C\u53E0\u52A0\u5BF9\u6BD4\u5EA6\u6EE4\u955C\u4EA7\u751F\u7684\u878D\u5408\u6548\u679C\u3002</p>
<p>\u5355\u72EC\u5C06\u4E24\u4E2A\u6EE4\u955C\u62FF\u51FA\u6765\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u5206\u522B\u662F\uFF1A</p>
<ol>
<li><code>filter: blur()</code>\uFF1A \u7ED9\u56FE\u50CF\u8BBE\u7F6E\u9AD8\u65AF\u6A21\u7CCA\u6548\u679C\u3002</li>
<li><code>filter: contrast()</code>\uFF1A \u8C03\u6574\u56FE\u50CF\u7684\u5BF9\u6BD4\u5EA6\u3002</li>
</ol>
<p>\u5F53\u4ED6\u4EEC\u201C\u5408\u4F53\u201D\u7684\u65F6\u5019\uFF0C\u4EA7\u751F\u4E86\u5947\u5999\u7684\u878D\u5408\u73B0\u8C61\u3002</p>
<p><img src="https://user-images.githubusercontent.com/8554143/30364156-9b5dc8e0-9895-11e7-876e-4c43af234ca3.gif" alt="\u878D\u5408\u6548\u679C"></p>
<p>\u4ED4\u7EC6\u770B\u4E24\u5706\u76F8\u4EA4\u7684\u8FC7\u7A0B\uFF0C\u5728\u8FB9\u4E0E\u8FB9\u63A5\u89E6\u7684\u65F6\u5019\uFF0C\u4F1A\u4EA7\u751F\u4E00\u79CD\u8FB9\u754C\u878D\u5408\u7684\u6548\u679C\uFF0C\u901A\u8FC7\u5BF9\u6BD4\u5EA6\u6EE4\u955C\u628A\u9AD8\u65AF\u6A21\u7CCA\u7684\u6A21\u7CCA\u8FB9\u7F18\u7ED9\u5E72\u6389\uFF0C\u5229\u7528\u9AD8\u65AF\u6A21\u7CCA\u5B9E\u73B0\u878D\u5408\u6548\u679C\u3002</p>
<p>\u4E0A\u8FF0\u6548\u679C\u7684\u5B9E\u73B0\u57FA\u4E8E\u4E24\u70B9\uFF1A</p>
<ol>
<li>\u56FE\u5F62\u662F\u5728\u88AB\u8BBE\u7F6E\u4E86 <code>filter: contrast()</code> \u7684\u753B\u5E03\u80CC\u666F\u4E0A\u8FDB\u884C\u52A8\u753B\u7684</li>
<li>\u8FDB\u884C\u52A8\u753B\u7684\u56FE\u5F62\u88AB\u8BBE\u7F6E\u4E86 <code>filter: blur()</code>\uFF08 \u8FDB\u884C\u52A8\u753B\u7684\u56FE\u5F62\u7684\u7236\u5143\u7D20\u9700\u8981\u662F\u88AB\u8BBE\u7F6E\u4E86 <code>filter: contrast()</code> \u7684\u753B\u5E03\uFF09</li>
</ol>
<p>\u610F\u601D\u662F\uFF0C\u4E0A\u9762\u4E24\u5706\u8FD0\u52A8\u7684\u80CC\u540E\uFF0C\u5176\u5B9E\u662F\u53E0\u52A0\u4E86\u4E00\u5F20\u8BBE\u7F6E\u4E86 <code>filter: contrast()</code> \u7684\u5927\u767D\u8272\u80CC\u666F\uFF0C\u800C\u4E24\u4E2A\u5706\u5F62\u5219\u88AB\u8BBE\u7F6E\u4E86 <code>filter: blur()</code> \uFF0C\u4E24\u4E2A\u6761\u4EF6\u7F3A\u4E00\u4E0D\u53EF\u3002</p>
<p>\u5F53\u7136\uFF0C\u80CC\u666F\u8272\u4E0D\u4E00\u5B9A\u662F\u767D\u8272\uFF0C\u6211\u4EEC\u7A0D\u7A0D\u4FEE\u6539\u4E0A\u9762\u7684Demo\uFF0C\u7B80\u5355\u7684\u793A\u610F\u56FE\u5982\u4E0B\uFF1A</p>
<p><img src="https://user-images.githubusercontent.com/8554143/30364469-f3347b58-9896-11e7-82ec-ee7b32189a1a.png" alt="\u793A\u610F\u56FE"></p>
<h3>\u5229\u7528 backdrop-filter \u66FF\u4EE3 filter \u6D88\u9664\u8FB9\u7F18</h3>
<p>\u4F46\u662F\uFF01\u5229\u7528 <code>filter: blur()</code> \u4F1A\u6709\u4E00\u4E2A\u5C0F\u95EE\u9898\u3002</p>
<p>\u8FD0\u7528\u4E86 <code>filter: blur()</code> \u7684\u5143\u7D20\uFF0C\u5143\u7D20\u8FB9\u7F18\u7684\u6A21\u7CCA\u5EA6\u4E0D\u591F\uFF0C\u4F1A\u5BFC\u81F4\u6548\u679C\u5728\u8FB9\u7F18\u5931\u771F\uFF0C\u6211\u4EEC\u4ED4\u7EC6\u770B\u770B\u52A8\u753B\u7684\u8FB9\u7F18\uFF1A</p>
<p><img src="https://user-images.githubusercontent.com/8554143/175033441-4b3ddcfb-d174-442e-85ed-ab712fb47009.png" alt="\u8FB9\u7F18\u5931\u771F"></p>
<p>\u4E24\u8005\u4E4B\u95F4\u7684\u5DEE\u5F02\u5728\u4E8E\uFF0Cfilter \u662F\u4F5C\u7528\u4E8E\u5143\u7D20\u672C\u8EAB\uFF0C\u800C backdrop-filter \u662F\u4F5C\u7528\u4E8E\u5143\u7D20\u80CC\u540E\u7684\u533A\u57DF\u6240\u8986\u76D6\u7684\u6240\u6709\u5143\u7D20\uFF0C\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u66F4\u591A\u5173\u4E8E backdrop-filter \u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u6233\u5927\u4F6C\u7684\u8FD9\u7BC7\u6587\u7AE0\uFF1A<code>https://github.com/chokcoco/iCSS/issues/147</code></p>
<p>\u6211\u4EEC\u901A\u8FC7\u53BB\u5230\u539F\u6765\u6DFB\u52A0\u5728 <code>.g-footer</code> \u4E0A\u7684 <code>filter: blur(5px)</code>\uFF0C\u901A\u8FC7\u4ED6\u7684\u4F2A\u5143\u7D20\uFF0C\u53E0\u52A0\u4E00\u5C42\u65B0\u7684\u5143\u7D20\u5728\u5B83\u672C\u8EAB\u4E4B\u4E0A\uFF0C\u5E76\u4E14\u6DFB\u52A0\u4E86\u66FF\u4EE3\u7684 <code>backdrop-filter: blur(5px)</code>\u3002</p>
<p>\u5F53\u7136\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u7684 <code>blur(5px)</code> \u8FD8\u9700\u8981\u4E3A\u6C14\u6CE1\u4E0E\u6C14\u6CE1\u4E4B\u95F4\u7684\u878D\u5408\u670D\u52A1\uFF0C\u6240\u4EE5\u4E3A\u4E86\u8986\u76D6\u52A8\u753B\u5168\u533A\u57DF\uFF0C\u6211\u4EEC\u8FD8\u8BBE\u7F6E\u4E86 <code>top: -300px</code>\uFF0C\u6269\u5927\u4E86\u5B83\u7684\u4F5C\u7528\u8303\u56F4\u3002</p>
<p>\u6700\u7EC8\uFF0C\u6211\u4EEC\u5C31\u80FD\u5B8C\u7F8E\u7684\u590D\u523B\u6587\u7AE0\u4E00\u5F00\u5934\uFF0C\u4F7F\u7528 SVG \u6EE4\u955C\u5B9E\u73B0\u7684\u6548\u679C\uFF1A</p>
<p><img src="https://user-images.githubusercontent.com/8554143/175035115-6de2c259-5ab9-4f42-8ed8-8fce6f5c3168.gif" alt="\u6700\u7EC8\u6548\u679C"></p>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u8D85\u9177\u70AB\u7684\u6C14\u6CE1\u6548\u679C
 *
 * https://github.com/chokcoco/iCSS/issues/188
 *
 */
import { ref } from 'vue'
const count = ref&lt;number&gt;(200)

&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full h-full max-w-full&quot;&gt;
    &lt;div class=&quot;bubbles&quot;&gt;
      &lt;div v-for=&quot;i in count&quot; :key=&quot;i&quot; class=&quot;bubble&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;less&quot;&gt;
:root {
  // --color: #ed5565;
  --color: #26b4f5;
}
&lt;/style&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.container {
  position: relative;
  width: 100%;
  max-width: unset;
  height: 100%;
  background-color: #f5f7fa;
  filter: contrast(20);
}

.bubbles {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  background-color: var(--color);

  &amp;::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    backdrop-filter: blur(5px);
  }
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: var(--color);
}

// less \u4E0D\u652F\u6301 \u968F\u673A\u6570random
// .loop(@counter) when (@counter &gt; 0) {
//   @width: \`Math.ceil(Math.random()*255)\`;

//   .bubble:nth-child(@{counter}) {
//     width: ~&quot;@{width}px&quot;;
//     // left: \`~Math.round(Math.random() * 100)%\`;
//     // top: \`~(30 + Math.round(Math.random() * 100))px\`;
//     // width: @width;
//     // height: @width;
//     // animation: moveToTop \`~((1500 + Math.round(Math.random() * 2500)) / 1000)s\` ease-in-out \`~(Math.round(Math.random() * 5000) / 1000)s\` infinite;
//   }
//   .loop((@counter  - 1));
// }

// .loop(200);

&lt;/style&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;

@for $i from 0 through 200 {
  .bubble:nth-child(#{$i}) {
    $width: 30 + random(100) + px;
    $duration: (random(2500) + 1500) / 1000;
    $delay: random(5000) / 1000;

    left: #{(random(100)) + '%'};
    top: #{(30 + random(100))}px;
    width: $width;
    height: $width;
    animation: moveToTop #{$duration}s ease-in-out -#{$delay}s infinite;
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: .08;
    transform: translate(50%, -200px) scale(.3);
  }
}
&lt;/style&gt;
</code></pre>
`,M=e({__name:"page",setup(c){return e({components:{Demo:l,DemoPreview:r}}),(o,a)=>(t(),h(r,{content:m(w)},{default:b(()=>[g(l)]),_:1},8,["content"]))}});export{M as default};
