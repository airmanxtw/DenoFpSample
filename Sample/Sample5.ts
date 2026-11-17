import axios, { AxiosError } from "axios";

// 定義資料型別
type Data = {
  id: number;
  title: string;
  body: string;
};

const transformError = (error: object) => {
  if (Object.hasOwn(error, "response")) {
    return (error as AxiosError).response!.statusText;
  } else {
    return (error as AxiosError).message;
  }
}

const getData = (url: string) => (id: number) =>
  axios.get<Data>(`${url}/${id}`)
    .then(response => response.data)
    .catch(error => {
      throw transformError(error);
    });

console.log("執行成功的資料");
getData("https://jsonplaceholder.typicode.com/posts")(1)
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Failure:", error));

console.log("執行webapi正常但找不到資料的錯誤");
getData("https://jsonplaceholder.typicode.com/posts")(9999)
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Failure:", error));

console.log("執行服務不存在的情形");
getData("https://xxxxxx.typicode.com/posts")(1)
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Failure:", error));

