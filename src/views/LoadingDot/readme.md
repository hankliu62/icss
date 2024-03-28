# 打点Loading效果

## 技术总结

...

## 代码片段
``` vue
<script setup lang="ts">
/**
 * 打点Loading效果
 *
 * https://csscoco.com/inspiration/#/./pesudo/pesudo-loading-content
 */
</script>

<template>
<div class="container w-full h-full max-w-full flex">
  <div class="demo flex-1 items-stretch relative">
    <p class="loading absolute m-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[36px] after:content-[''] after:absolute after:top-0 after:bottom-0">加载中</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.loading {
  &::after {
    content: "";
    animation: dot 3s infinite steps(6, start);
  }

  @keyframes dot {
    16.67% {
      content: ".";
    }
    33.33% {
      content: "..";
    }
    50% {
      content: "...";
    }
    66.67% {
      content: "....";
    }
    83.33% {
      content: ".....";
    }
    100% {
      content: "......";
    }
  }
}
</style>
```