import request from "../utils/request";

export async function getTestData() {
  return request.get({
    // url: "https://icones.netlify.app/collections/bxl-meta.json",
    url: "https://api.iconify.design/openmoji.css?icons=apple",
  });
}
export async function getTestData1() {
  return request.get({
    url: "https://api.iconify.design/collections",
  });
}

export async function getTestData2(item: string) {
  return request.get({
    // url: `https://api.iconify.design/collections?prefixes=${item}&pretty=1`,
    url: `https://api.iconify.design/collection?prefix=${item}&pretty=1`,
  });
}
