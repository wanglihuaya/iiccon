// eslint-disable-next-line import/no-named-as-default
import presetIcons from "@unocss/preset-icons";
import { defineConfig, transformerDirectives } from "unocss";
import { presetWeapp } from "unocss-preset-weapp";
import { transformerClass } from "unocss-preset-weapp/transformer";

export default defineConfig({
  presets: [
    presetIcons({}),
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === "h5",
      platform: "taro",
      taroWebpack: "webpack5",
    }),
  ],
  shortcuts: [
    {
      "border-base": "border border-gray-500/10",
      center: "flex justify-center items-center",
    },
  ],
  transformers: [
    transformerClass(),
    transformerDirectives({
      enforce: "pre",
    }),
  ],
  content: {
    pipeline: {
      include: [/\.([jt]sx|css|less)($|\?)/],
      exclude: [],
    },
  },
});
