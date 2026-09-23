function validatePolicy(policy) {
  const errors = [];

  if (!policy.customerName) {
    errors.push("Customer name is required");
  }

  if (!policy.age) {
    errors.push("Age is required");
  }

  if (policy.age <= 0) {
    errors.push("Age must be greater than zero");
  }

  if (!policy.coverageAmount) {
    errors.push("Coverage amount is required");
  }

  if (policy.coverageAmount <= 0) {
    errors.push("Coverage amount must be greater than zero");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

module.exports = {
  validatePolicy,
};
