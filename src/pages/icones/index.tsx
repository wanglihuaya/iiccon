import { getTestData2 } from "@/services";
import { Grid, Overlay, Space, Tag } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

function Icones() {
  const options: any = Taro.getCurrentInstance()?.page?.options;
  const { type, author, total, license } = options;
  // 去除 license 中的 % \n 等字符
  const _license = license.replace(/%/g, "").replace(/\n/g, "");

  const [icones, setIcones] = useState([] as any);
  const [selectSecondType, setSelectSecondType] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectIcon, setSelectIcon] = useState<{ src: string; name: string }>({
    src: "",
    name: "",
  });

  console.log(Taro.getCurrentInstance()?.page);

  const init = async () => {
    if (!type) return;
    const iconesRes: any = await getTestData2(type as string);
    setIcones(iconesRes);
    console.log("iconesRes", iconesRes);
  };

  useEffect(() => {
    init();
  }, []);

  // return {
  //   name: item,
  //   title: res2.title,
  //   categories: res2?.categories,
  //   prefixes: res2?.prefixes,
  //   uncategorized: res2?.uncategorized,
  //   hidden: res2?.hidden,
  //   aliases: res2?.aliases,
  //   suffixes: res2?.suffixes,
  // };

  // Promise.all(requests).then((resAll) => {
  //   console.log(resAll);
  //   setIconList(resAll);
  // });

  // const matches = res.match(/url\((.*)\);/)[1];
  // setCssData(matches);
  return (
    <View className="p-4 pt-0">
      <View className="flex flex-col gap-1">
        <View className="text-xl text-dark">{type}</View>
        <View className="text-xs text-[#666]">{author}</View>
        <View className="text-xs text-[#666]">{_license}</View>
        <View className="text-xs text-[#666]">{total} icones</View>
      </View>
      <View className="">
        <Space wrap className="pb-4 pt-2">
          {icones?.categories &&
            Object.keys(icones?.categories)?.map((item: any) => {
              return (
                <Tag
                  key={item}
                  onClick={() => {
                    setSelectSecondType(item);
                  }}
                  plain
                  background="#666"
                >
                  {item}
                </Tag>
              );
            })}
          {icones?.prefixes &&
            Object.keys(icones?.prefixes)?.map((item: any) => {
              return (
                <Tag
                  key={item}
                  onClick={() => {
                    setSelectSecondType(item);
                  }}
                  plain
                  background="#666"
                >
                  {item}
                </Tag>
              );
            })}
        </Space>
        <Grid columns={5}>
          {icones?.categories &&
            icones.categories[
              selectSecondType || Object.keys(icones.categories)[0]
            ].map((item) => {
              return (
                <Grid.Item
                  className="flex flex-col"
                  key={item}
                  onClick={() => {
                    setVisible(true);
                    setSelectIcon({
                      src: `https://api.iconify.design/${type}/${item}.svg`,
                      name: item,
                    });
                  }}
                >
                  <Image
                    lazyLoad
                    fadeIn
                    showMenuByLongpress
                    className="w-[50px] h-[50px]"
                    src={`https://api.iconify.design/${type}/${item}.svg`}
                  />
                </Grid.Item>
              );
            })}
        </Grid>
      </View>
      <Overlay
        visible={visible}
        onClick={() => {
          setVisible(false);
        }}
        className="center flex flex-col gap-4 backdrop-blur-sm "
      >
        <Image
          onClick={() => {
            setVisible(false);
          }}
          lazyLoad
          fadeIn
          showMenuByLongpress
          className="rounded-full bg-white/50  w-[500px] h-[500px] p-12"
          src={selectIcon?.src}
        />
        <View className="text-2xl text-center text-light">
          {selectIcon?.name}
        </View>
      </Overlay>
    </View>
  );
}

export default Icones;
