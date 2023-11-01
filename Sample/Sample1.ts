import { useAdd1 } from "../composables/useAdd1.ts";
const { add1 } = useAdd1();
try{
    console.log(add1(1, 2));
}
catch(e){
    console.log(e.message);
}