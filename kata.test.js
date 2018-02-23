import kata from "./kata";

describe("Kata Calculator", () => {
  const sut = new kata();
  it("Should sum an empty string", () => {
    const result = sut.add("");
    expect(result).toBe(0);
  });
  it("Should return the same number", () => {
    const result = sut.add("2");
    expect(result).toBe(2);
  });
  it("Should sum two numbers", () => {
    const result = sut.add("1,2");
    expect(result).toBe(3);
  });
  it("Should sum any list of numbers", () => {
    const result = sut.add("1,2,3");
    expect(result).toBe(6);
  });
  it("Should sum any list of numbers with new line", () => {
    const result = sut.add("1\\n2,3");
    expect(result).toBe(6);
  });
  it("Should support different delimeter", () => {
    const result = sut.add("//;\n1;2");
    expect(result).toBe(3);
  });
  it("Should thrown an exception on negative numbers", () => {
    expect(sut.add("-1")).toThrow("Negatives not allowed -1");
  });
});
