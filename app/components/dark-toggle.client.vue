<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none btn btn-primary row items-center" @click="toggleDark">
    <div class="swap swap-rotate">
      <Icon name="carbon:sun" :class="[color.value !== 'dark' ? 'swap-on' : 'swap-off']" />
      <Icon name="carbon:moon" :class="[color.value === 'dark' ? 'swap-on' : 'swap-off']" />
    </div>
    <p>{{ color.value }}</p>
  </button>
</template>
