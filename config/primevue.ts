import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#edf3ff',
      100: '#dbe7ff',
      200: '#b7d0ff',
      300: '#93b8ff',
      400: '#6fa1ff',
      500: '#578cff',
      600: '#4678e6',
      700: '#3564cc',
      800: '#2450b3',
      900: '#133c99',
      950: '#0a2b80',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          inverseColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.400}',
        },
      },
      dark: {
        primary: {
          color: '#578cff',
          inverseColor: '#ffffff',
          hoverColor: '#719dff',
          activeColor: '#3e7bff',
        },
      },
    },
  },
})

export const AppTheme = {
  preset: AppPreset,
  options: {
    darkModeSelector: '.dark',
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-base, primevue, tailwind-utilities, utilities;',
    },
  },
}
