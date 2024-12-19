<script setup lang="ts">
import { appName } from '~~/shared/constants'

const colorMode = useColorMode()
colorMode.preference = 'light'

const localeHead = useLocaleHead()

useHead({
  title: appName,
  htmlAttrs: {
    ...localeHead.value.htmlAttrs,
  },
  link: [...(localeHead.value.link || [])],
  meta: [...(localeHead.value.meta || [])],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
