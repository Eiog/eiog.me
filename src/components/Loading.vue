<script setup lang='ts'>
import SvgIcon from './SvgIcon.vue'

const monsters = [
  '爱心徽章-素娜',
  'dm/亚古兽',
  'dm/加布兽',
  'dm/比丘兽',
  'dm/甲虫兽',
  'dm/巴鲁兽',
  'dm/哥玛兽',
  'dm/巴达兽',
  'dm/小狗兽',
  'dm/滚球兽',
  'dm/独角兽',
  'dm/比高兽',
  'dm/年糕兽',
  'dm/种子兽',
  'dm/布加兽',
  'dm/迪哥兽',
  'dm/咪罗兽',
  'dm/黑球兽',
  'dm/布尼兽',
  'dm/豆苗兽',
  'dm/泡沫兽',
  'dm/浮球兽',
  'dm/比兹兽',
  'dm/浮游兽',
  'dm/雪球兽',
  'dm/勇气徽章-太一',
  'dm/友情徽章-阿和',
  'dm/爱心徽章-素娜',
  'dm/知识徽章-光子郎',
  'dm/纯真徽章-美美',
  'dm/诚实徽章-阿助',
  'dm/希望徽章-阿武',
  'dm/光明徽章-嘉儿',

]
</script>

<template>
  <div w-100 h-20 overflow-hidden relative>
    <div h-20 flex-center gap-1 absolute>
      <SvgIcon name="爱心徽章-素娜" />
      <!-- <SvgIcon v-for="(item, index) in monsters" :key="index" :class="`monsters-${index}`" :name="`${item}`" :width="3" :height="3" /> -->
    </div>
  </div>
</template>

<style scoped lang='less'>
.loop(@i) when (@i >= 0) {
  .monsters-@{i} {
    animation-delay: @i+s !important;
  }

  .loop((@i - 1));
}

.loop(20);

.monsters {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
