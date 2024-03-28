import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{d as t,c as i,B as n,E as c,X as p,C as g,D as v,y as d,f as m}from"./index.fbeb59c3.js";import{_ as a}from"./index.b9dd6921.js";const u={class:"container w-full h-full max-w-full flex flex-col"},f=p('<div class="demo flex-1 flex justify-around items-center" data-v-71c995e7><div class="avatar w-[200px] h-[200px] bg-[url(&#39;/ImageMask/avatar.jpeg&#39;)] bg-cover" data-v-71c995e7></div><div class="avatar relative mixed w-[200px] h-[200px] bg-[url(&#39;/ImageMask/avatar.jpeg&#39;)] bg-cover" data-v-71c995e7></div><div class="avatar relative mixed rotate w-[200px] h-[200px] bg-[url(&#39;/ImageMask/avatar.jpeg&#39;)] bg-cover" data-v-71c995e7></div><div class="avatar relative mixed rotate-spin w-[200px] h-[200px] bg-[url(&#39;/ImageMask/avatar.jpeg&#39;)] bg-cover" data-v-71c995e7></div></div>',1),x=[f],_=t({__name:"index",setup(r){return i(""),(s,o)=>(n(),c("div",u,x))}});var e=l(_,[["__scopeId","data-v-71c995e7"]]);const h=`<h1>\u56FE\u7247\u878D\u5408\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<h3>\u4F7F\u7528 mask \u5B9E\u73B0\u56FE\u7247\u878D\u5408</h3>
<p>\u5728 CSS \u4E2D\uFF0C\u6211\u4EEC\u4EC5\u4EC5\u9700\u8981\u5C06\u4E24\u5F20\u56FE\u7247\u53E0\u52A0\u5728\u4E00\u8D77\uFF0C\u5BF9\u4E0A\u5C42\u7684\u56FE\u7247\u4F7F\u7528 mask \u5C5E\u6027\uFF0C\u4E00\u884C\u4EE3\u7801\u5373\u53EF\u5B9E\u73B0\u8BE5\u6548\u679C\u3002</p>
<blockquote>
<p><code>mask</code>\uFF1A\u5C5E\u6027\u5141\u8BB8\u4F7F\u7528\u8005\u901A\u8FC7\u906E\u7F69\u6216\u8005\u88C1\u5207\u7279\u5B9A\u533A\u57DF\u7684\u56FE\u7247\u7684\u65B9\u5F0F\u6765\u9690\u85CF\u4E00\u4E2A\u5143\u7D20\u7684\u90E8\u5206\u6216\u8005\u5168\u90E8\u53EF\u89C1\u533A\u57DF\u3002</p>
</blockquote>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u56FE\u7247\u878D\u5408\u6548\u679C
 *
 * https://github.com/chokcoco/iCSS/issues/163
 */

import { ref } from 'vue';

const avatar = ref&lt;string&gt;('');
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full h-full max-w-full flex flex-col&quot;&gt;
    &lt;div class=&quot;demo flex-1 flex justify-around items-center&quot;&gt;
      &lt;div
        class=&quot;avatar w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover&quot;
      &gt;&lt;/div&gt;

      &lt;div
        class=&quot;avatar relative mixed w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover&quot;
      &gt;&lt;/div&gt;

      &lt;div
        class=&quot;avatar relative mixed rotate w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover&quot;
      &gt;&lt;/div&gt;

      &lt;div
        class=&quot;avatar relative mixed rotate-spin w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover&quot;
      &gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;

@property --per {
  syntax: '&lt;angle&gt;';
  inherits: false;
  initial-value: 135deg;
}

.avatar {
  &amp;.mixed {
    &amp;::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('/ImageMask/five-star-red-flag.png');
      background-size: cover;
      mask: linear-gradient(var(--per), #000 10%, transparent 70%, transparent);
    }

    &amp;.rotate {
      &amp;::after {
        transition: --per 1s linear;
      }

      &amp;:hover {
        &amp;::after {
          --per: 45deg;
        }
      }
    }

    &amp;.rotate-spin {
      @keyframes rotate-spin {
        @for $i from 0 through 100 {
          #{$i * 1%} {
            --per: #{$i * 3.6deg};
          }
        }
      }

      &amp;::after {
        transition: --per 1s linear;
        animation: rotate-spin 10s infinite linear;
      }
    }
  }
}
&lt;/style&gt;
</code></pre>
`,w=t({__name:"page",setup(r){return t({components:{Demo:e,DemoPreview:a}}),(s,o)=>(n(),g(a,{content:d(h)},{default:v(()=>[m(e)]),_:1},8,["content"]))}});export{w as default};
