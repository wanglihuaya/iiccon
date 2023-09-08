import { getTestData2 } from "@/services";
import { Grid } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

function Icones() {
  const options: any = Taro.getCurrentInstance()?.page?.options;
  const { type, author, total, license } = options;
  const [icones, setIcones] = useState([] as any);
  const [selectSecondType, setSelectSecondType] = useState("");
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
    <View className="">
      <View>{type}</View>
      <View>{author}</View>
      <View>{license}</View>
      <View>{total}</View>
      <View>
        {icones?.categories &&
          Object.keys(icones?.categories)?.map((item: any) => {
            return (
              <View
                className="flex flex-col"
                key={item}
                onClick={() => {
                  setSelectSecondType(item);
                }}
              >
                <View>{item}</View>
              </View>
            );
          })}
        {icones?.prefixes &&
          Object.keys(icones?.prefixes)?.map((item: any) => {
            return (
              <View
                className="flex flex-col"
                key={item}
                onClick={() => {
                  setSelectSecondType(item);
                }}
              >
                <View>{item}</View>
              </View>
            );
          })}
        <Grid>
          {icones?.categories &&
            icones.categories[
              selectSecondType || Object.keys(icones.categories)[0]
            ].map((item) => {
              return (
                <Grid.Item className="flex flex-col" key={item}>
                  <Image
                    lazyLoad
                    fadeIn
                    showMenuByLongpress
                    className="w-[70px] h-[70px]"
                    src={`https://api.iconify.design/${type}/${item}.svg`}
                  />
                </Grid.Item>
              );
            })}
        </Grid>
      </View>
    </View>
  );
}

export default Icones;
