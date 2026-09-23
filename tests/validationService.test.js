const { validatePolicy } = require("../src/validationService");

describe("Policy Validation", () => {
  test("valid policy should pass", () => {
    const result = validatePolicy({
      customerName: "Rahul",
      age: 30,
      coverageAmount: 1000000,
    });

    expect(result.valid).toBe(true);
  });

  test("missing customer name should fail", () => {
    const result = validatePolicy({
      age: 30,
      coverageAmount: 1000000,
    });

    expect(result.valid).toBe(false);
  });
});
