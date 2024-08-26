<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div>
    <div class="col items-center space-y-2">
      <LangSwitch />

      <Suspense>
        <ClientOnly>
          <div v-if="online">
            Online
          </div>
          <div v-else text-gray:80>
            You're offline
          </div>
        </ClientOnly>
        <template #fallback>
          <div italic op50>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>
