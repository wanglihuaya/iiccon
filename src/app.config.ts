export default defineAppConfig({
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/test/index",
        text: "测试",
      },
    ],
  },
  pages: ["pages/index/index", "pages/test/index", "pages/icones/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
