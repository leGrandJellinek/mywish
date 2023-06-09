const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/dist/'
  : '/',
  outputDir: "../dist",
  filenameHashing: false,
})
