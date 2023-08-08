import { Button, Input } from "@nutui/nutui-react-taro";
import { useState } from "@taro-hooks/core";
import { View } from "@tarojs/components";
import { clsx } from "clsx";
import { useEnv } from "taro-hooks";
import "./index.scss";

const Index = () => {
  const [flag, setFlag] = useState(true);
  const env = useEnv();

  const className = clsx(
    flag ? "bg-[#123456]" : "bg-[#654321]",
    "text-white",
    "after:content-['click_here_to_switch_className']"
  );
  const logoClass = clsx(
    "bg-[url(https://pic1.zhimg.com/v2-3ee20468f54bbfefcd0027283b21aaa8_720w.jpg)] bg-[length:100%_100%] bg-no-repeat w-screen h-[41.54vw]"
  );
  return (
    <>
      <View>current env: {env}</View>
      <Input placeholder="请输入文本" />
      <Button type="primary">主要按sss钮</Button>
      <View className={logoClass}></View>
      <View className="[&_.u-count-down\_\_text]:!text-sky-400">
        <View></View>
        <View>
          <View className="u-count-down__text text-[50px] text-center before:content-['taro-react-tailwind-vscode-template']"></View>
        </View>
      </View>
      <View className="space-y-4">
        <View className="after:content-['这是一个小程序taro_react_tailwindcss的模板'] after:ml-0.5 after:text-lime-700"></View>
        <View
          className="bg-gray-100 dark:bg-zinc-800 h-20 w-40 after:text-xs after:content-['this_is_a_hover_block.have_a_try!']"
          hoverClass="bg-red-500 dark:bg-green-500"
        ></View>

        <View
          className={className}
          onClick={() => {
            setFlag(!flag);
          }}
        ></View>
        <View className="test mx-auto"></View>
      </View>
    </>
  );
};

export default Index;