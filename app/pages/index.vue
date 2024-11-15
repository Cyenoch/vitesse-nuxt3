<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="p-12">
    <h1 class="font-bold">
      23
    </h1>
    <Button>Hello</Button>
    <Button @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'">
      Dark toggle
    </Button>
  </div>
</template>

<style scoped>

</style>
