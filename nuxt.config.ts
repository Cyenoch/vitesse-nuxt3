import { pwa } from './config/pwa'
import { appDescription } from './app/constants/index'

// use `v-auto-animate` get animation quickly
// '@vite-pwa/nuxt'
export default defineNuxtConfig({
  ssr: false,

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
    cssPath: '~/assets/css/global.scss',
  },

  logLevel: 'info',

  i18n: {
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
    lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: './config/i18n.ts',
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
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
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

  // pwa,

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-22',
})
