import React, { useState } from "react";

export default function PercentageGrid() {
  const [rating, setRating] = useState(0);

  const addRatingClick = (e) => {
    const value = parseInt(e.target.value);

    //convert btn value to number
    setRating((prevRating) => {
      const combinedRating = prevRating + value;
      //todo: temporary math logic to not exceed 100. will need to apply correct formula
      if (combinedRating >= 100) {
        //stops count from exceeding 100
        return 100;
      } else {
        return combinedRating;
      }
    });
  };
  return (
    <>
      <div>Combined rating: {rating.toFixed()}%</div>
      <div>
        <button value="10" onClick={addRatingClick}>
          10%
        </button>
        <button value="20" onClick={addRatingClick}>
          20%
        </button>
        <button value="30" onClick={addRatingClick}>
          30%
        </button>
        <button value="40" onClick={addRatingClick}>
          40%
        </button>
        <button value="50" onClick={addRatingClick}>
          50%
        </button>
        <button value="60" onClick={addRatingClick}>
          60%
        </button>
        <button value="70" onClick={addRatingClick}>
          70%
        </button>
        <button value="80" onClick={addRatingClick}>
          80%
        </button>
        <button value="90" onClick={addRatingClick}>
          90%
        </button>
        <button value="100" onClick={addRatingClick}>
          100%
        </button>
      </div>
    </>
  );
}
