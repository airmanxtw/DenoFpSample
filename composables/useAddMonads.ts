import { Ok, Err, Result } from "monads";
export const useAddMonads = () => {
  const add = (a: number, b: number): Result<number, string> =>
    a > 0 && b > 0 ? Ok(a + b) : Err("Both numbers must be positive");
  const square = (a: number) => a * a;
  const half = (a: number) => a / 2;
  return { add, square, half };
};
