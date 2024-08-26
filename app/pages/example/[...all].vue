<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center">
    <div text-4xl>
      <Link name="carbon:warning" />
    </div>
    <div>Not found</div>
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
