import { Ok, Err } from "monads";
export const useAddMonads = () => {
  const add = (a: number, b: number) =>
    a > 0 && b > 0 ? Ok(a + b) : Err("Both numbers must be positive");
  return { add };
};
