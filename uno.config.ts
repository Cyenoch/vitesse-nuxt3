import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  shortcuts: [
    ['row', 'flex flex-row'],
    ['col', 'flex flex-col'],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetExtra(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
