import { acceptHMRUpdate, defineStore } from 'pinia'

export const authTokenStorage = useLocalStorage<string | null>('token', null, { writeDefaults: true })

export const authToken = computed(() => authTokenStorage.value)

export const useUserStore = defineStore('user', () => {
  return {
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
