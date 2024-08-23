import { appDescription } from './app/constants/index'

// use `v-auto-animate` get animation quickly
export default defineNuxtConfig({
  ssr: true,

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@nuxt/image',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    'dayjs-nuxt',
    '@nuxt/fonts',
    '@hebilicious/vue-query-nuxt',
  ],

  dayjs: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    plugins: ['utc', 'relativeTime'],
  },

  tailwindcss: {
    viewer: true,
    cssPath: '~/assets/styles/global.scss',
  },

  logLevel: 'info',

  i18n: {
    lazy: true,
    langDir: 'lang',
    vueI18n: './app/config/i18n.ts',
    locales: [{
      name: 'English',
      code: 'en',
      file: 'en.json',
    }, {
      name: '中文',
      code: 'zh',
      file: 'zh.json',
    }],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-08-23',
})
