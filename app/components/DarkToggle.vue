<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button class="!outline-none space-x-2" @click="toggleDark">
    <Icon v-if="color.value === 'light'" class="align-middle" name="carbon:sun" />
    <Icon v-else class="align-middle" name="carbon:moon" />
    <p class="uppercase">
      {{ color.value }}
    </p>
  </Button>
</template>
