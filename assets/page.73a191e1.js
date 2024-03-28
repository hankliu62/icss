import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e,B as s,E as r,M as p,N as i,K as n,C as d,D as _,y as f,f as m}from"./index.fbeb59c3.js";import{_ as o}from"./index.b9dd6921.js";const g=t=>(p("data-v-5df54b68"),t=t(),i(),t),q={class:"container w-full h-full max-w-full flex"},h=g(()=>n("div",{class:"demo flex-1 items-stretch relative"},[n("p",{class:"loading absolute m-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[36px] after:content-[''] after:absolute after:top-0 after:bottom-0"},"\u52A0\u8F7D\u4E2D")],-1)),x=[h],v=e({__name:"index",setup(t){return(l,c)=>(s(),r("div",q,x))}});var a=u(v,[["__scopeId","data-v-5df54b68"]]);const b=`<h1>\u6253\u70B9Loading\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<p>...</p>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u6253\u70B9Loading\u6548\u679C
 *
 * https://csscoco.com/inspiration/#/./pesudo/pesudo-loading-content
 */
&lt;/script&gt;

&lt;template&gt;
&lt;div class=&quot;container w-full h-full max-w-full flex&quot;&gt;
  &lt;div class=&quot;demo flex-1 items-stretch relative&quot;&gt;
    &lt;p class=&quot;loading absolute m-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[36px] after:content-[''] after:absolute after:top-0 after:bottom-0&quot;&gt;\u52A0\u8F7D\u4E2D&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.loading {
  &amp;::after {
    content: &quot;&quot;;
    animation: dot 3s infinite steps(6, start);
  }

  @keyframes dot {
    16.67% {
      content: &quot;.&quot;;
    }
    33.33% {
      content: &quot;..&quot;;
    }
    50% {
      content: &quot;...&quot;;
    }
    66.67% {
      content: &quot;....&quot;;
    }
    83.33% {
      content: &quot;.....&quot;;
    }
    100% {
      content: &quot;......&quot;;
    }
  }
}
&lt;/style&gt;
</code></pre>
`,D=e({__name:"page",setup(t){return e({components:{Demo:a,DemoPreview:o}}),(l,c)=>(s(),d(o,{content:f(b)},{default:_(()=>[m(a)]),_:1},8,["content"]))}});export{D as default};
