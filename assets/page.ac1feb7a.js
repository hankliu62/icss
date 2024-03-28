import{_ as K,i as O,t as Z}from"./toNumber.ea332b01.js";import{d as C,c,e as G,o as N,b as H,a as J,B as T,E as D,K as m,Y as F,H as Q,Z as ee,f as W,C as te,D as ne,y as le}from"./index.e8bf956f.js";import{_ as ae}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as $}from"./index.8346ef48.js";var oe="/icss/common/play.svg",ie=K,re=function(){return ie.Date.now()},se=re,ue=O,U=se,j=Z,fe="Expected a function",ce=Math.max,de=Math.min;function me(w,a,f){var g,R,y,v,o,d,p=0,t=!1,n=!1,B=!0;if(typeof w!="function")throw new TypeError(fe);a=j(a)||0,ue(f)&&(t=!!f.leading,n="maxWait"in f,y=n?ce(j(f.maxWait)||0,a):y,B="trailing"in f?!!f.trailing:B);function k(l){var e=g,s=R;return g=R=void 0,p=l,v=w.apply(s,e),v}function X(l){return p=l,o=setTimeout(i,a),t?k(l):v}function z(l){var e=l-d,s=l-p,u=a-e;return n?de(u,y-s):u}function A(l){var e=l-d,s=l-p;return d===void 0||e>=a||e<0||n&&s>=y}function i(){var l=U();if(A(l))return h(l);o=setTimeout(i,z(l))}function h(l){return o=void 0,B&&g?k(l):(g=R=void 0,v)}function E(){o!==void 0&&clearTimeout(o),p=0,g=d=R=o=void 0}function _(){return o===void 0?v:h(U())}function r(){var l=U(),e=A(l);if(g=arguments,R=this,d=l,e){if(o===void 0)return X(d);if(n)return clearTimeout(o),o=setTimeout(i,a),k(d)}return o===void 0&&(o=setTimeout(i,a)),v}return r.cancel=E,r.flush=_,r}var ge=me;function L(){return typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"}function V(){return!L()||typeof document!="object"?!1:!!(document.fullScreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.fullscreenElement)}function ve(){if(!L())return!1;const w=navigator.userAgent;return/Safari/.test(w)&&!/Chrome/.test(w)}function pe(){return typeof window!="object"?!1:"ActiveXObject"in window}function ye(){return L()?!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/):!1}function he(){return L()?window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth:0}const be=["autoPlay","loop","muted","poster","src"],xe=["src"],we=m("img",{class:"w-1.6 h-1.6 lg:w-60px lg:h-60px",src:oe,alt:"Video Play Control",referrerPolicy:"no-referrer"},null,-1),Re=[we],_e=C({__name:"index",props:{source:{},poster:{},autoplay:{type:Boolean},loop:{type:Boolean},muted:{type:Boolean},ratio:{},width:{},height:{},className:{},fit:{},size:{},layout:{},filled:{type:Boolean},download:{type:Boolean}},emits:["ended","error","timeUpdate","play","pause"],setup(w,{emit:a}){const f=w;let g="fullscreenchange";ve()?g="webkitfullscreenchange":pe()&&(g="MSFullscreenChange");function R({containerWidth:e,containerHeight:s,videoOriginWidth:u,videoOriginHeight:M,fit:Y,filled:S}){let b,x;const q=e/s,P=u/M;return e===u&&s===M?(b=u,x=M):e<u||e<u?q>P?(b=e,x=e/q):(b=e,x=s*q/P):Y==="flex"&&!S?(b=u,x=M):q>P?(b=e*P/q,x=s):(b=e,x=e/q),{videoWidth:b,videoHeight:x}}const y=c(!1),v=c(!1),o=c(!1),d=c(V()),p=c(null),t=c(null),n=G(()=>(f.width,f.height?f.height:1/(f.ratio||16/9)*100,d.value,{})),B=()=>{const e=t.value;if(e){const{paused:s}=e;s?e.play():e.pause()}},k=e=>{v.value=!0,o.value=!1},X=e=>{var u;const s=(u=e==null?void 0:e.currentTarget)==null?void 0:u.currentTime;a("timeUpdate",s)},z=e=>{a("ended",e)},A=e=>{a("error",e)},i=()=>{const e=t.value;e&&(e.play(),y.value=!1,a("play",!0))},h=()=>{const e=t.value;e&&(e.pause(),y.value=!0,a("pause",!0))},E=()=>{},_=()=>{const e=V();d.value=e},r=()=>{if(!v.value)return;const{fit:e,height:s}=f,{width:u,height:M}=p.value.getBoundingClientRect(),{videoWidth:Y,videoHeight:S}=t.value;let b,x;if(s==="auto")b=u,x=u/(Y/S);else{let{videoHeight:q,videoWidth:P}=R({containerHeight:M,containerWidth:u,videoOriginWidth:Y,videoOriginHeight:S,fit:e,filled:d.value});b=P,x=q}t.value.style.width=b+"px",t.value.style.height=x+"px"},l=ge(r,30);return N(()=>{document.addEventListener(g,_,!1);const e=t.value;e&&ye()&&e.load(),window.addEventListener("resize",l)}),H(()=>{document.removeEventListener(g,_,!1),window.removeEventListener("resize",l)}),J(()=>{v.value&&r()}),(e,s)=>(T(),D("div",{ref_key:"videoWrapRef",ref:p,style:ee(n.value),class:F(["tz-video-wrap relative overflow-hidden bg-black",{"height-auto":e.height==="auto",[`size-${e.size}`]:!d.value&&e.size}])},[m("video",{class:"tzui-chapters-video-el",ref_key:"videoRef",ref:t,playsInline:"",crossOrigin:"anonymous","webkit-playsinline":"true","x5-video-player-type":"h5-page",autoPlay:e.autoplay,loop:e.loop,muted:e.muted,poster:e.poster,src:e.source,onCanplay:k,onTimeupdate:X,onEnded:z,onError:A,onPlay:i,onPause:h,onRatechange:E},[m("source",{src:e.source,type:"video/mp4"},null,8,xe)],40,be),!o.value&&t.value&&v.value?(T(),D("span",{key:0,onClick:B,class:F(["bg-white-0.3 rounded-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity hover:bg-white-0.8",{["opacity-100 hover:opacity-80"]:y.value,["opacity-0 hover:opacity-0"]:!y.value}])},Re,2)):Q("",!0)],6))}});const qe={class:"container w-full h-full max-w-full"},Be={class:"phone-frame image-phone-frame h-620px pb-20px flex justify-center items-center bg-[#e7e2e2]"},ke={class:"cover-wrapper w-full h-full border-white scale-103 border-0.48 lg:scale-100 lg:border-16px"},Ae=["src"],Ee={class:"phone-frame video-phone-frame h-620px pt-20px flex justify-center items-center bg-[#cfe1dc]"},Me={class:"cover-wrapper w-full h-full border-white scale-103 border-0.48 lg:scale-100 lg:border-16px"},Pe=C({__name:"index",setup(w){const a=c(!1),f=c("https://itg-tezign-files.tezign.com/sop/public/2408/443285952/cover-1652885779147.png"),g=c("https://video.tezign.com/home/tezign_brand_video_zh.mp4"),R=c("https://itg-tezign-files.tezign.com/sop/public/2408/443285952/cover-1652885779147.png"),y=()=>{a.value=!0},v=()=>{a.value=!1},o=()=>{a.value=!1},d=()=>{a.value=!1},p=c(null),t=c(null),n=c(null),B=c(null),k=c(null);he();function X(i,h){const _=p.value;if(_){let r=_.getBoundingClientRect();h=Math.min(h,r.y+r.height+102),h=Math.max(h,r.y-102),i=Math.min(i,r.x+r.width+102),i=Math.max(i,r.x-102);let l=-(h-r.y-r.height/2),e=i-r.x-r.width/2;l=Math.log2(1+Math.abs(l))*(l<0?-1:1)/Math.log2(2),e=Math.log2(1+Math.abs(e))*(e<0?-1:1)/Math.log2(2)*2,_.style.transform="rotateX("+l+"deg) rotateY("+e+"deg)",_.style.boxShadow="none",l<0&&e<0?(t.value&&(t.value.style.top="-10px",t.value.style.left="initial",t.value.style.right="-10px",t.value.style.bottom="initial",t.value.style.transform="skewY(-45deg)",t.value.style.background="linear-gradient(-105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)"),n.value&&(n.value.style.top="-10px",n.value.style.left="10px",n.value.style.right="initial",n.value.style.bottom="initial",n.value.style.transform="skewX(-45deg)")):l>0&&e<0?(t.value&&(t.value.style.top="10px",t.value.style.left="initial",t.value.style.right="-10px",t.value.style.transform="skewY(45deg)",t.value.style.background="linear-gradient(105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)"),n.value&&(n.value.style.top="initial",n.value.style.left="initial",n.value.style.right="initial",n.value.style.bottom="-10px",n.value.style.transform="skewX(45deg)")):l>0&&e>0?(t.value&&(t.value.style.top="initial",t.value.style.left="-10px",t.value.style.right="initial",t.value.style.bottom="initial",t.value.style.transform="skewY(-45deg)",t.value.style.background="linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)"),n.value&&(n.value.style.top="initial",n.value.style.left="initial",n.value.style.bottom="-10px",n.value.style.transform="skewX(-45deg)")):l<0&&e>0&&(t.value&&(t.value.style.top="initial",t.value.style.left="-10px",t.value.style.right="initial",t.value.style.bottom="initial",t.value.style.transform="skewY(45deg)",t.value.style.background="linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)"),n.value&&(n.value.style.top="-10px",n.value.style.left="-10px",n.value.style.right="initial",n.value.style.bottom="initial",n.value.style.transform="skewX(45deg)"))}}const z=i=>{window.requestAnimationFrame(function(){X(i.clientX,i.clientY)})},A=i=>{window.requestAnimationFrame(function(){p.value&&p.value.removeAttribute("style"),t.value&&t.value.removeAttribute("style"),n.value&&n.value.removeAttribute("style")})};return N(()=>{document.body&&document.body.addEventListener("mousemove",z),document.body&&document.body.addEventListener("mouseleave",A)}),H(()=>{}),(i,h)=>{const E=_e;return T(),D("div",qe,[m("div",Be,[m("div",{ref_key:"imageRef",ref:p,class:"media-wrapper image-media-wrapper w-full lg:w-650px lg:h-430px lg:ml-0"},[m("div",{class:"before",ref_key:"imageBeforeRef",ref:t},null,512),m("div",{class:"after",ref_key:"imageAfterRef",ref:n},null,512),m("div",ke,[m("img",{class:"cover w-full h-full object-cover",src:f.value,referrerPolicy:"no-referrer"},null,8,Ae)])],512)]),m("div",Ee,[m("div",{class:F(["media-wrapper video-media-wrapper w-full lg:w-650px lg:h-430px lg:ml-0",`${a.value&&"playing"}`])},[m("div",{class:"before",ref_key:"videoBeforeRef",ref:B},null,512),m("div",{class:"after",ref_key:"videoAfterRef",ref:k},null,512),m("div",Me,[W(E,{controls:"",muted:"",class:"w-full h-full lg:w-618px lg:h-398px",source:g.value,poster:R.value,onPlay:y,onPause:v,onEnded:o,onError:d},null,8,["source","poster"])])],2)])])}}});var I=ae(Pe,[["__scopeId","data-v-4796a512"]]);const Xe=`<h1>3D\u76F8\u518C\u6548\u679C</h1>
<h2>\u6280\u672F\u603B\u7ED3</h2>
<h3>\u5229\u7528rotateX\u548CrotateY\u5B9E\u73B0</h3>
<p>https://github.com/chokcoco/iCSS/issues/179</p>
<h2>\u4EE3\u7801\u7247\u6BB5</h2>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
/**
 * 3D\u76F8\u518C\u6548\u679C
 *
 * https://github.com/hankliu62/hankliu62.github.com/issues/62
 */
import { ref, onMounted, onUnmounted } from 'vue';
import { getDocumentWidth } from '@/utils/doc';

// \u662F\u5426\u6B63\u5728\u64AD\u653E
const bannerPlaying = ref&lt;boolean&gt;(false)

// \u56FE\u7247
const imageUrl = ref&lt;string&gt;('https://itg-tezign-files.tezign.com/sop/public/2408/443285952/cover-1652885779147.png')

// \u89C6\u9891
const videoUrl = ref&lt;string&gt;('https://video.tezign.com/home/tezign_brand_video_zh.mp4')
// \u89C6\u9891Poster
const videoPosterUrl = ref&lt;string&gt;('https://itg-tezign-files.tezign.com/sop/public/2408/443285952/cover-1652885779147.png')

// \u5F00\u59CB\u64AD\u653E
const onPlay = () =&gt; {
  bannerPlaying.value = true
}
// \u6682\u505C
const onPause = () =&gt; {
  bannerPlaying.value = false
}
// \u7ED3\u675F\u64AD\u653E
const onEnded = () =&gt; {
  bannerPlaying.value = false
}
// \u64AD\u653E\u51FA\u9519
const onError = () =&gt; {
  bannerPlaying.value = false
}

// \u76F8\u6846\u5143\u7D20 - \u56FE\u7247
const imageRef = ref&lt;HTMLDivElement|null&gt;(null)
// \u76F8\u6846\u5DE6\u53F3\u8FB9\u6846\u5143\u7D20 - \u56FE\u7247
const imageBeforeRef = ref&lt;HTMLDivElement|null&gt;(null)
// \u76F8\u6846\u4E0A\u4E0B\u8FB9\u6846\u5143\u7D20 - \u56FE\u7247
const imageAfterRef = ref&lt;HTMLDivElement|null&gt;(null)

// \u76F8\u6846\u5DE6\u53F3\u8FB9\u6846\u5143\u7D20 - \u89C6\u9891
const videoBeforeRef = ref&lt;HTMLDivElement|null&gt;(null)
// \u76F8\u6846\u4E0A\u4E0B\u8FB9\u6846\u5143\u7D20 - \u89C6\u9891
const videoAfterRef = ref&lt;HTMLDivElement|null&gt;(null)

// \u6D4F\u89C8\u5668\u5BBD\u5EA6
const documentWidth = getDocumentWidth();

function transformElement(x: number, y: number) {
  const multiple = 2;
  const elem = imageRef.value;
  if (elem) {
    let box = elem.getBoundingClientRect();
    y = Math.min(y, box.y + box.height + 102);
    y = Math.max(y, box.y - 102);

    x = Math.min(x, box.x + box.width + 102);
    x = Math.max(x, box.x - 102);
    let calcX = -(y - box.y - box.height / 2);
    let calcY = x - box.x - box.width / 2;

    calcX =
      (Math.log2(1 + Math.abs(calcX)) * (calcX &lt; 0 ? -1 : 1)) / Math.log2(2);
    calcY =
      ((Math.log2(1 + Math.abs(calcY)) * (calcY &lt; 0 ? -1 : 1)) /
        Math.log2(2)) *
      multiple;

    elem.style.transform =
      'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)';
    elem.style.boxShadow = 'none';

    if (calcX &lt; 0 &amp;&amp; calcY &lt; 0) {
      if(imageBeforeRef.value) { // \u5DE6\u53F3\u9634\u5F71
        imageBeforeRef.value.style.top = '-10px';
        imageBeforeRef.value.style.left = 'initial';
        imageBeforeRef.value.style.right = '-10px'
        imageBeforeRef.value.style.bottom = 'initial';
        imageBeforeRef.value.style.transform = 'skewY(-45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(-105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)';
      }

      if (imageAfterRef.value) { // \u4E0A\u4E0B\u9634\u5F71
        imageAfterRef.value.style.top = '-10px';
        imageAfterRef.value.style.left = '10px';
        imageAfterRef.value.style.right = 'initial';
        imageAfterRef.value.style.bottom = 'initial';
        imageAfterRef.value.style.transform = 'skewX(-45deg)';
      }
    } else if (calcX &gt; 0 &amp;&amp; calcY &lt; 0) {
      if(imageBeforeRef.value) { // \u5DE6\u53F3\u9634\u5F71
        imageBeforeRef.value.style.top = '10px';
        imageBeforeRef.value.style.left = 'initial';
        imageBeforeRef.value.style.right = '-10px';
        imageBeforeRef.value.style.transform = 'skewY(45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)';
      }

      if (imageAfterRef.value) { // \u4E0A\u4E0B\u9634\u5F71
        imageAfterRef.value.style.top = 'initial';
        imageAfterRef.value.style.left = 'initial';
        imageAfterRef.value.style.right = 'initial';
        imageAfterRef.value.style.bottom = '-10px';
        imageAfterRef.value.style.transform = 'skewX(45deg)';
      }
    } else if (calcX &gt; 0 &amp;&amp; calcY &gt; 0) {
      if(imageBeforeRef.value) { // \u5DE6\u53F3\u9634\u5F71
        imageBeforeRef.value.style.top = 'initial';
        imageBeforeRef.value.style.left = '-10px';
        imageBeforeRef.value.style.right = 'initial';
        imageBeforeRef.value.style.bottom = 'initial';
        imageBeforeRef.value.style.transform = 'skewY(-45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)';
      }

      if (imageAfterRef.value) { // \u4E0A\u4E0B\u9634\u5F71
        imageAfterRef.value.style.top = 'initial';
        imageAfterRef.value.style.left = 'initial';
        imageAfterRef.value.style.bottom = '-10px';
        imageAfterRef.value.style.transform = 'skewX(-45deg)';

      }
    } else if (calcX &lt; 0 &amp;&amp; calcY &gt; 0) {
      if(imageBeforeRef.value) { // \u5DE6\u53F3\u9634\u5F71
        imageBeforeRef.value.style.top = 'initial';
        imageBeforeRef.value.style.left = '-10px';
        imageBeforeRef.value.style.right = 'initial';
        imageBeforeRef.value.style.bottom = 'initial';
        imageBeforeRef.value.style.transform = 'skewY(45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)';
      }

      if (imageAfterRef.value) { // \u4E0A\u4E0B\u9634\u5F71
        imageAfterRef.value.style.top = '-10px';
        imageAfterRef.value.style.left = '-10px';
        imageAfterRef.value.style.right = 'initial';
        imageAfterRef.value.style.bottom = 'initial';
        imageAfterRef.value.style.transform = 'skewX(45deg)';
      }
    }
  }
}

const onBodyMouseMove = (e: MouseEvent) =&gt; {
  window.requestAnimationFrame(function () {
    transformElement(e.clientX, e.clientY);
  });
};

const onBodyMouseLeave = (e: MouseEvent) =&gt; {
  window.requestAnimationFrame(function () {
    if (imageRef.value) {
      imageRef.value.removeAttribute('style');
    }

    if (imageBeforeRef.value) {
      imageBeforeRef.value.removeAttribute('style');
    }

    if (imageAfterRef.value) {
      imageAfterRef.value.removeAttribute('style');
    }
  });
};

// \u9875\u9762\u6302\u8F7D
onMounted(() =&gt; {
  document.body &amp;&amp;
    document.body.addEventListener('mousemove', onBodyMouseMove);
  document.body &amp;&amp;
    document.body.addEventListener('mouseleave', onBodyMouseLeave);
})

// \u9875\u9762\u5378\u8F7D
onUnmounted(() =&gt; {

})
&lt;/script&gt;

&lt;script lang=&quot;ts&quot;&gt;
import Vue from 'vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;container w-full h-full max-w-full&quot;&gt;
    &lt;div class=&quot;phone-frame image-phone-frame h-620px pb-20px flex justify-center items-center bg-[#e7e2e2]&quot;&gt;
      &lt;div ref=&quot;imageRef&quot; class=&quot;media-wrapper image-media-wrapper w-full lg:w-650px lg:h-430px lg:ml-0&quot;&gt;
        &lt;div class=&quot;before&quot; ref=&quot;imageBeforeRef&quot; /&gt;
        &lt;div class=&quot;after&quot; ref=&quot;imageAfterRef&quot; /&gt;
        &lt;div class=&quot;cover-wrapper w-full h-full border-white scale-103 border-0.48 lg:scale-100 lg:border-16px&quot;&gt;
          &lt;img class=&quot;cover w-full h-full object-cover&quot; :src=&quot;imageUrl&quot; referrerPolicy=&quot;no-referrer&quot; /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;phone-frame video-phone-frame h-620px pt-20px flex justify-center items-center bg-[#cfe1dc]&quot;&gt;
      &lt;div
        class=&quot;media-wrapper video-media-wrapper w-full lg:w-650px lg:h-430px lg:ml-0&quot;
        :class=&quot;\`\${bannerPlaying &amp;&amp; 'playing'}\`&quot;
      &gt;
        &lt;div class=&quot;before&quot; ref=&quot;videoBeforeRef&quot; /&gt;
        &lt;div class=&quot;after&quot; ref=&quot;videoAfterRef&quot; /&gt;
        &lt;div class=&quot;cover-wrapper w-full h-full border-white scale-103 border-0.48 lg:scale-100 lg:border-16px&quot;&gt;
          &lt;video-player
            controls
            muted
            class=&quot;w-full h-full lg:w-618px lg:h-398px&quot;
            :source=&quot;videoUrl&quot;
            :poster=&quot;videoPosterUrl&quot;
            @play=&quot;onPlay&quot;
            @pause=&quot;onPause&quot;
            @ended=&quot;onEnded&quot;
            @error=&quot;onError&quot;
          /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.media-wrapper {
  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  cursor: pointer;

  @media (min-width: 1024px) {
    &amp;.video-media-wrapper,
    &amp;.image-media-wrapper {
      box-shadow: none;
      transform: matrix(1, -0.04, 0.08, 1, 0, 0);
      transition: transform 0.3s;

      .before {
        position: absolute;
        top: 0;
        left: -10px;
        width: 10px;
        height: 100%;
        background: linear-gradient(-105.28deg, #c4cad3 97.55%, #c4cad3 13.23%);
        box-shadow: -25px 30px 72px rgb(0 0 0 / 10%);
        transform: skewY(-45deg);
        transform-origin: right;
        opacity: 1;
      }

      .after {
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background: linear-gradient(105.28deg, #c4cad3 13.23%, #9ba5b6 97.55%);
        box-shadow: -25px 30px 72px rgb(0 0 0 / 10%);
        transform: skewX(-45deg);
        transform-origin: top;
        opacity: 1;
      }
    }

    &amp;.video-media-wrapper {
      &amp;:hover {
        transform: matrix(1, 0, 0, 1, 0, 0) !important;

        .after {
          bottom: 0;
          height: 0;
          opacity: 0;
        }

        .before {
          left: 0;
          width: 0;
          opacity: 0;
        }
      }

      &amp;.playing {
        transform: matrix(1, 0, 0, 1, 0, 0) !important;

        .after {
          bottom: 0;
          height: 0;
          opacity: 0;
        }

        .before {
          left: 0;
          width: 0;
          opacity: 0;
        }
      }
    }
  }

  &amp;.image-media-wrapper {
    box-shadow: -25px 30px 72px 0 #0000001a;
  }

  &amp;.video-media-wrapper {
    box-shadow: -25px 30px 72px 0 #0000001a;
  }
}
&lt;/style&gt;
</code></pre>
`,Te=C({__name:"page",setup(w){return C({components:{Demo:I,DemoPreview:$}}),(a,f)=>(T(),te($,{content:le(Xe)},{default:ne(()=>[W(I)]),_:1},8,["content"]))}});export{Te as default};
