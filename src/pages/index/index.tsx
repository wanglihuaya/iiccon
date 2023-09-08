import { Cell, Overlay } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";

import { getTestData, getTestData1, getTestData2 } from "@/services";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

function Index() {
  const [iconTypes, setIconTypes] = useState([]);
  const [cssData, setCssData] = useState({} as any);
  const [iconList, setIconList] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [selectIcon, setSelectIcon] = useState("");

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
      const setList = Object.keys(res1).slice(0, 5);
      const requests = setList.map(async (item) => {
        const res2: any = await getTestData2(item);
        console.log("res2", res2);
        return {
          name: item,
          title: res2.title,
          categories: res2?.categories,
          prefixes: res2?.prefixes,
          uncategorized: res2?.uncategorized,
          hidden: res2?.hidden,
          aliases: res2?.aliases,
          suffixes: res2?.suffixes,
        };
      });

      Promise.all(requests).then((resAll) => {
        console.log(resAll);
        setIconList(resAll);
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
    <View className="mb-32 p-4">
      asdasd
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
            <View>{item.number}个</View>
            <View>
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
                      title={item1.name}
                      description={
                        <>
                          <View>{item1?.author?.name}</View>
                          <View>{item1?.license?.title}</View>
                          <View>{item1?.total} icones</View>
                        </>
                      }
                      extra="描述文字"
                    />
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
      {/* <Image src="https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg" /> */}
      {/* {iconList.map((item: any, index) => {
        return (
          <View key={index}>
            <View className="text-2xl">{item.title}</View>
            <View>
              {item?.categories &&
                Object.keys(item?.categories)?.length > 0 &&
                Object.keys(item?.categories).map((item1, index1) => {
                  return (
                    <View key={index1 + index}>
                      <View>{item1}</View>
                    </View>
                  );
                })}
              {item?.suffixes &&
                Object.keys(item?.suffixes)?.length > 0 &&
                Object.keys(item?.suffixes).map((item1, index1) => {
                  return (
                    <View key={index1 + index}>
                      <View>{item1}</View>
                    </View>
                  );
                })}
              {item?.prefixes &&
                Object.keys(item?.prefixes)?.length > 0 &&
                Object.keys(item?.prefixes).map((item1, index1) => {
                  return (
                    <View key={index1 + index}>
                      <View>{item1}</View>
                    </View>
                  );
                })}
            </View>
          </View>
        );
      })} */}
      {/* <Grid>
        <Grid.Item>
          <Image
            lazyLoad
            fadeIn
            showMenuByLongpress
            className="w-[70px] h-[70px]"
            src={`https://api.iconify.design/${
              Object.keys(item?.categories)[0]
            }/${item1}.svg`}
          />
        </Grid.Item>
      </Grid> */}
      {/* <Grid>
        {iconList.map((item: any, index) => {
          const _list = item.list.slice(0, 500);
          return _list.map((item1: any, index1) => {
            return (
              <View key={index1 + index}>
                {item.title && (
                  <View className="text-2xl text-center">{item.title}</View>
                )}
                <Grid.Item
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
                </Grid.Item>
              </View>
            );
          });
        })}
      </Grid> */}
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
          className="backdrop-blur-sm rounded-full bg-white/50  w-[500px] h-[500px] p-12"
          src={selectIcon}
        />
      </Overlay>
    </View>
  );
}

export default Index;
