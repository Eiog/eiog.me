<script setup lang='ts'>
import Typed from 'typed.js'

onMounted(() => {
  const typed = new Typed('#typed', {
    strings: ['Hi there'],
    typeSpeed: 50,
  })
  setTimeout(() => {
    const typed1 = new Typed('#typed-1', {
      strings: ['Hi there'],
      typeSpeed: 50,
    })
  }, 2000)
})
</script>

<template>
  <div class="w-full flex justify-between">
    <div class="flex-1 flex-col gap-1">
      <div class="flex-y-center text-5xl">
        <p id="typed" class="clip" />
      </div>
      <div class="flex-y-center text-5xl">
        <p id="typed-1" />
      </div>
    </div>
    <div class="flex-1">
      <div class="blur" />
    </div>
  </div>
</template>

<style scoped lang='less'>
.clip{
  @apply bg-clip-text text-transparent font-black bg-gradient-to-tl from-blue-5 to-fuchsia-5;
}
.blur{
  @apply w-60 h-60 rounded-full bg-gradient-to-tr from-blue-5 to-fuchsia-5 blur-3xl;
}
</style>
