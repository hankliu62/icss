# 智能变色效果

## 技术总结

### 混合模式 mix-blend-mode: difference

CSS3 新增了一个很有意思的属性 --mix-blend-mode ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。一共有下图所示的一些混合模式：

| 取值 | 效果 | 分类 | 说明 |
| ------ | ------ | ------ | ------ |
| normal | 正常 | 基础混合模式 | 利用图层透明度和不透明度来控制与下面的图层混合 |
| dissolve | 溶解 | 基础混合模式 | 利用图层透明度和不透明度来控制与下面的图层混合 |
| darken | 变暗 | 降暗混合模式(减色模式) | 减色模式，滤掉图像中高亮色，从而达到图像变暗 |
| multiply | 正片叠底 | 降暗混合模式(减色模式) | 减色模式，滤掉图像中高亮色，从而达到图像变暗 |
| color-burn | 颜色加深 | 降暗混合模式(减色模式) | 减色模式，滤掉图像中高亮色，从而达到图像变暗 |
| linear-burn | 线性加深 | 降暗混合模式(减色模式) | 减色模式，滤掉图像中高亮色，从而达到图像变暗 |
| darker-color | 深色 | 降暗混合模式(减色模式) | 减色模式，滤掉图像中高亮色，从而达到图像变暗 |
| screen | 滤色 | 加亮混合模式(加色模式) | 加色模式，滤掉图像中暗色，从而达到图像变亮 |
| lighten | 变亮 | 加亮混合模式(加色模式) | 加色模式，滤掉图像中暗色，从而达到图像变亮 |
| color-dodge | 颜色减淡 | 加亮混合模式(加色模式) | 加色模式，滤掉图像中暗色，从而达到图像变亮 |
| linear-dodge | 线性减淡 | 加亮混合模式(加色模式) | 加色模式，滤掉图像中暗色，从而达到图像变亮 |
| lighter-color | 浅色 | 加亮混合模式(加色模式) | 加色模式，滤掉图像中暗色，从而达到图像变亮 |
| overlay | 叠加 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| soft-light | 柔光 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| hard-light | 强光 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| vivid-light | 亮光 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| linear-light | 线性光 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| hard-mix | 实色混合 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| linear-light | 线性光 | 融合混合模式 | 用于不同程度的对上、下两图层的融合，此类混合模式还可以在一定程度上提高图像的对比度 |
| difference | 差值 | 变异混合模式 | 用于制作各种变异的图层混合 |
| exclusion | 排除 | 变异混合模式 | 用于制作各种变异的图层混合 |
| subtract | 减去 | 变异混合模式 | 用于制作各种变异的图层混合 |
| divide | 划分 | 变异混合模式 | 用于制作各种变异的图层混合 |
| hue | 色相 | 色彩叠加型混合模式 | 根据图层的色相，饱和度等基本属性，完成图层融合 |
| saturation | 饱和度 | 色彩叠加型混合模式 | 根据图层的色相，饱和度等基本属性，完成图层融合 |
| color | 颜色 | 色彩叠加型混合模式 | 根据图层的色相，饱和度等基本属性，完成图层融合 |
| luminosity | 亮度 | 色彩叠加型混合模式 | 根据图层的色相，饱和度等基本属性，完成图层融合 |

其中，本文的主角是 `mix-blend-mode: difference`，意为差值模式。该混合模式会查看每个通道中的颜色信息，比较底色和绘图色，用较亮的像素点的像素值减去较暗的像素点的像素值。

与白色混合将使底色反相；与黑色混合则不产生变化。

通俗一点就是上方图层的亮区将下方图层的颜色进行反相，暗区则将颜色正常显示出来，效果与原图像是完全相反的颜色。

## 代码片段
``` vue
<script setup lang="ts">
/**
 * 利用混合模式，让文字智能适配背景颜色
 *
 * https://github.com/chokcoco/iCSS/issues/169
 */
</script>

<template>
  <div class="container w-full h-full max-w-full flex flex-col">
    <div class="demo1 flex-1 min-h-520px relative bg-br-black-white-split">
      <div
        class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[120px] mix-blend-difference text-white animate-[horizontal-bounce_3s_ease-in-out_infinite_alternate] whitespace-nowrap select-none"
      >
        LOREM IPSUM
      </div>
    </div>

    <div class="demo2 flex-1 min-h-620px relative bg-b-black-white-split">
      <div
        class="absolute top-[50%] right-[20%] -translate-y-1/2 text-[30px] mix-blend-difference text-white animate-[vertical-bounce_3s_ease-in-out_infinite_alternate] whitespace-nowrap select-none"
        :style="{'writing-mode': 'vertical-rl'}"
      >
        下拉展示更多→
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
```