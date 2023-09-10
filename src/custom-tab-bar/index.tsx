import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import clsx from "clsx";
import "./index.less";

export default function CustomTabBar() {
  const { path } = Taro.getCurrentInstance().router;
  const isIndex = path === "/pages/index/index";
  const isTest = path === "/pages/test/index";

  return (
    <View className="customTabBar border-2 border-[rgb(194, 194, 194)] border-solid flex justify-between items-center rounded-full fixed bottom-64 left-[20%] right-0 w-[60%] text-black">
      <View
        className="w-[50%] text-center h-[100px] line-height-[100px] center"
        onClick={() => {
          Taro.switchTab({
            url: "/pages/index/index",
          });
        }}
      >
        <View
          className={clsx("i-game-icons-3d-stairs w-[70px] h-[70px]", {
            "text-dark": isIndex,
            "text-gray-400": !isIndex,
          })}
        />
      </View>
      <View className="w-[2px] bg-gray-400 h-[40px]"></View>
      <View
        className="w-[50%] text-center h-[100px] line-height-[100px] center"
        onClick={() => {
          Taro.switchTab({
            url: "/pages/test/index",
          });
        }}
      >
        <View
          className={clsx("i-game-icons-3d-meeple w-[70px] h-[70px]", {
            "text-dark": isTest,
            "text-gray-400": !isTest,
          })}
        />
      </View>
    </View>
  );
}

CustomTabBar.options = {
  addGlobalClass: true,
};
