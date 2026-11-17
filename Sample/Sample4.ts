import { Effect, pipe, Exit,Cause, Match } from "effect";
import axios, { AxiosError } from "axios";

// 定義資料型別
type Data = {
  id: number;
  title: string;
  body: string;
};


// 如果有response,則回傳 statusText
const hasResponseAndstatusText = Match.when(
      (value:object) => Object.hasOwn(value, "response"),
      (value:object) => (value as AxiosError).response!.statusText,
    )
  
// 如果沒有 response，則回傳錯誤訊息
const elseReturnMessage = Match.orElse((value) => (value as AxiosError).message)

// 將 Axios 錯誤轉換為字串
const transformError = (error: object) =>
  Match.value(error).pipe(
    // 如果有 response 屬性，表示是 Axios 錯誤，回傳 statusText
    hasResponseAndstatusText,
    // 否則回傳錯誤訊息
    elseReturnMessage
  );

// 從webapi取得資料
const getData = (url:string) => (id: number) =>
  pipe(
    Effect.tryPromise({
      try: () => axios.get<Data>(`${url}/${id}`),
      catch: (error) => error as object
    }),
    Effect.map((response) => response.data),
    Effect.mapError(transformError)
  );

// 以下開始執行三種情形 //

console.log("執行成功的資料")
Exit.match(await Effect.runPromiseExit(getData("https://jsonplaceholder.typicode.com/posts")(1)), {
  onSuccess: (data) => {
    console.log("Success:", data);
  },
  onFailure: (error) => {
    console.error("Failure:", Cause.squash(error) as string);
  },
});

console.log("執行webapi正常但找不到資料的錯誤")
Exit.match(await Effect.runPromiseExit(getData("https://jsonplaceholder.typicode.com/posts")(9999)), {
  onSuccess: (data) => {
    console.log("Success:", data);
  },
  onFailure: (error) => {
    console.error("Failure:", Cause.squash(error) as string);
  },
});

console.log("執行服務不存在的情形")
Exit.match(await Effect.runPromiseExit(getData("https://xxxxxx.typicode.com/posts")(1)), {
  onSuccess: (data) => {
    console.log("Success:", data);
  },
  onFailure: (error) => {
    console.error("Failure:", Cause.squash(error) as string);
  },
});

  
  
