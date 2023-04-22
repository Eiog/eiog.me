<script setup lang='ts'>
import Typed from 'typed.js'

onMounted(() => {
  const typed = new Typed('#typed', {
    strings: ['Hi there👋 \n Here\'s Eiog ~'],
    typeSpeed: 50,
  })
})
</script>

<template>
  <div flex text-3xl>
    <div id="typed" />
  </div>
</template>

<style scoped lang='less'>

</style>
