import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import solidJs from '@astrojs/solid-js'
import UnoCSS from 'unocss/astro'
import AutoImport from 'unplugin-auto-import/astro'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel/edge'
import netlify from '@astrojs/netlify/edge-functions'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import astroI18next from 'astro-i18next'
import AstroPWA from '@vite-pwa/astro'

function envAdapter() {
  if (process.env.OUTPUT === 'vercel') {
    return vercel()
  }
  else if (process.env.OUTPUT === 'netlify') {
    return netlify()
  }
  else {
    return node({
      mode: 'standalone',
    })
  }
}
// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    solidJs(),
    UnoCSS({ injectReset: true }),
    image(),
    // https://docs.astro.build/en/guides/integrations-guide/sitemap/
    sitemap(),
    // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
    robotsTxt(),
    // https://github.com/yassinedoghri/astro-i18next
    astroI18next(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
      ],
      dirs: ['src/hooks', 'src/composables', 'src/stores', 'src/utils'],
      dts: 'src/typings/auto-import.d.ts',
      vueTemplate: true,
    }),
    // https://vite-pwa-org.netlify.app/frameworks/astro.html
    AstroPWA({
      mode: 'development',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Astro PWA',
        short_name: 'Astro PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/404$/],
      },
    }),
  ],
  output: 'server',
  adapter: envAdapter(),
})
