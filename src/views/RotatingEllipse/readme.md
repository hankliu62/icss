# 椭圆环绕效果

## 技术总结

...

## 代码片段
``` vue
<script setup lang="ts">
/**
 * 椭圆环绕效果
 */

import { ref } from 'vue';

const avatar = ref<string>('https://itg-tezign-files.tezign.com/sop/public/575/053382811/WechatIMG53.jpeg')
</script>

<template>
  <div class="container w-full h-full max-w-full flex flex-col">
    <div class="demo1 flex-1 mb-2 flex justify-center items-center relative">
      <div class="rotating-ellipse">
        <div class="point"></div>
      </div>
    </div>

    <div class="demo2 flex-1 mt-2 flex justify-center items-center relative">
      <div class="avatar w-[150px] h-[150px] relative">
        <div class="relative z-[3] h-[75px] overflow-hidden">
          <div class="w-[150px] h-[150px] bg-[url('/RotatingEllipse/avatar-adorn.svg')] bg-cover p-[15px]">
            <img class="w-full h-full object-cover rounded-t-[150px]" :src="avatar" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div class="rotating-ellipse absolute z-[2]">
          <div class="point"></div>
        </div>
        <div class="relative z-[1] h-[75px] overflow-hidden">
          <div class="w-[150px] h-[150px] bg-[url('/RotatingEllipse/avatar-adorn.svg')] bg-cover -mt-[75px] p-[15px]">
            <img class="w-full h-full object-cover rounded-b-[150px]" :src="avatar" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/functions/math.scss';

$lineWidth: 100px; // 椭圆x轴半径(长半径)
$lineHeight: 32px; // 椭圆y轴半径(短半径)
$pointRadius: 5px; // 球半径
$count: 100; // 坐标点的数目(数目越大，动画越精细)
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
</style>
```