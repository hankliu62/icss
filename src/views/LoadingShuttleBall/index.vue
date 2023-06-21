
<script setup lang="ts">
/**
 * 小球穿梭Loading效果
 *
 * https://csscoco.com/inspiration/#/./filter/filter-ball-loading
 */

import { ref } from 'vue';

const count = ref<number>(7)
</script>

<template>
  <div class="container w-full h-full max-w-full flex">
    <div class="demo flex-1 items-stretch flex justify-center bg-black blur-[4px] contrast-[8]">
      <div class="loading w-[30px] h-[30px] relative m-auto">
        <div class="base absolute top-0 left-0 right-0 bottom-0 bg-white rounded-[50%] opacity-0 translate-x-[-700%]"></div>
        <div
          v-for="(item) in count"
          :key="item"
          class="ball absolute top-0 left-0 right-0 bottom-0 bg-white rounded-[50%] opacity-0 translate-x-[-700%]"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.base {
  animation: scaleMove 3.5s linear infinite;
}

.ball {
  $count: 7;

  @for $i from 0 through $count {
    &:nth-child(#{$i}) {
        animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
    }
  }
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  50% {
    opacity: 1;
    transform: translate(50%, 0);
  }
  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(50%, 0) scale(2);
  }
  90%,
  100% {
    opacity: 0;
    transform: translate(50%, 0) scale(1);
  }
}
</style>
