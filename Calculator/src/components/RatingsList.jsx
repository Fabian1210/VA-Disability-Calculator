import React from "react";

export default function RatingsList({ selectedRatings }) {
  return (
    <div
      style={{
        // border: "solid green",
        paddingBottom: "5px",
        display: "flex",
        flexWrap: "wrap",
        width: "90%",
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
            style={{
              listStyleType: "none", // Remove bullet points
              cursor: "default",
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
