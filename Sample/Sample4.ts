import { Effect, pipe, Exit, Match } from "effect";
import axios, { AxiosError } from "axios";
import * as R from "ramda";

type Data = {
  id: number;
  title: string;
  body: string;
};

const getData = (id: number) =>
  pipe(
    Effect.tryPromise({
      try: () => axios.get<Data>(`https://jsonplaceholder.typicode.com/posts/${id}`),
      catch: (error) => error,
    }),
    Effect.map((response) => response.data),
  );

Exit.match(await Effect.runPromiseExit(getData(9999)), {
  onSuccess: (data) => {
    console.log("Success:", data);
  },
  onFailure: (error) => {
    console.error("Failure:", error);
  },
});

const result = (err: object) =>
  Match.value(err).pipe(
    Match.when(
      (value) => Object.hasOwn(value, "response"),
      (value) => (value as AxiosError).response!.data as string,
    ),
    Match.when(
      (value) => Object.hasOwn(value, "request"),
      (value) => (value as AxiosError).request as string,
    ),
    Match.when(
      (_) => true,
      (value) => (value as AxiosError).message,
    ),
  );
