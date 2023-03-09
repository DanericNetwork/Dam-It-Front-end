<template>
   <div>
      <slot />
   </div>
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/fonts.scss';
</style>

<script setup lang="ts">
import useLoading from '~~/composables/useLoading'

const loader = useLoading()

onBeforeMount(() => {
   loader.start()
   console.log(loader.loading.value)
})

onMounted(() => {
   console.log('stopping')
   loader.stop()
   console.log(loader.loading.value)
})

</script>

