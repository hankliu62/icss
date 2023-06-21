<script setup lang="ts">
/**
 * 渐变遮罩效果
 *
 * https://github.com/chokcoco/iCSS/issues/163
 */

import { ref } from 'vue';

const count = ref<number>(10)
</script>

<template>
  <div class="container w-full h-full max-w-full flex flex-col">
    <div class="demo1 flex-1 flex justify-center items-center">
      <div class="relative w-[560px] border text-[0px] m-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:w-[100px] before:bg-gradient-to-r before:from-transparent before:to-white before:pointer-events-none">
        <ul
          class="flex w-full flex-nowrap overflow-x-auto p-[8px_10px]"
        >
          <li v-for="(item) in count" :key="item" class="mx-6px">
            <a-checkable-tag
              class="!border !border-[#ddd] !p-[6px_18px] !font-bold hover:bg-[#ddd] hover:text-white"
            >
              Button
            </a-checkable-tag>
          </li>
        </ul>
      </div>
    </div>

    <div class="demo2 flex-1 flex justify-center items-center">
      <div class="relative w-[560px] border text-[0px] m-auto">
        <ul
          class="demos flex w-full flex-nowrap overflow-x-auto p-[8px_10px]"
        >
          <li v-for="(item) in count" :key="item" class="mx-6px">
            <a-checkable-tag
              class="!border !border-[#ddd] !p-[6px_18px] !font-bold hover:bg-[#ddd] hover:text-white"
            >
              Button
            </a-checkable-tag>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demos {
  mask: linear-gradient(90deg, #fff 70%, transparent);
}
</style>