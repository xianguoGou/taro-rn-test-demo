let pages: Array<string> = [
  'pages/home/index',
  'pages/forms/index'
]
export default {
  pages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '测试rn',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: '#dfdfdf',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './assets/images/tabbar/home.png',
        selectedIconPath: './assets/images/tabbar/home_on.png',
        text: '首页',
      },
      {
        pagePath: 'pages/forms/index',
        iconPath: './assets/images/tabbar/forms.png',
        selectedIconPath: './assets/images/tabbar/forms_on.png',
        text: '其他',
      },
    ],
  },
  // dynamicLib: {
  //   'swan-sitemap-lib': {
  //     provider: 'swan-sitemap',
  //   },
  // },
  // useSwanNews: true,
}
