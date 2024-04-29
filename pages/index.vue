<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div>
    <Suspense>
      <client-only>
        <app-lang-switch />
        <div v-if="online">
          Online
        </div>
        <div v-else text-gray:80>
          You're offline
        </div>
      </client-only>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
