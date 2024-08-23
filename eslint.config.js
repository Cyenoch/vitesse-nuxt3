// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      formatters: true,
    },
    {
      rules: {
        'no-console': 'warn',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
  )
)
