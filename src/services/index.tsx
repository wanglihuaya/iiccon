import request from "../utils/request";

export async function getTestData1() {
  return request.get({
    url: "https://api.commands.top/api/collections",
  });
}

export async function getTestData2(item: string) {
  return request.get({
    url: `https://api.commands.top/api/collection/${item}`,
  });
}
