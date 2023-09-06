import path from "path";
import UnoCSS from "unocss/webpack";

const config = {
  projectName: "taroTest",
  date: "2023-8-8",
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ["@tarojs/plugin-html", "@taro-hooks/plugin-react"],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: {
    type: "webpack5",
    prebundle: {
      enable: false,
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/services": path.resolve(__dirname, "..", "src/services"),
    "@/package": path.resolve(__dirname, "..", "package.json"),
    "@/project": path.resolve(__dirname, "..", "project.config.json"),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
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
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    webpackChain(chain) {
      // https://github.com/unocss/unocss
      chain.plugin("unocss").use(UnoCSS());
      chain.module
        .rule("script")
        .use("linariaLoader")
        .loader("@linaria/webpack-loader")
        .options({
          sourceMap: process.env.NODE_ENV !== "production",
        });
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    // esnextModules: ['nutui-react'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    webpackChain(chain) {
      // https://github.com/unocss/unocss
      chain.plugin("unocss").use(UnoCSS());
      chain.module
        .rule("script")
        .use("linariaLoader")
        .loader("@linaria/webpack-loader")
        .options({
          sourceMap: process.env.NODE_ENV !== "production",
        });
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
