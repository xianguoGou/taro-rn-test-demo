module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    domain1: '"https://www.baidu.com/"',
    /**
     * 注释掉以下常量，就不会抛错，取消注释则报错
    */
    domain2: '"https://github.com/"',
    domain3: '"https://www.npmjs.com/"',
    config: JSON.stringify({
      a: 'hello world',
      b: 123
    })
  },
  mini: {
    webpackChain(chain) {
      chain
        .plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    },
  },
  h5: {
    devServer: {
    },
  },
  swan: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240, // 文件大小限制
          },
        },
      },
    },
  },
}
