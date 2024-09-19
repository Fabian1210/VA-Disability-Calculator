import React, { useState } from "react";
import Compensation from "./Compensation";
import PercentageGraph from "./PercentageGraph";
import RatingsList from "./RatingsList"; // Import the RatingList component

export default function PercentageGrid() {
  const [rating, setRating] = useState(0);

  // New state for the selected ratings list
  const [selectedRatings, setSelectedRatings] = useState([]);

  const addRatingClick = (e) => {
    const value = parseInt(e.target.value);

    // Add value to the selectedRatings list
    setSelectedRatings((prevRatings) => [...prevRatings, value]);

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

  // Function to remove a rating from the list when clicked
  const removeRatingClick = (valueToRemove) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.filter((rating) => rating !== valueToRemove)
    );
  };

  //reset rating to 0
  const resetRating = () => {
    setRating(0);
    setSelectedRatings([]); // Clear the list when reset
  };

  return (
    <>
      <PercentageGraph rating={rating.toFixed()} />
      <Compensation rating={rating} />
      {/* Display the selected ratings in a separate component */}
      <RatingsList
        selectedRatings={selectedRatings}
        removeRatingClick={removeRatingClick}
      />

      <div
        className="row"
        style={{ backgroundColor: "lightblue", padding: 10, margin: 5 }}
      >
        Combined Rating: {rating.toFixed()}%
      </div>
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

        <div classname="w-100"></div>

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
