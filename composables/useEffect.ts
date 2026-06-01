import { Effect } from "effect";
export const useEffect = () => {
  const add = (x: number) => (x > 0 ? Effect.succeed(x) : Effect.fail("x must be positive"));
  const add2 = (x: number) => (x > 10 ? Effect.succeed(x) : Effect.fail("x must be greater than 10"));
  return { add, add2 };
};
