<script setup lang="ts">
/**
 * 首页
 */
import { ref, computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import chunk from 'lodash/chunk'
import groupBy from 'lodash/groupBy'
import {
  Loading3QuartersOutlined,
  FireOutlined,
} from '@ant-design/icons-vue'
import { getRoutePrefix } from '@/utils/route'
import useTopWindow from '@/hooks/useTopWindow'
// import JSEncrypt from 'jsencrypt'

const isTop = useTopWindow()

defineComponent({
  components: {
    Loading3QuartersOutlined,
    FireOutlined
  }
})

// 是否收缩Sider
const collapsed = ref<boolean>(false)

const router = useRouter()

// // ------------------- test -------------------
// const encrypt = new JSEncrypt()

// encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----')
// console.log(encrypt.getPrivateKey())

// console.log(encrypt.encrypt('1234'), '-------------------------------------------')
// // ------------------- test -------------------

interface IDemo {
  name: string,
  route: string,
  resourceType: 'image'|'video',
  resourceUrl: string,
  fallbackUrl: string,
  category: string,
}

const demos = ref<IDemo[]>([
  {
    name: '气泡效果',
    route: 'bubble-effect',
    resourceType: 'image',
    resourceUrl: '/icss/bubble-effect.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/443282b30/bubble-effect.gif',
    category: '动画效果',
  },
  {
    name: '充电效果',
    route: 'charge',
    resourceType: 'image',
    resourceUrl: '/icss/charge.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/433384a55/charge.gif',
    category: '动画效果',
  },
  {
    name: '波浪效果',
    route: 'water-ripple',
    resourceType: 'image',
    resourceUrl: '/icss/water-ripple.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/443282b30/water-ripple.gif',
    category: '动画效果',
  },
  {
    name: '椭圆环绕效果',
    route: 'rotating-ellipse',
    resourceType: 'image',
    resourceUrl: '/icss/rotating-ellipse.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/553281a42/rotating-ellipse.gif',
    category: '动画效果',
  },
  {
    name: '3D相册效果',
    route: 'photo-frame',
    resourceType: 'image',
    resourceUrl: '/icss/phone-frame.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/003181932/phone-frame.gif',
    category: '动画效果',
  },
  {
    name: '智能变色效果',
    route: 'intelligent-discolour',
    resourceType: 'image',
    resourceUrl: '/icss/intelligent-discolour.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/433093901/intelligent-discolour.gif',
    category: '动画效果',
  },
  {
    name: '边框动画效果',
    route: 'border-animation',
    resourceType: 'image',
    resourceUrl: '/icss/border-animation.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/5433a5850/border-animation.gif',
    category: '动画效果',
  },
  {
    name: '渐变遮罩效果',
    route: 'linear-mask',
    resourceType: 'image',
    resourceUrl: '/icss/linear-mask.jpg',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/4033b0932/linear-mask.jpg',
    category: '动画效果',
  },
  {
    name: '图片融合效果',
    route: 'image-mask',
    resourceType: 'image',
    resourceUrl: '/icss/image-mask.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/0031b2a51/image-mask.gif',
    category: '动画效果',
  },
  {
    name: '滚动头部阴影效果',
    route: 'scroll-header-shadow',
    resourceType: 'image',
    resourceUrl: '/icss/scroll-header-shadow.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/4035b4931/scroll-header-shadow.gif',
    category: '动画效果',
  },
  {
    name: '小球穿梭Loading效果',
    route: 'loading-shuttle-ball',
    resourceType: 'image',
    resourceUrl: '/icss/loading-shuttle-ball.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/033482833/loading-shuttle-ball.gif',
    category: 'Loading效果',
  },
  {
    name: '打点Loading效果',
    route: 'loading-dot',
    resourceType: 'image',
    resourceUrl: '/icss/loading-dot.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/153290900/loading-dot.gif',
    category: 'Loading效果',
  },
  {
    name: '弧线旋转Loading效果',
    route: 'loading-rotate-arc',
    resourceType: 'image',
    resourceUrl: '/icss/loading-rotate-arc.gif',
    fallbackUrl: 'https://itg-tezign-files.tezign.com/sop/public/575/3033a3915/loading-rotate-arc.gif',
    category: 'Loading效果',
  },
])

// 分类
const categories = computed(() => {
  const temp: Record<string, IDemo[]> = groupBy(demos.value, 'category')
  const result: Record<string, IDemo[][]> = {}
  for (const key in temp) {
    if (Object.prototype.hasOwnProperty.call(temp, key)) {
      result[key] = chunk(temp[key], 4)
    }
  }

  return result
})

// 当前选中的route
const selectedKeys = ref<string[]>([])
// 展开的子菜单
const openKeys = ref<string[]>(Object.keys(categories.value))

const onChange = (link: string) => {
  if (link) {
    const route = link.replace(/^#/, '').split('_')[0]
    selectedKeys.value = [route]
  }
}
</script>

<template>
  <a-layout class="!min-w-full !min-h-full text-left">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" theme="light" class="!bg-[#fefefe]">
      <div class="logo" />
      <a-anchor
        wrapperClass="menu-anchor pl-0"
        :showInkInFixed="false"
        :bounds="0"
        @change="onChange"
      >
        <a-menu
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          theme="light"
          mode="inline"
        >
          <a-sub-menu v-for="(value, key) in categories" :key="key">
            <template #icon>
              <loading3-quarters-outlined spin v-if="key === 'Loading效果'" />
              <fire-outlined v-else-if="key === '动画效果'" />
            </template>
            <template #title>{{key}}</template>
            <a-menu-item v-for="({ name, route }) in (value.flat())" :key="route">
              <a-anchor-link :href="`#${route}_${name}`" :title="name"></a-anchor-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-anchor>
    </a-layout-sider>
    <a-layout>
      <a-layout-header v-if="isTop" class="!bg-white !p-0 text-left">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger text-18px pl-24px pr-24px !hidden"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger text-18px px-24px !hidden"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        class="mx-16px my-24px p-24px bg-white min-h-280px"
      >
        <div class="container w-full min-w-full">
          <a-row v-for="(value, key) in categories" :key="key" class="mb-[5px]">
            <a-col :span="24">
              <header class="text-26px font-bold mb-20px" v-text="key"></header>
            </a-col>
            <a-col :span="24">
              <a-row v-for="(group, index) in value" :key="index" justify="start" :gutter="[16,16]">
                <a-col
                  v-for="({ name, resourceUrl, fallbackUrl, resourceType, route }) in group"
                  :key="route"
                  :span="6"
                  class="!flex flex-col"
                >
                  <div
                    :id="`${route}_${name}`"
                    class="card w-full flex flex-col justify-between flex-1 cursor-pointer transition-all min-h-[325px]"
                    @click="router.push(`${getRoutePrefix()}/${route}`)"
                  >
                    <div
                      class="border rounded-md flex flex-1 justify-center min-h-[130px] max-h-280px object-cover transition-all hover:translate-y-[-4px] hover:border-transparent hover:shadow-[0_6px_16px_rgba(107,147,224,0.2)]"
                      :title="name"
                    >
                      <img
                        v-if="resourceType === 'image'"
                        :src="getRoutePrefix() +  resourceUrl"
                        :alt="name"
                        :preview="false"
                        class="max-w-full max-h-full object-scale-down"
                        :fallback="fallbackUrl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 v-text="name" class="mt-[16px] mb-[24px] text-center"></h4>
                  </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.menu-anchor {
  :global(.ant-anchor) {
    padding-left: 0;
  }

  :global(.ant-anchor .ant-anchor-ink) {
    display: none;
  }

  :global(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected) {
    background-color: #f9f0ff;
  }

  :global(.ant-menu.ant-menu-inline) {
    padding: 0;
    background: #fafafa;
    border-radius: 0;
    box-shadow: none;
  }

  :global(.ant-anchor .ant-anchor-link) {
    padding: 0;
    height: 100%;
    line-height: inherit;
  }

  :global(.ant-anchor .ant-anchor-link .ant-anchor-link-title) {
    height: 100%;
    line-height: inherit;
  }

  :global(.ant-menu-submenu-selected),
  :global(.ant-anchor-link-active > .ant-anchor-link-title),
  :global(.ant-menu.ant-menu-light .ant-menu-item:hover),
  :global(.ant-menu.ant-menu-light .ant-menu-submenu-active),
  :global(.ant-menu.ant-menu-light .ant-menu-submenu-title:hover),
  :global(.ant-menu.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open),
  :global(.ant-menu.ant-menu-light .ant-menu-item-active),
  :global(.ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon),
  :global(.ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow),
  :global(.ant-menu-item a:hover),
  :global(.ant-menu-item-selected a),
  :global(.ant-menu-item-selected a:hover) {
    color: #873bf4;
  }

  :global(.ant-menu-inline .ant-menu-item:after),
  :global(.ant-menu-vertical-left .ant-menu-item:after),
  :global(.ant-menu-vertical-right .ant-menu-item:after),
  :global(.ant-menu-vertical .ant-menu-item:after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #873bf4;
    -webkit-transform: scaleY(.0001);
    transform: scaleY(.0001);
    opacity: 0;
    transition: opacity .15s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s cubic-bezier(.215,.61,.355,1);
    transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);
    transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s cubic-bezier(.215,.61,.355,1);
    content: '';
  }

  :global(.ant-menu-inline .ant-menu-item-selected:after),
  :global(.ant-menu-inline .ant-menu-selected:after) {
    transform: scaleY(1);
    opacity: 1;
    transition: opacity .15s cubic-bezier(.645,.045,.355,1),-webkit-transform .15s cubic-bezier(.645,.045,.355,1);
    transition: transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1);
    transition: transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1),-webkit-transform .15s cubic-bezier(.645,.045,.355,1);
  }

  :global(.ant-menu-item .ant-menu-title-content) {
    height: 40px;
    line-height: 40px;
  }
}
</style>