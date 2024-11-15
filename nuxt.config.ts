import { appDescription } from './shared/constants'

// '@vite-pwa/nuxt'
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    'dayjs-nuxt',
    '@nuxt/fonts',
    '@hebilicious/vue-query-nuxt',
  ],

  logLevel: 'info',

  ssr: true,

  compatibilityDate: '2024-07-22',

  future: {
    compatibilityVersion: 4,
  },

  // pwa,

  fonts: {
    defaults: {
      weights: [200, 400, 600, 800],
    },
  },

  dayjs: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    plugins: ['utc', 'relativeTime'],
  },

  tailwindcss: {
    viewer: true,
    cssPath: './app/assets/css/tailwind.scss',
  },

  i18n: {
    locales: [{
      code: 'en',
      file: 'en.json',
      // files: [{path: 'en.ts',cache: false}]
    }],
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: './shared/config/i18n.ts',
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
    experimental: {
      openAPI: true,
    },
  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
})
