<script setup lang="ts">
/**
 * 利用混合模式，让文字智能适配背景颜色
 *
 * https://github.com/chokcoco/iCSS/issues/169
 */
</script>

<template>
  <div class="container w-full h-full max-w-full flex flex-col">
    <div class="demo1 flex-1 min-h-520px relative bg-br-black-white-split">
      <div
        class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[120px] mix-blend-difference text-white animate-[horizontal-bounce_3s_ease-in-out_infinite_alternate] whitespace-nowrap select-none"
      >
        LOREM IPSUM
      </div>
    </div>

    <div class="demo2 flex-1 min-h-620px relative bg-b-black-white-split">
      <div
        class="absolute top-[50%] right-[20%] -translate-y-1/2 text-[30px] mix-blend-difference text-white animate-[vertical-bounce_3s_ease-in-out_infinite_alternate] whitespace-nowrap select-none"
        :style="{'writing-mode': 'vertical-rl'}"
      >
        下拉展示更多→
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>