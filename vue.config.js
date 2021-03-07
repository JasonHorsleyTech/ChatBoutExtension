module.exports = {
  productionSourceMap: true,
  devServer: {
    host: 'popup.extension.test',
  },

  pages: {
    index: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },

    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },

  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: './postcss.config.js'
        }
      }
    }
  }
}
