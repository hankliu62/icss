## 波浪效果

### 技术总结

一个正方形，给它添加 `border-radius: 50%`，将会得到一个圆形。

![圆形](https://user-images.githubusercontent.com/8554143/28261913-c1757820-6b13-11e7-9cdc-32cb75331b03.png)

> border-radius：用来设置边框圆角，当使用一个半径时确定一个圆形。

如果 border-radius 没到 50%，但是接近 50% ，我们会得到一个这样的图形：

![椭圆形](https://user-images.githubusercontent.com/8554143/28261931-cf981944-6b13-11e7-8162-2bd5d2d2d77e.png)

加上 rotate 旋转动画，效果如下:

![椭圆形旋转](https://user-images.githubusercontent.com/8554143/28262766-ddd5c742-6b16-11e7-81da-c238ff92955d.gif)

仔细盯着一边看，是会有类似波浪的起伏效果的，借助这个动态变换的起伏动画，模拟制造出类似波浪的效果。

#### 一些小技巧

单纯的让一个 border-radius 接近 50 的椭圆形旋转，动画效果可能不是那么好，我们可以适当的添加一些其他变换因素，让动画效果看上去更真实：

- 在动画过程中，动态的改变 border-radius 的值；
- 在动画过程中，利用 transform 对旋转椭圆进行轻微的位移、变形；
- 上面也演示到了，多个椭圆同时转动，赋予不同时长的动画，并且添加轻微的透明度，让整个效果更佳逼真。
