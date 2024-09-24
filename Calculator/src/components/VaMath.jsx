import React from "react";

export default function VaMath({ selectedRatings }) {
  const calculateVaMath = (ratings) => {
    if (ratings.length === 0) return 0;

    let remainingPercentage = 100;
    let totalCombinedRating = 0;

    ratings.sort((a, b) => b - a); // Sort ratings in descending order

    for (let i = 0; i < ratings.length; i++) {
      const currentRating = ratings[i];
      const disabilityImpact =
        (currentRating / 100) * (remainingPercentage / 100);
      totalCombinedRating += disabilityImpact * 100;
      remainingPercentage -= disabilityImpact * 100;
    }

    return totalCombinedRating.toFixed();
  };

  const combinedRating = calculateVaMath(selectedRatings);

  return (
    <div>
      <p>
        Unadjusted Aggregate Rating: <br />
        {combinedRating}%
      </p>
    </div>
  );
}
