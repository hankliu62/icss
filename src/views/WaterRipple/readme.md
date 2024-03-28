# 波浪效果

## 技术总结

一个正方形，给它添加 `border-radius: 50%`，将会得到一个圆形。

![圆形](https://user-images.githubusercontent.com/8554143/28261913-c1757820-6b13-11e7-9cdc-32cb75331b03.png)

> border-radius：用来设置边框圆角，当使用一个半径时确定一个圆形。

如果 border-radius 没到 50%，但是接近 50% ，我们会得到一个这样的图形：

![椭圆形](https://user-images.githubusercontent.com/8554143/28261931-cf981944-6b13-11e7-8162-2bd5d2d2d77e.png)

加上 rotate 旋转动画，效果如下:

![椭圆形旋转](https://user-images.githubusercontent.com/8554143/28262766-ddd5c742-6b16-11e7-81da-c238ff92955d.gif)

仔细盯着一边看，是会有类似波浪的起伏效果的，借助这个动态变换的起伏动画，模拟制造出类似波浪的效果。

### 一些小技巧

单纯的让一个 border-radius 接近 50 的椭圆形旋转，动画效果可能不是那么好，我们可以适当的添加一些其他变换因素，让动画效果看上去更真实：

- 在动画过程中，动态的改变 border-radius 的值；
- 在动画过程中，利用 transform 对旋转椭圆进行轻微的位移、变形；
- 上面也演示到了，多个椭圆同时转动，赋予不同时长的动画，并且添加轻微的透明度，让整个效果更佳逼真。


## 代码片段
``` vue
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
```
