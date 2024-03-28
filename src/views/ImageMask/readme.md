# 图片融合效果

## 技术总结

### 使用 mask 实现图片融合

在 CSS 中，我们仅仅需要将两张图片叠加在一起，对上层的图片使用 mask 属性，一行代码即可实现该效果。

> `mask`：属性允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

## 代码片段

``` vue
<script setup lang="ts">
/**
 * 图片融合效果
 *
 * https://github.com/chokcoco/iCSS/issues/163
 */

import { ref } from 'vue';

const avatar = ref<string>('');
</script>

<template>
  <div class="container w-full h-full max-w-full flex flex-col">
    <div class="demo flex-1 flex justify-around items-center">
      <div
        class="avatar w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover"
      ></div>

      <div
        class="avatar relative mixed w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover"
      ></div>

      <div
        class="avatar relative mixed rotate w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover"
      ></div>

      <div
        class="avatar relative mixed rotate-spin w-[200px] h-[200px] bg-[url('/ImageMask/avatar.jpeg')] bg-cover"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@property --per {
  syntax: '<angle>';
  inherits: false;
  initial-value: 135deg;
}

.avatar {
  &.mixed {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('/ImageMask/five-star-red-flag.png');
      background-size: cover;
      mask: linear-gradient(var(--per), #000 10%, transparent 70%, transparent);
    }

    &.rotate {
      &::after {
        transition: --per 1s linear;
      }

      &:hover {
        &::after {
          --per: 45deg;
        }
      }
    }

    &.rotate-spin {
      @keyframes rotate-spin {
        @for $i from 0 through 100 {
          #{$i * 1%} {
            --per: #{$i * 3.6deg};
          }
        }
      }

      &::after {
        transition: --per 1s linear;
        animation: rotate-spin 10s infinite linear;
      }
    }
  }
}
</style>
```