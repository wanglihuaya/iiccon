import Taro from "@tarojs/taro";

/**
 *
 * 说明：请求方法 封装、添加token、拦截
 *
 */

// 网络请求拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  //获取当前页面的路由
  // const getCurrentPage = Taro.getCurrentInstance()?.router?.path;

  // const { method, data, url } = requestParams;

  // 路由拦截
  const token = Taro.getStorageSync("token");
  if (!token) {
    // Taro.reLaunch({
    //   url: "/pages/login/index",
    // });
  }

  // 添加token
  requestParams.header = {
    ...requestParams.header,
    "X-Access-Token": token,
  };

  return chain.proceed(requestParams).then((res) => {
    // 响应拦截
    if (res.data.errorCode == "USER_NOT_LOGIN" && token) {
      Taro.reLaunch({
        url: "/pages/login/index",
      });
    }

    // 前端拦截错误信息
    if (res.data.success == false) {
      // 拦截全局后端返回的错误信息
      Taro.showToast({
        title: res?.data?.errorMessage || "",
        icon: "none",
      });
    }
    return res.data;
  });
};

Taro.addInterceptor(interceptor);

export default {
  request(option: any, method = "GET") {
    return Taro.request({
      ...option,
      method,
      header: {
        ...option.header,
      },
    });
  },
  get(option) {
    return this.request(option, "GET");
  },
  post(option) {
    return this.request(option, "POST");
  },
};
