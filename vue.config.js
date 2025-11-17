const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/pilaryborja120926/',
  transpileDependencies: true,
  devServer: {
    open: true
  },
  pwa: {
    name: 'Pilar&Borja 12.09.2026',
    themeColor: '#B2A6D1',
    msTileColor: '#ffffff'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/scss/main.scss')]
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Boda de Pilar y Borja ∞ 12.09.2026'
    }
  }
})
