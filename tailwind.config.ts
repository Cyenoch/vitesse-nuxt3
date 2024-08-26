import type { Config } from 'tailwindcss'
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
  darkMode: ['class', '[data-theme=\'dark\']'],
} satisfies Config
