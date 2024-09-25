import React from "react";

export default function Compensation({ rating }) {
  const values = {
    10: 171.23,
    20: 338.49,
    30: 524.31,
    40: 755.28,
    50: 1075.16,
    60: 1361.88,
    70: 1716.28,
    80: 1995.01,
    90: 2241.91,
    100: 3737.85,
  };
  // Function to round up to the nearest compensation bracket
  const getCompensationTier = (rating) => {
    // if (rating < 10) return 10; // Minimum rating is 10%

    // Round up to the nearest tier
    const roundedRating = Math.ceil(rating / 10) * 10;
    return Math.min(roundedRating, 100); // Ensure it doesn't exceed 100%
  };

  const compensationTier = getCompensationTier(rating);
  const monthlyComp = values[compensationTier] || 0;
  return (
    <>
      <div>
        <div
          style={{
            color: "#11cc00",
            textAlign: "center",
            padding: 10,
            margin: 5,
            fontSize: "26px",
          }}
        >
          <p>
            Monthly Compensation: <br />${monthlyComp.toFixed(2)}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://www.va.gov/disability/compensation-rates/veteran-rates/"
            target="_blank"
          >
            2024 VA Disability Rates
          </a>
        </div>
      </div>
    </>
  );
}
