import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '../views/Home/index.vue'

// 超酷炫的气泡效果
import BubbleEffect from '../views/BubbleEffect/index.vue'
// 波浪效果
import WaterRipple from '../views/WaterRipple/index.vue'
// 充电效果
import Charge from '../views/Charge/index.vue'
// 椭圆环绕效果
import RotatingEllipse from '../views/RotatingEllipse/index.vue'
// 3D相册效果
import PhotoFrame from '../views/PhotoFrame/index.vue'
// 智能变色效果
import IntelligentDiscolour from '../views/IntelligentDiscolour/index.vue'
// 边框动画效果
import BorderAnimation from '../views/BorderAnimation/index.vue'
// 渐变遮罩效果
import LinearMask from '../views/LinearMask/index.vue'
// 图片融合效果
import ImageMask from '../views/ImageMask/index.vue'
// 滚动头部阴影效果
import ScrollHeaderShadow from '../views/ScrollHeaderShadow/index.vue'
// 小球穿梭Loading效果
import LoadingShuttleBall from '../views/LoadingShuttleBall/index.vue'
// 打点Loading效果
import LoadingDot from '../views/LoadingDot/index.vue'
// 弧线旋转Loading效果
import LoadingRotateArc from '../views/LoadingRotateArc/index.vue'

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: `${process.env.ROUTE_PREFIX}/`,
      component: Home
    },
    {
      path: `${process.env.ROUTE_PREFIX}/bubble-effect`, // 超酷炫的气泡效果
      component: BubbleEffect
    },
    {
      path: `${process.env.ROUTE_PREFIX}/water-ripple`, // 波浪效果
      component: WaterRipple
    },
    {
      path: `${process.env.ROUTE_PREFIX}/charge`, // 充电效果
      component: Charge
    },
    {
      path: `${process.env.ROUTE_PREFIX}/rotating-ellipse`, // 椭圆环绕效果
      component: RotatingEllipse
    },
    {
      path: `${process.env.ROUTE_PREFIX}/photo-frame`, // 3D相册效果
      component: PhotoFrame
    },
    {
      path: `${process.env.ROUTE_PREFIX}/intelligent-discolour`, // 智能变色效果
      component: IntelligentDiscolour
    },
    {
      path: `${process.env.ROUTE_PREFIX}/border-animation`, // 边框动画效果
      component: BorderAnimation
    },
    {
      path: `${process.env.ROUTE_PREFIX}/linear-mask`, // 渐变遮罩效果
      component: LinearMask
    },
    {
      path: `${process.env.ROUTE_PREFIX}/image-mask`, // 图片融合效果
      component: ImageMask
    },
    {
      path: `${process.env.ROUTE_PREFIX}/scroll-header-shadow`, // 滚动头部阴影效果
      component: ScrollHeaderShadow
    },
    {
      path: `${process.env.ROUTE_PREFIX}/loading-shuttle-ball`, // 小球穿梭Loading效果
      component: LoadingShuttleBall
    },
    {
      path: `${process.env.ROUTE_PREFIX}/loading-dot`, // 打点Loading效果
      component: LoadingDot
    },
    {
      path: `${process.env.ROUTE_PREFIX}/loading-rotate-arc`, // 弧线旋转Loading效果
      component: LoadingRotateArc
    }
  ]
})

export default router