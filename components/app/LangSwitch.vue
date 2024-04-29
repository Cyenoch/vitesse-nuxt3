<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div col items-start>
    {{ $t("current", { lang: locale }) }}

    <button>
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        Set Lang: {{ locale.name }}
      </NuxtLink>
    </button>

    <nuxt-link :to="localePath('/hi/123')">
      Go to...
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
button {
  @apply bg-gray-8 m-1 cursor-pointer font-bold py-1 px-2;
}
</style>
