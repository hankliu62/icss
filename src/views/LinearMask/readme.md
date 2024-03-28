# 渐变遮罩效果

## 技术总结

### linear-gradient + pointer-event

案例一使用的是伪元素渐变 `linear-gradient` 配合 `pointer-event` 实现。

实现右侧的渐变消失的遮罩效果，这个最常见的，就是通过叠加一个从透明到白色的渐变层实现。

叠加的这一层，确实遮挡住了其下方的按钮点击。

需要给叠加的这一层，添加一个 `pointer-event: none`

> `pointer-event`：CSS 属性指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 target。当值为 none 时，元素永远不会成为鼠标事件的 target，也就是我们常说的，实现了鼠标点击穿透。

### 使用 mask 实现更完美的遮罩

上述实现方式，当容器存在背景色时，只是使用白色的遮罩遮挡。

为了解决解决这个问题，CSS 有一个专门的属性来处理这个问题，也就是 -- mask。

> `mask`：属性允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

## 代码片段
``` vue
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
```