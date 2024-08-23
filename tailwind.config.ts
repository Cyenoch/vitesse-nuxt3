import type { Config } from 'tailwindcss'
import type { Config as DaisyuiConfig } from 'daisyui'
import daisyui from 'daisyui'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter'],
      },
    },
  },
  plugins: [
    daisyui,
    plugin(({ addUtilities }) => {
      addUtilities({
        '.row': {
          'display': 'flex',
          'flex-direction': 'row',
        },
        '.col': {
          'display': 'flex',
          'flex-direction': 'column',
        },
      })
    }),
  ],
  daisyui: {} satisfies DaisyuiConfig,
  darkMode: ['class', '[data-theme=\'dark\']'],
} satisfies Config
