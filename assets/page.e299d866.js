import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{d as n,B as r,E as p,M as c,N as u,K as e,C as f,D as x,y as m,f as _}from"./index.e8bf956f.js";import{_ as o}from"./index.8346ef48.js";const s=t=>(c("data-v-1c7dbd22"),t=t(),u(),t),g={class:"container w-full h-full max-w-full flex items-center"},v=s(()=>e("div",{class:"demo flex-1 relative flex"},[e("div",{class:"loading relative w-[200px] h-[200px] rounded-1/2 mx-auto"})],-1)),b=s(()=>e("div",{class:"demo flex-1 relative flex"},[e("div",{class:"loading color relative w-[200px] h-[200px] rounded-1/2 mx-auto"})],-1)),h=[v,b],q=n({__name:"index",setup(t){return(l,i)=>(r(),p("div",g,h))}});var a=d(q,[["__scopeId","data-v-1c7dbd22"]]);const w=`<h1>\u5F27\u7EBF\u65CB\u8F6CLoading\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<p>...</p>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u5F27\u7EBF\u65CB\u8F6CLoading\u6548\u679C
 *
 * https://csscoco.com/inspiration/#/./pesudo/pesudo-loading-line
 */
&lt;/script&gt;

&lt;template&gt;
&lt;div class=&quot;container w-full h-full max-w-full flex items-center&quot;&gt;
  &lt;div class=&quot;demo flex-1 relative flex&quot;&gt;
    &lt;div class=&quot;loading relative w-[200px] h-[200px] rounded-1/2 mx-auto&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;demo flex-1 relative flex&quot;&gt;
    &lt;div class=&quot;loading color relative w-[200px] h-[200px] rounded-1/2 mx-auto&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.loading {
  transform: rotate(360deg);
  animation: rotate 45s linear infinite;

  &amp;::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 3px solid #000;
    border-left: 3px solid #000;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s ease-out infinite;
  }

  &amp;::after {
    position: absolute;
    content: '';
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 7px solid #fff;
    border-left: 7px solid #fff;
    border-right: 7px solid transparent;
    border-bottom: 7px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s ease-in-out infinite;
  }

  &amp;.color {
    &amp;::after {
      border-top: 7px solid #9254de;
      border-left: 7px solid #9254de;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(0deg);
    }
  }
}
&lt;/style&gt;
</code></pre>
`,I=n({__name:"page",setup(t){return n({components:{Demo:a,DemoPreview:o}}),(l,i)=>(r(),f(o,{content:m(w)},{default:x(()=>[_(a)]),_:1},8,["content"]))}});export{I as default};
