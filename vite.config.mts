// Plugins
import Vue from '@vitejs/plugin-vue'

// Utilities
import { fileURLToPath, URL } from 'node:url'
import ViteFonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href'],
          'v-app-bar': ['image'],
          'v-avatar': ['image'],
          'v-banner': ['avatar'],
          'v-card': ['image', 'prependAvatar', 'appendAvatar'],
          'c-card-item': ['prependAvatar', 'appendAvatar'],
          'v-carousel-item': ['src', 'lazySrc', 'srcset'],
          'v-chip': ['prependAvatar', 'appendAvatar'],
          'v-img': ['src', 'lazySrc', 'srcset'],
          'v-list-item': ['prependAvatar', 'appendAvatar'],
          'v-navigation-drawer': ['image'],
          'v-parallax': ['src', 'lazySrc', 'srcset'],
          'v-toolbar': ['image'],
          NEXUSe2eImage: 'src'
        }
      }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900'
          }
        ]
      }
    })
  ],
  build: {
    emptyOutDir: false
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 8080
  }
})
