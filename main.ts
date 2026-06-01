import { Effect, Schedule, Either, pipe, Exit, Data, Stream, Chunk } from "effect";
import { Err } from "monads";
import { never } from "npm:effect/Fiber";
import { cons } from "npm:effect/List";
import { runSyncExit } from "npm:effect/Runtime";

console.log("Hello, world!");

const data = [1, 2, 3, null];

const odd = data.filter((n) => n % 2 !== 0);

// const fun1 = (num: number): Effect.Effect<never, string, number> =>
//   num > 0 ? Effect.succeed(num + 1) : Effect.dieMessage("error");

// const double = (num: number) => Effect.unit;

// const fun2 = (num: number) => Effect.orElse(fun1(num), () => Effect.succeed(0));

// const isLessThan2 = (n: number) =>
//   Effect.try({
//     try: () => {
//       if (n < 2) throw "不是質數";
//       else return n;
//     },
//     catch: (e) => e as string,
//   });

// const loopCheck = (n: number) =>
//   Effect.loop(2, {
//     while: (i) => i * i <= n && n % i !== 0,
//     step: (i) => i + 1,
//     body: (_) => Effect.succeed(1),
//   });

// const isPrime = (n: number) =>
//   isLessThan2(n).pipe(
//     Effect.flatMap(loopCheck),
//     Effect.flatMap((_) => (_.length == n ? Effect.succeed("yes") : Effect.fail("不是質數")))
//   );

// const result = Effect.runSyncExit(isPrime(7));

// Exit.match(result, {
//   onSuccess: (a) => console.log(a),
//   onFailure: (e) => console.log(e),
// });

// const add = (a: number): Effect.Effect<never, string, number> => (a > 0 ? Effect.succeed(a + 1) : Effect.fail("error"));

// const add2 = (a: number): Either.Either<string, number> => (a > 0 ? Either.right(a + 1) : Either.left("error"));

// const fun3 = (num: number) => Effect.sync(() => num);
// const fun4 = (num: number) =>
//   Effect.if(num % 2 === 0, { onTrue: Effect.succeed(num * 2), onFalse: Effect.succeed(num) });

// const fun5 = (num: number) =>
//   Effect.loop(num, {
//     while: (n) => n > 0,
//     step: (n) => n - 1,
//     body: (n) => Effect.succeed(n),
//   });

// const fun6 = (nums: number[]) => nums.reduce((acc, curr) => acc + curr, 0);

// const funResult = (num: number) =>
//   Effect.runSync(pipe(Effect.succeed(num), Effect.flatMap(fun4), Effect.flatMap(fun5), Effect.map(fun6)));

// console.log(`result:${funResult(12)}`);

// const p1 = pipe(add(7), Effect.flatMap(add2));
// const p2 = Effect.match(p1, {
//   onSuccess: (a) => a,
//   onFailure: (e) => e,
// });

// const program = Effect.log("Application started");

// const result = Effect.runSync(program);

// console.log(result);
