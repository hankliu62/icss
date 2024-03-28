<script setup lang="ts">
/**
 * 超酷炫的气泡效果
 *
 * https://github.com/chokcoco/iCSS/issues/188
 *
 */
import { ref } from 'vue'
const count = ref<number>(200)

</script>

<template>
  <div class="container w-full h-full max-w-full overflow-hidden">
    <div class="bubbles">
      <div v-for="i in count" :key="i" class="bubble" />
    </div>
  </div>
</template>

<style lang="less">
:root {
  // --color: #ed5565;
  --color: #26b4f5;
}
</style>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  max-width: unset;
  height: 100%;
  background-color: #f5f7fa;
  filter: contrast(20);
}

.bubbles {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  background-color: var(--color);

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    backdrop-filter: blur(5px);
  }
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: var(--color);
}

// less 不支持 随机数random
// .loop(@counter) when (@counter > 0) {
//   @width: `Math.ceil(Math.random()*255)`;

//   .bubble:nth-child(@{counter}) {
//     width: ~"@{width}px";
//     // left: `~Math.round(Math.random() * 100)%`;
//     // top: `~(30 + Math.round(Math.random() * 100))px`;
//     // width: @width;
//     // height: @width;
//     // animation: moveToTop `~((1500 + Math.round(Math.random() * 2500)) / 1000)s` ease-in-out `~(Math.round(Math.random() * 5000) / 1000)s` infinite;
//   }
//   .loop((@counter  - 1));
// }

// .loop(200);

</style>

<style lang="scss" scoped>

@for $i from 0 through 200 {
  .bubble:nth-child(#{$i}) {
    $width: 30 + random(100) + px;
    $duration: (random(2500) + 1500) / 1000;
    $delay: random(5000) / 1000;

    left: #{(random(100)) + '%'};
    top: #{(30 + random(100))}px;
    width: $width;
    height: $width;
    animation: moveToTop #{$duration}s ease-in-out -#{$delay}s infinite;
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: .08;
    transform: translate(50%, -200px) scale(.3);
  }
}
</style>