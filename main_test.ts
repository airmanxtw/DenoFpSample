import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import { useAddMonads } from "./composables/useAddMonads.ts";
const { add } = useAddMonads();

Deno.test(function addTest() {
  assertEquals(add(2, 3).unwrap(), 5);
});
