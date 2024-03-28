## 波浪效果

## 技术总结

### CSS 实现原理

实现这个效果，需要一点点“CSS 障眼法”。假设有一层阴影，在默认情况下用一个元素遮挡起来，以下都称之为“遮挡物”。这里需要考虑好各个部分的层级关系，稍微有些复杂，如下所示（侧面层级关系图）

> 层级关系为：头部 > 遮挡物 > 阴影 > 内容

在滚动过程中，阴影就自动就可见了，遮挡物正好又会被头部遮住，注意，遮挡物和内容是一起滚动的。

头部: header
遮挡物: section.shadow:after
阴影: section.shadow:before
内容: main

### 总结

以上就是全部分享内容了，是不是又掌握一个 CSS 小技巧？用到了3个定位属性，几乎零成本，复制几行代码，马上就可以用起来了，下面总结一下实现要点：

1. 固定头部的布局推荐用 `sticky` 实现，好处是可以保留头部占位，无需额外预留
2. 整体实现思路是CSS 障眼法和 CSS 层级，相互遮挡
3. `fixed` 定位在不设置 `top` 或者 `left` 值时，仍然位于原先位置，但是会在这个位置固定下来
4. `absolute` 定位在不设置 `top` 或者 `left` 值时，仍然位于原先位置，也会跟随内容滚动
5. 纯色遮挡在滚动时有些生硬，半透明渐变遮挡在滚动时会更加柔和

注意：

1. 所有的元素处于 `body` 下，如果处于body元素中的某个 `overflow: auto` 的元素下时，不会存在阴影效果，遮挡物不会随内容滚动


## 代码片段
``` vue
<script setup lang="ts">
/**
 * 滚动头部阴影效果
 *
 *
 */

import { nextTick, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  const app = document.getElementById('app');
  if (app && app.classList.contains('full')) {
    app.classList.remove('full')
  }

  nextTick(() => {
    window.scrollTo(0, 0)
  })
})

onUnmounted(() => {
  const app = document.getElementById('app');
  if (app && !app.classList.contains('full')) {
    app.classList.add('full')
  }
})

const router = useRouter()

// 跳转首页
const onBack = () => {
  router.push('/')
}
</script>

<template>
  <header class="text-left text-[26px] font-semibold p-[10px_24px] border-b sticky top-0 bg-white z-1">
    <span class="cursor-pointer" @click="onBack">LOGO</span>
  </header>
  <section class="shadow before:shadow-[0px_0px_10px_1px_#333] before:content-[''] before:fixed before:left-0 before:w-full after:absolute after:left-0 after:content-[''] after:w-full after:h-[20px] after:bg-gradient-to-b after:from-[white_50%] after:to-transparent"></section>
  <main class="mx-auto max-w-[400px] pt-[15px] pb-[30px]">
    <h5 class="text-[20px] font-semibold">长恨歌</h5>
    <div>
      <span>【作者】白居易</span>
      <span>【朝代】唐</span>
    </div>
    <div class="border-t my-[10px]"></div>
    <p>汉皇重色思倾国，御宇多年求不得。</p>
    <p>杨家有女初长成，养在深闺人未识。</p>
    <p>天生丽质难自弃，一朝选在君王侧。</p>
    <p>回眸一笑百媚生，六宫粉黛无颜色。</p>
    <p>春寒赐浴华清池，温泉水滑洗凝脂。</p>
    <p>侍儿扶起娇无力，始是新承恩泽时。</p>
    <p>云鬓花颜金步摇，芙蓉帐暖度春宵。</p>
    <p>春宵苦短日高起，从此君王不早朝。</p>
    <p>承欢侍宴无闲暇，春从春游夜专夜。</p>
    <p>后宫佳丽三千人，三千宠爱在一身。</p>
    <p>金屋妆成娇侍夜，玉楼宴罢醉和春。</p>
    <p>姊妹弟兄皆列土，可怜光彩生门户。</p>
    <p>遂令天下父母心，不重生男重生女。</p>
    <p>骊宫高处入青云，仙乐风飘处处闻。</p>
    <p>缓歌慢舞凝丝竹，尽日君王看不足。</p>
    <p>渔阳鼙鼓动地来，惊破霓裳羽衣曲。</p>
    <p>九重城阙烟尘生，千乘万骑西南行。</p>
    <p>翠华摇摇行复止，西出都门百余里。</p>
    <p>六军不发无奈何，宛转蛾眉马前死。</p>
    <p>花钿委地无人收，翠翘金雀玉搔头。</p>
    <p>君王掩面救不得，回看血泪相和流。</p>
    <p>黄埃散漫风萧索，云栈萦纡登剑阁。</p>
    <p>峨嵋山下少人行，旌旗无光日色薄。</p>
    <p>蜀江水碧蜀山青，圣主朝朝暮暮情。</p>
    <p>行宫见月伤心色，夜雨闻铃肠断声。</p>
    <p>天旋地转回龙驭，到此踌躇不能去。</p>
    <p>马嵬坡下泥土中，不见玉颜空死处。</p>
    <p>君臣相顾尽沾衣，东望都门信马归。</p>
    <p>归来池苑皆依旧，太液芙蓉未央柳。</p>
    <p>芙蓉如面柳如眉，对此如何不泪垂。</p>
    <p>春风桃李花开夜，秋雨梧桐叶落时。</p>
    <p>西宫南苑多秋草，落叶满阶红不扫。</p>
    <p>梨园弟子白发新，椒房阿监青娥老。</p>
    <p>夕殿萤飞思悄然，孤灯挑尽未成眠。</p>
    <p>迟迟钟鼓初长夜，耿耿星河欲曙天。</p>
    <p>鸳鸯瓦冷霜华重，翡翠衾寒谁与共。</p>
    <p>悠悠生死别经年，魂魄不曾来入梦。</p>
    <p>临邛道士鸿都客，能以精诚致魂魄。</p>
    <p>为感君王辗转思，遂教方士殷勤觅。</p>
    <p>排空驭气奔如电，升天入地求之遍。</p>
    <p>上穷碧落下黄泉，两处茫茫皆不见。</p>
    <p>忽闻海上有仙山，山在虚无缥渺间。</p>
    <p>楼阁玲珑五云起，其中绰约多仙子。</p>
    <p>中有一人字太真，雪肤花貌参差是。</p>
    <p>金阙西厢叩玉扃，转教小玉报双成。</p>
    <p>闻道汉家天子使，九华帐里梦魂惊。</p>
    <p>揽衣推枕起徘徊，珠箔银屏迤逦开。</p>
    <p>云鬓半偏新睡觉，花冠不整下堂来。</p>
    <p>风吹仙袂飘飖举，犹似霓裳羽衣舞。</p>
    <p>玉容寂寞泪阑干，梨花一枝春带雨。</p>
    <p>含情凝睇谢君王，一别音容两渺茫。</p>
    <p>昭阳殿里恩爱绝，蓬莱宫中日月长。</p>
    <p>回头下望人寰处，不见长安见尘雾。</p>
    <p>惟将旧物表深情，钿合金钗寄将去。</p>
    <p>钗留一股合一扇，钗擘黄金合分钿。</p>
    <p>但令心似金钿坚，天上人间会相见。</p>
    <p>临别殷勤重寄词，词中有誓两心知。</p>
    <p>七月七日长生殿，夜半无人私语时。</p>
    <p>在天愿作比翼鸟，在地愿为连理枝。</p>
    <p>天长地久有时尽，此恨绵绵无绝期。</p>
  </main>
</template>
```