export const useAdd1 = () => {
  const add1 = (a: number, b: number) => {
    if (a > 0 && b > 0) {
      return a + b;
    } else {
      throw new Error("Both numbers must be positive");
    }
  };
  return { add1 };
};
