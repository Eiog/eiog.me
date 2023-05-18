<script setup lang='ts'>
import { create } from 'canvas-confetti'

const domRef = ref<HTMLCanvasElement | undefined>()
const confetti = create(domRef.value, {
  resize: true,
  useWorker: true,
})
onMounted(() => {
  confetti({
    particleCount: 500,
    spread: 120,
    startVelocity: 100,
    origin: { y: 1.2 },
  })
})
</script>

<template>
  <canvas ref="domRef" class="fixed inset-0 wh-full z--1" />
</template>

<style scoped lang='less'>

</style>
