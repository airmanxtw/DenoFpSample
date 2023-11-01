import { useAddMonads } from "../composables/useAddMonads.ts";
const { add } = useAddMonads();
add(1, 2).match({
    ok: (res) => console.log(`success:${res}`),
    err: (e) => console.log(`error:${e}`),
});
