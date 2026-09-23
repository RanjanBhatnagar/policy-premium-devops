function calculatePremium(age, coverageAmount) {
  if (age <= 0) {
    throw new Error("Age must be greater than zero");
  }

  if (coverageAmount <= 0) {
    throw new Error("Coverage amount must be greater than zero");
  }

  const baseRate = 5000;

  let ageLoading = 0;

  if (age > 50) {
    ageLoading = 3000;
  } else if (age > 35) {
    ageLoading = 1500;
  }

  const coverageLoading = coverageAmount / 1000;

  return baseRate + ageLoading + coverageLoading;
}

module.exports = {
  calculatePremium,
};
