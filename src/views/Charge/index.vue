<script setup lang="ts">
/**
 * 充电效果
 *
 * https://github.com/chokcoco/iCSS/issues/75
 *
 */
import { ref } from 'vue'

const count = ref<number>(15)
</script>

<template>
  <div class="container w-full min-h-full max-w-full flex flex-col">
    <div class="demo-1 h-520px mb-20px flex justify-center items-center">
      <div class="battery" />
    </div>

    <div class="demo-2 h-520px mt-20px flex justify-center items-center">
      <div class="battery">
        <div class="number">98.7%</div>
        <div class="contrast">
          <div class="ball" />
          <ul class="bubbles">
            <li class="bubble" v-for="(item) in count" :key="item" />
          </ul>
        </div>
      </div>
    </div>

    <iframe src="https://player.xinpianchang.com/?aid=11924786&amp;mid=60VAm7OGm1E7DRnW&amp;appKey=61a2f329348b3bf77&amp;apiBackend=https://mod-api.xinpianchang.com&amp;passportUrl=https://passport.xinpianchang.com&amp;logBackend=https://log.xpccdn.com" allowfullscreen="true" style="border: none;"></iframe>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #efefef;
}

.demo-1 {
  .battery {
    width: 140px;
    height: 220px;
    box-sizing: border-box;
    border-radius: 15px 15px 5px 5px;
    filter: drop-shadow(0 1px 3px rgba($color: #000, $alpha: 0.22));
    background-color: #fff;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
      width: 26px;
      height: 10px;
      border-radius: 5px 5px 0 0;
      background-color: rgba(240, 240, 240, 0.88);
    }

    &::after {
      content: '';
      position: absolute;
      top: 95%;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, #7abcff 0%, #00bcd4 44%, #2196f3 100%);
      border-radius: 0 0 5px 5px;
      box-shadow: 0 14px 28px rgba(33, 150, 243, 0), 0 10px 10px  rgba(9, 188, 215, 0.08);
      filter: hue-rotate(90deg);
      animation: charge1 6s linear infinite;
    }
  }
}

@keyframes charge1 {
  50% {
    box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83), 0px 4px 10px rgba(9, 188, 215, 0.4);
  }

  95% {
    top: 5%;
    filter: hue-rotate(0deg);
    border-radius: 0 0 5px 5px;
    box-shadow: 0 14px 28px rgba(4, 188, 213, .2), 0 10px 10px rgba(9, 188, 215, 0.08);
  }

  100% {
    top: 0%;
    filter: hue-rotate(0deg);
    border-radius: 15px 15px 5px 5px;
    box-shadow: 0 14px 28px rgba(4, 188, 213, 0), 0 10px 10px rgba(9, 188, 215, 0.4);
  }
}

.demo-2 {
  background-color: #000;

  .battery {
    position: relative;
    width: 300px;
    height: 400px;

    .number {
      position: absolute;
      width: 100%;
      top: 27%;
      font-size: 32px;
      height: 32px;
      line-height: 1;
      color: #fff;
      z-index: 10;
    }

    .contrast {
      filter: contrast(10) hue-rotate(0);
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      animation: hueRotate 10s linear infinite;
    }

    .ball {
      position: relative;
      width: 300px;
      height: 300px;
      box-sizing: border-box;
      filter: blur(8px);
      z-index: 10;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 40%;
        left: 50%;
      }

      &::after {
        transform: translate(-50%, -50%) rotate(0deg);
        width: 200px;
        height: 200px;
        background-color: #00ff6f;
        border-radius: 21% 38% 62% 49% / 45%;
        animation: rotate2 10s linear infinite;
      }

      &::before {
        transform: translate(-50%, -50%);
        width: 176px;
        height: 176px;
        background-color: #000;
        border-radius: 50%;
        z-index: 10;
      }
    }

    .bubbles {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100px;
      height: 40px;
      border-radius: 100px 100px 0 0;
      background-color: #00ff6f;
      filter: blur(5px);
      transform: translate(-50%, 0);
      z-index: 1;

      .bubble {
        position: absolute;
        background-color: #00ff6f;
        border-radius: 50%;

        @for $i from 0 through 15 {
          &:nth-child(#{$i}) {
            $width: 15 + random(15) + px;
            left: 15 + random(70) + px;
            top: 50%;
            transform: translate(-50%, -50%);
            width: $width;
            height: $width;
            animation: moveToTop #{random(6) + 3}s ease-in-out -#{random(5000) / 1000}s infinite;
          }
        }
      }
    }
  }
}

@keyframes rotate2 {
  50% {
    border-radius: 45% / 42% 38% 58% 49%;
  }

  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: translate(50%, -180px);
  }
}

@keyframes hueRotate {
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}
</style>