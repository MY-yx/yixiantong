import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig((command, mode, ssrBuild) => {
  // 根据场景配置: command === 'build' => 生产环境
  return {
    plugins: [vue()],
    resolve: {
      // 和webpack的一样, 设置别名
      alias: {
        '@': resolve(__dirname, 'src'),
        'components': resolve(__dirname, 'src/components'),
        'styles': resolve(__dirname, 'src/assets/styles'),
        'js': resolve(__dirname, 'src/assets/js'),
        'data': resolve(__dirname, 'src/assets/data'),
        'pages': resolve(__dirname, 'src/pages'),
        'models': resolve(__dirname, 'src/models'),
        'hooks': resolve(__dirname, 'src/hooks')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://study.jsplusplus.com/Yixiantong',
          changeOrigin: true,
          rewrite: (path) => path.replace(/\/api/, '')
        }
      }
    }
  }
})
