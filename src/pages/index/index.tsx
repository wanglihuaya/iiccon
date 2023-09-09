import { Cell } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";

import { getTestData, getTestData1, getTestData2 } from "@/services";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

function Index() {
  const [iconTypes, setIconTypes] = useState([]);
  const [iconNine, setIconNine] = useState<any>([]);
  const [cssData, setCssData] = useState({} as any);

  const init = async () => {
    const nowIconList: any = [];
    try {
      const res = await getTestData();

      const res1 = await getTestData1();

      // console.log("res", res1, Object.keys(res1).length);
      const allType = Array.from(
        new Set(
          Object.keys(res1).map((item) => {
            return res1[item].category;
          })
        )
      );
      // 将所有的 icon 分类
      allType.forEach((item) => {
        const _list = Object.keys(res1).filter((item1) => {
          return res1[item1].category === item;
        });
        // console.log("item", item, _list);
        let icones: any = [];
        _list.forEach((item1) => {
          icones.push({
            name: item1,
            license: res1[item1].license,
            author: res1[item1].author,
            total: res1[item1].total,
            category: res1[item1].category,
            samples: res1[item1].samples,
          });
        });
        // console.log("icones", icones);
        nowIconList.push({
          type: item,
          list: icones,
          number: _list.length,
        });
      });
      // console.log("nowIconList", nowIconList);
      setIconTypes(nowIconList);

      // 获取 res1 所有的 key
      // const setList = Object.keys(res1).slice(0, 5);
      const requests = Object.keys(res1).map(async (item) => {
        const res2: any = await getTestData2(item);
        let iconesNine = [];
        if (res2?.uncategorized?.length > 0) {
          iconesNine = res2.uncategorized.slice(0, 9);
        } else if (
          res2?.categories &&
          Object.keys(res2?.categories)?.length > 0
        ) {
          iconesNine = res2?.categories[Object.keys(res2?.categories)[0]].slice(
            0,
            9
          );
        }
        return {
          type: item,
          iconesNine,
        };
      });

      Promise.all(requests).then((resAll) => {
        // console.log(resAll);
        setIconNine(resAll);
      });

      const matches = res.match(/url\((.*)\);/)[1];
      setCssData(matches);
    } catch (error) {}
  };

  useEffect(() => {
    init();
  }, []);

  const iconNineList = (typeName: string) => {
    return iconNine?.find((item) => item.type === typeName)?.iconesNine;
  };

  return (
    <View className="mb-32 p-4">
      {/* <View className="index">
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
      </View> */}
      {/* <View
        style={{
          backgroundImage: `url(${cssData})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[100px] h-[100px]"
      /> */}
      {iconTypes.map((item: any, index) => {
        return (
          <View key={index}>
            <View className="text-2xl">{item.type}</View>
            <View className="text-xs text-[#666]">{item.number} types</View>
            {item?.list?.map((item1, index1) => {
              return (
                <View
                  key={index1 + index}
                  onClick={() => {
                    Taro.navigateTo({
                      url: `/pages/icones/index?type=${item1.name}&author=${item1?.author?.name}&license=${item1?.license?.title}&total=${item1?.total}`,
                    });
                  }}
                >
                  <Cell
                    className="border-2 border-[#e2e2e2] border-solid"
                    title={item1.name}
                    description={
                      <>
                        <View>{item1?.author?.name}</View>
                        <View>{item1?.license?.title}</View>
                        <View>{item1?.total} icones</View>
                      </>
                    }
                    extra={
                      <View className="flex flex-wrap gap-2 w-[160px]">
                        {/* iconNine 中的 item1.name */}
                        {iconNineList(item1.name)?.map((item2, index2) => {
                          return (
                            <Image
                              key={index2 + "iconNine"}
                              lazyLoad
                              fadeIn
                              showMenuByLongpress
                              className="w-[40px] h-[40px]"
                              src={`https://api.iconify.design/${item1.name}/${item2}.svg`}
                            />
                          );
                        })}
                      </View>
                    }
                  />
                </View>
              );
            })}
          </View>
        );
      })}
      {/* <Image src="https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg" /> */}
    </View>
  );
}

export default Index;
