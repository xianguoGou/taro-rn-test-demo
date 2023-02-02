const path = require('path')
const config = {
  projectName: 'hybrid_mini',
  date: '2021-8-2',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: 'webpack5',
  // sass: {
  //   resource: ['src/assets/styles/colors.scss'],
  //   projectDirectory: path.resolve(__dirname, '..'),
  // },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[chunkhash].js',
    },
    imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash].[ext]',
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css',
    },
    esnextModules: ['taro-ui'],
    devServer: {
      hot: false,
    },
    router: {
      mode: 'browser',
      customRoutes: {
        '/pages/home/index': '/',
      },
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    appName: 'taroDemo1',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    },
    output: {
      iosSourceMapUrl: '', // sourcemap 文件url
      iosSourcemapOutput: '../../../projects/taro-native-shell/ios/main.map', // sourcemap 文件输出路径
      iosSourcemapSourcesRoot: '', // 将 sourcemap 资源路径转为相对路径时的根目录
      androidSourceMapUrl: '',
      androidSourcemapOutput: '../../../projects/taro-native-shell/android/app/src/main/assets/index.android.map',
      androidSourcemapSourcesRoot: '',
      ios: '../../../projects/taro-native-shell/ios/main.jsbundle',
      iosAssetsDest: '../../../projects/taro-native-shell/ios',
      android: '../../../projects/taro-native-shell/android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: '../../../projects/taro-native-shell/android/app/src/main/res'
    },
  }
}

module.exports = function (merge) {
  let requireEnv = ''
  switch (process.env.NODE_ENV) {
    case 'development':
      requireEnv = require('./dev')
      break
    case 'production':
      requireEnv = require('./prod')
      break
  }
  return merge({}, config, requireEnv)
}
