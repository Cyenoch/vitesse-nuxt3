<script setup lang="ts">
const colorMode = useColorMode()
const { locale } = useI18n()
</script>

<template>
  <div class="p-12">
    <h1 class="font-bold">
      {{ $t('current', { lang: locale }) }}
    </h1>
    <Button>{{ $t('welcome') }}</Button>
    <Button @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'">
      Dark toggle
    </Button>
  </div>
</template>

<style scoped>

</style>
