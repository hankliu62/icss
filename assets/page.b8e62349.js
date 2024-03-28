import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{d as r,c as u,B as e,E as a,K as n,F as f,G as m,M as h,N as b,C as x,D as g,y as _,f as v}from"./index.e8bf956f.js";import{_ as s}from"./index.8346ef48.js";const o=t=>(h("data-v-5f98a540"),t=t(),b(),t),q={class:"container w-full min-h-full max-w-full flex flex-col"},y=o(()=>n("div",{class:"demo-1 h-520px mb-20px flex justify-center items-center"},[n("div",{class:"battery"})],-1)),w={class:"demo-2 h-520px mt-20px flex justify-center items-center"},k={class:"battery"},B=o(()=>n("div",{class:"number"},"98.7%",-1)),$={class:"contrast"},z=o(()=>n("div",{class:"ball"},null,-1)),D={class:"bubbles"},S=o(()=>n("iframe",{src:"https://player.xinpianchang.com/?aid=11924786&mid=60VAm7OGm1E7DRnW&appKey=61a2f329348b3bf77&apiBackend=https://mod-api.xinpianchang.com&passportUrl=https://passport.xinpianchang.com&logBackend=https://log.xpccdn.com",height:"500",allowfullscreen:"true",style:{border:"none"}},null,-1)),j=r({__name:"index",setup(t){const i=u(15);return(p,E)=>(e(),a("div",q,[y,n("div",w,[n("div",k,[B,n("div",$,[z,n("ul",D,[(e(!0),a(f,null,m(i.value,c=>(e(),a("li",{class:"bubble",key:c}))),128))])])])]),S]))}});var l=d(j,[["__scopeId","data-v-5f98a540"]]);const C=`<h1>\u5145\u7535\u6548\u679C</h1>
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
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u5145\u7535\u6548\u679C
 *
 * https://github.com/chokcoco/iCSS/issues/75
 *
 */
import { ref } from 'vue'

const count = ref&lt;number&gt;(15)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full min-h-full max-w-full flex flex-col&quot;&gt;
    &lt;div class=&quot;demo-1 h-520px mb-20px flex justify-center items-center&quot;&gt;
      &lt;div class=&quot;battery&quot; /&gt;
    &lt;/div&gt;

    &lt;div class=&quot;demo-2 h-520px mt-20px flex justify-center items-center&quot;&gt;
      &lt;div class=&quot;battery&quot;&gt;
        &lt;div class=&quot;number&quot;&gt;98.7%&lt;/div&gt;
        &lt;div class=&quot;contrast&quot;&gt;
          &lt;div class=&quot;ball&quot; /&gt;
          &lt;ul class=&quot;bubbles&quot;&gt;
            &lt;li class=&quot;bubble&quot; v-for=&quot;(item) in count&quot; :key=&quot;item&quot; /&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;iframe src=&quot;https://player.xinpianchang.com/?aid=11924786&amp;amp;mid=60VAm7OGm1E7DRnW&amp;amp;appKey=61a2f329348b3bf77&amp;amp;apiBackend=https://mod-api.xinpianchang.com&amp;amp;passportUrl=https://passport.xinpianchang.com&amp;amp;logBackend=https://log.xpccdn.com&quot; allowfullscreen=&quot;true&quot; style=&quot;border: none;&quot;&gt;&lt;/iframe&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.container {
  background-color: #efefef;
}

.demo-1 {
  .battery {
    width: 140px;
    height: 220px;
    box-sizing: border-box;
    border-radius: 15px 15px 5px 5px;
    filter: drop-shadow(0 1px 3px rgba($color: #000, $alpha: 0.22));
    background-color: #fff;

    &amp;::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
      width: 26px;
      height: 10px;
      border-radius: 5px 5px 0 0;
      background-color: rgba(240, 240, 240, 0.88);
    }

    &amp;::after {
      content: '';
      position: absolute;
      top: 95%;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, #7abcff 0%, #00bcd4 44%, #2196f3 100%);
      border-radius: 0 0 5px 5px;
      box-shadow: 0 14px 28px rgba(33, 150, 243, 0), 0 10px 10px  rgba(9, 188, 215, 0.08);
      filter: hue-rotate(90deg);
      animation: charge1 6s linear infinite;
    }
  }
}

@keyframes charge1 {
  50% {
    box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83), 0px 4px 10px rgba(9, 188, 215, 0.4);
  }

  95% {
    top: 5%;
    filter: hue-rotate(0deg);
    border-radius: 0 0 5px 5px;
    box-shadow: 0 14px 28px rgba(4, 188, 213, .2), 0 10px 10px rgba(9, 188, 215, 0.08);
  }

  100% {
    top: 0%;
    filter: hue-rotate(0deg);
    border-radius: 15px 15px 5px 5px;
    box-shadow: 0 14px 28px rgba(4, 188, 213, 0), 0 10px 10px rgba(9, 188, 215, 0.4);
  }
}

.demo-2 {
  background-color: #000;

  .battery {
    position: relative;
    width: 300px;
    height: 400px;

    .number {
      position: absolute;
      width: 100%;
      top: 27%;
      font-size: 32px;
      height: 32px;
      line-height: 1;
      color: #fff;
      z-index: 10;
    }

    .contrast {
      filter: contrast(10) hue-rotate(0);
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      animation: hueRotate 10s linear infinite;
    }

    .ball {
      position: relative;
      width: 300px;
      height: 300px;
      box-sizing: border-box;
      filter: blur(8px);
      z-index: 10;

      &amp;::before,
      &amp;::after {
        content: '';
        position: absolute;
        top: 40%;
        left: 50%;
      }

      &amp;::after {
        transform: translate(-50%, -50%) rotate(0deg);
        width: 200px;
        height: 200px;
        background-color: #00ff6f;
        border-radius: 21% 38% 62% 49% / 45%;
        animation: rotate2 10s linear infinite;
      }

      &amp;::before {
        transform: translate(-50%, -50%);
        width: 176px;
        height: 176px;
        background-color: #000;
        border-radius: 50%;
        z-index: 10;
      }
    }

    .bubbles {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100px;
      height: 40px;
      border-radius: 100px 100px 0 0;
      background-color: #00ff6f;
      filter: blur(5px);
      transform: translate(-50%, 0);
      z-index: 1;

      .bubble {
        position: absolute;
        background-color: #00ff6f;
        border-radius: 50%;

        @for $i from 0 through 15 {
          &amp;:nth-child(#{$i}) {
            $width: 15 + random(15) + px;
            left: 15 + random(70) + px;
            top: 50%;
            transform: translate(-50%, -50%);
            width: $width;
            height: $width;
            animation: moveToTop #{random(6) + 3}s ease-in-out -#{random(5000) / 1000}s infinite;
          }
        }
      }
    }
  }
}

@keyframes rotate2 {
  50% {
    border-radius: 45% / 42% 38% 58% 49%;
  }

  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: translate(50%, -180px);
  }
}

@keyframes hueRotate {
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}
&lt;/style&gt;
</code></pre>
`,V=r({__name:"page",setup(t){return r({components:{Demo:l,DemoPreview:s}}),(i,p)=>(e(),x(s,{content:_(C)},{default:g(()=>[v(l)]),_:1},8,["content"]))}});export{V as default};
