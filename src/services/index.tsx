import request from "../utils/request";

export async function getTestData() {
  return request.get({
    // url: "https://icones.netlify.app/collections/bxl-meta.json",
    url: "https://api.iconify.design/openmoji.css?icons=apple",
  });
}
export async function getTestData1() {
  return request.get({
    url: "https://commands.top/api/collections",
  });
}

export async function getTestData2(item: string) {
  return request.get({
    url: `https://commands.top/api/collection/${item}`,
  });
}
