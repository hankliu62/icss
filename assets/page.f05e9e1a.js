import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{d as o,c as d,B as i,E as p,K as t,M as u,N as g,C as v,D as f,y as h,f as _}from"./index.fbeb59c3.js";import{_ as s}from"./index.b9dd6921.js";const r=e=>(u("data-v-605c0c35"),e=e(),g(),e),m={class:"container w-full h-full max-w-full flex flex-col"},x=r(()=>t("div",{class:"demo1 flex-1 mb-2 flex justify-center items-center relative"},[t("div",{class:"rotating-ellipse"},[t("div",{class:"point"})])],-1)),q={class:"demo2 flex-1 mt-2 flex justify-center items-center relative"},$={class:"avatar w-[150px] h-[150px] relative"},b={class:"relative z-[3] h-[75px] overflow-hidden"},w={class:"w-[150px] h-[150px] bg-[url('/RotatingEllipse/avatar-adorn.svg')] bg-cover p-[15px]"},y=["src"],z=r(()=>t("div",{class:"rotating-ellipse absolute z-[2]"},[t("div",{class:"point"})],-1)),j={class:"relative z-[1] h-[75px] overflow-hidden"},R={class:"w-[150px] h-[150px] bg-[url('/RotatingEllipse/avatar-adorn.svg')] bg-cover -mt-[75px] p-[15px]"},k=["src"],P=o({__name:"index",setup(e){const n=d("https://itg-tezign-files.tezign.com/sop/public/575/053382811/WechatIMG53.jpeg");return(a,I)=>(i(),p("div",m,[x,t("div",q,[t("div",$,[t("div",b,[t("div",w,[t("img",{class:"w-full h-full object-cover rounded-t-[150px]",src:n.value,referrerPolicy:"no-referrer"},null,8,y)])]),z,t("div",j,[t("div",R,[t("img",{class:"w-full h-full object-cover rounded-b-[150px]",src:n.value,referrerPolicy:"no-referrer"},null,8,k)])])])])]))}});var l=c(P,[["__scopeId","data-v-605c0c35"]]);const E=`<h1>\u692D\u5706\u73AF\u7ED5\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<p>...</p>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * \u692D\u5706\u73AF\u7ED5\u6548\u679C
 */

import { ref } from 'vue';

const avatar = ref&lt;string&gt;('https://itg-tezign-files.tezign.com/sop/public/575/053382811/WechatIMG53.jpeg')
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full h-full max-w-full flex flex-col&quot;&gt;
    &lt;div class=&quot;demo1 flex-1 mb-2 flex justify-center items-center relative&quot;&gt;
      &lt;div class=&quot;rotating-ellipse&quot;&gt;
        &lt;div class=&quot;point&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;demo2 flex-1 mt-2 flex justify-center items-center relative&quot;&gt;
      &lt;div class=&quot;avatar w-[150px] h-[150px] relative&quot;&gt;
        &lt;div class=&quot;relative z-[3] h-[75px] overflow-hidden&quot;&gt;
          &lt;div class=&quot;w-[150px] h-[150px] bg-[url('/RotatingEllipse/avatar-adorn.svg')] bg-cover p-[15px]&quot;&gt;
            &lt;img class=&quot;w-full h-full object-cover rounded-t-[150px]&quot; :src=&quot;avatar&quot; referrerPolicy=&quot;no-referrer&quot; /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;rotating-ellipse absolute z-[2]&quot;&gt;
          &lt;div class=&quot;point&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;relative z-[1] h-[75px] overflow-hidden&quot;&gt;
          &lt;div class=&quot;w-[150px] h-[150px] bg-[url('/RotatingEllipse/avatar-adorn.svg')] bg-cover -mt-[75px] p-[15px]&quot;&gt;
            &lt;img class=&quot;w-full h-full object-cover rounded-b-[150px]&quot; :src=&quot;avatar&quot; referrerPolicy=&quot;no-referrer&quot; /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
@import '@/styles/functions/math.scss';

$lineWidth: 100px; // \u692D\u5706x\u8F74\u534A\u5F84(\u957F\u534A\u5F84)
$lineHeight: 32px; // \u692D\u5706y\u8F74\u534A\u5F84(\u77ED\u534A\u5F84)
$pointRadius: 5px; // \u7403\u534A\u5F84
$count: 100; // \u5750\u6807\u70B9\u7684\u6570\u76EE(\u6570\u76EE\u8D8A\u5927\uFF0C\u52A8\u753B\u8D8A\u7CBE\u7EC6)
$theme-color: #873bf4;

.rotating-ellipse {
  width: $lineWidth * 2;
  height: $lineHeight * 2;
  border-radius: 100%;
  position: absolute;
  z-index: 2;
  border: 2px solid $theme-color;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-15deg);

  .point {
    position: absolute;
    left: $lineWidth - $pointRadius - 2px;
    top: $lineHeight - $pointRadius - 2px;
    width: $pointRadius * 2;
    height: $pointRadius * 2;
    border-radius: 100%;
    background: $theme-color;
    animation: spin 8s infinite linear;
    transform-origin: center;
  }

  @keyframes spin {
    @for $i from 0 through $count {
      $progress: $i / $count;
      $keyframePercent: $progress * 100%;

      #{$keyframePercent} {
        transform: translate(
          $lineWidth * cos(360deg * $progress),
          $lineHeight * sin(360deg * $progress)
        );
      }
    }
  }
}
&lt;/style&gt;
</code></pre>
`,C=o({__name:"page",setup(e){return o({components:{Demo:l,DemoPreview:s}}),(n,a)=>(i(),v(s,{content:h(E)},{default:f(()=>[_(l)]),_:1},8,["content"]))}});export{C as default};
