export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: nuxtApp.$config.public.apiBase,
    async onRequest({ options }) {
      const token = useCookie('token')
      if (token.value) {
        options.headers.set('Authorization', `Bearer ${token.value}`)
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => {
          navigateTo('/login')
        })
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
