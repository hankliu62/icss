<script setup lang="ts">
/**
 * 波浪效果
 *
 * https://www.cnblogs.com/coco1s/p/7197662.html
 *
 */
</script>

<template>
  <div class="container w-full h-full max-w-full flex flex-col">
    <div class="demo-1 flex-1 mb-2">
      <h2 class="title text-gray-500">Pure CSS Wave</h2>
    </div>

    <div class="demo-2 flex-1 mt-2 flex justify-center items-center">
      <div class="ball">
        <div class="wave" />
        <p>45%</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-1 {
  position: relative;
  background-color: rgb(118, 218, 255);
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fff;
    animation-name: rotate1;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 10s;
  }

  &::before {
    border-radius: 45%;
    bottom: 15%;
  }

  &::after {
    bottom: 12%;
    opacity: .5;
    border-radius: 47%;
  }

  .title {
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
    font-size: 48px;
    z-index: 9;
  }
}

@keyframes rotate1 {
  0% {
    transform: translate(-50%, 0%) rotateZ(0deg);
  }
  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}

.demo-2 {
  .ball {
    box-sizing: content-box;
    border: 5px solid rgb(118, 218, 255);
    position: relative;
    width: 200px;
    height: 200px;
    padding: 5px;
    overflow: hidden;
    border-radius: 50%;

    .wave {
      position: relative;
      width: 200px;
      height: 200px;
      background-color: rgb(118, 218, 255);
      border-radius: 50%;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0;
        left: 50%;
        background-color: rgba($color: #fff, $alpha: 0.4);
        border-radius: 45%;
        animation: rotate2 6s linear infinite;
        z-index: 1;
      }

      &::after {
        background-color: rgba($color: #fff, $alpha: 0.9);
        border-radius: 48%;
        animation: rotate2 10s linear -5s infinite;
        z-index: 2;
      }
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 36px;
      color: #000;
      z-index: 10;
    }
  }
}

@keyframes rotate2 {
  0% {
    transform: translate(-50%, -70%) rotate(0);
  }
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  } 100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}

</style>