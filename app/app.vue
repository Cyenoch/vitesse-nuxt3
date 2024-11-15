<script setup lang="ts">
import { appName } from '~~/shared/constants'

useHead({
  title: appName,
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
