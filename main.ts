import { useAddMonads } from "./composables/useAddMonads.ts";
const { add, square, half } = useAddMonads();

add(2, 3)
  .map(square)
  .map(half)
  .match({
    ok: (n) => console.log(`Result: ${n}`),
    err: (s) => console.log(`Error: ${s}`),
  });
