<script setup lang="ts">
/**
 * 边框动画效果
 */
import chunk from 'lodash/chunk';
import { ref } from 'vue';

interface IDemo {
  name: string,
  route: string,
  resourceUrl: string,
  resourceType: 'image'|'video',
  fallbackUrl: string
}

const demos = ref<IDemo[]>([
  {
    name: '气泡效果',
    route: 'bubble-effect',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/443282b30/bubble-effect.gif',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/177074103-f8444af9-03d0-4aae-969f-99f55d38ccab.gif'
  },
  {
    name: '充电效果',
    route: 'charge',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/433384a55/charge.gif',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/176610495-2356e0a2-2b0e-4cf5-ab6e-2ee8c9b3e25d.gif'
  },
  {
    name: '波浪效果',
    route: 'water-ripple',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/443282b30/water-ripple.gif',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/177074385-40772d51-389a-4d31-a07e-34f6df4c7bba.gif'
  },
  {
    name: '椭圆环绕效果',
    route: 'rotating-ellipse',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/553281a42/rotating-ellipse.gif',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/177073577-01a25c7b-306c-430a-9819-8fc4aa0929c6.gif'
  },
  {
    name: '3D相册效果',
    route: 'photo-frame',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/003181932/phone-frame.gif',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/177135001-8ca44008-e4f9-4bcb-ba79-2dcc16c0c446.gif'
  },
  {
    name: '智能变色效果',
    route: 'intelligent-discolour',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/433093901/intelligent-discolour.gif',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/177235659-6a0cede3-9f1e-45e7-b902-9378cdecd973.gif',
  },
  {
    name: '渐变遮罩效果',
    route: 'linear-mask',
    resourceType: 'image',
    resourceUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/4033b0932/linear-mask.jpg',
    fallbackUrl: 'https://user-images.githubusercontent.com/8088864/177519034-846677ba-3f65-4c58-94a5-ae47ec4f56bb.jpg',
  }
])

const demoGroups = chunk(demos.value, 3)

// 当前选中的group索引
const currentGroupIndex = ref<number>();
// 当前选中的demo索引
const currentDemoIndex = ref<number>();
// 上一次选中的group索引
const prevGroupIndex = ref<number>();
// 上一次选中的demo索引
const prevDemoIndex = ref<number>();

// 选中的demo
const currentSelectDemo = ref<IDemo>()
// 上一次选中的demo
const prevSelectDemo = ref<IDemo>()

// 选中或者反选Demo
const onToggleSelectDemo = (index: number, innerIndex: number) => {
  prevGroupIndex.value = currentGroupIndex.value;
  prevDemoIndex.value = currentDemoIndex.value;
  prevSelectDemo.value = currentSelectDemo.value;

  if (currentGroupIndex.value === index && currentDemoIndex.value === innerIndex) {
    currentGroupIndex.value = undefined;
    currentDemoIndex.value = undefined;
    currentSelectDemo.value = undefined;
  } else {
    currentGroupIndex.value = index;
    currentDemoIndex.value = innerIndex;
    currentSelectDemo.value = demoGroups[index][innerIndex];
  }
}
</script>

<template>
  <div class="container w-full h-full max-w-full">
    <div class="demos p-[36px_40px]">
      <div class="demo-groups flex justify-between flex-col" v-for="(group, index) in demoGroups" :key="index">
        <div
          class="group flex flex-1"
          :class="{[`line${currentGroupIndex === index && currentDemoIndex !== undefined ? `-add-${currentDemoIndex}` : ''}${prevGroupIndex === index && prevDemoIndex !== undefined ? `-del-${prevDemoIndex}` : ''}`]: (currentGroupIndex === index && currentDemoIndex !== undefined) || (prevGroupIndex === index && prevDemoIndex !== undefined)}"
        >
          <div
            v-for="(demo, innerIndex) in group"
            :key="demo.route"
            class="demo card inline-flex justify-start w-[33.3%] cursor-pointer transition-all min-h-[325px] py-[36px]"
            @click="onToggleSelectDemo(index, innerIndex)"
          >
            <div
              class="demo-content flex flex-1 h-280px m-w-[98%]"
              :class="{'mr-10px': !innerIndex}"
            >
              <div class="divider-vertical w-[10px] border-l border-[#aaa]" v-if="!!innerIndex" />
              <div class="flex flex-col flex-1">
                <div class="rounded-md flex flex-1 justify-center object-cover overflow-hidden">
                  <img
                    :src="demo.resourceUrl"
                    :alt="demo.name"
                    :preview="false"
                    class="max-w-full max-h-full object-scale-down"
                    :fallback="demo.fallbackUrl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 v-text="demo.name" class="mt-15px text-center"></h4>
              </div>
            </div>
          </div>
        </div>
        <div
          class="preview mb-[36px] h-[0px] transition-[height] overflow-y-hidden duration-[2000ms] text-center"
          :class="{['h-[400px]']: currentGroupIndex === index}"
        >
          <img
            :src="currentGroupIndex === index ? currentSelectDemo?.resourceUrl : prevSelectDemo?.resourceUrl"
            :alt="currentGroupIndex === index ? currentSelectDemo?.name : prevSelectDemo?.name"
            :preview="false"
            class="h-[400px] object-scale-down m-auto"
            :fallback="currentGroupIndex === index ? currentSelectDemo?.fallbackUrl : prevSelectDemo?.fallbackUrl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div v-if="index !== (demoGroups.length - 1)" class="divider h-1px border-t border-[#aaa]"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group {
  position: relative;

  &::before,
  &::after {
    z-index: 1;
    content: '';
    position: absolute;
    background-color: #000;
  }

  &::before {
    opacity: 0;
    width: 1px;
    top: 18px;
    bottom: 280px + 36px + 18px;
  }

  &::after {
    opacity: 0;
    height: 1px;
    bottom: 18px;
  }

  &.line-add-0 {
    &::before {
      @keyframes add-0-before {
        0% {
          left: 33.3%;
        }
        1% {
          left: 33.3%;
          opacity: 1;
        }
        100% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
      }
      animation: add-0-before 1s linear forwards;
    }

    &::after {
      @keyframes add-0-after {
        0% {
          left: 33.3%;
          right: 66.6%;
        }
        1% {
          opacity: 1;
        }
        100% {
          opacity: 1;
          left: 33.3%;
          right: 0%;
        }
      }
      animation: add-0-after 2s linear 1s forwards;
    }
  }

  &.line-del-0 {
    &::before {
      @keyframes del-0-before {
        0% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
        50% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
        99% {
          opacity: 1;
          left: 33.3%;
          bottom: 280px + 36px + 18px;
        }
        100% {
          opacity: 0;
        }
      }
      animation: del-0-before 2s linear forwards;
    }

    &::after {
      @keyframes del-0-after {
        1% {
          opacity: 1;
          left: 33.3%;
          right: 0%;
        }
        99% {
          opacity: 1;
          left: 33.3%;
          right: 66.6%;
        }
        100% {
          opacity: 0;
        }
      }
      animation: del-0-after 1s linear forwards;
    }
  }

  &.line-add-1 {
    &::before {
      @keyframes add-1-before {
        0% {
          left: 33.3%;
        }
        1% {
          left: 33.3%;
          opacity: 1;
        }
        100% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
      }
      animation: add-1-before 1s linear forwards;
    }

    &::after {
      @keyframes add-1-after {
        0% {
          left: 33.3%;
          right: 66.6%;
        }
        1% {
          opacity: 1;
        }
        100% {
          opacity: 1;
          left: 0%;
          right: 66.6%;
        }
      }
      animation: add-1-after 2s linear 1s forwards;
    }

    .demo:nth-child(3) {
      &::before {
        @keyframes add-1-child-before {
          0% {
            left: 0%;
          }
          1% {
            left: 0%;
            opacity: 1;
          }
          100% {
            opacity: 1;
            left: 0%;
            bottom: 18px;
          }
        }
        animation: add-1-child-before 1s linear forwards;
      }

      &::after {
        @keyframes add-1-child-after {
          0% {
            left: 0%;
            right: 100%;
          }
          1% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            left: 0%;
            right: 0%;
          }
        }
        animation: add-1-child-after 2s linear 1s forwards;
      }
    }
  }

  &.line-del-1 {
    &::before {
      @keyframes del-1-before {
        0% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
        50% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
        99% {
          opacity: 1;
          left: 33.3%;
          bottom: 280px + 36px + 18px;
        }
        100% {
          opacity: 0;
        }
      }
      animation: del-1-before 2s linear forwards;
    }

    &::after {
      @keyframes del-1-after {
        1% {
          left: 0%;
          right: 66.6%;
          opacity: 1;
        }
        99% {
          left: 33.3%;
          right: 66.6%;
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      animation: del-1-after 1s linear forwards;
    }

    .demo:nth-child(3) {
      &::before {
        @keyframes del-1-child-before {
          0% {
            left: 0%;
            opacity: 1;
            bottom: 18px;
          }
          50% {
            left: 0%;
            opacity: 1;
            bottom: 18px;
          }
          99% {
            left: 0%;
            bottom: 280px + 36px + 18px;
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        animation: del-1-child-before 2s linear forwards;
      }

      &::after {
        @keyframes del-1-child-after {
          1% {
            left: 0%;
            opacity: 1;
            right: 0%;
          }
          99% {
            left: 0%;
            opacity: 1;
            right: 100%;
          }
          100% {
            opacity: 0;
          }
        }
        animation: del-1-child-after 1s linear forwards;
      }
    }
  }

  &.line-add-2 {
    &::before {
      @keyframes add-2-before {
        0% {
          left: 66.6%;
        }
        1% {
          left: 66.6%;
          opacity: 1;
        }
        100% {
          opacity: 1;
          left: 66.6%;
          bottom: 18px;
        }
      }
      animation: add-2-before 1s linear forwards;
    }

    &::after {
      @keyframes add-2-after {
        0% {
          left: 66.6%;
          right: 33.3%;
        }
        1% {
          opacity: 1;
        }
        100% {
          opacity: 1;
          left: 0%;
          right: 33.3%;
        }
      }
      animation: add-2-after 2s linear 1s forwards;
    }
  }

  &.line-del-2 {
    &::before {
      @keyframes del-2-before {
        0% {
          opacity: 1;
          left: 66.6%;
          bottom: 18px;
        }
        50% {
          opacity: 1;
          left: 66.6%;
          bottom: 18px;
        }
        99% {
          left: 66.6%;
          bottom: 280px + 36px + 18px;
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      animation: del-2-before 2s linear forwards;
    }

    &::after {
      @keyframes del-2-after {
        1% {
          opacity: 1;
          left: 0%;
          right: 33.3%;
        }
        99% {
          opacity: 1;
          left: 66.6%;
          right: 33.3%;
        }
        100% {
          opacity: 0;
        }
      }
      animation: del-2-after 1s linear forwards;
    }
  }

  &.line-add-0-del-1 {
    &::before {
      opacity: 1;
      left: 33.3%;
      bottom: 18px;
    }

    &::after {
      @keyframes add-0-del-1-after {
        1% {
          left: 0%;
          right: 66.6%;
          opacity: 1;
        }
        50% {
          left: 33.3%;
          right: 66.6%;
          opacity: 1;
        }
        100% {
          left: 33.3%;
          right: 0%;
          opacity: 1;
        }
      }
      animation: add-0-del-1-after 2s linear forwards;
    }

    .demo:nth-child(3) {
      &::before {
        @keyframes add-0-del-1-child-before {
          0% {
            left: 0%;
            opacity: 1;
            bottom: 18px;
          }
          50% {
            left: 0%;
            opacity: 1;
            bottom: 18px;
          }
          99% {
            left: 0%;
            bottom: 280px + 36px + 18px;
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        animation: add-0-del-1-child-before 2s linear forwards;
      }

      &::after {
        @keyframes add-0-del-1-child-after {
          1% {
            left: 0%;
            opacity: 1;
            right: 0%;
          }
          99% {
            left: 0%;
            opacity: 1;
            right: 100%;
          }
          100% {
            opacity: 0;
          }
        }
        animation: add-0-del-1-child-after 1s linear forwards;
      }
    }
  }

  &.line-add-0-del-2 {
    &::before {
      @keyframes add-0-del-2-before {
        0% {
          left: 66.6%;
          opacity: 1;
          top: 18px;
          bottom: 18px;
        }
        48% {
          left: 66.6%;
          opacity: 1;
          top: 280px + 36px + 18px;
          bottom: 18px;
        }
        49% {
          left: 33.3%;
          opacity: 0;
          top: 280px + 36px + 18px;
          bottom: 18px;
        }
        50% {
          left: 33.3%;
          opacity: 1;
          top: 280px + 36px + 18px;
          bottom: 18px;
        }
        100% {
          left: 33.3%;
          opacity: 1;
          top: 18px;
          bottom: 18px;
        }
      }
      animation: add-0-del-2-before 2s linear forwards;
    }

    &::after {
      @keyframes add-0-del-2-after {
        0% {
          left: 0%;
          right: 33.3%;
          opacity: 1;
        }
        50% {
          left: 0%;
          right: 33.3%;
          opacity: 1;
        }
        100% {
          left: 33.3%;
          opacity: 1;
          right: 0%;
        }
      }
      animation: add-0-del-2-after 2s linear forwards;
    }
  }

  &.line-add-1-del-0 {
    &::before {
      opacity: 1;
      left: 33.3%;
      bottom: 18px;
    }

    &::after {
      @keyframes add-1-del-0-after {
        0% {
          left: 33.3%;
          opacity: 1;
          right: 0%;
        }
        33% {
          left: 33.3%;
          opacity: 1;
          right: 33%;
        }
        66% {
          left: 33.3%;
          right: 66.6%;
          opacity: 1;
        }
        100% {
          left: 0%;
          right: 66.6%;
          opacity: 1;
        }
      }
      animation: add-1-del-0-after 3s linear forwards;
    }

    .demo:nth-child(3) {
      &::before {
        @keyframes add-1-del-0-child-before {
          0% {
            left: 0%;
            bottom: 280px + 36px + 18px;
          }
          1% {
            left: 0%;
            opacity: 1;
            bottom: 280px + 36px + 18px;
          }
          100% {
            opacity: 1;
            left: 0%;
            bottom: 18px;
          }
        }
        animation: add-1-del-0-child-before 1s linear 1s forwards;
      }

      &::after {
        @keyframes add-1-del-0-child-after {
          0% {
            left: 0%;
            right: 100%;
          }
          1% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            left: 0%;
            right: 0%;
          }
        }
        animation: add-1-del-0-child-after 1s linear 2s forwards;
      }
    }
  }

  &.line-add-1-del-2 {
    &::before {
      @keyframes add-1-del-2-before {
        0% {
          left: 66.6%;
          top: 18px;
          bottom: 18px;
          opacity: 1;
        }
        33% {
          left: 66.6%;
          top: 280px + 36px + 18px;
          bottom: 18px;
          opacity: 1;
        }
        34% {
          left: 66.6%;
          top: 280px + 36px + 18px;
          bottom: 18px;
          opacity: 0;
        }
        65% {
          left: 33.3%;
          top: 280px + 36px + 18px;
          bottom: 18px;
          opacity: 0;
        }
        66% {
          left: 33.3%;
          top: 280px + 36px + 18px;
          bottom: 18px;
          opacity: 1;
        }
        100% {
          left: 33.3%;
          top: 18px;
          bottom: 18px;
          opacity: 1;
        }
      }
      animation: add-1-del-2-before 3s linear forwards;
    }

    &::after {
      @keyframes add-1-del-2-after {
        0% {
          left: 0%;
          right: 33.3%;
          opacity: 1;
        }
        34% {
          left: 0%;
          right: 33.3%;
          opacity: 1;
        }
        65% {
          left: 0%;
          right: 66.6%;
          opacity: 1;
        }
        100% {
          left: 0%;
          right: 66.6%;
          opacity: 1;
        }
      }
      animation: add-1-del-2-after 3s linear forwards;
    }

    .demo:nth-child(3) {
      &::before {
        @keyframes add-1-del-2-child-before {
          0% {
            left: 0%;
            bottom: 280px + 36px + 18px;
          }
          1% {
            left: 0%;
            opacity: 1;
            bottom: 280px + 36px + 18px;
          }
          100% {
            opacity: 1;
            left: 0%;
            bottom: 18px;
          }
        }
        animation: add-1-del-2-child-before 1s linear 1s forwards;
      }

      &::after {
        @keyframes add-1-del-2-child-after {
          0% {
            left: 0%;
            right: 100%;
          }
          1% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            left: 0%;
            right: 0%;
          }
        }
        animation: add-1-del-2-child-after 1s linear 2s forwards;
      }
    }
  }

  &.line-add-2-del-0 {
    &::before {
      @keyframes add-2-del-0-before {
        0% {
          left: 33.3%;
          opacity: 1;
          top: 18px;
          bottom: 18px;
        }
        48% {
          left: 33.3%;
          opacity: 1;
          top: 280px + 36px + 18px;
          bottom: 18px;
        }
        49% {
          left: 66.6%;
          opacity: 0;
          top: 280px + 36px + 18px;
          bottom: 18px;
        }
        50% {
          left: 66.6%;
          opacity: 1;
          top: 280px + 36px + 18px;
          bottom: 18px;
        }
        100% {
          left: 66.6%;
          opacity: 1;
          top: 18px;
          bottom: 18px;
        }
      }
      animation: add-2-del-0-before 2s linear forwards;
    }

    &::after {
      @keyframes add-2-del-0-after {
        0% {
          left: 33.3%;
          right: 0%;
          opacity: 1;
        }
        50% {
          left: 33.3%;
          right: 0%;
          opacity: 1;
        }
        100% {
          left: 0%;
          opacity: 1;
          right: 33.3%;
        }
      }
      animation: add-2-del-0-after 2s linear forwards;
    }
  }

  &.line-add-2-del-1 {
    &::before {
      @keyframes add-2-del-1-before {
        0% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
        50% {
          opacity: 1;
          left: 33.3%;
          bottom: 18px;
        }
        96% {
          opacity: 1;
          left: 33.3%;
          bottom: 280px + 36px + 18px;
        }
        97% {
          opacity: 0;
          left: 33.3%;
          bottom: 280px + 36px + 18px;
        }
        98% {
          opacity: 0;
          left: 66.6%;
          bottom: 18px;
        }
        99% {
          opacity: 1;
          left: 66.6%;
          bottom: 18px;
        }
        100% {
          opacity: 1;
          left: 66.6%;
          bottom: 18px;
        }
      }
      animation: add-2-del-1-before 2s linear forwards;
    }

    &::after {
      @keyframes add-2-del-1-after {
        0% {
          left: 0%;
          right: 66.6%;
          opacity: 1;
        }
        50% {
          left: 33.3%;
          right: 66.6%;
          opacity: 1;
        }
        51% {
          left: 33.3%;
          right: 66.6%;
          opacity: 0;
        }
        52% {
          left: 66.6%;
          right: 33.3%;
          opacity: 0;
        }
        53% {
          left: 66.6%;
          right: 33.3%;
          opacity: 1;
        }
        100% {
          left: 0%;
          right: 33.3%;
          opacity: 1;
        }
      }
      animation: add-2-del-1-after 2s linear forwards;
    }

    .demo:nth-child(3) {
      &::before {
        @keyframes add-2-del-1-child-before {
          0% {
            bottom: 18px;
            opacity: 1;
          }
          98% {
            bottom: 18px;
            opacity: 1;
          }
          99% {
            bottom: 18px;
            opacity: 0;
          }
          100% {
            bottom: 280px + 36px + 18px;
            opacity: 0;
          }
        }
        animation: add-2-del-1-child-before 2s linear forwards;
      }

      &::after {
        @keyframes add-2-del-1-child-after {
          1% {
            left: 0%;
            opacity: 1;
            right: 0%;
          }
          50% {
            left: 0%;
            opacity: 1;
            right: 100%;
          }
          51% {
            left: 0%;
            opacity: 0;
            right: 100%;
          }
          100% {
            left: 0%;
            opacity: 0;
            right: 100%;
          }
        }
        animation: add-2-del-1-child-after 2s linear forwards;
      }
    }
  }

  .demo {
    position: relative;

    &:nth-child(3) {
      &::before,
      &::after {
        z-index: 1;
        content: '';
        position: absolute;
        background-color: #000;
      }

      &::before {
        opacity: 0;
        width: 1px;
        top: 18px;
        bottom: 280px + 36px + 18px;
      }

      &::after {
        opacity: 0;
        height: 1px;
        bottom: 18px;
        right: 100%;
      }
    }
  }
}
</style>