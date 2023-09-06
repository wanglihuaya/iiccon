import { Button, Grid, Overlay } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";
import { useEnv } from "taro-hooks";

import { getTestData, getTestData1, getTestData2 } from "@/services";
import { useEffect, useState } from "react";
import "./index.less";

function Index() {
  const env = useEnv();
  const [cssData, setCssData] = useState({} as any);
  const [iconList, setIconList] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [selectIcon, setSelectIcon] = useState("");

  const init = async () => {
    const nowIconList: any = [];
    try {
      const res = await getTestData();
      // 所有的类比的名字
      const res1 = await getTestData1();
      // 获取 res1 所有的 key
      const setList = Object.keys(res1).slice(0, 5);
      setList.forEach(async (item) => {
        // 每一个类别的所有的 icon的名字
        const res2: any = await getTestData2(item);
        if (res2) {
          const list: any = [];
          if (res2?.uncategorized?.length > 0) {
            list.push(...res2?.uncategorized.flat());
          }
          if (res2?.hidden?.length > 0) {
            list.push(...res2?.hidden.flat());
          }
          if (res2?.categories && Object.values(res2?.categories)?.length > 0) {
            const _list = Object.values(res2?.categories)?.map((_item) => {
              return _item;
            });
            list.push(..._list.flat());
          }

          nowIconList.push({
            name: item,
            list: list,
          });
          console.log("nowIconList", nowIconList.length);
          setIconList(nowIconList);
        }
      });
      const matches = res.match(/url\((.*)\);/)[1];
      setCssData(matches);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className="index">当前环境: {env}</View>
      <View className="index">
        <Button
          type="primary"
          className="btn"
          onClick={() => {
            console.log("click", iconList.length);
          }}
        >
          NutUI React Button
        </Button>
      </View>
      <View className="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s">
        UnoCSS
      </View>
      <View
        style={{
          backgroundImage: `url(${cssData})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[100px] h-[100px]"
      />
      {/* <Image src="https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg" /> */}

      <Grid>
        {iconList.map((item: any, index) => {
          const _list = item.list.slice(0, 500);
          return _list.map((item1: any, index1) => {
            return (
              <Grid.Item
                key={index1 + index}
                onClick={() => {
                  setVisible(true);
                  setSelectIcon(
                    `https://api.iconify.design/${item.name}/${item1}.svg`
                  );
                }}
              >
                <Image
                  lazyLoad
                  fadeIn
                  showMenuByLongpress
                  className="w-[70px] h-[70px]"
                  src={`https://api.iconify.design/${item.name}/${item1}.svg`}
                />
                {/* <View className="w-[100px] h-[100px]">
                    <View className={item1} />
                  </View> */}
              </Grid.Item>
            );
          });
        })}
      </Grid>
      <Overlay
        visible={visible}
        onClick={() => {
          setVisible(false);
        }}
        className="center"
      >
        <Image
          onClick={() => {
            setVisible(false);
          }}
          lazyLoad
          fadeIn
          showMenuByLongpress
          className="  w-[500px] h-[500px]"
          src={selectIcon}
        />
      </Overlay>
    </View>
  );
}

export default Index;
