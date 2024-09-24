import React, { useState } from "react";
import Compensation from "./Compensation";
import PercentageGraph from "./PercentageGraph";
import RatingsList from "./RatingsList";
import VaMath from "./VaMath";

export default function PercentageGrid() {
  const [rating, setRating] = useState(0); // Combined rating
  const [selectedRatings, setSelectedRatings] = useState([]); // List of individual ratings

  const addRatingClick = (e) => {
    const value = parseInt(e.target.value);
    // Update the selected ratings list
    setSelectedRatings((prevRatings) => [...prevRatings, value]);

    // Update the combined rating using VA math
    setRating((prevRating) => {
      const updatedRatings = [...selectedRatings, value];
      return calculateVaMath(updatedRatings);
    });
  };

  const calculateVaMath = (ratings) => {
    let combinedRating = 0;
    let remainingPercentage = 100;

    // Sort ratings in descending order
    ratings.sort((a, b) => b - a);

    // Apply VA math logic
    ratings.forEach((rating) => {
      let ratingImpact = (remainingPercentage * rating) / 100;
      combinedRating += ratingImpact;
      remainingPercentage -= ratingImpact;
    });

    return Math.min(combinedRating, 100); // Ensure the rating does not exceed 100
  };

  // Reset function to clear selected ratings and reset the rating
  const resetRating = () => {
    setRating(0);
    setSelectedRatings([]); // Clear the list when reset
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          border: "solid yellow",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "solid blue",
            width: "50%",
          }}
        >
          <PercentageGraph rating={rating.toFixed()} />
          <div
            className="row"
            style={{ backgroundColor: "lightblue", padding: 10, margin: 5 }}
          >
            <p
              style={{
                textAlign: "center",
                padding: 0,
                margin: 0,
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              <VaMath selectedRatings={selectedRatings} />
            </p>
          </div>
        </div>
        <div style={{ border: "solid red", width: "50%" }}>
          <Compensation rating={Math.round(rating)} />{" "}
          {/* Round rating for compensation */}
        </div>
      </div>
      {/* Display the selected ratings in a separate component */}
      <RatingsList selectedRatings={selectedRatings} />

      <button className="btn btn-primary" onClick={resetRating}>
        Reset
      </button>
      <div className="row justify-content-center">
        <button
          type="button"
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="10"
          onClick={addRatingClick}
        >
          10%
        </button>
        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="20"
          onClick={addRatingClick}
        >
          20%
        </button>
        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="30"
          onClick={addRatingClick}
        >
          30%
        </button>

        <div className="w-100"></div>

        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="40"
          onClick={addRatingClick}
        >
          40%
        </button>
        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="50"
          onClick={addRatingClick}
        >
          50%
        </button>
        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="60"
          onClick={addRatingClick}
        >
          60%
        </button>

        <div className="w-100"></div>

        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="70"
          onClick={addRatingClick}
        >
          70%
        </button>
        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="80"
          onClick={addRatingClick}
        >
          80%
        </button>
        <button
          className="col-sm-2 mx-1 my-1 btn btn-info"
          value="90"
          onClick={addRatingClick}
        >
          90%
        </button>
      </div>
    </>
  );
}
