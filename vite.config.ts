import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
const path = require('path')

const config: any = {
  plugins: [
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    vue()
  ],
  optimizeDeps: {
    include: [
      'ant-design-vue',
      '@ant-design/icons-vue',
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@components": path.resolve(__dirname, './src/components'),
      "@assets": path.resolve(__dirname, './src/assets')
    },
  }
};

// 是否通过github actions部署
const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  // 用于为静态资源（如图像、样式表、JavaScript 文件等）设置 URL 前缀
  // 这在将应用部署到自定义域名或 CDN 上时特别有用，因为它允许您将静态资源存储在不同的位置
  config.base = `/${repo}/`;

  console.log("nextConfig:", config);
}

// https://vitejs.dev/config/
export default defineConfig(config)
