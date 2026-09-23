const express = require("express");

const { calculatePremium } = require("./premiumService");

const { validatePolicy } = require("./validationService");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    application: "Policy Premium Calculator",
    version: "1.0.0",
    status: "Running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "Healthy",
    service: "Policy Premium Service",
  });
});

app.post("/api/policies/premium", (req, res) => {
  const validation = validatePolicy(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validation.errors,
    });
  }

  const premium = calculatePremium(req.body.age, req.body.coverageAmount);

  res.json({
    customerName: req.body.customerName,
    age: req.body.age,
    coverageAmount: req.body.coverageAmount,
    annualPremium: premium,
  });
});

module.exports = app;
