import request from "../utils/request";

export async function getTestData(date: string) {
  return request.get({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      date,
    },
  });
}
