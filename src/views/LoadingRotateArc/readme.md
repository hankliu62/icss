# 弧线旋转Loading效果

## 技术总结

...

## 代码片段
``` vue
<script setup lang="ts">
/**
 * 弧线旋转Loading效果
 *
 * https://csscoco.com/inspiration/#/./pesudo/pesudo-loading-line
 */
</script>

<template>
<div class="container w-full h-full max-w-full flex items-center">
  <div class="demo flex-1 relative flex">
    <div class="loading relative w-[200px] h-[200px] rounded-1/2 mx-auto"></div>
  </div>
  <div class="demo flex-1 relative flex">
    <div class="loading color relative w-[200px] h-[200px] rounded-1/2 mx-auto"></div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.loading {
  transform: rotate(360deg);
  animation: rotate 45s linear infinite;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 3px solid #000;
    border-left: 3px solid #000;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s ease-out infinite;
  }

  &::after {
    position: absolute;
    content: '';
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 7px solid #fff;
    border-left: 7px solid #fff;
    border-right: 7px solid transparent;
    border-bottom: 7px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s ease-in-out infinite;
  }

  &.color {
    &::after {
      border-top: 7px solid #9254de;
      border-left: 7px solid #9254de;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
```