<script setup lang="ts">
const route = useRoute('hi-id___en')
const name = route.params.id

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    {{ name }}
    {{ $t('welcome') }}
  </div>
</template>
