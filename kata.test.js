import kata from "./kata";

describe("Kata Calculator", () => {
  const sut = new kata();
  it("Should sum an empty string", () => {
    const result = sut.add("");
    expect(result).toBe(0);
  });
});
