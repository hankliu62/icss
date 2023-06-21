## 充电效果

### 技术总结

#### 利用 filter: contrast() 滤镜与 filter: blur() 滤镜添加融合效果

利用 `filter: contrast()` 滤镜与 `filter: blur()` 滤镜。

模糊滤镜叠加对比度滤镜产生的融合效果。

单独将两个滤镜拿出来，它们的作用分别是：

1. `filter: blur()`： 给图像设置高斯模糊效果。
2. `filter: contrast()`： 调整图像的对比度。

当他们“合体”的时候，产生了奇妙的融合现象。

![融合效果](https://user-images.githubusercontent.com/8554143/30364156-9b5dc8e0-9895-11e7-876e-4c43af234ca3.gif)

仔细看两圆相交的过程，在边与边接触的时候，会产生一种边界融合的效果，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。

上述效果的实现基于两点：

1. 图形是在被设置了 `filter: contrast()` 的画布背景上进行动画的
2. 进行动画的图形被设置了 `filter: blur()`（ 进行动画的图形的父元素需要是被设置了 `filter: contrast()` 的画布）

意思是，上面两圆运动的背后，其实是叠加了一张设置了 `filter: contrast()` 的大白色背景，而两个圆形则被设置了 `filter: blur()` ，两个条件缺一不可。

当然，背景色不一定是白色，我们稍稍修改上面的Demo，简单的示意图如下：

![示意图](https://user-images.githubusercontent.com/8554143/30364469-f3347b58-9896-11e7-82ec-ee7b32189a1a.png)
