<script setup lang='ts'>
import { Application } from '@splinetool/runtime'

const domRef = ref<HTMLCanvasElement | undefined>()
onMounted(() => {
  if (!domRef.value)
    return
  const spline = new Application(domRef.value)
  spline.setSize(100, 100)
  spline.canvas.width = 100
  spline.canvas.height = 100
  spline.load('https://prod.spline.design/GR-rIgyizvWlvkeK/scene.splinecode')
})
</script>

<template>
  <div class="w-100 h-100">
    <canvas ref="domRef" />
  </div>
</template>

<style scoped lang='less'>

</style>
