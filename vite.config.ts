import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vct-stage',
  plugins: [
    react(),
    TanStackRouterVite(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      autoInstall: true,
    }),
    AutoImport({
      imports: [
        'react',
        'react-i18next',
        {
          react: ['createContext', 'Fragment'],
        },
        {
          clsx: [
            ['default', 'clsx']
          ]
        }
      ],
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
        }),
      ],
      eslintrc: {
        enabled: true,
      },
      dts: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
