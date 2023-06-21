## 超酷炫的气泡效果

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

#### 利用 backdrop-filter 替代 filter 消除边缘

但是！利用 `filter: blur()` 会有一个小问题。

运用了 `filter: blur()` 的元素，元素边缘的模糊度不够，会导致效果在边缘失真，我们仔细看看动画的边缘：

![边缘失真](https://user-images.githubusercontent.com/8554143/175033441-4b3ddcfb-d174-442e-85ed-ab712fb47009.png)

两者之间的差异在于，filter 是作用于元素本身，而 backdrop-filter 是作用于元素背后的区域所覆盖的所有元素，如果你想了解更多关于 backdrop-filter 的信息，可以戳大佬的这篇文章：`https://github.com/chokcoco/iCSS/issues/147`

我们通过去到原来添加在 `.g-footer` 上的 `filter: blur(5px)`，通过他的伪元素，叠加一层新的元素在它本身之上，并且添加了替代的 `backdrop-filter: blur(5px)`。

当然，因为这里的 `blur(5px)` 还需要为气泡与气泡之间的融合服务，所以为了覆盖动画全区域，我们还设置了 `top: -300px`，扩大了它的作用范围。

最终，我们就能完美的复刻文章一开头，使用 SVG 滤镜实现的效果：

![最终效果](https://user-images.githubusercontent.com/8554143/175035115-6de2c259-5ab9-4f42-8ed8-8fce6f5c3168.gif)