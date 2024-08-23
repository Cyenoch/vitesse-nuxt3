<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div col items-start>
    {{ $t("current", { lang: locale }) }}

    <NuxtLink
      v-for="{ name, code } in availableLocales"
      :key="code" :to="switchLocalePath(code)"
      replace
    >
      <button class="btn btn-primary">
        Set Lang: {{ name }}
      </button>
    </NuxtLink>
  </div>
</template>
