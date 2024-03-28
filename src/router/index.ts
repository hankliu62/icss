import { createRouter, createWebHistory } from 'vue-router'
import { getRoutePrefix } from '@/utils/route'

const Home = () => import('../views/Home/index.vue')

// 超酷炫的气泡效果
const BubbleEffect = () => import('../views/BubbleEffect/page.vue')
// 波浪效果
const WaterRipple = () => import('../views/WaterRipple/page.vue')
// 充电效果
const Charge = () => import('../views/Charge/page.vue')
// 椭圆环绕效果
const RotatingEllipse = () => import('../views/RotatingEllipse/page.vue')
// 3D相册效果
const PhotoFrame = () => import('../views/PhotoFrame/page.vue')
// 智能变色效果
const IntelligentDiscolour = () => import('../views/IntelligentDiscolour/page.vue')
// 边框动画效果
const BorderAnimation = () => import('../views/BorderAnimation/page.vue')
// 渐变遮罩效果
const LinearMask = () => import('../views/LinearMask/page.vue')
// 图片融合效果
const ImageMask = () => import('../views/ImageMask/page.vue')
// 滚动头部阴影效果
const ScrollHeaderShadow = () => import('../views/ScrollHeaderShadow/page.vue')
// 小球穿梭Loading效果
const LoadingShuttleBall = () => import('../views/LoadingShuttleBall/page.vue')
// 打点Loading效果
const LoadingDot = () => import('../views/LoadingDot/page.vue')
// 弧线旋转Loading效果
const LoadingRotateArc = () => import('../views/LoadingRotateArc/page.vue')

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: `${getRoutePrefix()}/`,
      component: Home
    },
    {
      path: `${getRoutePrefix()}/bubble-effect`, // 超酷炫的气泡效果
      component: BubbleEffect
    },
    {
      path: `${getRoutePrefix()}/water-ripple`, // 波浪效果
      component: WaterRipple
    },
    {
      path: `${getRoutePrefix()}/charge`, // 充电效果
      component: Charge
    },
    {
      path: `${getRoutePrefix()}/rotating-ellipse`, // 椭圆环绕效果
      component: RotatingEllipse
    },
    {
      path: `${getRoutePrefix()}/photo-frame`, // 3D相册效果
      component: PhotoFrame
    },
    {
      path: `${getRoutePrefix()}/intelligent-discolour`, // 智能变色效果
      component: IntelligentDiscolour
    },
    {
      path: `${getRoutePrefix()}/border-animation`, // 边框动画效果
      component: BorderAnimation
    },
    {
      path: `${getRoutePrefix()}/linear-mask`, // 渐变遮罩效果
      component: LinearMask
    },
    {
      path: `${getRoutePrefix()}/image-mask`, // 图片融合效果
      component: ImageMask
    },
    {
      path: `${getRoutePrefix()}/scroll-header-shadow`, // 滚动头部阴影效果
      component: ScrollHeaderShadow
    },
    {
      path: `${getRoutePrefix()}/loading-shuttle-ball`, // 小球穿梭Loading效果
      component: LoadingShuttleBall
    },
    {
      path: `${getRoutePrefix()}/loading-dot`, // 打点Loading效果
      component: LoadingDot
    },
    {
      path: `${getRoutePrefix()}/loading-rotate-arc`, // 弧线旋转Loading效果
      component: LoadingRotateArc
    }
  ]
})

export default router