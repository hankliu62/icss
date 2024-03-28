import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// vs code 编辑器配置
import MonacoEditorPlugin from 'vite-plugin-monaco-editor'
import MarkdownPlugin, { Mode } from 'vite-plugin-markdown'

const path = require('path')

const Languages = [
  "editorWorkerService",
  "plaintext",
  "sql",
  "json",
  "markdown",
  "css",
  "typescript",
  "javascript",
  "html",
  "graphql",
  "python",
  "scss",
  "yaml",
  "abap",
  "apex",
  "azcli",
  "bat",
  "bicep",
  "cameligo",
  "clojure",
  "coffeescript",
  "c",
  "cpp",
  "csharp",
  "csp",
  "cypher",
  "dart",
  "dockerfile",
  "ecl",
  "elixir",
  "flow9",
  "fsharp",
  "freemarker2",
  "freemarker2.tag-angle.interpolation-dollar",
  "freemarker2.tag-bracket.interpolation-dollar",
  "freemarker2.tag-angle.interpolation-bracket",
  "freemarker2.tag-bracket.interpolation-bracket",
  "freemarker2.tag-auto.interpolation-dollar",
  "freemarker2.tag-auto.interpolation-bracket",
  "go",
  "handlebars",
  "hcl",
  "ini",
  "java",
  "julia",
  "kotlin",
  "less",
  "lexon",
  "lua",
  "liquid",
  "m3",
  "mips",
  "msdax",
  "mysql",
  "objective-c",
  "pascal",
  "pascaligo",
  "perl",
  "pgsql",
  "php",
  "pla",
  "postiats",
  "powerquery",
  "powershell",
  "proto",
  "pug",
  "qsharp",
  "r",
  "razor",
  "redis",
  "redshift",
  "restructuredtext",
  "ruby",
  "rust",
  "sb",
  "scala",
  "scheme",
  "shell",
  "sol",
  "aes",
  "sparql",
  "st",
  "swift",
  "systemverilog",
  "verilog",
  "tcl",
  "twig",
  "vb",
  "xml",
];

const config: any = {
  plugins: [
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    vue(),
    MonacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript', 'json', 'html', 'css']
    }),
    MarkdownPlugin({
      mode: [Mode.VUE, Mode.HTML],
    })
  ],
  define: {
    "process.env": {
      "ROUTE_PREFIX": '',
    },
  },
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
  config.define["process.env"]["ROUTE_PREFIX"] = `/${repo}`

  console.log("nextConfig:", config);
}

// https://vitejs.dev/config/
export default defineConfig(config)
