import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuejsx(),
    // createStyleImportPlugin({
    //   resolves: [
    //     ElementPlusResolve(),
    //   ],
    //   libs: [
    //     // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
    //     {
    //       libraryName: 'element-plus',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `element-plus/dist/${name}.css`;
    //       },
    //       // resolveComponent: (name) => {
    //       //   return `element-plus/lib/${name}`;
    //       // },
    //     },
    //   ],
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
})
