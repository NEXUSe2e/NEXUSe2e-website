import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import '@mdi/font/css/materialdesignicons.css'

const DARK = {
  dark: true,
  colors: {
    surface: '#27293d',
    background: '#1e1e2b',
    'on-background': '#d4d4d8',
    'on-surface': '#d4d4d8',
    error: '#FF8A80',
    success: '#4CAF50',
    warning: '#FFC107',
    info: '#EEEEEE',
    accent: '#FF6F00'
  }
}

const LIGHT = {
  dark: false,
  colors: {
    surface: '#ECEFF1',
    background: '#FFFFFF',
    'on-background': '#424242',
    'on-surface': '#424242',
    error: '#FF8A80',
    success: '#4CAF50',
    warning: '#FFC107',
    info: '#EEEEEE'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'DARK',
    themes: {
      DARK,
      LIGHT
    }
  },
  defaults: {
    VCard: {
      rounded: 'lg',
      variant: 'flat'
    }
  }
})
