import request from "../utils/request";

export async function getTestData() {
  return request.get({
    // url: "https://icones.netlify.app/collections/bxl-meta.json",
    url: "https://api.iconify.design/openmoji.css?icons=apple",
  });
}
