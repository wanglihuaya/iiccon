import { Button, Grid } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { useEnv } from "taro-hooks";

import { getTestData } from "@/services";
import { useEffect } from "react";
import "./index.less";

function Index() {
  const env = useEnv();

  const init = async () => {
    try {
      const res = await getTestData("1");
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {}, [init()]);

  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className="index">当前环境: {env}</View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
      <div className="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s">
        UnoCSS
      </div>
      <View className="op30 text-lg fw300 m1">
        The instant on-demand Atomic CSS engine.
      </View>
      <View className="w-md h-md i-carbon-logo-github" />
      <Grid>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-after-effects" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-animate" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-dreamweaver" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-illustrator" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-incopy" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-indesign" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-lightroom" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-photoshop" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-premiere" />
        </Grid.Item>
        <Grid.Item>
          <View className="w-[100px] h-[100px] i-logos-adobe-xd" />
        </Grid.Item>
      </Grid>
    </View>
  );
}

export default Index;
