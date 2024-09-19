import React from "react";

export default function RatingsList({ selectedRatings, removeRatingClick }) {
  return (
    <div
      style={{
        // border: "solid green",
        display: "flex",
        flexWrap: "wrap",
        width: "40%",
      }}
    >
      <ul
        style={{
          display: "flex",
          //   flexDirection: "row",
          padding: 0,
          margin: 0,
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {selectedRatings.map((rating, index) => (
          <li
            key={index}
            onClick={() => removeRatingClick(rating)}
            style={{
              listStyleType: "none", // Remove bullet points
              cursor: "pointer",
              padding: "10px", // Add padding inside each item
              borderRadius: "5px", // Optional: rounding the corners for styling
              backgroundColor: "coral", // Add background for better visibility
            }}
          >
            {rating}%
          </li>
        ))}
      </ul>
    </div>
  );
}
