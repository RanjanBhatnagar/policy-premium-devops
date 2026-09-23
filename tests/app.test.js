const request = require("supertest");

const app = require("../src/app");

describe("Policy Premium API", () => {
  test("GET /health should return healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.status).toBe("Healthy");
  });

  test("POST /api/policies/premium should calculate premium", async () => {
    const response = await request(app).post("/api/policies/premium").send({
      customerName: "Rahul",
      age: 30,
      coverageAmount: 1000000,
    });

    expect(response.statusCode).toBe(200);

    expect(response.body.annualPremium).toBe(6000);
  });
});
