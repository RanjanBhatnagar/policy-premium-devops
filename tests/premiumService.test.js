const { calculatePremium } = require("../src/premiumService");

describe("Premium Calculation", () => {
  test("should calculate premium for normal age", () => {
    const result = calculatePremium(30, 1000000);

    expect(result).toBe(6000);
  });

  test("should apply age loading above 35", () => {
    const result = calculatePremium(40, 1000000);

    expect(result).toBe(7500);
  });

  test("should apply higher loading above 50", () => {
    const result = calculatePremium(60, 1000000);

    expect(result).toBe(9000);
  });

  test("should reject invalid age", () => {
    expect(() => calculatePremium(0, 1000000)).toThrow(
      "Age must be greater than zero",
    );
  });
});
