import summing from "./summing";

describe("summing", () => {
  test("should sum 1 and 2", () => {
    expect(summing(1,2)).toBe(3);
  });
});