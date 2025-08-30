import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 将所有 /api 开头的请求代理到 Django 后端
      '/api': {
        target: 'http://127.0.0.1:8000', 
        changeOrigin: true,
        // 注意：这里不需要 rewrite，因为后端的 URL 就是以 /api/ 开头的
      }
    }
  }
})