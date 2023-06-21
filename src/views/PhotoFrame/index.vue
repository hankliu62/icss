<script setup lang="ts">
/**
 * 3D相册效果
 *
 * https://github.com/hankliu62/hankliu62.github.com/issues/62
 */
import { ref, onMounted, onUnmounted } from 'vue';
import { getDocumentWidth } from '@/utils/doc';

// 是否正在播放
const bannerPlaying = ref<boolean>(false)

// 图片
const imageUrl = ref<string>('https://itg-tezign-files.tezign.com/sop/public/2408/443285952/cover-1652885779147.png')

// 视频
const videoUrl = ref<string>('https://video.tezign.com/home/tezign_brand_video_zh.mp4')
// 视频Poster
const videoPosterUrl = ref<string>('https://itg-tezign-files.tezign.com/sop/public/2408/443285952/cover-1652885779147.png')

// 开始播放
const onPlay = () => {
  bannerPlaying.value = true
}
// 暂停
const onPause = () => {
  bannerPlaying.value = false
}
// 结束播放
const onEnded = () => {
  bannerPlaying.value = false
}
// 播放出错
const onError = () => {
  bannerPlaying.value = false
}

// 相框元素 - 图片
const imageRef = ref<HTMLDivElement|null>(null)
// 相框左右边框元素 - 图片
const imageBeforeRef = ref<HTMLDivElement|null>(null)
// 相框上下边框元素 - 图片
const imageAfterRef = ref<HTMLDivElement|null>(null)

// 相框左右边框元素 - 视频
const videoBeforeRef = ref<HTMLDivElement|null>(null)
// 相框上下边框元素 - 视频
const videoAfterRef = ref<HTMLDivElement|null>(null)

// 浏览器宽度
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
      (Math.log2(1 + Math.abs(calcX)) * (calcX < 0 ? -1 : 1)) / Math.log2(2);
    calcY =
      ((Math.log2(1 + Math.abs(calcY)) * (calcY < 0 ? -1 : 1)) /
        Math.log2(2)) *
      multiple;

    elem.style.transform =
      'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)';
    elem.style.boxShadow = 'none';

    if (calcX < 0 && calcY < 0) {
      if(imageBeforeRef.value) { // 左右阴影
        imageBeforeRef.value.style.top = '-10px';
        imageBeforeRef.value.style.left = 'initial';
        imageBeforeRef.value.style.right = '-10px'
        imageBeforeRef.value.style.bottom = 'initial';
        imageBeforeRef.value.style.transform = 'skewY(-45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(-105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)';
      }

      if (imageAfterRef.value) { // 上下阴影
        imageAfterRef.value.style.top = '-10px';
        imageAfterRef.value.style.left = '10px';
        imageAfterRef.value.style.right = 'initial';
        imageAfterRef.value.style.bottom = 'initial';
        imageAfterRef.value.style.transform = 'skewX(-45deg)';
      }
    } else if (calcX > 0 && calcY < 0) {
      if(imageBeforeRef.value) { // 左右阴影
        imageBeforeRef.value.style.top = '10px';
        imageBeforeRef.value.style.left = 'initial';
        imageBeforeRef.value.style.right = '-10px';
        imageBeforeRef.value.style.transform = 'skewY(45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)';
      }

      if (imageAfterRef.value) { // 上下阴影
        imageAfterRef.value.style.top = 'initial';
        imageAfterRef.value.style.left = 'initial';
        imageAfterRef.value.style.right = 'initial';
        imageAfterRef.value.style.bottom = '-10px';
        imageAfterRef.value.style.transform = 'skewX(45deg)';
      }
    } else if (calcX > 0 && calcY > 0) {
      if(imageBeforeRef.value) { // 左右阴影
        imageBeforeRef.value.style.top = 'initial';
        imageBeforeRef.value.style.left = '-10px';
        imageBeforeRef.value.style.right = 'initial';
        imageBeforeRef.value.style.bottom = 'initial';
        imageBeforeRef.value.style.transform = 'skewY(-45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)';
      }

      if (imageAfterRef.value) { // 上下阴影
        imageAfterRef.value.style.top = 'initial';
        imageAfterRef.value.style.left = 'initial';
        imageAfterRef.value.style.bottom = '-10px';
        imageAfterRef.value.style.transform = 'skewX(-45deg)';

      }
    } else if (calcX < 0 && calcY > 0) {
      if(imageBeforeRef.value) { // 左右阴影
        imageBeforeRef.value.style.top = 'initial';
        imageBeforeRef.value.style.left = '-10px';
        imageBeforeRef.value.style.right = 'initial';
        imageBeforeRef.value.style.bottom = 'initial';
        imageBeforeRef.value.style.transform = 'skewY(45deg)';
        imageBeforeRef.value.style.background = 'linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)';
      }

      if (imageAfterRef.value) { // 上下阴影
        imageAfterRef.value.style.top = '-10px';
        imageAfterRef.value.style.left = '-10px';
        imageAfterRef.value.style.right = 'initial';
        imageAfterRef.value.style.bottom = 'initial';
        imageAfterRef.value.style.transform = 'skewX(45deg)';
      }
    }
  }
}

const onBodyMouseMove = (e: MouseEvent) => {
  window.requestAnimationFrame(function () {
    transformElement(e.clientX, e.clientY);
  });
};

const onBodyMouseLeave = (e: MouseEvent) => {
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

// 页面挂载
onMounted(() => {
  document.body &&
    document.body.addEventListener('mousemove', onBodyMouseMove);
  document.body &&
    document.body.addEventListener('mouseleave', onBodyMouseLeave);
})

// 页面卸载
onUnmounted(() => {

})
</script>

<script lang="ts">
import Vue from 'vue'
</script>

<template>
  <div class="container w-full h-full max-w-full">
    <div class="phone-frame image-phone-frame h-620px pb-20px flex justify-center items-center bg-[#e7e2e2]">
      <div ref="imageRef" class="media-wrapper image-media-wrapper w-full lg:w-650px lg:h-430px lg:ml-0">
        <div class="before" ref="imageBeforeRef" />
        <div class="after" ref="imageAfterRef" />
        <div class="cover-wrapper w-full h-full border-white scale-103 border-0.48 lg:scale-100 lg:border-16px">
          <img class="cover w-full h-full object-cover" :src="imageUrl" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>

    <div class="phone-frame video-phone-frame h-620px pt-20px flex justify-center items-center bg-[#cfe1dc]">
      <div
        class="media-wrapper video-media-wrapper w-full lg:w-650px lg:h-430px lg:ml-0"
        :class="`${bannerPlaying && 'playing'}`"
      >
        <div class="before" ref="videoBeforeRef" />
        <div class="after" ref="videoAfterRef" />
        <div class="cover-wrapper w-full h-full border-white scale-103 border-0.48 lg:scale-100 lg:border-16px">
          <video-player
            controls
            muted
            class="w-full h-full lg:w-618px lg:h-398px"
            :source="videoUrl"
            :poster="videoPosterUrl"
            @play="onPlay"
            @pause="onPause"
            @ended="onEnded"
            @error="onError"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.media-wrapper {
  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  cursor: pointer;

  @media (min-width: 1024px) {
    &.video-media-wrapper,
    &.image-media-wrapper {
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

    &.video-media-wrapper {
      &:hover {
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

      &.playing {
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

  &.image-media-wrapper {
    box-shadow: -25px 30px 72px 0 #0000001a;
  }

  &.video-media-wrapper {
    box-shadow: -25px 30px 72px 0 #0000001a;
  }
}
</style>